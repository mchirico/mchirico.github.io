---
layout: post
title: "Django: Summary of  Database Calls "
date: 2017-05-28 13:43:31 -0400
comments: false
categories: python
---

<h2>Model</h2>

<p>Let's begin with the model, or the database setup.
Assume you have a very simple model setup as follows:
</p>

```python
from django.db import models

# Create your models here.
from django.db import models

class B(models.Model):
    b = models.CharField(max_length=10)
    c = models.CharField(null=True,max_length=10)

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

```python
# Immediate create
result=B.objects.create(b="Joe")
# or
B(b='Joe').save()

# What's the difference from the two above?
#   ans)  Note the first method gets the result
vars(result)
{'_state': <django.db.models.base.ModelState at 0x105cf2128>,
 'b': 'Joe',
  'c': None,
   'id': 14}



# You can prove it was created
B(b='stuff').save()
B.objects.filter(b='stuff').count()
# returns 1


b=B.objects.create(b="Joe")
"""
  Now b gives you access to the following:

   b.id
     6

   b.b
    'Joe'
"""

```

<h2>Update</h2>

It's probably easier to do this all in one shot...

```python
r = B.objects.filter(b='Joe').update(b='Sam')
# r will now be equal the number of values updated
# r will equal 1,2 or whatever...

```

Or, you can do the following

```python
r = B(b='stuff')
r.c = 'stuff2'
r.save()

# or
# If the value is not found, it returns 0
r=B.objects.filter(b='aslk').update(c='mo')
# Here r== 0, because the value was not found.


r = B.objects.filter(b='stuff')
if r.count() > 0:
   print(r[0].c)


```

<a href='https://docs.djangoproject.com/en/1.11/ref/models/querysets/#django.db.models.query.QuerySet.exists'>
<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-05-2813.42.46.png" width="740">
</a>

```python
t = TemperatureData.objects.get(id=1)
t.value = 999
t.save(['value'])

```

https://stackoverflow.com/questions/3681627/how-to-update-fields-in-a-model-without-creating-a-new-record-in-django

<br>
<h3>Some References</h3>
<p>
<a href='https://stackoverflow.com/questions/6190773/django-get-the-first-object-from-a-filter-query-or-create'>django-get-the-first-object-from-a-filter-query-or-create</a>

<a href='

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!--  Enter text below, if you want -->
