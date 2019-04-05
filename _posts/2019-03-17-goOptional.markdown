---
layout: post
title:  "Go Default Values "
date:   2019-03-17 09:04:44 -0400 
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

Here's another example

[playground](https://play.golang.org/p/mCIG5RME1C_O)
```go
package main

import "fmt"

func A(a ReturnType) (ReturnType, error) {
	return a + " done", nil
}

type Query struct {
	functionConfig FunctionConfig
	returnType     ReturnType
}

func NewQuery(options ...func(*Query) error) (ReturnType, error) {
	f := &Query{}

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

func OptionalFn(f *Query) error {
	f.functionConfig = A
	return nil
}

func OptionalReturnType(t ReturnType) func(f *Query) error {
	return func(f *Query) error {
		f.returnType = t
		return nil
	}
}

type ReturnType string
type FunctionConfig func(ReturnType) (ReturnType, error)

func main() {
	f1, err := NewQuery()
	fmt.Println(f1, err)

	f2, err := NewQuery(OptionalReturnType("10"))
	fmt.Println(f2, err)

	f3, err := NewQuery(OptionalReturnType("20"), OptionalFn)
	fmt.Println(f3, err)

	f4, err := NewQuery(OptionalFn, OptionalReturnType("30"))
	fmt.Println(f4, err)

}



```



<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<!--  Enter text below, if you want -->


<div class="fb-comments"  data-numposts="5"></div>






