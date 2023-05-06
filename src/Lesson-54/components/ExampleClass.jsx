import { Component } from "react";

class ExampleClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        this.handleClick = this.addCount.bind(this);
        this.handleClickMinus = this.minusCount.bind(this);
    }

    addCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    minusCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }

    componentDidMount() {
        console.log('Component mounted');
    }
    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Component updated');
        }
    }
    render() {
        return (
            <div>
                Example Class
                {this.state.count}
                <button onClick={this.handleClick}>Add me</button>
                <button onClick={this.handleClickMinus}>Minus me</button>
            </div>
        )
    }
}

export default ExampleClass;