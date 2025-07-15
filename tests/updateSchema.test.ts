import {describe, it, expect} from '@jest/globals'
import {execSync} from 'child_process'
import fs from 'fs'
import path from 'path'

const root = path.resolve(__dirname, '..')
const schemaPath = path.join(root, 'schema.json')
const typesPath = path.join(root, 'src/types/graphql.d.ts')

function runCodegen() {
  execSync('npx graphql-codegen', {cwd: root, stdio: 'ignore'})
}

describe('update-schema script', () => {
  it('regenerates types when schema changes', () => {
    const originalSchema = fs.readFileSync(schemaPath, 'utf8')
    const originalTypes = fs.readFileSync(typesPath, 'utf8')

    try {
      const schema = JSON.parse(originalSchema)
      schema.data.__schema.types.push({
        kind: 'SCALAR',
        name: 'TestScalar',
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      })
      fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))

      runCodegen()

      const updatedTypes = fs.readFileSync(typesPath, 'utf8')
      expect(updatedTypes).toContain('TestScalar')
      expect(updatedTypes).not.toEqual(originalTypes)
    } finally {
      fs.writeFileSync(schemaPath, originalSchema)
      runCodegen()
    }
  })
})
