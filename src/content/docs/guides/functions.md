---
title: Functions
description: How to define and use functions in Nubo.
---

Functions in Nubo are first-class citizens. You can define, pass, and return them easily.

## Defining Functions

```nubo
fn greet(name: string) -> string {
  return "Hello, " + name + "!"
}
```

## Calling Functions

```javascript
let message = greet("Martin")
println(message) // Outputs: Hello, Martin!
```

## Anonymous Functions

```nubo
let add = fn(a: int, b: int) -> int {
  return a + b
}

println(add(2, 3)) // Outputs: 5
```

## Higher-Order Functions

```nubo
fn makeMultiplier(factor: int) -> fn(int) -> int {
  return fn(x: int) -> int {
    return x * factor
  }
}

let double = makeMultiplier(2)
print(double(5)) // Outputs: 10
```