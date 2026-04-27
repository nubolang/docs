---
title: Config
description: Print the active Nubo configuration file path and parsed configuration.
sidebar:
  order: 2
---

The `config` command prints the current configuration file path and the parsed configuration.

```bash
nubo config
```

Short alias:

```bash
nubo c
```

## Usage

```bash
nubo config
nubo c
```

## Output

The command prints the active config file path first:

```txt
Config file: /path/to/config.yaml
```

Then it prints the current parsed configuration.

This is useful when your config contains placeholders such as `{current_dir}` or `{nubo_dir}`, because the printed configuration shows the resolved values.
