---
layout: post
title:  "k8s view-last-applied "
date:   2020-10-29 14:13:31 -0400 
comments: false
categories: k8s
---

Suppose you want to view the `whatever.yaml` you applied.  Is there
a way to generate this file?

Note: `kubectl describe crd foos.samplecontroller.k8s.io` would give
a lot of extra information.  There's a better way **view-last-applied**

Here's an example, for a CRD.

```bash

kubectl apply view-last-applied crd foos.samplecontroller.k8s.io -o yaml

apiVersion: apiextensions.k8s.io/v1beta1
kind: CustomResourceDefinition
metadata:
  annotations: {}
  labels:
    tag: foo
  name: foos.samplecontroller.k8s.io
spec:
  group: samplecontroller.k8s.io
  names:
    kind: Foo
    plural: foos
  scope: Namespaced
  version: v1alpha1


```


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






