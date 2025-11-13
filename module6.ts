//! video 1
// const kgToGmConverter = (input: number | string | undefined) => {
//     if (typeof input === "number") {
//         return input * 1000;
//     }
//     else if (typeof input === "string") {
//         return Number(input) * 1000;
//     }
// }

// console.log(kgToGmConverter(45))
// console.log(kgToGmConverter("11"))
// console.log(kgToGmConverter(undefined))

//! video 2
// type User = {
//     name: string,
//     age: number,
//     email: string,
//     password: string,
//     role: "user" | "admin"
// }

// const user: User = {
//     name: "John",
//     age: 30,
//     email: "0d4lK@example.com",
//     password: "lkdsfhasldhfsdf45",
//     role: "user"
// }

// console.log(user)


//! video 3

// const numberArr : Array<string> = ["1", "2", "3"]
// console.log(numberArr)

//? this is generic
// type GenericArray<value> = Array<value>;
// const numberArr: GenericArray<string> = ["1", "2", "3"]
// console.log(numberArr)

//! video 4

//? generic for function & tuple

// const add = <T>(a: T) => {
//     return a;
// }
// console.log(add<string>("2"))

// const add = <T>(a: T, b: T): T => {
//     return a;
// }
// console.log(add<string>("1", "2"))


//! video 6
//? sonstrain  : strict rules deya

// type std = {
//     name: string,
//     age: number
// }

// const add = <T extends std>(students: T) => {
//     return {
//         name: students.name,
//         age: students.age
//     };
// }

// console.log(add({ name: "John"})) //? get error because age is missing
// console.log(add({ name: "John", age: 30 }))

//! video 8


//? use enum for role

// enum Role {
//     USER = "user",
//     ADMIN = "admin"
// }

// type User = {
//     name: string,
//     age: number,
//     email: string,
//     password: string,
//     role: Role
// }

// const user: User = {
//     name: "John",
//     age: 30,
//     email: "0d4lK@example.com",
//     password: "lkdsfhasldhfsdf45",
//     role: Role.USER
// }


// console.log(user)

//! video 10

//? conditional types

// type A = null;
// type B = undefined;

// type C = A extends null ? "a" : B extends undefined ? "b" : "c"


//! video 11

//? loop use in typescript types



// const arr: number[] = [1, 2, 3, 4, 5];

// const arrofStringUsingMap: String[] = arr.map((item) => {
//     return item.toString();
// })

// console.log(arrofStringUsingMap)


// const object: {
//     name: string,
//     age: number
// } = {
//     name: "John",
//     age: 30
// }

// for (const key in object) {
//     console.log(object[key])
// }

//!  video 12

//? utility type

type product = {
    id: number,
    name: string,
    price: number,
    brand: string,
    color?: string //? this is optional type
}

const product: product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    color: "Black"
}

console.log(product) 