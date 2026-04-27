---
title: Defining Structs
description: Define custom data types with fields and create struct instances.
sidebar:
  order: 1
---

Use `struct` to define a custom data type.

```tsx nubo
struct User {
    name: string
    age: int
}
```

Create an instance by calling the struct.

```tsx nubo
let user = User()
```

Assign fields after creation.

```tsx nubo
user.name = "Martin"
user.age = 19
```

Read fields with dot access.

```tsx nubo
println(user.name)
println(user.age)
```

## Field Types

Struct fields have names and types.

```tsx nubo
struct Project {
    name: string
    stars: int
    tags: []string
    meta: dict[string, any]
}
```

## Default Values

When a new instance is created, Nubo initializes all declared fields with default values for their types.

```tsx nubo
struct Counter {
    value: int
    label: string
}

let counter = Counter()

println(counter.value)
println(counter.label)
```

You can then assign actual values.

```tsx nubo
counter.value = 10
counter.label = "views"
```

## Struct Type

The struct itself is a type definition.

```tsx nubo
struct User {
    name: string
}
```

Instances have that struct type.

```tsx nubo
let user = User()

println(type(user))
```

## Struct Definitions vs Instances

A struct definition describes the shape.

```tsx nubo
struct User {
    name: string
}
```

An instance stores values.

```tsx nubo
let user = User()
user.name = "Martin"
```

## Empty Structs

Structs can be empty.

```tsx nubo
struct Marker {}
```

Create an instance:

```tsx nubo
let marker = Marker()
```
