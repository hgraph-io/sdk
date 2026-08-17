import {describe, it, expect, jest} from '@jest/globals'
import React from 'react'
import TestRenderer, {act} from 'react-test-renderer'
import {HgraphProvider} from '../src/context/HgraphProvider'
import {useHgraph} from '../src/hooks/useHgraph'

// React 19 schedules rendering instead of flushing it inside create(), so the tree
// must be flushed in act() for render output and render-time throws to be observable.
function render(element: React.ReactElement) {
  act(() => {
    TestRenderer.create(element)
  })
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
