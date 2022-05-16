---
layout: post
title: "Site Update: Facebook comments, Code Formatting "
date: 2016-12-30 13:07:50 -0400
comments: false
categories: Facebook comments
---

I started making updates to my Jekyll github page. What I really
only wanted to do was update the code formatting. Agreed. Jekyll
offers a lot of options...

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

Hmmm...okay, I'm big on communication. Maybe Facebook has additional
options that could make it better? Who knows... Below is an example
that allows for threaded conversations.

So if \_sass/\_base.scss

```css
code {
  font-size: 13px;
  border: 1px solid $grey-color-light;
  border-radius: 3px;
  background-color: #ffff;
}
```

```html
<a hfre="#">Hello world</a> <a hfre="#">Hello world</a>
```

```R
library(tidyverse)
library(plotly)
library(rpart)
library(rpart.plot)
library(viridis)
library(Metrics)
library(glmnet)
library(formattable)

```
