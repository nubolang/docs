---
title: Server
description: Build HTTP applications with Nubo server files, routes, request and response modules, static files, caching, errors, and logging.
sidebar:
  order: 0
---

Nubo can run `.nubo` files as HTTP endpoints with the `nubo serve` command.

```bash
nubo serve app
```

A server can serve either:

| Target | Behavior |
| --- | --- |
| A single `.nubo` file | Every request runs that file. |
| A directory | Nubo builds routes from the files inside the directory. |

When a request reaches a Nubo executable file, the server injects these built-in server modules:

| Module | Description |
| --- | --- |
| `@server/request` | Request method, headers, path, params, query, cookies, body, JSON, form data, and file uploads. |
| `@server/response` | Status, headers, body writing, JSON, cookies, redirects, and response buffer control. |
| `@server/error` | Available inside `error.nubo` for custom error pages. |

## Basic Server File

Create a file named `index.nubo`:

```tsx nubo
import request from "@server/request"
import response from "@server/response"

response.write(<h1>Hello from Nubo</h1>)
```

Start the server:

```bash
nubo serve .
```

Open:

```txt
http://localhost:3000
```

## Included Pages

| Page | Description |
| --- | --- |
| [Getting Started](./getting-started) | Start a Nubo HTTP server. |
| [Routing](./routing) | File-based routes, index routes, dynamic params, and static files. |
| [Request](./request) | Read request data from `@server/request`. |
| [Response](./response) | Send responses with `@server/response`. |
| [Errors](./errors) | Default errors, custom `error.nubo`, and JSON error output. |
| [Static Files](./static-files) | Serve non-executable files. |
| [Cache](./cache) | Parsed AST cache behavior. |
| [Logging](./logging) | Development request logs. |
| [Configuration](./configuration) | Server config values. |
| [Examples](./examples) | Complete examples. |
