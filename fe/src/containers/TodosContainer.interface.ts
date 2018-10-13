import { initState } from '../reducers/reducer';

export interface ITodosContainerProps {
  todos: typeof initState.todos
}