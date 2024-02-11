# Getting Started with News Paper View App

**MADE by: [Jnanendra Senapati]

**Features:**
- Beautiful UI with made with the use of BootStrap and css file.
- Fetches News from NewsAPI
- Read the full news by following the link provided in the Article.
- Read news in online mode only.

### `npm i`
To install all dependencies before running the app
Have to use their own API_KEY for running the projects by changing API_KEY below- >
const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + `category=${category}&` + 'apiKey={API_KEY}';

### `How to generate API_KEY`
Step 1 - Go to Google, search NewsAPI and click on the first link
Step 2 - Register to generate your own API_KEY
Step 3 - Replace your own apiKey with the API_KEY in the code 
Step 4 - Enjoy Reading News Paper View App

### `npm start`
To run the app
The page will reload when you make changes.
You may also see any lint errors in the console.


**What I have learned from this project:**
- Fetching JSON data and parsing it.
- Rendering page upon changing category component
- Redirecting to pages using Router from react-router-dom
- Passing of data between the components
- Responsive Design

**TechStacks used**
- ReactJS
- BootStrap

### `Challenges Faced`
- Creating a responsive design
- Fetching data and showing the data in UI
- Routing to other pages using Buttons

### `How I overcame`
- Reading Bootstrap documentation
- Using Debugger and in VScode to see the data flow
- Researching about routing techniques in ReactJS documentation

**It a fully Open Source project so go ahead and fork it.**
