# Calmly by Ania, Marietta, Nikoletta, Sylwia, Bartek and Dawid

## Application Description

Application "Calmly" has been created to monitor and store a persons mood and stress levels. Calmly offers the feel better activities to registered users as well as guests. Registered users have access to the full version of application which includes the personalized journal that stores the users stress and emotions. Our project includes a special two part quiz that helps measure a persons current stress level. The application offers a range of activities to help improve the overall mood and emotions of the user. Within one of the activities calming songs are generated that the user can listen to and enjoy. Secondly is a breathing exercises which helps relax the body and mind and remove any tension. The third activity is a visual therapy which includes adorable pictures of cats, dogs and foxes. Our fourth activity is an invitation to the soothing sound of nature. Finally, Calmly offers additional tips that the user can do to increase productivity and improve the current mindset. In our application we note down your stress levels and mood in a journal that the user can always go back to and track their past days.
In situations that are more serious we redirect the user to our support page. The support page includes a helpline number the user can call to talk to a professional and receive the help they need.

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

- Sign up and log in
- Functions for a logged in user

  - Stepper 1: Calming music generator
  - Stepper 2: Breathing exercise
  - Stepper 3: Cute animal pictures
  - Stepper 4: Relxing nature sounds
  - Stepper 5: Additional tips
  - Journal: Displays users test scores/moods on a graph
    ...

- moduły niezalogowanego uzytkownika

### React Libraries Used:

- survey-core - Second part of the test where a user can pick their mood/feelings
- font-awesome - Stepper icons used in the "Feel Better" section
- react-tooltip - Show when the stepper icons are hovered
- customAudioPlayer

### Animations

- TODO
- TODO

### APIs used within the application

- Spotify API
  - https://api.spotify.com/v1/playlists/2RLZUbbjd13JFFPjsFkIfj/tracks
- The APIs used for animal pictures
  - https://api.thecatapi.com/v1/images/search?limit=1 - Cat pictures
  - https://api.thedogapi.com/v1/images/search?limit=1 - Dog pictures
  - https://randomfox.ca/floof - Fox pictures
