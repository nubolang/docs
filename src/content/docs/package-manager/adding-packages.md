---
title: Adding Packages
description: Learn how nubo get adds packages to a project.
sidebar:
  order: 2
---

Use `nubo get` to add a package.

```bash
nubo get github.com/nubolang/color
```

You can add a specific revision with `@`.

```bash
nubo get github.com/nubolang/color@f5063d6
```

If no revision is provided, Nubo uses `latest`.

```bash
nubo get github.com/nubolang/color
```

## URI Format

Package URIs are parsed like this:

```txt
domain/user/repo
domain/user/repo@version
domain/user/repo/subpath
domain/user/repo/subpath@version
```

Examples:

```bash
nubo get github.com/nubolang/color
nubo get github.com/nubolang/color@main
nubo get github.com/nubolang/color@f5063d6
nubo get github.com/org/repo/subpackage
```

Nubo accepts URIs with or without `https://`.

```bash
nubo get https://github.com/nubolang/color
nubo get github.com/nubolang/color
```

Internally, the source becomes a Git URL:

```txt
https://github.com/nubolang/color.git
```

## What Happens During Add

When a package is added, Nubo:

1. Parses the package URI.
2. Builds a Git repository URL.
3. Clones the repository into a temporary cache path.
4. Resolves the requested revision.
5. Checks out the exact commit.
6. Moves the package into the global package cache.
7. Hashes the package directory.
8. Updates `_nubo.yaml`.
9. Updates `lock.yaml`.
10. Loads and merges nested dependencies from the package's own `lock.yaml`, if it exists.

## Cache Path

Downloaded packages are stored in the global cache.

```txt
~/nubo/packages/<domain>/<user>/<repo>@<full-commit-hash>
```

Example:

```txt
~/nubo/packages/github.com/nubolang/color@f5063d6fa53bf8be818f4316273ee81fb5474d21
```

## Package Name

A package added from:

```txt
github.com/nubolang/color
```

gets the package name:

```txt
nubolang/color
```

If a subpath is used:

```txt
github.com/org/repo/tools/colors
```

the package name becomes:

```txt
org/repo/tools/colors
```

## Updating Existing Entries

If a package already exists in `_nubo.yaml` or `lock.yaml`, Nubo updates the existing entry instead of adding a duplicate.

Entries are matched by package name or source URL.

## Nested Dependencies

If the downloaded package contains a `lock.yaml`, Nubo loads it and merges its entries into the current project's lockfile.

This lets packages bring their own locked dependencies.

## Example

```bash
nubo get github.com/nubolang/color
```

Result in `_nubo.yaml`:

```yaml
packages:
  - source: https://github.com/nubolang/color.git
    commit: f5063d6
```

Result in `lock.yaml`:

```yaml
entries:
  - name: nubolang/color
    source: https://github.com/nubolang/color.git
    commit_hash: f5063d6fa53bf8be818f4316273ee81fb5474d21
    hash: sha256:d0b1dc4e7af156690f762c2d90c6bbe62c7ad265cd9a9e9e54c30fac26cbf0ef
```
