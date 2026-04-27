---
title: Internal Prototype Hooks
description: Internal prototype hooks that power Nubo indexing, iteration, string conversion, cloning, value conversion, and struct behavior.
sidebar:
  order: 8
---

Internal prototype hooks are special prototype members that the Nubo runtime looks for when it needs to perform language-level behavior.

Most user code should use normal syntax:

```tsx nubo
list[0]
dict["name"]
string(value)
clone(value)
valueof(value)
for item in value {
    println(item)
}
```

Instead of calling internal hooks directly.

However, structs can define these hooks through `impl`, which lets custom types participate in built-in language behavior.

## Hook Reference

| Hook | Purpose |
| --- | --- |
| `__get__` | Handles indexed access like `value[key]`. |
| `__set__` | Handles indexed assignment like `value[key] = other`. |
| `__iterate__` | Makes a value iterable in `for` loops. |
| `__value__` | Returns an underlying primitive value for operations and `valueof()`. |
| `__string__` | Returns a string representation of a value. |
| `__clone__` | Controls custom clone behavior. |
| `__args__` | Function argument metadata. |
| `__returns__` | Function return metadata. |

## Hooks on Built-in Values

Many built-in values already use internal hooks.

Lists use `__get__` and `__set__` for index access:

```tsx nubo
let items = ["a", "b"]

println(items[0])

items[1] = "x"

println(items)
```

Dictionaries use `__get__` and `__set__` for key access:

```tsx nubo
let user = {
    "name": "Nubo"
}

println(user["name"])

user["name"] = "Cloud"

println(user["name"])
```

HTML elements use `__get__` and `__set__` for attributes:

```tsx nubo
let button = <button>Save</button>

button["id"] = "save-button"

println(button["id"])
```

Strings use `__get__` for character access:

```tsx nubo
let text = "hello"

println(text[1])
```

## Structs Can Define Hooks

When a struct defines hook methods inside `impl`, those methods become part of the struct instance prototype.

That means user-defined structs can behave like built-in values.

```tsx nubo
struct Box {
    value: any
}

impl Box {
    fn __string__(self: Box) string {
        return "Box(" + string(self.value) + ")"
    }
}

let box = Box()
box.value = 123

println(string(box))
```

In this example, `Box` defines `__string__`, so string conversion can use that hook.

## `__get__`

`__get__` powers indexed access.

```tsx nubo
value[key]
```

Built-in examples:

```tsx nubo
let items = ["a", "b"]
println(items[0])
```

```tsx nubo
let user = {
    "name": "Nubo"
}
println(user["name"])
```

A custom struct can define `__get__` to support index-like reads.

```tsx nubo
struct Store {
    data: dict[string, any]
}

impl Store {
    fn __get__(self: Store, key: string) any {
        return self.data[key]
    }
}

let store = Store()
store.data = {
    "name": "Nubo"
}

println(store["name"])
```

Use this when your type behaves like a dictionary, list, element, or other container.

## `__set__`

`__set__` powers indexed assignment.

```tsx nubo
value[key] = other
```

Built-in examples:

```tsx nubo
let items = ["a", "b"]

items[0] = "x"
```

```tsx nubo
let user = {
    "name": "Nubo"
}

user["name"] = "Cloud"
```

A custom struct can define `__set__` to support index-like writes.

```tsx nubo
struct Store {
    data: dict[string, any]
}

impl Store {
    fn __set__(self: Store, key: string, value: any) void {
        self.data[key] = value
    }

    fn __get__(self: Store, key: string) any {
        return self.data[key]
    }
}

let store = Store()
store.data = {}

store["name"] = "Nubo"

println(store["name"])
```

## `__value__`

`__value__` returns the underlying value of an object.

It is used when Nubo needs a primitive value from a struct-like object.

This is useful when a struct should behave like a number, string, or other base value during operations.

For example, the standard `time.Time` value can expose an integer-like value. That means an expression like this can work instead of failing immediately:

```tsx nubo
let future = time.now() + 10
```

The reason is that the time value can provide an underlying integer through `__value__`.

## `valueof()`

The built-in `valueof()` function is the readable way to get the value returned by `__value__`.

```tsx nubo
let raw = valueof(value)
```

Use `valueof()` in normal code instead of calling `__value__` directly.

```tsx nubo
import time from "@std/time"

let now = time.now()
let raw = valueof(now)

println(raw)
```

A custom struct can define `__value__`.

```tsx nubo
struct Counter {
    value: int
}

impl Counter {
    fn __value__(self: Counter) any {
        return self.value
    }
}

let counter = Counter()
counter.value = 10

println(valueof(counter))
```

This makes the intent clearer than calling the hook manually.

```tsx nubo
// Prefer:
println(valueof(counter))

// Avoid in normal code:
println(counter.__value__())
```

## `__iterate__`

`__iterate__` makes a value iterable.

When Nubo sees a `for` loop, it can use `__iterate__` to get an iterator from the value.

```tsx nubo
for item in value {
    println(item)
}
```

If `value` has a `__iterate__` hook, Nubo can call it to produce an iterator.

The iterator protocol is based on the `@std/iter` types:

| Type | Purpose |
| --- | --- |
| `Iterator` | Holds a function that returns the next progress value. |
| `Progress` | Represents one iteration step. |
| `End` | A special progress value meaning iteration is finished. |

