// let person ={
//     name:"Alice",
//     age:20,
//     address:"nepal",
//     isStudent:true
// }
// person.age=20
function CalcArea(length, breadth){
        console.log(this.length*this.breadth)
}

let rectangle={
    length:20,
    breadth:30,
    area: CalcArea

    }
let square={
    length:20,
    breadth:20,
    area: CalcArea

    }
    rectangle.area()



