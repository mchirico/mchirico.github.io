---
layout: post
title:  "Django: Summary of  Database Calls "
date:   2017-05-28 13:43:31 -0400 
comments: false
categories: python
---

<h2>Model</h2>

<p>Let's begin with the model, or the database setup.
Assume you have a very simple model setup as follows:
</p>


``` python
from django.db import models

# Create your models here.
from django.db import models

class B(models.Model):
    b = models.CharField(max_length=10)

```

<h2>Interactive</h2>

By the way, you can interactively work with these database commands...

```python

python manage.py shell
import django
django.setup()
from polls.models import B

```


<h2>Create</h2>

``` python
# Immediate create
result=B.objects.create(b="Joe")
# or
B(b='Joe').save()

# What's the difference from the two above?
#   ans)  Note the first method gets the result
vars(result)
{'_state': <django.db.models.base.ModelState object at 0x108771f28>, 'id': 12, 'b': 'Joe'}


# You can prove it was created
B(b='stuff').save()
B.objects.filter(b='stuff').count()
# returns 1



"""
  Now b gives you access to the following:

   b.id
     6

   b.b
    'Joe'
"""



```

<h2>Update</h2>




<a href='https://docs.djangoproject.com/en/1.11/ref/models/querysets/#django.db.models.query.QuerySet.exists'>
<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-05-2813.42.46.png" width="740">
</a>





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






