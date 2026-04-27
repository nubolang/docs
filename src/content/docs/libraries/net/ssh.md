---
title: SSH
description: Connect to SSH servers from Nubo.
sidebar:
  order: 2
---

The `@std/net/ssh` package provides an SSH client.

It supports password authentication and private key authentication.

```tsx nubo
import ssh from "@std/net/ssh"

const conn = ssh.SSH("127.0.0.1", 2222, "testuser", shell: false)

conn.connect(password: "password")
defer conn.close()
```

## Import

```tsx nubo
import ssh from "@std/net/ssh"
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `SSH` | struct | SSH connection type. |

## `ssh.SSH`

Creates an SSH connection object.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `host` | `string` | none | Hostname or IP address. |
| `port` | `int` | none | SSH port. |
| `user` | `string` | none | SSH username. |
| `shell` | `bool` | `true` | Whether to start an interactive shell after connecting. |

Returns: `SSH`

```tsx nubo
import ssh from "@std/net/ssh"

const conn = ssh.SSH("127.0.0.1", 2222, "testuser")
```

Disable shell mode when you only want to run commands or use the connection in a controlled way.

```tsx nubo
const conn = ssh.SSH("127.0.0.1", 2222, "testuser", shell: false)
```

## `conn.connect`

Connects to the SSH server.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `password` | `string?` | `nil` | Optional password authentication. |
| `keyFile` | `string?` | `nil` | Optional PEM/private key file path. |
| `timeoutMs` | `int` | `5000` | Connection timeout in milliseconds. |

Returns: `void`

Password authentication:

```tsx nubo
conn.connect(password: "password")
```

Private key authentication:

```tsx nubo
conn.connect(keyFile: "/home/user/.ssh/id_rsa")
```

With a custom timeout:

```tsx nubo
conn.connect(password: "password", timeoutMs: 10000)
```

## `conn.write`

Writes text to the SSH session stdin.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `string` | Data to send. |

Returns: `void`

```tsx nubo
conn.write("ping\n")
```

`write` requires the connection to be open.

## `conn.read`

Reads one line from the SSH session stdout.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `timeoutMs` | `int` | Read timeout in milliseconds. |

Returns: `string`

```tsx nubo
const out = conn.read(2000)

if out != "" {
    println("SSH got:", out)
}
```

If the timeout is reached before a line is available, `read` returns an empty string.

## `conn.run`

Runs a command on the SSH session and returns combined output.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `cmd` | `string` | Command to run. |

Returns: `string`

```tsx nubo
const output = conn.run("whoami")

println(output)
```

`run` requires the connection to be open.

## `conn.state`

Returns whether the SSH connection is currently open.

Returns: `bool`

```tsx nubo
if conn.state() {
    println("connected")
}
```

## `conn.close`

Closes the SSH session and client.

Returns: `void`

```tsx nubo
conn.close()
```

Prefer `defer` after connecting.

```tsx nubo
conn.connect(password: "password")
defer conn.close()
```

## Complete Interactive Example

```tsx nubo
import ssh from "@std/net/ssh"

const conn = ssh.SSH("127.0.0.1", 2222, "testuser", shell: false)

conn.connect(password: "password")
defer conn.close()

while true {
    const out = conn.read(2000)

    if out != "" {
        println("SSH got:", out)
    }

    conn.write("ping\n")
    sleep(1000)
}
```

## Complete Command Example

```tsx nubo
import ssh from "@std/net/ssh"

const conn = ssh.SSH("example.com", 22, "deploy", shell: false)

conn.connect(keyFile: "/home/deploy/.ssh/id_rsa")
defer conn.close()

const output = conn.run("uptime")

println(output)
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
