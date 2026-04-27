---
title: String Prototypes
description: String methods attached to Nubo string values.
sidebar:
  order: 1
---

String values expose text helpers.

```tsx nubo
let s = "hello world"

println(s.length())
println(s.includes("world"))
println(s.toUpperCase())
```

## Current Literal Limitation

Prototype calls currently work reliably on values stored in variables.

```tsx nubo
let s = "string"

println(s.length())
```

Calling prototype methods directly on literals is currently limited by AST/parser behavior.

```tsx nubo
// Currently may not work:
println("string".length())
```

Prefer assigning the literal to a variable first.

```tsx nubo
let text = "string"

println(text.length())
```


## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `length()` | `int` | Returns the byte length of the string. |
| `includes(substr: string)` | `bool` | Checks whether the string contains `substr`. |
| `indexOf(substr: string)` | `int` | Returns the first index of `substr`, or `-1`. |
| `lastIndexOf(substr: string)` | `int` | Returns the last index of `substr`, or `-1`. |
| `startsWith(prefix: string)` | `bool` | Checks whether the string starts with `prefix`. |
| `endsWith(suffix: string)` | `bool` | Checks whether the string ends with `suffix`. |
| `toUpperCase()` | `string` | Converts the string to uppercase. |
| `toLowerCase()` | `string` | Converts the string to lowercase. |
| `capitalize()` | `string` | Converts the string to title case. |
| `trim()` | `string` | Removes whitespace from both ends. |
| `trimPrefix(prefix: string)` | `string` | Removes `prefix` from the beginning if present. |
| `trimSuffix(suffix: string)` | `string` | Removes `suffix` from the end if present. |
| `replace(old: string, new: string, n: int = -1)` | `string` | Replaces occurrences of `old` with `new`. `-1` means replace all. |
| `split(sep: string = " ")` | `[]string` | Splits the string by `sep`. |
| `substring(start: int, end: int)` | `string` | Returns a substring. |
| `charAt(index: int)` | `char` | Returns the character at `index`. |
| `codePointAt(index: int)` | `int` | Returns the Unicode code point at `index`. |
| `toKebabCase()` | `string` | Converts text to kebab-case. |
| `toCamelCase()` | `string` | Converts text to lower camelCase. |
| `toSnakeCase()` | `string` | Converts text to snake_case. |

## Searching

```tsx nubo
let name = "nubo language"

println(name.length())
println(name.includes("language"))
println(name.indexOf("language"))
println(name.startsWith("nubo"))
println(name.endsWith("language"))
```

## Trimming and Case

```tsx nubo
let text = "  Hello Nubo  "

println(text.trim())
println(text.toLowerCase())
println(text.toUpperCase())
println(text.capitalize())
```

## Case Conversion

```tsx nubo
let title = "Nubo Language"

println(title.toKebabCase())
println(title.toCamelCase())
println(title.toSnakeCase())
```

## Splitting

```tsx nubo
let csv = "red,green,blue"
let colors = csv.split(",")

println(colors)
```

## Characters

```tsx nubo
let text = "hello"

println(text.charAt(1))
println(text.codePointAt(1))
```

## Indexed Access

Strings also support indexed access through the internal `__get__` prototype.

```tsx nubo
let text = "hello"

println(text[1])
```

This behaves like `charAt`.
