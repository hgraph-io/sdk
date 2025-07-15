import {describe, it, expect, jest} from '@jest/globals'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import {HgraphProvider} from '../src/context/HgraphProvider'
import {useHgraph} from '../src/hooks/useHgraph'

function render(element: React.ReactElement) {
  TestRenderer.create(element)
}

describe('HgraphProvider and useHgraph', () => {
  it('provides client via context', () => {
    const client = {foo: 'bar'} as any
    let received: any
    function Test() {
      received = useHgraph()
      return null
    }
    render(
      <HgraphProvider client={client}>
        <Test />
      </HgraphProvider>
    )
    expect(received).toBe(client)
  })

  it('throws when no provider is present', () => {
    function Test() {
      useHgraph()
      return null
    }
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => {
      render(<Test />)
    }).toThrow()
    spy.mockRestore()
  })
})
