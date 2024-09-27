class Person {
    constructor(lastName, firstName){
        this.lastName = lastName
        this.firstName = firstName
    }

    getName(){
        let fullName = (`${this.firstName} ${this.lastName}`)
        return fullName
    }

}

class Teacher extends Person {
  
    teach(subject){
        let subjects = subject
        console.log(`${this.firstName} can teach ${subjects}`)
    }
  
  }

const teacher = new Teacher("Fajman", "OG")
console.log(teacher.getName());
teacher.teach("Math")






