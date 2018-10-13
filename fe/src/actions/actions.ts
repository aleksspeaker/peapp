export enum TODOS {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
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

export const fetchStart = () => ({
  type: TODOS.FETCH_START
})

export const fetchSuccess = () => ({
  type: TODOS.FETCH_START
})


// TODO: Fetch data from API and store it to the store
export const fetchTodos = () => {
  fetchStart();
  fetch('v1/todos').then(resp => resp.json())
  .then(json => {
    fetchSuccess();
    // tslint:disable-next-line:no-console
    console.log(json)
  });
}
