---
title: Functions
description: Learn how to declare functions, anonymous functions, callbacks, and return types in Nubo.
sidebar:
  order: 2
---

Functions in Nubo can be declared by name or created inline as values.

## Named Functions

Use the `fn` keyword to declare a function:

```tsx nubo
fn add(a: int, b: int) int {
    return a + b
}

println(add(2, 3))
```

## Void Functions

Use `void` when a function does not return a value:

```tsx nubo
fn say(message: string) void {
    println(message)
}

say("Hello")
```

## Anonymous Functions

Anonymous functions can be assigned to variables or passed as arguments:

```tsx nubo
let add = fn(a: int, b: int) int {
    return a + b
}

println(add(1, 2))
```

They are especially useful for callbacks:

```tsx nubo
let total: int = 0

bytes("hello").map(int).each(fn(n: int) {
    total = total + n
})

println(total)
```

## Returning Values

Use `return` to return a value from a function:

```tsx nubo
type hasLen: iface {
    length() int
}

fn length(obj: hasLen) int {
    return obj.length()
}
```

## Function Parameters

Parameters are written with a name and type:

```tsx nubo
fn greet(name: string) void {
    println("Hello", name)
}
```

## Interface Parameters

A function can accept any value matching an inline interface:

```tsx nubo
type hasLen: iface {
    length() int
}

fn len(obj: hasLen) int {
    return obj.length()
}

const name: string = "John"
println(len(name))
```
