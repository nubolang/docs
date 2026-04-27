---
title: Serve
description: Start an HTTP server to serve Nubo files.
sidebar:
  order: 9
---

The `serve` command starts an HTTP server for a Nubo file or folder.

```bash
nubo serve <file|folder>
```

## Usage

```bash
nubo serve <file|folder> [flags]
```

## Flags

| Flag | Default | Description |
| --- | --- | --- |
| `--addr string` | `@default` | Address to listen on. |

## Address

By default, `--addr` is `@default`.

```bash
nubo serve src
```

When `@default` is used, Nubo reads the address from the configuration file:

```yaml
runtime:
  server:
    address: ":3000"
```

To override the address:

```bash
nubo serve src --addr ":8080"
```

## Serving a File

```bash
nubo serve main.nubo
```

## Serving a Folder

```bash
nubo serve src
```

## Only One Target

The command accepts only one file or folder.

If more than one argument is provided, Nubo prints:

```txt
Only one folder or file can be served
```

## Missing Arguments

If no file or folder is provided, Nubo prints the command help.

```bash
nubo serve
```
