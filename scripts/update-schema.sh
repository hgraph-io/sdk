#!/usr/bin/env bash
set -euo pipefail

# Load environment variables from .env if present
if [ -f .env ]; then
  set -a
  source .env
  set +a
else
  echo "No .env file found"
  exit 1
fi

endpoint="${ENDPOINT}/v1/${API_KEY}/graphql"

# Assign the introspection query as a multi-line string safely
introspection_query=$(cat <<'EOF'
query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type { ...TypeRef }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
            }
          }
        }
      }
    }
  }
}
EOF
)

# Use jq to safely encode the query in JSON, if available
if command -v jq > /dev/null; then
  json_payload=$(jq -n --arg query "$introspection_query" '{query: $query}')
else
  # fallback: basic JSON encoding (less safe for some chars, but should work for most queries)
  json_payload="{\"query\":\"$(echo "$introspection_query" | sed ':a;N;$!ba;s/\n/\\n/g' | sed 's/"/\\"/g')\"}"
fi

curl -s -X POST \
  -H "Content-Type: application/json" \
  --data "$json_payload" \
  "$endpoint" \
  > schema.json

echo "GraphQL schema saved to schema.json"

# Format the downloaded schema using prettier if available
if command -v npx >/dev/null; then
  npx -y prettier --write schema.json
else
  echo "npx not found, skipping prettier formatting"
fi

# Generate updated TypeScript definitions from the new schema
if command -v npx >/dev/null; then
  npx -y graphql-codegen
else
  echo "npx not found, skipping type generation"
fi
