---
title: Telnet
description: Connect to Telnet servers from Nubo.
sidebar:
  order: 1
---

The `@std/net/telnet` package provides a simple Telnet client.

```tsx nubo
import telnet from "@std/net/telnet"

const conn = telnet.Telnet("127.0.0.1", 2323)
defer conn.close()

conn.write("ping\n")

const out = conn.read(2000)

println(out)
```

## Import

```tsx nubo
import telnet from "@std/net/telnet"
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `Telnet` | struct | Telnet connection type. |

## `telnet.Telnet`

Creates and connects a Telnet client.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `host` | `string` | Hostname or IP address. |
| `port` | `int` | TCP port. |

Returns: `Telnet`

```tsx nubo
import telnet from "@std/net/telnet"

const conn = telnet.Telnet("127.0.0.1", 2323)
defer conn.close()
```

## `conn.write`

Writes text data to the Telnet connection.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `string` | Data to send. |

Returns: `void`

```tsx nubo
conn.write("ping\n")
```

## `conn.read`

Reads one line from the Telnet connection.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `timeoutMs` | `int` | Read timeout in milliseconds. |

Returns: `string`

```tsx nubo
const out = conn.read(2000)

if out != "" {
    println("Telnet got:", out)
}
```

`read` waits until a newline is received or until the timeout/deadline is reached.

## `conn.close`

Closes the Telnet connection.

Returns: `void`

```tsx nubo
conn.close()
```

Prefer `defer` so the connection is closed automatically when the current scope exits.

```tsx nubo
const conn = telnet.Telnet("127.0.0.1", 2323)
defer conn.close()
```

## Complete Example

```tsx nubo
import telnet from "@std/net/telnet"

const conn = telnet.Telnet("127.0.0.1", 2323)
defer conn.close()

while true {
    const out = conn.read(2000)

    if out != "" {
        println("Telnet got:", out)
    }

    conn.write("ping\n")
    sleep(1000)
}
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
