---
layout: post
title: "Panda Notes "
date: 2017-01-09 21:45:38 -0400
comments: false
categories: python
---

I need to start keeping notes...here's an example
of how to dstack.

```python

import pandas as pd
c=np.dstack((['a','b'],[2,3]))
d=pd.DataFrame(c[0])
d.head()


```

<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0921.46.53.png" width="g00">

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!--  Enter text below, if you want -->
