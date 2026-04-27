---
title: Numbers
description: Learn about number literals, prefixes, separators, and arithmetic in Nubo.
sidebar:
  order: 5
---

Nubo supports integer and floating-point numbers, including prefixed number literals.

## Integer Literals

```tsx nubo
let dec = 1000
println(dec)
```

## Floating-Point Literals

```tsx nubo
let flo = 1000.5
println(flo)
```

## Binary, Octal, and Hexadecimal

Use numeric prefixes for different bases:

```tsx nubo
let bin = 0b1010
let oct = 0o123
let hex = 0x1A

println(bin)
println(oct)
println(hex)
```

## Numeric Separators

Use `_` to make large numbers easier to read:

```tsx nubo
for i in 100_00 {
    println(i)
}
```

## Arithmetic

Use standard arithmetic operators:

```tsx nubo
let sum = 0
sum = sum + 10

println(sum)
```

You can also combine arithmetic with function results:

```tsx nubo
import time from "@std/time"

const start = time.now()
const end = time.now()

println("Finished in", (end - start) / 1_000_000_000, "seconds")
```
