---
layout: post
title:  "Kaggle Facebook "
date:   2016-05-15 18:52:57 -0400 
categories: kaggle facebook
---

Interesting [Facebook](https://www.kaggle.com/c/facebook-v-predicting-check-ins)
competition on Kaggle. You have to predict check ins. I think the key is looking
at time, and dividing it into Day-of-week, Month, etc. 


The following is going to be my standard load.

## Headings

{% highlight python %}
%matplotlib inline

import numpy as np
import fractions
gcd = np.frompyfunc(fractions.gcd, 2, 1)

# First, we'll import pandas, a data processing and CSV file I/O library
import pandas as pd

import warnings # current version of seaborn generates a bunch of warnings that we'll ignore
warnings.filterwarnings("ignore")
import seaborn as sns
import matplotlib.pyplot as plt
sns.set(style="white", color_codes=True)
{% endhighlight %}

## Load and Calculate Essential Fields


{% highlight python %}

FILE='./input/train.csv'
d=pd.read_csv(FILE)

g=d[['place_id','row_id']].groupby(['place_id'])
g=g.count().reset_index()
# Make columns meaningful
g.columns = ['place_id', 'count']
# Merge 
d=pd.merge(d, g, left_on='place_id', right_on='place_id')
# And in Standard deviation
s=d.groupby(['place_id']).std()[['x','y']].reset_index()
# Make columns meaningful
s.columns = ['place_id', 'x_std', 'y_std']
d=pd.merge(d,s, left_on='place_id', right_on='place_id')

s=d.groupby(['place_id']).max()[['x','y','time']].reset_index()
# Make columns meaningful
s.columns = ['place_id', 'x_max', 'y_max','time_max']
d=pd.merge(d,s, left_on='place_id', right_on='place_id')
s=d.groupby(['place_id']).min()[['x','y','time']].reset_index()
# Make columns meaningful
s.columns = ['place_id', 'x_min', 'y_min','time_min']
d=pd.merge(d,s, left_on='place_id', right_on='place_id')
s=d.groupby(['place_id']).median()[['x','y']].reset_index()
# Make columns meaningful
s.columns = ['place_id', 'x_med', 'y_med']
d=pd.merge(d,s, left_on='place_id', right_on='place_id')
d['dow'] = d.time.apply(lambda x:  int (x/1440 % 7)) 

d['month'] = d.time.apply(lambda x:  int (x/43200 % 12))
d['year'] = d.time.apply(lambda x:  int (x/525600 % 2))

g=d[['place_id','month','row_id']].groupby(['place_id','month'])
g=g.count().reset_index()
g.columns = ['place_id', 'month','m_count']
d=pd.merge(d,g, left_on=['place_id','month'], right_on=['place_id','month'])

g=d[['place_id','dow','row_id']].groupby(['place_id','dow'])
g=g.count().reset_index()
g.columns = ['place_id', 'dow','dow_count']
d=pd.merge(d,g, left_on=['place_id','dow'], right_on=['place_id','dow'])

{% endhighlight %}


