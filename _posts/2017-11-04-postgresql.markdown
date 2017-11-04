---
layout: post
title:  "Example Postgresql Connections"
date:   2017-11-04 15:29:00 -0400 
comments: false
categories: python postgresql
---

## Psycopg2

Assume the following:

```python
import psycopg2
import os

"""
Sample Connection string in /.google_psql/conn1


host=37.194.2.14 dbname=pub 
user=sparky password=P@SSwor8 
sslmode=require 
sslcert=/Users/sparky/psql_certs/client-cert.pem 
sslkey=/Users/sparky/psql_certs/client-key.pem 
sslrootcert=/Users/sparky/psql_certs/server-ca.pem


"""


def get_creds():
    home = os.getenv("HOME")
    f = open(home + '/.google_psql/conn1', 'r')
    connection_string = f.read()
    f.close()
    return connection_string


def main():
    conn_string = get_creds()

    conn = psycopg2.connect(conn_string)
    cursor = conn.cursor()
    cursor.execute("Create table IF NOT EXISTS junk (a int, b varchar(10))")
    cursor.execute("insert into junk (a,b) values (2,'two')")
    conn.commit()

    cursor.execute("select * from junk")
    records = cursor.fetchall()
    for rec in records:
        print(rec)


if __name__ == '__main__':
    main()
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






