# Backend README

### API methods

#### Users

HTTP METHOD | CRUD | /users | FUNCTION
----------- | ---- | ------ | --------
GET | Read | /users | get list of all users
POST | Create | /users/add | add a user with JSON body

#### Live Classroom

HTTP METHOD | CRUD | /users | FUNCTION
----------- | ---- | ------ | --------
GET | Read | /qa | get list of all live classrooms
GET | Read | /qa/:code | get specific live classroom by code *e.g. address 'http://www.example.com/qa/1234'*
POST | Create | /qa/add | create a live classroom with JSON body
POST | Update | /qa/update/:code | update a live classroom by class code
DELETE | Delete | /qa/:code | delete a live classroom by class code