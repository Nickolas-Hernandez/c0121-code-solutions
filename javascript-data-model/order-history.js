var orderHistory = [
  {
    orderDetails: {
      orderPlaced: {
        month: 'August',
        day: 4,
        year: 2020
      },
      orderTotal: 34,
      orderNumber: '11439416898772232'
    },
    itemsPurchased: [
      {
        productName: 'Javascript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        productCategory: 'books',
        price: 31.55,
        returnBy: {
          month: 'September',
          date: 7,
          year: 2020
        }
      }
    ],
    deliveryInfo: {
      shipTo: 'JS Masher',
      deliveredDate: {
        month: 'August',
        day: 8,
        year: 2020,
        handedToResident: false
      }
    }
  },
  {
    orderDetails: {
      orderPlaced: {
        month: 'July',
        day: 19,
        year: 2020
      },
      orderTotal: 44.53,
      orderNumber: '11399842681280257'
    },
    itemsPurchased: [
      {
        productName: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        productCategory: 'books',
        price: 41.33,
        returnBy: {
          month: 'August',
          date: 19,
          year: 2020
        }
      }
    ],
    deliveryInfo: {
      shipTo: 'JS Masher',
      deliveredDate: {
        month: 'July',
        day: 20,
        year: 2020,
        handedToResident: true
      }
    }
  },
  {
    orderDetails: {
      orderPlaced: {
        month: 'July',
        day: 4,
        year: 2020
      },
      orderTotal: 17.22,
      orderNumber: '11428755579059409'
    },
    itemsPurchased: [
      {
        productName: 'Gamecube Controller Adapter...',
        productCategory: 'electronics',
        price: 15.98,
        returnBy: {
          month: 'August',
          date: 5,
          year: 2020
        }
      }
    ],
    deliveryInfo: {
      shipTo: 'JS Masher',
      deliveredDate: {
        month: 'July',
        day: 7,
        year: 2020,
        handedToResident: true
      }
    }
  },
  {
    orderDetails: {
      orderPlaced: {
        month: 'July',
        day: 3,
        year: 2020
      },
      orderTotal: 138.93,
      orderNumber: '11328831772648248'
    },
    itemsPurchased: [
      {
        productName: 'Gamecube Controller Adapter - Super Smash Bros. Edition (Nintendo Swithc)',
        productCategory: 'electronics',
        price: 94.95,
        returnBy: {
          month: 'August',
          date: 4,
          year: 2020
        }
      },
      {
        productName: 'The Art of SQL',
        author: 'Faroult, Stpehanie',
        productCategory: 'books',
        price: 33.99,
        returnBy: {
          month: 'August',
          date: 4,
          year: 2020
        }
      }
    ],
    deliveryInfo: {
      shipTo: 'JS Masher',
      deliveredDate: {
        month: 'July',
        day: 5,
        year: 2020,
        handedToResident: false
      }
    }
  }
];

console.log('Value of order history: ', orderHistory);
