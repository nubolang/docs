---
title: Run
description: Run Nubo files directly from the command line.
sidebar:
  order: 1
---

Run a Nubo file by passing the file path to the `nubo` command.

```bash
nubo main.nubo
```

## Usage

```bash
nubo <file> [flags]
```

## Example

```bash
nubo src/main.nubo
```

## File Check

Before running the file, Nubo checks whether the file exists.

If the file does not exist, it prints:

```txt
File does not exist
```

## Events

When runtime events are enabled in the Nubo configuration, the CLI creates the default event provider before running the file.

```yaml
runtime:
  events:
    enabled: true
```

## Return Value

If the executed file returns a value, Nubo prints it.

```tsx nubo
return "done"
```

Output:

```txt
done
```

## Useful Flags

```bash
nubo main.nubo --dev
nubo main.nubo --loglevel debug
nubo main.nubo --nocolor
```
