import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import App from './App'
import './index.scss'


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path='/' component={App}/>
		</Router>
	</Provider>
, document.getElementById('root'))