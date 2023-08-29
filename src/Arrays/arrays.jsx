

// Categorries cards arrays

const CardsArray = [
    {
        title: "All Users",
        path: '/users',
        user_count: "30",
        icon: 'fa-solid fa-user'
    },
    {
        title: "All User Views",
        path: '/userviews',
        user_count: "30",
        icon: 'fa-solid fa-envelope'
    },
    {
        title: "Add Birthday Cakes",
        path: '/addbirthdaycakes',
        user_count: "30",
        icon: 'fa-solid fa-cake-candles'
    },
    {
        title: "Add Wedding Cakes",
        path: '/addweddingcakes',
        user_count: "30",
        icon: 'fa-solid fa-cake-candles'
    },
    {
        title: "Add Party Cakes",
        path: '/addpartycakes',
        user_count: "30",
        icon: 'fa-solid fa-cake-candles'
    },
    {
        title: "Add Cup Cakes",
        path: '/addcupcakes',
        user_count: "30",
        icon: 'fa-solid fa-cake-candles'
    }
]


// sidebar routes
const routes = [
    {
      path: '/',
      name: "Home",
      icon: "fa-solid fa-user"
    },
    {
        path: '/users',
        name: "All Users",
        icon: "fa-solid fa-house"
      },
      {
        path: '/userviews',
        name: "Users Views",
        icon: "fa-solid fa-envelope"
      },
    {
      path: '/addbirthdaycakes',
      name: "Add Birth Day Cakes",
      icon: "fa-solid fa-cake-candles"
    },
    {
      path: '/addpartycakes',
      name: "Add Party Cakes",
      icon: "fa-solid fa-cake-candles"
    },
    {
      path: '/addcupcakes',
      name: "Add Cup Cakes",
      icon: "fa-solid fa-cake-candles"
    },
    {
      path: '/addweddingcakes',
      name: "Add Weeding Cakes",
      icon: "fa-solid fa-cake-candles"
    }
  ];

export {CardsArray, routes};