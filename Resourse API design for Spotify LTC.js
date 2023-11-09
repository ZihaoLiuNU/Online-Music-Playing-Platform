Resourse for Spotify LTC Music Platform

Business Object Required for Spotify Music Application (Sample Version)

1. User

Search User by userId.

/users

POST /users - Create a new user

{
    "userId":1,
    "name":"test",
    "password":"test",
    "age":20,
    "location":{
        "building":"Malden Center Building",
        "room":"Unit B"
    },
    "vip":0,
    "likes":[]
}

GET /users?userId=1537 - Search user - Retrives a single user by userId
//JSON Format
{
    "userId":1,
    "name":"test",
    "password":"test",
    "age":20,
    "location":{
        "building":"Shillman",
        "room":"105A"
    },
    "vip":0,
    "likes":[
        {
        "albumId":10,
        "date":"02/03/2023",
        "likeId":1
        },
        {
        "albumId":12,
        "date":"02/03/2023",
        "likeId":2
        },
        {
        "songId":1,
        "date":"02/03/2023",
        "likeId":3
        }
    ]
}

PUT /users - Update a entire single user by userId
PATCH /users/{userId} - Update a partial single user by userId
DELETE /users/{userId} - Delete the user by userId


2. Singer

Search Singer by name.

/singers

POST /singers - Create a new singers

{
    "singerId":1,
    "name":"Taylor Swift",
    "age":33,
    "mult":0,
    "nation":"US",
    "song_list":[],
    "album_list":[ ]
}
GET /singers?name="Taylor Swift" - Search singers - Retrives a single singer
//JSON Format
{
    "singerId":1,
    "name":"Taylor Swift",
    "age":33,
    "mult":0,
    "nation":"US",
    "song_list":[
        {
        "songId":20,
        "singerId":1,
        "albumId":1,
        "name":"Daylight"
        "date":"08/23/2019",
        "comments":20000,
        "duration":"04:53",
        "likes":20000 
        },
        {
        "songId":21,
        "singerId":1,
        "albumId":2,
        "name":"exile"
        "date":"08/23/2019",
        "comments":30000,
        "duration":"04:45",
        "likes":30000 
        }
    ],
    "album_list":[
        {
        "albumId":1,
        "name":"Lover"
        "date":"08/23/2019",
        "comments":10000,
        "price":2,
        "likes":10000
        }
    ]
}

PUT /singers - Update a entire single singer by singer id
PATCH /singers/{singerId} - Update a partial single singer by singer id
DELETE /singers/{singerId} - Delete the singer by singer id

3. Album

Search Album by name.

/albums

POST /albums - Create a new album
{
    "albumId":1,
    "name":"Lover",
    "date":"08/23/2019",
    "singerId":1,
    "price":2,
    "comments":0,
    "likes":0
}
GET /albums?name="Lover" - Search album - Retrives a single album
//JSON Format
{
    "albumId":1,
    "name":"Lover",
    "date":"08/23/2019",
    "singerId":1,
    "price":2,
    "comments":10000,
    "likes":10000,
    "song_list":[
        {
        "songId":20,
        "singerId":1,
        "albumId":1,
        "name":"Daylight"
        "date":"08/23/2019",
        "comments":20000,
        "duration":"04:53",
        "likes":20000 
        },
        {
        "songId":21,
        "singerId":1,
        "albumId":1,
        "name":"The Man"
        "date":"08/23/2019",
        "comments":30000,
        "duration":"03:10",
        "likes":30000 
        }
    ]
}

PUT /albums - Update a entire album by albumId
PATCH /albums/{albumId} - Update a partial single by albumId
DELETE /albums/{albumId} - Delete the singer by albumId

4. Song 

Search Song by name.

/songs

POST /songs - Create a new songs
{
    "songId":1,
    "albumId":1,
    "singerId":1,
    "name":"Lover",
    "date":"08/23/2019",
    "comments":0,
    "likes":0
}

GET /songs?name="exile" - Search songs - Retrives a single song
//JSON Format
{
    "songId":1,
    "albumId":1,
    "singerId":1,
    "name":"Lover",
    "date":"08/23/2019",
    "comments":40000,
    "likes":40000
}

PUT /songs/ - Update a entire songs by songId
PATCH /songs/{albumId} - Update a partial single songs by songId
DELETE /songs/{albumId} - Delete the singer song by songId

5. Library

Search Library by UserId.

/library

POST /library - Create a new library by user
{
    "userId":1,
    "name":"My favorite Jazzs",
    "date":"03/19/2023",
}

GET /library?userId="1" - Search album - Retrives a library by userId
//JSON Format
{
    "libId":1,
    "userId":1,
    "name":"My favorite One",
    "date":"03/19/2023",
    "song_list":[
        {
        "songId":20,
        "singerId":1,
        "albumId":1,
        "name":"Daylight"
        "date":"08/23/2019",
        "comments":20000,
        "duration":"04:53",
        "likes":20000 
        },
        {
        "songId":20,
        "singerId":1,
        "albumId":2,
        "name":"exile"
        "date":"08/23/2019",
        "comments":30000,
        "duration":"04:45",
        "likes":30000 
        }
    ]
}

PUT /library - Update a entire library by libId
PATCH /library/{libId} - Update a partial library by libId
DELETE /library/{libId} - Delete the library by libId

