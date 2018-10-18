import axios, { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';
import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

const createAction = (type: string, payload?: any) => {
  return payload === undefined ? { type } : { type, payload };
}

export enum TODOS {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',

  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}

export const addTodo = (todoText: string) => ({
  payload: todoText,
  type: TODOS.ADD_TODO,
})

export const deleteTodo = (todoId: number) => ({
  payload: todoId,
  type: TODOS.DELETE_TODO,
})

export const toggleTodo = (todoId: number) => ({
  payload: todoId,
  type: TODOS.TOGGLE_TODO,
})


const actions = {
  fetchError: () => createAction(TODOS.FETCH_ERROR),
  fetchStart: () => createAction(TODOS.FETCH_START),
  fetchSuccess: (payload: []) => createAction(TODOS.FETCH_SUCCESS, payload),
}

export const fetchTodos: ActionCreator<
  ThunkAction<void, [], void, AnyAction>
  > = () => (dispatch) => {
    dispatch(actions.fetchStart());

    axios
      .get('v1/todos')
      .then((response: AxiosResponse) => {
        // tslint:disable-next-line:no-console
        // console.log('====================================');
        // tslint:disable-next-line:no-console
        // console.log(response.data);
        // tslint:disable-next-line:no-console
        // console.log('====================================');
        dispatch(actions.fetchSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        // tslint:disable-next-line:no-console
        console.warn(error, 'Unhandled error statement');
        dispatch(actions.fetchError());
      });
  };
