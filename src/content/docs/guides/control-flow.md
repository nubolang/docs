---
title: Control Flow (if, for, while)
description: Learn how to use if, for, and while statements in Nubo.
---

Nubo supports common control flow constructs to manage the flow of your programs.

## If Statement

```nubo
if condition {
  // code when true
} else {
  // code when false
}
```

Example:

```nubo
let age = 20
if age >= 18 {
    println("Adult")
} else {
    println("Minor")
}
```

## For loop

Iterate over ranges or collections.

### Using range:

```nubo
for i in range(0, 5) {
  println(i)
}
```

### Using a list:

```nubo
let fruits = ["apple", "banana", "cherry"]
for fruit in fruits {
    println(fruit)
}
```

## While Loop

Loop while condition is true:

```nubo
let count = 0
while count < 3 {
  println(count)
  count = count + 1
}
```