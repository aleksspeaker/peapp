import { ITodo } from '../reducers/reducer';

export interface IProps {
  todo: ITodo;
  todoIndex: number;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}