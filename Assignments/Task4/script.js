// Write a program to find the
//  area of a square and a rectangle using JavaScript objects with a common area function. 
// (Use this keyword). (Area of a Rectangle/Square = length * breadth)
const calcArea = function (length, breadth){
    return (this.length * this.breadth)
}
square ={
    length:8,
    breadth:8,
    area: calcArea
}
rectangle ={
    length:4,
    breadth:7,
    area: calcArea
}
console.log("Area of square is " + square.area())
console.log("Area of rectangle is " + rectangle.area())