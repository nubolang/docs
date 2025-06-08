---
title: "Input/Output Library"
description: "Documentation for the built-in @std/io library in Nubo."
---

The `@std/io` module provides basic file and stream operations in Nubo.

## Importing

```javascript
import io from "@std/io"
```

## Functions

### io.read(text: string): string

Reads content from the user.

```javascript
let name = io.read("Enter your name: ")
```

### io.open(file: string, encoding: string = "utf-8"): IOStream

Opens a file stream with optional encoding. Returns a stream object with methods for reading data.

```javascript
let file = io.open("file.txt")
```

## IOStream Methods

Returned by `io.open(...)`:

- `read(): string` – Reads next chunk.
- `readAll(): string` – Reads the entire content.
- `readByte(): int` – Reads one byte.
- `readLine(): string` – Reads a single line.
- `close(): void` – Closes the stream.

### Example

```javascript
let f = io.open("file.txt")
println(f.readLine())
f.close()
```

These methods are useful for reading files and handling input data in a streaming way.
