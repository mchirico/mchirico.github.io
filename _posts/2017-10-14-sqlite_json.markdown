---
layout: post
title: "SQLite and JSON "
date: 2017-10-14 10:17:09 -0400
comments: false
categories: sqlite
---

# SQLite with JSON

Below shows you how to compile SQLite to enable JSON. In addition,
I've added a local location for the installation.

```bash
./configure --enable-json1 --enable-readline  --prefix=/home/user/sqlite
make
make install

```

# Example

Below is an example from the SQLite command prompt

```sqlite
sqlite> select json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c[2].f');
7

```

<!--  Enter text below, if you want -->
