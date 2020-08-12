import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

export default function New(props: any) {
	return (
		<React.Fragment>
			<div style={{color: 'red', fontSize: '30px'}}>New Parent Page</div>
			<Switch>
				{props.children}
				<Route component={() => (<div>Page not Found!</div>)} />
			</Switch>
			{props.redirect ? (
				props.location.pathname === '/new' ? (
					<Redirect to={props.redirect} />
				) : null
			) : null}
		</React.Fragment>
	)
}
