---
layout: post
title:  "Parsing Dates in Go "
date:   2016-12-21 20:12:07 -0400 
categories: go golang
---

Here's the [playground](https://play.golang.org/p/vg2Oan6Dtl)

Sometimes you have the local time in a string, and you need
to convert it to other time zones.  For example, I had the string
"2016-12-20 11:57:34" in my local timezone "America/New_York" and
I want to convert it to "America/Los_Angeles" and "UTC".

{% highlight go %}
time.ParseInLocation("2006-01-02 15:04:05", s, ny)
{% endhighlight %}

The above command will handle this.  The full program is shown
below. It's probably easier to just run this from the playground.


{% highlight go %}

package main

import (
	"fmt"
	"time"
)

func main() {

	ny, _ := time.LoadLocation("America/New_York")
	la, _ := time.LoadLocation("America/Los_Angeles")
	utc, _ := time.LoadLocation("UTC")

	s := "2016-12-20 11:57:34"
	t, _ := time.ParseInLocation("2006-01-02 15:04:05", s, ny)

	fmt.Println("NY Time", t)
	fmt.Println("UTC", t.In(utc))
	fmt.Println("LA", t.In(la))

}


{% endhighlight %}


