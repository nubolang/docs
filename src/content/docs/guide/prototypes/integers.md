---
title: Integer Prototypes
description: Integer methods attached to Nubo int values.
sidebar:
  order: 4
---

Integer values expose mutation helpers.

```tsx nubo
let count = 1

count.increment()

println(count)
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


## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `increment()` | `void` | Increments the integer by `1`. |
| `decrement()` | `void` | Decrements the integer by `1`. |

## Example

```tsx nubo
let count = 0

count.increment()
count.increment()
count.decrement()

println(count)
```
