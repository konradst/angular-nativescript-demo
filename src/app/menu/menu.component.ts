import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { screen, ScreenMetrics } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: 'ns-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

    mainScreen: ScreenMetrics = screen.mainScreen;

    constructor(private page: Page) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}
