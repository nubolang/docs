---
title: Getting Started
description: Learn how to get started with Nubo.
---

Welcome to **Nubo**, a real-time programming language designed for the web.

This guide will help you set up your development environment and run your first Nubo program.

## Prerequisites

Before installing Nubo, ensure that you have **Go 1.22+** installed on your system.

You can download Go from the official website: <https://go.dev/dl>

## Installing Nubo

To install the Nubo CLI, run the following command:

```bash
go install github.com/nubolang/nubo/cmd/nubo@latest
```

Make sure your `$GOPATH/bin` is in your system `$PATH` so the `nubo` command is available globally.

## Verify Installation

```
nubo --version
```

You should see the current version of the Nubo CLI.

## Creating Your First File

Create a file called `main.nubo`:

```nubo
let name = "World"
println(<h1>Hello, {name}!</h1>)
```

Then run it with:

```
nubo run main.nubo
```

You’ll see the rendered HTML output printed in your terminal.

You're now ready to start building with Nubo!
