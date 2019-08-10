import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



class Interface extends Component {

    render(){

        return (
           <div>
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
                               type="text" name="name"
                           />
                           <br/>
                           <br/>
                           URL: <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>

                           <input
                               type="text" name="url"
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
                               type="text" name="period"
                           />
                           <br/>
                           <br/>
                           <Button variant="outline-danger" size="lg">Kaydet</Button>
                       </td>
                   </tr>
                   </tbody>
               </Table>

           </div>
        );
    }
}

export default Interface;