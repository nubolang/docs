---
title: Nubo CLI
description: Run Nubo files, manage packages, format source files, prepare code, serve HTTP files, and inspect configuration.
sidebar:
  order: 0
---

The `nubo` command is the main command-line interface for the Nubo language.

You can use it to run Nubo files directly or to execute CLI commands.

```bash
nubo <file|command> [flags]
```

You can also run subcommands:

```bash
nubo [command]
```

Running `nubo` without a file or command prints the help text and returns an error because at least one argument is required.

```txt
Error: requires at least 1 arg(s), only received 0
```

## Usage

```bash
nubo <file|command> [flags]
nubo [command]
```

## Run a Nubo File

Pass a Nubo file path as the first argument.

```bash
nubo main.nubo
```

If the file does not exist, Nubo prints:

```txt
File does not exist
```

If the executed file returns a value, the CLI prints that value.

## Global Flags

These flags are available on the root command.

| Flag | Description |
| --- | --- |
| `-d`, `--dev` | Run the program in debug mode. |
| `-h`, `--help` | Show help. |
| `--loglevel string` | Language tokenizer and interpreter log level. |
| `--nocolor` | Disable colorized output. |
| `-v`, `--version` | Print the Nubo version. |

## Development Mode

Use `--dev` or `-d` to run in development/debug mode.

```bash
nubo main.nubo --dev
```

Short form:

```bash
nubo main.nubo -d
```

Internally, this sets the `NUBO_DEV` environment value for the process.

## Disable Color

Use `--nocolor` to disable colorized terminal output.

```bash
nubo main.nubo --nocolor
```

## Log Level

Use `--loglevel` to control tokenizer and interpreter logging.

```bash
nubo main.nubo --loglevel debug
```

## Version

Use `--version` or `-v` to print the Nubo version.

```bash
nubo --version
```

## Available Commands

| Command | Description |
| --- | --- |
| `completion` | Generate the autocompletion script for the specified shell. |
| `config` | Print the current configuration file path and parsed configuration. |
| `del` | Delete a package from the current project. |
| `download` | Download all dependencies. |
| `format` | Format Nubo files for better readability. |
| `get` | Add a package to the current project from a remote host. |
| `help` | Help about any command. |
| `init` | Initialize a Nubo package. |
| `plug` | Initialize a Nubo plugin. |
| `prepare` | Prepare Nubo files for faster execution. |
| `serve` | Start an HTTP server to serve Nubo files. |

## Command Help

Every command supports `--help`.

```bash
nubo serve --help
```

General help:

```bash
nubo help
```

You can also ask for help about a specific command:

```bash
nubo help serve
```

## Command Reference

- [Run](./run)
- [Config](./config)
- [Init](./init)
- [Get](./get)
- [Delete](./del)
- [Download](./download)
- [Format](./format)
- [Prepare](./prepare)
- [Serve](./serve)
- [Plug](./plug)
- [Completion](./completion)
