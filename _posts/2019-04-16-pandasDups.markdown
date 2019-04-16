---
layout: post
title:  "Pandas Duplicates "
date:   2019-04-16 16:20:59 -0400 
comments: false
categories: python pandas
---

Careful how you remove duplicate in pandas, when  indexes are involved.

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

df = pd.DataFrame(sales1)
df=df.set_index('idx')
df2 = pd.DataFrame(sales2)
df2=df2.set_index('idx')
d=pd.concat([df,df2],ignore_index=False)
d=d[~d.index.duplicated(keep='last')]
d


```
<img src="https://github.com/mchirico/mchirico.github.io/raw/master/p/images/pandasDups0.png" alt="drawing" width="270"/>
<br>
<br>
<br>


# Duplicate Indexes (here we want to keep duplicate rows)

Here we also get the correct answer.

```python
sales1 = [{'Quarter':1,'sales': 50},
         {'Quarter':2,'sales': 50},
         {'Quarter':3,'sales': 46 }]

sales2 = [{'Quarter':3,'sales': 50},
         {'Quarter':4,'sales': 52},
         {'Quarter':5,'sales': 46 }]

df = pd.DataFrame(sales1)
df=df.set_index('Quarter')
df2 = pd.DataFrame(sales2)
df2=df2.set_index('Quarter')
d=pd.concat([df,df2],ignore_index=False)
d=d[~d.index.duplicated(keep='last')]
d

```

<img src="https://github.com/mchirico/mchirico.github.io/raw/master/p/images/pandasDups1.png" alt="drawing" width="170"/>
<br>
<br>
<br>


# Drop Duplicates on Rows

Note, this may not be what you want. Notice we list Quarters 2 and 3, because it had
the duplicate value 50, which just happened to be the correct sales. It's the same query as above; but, we're dropping duplicates.

```python
sales1 = [{'Quarter':1,'sales': 50},
         {'Quarter':2,'sales': 50},
         {'Quarter':3,'sales': 46 }]

sales2 = [{'Quarter':3,'sales': 50},
         {'Quarter':4,'sales': 52},
         {'Quarter':5,'sales': 46 }]

df = pd.DataFrame(sales1)
df=df.set_index('Quarter')
df2 = pd.DataFrame(sales2)
df2=df2.set_index('Quarter')
d=pd.concat([df,df2],ignore_index=False)
d=d[~d.index.duplicated(keep='last')]
d.drop_duplicates()

```
<img src="https://github.com/mchirico/mchirico.github.io/raw/master/p/images/pandasDups2.png" alt="drawing" width="170"/>

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






