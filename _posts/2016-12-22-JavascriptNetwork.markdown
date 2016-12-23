---
layout: post
title:  "Custom Javascript In Jekyll Blogs"
date:   2016-12-22 16:32:39 -0400
comments: true
jsarr:
- graphs/dag_default.js
categories: Javascript
---





Not that this graph has anything meaningful, but it was easy to create using [visjs.org](http://visjs.org/). Follow
along and I'll show you have to create this on you Jekyll Blogs.  You can also view a good
[tutorial](http://blog.emmatosch.com/2016/03/09/using-custom-javascript-in-jekyll-blogs.html)
by Emma Tosch.


<style type="text/css">
      #mynetwork {
      width: 600px;
      height: 400px;
      border: 1px solid lightgray;
      }
</style>


<div id="mynetwork"></div>
<br>
<br>

## Step to Add Javascript on Github Pages


#### Create a subdirectory
{% highlight bash %}
mkdir -p _includes/graphs
{% endhighlight %}


Create the following
[```_includes/graphs/dag_default.js```](https://github.com/mchirico/mchirico.github.io/blob/master/_includes/graphs/dag_default.js),
but don't include any ```script``` tags.


<script src="https://gist.github.com/mchirico/423ee989d06f4c3f84f45114c08f9cd2.js"></script>



#### Edit ```_includes/head.html```

You can view the full file [_includes/head.html](https://github.com/mchirico/mchirico.github.io/blob/master/_includes/head.html) but
below are my changes.


<script src="https://gist.github.com/mchirico/757fd223de6e808cdeb01c12b2b4676a.js"></script>



#### Modify ```_layout/post.html```

Note this needs to go near the bottom of the [_layout/post.html](https://github.com/mchirico/mchirico.github.io/blob/master/_layouts/post.html)


<script src="https://gist.github.com/mchirico/783dd57dd7525cd0ac9c0626bc091805.js"></script>



#### Creating Pages

Here's a sample header on my [markdown page](https://raw.githubusercontent.com/mchirico/mchirico.github.io/master/_posts/2016-12-22-JavascriptNetwork.markdown)


{% highlight html %}
---
layout: post
title:  "Adding Javascript "
date:   2016-12-22 16:32:39 -0400
jsarr:
- graphs/dag_default.js
categories: Javascript
---

{% endhighlight %}



#### Reference

If you get stuck, checkout the source [repository](https://github.com/mchirico/mchirico.github.io)

