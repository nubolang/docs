---
title: Serial
description: Communicate with serial ports from Nubo.
sidebar:
  order: 3
---

The `@std/net/serial` package provides serial port access.

```tsx nubo
import serial from "@std/net/serial"

const port = serial.Port("/dev/ttyUSB0", 9600)
defer port.close()

port.write("hello\r")

const out = port.read(2000)

println(out)
```

## Import

```tsx nubo
import serial from "@std/net/serial"
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `Port` | struct | Serial port connection type. |

## `serial.Port`

Opens a serial port.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `device` | `string` | none | Serial device path. |
| `baud` | `int` | `9600` | Baud rate. |

Returns: `Port`

```tsx nubo
import serial from "@std/net/serial"

const port = serial.Port("/dev/ttyUSB0", 9600)
defer port.close()
```

Use the default baud rate:

```tsx nubo
const port = serial.Port("/dev/ttyUSB0")
defer port.close()
```

## `port.write`

Writes text data to the serial port.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `string` | Data to send. |

Returns: `void`

```tsx nubo
port.write("hello from writer\r")
```

## `port.read`

Reads data from the serial port.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `timeoutMs` | `int` | Read timeout in milliseconds. |

Returns: `string`

```tsx nubo
const out = port.read(2000)

if out != "" {
    println("Reader got:", out)
}
```

Internally, `read` uses a read timeout and reads up to a buffer of data.

## `port.close`

Closes the serial port.

Returns: `void`

```tsx nubo
port.close()
```

Prefer `defer` after opening a port.

```tsx nubo
const port = serial.Port("/dev/ttyUSB0", 9600)
defer port.close()
```

## Reader Example

```tsx nubo
import serial from "@std/net/serial"

const reader = serial.Port("/dev/pts/4", 9600)
defer reader.close()

while true {
    const out = reader.read(2000)

    if out != "" {
        println("Reader got:", out)
    }

    sleep(1000)
}
```

## Writer Example

```tsx nubo
import serial from "@std/net/serial"

const writer = serial.Port("/dev/pts/1", 9600)
defer writer.close()

while true {
    writer.write("hello from writer\r")
    println("Writer sent: hello from writer")
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
