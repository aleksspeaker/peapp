import { TODOS } from '../actions/actions';
import { IState, reducer } from "./reducer";

let state: IState;
beforeEach(() => {
  state = {
    todos: [
      {
        _id: '0',
        description: 'Learn Redux',
        done: false,
      },
      {
        _id: '1',
        description: 'Learn React',
        done: false,
      }
    ]
  }
})

describe('Reducer', () => {
  it('shoud return default state if action type is undefined', () => {
    expect(reducer(state, { type: undefined })).toEqual(state)
  })
  it('shoud return state with new object added if action is ADD_TODO', () => {
    const nextState: IState = {
      todos: [
        {
          _id: '0',
          description: 'Learn Redux',
          done: false,
        },
        {
          _id: '1',
          description: 'Learn React',
          done: false,
        },
        {
          _id: '2',
          description: 'Learn TS',
          done: false,
        },
      ]
    }
    const payload = { _id: '2', description: "Learn TS", done: false };
    expect(reducer(state, { type: TODOS.ADD_TODO_SUCCESS, payload})).toEqual(nextState)
  })
  it('shoud return state with specified todo id, done: true if action is TOGGLE_TODO', () => {
    const nextState = {
      todos: [
        {
          _id: '0',
          description: 'Learn Redux',
          done: true,
        },
        {
          _id: '1',
          description: 'Learn React',
          done: false,
        }
      ]
    }
    expect(reducer(state, { type: TODOS.TOGGLE_TODO_SUCCESS, payload: { _id: '0', description: 'Learn Redux', done: true,} })).toEqual(nextState)
  })

  it('shoud return state without specified todo id, if action is DELETE_TODO', () => {
    const nextState = {
      todos: [
        {
          _id: '1',
          description: 'Learn React',
          done: false,
        }
      ]
    }
    expect(reducer(state, { type: TODOS.DELETE_TODO_SUCCESS, payload: { _id: '0', description: 'Learn Redux', done: true, } })).toEqual(nextState)
  })
})
