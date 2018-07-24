import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";

 class TodoInput extends Component {

state = {
  input: ''
}

  render() {
    return (
      <div>
        <TextField
            className="add-todo-input"
            label="Add New Todo"
            type="text"
            value={this.state.input}
            onChange={e =>
              this.setState({
                input: e.target.value
              })
            }
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.props.handleSubmit(this.state.input);
                this.setState({
                  input: ''
                })
              }
            }}
          />
      </div>
    )
  }
}
export default TodoInput