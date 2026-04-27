---
title: Standard Libraries
description: Overview of Nubo's built-in standard library modules.
sidebar:
  order: 0
---

Nubo ships with built-in standard library modules that can be imported with `import ... from`.

```tsx nubo
import time from "@std/time"
import system from "@std/system"
import random from "@std/random"
```

You can also import selected values from a standard library module.

```tsx nubo
import { Time, now } from "@std/time"
```

## Included Modules

| Module | Description |
| --- | --- |
| `@std/net/telnet` | Connect to Telnet servers, write data, read lines with timeouts, and close connections. |
| `@std/net/ssh` | Connect to SSH servers, authenticate with password or key files, run commands, read/write shell data, and close sessions. |
| `@std/net/serial` | Open serial ports, write data, read data with timeouts, and close ports. |
| `@std/os` | Filesystem paths, directories, file metadata, copy, move, remove, exists, and mkdir helpers. |
| `@std/time` | Dates, times, parsing, formatting, and arithmetic. |
| `@std/math` | Numeric helpers such as absolute value, square root, powers, sine, and cosine. |
| `@std/system` | Process control, system information, file descriptors, and filesystem helpers. |
| `@std/log` | Simple leveled logging with debug, info, warn, error, and configurable log level. |
| `@std/thread` | Concurrency helpers, spawned work, scheduler yielding, and portals. |
| `@std/json` | JSON parsing and stringifying. |
| `@std/process` | External command execution with captured stdout, stderr, and exit code. |
| `@std/iter` | Iterator helper structs such as `Progress`, `End`, and `Iterator`. |
| `@std/random` | Random numbers, booleans, choices, and seeding. |
| `@std/io` | Console input, file streams, reading, writing, file output, and encodings. |
| `@std/sql` | SQLite, MySQL, and PostgreSQL database access. |
| `@std/component` | HTML components, component context, children, attributes, and `html` values. |
| `@std/http` | HTTP client instances, request configuration, responses, headers, body reading, and JSON responses. |
| `@std/hash` | Hashing, bcrypt password hashes, bcrypt comparison, and Argon2 hashing. |
| `@std/plug` | Go plugin loading and plugin action calls. |

## Function Syntax Note

When documenting a function value type, Nubo uses `->` for the return type.

```tsx nubo
let mapper: fn(int) -> string
```

When writing a function implementation, write the return type after the parameter list.

```tsx nubo
fn formatNumber(value: int) string {
    return string(value)
}
```

For a function that does not return a value, use `void`.

```tsx nubo
fn logMessage(message: string) void {
    println(message)
}
```

Anonymous functions should be used as values or arguments.

```tsx nubo
let worker = fn(name: string) void {
    println("Hello", name)
}
```
