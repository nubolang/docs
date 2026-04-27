---
title: Runtime Values
description: Inspect runtime state, file metadata, values, versions, and conversions in Nubo.
sidebar:
  order: 9
---

Nubo exposes a small set of runtime values and helper functions that are always available.

## Version

Use `__version__` to access the current Nubo version:

```tsx nubo
println(__version__)
```

## Runtime Variables

Nubo automatically declares runtime variables for the currently running interpreter and file.

| Variable | Type | Description |
| --- | --- | --- |
| `__id__` | `int` | The numeric interpreter/runtime ID. |
| `__entry__` | `bool` | `true` when the current file is running as the entry interpreter, usually ID `1`. |
| `__dir__` | `string` | Absolute directory path of the current file. |
| `__file__` | `string` | Absolute file path of the current file. |
| `__concurrent__` | `bool` | Runtime concurrency flag. Defaults to `false`. |

Example:

```tsx nubo
println(__id__)
println(__entry__)
println(__dir__)
println(__file__)
println(__concurrent__)
```

These values are useful for loading files relative to the current script:

```tsx nubo
include __dir__ + "/config"
```

If the included path has no extension, Nubo automatically tries it as a `.nubo` file.

## Inspect

Use `inspect()` to inspect values:

```tsx nubo
import io from "@std/io"

println(inspect(io.read))
```

## Type

Use `type()` to inspect the type of a value:

```tsx nubo
let s: string|nil = "Hello"
println(s, type(s))
```

## Value Of

Use `valueof()` to get the underlying value representation:

```tsx nubo
import { now } from "@std/time"

println(valueof(now()))
```

## Conversions

Call a type like a function to convert a value:

```tsx nubo
import { now } from "@std/time"

println(int(now()))
```

You can also use conversions in collection pipelines:

```tsx nubo
let x: int = 0

bytes("hello").map(int).each(fn(n: int) {
    x = x + n
})

println(x)
```
