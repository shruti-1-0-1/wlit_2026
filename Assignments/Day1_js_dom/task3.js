// Task 3:
// Write a program to find the area of a cylinder using JavaScript objects (radius, height and the area function should be in the object). (Area of a Cylinder= pi*r^2*h)
const Pi = 3.14;
const cylinder ={
    radius: 24,
    height: 50,
    area: calcArea
}
function calcArea(radius, height){
 console.log("Area of cylinder is " + Pi*this.radius*this.radius*this.height)
}
cylinder.area()