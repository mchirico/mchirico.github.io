---
layout: post
title: "Python reading mail from /var/mail/<files> "
date: 2017-01-22 23:26:41 -0400
comments: false
categories: python
---

Suppose you want to read and parse all of spock's email
stored in /var/mail/spock.

```python
import mailbox

def getbody(message):
    body = None
    if message.is_multipart():
        for part in message.walk():
            if part.is_multipart():
		for subpart in part.walk():
                    if subpart.get_content_type() == 'text/plain':
                        body = subpart.get_payload(decode=True)
            elif part.get_content_type() == 'text/plain':
                body = part.get_payload(decode=True)
    elif message.get_content_type() == 'text/plain':
	body = message.get_payload(decode=True)
    return body

a=mailbox.mbox('/var/mail/spock')
for i in a:
    print(i['from'])
    print(i['to'])
    print(getbody(i))



```

<!--  Enter text below, if you want -->
