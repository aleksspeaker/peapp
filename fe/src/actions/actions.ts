import axios, { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';
import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ITodo } from '../reducers/reducer';

const createAction = (type: string, payload?: any) => {
  return payload === undefined ? { type } : { type, payload };
}

export enum TODOS {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',

  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',

  DELETE_TODO_START = 'DELETE_TODO_START',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = 'DELETE_TODO_ERROR',

  ADD_TODO_START = 'ADD_TODO_START',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_ERROR = 'ADD_TODO_ERROR',
}

export const toggleTodo = (todoId: string) => ({
  payload: todoId,
  type: TODOS.TOGGLE_TODO,
})

const fetchActions = {
  fetchError: () => createAction(TODOS.FETCH_ERROR),
  fetchStart: () => createAction(TODOS.FETCH_START),
  fetchSuccess: (payload: []) => createAction(TODOS.FETCH_SUCCESS, payload),
}

export const fetchTodos: ActionCreator<
  ThunkAction<void, [], void, AnyAction>
  > = () => (dispatch) => {
    dispatch(fetchActions.fetchStart());

    axios
      .get('v1/todos')
      .then((response: AxiosResponse) => {
        dispatch(fetchActions.fetchSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        // tslint:disable-next-line:no-console
        console.warn(error, 'Unhandled error statement');
        dispatch(fetchActions.fetchError());
      });
};


const deleteActions = {
  deleteTodoError: () => createAction(TODOS.DELETE_TODO_ERROR),
  deleteTodoStart: (id: string) => createAction(TODOS.DELETE_TODO_START, id),
  deleteTodoSuccess: (payload: ITodo) => createAction(TODOS.DELETE_TODO_SUCCESS, payload),
}

export const deleteTodo: ActionCreator<
  ThunkAction<void, [], void, AnyAction>
  > = (id: string) => (dispatch) => {
    // tslint:disable-next-line:no-console
    console.log(id)
    dispatch(deleteActions.deleteTodoStart(id));

    axios
      .delete(`v1/todos/${id}`)
      .then((response: AxiosResponse) => {
        // tslint:disable-next-line:no-console
        console.log(response.data);
        dispatch(deleteActions.deleteTodoSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        // tslint:disable-next-line:no-console
        console.warn(error, 'Unhandled error statement');
        dispatch(deleteActions.deleteTodoError());
      });
  };

const addActions = {
  addTodoError: () => createAction(TODOS.ADD_TODO_ERROR),
  addTodoStart: () => createAction(TODOS.ADD_TODO_START),
  addTodoSuccess: (payload: ITodo) => createAction(TODOS.ADD_TODO_SUCCESS, payload),
}

export const addTodo: ActionCreator<
  ThunkAction<void, [], void, AnyAction>
  > = (todoText: string) => (dispatch) => {
    const data = JSON.stringify({ description: todoText, done: false })
    dispatch(addActions.addTodoStart());
    axios
      .post('v1/todos/', data, { headers: {'Content-Type': 'application/json' }})
      .then((response: AxiosResponse) => {
        dispatch(addActions.addTodoSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        // tslint:disable-next-line:no-console
        console.error(error, 'Unhandled error statement');
        dispatch(addActions.addTodoError());
      });
  };
