
## config mongodb in docker
MONGO_INITDB_ROOT_USERNAME=yifan
MONGO_INITDB_ROOT_PASSWORD=138156
host_port=27017

## run mongodb container in docker (not necessary)
docker exec -it <mongodb container id> bash

## connect to mongodb in mongosh with username and password
mongosh -u yifan -p 138156 --authenticationDatabase

## basic commands
show dbs
use <db name>
show collections
db.<collection name>.find()
db.<collection name>.find().pretty()
db.<collection name>.insertOne({name: "yifan", age: 18})
db.<collection name>.insertMany([{name: "yifan", age: 18}, {name: "yifan", age: 18}])
db.<collection name>.updateOne({name: "yifan"}, {$set: {age: 19}})
db.<collection name>.updateMany({name: "yifan"}, {$set: {age: 19}})
db.<collection name>.deleteOne({name: "yifan"})
db.<collection name>.deleteMany({name: "yifan"})
db.<collection name>.drop()

## Intermediate commands
### count the number of searched result
db.<collection name>.find({name: "yifan"}).count()

### limit the number of searched result
db.<collection name>.find({name: "yifan"}).limit(2)

### ???
db.<collection name>.find({name: "yifan"}).skip(2)

### sort the searched result
db.<collection name>.find({name: "yifan"}).sort({age: 1})
db.<collection name>.find({name: "yifan"}).sort({age: -1})

### group by
db.<collection name>.aggregate([
    {$match: {name: "yifan"}},
    {$group: {_id: "$name", total: {$sum: "$age"}}}
])

### explain searched result
db.<collection name>.find({name: "yifan"}).explain("executionStats")

### search by regex
db.<collection name>.find({name: {$regex: /yifan/}})

### search by array
db.<collection name>.find({name: {$in: ["yifan", "yifan"]}})

### search by range
db.<collection name>.find({age: {$gt: 18, $lt: 20}})

### search by null
db.<collection name>.find({age: {$exists: false}})

### search by not null
db.<collection name>.find({age: {$exists: true}})

### search by not equal
db.<collection name>.find({age: {$ne: 18}})

### search by not in
db.<collection name>.find({age: {$nin: [18, 19]}})

### search by or
db.<collection name>.find({$or: [{name: "yifan"}, {age: 18}]})

### search by and
db.<collection name>.find({$and: [{name: "yifan"}, {age: 18}]})
