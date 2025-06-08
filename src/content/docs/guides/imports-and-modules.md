---
title: Imports and Modules
description: How to organize code with modules and import them in Nubo.
---

Modules organize code into reusable parts.

## Creating a Module

`math.nubo`:

```nubo
fn add(a int, b int) -> int {
  return a + b
}

fn subtract(a int, b int) -> int {
  return a - b
}
```

## Importing Modules

Import by module name or filename:

```nubo
import math from "math"

println(math.add(1, 2)) // Outputs: 3
```

## Using `@std` Modules

Standard modules start with @std/ and provide extra features, like:

- `io`
- `json`
- `log`
- `math`
- `thread`