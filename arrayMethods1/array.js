//toString method
Array.prototype.printArray = function(){
    //this refers to the array that we use with the function
    let result = '"' + this[0]; //starting with the first element

    for(let i = 1; i < this.length; i++){

         //looping through the array to add the comma before the element
        result += ',' + this[i];
    }
    result += '"'; //end with a quotation mark
    return result;
}
let arr = ["1","2","3"];
console.log(arr.printArray()); // output: "1,2,3"

//push method
Array.prototype.addLast = function(...arg){ 
    //arg can take in as many arguments as the user input, even if the input has nothing
    //if the user pass in nothing, just print the array
    if(arg.length === 0) return this;

    for(let i = 0; i < arg.length; i++){
        this[this.length] = arg[i]; //this.length return the number of element in the array starting with 1 instead of zero-based index
        //array length automatically adds on no matter what length instead of indexOutOfBounds error like Java (yay!)
    }
    return this;   
}
console.log(arr.addLast()); // output: ["1", "2", "3"]
console.log(arr.addLast("1","2","3","4")); // output: ["1", "2", "3", "1", "2", "3", "4"]

//pop method
Array.prototype.removeLast = function(){
    let remain = this[this.length-1];
    this.length = this.length-1;
    return remain;
}
console.log(arr.removeLast()); // output: 4
console.log(arr); // output: ["1", "2", "3", "1", "2", "3"]

Array.prototype.separator = function(sep){
    if(sep === undefined) return this.printArray();

    let result = '"' + this[0]; //starting with the first element

    for(let i = 1; i < this.length; i++){
        //looping through the array to add the parameter before the element
        result += sep + this[i];
    }
    result += '"'; //end with a quotation mark
    return result;
}
console.log(arr.separator("/")); // output: "1/2/3/1/2/3"
console.log(arr.separator()); // output: "1,2,3,1,2,3"

//concat method
Array.prototype.connect = function(array){

    if(array == undefined) return this;
    //create a new array
    let newArray = [];

    //add each of the element in array1 to newArray
    for(let j = 0; j < this.length; j++){
        newArray.addLast(this[j]);
    } 
    //add each of the element in array2 to newArray
    for(let i = 0; i < array.length; i++){
        newArray.addLast(array[i]);
    }

    return newArray;
}
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
let array = array1.connect(array2);
console.log(array); // output: ["a", "b", "c", "d", "e", "f"]
console.log(array1); // output: ["a", "b", "c"]


//challenge myself!
//shift method
Array.prototype.removeFirst = function(){
    let first = this[0];
    return first;
}
console.log(arr.removeFirst());
console.log(arr);