---
title: Package Cache
description: Understand where Nubo stores downloaded packages and how cache validation works.
sidebar:
  order: 6
---

Nubo stores downloaded packages in a global cache.

```txt
~/nubo/packages/
```

This path is created automatically.

## Base Directories

Nubo uses the user's home directory.

```txt
~/nubo/
```

Packages are stored under:

```txt
~/nubo/packages/
```

## Package Cache Layout

Each package is stored by domain, user, repository, and full commit hash.

```txt
~/nubo/packages/<domain>/<user>/<repo>@<commit_hash>
```

Example:

```txt
~/nubo/packages/github.com/nubolang/color@f5063d6fa53bf8be818f4316273ee81fb5474d21
```

## Why Commit Hashes Are Used

The full commit hash makes package installs reproducible.

The same package at a different commit gets a different cache folder.

That means multiple versions can exist at the same time.

## Temporary Clone Path

When adding a package, Nubo clones into a temporary path first.

```txt
~/nubo/packages/__tmp__/
```

After resolving and checking out the requested commit, Nubo moves it into the final cache path.

## Cached Adds

If the exact cache path already exists, Nubo does not clone it again.

It reuses the cached package and updates the project metadata.

## Hashing

Nubo computes a SHA-256 hash over the package directory contents.

It skips `.git` directories.

The hash is stored in `lock.yaml`.

```yaml
hash: sha256:<hash>
```

## Validation

During `nubo download`, Nubo hashes the cached/downloaded package and compares it to the lockfile hash.

If they do not match, Nubo fails validation.

This means the lockfile protects both the exact Git commit and the content hash.

## Clearing Cache

You can manually remove package cache folders if needed.

```bash
rm -rf ~/nubo/packages/github.com/nubolang/color@f5063d6fa53bf8be818f4316273ee81fb5474d21
```

Then restore from the lockfile:

```bash
nubo download
```
