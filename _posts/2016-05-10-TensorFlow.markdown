---
layout: post
title:  "TensorFlow GPU on Amazon "
date:   2016-05-10 11:17:24 -0400
categories: tensorflow gpu aws
---
These are good instructions [here](http://ramhiser.com/2016/01/05/installing-tensorflow-on-an-aws-ec2-instance-with-gpu-support/)
for getting CUDA libraries and updates.  Here's a summary of what I did.

## Ubuntu Server 14.04 LTS AMI (g2.2xlarge)

This is a summary of the step that I took.

{% highlight bash %}
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y build-essential git python-pip libfreetype6-dev libxft-dev libncurses-dev libopenblas-dev gfortran python-matplotlib libblas-dev liblapack-dev libatlas-base-dev python-dev python-pydot linux-headers-generic linux-image-extra-virtual unzip python-numpy swig python-pandas python-sklearn unzip wget pkg-config zip g++ zlib1g-dev
sudo pip install -U pip
{% endhighlight %}

### Cuda Libraries

You can go to  [cuda-downloads](https://developer.nvidia.com/cuda-downloads).  Or,
if you're doing this for ubuntu, you can just follow the
steps below.


{% highlight bash %}
wget http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1504/x86_64/cuda-repo-ubuntu1504_7.5-18_amd64.deb
sudo dpkg -i cuda-repo-ubuntu1504_7.5-18_amd64.deb
sudo apt-get update
sudo apt-get install cuda
{% endhighlight %}

You have to restart.





You'll want to modify the docker_run_gpu.sh to allow access to the necessary 
ports.

{% highlight bash %}
docker run -p 8888:8888 -p 6006:6006     -it $CUDA_SO $DEVICES "$@"
{% endhighlight %}


Once it's modified, you'll want to pull down the latest tensorflow gpu version.

{% highlight bash %}

./docker_run_gpu.sh gcr.io/tensorflow/tensorflow:latest-gpu

{% endhighlight %}

Check out the [Tensorflow docs][install-docs] for more info on how to grab the docker image.

[install-docs]: https://www.tensorflow.org/versions/r0.8/get_started/os_setup.html#docker-installation
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[cuda] https://developer.nvidia.com/cuda-downloads


