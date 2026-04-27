---
title: Imports
description: Import modules and named values in Nubo.
sidebar:
  order: 8
---

Nubo can import modules from packages such as the standard library.

## Importing a Module

Use `import ... from ...` to import a module namespace:

```tsx nubo
import io from "@std/io"

const data = io.read("Enter your input: ", false)
println(data)
```

The imported name is used as a namespace:

```tsx nubo
println(inspect(io.read))
```

## Named Imports

Use braces to import specific values:

```tsx nubo
import { Time, now } from "@std/time"

println(int(now()))
```

## Standard Library Imports

Standard library modules use the `@std/` prefix:

```tsx nubo
import time from "@std/time"
import io from "@std/io"
```
