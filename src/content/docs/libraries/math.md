---
title: Math Library
description: Overview of the @std/math library in Nubo.
---

The `@std/math` library provides common mathematical functions.

## Functions

- `abs(number)` — Returns the absolute value of a number.
- `sqrt(number)` — Returns the square root of a number.
- `pow(base, exp)` — Returns the base raised to the power of exp.
- `sin(x)` — Returns the sine of x (x in radians).
- `cos(x)` — Returns the cosine of x (x in radians).

## Example Nubo code

```javascript
import math from "@std/math"

let value = -5
let absolute = math.abs(value)         // 5
let root = math.sqrt(16)               // 4.0
let power = math.pow(2, 3)             // 8.0
let sine = math.sin(1.57)              // approx 1.0
let cosine = math.cos(0)               // 1.0
```