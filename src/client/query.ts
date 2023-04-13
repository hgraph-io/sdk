import fetch from 'isomorphic-fetch'
import jmespath from 'jmespath'
import * as Hgraph from '../types'

// https://stackoverflow.com/questions/71361951/graphql-tag-how-to-get-the-actual-string-for-the-body-request
export default async (
  body: Hgraph.RequestBody,
  options: Hgraph.RequestOptions
) => {
  const {endpoint, headers} = options

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: body.query,
      variables: body.variables,
      operationName: body.operationName,
    }),
  })

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }

  const json = (await response.json()) as {data?: [{}]; errors?: [{}]}
  if (json.errors) throw new Error(JSON.stringify(json.errors))
  return options.filter ? jmespath.search(json, options.filter) : json
}
