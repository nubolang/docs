---
title: Interfaces
description: Define structural interfaces and pass interface-compatible values in Nubo.
sidebar:
  order: 7
---

Interfaces describe behavior. Any value with the required methods can satisfy an interface.

## Inline Interfaces

Use `iface` to describe the methods a value must provide:

```tsx nubo
fn sayHi(sayer: iface {
    say(msg: string) void
}) void {
    sayer.say("Hi")
}
```

## Structs Implementing Interfaces

Define a struct and add methods with `impl`:

```tsx nubo
struct SayStruct {}

impl SayStruct {
    fn say(msg: string) void {
        println(msg)
    }
}

sayHi(SayStruct())
```

## Named Interfaces

Use `type` to name an interface:

```tsx nubo
type helloer: iface {
    sayHello() void
}
```

Named interfaces make function signatures easier to read:

```tsx nubo
fn interfaceTest(obj: helloer) void {
    obj.sayHello()
}
```

## Example

```tsx nubo
type helloer: iface {
    sayHello() void
}

struct User {
    name: string
}

impl User {
    fn init(self: User, name: string) void {
        self.name = name
    }

    fn sayHello(self: User) void {
        println(`Hi! I am ${self.name}!`)
    }
}

const john = User("John")
interfaceTest(john)
```
