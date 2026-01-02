// Primitives: string, number, boolean, null, undefined
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let myName: string;
myName = "Renan";

let myAge: number;
myAge = 30;

let hasHobbies: boolean;
hasHobbies = true;

// More complex types
let hobbies: string[];
hobbies = ["Cooking", "Sports"];

let person: { name: string; age: number };
person = {
  name: "Renan",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];

//Type inference
let course = "Angular - The Complete Guide";

// course = 12341; // This will cause an error, as course is inferred to be a string

// Union types
let myRealAge: number | string;
myRealAge = 30;
myRealAge = "30";

// Type Aliases
type Person = {
  name: string;
  age: number;
};

let employee: Person;
let employees: Person[];

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  // value can be of any type, and function returns nothing
  console.log(value);
}

printOutput(add(5, 12));

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numberArray = insertAtBeginning<number>([1, 2, 3], 0);
const stringArray = insertAtBeginning<string>(["b", "c", "d"], "a");

console.log(numberArray); // [0, 1, 2, 3]
console.log(stringArray); // ['a', 'b', 'c', 'd']

// Classes
class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[] = []
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  getCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Renan", "Garcia", 30);
student.enroll("Angular");
student.enroll("TypeScript");
console.log(student.getCourses()); // ['Angular', 'TypeScript']

// Interfaces
interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let renan: Human;

renan = {
  firstName: "Renan",
  age: 30,
  greet() {
    console.log("Hello, I am " + this.firstName);
  },
};

renan.greet();

class Engineer implements Human {
  constructor(public firstName: string, public age: number) {}

  greet() {
    console.log("Hello, I am engineer " + this.firstName);
  }
}

let engineer = new Engineer("Renan", 32);
engineer.greet();
