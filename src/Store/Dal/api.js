const url = "http://localhost:3100"
export const pathImages = "http://localhost:3100/imagesProduct/"
export const pathOrdersImage = "http://localhost:3100/imagesOrders/"
export const pathOrdersDataBase = "http://localhost:3100/imagesDataBase/"


//users

async function toRegister(registerInputsDetails) {
  const response = await fetch(`${url}/users/`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([registerInputsDetails]),
  })
  return response.json()
}

async function toLogin(loginUserDetails) {
  const response = await fetch(`${url}/users/login`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([loginUserDetails]),
  })
  return response.json()
}

async function toUpdate(detialsUpdate, userId, userEmail) {
  const response = await fetch(`${url}/users`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([detialsUpdate, userId, userEmail]),
  })
  return response.json()
}




// products

async function getProducts(isAdmin) {
  const data = await fetch(`${url}/products${isAdmin ? "/admin" : ""}`)
  const products = await data.json()
  return products
}

async function getProductById(id) {
  const data = await fetch(`${url}/products/${id}`)
  const product = await data.json()
  return product
}

async function getCategorys() {
  const data = await fetch(`${url}/categorys`)
  const categorys = await data.json()
  return categorys
}

async function addProdcut(product) {
  const response = await fetch(`${url}/products`, {
    method: "POST",
    body: product
  })
  return response.json()
}

async function editDataProduct(product) {
  const response = await fetch(`${url}/products`, {
    method: "PUT",
    body: product
  })
  return response.json()
}

async function deleteProduct(id, active) {
  const response = await fetch(`${url}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(active)
  })
  return response.json()
}





// orders

async function getOrdersByUser(userId) {
  const data = await fetch(`${url}/orders/?ordersUser=${userId}`)
  const ordersOfUser = await data.json()
  return ordersOfUser
}

async function getAllOrders() {
  const data = await fetch(`${url}/orders`)
  const orders = await data.json()
  return orders
}

async function updateStatusOrder(orderId, statusId) {
  const response = await fetch(`${url}/orders`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([orderId, statusId])
  })
  return response.json()
}

async function getStatusOrder(orderId) {
  const data = await fetch(`${url}/orders/?statusOrder=${orderId}`)
  const status = await data.json()
  return status
}

async function sendOrder(orderCompletionDetails, userId, totalPrice, products) {
  const response = await fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([orderCompletionDetails, userId, totalPrice, products])
  })
  return response.json()
}

async function getLastUserAddress(userId) {
  const data = await fetch(`${url}/orders/?userAddress=${userId}`)
  const lastUserAddress = await data.json()
  return lastUserAddress
}

async function sendImages(images){
  const response = await fetch(`${url}/images`, {
    method: "POST",
    body: images
  })
  return response.json()
}





// recommendation

async function getUsersRecommendations() {
  const data = await fetch(`${url}/recommendations`)
  const recommendations = await data.json()
  return recommendations
}

async function addRecommendation(newRecommendation, userId) {
  const response = await fetch(`${url}/recommendations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([newRecommendation, userId]),
  })
  return response.json()
}

async function deleteRecommendation(userDetails, recommendationId) {
  const response = await fetch(`${url}/recommendations`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([userDetails, recommendationId]),
  })
  return response.json()
}

export {
  toLogin,
  toRegister,
  getProducts,
  getProductById,
  getCategorys,
  sendOrder,
  getLastUserAddress,
  getOrdersByUser,
  getAllOrders,
  updateStatusOrder,
  getStatusOrder,
  sendImages,
  toUpdate,
  addProdcut,
  editDataProduct,
  addRecommendation,
  getUsersRecommendations,
  deleteRecommendation,
  deleteProduct,
}
