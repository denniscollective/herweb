import React from 'react'
import initStore from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/layout'
import { setTitle } from '../actions'

class Page extends React.Component {
  static getInitialProps ({ store }) {
    store.dispatch(setTitle('I YAM A WEBSITE'))
    return {}
  }

  render () {
    return (
      <Layout >
        <div>I yam content</div>
      </Layout>
    )
  }
}

export default withRedux(initStore, (state) => state)(Page)
