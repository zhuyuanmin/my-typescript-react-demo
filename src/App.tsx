import React, { Component } from 'react'
import Router from '@/router/router'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends Component {
    render() {
        // @ts-ignore
        // mobx 踩坑 -- 不可以全部解构出来使用
        const { counter } = this.props.store
        return (
            <div className="App">
                <header className="App-header">
                    { counter.counter }
                    <Button type="primary" onClick={() => counter.increment()}>Counter ++</Button>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => counter.incrementAsync()}>Counter Async ++</a>
                </header>
                <Router />
            </div>
        )
    }
}

export default App
