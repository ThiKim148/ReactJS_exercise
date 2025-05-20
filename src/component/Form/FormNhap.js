import React from "react";

class FormNhap extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        usename: '',
    };
    }

    myChange = (event) => {
        let name = event.target.name;
        this.setState([name]);
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.usename} {this.state.age}</h1>
                <p>Enter your name: </p>
                <input type='text' name = 'username' onChange={this.myChange} />
            </form>
        )
    }
    
}

export default FormNhap;