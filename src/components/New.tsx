import React from 'react'
import { Switch } from 'react-router-dom'

export default function New(props: any) {
	console.log(props.children)
	return (
		<React.Fragment>
			<div style={{color: 'red', fontSize: '30px'}}>New Parent Page</div>
			<Switch>
				{ props.children }
			</Switch>
		</React.Fragment>
	)
}
