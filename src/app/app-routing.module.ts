import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { MenuComponent } from "./menu/menu.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { DimensionsComponent } from "./dimensions/dimensions.component";
import { AbsoluteComponent } from "./absolute/absolute.component";

const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "menu", component: MenuComponent },
    { path: "dimensions", component: DimensionsComponent },
    { path: "absolute", component: AbsoluteComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
