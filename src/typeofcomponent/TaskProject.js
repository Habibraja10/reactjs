import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskProject extends Component{

    constructor(props){
        super(props);
        this.state = {
            number:1 ,
        }
        
        this.changecountplus = this.changecountplus.bind(this);
        this.changecountminus = this.changecountminus.bind(this);
    }

    changecountplus(){
        this.setState({
            number : this.state.number + 1
        })
    }

    changecountminus(){
        this.setState({
            number : this.state.number - 1
        })
    }
    
    render(){
        return (
            <div>
                <h1>Number Count</h1>
                <p>{this.state.name}</p>
                <p>{this.state.number}</p>
                <button onClick={this.changecountplus}>increase</button>
                <button onClick={this.changecountminus}>decrease</button>
            </div>
        )
    }
}


export default TaskProject;
        