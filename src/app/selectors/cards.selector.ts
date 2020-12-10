import { createSelector, createFeatureSelector } from "@ngrx/store";
import { State } from "../reducers/index";
import { State as CardsState } from "../reducers/cards.reducer";

export const selectAmount = createSelector(
    (state: State) => state.cards,
    (cards: CardsState) => cards.amount
);