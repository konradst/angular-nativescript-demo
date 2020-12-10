import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCards from './cards.reducer';

export interface State {
  cards: fromCards.State
}

export const reducers: ActionReducerMap<State> = {
  cards: fromCards.reducer
};


export const metaReducers: MetaReducer<State>[] = [];
