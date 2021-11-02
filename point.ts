
export class Point1{

    constructor(private _x?:Number, private _y?:Number){   
    }

    Draw(){
        console.log("Draw");
    }

    getDistance(another: Point1){
        console.log("getDistance");
    }

    get x(){
        return this._x;
    }

    set x(value){
        if(value<0){
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
    }
}
