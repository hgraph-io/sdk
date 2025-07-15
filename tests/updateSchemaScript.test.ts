import {describe, it, expect} from '@jest/globals'
import {spawnSync} from 'child_process'
import {mkdtempSync, writeFileSync, readFileSync, existsSync, mkdirSync, chmodSync} from 'fs'
import {tmpdir} from 'os'
import {join, resolve} from 'path'

const scriptPath = resolve(__dirname, '..', 'scripts', 'update-schema.sh')

function runScript(cwd: string, env?: NodeJS.ProcessEnv) {
  return spawnSync('bash', [scriptPath], {cwd, env})
}

describe('update-schema.sh script', () => {
  it('fails when .env file is missing', () => {
    const dir = mkdtempSync(join(tmpdir(), 'update-schema-no-env-'))
    const result = runScript(dir)
    expect(result.status).toBe(1)
    const output = (result.stdout.toString() + result.stderr.toString()).trim()
    expect(output).toContain('No .env file found')
  })

  it('writes schema.json using curl output', () => {
    const dir = mkdtempSync(join(tmpdir(), 'update-schema-'))
    writeFileSync(join(dir, '.env'), 'ENDPOINT=https://api.example.com\nAPI_KEY=test\n')

    const binDir = join(dir, 'bin')
    mkdirSync(binDir)

    const curlLog = join(dir, 'curl.log')
    const curlScript = join(binDir, 'curl')
    writeFileSync(
      curlScript,
      `#!/usr/bin/env bash\n` +
        `echo \"$@\" > \"${curlLog}\"\n` +
        `echo '{"data":{"__schema":{}}}'\n`
    )
    chmodSync(curlScript, 0o755)

    const npxScript = join(binDir, 'npx')
    writeFileSync(npxScript, '#!/usr/bin/env bash\nexit 0\n')
    chmodSync(npxScript, 0o755)

    const env = {...process.env, PATH: `${binDir}:${process.env.PATH}`}
    const result = runScript(dir, env)
    expect(result.status).toBe(0)
    expect(existsSync(join(dir, 'schema.json'))).toBe(true)
    const data = JSON.parse(readFileSync(join(dir, 'schema.json'), 'utf8'))
    expect(data).toEqual({data: {__schema: {}}})
    const args = readFileSync(curlLog, 'utf8')
    expect(args.trim().split(/\s+/).pop()).toBe('https://api.example.com/v1/test/graphql')
  })
})
