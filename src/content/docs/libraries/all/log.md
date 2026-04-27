---
title: Log
description: Write leveled logs in Nubo.
sidebar:
  order: 3
---

The `@std/log` module provides simple leveled logging.

```tsx nubo
import log from "@std/log"

log.info("server started")
```

## Log Levels

The supported levels are:

| Level | Priority |
| --- | --- |
| `DEBUG` | 0 |
| `INFO` | 1 |
| `WARN` | 2 |
| `ERROR` | 3 |

The default level is `INFO`.

Messages below the current level are ignored.

## Exports

| Name | Description |
| --- | --- |
| `debug(...)` | Writes a debug message. |
| `info(...)` | Writes an info message. |
| `warn(...)` | Writes a warning message. |
| `error(...)` | Writes an error message. |
| `setLevel(level)` | Sets the current log level. |

## Logging Messages

```tsx nubo
import log from "@std/log"

log.debug("debug value:", 123)
log.info("user logged in")
log.warn("missing optional config")
log.error("request failed")
```

`warn` and `error` write to standard error. `debug` and `info` write to standard output.

## `log.setLevel`

Sets the minimum level to print.

```tsx nubo
import log from "@std/log"

log.setLevel("DEBUG")

log.debug("now debug logs are visible")
```

The level is case-insensitive internally because it is normalized to uppercase.

```tsx nubo
import log from "@std/log"

log.setLevel("warn")

log.info("hidden")
log.warn("visible")
```
