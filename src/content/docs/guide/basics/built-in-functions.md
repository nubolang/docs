---
title: Built-in Functions
description: Learn about Nubo's global built-in functions, converters, runtime helpers, regex support, and debugging utilities.
sidebar:
  order: 10
---

Nubo includes a set of built-in functions and values that are available globally.

These functions cover console output, type inspection, conversion, runtime helpers, errors, environment variables, regex support, highlighting, and debugging.

## Output

Use `print` and `println` to write values to the console.

```tsx nubo
print("Hello, ")
println("Nubo")
```

### `print(...)`

Writes values without automatically adding a newline.

```tsx nubo
print("Loading...")
print("done")
```

### `println(...)`

Writes values and ends the line.

```tsx nubo
println("Hello")
println("Age:", 19)
```

## Type and Value Inspection

Nubo provides helpers for inspecting values at runtime.

### `type(obj: any) -> string`

Returns the public type name of a value.

```tsx nubo
println(type("hello")) // string
println(type(123))     // int
println(type(true))    // bool
```

### `_type(obj: any) -> string`

Returns a lower-level or internal type name.

```tsx nubo
println(_type([1, 2, 3]))
```

### `_id(obj: any) -> string`

Returns the internal object ID for a value.

```tsx nubo
let user = "Martin"

println(_id(user))
```

### `inspect(obj: any) -> string`

Returns a detailed string representation of a value.

```tsx nubo
let values = [1, 2, 3]

println(inspect(values))
```

### `memsize(obj: any) -> int`

Returns the memory size of a value.

```tsx nubo
let text = "Nubo"

println(memsize(text))
```

### `valueof(obj: any) -> any`

Returns the underlying value of an object.

```tsx nubo
let value = valueof("hello")

println(value)
```

## Length and Concatenation

### `len(object: any) -> int`

Returns the length of a supported value.

This is commonly used with strings, lists, and collection-like values.

```tsx nubo
println(len("Nubo"))    // 4
println(len([1, 2, 3])) // 3
```

### `concat(...)`

Concatenates values.

```tsx nubo
let name = concat("Nu", "bo")

println(name) // Nubo
```

## Type Checking

### `typecheck(typ: type, value: any) -> bool`

Checks whether a value matches a type object.

```tsx nubo
println(typecheck(string, "hello")) // true
println(typecheck(int, "hello"))    // false
```

## References and Cloning

Nubo includes helpers for working with references and copied values.

### `ref(obj: any) -> any`

Returns a reference to a value.

```tsx nubo
let value = "Nubo"
let valueRef = ref(value)

println(valueRef)
```

### `unwrap(obj: any) -> any`

Unwraps a referenced or wrapped value.

```tsx nubo
let value = "Nubo"
let valueRef = ref(value)

println(unwrap(valueRef))
```

### `clone(obj: any) -> any`

Creates a clone of a value.

```tsx nubo
let list = [1, 2, 3]
let copied = clone(list)

println(copied)
```

## Runtime Control

### `sleep(ms: int = 0) -> void`

Pauses execution for the given number of milliseconds.

```tsx nubo
println("Waiting...")
sleep(1000)
println("Done")
```

### `exit(code: int = 0) -> void`

Exits the program with an optional exit code.

```tsx nubo
exit(0)
```

## Environment Variables

### `env(name: string, value: string? = nil) -> string?`

Reads or sets an environment variable.

When called with only a name, it returns the current value.

```tsx nubo
let home = env("HOME")

println(home)
```

When called with a name and value, it sets the environment variable.

```tsx nubo
env("APP_ENV", "development")

println(env("APP_ENV"))
```

If the variable does not exist, the function may return `nil`.

```tsx nubo
let missing = env("UNKNOWN_VARIABLE")

println(isNil(missing))
```

## Errors

### `panic(message: string)`

Stops execution with an error message.

```tsx nubo
panic("Something went wrong")
```

### `isNil(obj: any) -> bool`

Checks whether a value is `nil`.

```tsx nubo
let value = nil

println(isNil(value)) // true
```

## Type Conversion

Nubo provides built-in conversion functions for common types.

### `string(obj: any) -> string`

Converts a value to a string.

```tsx nubo
println(string(123)) // "123"
```

### `int(obj: any) -> int`

Converts a value to an integer.

```tsx nubo
println(int("42"))
println(int(3.9))
```

### `float(obj: any) -> float`

Converts a value to a float.

