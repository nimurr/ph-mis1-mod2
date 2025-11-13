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