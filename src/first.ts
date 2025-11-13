//? this is string with using ts 
const data: string = "hello world";

//? this is object with using ts
const demoObject:
    {
        name: string,
        age: number
    }
    = {
    name: "John",
    age: 30
}

//? this is array with using ts 
const arrData: number[] = [1, 2, 3]

//? this is function with using ts
function add(a: number, b: number): number {
    return a + b;
}

//! this is output of string, object, array, function
console.log(data)
console.log(demoObject)
console.log(arrData)
console.log(add(1, 0))
