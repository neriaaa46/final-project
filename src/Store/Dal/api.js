const url = "http://localhost:3100"
export const pathImages = "http://localhost:3100/imagesProduct/"
export const pathOrdersImage = "http://localhost:3100/imagesCart/"
export const pathOrdersDataBase = "http://localhost:3100/imagesOrders/"

// export const pathImages = "http://127.0.0.1:5000//image_products/"
// export const pathOrdersImage = "http://127.0.0.1:5000//images_cart/"
// export const pathOrdersDataBase = "http://127.0.0.1:5000//images_orders/"


//users

async function toRegister(registerInputsDetails) {
  const response = await fetch(`${url}/users`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([registerInputsDetails]),
  })
  return response.json()
}


async function toLogin(loginUserDetails) {
  const response = await fetch(`${url}/users/login`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'http://localhost:3100'
    },
    credentials: "include",
    body: JSON.stringify([loginUserDetails])
  })
  return response.json()
}


async function toUpdate(detialsUpdate, userId, userEmail) { 
  const response = await fetch(`${url}/users`, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify([detialsUpdate, userId, userEmail])
  })
  return response.json()
}




//products

async function getProducts(isAdmin) { 
  const data = await fetch(`${url}/products${isAdmin ? "/admin" : ""}`,{ 
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'
  }) 
  const products = await data.json()
  return products
}


async function getProductById(id) {
  const data = await fetch(`${url}/products/${id}`, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    }
  })
  const product = await data.json()
  return product
}


async function getCategorys() {
  const data = await fetch(`${url}/categorys`, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'
  })
  const categorys = await data.json()
  return categorys
}


async function addProdcut(product) {
  const response = await fetch(`${url}/products`, {
    method: "POST",
    credentials: 'include',
    body: product
  })
  return response.json()
}


async function editDataProduct(product) {
  const response = await fetch(`${url}/products`, {
    method: "PUT",
    credentials: 'include',
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
    credentials: 'include',
    body: JSON.stringify(active)
  })
  return response.json()
}




//orders

