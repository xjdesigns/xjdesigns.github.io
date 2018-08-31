import React, { Component } from 'react'

export class Flyout extends Component {
  state = {
    isOpen: false,
  }

  static props = {
    alignment: 'left',
  }

  toggleFlyout = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      }
    })
  }

  render () {
    const { isOpen } = this.state
    const { alignment } = this.props

    return (
      <div className={`spx-flyout spx-flyout--${alignment} ${isOpen ? 'is-open' : ''}`}>
        <button className="spx-btn spx-btn--pr spx-btn--block" onClick={this.toggleFlyout}>Toggle Flyout</button>
        <div className="spx-flyout__menu">
          <ul>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Flyout
