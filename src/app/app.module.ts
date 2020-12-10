import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { MenuComponent } from "./menu/menu.component";
import { DimensionsComponent } from "./dimensions/dimensions.component";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from './effects/app.effects';
import { CardsEffects } from './effects/cards.effects';
import { AbsoluteComponent } from "./absolute/absolute.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([AppEffects, CardsEffects]),
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DimensionsComponent,
        AbsoluteComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
