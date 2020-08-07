'use strict'

const FileController = require("../app/Controllers/Http/FileController")

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('password', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

Route.post('/files', 'FileController.store')
Route.group(()=> {
  Route.get('/files/:id', 'FileController.show')

  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly()

}).middleware(['auth'])


