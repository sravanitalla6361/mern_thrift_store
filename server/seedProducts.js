require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

// ✅ Connect to MongoDB Atlas using .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.log(err));

const products = [
  {
    title: "Vintage Denim Jacket",
    description: "Oversized 90s denim jacket",
    price: 1499,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=1",
  },
  {
    title: "Retro Graphic Tee",
    description: "Loose fit vintage band t-shirt",
    price: 699,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=2",
  },
  {
    title: "Y2K Cargo Pants",
    description: "Baggy streetwear cargos",
    price: 1199,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=3",
  },
  {
    title: "Classic Converse Shoes",
    description: "High-top vintage sneakers",
    price: 1399,
    category: "Footwear",
    condition: "used",
    image: "https://picsum.photos/300?random=4",
  },
  {
    title: "Leather Biker Jacket",
    description: "Edgy thrift leather jacket",
    price: 2499,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=5",
  },
  {
    title: "Vintage Hoodie",
    description: "Oversized cozy hoodie",
    price: 999,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=6",
  },
  {
    title: "Plaid Flannel Shirt",
    description: "Grunge style flannel",
    price: 799,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=7",
  },
  {
    title: "Retro Sunglasses",
    description: "Y2K tinted shades",
    price: 499,
    category: "Accessories",
    condition: "used",
    image: "https://picsum.photos/300?random=8",
  },
  {
    title: "Vintage Nike Sneakers",
    description: "Old school sporty shoes",
    price: 1599,
    category: "Footwear",
    condition: "used",
    image: "https://picsum.photos/300?random=9",
  },
  {
    title: "Denim Mini Skirt",
    description: "Cute Y2K style skirt",
    price: 899,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=10",
  },
  {
    title: "Vintage Backpack",
    description: "Classic canvas backpack",
    price: 1099,
    category: "Accessories",
    condition: "used",
    image: "https://picsum.photos/300?random=11",
  },
  {
    title: "Chunky Boots",
    description: "Streetwear platform boots",
    price: 1999,
    category: "Footwear",
    condition: "used",
    image: "https://picsum.photos/300?random=12",
  },
  {
    title: "Oversized Blazer",
    description: "Thrift formal street look",
    price: 1399,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=13",
  },
  {
    title: "Vintage Cap",
    description: "Old school snapback",
    price: 399,
    category: "Accessories",
    condition: "used",
    image: "https://picsum.photos/300?random=14",
  },
  {
    title: "Corduroy Pants",
    description: "Soft vintage trousers",
    price: 999,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=15",
  },
  {
    title: "Retro Windbreaker",
    description: "Color-block sporty jacket",
    price: 1299,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=16",
  },
  {
    title: "Vintage Tote Bag",
    description: "Eco-friendly cloth bag",
    price: 499,
    category: "Accessories",
    condition: "used",
    image: "https://picsum.photos/300?random=17",
  },
  {
    title: "Classic White Sneakers",
    description: "Minimal everyday shoes",
    price: 1199,
    category: "Footwear",
    condition: "used",
    image: "https://picsum.photos/300?random=18",
  },
  {
    title: "Knitted Sweater",
    description: "Warm cozy vintage knit",
    price: 1099,
    category: "Clothing",
    condition: "used",
    image: "https://picsum.photos/300?random=19",
  },
  {
    title: "Vintage Watch",
    description: "Classic analog wrist watch",
    price: 1799,
    category: "Accessories",
    condition: "used",
    image: "https://picsum.photos/300?random=20",
  },


  
  {
    "title": "Vintage Denim Jacket",
    "description": "Oversized 90s washed denim jacket",
    "price": 1499,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1520975922284-9e0b1c3d8b55"
  },
  {
    "title": "Retro Graphic Tee",
    "description": "Loose fit vintage printed t-shirt",
    "price": 699,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1520975922203-bc6d6a7e4f6f"
  },
  {
    "title": "Y2K Baggy Cargo Pants",
    "description": "Streetwear oversized cargos",
    "price": 1199,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1583001809873-a128495da465"
  },
  {
    "title": "Classic High-Top Sneakers",
    "description": "Vintage canvas high tops",
    "price": 1399,
    "category": "Footwear",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    "title": "Leather Biker Jacket",
    "description": "Classic thrift leather jacket",
    "price": 2499,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5"
  },
  {
    "title": "Oversized Vintage Hoodie",
    "description": "Cozy worn-in hoodie",
    "price": 999,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1"
  },
  {
    "title": "Grunge Flannel Shirt",
    "description": "Classic plaid flannel",
    "price": 799,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    "title": "Y2K Retro Sunglasses",
    "description": "Tinted aesthetic shades",
    "price": 499,
    "category": "Accessories",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    "title": "Vintage Sport Sneakers",
    "description": "Old-school running shoes",
    "price": 1599,
    "category": "Footwear",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    "title": "Denim Mini Skirt",
    "description": "Y2K aesthetic skirt",
    "price": 899,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa"
  },
  {
    "title": "Canvas Vintage Backpack",
    "description": "Minimalist everyday bag",
    "price": 1099,
    "category": "Accessories",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    "title": "Chunky Platform Boots",
    "description": "Streetwear chunky boots",
    "price": 1999,
    "category": "Footwear",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1528701800489-20be3c1ea3ef"
  },
  {
    "title": "Oversized Vintage Blazer",
    "description": "Thrift formal look",
    "price": 1399,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1593030103066-0093718efeb9"
  },
  {
    "title": "Classic Snapback Cap",
    "description": "Retro streetwear cap",
    "price": 399,
    "category": "Accessories",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee"
  },
  {
    "title": "Corduroy Vintage Pants",
    "description": "Soft textured trousers",
    "price": 999,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1584865288642-42078afe6942"
  },
  {
    "title": "Retro Windbreaker Jacket",
    "description": "Color-block vintage jacket",
    "price": 1299,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    "title": "Minimal Tote Bag",
    "description": "Eco thrift tote",
    "price": 499,
    "category": "Accessories",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e"
  },
  {
    "title": "Classic White Sneakers",
    "description": "Clean everyday shoes",
    "price": 1199,
    "category": "Footwear",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
  },
  {
    "title": "Knitted Vintage Sweater",
    "description": "Warm cozy knitwear",
    "price": 1099,
    "category": "Clothing",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985"
  },
  {
    "title": "Classic Analog Watch",
    "description": "Minimal vintage watch",
    "price": 1799,
    "category": "Accessories",
    "condition": "used",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  }

];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products inserted successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();