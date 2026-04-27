---
title: Configuration
description: Configure Nubo syntax parsing, runtime behavior, standard library access, events, import prefixes, and logging.
sidebar:
  order: 2
---

Nubo can be configured with a YAML configuration file.

The configuration file controls syntax parsing, runtime behavior, server defaults, standard library access, events, interpreter import prefixes, and logging.

## Viewing the Active Configuration

Use the `config` command to print the active configuration file path and the current parsed configuration.

```bash
nubo config
```

You can also use the short alias:

```bash
nubo c
```

The command prints:

```txt
Config file: /path/to/config.yaml
```

After that, it prints the current parsed and replaced configuration.

This is useful because placeholders such as `{current_dir}` and `{nubo_dir}` are resolved before the final config is used.

## Example Configuration

```yaml
# Nubo configuration file

# Syntax parser configuration
syntax:
  # Lexer allows us to configure lexer debug output
  lexer:
    debug:
      enable: "development" # production, development, any
      file: "{nubo_dir}/debug/lexer.yaml"

  # Tokenizer allows us to configure tokenizer deadline and debug output
  tokenizer:
    context:
      deadline: 5000 # 5 seconds to tokenize the parsed code
    debug:
      enable: "development" # production, development, any
      file: "{nubo_dir}/debug/ast.yaml"

# Nubo runtime configuration
runtime:
  # @server packages configuration
  server:
    address: ":3000"
    max_concurrency: 50
    max_upload_size_byte: 1_000_000
    max_upload_file_size: 5

  # @std packages configuration
  std:
    allow: ":all"
    disallow: "-"

  # Built-in event configuration
  events:
    enabled: true
    max_workers_per_topic: 10
    channel_buffer_size: 1024

  # Interpreter configuration
  interpreter:
    import:
      prefix:
        "@nubo/": "@nubolang/"
        "~": "{current_dir}"

# Logging configuration
logging:
  level: "prod"
  loggers:
    console:
      use: true
      encoding: "console"
    file:
      use: false
      path: "{current_dir}/logs/nubo.log"
      encoding: "json"
```

## Placeholders

Some configuration values support placeholders.

| Placeholder | Description |
| --- | --- |
| `{nubo_dir}` | Nubo's working/config/runtime directory. |
| `{nubo_dir_full_file}` | Full debug file path. Use this when you do not want debug output to rewrite the previous file. |
| `{current_dir}` | Current project directory. |
| `{date}` | Current date. Useful for log file names. |
| `{datedir}` | Date-based directory value. Useful for log file paths. |
| `{time}` | Current time. Useful for unique log file names. |

Example:

```yaml
logging:
  loggers:
    file:
      use: true
      path: "{current_dir}/logs/{date}-{time}.log"
      encoding: "json"
```

## Syntax Configuration

The `syntax` section configures parsing-related behavior.

```yaml
syntax:
  lexer:
    debug:
      enable: "development"
      file: "{nubo_dir}/debug/lexer.yaml"

  tokenizer:
    context:
      deadline: 5000
    debug:
      enable: "development"
      file: "{nubo_dir}/debug/ast.yaml"
```

### `syntax.lexer`

The lexer section controls lexer debug output.

```yaml
syntax:
  lexer:
    debug:
      enable: "development"
      file: "{nubo_dir}/debug/lexer.yaml"
```

#### `syntax.lexer.debug.enable`

Controls when lexer debug output is enabled.

| Value | Description |
| --- | --- |
| `production` | Enable only in production mode. |
| `development` | Enable only in development mode. |
| `any` | Enable in any mode. |

```yaml
syntax:
  lexer:
    debug:
      enable: "development"
```

#### `syntax.lexer.debug.file`

The file where lexer debug output is written.

```yaml
syntax:
  lexer:
    debug:
      file: "{nubo_dir}/debug/lexer.yaml"
```

Use `{nubo_dir_full_file}` when you do not want the lexer to rewrite the previous debug file.

```yaml
syntax:
  lexer:
    debug:
      file: "{nubo_dir_full_file}"
```

### `syntax.tokenizer`

The tokenizer section controls tokenizer deadlines and tokenizer debug output.

```yaml
syntax:
  tokenizer:
    context:
      deadline: 5000
    debug:
      enable: "development"
      file: "{nubo_dir}/debug/ast.yaml"
```

#### `syntax.tokenizer.context.deadline`

Maximum time allowed for tokenizing parsed code.

The value is in milliseconds.

```yaml
syntax:
  tokenizer:
    context:
      deadline: 5000
```

This example gives the tokenizer 5 seconds.

#### `syntax.tokenizer.debug.enable`

Controls when tokenizer debug output is enabled.

