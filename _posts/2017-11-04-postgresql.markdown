---
layout: post
title: "Example Postgresql Connections"
date: 2017-11-04 15:29:00 -0400
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


host=37.194.2.14
dbname=pub
user=sparky
password=P@SSwor8
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

## JSON

Reference:
[fieldlookup-hstorefield.contains](https://docs.djangoproject.com/en/1.11/ref/contrib/postgres/fields/#std:fieldlookup-hstorefield.contains)

## Example in Go

```go
/*
Example /Users/mchirico/.google_psql/goUser:

host=35.191.23.14
dbname=testDatabase
user=bobAnderson
password=Onk245Nnke2
sslmode=require
sslcert=/Users/mchirico/.google_psql/ipaddress_certs/client-cert.pem
sslkey=/Users/mchirico/.google_psql/ipaddress_certs/client-key.pem
sslrootcert=/Users/mchirico/.google_psql/ipaddress_certs/server-ca.pem


[See project: https://github.com/mchirico/bugGoProject]

*/

package main

import (
	"bytes"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
	"os"
	"reflect"
)

func connection() string {

	filerc, err := os.Open("/Users/mchirico/.google_psql/goUser")
	if err != nil {
		log.Fatal(err)
	}
	defer filerc.Close()

	buf := new(bytes.Buffer)
	buf.ReadFrom(filerc)
	return buf.String()
}

func db() *sql.DB {
	connStr := connection()
	fmt.Printf("Connect string:%s\n\n", connStr)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	return db
}

func main() {

	connStr := connection()

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(reflect.TypeOf(db))

	age := 21
	db.Exec("create table junk(a int)")
	db.Exec("insert into junk (a) values (21)")

	rows, err := db.Query("SELECT * FROM junk WHERE a = $1", age)
	defer rows.Close()
	for rows.Next() {
		var a int
		if err := rows.Scan(&a); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("a is %d\n", a)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

}


```

<!--  Enter text below, if you want -->
