### CRUD-app
A CRUD API Rest with nodejs express mongoose
develppement d'une API permettant d'éffectuer les opérations CRUD (Create Read Update Delete)
#### You must install mongodb
https://www.mongodb.com/download-center/community

### Clone the repo
# and npm install
# npm start
### Make sure that your mongodb server is runing 

== open your terminal

=== Go to the were your mongodb server is installed, then in bin folder

== enter this command: mongod
this will start mongodb deamon so you can connect via the port: 27017 

## Config

- the default database name is databaseArticles
- you can change it in config/properties.js

### API Rest URLs

# to create an article
/api/create

# to get alls articles 
/api/articles

# to get an article by name
/api/article/:name

# to update
/api/update/:id

# to delete
/api/delete/:id
