import React from 'react'
import { Button } from 'antd'
import Loadable from 'react-loadable'

const Loading = (props: any) => {
    if (props.error) {
        return <div>Error! <Button type="link" onClick={props.retry}>Retry</Button></div>
    } else if (props.timedOut) {
        return <div>Timeout! <Button onClick={props.retry}>Retry</Button></div>
    } else if (props.pastDelay) {
        return <div>Loading...</div>
    } else {
        return null
    }
}

const routes = [
    {
        path: '/home',
        component: Loadable({
            loader: () => import('@/components/Index'),
            loading: Loading,
            delay: 200,
            timeout: 10000,
        }),
        exact: true,
    },
    {
        path: '/new',
        component: Loadable({
            loader: () => import('@/components/New'),
            loading: Loading,
            delay: 200,
            timeout: 10000,
        }),
        exact: true,
        routes: [
            {
                path: '/new/list',
                component: Loadable({
                    loader: () => import('@/components/NewList'),
                    loading: Loading,
                    delay: 200,
                    timeout: 10000,
                }),
                exact: true,
            },
            {
                path: '/new/content',
                component: Loadable({
                    loader: () => import('@/components/NewContent'),
                    loading: Loading,
                    delay: 200,
                    timeout: 10000,
                }),
                exact: true,
            },
        ],
    },
]

export default routes
