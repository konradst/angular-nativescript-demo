import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { screen, ScreenMetrics } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { selectAmount } from '../selectors/cards.selector';
import { addCard } from '../actions/cards.actions';

@Component({
    selector: 'ns-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
    cards$: Observable<number>;

    mainScreen: ScreenMetrics = screen.mainScreen;

    constructor(
        private page: Page,
        private store: Store<State>
    ) {
        this.cards$ = this.store.pipe(select(selectAmount));
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    addCards() {
        this.store.dispatch(addCard());
    }
}
