import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import { getReducers } from 'reducers'
import Layout from 'Layout'
import Immutable from 'immutable'

import 'sass/index.sass'
import 'resources/images/favicon.ico'
import '../index.html'

let middleware = applyMiddleware( promise({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']}))
let store = null


if(process.env.NODE_ENV === 'production'){
	store = createStore(
		getReducers(),
		middleware
	)
}else{
	const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			serialize: {
				immutable: Immutable
			}
		}) : null

	if(typeof composeEnhancers === 'function' ){
		store = createStore(
			getReducers(),
			composeEnhancers(middleware)
		)
	}else{
		store = createStore(
			getReducers(),
			middleware
		)
	}
}


ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>,
	document.getElementById('app')
)


if (process.env.NODE_ENV !== 'production' && module.hot) {
	const hotEmitter = require('webpack/hot/emitter')
	const DEAD_CSS_TIMEOUT = 2000

	hotEmitter.on('webpackHotUpdate', function(currentHash) {
		document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
			const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`)
			const newLink = link.cloneNode()
			newLink.href = nextStyleHref

			link.parentNode.appendChild(newLink)
			setTimeout(() => {
				link.parentNode.removeChild(link)
			}, DEAD_CSS_TIMEOUT)
		})
	})
}
