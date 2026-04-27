---
title: OS
description: Work with directories, files, paths, and file metadata in Nubo.
sidebar:
  order: 1
---

The `@std/os` module provides filesystem helpers for reading directories, copying, moving, removing, checking paths, and creating directories.

```tsx nubo
import os from "@std/os"

println(os.exists("README.md"))
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `FileInfo` | struct | Metadata about a file or directory. |
| `DirEntry` | struct | Directory entry returned by `readDir`. |
| `readDir` | function | Reads a directory and returns entries. |
| `copy` | function | Copies a file. |
| `move` | function | Moves or renames a file or directory. |
| `remove` | function | Removes a file or directory recursively. |
| `exists` | function | Checks whether a path exists. |
| `mkdir` | function | Creates a directory recursively. |

## `os.FileInfo`

`FileInfo` describes a file or directory.

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | File or directory name. |
| `isDir` | `bool` | Whether the path is a directory. |
| `size` | `int` | Size in bytes. |
| `mode` | `int` | File mode. |
| `modTime` | `Time` | Last modification time. |

## `os.DirEntry`

`DirEntry` describes an entry inside a directory.

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | Entry name. |
| `isDir` | `bool` | Whether the entry is a directory. |
| `info` | `fn() -> FileInfo` | Function that returns metadata. |

```tsx nubo
import os from "@std/os"

let entries = os.readDir(".")

for entry in entries {
    println(entry.name, entry.isDir)

    let info = entry.info()
    println(info.size)
}
```

## `os.readDir`

Reads a directory.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `dir` | `string` | Directory path. |

Returns: `[]DirEntry`

```tsx nubo
import os from "@std/os"

let entries = os.readDir(".")

for entry in entries {
    println(entry.name)
}
```

## `os.copy`

Copies a file from `src` to `dst`.

```tsx nubo
import os from "@std/os"

os.copy("input.txt", "backup.txt")
```

## `os.move`

Moves or renames a file or directory.

```tsx nubo
import os from "@std/os"

os.move("backup.txt", "archive/backup.txt")
```

## `os.remove`

Removes a file or directory recursively.

```tsx nubo
import os from "@std/os"

os.remove("archive")
```

## `os.exists`

Checks whether a path exists.

Returns: `bool`

```tsx nubo
import os from "@std/os"

if os.exists("config.json") {
    println("config found")
}
```

## `os.mkdir`

Creates a directory recursively.

```tsx nubo
import os from "@std/os"

os.mkdir("storage/cache")
```
