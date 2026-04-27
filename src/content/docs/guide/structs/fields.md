---
title: Struct Fields
description: Work with struct fields, type checking, default values, and field iteration.
sidebar:
  order: 2
---

Struct fields are typed values stored on each instance.

```tsx nubo
struct User {
    name: string
    age: int
}

let user = User()

user.name = "Martin"
user.age = 19
```

## Field Access

Use dot access to read fields.

```tsx nubo
println(user.name)
println(user.age)
```

## Field Assignment

Assign fields with `=`.

```tsx nubo
user.name = "Nubo"
```

## Type Checking

Field assignments are type-checked.

```tsx nubo
struct User {
    age: int
}

let user = User()

user.age = 19
```

This is valid because `age` expects an `int`.

This is invalid:

```tsx nubo
// Runtime/type error:
user.age = "nineteen"
```

## Unknown Fields

Struct instances are locked after creation. You cannot freely add random fields unless they were declared or implemented through `impl`.

```tsx nubo
struct User {
    name: string
}

let user = User()

// Error:
user.email = "hello@example.com"
```

Declare the field if it should exist:

```tsx nubo
struct User {
    name: string
    email: string
}
```

## Iterating Struct Fields

Struct instances can be iterated as key/value pairs over declared fields.

```tsx nubo
struct User {
    name: string
    age: int
}

let user = User()
user.name = "Martin"
user.age = 19

for key, value in user {
    println(key, value)
}
```

The key is the field name. The value is the field value.

## Public Output

Structs have an internal `$convout` hook that converts public fields into a dictionary-like output.

Private fields are skipped.

```tsx nubo
struct User {
    name: string
    private password: string
}
```

Only `name` is included in public conversion output.
