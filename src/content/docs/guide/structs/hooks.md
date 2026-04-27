---
title: Struct Hooks
description: Customize struct behavior with internal prototype hooks.
sidebar:
  order: 7
---

Structs can define internal hooks in `impl`.

These hooks let custom structs behave more like built-in values.

| Hook | Description |
| --- | --- |
| `__string__` | Controls string conversion. |
| `__clone__` | Controls clone behavior. |
| `__value__` | Returns an underlying primitive value. |
| `__get__` | Enables indexed reads like `value[key]`. |
| `__set__` | Enables indexed writes like `value[key] = other`. |
| `__iterate__` | Enables `for item in value`. |
| `$convout` | Converts public fields into dictionary-like output. |

## `__string__`

Define `__string__` to control string conversion.

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

let point = Point()
point.x = 10
point.y = 20

println(string(point))
```

## `__clone__`

Define `__clone__` to control how an object is copied.

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

let user = User()
let copied = clone(user)
```

Use `clone(value)` in normal code. Do not call `__clone__` directly unless you are working on internals.

## `__value__`

Define `__value__` to expose an underlying value.

This is useful when a struct wraps a primitive value.

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

`valueof()` is the readable way to get the underlying value.

Some standard types use this pattern. For example, time values can expose an integer value so operations can use the underlying numeric representation.

```tsx nubo
let raw = valueof(time.now())
```

## `__get__` and `__set__`

Define `__get__` and `__set__` to make a struct indexable.

```tsx nubo
struct Store {
    data: dict[string, any]
}

impl Store {
    fn __get__(self: Store, key: string) any {
        return self.data[key]
    }

    fn __set__(self: Store, key: string, value: any) void {
        self.data[key] = value
    }
}

let store = Store()
store.data = {}

store["name"] = "Nubo"

println(store["name"])
```

## `__iterate__`

Define `__iterate__` to make a struct usable in `for` loops.

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

## `$convout`

Nubo automatically adds `$convout` to struct instances.

It converts public fields into a dictionary-like output and skips private fields.

```tsx nubo
struct User {
    name: string
    private password: string
}
```

Only public fields are included in conversion output.

## Hook Best Practice

Use hooks to make custom types integrate with language syntax.

Use normal functions for normal behavior.

```tsx nubo
impl User {
    fn greet(self: User) string {
        return "Hello, " + self.name
    }
}
```

Only use internal names when you need language-level behavior.
