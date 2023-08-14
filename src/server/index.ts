if (typeof window !== 'undefined')
  throw new Error(
    'It appears this is being run in a browser environment and is unsafe. Do not expose private keys on a front end!'
  )

export * from '../types'
export * from '../utils'
export {default as default} from '../client'

export * from './auth'
