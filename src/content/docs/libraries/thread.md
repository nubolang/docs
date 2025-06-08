---
title: Thread Library
description: Overview of the @std/thread library in Nubo.
---

# @std/thread Library

The `@std/thread` library allows spawning concurrent tasks.

## Function

- `spawn(function, ...args)` — Runs a function asynchronously in a new thread.

### Behavior

- The first argument must be a function.
- The number and types of provided arguments must match the function's expected parameters.
- Executes the function concurrently without blocking the main thread.
- Errors during execution are logged internally.

## Example Nubo code

```nubo
import thread from "@std/thread"

fn task(msg: string) -> void {
  println(msg)
}

thread.spawn(task, "Hello from a thread!")
```