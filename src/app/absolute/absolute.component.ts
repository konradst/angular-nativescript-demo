import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { screen, ScreenMetrics } from "tns-core-modules/platform";

@Component({
    selector: 'ns-absolute',
    templateUrl: './absolute.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsoluteComponent implements OnInit {

    mainScreen: ScreenMetrics = screen.mainScreen;

    constructor() { }

    ngOnInit(): void {
    }
}
