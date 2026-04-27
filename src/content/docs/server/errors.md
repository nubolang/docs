---
title: Errors
description: Handle server errors, not found routes, custom error pages, and JSON error responses.
sidebar:
  order: 5
---

Nubo has default server error handling and supports a custom `error.nubo` file.

## Default Errors

If a route is missing, Nubo returns `404 Not Found`.

If a request fails during parsing or interpretation, Nubo returns `500 Internal Server Error`.

## Custom `error.nubo`

When serving a directory, Nubo checks for `error.nubo` in the server root.

```txt
app/
  index.nubo
  error.nubo
```

If `error.nubo` exists, Nubo runs it when an error happens.

Inside `error.nubo`, Nubo provides:

| Module | Description |
| --- | --- |
| `@server/request` | Current request. |
| `@server/response` | Response writer. |
| `@server/error` | Error status and message. |

## `@server/error`

The `@server/error` module contains:

| Field | Type | Description |
| --- | --- | --- |
| `status` | `int` | HTTP status code. |
| `message` | `string` | Error message. |

Example `error.nubo`:

```tsx nubo
import request from "@server/request"
import response from "@server/response"
import err from "@server/error"

response.status(err.status)
response.header("Content-Type", "text/html")

response.write(<ghost>
  <h1>Error { err.status }</h1>
  <p>{ err.message }</p>
  <small>{ request.path }</small>
</ghost>)
```

## JSON Errors

If a Nubo runtime exception happens and the request prefers JSON, Nubo can return a JSON exception response.

The request prefers JSON when the `Accept` header contains:

```txt
application/json
```

## HTML Errors

For Nubo runtime exceptions, the server can return an HTML error page.

This is useful during development because exception pages can show structured runtime error information.
