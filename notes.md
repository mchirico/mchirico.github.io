---
layout: page
title:  "Notes"
date:   2017-01-03 14:34:15 -0400 
comments: false
categories: python references
permalink: /Notes/
---

## Swift Debugging

[Debugging in XCode](https://vimeo.com/264206749)


## Excellent Video on TDD

[Ian Cooper - TDD, Where Did It All Go Wrong](https://www.youtube.com/watch?time_continue=1594&v=EZ05e7EMOLM)



## Building a very small image:


Dockerfile

```bash
FROM       scratch

MAINTAINER Mike Chirico (chico) <mchirico@gmail.com>
ADD        my my

ENTRYPOINT ["/my"]
```

My go file... `my.go`

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Printf("This is a test\n")
}
```




Now, on mac you need to build for Linux

```bash
#!/bin/bash
env GOOS=linux GOARCH=arm go build  my.go
docker build --tag hello .
docker run --rm hello
```







## Go Environment


I need better instructions

```bash

cd
mkdir reflect
cd reflect
wget https://gist.githubusercontent.com/mchirico/2f53d166647d3ce52b52d275f1f58129/raw/97511ad4f49f021639c142d91b1968bfa10daaea/setpath
. setpath
go install github.com/mchirico/reflect/...
```





This is so cool...

```go
// Ref: https://play.golang.org/p/oSvEk8QzTTL

package main

import (
	"fmt"
	"reflect"
)

type Add func(int64, int64) int64

func main() {
	t := reflect.TypeOf(Add(nil))
	mul := reflect.MakeFunc(t, func(args []reflect.Value) []reflect.Value {
		a := args[0].Int()
		b := args[1].Int()
		return []reflect.Value{reflect.ValueOf(a + b)}
	})
	fn, ok := mul.Interface().(Add)
	if !ok {
		return
	}
	fmt.Println(fn(2, 3))
}

```




```go
// Playground: https://play.golang.org/p/Gw0EzVKUZZn

package main

import (
	"fmt"
	"reflect"
)

type A struct{}

func (A) Fun0() { fmt.Println("fun0...called") }
func (A) Fun1() { fmt.Println("fun1...called") }

func Caller(i interface{}, f []string) {

	v := reflect.ValueOf(i)
	for _, val := range f {

		m := v.MethodByName(val)
		if m.Kind() != reflect.Func {
			fmt.Printf("Not Found: %s\n", val)
		} else {
			m.Call(nil)
		}
	}

}

func main() {

	s := []string{}
	s = append(s, "Fun0", "No Fun", "Fun1")
	Caller(A{}, s)
}

```



[reflect notes](https://github.com/a8m/reflect-examples)

```bash
brew tap johanhaleby/kubetail && brew install kubetail
```


This is going to start out a being a little raw, but I'm
going to start keeping my references here...

### SOLID Design Principles Explained

[SOLID](https://stackify.com/dependency-inversion-principle/)



### Go interface{}

The interface{} will accept any type. But once a function accepts the type
you'll need to deconstruct it.

[playground](https://play.golang.org/p/Xco-hh7xfl7)
```go
package main

import (
	"fmt"
	"time"
)

func timeMap(y interface{}) {
	z, ok := y.(map[string]interface{})
	if ok {
		z["updated_at"] = time.Now()
	} else {
		fmt.Printf("No...%T\n", y)
	}

	zz, ok := y.(map[string]int)
	if ok {
		fmt.Println("\nstring:", zz)
	}

}

func main() {

	k := map[string]int{}
	k["su"] = 3
	fmt.Printf("k:%v\n", k)

	foo := map[string]interface{}{
		"Matt": 42,
	}
	timeMap(foo)
	fmt.Println(foo)

	timeMap(k)
	timeMap("stuff")
}


```


[Go Bootcamp](http://www.golangbootcamp.com/book/intro#cid1)




[Learning Rates](http://sebastianruder.com/optimizing-gradient-descent/)



[batch norm](https://youtu.be/qvRL74L81lg?t=223)

[<img src="https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-0512.47.15.png">](https://keras.io/getting-started/faq/)




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

``` python

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



# Fast AI Course II

[here](http://www.fast.ai/2017/01/17/curriculum2/)





# Django

Below are some quick notes on Django


``` bash

mkdir ~/myproject2
cd myproject2
virtualenv -p python3 myprojectenv2
source myprojectenv2/bin/activate
pip install numpy
pip install pandas
pip install flask


```


Below is an example ```/etc/init.d/uwsgi``` script.

``` bash
#!/bin/sh
description "uWSGI server"

start on runlevel [2345]
stop  on runlevel [!2345]
respawn
exec /home/webchirico/bin/bin/uwsgi -c /webproject/myproject/myproject.ini

```


``` bash
[uwsgi]

module = wsgi

uid = www-data
gid = www-data
chdir = /webproject/myproject/
virtualenv = myprojectenv
wsgi-file = wsgi.py

master = true
processes = 5
enable-threads = true
thunder-lock = true

# For testing... user /spark39a
# http = 127.0.0.1:3031

socket = myproject.sock
chmod-socket = 666
vacuum = true

die-on-term = true

logto = /webproject/var/log/error.log
daemonize = /webproject/var/log/myproject.log


```

### References

[uwsgi-docs.readthedocs](http://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html)

[stackoverflow](http://stackoverflow.com/a/17138212/904032)




Steps for aide

``` bash
aideinit -c /etc/aide/aide.conf -y -f

aide -c /etc/aide/aide.conf --check

aide -c /etc/aide/aide.conf --update

gsutil cp -r /var/lib/aide/aide.db gs://mchirico-aide/aipiggybot/

gsutil cp -r /etc/aide/aide.conf gs://mchirico-aide/aipiggybot/

```

Quick script

``` bash
#!/bin/bash
export DATE=$(date "+%Y-%m-%d.%H:%M:%S")
aide -c /etc/aide/aide.conf -u > "aipiggybot.${DATE}"
gsutil cp "aipiggybot.${DATE}" gs://mchirico-aide/aipiggybot/
gsutil cp /etc/aide/aide.conf gs://mchirico-aide/aipiggybot/"aide.conf.${DATE}"
gsutil cp -r /var/lib/aide/aide.db gs://mchirico-aide/aipiggybot/
gsutil cp ./myaide.sh gs://mchirico-aide/aipiggybot/
gsutil ls gs://mchirico-aide/aipiggybot/
# We'll update
aideinit -c /etc/aide/aide.conf -y -f >/dev/null
cat "aipiggybot.${DATE}"
rm "aipiggybot.${DATE}"


  
```


Cool column matric idea.


<a href="https://youtu.be/ZK3O402wf1c?t=554"><img src='https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-01-2522.26.46.png' width="400"></a>

<br><br><br>


Another good list of lectures....

<a href='http://projects.iq.harvard.edu/stat110/youtube'>http://projects.iq.harvard.edu/stat110/youtube</a>



Interesting blog on Neural Networks...

<a href='http://r2rt.com/recurrent-neural-networks-in-tensorflow-i.html'>
<img src='https://storage.googleapis.com/montco-stats/imagesUploaded/Screenshot2017-02-0320.38.28.png' width='480'></a>









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






