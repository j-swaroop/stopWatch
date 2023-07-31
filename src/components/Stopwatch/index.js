// Write your code here
import {Component} from "react"
import "./index.css"

class Stopwatch extends Component{
    state = {
        timer: 0,
    }

    componentWillUnmount = () => {
        this.resetTimer()
    }

    resetTimer = () => {
        clearInterval(this.timerId)
        this.setState({timer: 0})
    }

    startTimer = () => {
        this.timerId = setInterval(this.tick, 1000)
        this.incrementTimerString()
       
    }

    stopTimer = () => {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState(pervState => ({timer: pervState.timer + 1}))
    }

    incrementTimerString = () => {
        const {timer} = this.state
        const minutes = timer / 60 
        const seconds = timer % 60

        const stringMinutes = Math.floor(minutes)
        const stringSeconds = Math.floor(seconds)

        const stringFiedMinutes = stringMinutes > 9? stringMinutes: `0${stringMinutes}`
        const stringFiedSeconds = stringSeconds > 9? stringSeconds: `0${stringSeconds}`

        return `${stringFiedMinutes}:${stringFiedSeconds}`
    }

    renderTimerContainer = () => {
        const {timer, isTimerRunning} = this.state
        


        return(
            <div className="timer-container">
                <div className="header-container">
                    <img className="timer-img" src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                    <p className="timer-heading">Timer</p>
                </div>
                <h1 className="timer"> {this.incrementTimerString()}</h1>
                <div className="buttons-container">
                    <button onClick={this.startTimer} type="button" className="btn btn-green">Start </button>
                    <button onClick={this.stopTimer} type="button" className="btn btn-red">Stop </button>
                    <button onClick={this.resetTimer} type="button" className="btn btn-yellow">Reset </button>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="bg-container">
                <div className="content-container">
                    <h1 className="heading"> StopWatch</h1>
                    {this.renderTimerContainer()}   
                </div>
            </div>
        )
    }
}

export default Stopwatch