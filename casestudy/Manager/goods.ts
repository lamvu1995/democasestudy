import {Product} from "./product";
export class Goods {
private _Id: number;
private _name: string;
product: Product[] = []
    constructor(Id: number, name: string) {
        this._Id = Id;
        this._name = name;
    }
    get Id(): number {
        return this._Id;
    }

    set Id(value: number) {
        this._Id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}