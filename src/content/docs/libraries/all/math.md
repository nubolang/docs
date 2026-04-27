---
title: Math
description: Use numeric helpers in Nubo.
sidebar:
  order: 2
---

The `@std/math` module provides common numeric helpers.

```tsx nubo
import math from "@std/math"

println(math.sqrt(16))
```

## Exports

| Name | Returns | Description |
| --- | --- | --- |
| `abs(number)` | `number` | Absolute value. |
| `sqrt(number)` | `float` | Square root. |
| `pow(base, exp)` | `float` | Raises `base` to `exp`. |
| `sin(x)` | `float` | Sine of `x`. |
| `cos(x)` | `float` | Cosine of `x`. |

## `math.abs`

Returns the absolute value of an integer or float.

```tsx nubo
import math from "@std/math"

println(math.abs(-10))
println(math.abs(-3.5))
```

## `math.sqrt`

Returns the square root as a float.

```tsx nubo
import math from "@std/math"

let value = math.sqrt(81)

println(value)
```

## `math.pow`

Raises a number to a power.

```tsx nubo
import math from "@std/math"

println(math.pow(2, 8))
```

## `math.sin`

Returns the sine of a number.

```tsx nubo
import math from "@std/math"

println(math.sin(0))
```

## `math.cos`

Returns the cosine of a number.

```tsx nubo
import math from "@std/math"

println(math.cos(0))
```
