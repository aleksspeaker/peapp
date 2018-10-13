import { ITodo } from '../reducers/reducer';

export interface ITodosComponentProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}