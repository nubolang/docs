---
title: Routing
description: Learn how Nubo maps files and folders to HTTP routes.
sidebar:
  order: 2
---

When serving a directory, Nubo builds routes from files in that directory.

```bash
nubo serve app
```

## Executable Routes

A file ending in `.nubo` is executable.

```txt
app/
  index.nubo
  about.nubo
```

Routes:

| File | Route |
| --- | --- |
| `app/index.nubo` | `/` |
| `app/about.nubo` | `/about` |

The `.nubo` extension is removed from the URL.

## Index Routes

Files named `index.nubo` become the folder route.

```txt
app/
  index.nubo
  docs/
    index.nubo
```

Routes:

| File | Route |
| --- | --- |
| `app/index.nubo` | `/` |
| `app/docs/index.nubo` | `/docs` |

## Dynamic Routes

Use square brackets for route parameters.

```txt
app/
  users/
    [id].nubo
```

Route:

```txt
/users/123
```

Inside `users/[id].nubo`, read the parameter with `request.param`.

```tsx nubo
import request from "@server/request"
import response from "@server/response"

let id = request.param("id")

response.write("User ID: ")
response.write(id)
```

## Exact Routes Before Param Routes

Nubo prefers exact matches before dynamic parameter matches.

```txt
app/
  users/
    settings.nubo
    [id].nubo
```

Routes:

| URL | Matched File |
| --- | --- |
| `/users/settings` | `users/settings.nubo` |
| `/users/123` | `users/[id].nubo` |

## Static Files

Files that do not end in `.nubo` are not executed. They are served as static files.

```txt
app/
  index.nubo
  style.css
  logo.png
```

Routes:

| File | Behavior |
| --- | --- |
| `index.nubo` | Executed by Nubo. |
| `style.css` | Served as a static file. |
| `logo.png` | Served as a static file. |

## Missing Routes

If no route matches, Nubo tries built-in static files. If that fails, the request becomes a `404 Not Found`.

If your app has an `error.nubo` file, Nubo can use it as a custom error page.
