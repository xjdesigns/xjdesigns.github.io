import React, { Component } from 'react'

export class SidebarNav extends Component {
  children = []

  state = {
    isActive: false,
  }

  constructor (props) {
    super(props)

    if (Array.isArray(props.children)) {
      this.children = props.children
    } else {
      this.children = [props.children]
    }
  }

  toggleNavMenu = () => {
    this.setState(prevState => {
      return {
        isActive: !prevState.isActive,
      }
    })
  }

  render () {
    const { isActive } = this.state
    const { navTitle } = this.props

    return (
      <li onClick={this.toggleNavMenu} className={`has-menu ${isActive ? 'is-active' : ''}`}>
        {navTitle}
        <div className="app-nav-inner">
          <ul>
            {this.children.map((child, index) => {
              return (
                <li key={index}>
                  {child}
                </li>
              )
            })}
          </ul>
        </div>
      </li>
    )
  }
}

export default SidebarNav
