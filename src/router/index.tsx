import React from 'react'
import { Button } from 'antd'
import Loadable from 'react-loadable'

const Loading = (props: any) => {
    if (props.error) {
        console.log(props.error)
        return <div>Error! <Button type="link" onClick={props.retry}>Retry</Button></div>
    } else if (props.timedOut) {
        return <div>Timeout! <Button onClick={props.retry}>Retry</Button></div>
    } else if (props.pastDelay) {
        return <div>Loading...</div>
    } else {
        return null
    }
}

const loadable = (path: any) => {
    return Loadable({
        loader: () => import(`@/${path}`),
        loading: Loading,
        delay: 200,
        timeout: 10000,
    })
}

const routes = [
    {
        path: '/home',
        component: loadable('components/Index'),
        exact: true,
    },
    {
        path: '/new',
        component: loadable('components/New'),
        redirect: '/new/list',
        // exact: true,
        routes: [
            {
                path: '/new/list',
                component: loadable('components/NewList'),
                exact: true,
            },
            {
                path: '/new/content',
                component: loadable('components/NewContent'),
                exact: true,
            },
        ],
    },
]

export default routes
