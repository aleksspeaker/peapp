import { Action } from 'redux';

export interface ITodoAction extends Action {
  payload?: any;
}