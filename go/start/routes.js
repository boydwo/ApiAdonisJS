'use strict'

const FileController = require("../app/Controllers/Http/FileController")

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('password', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('password', 'ForgotPasswordController.update').validator('ResetPassword')

Route.post('/files', 'FileController.store')
Route.group(()=> {
  Route.get('/files/:id', 'FileController.show')

  Route.resource('projects', 'ProjectController').apiOnly().validator(new Map(
    [
      [
        ['projects.store'],['Project']
      ]
      // [
      //   ['projects.update'],['Project']
      // ],
    ]
  ))
  Route.resource('projects.tasks', 'TaskController').apiOnly().validator(new Map(
    [
      [
        ['projects.tasks.store'],['Task']
      ]
      // [
      //   ['projects.update'],['Project']
      // ],
    ]
  ))

}).middleware(['auth'])


