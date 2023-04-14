let sales:number=20;
let course:string='TypeScript';
let is_publishes:boolean=true;

function render(document:any){
    console.log(document)
}
let numbers:number[]=[1,2,3,4];
numbers.forEach(value => console.log(value))

enum Size{
    Small,Medium,Large
}

let size:Size=Size.Large;
console.log("********")
console.log(size)

const calculateTax=(income:number,taxYear:number=2023):void=>{


}

interface LabeledValue{
    label:string
}

const hello=(label:LabeledValue)=>{
    console.log(label);
}

hello({label:""})
calculateTax(1,10);

console.log(calculateTax(10,10));

let employee:{
    id:number,
    name:string
}={id:1,name:"pablo"}