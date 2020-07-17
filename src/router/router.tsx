import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import routes from './index'

function mapRoutes(routes: any[]): any {
    return routes.map((item: any, index: number) => {
        return (
            <Route exact={item.exact || false} path={item.path} key={index} render={props => {
                if (item.routes) {
                    return <item.component {...props}>{
                        mapRoutes(item.routes)
                    }</item.component>
                }
            
                return <item.component {...props} />
            }} />
        )
    })
}

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            { mapRoutes(routes) }
            <Route component={() => (<div>Page not Found!</div>)} />
        </Switch>
    </Router>
)

export default Routes
