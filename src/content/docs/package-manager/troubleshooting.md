---
title: Package Manager Troubleshooting
description: Common problems with Nubo packages and how to fix them.
sidebar:
  order: 8
---

This page lists common package manager issues.

## Invalid Source Format

Package URIs must contain at least:

```txt
domain/user/repo
```

Valid:

```bash
nubo get github.com/nubolang/color
```

Invalid:

```bash
nubo get nubolang/color
```

`nubo get` needs the domain because it builds the Git clone URL.

## Import Does Not Resolve

After installing:

```bash
nubo get github.com/nubolang/color
```

import using the package name from `lock.yaml`:

```tsx nubo
import color from "@nubolang/color"
```

Do not normally import with the full GitHub domain:

```tsx nubo
// Usually wrong:
import color from "github.com/nubolang/color"
```

If import resolution fails, check `lock.yaml`.

```yaml
entries:
  - name: nubolang/color
```

The import path should start with that `name`.

## Hash Mismatch

If `nubo download` fails validation, the package content does not match the lockfile hash.

Possible causes:

- cache folder was manually edited
- package folder is incomplete
- lockfile was edited manually
- the wrong commit/content exists in cache

Fix by removing the cached package and downloading again.

```bash
rm -rf ~/nubo/packages/github.com/nubolang/color@<commit_hash>
nubo download
```

## Missing Commit Hash

A lock entry must have `commit_hash`.

Invalid:

```yaml
entries:
  - name: nubolang/color
    source: https://github.com/nubolang/color.git
```

Valid:

```yaml
entries:
  - name: nubolang/color
    source: https://github.com/nubolang/color.git
    commit_hash: f5063d6fa53bf8be818f4316273ee81fb5474d21
    hash: sha256:d0b1dc4e7af156690f762c2d90c6bbe62c7ad265cd9a9e9e54c30fac26cbf0ef
```

## Package Not Found During Delete

`nubo del` looks for the package source in `_nubo.yaml` and `lock.yaml`.

If delete fails, check that both files contain the package.

```yaml
# _nubo.yaml
packages:
  - source: https://github.com/nubolang/color.git
```

```yaml
# lock.yaml
entries:
  - source: https://github.com/nubolang/color.git
```

## Download Uses Cache

If a package already exists in the cache, `nubo download` may reuse it.

If you want a clean download, remove the cached folder first.

```bash
rm -rf ~/nubo/packages/github.com/nubolang/color@<commit_hash>
nubo download
```

## Nested Dependencies

If a package contains its own `lock.yaml`, Nubo can merge those dependencies into the current lockfile.

If nested dependencies are missing, check that the installed package contains a valid `lock.yaml`.
