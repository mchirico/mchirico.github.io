---
layout: post
title:  "Go Type Alias "
date:   2018-08-28 19:57:23 -0400 
comments: true
categories: go
---

Take a look at `type intList = []int` in the code below. That's an
example of a Type Alias.  Specifically, it's a Type Alias for `[]int`.

Okay, so now take a look at `type Name1 []int`, which is a named type ...
that's different.


[Playground](https://play.golang.org/p/bZ4nTh_RTsn)
<pre>
<code class="language-go">

package main

import (
	"fmt"
	"reflect"
)

type intList = []int

// Here, forced to same type
func coerce(a intList, b intList) bool {
	if reflect.DeepEqual(b, a) {
		fmt.Printf("equal\n")
		return true
	}
	fmt.Printf("Not equal\n")
	return false
}

func main() {

	type Name1 []int

	a := intList{}
	a = append(a, 3)

	b := []int{}
	b = append(b, 3)

	f := Name1{}
	f = append(f, 3)

	coerce(f, b)
	// Above is equal

	// Below we expect this to be equal, and it is.
	if reflect.DeepEqual(b, a) {
		fmt.Printf("yes..equal\n")
	} else {
		fmt.Printf("not equal..\n")
	}

	// This is not equal
	if reflect.DeepEqual(f, a) {
		fmt.Printf("Never get here ...\n")
	} else {
		fmt.Printf("not equal..\n")
	}

}

</code>
</pre>

Output:

<pre>
equal
yes..equal
not equal..
</pre>



References:

[Google Groups](https://groups.google.com/forum/#!topic/golang-dev/LvvXAgJvFV0)

[Abstract](https://github.com/golang/proposal/blob/master/design/18130-type-alias.md)





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






