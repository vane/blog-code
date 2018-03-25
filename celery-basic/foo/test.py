#!/usr/bin/env python
# -*- coding: utf-8 -*-
import celery

class Hello(celery.Task):
    serializer = 'json'
    name = 'test.hello'
    def run(self, *args, **kwargs):
        return 'hello {0}'.format(*args)