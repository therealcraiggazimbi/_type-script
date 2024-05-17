const greeting: string = "Hello, World";
console.log(greeting);

type unknownType = { prop1: unknown; prop2: unknown };

const unknownFoo: unknownType = {
  prop1: "Hello",
  prop2: { foo: "bar" },
};

if (
  unknownFoo.prop2 &&
  typeof unknownFoo.prop2 === "object" &&
  Object.hasOwnProperty.call(unknownFoo.prop2, "foo")
) {
  console.log((unknownFoo.prop2 as { foo: unknown }).foo);
}
