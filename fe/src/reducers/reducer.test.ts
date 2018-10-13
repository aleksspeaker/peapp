import { TODOS } from '../actions/actions';
import { IState, reducer } from "./reducer";

let state: IState;
beforeEach(() => {
  state = {
    nextId: 2,
    todos: [
      {
        done: false,
        id: 0,
        text: 'Learn Redux',
      },
      {
        done: false,
        id: 1,
        text: 'Learn React',
      }
    ]
  }
})

describe('Reducer', () => {
  it('shoud return default state if action type is undefined', () => {
    expect(reducer(state, { type: undefined })).toEqual(state)
  })
  it('shoud update the nextId when ADD_TODO is dispatched', () => {
    const prevState = {
      nextId: 4,
      todos: [{
        done: false,
        id: 3,
        text: 'Learn Redux',
      },]
    }
    const action = {
      payload: '',
      type: TODOS.ADD_TODO,
    }
    expect(reducer(prevState, action)!.nextId).toBe(5)
  })
  it('shoud return state with new object added if action is ADD_TODO', () => {
    const nextState = {
      nextId: 3,
      todos: [
        {
          done: false,
          id: 0,
          text: 'Learn Redux',
        },
        {
          done: false,
          id: 1,
          text: 'Learn React',
        },
        {
          done: false,
          id: 2,
          text: 'Learn TS',
        },
      ]
    }
    expect(reducer(state, { type: TODOS.ADD_TODO, payload: "Learn TS" })).toEqual(nextState)
  })
  it('shoud return state with specified todo id, done: true if action is TOGGLE_TODO', () => {
    const nextState = {
      nextId: 2,
      todos: [
        {
          done: true,
          id: 0,
          text: 'Learn Redux',
        },
        {
          done: false,
          id: 1,
          text: 'Learn React',
        }
      ]
    }
    expect(reducer(state, { type: TODOS.TOGGLE_TODO, payload: 0 })).toEqual(nextState)
  })
  it('shoud return state without specified todo id, if action is DELETE_TODO', () => {
    const nextState = {
      nextId: 2,
      todos: [
        {
          done: false,
          id: 1,
          text: 'Learn React',
        }
      ]
    }
    expect(reducer(state, { type: TODOS.DELETE_TODO, payload: 0 })).toEqual(nextState)
  })
})