import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { addCard } from '../actions/cards.actions';


export const cardsFeatureKey = 'cards';

export interface State {
  amount: number;
}

export const initialState: State = {
  amount: 5
};


export const reducer = createReducer(
  initialState,
  on(addCard, (state) => ({ ...state, amount: state.amount + 1 }))
);
