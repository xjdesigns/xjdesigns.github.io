import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Toaster extends Component {
  render () {
    const { isToastOpen } = this.props

    return (
      <div className={`spx-toaster ${isToastOpen ? 'is-open' : ''}`}>
        <div className="spx-toast is-success">
          <p>This was successful</p>
        </div>
        <div className="spx-toast is-error">
          <p>This was an error</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { layout } = state
  const { isToastOpen } = layout

  return {
    isToastOpen,
  }
}

export default connect(mapStateToProps)(Toaster)
