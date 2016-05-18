---
layout: post
title:  "More TensorFlow - GPU Checkout "
date:   2016-05-16 20:09:19 -0400 
categories: tensorflow gpu aws
---

You use the **[nvidia-smi](http://developer.download.nvidia.com/compute/cuda/6_0/rel/gdk/nvidia-smi.331.38.pdf)** command to look at GPU memory usage.
I'm doing some tests with TensorFlow.

{% highlight bash %}

$ nvidia-smi

Tue May 17 00:01:46 2016
+------------------------------------------------------+
| NVIDIA-SMI 352.93     Driver Version: 352.93         |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GRID K520           Off  | 0000:00:03.0     Off |                  N/A |
| N/A   38C    P0    68W / 125W |   4095MiB /  4095MiB |     98%      Default |
+-------------------------------+----------------------+----------------------+
|   1  GRID K520           Off  | 0000:00:04.0     Off |                  N/A |
| N/A   22C    P8    17W / 125W |     90MiB /  4095MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   2  GRID K520           Off  | 0000:00:05.0     Off |                  N/A |
| N/A   27C    P8    17W / 125W |     90MiB /  4095MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   3  GRID K520           Off  | 0000:00:06.0     Off |                  N/A |
| N/A   23C    P8    17W / 125W |     90MiB /  4095MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID  Type  Process name                               Usage      |
|=============================================================================|
|    0      2198    C   /home/ubuntu/anaconda3/bin/python             3710MiB |
|    0      2457    C   /home/ubuntu/anaconda3/bin/python              368MiB |
|    1      2198    C   /home/ubuntu/anaconda3/bin/python               37MiB |
|    1      2457    C   /home/ubuntu/anaconda3/bin/python               37MiB |
|    2      2198    C   /home/ubuntu/anaconda3/bin/python               37MiB |
|    2      2457    C   /home/ubuntu/anaconda3/bin/python               37MiB |
|    3      2198    C   /home/ubuntu/anaconda3/bin/python               37MiB |
|    3      2457    C   /home/ubuntu/anaconda3/bin/python               37MiB |
+-----------------------------------------------------------------------------+




{% endhighlight %}


