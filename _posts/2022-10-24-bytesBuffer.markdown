---
layout: post
title:  "Bytes Buffer in Go "
date:   2022-10-24 19:38:50 -0400 
comments: false
categories: python
---

Strings in Go are extremely inefficient. They are immutable and are stored as a slice of bytes. This means that every time you want to append a character to a string, you have to create a new string and copy the old one into it. This is extremely inefficient and can lead to a lot of memory usage.

It's better to use bytes buffer instead of strings. Bytes buffer is a mutable slice of bytes. It is more efficient than strings because it doesn't have to create a new string every time you want to append a character to it. It can just append the character to the end of the slice.

Here is an example of how to use bytes buffer:

```go
    package main

    import (
        "bytes"
        "fmt"
    )

    func main() {
        var buffer bytes.Buffer
        buffer.WriteString("Hello")
        buffer.WriteString(" ")
        buffer.WriteString("World")
        fmt.Println(buffer.String())
    }

```
[playground](https://go.dev/play/p/3YWH134rF1l)


