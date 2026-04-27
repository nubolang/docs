---
title: Request
description: Read method, headers, path, params, query strings, cookies, body, JSON, forms, and uploaded files.
sidebar:
  order: 3
---

The `@server/request` module gives access to the current HTTP request.

```tsx nubo
import request from "@server/request"
```

## Fields

| Name | Type | Description |
| --- | --- | --- |
| `method` | `string` | HTTP method. |
| `headers` | `dict[string, []string]` | Request headers. |
| `secure` | `bool` | `true` when the request uses TLS. |
| `path` | `string` | URL path. |
| `url` | `string` | Full request URL string. |
| `host` | `string` | Request host. |
| `ip` | `string` | Remote address. |

```tsx nubo
import request from "@server/request"
import response from "@server/response"

response.write("Method: ")
response.write(request.method)

response.write("\nPath: ")
response.write(request.path)
```

## `request.is`

Checks the request method.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `method` | `string` | Method to compare. |

Returns: `bool`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

if request.is("POST") {
    response.write("Creating data")
} else {
    response.write("Reading data")
}
```

Method comparison is case-insensitive.

## `request.accepts`

Checks the exact `Accept` header value.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `string` | Content type to check. |

Returns: `bool`

```tsx nubo
if request.accepts("application/json") {
    response.json({
        "ok": true
    })
}
```

## `request.param`

Reads a dynamic route parameter.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Parameter name. |

Returns: `string?`

File:

```txt
users/[id].nubo
```

Code:

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let id = request.param("id")

response.write("User: ")
response.write(id)
```

## `request.query`

Reads a query string value.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Query parameter name. |

Returns: `string?`

URL:

```txt
/search?q=nubo
```

Code:

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let q = request.query("q")

if isNil(q) {
    response.write("Missing query")
} else {
    response.write(q)
}
```

## `request.cookie`

Reads a cookie value.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Cookie name. |

Returns: `string?`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let session = request.cookie("session")

if isNil(session) {
    response.status(401)
    response.write("Missing session")
}
```

## `request.body`

Reads the request body as a string.

Returns: `string`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let raw = request.body()

response.write(raw)
```

The body read is limited by:

```yaml
runtime:
  server:
    max_upload_size_byte: 1_000_000
```

## `request.json`

Parses the request body as JSON.

Returns: `any`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let data = request.json()

response.json({
    "received": data
})
```

If the body is empty, this returns `nil`.

## `request.form`

Reads one form value.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Form field name. |

Returns: `string?`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let username = request.form("username")

response.write(username)
```

## `request.formData`

Reads form or multipart form values into a dictionary.

Returns: `dict?`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let form = request.formData()

response.json(form)
```

## `request.file`

Reads one uploaded file from multipart form data.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | File field name. |

Returns: `Stream?`

The returned stream includes extra fields:

| Field | Type | Description |
| --- | --- | --- |
| `filename` | `string` | Uploaded filename. |
| `size` | `int` | File size. |
| `header` | `string` | Content type header. |

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let file = request.file("avatar")

if isNil(file) {
    response.status(400)
    response.write("Missing file")
} else {
    response.write("Uploaded: ")
    response.write(file.filename)
}
```

The maximum uploaded file size is configured with:

```yaml
runtime:
  server:
    max_upload_file_size: 5
```
