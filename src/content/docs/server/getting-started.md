---
title: Getting Started
description: Start serving Nubo files over HTTP.
sidebar:
  order: 1
---

Use `nubo serve` to start an HTTP server.

```bash
nubo serve <file|folder>
```

## Serve a Folder

A folder is treated as a routed server application.

```bash
nubo serve app
```

Example structure:

```txt
app/
  index.nubo
  about.nubo
  users/
    [id].nubo
```

## Serve One File

When you serve one file, every request runs that file.

```bash
nubo serve app/index.nubo
```

This is useful for tiny apps, prototypes, and single-entry HTTP handlers.

## Address

By default, the server uses the configured address.

```yaml
runtime:
  server:
    address: ":3000"
```

You can override it with `--addr`.

```bash
nubo serve app --addr ":8080"
```

## Server Startup Output

When the server starts, it prints the Nubo web version, address, mode, and log level.

```txt
Nubo Web - <version>
Server listening on :3000
Mode: DEV | LogLevel: debug
Press Ctrl+C to quit
```

## Development Mode

Use `--dev` to run in development mode.

```bash
nubo serve app --dev
```

In development mode, the router is reloaded on each request when serving a directory. This makes route changes visible without restarting the server.

## Request Lifecycle

For an executable `.nubo` route, Nubo:

1. Matches the request path to a file.
2. Parses or loads cached nodes for the file.
3. Creates a runtime for the request.
4. Provides `@server/request`.
5. Provides `@server/response`.
6. Interprets the matched `.nubo` file.
7. Syncs the response to the HTTP client.
