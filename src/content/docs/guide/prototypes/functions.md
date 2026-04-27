---
title: Function Prototypes
description: Function metadata and initialized calls in Nubo.
sidebar:
  order: 6
---

Functions also have prototypes.

Function prototypes expose metadata and allow initialized calls.

```tsx nubo
fn add(a: int, b: int) int {
    return a + b
}

println(add.__args__)
println(add.__returns__)
```

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


## Prototype Values

| Name | Type | Description |
| --- | --- | --- |
| `__args__` | `[]dict[string, any]` | Function argument metadata. |
| `__returns__` | `string | []string` | Return type metadata. |

Each item in `__args__` contains:

| Key | Description |
| --- | --- |
| `name` | Argument name. |
| `type` | Argument type as a string or list of strings for union types. |
| `default` | Default value, or `nil`. |

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `init(...args)` | `fn() -> R` | Captures arguments and returns an initialized zero-argument function. |
| `call(...args)` | `R` | Calls the function, but should be used only from an initialized function context. |

## Metadata Example

```tsx nubo
fn greet(name: string) string {
    return "Hello, " + name
}

println(greet.__args__)
println(greet.__returns__)
```

## Initialized Function Example

```tsx nubo
fn greet(name: string) string {
    return "Hello, " + name
}

let martin = greet.init("Martin")

println(martin())
```

The lower-level `call` method expects an initialized function context, so direct use can error.

```tsx nubo
fn greet(name: string) string {
    return "Hello, " + name
}

// Prefer init for normal usage:
let ready = greet.init("Nubo")
println(ready())
```
