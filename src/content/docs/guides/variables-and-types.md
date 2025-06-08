---
title: Variables and Types
description: Understand how variables and data types work in Nubo.
---

Nubo provides a clean and expressive type system.

## Declaring Variables

Use the `let` keyword:

```javascript
let name = "Martin"
let age = 19
let isAdmin = true
```


## Constants

Use `const` for immutable values:

```javascript
const VERSION = "1.0.0"
```

## Built-in Types

- `int` — whole numbers
- `float` — decimal numbers
- `bool` — `true` or `false`
- `string` — text values
- `char` — single character
- `[]T` — list of items
- `dict[K, V]` — key-value storage
- `fn(...) -> ...` — function types
- `struct` — custom data types
- `any` — any type

## Type Inference

Types are inferred when not specified:

```javascript
let title = "Nubo" // string
let count = 5 // int
```

## Type Annotations

Types can be explicitly defined:

```javascript
let x: int = 5
let y: []string = ["a", "b"]
```


## Structs

Custom types using `struct`:

```nubo
struct User {
    name: string
    roles: []string
    data: dict[string, int]
}
```

## Functions

Function types are first-class:

```nubo
let add = fn(a: int, b: int) -> int {
    return a + b
}
```

Or:

```
fn add(a: int, b: int) -> int {
    return a + b
}
```