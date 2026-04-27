---
title: Server Examples
description: Complete Nubo server examples using request and response modules.
sidebar:
  order: 10
---

These examples show common Nubo server patterns.

## Hello World

`app/index.nubo`

```tsx nubo
import response from "@server/response"

response.write(<h1>Hello from Nubo</h1>)
```

Run:

```bash
nubo serve app
```

## JSON API

`app/api/status.nubo`

```tsx nubo
import response from "@server/response"

response.json({
    "ok": true,
    "service": "nubo"
})
```

Request:

```txt
GET /api/status
```

## Dynamic Route

`app/users/[id].nubo`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let id = request.param("id")

response.json({
    "id": id
})
```

Request:

```txt
GET /users/123
```

## Read Query Params

`app/search.nubo`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let q = request.query("q")

if isNil(q) {
    response.status(400)
    response.json({
        "error": "missing query"
    })
} else {
    response.json({
        "query": q
    })
}
```

Request:

```txt
GET /search?q=nubo
```

## Read JSON Body

`app/api/echo.nubo`

```tsx nubo
import request from "@server/request"
import response from "@server/response"

if !request.is("POST") {
    response.status(405)
    response.json({
        "error": "method not allowed"
    })
} else {
    let data = request.json()

    response.json({
        "received": data
    })
}
```

## Set a Cookie

```tsx nubo
import response from "@server/response"

response.setCookie("session", "abc123", 3600, "/")
response.write("cookie set")
```

## Redirect

```tsx nubo
import response from "@server/response"

response.redirect("/login")
```

## Custom Error Page

`app/error.nubo`

```tsx nubo
import request from "@server/request"
import response from "@server/response"
import err from "@server/error"

response.status(err.status)

response.write(<ghost>
  <h1>Error</h1>
  <p>Status: { err.status }</p>
  <p>{ err.message }</p>
  <small>{ request.path }</small>
</ghost>)
```
