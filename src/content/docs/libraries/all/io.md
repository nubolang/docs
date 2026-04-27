---
title: IO
description: Read console input, open streams, read files, and write files in Nubo.
sidebar:
  order: 6
---

The `@std/io` module provides console input, file streams, and file writing.

```tsx nubo
import io from "@std/io"

let name = io.read("Name: ")

println("Hello", name)
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `Stream` | struct | Stream returned by `io.open`. |
| `read` | function | Reads text from standard input. |
| `open` | function | Opens a file as a stream. |
| `writeFile` | function | Writes data to a file. |

## `io.read`

Reads a string from standard input.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `""` | Prompt text printed before reading. |
| `trim` | `bool` | `true` | Whether to trim surrounding whitespace. |
| `endln` | `char` | `'\n'` | Character that ends input. |

Returns: `string`

```tsx nubo
import io from "@std/io"

let name = io.read("Name: ")

println(name)
```

Read without trimming:

```tsx nubo
import io from "@std/io"

let raw = io.read("Raw: ", false)

println(raw)
```

## `io.open`

Opens a file and returns a `Stream`.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `file` | `string` | none | File path. |
| `mode` | `string` | `"r"` | Open mode. |
| `perm` | `int` | system default | File permissions for created files. |
| `encoding` | `string` | `"utf-8"` | Text encoding. |

Returns: `Stream`

```tsx nubo
import io from "@std/io"

let stream = io.open("README.md")

println(stream.readAll())

stream.close()
```

Relative paths are resolved from the current source file when debug file information is available.

## Open Modes

| Mode | Description |
| --- | --- |
| `"r"` | Read-only. File must exist. |
| `"r+"` | Read/write. File must exist. |
| `"rw"` | Read/write. File must exist. |
| `"w"` | Write-only. Create or truncate. |
| `"w+"` | Read/write. Create or truncate. |
| `"rw+"` | Read/write. Create or truncate. |
| `"a"` | Write-only append. Create if needed. |
| `"a+"` | Read/write append. Create if needed. |

## Encodings

Supported encodings:

| Name |
| --- |
| `utf-8` |
| `utf-16` |
| `utf-16le` |
| `utf-16be` |
| `latin1` |
| `iso-8859-1` |
| `windows-1252` |
| `cp1252` |

## `io.writeFile`

Writes data to a file.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `file` | `string` | none | File path. |
| `data` | `any` | none | Data to write. Converted to string. |
| `perm` | `int` | system default | File permissions. |

```tsx nubo
import io from "@std/io"

io.writeFile("hello.txt", "Hello, Nubo")
```

## `Stream`

A `Stream` supports reading, writing, and closing depending on how it was opened.

### Reading Methods

| Method | Returns | Description |
| --- | --- | --- |
| `read()` | `string` | Reads up to a chunk of data. |
| `readAll()` | `string` | Reads the rest of the stream. |
| `readByte()` | `byte` | Reads one byte. |
| `readLine()` | `string` | Reads one line without the trailing newline. |
| `readLines()` | `[]string` | Reads lines into a list. |

```tsx nubo
import io from "@std/io"

let stream = io.open("notes.txt")

println(stream.readLine())
println(stream.readAll())

stream.close()
```

### Writing Methods

Writing methods are available when the stream was opened in a writable mode.

| Method | Returns | Description |
| --- | --- | --- |
| `write(content)` | `int` | Writes a string and returns bytes written. |
| `writeByte(content)` | `int` | Writes one byte and returns bytes written. |

```tsx nubo
import io from "@std/io"

let stream = io.open("out.txt", "w")

stream.write("Hello")
stream.writeByte(byte(10))
stream.write("Nubo")

stream.close()
```

### Closing

Always close streams when finished.

```tsx nubo
import io from "@std/io"

let stream = io.open("out.txt", "w")

stream.write("done")
stream.close()
```
