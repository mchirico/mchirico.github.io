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

## 3) Select -- Hate this about Go

The two programs below produce different results, based on where
the "{" is placed in the select.

### Always `false` 
```go
package main

func False() bool {
	return false
}

func main() {
	switch False() {
	case false: println("False")
	case true: println("True")
	}
}
// Returns false
```
The [above program](https://go.dev/play/p/9X9PmyGEOnM) will always return false. It does what you expect it to do.

### Always `true` 

```go
package main

func False() bool {
	return false
}

func main() {
	switch False() // <<== Note "{" is no longer on this line
	{
	case false: println("False")
	case true: println("True")
	}
}
// returns true
```

But, the above program returns `true`, because it's really
formatted to be the [following](https://go.dev/play/p/fmMPSm5OuEz)...

```go
package main

func False() bool {
	return false
}

func main() {
	switch False(); {
	case false:
		println("False")
	case true:
		println("True")
	}
}

```


### 4 - Files relative

Reading files from relative directories doesn't have to be
difficult. Package `runtime` allows you to read in files
relative to what directory you code is running in...

```go
import (
	"path/filepath"
	"runtime"
)

var basepath string

func init() {
	_, currentFile, _, _ := runtime.Caller(0)
	basepath = filepath.Dir(currentFile)
}

func Path(rel string) string {
	if filepath.IsAbs(rel) {
		return rel
	}

	return filepath.Join(basepath, rel)
}


```