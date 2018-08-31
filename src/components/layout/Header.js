import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render () {
    return (
      <header className="app-header">

        <div className="app-header__logo">
          <div className="spx-logo spx-logo--sm">
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
            <div className="spx-logo__px"></div>
          </div>
          SEGMENT CSS
        </div>
        <div className="app-header__links">
          <Link to="/homepage">
            <span>v1:ALPHA</span>
          </Link>
        </div>

      </header>
    )
  }
}

export default Header
