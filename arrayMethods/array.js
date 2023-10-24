Array.prototype.printArray = function(){
    //this refers to the array that we use with the function
    let result = '"' + this[0]; //starting with the first element
    for(let i = 1; i < this.length; i++){
         //looping through the array to add the comma before the element
        result += ', ' + this[i];
    }
    result += '"'; //end with a quotation mark
    return result;
}
let arr = ["1","2","3"];
console.log(arr.printArray());

Array.prototype.add = function(...arg){
    //arg can take in as many arguments as the user input, even if the input has nothing
    //if the user pass in nothing, just print the array
    if(arg.length === 0) return this.printArray();

    for(let i = 0; i < arg.length; i++){
        this[this.length] = arg[i]; //this.length return the number of element in the array starting with 1 instead of zero-based index
        //array length automatically adds on no matter what length instead of indexOutOfBounds error like Java (yay!)
    }
    return this;   
}
console.log(arr.add("1","2","3","4"));
console.log(arr.add());


Array.prototype.removeLast = function(){
    // let remain = this[this.length-1];
    this.length = this.length-1;
    return this;
}
let r = arr.removeLast();
console.log(arr.removeLast());
console.log(r); //undone

Array.prototype.separator = function(){

}

Array.prototype.connect = function(){
    
}