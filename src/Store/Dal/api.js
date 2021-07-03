const users = [
  {
    id: 1,
    admin: true,
    firstName: "נריה",
    lastName: "סיון",
    email: "neriaaa46@gmail.com",
    password: "ns111222",
  },
  {
    id: 2,
    admin: false,
    firstName: "יעקוב",
    lastName: "קאסה",
    email: "yakov@gmail.com",
    password: "yk111222",
  },
  {
    id: 3,
    admin: false,
    firstName: "אלומה",
    lastName: "סיון",
    email: "aluma@gmail.com",
    password: "as111222",
  },
]

const products = [
  {
    id: 1,
    name: "בלוק עץ ריבוע",
    category: "הדפסה על מוצר",
    size: "10x10",
    description: `- הדפסה על בלק עץ בגודל 10*10 ס"מ.
    - הדפסה על גבי נייר סמי-מט/מבריק איכותי המודבק ללוח עץ בעובי 2.8 ס"מ.
    - אנו לא מוסיפים טקסטים לתמונות אך ניתן לשלוח אלינו קבצים עם טקסטים מוטמעים בתמונות.
    - המחיר אינו כולל משלוח, ניתן לבצע איסוף עצמי בחינם.
    `,
    price: "15",
    quntityOfImages: "1",
    image: "/img/product1.jpg",
  },

  {
    id: 2,
    name: "בלוק עץ ריבוע",
    category: "הדפסה על מוצר",
    size: "15x15",
    description: `- הדפסה על בלק עץ בגודל 15*15 ס"מ.
    - הדפסה על גבי נייר סמי-מט/מבריק איכותי המודבק ללוח עץ בעובי 2.8 ס"מ.
    - אנו לא מוסיפים טקסטים לתמונות אך ניתן לשלוח אלינו קבצים עם טקסטים מוטמעים בתמונות.
    - המחיר אינו כולל משלוח, ניתן לבצע איסוף עצמי בחינם.
    `,
    price: "25",
    quntityOfImages: "1",
    image: "/img/product2.jpg",
  },

  {
    id: 3,
    name: "בלוק עץ ריבוע",
    category: "הדפסה על מוצר",
    size: "20x20",
    description: `- הדפסה על בלק עץ בגודל 20*20 ס"מ.
    - הדפסה על גבי נייר סמי-מט/מבריק איכותי המודבק ללוח עץ בעובי 2.8 ס"מ.
    - אנו לא מוסיפים טקסטים לתמונות אך ניתן לשלוח אלינו קבצים עם טקסטים מוטמעים בתמונות.
    - המחיר אינו כולל משלוח, ניתן לבצע איסוף עצמי בחינם.
    `,
    price: "40",
    quntityOfImages: "1",
    image: "/img/product3.png",
  },
];


const orders = [
    {
      orderId:1,
      userId:2,
      firstName:"נריה",
      lastName: "סיון",
      email:"neriaaa46@gmail.com",
      address: "רמת גן, הרקפת 20",
      zip: "00645433",
      phone: "0526665551",
      date: "13.5.14",
      totalPrice: 150,
      statusName: "ממתין",
      products: [
        {
          id: 1,
          name: "בלוק עץ ריבוע",
          size: "10x10",
          quntityOfImages: "1",
          price:"15",
          image: "/img/product1.jpg",
        },
        {
          id: 2,
          name: "בלוק עץ ריבוע",
          size: "15x15",
          quntityOfImages: "1",
          price:"25",
          image: "/img/product2.jpg",
        },
      ],
    },
    {
        orderId:2,
        userId:2,
        firstName:"יעקוב",
        lastName: "קאסה",
        email:"yakov@gmail.com",
        address: "רמת גן, הרקפת 20",
        zip: "00645433",
        phone: "0526665551",
        date: "20.4.16",
        totalPrice: 15,
        statusName: "בהכנה",
        products: [
          {
            id: 1,
            name: "בלוק עץ ריבוע",
            size: "10x10",
            quntityOfImages: "1",
            price:"15",
            image: "/img/product1.jpg",
          }
        ],
      },
      {
        orderId:3,
        userId:2,
        firstName:"יעקוב",
        lastName: "קאסה",
        email:"yakov@gmail.com",
        address: "רמת גן, הרקפת 20",
        zip: "00645433",
        phone: "0526665551",
        date: "13.8.17",
        totalPrice: 25,
        statusName: "מוכן",
        products: [
          {
            id: 2,
            name: "בלוק עץ ריבוע",
            size: "15x15",
            quntityOfImages: "1",
            price:"25",
            image: "/img/product2.jpg",
          }
        ],
      },
      {
        orderId:4,
        userId:2,
        firstName:"יעקוב",
        lastName: "קאסה",
        email:"yakov@gmail.com",
        address: "רמת גן, הרקפת 20",
        zip: "00645433",
        phone: "0526665551",
        date: "9.10.20",
        totalPrice: 80,
        statusName: "נשלח",
        products: [
          {
            id: 1,
            name: "בלוק עץ ריבוע",
            size: "10x10",
            quntityOfImages: "1",
            price:"15",
            image: "/img/product1.jpg",
          },
          {
            id: 2,
            name: "בלוק עץ ריבוע",
            size: "15x15",
            quntityOfImages: "1",
            price:"25",
            image: "/img/product2.jpg",
          },
          {
            id: 3,
            name: "בלוק עץ ריבוע",
            size: "20x20",
            quntityOfImages: "1",
            price:"40",
            image: "/img/product3.png",
          },
        ],
      }
  ]


