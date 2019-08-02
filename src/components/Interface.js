import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Interface extends Component {
    render(){
        return (
           <div style={{alignItems: 'flex-right'}}>
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
           HTTPS Method
               <br/>
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