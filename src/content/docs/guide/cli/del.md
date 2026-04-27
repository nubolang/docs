---
title: Delete
description: Delete a package from the current Nubo project.
sidebar:
  order: 5
---

The `del` command removes one or more packages from the current project.

```bash
nubo del <url>
```

## Usage

```bash
nubo del <url> [flags]
```

You can pass multiple package URLs.

```bash
nubo del <url-a> <url-b>
```

## Flags

| Flag | Description |
| --- | --- |
| `-f`, `--force` | Keep going even if a package cannot be deleted. |
| `--cleanup` | Clean the package from disk after deletion. |

## Examples

Delete a package:

```bash
nubo del github.com/example/package
```

Delete multiple packages:

```bash
nubo del github.com/example/a github.com/example/b
```

Continue after failures:

```bash
nubo del github.com/example/a github.com/example/b --force
```

Delete and clean from disk:

```bash
nubo del github.com/example/package --cleanup
```

## Missing Arguments

If no package URL is provided, Nubo prints the command help.

```bash
nubo del
```
