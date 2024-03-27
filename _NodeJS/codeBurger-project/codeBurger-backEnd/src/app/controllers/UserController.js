import { v4 } from 'uuid'

import * as Yup from 'yup'

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
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password_hash: Yup.string().required().min(3),
      admin: Yup.boolean(),
    })

    /*     
    //Desta forma, com if. Retorna um erro, 
    //mas não especifica qual tipo de erro. 
    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Check that your data is correct' })
    } 
    */

    //Para serem retornados os erros nos campos, devemos utilizar o schema.
    //validataSync(request.body,  {abortEarly: false}  ). Mas para ser possível
    //retornar todos os campos de cada campo devemos colocar como segundo parâmetro
    //o {abortEarly: false}
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      response.status(400).json({ error: err.errors })
    }

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
