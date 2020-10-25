import jsx from '../../lib/jsx'

import { assert } from 'chai'

import { createTestDom, domToString } from '../support/testDom'

describe('Fragment Templates', () => {
  it('renders simple tag templates', () => {
    const template = (
      <> 
        <span>Hello</span>
        <b>World</b>
      </>
    )

    const document = createTestDom()
    const nodes = template.render({ document })

    assert.equal(
      domToString(nodes[0]),
      '<span>Hello</span>'
    )

    assert.equal(
      domToString(nodes[1]),
      '<b>World</b>'
    )
  })

  it('renders it as part of a larger complex view', () => {
    const WelcomeText = ({name}) => {
      return (
        <>
          <h2>Hi <em>{name}</em>!</h2>
          <p>It's great having you here with us.</p>
          <p>Thanks for joining!</p>
        </>
      )
    }

    const PageFrame = ({children}) => {
      return (
        <section class='page-frame'>
          {children}
        </section>
      )
    }

    const WelcomePage = ({name}) => {
      return (
        <PageFrame>
          <WelcomeText name={name} />
        </PageFrame>
      )
    }

    const template = <WelcomePage name='Kane' />

    const document = createTestDom()
    const dom = template.render({ document })

    assert.equal(
      domToString(dom),
      '<section class="page-frame"><h2>Hi <em>Kane</em>!</h2><p>It\'s great having you here with us.</p><p>Thanks for joining!</p></section>'
    )
  })
})