const recommendations = [
    {
        id:1,
        user:{
            id:2,
            firstName:"יעקוב",
            lastName:"קאסה",
        },
        text:`שירות מצויין מחירים נוחים`
    },
    {
        id:2,
        user:{
            id:3,
            firstName:"אלומה",
            lastName:"סיון",
        },
        text:`חווית קנייה מצויינת ההזמנה הגיעה ממש מהר `
    }

]

function addUserToDal(user) {
  users.push({id:users.length+1,admin:false,...user})
  console.log(users)
}

function isNotExist(newEmailUser) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i]["email"] === newEmailUser) {
        reject(true);
      }
    }
    resolve(false);
  });
}

function isUserExist(loginUserDetails) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < users.length; i++) {
      if (
        loginUserDetails["email"] === users[i]["email"] &&
        loginUserDetails["password"] === users[i]["password"]
      ) {
        resolve(users[i]);
      }
    }
    reject(false);
  });
}

function getProducts() {
  return new Promise((resolve) => {
    resolve(products);
  });
}

function getProductById(id) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i]["id"] === Number(id)) {
        resolve(products[i]);
      }
    }
    reject({});
  });
}

function sentNewOrder(newOrder){
    orders.push({orderId:orders.length+1,...newOrder})
    console.log(orders)
}

function getLastUserAddress(userId){
    return new Promise((resolve, reject) =>{

        const orderCompletionDetails = orders.map(order =>{
            if(order.userId === userId){
                return {address:order.address, zip:order.zip, phone:order.phone}
            }
        })
        if(orderCompletionDetails.length!==0){
            resolve(orderCompletionDetails[orderCompletionDetails.length-1])
        } else{
            reject()
        }
    })
}


function getOrdersByUser(userId){
    return new Promise((resolve, reject)=>{
        const orderOfUser = orders.filter(order=> order.userId === userId)
        if(orderOfUser.length!==0){
            resolve(orderOfUser)
        } else {
            reject([])
        }
    })
}


function getAllOrders(){
    return new Promise((resolve)=>{
       resolve(orders)
    })
}

function setStatusOrder(orderId, statusOrder){
    orders[orderId-1].statusName = statusOrder
}

function getStatusOrder(orderId){
    return new Promise((resolve) =>{
        const status = whichClassStatus(orders[orderId-1].statusName)
        resolve(status)
    })
}

function whichClassStatus(status){
    switch (status) {
        case "ממתין":
            status = "pending"
            break;
        case "בהכנה":
            status = "inProgress"
            break;
        case "מוכן":
            status = "ready"
            break;
        case "נשלח":
            status = "sent"
            break;
    
        default:
            status="pending"
            break;
    }

    return status
}


function UpdateDetailsUserDal(user){
    users[user.id-1] = {...users[user.id-1], ...user}
    console.log(users[user.id-1]);
   
}

function addProdcut(product){
    products.push({id:products.length+1,...product})
    console.log(products);
}


function addRecommendation(newRecommendation){
    recommendations.push({id:recommendations.length+1,...newRecommendation})
    console.log(recommendations);
}

function getUsersRecommendations(){
    return new Promise((resolve)=>{
        resolve(recommendations)
    })
}


export {addUserToDal, isNotExist, isUserExist, getProducts, getProductById,
     sentNewOrder, getLastUserAddress, getOrdersByUser, getAllOrders,
      setStatusOrder, getStatusOrder, UpdateDetailsUserDal, addProdcut,
       addRecommendation, getUsersRecommendations}
