---
title: Component
description: Build HTML components with Context, children, attributes, and html values in Nubo.
sidebar:
  order: 7
---

The `@std/component` module is used for HTML-style components.

It provides component context support for functions that return `html`.

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    return <button>!{ ctx.children.join(" ") }</button>
}
```

## Importing

Import `Context` from `@std/component`.

```tsx nubo
import { Context } from "@std/component"
```

`Context` is passed to component functions and gives access to component data such as children and bound attributes.

## Component Functions

A component is a function that takes a `Context` and returns `html`.

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    return <button>Click me</button>
}
```

Function implementations use the return type after the parameter list.

```tsx nubo
fn Button(ctx: Context) html {
    return <button>Button</button>
}
```

Use `->` only when describing a function value type.

```tsx nubo
let renderer: fn(Context) -> html
```

## HTML Values

Nubo supports HTML values directly in code.

```tsx nubo
let title = <h1>Hello, World</h1>

println(title)
```

HTML values can contain nested elements.

```tsx nubo
let page = <main>
    <h1>Hello</h1>
    <p>Welcome to Nubo</p>
</main>
```

## Interpolation

Use `!{ ... }` to interpolate Nubo expressions into HTML.

```tsx nubo
let name = "Martin"

let heading = <h1>Hello, !{ name }</h1>
```

Inside a component, interpolation is often used with `ctx.children`.

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    return <button>!{ ctx.children.join(" ") }</button>
}
```

## Using Components

Use a component with JSX-like syntax.

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    return <button>!{ ctx.children.join(" ") }</button>
}

let btn = <Button>Hello</Button>

println(btn)
```

Components can contain nested HTML children.

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    return <button>!{ ctx.children.join(" ") }</button>
}

let btn = <Button><span>Hello, World</span>!</Button>
```

## Bound Attributes

Use `:name="value"` to bind a Nubo value as an attribute.

```tsx nubo
let btn = <button :idn="45">Click</button>
```

You can also bind a dictionary of attributes with `:bind-attrs`.

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    return <button>!{ ctx.children.join(" ") }</button>
}

let btn = <Button :bind-attrs="{a:'b'}">
    <span>Hello, World</span>!
</Button>
```

## Reading and Writing Attributes

HTML values can be accessed like dictionary-like objects.

```tsx nubo
let btn = <button :idn="45">Click</button>

println(btn["idn"])
```

Set an attribute by assigning to an index.

```tsx nubo
let btn = <button :idn="45">Click</button>

btn["ID"] = "new_id"

println(btn["idn"])
```

## Children

Call `children()` to read the children of an HTML value.

```tsx nubo
let btn = <button><span>Hello</span>!</button>

println(btn.children())
```

Children can be strings or `html` values.

```tsx nubo
const ch: [](html|string) = []

ch.push("#")
ch.push(<span>Hello, Other</span>)
```

Use `setChildren` to replace the children of an HTML value.

```tsx nubo
let btn = <button>Hello</button>

const ch: [](html|string) = []
ch.push("#")
ch.push(<span>Hello, Other</span>)

btn.setChildren(ch)

println(btn.children())
```

## Complete Example

```tsx nubo
import { Context } from "@std/component"

fn Button(ctx: Context) html {
    println(ctx)

    return <button :idn="45">!{ ctx.children.join(" ") }</button>
}

let btn = <Button :bind-attrs="{a:'b'}">
    <span>Hello, World</span>!
</Button>

btn["ID"] = "new_id"

println(btn["idn"])
println(btn.children())

const ch: [](html|string) = []
ch.push("#")
ch.push(<span>Hello, Other</span>)

btn.setChildren(ch)

println(btn.children())
```

## Quick Reference

| Feature | Example |
| --- | --- |
| Import context | `import { Context } from "@std/component"` |
| Component function | `fn Button(ctx: Context) html { ... }` |
| HTML value | `<button>Hello</button>` |
| Interpolation | `!{ value }` |
| Bound attribute | `<button :idn="45">` |
| Bind attrs dictionary | `<Button :bind-attrs="{a:'b'}">` |
| Read attribute | `btn["idn"]` |
| Set attribute | `btn["ID"] = "new_id"` |
| Read children | `btn.children()` |
| Replace children | `btn.setChildren(ch)` |
