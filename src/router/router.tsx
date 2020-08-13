import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import routes from './index'

function mapRoutes(routes: any[], store: object): any {
    return routes.map((item: any, index: number) => {
        return (
            <Route exact={item.exact || false} path={item.path} key={index} render={props => {
                const NewComp = item.component
                Object.assign(props, {
                    redirect: item.redirect || null,
                    ...store
                })
                if (item.routes) {
                    return <NewComp {...props}>{ mapRoutes(item.routes, store) }</NewComp>
                } else {
                    return <NewComp {...props} />
                }
            }} />
        )
    })
}

const Routes = (props: any) => (
    <Router>
        <Link to="/home">home</Link> | <Link to="/new">new</Link> 【<Link to="/new/list">new-list</Link> | <Link to="/new/content">new-content</Link>】
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            { mapRoutes(routes, props.store) }
            <Route component={() => (<div>Page not Found!</div>)} />
        </Switch>
    </Router>
)

export default Routes
