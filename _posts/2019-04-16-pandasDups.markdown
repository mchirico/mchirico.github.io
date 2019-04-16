---
layout: post
title:  "Pandas Duplicates "
date:   2019-04-16 16:20:59 -0400 
comments: false
categories: python pandas
---

Careful how you remove duplicate in pandas, when indexes are involved.

Below is probably how you want to do this... hence, you want to eliminate
the duplicate index, talking the last one.


```python
sales1 = [{'idx':1,'account': 'Jones LLC', 'Jan': 150, 'Feb': 200, 'Mar': 140},
         {'idx':2,'account': 'Alpha Co',  'Jan': 200, 'Feb': 210, 'Mar': 215},
         {'idx':3,'account': 'Blue Inc',  'Jan': 50,  'Feb': 90,  'Mar': 95 }]
sales2 = [
         {'idx':2,'account': 'Alpha Co',  'Jan': 200, 'Feb': 210, 'Mar': 215},
         {'idx':3,'account': 'Blue Inc',  'Jan': 51,  'Feb': 90,  'Mar': 95 },
         {'idx':4,'account': 'Green Inc',  'Jan': 50,  'Feb': 90,  'Mar': 95 },
         {'idx':5,'account': 'Yellow Inc',  'Jan': 50,  'Feb': 90,  'Mar': 95 }]

df = pd.DataFrame(sales)
df=df.set_index('idx')
df2 = pd.DataFrame(sales2)
df2=df2.set_index('idx')
d=pd.concat([df,df2],ignore_index=False)
d=d[~d.index.duplicated(keep='last')]
d

```
<img src="drawing.jpg" alt="drawing" width="200"/>

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






