import { Point1 } from "./point";

function doSomething(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    // console.log(i);  //// since its not var variable it is showing the error, and we can't call it outside the scope of the function in which we declared it.
}

doSomething();

////            Types

let a:number =1;
let b:string ='a';
let c:boolean =true;
let d:any;


//// arrays

let e:string[];
let f:Array<number>;

/// enums

enum Color{Red=0, Green=1, Blue=2, Yellow=3}
let backgroundColor = Color.Red


///         type assertions

let message;
message = 'abc';
let endsWithC = (<String>message).endsWith('c');
let endsWithD = (message as String).endsWith('d');


////            Arrow functions

let log = function(message:any){
    console.log(message);
}

let doLog = (message:any) => console.log(message);


///             Interface

interface Point{
    x:Number,
    y:Number
}

let drawPoint = (point: Point) => {

}


///             Classes



let point = new Point1(1,2);
// point.setX(10);
let x = point.x;
point.x = 10;
point.Draw();