---
title: Import Resolution
description: Learn how package imports resolve to cached files.
sidebar:
  order: 4
---

Nubo resolves package imports using `lock.yaml`.

A lock entry looks like this:

```yaml
- name: nubolang/color
  source: https://github.com/nubolang/color.git
  commit_hash: f5063d6fa53bf8be818f4316273ee81fb5474d21
```

When an import path starts with the lock entry name, Nubo maps it to the cached package path.

## Importing a Package

After installing:

```bash
nubo get github.com/nubolang/color
```

Import the package by its lock name:

```tsx nubo
import color from "@nubolang/color"
```

Not by the full GitHub URL.

```tsx nubo
// Usually wrong for package resolution:
import color from "github.com/nubolang/color"
```

The remote source includes the domain, but the package name does not.

## How Mapping Works

If the import path starts with:

```txt
nubolang/color
```

and the lock entry points to:

```txt
github.com/nubolang/color@f5063d6...
```

Nubo maps the import to:

```txt
~/nubo/packages/github.com/nubolang/color@f5063d6.../<remaining-path>
```

## Importing the Root Package

For:

```tsx nubo
import color from "@nubolang/color"
```

Nubo maps the import to the package root.

If the import path exactly matches the package name, Nubo uses the repository name as the remaining path internally.

## Importing a File or Subpath

You can import a subpath from the package.

```tsx nubo
import theme from "@nubolang/color/theme"
```

This maps into the cached package under the remaining path:

```txt
~/nubo/packages/github.com/nubolang/color@<commit>/theme
```

## Subpath Packages

If you add a subpath package:

```bash
nubo get github.com/org/repo/pkg/tools
```

the package name can become:

```txt
org/repo/pkg/tools
```

Then import it with that name:

```tsx nubo
import tools from "org/repo/pkg/tools"
```

## Prefix Matching

Nubo checks package lock entries and finds the first one where the import path starts with the package name.

Because of this, package names should be specific enough to avoid accidental overlaps.

## Local Paths Still Work

If no package lock entry matches the import path, Nubo leaves the path unchanged.

That allows normal local imports to keep working.
