# Calmly by Ania, Marietta, Nicoletta, Sylwia, Bartek and Dawid

## Application Description

Application "Calmly" has been created to monitor and store a persons mood and stress levels. Calmly offers the feel better activities to registered users as well as guests. Registered users have access to the full version of application which includes the personalized journal that stores the users stress and emotions. Our project includes a special two part quiz that helps measure a persons current stress level. The application offers a range of activities to help improve the overall mood and emotions of the user. Within one of the activities calming songs are generated that the user can listen to and enjoy. Secondly is a breathing exercises which helps relax the body and mind and remove any tension. The third activity is a visual therapy which includes adorable pictures of cats, dogs and foxes. Our fourth activity is an invitation to the soothing sound of nature. Finally, Calmly offers additional tips that the user can do to increase productivity and improve the current mindset. In our application we note down your stress levels and mood in a journal that the user can always go back to and track their past days. In situations that are more serious we redirect the user to our support page. The support page includes a helpline number the user can call to talk to a professional and receive the help they need.

### Project Installation

npm install
npm run dev

### Database

- Project uses the Authentication and Firestore database from Google Firebase
- Collections within Firebase
  - users - stores the users full name and email
  - journal - stores the users test results and date completed
  - feedback - stores users email, message and name
- Additional:
  - A logged in user is remembered by the use of firebase local storage

### Functions

- Landing page: From this page the user can sign up, log in or navigate to the feel better activties
- Sign up, log in and forgot password
- Home page: From here the user can navigate to start the test and enter their journal
- Test: The user will complete a two part test
  - Part 1 - User will be asked a collection of questions. Each questionhas a value and will calculate a total score at the end
  - Part 2 - User will choose 3 moods from the grid and an optional custom description that has a 50 character limit
- Feel Better Activities:
  - Stepper 1: Calming music generator. 3 random songs will be generated from the spotify API and can be re-generated with the "new songs" button. Includes the custom audio player
  - Stepper 2: Breathing exercise. A inhale/exhale animation will start when the button is clicked
  - Stepper 3: Cute animal pictures. Random pictures of dogs/cats/foxes will be generated. The user can choose the category of animal with the "animals" button
  - Stepper 4: Relaxing nature sounds. 6 mp3 nature sounds that are played when the toggle is clicked. Includes the custom audio player
  - Stepper 5: Additional tips. Random tips will be generated at the click of the button
- Journal:
  - Graph: Displays users test scores/moods on a time graph. The graphs view mode can be changed to daily, custom or detailed
    - Daily - will show results on a day to day bases
    - Custom - offers the option to choose the start and end date
    - Detailed - will show every test the user has completed
  - Average Score: Displays the average score from the test results depending on the chosen view mode from the graph
  - Frequent Moods: Displays the users most frequent moods from the data being show in the graph
- Support Page: A page that offers contact details to a UK/PL helpline if the user needs professional help
- Contact Page: The user can send their feedback/opinion on the application. Data is stored in firebase

- Functions for a logged in user

  - Home page
  - Test
  - Feel Better Activities
  - Journal
  - Support Page
  - Contact Page

- Functions for a guest (user not logged in)

  - Landing page
  - Feel Better Activities
  - Support Page
  - Contact Page

### React Libraries Used:

- survey-core - Second part of the test where a user can pick their mood/feelings
- font-awesome - Stepper icons used in the "Feel Better" section
- react-tooltip - Show when the stepper icons are hovered

### Animations

- Journal (Average Test Score): 8 images have been combined, stretched and spin to give a slow spinning effect around the test score
- Breathing Exercise: A white circle in the center of the screen that will scale bigger during inhale and scale smaller during exhale. The background of the page also changes gradient color as the circle changes size
- Contact: 3 orange circles infinitely move in the background of the page

### APIs used within the application

- Spotify API
  - https://api.spotify.com/v1/playlists/2RLZUbbjd13JFFPjsFkIfj/tracks
- The APIs used for animal pictures
  - https://api.thecatapi.com/v1/images/search?limit=1 - Cat pictures
  - https://api.thedogapi.com/v1/images/search?limit=1 - Dog pictures
  - https://randomfox.ca/floof - Fox pictures
