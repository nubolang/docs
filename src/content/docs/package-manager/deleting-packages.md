---
title: Deleting Packages
description: Remove packages from _nubo.yaml, lock.yaml, and optionally the global cache.
sidebar:
  order: 5
---

Use `nubo del` to remove packages from the current project.

```bash
nubo del github.com/nubolang/color
```

## Cleanup Flag

By default, deleting removes package metadata from the project.

Use `--cleanup` to also remove the cached package folder from disk when it is safe.

```bash
nubo del github.com/nubolang/color --cleanup
```

## What Delete Does

When deleting a package, Nubo:

1. Parses the package URI.
2. Finds the package in `_nubo.yaml`.
3. Finds the lock entry in `lock.yaml`.
4. Checks whether other packages still reference the same dependency.
5. Checks nested dependency relationships.
6. Removes project metadata.
7. Removes lock data when safe.
8. Optionally removes the cached folder if `--cleanup` is used.

## Safe Deletion

Nubo avoids removing a package from the lockfile or cache if another locked package still depends on it.

If the package is still referenced, Nubo removes it only from direct project metadata.

That means `_nubo.yaml` can change while `lock.yaml` keeps the dependency because it is still needed transitively.

## Recursive Dependency Cleanup

If the package has its own `lock.yaml`, Nubo checks nested dependencies.

When safe, it recursively deletes dependencies that are no longer needed.

## Cache Cleanup

The cached folder is only removed when `--cleanup` is passed.

Cache path example:

```txt
~/nubo/packages/github.com/nubolang/color@f5063d6fa53bf8be818f4316273ee81fb5474d21
```

Without `--cleanup`, the cache remains on disk.

## Examples

Delete from project metadata:

```bash
nubo del github.com/nubolang/color
```

Delete and remove cache when safe:

```bash
nubo del github.com/nubolang/color --cleanup
```

Delete multiple packages through the CLI:

```bash
nubo del github.com/nubolang/color github.com/example/other
```
