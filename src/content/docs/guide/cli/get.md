---
title: Get
description: Add a package to the current Nubo project from a remote host.
sidebar:
  order: 4
---

The `get` command adds one or more packages to the current project.

```bash
nubo get <url>
```

## Usage

```bash
nubo get <url> [flags]
```

You can pass multiple package URLs.

```bash
nubo get <url-a> <url-b>
```

## Flags

| Flag | Description |
| --- | --- |
| `-f`, `--force` | Keep going even if a package cannot be downloaded. |
| `-s`, `--skip-init` | Skip initializing package information. |

## Examples

Add a package:

```bash
nubo get github.com/example/package
```

Add multiple packages:

```bash
nubo get github.com/example/a github.com/example/b
```

Continue after failures:

```bash
nubo get github.com/example/a github.com/example/b --force
```

Skip package initialization:

```bash
nubo get github.com/example/package --skip-init
```

Short flags:

```bash
nubo get github.com/example/package -f -s
```

## Missing Arguments

If no URL is provided, Nubo prints the command help.

```bash
nubo get
```
