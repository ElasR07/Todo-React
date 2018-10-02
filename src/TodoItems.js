import React, { Component } from 'react';

export default class TodoItems extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            name: "unchecked"
        }

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    createTasks(item) {
        return (
                <li onDoubleClick={() => this.delete(item.key)} 
                onClick={() => this.handleClick()}
                key={item.key}
                className={this.state.name}>{item.text}</li>
        )
    }

    delete(key) {
        this.props.delete(key)
    }

    handleClick(e) {
        this.setState({name: "checked"})
    }

    render() {

        const todoEntries = this.props.entries.map(this.createTasks);

        return ( 
            <ul className="list">
                {todoEntries}
            </ul>
        )
    }
}
