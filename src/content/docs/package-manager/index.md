---
title: Package Manager
description: Learn how Nubo packages, _nubo.yaml, lock.yaml, package downloads, cache storage, imports, and dependency deletion work.
sidebar:
  order: 0
---

Nubo includes a package manager for adding, locking, downloading, resolving, and deleting packages.

The package manager uses two project files:

| File | Purpose |
| --- | --- |
| `_nubo.yaml` | Human-facing package/project metadata and direct dependencies. |
| `lock.yaml` | Exact dependency lockfile with full commit hashes and package checksums. |

Packages are downloaded into a global cache under the user's home directory.

```txt
~/nubo/packages/
```

A package is usually added from a Git URL-like package path.

```bash
nubo get github.com/nubolang/color
```

After adding, Nubo stores package metadata in `_nubo.yaml` and exact locked data in `lock.yaml`.

## Pages

| Page | Description |
| --- | --- |
| [Project Files](./project-files) | `_nubo.yaml` and `lock.yaml`. |
| [Adding Packages](./adding-packages) | How `nubo get` resolves, clones, caches, and locks packages. |
| [Downloading Packages](./downloading-packages) | How `nubo download` restores dependencies from `lock.yaml`. |
| [Import Resolution](./import-resolution) | How Nubo maps imports to cached packages. |
| [Deleting Packages](./deleting-packages) | How `nubo del` removes packages safely. |
| [Cache](./cache) | Global package cache layout and validation. |
| [Package Authoring](./package-authoring) | Creating a package with `nubo init`. |
| [Troubleshooting](./troubleshooting) | Common package manager problems. |

## Basic Workflow

Create package metadata:

```bash
nubo init
```

Add a package:

```bash
nubo get github.com/nubolang/color
```

Use the package:

```tsx nubo
import color from "@nubolang/color"

println(color.green("success"))
```

Download all locked dependencies later:

```bash
nubo download
```

Delete a package:

```bash
nubo del github.com/nubolang/color
```

## Important Idea

`nubo get` uses a remote source like:

```txt
github.com/nubolang/color
```

But the package name stored in the lockfile is:

```txt
nubolang/color
```

So imports are resolved by package name:

```tsx nubo
import color from "@nubolang/color"
```

The package cache still remembers the original domain and remote source.
