---
title: Collections
description: Work with lists and collection-style operations in Nubo.
sidebar:
  order: 4
---

Lists are ordered collections of values.

## List Literals

Create a list with square brackets:

```tsx nubo
const numbers = [1, 2, 3, 4, 5]
const words = ["hello", "world"]
```

Lists can span multiple lines:

```tsx nubo
const words = [
    "hello",
    "world",
    "example"
]
```

## Empty Lists

Use `[]` to create an empty list:

```tsx nubo
const empty = []
```

## Single-Item Lists

```tsx nubo
const one = [1]
```

## Mixed Lists

Lists can contain mixed values when needed:

```tsx nubo
const mixed = [1, "two", 3.0, true]
println(mixed)
```

## Indexing

Access a list item with square brackets:

```tsx nubo
let all = regex("a\\d+").findAll("x a123 y a456")

for i in all.length() {
    println(all[i])
}
```

## Length

Values that support `length()` can report their size:

```tsx nubo
const words = ["hello", "world"]
println(words.length())
```

## Iterating Over List Indexes

A common pattern is to loop over `list.length()` and index into the list:

```tsx nubo
const numbers = [1, 2, 3]

for i in numbers.length() {
    println(numbers[i])
}
```
