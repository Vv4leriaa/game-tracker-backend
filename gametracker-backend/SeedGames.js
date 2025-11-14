require("dotenv").config();
const mongoose = require("mongoose");
const Game = require("./models/Game");

const initialGames = [
    { 
      title: "Free Fire", 
      platform: "Mobile", 
      progress: "85%", 
      cover: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/free-fire-codigos-gratis-2290285.jpg?tf=1200x1200", 
      rating: 4, 
      review: "Adictivo y competitivo." 
    },
    { 
      title: "Fortnite", 
      platform: "PC", 
      progress: "90%", 
      cover: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/05/fortnite-cover.jpg", 
      rating: 5, 
      review: "Excelente jugabilidad y gráficos." 
    },
    { 
      title: "Roblox", 
      platform: "PC", 
      progress: "70%", 
      cover: "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2020/11/roblox.jpg", 
      rating: 3, 
      review: "Muy creativo para niños y jóvenes." 
    },
    { 
      title: "Indiana Jones and the Great Circle", 
      platform: "PC", 
      progress: "100%", 
      cover: "https://cdn.sanity.io/images/ko0ytj5o/production/cfccdef8dcab003a3d39417bf627f15d749aa0c6-1524x1958.png?w=1024", 
      rating: 5, 
      review: "Historia impresionante." 
    },
    { 
      title: "Hades II", 
      platform: "PC", 
      progress: "94%", 
      cover: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/store/software/switch2/70010000105526/75473d99ae0d87abda2bf0979c0886a78a1ec9debd46fa77b6c5f19b9c7ab175", 
      rating: 5, 
      review: "Desafiante y visualmente espectacular." 
    },
    { 
      title: "The Legend of Zelda: Tears of the Kingdom", 
      platform: "Switch", 
      progress: "45%", 
      cover: "https://phantom.estaticos-marca.com/4686023be74228acb58e446e4c5f3ef1/resize/828/f/jpg/assets/multimedia/imagenes/2024/09/26/17273458124026.jpg", 
      rating: 4, 
      review: "Una obra maestra de aventura." 
    },
    { 
      title: "Call of Duty: Warzone", 
      platform: "PC", 
      progress: "60%", 
      cover: "https://i0.wp.com/seven.com.ec/wp-content/uploads/2022/03/0001-call_of_duty_warzone-seven_ecuador-videojuegos-gamers-juegos-0001.jpg?fit=1920%2C1080&ssl=1", 
      rating: 4, 
      review: "Acción intensa en cada partida." 
    },
    { 
      title: "Minecraft", 
      platform: "PC", 
      progress: "80%", 
      cover: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png", 
      rating: 5, 
      review: "Creatividad sin límites." 
    },
    { 
      title: "Valorant", 
      platform: "PC", 
      progress: "75%", 
      cover: "https://assets-prd.ignimgs.com/2021/12/21/valorant-1640045685890.jpg?crop=1%3A1%2Csmart&width=348&height=348&format=jpg&auto=webp&quality=80", 
      rating: 4, 
      review: "Competitivo y adictivo." 
    },
    { 
      title: "League of Legends", 
      platform: "PC", 
      progress: "50%", 
      cover: "https://fotos.perfil.com/2022/02/01/trim/1140/641/conoce-todos-los-detalles-acerca-de-lol-y-enterate-como-se-juega-1306879.jpg", 
      rating: 3, 
      review: "Estrategia y trabajo en equipo." 
    }
  ];
  async function seed() {
  try {
    console.log("Conectando a MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Borrando juegos existentes...");
    await Game.deleteMany({});

    console.log("Insertando juegos...");
    await Game.insertMany(initialGames);

    console.log("Listo! 🎉 Juegos añadidos a MongoDB.");
    process.exit();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

seed();
