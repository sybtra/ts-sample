/**
 * array specifications
 * string[] array of string or array<string>
 * number[] array of number or array<number>
 */

// variable typ annotation
let myName: string = "Alice";
// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// annonymous function
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// object type
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// optional propertty with ?
function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// union type
function printId(id: string | number) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("comu");
printId(1);
// working with union type no need if they share same properties and methods
function printIdAgain(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// and 
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}


/**
 * type alias same as type annotation
 * same for other types type ID = number | string;
 */
type Point = {
    x: number;
    y: number;
}; // same as th declaration with words interface interface Point {
//     x: number;
//     y: number;
//   } But the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
// Exactly the same as the earlier example
function printCoordTypeAlias(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordTypeAlias({ x: 100, y: 100 });

// variables are converted with the keyword as
// const a = (expr as any) as T;
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
// let changingString: string
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
// literal type declaration
// const constantString: "Hello World";
let x: "hello" = "hello";
// OK
x = "hello";

// function with union type and specific values
function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic");
//   Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
//   Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
