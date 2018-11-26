import { ITodo } from '../reducers/reducer';

export interface ITodosComponentProps {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export interface ITodosComponentState {
  doneVisible: boolean;
}