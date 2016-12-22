---
layout: post
title:  "Custom Javascript In Jekyll Blogs"
date:   2016-12-22 16:32:39 -0400
comments: true
jsarr:
- graphs/dag_default.js
categories: Javascript
---

You can get the instruction on how to do this from
the following [link](http://blog.emmatosch.com/2016/03/09/using-custom-javascript-in-jekyll-blogs.html).
It's pretty cool being able to add your own javascript.

Not that this graph has anything meaningful, but it was easy to create. 


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


Create the following file: ```_includes/graphs/dag_default.js```

{% highlight javascript %}
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Check Kaggle'},
    {id: 2, label: 'Submit Entry'},
    {id: 3, label: 'Think About Problem'},
    {id: 4, label: 'Create/Visit  Kernel'},
    {id: 5, label: 'View Results'},
    {id: 6, label: 'Research'}      
      
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 3, to: 1},
      {from: 5, to: 4},
      {from: 1, to: 6},
      {from: 5, to: 1},
      {from: 6, to: 3},
      {from: 3, to: 6},                  
      
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);

{% endhighlight %}

#### Edit ```includes/head.html```



{% highlight html %}
  <!--  Chirico: Add Custom Headers    -->
  {% if page.jsarr %}
    <script src="https://storage.googleapis.com/montco-stats/javascript/vis-4.17.0/dist/vis.js" type="text/javascript"></script>
    <link href="https://storage.googleapis.com/montco-stats/javascript/vis-4.17.0/dist/vis-network.min.css" rel="stylesheet" type="text/css" />
  {% endif %}
  <!--  Chirico: Done custom          -->

{% endhighlight %}


#### Modify ```_layout/post.html```

Note this need to go at the end of the page.

{% highlight html %}
    <!-- My Stuff -->
    {% for js in page.jsarr %}
    

    <script type="text/javascript">
      {% include {{ js }} %}
    </script>
    
    {% endfor %}
{% endhighlight %}



#### Creating Pages

Here's a sample header on my page.


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

