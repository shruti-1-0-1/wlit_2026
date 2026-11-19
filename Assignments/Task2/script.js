//Write a JavaScript function to find the largest number in an array given as the parameter. (Use arrow function).
const findLargest = (arr) => {
largest = arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log("The largest number is " + largest);
}
findLargest([3,4,56,7,89,3,12])