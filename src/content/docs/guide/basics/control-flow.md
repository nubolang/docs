---
title: Control Flow
description: Use if statements, loops, break, and nil checks in Nubo.
sidebar:
  order: 3
---

Nubo includes straightforward control flow for branching and looping.

## If Statements

Use `if` to run code conditionally:

```tsx nubo
if x > 1 {
    println("x is greater than 1")
}
```

Conditions usually use comparison operators such as `==`.

## For Loops

Use `for` to repeat code.

When looping over an integer, Nubo iterates from `0` up to that number:

```tsx nubo
for i in 15 {
    println(i)
}
```

This prints numbers starting from `0`.

## Loop Variables

The loop variable is available inside the loop body:

```tsx nubo
let sum = 0

for i in 10_000 {
    sum = sum + i
}

println("Sum:", sum)
```

## Break

Use `break` to exit a loop early:

```tsx nubo
fn x() void {
    for i in 10 {
        if i == 5 {
            break
        }
    }
}

x()
```

## Nil Checks

Use `nil` to represent a missing value:

```tsx nubo
let value: string|nil = "Hello"

if isNil(value) {
    println("No value")
}
```
