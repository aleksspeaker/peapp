import { Action } from 'redux';
import { TODOS } from '../actions/actions';

export const initState = {
  nextId: 0,
  todos: [
    {
      done: false,
      id: 0,
      text: 'Learn Typescript',
    },
    {
      done: false,
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

interface ITodoAction extends Action {
  payload?: string;
}

export const reducer = (state = initState, action: ITodoAction) => {
  switch(action.type) {
    case TODOS.ADD_TODO:
      return { 
        ...state,
        nextId: ++state.nextId,
        todos: [
          ...state.todos,
          {
            done: false,
            id: state.nextId,
            text: action.payload,
          }
        ]
      }
    default:
      return state;
  }
};