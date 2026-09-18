export const business = {
  name: "Sardar Vallabh Bhai Patel Dairy",
  owner: "Dinesh Singh",
  phone: "9628454491",
  whatsapp: "919628454491",
  maps: "https://maps.app.goo.gl/eb2xtCSpPDPtwNwW8",
  address: ["Baraula Village", "Post Nara", "District Kaushambi", "Uttar Pradesh, India"],
};

export const products = [
  {
    name: "Khoya",
    description: "100% pure Khoya, prepared with care and suitable for traditional Indian sweets and desserts.",
    image: "/src/assets/images/khoya.jpg",
  },
  {
    name: "Paneer",
    description: "Fresh, soft and 100% pure Paneer, ideal for everyday cooking, restaurants and special occasions.",
    image: "/src/assets/images/paneer.jpg",
  },
  {
    name: "Curd",
    description: "Fresh and creamy curd for everyday meals and traditional Indian recipes.",
    image: "/src/assets/images/curd.jpg",
  },
  {
    name: "Milk",
    description: "Fresh milk available for local customers and regular household requirements.",
    image: "/src/assets/images/milk.jpg",
  },
  {
    name: "Frozen Peas",
    description: "Convenient frozen peas for everyday cooking and food preparation.",
    image: "/src/assets/images/frozen-peas.jpg",
  },
];

export const whatsappMessage = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;