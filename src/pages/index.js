import React from 'react'
import initStore from '../store'
import withRedux from 'next-redux-wrapper'
import { incrementYear } from '../actions'

class Page extends React.Component {
  static getInitialProps ({ isServer }) {
    return { title: 'heyah', year: 2000, isServer }
  }

  render () {
    return (
      <div>
        <h1>{this.props.title} </h1>
        <Footer year={this.props.year} onFooterClick={this.props.onFooterClick} />
      </div>
    )
  }
}

const Footer = ({ year, onFooterClick }) => (
  <footer>
    <a href='javacript:void(0)' onClick={onFooterClick}>Copyright {year}</a>
  </footer>
)

function mapStateToProps (state1) {
  let { year } = state1
  return { year }
}

function mapDispatchToProps (dispatch) {
  return {
    onFooterClick: () => {
      dispatch(incrementYear())
    }
  }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Page)
