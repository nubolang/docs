---
title: Random
description: Generate random numbers, booleans, choices, and deterministic sequences in Nubo.
sidebar:
  order: 5
---

The `@std/random` module provides random numbers, booleans, choices, and seeding.

```tsx nubo
import random from "@std/random"

println(random.between(1, 10))
println(random.float())
println(random.bool())
```

## Exports

| Name | Returns | Description |
| --- | --- | --- |
| `between` | `int` | Random integer between `min` and `max`, inclusive. |
| `float` | `float` | Random float between `0` and `1`. |
| `bool` | `bool` | Random boolean. |
| `choice` | `any` | Random item from a list, or `nil` for an empty list. |
| `seed` | `void` | Sets the random seed. |

## `random.between`

Returns a random integer between two values.

If `min` is greater than `max`, the values are swapped.

```tsx nubo
import random from "@std/random"

let value = random.between(10, 20)

println(value)
```

## `random.float`

Returns a random float.

```tsx nubo
import random from "@std/random"

println(random.float())
```

## `random.bool`

Returns either `true` or `false`.

```tsx nubo
import random from "@std/random"

if random.bool() {
    println("yes")
} else {
    println("no")
}
```

## `random.choice`

Returns a random item from a list.

```tsx nubo
import random from "@std/random"

let names = ["Martin", "Nubo", "Runtime"]

println(random.choice(names))
```

If the list is empty, `choice` returns `nil`.

```tsx nubo
import random from "@std/random"

let picked = random.choice([])

println(isNil(picked))
```

## `random.seed`

Sets the random seed.

```tsx nubo
import random from "@std/random"

random.seed(123)

println(random.between(1, 100))
```

## Function Implementation Style

```tsx nubo
fn rollDice() int {
    return random.between(1, 6)
}
```
