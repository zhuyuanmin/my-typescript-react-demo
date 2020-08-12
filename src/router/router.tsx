import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import routes from './index'

function mapRoutes(routes: any[]): any {
    return routes.map((item: any, index: number) => {
        return (
            <Route exact={item.exact || false} path={item.path} key={index} render={props => {
                const NewComp = item.component
                Object.assign(props, {
                    redirect: item.redirect || null
                })
                if (item.routes) {
                    return <NewComp {...props}>{ mapRoutes(item.routes) }</NewComp>
                } else {
                    return <NewComp {...props} />
                }
            }} />
        )
    })
}

const Routes = () => (
    <Router>
        <Link to="/home">home</Link> | <Link to="/new">new</Link> 【<Link to="/new/list">new-list</Link> | <Link to="/new/content">new-content</Link>】
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            { mapRoutes(routes) }
            <Route component={() => (<div>Page not Found!</div>)} />
        </Switch>
    </Router>
)

export default Routes
