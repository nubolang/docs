---
title: Network
description: Nubo standard library packages for Telnet, SSH, and serial communication.
sidebar:
  order: 0
---

The `@std/net` standard library contains packages for network and device communication.

## Packages

| Package | Description |
| --- | --- |
| `@std/net/telnet` | Connect to a Telnet server, write data, read lines with a timeout, and close the connection. |
| `@std/net/ssh` | Connect to an SSH server using password or key authentication, write/read shell data, run commands, check state, and close the connection. |
| `@std/net/serial` | Open a serial port, write data, read data with a timeout, and close the port. |

## Imports

```tsx nubo
import telnet from "@std/net/telnet"
import ssh from "@std/net/ssh"
import serial from "@std/net/serial"
```

## Common Pattern

All three packages create a connection-like object, then expose methods for reading, writing, and closing.

```tsx nubo
const conn = telnet.Telnet("127.0.0.1", 2323)
defer conn.close()

conn.write("ping\n")

const out = conn.read(2000)
println(out)
```

## Function Syntax Note

Use `->` only when describing a function value type.

```tsx nubo
let reader: fn(int) -> string
```

When writing a function implementation, put the return type after the parameter list.

```tsx nubo
fn readOnce(timeoutMs: int) string {
    return conn.read(timeoutMs)
}
```

For a function that returns nothing, use `void`.

```tsx nubo
fn closeConn() void {
    conn.close()
}
```
