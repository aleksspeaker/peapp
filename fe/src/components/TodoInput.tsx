import * as React from 'react';
import { Fragment, PureComponent } from "react";

interface IState {
  inputValue: string;
}

interface IProps {
  addTodo: (todoText: string) => void
}

class TodoInput extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
      this.setState({inputValue: ev.target.value})
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
          value={this.state.inputValue}
          type="text"
          placeholder="What needs to be done?"/>
        <span className="hint">&#9166;</span>
        <button
          onClick={this.handleSubmit}
          type="submit" >&#9166;</button>
      </Fragment>
    )
  }
}

export default TodoInput;