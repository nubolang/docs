---
title: HTML Element Prototypes
description: Attribute and children methods attached to Nubo html values.
sidebar:
  order: 5
---

HTML values expose attribute and children helpers.

```tsx nubo
let btn = <button>Click</button>

btn.setAttribute("id", "main-button")

println(btn.getAttribute("id"))
```

## Current Literal Limitation

Prototype calls currently work reliably on values stored in variables.

```tsx nubo
let s = "string"

println(s.length())
```

Calling prototype methods directly on literals is currently limited by AST/parser behavior.

```tsx nubo
// Currently may not work:
println("string".length())
```

Prefer assigning the literal to a variable first.

```tsx nubo
let text = "string"

println(text.length())
```


## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `setAttribute(name: string, value: any)` | `void` | Sets an attribute. |
| `removeAttribute(name: string)` | `void` | Removes an attribute. |
| `getAttribute(name: string)` | `any` | Returns an attribute value, or `nil`. |
| `hasAttribute(name: string)` | `bool` | Checks whether an attribute exists. |
| `children()` | `[](html | string)` | Returns the element's children. |
| `setChildren(children: [](html | string))` | `void` | Replaces the element's children. |

## Indexed Attributes

HTML elements also support indexed access through internal `__get__` and `__set__`.

```tsx nubo
let btn = <button>Click</button>

btn["id"] = "save-button"

println(btn["id"])
```

Attribute names are normalized to kebab-case.

```tsx nubo
let btn = <button>Click</button>

btn.setAttribute("dataUserId", "123")

println(btn.getAttribute("data-user-id"))
```

## Attributes

```tsx nubo
let btn = <button>Click</button>

btn.setAttribute("class", "primary")
btn.setAttribute("disabled", true)

println(btn.hasAttribute("class"))
println(btn.getAttribute("class"))

btn.removeAttribute("disabled")
```

## Reading Children

```tsx nubo
let box = <div>Hello</div>

let children = box.children()

println(children)
```

## Replacing Children

```tsx nubo
let box = <div>Hello</div>

let children: [](html|string) = []
children.push(<span>Nubo</span>)
children.push("!")

box.setChildren(children)

println(box.children())
```
