//Primitives: number, string, boolean
let age: number;
age = 24;

let userName: string;
userName = "Mg Mg";

let isAdmin: boolean;
isAdmin = true || false;

let course: string | number = "React + Typescript";
course = 96;

//More complex types: array, objects
let hobbies: string[];
hobbies = ["coding", "music", "table tennis"];

let customer: {
  name: string;
  age: number;
  active: boolean;
};
customer = {
  name: "Kyaw Kyaw",
  age: 32,
  active: true,
};

let people: {
    name: string;
    age: number;
    active: boolean;
}[];


//Type Aliases
type Person = {
    name: string;
    age: number;
    active: boolean;
}
let root: Person;
let admin: Person[];


//Function types, parameters
function substract(a: number, b: number) {
    return a- b;
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const testArray = [1, 2, 3];
const updatedArray = insertAtBeginning(testArray, 5); //Expected : [5, 1, 2, 3]

const nextArray = insertAtBeginning(['1', '2', '3'], '10'); //Expected: ['10','1', '2','3']