---
title: HTML Templating
description: Learn how to use HTML templating in Nubo.
---

Nubo supports HTML-like syntax directly in the language.

## Basic Usage

You can assign HTML content to variables:

```nubo
let html = <div>Hello, World!</div>
```

## Returning HTML

You can return HTML from functions:

```nubo
fn render() -> html {
  return <body>
    <h1>Welcome</h1>
  </body>
}
```

## Embedding Expressions

Insert variables inside HTML:

```jsx
let name = "Martin"
let html = <h1>Hello, {name}!</h1>
```

**Note**: Nubo escapes HTML when inserting variables inside a template code.

## Preventing Escaping

Use `@{}` to embed raw HTML:

```jsx
let html = <div>Safe</div>
return <body>
  @{html}
</body>
```

## Attribute Binding

You can bind attributes in three ways:
- `attr="Value"` → static string `"Value"`
- `:attr="expression"` → dynamic binding to the evaluated `expression`
- `:attr` → shorthand for binding the variable named `attr` directly

```nubo
let id = "user-1"
let html = <div :id="id"></div>
// or
html = <div :id></div>
```

You can also manipulate attributes at runtime using built-in methods:

- `element.setAttribute("key", value)` — sets or updates an attribute
- `element.getAttribute("key")` — retrieves the attribute value
- `element.removeAttribute("key")` — removes the attribute

Example:

```nubo
welcome.setAttribute("dataAge", 19)
let age = welcome.getAttribute("dataAge")
welcome.removeAttribute("dataAge")
```

**Note**: Nubo converts any attribute names to a snake-case one.
