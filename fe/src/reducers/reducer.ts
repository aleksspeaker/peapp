import { TODOS } from '../actions/actions';
import { ITodoAction } from './reducer.interface';

export const initState = {
  todos: [{} as ITodo]
}

export interface ITodo {
  done: boolean,
  _id: string,
  description: string,
}
export interface IState {
  todos: ITodo[]
}


export const reducer = (state: IState = initState, action: ITodoAction) => {
  switch(action.type) {
    case TODOS.FETCH_START:
      return state
    case TODOS.FETCH_SUCCESS:
      return {...state, todos: action.payload}
    case TODOS.FETCH_ERROR:
      return state
    case TODOS.ADD_TODO_START:
      return state
    case TODOS.TOGGLE_TODO:
      return state
    case TODOS.DELETE_TODO_START:
      return state
    case TODOS.DELETE_TODO_ERROR:
      return state
    case TODOS.DELETE_TODO_SUCCESS:
      return state
    default:
      return state;
  }
};