---
title: Response
description: Send status codes, headers, text, JSON, cookies, redirects, and buffered responses.
sidebar:
  order: 4
---

The `@server/response` module controls the HTTP response.

```tsx nubo
import response from "@server/response"
```

By default, responses use status `200` and content type `text/html`.

## `response.write`

Writes content to the response buffer.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `content` | `any` | Content to write. Converted to string. |

Returns: `void`

```tsx nubo
import response from "@server/response"

response.write(<h1>Hello</h1>)
```

## `response.status`

Sets the status code.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `code` | `int` | HTTP status code from `100` to `599`. |

Returns: `void`

```tsx nubo
import response from "@server/response"

response.status(404)
response.write("Not found")
```

Status codes outside `100..599` throw an error.

## `response.header`

Sets a response header.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `key` | `string` | Header name. |
| `value` | `string` | Header value. |

Returns: `void`

```tsx nubo
import response from "@server/response"

response.header("Content-Type", "text/plain")
response.write("Hello")
```

## `response.json`

Sends data as JSON.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `data` | `any` | Data to JSON encode. |

Returns: `void`

```tsx nubo
import response from "@server/response"

response.json({
    "ok": true,
    "message": "Hello from Nubo"
})
```

This sets the HTTP content type to `application/json`.

## `response.setCookie`

Sets a cookie.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | none | Cookie name. |
| `value` | `string` | none | Cookie value. |
| `maxAge` | `int?` | `nil` | Optional cookie max age. |
| `path` | `string` | `"/"` | Cookie path. |

Returns: `void`

```tsx nubo
import response from "@server/response"

response.setCookie("session", "abc123")
```

With max age:

```tsx nubo
response.setCookie("session", "abc123", 3600)
```

With max age and path:

```tsx nubo
response.setCookie("session", "abc123", 3600, "/")
```

## `response.redirect`

Redirects the request to another URL.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `url` | `string` | Target URL. |

Returns: `void`

```tsx nubo
import response from "@server/response"

response.redirect("/login")
```

Redirect uses HTTP `302 Found`.

## `response.flushbuf`

Clears the buffered response body.

Returns: `void`

```tsx nubo
import response from "@server/response"

response.write("old")
response.flushbuf()
response.write("new")
```

## Response Sync

After the `.nubo` file finishes, Nubo syncs the response:

1. Copies headers.
2. Writes the status code.
3. Writes the buffered body.

A redirect marks the response as already written.
