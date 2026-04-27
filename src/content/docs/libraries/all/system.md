---
title: System
description: Access process control, OS information, file descriptors, and filesystem helpers in Nubo.
sidebar:
  order: 2
---

The `@std/system` module provides process control, system information, file descriptors, and filesystem helpers.

```tsx nubo
import system from "@std/system"

println(system.osName())
println(system.arch())
println(system.cwd())
```

## Constants

| Name | Type | Description |
| --- | --- | --- |
| `stdin` | `int` | Standard input file descriptor. |
| `stdout` | `int` | Standard output file descriptor. |
| `stderr` | `int` | Standard error file descriptor. |

```tsx nubo
import system from "@std/system"

println(system.stdin)
println(system.stdout)
println(system.stderr)
```

## Program Control

| Name | Description |
| --- | --- |
| `args` | Returns the process arguments as `[]string`. |
| `exit` | Exits the process with a code. |
| `abort` | Prints a fatal error and kills the current process. |
| `pid` | Returns the current process ID. |
| `kill` | Kills a process by PID. |

```tsx nubo
import system from "@std/system"

println(system.args())
println(system.pid())
```

Exit with a status code:

```tsx nubo
import system from "@std/system"

system.exit(0)
```

Abort the current process:

```tsx nubo
import system from "@std/system"

system.abort("Fatal error")
```

Kill a process by ID:

```tsx nubo
import system from "@std/system"

let current = system.pid()

system.kill(current)
```

## System Information

| Name | Returns | Description |
| --- | --- | --- |
| `osName` | `string` | Operating system name. |
| `arch` | `string` | CPU architecture. |
| `hostname` | `string` | Hostname. |
| `user` | `string` | Current user name. |
| `cpu` | `int` | Number of CPUs. |
| `memoryTotal` | `int` | Total system memory in bytes. |
| `memoryFree` | `int` | Free or available system memory in bytes. |
| `uptime` | `int` | System uptime in seconds. |
| `isTTY` | `bool` | Whether a file descriptor is a TTY. |

```tsx nubo
import system from "@std/system"

println("OS:", system.osName())
println("Arch:", system.arch())
println("Host:", system.hostname())
println("User:", system.user())
println("CPUs:", system.cpu())
println("Total memory:", system.memoryTotal())
println("Free memory:", system.memoryFree())
println("Uptime:", system.uptime())
println("stdout is TTY:", system.isTTY(system.stdout))
```

## Filesystem Helpers

| Name | Returns | Description |
| --- | --- | --- |
| `cwd` | `string` | Current working directory. |
| `chdir` | `void` | Changes the current working directory. |
| `tempDir` | `string` | System temporary directory. |

```tsx nubo
import system from "@std/system"

let before = system.cwd()

println("Before:", before)
println("Temp:", system.tempDir())

system.chdir(system.tempDir())

println("After:", system.cwd())
```

## Function Implementation Style

Function implementations use the return type after the parameter list.

```tsx nubo
fn printSystemInfo() void {
    println(system.osName())
    println(system.arch())
}
```
