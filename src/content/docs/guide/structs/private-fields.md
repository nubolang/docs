---
title: Private Fields
description: Protect struct fields with private and expose controlled methods.
sidebar:
  order: 6
---

Use `private` to hide a struct field from outside code.

```tsx nubo
struct User {
    name: string
    private password: string
}
```

Private fields cannot be read or modified directly from outside the implementation context.

```tsx nubo
let user = User()

user.name = "Martin"

// Error:
user.password = "secret"
```

## Access Private Fields in `impl`

Methods inside `impl` can control access to private fields.

```tsx nubo
struct User {
    name: string
    private password: string
}

impl User {
    fn setPassword(self: User, password: string) void {
        self.password = password
    }

    fn checkPassword(self: User, password: string) bool {
        return self.password == password
    }
}
```

Usage:

```tsx nubo
let user = User()
user.name = "Martin"

user.setPassword("secret")

println(user.checkPassword("secret"))
```

## Why Use Private Fields?

Private fields are useful for values that should not be changed freely.

Examples:

- passwords
- tokens
- cached internal values
- file handles
- database connections
- internal state flags

## Private Fields and String Output

Private fields are marked as private in inspection output and skipped by public conversion output.

```tsx nubo
struct User {
    name: string
    private password: string
}
```

The runtime treats `password` differently from public fields.

## Private Fields and `$convout`

The internal `$convout` hook converts public fields into a dictionary-like output.

Private fields are skipped.

```tsx nubo
struct User {
    name: string
    private password: string
}
```

Public output includes `name`, but not `password`.

## Controlled Updates

Use methods to validate private field updates.

```tsx nubo
struct Account {
    private balance: int
}

impl Account {
    fn deposit(self: Account, amount: int) void {
        if amount <= 0 {
            panic("amount must be positive")
        }

        self.balance = self.balance + amount
    }

    fn balance(self: Account) int {
        return self.balance
    }
}
```
