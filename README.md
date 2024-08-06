This is a responsive MERN Stack application with the following functionalities:

**Pre-Login Features:**
1. Implemented a toggle feature for seamless switching between Login and Signup forms.
2. Displayed a list of all users, including the count of places each user has created.
3. Ensured password security by storing user passwords in an encrypted format during the signup process, safeguarding against potential data breaches.

**Post-Login Features:**
1. Upon logging in, the user is directed to the users list page.
2. Users can click on any avatar to view a list of places associated with that particular user.
3. While viewing another user's places, the current user does not have authorization to edit or delete those places.
4. The current user can edit or delete their own places.
5. Users can also add new places to their profile.
6. Implemented automatic logout functionality, where users are logged out after the token expires (1 hour from login time).

**Common Implementations:**
1. Comprehensive error handling across all scenarios.

npm Packages Used:
**Frontend**: react, react-dom, react-router-dom, react-transition-group
**Backend**: bcryptjs, body-parser, express, express-validator, jsonwebtoken, mongoose, mongoose-unique-validator, multer, uuid

![home_page](https://github.com/user-attachments/assets/91a7e861-acc0-4947-95dc-2c8521c8228a)
![login_page](https://github.com/user-attachments/assets/b36dd69a-ebaf-46c8-8350-f25d57118846)
![signup](https://github.com/user-attachments/assets/e1ae7a7f-b9ae-40aa-a0db-5741a544c25f)
![login_err](https://github.com/user-attachments/assets/236708b8-9276-4983-9463-2c2ed68f6396)
![Screenshot 2024-08-06 180803](https://github.com/user-attachments/assets/3785fd6f-39ab-4c81-a7a1-37963dbd3fb5)
![Screenshot 2024-08-06 180826](https://github.com/user-attachments/assets/5d8ae579-de01-4d9e-829b-eafeb8a15b8b)
![Screenshot 2024-08-06 180908](https://github.com/user-attachments/assets/a9a07029-de87-47d1-b056-9e5f3fe22c7d)


