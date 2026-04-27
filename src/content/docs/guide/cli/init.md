---
title: Init
description: Initialize a Nubo package in the current directory.
sidebar:
  order: 3
---

The `init` command initializes a Nubo package in the current project directory.

```bash
nubo init
```

## Usage

```bash
nubo init
```

The command creates package metadata for the current directory and writes it to disk.

## Example

```bash
mkdir my-package
cd my-package
nubo init
```

After initialization, the directory can be used as a Nubo package.
