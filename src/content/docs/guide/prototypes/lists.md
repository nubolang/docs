---
title: List Prototypes
description: List methods attached to Nubo list values.
sidebar:
  order: 2
---

List values expose collection helpers.

```tsx nubo
let nums = [1, 2, 3]

println(nums.length())
println(nums.includes(2))
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
| `length()` | `int` | Returns the list length. |
| `join(sep: string)` | `string` | Joins items into a string. |
| `each(fn: fn(T) -> void)` | `void` | Calls `fn` for each item. |
| `map(fn: fn(T) -> any)` | `[]any` | Maps each item into a new list. |
| `filter(fn: fn(T) -> bool)` | `[]T` | Keeps items where the function returns `true`. |
| `includes(search: any)` | `bool` | Checks whether the list contains a value. |
| `push(value: T)` | `void` | Adds a value to the end. |
| `insert(index: int, value: T)` | `void` | Inserts a value at `index`. |
| `del(index: int)` | `void` | Deletes the value at `index`. |
| `pop()` | `T` | Removes and returns the last item. |
| `shift()` | `T` | Removes and returns the first item. |
| `unshift(value: T)` | `void` | Adds a value to the beginning. |
| `slice(start: int, end: int)` | `[]T` | Returns a sub-list. |
| `clear()` | `void` | Removes all items. |
| `reverse()` | `void` | Reverses the list in place. |

## Indexed Access

Lists implement internal `__get__` and `__set__`, which power indexed access.

```tsx nubo
let items = ["a", "b", "c"]

println(items[0])

items[1] = "x"

println(items)
```

## Basic Helpers

```tsx nubo
let items = ["a", "b", "c"]

println(items.length())
println(items.join(", "))
println(items.includes("b"))
```

## Adding Values

```tsx nubo
let items = ["a", "b"]

items.push("c")
items.unshift("#")
items.insert(1, "start")

println(items)
```

## Removing Values

```tsx nubo
let items = ["a", "b", "c"]

let last = items.pop()
let first = items.shift()

println(first)
println(last)
println(items)
```

## Mapping and Filtering

```tsx nubo
let nums = [1, 2, 3, 4]

let doubled = nums.map(fn(item: int) int {
    return item * 2
})

let even = nums.filter(fn(item: int) bool {
    return item % 2 == 0
})

println(doubled)
println(even)
```

## Slicing, Reversing, and Clearing

```tsx nubo
let items = ["a", "b", "c", "d"]

println(items.slice(1, 3))

items.reverse()
println(items)

items.clear()
println(items.length())
```
