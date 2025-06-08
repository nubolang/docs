---
title: JSON Library
description: Overview of the @std/json library in Nubo.
---

The `@std/json` library provides JSON parsing and stringify functions.

## Functions

- `parse(string)`: Parses a JSON string and returns the corresponding Nubo object.
- `stringify(object)`: Converts a Nubo object into a JSON string.

## Example Nubo code

```javascript
import json from "@std/json"

let data = json.parse('{"name": "Martin", "age": 30}')

let jsonString = json.stringify(data)
println(jsonString)
```