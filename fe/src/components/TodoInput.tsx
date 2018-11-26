import * as React from 'react';
import { Fragment, PureComponent } from "react";
import { ITodoInputProps, ITodoInputState } from './TodoInput.interface';


class TodoInput extends PureComponent<ITodoInputProps, ITodoInputState> {
  constructor(props: ITodoInputProps) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  public handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
      this.setState({inputValue: ev.target.value})
  }

  public handleKeyUp(ev: React.KeyboardEvent) {
    ev.preventDefault()
    if (ev.keyCode === 13 && this.state.inputValue) {
      this.props.addTodo(this.state.inputValue);
      this.setState(
        { inputValue: '' }
      )
    }
  }

  public handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    this.props.addTodo(this.state.inputValue);
    this.setState(
      { inputValue: '' }
    )
  }

  public render() {
    return (
      <Fragment>
        <input
          className="input-field"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={this.state.inputValue}
          type="text"
          placeholder="What needs to be done?"/>
        <span className="hint">&#9166;</span>
      </Fragment>
    )
  }
}

export default TodoInput;