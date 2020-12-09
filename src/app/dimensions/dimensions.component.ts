import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { screen, ScreenMetrics } from "tns-core-modules/platform";

@Component({
    selector: 'ns-dimensions',
    templateUrl: './dimensions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimensionsComponent implements OnInit {

    mainScreen: ScreenMetrics = screen.mainScreen;

    testText: string = JSON.stringify({
        scale: screen.mainScreen.scale,
        widthPixels: screen.mainScreen.widthPixels,
        heightPixels: screen.mainScreen.heightPixels,
        widthDIPs: screen.mainScreen.widthDIPs,
        heightDIPs: screen.mainScreen.heightDIPs,
    })

    constructor() { }

    ngOnInit(): void {
    }
}
