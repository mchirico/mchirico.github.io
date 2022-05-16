---
layout: post
title: "New P2 Instance: Amazon EC2 "
date: 2016-12-31 17:08:20 -0400
comments: false
categories: python
---

Apparently Amazon has a [Deep Learning AMI](https://aws.amazon.com/marketplace/pp/B01M0AXXQB) which
includes MXNet, Caffe, Tensorflow, Theano, and Torch.

Here's a getting started with mxnet

```bash
# This seems to have the latest image...
docker run -it kaixhin/mxnet
```



Cool example..

```python
import mxnet as mx
a = mx.sym.Variable('a')
b = mx.sym.Variable('b')
c = a + b
assert a.name == "a", "Symbol name incorrect."
assert b.name == "b", "Symbol name incorrect."
(a, b, c)


# elemental wise times
d = a * b
# matrix multiplication
e = mx.sym.dot(a, b)
# reshape
f = mx.sym.Reshape(a, shape=(2,6))
# broadcast
g = mx.sym.broadcast_to(f, shape=(3,2,6))

# Output may vary
net = mx.sym.Variable('data')
net = mx.sym.FullyConnected(data=net, name='fc1', num_hidden=128)
net = mx.sym.Activation(data=net, name='relu1', act_type="relu")
net = mx.sym.FullyConnected(data=net, name='fc2', num_hidden=10)
net = mx.sym.SoftmaxOutput(data=net, name='out')
mx.viz.plot_network(net, shape={'data':(100,200)})


```

![img](https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2016-12-3118.23.01.png)

<!--  Enter text below, if you want -->
