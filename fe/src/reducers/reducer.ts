import { TODOS } from '../actions/actions';
import { ITodoAction } from './reducer.interface';

export const initState = {
  nextId: 3,
  todos: [
    {
      description: 'Learn Typescript',
      done: false,
      id: 0,
    },
    {
      description: 'Learn React',
      done: true,
      id: 1,
    },
    {
      description: 'Learn Redux',
      done: false,
      id: 2,
    }
  ]
}

export interface ITodo {
  done: boolean,
  id: number,
  description: string,
}
export interface IState {
  nextId: number,
  todos: ITodo[]
}


export const reducer = (state: IState, action: ITodoAction) => {
  switch(action.type) {
    case TODOS.FETCH_START:
      return state
    case TODOS.FETCH_SUCCESS:
      return {...state, todos: action.payload}
    case TODOS.ADD_TODO:
      const id = state.nextId
      return { 
        ...state,
        nextId: ++state.nextId,
        todos: [
          ...state.todos,
          {
            description: action.payload,
            done: false,
            id,
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