import React, { Component } from 'react'

export class Accordion extends Component {
  state = {
    isActive: false,
  }

  toggleAccordion = () => {
    this.setState(prevState => {
      return {
        isActive: !prevState.isActive,
      }
    })
  }

  render () {
    const {isActive } = this.state

    return (
      <div className={`spx-ac ${isActive ? 'is-active' : ''}`}>
        <div className="spx-ac__pane">
          <div className="spx-ac-title">
            Pane title
          </div>
          <div className="spx-ac-secondary">
            <div className="spx-pill spx-pill--pr">pills</div>
            <div className="spx-pill spx-pill--pr">pills-2</div>
          </div>
          <div className="spx-ac-action">
            <button
              className="spx-btn"
              onClick={this.toggleAccordion}
              data-icon="keyboard_arrow_down"></button>
          </div>
        </div>
        <div className="spx-ac__content">
          <p>Hello World Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta distinctio mollitia ea, dolorem minima debitis. Quas, voluptates iste, ipsum omnis deserunt explicabo quidem minus vitae odio laboriosam accusamus doloribus.</p>
        </div>
      </div>
    )
  }
}

export default Accordion
