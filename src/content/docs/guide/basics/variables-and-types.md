---
title: Variables and Types
description: Understand how variables, constants, and data types work in Nubo.
sidebar:
  order: 1
---

Nubo provides a clean and expressive type system with type inference, explicit annotations, structs, interfaces, and union types.

## Declaring Variables

Use the `let` keyword for mutable values:

```tsx nubo
let name = "Martin"
let age = 19
let isAdmin = true
```

Variables declared with `let` can be reassigned:

```tsx nubo
let sum = 0
sum = sum + 10
```

## Constants

Use `const` for immutable values:

```tsx nubo
const VERSION = "1.0.0"
```

Constants are useful for values that should not change after initialization.

## Built-in Types

Nubo includes common built-in types:

- `byte` — single byte (`bytes` can be used to convert values to a `[]byte`)
- `int` — whole numbers
- `float` — decimal numbers
- `bool` — `true` or `false`
- `string` — text values
- `char` — a single character
- `[]T` — a list of values of type `T`
- `dict[K, V]` — key-value storage
- `fn(...) -> ...` — function types (`->` only required for the type declaration of the function, not the actual use)
- `struct` — custom data types
- `iface` — structural interfaces
- `nil` — an empty or missing value
- `any` — any type

## Type Inference

Types are inferred when not specified:

```tsx nubo
let title = "Nubo" // string
let count = 5      // int
let enabled = true // bool
```

## Type Annotations

Types can be explicitly defined using `:`:

```tsx nubo
let x: int = 5
const name: string = "John"
let names: []string = ["Ana", "Bob"]
```

## Union Types

A value can accept more than one type using `|`:

```tsx nubo
let s: string|nil = "Hello"
```

Union types are useful when a value may be present or missing.

```tsx nubo
if s == nil {
    println("No value")
}
```

You can also create named union types:

```tsx nubo
type NumberOrText: int|string
```

## Type Queries

Use `type()` to inspect the runtime type of a value:

```tsx nubo
let s: string|nil = "Hello"
println(s, type(s))
```

## Structs

Create custom data types with `struct`:

```tsx nubo
struct User {
    name: string
    roles: []string
    data: dict[string, int]
}
```

Structs can be constructed by calling the struct name:

```tsx nubo
const user = User("John")
```

## Methods with `impl`

Use `impl` to define methods for a struct:

```tsx nubo
struct User {
    name: string
}

impl User {
    fn init(self: User, name: string) void {
        self.name = name
    }

    fn sayHello(self: User) void {
        println(`Hi! I am ${self.name}!`)
    }
}

const john = User("John")
john.sayHello()
```

## Function Types

Functions are first-class values:

```tsx nubo
let add = fn(a: int, b: int) int {
    return a + b
}
```

Functions can also be declared by name:

```tsx nubo
fn add(a: int, b: int) int {
    return a + b
}
```

Use `void` when a function does not return a value:

```tsx nubo
fn log(message: string) void {
    println(message)
}
```
