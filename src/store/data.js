import normalize from '../util/normalize'

// Seed data
const seed_data = {
  users: [
    {
      id: 1,
      email: "demo@user.com",
      username: "demouser",
      first_name: "Demo",
      last_name: "User",
      password: "password"
    },
    {
      id: 2,
      email: "ned@user.com",
      username: "neduser",
      first_name: "Ned",
      last_name: "User",
      password: "password"
    }
  ],
  products: [
      {
        id: 1,
        name: "Apple Air Tag",
        description: "Keep track of and find your items alongside friends and devices in the Find My app. Simple one-tap setup instantly connects AirTag with your iPhone or iPad",
        price: 28.99,
        image_url: "https://m.media-amazon.com/images/I/713xuNx00oS._AC_SX679_.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy Buds Pro",
      description: "Experience rich, immersive sound with the Samsung Galaxy Buds Pro. These wireless earbuds offer intelligent noise cancellation and clear call quality.",
      price: 149.99,
      image_url: "https://nextrift.com/wp-content/uploads/2021/02/samsung-galaxy-buds-pro-review-1.jpg"
      },
      {
      id: 3,
      name: "Sony WH-1000XM4 Wireless Headphones",
      description: "Enjoy industry-leading noise cancellation and exceptional sound quality with Sony's WH-1000XM4 headphones. Perfect for music lovers and travelers.",
      price: 279.99,
      image_url: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg"
      },
      {
      id: 4,
      name: "Fitbit Versa 3 Smartwatch",
      description: "Stay active and track your fitness goals with the Fitbit Versa 3. This smartwatch offers built-in GPS, heart rate monitoring, and more.",
      price: 199.95,
      image_url: "https://m.media-amazon.com/images/I/61ZXwnqqOuS.jpg"
      },
      {
      id: 5,
      name: "DJI Mavic Air 2 Drone",
      description: "Capture stunning aerial footage with the DJI Mavic Air 2 drone. It features 4K video, intelligent shooting modes, and extended flight time.",
      price: 799.00,
      image_url: "https://www1.djicdn.com/cms/uploads/c323a1ef546e5e8b8e15bac5974dc217@374*374.jpg"
      },
      {
      id: 6,
      name: "Google Nest Hub Max",
      description: "Transform your home with the Google Nest Hub Max. It's a smart display with a built-in camera for video calls, smart home control, and more.",
      price: 229.00,
      image_url: "https://images.thdstatic.com/productImages/fc6c4af4-867f-4fd8-9b16-f1bf6668a57f/svn/charcoal-google-smart-speakers-and-displays-vbga02485-64_600.jpg"
      },
      {
      id: 7,
      name: "Bose QuietComfort 35 II Wireless Headphones",
      description: "Experience world-class noise cancellation and premium audio quality with Bose QuietComfort 35 II headphones. Ideal for travel and relaxation.",
      price: 299.00,
      image_url: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png"
      },
      {
      id: 8,
      name: "Apple Watch Series 6",
      description: "Stay connected and monitor your health with the Apple Watch Series 6. It offers features like ECG, blood oxygen measurement, and more.",
      price: 399.00,
      image_url: "https://i5.walmartimages.com/seo/Apple-Watch-Series-6-GPS-44mm-Silver-Aluminum-Case-with-White-Sport-Band-Regular_5fbbb3d1-bdb2-4372-b5df-138aeee0a4f8.e5769be75dba0e3e3006822e3c54b562.jpeg"
      },
      {
      id: 9,
      name: "GoPro HERO9 Black",
      description: "Capture stunning 5K video and 20MP photos with the GoPro HERO9 Black. It's rugged, waterproof, and perfect for adventure enthusiasts.",
      price: 349.00,
      image_url: "https://m.media-amazon.com/images/I/715j8kZGD0L.jpg"
      },
      {
      id: 10,
      name: "Samsung 55-Inch 4K QLED Smart TV",
      description: "Immerse yourself in brilliant 4K visuals with this Samsung QLED Smart TV. It features Quantum Dot technology and a sleek design.",
      price: 999.99,
      image_url: "https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_SX679_.jpg"
      },
      {
      id: 11,
      name: "Sony PlayStation 5 Console",
      description: "Experience the next generation of gaming with the Sony PlayStation 5. It offers incredible graphics, fast load times, and a vast game library.",
      price: 499.99,
      image_url: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SX679_.jpg"
      },
      {
      id: 12,
      name: "Nespresso VertuoPlus Coffee and Espresso Maker",
      description: "Brew delicious coffee and espresso with the Nespresso VertuoPlus. It uses barcode recognition to create the perfect cup every time.",
      price: 149.00,
      image_url: "https://m.media-amazon.com/images/I/71Ok72zolML._AC_UF894,1000_QL80_.jpg"
      },
      {
      id: 13,
      name: "Samsung Galaxy Tab S7",
      description: "Get productive with the Samsung Galaxy Tab S7. It's a versatile tablet with a powerful processor, S Pen support, and a stunning display.",
      price: 649.99,
      image_url: "https://image-us.samsung.com/SamsungUS/home/mobile/tablets/galaxy-tab-s7-fe/GalaxyTabS7plusLite_Combo_001_MysticBlack_1600x1200.png?$product-details-jpg$"
      },
      {
      id: 14,
      name: "Breville Smart Oven Air Fryer",
      description: "Cook and air fry with precision using the Breville Smart Oven Air Fryer. It offers multiple cooking functions in one compact appliance.",
      price: 399.95,
      image_url: "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BOV900/BOV900US_carousel1.jpg"
      },
      {
      id: 15,
      name: "Amazon Echo Show 10 (3rd Gen)",
      description: "Stay connected and entertained with the Amazon Echo Show 10. Its screen follows you as you move, making video calls and content viewing effortless.",
      price: 249.99,
      image_url: "https://m.media-amazon.com/images/I/61GYC8QE9pL._AC_UF1000,1000_QL80_.jpg"
      },
      {
      id: 16,
      name: "Canon EOS 90D DSLR Camera",
      description: "Capture stunning photos and 4K videos with the Canon EOS 90D DSLR camera. It's perfect for photography enthusiasts and content creators.",
      price: 1199.00,
      image_url: "https://m.media-amazon.com/images/I/51qd93JCYgL._AC_.jpg"
      },
      {
      id: 17,
      name: "Anker PowerCore 26800 Portable Charger",
      description: "Keep your devices charged on the go with the Anker PowerCore 26800 portable charger. It offers high-capacity charging in a compact design.",
      price: 59.99,
      image_url: "https://www.ankeromanstore.com/cdn/shop/products/AN.A1268H12.BK_aee995ec-882b-485a-81ae-fbfc0c8561fa_270X270_crop_center.jpg?v=1643197006"
      },
      {
      id: 18,
      name: "LG OLED65CXPUA 65-Inch 4K OLED TV",
      description: "Experience cinematic visuals with the LG OLED65CXPUA 4K OLED TV. It offers deep blacks, vibrant colors, and smart TV capabilities.",
      price: 1999.99,
      image_url: "https://m.media-amazon.com/images/I/71lFbCRH76L.jpg"
      }
    ]
}


const LOAD_DATA = 'data/LOAD_DATA';
const ADD_DATA = 'data/ADD_DATA';

// --------------Action Creators----------------
export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data
  }
}

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data
  }
}
// --------------Thunk Creators----------------
// Load all data
export const thunkLoadData = () => {
  const response = seed_data;
  return loadData(response);
}

export const signup = (id, email, username, first_name, last_name, password) => async (dispatch) => {
  // send post request to the backend
  const response = {
    id,
    email,
    username,
    first_name,
    last_name,
    password
  };
  if (response) {
    dispatch(addData(response));
    return response;
  } else {
    return ["An error occurred. Please try again."];
  }
}

// --------------Initial State----------------
const initialState = {
  seed_data
};

// --------------Reducer----------------
const dataReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_DATA:
      return { data: action.payload };
    case ADD_DATA:
      newState.users = {...state.users, [action.payload.id]: action.payload};
      return newState;
    default:
      return state;
  }
};

export default dataReducer;
