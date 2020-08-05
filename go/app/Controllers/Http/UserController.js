'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }){
    //only filtra, all não.
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
