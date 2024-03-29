# Adopt-A-Pal



## About The Project
<table>
<tr></tr>
<td>
  A web application for a service that connects potential adopters with animal shelters. Similar to dating apps, users can swipe through posts and "match" with pets to get in touch with the animal shelter.
</td>
</table>

#### View design file on [Figma](https://www.figma.com/file/yJkg7EMO0fpvOo6WCn6JMO/Desktop-Prototype?type=design&node-id=0%3A1&mode=design&t=TfNgvSewE7efiwJb-1)

<!-- ![landing](Adopt-a-Pal-Landing.gif) -->
![landing](Adopt-a-Pal-Landing.gif)
![shelter](Adopt-a-Pal-Shelter.gif)
![user](Adopt-a-Pal-User.gif)

### Built With
 [![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.3.x/)
 [![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/datastore)
 [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
 [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
 [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
 [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
 [![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

### Features
- **User Accounts** - 
  - Create a "dating" profile to browse animal profiles and filter by animal type, breed, disposition, and availability. 
  - Users can swipe through profile cards and “like” the pets they are interested in to save it to their profile. 
  - They can view all the pets they have “matched” with on their dashboard, contact the shelter about a specific animal, or remove the animal from their matches.
- **Animal Shelter Accounts** - 
  - Create a post for an animal that includes photos and descriptors for the type of animal, breed, disposition, and availability. 
  - Update the status of animal profiles or remove completely.
  - View and filter previously posted animals.





  
## Getting Started
### Live Demo
    https://adopt-a-pal-384303.wn.r.appspot.com/

 ### Prerequisites
  - Install [NodeJs](https://nodejs.org/en) and [Flask](https://flask.palletsprojects.com/en/2.3.x/installation/)
  - Get latest dependencies
  
    ```
    npm install
    ```

  - Before Starting, run latest build
    ```
    yarn build
    ```
  - Create virtual environment
    ```
    python3 -m venv .env
    ```

  ### Run on Unix
 -  Activate virtual environment
      ```
      source env/bin/activate
      ```
  
  - Install virtual environment dependencies 
      ```
      pip install -r requirements.txt
      ```

  - Start front-end:
      ```
      yarn start
      ```
      

  - Start back-end:
      ```
      yarn start-api
      ```
          
  - Start server:
      ```
      gunicorn -b :5000 main:app
      ```
        

  ### Run on Windows
  -  Activate virtual environment
     ```
     .\env\Scripts\activate
     ```
 
 - Install virtual environment dependencies 
     ```
     pip install -r requirements.txt
     ```

 - Start front-end:
   ```
   yarn start
   ```
     

 - Start back-end:
     ```
     yarn start-api
     ```
         
 - Start server:
     ```
     waitress-serve --listen=*:5000 main:app
     ```

## Contributors
![GitHub Contributors Image](https://contrib.rocks/image?repo=encarnac/Adopt-A-Pal)

## License
Distributed under the MIT ©  License. See `LICENSE.txt` for more information.