A progress value usually contains:

| Field | Description |
| --- | --- |
| `key` | Iteration key or index. |
| `value` | Iteration value. |
| `end` | Whether the iterator is done. |

## Built-in `range`

Nubo includes a built-in `range` struct.

It has these fields:

| Field | Type | Description |
| --- | --- | --- |
| `start` | `int` | Start value. |
| `stop` | `int` | Stop value. |
| `step` | `int` | Step amount. |

`range` implements `__iterate__`, so it works in `for` loops.

```tsx nubo
for i in range(5) {
    println(i)
}
```

This is equivalent to starting at `0` and stopping before `5`.

```tsx nubo
for i in range(0, 5) {
    println(i)
}
```

Use a custom step:

```tsx nubo
for i in range(0, 10, 2) {
    println(i)
}
```

Use a negative step:

```tsx nubo
for i in range(5, 0, -1) {
    println(i)
}
```

A `step` of `0` is invalid.

```tsx nubo
// Runtime error:
for i in range(0, 10, 0) {
    println(i)
}
```

The range iterator stops when:

| Step | Stop condition |
| --- | --- |
| Positive step | `current >= stop` |
| Negative step | `current <= stop` |

## Custom `__iterate__`

You can use `__iterate__` on custom structs to make them work with `for`.

A custom iterable should return an `Iterator`.

```tsx nubo
import iter from "@std/iter"

struct CountTo {
    stop: int
}

impl CountTo {
    fn __iterate__(self: CountTo) iter.Iterator {
        let current = 0

        return iter.Iterator(fn() iter.Progress {
            if current >= self.stop {
                return iter.End
            }

            let value = current
            current = current + 1

            return iter.Progress(value, value)
        })
    }
}

let counter = CountTo()
counter.stop = 3

for i in counter {
    println(i)
}
```

Expected output:

```txt
0
1
2
```

This pattern is useful for custom collections, streams, cursors, query results, ranges, and generated sequences.

## `__string__`

`__string__` returns a string representation of a value.

Nubo can use this hook when converting a value to a string.

```tsx nubo
struct User {
    name: string
}

impl User {
    fn __string__(self: User) string {
        return "User(" + self.name + ")"
    }
}

let user = User()
user.name = "Martin"

println(string(user))
```

Expected output:

```txt
User(Martin)
```

Use `__string__` when your struct should have a clear readable representation.

Good examples:

```tsx nubo
struct Point {
    x: int
    y: int
}

impl Point {
    fn __string__(self: Point) string {
        return "Point(" + string(self.x) + ", " + string(self.y) + ")"
    }
}
```

## `__clone__`

`__clone__` controls how a value is cloned.

When a struct has custom ownership or nested data, `__clone__` can return a controlled copy.

```tsx nubo
struct User {
    name: string
    roles: []string
}

impl User {
    fn __clone__(self: User) User {
        let copy = User()
        copy.name = self.name
        copy.roles = clone(self.roles)

        return copy
    }
}
```

Use the built-in `clone()` function in normal code.

```tsx nubo
let copied = clone(user)
```

Prefer:

```tsx nubo
let copied = clone(user)
```

Avoid calling the hook directly:

```tsx nubo
// Avoid in normal code:
let copied = user.__clone__()
```

## Function Metadata Hooks

Functions expose metadata through prototype values.

```tsx nubo
fn add(a: int, b: int) int {
    return a + b
}

println(add.__args__)
println(add.__returns__)
```

## `__args__`

`__args__` contains function argument metadata.

Each argument can include:

| Key | Description |
| --- | --- |
| `name` | Argument name. |
| `type` | Argument type. |
| `default` | Default value, or `nil`. |

Example:

```tsx nubo
fn greet(name: string, excited: bool = false) string {
    if excited {
        return "Hello, " + name + "!"
    }

    return "Hello, " + name
}

println(greet.__args__)
```

## `__returns__`

`__returns__` contains return type metadata.

```tsx nubo
fn greet(name: string) string {
    return "Hello, " + name
}

println(greet.__returns__)
```

For union returns, this can be represented as multiple possible type names.

## Hook Best Practices

Use normal language syntax when possible.

```tsx nubo
list[0]
dict["name"]
element["id"]
for item in value {
    println(item)
}
string(value)
clone(value)
valueof(value)
```

Use internal hooks when you are implementing behavior for a custom struct.

```tsx nubo
impl Store {
    fn __get__(self: Store, key: string) any {
        return self.data[key]
    }

    fn __set__(self: Store, key: string, value: any) void {
        self.data[key] = value
    }
}
```

Avoid calling hooks directly from regular app code.

```tsx nubo
// Prefer:
println(valueof(counter))

// Avoid:
println(counter.__value__())
```

## Summary

| Hook | User-facing behavior |
| --- | --- |
| `__get__` | Enables `value[key]`. |
| `__set__` | Enables `value[key] = other`. |
| `__iterate__` | Enables `for item in value`. |
| `__value__` | Enables readable conversion through `valueof(value)` and can help operations use an underlying primitive. |
| `__string__` | Enables readable string conversion through `string(value)`. |
| `__clone__` | Enables custom copying through `clone(value)`. |
| `__args__` | Exposes function argument metadata. |
| `__returns__` | Exposes function return metadata. |
