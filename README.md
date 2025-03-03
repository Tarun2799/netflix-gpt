# NetflixGPT
- http://netflixgpt-9fa56.web.app/
- create-react-app
- configured Tailwindcss
- Header
- Routing of App
- login form
- sign Up form
- Form Validation 
- useRef Hook
- Firebase SetUp
- Deploying our app to production(firebase)
- Created SignUp/SignIn Account
- Implemented this above part using firebase
- Created our Redux Store with User Slice
- Implemented Signed out
- Update Profile with firebase API
- fetch movies from tmdb movies

# Features

- Home Page
    - Navbar [logo   language-btn(item list) sign-btn] 
    - body [ center heading with email input field and button] (full viewport)
    - trending now section [vertical scroll bar]
    - card section
    - FAQ with accordian design questions
    - email input field and button
    - Footer with language-btn(item list)

- Login in/ sign up page
    - Different header thean the browse page(only netflix logo)
    - Sign in / sign up (form) page
        # challenge for us/learning
        - can we convert the same sign in form to sign up for?
            - what does our sign up form contain? few extra fields like name,etc.
            - so, when someone clicks on this signup : likes thge toggle functionality. with useState
        # As our user signUp or SignIn , if it success we dispatch an action and push the info to the redux store.
        - we usually dispatch the action with redux functionality useDispatch multiple times, But here we are going to use the functionality given to us by the firebase : OnAuthStateChanged() whenever we want to signIn/SignUp/SignOut our auth state change basically so we can use this API.{It's kind of eventListener, so WE WILL CALL IT ONCE}
            - whenever signUp/signIn : add the user to store
            - whenever signOut : remove from the store
        ## WE CANNOT USE THE USENAVIGATE UTILITY FROM REACT-ROUTER-DOM AT THE ROOT LEVEL, WE CAN NAVIGATE IN CHILDRENS ONLY
        - Possible multiple solutions : 1. window.href manually, 2. moved your app router, 3. what we did in our app.
    - redirect to Browse page
    - Footer

- Browse page(After authenication: For Signed in user)
    - header (logo )
    - Main movie
        - Trailer in bg
        - Title and description in the left side
        - Movies suggestions
            - Movies list * N (vertical scrollable)

- NetflixGPT
    - Search bar
    - Movie Suggestions

-How to do Validations in the form
- use library called : FORMIK in react, when fields becomes large than handling validation and errors becomes difficult.
- but in this we see how to validations in this from scratch.
- when to validate the form , when we click on the signin button
- there are two ways to get the email and password from the input fields using the state variables or through reference useRef
- WHENEVER A FORM HAS A BUTTON AND YOU CLICK ON IT IT TRIES TO CALL THE ONSUBMIT METHOD , IF IT IS NOT THERE IT REFERESH THE PAGE.

## learning this toggle form will help we can do this toggle feature thing anywhere in our application eg: toggle between carts etc with the help of useState()