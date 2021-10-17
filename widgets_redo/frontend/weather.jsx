import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Weather</h1>
                <div class="weather">
                    <p>loading weather ...</p>
                </div>
            </div>
        )
    }
}

export default Weather;