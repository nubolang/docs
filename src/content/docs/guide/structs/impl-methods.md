---
title: Impl Methods
description: Attach methods to structs with impl blocks and automatic self binding.
sidebar:
  order: 3
---

Use `impl` to attach methods to a struct.

```tsx nubo
struct User {
    name: string
}

impl User {
    fn greet(self: User) string {
        return "Hello, " + self.name
    }
}
```

Create an instance and call the method.

```tsx nubo
let user = User()
user.name = "Martin"

println(user.greet())
```

## Automatic `self` Binding

When a function attached to a struct expects the struct instance as its first argument, Nubo binds the current instance automatically.

This method:

```tsx nubo
fn greet(self: User) string {
    return "Hello, " + self.name
}
```

Can be called like this:

```tsx nubo
user.greet()
```

Nubo passes `user` as the first argument internally.

## Methods with Extra Arguments

```tsx nubo
struct User {
    name: string
}

impl User {
    fn rename(self: User, name: string) void {
        self.name = name
    }
}

let user = User()
user.rename("Nubo")

println(user.name)
```

## Methods Can Return Values

```tsx nubo
struct Point {
    x: int
    y: int
}

impl Point {
    fn label(self: Point) string {
        return "(" + string(self.x) + ", " + string(self.y) + ")"
    }
}

let point = Point()
point.x = 10
point.y = 20

println(point.label())
```

## Methods Can Mutate Fields

```tsx nubo
struct Counter {
    value: int
}

impl Counter {
    fn increment(self: Counter) void {
        self.value = self.value + 1
    }
}

let counter = Counter()

counter.increment()
counter.increment()

println(counter.value)
```

## Impl Adds to the Prototype

Methods added inside `impl` are stored on the struct prototype.

Each instance receives those implemented methods.

```tsx nubo
let a = Counter()
let b = Counter()

a.increment()
b.increment()
b.increment()

println(a.value)
println(b.value)
```

Each instance has its own fields, but they share the same implemented behavior.
