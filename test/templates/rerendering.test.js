import jsx from '../../lib/jsx'
import { bind } from '../../lib/templates/Bound'
import { assert } from 'chai'
import { createTestDom, domToString } from '../support/testDom'

describe('Rerendering combined template type', () => {
  it.only('with a changing list', () => {
    const List = ({ items }) => {
      return (
        <>
          <h1>Todo</h1>
          <ul>
            <ListItems items={items} />
          </ul>
        </>
      )
    }

    const ListItems = ({ items }) => {
      return items.map((item) => <Item item={item} />)
    }

    const Item = ({ item }) => {
      return <li class={item.state}>{item.description}</li>
    }

    let todoItems = [
      { state: 'wip', description: 'Re-rendering' },
      { state: 'complete', description: 'Rendering' }
    ]
    const template = <List items={todoItems} />
    const document = createTestDom()
    const node = template.render({ document })
    assert.equal(
      domToString(node),
      '<div><h1>Todo</h1><ul><li class="wip">Re-rendering</li><li class="complete">Rendering</li></ul></div>'
    )


  })
})
