---
title: Cache
description: Understand how Nubo caches parsed server files.
sidebar:
  order: 7
---

Nubo caches parsed `.nubo` server files to avoid re-tokenizing and re-parsing the same file on every request.

## What Is Cached

The server caches parsed AST nodes for executable `.nubo` files.

```txt
app/
  index.nubo
```

When `/` is requested, `index.nubo` is parsed and cached.

## Cache Duration

The cache duration is 5 minutes.

After 5 minutes, Nubo parses the file again.

## File Hash Validation

Nubo hashes the file content.

If the file changes, the hash changes and the cache is ignored.

That means a cached file is reused only when:

| Condition | Required |
| --- | --- |
| Cache entry exists | yes |
| File hash matches | yes |
| Cache has not expired | yes |

## Development Mode

When serving a directory in development mode, Nubo reloads the router on each request.

```bash
nubo serve app --dev
```

This helps route file changes become visible while developing.

## Cache Logs

In development request logs, cached responses may be shown with:

```txt
[cached]
```