| Value | Description |
| --- | --- |
| `production` | Enable only in production mode. |
| `development` | Enable only in development mode. |
| `any` | Enable in any mode. |

```yaml
syntax:
  tokenizer:
    debug:
      enable: "development"
```

#### `syntax.tokenizer.debug.file`

The file where tokenizer debug output is written.

```yaml
syntax:
  tokenizer:
    debug:
      file: "{nubo_dir}/debug/ast.yaml"
```

Use `{nubo_dir_full_file}` when you do not want the tokenizer to rewrite the previous debug file.

```yaml
syntax:
  tokenizer:
    debug:
      file: "{nubo_dir_full_file}"
```

## Runtime Configuration

The `runtime` section configures server behavior, standard library access, events, and interpreter behavior.

```yaml
runtime:
  server:
    address: ":3000"
    max_concurrency: 50
    max_upload_size_byte: 1_000_000
    max_upload_file_size: 5

  std:
    allow: ":all"
    disallow: "-"

  events:
    enabled: true
    max_workers_per_topic: 10
    channel_buffer_size: 1024

  interpreter:
    import:
      prefix:
        "@nubo/": "@nubolang/"
        "~": "{current_dir}"
```

## Server Configuration

The `runtime.server` section configures defaults for `@server` packages.

```yaml
runtime:
  server:
    address: ":3000"
    max_concurrency: 50
    max_upload_size_byte: 1_000_000
    max_upload_file_size: 5
```

### `runtime.server.address`

Default address used by Nubo when starting the server.

```yaml
runtime:
  server:
    address: ":3000"
```

The default address is:

```txt
:3000
```

### `runtime.server.max_concurrency`

Maximum number of concurrent requests the server will handle.

```yaml
runtime:
  server:
    max_concurrency: 50
```

### `runtime.server.max_upload_size_byte`

Maximum size of uploaded request data in bytes.

```yaml
runtime:
  server:
    max_upload_size_byte: 1_000_000
```

This example allows up to `1_000_000` bytes, which is about 1 MB.

### `runtime.server.max_upload_file_size`

Maximum uploaded file size in megabytes.

```yaml
runtime:
  server:
    max_upload_file_size: 5
```

This example allows uploaded files up to 5 MB.

## Standard Library Access

The `runtime.std` section controls which `@std` packages can be used.

```yaml
runtime:
  std:
    allow: ":all"
    disallow: "-"
```

### `runtime.std.allow`

Controls which standard library packages are allowed.

| Value | Description |
| --- | --- |
| `":all"` | Allow all standard library packages. |
| `"-"` | Allow no packages. |
| `"hash,http,math"` | Allow only the listed packages. |

Allow every `@std` package:

```yaml
runtime:
  std:
    allow: ":all"
```

Allow only selected packages:

```yaml
runtime:
  std:
    allow: "hash,http,math"
```

Disallow every package:

```yaml
runtime:
  std:
    allow: "-"
```

### `runtime.std.disallow`

Controls which standard library packages are blocked.

| Value | Description |
| --- | --- |
| `"-"` | Disallow nothing. |
| `":all"` | Disallow all standard library packages. |
| `"hash,http,math"` | Disallow the listed packages. |

Disallow nothing:

```yaml
runtime:
  std:
    disallow: "-"
```

Disallow selected packages:

```yaml
runtime:
  std:
    disallow: "hash,http,math"
```

Disallow every package:

```yaml
runtime:
  std:
    disallow: ":all"
```

### Allow and Disallow Rules

`allow` and `disallow` are evaluated together.

A package must be allowed and not disallowed.

Important rules:

| Configuration | Result |
| --- | --- |
| `allow: ":all"` and `disallow: "-"` | Every package is allowed. |
| `allow: "hash,http"` and `disallow: "-"` | Only `hash` and `http` are allowed. |
| `allow: ":all"` and `disallow: "hash"` | Every package except `hash` is allowed. |
| `allow: "-"` | Every package is disallowed. |
| `disallow: ":all"` | Every package is disallowed. |

`allow: "-"` or `disallow: ":all"` disallows every package, no matter what the other value is.

```yaml
runtime:
  std:
    allow: "-"
    disallow: "-"
```

This disallows all packages because `allow` is `"-"`.

```yaml
runtime:
  std:
    allow: ":all"
    disallow: ":all"
```

This also disallows all packages because `disallow` is `":all"`.

## Events Configuration

The `runtime.events` section configures the built-in event provider.

```yaml
runtime:
  events:
    enabled: true
    max_workers_per_topic: 10
    channel_buffer_size: 1024
```

### `runtime.events.enabled`

Enables or disables the event provider.

