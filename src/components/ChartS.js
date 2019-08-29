import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import axios, {AxiosInstance as Axios} from 'axios';
import './ChartS.css'
import Button from "react-bootstrap/Button";


export class ChartS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: [],
            element1: [],
            options: [],
            selectedUrl: "null"
        };
        this.selectUrl = this.selectUrl.bind(this);
    }

    componentDidMount(){
        var self = this;
        axios.get('http://localhost:8090/selection')
            .then(function (response) {
                console.log(response);
                self.setState({options: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deneme(){
        var self = this;
        axios.get('http://localhost:8090/graph?name=' + self.state.selectedUrl)
            .then(function (response) {
                console.log(response);
                self.setState({element: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://localhost:8090/graph1?name=' + self.state.selectedUrl)
            .then(function (response) {
                console.log(response);
                self.setState({element1: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://localhost:8090/selection')
            .then(function (response) {
                console.log(response);
                self.setState({options: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        //this.setGraph();
    }

    /*setGraph(){
        var self = this;
        axios.get('http://localhost:8090/graph?name=' + self.state.selectedUrl)
            .then(function (response) {
                console.log(response);
                self.setState({element: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://localhost:8090/graph1?name=' + self.state.selectedUrl)
            .then(function (response) {
                console.log(response);
                self.setState({element1: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        setInterval(this, 1000);
    }*/

    selectUrl = (e) => {
        var self=this;
        let idx = e.target.selectedIndex;
        this.setState({selectedUrl:this.state.options[idx].name})
    }

    render() {
        const {options} = this.state;
        let optionsList = options.length > 0
            && options.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);

        let data = {
            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '18', '20'],
            datasets: [
                {
                    label: 'Success',
                    data: this.state.element,
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                }
            ]
        };

        let data1 = {
            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '18', '20'],
            datasets: [
                {
                    label: 'Response Time(ms)',
                    data: this.state.element1,
                    fill: false,
                    backgroundColor: '#f56148',
                    borderColor: '#F56148'
                }
            ]
        };


        return (
            <div>
                Select an alert <span>&nbsp;&nbsp;</span>
                <select onChange={this.selectUrl}>
                    {optionsList}
                </select>
                <br/>
                You selected {this.state.selectedUrl}
                <br/>
                <br/>
                <Button variant="outline-danger" size="lg" onClick={() => this.deneme()}>Refresh</Button>
                <div className="MyTableClass">
                    <Chart type="line" data={data} />
                    <Chart type="line" data={data1} />
                </div>
            </div>
        )
    }
}
export default ChartS;