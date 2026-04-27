---
title: Static Files
description: Serve non-Nubo files from a Nubo server directory.
sidebar:
  order: 6
---

When serving a directory, files that do not end in `.nubo` are served as static files.

```bash
nubo serve app
```

Example:

```txt
app/
  index.nubo
  style.css
  logo.png
```

Routes:

| File | URL | Behavior |
| --- | --- | --- |
| `index.nubo` | `/` | Executed by Nubo. |
| `style.css` | `/style.css` | Served as a static file. |
| `logo.png` | `/logo.png` | Served as a static file. |

## Static Files Are Not Executed

Only `.nubo` files are executable.

```txt
app/data.json
```

The file above is served directly.

## Static Fallback

If no route matches, Nubo tries to serve a built-in static file.

If that also fails, the request becomes a `404 Not Found`.

## Example HTML Page

```tsx nubo
import response from "@server/response"

response.write("<!doctype html>") // the doctype part should be written as string
                                  // because Nubo only supports simple html tags
response.write(<html>
  <head>
    <link rel="stylesheet" href="styles.css"> 
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>)
```

Do not use `<style>` tags, because the parser may fail to parse nubo code between `{}`.
Only use style if really needed, and with `<style>{content}</style>`, and make content the
css content in string.