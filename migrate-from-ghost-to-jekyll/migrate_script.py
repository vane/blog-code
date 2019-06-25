#!/usr/bin/env python
# -*- coding: utf-8 -*-
import csv
import os


class Constraints:
  CSV_FILE = 'blog_tags.csv'
  POSTS_DIR = '_posts'
  TIMEZONE = '+02:00'


def write_post(date, tags, date2):
  with open('{}/{}'.format(Constraints.POSTS_DIR, p)) as post:
    post_array = post.readlines()
    new_date = 'date: {}.000000000 {}\n'.format(date, Constraints.TIMEZONE)
    for i, line in enumerate(post_array[:]):
      if line.startswith('date:'):
        post_array[i] = new_date
        post_array.insert(i, 'tags : {}\n'.format(tags))
        break
    # write new file
    new_fname = '{}/{}-{}'.format(Constraints.POSTS_DIR, date2, p[idx:])
    with open(new_fname, 'w+') as newpost:
      newpost.writelines(post_array)


if __name__ == '__main__':
  posts = os.listdir('_posts')
  with open(Constraints.CSV_FILE) as f:
    data = csv.DictReader(f)
    for p in posts:
      f.seek(0)
      for row in data:
        idx = p.find(row.get('slug'))
        # we found file named as slug so we can process it
        if idx > 0:
          date = row.get('published')
          tags = row.get('tag_names').split(',')
          date2 = date.split(' ')[0]
          # read, replace and write post file
          write_post(date, tags, date2)

