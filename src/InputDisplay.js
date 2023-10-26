import React from "react";
export class InputDisplay extends React.Component {

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => this.setState({ text: event.target.value })} />
                <p> {this.state.text.toUpperCase().split("").join("-")}</p>

            </div>

        )
    }
}