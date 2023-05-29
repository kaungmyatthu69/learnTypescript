// let myName:string ="Kaung" ;
// let age :number=22;
// let isLoading:boolean = false;
// let album: string | number;


// myName="Kaung";
// age=21;
// isLoading=true;
// album='this is ablum';
// const sum= (a:number,b:number)=>{
//     return a+b;
// }

// let postId:string | number;
// let isActive:number | boolean;
// let re:RegExp=/\w+/g;

// let stringArray=['one','two','three','four','five']
// let Array2= ['status','created',9988]
// let mixedData=['EVH',1989,true]

// stringArray[0]='Kaung'
// stringArray.push("Myatthu")

// let test =[]
// let bands:string[] =[];
// bands.push("Band1")
// //tuple
// let myTuple:[string,number,boolean]=['Dave',44,true]
// let mixed=['josn',1,false]
// mixed=[false,7 ,'kskfj']

// //object
// let myObj:object;
// myObj=[]
// console.log(typeof myObj)
// myObj=bands;
// myObj={ }
// const exampleObj={
//     props1:"Dave",
//     props2:true
// }
// exampleObj.props1='kaung'
// exampleObj.props2=false
// myObj=['kaung','myat',33,32424,false]


// interface Guritarist{
//     name?:string, 
//     age?:number,
//     gender:string,
//     family?:(string|number)[]
// }
//  let env :Guritarist={
//     name:"Kaung",
//     age:22,
//     gender:"male"
//  }
//  let jp:Guritarist={
   
//     age:33, 
//     gender:"male"
//  }



//  const greetGuitarist=(guitarist:Guritarist)=>{
//     if(guitarist.name){
//         return `Hello ${guitarist.name.toUpperCase()}`
//     }
//     return "HEllo "
//  }
//  console.log(greetGuitarist(jp))

//  //literal type
//  let Firstname:"kaung"
 
// //function
// const add = (a:number,b:number): number=>{
//     return a+b
// }

const logmsg= (message:any):void=>{
    console.log(message)
}
// logmsg("Hello");
// logmsg(add(1,2))
// logmsg(add(9,9))

// type matchFunction=(a:number,b:number)=>number;
interface matchFunction{(a:number,b:number):number}

let multiply:matchFunction=(a,b)=>{
    return a*b;
};

console.log(multiply(6,7))

//optional param
let addall=(a:number,b:number,c?:number)=>{
    if(c){
        return a+b+c;
    }
    return a+b;
}
//default param 
let sumall=(a:number=10,b:number,c:number=2)=>{
    return a+b+c;
}
logmsg(addall(1,2,3))
logmsg(addall(1,2))
logmsg(sumall(1,2))
logmsg(sumall(undefined,3))

//Rest parameter    
let total=(...nums:number[]):number=>{
    return nums.reduce((a,b)=>{
        return a+b;
    })
}
logmsg(total(1,2,3))

const createError=(errMsg:string):never=>{
    throw new Error(errMsg)
}

const infinite=()=>{
    let i:number =1
    while(true){
        i++;
        if(i>100) break;
    }
}

//custom type guard
const isNumber=(value: number | string):boolean=>{
    return typeof value === 'number' ? true : false;
}

//use never return value /use the never type
const numberOrString=(value: number | string):string=>{
    if(isNumber(value)){
        return "number"
    }
    if(!isNumber(value)){
        return "string"
    }
    return createError("Not a number or string")

}
logmsg(numberOrString("1"))

type One =string;
type Two = string | number;
type Three = 'hello';

//convert to more or less specific type
let a:One='hello';
let b= a as Two; //less specific b:Two=a
let c = a as Three //more specific c:Three=a
let d = <One> 'World'
let e = <string | number> 'hello';


const addOrConcat=(a:number,b:number,c:'add' | 'concat' ):number | string=>{
    if(c=='add'){
        return a+b;
    }
    if(c=='concat') return " "+a+" "+b;
}

let myval:string= addOrConcat(2,2,'concat') as string;

10 as string;
(10 as unknown) as string;

//The DOM

