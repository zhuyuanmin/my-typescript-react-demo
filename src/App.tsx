import React from 'react'
import Router from '@/router/router'
import { connect } from 'react-redux'
import { dispatchs } from '@/store/reducer/index'
import { Button } from 'antd'

delete dispatchs.default

const App = (props: any) => {
    return (
        <div className="App">
            <header className="App-header">
                <Button type="primary" onClick={() => props.loginIn(String(Date.now()))}>
                    登录
                </Button>
                {/* eslint-disable-next-line */}
                <a onClick={() => props.loginOut()}>登出</a>
            </header>
            <Router store={props} />
        </div>
    )
}

export default connect(
    (state: any) => ({ store: state }),
    { ...dispatchs }
)(App)
