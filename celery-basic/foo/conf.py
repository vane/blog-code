#!/usr/bin/env python
# -*- coding: utf-8 -*-

task_serializer = 'json'
result_serializer = 'json'
accept_content = ['json']

timezone = 'Europe/London'
enable_utc = True

broker_url = 'redis://localhost:6379/1'

result_backend = 'db+postgresql://postgres:postgres@localhost:5432/celery_results'
