import { ITodo } from '../reducers/reducer';

export interface ITodosContainerProps extends IPropsFromDispatch, IPropsFromState {
}
export interface IPropsFromDispatch {
  addTodo: (todoText: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
export interface IPropsFromState {
  todos: ITodo[];
}