import { addTodo, deleteTodo, fetchTodos, toggleTodo } from '../actions/actions';
import { ITodo } from '../reducers/reducer';

export interface ITodosContainerProps extends IPropsFromDispatch, IPropsFromState {
}
export interface IPropsFromDispatch {
  addTodo: typeof addTodo;
  toggleTodo: typeof toggleTodo;
  deleteTodo: typeof deleteTodo;
  fetchTodos: typeof fetchTodos;
}
export interface IPropsFromState {
  todos: ITodo[];
}