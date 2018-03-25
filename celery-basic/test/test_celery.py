#!/usr/bin/env python
# -*- coding: utf-8 -*-
import celery
import foo.test

app = celery.Celery('hello')
app.config_from_object('foo.conf')

def hello_test():
    t = foo.test.Hello()
    result = t.delay('siema')
    res = result.get(timeout=1)
    print(res)

if __name__ == '__main__':
    hello_test()