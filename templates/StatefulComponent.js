const StatefulComponent = `
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class [component] extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
  }

  render () {
    return ()
  }
}

export default [component]
`

module.exports = StatefulComponent
