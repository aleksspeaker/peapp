import { Action } from 'redux';
import { TODOS } from '../actions/actions';

export const initState = {
  nextId: 3,
  todos: [
    {
      done: false,
      id: 0,
      text: 'Learn Typescript',
    },
    {
      done: true,
      id: 1,
      text: 'Learn React',
    },
    {
      done: false,
      id: 2,
      text: 'Learn Redux',
    }
  ]
}

export interface ITodo {
  done: boolean,
  id: number,
  text: string,
}
export interface IState {
  nextId: number,
  todos: ITodo[]
}
export interface ITodoAction extends Action {
  payload?: string | number;
}

export const reducer = (state: IState, action: ITodoAction) => {
  switch(action.type) {
    case TODOS.ADD_TODO:
      const id = state.nextId
      return { 
        ...state,
        nextId: ++state.nextId,
        todos: [
          ...state.todos,
          {
            done: false,
            id,
            text: action.payload,
          }
        ]
      }
    case TODOS.TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => 
            todo.id === action.payload ? { ...todo, done: !todo.done} : todo),
        ]
      }
    case TODOS.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      }
    default:
      return state;
  }
};