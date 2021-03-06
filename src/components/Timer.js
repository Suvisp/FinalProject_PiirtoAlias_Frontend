import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <p>{count} sec.</p>
            </div>
        )
    }
    componentDidMount(){
        const {startCount} = this.props
        this.setState({
            count: startCount
        })
        this.doIntervalChange()
    }
    doIntervalChange = () => {
        this.myInterval = setInterval(()=> {
            this.setState(prevState =>({
                count: prevState.count - 1
            }))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}
