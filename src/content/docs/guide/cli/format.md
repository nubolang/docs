---
title: Format
description: Format Nubo files for better readability.
sidebar:
  order: 7
---

:::caution[Formatter is experimental]

The formatter may not support every Nubo language feature yet.

Before running `nubo format`, make a backup of your code or commit your changes to version control. Incomplete formatter support can change code in unexpected ways, and some code may be lost or rewritten incorrectly.

```bash
git add .
git commit -m "backup before formatting"
nubo format src
```
:::

## Usage

```bash
nubo format <file|directory>
```

You can pass files or directories.

```bash
nubo format main.nubo
nubo format src
```

## Files and Directories

When a file is passed, Nubo formats that file.

```bash
nubo format main.nubo
```

When a directory is passed, Nubo walks through the directory and formats the files inside it.

```bash
nubo format src
```

## Output

For each formatted file, Nubo prints:

```txt
Formatted path/to/file.nubo
```

## Missing Arguments

If no file or directory is provided, Nubo prints the command help.

```bash
nubo format
```
