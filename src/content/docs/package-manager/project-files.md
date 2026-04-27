---
title: Project Files
description: Understand _nubo.yaml and lock.yaml in Nubo projects.
sidebar:
  order: 1
---

The Nubo package manager uses two files in the project root.

```txt
_nubo.yaml
lock.yaml
```

## `_nubo.yaml`

`_nubo.yaml` stores project metadata and the direct packages added to the project.

Example:

```yaml
name: test
author:
  name: test
packages:
  - source: https://github.com/nubolang/color.git
    commit: f5063d6
```

## `_nubo.yaml` Fields

| Field | Description |
| --- | --- |
| `name` | Project/package name. |
| `author.name` | Author name. |
| `author.website` | Optional author website. |
| `repository` | Optional project repository URL. |
| `packages` | Direct packages added to this project. |

Each item in `packages` contains:

| Field | Description |
| --- | --- |
| `source` | Package Git source URL. |
| `commit` | Short commit hash for display and direct dependency tracking. |

## `lock.yaml`

`lock.yaml` stores the exact dependency state.

Example:

```yaml
version: "1"
nubo_version: 0.4.0-alpha
entries:
  - name: nubolang/color
    source: https://github.com/nubolang/color.git
    commit_hash: f5063d6fa53bf8be818f4316273ee81fb5474d21
    hash: sha256:d0b1dc4e7af156690f762c2d90c6bbe62c7ad265cd9a9e9e54c30fac26cbf0ef
```

## `lock.yaml` Fields

| Field | Description |
| --- | --- |
| `version` | Lockfile format version. |
| `nubo_version` | Nubo version that wrote the lockfile. |
| `entries` | Exact locked dependency entries. |

Each lock entry contains:

| Field | Description |
| --- | --- |
| `name` | Package name, usually `user/repo` or `user/repo/subpath`. |
| `source` | Full source URL. |
| `commit_hash` | Full Git commit hash. |
| `hash` | SHA-256 hash of the package folder contents. |
| `meta` | Optional metadata. |

## Why Two Files?

`_nubo.yaml` is for the project and direct dependencies.

`lock.yaml` is for reproducible installs.

The short commit in `_nubo.yaml` is readable. The full commit and folder hash in `lock.yaml` are used for exact downloads and validation.

## When Files Are Created

`nubo init` creates both files.

```bash
nubo init
```

If the files already exist, Nubo loads them.

If `lock.yaml` does not exist, Nubo creates a new empty lockfile in memory and writes it when needed.
