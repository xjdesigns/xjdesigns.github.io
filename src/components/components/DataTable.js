import React, { Component } from 'react'

export class DataTable extends Component {
  state = {
    isOpen: false,
  }

  toggleTable = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      }
    })
  }

  render () {
    const { isOpen } = this.state
    const { descriptions } = this.props

    return (
      <div>
        <button onClick={this.toggleTable} className="spx-btn spx-btn--sm spx-btn--sd spx-btn--block">{isOpen ? 'Hide' : 'Show'} Element Table</button>
        <table className={`app-table ${isOpen ? 'spx-display-none' : ''}`}>
          <tr>
            <th>Class/Attr</th>
            <th>Description</th>
          </tr>
          {descriptions.map(desc => {
            return (
              <tr>
                <td>{desc.add}</td>
                <td>{desc.desc}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default DataTable
