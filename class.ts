class Person {
    name : string 
    age :number    
    constructor(){
        this.age =0;
    }
}
class manager extends Person{
    constructor(){
        console.log("hello")
        super()
    }
}