async function getOrdersByUser(userId) { 
  const data = await fetch(`${url}/orders/?ordersUser=${userId}`,{
  method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'})
  const ordersOfUser = await data.json()
  return ordersOfUser
}


async function getAllOrders() { 
  const data = await fetch(`${url}/orders`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'})
  const orders = await data.json()
  return orders
}


async function searchOrdersby(searchby, searchValue){
  const data = await fetch(`${url}/orders/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include', 
    body: JSON.stringify([searchby, searchValue])
  })
  const orders = await data.json()
  return orders
}


async function getLastUserAddress(userId) { 
  const data = await fetch(`${url}/orders/?userAddress=${userId}`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'})
  const lastUserAddress = await data.json()
  return lastUserAddress
}


async function getStatusOrder(orderId) { 
  const data = await fetch(`${url}/orders/?statusOrder=${orderId}`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'})
  const status = await data.json()
  return status
}


async function updateStatusOrder(orderId, statusId) { 
  const response = await fetch(`${url}/orders`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify([orderId, statusId])
  })
  return response.json()
}


async function sendOrder(orderCompletionDetails, userId, totalPrice, products) { 
  const response = await fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify([orderCompletionDetails, userId, totalPrice, products])
  })
  return response.json()
}


async function sendImages(images){
  const response = await fetch(`${url}/images`, {
    method: "POST",
    body: images
  })
  return response.json()
}


async function sendEmail(user, cart){ 
  const response = await fetch(`${url}/email` , {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    }, 
    credentials: 'include',
    body: JSON.stringify([user, cart])
  })
  return response.json()
}





//recommendation

async function getUsersRecommendations(isAdmin) {
  const data = await fetch(`${url}/recommendations${isAdmin ? "/admin" : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }) 
  const recommendations = await data.json()
  return recommendations
}


async function addRecommendation(newRecommendation, userId) { 
  const response = await fetch(`${url}/recommendations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify([newRecommendation, userId])
  })
  return response.json()
}


async function deleteRecommendation(userDetails, recommendationId) { 
  const response = await fetch(`${url}/recommendations`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify([userDetails, recommendationId])
  })
  return response.json()
}


async function changeActiveRecommendation(recommendationId, active){ 
  const response = await fetch(`${url}/recommendations`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify([recommendationId, active])
  })
  return response.json()
}


async function contactUs(contactUsDetails){
  const response = await fetch(`${url}/email/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([contactUsDetails])
  })
  console.log(response);
  return response.json()
}








// // flask

// // users

// async function toRegister(registerInputsDetails) {
//   const response = await fetch(`http://127.0.0.1:5000///users`, {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(registerInputsDetails),
//   })
//   return response.json()
// }

// async function toLogin(loginUserDetails) {
//   const response = await fetch(`http://127.0.0.1:5000///users/login`, {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(loginUserDetails)
//   })
//   return response.json()
// }

// async function toUpdate(detialsUpdate, userId, userEmail) { 
//   const response = await fetch(`http://127.0.0.1:5000///users`, {
//     method: "PUT", 
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([detialsUpdate, userId, userEmail])
//   })
//   return response.json()
// }




// //products

// async function getProducts(isAdmin) { 
//   const data = await fetch(`http://127.0.0.1:5000///products${isAdmin ? "/admin" : ""}`,{ 
//     method: "GET", 
//     headers: {
//       "Content-Type": "application/json",
//     }
//   }) 
//   const products = await data.json()
//   return products
// }

// async function getProductById(id) {
//   const data = await fetch(`http://127.0.0.1:5000///products/${id}`, {
//     method: "GET", 
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//   const product = await data.json()
//   return product
// }

// async function getCategorys() {
//   const data = await fetch(`http://127.0.0.1:5000///categories`, {
//     method: "GET", 
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//   const categorys = await data.json()
//   return categorys
// }

// async function addProdcut(product) {
//   const response = await fetch(`http://127.0.0.1:5000///products`, {
//     method: "POST",
//     body: product
//   })
//   return response.json()
// }

// async function editDataProduct(product) {
//   const response = await fetch(`http://127.0.0.1:5000///products`, {
//     method: "PUT",
//     body: product
//   })
//   return response.json()
// }

// async function deleteProduct(id, active) { 
//   const response = await fetch(`http://127.0.0.1:5000///products/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(active)
//   })
//   return response.json()
// }




// // orders

// async function getOrdersByUser(userId) { 
//   const data = await fetch(`http://127.0.0.1:5000///orders?ordersUser=${userId}`,{
//   method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//    })
//   const ordersOfUser = await data.json()
//   return ordersOfUser
// }

// async function getAllOrders() { 
//   const data = await fetch(`http://127.0.0.1:5000///orders`,{
//     method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//   })
//   const orders = await data.json()
//   return orders
// }

// async function searchOrdersby(searchby, searchValue){
//   const data = await fetch(`http://127.0.0.1:5000///orders/search`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([searchby, searchValue])
//   })
//   const orders = await data.json()
//   return orders
// }

// async function getLastUserAddress(userId) { 
//   const data = await fetch(`http://127.0.0.1:5000///orders?userAddress=${userId}`,{
//     method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     })
//   const lastUserAddress = await data.json()
//   return lastUserAddress
// }


// async function getStatusOrder(orderId) { 
//   const data = await fetch(`http://127.0.0.1:5000///orders?statusOrder=${orderId}`,{
//     method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//   })
//   const status = await data.json()
//   return status
// }

// async function updateStatusOrder(orderId, statusId) { 
//   const response = await fetch(`http://127.0.0.1:5000///orders`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([orderId, statusId])
//   })
//   return response.json()
// }

// async function sendOrder(orderCompletionDetails, userId, totalPrice, products) { 
//   const response = await fetch(`http://127.0.0.1:5000///orders`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([orderCompletionDetails, userId, totalPrice, products])
//   })
//   return response.json()
// }

// async function sendImages(images){
//   const response = await fetch(`http://127.0.0.1:5000///images`, {
//     method: "POST",
//     body: images
//   })
//   return response.json()
// }

// async function sendEmail(user, cart){ 
//   const response = await fetch(`http://127.0.0.1:5000///email` , {
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json"
//     }, 
//     body: JSON.stringify([user, cart])
//   })
//   return response.json()
// }



// // recommendation


// async function getUsersRecommendations(isAdmin) {
//   const data = await fetch(`http://127.0.0.1:5000///recommendations${isAdmin ? "/admin" : ""}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   }) 
//   const recommendations = await data.json()
//   return recommendations
// }


// async function addRecommendation(newRecommendation, userId) { 
//   const response = await fetch(`http://127.0.0.1:5000///recommendations`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([newRecommendation, userId])
//   })
//   return response.json()
// }


// async function deleteRecommendation(userDetails, recommendationId) {
//   const response = await fetch(`http://127.0.0.1:5000///recommendations`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(recommendationId)
//   })
//   return response.json()
// }


// async function changeActiveRecommendation(recommendationId, active){ 
//   const response = await fetch(`http://127.0.0.1:5000///recommendations`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([recommendationId, active])
//   })
//   return response.json()
// }


// async function contactUs(contactUsDetails){
//   const response = await fetch(`http://127.0.0.1:5000///email/contact`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([contactUsDetails])
//   })
//   return response.json()
// }



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
  searchOrdersby,
  updateStatusOrder,
  getStatusOrder,
  sendImages,
  sendEmail,
  toUpdate,
  addProdcut,
  editDataProduct,
  addRecommendation,
  getUsersRecommendations,
  deleteRecommendation,
  changeActiveRecommendation,
  deleteProduct,
  contactUs
}
