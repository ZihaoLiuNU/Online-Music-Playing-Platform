[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/0wrsx4Jb)
# Assignment8 instruction
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
## Team Information
### Team Name:&nbsp;&nbsp;Spotify_LTC
### Team member: 
Xingyu Huang&nbsp;&nbsp;&nbsp;&nbsp;001582498&nbsp;&nbsp;&nbsp;&nbsp;huang.xingyu2@northeastern.edu</br>
Leqi Wei&nbsp;&nbsp;&nbsp;&nbsp;001561748&nbsp;&nbsp;&nbsp;&nbsp;wei.leq@northeastern.edu</br>
Yuxuan Zhang&nbsp;&nbsp;&nbsp;&nbsp;002778556&nbsp;&nbsp;&nbsp;&nbsp;zhang.yuxuan5@northeastern.edu</br>
Zihao Liu&nbsp;&nbsp;&nbsp;&nbsp;001567668&nbsp;&nbsp;&nbsp;&nbsp;liu.zihao@northeastern.edu</br>

## Project Topic: Online music playing platform
## Description: 
This group of projects is the development of online music playing software products, providing users with the function of online
music information browsing and playing. The application functional items can be divided into, login system, personal center, background management, song information display, playlist management, music playback, Search, etc.
Next.js framework is used, using RESTful architecture style design, by the background through a unified data query service, through  MongoDb to achieve data storage, through the http protocol and axios to achieve the interaction of front and back data, to achieve
search search function. 
## User Stories:
### a) Project technology:
* ReactJS
* HTML/CSS
* Route management using react-routerconfig
* Hooks useState for state management
* The backend uses MyAPI interface to obtain data
* axios interacts
### b) File directory structure description
* assets: Store project resources, including css, img, font, etc
* common: common data, constants, etc
* components: Components shared between multiple pages
* pages: Divide the pages
* router: indicates route configuration
* services: network request
* store: redux merge
* utils: js tools
### c) Project Features
#### PartA: Account
* Register Login 
User registers account with username and password for login, user name uniqueness check
* Personal main page
Including username, photo, Myfavorite songs, Myfavorite playlist, Myfavorite album, Created playlist, Play history
* Created playlist
Add description and multiple songs to one playlist.

#### PartB: Catalog & Main page design
* Rotating images
* Unit Design

#### PartC: Music Search
* Search Information
Open the app and enter the home page to find the search box on top, click the search box, enter the search page, search for songs, artists, albums, and retrieve the results.
* Search Result
Click certain song/artist/album to jump to the details page.
* Search Format
Search English and Chinese fields without special character symbols.
* Error Alert
Format error，Search failed

#### PartD: Song List Display
* Browse song list by category
* Add list to my favorite list (default playlist catalog)
* Markdown playlist to certain list
* Click on a song to play it

#### PartE: Daily Song List
* Main Page
Including the most popular songs and singers in this day and ordered by clicks.
* Play List
play the songs from most popular to the end one by one, and list the singers on the player.
* Like libraries
Show the Like libraries which have been liked by users and list them by date time

#### PartF: Singer Display
* Main Page
Including singer name, picture, description, follow button
* Singer Albums
Album information including album cover, album name, artist, album time, album songs
* Singer Song List
Read the song artist attribute to match the information and display all the songs of the artist

#### PartG: Song Display
* View current playlist
* View similar music
* Add song to my favorite music (default song list)
* Add song comments
Other user comments, click to reply to that comment. Enter your own comment and click send to send. Click on the user's avatar to jump to the user's page
* Lyrics showcase
* View song details (artist, album, etc)
* Bookmark song list to personal song list

#### PartH: Music playing
* Play and pause playback
When clicking the play icon of each song in the list component of recommended music, determine whether the song is in the playlist, if not, add the song to the playlist and play the song; if yes, get the position of the song in the list, put its position at the top, and play the song.
* Play music in sequence, single song loop, randomly
Add audio tab to play music, play music by adding click events; use antd's sliding input bar component to change style mimicry
* Play previous and next music 
* Real-time display of lyrics
Use the onTimeUpdate={CurrentTime} property in the audio tag to get the current music playing time, and use useState() to save the music progress time. Update the progress bar in real time: antd's sliding input bar comes with the value={progress} property, which can update the progress in real time
* Song scroll bar in real time
Add const [isChanging, setIsChanging] = useState(false); to determine whether the current progress bar is changing, so that when the user is playing music and sliding the scroll bar, the scroll bar can slide
* Click on a song to add it to the playlist
### Milestones:
* First stage(03/21 - 03/25): Main structure design</br> 
Using Next.js framework to construct the structure
* Second stage(03/26 - 03/28): User Interface Design</br>
Create wireframes and mockups of the platform's user interface, incorporating user feedback and design best practices. Develop a design system that establishes a consistent look and feel for the platform.
* Third stage(03/29 - 04/10): Front-end design & Back-end design</br>
Build the front-end of the platform using web development technologies HTML, CSS, and JavaScript. Page arrangement: main page, search, sidemenu, personal page, playlist page, song page, singer page, album page, etc</br>
Using modern web development framework Node.js, Express.js and dataset Mongodb to develop the platform's back-end functionality, including user authentication, data storage, and server-side processing. 
* Fourth stage(04/11 - 04/15): Integration</br> 
Integrate the front-end and back-end components of the platform, testing for functionality and ensuring a seamless user experience.
* Fifth stage(04/16 - 04/19): Testing and Debugging</br> 
Conduct comprehensive testing and debugging of the platform, identifying and resolving any issues that arise.
### Organization: 
Xingyu Huang: Team Leader, Main framework build, PartE-Daily Song List, PartF-Singer Display  
Zihao Liu: PartA-Account, PartC-Music Search  
Yuxuan Zhang: PartB-Catalog & Main page design, PartD-Song List Display  
Leqi Wei: PartG-Song Display, PartH-Music playing,  

