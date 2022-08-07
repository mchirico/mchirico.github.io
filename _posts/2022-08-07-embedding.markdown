---
layout: post
title:  "Go Embedding "
date:   2022-08-07 14:43:52 -0400 
comments: false
categories: Go
---

Example using embeddings... with interface
[playground](https://go.dev/play/p/7HHEbxlQt4T)

```go
package main

import (
	"fmt"
)

type A struct{}

func (a *A) f0() string {
	return "f0()"
}

type B struct{}

func (b *B) f1() string {
	return "f1()"
}

type f0f1 interface {
	f0() string
	f1() string
}

type C struct {
	*A
	*B
}

func Pr(f f0f1) {
	fmt.Println(f.f0())
	fmt.Println(f.f1())

}

func main() {
	c := &C{A: &A{}, B: &B{}}
	Pr(c)

}
```





