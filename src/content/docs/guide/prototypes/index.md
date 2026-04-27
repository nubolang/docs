---
title: Type Prototypes
description: Learn how Nubo attaches functions to values through type prototypes.
sidebar:
  order: 0
---

Nubo values can have functions attached to them through **type prototypes**.

A prototype is like a method table for a value. It lets you call functions directly on values:

```tsx nubo
let s = "hello"

println(s.length())
println(s.toUpperCase())
```

This means many values in Nubo are not just raw data. They can expose useful behavior.

## Prototype Pages

| Page | Description |
| --- | --- |
| [Strings](./strings) | String helpers like `length`, `includes`, `split`, `trim`, and case conversion. |
| [Lists](./lists) | List helpers like `push`, `pop`, `map`, `filter`, `slice`, and indexed access. |
| [Dictionaries](./dictionaries) | Dictionary helpers like `keys`, `values`, `remove`, and indexed access. |
| [Integers](./integers) | Integer helpers like `increment` and `decrement`. |
| [HTML Elements](./html-elements) | Attribute and children helpers for `html` values. |
| [Functions](./functions) | Function metadata and initialized calls. |
| [Structs](./structs) | Struct fields, methods, private fields, and special hooks. |
| [Internal Hooks](./internal-hooks) | Internal names like `__get__`, `__set__`, `__args__`, and `__returns__`. |

## Current Literal Limitation

Prototype calls currently work reliably on values stored in variables.

```tsx nubo
let s = "string"

println(s.length())
```

Calling prototype methods directly on literals is currently limited by AST/parser behavior.

```tsx nubo
// Currently may not work:
println("string".length())
```

Prefer assigning the literal to a variable first.

```tsx nubo
let text = "string"

println(text.length())
```


## Best Practice

Use prototype methods when they make code easier to read.

```tsx nubo
let text = "a,b,c"
let parts = text.split(",")

println(parts)
```

Avoid direct literal method calls until AST support is complete.

```tsx nubo
// Avoid for now:
println("hello".length())
```
