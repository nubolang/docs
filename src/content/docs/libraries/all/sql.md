---
title: SQL
description: Connect to SQLite, MySQL, and PostgreSQL databases in Nubo.
sidebar:
  order: 6
---

The `@std/sql` module provides database connection helpers and a database object with query, exec, ping, and close methods.

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let provider = sqlite("app.db")
let db = sql.open(provider)

println(db.ping())

db.close()
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `DB` | struct | Database instance type. |
| `open` | function | Opens a database from a SQL provider. |
| `sqlite` | function | Creates a SQLite provider. |
| `mysql` | function | Creates a MySQL provider. |
| `postgres` | function | Creates a PostgreSQL provider. |

Provider functions return connection-provider structs. Pass them to `sql.open` to create a `DB`.

## SQLite

Create a SQLite provider from a DSN.

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let provider = sqlite("app.db")
let db = sql.open(provider)

println(db.ping())

db.close()
```

Relative SQLite file paths are resolved from the current source file directory. SQLite DSNs automatically get shared cache and WAL journal options when they are not already present.

In-memory databases are supported.

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let provider = sqlite(":memory:")
let db = sql.open(provider)

db.exec("CREATE TABLE users (id INTEGER, name TEXT)")

db.close()
```

## MySQL

Create a MySQL provider.

Arguments:

| Name | Type | Default |
| --- | --- | --- |
| `user` | `string` | none |
| `password` | `string` | none |
| `dbname` | `string` | none |
| `host` | `string` | `"127.0.0.0"` |
| `port` | `int` | `3306` |
| `charset` | `string` | `"utf8mb4"` |
| `parseTime` | `bool` | `true` |

```tsx nubo
import sql from "@std/sql"
import mysql from "@std/sql/driver/mysql"

let provider = mysql(
    "root",
    "password",
    "app",
    "127.0.0.1",
    3306,
    "utf8mb4",
    true
)

let db = sql.open(provider)

println(db.ping())

db.close()
```

## PostgreSQL

Create a PostgreSQL provider.

Arguments:

| Name | Type | Default |
| --- | --- | --- |
| `user` | `string` | none |
| `password` | `string` | none |
| `dbname` | `string` | none |
| `host` | `string` | `"127.0.0.1"` |
| `port` | `int` | `5432` |
| `sslmode` | `string` | `"disable"` |
| `timezone` | `string` | `"UTC"` |

```tsx nubo
import sql from "@std/sql"
import postgres from "@std/sql/driver/postgres"

let provider = postgres(
    "postgres",
    "password",
    "app",
    "127.0.0.1",
    5432,
    "disable",
    "UTC"
)

let db = sql.open(provider)

println(db.ping())

db.close()
```

## `sql.open`

Opens a database from a provider.

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let provider = sqlite("app.db")
let db = sql.open(provider)
```

Returns: `sql.DB`

## `DB.query`

Runs a query and returns a list of dictionaries.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `query` | `string` | none | SQL query. |
| `args` | `[]any` | `[]` | Query parameters. |

Returns: `[]dict`

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let db = sql.open(sqlite(":memory:"))

db.exec("CREATE TABLE users (id INTEGER, name TEXT)")
db.exec("INSERT INTO users (id, name) VALUES (?, ?)", [1, "Martin"])

let rows = db.query("SELECT id, name FROM users WHERE id = ?", [1])

for row in rows {
    println(row["id"], row["name"])
}

db.close()
```

## `DB.exec`

Executes a statement and returns the number of affected rows.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `query` | `string` | none | SQL statement. |
| `args` | `[]any` | `[]` | Statement parameters. |

Returns: `int`

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let db = sql.open(sqlite(":memory:"))

db.exec("CREATE TABLE users (id INTEGER, name TEXT)")

let affected = db.exec(
    "INSERT INTO users (id, name) VALUES (?, ?)",
    [1, "Martin"]
)

println(affected)

db.close()
```

## `DB.ping`

Checks whether the database connection is alive.

Returns: `bool`

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let db = sql.open(sqlite(":memory:"))

println(db.ping())

db.close()
```

## `DB.close`

Closes the database connection.

```tsx nubo
import sql from "@std/sql"
import sqlite from "@std/sql/driver/sqlite"

let db = sql.open(sqlite(":memory:"))

db.close()
```

## Function Implementation Style

```tsx nubo
fn createUsersTable(db: sql.DB) void {
    db.exec("CREATE TABLE users (id INTEGER, name TEXT)")
}
```
