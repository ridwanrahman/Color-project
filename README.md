# Color-Project

This is a project built using Django on the backend and Reactjs on the frontend to show color swatches.

# Features

  - Backend holds the colors.
  - Frontend generates the colors in random combinations.


You can also:
  - Add new colors very easily by adding the values in the backend
### Tech

* [Django] - Python for web apps
* [Django Rest Framework] - For making rest endpoints
* [Reactjs] - Fronend framework
* [Material-ui] - Google's design tool


### Installation

To run Color-project:

Clone the project into a directory. It will have two folders. One for backend the other for frontend.
```git
git clone <copy from ssh clone>
```

Enter the backend folder, install the dependencies for the django application in a virtual environment and run the project.

```sh
$ cd backend
$ virtualenv venv
$ pip install -r requirements.txt
$ python manage.py runserver
```
This will run the project in 8000 port. The api is accessible at http://127.0.0.1:8000/api/
Use postman to view the response of the api.

To install the frontend dependencies, enter the frontend folder, install from package.json and run the project.

```sh
$ cd frontned
$ npm install
```
Then run the frontend project.
```sh
$ npm start
```
This command will open the project in the browser. Be sure to run the backend project first. This is what the page looks like. Click on the button to change the color swatches.

![](https://raw.githubusercontent.com/ridwanrahman/ridwanrahman.github.io/master/images/React-App.png)

