import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        let date = this.state.date
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let dateString = date.toDateString();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return (
            <div>
                <h1>Clock</h1>
                <div class="time">
                    <div class="clock">
                        <h2>Date:</h2>
                        <h2>{dateString}</h2>
                    </div>
                    <div class="clock">
                        <h2>Time:</h2>
                        <h2>{hours}:{minutes}:{seconds} EST</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;