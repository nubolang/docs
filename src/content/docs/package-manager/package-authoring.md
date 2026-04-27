---
title: Package Authoring
description: Create Nubo package metadata with nubo init.
sidebar:
  order: 7
---

Use `nubo init` to initialize a Nubo package/project.

```bash
nubo init
```

This creates:

```txt
_nubo.yaml
lock.yaml
```

## Init Prompts

During init, Nubo asks for package metadata.

| Prompt | Description |
| --- | --- |
| `Init: Project Name` | Project/package name. |
| `Init: Author Name` | Author name. |
| `Init: Author Website` | Optional author website URL. |
| `Init: Repository` | Optional repository URL. |

## Project Name Rules

The project name must contain only:

- letters
- numbers
- `_`
- `-`
- `.`

Example valid names:

```txt
my_package
my-package
my.package
package123
```

## Author Name

The author name must not be empty.

## Website and Repository

The website and repository fields are optional.

If provided, they must be valid URLs.

## Example `_nubo.yaml`

```yaml
name: my-package
author:
  name: Martin
  website: https://example.com
repository: https://github.com/example/my-package
packages: []
```

## Package Dependencies

When you add packages with `nubo get`, they are added to `_nubo.yaml`.

```yaml
packages:
  - source: https://github.com/nubolang/color.git
    commit: f5063d6
```

The exact full commit and hash go into `lock.yaml`.

## Publishing Packages

A Nubo package can live in a Git repository.

Other projects can add it with:

```bash
nubo get github.com/user/repo
```

If the package has dependencies, include its `lock.yaml` so Nubo can merge nested locked dependencies when another project installs it.
