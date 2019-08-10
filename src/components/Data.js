import React, {Component} from 'react';
import axios from "axios";

export default class Data extends Component{

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => console.log(res.data));

    }

    render() {
        return(
            <div></div>
        )

    }

}