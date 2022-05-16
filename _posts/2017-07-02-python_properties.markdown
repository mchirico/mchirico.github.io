---
layout: post
title: "Python Stuff... not finished "
date: 2017-07-02 16:00:00 -0400
comments: false
categories: python
---

## Python @properties

Note below how **x** changed from a **method** to a **property**.

```python

class A:
    def __init__(self):
        self._x = 0

    def x(self):
        return self._x


A().x() # <-- This is a method

```

Above it's defined as a method... now make it a property.

```python

class A:
    def __init__(self):
        self._x = 0

    @property
    def x(self):
        return self._x


A().x # <-- Now properity

```

### Now the complete call with setter and deleter

Note the getter gets everytime when making an assignment.

```python
class A:
    def __init__(self):
        self._x = 0

    @property
    def x(self):
        print("In getter!")
        print("x = {}".format(self._x))
        return self._x

    @x.setter
    def x(self, value):
        print("old value:{}  new value:{}".format(self.x, value))
    	self._x = value

    @x.deleter
    def x(self):
       	del self._x


a = A()
# We call the getter first
a.x = 3

"""
Here's the output:

  In getter
  x = 0
  old value:0  new value:3


"""


```

# Python Exceptions

```python

try:

    # raise ValueError('A very specific bad thing happened')
    raise Exception('A very specific bad thing happened', 'b')

except Exception as e:

    print(len(e.args))  # 2

    if e.args == ('A very specific bad thing happened', 'b'):
        print('Success')  # this will match

    if str(e) == "('A very specific bad thing happened', 'b')":
        print('yes this will print')

    print('e:{}'.format(str(e)))
    # e:('A very specific bad thing happened', 'b')



```

# Python debugging

```python
import pdb; pdb.set_trace()
```

Some commone commands:

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!--  Enter text below, if you want -->
