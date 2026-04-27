---
title: Prepare
description: Prepare Nubo files for faster execution.
sidebar:
  order: 8
---

The `prepare` command prepares Nubo files for faster execution.

```bash
nubo prepare <file|folder>
```

## Usage

```bash
nubo prepare <file|folder>
```

## Example

Prepare a project folder:

```bash
nubo prepare src
```

Prepare one file:

```bash
nubo prepare main.nubo
```

## Only One Target

The command accepts only one file or folder at a time.

If more than one argument is provided, Nubo prints:

```txt
Only one folder can be prepared at a time
```

## Missing Arguments

If no file or folder is provided, Nubo prints the command help.

```bash
nubo prepare
```
