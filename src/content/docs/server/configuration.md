---
title: Server Configuration
description: Configure Nubo server address, concurrency, upload limits, and events.
sidebar:
  order: 9
---

Server behavior is configured under `runtime.server`.

```yaml
runtime:
  server:
    address: ":3000"
    max_concurrency: 50
    max_upload_size_byte: 1_000_000
    max_upload_file_size: 5
```

## `runtime.server.address`

Default address used by `nubo serve` when no address is provided.

```yaml
runtime:
  server:
    address: ":3000"
```

Override it from the CLI:

```bash
nubo serve app --addr ":8080"
```

## `runtime.server.max_concurrency`

Maximum number of concurrent server work slots.

```yaml
runtime:
  server:
    max_concurrency: 50
```

## `runtime.server.max_upload_size_byte`

Maximum request body size used when reading `request.body()` or `request.json()`.

```yaml
runtime:
  server:
    max_upload_size_byte: 1_000_000
```

## `runtime.server.max_upload_file_size`

Maximum uploaded file size used by `request.file()` and multipart parsing.

```yaml
runtime:
  server:
    max_upload_file_size: 5
```

## Events

Server requests create an event provider when runtime events are enabled.

```yaml
runtime:
  events:
    enabled: true
```

Event provider configuration:

```yaml
runtime:
  events:
    enabled: true
    max_workers_per_topic: 10
    channel_buffer_size: 1024
```
