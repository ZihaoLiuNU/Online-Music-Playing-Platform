openapi: 3.0.3
info:
  title: Spotify LTC API
  description: Spotify LTC API can be used for managing
  version:  1.0.0
paths:
  /user/{userId}: 
    get:
      tags:
        - User API
      operationId: retriveUser
      summary: get a user by user Id
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single user
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    patch:
      tags:
        - User API
      operationId: retriveUser in security check
      summary: get a user by user Id in security check
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single user
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    delete:
      tags:
        - User API
      operationId: deleteUser
      summary: delete a user by user Id
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Deleted a user
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /users:
    post:
      tags:
        - User API
      summary: Add a new user
      description: Add a new user to the database
      operationId: addUser
      requestBody:
        description: Create a new user in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
        required: true
      responses:
        '200':
          description: Successful Post 
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    put:
      tags:
        - User API
      summary: update a new user 
      description: update a new user to the database
      operationId: updateUser
      requestBody:
        description: Update a new user in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
        required: true
      responses:
        '200':
          description: Successful Update
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /songs/{songId}: 
    get:
      tags:
        - Song API
      operationId: retriveSong
      summary: get a song by song Id
      parameters:
        - name: songId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single song
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Song'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    patch:
      tags:
        - Song API
      operationId: retriveSong in security check
      summary: get a song by song Id in security check
      parameters:
        - name: songId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single song
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Song'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    delete:
      tags:
        - Song API
      operationId: deleteSong
      summary: delete a song by song Id
      parameters:
        - name: songId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Deleted a song
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /songs:
    post:
      tags:
        - Song API
      summary: Add a new song
      description: Add a new song to the database
      operationId: addSong
      requestBody:
        description: Create a new song in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Song'
        required: true
      responses:
        '200':
          description: Successful Post 
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    put:
      tags:
        - Song API
      summary: update a new song 
      description: update a new song to the database
      operationId: updateSong
      requestBody:
        description: Update a new song in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Song'
        required: true
      responses:
        '200':
          description: Successful Update
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /singers/{singerId}: 
    get:
      tags:
        - Singer API
      operationId: retriveSinger
      summary: get a singer by singer Id when search
      parameters:
        - name: singerId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single singer
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Singer'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    patch:
      tags:
        - Singer API
      operationId: retriveSinger in security check 
      summary: get a singer by singer Id in security check
      parameters:
        - name: singerId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single singer
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Singer'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    delete:
      tags:
        - Singer API
      operationId: deleteSinger
      summary: delete a singer by singer Id
      parameters:
        - name: singerId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Delete a singer
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /singers:
    post:
      tags:
        - Singer API
      summary: Add a new singer
      description: Add a new singer to the database
      operationId: addSinger
      requestBody:
        description: Create a new singer in the catalog
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Singer'
        required: true
      responses:
        '200':
          description: Successful Post 
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    put:
      tags:
        - Singer API
      summary: update a new singer 
      description: update a new singer to the database
      operationId: updateSinger
      requestBody:
        description: Update a new singer in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Singer'
        required: true
      responses:
        '200':
          description: Successful Update
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /albums/{albumId}: 
    get:
      tags:
        - Album API
      operationId: retriveAlbum
      summary: get a album by album Id
      parameters:
        - name: albumId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single album
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Album'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    patch:
      tags:
        - Album API
      operationId: retriveAlbum in security check
      summary: get a album by album Id in security check
      parameters:
        - name: albumId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single Album
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Album'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    delete:
      tags:
        - Album API
      operationId: deleteAlbum
      summary: delete a album by album Id
      parameters:
        - name: albumId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Deleted a album
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /albums:
    post:
      tags:
        - Album API
      summary: Add a new album
      description: Add a new album to the database
      operationId: addAlbum
      requestBody:
        description: Create a new album in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Album'
        required: true
      responses:
        '200':
          description: Successful Post 
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    put:
      tags:
        - Album API
      summary: update a new album
      description: update a new album to the database
      operationId: updateAlbum
      requestBody:
        description: Update a new album in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Album'
        required: true
      responses:
        '200':
          description: Successful Update
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /library/{libId}: 
    get:
      tags:
        - Library API
      operationId: retriveLibrary
      summary: get a library by library Id
      parameters:
        - name: libId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single library
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Library'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    patch:
      tags:
        - Library API
      operationId: retriveLibrary in security check
      summary: get a library by library Id in security check
      parameters:
        - name: libId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Return a single library
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Library'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    delete:
      tags:
        - Library API
      operationId: deleteLibrary
      summary: delete a library by library Id
      parameters:
        - name: libId
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description:  Deleted a library
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'
        "401":
          description:  Autentication Error
          content:
            application/json:
              schema:
                type: object 
        "500":
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
  /library:
    post:
      tags:
        - Library API
      summary: Add a new library
      description: Add a new library to the database
      operationId: addLibrary
      requestBody:
        description: Create a new library in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Library'
        required: true
      responses:
        '200':
          description: Successful Post 
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
    put:
      tags:
        - Library API
      summary: update a new library 
      description: update a new library to the database
      operationId: updateLibrary
      requestBody:
        description: Update a new library in the database
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Library'
        required: true
      responses:
        '200':
          description: Successful Update
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerMSG'          
        '405':
          description: Invalid input
        '500':
          description:  Server Error
          content:
            application/json:
              schema:
                type: object
