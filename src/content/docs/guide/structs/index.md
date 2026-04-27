---
title: Structs
description: Learn how structs, instances, fields, methods, constructors, private fields, singleton patterns, and hooks work in Nubo.
sidebar:
  order: 0
---

Structs are Nubo's way to define custom data types.

A struct describes fields and their types. Calling the struct creates an instance.

```tsx nubo
struct User {
    name: string
    age: int
}

let user = User()

user.name = "Martin"
user.age = 19

println(user.name)
```

## What Structs Give You

| Feature | Description |
| --- | --- |
| Fields | Named, typed values stored on each instance. |
| Instances | Created by calling the struct, like `User()`. |
| Type checking | Assigning a field checks the value type. |
| `impl` methods | Attach behavior to a struct. |
| Private fields | Hide fields from outside code. |
| Constructors | Use `init` to initialize instances. |
| Singleton patterns | Return the same instance from `init`. |
| Hooks | Customize string conversion, cloning, value conversion, indexing, iteration, and output. |

## Pages

| Page | Description |
| --- | --- |
| [Defining Structs](./defining-structs) | Create structs, fields, instances, and default values. |
| [Fields](./fields) | Field access, assignment, type checking, and iteration. |
| [Impl Methods](./impl-methods) | Attach methods to structs and understand automatic `self` binding. |
| [Constructors and Init](./constructors-init) | Initialize instances with `init`. |
| [Singleton Structs](./singletons) | Return a shared instance from `init`. |
| [Private Fields](./private-fields) | Protect fields and expose controlled methods. |
| [Struct Hooks](./hooks) | Use `__string__`, `__clone__`, `__value__`, `__get__`, `__set__`, `__iterate__`, and `$convout`. |
| [Examples](./examples) | Complete struct examples. |
