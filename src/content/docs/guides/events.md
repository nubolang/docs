---
title: Event System (pub/sub)
description: Using event, sub, and pub keywords for pub/sub in Nubo.
---


Nubo uses a simple pub/sub system with three keywords: `event`, `sub`, and `pub`.

## Declare an event type (channel)

```nubo
event messages(id: int)
```

This defines an event named `messages` carrying an integer id.

## Subscribe to the event

```nubo
sub messages(id) {
    println("received: ", id)
}
```

The block runs when the event is published with matching data.

## Publish an event

This sends data `42` to all subscribers of `messages`.

---

Events work as typed channels. `event` pre-defines an event, `sub` listens for events, `pub` sends data
to event listeners *(subscribers)*.