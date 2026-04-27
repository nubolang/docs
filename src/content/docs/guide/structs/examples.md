---
title: Struct Examples
description: Complete examples showing Nubo structs in practice.
sidebar:
  order: 8
---

This page shows complete struct examples.

## User Struct

```tsx nubo
struct User {
    name: string
    age: int
}

impl User {
    fn init(self: User, name: string, age: int) void {
        self.name = name
        self.age = age
    }

    fn greet(self: User) string {
        return "Hello, " + self.name
    }
}

let user = User("Martin", 19)

println(user.greet())
```

## Counter

```tsx nubo
struct Counter {
    value: int
}

impl Counter {
    fn init(self: Counter, start: int = 0) void {
        self.value = start
    }

    fn increment(self: Counter) void {
        self.value = self.value + 1
    }

    fn decrement(self: Counter) void {
        self.value = self.value - 1
    }
}

let counter = Counter(10)

counter.increment()
counter.increment()
counter.decrement()

println(counter.value)
```

## Singleton Config

Singleton-style `init` returns the struct type because it may return an existing instance instead of the new `self`.

```tsx nubo
struct Config {
    appName: string
    env: string
}

let configInstance: Config = nil

impl Config {
    fn init(self: Config) Config {
        if !isNil(configInstance) {
            return configInstance
        }

        self.appName = "Nubo"
        self.env = "development"

        configInstance = self

        return self
    }
}

let a = Config()
let b = Config()

a.env = "production"

println(b.env)
```

## Private Account

```tsx nubo
struct Account {
    owner: string
    private balance: int
}

impl Account {
    fn init(self: Account, owner: string) void {
        self.owner = owner
        self.balance = 0
    }

    fn deposit(self: Account, amount: int) void {
        if amount <= 0 {
            panic("amount must be positive")
        }

        self.balance = self.balance + amount
    }

    fn getBalance(self: Account) int {
        return self.balance
    }
}

let account = Account("Martin")

account.deposit(100)

println(account.getBalance())
```

## Stringable Point

```tsx nubo
struct Point {
    x: int
    y: int
}

impl Point {
    fn init(self: Point, x: int, y: int) void {
        self.x = x
        self.y = y
    }

    fn __string__(self: Point) string {
        return "Point(" + string(self.x) + ", " + string(self.y) + ")"
    }
}

let point = Point(10, 20)

println(string(point))
```

## Indexable Store

```tsx nubo
struct Store {
    data: dict[string, any]
}

impl Store {
    fn init(self: Store) void {
        self.data = {}
    }

    fn __get__(self: Store, key: string) any {
        return self.data[key]
    }

    fn __set__(self: Store, key: string, value: any) void {
        self.data[key] = value
    }
}

let store = Store()

store["name"] = "Nubo"

println(store["name"])
```