```tsx nubo
println(float("3.14"))
println(float(10))
```

### `bool(obj: any) -> bool`

Converts a value to a boolean.

```tsx nubo
println(bool(1))
println(bool(""))
```

### `byte(obj: any) -> byte`

Converts a value to a byte.

```tsx nubo
let b = byte(65)

println(b)
```

### `char(obj: any) -> char`

Converts a value to a character.

```tsx nubo
let c = char(65)

println(c)
```

### `bytes(obj: any) -> []byte`

Converts a value to a list of bytes.

```tsx nubo
let data = bytes("Nubo")

println(data)
```

## Ranges

### `range`

`range` is a built-in helper for creating numeric ranges.

It is useful for loops and repeated operations.

```tsx nubo
for i in range(0, 5) {
    println(i)
}
```

Depending on the range API available in your version of Nubo, `range` may expose additional methods or forms.

```tsx nubo
for i in range(5) {
    println(i)
}
```

## Syntax Highlighting

### `highlight(code: string, mode: string = "console") -> string`

Highlights source code and returns the highlighted output as a string.

The default mode is `"console"`.

```tsx nubo
let code = "println(\"Hello\")"

println(highlight(code))
```

You can also pass a mode explicitly.

```tsx nubo
let code = "println(\"Hello\")"

println(highlight(code, "console"))
```

## Regular Expressions

### `regex`

`regex` provides built-in regular expression support.

```tsx nubo
let re = regex("[a-z]+")

println(re)
```

The exact available methods depend on the regex object returned by the built-in `regex()` helper.

Common regex-style operations include matching, searching, and replacing text.

```tsx nubo
let pattern = regex("[0-9]+")

println(pattern)
```

## Debugging

### `xdbg(...)`

Debug helper for inspecting runtime values.

```tsx nubo
let user = {
    name: "Martin"
}

xdbg(user)
```

This function is intended for debugging and development.

## Version

### `__version__`

The current Nubo version string.

```tsx nubo
println(__version__)
```

## Built-in Function Reference

| Name | Signature | Description |
| --- | --- | --- |
| `_id` | `_id(obj: any) -> string` | Returns the internal object ID. |
| `println` | `println(...)` | Prints values with a newline. |
| `print` | `print(...)` | Prints values without a newline. |
| `type` | `type(obj: any) -> string` | Returns the public type name. |
| `_type` | `_type(obj: any) -> string` | Returns the internal type name. |
| `memsize` | `memsize(obj: any) -> int` | Returns the memory size of a value. |
| `inspect` | `inspect(obj: any) -> string` | Returns a detailed representation of a value. |
| `sleep` | `sleep(ms: int = 0) -> void` | Pauses execution. |
| `ref` | `ref(obj: any) -> any` | Returns a reference to a value. |
| `unwrap` | `unwrap(obj: any) -> any` | Unwraps a wrapped or referenced value. |
| `clone` | `clone(obj: any) -> any` | Clones a value. |
| `exit` | `exit(code: int = 0) -> void` | Exits the program. |
| `range` | `range` | Range helper for iteration. |
| `env` | `env(name: string, value: string? = nil) -> string?` | Gets or sets environment variables. |
| `concat` | `concat(...)` | Concatenates values. |
| `len` | `len(object: any) -> int` | Returns the length of a value. |
| `typecheck` | `typecheck(typ: type, value: any) -> bool` | Checks whether a value matches a type. |
| `panic` | `panic(message: string)` | Stops execution with an error. |
| `isNil` | `isNil(obj: any) -> bool` | Checks whether a value is `nil`. |
| `string` | `string(obj: any) -> string` | Converts a value to a string. |
| `int` | `int(obj: any) -> int` | Converts a value to an integer. |
| `float` | `float(obj: any) -> float` | Converts a value to a float. |
| `bool` | `bool(obj: any) -> bool` | Converts a value to a boolean. |
| `byte` | `byte(obj: any) -> byte` | Converts a value to a byte. |
| `char` | `char(obj: any) -> char` | Converts a value to a character. |
| `bytes` | `bytes(obj: any) -> []byte` | Converts a value to bytes. |
| `valueof` | `valueof(obj: any) -> any` | Returns the underlying value. |
| `highlight` | `highlight(code: string, mode: string = "console") -> string` | Highlights source code. |
| `regex` | `regex(...)` | Provides regular expression support. |
| `xdbg` | `xdbg(...)` | Debug helper. |
| `__version__` | `string` | Current Nubo version. |
