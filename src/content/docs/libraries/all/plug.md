---
title: Plug
description: Load Go plugins and call plugin actions from Nubo.
sidebar:
  order: 8
---

The `@std/plug` module is for loading Go-backed plugins and calling actions on them.

Use `plugp` when you want Nubo code to communicate with an external Go plugin/backend.

```tsx nubo
import plug from "@std/plug"

let plugin = plug.require("stdio", "./backend")

let result = plugin.send("hello", {
    "name": "Nubo"
})

println(result)
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `Plug` | struct | Loaded Go plugin instance. |
| `require` | function | Loads a Go plugin and returns a `Plug`. |

## `plug.require`

Loads a Go plugin/backend and returns a `Plug`.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `string` | `"stdio"` | Plugin communication mode. |
| `path` | `string` | `"./backend"` | Plugin executable or backend path. |
| `addr` | `string?` | `nil` | Optional address. |
| `token` | `string?` | `nil` | Optional token. |

Returns: `Plug`

```tsx nubo
import plug from "@std/plug"

let plugin = plug.require("stdio", "./backend")
```

With a token:

```tsx nubo
import plug from "@std/plug"

let plugin = plug.require("stdio", "./backend", nil, "secret-token")
```

## `Plug`

`Plug` represents a loaded Go plugin.

You usually create it with `plug.require`.

```tsx nubo
import plug from "@std/plug"

let plugin = plug.require("stdio", "./backend")
```

## `plug.send`

Sends an action call to the loaded plugin.

Arguments:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `string` | none | Action name to call in the plugin. |
| `props` | `dict[string, any]?` | `nil` | Optional payload passed to the action. |

Returns: `dict[string, any]`

```tsx nubo
import plug from "@std/plug"

let plugin = plug.require("stdio", "./backend")

let response = plugin.send("createUser", {
    "name": "Martin",
    "admin": true
})

println(response)
```

Call an action without props by passing `nil`.

```tsx nubo
import plug from "@std/plug"

let plugin = plug.require("stdio", "./backend")

let health = plugin.send("health", nil)

println(health)
```

## Wrapper Function Example

Function implementations use the return type after the parameter list.

```tsx nubo
import plugp from "@std/plug"

fn callPlugin(plugin: plug.Plug, action: string) dict[string, any] {
    return plugin.send(action, nil)
}
```
