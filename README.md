# nuke-api
Modifies the Nuclear Regulatory Committees Plant Status Report into an Easily Digestable API

Scraped NRC websites for daily plant status with python. Creates API with node/express/mongodb. 

Endpoints: 

Get plant status by name via get request to: 
/nuke-api/v1/plants/name/:name

Example:

Name is the same name as found on: https://www.nrc.gov/reading-rm/doc-collections/event-status/reactor-status/ps.html

Get plant status by date via get request to: 

/nuke-api/v1/plants/:name/:date

Example: Date in the form of 2020-09-19

Get all plant date via get request to: 

/nuke-api/v1/plants/all


MORE ENDPOINTS, DATA, CODE, AND DOCS coming soon. 