'use strict'

const Bank = use('App/Models/Bank')
const Adress = use('App/Models/Address')
const PetShop = use('App/Models/PetShop')
const Project = use('App/Models/Project')

class ProjectController {

  async index ({ request, response, view }) {
    // const projects = await Project.query().with('user').fetch()
    const petshops = await PetShop
    .query()
    .with('banks')
    .with('user')
    .with('address')
    .with('files')
    .fetch()

  // const media = await Database.from('ratings').avg('note as media')

  return response.send({ petshops })
  }

  async store ({ request, response, auth }) {

  const {address, bank, petshop} = request.all()


   const createRegisterAdress = await Adress.create({...address})

  const address_id = createRegisterAdress.id

  const credateRegisterPetShop = await PetShop.create({...petshop, address_id, status: "active"})

  const createRegisterBank = await Bank.create({...bank,  petshop_id: credateRegisterPetShop.id})

  return response.send([createRegisterBank,  createRegisterAdress, credateRegisterPetShop])


    // const data = request.only(['title', 'description'])

    // const project = await Project.create({...data, user_id: auth.user.id})

    // return project
  }

  async show ({ params, request, response, view }) {
    const project = await Project.findOrFail(params.id)

    await project.load('user')
    await project.load('tasks')

    return project
  }

  async update ({ params, request }) {
    const project = await Project.findOrFail(params.id)
    const data = request.only(['title', 'description'])

    project.merge(data)

    await project.save()

    return project
  }

  async destroy ({ params, request, response }) {
    const project = await Project.findOrFail(params.id)

    await project.delete()
  }
}

module.exports = ProjectController
