#!/usr/bin/python3

import feedparser
import requests
from pymongo import MongoClient
import datetime
import os

TODAY = datetime.datetime.today()
URL = "https://www.nrc.gov/public-involve/rss.cfm?feed=plant-status"
MONGOIP = os.environ['MONGO_IP']
MONGOPORT = os.environ['MONGO_PORT']
MONGOURI = 'mongodb://' + MONGOIP + ':' + MONGOPORT + '/mongo'

try:
    client = MongoClient(MONGOURI)
    print('connected to mongodb')
except:
    print('error connecting')

db = client.mongo
collection = db.plants

content = requests.get(URL)
rss = content.text
parsed = feedparser.parse(rss)

plant_list = []
for key in parsed['entries']:
    plant_list.append(str.split(key['title'], ' - '))

# create a list of lists with unit name and unit power for each sublist
final_unit_and_power_list = []
for unit in plant_list:
    power_string = unit[1] # get string that contains power level
    power_numbers_only = str.split(power_string, '%')[0] # get power as int
    post_data = {}
    post_data["date"] = str(TODAY.date())
    post_data['name'] = unit[0]
    post_data['power'] = power_numbers_only
    try:
        collection.insert_one(post_data)
    except:
        print('Insert Error')
