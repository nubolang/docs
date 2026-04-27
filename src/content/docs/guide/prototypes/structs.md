---
title: Struct Prototypes
description: Struct fields, methods, private fields, and special hooks in Nubo.
sidebar:
  order: 7
---

Struct instances use prototypes for fields and implemented methods.

```tsx nubo
struct User {
    name: string
}

let user = User()
user.name = "Martin"

println(user.name)
```

## Struct Methods with `impl`

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

let user = User()
user.name = "Martin"

println(user.greet())
```

When a function attached to a struct expects the struct instance as its first argument, Nubo binds the current instance automatically.

That means this method:

```tsx nubo
fn greet(self: User) string {
    return "Hello, " + self.name
}
```

Can be called like this:

```tsx nubo
user.greet()
```

## Private Struct Fields

Struct prototypes can enforce private fields.

Private fields cannot be modified outside the implementation context.

```tsx nubo
struct User {
    private password: string
    name: string
}
```

Use methods inside `impl` to control access.

```tsx nubo
impl User {
    fn setPassword(self: User, password: string) void {
        self.password = password
    }
}
```

## Special Struct Prototype Hooks

Struct instances can define special prototype hooks.

| Hook | Description |
| --- | --- |
| `__string__` | Controls how the struct is converted to a string. |
| `__clone__` | Controls how the struct is cloned. |
| `$convout` | Converts public fields into a dictionary-like output. |

## `__string__`

If a struct instance has a `__string__` function returning `string`, Nubo uses it for string conversion.

```tsx nubo
struct User {
    name: string
}

impl User {
    fn __string__(self: User) string {
        return "User(" + self.name + ")"
    }
}
```

## `__clone__`

If a struct instance has a `__clone__` function, Nubo uses it when cloning.

```tsx nubo
struct User {
    name: string
}

impl User {
    fn __clone__(self: User) User {
        let copy = User()
        copy.name = self.name

        return copy
    }
}
```
