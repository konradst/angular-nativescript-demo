import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items: Item[] = [
        { id: 1, name: "Wow This is fast", role: "Goalkeeper" },
        { id: 2, name: "Wow fast", role: "Goalkeeper" },
        { id: 3, name: "Wow ", role: "Goalkeeper" },
        { id: 4, name: "Fast", role: "Goalkeeper" },
        { id: 5, name: "NativeScript is fast", role: "Goalkeeper" },
        { id: 6, name: "Angular is fast", role: "Goalkeeper" },
        { id: 7, name: "This is fast", role: "Goalkeeper" },
        { id: 8, name: "Too fast", role: "Goalkeeper" },
        { id: 9, name: "It will be even faster", role: "Goalkeeper" },
        { id: 10, name: "Lol", role: "Goalkeeper" },
        { id: 11, name: "Haha", role: "Goalkeeper" },
        { id: 12, name: "Good job!", role: "Goalkeeper" },
    ];

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
