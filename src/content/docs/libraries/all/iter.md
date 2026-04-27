---
title: Iter
description: Build iterator-style values with Progress, End, and Iterator in Nubo.
sidebar:
  order: 5
---

The `@std/iter` module provides low-level iterator helper structs.

It exposes:

| Name | Kind | Description |
| --- | --- | --- |
| `Progress` | struct | Represents one iterator step. |
| `End` | value | A progress value where `end` is `true`. |
| `Iterator` | struct | Wraps a function that returns `Progress`. |

## `iter.Progress`

`Progress` represents one iterator step.

| Field | Type | Description |
| --- | --- | --- |
| `key` | `any` | Step key or index. |
| `value` | `any` | Step value. |
| `end` | `bool` | Whether iteration has finished. |

```tsx nubo
import iter from "@std/iter"

let step = iter.Progress(0, "first")

println(step.key)
println(step.value)
println(step.end)
```

## `iter.End`

`End` is a ready-made `Progress` value with `end` set to `true`.

```tsx nubo
import iter from "@std/iter"

let done = iter.End

println(done.end)
```

## `iter.Iterator`

`Iterator` wraps a function that returns a `Progress`.

The wrapped function type is:

```tsx nubo
let nextStep: fn() -> iter.Progress
```

Example:

```tsx nubo
import iter from "@std/iter"

let index = 0
let values = ["a", "b", "c"]

fn nextValue() iter.Progress {
    if index >= len(values) {
        return iter.End
    }

    let current = iter.Progress(index, values[index])
    index = index + 1

    return current
}

let iterator = iter.Iterator(nextValue)

let step = iterator.next()

while !step.end {
    println(step.key, step.value)

    step = iterator.next()
}
```

## `iterator.next`

Returns the next `Progress`.

Returns: `Progress`

```tsx nubo
let step = iterator.next()
```
