# mini-CMS

Weekend project

All the endpoints API can be access from:
```jacascript
http://localhost:3000
```

## Users
+ ### Sign Up
  method: `POST`<br>
  endpoint: `/user/signup`

  #### _Request_ :
  * body:
    ```javascript
    full_name: String, required
    username: String, required,
    email: String, required,
    password: String, required,
    profile_pic: String, required
    ```

  #### _Response_ :
  - 201
    ```javascript
    { 
      message: "Created!" 
    }
    ```
  - 400
    ```javascript
    {
      code: 400,
      msg: "ValidationError",
    }
    ```
  - 500
    ```javascript
    {
      code: 500,
      msg: "Internal Server Error .....dst",
    }
    ```
+ ### Sign In
  method: `POST`<br>
  endpoint: `/users/signin`

  #### _Request_ :
  * body:
    ```javascript
    email: String, required
    password: String, required
    ```

  #### _Response_ :
  - 201
    ```javascript
    {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6ImpvaG4gZG9lIiwidXNlcm5hbWUiOiJqb2huZG9lIiwiZW1haWwiOiJqb2huZG9lQG1haWwuY29tIiwicm9sZSI6ImJ1eWVyIiwiaWF0IjoxNTY2MjA4NjIzfQ.Yr28Iu-8BP00vV_leZcFCde0-3DinwMK16Fz81NZtlk"
    }
    ```
  - 400
    ```javascript
    {
      code: 401,
      msg: Wrong username / password,
    }
    ```