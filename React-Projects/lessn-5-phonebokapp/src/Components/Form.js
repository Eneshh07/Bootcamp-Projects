import React, { Component } from 'react';
import '../Styles/Form.css';
import PropsTypes from "prop-types";

export default class Form extends Component {
    
    static propTypes={addContact:PropsTypes.func, };
state={  text:'',phone:''} /*state tanimlamasi*/ 
        constructor()
    { super();
    this.inputChange=this.inputChange.bind(this);//BIND ETME
    this.sendForm=this.sendForm.bind(this);//BIND ETME
    }
    inputChange(e)
{
    this.setState({ [e.target.name]:e.target.value});/*[e.target.name]-> dinamik name atamasi icin*/ 
}

sendForm(event)
{
   event.preventDefault();// Bu sayede sayfa yenilenmesi eylemi otomotik degil, bizim kontrolimizde
    //console.log("Form sending ...");
    this.props.addContact({...this.state});
    /*islem bittikten sonra inputlari bosaltmak icin*/
    this.setState({  text:'',phone:''});
}
    
render() {
    //console.log(this.props.addContact);
        return (
            <div>
                <form className="formField" onSubmit={this.sendForm}>
                <input value={this.state.text} onChange={this.inputChange} name="text" id="text" placeholder="Enter a name ..."></input>
                <br/>
              <input value={this.state.phone} onChange={this.inputChange} name="phone" id="phone" placeholder="Enter a phone number ...">
              </input>
              <button>Add</button>
              </form>
              
            </div>
        );
    }
}
