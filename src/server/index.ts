if (typeof window !== 'undefined')
  throw new Error(
    'It appears this is being run in a browser environment and is unsafe. Do not expose private keys on a front end!'
  )

import client from '../client'

export * from '../types'
export * from './auth'

export default client
