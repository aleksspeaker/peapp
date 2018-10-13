export enum TODOS {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
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
