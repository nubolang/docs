---
title: Hash
description: Hash strings and bytes, compare bcrypt passwords, and generate Argon2 hashes in Nubo.
sidebar:
  order: 8
---

The `@std/hash` module provides hashing and password hashing helpers.

```tsx nubo
import hash from "@std/hash"

println(hash.sha256("hello"))
```

Most hash functions accept either a `string` or `[]byte`.

```tsx nubo
let input: string | []byte
```

## Exports

| Name | Returns | Description |
| --- | --- | --- |
| `md5(value)` | `string` | MD5 hash as hex. |
| `sha1(value)` | `string` | SHA-1 hash as hex. |
| `sha256(value)` | `string` | SHA-256 hash as hex. |
| `sha512(value)` | `string` | SHA-512 hash as hex. |
| `blake3(value)` | `string` | BLAKE3 hash as hex. |
| `bcrypt(password, cost)` | `string` | Bcrypt password hash. |
| `bcrypt.compare(password, hash)` | `bool` | Compares a password with a bcrypt hash. |
| `argon2(password, salt)` | `string` | Argon2id hash encoded as base64. |

## Generic Hashes

```tsx nubo
import hash from "@std/hash"

println(hash.md5("hello"))
println(hash.sha1("hello"))
println(hash.sha256("hello"))
println(hash.sha512("hello"))
println(hash.blake3("hello"))
```

These functions also accept byte lists.

```tsx nubo
import hash from "@std/hash"

let data = bytes("hello")

println(hash.sha256(data))
```

## `hash.bcrypt`

Creates a bcrypt password hash.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `password` | `string | []byte` | none | Password to hash. |
| `cost` | `int` | bcrypt default | Bcrypt cost. |

Returns: `string`

```tsx nubo
import hash from "@std/hash"

let hashed = hash.bcrypt("secret")

println(hashed)
```

With a custom cost:

```tsx nubo
import hash from "@std/hash"

let hashed = hash.bcrypt("secret", 12)

println(hashed)
```

## `hash.bcrypt.compare`

Compares a password with a bcrypt hash.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `password` | `string | []byte` | Plain password. |
| `hash` | `string | []byte` | Bcrypt hash. |

Returns: `bool`

```tsx nubo
import hash from "@std/hash"

let hashed = hash.bcrypt("secret")

if hash.bcrypt.compare("secret", hashed) {
    println("password ok")
}
```

## `hash.argon2`

Creates an Argon2id hash and returns it as base64.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `password` | `string | []byte` | Password to hash. |
| `salt` | `string | []byte` | Salt value. |

Returns: `string`

```tsx nubo
import hash from "@std/hash"

let hashed = hash.argon2("secret", "random-salt")

println(hashed)
```
