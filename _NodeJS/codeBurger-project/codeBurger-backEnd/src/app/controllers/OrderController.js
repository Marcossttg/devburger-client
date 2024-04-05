import * as Yup from 'yup'
import Product from '../models/Product'
import Category from '../models/Category'

import Order from '../schemas/Order' //**teste**

class OrderController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          })
        ),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const productsId = request.body.products.map((product) => product.id)

    console.log(productsId)

    const updatedProducts = await Product.findAll({
      where: {
        id: productsId,
      },
      include: {
        model: Category,
        as: 'category',
        attributes: ['name'],
      },
    })

    console.log(updatedProducts)

    const editedProduct = updatedProducts.map((product) => {
      const productIndex = request.body.products.findIndex(
        (requestProduct) => requestProduct.id === request.product
      )

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: request.body.products[productIndex].quantity,
      }
      return newProduct
    })

    console.log(editedProduct)

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
      products: editedProduct,
    }

    return response.status(201).json(editedProduct)
  }
}

export default new OrderController()
