# nuke-api
Modifies the Nuclear Regulatory Committees Plant Status Report into an Easily Digestable API

Scrapes NRC rss feed found here: 
https://www.nrc.gov/public-involve/rss.cfm?feed=plant-status

for daily plant status with python. 

API created with node/express/mongodb. 

Endpoints: 

Get plant status by name via get request to: 
/plants/name/:name

Example:

Name is the same name as found on: https://www.nrc.gov/reading-rm/doc-collections/event-status/reactor-status/ps.html

And it is case sensitive. 

Get plant status by date via get request to: 

plants/:name/:date

Example: Date in the form of 2020-09-19

Get all plant date via get request to: 

/plants/all

See the live website here: https://nuke-api.com/

More endpoints, data, code, and documentation coming soon. 

Screenshots:
![alt text](https://github.com/pizza-power/nuke-api/blob/master/nuke1.png?raw=true)

![alt text](https://github.com/pizza-power/nuke-api/blob/master/nuke2.png?raw=true)
