module.exports = {
  schema: './schema.json',
  // Documents are omitted due to schema mismatch
  documents: [],
  generates: {
    'src/types/graphql.d.ts': {
      plugins: ['typescript'],
    },
  },
};
