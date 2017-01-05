---
layout: post
title:  "Neural Networks "
date:   2017-01-03 14:34:15 -0400 
comments: false
categories: python
---

Good Reference

[batch norm](https://youtu.be/qvRL74L81lg?t=223)




[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0420.23.34.png">](https://youtu.be/qnoLMkosHuE?t=502)


[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0413.39.53.png">](http://course.fast.ai/lessons/lesson1.html)





How do you know which parameters to choose for Keras (TensorFlow)?

This  [Example](https://www.kaggle.com/apapiu/digit-recognizer/conv-net-on-only-2-features) kernel, 
shown below, has some interesting properties.

``` python

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





## RESOURCES

[deeplearning.net](http://deeplearning.net/)


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






