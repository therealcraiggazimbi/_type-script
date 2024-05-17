var greeting = "Hello, World";
console.log(greeting);
var unknownFoo = {
    prop1: "Hello",
    prop2: { foo: "bar" },
};
if (unknownFoo.prop2 &&
    typeof unknownFoo.prop2 === "object" &&
    Object.hasOwnProperty.call(unknownFoo.prop2, "foo")) {
    console.log(unknownFoo.prop2.foo);
}
