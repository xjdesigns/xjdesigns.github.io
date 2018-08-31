import React, { Component } from 'react'

export class CodeSnippet extends Component {
  componentDidMount () {
    window.PR.prettyPrint()
  }

  componentDidUpdate () {
    window.PR.prettyPrint()
  }

  render () {
    // @children should be a string
    const { children } = this.props
    return (
// Needs to be flush so it does not indent
<pre className="prettyprint">
  <code className="sg-code-block">
    {children}
  </code>
</pre>
    )
  }
}

export default CodeSnippet
