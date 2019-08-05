import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Interface extends Component {

    render(){
        return (
           <div style={{textAlign:"left"}}>
               ALERTING SYSTEM
               <br/>
               Adı:
               <input
                   type="text" name="title"
               />
               <br/>
               URL:
               <input
                   type="text"
               />
               <br/>
               <div>
                   <Dropdown>
                       HTTPS Method:
                   <Dropdown.Toggle variant="success" id="dropdown-basic">selection</Dropdown.Toggle>

                   <Dropdown.Menu>
                       <Dropdown.Item href="#/action-1">one</Dropdown.Item>
                       <Dropdown.Item href="#/action-2">two</Dropdown.Item>
                       <Dropdown.Item href="#/action-3">three</Dropdown.Item>
                   </Dropdown.Menu>
                   </Dropdown>
               </div>
               Kontrol Periyodu:
               <input
                   type="text"
               />
               <br/>
           </div>
        );

    }
}

export default Interface;