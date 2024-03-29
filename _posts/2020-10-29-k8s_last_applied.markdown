---
layout: post
title: "k8s view-last-applied "
date: 2020-10-29 14:13:31 -0400
comments: false
categories: k8s
---

Suppose you want to view the `whatever.yaml` you applied. Is there
a way to generate this file?

Note: `kubectl describe crd foos.samplecontroller.k8s.io` would give
a lot of extra information. There's a better way **view-last-applied**

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

## Deployment

```bash

k get deployment

NAME             READY   UP-TO-DATE   AVAILABLE   AGE
eventer-server   1/1     1            1           7m58s

# Example..

kubectl apply view-last-applied deployment/eventer-server -o yaml

```

<!--  Enter text below, if you want -->
