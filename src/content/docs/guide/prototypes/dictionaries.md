---
title: Dictionary Prototypes
description: Dictionary methods attached to Nubo dictionary values.
sidebar:
  order: 3
---

Dictionary values expose key/value helpers.

```tsx nubo
let user = {
    "name": "Martin",
    "age": 19
}

println(user.keys())
println(user.values())
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
| `keys()` | `[]K` | Returns all dictionary keys. |
| `values()` | `[]V` | Returns all dictionary values. |
| `remove(key: K)` | `void` | Removes a key from the dictionary. |

## Indexed Access

Dictionaries implement internal `__get__` and `__set__`, which power indexed access.

```tsx nubo
let user = {
    "name": "Martin"
}

println(user["name"])

user["role"] = "admin"

println(user["role"])
```

## Keys and Values

```tsx nubo
let config = {
    "host": "localhost",
    "port": 3000
}

println(config.keys())
println(config.values())
```

## Removing Keys

```tsx nubo
let config = {
    "host": "localhost",
    "port": 3000
}

config.remove("host")

println(config.keys())
```

## Missing Keys

If a key does not exist, direct access can throw an error.

```tsx nubo
let config = {
    "port": 3000
}

// This can error if "host" does not exist:
println(config["host"])
```
