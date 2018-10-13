import { TODOS } from '../actions/actions';
import { reducer } from "./reducer";

const state = {
  nextId: 0,
  todos: [
    {
      done: false,
      id: 0,
      text: 'Learn Redux',
    }
  ]
}

const nextState = {
  nextId: 1,
  todos: [
    {
      done: false,
      id: 0,
      text: 'Learn Redux',
    },
    {
      done: false,
      id: 1,
      text: 'Learn TS',
    },
  ]
}
describe('Reducer', () => {
  it('shoud return default state if action type is undefined', () => {
    expect(reducer(state, { type: undefined })).toEqual(state)
  })
  it('shoud return default state if action is undefined', () => {
    expect(reducer(state, { type: TODOS.ADD_TODO, payload: "Learn TS" })).toEqual(nextState)
  })
})