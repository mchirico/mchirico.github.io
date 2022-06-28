---
layout: post
title:  "Go Programs -- Reminders"
date:   2022-06-28 10:10:53 -0400 
comments: false
categories: go
---

Some personal reminders on Go development.

## 1) Perfect is enemy of good.

Often times is makes sense to keep going with a code idea. Write tests, so you can back out. 
But, if you have writers block... sometimes it helps to just code.  Other options:

1. Write next move with pen and paper - this helps with complex structures
2. Review previous works of code - always helps to read other's code 


## 2) Interface Names (should be verbs)

Use verbs for interface names.  Ref [io.go](https://github.com/golang/go/blob/master/src/io/io.go), where
names are `WriteString, Reader, ByteWriter, Closer...`  Interfaces define function calls, so should be actions.

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}
...
type Writer interface {
	Write(p []byte) (n int, err error)
}

type Closer interface {
	Close() error
}

```



