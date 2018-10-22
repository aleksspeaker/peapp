export interface ITodoInputState {
  inputValue: string;
}

export interface ITodoInputProps {
  addTodo: (todoText: string) => void
}