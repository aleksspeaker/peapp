import { initState } from '../reducers/reducer';

export interface ITodosContainerProps extends IPropsFromDispatch, IPropsFromState {
}

export interface IPropsFromDispatch {
  addTodo: (todoText: string) => void;
}
export interface IPropsFromState {
  todos: typeof initState.todos;
}