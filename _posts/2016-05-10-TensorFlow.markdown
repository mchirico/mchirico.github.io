---
layout: post
title:  "TensorFlow GPU on Amazon "
date:   2016-05-10 11:17:24 -0400
categories: tensorflow gpu aws
---
These are good instructions [here](http://ramhiser.com/2016/01/05/installing-tensorflow-on-an-aws-ec2-instance-with-gpu-support/)
for getting CUDA libraries and updates.

You'll want to modify the docker_run_gpu.sh to allow access to the necessary 
ports.

{% highlight bash %}
docker run -p 8888:8888 -p 6006:6006     -it $CUDA_SO $DEVICES "$@"
{% endhighlight %}


Once it's modified, you'll want to pull down the latest tensorflow gpu version.

{% highlight bash %}

./docker_run_gpu.sh gcr.io/tensorflow/tensorflow:latest-gpu

{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/



