export class Warehouse {
    private _ID: number;
    constructor(ID: number) {
        this._ID = ID;
    }
    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }
}