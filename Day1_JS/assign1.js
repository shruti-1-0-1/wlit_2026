function checkPositive(num){
    console.log(num>=0?"positive":"negative");

}
checkPositive(9);

var largestFind = (arr)=>{
    let largest = 0;
    for( i=0; i<arr.length; i++){
        if (arr[i]>largest){
            largest=arr[i]
        }

    }
    console.log(largest)
}
largestFind([2,3,4,5,88,5])