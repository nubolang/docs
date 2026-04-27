---
title: Singleton Structs
description: Create singleton-like structs by returning a stored instance from init.
sidebar:
  order: 5
---

A singleton is a type where repeated construction returns the same shared instance.

For normal constructors, `init` can return `void`.

For a singleton, `init` should return the struct type because it may need to return an already-created instance instead of the pre-created `self`.

## Basic Singleton Pattern

```tsx nubo
struct AppConfig {
    name: string
    loaded: bool
}

let appConfigInstance: AppConfig = nil

impl AppConfig {
    fn init(self: AppConfig) AppConfig {
        if !isNil(appConfigInstance) {
            return appConfigInstance
        }

        self.name = "Nubo"
        self.loaded = true

        appConfigInstance = self

        return self
    }
}
```

Now every call returns the same instance.

```tsx nubo
let a = AppConfig()
let b = AppConfig()

a.name = "Changed"

println(b.name)
```

Because `a` and `b` refer to the same stored instance, changing one affects the other.

## Why Singleton Init Returns a Value

In normal initialization, this is enough:

```tsx nubo
fn init(self: User, name: string) void {
    self.name = name
}
```

The constructor already knows the passed `self` is the instance being initialized.

But for a singleton, the pre-created `self` may be the wrong object.

```tsx nubo
fn init(self: AppConfig) AppConfig {
    if !isNil(appConfigInstance) {
        return appConfigInstance
    }

    appConfigInstance = self

    return self
}
```

Returning `AppConfig` lets the initializer replace the new `self` with the stored singleton instance.

## Singleton with Arguments

A singleton can accept arguments only on the first construction.

```tsx nubo
struct Database {
    dsn: string
}

let databaseInstance: Database = nil

impl Database {
    fn init(self: Database, dsn: string) Database {
        if !isNil(databaseInstance) {
            return databaseInstance
        }

        self.dsn = dsn
        databaseInstance = self

        return self
    }
}
```

Usage:

```tsx nubo
let db1 = Database("sqlite://app.db")
let db2 = Database("sqlite://ignored.db")

println(db1.dsn)
println(db2.dsn)
```

Both use the first DSN.

## Resettable Singleton

For tests or development, expose a reset function.

```tsx nubo
struct Registry {
    name: string
}

let registryInstance: Registry = nil

impl Registry {
    fn init(self: Registry) Registry {
        if !isNil(registryInstance) {
            return registryInstance
        }

        self.name = "default"
        registryInstance = self

        return self
    }

    fn reset(self: Registry) void {
        registryInstance = nil
    }
}
```

## When to Use Singleton Structs

Singleton structs are useful for:

- configuration
- app state
- registry objects
- shared service wrappers
- cached expensive setup

Avoid singletons when each call should create independent state.

## Independent Instances

Normal structs should usually use `void` init.

```tsx nubo
struct User {
    name: string
}

impl User {
    fn init(self: User, name: string) void {
        self.name = name
    }
}

let a = User("A")
let b = User("B")

println(a.name)
println(b.name)
```

This creates independent instances.
