---
title: Process
description: Run external commands and capture their output in Nubo.
sidebar:
  order: 4
---

The `@std/process` module runs external commands and captures their output.

```tsx nubo
import process from "@std/process"

let result = process.run("echo", ["Hello"])

println(result.stdout)
println(result.stderr)
println(result.exit)
```

## `process.run`

Runs a command with optional arguments.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cmd` | `string` | none | Command to execute. |
| `args` | `[]any` | `[]` | Command arguments. |

Returns: a result struct.

Result fields:

| Name | Type | Description |
| --- | --- | --- |
| `stdout` | `string` | Captured standard output. |
| `stderr` | `string` | Captured standard error. |
| `exit` | `int` | Exit code. |

```tsx nubo
import process from "@std/process"

let result = process.run("git", ["--version"])

if result.exit == 0 {
    println(result.stdout)
} else {
    println(result.stderr)
}
```

## Checking Command Results

Use the `exit` field to check whether the command succeeded.

```tsx nubo
import process from "@std/process"

let result = process.run("nubo", ["--version"])

if result.exit != 0 {
    println("Command failed:")
    println(result.stderr)
}
```

## Function Implementation Style

```tsx nubo
fn printCommand(command: string, args: []string) void {
    let result = process.run(command, args)

    println(result.stdout)
}
```
