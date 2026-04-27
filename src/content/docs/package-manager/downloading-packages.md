---
title: Downloading Packages
description: Restore all locked packages with nubo download.
sidebar:
  order: 3
---

Use `nubo download` to download every package listed in `lock.yaml`.

```bash
nubo download
```

Short alias:

```bash
nubo d
```

## What Download Uses

`nubo download` reads `lock.yaml`.

```yaml
entries:
  - name: nubolang/color
    source: https://github.com/nubolang/color.git
    commit_hash: f5063d6fa53bf8be818f4316273ee81fb5474d21
    hash: sha256:d0b1dc4e7af156690f762c2d90c6bbe62c7ad265cd9a9e9e54c30fac26cbf0ef
```

For each entry, it downloads the exact source and checks out the exact commit.

## Download Location

Packages are downloaded into:

```txt
~/nubo/packages/
```

Full package cache path:

```txt
~/nubo/packages/<domain>/<user>/<repo>@<commit_hash>
```

Example:

```txt
~/nubo/packages/github.com/nubolang/color@f5063d6fa53bf8be818f4316273ee81fb5474d21
```

## Cache Reuse

If the exact package path already exists in the cache, Nubo uses the cached package.

This is shown as cached during install.

## Hash Validation

After downloading or finding a package, Nubo hashes the package directory.

The computed hash must match the `hash` field from `lock.yaml`.

```yaml
hash: sha256:d0b1dc4e7af156690f762c2d90c6bbe62c7ad265cd9a9e9e54c30fac26cbf0ef
```

If the hash does not match, validation fails.

This protects against accidentally using a different package folder than the one recorded in the lockfile.

## When to Run Download

Run `nubo download`:

- after cloning a project
- after receiving a project with `_nubo.yaml` and `lock.yaml`
- after deleting the global cache
- in CI before running or serving Nubo files
- after manually editing lock data

## Example Fresh Setup

```bash
git clone https://github.com/example/app
cd app
nubo download
nubo serve .
```