components:
  schemas:
    ServerMSG:
      type: object
      properties:
        status:
          type: boolean
          description:  success or not post
          example:  true
        error:
          type: string
          description:  error massage
          example: "Fail!"
    User:
      type: object
      properties:
        userId:
          type: integer
          description:  User object identifier
          example:  01
        name:
          type: string
          description:  User name
          example:  丁真
        password:
          type: string
          description:  password
          example:  理塘
        age:
          type: integer
          description:  age
          example:  10  
        location:
          type: object
          properties:
            building:
              type: string
              description:  Building
              example:  "Malden Center Building"
            room:
              type: string
              description:  room
              example:  "Unit B"
          description:  age
          example: {"building":"Malden Center Building","room":"Unit B"}
        vip:
          type: integer
          description:  vip or not
          example:  1
        likes:
          type: array
          items:
            type: object
            properties:
              albumId:
                type: integer
                description:  albumId
                example:  "Album's Id"
              date:
                type: string
                description:  date
                example:  "Date Time to like"
              likeId:
                type: integer
                description:  likeId
                example:  "Like Id"
            format: int64
          description:  Like List
          example:  [{"songId":1,"date":"02/03/2023","likeId":3}]
    Song:
      type: object
      properties:
        songId:
          type: integer
          description:  Song object identifier
          example:  01
        albumId:
          type: integer
          description:  album object identifier
          example: 01
        singerId:
          type: integer
          description:  singer object identifier
          example:  01
        name:
          type: string
          description:  song name
          example: "zood"
        date:
          type: string
          description:  date object
          example:  "01/23/2019"
        comments:
          type: integer
          description:  comments number
          example:  40000
        likes:
          type: integer
          description:  song likes
          example:  1000
    Singer:
      type: object
      properties:
        singerId:
            type: integer
            description:  Singer object identifier
            example:  01
        name:
            type: string
            description:  Singer name
            example:  Taylor Swift
        age:
            type: integer
            description:  age
            example:  10  
        mult:
            type: integer
            description: single singer or a group band
            example: 0
        nation:
            type: string
            description: nationality
            example: "US" 
        song_list:
            type: array
            items:
                type: object
                properties:
                    songId: 
                        type: integer
                        description: song object identifier
                        example: 20
                    singerId:
                        type: integer
                        description: Singer object identifier
                        example: 1
                    albumId: 
                        type: integer
                        description: album object identifier
                        example: 1
                    name: 
                        type: string
                        description: song name
                        example: "Taylor Swift"
                    date: 
                        type: string
                        description: Release date
                        example: "08/23/2019"
                    comments: 
                        type: integer
                        description: number of comments record
                        example: 2000
                    duration: 
                        type: string
                        description: time duration of one song
                        example: "04:53"
                    likes: 
                        type: integer
                        description: number of comments record
                        example: 2000
                format: int64
            description: song list
            example: [{"songId":21, "singerId":1, "albumId":2, "name":"exile", "date":"08/23/2019", "comments":30000, "duration":"04:45", "likes":30000 }]
        album_list:
          type: array
          items:
            type: object
            properties:
                albumId: 
                  type: integer
                  description: album object identifier
                  example: 1
                name:
                  type: string
                  description: album name
                  example: "Lover"
                date:
                  type: string
                  description: Release date
                  example: "08/23/2019"
                comments: 
                  type: integer
                  description: number of comments record
                  example: 2000
                price:
                  type: integer
                  description: price of an album
                  example: 20
                likes: 
                  type: integer
                  description: number of comments record
                  example: 2000                     
          format: int64
          description: album list
          example: [{"albumId":1, "name":"Lover", "date":"08/23/2019", "comments":10000, "price":2, "likes":10000}] 
    Album:
      type: object
      properties:
        albumId:
          type: integer
          description: Album object identifier
          example:  1
        name:
          type: string
          description: Album name
          example:  "Lover"
        date:
          type: string
          description: release date
          example:  "08/23/2019"  
        singerId:
          type: integer
          description: Singer object identifier
          example:  1
        price:
          type: integer
          description: price of an album
          example: 20
        comments: 
          type: integer
          description: number of comments record
          example: 2000
        likes: 
          type: integer
          description: number of likes record
          example: 2000
        song_list:
          type: array
          items:
            type: object
            properties:
              songId: 
                type: integer
                description: song object identifier
                example: 20
              singerId:
                type: integer
                description: Singer object identifier
                example: 1
              albumId: 
                type: integer
                description: album object identifier
                example: 1
              name: 
                type: string
                description: song name
                example: "Taylor Swift"
              date: 
                type: string
                description: Release date
                example: "08/23/2019"
              comments: 
                type: integer
                description: number of comments record
                example: 2000
              duration: 
                type: string
                description: time duration of one song
                example: "04:53"
              likes: 
                type: integer
                description: number of comments record
                example: 2000
            format: int64
          description: song list
          example: [{"songId":21, "singerId":1, "albumId":2, "name":"exile", "date":"08/23/2019", "comments":30000, "duration":"04:45", "likes":30000 }]
    Library:
      type: object
      properties:
        libId:
          type: integer
          description:  library object identifier
          example:  01
        userId:
          type: integer
          description:  user object identifier
          example: 01
        name:
          type: string
          description:  song name
          example:  "ltc"
        date:
          type: string
          description:  date object
          example:  "01/23/2019"
        song_list:
          type: array
          items:
            type: object
            properties:
              songId:
                type: integer
                description:  songId
                example:  01
              singerId:
                type: integer
                description:  singerId
                example:  01
              albumId:
                type: integer
                description:  albumId
                example:  01
              name:
                type: string
                description: name
                example: "daylight"
              date:
                type: string
                description: date
                example: "08/23/2019"
              comments:
                type: integer
                description: comments
                example: 20000
              duration:
                type: string
                description: duration
                example: "04:53"
              like:
                type: integer
                description: likes number
                example: 30000
            format: int64
          description:  Song List
          example:   [{"songId":20, 
            "singerId":1,
            "albumId":1,
            "name":"Daylight",
            "date":"08/23/2019",
            "comments":20000,
            "duration":"04:53",
            "likes":20000 
        }]
  

    
  
  
  