```yaml
runtime:
  events:
    enabled: true
```

Disable events:

```yaml
runtime:
  events:
    enabled: false
```

### `runtime.events.max_workers_per_topic`

Maximum number of workers Nubo will handle per topic.

```yaml
runtime:
  events:
    max_workers_per_topic: 10
```

### `runtime.events.channel_buffer_size`

Maximum channel buffer size per topic.

```yaml
runtime:
  events:
    channel_buffer_size: 1024
```

## Interpreter Import Prefixes

The `runtime.interpreter.import.prefix` section defines import path aliases.

```yaml
runtime:
  interpreter:
    import:
      prefix:
        "@nubo/": "@nubolang/"
        "~": "{current_dir}"
```

A prefix maps the beginning of an import path to another path.

### `@nubo/`

This example allows packages using the `@nubo/` prefix to resolve to `@nubolang/`.

```yaml
runtime:
  interpreter:
    import:
      prefix:
        "@nubo/": "@nubolang/"
```

Example import:

```tsx nubo
import package from "@nubo/package"
```

Can resolve as:

```txt
@nubolang/package
```

### `~`

The `~` prefix can point to the current project directory.

```yaml
runtime:
  interpreter:
    import:
      prefix:
        "~": "{current_dir}"
```

Example import:

```tsx nubo
import helpers from "~/helpers"
```

Can resolve from the project root.

You can also point it to a source directory instead:

```yaml
runtime:
  interpreter:
    import:
      prefix:
        "~": "{current_dir}/src"
```

Then:

```tsx nubo
import helpers from "~/helpers"
```

Can resolve from:

```txt
{current_dir}/src/helpers
```

### Adding More Prefixes

You can add as many prefixes as needed.

```yaml
runtime:
  interpreter:
    import:
      prefix:
        "@app/": "{current_dir}/src"
        "@lib/": "{current_dir}/lib"
        "~": "{current_dir}"
```

## Logging Configuration

The `logging` section configures global logging and logger outputs.

```yaml
logging:
  level: "prod"
  loggers:
    console:
      use: true
      encoding: "console"
    file:
      use: false
      path: "{current_dir}/logs/nubo.log"
      encoding: "json"
```

### `logging.level`

Global log level.

```yaml
logging:
  level: "prod"
```

The default level is production level.

### Logger Encodings

Logger encoding can be:

| Encoding | Description |
| --- | --- |
| `console` | Human-readable console output. |
| `json` | JSON structured logs. |

## Console Logger

The console logger writes logs to the terminal.

```yaml
logging:
  loggers:
    console:
      use: true
      encoding: "console"
```

### `logging.loggers.console.use`

Enables or disables terminal logging.

```yaml
logging:
  loggers:
    console:
      use: true
```

### `logging.loggers.console.encoding`

Controls console logger encoding.

```yaml
logging:
  loggers:
    console:
      encoding: "console"
```

## File Logger

The file logger writes logs to a file.

```yaml
logging:
  loggers:
    file:
      use: true
      path: "{current_dir}/logs/nubo.log"
      encoding: "json"
```

### `logging.loggers.file.use`

Enables or disables file logging.

```yaml
logging:
  loggers:
    file:
      use: true
```

### `logging.loggers.file.path`

Path to the log file.

```yaml
logging:
  loggers:
    file:
      path: "{current_dir}/logs/nubo.log"
```

The path supports placeholders such as `{date}`, `{datedir}`, and `{time}`.

```yaml
logging:
  loggers:
    file:
      path: "{current_dir}/logs/{datedir}/nubo-{time}.log"
```

### `logging.loggers.file.encoding`

Controls file logger encoding.

```yaml
logging:
  loggers:
    file:
      encoding: "json"
```

JSON encoding is useful for log collectors and structured logging.

## Full Configuration Reference

```yaml
syntax:
  lexer:
    debug:
      enable: "development"
      file: "{nubo_dir}/debug/lexer.yaml"

  tokenizer:
    context:
      deadline: 5000
    debug:
      enable: "development"
      file: "{nubo_dir}/debug/ast.yaml"

runtime:
  server:
    address: ":3000"
    max_concurrency: 50
    max_upload_size_byte: 1_000_000
    max_upload_file_size: 5

  std:
    allow: ":all"
    disallow: "-"

  events:
    enabled: true
    max_workers_per_topic: 10
    channel_buffer_size: 1024

  interpreter:
    import:
      prefix:
        "@nubo/": "@nubolang/"
        "~": "{current_dir}"

logging:
  level: "prod"
  loggers:
    console:
      use: true
      encoding: "console"
    file:
      use: false
      path: "{current_dir}/logs/nubo.log"
      encoding: "json"
```
