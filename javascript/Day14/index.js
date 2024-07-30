// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Welcome to ${this.name}!`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
    
//         super(name, age);
//         this.studentId = studentId;
//     }


//     displayStudentId() {
//         return `Student ID: ${this.studentId}`;
//     }

//     greet() {
//         return `Welcome to student whose ID is ${this.studentId}`;
//     }
// }

// const student = new Student("Adarsh", 22, "S12345");
// console.log(student.greet()); 
// console.log(student.displayStudentId()); 
// console.log(student.greet())


// class Person {
//     static getGenericGreeting() {
//       return "Hello, I am a person!";
//     }
//   }
  
//   console.log(Person.getGenericGreeting());



//   class Student {
//     static totalStudents = 0;
  
//     constructor() {
//       Student.totalStudents++;
//     }
//   }
  
//   let student1 = new Student();
//   let student2 = new Student();
//   let student3 = new Student();
//   let student4 = new Student();
//   console.log(`Total number of students: ${Student.totalStudents}`);


  class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    set fullName(name) {
      [this._firstName, this._lastName] = name.split(' ');
    }
  }
  
  let person = new Person("Adarsh", "Singh");
  console.log(person.fullName); 
  
  person.fullName = "Hooo Lala";
  console.log(person.fullName);  


  class Account {
    #balance = 0;
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log("Insufficient funds or invalid amount");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  let account = new Account();
  account.deposit(1000);
  account.withdraw(500);
  account.withdraw(700);  
  console.log(`Final balance: ${account.getBalance()}`);