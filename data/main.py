#!/usr/bin/python3

import feedparser
import requests
from pymongo import MongoClient
import json
import datetime


# TODO add authentication
# TODO better logging 
# TODO better error catching
# TODO if data is already entered, abort entering
# find today's date, if same as data already entered, abort
# db.plants.find().skip(db.plants.count() - 1)
# print(collection.find().skip(collection.count() - 1).pretty())
# establish db connection

try:
    client = MongoClient('mongodb://*PIHERE*/*PORTHERE*/mongo')
    print('connected to mongodb')
except:
    print('errro connecting')

db = client.mongo
collection = db.plants

TODAY = datetime.datetime.today()
URL = "https://www.nrc.gov/public-involve/rss.cfm?feed=plant-status"

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
    # post_data["data"] = [{"name": unit[0], "power": power_numbers_only}]
    post_data['name'] = unit[0]
    post_data['power'] = power_numbers_only
    #print(post_data)
    try:
        collection.insert_one(post_data)
        print(post_data)
    except:
        print('Insert Error')
