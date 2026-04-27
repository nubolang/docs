---
title: Thread
description: Run concurrent work and communicate with portals in Nubo.
sidebar:
  order: 3
---

The `@std/thread` module provides lightweight concurrency helpers.

```tsx nubo
import thread from "@std/thread"

fn worker(name: string) void {
    println("worker:", name)
}

thread.spawn(worker, "A")
thread.yield()
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `spawn` | function | Runs a function concurrently. |
| `yield` | function | Yields execution to the scheduler. |
| `Portal` | struct | Message-passing portal. |

## `thread.spawn`

Runs a function in a new concurrent task.

The first argument must be a function. The remaining arguments are passed to that function.

```tsx nubo
import thread from "@std/thread"

fn greet(name: string) void {
    println("Hello", name)
}

thread.spawn(greet, "Martin")
```

You can also pass an anonymous function value.

```tsx nubo
import thread from "@std/thread"

let job = fn(count: int) void {
    println("count:", count)
}

thread.spawn(job, 5)
```

The arguments passed to `spawn` must match the function's declared argument types.

## `thread.yield`

Yields execution to the runtime scheduler.

```tsx nubo
import thread from "@std/thread"

thread.yield()
```

## `thread.Portal`

`Portal` is a message-passing structure for communication between concurrent work.

Create a portal with an optional capacity. If no capacity is given, the default is `16`.

```tsx nubo
import thread from "@std/thread"

let portal = thread.Portal(16)
```

Send a message:

```tsx nubo
import thread from "@std/thread"

let portal = thread.Portal()

portal.send("hello")
```

Receive a message:

```tsx nubo
import thread from "@std/thread"

let portal = thread.Portal()

portal.send("hello")

let message = portal.receive()

println(message)
```

Receive with a timeout in milliseconds:

```tsx nubo
import thread from "@std/thread"

let portal = thread.Portal()

let message = portal.receive(1000)

println(message)
```

Close a portal:

```tsx nubo
import thread from "@std/thread"

let portal = thread.Portal()

portal.close()
```

## Portal Methods

| Name | Description |
| --- | --- |
| `close` | Closes the portal. |
| `send` | Sends a message into the portal. |
| `receive` | Receives a message, optionally with a timeout. |
