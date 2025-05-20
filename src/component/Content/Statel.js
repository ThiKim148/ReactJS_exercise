import React,{Component} from "react";

import { getData } from "./data";
class Statel extends Component {
    constructor(props) {
        var arr = getData();
        super(props);
        this.state = {arr}
    }
    render() {
        return (
            <div>
                {this.state.arr.map(key => 
                    <div>
                        <h1>{key.name}</h1>
                        <h1>{key.image}</h1>
                        <h1>{key.loai}</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Statel;