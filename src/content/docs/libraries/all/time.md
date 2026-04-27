---
title: Time
description: Work with dates, times, parsing, formatting, and date arithmetic in Nubo.
sidebar:
  order: 1
---

The `@std/time` module provides time creation, parsing, formatting, and date arithmetic.

```tsx nubo
import time from "@std/time"

let now = time.now()

println(now.format("Y-m-d H:i:s"))
```

## Exports

| Name | Kind | Description |
| --- | --- | --- |
| `Time` | struct | Time instance type. |
| `now` | function | Returns the current time. |
| `parse` | function | Parses a time string with a format. |
| `parseAny` | function | Parses a string or Unix timestamp into a `Time`. |

## `time.now`

Returns the current time as a `Time` value.

```tsx nubo
import time from "@std/time"

let current = time.now()

println(current)
println(current.unix)
```

## `time.parse`

Parses a time value using a Nubo time format string.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `format` | `string` | Format pattern. |
| `value` | `string` | Time string to parse. |

Returns: `Time`

```tsx nubo
import time from "@std/time"

let date = time.parse("Y-m-d", "2026-04-27")

println(date.format("Y/m/d"))
```

## `time.parseAny`

Parses a time from either a string or an integer Unix timestamp.

Arguments:

| Name | Type | Description |
| --- | --- | --- |
| `time` | `string | int` | Date/time input. |

Returns: `Time`

```tsx nubo
import time from "@std/time"

let fromText = time.parseAny("2026-04-27T12:00:00Z")
let fromUnix = time.parseAny(1714219200)

println(fromText)
println(fromUnix)
```

## `Time`

`Time` values expose fields and methods for formatting and date arithmetic.

| Name | Kind | Description |
| --- | --- | --- |
| `unix` | `int` | Unix time stored as nanoseconds. |
| `format` | function | Formats the time. |
| `add` | function | Adds seconds or another `Time` value. |
| `substract` | function | Subtracts seconds or another `Time` value. |
| `addDays` | function | Adds days. |
| `addMonths` | function | Adds months. |
| `addYears` | function | Adds years. |
| `year` | function | Returns the year. |
| `month` | function | Returns the month number. |
| `day` | function | Returns the day of month. |
| `hour` | function | Returns the hour. |
| `minute` | function | Returns the minute. |
| `second` | function | Returns the second. |

```tsx nubo
import time from "@std/time"

let now = time.now()
let tomorrow = now.addDays(1)
let nextMonth = now.addMonths(1)
let nextYear = now.addYears(1)

println(tomorrow.format("Y-m-d"))
println(nextMonth.month())
println(nextYear.year())
```

## Formatting Tokens

`Time.format` uses Nubo format tokens that are mapped internally.

| Token | Meaning | Example |
| --- | --- | --- |
| `Y` | 4 digit year | `2026` |
| `y` | 2 digit year | `26` |
| `F` | Full month name | `April` |
| `M` | Short month name | `Apr` |
| `m` | Month with leading zero | `04` |
| `n` | Month without leading zero | `4` |
| `d` | Day with leading zero | `27` |
| `j` | Day without leading zero | `27` |
| `D` | Short weekday | `Mon` |
| `l` | Full weekday | `Monday` |
| `H` | 24-hour hour with leading zero | `15` |
| `G` | 24-hour hour | `15` |
| `h` | 12-hour hour with leading zero | `03` |
| `g` | 12-hour hour | `3` |
| `i` | Minutes | `04` |
| `s` | Seconds | `05` |
| `A` | Uppercase AM/PM | `PM` |
| `a` | Lowercase am/pm | `pm` |
| `T` | Timezone abbreviation | `UTC` |
| `Z` | Timezone offset | `+0000` |
| `c` | ISO 8601 format | `2026-04-27T12:00:00+00:00` |
| `r` | RFC 2822 format | `Mon, 27 Apr 2026 12:00:00 +0000` |

```tsx nubo
import time from "@std/time"

let now = time.now()

println(now.format("Y-m-d H:i:s"))
println(now.format("l, F j, Y"))
println(now.format("c"))
```

Use `\` to escape a format character.

```tsx nubo
import time from "@std/time"

let now = time.now()

println(now.format("Y-m-d \\a\\t H:i:s"))
```
