import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { screen, ScreenMetrics } from "tns-core-modules/platform";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
    selector: 'ns-dimensions',
    templateUrl: './dimensions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimensionsComponent implements OnInit {

    mainScreen: ScreenMetrics = screen.mainScreen;

    geoLocation$: ReplaySubject<geolocation.Location>;
    geoText$: BehaviorSubject<string>;

    testText: string = JSON.stringify({
        scale: screen.mainScreen.scale,
        widthPixels: screen.mainScreen.widthPixels,
        heightPixels: screen.mainScreen.heightPixels,
        widthDIPs: screen.mainScreen.widthDIPs,
        heightDIPs: screen.mainScreen.heightDIPs,
    });

    constructor() {
        this.geoText$ = new BehaviorSubject('N/A');
        this.geoLocation$ = new ReplaySubject();
    }

    ngOnInit(): void {
        geolocation.enableLocationRequest().then(() => {
            geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 }).then(location => {
                this.geoText$.next(JSON.stringify(location));
                this.geoLocation$.next({ ...location });
            });
        });
    }
}
