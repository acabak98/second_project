import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './Interface.css';

class Interface extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sName: "",
            sUrl: "",
            sPeriod: 0
        };

        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
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
        axios.post('http://localhost:8090/loyloy?name=' + this.state.sName + '&url=' + this.state.sUrl + '&controlPeriod=' + this.state.sPeriod);
    }

    render(){

        return (
           <div className="InterfaceClass">
               <br/>
               <Table bordered variant="dark">
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
                           <Button variant="outline-danger" size="lg" onClick={() => this.getUrl()}>Kaydet</Button>
                       </td>
                   </tr>
                   </tbody>
               </Table>

           </div>
        );
    }
}

export default Interface;