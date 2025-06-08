---
title: Logging Library
description: Overview of the @std/log library in Nubo.
---

The `@std/log` library provides logging functions with configurable log levels.

## Log Levels

- `DEBUG` (0)
- `INFO` (1)
- `WARN` (2)
- `ERROR` (3)

## Functions

- `debug(message)` — Logs a debug message.
- `info(message)` — Logs an info message.
- `warn(message)` — Logs a warning message.
- `error(message)` — Logs an error message.
- `setLevel(level)` — Sets the minimum log level (string).

## Example Nubo code

```javascript
import log from "@std/log"

log.setLevel("INFO")

log.debug("This will not be shown if level is INFO or higher")
log.info("Application started")
log.warn("Low disk space")
log.error("Unhandled exception occurred")
```