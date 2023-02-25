import {Goods} from "./goods";

export class Product {
    private _ID: number;
    private _name: string;
    private _price: string;
    private _quantity: number;

    constructor(ID: number, name: string, price: string, quantity: number) {
        this._ID = ID;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }
}