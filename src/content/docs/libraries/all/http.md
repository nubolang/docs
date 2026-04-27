---
title: HTTP
description: Make HTTP requests and read HTTP responses in Nubo.
sidebar:
  order: 7
---

The `@std/http` module provides a small HTTP client.

```tsx nubo
import http from "@std/http"

let res = http.base.request("GET", "https://example.com")

println(res.status)
println(res.body())
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `instance` | struct | HTTP client instance type. |
| `config` | struct | Request configuration type. |
| `create` | function | Creates a new HTTP instance. |
| `base` | value | Default HTTP instance. |

## `http.config`

Request configuration.

| Field | Type | Description |
| --- | --- | --- |
| `body` | `any` | Optional request body. |
| `headers` | `dict[string, any]` | Optional request headers. |
| `timeout` | `int` | Timeout in seconds. |

```tsx nubo
import http from "@std/http"

let cfg = http.config()
cfg.headers = {
    "Accept": "application/json"
}
cfg.timeout = 30

let res = http.base.request("GET", "https://api.example.com/users", cfg)
```

If no config is passed, the request uses a default timeout of 10 seconds and adds a `User-Agent` header.

## `http.create`

Creates a new HTTP client instance.

Returns: `http.instance`

```tsx nubo
import http from "@std/http"

let client = http.create()

client.baseUrl = "https://api.example.com"

let res = client.request("GET", "/users")

println(res.url)
```

## `http.base`

`http.base` is the default HTTP instance.

```tsx nubo
import http from "@std/http"

let res = http.base.request("GET", "https://example.com")

println(res.status)
```

## `instance.baseUrl`

An HTTP instance has a `baseUrl` field.

When `baseUrl` is set and the request URL is relative, Nubo joins the base URL and request URL.

```tsx nubo
import http from "@std/http"

let client = http.create()

client.baseUrl = "https://api.example.com"

let res = client.request("GET", "/users")

println(res.url)
```

## `instance.request`

Makes an HTTP request.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `method` | `string` | none | HTTP method. |
| `url` | `string` | none | Absolute URL or relative URL when `baseUrl` is set. |
| `config` | `http.config?` | `nil` | Optional request config. |

Returns: `response`

```tsx nubo
import http from "@std/http"

let client = http.create()

let res = client.request("GET", "https://example.com")

println(res.status)
```

POST request with a body:

```tsx nubo
import http from "@std/http"

let cfg = http.config()
cfg.body = "{\"name\":\"Martin\"}"
cfg.headers = {
    "Content-Type": "application/json"
}

let res = http.base.request("POST", "https://api.example.com/users", cfg)

println(res.status)
println(res.body())
```

## `response`

Response fields:

| Field | Type | Description |
| --- | --- | --- |
| `url` | `string` | Final request URL. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict[string, string | []string]` | Response headers. |

Response methods:

| Method | Returns | Description |
| --- | --- | --- |
| `body()` | `string` | Response body as text. |
| `json()` | `any` | Parses the response body as JSON. |

```tsx nubo
import http from "@std/http"

let res = http.base.request("GET", "https://api.example.com/users")

println(res.url)
println(res.status)
println(res.headers)
println(res.body())
```

Parse JSON:

```tsx nubo
import http from "@std/http"

let res = http.base.request("GET", "https://api.example.com/users")
let data = res.json()

println(data)
```
