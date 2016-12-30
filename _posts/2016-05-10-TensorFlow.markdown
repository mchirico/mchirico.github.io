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


### CuDNN

You need to make sure all the libraries get installed. This
includes **CuDNN**  [https://developer.nvidia.com/cudnn](https://developer.nvidia.com/cudnn)

I took a chance, and install v5. Note, v4 is recummended; however, I haven't had
and problems with v5.

{% highlight bash %}
tar -xzf cudnn-7.5-linux-x64-v5.0-rc.tgz
cd cuda
sudo cp ./lib64/* /usr/local/cuda/lib64/
sudo cp ./include/* /usr/local/include/
{% endhighlight %}


### Environment variables

You should add the last two lines to your **.bashrc**

{% highlight bash %}
tail -n3 .bashrc
export PATH="/home/ubuntu/anaconda3/bin:$PATH"
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/cuda/lib64"
export CUDA_HOME=/usr/local/cuda
{% endhighlight %}


## Anaconda

I also installed Anaconda [Python 3.5 64bit](http://repo.continuum.io/archive/Anaconda3-4.0.0-Linux-x86_64.sh)
{% highlight bash %}
bash ./Anaconda3-4.0.0-Linux-x86_64.sh

{% endhighlight %}

After it's installed, update anaconda

{% highlight bash %}

yes|conda update conda
yes|conda update anaconda

{% endhighlight %}




## Tensorflow for Anaconda

You have to rename the **tensorflow-0.x\*-cp34-cp34m\*.whl** file. Note that **cp34** and 
**cp34m** stands for the python version.  If you're running 3.5, you'll need to 
change this. See the steps below..

{% highlight bash %}
# Download and rename the file
wget https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow-0.8.0-cp34-cp34m-linux_x86_64.whl
mv tensorflow-0.8.0-cp34-cp34m-linux_x86_64.whl tensorflow-0.8.0-cp35-cp35m-linux_x86_64.whl
#
pip install --ignore-installed --upgrade tensorflow-0.8.0-cp35-cp35m-linux_x86_64.whl
{% endhighlight %}


### Test 

{% highlight python %}
>>> import tensorflow as tf
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcublas.so locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcudnn.so locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcufft.so locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcuda.so.1 locally
I tensorflow/stream_executor/dso_loader.cc:105] successfully opened CUDA library libcurand.so locally
>>
{% endhighlight %}

## Jupyter 

I also use Jupyter for a non-docker version as well... Here's my
setup file. I have a **/kaggle** directory where my source is
kept.  You'll want to change this to whatever directory you use.


<script src="https://gist.github.com/mchirico/58ef09d601704dd48dfdb4dfe238b43f.js"></script>







### Docker Instructions

Take a look at install docker on [ubuntu.](https://docs.docker.com/engine/installation/linux/ubuntulinux/)

{% highlight bash %}
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
{% endhighlight %}

You have to create `/etc/apt/sources.list.d/docker.list` and add the following
text

/etc/apt/sources.list.d/docker.list

{% highlight bash %}
deb https://apt.dockerproject.org/repo ubuntu-trusty main
{% endhighlight %}

Hence

{% highlight bash %}
cat /etc/apt/sources.list.d/docker.list
# You should see the following:
#   deb https://apt.dockerproject.org/repo ubuntu-trusty main
{% endhighlight %}


Next, you've got to do a lot of updates...

{% highlight bash %}
sudo apt-get update
sudo apt-get purge lxc-docker
apt-cache policy docker-engine
sudo apt-get update
sudo apt-get install linux-image-extra-$(uname -r)
sudo apt-get install linux-image-generic-lts-trusty

# Yeah, you have to reboot
sudo reboot

sudo apt-get install docker-engine
sudo service docker start

# Test it
sudo docker run hello-world
{% endhighlight %}





* * *

## TensorFlow 



You'll want to modify the docker_run_gpu.sh to allow access to the necessary 
ports. Or, you can just download the  [fixed docker_run_gpu.sh](https://gist.githubusercontent.com/mchirico/47f2067075e6b8adacbcdb821d2d7f07/raw/f0d22d48ed35f3bafbbaf29cdeaeb52e82e882c3/docker_run_gpu.sh)

{% highlight bash %}
# These are the changes I made to docker_run_gpu.sh
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
[cuda]: https://developer.nvidia.com/cuda-downloads


