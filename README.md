<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A Web App for teaching and taking online classes, making it easier for people to get/give knowlage online.
>
> TULP aims to make the ultimate E-learning platform by providing a user-friendly interface that makes learning simple with no extra complications. We believe in enhancing the learning experience so that instructors can focus on instructing and students can focus on learning.

### User Stories
#### Instructor
-   As an Instructor I want a good platform to teach online, so that I can follow my passion of teaching.
-   As an Instructor I want to easily find instructors online, so that I can build my team faster.
-   As an Instructor I want to communicate with others on the same platform, so that I don't have to downloads/use extra application.
-   As an Instructor I want to easily manage my class, so that I have more time to prepare for the content.
-   As an Instructor I want to have tools to help me teach, so that I can give a better learning experience.
  #### Studnet
-   As a student I want to join an online class, so that I can study more effectively.
-   As a student I want to have an easy to manage class information, so that i can focus on my studies more.
  #### Admin
-   As an admin I want to an admin pannel, so that I can easily manage the website users/content.


<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> I designed TULP using wireframes and mockups, iterating on the design until I reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes

| Login screen                            | Register screen                       | Landing screen                        |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

### Mockups

| Home screen                             | Menu Screen                           | Order Screen                          |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the TULP app with the following features:

### User Screens (Mobile)

| Login screen                              | Register screen                         | Landing screen                          | Loading screen                          |
| ----------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |
| Home screen                               | Menu Screen                             | Order Screen                            | Checkout Screen                         |
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |

### Admin Screens (Web)

| Login screen                            | Register screen                       | Landing screen                        |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen                             | Menu Screen                           | Order Screen                          |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

### TULP is built using the following technologies:

-   This project uses the [React Library](https://react.dev). React is a free and open-source front-end JavaScript library for building user interfaces based on components.
-   This project users [Node.js](https://nodejs.org/en) as a runtime enviroment for the backend side of the application, with [Express.js](https://expressjs.com) library for managing http requests for the application.
-   For persistent storage (database), the app uses the [MongoDB](https://www.mongodb.com) package which allows the app to create a custom storage schema and save it to a local database.
-   To send messages in real time, the app uses the [SOcket.IO](https://socket.io). Which a library that enables low-latency, bidirectional and event-based communication between a client and a server.
-   The app uses [Electron](https://www.electronjs.org) for the adminestrative side, electron enables building desktop applications with web libraries and frameworks, here we used electron to build a desktop app with react.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up TULP locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```
-   Download [mongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

### Installation

1. Get a free Glot API Key at [https://glot.io](https://glot.io/account/token). This is used to help with video chatting.
2. Get a free Daily.co API Key at [https://docs.daily.co](https://docs.daily.co/guides/create-and-manage-rooms-with-the-rest-api). This is used for compiling code.
    ```sh
    git clone https://github.com/AliHakim773/TULP.git
    ```
4. Setup the backtend.
   ```sh
   cd tulp-backend
   npm install
   ```
   Then go to .env.example file, rename it to .env populate the values.
   ```.env
   GLOT_API_KEY="Your Glot api key"
   JWT_SECRET="Your Secret JWT key (Can be what ever you want)"
   ```
6. Setup the frontend.
    ```sh
    cd ../tulp-frontend
    npm install
    ```
     Then go to .env.example file, rename it to .env populate the values.
   ```.env
   VITE_DAILY_API_KEY="Your dailyco api key"
   ```
7.  Setup your electron
     ```sh
    cd ../admin-panel
    npm install
    ```
8.  To run TULP you need to run the backend from the backend directory with npm start, then the frontend and electron also with npm start

Now, you should be able to run TULP locally and explore its features.
