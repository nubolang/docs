---
title: JSON
description: Parse and stringify JSON in Nubo.
sidebar:
  order: 4
---

The `@std/json` module converts between JSON strings and Nubo values.

```tsx nubo
import json from "@std/json"

let data = json.parse("{\"name\":\"Nubo\"}")

println(data["name"])
```

## Exports

| Name | Returns | Description |
| --- | --- | --- |
| `parse(string)` | `any` | Parses JSON into a Nubo value. |
| `stringify(object)` | `string` | Converts a Nubo value into JSON. |

## `json.parse`

Parses a JSON string.

```tsx nubo
import json from "@std/json"

let user = json.parse("{\"name\":\"Martin\",\"admin\":true}")

println(user["name"])
println(user["admin"])
```

JSON arrays become Nubo lists.

```tsx nubo
import json from "@std/json"

let values = json.parse("[1,2,3]")

println(values[0])
```

## `json.stringify`

Converts a Nubo value into a JSON string.

```tsx nubo
import json from "@std/json"

let user = {
    "name": "Martin",
    "admin": true
}

let text = json.stringify(user)

println(text)
```
