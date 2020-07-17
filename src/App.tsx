import React from 'react'
import { connect } from 'react-redux'
import { addNameCreator, addAgeCreator, addNameAsync } from '@/store/action/index'
import Router from '@/router/router'
import { Button } from 'antd'

function App(props: any) {
    return (
        <div className="App">
            <header className="App-header">
                <Button type="primary" onClick={() => props.addAgeCreator(30)}>Button {props.friend.age}</Button>
                {/* eslint-disable-next-line */}
                <a onClick={() => props.addNameAsync('xxx')}>Learn React {props.user.name}</a>
            </header>
            <Router />
        </div>
    )
}

export default connect(
    (state: any) => ({
        user: state.user,
        friend: state.friend
    }),
    { addNameCreator, addAgeCreator, addNameAsync }
)(App)
