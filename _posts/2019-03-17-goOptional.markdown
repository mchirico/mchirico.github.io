---
layout: post
title: "Go Default Values "
date: 2019-03-17 09:04:44 -0400
comments: false
categories: go
---

Default values in Go functions.

The language doesn't directly
support default values, so you have to build a workaround.

[playground](https://play.golang.org/p/gE9Ma8jPrVN)

```go
package main

import "fmt"

func A(a string) string {
	return a + "done"
}

type Query struct {
	yamlconfig YamlFunction
	url        URLtype
}

func NewQuery(options ...func(*Query) error) (*Query, error) {
	f := &Query{}

	f.yamlconfig = func(b string) string { return b + "default" }
	f.url = "string"

	for _, op := range options {
		err := op(f)
		if err != nil {
			return nil, err
		}
	}
	return f, nil
}

func OptionYaml(f *Query) error {
	f.yamlconfig = A
	return nil
}

func OptionURL(t URLtype) func(f *Query) error {
	return func(f *Query) error {
		f.url = t
		return nil
	}
}

type URLtype string
type YamlFunction func(string) string

func main() {
	f1, err := NewQuery()
	fmt.Println(f1.yamlconfig(" "), f1.url, err)

	f2, err := NewQuery(OptionURL("10"))
	fmt.Println(f2.yamlconfig(" "), f2.url, err)

	f3, err := NewQuery(OptionURL("20"), OptionYaml)
	fmt.Println(f3.yamlconfig(" "), f3.url, err)


	f4, err := NewQuery(OptionYaml, OptionURL("30"))
	fmt.Println(f4.yamlconfig(" "), f4.url, err)

}


```

## Here's another example

[playground](https://play.golang.org/p/1Hat45X_7ky)

```go
package main

import "fmt"

type ReturnType string
type FunctionConfig func(ReturnType) (ReturnType, error)

func A(a ReturnType) (ReturnType, error) {
	return a + " done", nil
}

type Thing struct {
	functionConfig FunctionConfig
	returnType     ReturnType
}

func NewThing(options ...func(*Thing) error) (ReturnType, error) {
	f := &Thing{}

	f.functionConfig = func(b ReturnType) (ReturnType, error) { return b + "  default", nil }
	f.returnType = " ...some default..."

	for _, op := range options {
		err := op(f)
		if err != nil {
			return "", err
		}
	}
	return f.functionConfig(f.returnType)
}

func OptionalFn(f *Thing) error {
	f.functionConfig = A
	return nil
}

func OptionalReturnType(t ReturnType) func(f *Thing) error {
	return func(f *Thing) error {
		f.returnType = t
		return nil
	}
}

func main() {
	f1, err := NewThing()
	fmt.Println(f1, err)

	f2, err := NewThing(OptionalReturnType("10"))
	fmt.Println(f2, err)

	f3, err := NewThing(OptionalReturnType("20"), OptionalFn)
	fmt.Println(f3, err)

	f4, err := NewThing(OptionalFn, OptionalReturnType("30"))
	fmt.Println(f4, err)

}


```

<!--  Enter text below, if you want -->
