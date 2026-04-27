---
title: Strings
description: Work with strings, interpolation, concatenation, and string-like interfaces in Nubo.
sidebar:
  order: 6
---

Strings are text values.

## String Literals

Use single or double quotes for strings:

```tsx nubo
const name: string = "John"
println(name)
```

## Concatenation

Use `+` to concatenate strings:

```tsx nubo
const data = "Nubo"
println(data + "!")
```

## Template Strings

Use backticks for template strings with `${...}` interpolation:

```tsx nubo
struct User {
    name: string
}

impl User {
    fn sayHello(self: User) void {
        println(`Hi! I am ${self.name}!`)
    }
}
```

## String Length

Strings support `length()`:

```tsx nubo
type hasLen: iface {
    length() int
}

fn len(obj: hasLen) int {
    return obj.length()
}

const name: string = "John"
println(len(name))
```

## Bytes

Use `bytes()` to work with the bytes of a string:

```tsx nubo
let x: int = 0

bytes("hello").map(int).each(fn(n: int) {
    x = x + n
})

println(x)
```
