import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './Layout.css';
import {Chart} from 'primereact/chart';

class  Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sName: "",
            sUrl: "",
            sPeriod: 0,
            success: [],
            time: [],
            options: [],
            selectedUrl: "null"
        };

        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
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

    plotGraph(){
        var self = this;
        axios.get('http://localhost:8090/successgraph?name=' + self.state.selectedUrl)
            .then(function (response) {
                console.log(response);
                self.setState({success: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://localhost:8090/timegraph?name=' + self.state.selectedUrl)
            .then(function (response) {
                console.log(response);
                self.setState({time: response.data})
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
    selectUrl = (e) => {
        var self=this;
        let index = e.target.selectedIndex;
        this.setState({selectedUrl:this.state.options[index].name})
    }
    handleInputChange1(event){
        this.setState({sName: event.target.value});
    }

    handleInputChange2(event){
        this.setState({sUrl: event.target.value});
    }

    handleInputChange3(event){
        this.setState({sPeriod: event.target.value});
    }

    getUrl(){
        axios.post('http://localhost:8090/addalert?name=' + this.state.sName + '&url=' + this.state.sUrl + '&controlPeriod=' + this.state.sPeriod);
    }

    render(){
        const {options} = this.state;
        let optionsList = options.length > 0
            && options.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);

        let dataOfSuccess = {
            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '18', '20'],
            datasets: [
                {
                    label: 'Success',
                    data: this.state.success,
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                }
            ]
        };

        let dataOfTime = {
            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '18', '20'],
            datasets: [
                {
                    label: 'Response Time(ms)',
                    data: this.state.time,
                    fill: false,
                    backgroundColor: '#f56148',
                    borderColor: '#F56148'
                }
            ]
        };

        return (
            <div className="InterfaceClass">
                <br/>
                <Table variant="dark">
                    <thead>
                    <tr></tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <h2>ALERTING SYSTEM</h2>
                            <br/>
                            Adı: <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span>  <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span>
                            <input
                                type="text"
                                name="name_e"
                                value={this.state.sName}
                                onChange={this.handleInputChange1}
                            />

                            <br/>
                            <br/>
                            URL: <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>

                            <input
                                type="text"
                                name="url_e"
                                value={this.state.sUrl}
                                onChange={this.handleInputChange2}
                            />

                            <br/>
                            <br/>
                            <div>
                                <Dropdown>
                                    HTTPS Method: <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                                    <Dropdown.Toggle variant="danger" id="dropdown-basic">Select</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Get</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <br/>
                            Kontrol Periyodu: <span>&nbsp;&nbsp;</span>
                            <input
                                type="text"
                                name="period"
                                value={this.state.sPeriod}
                                onChange={this.handleInputChange3}
                            />
                            <br/>
                            <br/>

                        </td>
                        <td>
                            <div>
                                <Chart type="line" data={dataOfSuccess} />
                            </div>
                        </td>
                        <td>
                            <div>
                                <Chart type="line" data={dataOfTime} />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button variant="outline-danger" size="lg" onClick={() => this.getUrl()}>Kaydet</Button>
                        </td>
                        <td className="SelectionClass">
                            Select an alert <span>&nbsp;&nbsp;</span>
                            <select onChange={this.selectUrl}>
                                {optionsList}
                            </select>
                            <br/>
                            You selected : {this.state.selectedUrl}
                        </td>
                        <td>
                            <Button variant="outline-danger" size="lg" onClick={() => this.plotGraph()}>Refresh</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <br/>

            </div>
        );
    }
}

export default Layout;