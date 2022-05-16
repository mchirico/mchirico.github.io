---
layout: post
title: "Neural Networks "
date: 2017-01-03 14:34:15 -0400
comments: false
categories: python references
---

I start keeping my references here...

[batch norm](https://youtu.be/qvRL74L81lg?t=223)

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0512.47.15.png">](https://keras.io/getting-started/faq/)

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0420.23.34.png">](https://youtu.be/qnoLMkosHuE?t=502)

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0413.39.53.png">](http://course.fast.ai/lessons/lesson1.html)

How do you know which parameters to choose for Keras (TensorFlow)?

This [Example](https://www.kaggle.com/apapiu/digit-recognizer/conv-net-on-only-2-features) kernel,
shown below, has some interesting properties.

```python

#getting the 2D output:
output = model.get_layer("dense_3").output
extr = Model(model.input, output)

```

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0319.00.42.png">](https://www.kaggle.com/apapiu/digit-recognizer/conv-net-on-only-2-features)

<br><br>
The following article is worth a look

<br><br>

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0319.07.26.png">](https://dash.harvard.edu/bitstream/handle/1/11708816/snoek-bayesopt-nips-2012.pdf?sequence=1)



[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0314.49.44.png">](http://jmlr.org/papers/volume13/bergstra12a/bergstra12a.pdf)

Here's another resource

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0315.37.12.png">](https://deeplearning4j.org/quickstart)

<br>
<br>
<br>

Don't ignore the power of Excel

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0512.01.14.png">](https://1drv.ms/x/s!AkYmehBMBDMdgR1kLoXkcmxOkzfK)

<br>
Good Read...

[http://www.scipy-lectures.org/](http://www.scipy-lectures.org/)

This is a good intro to python, for scientific computing:

[cs231n.github.io/python-numpy-tutorial/](http://cs231n.github.io/python-numpy-tutorial/)

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-1712.41.29.png" width="600">](http://blog.revolutionanalytics.com/data-science/)

## TODO

Look up Resnet

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0722.32.24.png" width="300">](https://youtu.be/Q0z-l2KRYFY?t=2731)

### Python Examples for this book

[<img src="https://camo.githubusercontent.com/85668a748fdcbe583344a261cdc1410bdc29d9f8/687474703a2f2f7777772d6263662e7573632e6564752f2537456761726574682f49534c2f49534c253230436f766572253230322e6a7067" width="100">](https://github.com/JWarmenhoven/ISLR-python)

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0706.20.00.png" width="200">](https://www.kaggle.com/getting-started/27412)

## RESOURCES

### Deeplearning.net

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0722.25.53.png" width="300">](http://deeplearning.net/)

This one seemed to have some cool code examples..

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-1019.28.56.png" width="500">](http://seat.massey.ac.nz/personal/s.r.marsland/MLbook.html)

## Numpy Stuff

```python

# Options...left over plus any 1
x[0]+leftOver
# will it increase the score?

# Come back to this
score = Score(x)

def lowest():
sum=100
tic=''
h=score[1]
for k in h.keys():
if h[k][0] < sum:
sum = h[k][0]
tic=k
ticN=np.fromstring(tic[1:-1], dtype=int, sep=' ')
return (tic,sum,ticN)

leftOver=total - np.sum(x,axis=0)


# What you have to work with
leftOver+lowest()[2]

def buildArrayFromScore():
a=np.array([])
for k in score[1].keys():
if a.size==0:
a=np.fromstring(k[1:-1], dtype=int, sep=' ')
else:
a=np.vstack((a,np.fromstring(k[1:-1], dtype=int, sep=' '))  )
return a


def ifFoundReplace(x,b,c):
if b == c:
return x
idx=np.where(np.all(x==b,axis=1))
if idx[0].size != 0:
x[idx]=np.array(c)
return x

score[1].keys()




```

<!--  Enter text below, if you want -->
