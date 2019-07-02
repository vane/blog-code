#!/usr/bin/env python
# -*- coding: utf-8 -*-
import rethinkdb
from tornado import ioloop, gen
from tornado.concurrent import Future, chain_future
import functools

r = rethinkdb.RethinkDB()
r.set_loop_type("tornado")
connection = r.connect(host='localhost', port=28015)

async def resolve_foo(self, info):
    foo = await db.get_foo()
    return foo
