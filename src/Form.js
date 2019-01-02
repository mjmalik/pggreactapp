/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }
    
    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        });
    }
    
    render() {
        const { name, job } = this.state; 

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange}/>
            </form>
        );
    }

}

export default Form;