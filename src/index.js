import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import "./styles/css/app-visual.css"
// import "./styles/css/prettify.css"
// import "./styles/css/style-guide.css"
import './styles/css/style.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
