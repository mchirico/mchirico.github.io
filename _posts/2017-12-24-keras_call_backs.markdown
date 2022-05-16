---
layout: post
title: "Keras Callbacks "
date: 2017-12-24 13:22:26 -0400
comments: false
categories: Keras
---

I'll look at using callbacks using LSTM networks...

<a href="https://mchirico.github.io/keras/2017/12/24/keras_call_backs.html">
<img src="https://storage.googleapis.com/montco-stats/Peephole_Long_Short-Term_Memory.svg" width="400"></a>

### Environment Setup

Python 3.5 is needed for TensorFlow 1.4+. A link to the
requirements.txt can be found <a href="https://raw.githubusercontent.com/mchirico/mchirico.github.io/master/p/requirements.txt">here</a>

```bash

brew install pyenv
pyenv install 3.5.4
cd
virtualenv -p /Users/mchirico/.pyenv/versions/3.5.4/bin/python3.5 pbug
. pbug/bin/activate

pip install -r requirements.txt


```

```python
import keras

class My_Callback(keras.callbacks.Callback):
    def on_train_begin(self, logs={}):
        return

    def on_train_end(self, logs={}):
        return

    def on_epoch_begin(self, logs={}):
        return

    def on_epoch_end(self, epoch, logs={}):
        return

    def on_batch_begin(self, batch, logs={}):
        return

    def on_batch_end(self, batch, logs={}):
        self.losses.append(logs.get('loss'))
        return

```

## References

1. [Blog with ideas](https://keunwoochoi.wordpress.com/2016/07/16/keras-callbacks/)

2. [Video -- pull out links](https://youtu.be/-lx2shfA-5s?t=406)

3. [Deep Learning with Keras](https://github.com/PacktPublishing/Deep-Learning-with-Keras)

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!--  Enter text below, if you want -->
