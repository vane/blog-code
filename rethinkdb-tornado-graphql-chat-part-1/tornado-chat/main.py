#!/usr/bin/env python
# -*- coding: utf-8 -*-
import tornado.web
from tornado.ioloop import IOLoop

from graphene_tornado.schema import schema
from graphene_tornado.tornado_graphql_handler import TornadoGraphQLHandler


class CorsHandler(TornadoGraphQLHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', 'content-type')

    def options(self):
        self.finish()

class ExampleApplication(tornado.web.Application):

    def __init__(self):
        handlers = [
            (r'/graphql', CorsHandler, dict(graphiql=True, schema=schema)),
            (r'/graphql/batch', CorsHandler, dict(graphiql=True, schema=schema, batch=True)),
            (r'/graphql/graphiql', CorsHandler, dict(graphiql=True, schema=schema))
        ]
        tornado.web.Application.__init__(self, handlers)

if __name__ == '__main__':
    app = ExampleApplication()
    app.listen(5000)
    print("ok")
    IOLoop.instance().start()
