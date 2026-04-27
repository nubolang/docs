---
title: Constructors and Init
description: Initialize structs with init and understand when init should return void or a replacement instance.
sidebar:
  order: 4
---

A struct can define an `init` method inside `impl`.

`init` is used to initialize a newly created instance.

```tsx nubo
struct User {
    name: string
    age: int
}

impl User {
    fn init(self: User, name: string, age: int) void {
        self.name = name
        self.age = age
    }
}
```

Now the struct can be created with arguments.

```tsx nubo
let user = User("Martin", 19)

println(user.name)
println(user.age)
```

## `void` Init Is the Clean Default

For normal initialization, use `void`.

The `self` passed into `init` is already the same instance that the constructor call will use.

```tsx nubo
impl User {
    fn init(self: User, name: string) void {
        self.name = name
    }
}
```

This is clean and avoids returning `self` when you do not need to replace it.

```tsx nubo
let user = User("Martin")
```

## Return a Struct Only When Replacing `self`

Return the struct type from `init` only when the pre-created `self` is not the value you want the constructor to produce.

This is useful for factory-like constructors, cached instances, or singletons.

```tsx nubo
struct Config {
    name: string
}

let configInstance: Config = nil

impl Config {
    fn init(self: Config) Config {
        if !isNil(configInstance) {
            return configInstance
        }

        self.name = "Nubo"
        configInstance = self

        return self
    }
}
```

Here, `init` returns `Config` because it may return an already existing instance instead of the newly created `self`.

## Normal Init Example

Use `void` when every constructor call should initialize the new instance.

```tsx nubo
struct Server {
    host: string
    port: int
}

impl Server {
    fn init(self: Server, host: string = "127.0.0.1", port: int = 3000) void {
        self.host = host
        self.port = port
    }
}

let server = Server()
let custom = Server("0.0.0.0", 8080)

println(server.host)
println(custom.port)
```

## Validation in Init

Use `init` for validation and setup.

```tsx nubo
struct RangeLike {
    start: int
    stop: int
    step: int
}

impl RangeLike {
    fn init(self: RangeLike, start: int, stop: int, step: int = 1) void {
        if step == 0 {
            panic("step cannot be 0")
        }

        self.start = start
        self.stop = stop
        self.step = step
    }
}
```

## Return Type Choice

| Init return type | Use when |
| --- | --- |
| `void` | You are initializing the provided `self`. This is the normal and cleaner case. |
| Struct type | You may return a different instance than `self`, such as a singleton or cached object. |

## Constructor vs Factory Function

Use `init` when initialization belongs to the struct.

```tsx nubo
let user = User("Martin")
```

Use a normal function when creation needs external logic or multiple possible return types.

```tsx nubo
fn createGuest() User {
    let user = User()
    user.name = "Guest"

    return user
}
```
