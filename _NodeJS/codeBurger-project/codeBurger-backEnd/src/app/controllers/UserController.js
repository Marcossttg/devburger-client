import { v4 } from 'uuid'

import User from '../models/User'
/*
 Padrão MVC nos controles tem este padrão
 store => Cadastra ou Adicina
 index =>  Listar vários
 show => Listar apenas UM
 update => Atualizar 
 delete => Deletar
 */

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    })
    return response.status(201).json({ id: user.id, name, email, admin })
  }
}

export default new UserController()
