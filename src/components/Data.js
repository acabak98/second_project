import React, {Component} from 'react';
import axios from "axios";
import Interface from "./Interface";

export default class Data extends Component{

    componentDidMount(){
        axios.get(Interface.state.sUrl)
            .then(res => console.log(res.data));

    }

    render() {
        return(
            <div></div>
        )

    }

}