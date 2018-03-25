#!/usr/bin/env python
# -*- coding: utf-8 -*-
import celery
import foo.test

app = celery.Celery("hello")
app.config_from_object('foo.conf')
app.tasks.register(foo.test.Hello())