### Assignment:

Xingyu Huang:
1. First Stage: Next.JS we choose to use nextjs structure as the main front end tool to build our web application, for the whole structure of the music platform, including the API design, main page design and common components implement.

2. Second Stage: NodeJS and MongoDB, after discussion we select nodejs (express) as our api back end and mongodb as the database to store data. The task of this stage is to deploy the backend environment and connect the front end with end back to database, and build the static server in nodejs, so we could request img and songs path from the backend. This stage could be the longer.

3. Thrid Stage:  Daily song List and Singer Display parts complete. Design the page UI and complete them on nextjs, and build the API connecting to NodeJs. Fetch data including song data and singer data from mongodb and render them on pages. Binding the events on page components and trigger the api on backend.

4. Fourth Stage: Complete the whole back end and mongodb development and connect them on the whole front end structure.
Make sure post and fetch data correct on each api interface, and next could render them on pages within right css and html structure. Get the thrid part api from outer music platform, fetch basic data from outer api and then picture on the main page as the custom page. Design the customer test cases and use test tools to make sure the project is bug free and correct deployment.

Yuxuan Zhang: 
1. First stage: Research popular design patterns for rotating images on websites and different ways to browse and filter song lists on music streaming platforms.

2. Second stage: Design a mockup of the main page layout with rotating images and song list display with categories and filters such as artist, album, genre, and popularity.

3. Third stage: Implement the rotating images using React and CSS animations, and implement the song list display using React and CSS to render the song list data obtained from the backend API.

4. Forth stage: Integrate the main page layout with the backend API to fetch data for recommended playlists, new releases, and song lists based on categories and filters.

5. Fifth stage: Implement the browse and filter functionalities for the song list display using React and the backend API.

6. Sixth stage: Implement the "add to favorite list" and "markdown playlist" functionalities.

7. Seventh stage: Test and debug the main page layout and song list display to ensure they are functional and visually appealing.

Leqi Wei:</br>
1. First Stage:
Design song showing front-end page, including song name, artist, album, song basic information, song lyrics, favorite button, markdown button, song comment.

2. Second Stage:
Design and implement the ability to add a song to the playlist by clicking on the song. Design and implement the play and pause playback functionality, which allows users to play, pause, and control the volume of songs being played. 

3. Third Stage:
Design and implement the ability to play music in sequence, single song loop, or randomly, using an audio tag and a sliding input bar component from antd. Design and implement the play previous and next music functionality.

4. Fourth Stage:
Design and implement the real-time display of lyrics, using the onTimeUpdate={CurrentTime} property in the audio tag to get the current music playing time and update the progress bar in real-time using useState().

5. Fifth Stage:
Design and implement the current playlist functionality, which displays the current playlist and allows users to add songs to their favorite music list.

6. Sixth Stage:
Design and implement the song comment functionality, which allows users to view and reply to other user comments, and add their own comments. Clicking on a user's avatar should take the user to their page.

7. Seventh Stage:
Design and implement the real-time song scroll bar, using useState() to determine whether the current progress bar is changing and allow users to slide the progress bar while playing music.

Zihao Liu:</br>
1. Design and implement the user registration functionality, including username and password authentication, and check for username uniqueness.

2. Design and implement the personal main page, which displays the user's profile information, favorite songs, playlists, albums, created playlists, and play history.

3. Design and implement the created playlist functionality, which allows users to add descriptions and multiple songs to one playlist.

4. Design and implement the music search functionality, including a search box on the home page, a search page for songs, artists, and albums, and retrieval of search results.

5. Design and implement the search result functionality, which allows users to click on a certain song/artist/album and jump to the details page.

6. Ensure that the search function works for English and Chinese fields without special character symbols.

7. Implement error alerts for format errors and failed searches.

## UML Attachment 
![UML](https://github.com/neu-mis-info-6150-spring-2023/final-project-group-spotify_ltc/blob/main/Group%20Assignment%204.drawio.png)
