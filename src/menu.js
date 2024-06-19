export const menu = [
  {
    name: "Ramen",
    types: [
      {
        id: 202,
        rating: 4.6,
        name: "Shoyu Ramen",
        price: 12,
        picture:
          "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/easy-miso-ramen-soup-1496868.jpg",
        ingredients: [
          { ingredient: "Soy Sauce", cost: 1 },
          { ingredient: "Noodles", cost: 2 },
          { ingredient: "Chicken", cost: 3 },
        ],
        description:
          "Shoyu Ramen, Japon mutfağının geleneksel bir çorbasıdır. Bu lezzetli yemekte öncelikle tavuk suyunda haşlanmış uzun makarna (ramen noodle) kullanılır. Noodle'lar, kendine özgü lezzetiyle bilinen soya sosuyla tatlandırılır ve çorbaya karakteristik bir derinlik katmak için bazen mirin (tatlı pirinç şarabı) ve şeker eklenir. Servis edilmeden önce, bu zengin çorba genellikle taze tavuk dilimleriyle zenginleştirilir. Üzerine ince doğranmış yeşil soğanlar serpilir ve bazı versiyonlarda haşlanmış yumurta veya nori deniz yosunu yapraklarıyla süslenir. Shoyu Ramen, hem doyurucu hem de lezzetli bir Japon mutfağı deneyimi sunar, özellikle soğuk havalarda içimi keyifli bir tercihtir.",
      },
      {
        id: 203,
        rating: 4.7,
        name: "Miso Ramen",
        price: 14,
        picture: "https://a.ppy.sh/12197887_1571644376.jpeg",
        ingredients: [
          { ingredient: "Miso Paste", cost: 1.5 },
          { ingredient: "Noodles", cost: 2 },
          { ingredient: "Pork", cost: 3.5 },
        ],
        description:
          "Miso Ramen, Japon mutfağının sevilen bir çorbasıdır. Bu lezzetli yemekte öncelikle miso ezmesi ile tatlandırılmış bir çorba tabanı kullanılır. Noodle'lar, miso çorbasında pişirilir ve bu sayede çorbanın içine miso'nun zengin ve karakteristik lezzeti nüfuz eder. Çorba genellikle dilimlenmiş domuz eti ile zenginleştirilir, etin lezzeti çorbanın içindeki miso ile güzel bir uyum oluşturur. Üzerine genellikle ince doğranmış yeşil soğanlar serpilir ve bazı versiyonlarda haşlanmış yumurta veya nori deniz yosunu yapraklarıyla süslenir. Miso Ramen, Japon mutfağının derin ve doyurucu bir lezzet sunan önemli bir parçasıdır, özellikle kış aylarında sıcak ve besleyici bir seçenektir.",
      },
      {
        id: 204,
        rating: 4.8,
        name: "Tonkotsu Ramen",
        price: 15,
        picture:
          "https://i.pinimg.com/736x/72/69/61/72696170c70b47cb67a58876d000ae7b.jpg",
        ingredients: [
          { ingredient: "Pork Bone Broth", cost: 2 },
          { ingredient: "Noodles", cost: 2 },
          { ingredient: "Egg", cost: 1 },
        ],
        description:
          "Tonkotsu Ramen, Japon mutfağının önemli bir çorba çeşididir. Bu lezzetli yemekte öncelikle yoğun ve kremsi domuz kemiği suyu kullanılır. Noodle'lar, bu zengin çorbada pişirilir ve domuz kemiği suyunun derin lezzetiyle kaplanır. Çorbanın üzerine genellikle haşlanmış yumurta eklenir, yumurtanın kremamsı dokusu ve yumuşak iç yapısı çorbanın tadını tamamlar. Tonkotsu Ramen, besleyici ve doyurucu bir yemek olup, Japon mutfağının en sevilen çorba çeşitlerinden biridir.",
      },
    ],
  },
  {
    name: "Pizza",
    types: [
      {
        id: 206,
        rating: 4.5,
        name: "Margherita",
        price: 10,
        picture: "https://cs8.pikabu.ru/avatars/2607/x2607423-868906487.png",
        ingredients: [
          { ingredient: "Tomato Sauce", cost: 1 },
          { ingredient: "Mozzarella", cost: 2 },
          { ingredient: "Basil", cost: 0.5 },
          { ingredient: "Olive Oil", cost: 0.2 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Pepper", cost: 0.1 },
          { ingredient: "Garlic", cost: 0.2 },
          { ingredient: "Oregano", cost: 0.2 },
          { ingredient: "Parmesan", cost: 0.5 },
          { ingredient: "Yeast", cost: 0.1 },
        ],
        description:
          "Margherita pizza, İtalyan mutfağının klasik bir pizzasıdır. İnce hamur tabanı üzerine öncelikle domates sosu sürülür ve ardından taze mozzarella peyniri dilimleri eklenir. Üzerine genellikle taze fesleğen yaprakları serpilir ve bu malzemeler fırında pişirilir. Margherita pizza, sadeliği ve malzemelerin doğal lezzetiyle öne çıkan, popüler bir pizza çeşididir.",
      },
      {
        id: 207,
        rating: 4.6,
        name: "Pepperoni",
        price: 12,
        picture: "https://cs8.pikabu.ru/avatars/2607/x2607423-868906487.png",
        ingredients: [
          { ingredient: "Tomato Sauce", cost: 1 },
          { ingredient: "Mozzarella", cost: 2 },
          { ingredient: "Pepperoni", cost: 2.5 },
          { ingredient: "Olive Oil", cost: 0.2 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Pepper", cost: 0.1 },
          { ingredient: "Garlic", cost: 0.2 },
          { ingredient: "Oregano", cost: 0.2 },
          { ingredient: "Parmesan", cost: 0.5 },
          { ingredient: "Yeast", cost: 0.1 },
        ],
        description:
          "Pepperoni pizza, Amerikan mutfağının sevilen bir pizzasıdır. İnce hamur tabanı üzerine bol miktarda domates sosu sürülür ve üzerine geniş dilimler halinde mozzarella peyniri serpilir. Son olarak dilimlenmiş pepperoni (salam) adı verilen kesilmiş sosis dilimleri düzenlenir ve bu lezzetli malzemeler fırında pişirilir. Pepperoni pizza, çıtır hamuru, zengin domates sosu ve baharatlı pepperoni dilimleriyle tanınan, popüler bir pizza türüdür.",
      },
      {
        id: 208,
        rating: 4.7,
        name: "BBQ Chicken",
        price: 14,
        picture:
          "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/bbqchickenpizzas-683f3f.jpg",
        ingredients: [
          { ingredient: "BBQ Sauce", cost: 1.5 },
          { ingredient: "Chicken", cost: 3 },
          { ingredient: "Onions", cost: 0.5 },
          { ingredient: "Mozzarella", cost: 2 },
          { ingredient: "Cilantro", cost: 0.2 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Pepper", cost: 0.1 },
          { ingredient: "Garlic", cost: 0.2 },
          { ingredient: "Oregano", cost: 0.2 },
          { ingredient: "Parmesan", cost: 0.5 },
        ],
        description:
          "BBQ Chicken pizza, Amerikan mutfağının lezzetli bir pizzasıdır. İnce hamur tabanı üzerine öncelikle barbekü sosu sürülür ve üzerine geniş parçalar halinde tavuk eti eklenir. Ayrıca doğranmış soğanlar da bu malzemeler arasına serpilir. Üzerine bol miktarda mozzarella peyniri yayılır ve taze kişniş yaprakları ile süslenir. Bu malzemelerle zenginleştirilen pizza, fırında pişirilir ve sıcak servis edilir. BBQ Chicken pizza, barbekü sosunun tatlı-kızarmış lezzetiyle tavuk etinin mükemmel uyumunu sunan, oldukça popüler bir pizza çeşididir.",
      },
    ],
  },
  {
    name: "Burger",
    types: [
      {
        id: 210,
        rating: 4.9,
        name: "Cheeseburger",
        price: 8,
        picture:
          "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/wendys-junior-bacon-cheeseburger-copycat-recipe-2301199.jpg",
        ingredients: [
          { ingredient: "Beef Patty", cost: 3 },
          { ingredient: "Cheese", cost: 1 },
          { ingredient: "Lettuce", cost: 0.5 },
          { ingredient: "Tomato", cost: 0.5 },
          { ingredient: "Pickles", cost: 0.2 },
          { ingredient: "Onions", cost: 0.2 },
          { ingredient: "Ketchup", cost: 0.1 },
          { ingredient: "Mustard", cost: 0.1 },
          { ingredient: "Bun", cost: 1 },
          { ingredient: "Mayo", cost: 0.2 },
        ],
        description:
          "Cheeseburger, klasik bir fast food ikonudur. Hazırlanışı genellikle ızgarada pişirilmiş dana köftesi ve erimiş peynir ile yapılır. İnce dilimlenmiş taze marul, domates dilimleri, turşu dilimleri ve doğranmış soğan, genellikle klasik burger ekmeği içinde sunulur. Bu lezzetli malzemeler, burgerin hem doyurucu hem de lezzetli olmasını sağlar. Cheeseburger, geniş bir hayran kitlesi tarafından sevilen ve farklı varyasyonlarla servis edilen popüler bir fast food yemeğidir.",
      },
      {
        id: 211,
        rating: 4.5,
        name: "Bacon Burger",
        price: 10,
        picture:
          "https://media.forgecdn.net/avatars/thumbnails/571/806/256/256/637932355812234040.jpeg",
        ingredients: [
          { ingredient: "Beef Patty", cost: 3 },
          { ingredient: "Bacon", cost: 2 },
          { ingredient: "Cheese", cost: 1 },
          { ingredient: "Lettuce", cost: 0.5 },
          { ingredient: "Tomato", cost: 0.5 },
          { ingredient: "Pickles", cost: 0.2 },
          { ingredient: "Onions", cost: 0.2 },
          { ingredient: "Ketchup", cost: 0.1 },
          { ingredient: "Mustard", cost: 0.1 },
          { ingredient: "Bun", cost: 1 },
        ],
        description:
          "Bacon Burger, Amerikan mutfağının favori burger çeşitlerinden biridir. Hazırlanışı genellikle ızgarada pişirilmiş dana köftesi üzerine çıtır bacon dilimleri eklenerek yapılır. Ardından erimiş peynir burgerin üzerine konur ve tüm bu lezzetli malzemeler klasik burger ekmeği içinde servis edilir. Bacon Burger, hem köftenin lezzetiyle hem de çıtır bacon dilimlerinin tuzlu ve kızarmış tadıyla tanınan, besleyici bir burger seçeneğidir.",
      },
      {
        id: 212,
        rating: 4.6,
        name: "Veggie Burger",
        price: 7,
        picture:
          "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/monsterveggieburgers-52497a.jpg",
        ingredients: [
          { ingredient: "Veggie Patty", cost: 2.5 },
          { ingredient: "Lettuce", cost: 0.5 },
          { ingredient: "Tomato", cost: 0.5 },
          { ingredient: "Pickles", cost: 0.2 },
          { ingredient: "Onions", cost: 0.2 },
          { ingredient: "Ketchup", cost: 0.1 },
          { ingredient: "Mustard", cost: 0.1 },
          { ingredient: "Bun", cost: 1 },
          { ingredient: "Avocado", cost: 1 },
          { ingredient: "Mayo", cost: 0.2 },
        ],
        description:
          "Veggie Burger, bitkisel köfte ile hazırlanan ve sağlıklı malzemelerle zenginleştirilen bir burger çeşididir. Genellikle taze marul yaprakları, dilimlenmiş domates, turşu dilimleri, avokado dilimleri ve doğranmış soğan gibi çeşitli sebzelerle servis edilir. Üzerine özel soslar eklenir ve yumuşak bir burger ekmeği ile sunulur. Bu burger çeşidi, bitkisel protein ve taze sebzelerin sağlıklı kombinasyonunu sunarak, hem besleyici hem de lezzetli bir seçenek oluşturur.",
      },
    ],
  },
  {
    name: "French fries",
    types: [
      {
        id: 214,
        rating: 4.8,
        name: "Regular Fries",
        price: 3,
        picture:
          "https://avatars.mds.yandex.net/i?id=94225f80d1c437ef96cfce9c233ccc3a-5234060-images-thumbs&n=13",
        ingredients: [
          { ingredient: "Potatoes", cost: 1 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Oil", cost: 0.2 },
        ],
        description:
          "Regular Fries, basit ve lezzetli bir atıştırmalıktır. Hazırlanışı genellikle ince dilimlenmiş patateslerin kızgın yağda kızartılmasıyla yapılır. Kızartma işleminden sonra üzerine tuz serpilir ve sıcak olarak servis edilir. Bu klasik patates kızartması, çıtır dış yüzeyi ve yumuşak iç dokusuyla bilinir ve genellikle yanında çeşitli soslarla servis edilir.",
      },
      {
        id: 215,
        rating: 4.9,
        name: "Cheese Fries",
        price: 4,
        picture:
          "https://i.pinimg.com/736x/9d/dc/a8/9ddca8c773fe925f68e7e4408dada4ec.jpg",
        ingredients: [
          { ingredient: "Potatoes", cost: 1 },
          { ingredient: "Cheese Sauce", cost: 1 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Oil", cost: 0.2 },
        ],
        description:
          "Cheese Fries, lezzetli ve doyurucu bir atıştırmalıktır. Hazırlanışı genellikle kızarmış patateslerin üzerine sıcak peynir sosu dökülerek yapılır. Kızarmış patatesler, çıtır dış yüzeyleriyle ve yumuşak iç dokularıyla öne çıkar. Üzerine dökülen sıcak peynir sosu, yoğun ve kremamsı bir lezzet katmanı oluşturur. Cheese Fries, genellikle sosunun ve kızarmış patateslerin mükemmel uyumuyla tercih edilen bir atıştırmalıktır, özellikle sos sevenler için ideal bir seçenektir.",
      },
      {
        id: 216,
        rating: 4.7,
        name: "Curly Fries",
        price: 3.5,
        picture:
          "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/oven-roasted-sweet-potato-frie-d08f33.jpg",
        ingredients: [
          { ingredient: "Potatoes", cost: 1 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Oil", cost: 0.2 },
          { ingredient: "Spices", cost: 0.2 },
        ],
        description:
          "Curly Fries, özel olarak kesilmiş ve kıvrılmış patateslerin baharatlarla tatlandırılıp kızartılmasıyla yapılan bir atıştırmalıktır. Bu patates çeşidi, dışı çıtır içi yumuşak bir dokuya sahip olup, özellikle kıvrımlı yapısıyla dikkat çeker. Kızartma işleminden sonra üzerine genellikle tuz ve çeşitli baharatlar eklenir, bu da lezzetini zenginleştirir. Curly Fries, hem görsel olarak çekici hem de tat olarak doyurucu olan bir atıştırmalıktır, özellikle kıvırcık patates severler için ideal bir seçenektir.",
      },
    ],
  },
  {
    name: "Fast food",
    types: [
      {
        id: 217,
        rating: 4.8,
        name: "Chicken Nuggets",
        price: 6,
        picture:
          "https://cdn.discordapp.com/icons/666859564892946482/700ac0570b1b3e9568b4fb82ec0d997e.jpg?size=256",
        ingredients: [
          { ingredient: "Chicken", cost: 3 },
          { ingredient: "Breading", cost: 1 },
          { ingredient: "Oil", cost: 0.5 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Pepper", cost: 0.1 },
          { ingredient: "Garlic Powder", cost: 0.1 },
          { ingredient: "Onion Powder", cost: 0.1 },
          { ingredient: "Paprika", cost: 0.1 },
          { ingredient: "Egg", cost: 0.2 },
          { ingredient: "Milk", cost: 0.2 },
        ],
        description:
          "Chicken Nuggets, tavuk etinin küçük parçalar halinde kesilip genellikle baharatlı galeta ununa bulanarak kızartılarak yapılan bir atıştırmalıktır. Bu işlem sonucunda dışı çıtır, içi ise yumuşak bir kıvama sahip olur. Chicken Nuggets genellikle çocuklar ve yetişkinler tarafından sevilen bir atıştırmalık olarak bilinir. Sıklıkla çeşitli soslarla servis edilir ve genellikle fast food restoranlarında veya evde kolayca hazırlanabilir.",
      },
      {
        id: 218,
        rating: 4.9,
        name: "Hot Dog",
        price: 5,
        picture:
          "https://fritz.com.ec/templates/pronaca_fritz/images/experiencias-1.png",
        ingredients: [
          { ingredient: "Sausage", cost: 2 },
          { ingredient: "Bun", cost: 1 },
          { ingredient: "Ketchup", cost: 0.5 },
          { ingredient: "Mustard", cost: 0.5 },
          { ingredient: "Onions", cost: 0.2 },
          { ingredient: "Pickles", cost: 0.2 },
          { ingredient: "Relish", cost: 0.2 },
          { ingredient: "Cheese", cost: 0.5 },
          { ingredient: "Chili", cost: 1 },
          { ingredient: "Jalapenos", cost: 0.2 },
        ],
        description:
          "Hot Dog, genellikle sosisin ızgarada veya haşlanarak pişirilip, yumuşak bir hot dog ekmeğine yerleştirilerek yapılır. Üzerine genellikle ketçap, hardal, doğranmış soğan ve diğer isteğe bağlı malzemeler eklenir. Bu basit ve lezzetli yiyecek, genellikle hızlı bir atıştırmalık veya sokak yemeği olarak tercih edilir. Hot Dog'un lezzeti, sosisin etkileyici tadı ve ekmeğin yumuşaklığı ile malzemelerin bir araya gelmesinden kaynaklanır.",
      },
      {
        id: 219,
        rating: 4.7,
        name: "Onion Rings",
        price: 4,
        picture:
          "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/cheese-stuffed-onion-rings-1680211.jpg",
        ingredients: [
          { ingredient: "Onions", cost: 1 },
          { ingredient: "Breading", cost: 1 },
          { ingredient: "Oil", cost: 0.5 },
          { ingredient: "Salt", cost: 0.1 },
          { ingredient: "Pepper", cost: 0.1 },
          { ingredient: "Garlic Powder", cost: 0.1 },
          { ingredient: "Onion Powder", cost: 0.1 },
          { ingredient: "Paprika", cost: 0.1 },
          { ingredient: "Egg", cost: 0.2 },
          { ingredient: "Milk", cost: 0.2 },
        ],
        description:
          "Onion Rings, halka şeklinde kesilmiş soğanların genellikle baharatlı galeta ununa bulanarak kızartılmasıyla yapılan bir atıştırmalıktır. Bu işlem sonucunda Onion Rings, dışı çıtır çıtır ve içi yumuşak bir kıvama gelir. Özellikle soğanın doğal tadı ve baharatların verdiği lezzetle öne çıkar. Onion Rings genellikle yanında soslarla servis edilir ve atıştırmalık olarak veya bir yemek garnitürü olarak tüketilebilir.",
      },
    ],
  },
  {
    name: "Soft drinks",
    types: [
      {
        id: 220,
        rating: 4.4,
        name: "Cola",
        price: 2,
        picture: "https://www.one-liners.nl/wp-content/uploads/2014/07/62.png",
        ingredients: [
          { ingredient: "Carbonated Water", cost: 0.5 },
          { ingredient: "Sugar", cost: 0.5 },
          { ingredient: "Caffeine", cost: 0.2 },
        ],
        description:
          "Cola, karbonatlı su, şeker ve kafein içeren popüler bir gazlı içecektir. Bu içecek, genellikle serinletici bir etki için soğuk olarak servis edilir. Karbonatlı su, içeceğin hafif kabarcıklı yapısını sağlarken, şeker tatlılık katarken kafein ise hafif bir uyarıcı etki sağlar. Cola'nın karakteristik tadı ve kafeinin enerji verici özelliği, birçok insanın tercih sebebi olmuştur.",
      },
      {
        id: 221,
        rating: 4.7,
        name: "Lemonade",
        price: 2.5,
        picture:
          "http://boyaks.com.tr/en/img/urunler/icecek-grubu/limonata.jpg",
        ingredients: [
          { ingredient: "Lemon Juice", cost: 1 },
          { ingredient: "Sugar", cost: 0.5 },
          { ingredient: "Water", cost: 0.1 },
        ],
        description:
          "Lemonade, taze sıkılmış limon suyu, şeker ve suyun karışımıyla yapılan, serinletici ve tatlı bir içecektir. Taze limon suyu, tatlılık için eklenen şekerle dengelenir ve bu karışım genellikle iyice karıştırılarak hazırlanır. Limonun ferahlatıcı asitliği ve tatlandırıcı şeker, özellikle sıcak havalarda tercih edilen bir içecek haline getirir. Buzla veya nane yapraklarıyla servis edilerek tadı daha da zenginleştirilebilir. Lemonade, yaz mevsiminde pikniklerde, plajda veya partilerde keyifle tüketilen bir içecektir.",
      },
      {
        id: 222,
        rating: 4.8,
        name: "Iced Tea",
        price: 3,
        picture:
          "https://bevvyco.s3.amazonaws.com/img/drinks/va/aqva/9979f4e924f3712f64ac8388e8452f21-sm.jpg",
        ingredients: [
          { ingredient: "Tea", cost: 1 },
          { ingredient: "Sugar", cost: 0.5 },
          { ingredient: "Lemon", cost: 0.5 },
        ],
        description:
          "Iced Tea, genellikle siyah veya yeşil çayın demlenmesiyle hazırlanan bir içecektir. Demlenmiş çayın içine tatlandırıcı olarak şeker eklenir ve limon dilimleri veya limon suyuyla lezzetlendirilir. Bu karışım daha sonra iyice soğutulur ve genellikle büyük bir bardak veya cam sürahi içinde geniş buz parçalarıyla servis edilir. Iced Tea, özellikle sıcak yaz günlerinde tercih edilen serinletici bir içecektir. İçerisine nane yaprakları veya meyve dilimleri eklenerek veya farklı tatlarla zenginleştirilerek sunulabilir. Ferahlatıcı tadıyla, Iced Tea yaz aylarında serinlemek için ideal bir seçenektir.",
      },
    ],
  },
];
