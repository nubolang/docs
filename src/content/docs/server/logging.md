---
title: Logging
description: Understand Nubo server request logging.
sidebar:
  order: 8
---

Nubo server request logging is shown in development mode.

```bash
nubo serve app --dev
```

## Request Log Format

Request logs include:

| Part | Description |
| --- | --- |
| Method | HTTP method. |
| Path | Request path. |
| Cache status | Shows `[cached]` when cached parsed nodes were used. |
| Duration | Request duration. |

Example shape:

```txt
 GET /users/123 ............ [cached] 2.1ms
```

## Method Colors

Nubo colors methods differently in terminal output.

| Method | Color Meaning |
| --- | --- |
| `GET` | Green |
| `POST` | Blue |
| `PUT` | Cyan |
| `PATCH` | Yellow |
| `DELETE` | Red |
| Other methods | Magenta |

## Production Mode

Request logs from this development logger are shown only when `NUBO_DEV` is enabled.

Use:

```bash
nubo serve app --dev
```

## Disable Color

Use the global CLI flag to disable colorized output.

```bash
nubo serve app --nocolor
```
