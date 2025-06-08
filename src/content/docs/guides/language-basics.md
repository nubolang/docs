---
title: Language Basics
description: Learn the basic syntax and features of Nubo.
---

Nubo is a simple, expressive, real-time language with a syntax inspired by Go and JavaScript. This guide walks you through the basic constructs.

## Variables

Use `let` or `const` to declare variables:

```javascript
let name = "Martin"
const age = 18 // not mutable
```

## Functions

Functions are declared with the `fn` keyword:

```nubo
fn greet(name) {
  return <h1>Hello, {name}!</h1>
}
```

## Control Flow

### If Statement

```nubo
if age >= 18 {
  return <p>Adult</p>
} else {
  return <p>Minor</p>
}
```

### While Cycle

```nubo
let inx = 0

while inx < 10 {
    println(inx+1)
    inx++
}
```

### For Loop

Supports both item-only and index+item syntax:

```nubo
for item in range(3) {
    println(item)
}

for i, item in list {
    println(i, item)
}
```

## HTML Templates

Nubo lets you embed HTML natively:

```nubo
let name = "World"
return <h1>Hello, {name}!</h1>
```

To render raw HTML (not escaped), prefix with `@`:

```nubo
let html = <b>bold</b>
return <div>@{html}</div>
```

## Components (Preview)

You can use built-in components like this:

```nubo
import styled from "@std/styled"

let user = nubo.User{ Name: "Martin" }

return <styled.AdminDashboard :user="user">
    <styled.H1>Hello, {user.Name}!</styled.H1>
</styled.AdminDashboard>
```

More advanced features are covered in later sections.
