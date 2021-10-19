'use strict';

let store = [];

/*
Categorias: bazar, bano, deco, iluminacion, muebles, sillones y sofa
*/

class Product {
  constructor(id, name, description, category, price, stock, src) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = parseFloat(price);
    this.stock = Number(stock);
    this.soldOut = false;
    this.src = src;
  }
}

// bazar

const product1 = new Product(
  1,
  'Plato de sitio redondo',
  'Natural patinado - borde con rayas y hojas',
  'Bazar',
  806,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-03-20-at-11-14-171-db55beb0c450a1377516162497512667-1024-1024.jpeg'
);

const product2 = new Product(
  2,
  'Bandeja de plastico y madera',
  '43cm x 29cm',
  'Bazar',
  999,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-13-at-14-23-461-f32310fd37ccab0b7815946610622869-1024-1024.jpeg'
);

const product3 = new Product(
  3,
  'Botella redonda de vidrio con tapa de acero',
  '1 Litro',
  'Bazar',
  870,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-08-05-at-14-43-121-2c705208d82cc3d2e216281909454727-1024-1024.jpeg'
);

const product4 = new Product(
  4,
  'Botella de vidrio cuadrada con tapa metal',
  '1 Litro',
  'Bazar',
  632,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-03-20-at-11-06-171-201bfbdc1163fb96b816162491990119-1024-1024.jpeg'
);

const product5 = new Product(
  5,
  'Jarro - Mug de cerámica',
  'Medidas: Diámetro 9.5 cm / Alto 9.5 cm',
  'Bazar',
  718,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-12-01-at-22-42-57-31-0b90ffbc6b69168baa16068736117401-1024-1024.jpeg'
);

const product6 = new Product(
  6,
  'Cuchara de madera Lisa',
  'Largo: 23 cm / ancho máx.: 7.5 cm / profundidad: 4 cm',
  'Bazar',
  455,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/cuchara-de-madera-m01010291-901dcc8d610d74268d16002738597888-1024-1024.jpeg'
);

const product7 = new Product(
  7,
  'Molinillo redondo de acero',
  'Tamaño Grande: 27 cm',
  'Bazar',
  4810,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-09-15-at-13-57-00-11-9741d22b35ee71603416001890514171-1024-1024.jpeg'
);

const product8 = new Product(
  8,
  'Azucarera de vidrio con tapa y pico metálico',
  'Diámetro: 7 cm, Alto (con pico) 17 cm',
  'Bazar',
  550,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-03-22-at-17-11-481-76bf50503d918a831f16164445411099-1024-1024.jpeg'
);

const product9 = new Product(
  9,
  'Azucarera Acrílico Cónica con Cuchara',
  'Medidas: Diametro 8 cm / Alto 11 cm',
  'Bazar',
  1020,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-12-05-at-13-16-191-6d346633b33403be3116071850544215-1024-1024.jpeg'
);

const product10 = new Product(
  10,
  'Bowl cerámica blanco con borde dorado',
  '20 cm diámetro x 6 cm alto',
  'Bazar',
  980,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-10-26-at-12-50-05-11-3ee13a4698d4a67e4316037274356004-1024-1024.jpeg'
);

const product11 = new Product(
  11,
  'Posa vaso Sauce set x 6u',
  'Cuadrados - 10x10cm',
  'Bazar',
  1045,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/7cc9970a-3b3c-420d-a9ed-f64830bd0134_1_105_c1-655458855c26f96e1f16016509640733-1024-1024.jpeg'
);

const product12 = new Product(
  12,
  'Cortador de pizza acero black',
  'largo: 20 cm, ancho máx.: 7 cm, profundidad: 2 cm',
  'Bazar',
  699,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/575242e8-6a4d-4675-a6f5-8782fe3b4092_1_105_c1-45f2587964909916b316002834190988-1024-1024.jpeg'
);

// bano

const product13 = new Product(
  13,
  'Jabón liquido con rosca - Tilo',
  'Medidas: 350 ml',
  'Baño',
  570,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-06-28-at-18-36-121-c86bae1aad382ac3a816249161920225-1024-1024.jpeg'
);

const product14 = new Product(
  14,
  'Esponja exfoliante pompón - Visón',
  'Material: Poliester / Algodón',
  'Baño',
  330,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-10-02-at-13-16-13-21-46ee00b60cc3056fb916016554226044-1024-1024.jpeg'
);

const product15 = new Product(
  15,
  'Cepillo Baño - Cromo Rayas',
  'Cepillo baño cromo. Altura 37cm',
  'Baño',
  1268,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-09-15-at-16-14-561-f6108b59183acfa42916001973169464-1024-1024.jpeg'
);

const product16 = new Product(
  16,
  'Cesto ropa bamboo - Circular',
  '35cm diam x 50cm alto',
  'Baño',
  4480,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-08-08-at-11-10-511-00818b26785e3727d415969235072494-1024-1024.jpeg'
);

const product17 = new Product(
  17,
  'Toalla de piso, lisa beige',
  '50x70 cm, 100% algodón',
  'Baño',
  1570,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-07-29-at-13-59-09-21-54e4661ce670b9914116275780268349-1024-1024.jpeg'
);

const product18 = new Product(
  18,
  'Dispenser jabón líquido',
  'Figuras marinas blanco',
  'Baño',
  1310,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-12-05-at-13-58-401-9cb15f4d48a750232b16071875423904-1024-1024.jpeg'
);

const product19 = new Product(
  19,
  'Alfombra Pompón - Natural y negro',
  'Alfombra 50 x 80',
  'Baño',
  3123,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-06-17-at-11-59-101-6f120d24ed44e06a6516239419899582-1024-1024.jpeg'
);

const product20 = new Product(
  20,
  'Alfombra de baño con pelo y base de goma',
  '40x60cm',
  'Baño',
  2070,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-04-20-at-17-26-35-81-825488278dcb7ee59a16189525253753-1024-1024.jpeg'
);

const product21 = new Product(
  21,
  'Alfombra de baño Hojas',
  '40 x 60cm',
  'Baño',
  1912,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-06-17-at-11-50-501-afa37c7478c487425116239415421527-1024-1024.jpeg'
);

const product22 = new Product(
  22,
  'Dispenser jabón líquido',
  'De vidrio redondo rayas',
  'Baño',
  760,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-12-05-at-13-58-401-9cb15f4d48a750232b16071875423904-1024-1024.jpeg'
);

const product23 = new Product(
  23,
  'Espejo con mango bamboo',
  'Medidas: Largo 20 cm / Ancho Máx. 10 cm / Profundidad 1 cm',
  'Baño',
  550,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/img_89341-f8fcecc70c8b4d2aa216026915745339-1024-1024.jpeg'
);

const product24 = new Product(
  24,
  'Canasto pvc - Blanco',
  'Grande 30x40x20',
  'Baño',
  2779,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-29-at-16-48-591-2fe96ab74c211866cf15960522703538-1024-1024.jpeg'
);

// Deco

const product25 = new Product(
  25,
  'Funda de almohadón Margarita Grafito',
  '40x40cm',
  'Deco',
  1200,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-12-30-at-19-13-381-fb3bbc3231717ff1db16093664788879-1024-1024.jpeg'
);

const product26 = new Product(
  26,
  'Caja organizadora rectangular - NEW YORK',
  'Grande: Ancho 39 cm / Prof. 26 cm / Alto 14 cm',
  'Deco',
  2390,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-08-26-at-12-11-181-6638c3e53084f281ed16299981640474-1024-1024.jpeg'
);

const product27 = new Product(
  27,
  'Bandeja huevo de madera plateada',
  'Grande: Ancho 22 cm / Largo 40 cm',
  'Deco',
  920,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-04-20-at-17-57-30-171-607a9a37dc7a1fa40116189534964028-1024-1024.jpeg'
);

const product28 = new Product(
  28,
  'Florero cónico marmolado gris y negro',
  'Alto 15 cm, Diámetro Sup. 9 cm, Diámetro base 8 cm, Diámetro Máx. 13.5 cm',
  'Deco',
  2017,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-01-27-at-16-54-43-11-83f17cd4754f3979ff16117774634923-1024-1024.jpeg'
);

const product29 = new Product(
  29,
  'Cubrecama pesado Hindú liso con rayas 2 plazas y media',
  'Medidas: Ancho 240cm / Largo 260 cm',
  'Deco',
  5140,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-12-11-at-16-31-46-21-7031f8d7700d66800516077156120306-1024-1024.jpeg'
);

const product30 = new Product(
  30,
  'Espejo Dalam Madera',
  '61 cm diámetro total',
  'Deco',
  11597,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-09-03-at-14-57-231-8dd41938e65283282515991558861372-1024-1024.jpeg'
);

const product31 = new Product(
  31,
  'Campana de vidrio base de madera',
  'Tamaño: Alto 33 cm / Diámetro base 19.5 cm',
  'Deco',
  2915,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-08-27-at-09-57-291-11a4ed6286ac81173f15985331008295-1024-1024.jpeg'
);

const product32 = new Product(
  32,
  'Tarro De Cerámica Rosa Con Tapa De Madera - Rombos',
  'Medidas: Diámetro 10.5 cm / Alto 15cm',
  'Deco',
  3030,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-10-07-at-15-03-11-151-8da894e68f55da3e7316336303208458-1024-1024.jpeg'
);

const product33 = new Product(
  33,
  'Planta Adan - Base Negra',
  'Grande 90 cm alto.',
  'Deco',
  9800,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-20-at-11-23-301-764a0eb9c6337912e116321478385888-1024-1024.jpeg'
);

const product34 = new Product(
  34,
  'Perchero - Línea Vintage - Roble',
  'De madera de paraíso en lustre roble',
  'Deco',
  20150,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-10-07-at-16-39-02-21-704d974315e3aa92ec16336364484722-1024-1024.jpeg'
);

const product35 = new Product(
  35,
  'Planta Adan - Base cemento',
  'Chica: 50 cm alto total (maceta + planta) / diámetro de maceta:12cm / alto de maceta: 11 cm',
  'Deco',
  6540,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-16-at-11-15-121-f9bd8c31acdeb8830c16318025304020-1024-1024.jpeg'
);

const product36 = new Product(
  36,
  'Bowl - Cobre y Negro',
  'GRANDE 20 cm diámetro x 10 cm alto',
  'Deco',
  1180,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-10-at-15-32-10-11-1697652a200484783816312988011420-1024-1024.jpeg'
);

// Iluminacion

const product37 = new Product(
  37,
  'Lámpara de mesa - Embudo Platil',
  'Diámetro de base 14 cm - Altura 51cm',
  'Iluminacion',
  7500,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-21-at-18-59-391-7564803683b33b2e0815953689548125-1024-1024.jpeg'
);

const product38 = new Product(
  38,
  'Lámpara de mesa linea Nórdica "Dinamarca" Negro',
  'Altura mínima: 48 cm - Diámetro base: 18 cm',
  'Iluminacion',
  8880,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-09-03-at-14-39-351-9c79b0d6ac8a7a18ee15991548420656-1024-1024.jpeg'
);

const product39 = new Product(
  39,
  'Pantalla Medio círculo de seagrass',
  'Medidas: 50 cm diámetro x 30 cm alto',
  'Iluminacion',
  16100,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/diseno-sin-titulo-31-4e59a3f81687063fa616281929714894-1024-1024.png'
);

const product40 = new Product(
  40,
  'Lámpara de mesa movimiento tijera platito y copita',
  ' 68 cm altura',
  'Iluminacion',
  16070,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-03-18-at-16-34-13-61-f994951b410294548916160966760428-1024-1024.jpeg'
);

const product41 = new Product(
  41,
  'Balancín Lata - color negro - 4 luces',
  'Altura regulable.',
  'Iluminacion',
  15050,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/balancin-lata-4-luces-negro1-612374de5f16da0a1016165097016103-1024-1024.jpeg'
);

const product42 = new Product(
  42,
  'Lámpara colgante MEDIEVAL pantalla lino',
  'Pantalla 40X50cm enjaulada en hierro 50x60cm',
  'Iluminacion',
  16500,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/medieval1-3fca02f6f55b40b86216165099745462-1024-1024.jpeg'
);

const product43 = new Product(
  43,
  'Dublin colgante Simple',
  'Pantalla cilíndrica 40 cm.',
  'Iluminacion',
  16775,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-04-15-at-22-07-241-11d7e971add45724c316185354587135-1024-1024.jpeg'
);

const product44 = new Product(
  44,
  'Lámpara de techo THALES 9 luces',
  'Diámetro 100cm., Altura 90cm',
  'Iluminacion',
  31550,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/pluz5610-thales-121-3f733a8c16e7b134d916148766926005-1024-1024.jpeg'
);

const product45 = new Product(
  45,
  'Balancín Zig Zag 6 luces',
  'Lámpara de techo, balancín 6 luces ubicadas en zig zag',
  'Iluminacion',
  15050,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/pluz56201-b72b80e6825f9dc8a716148756466955-1024-1024.jpeg'
);

const product46 = new Product(
  46,
  'Lámpara de pie/lectura',
  '1.70m alto',
  'Iluminacion',
  20040,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-03-08-at-16-49-491-bf497fbffeb70f386516152330880568-1024-1024.jpeg'
);

const product47 = new Product(
  47,
  'Lámpara de pie arco brillante',
  'Pantalla cilíndrica blanca 40 cm diámetro x 20 cm de alto',
  'Iluminacion',
  21160,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-23-at-15-21-371-e8d4d66d99564654ee15955349953871-1024-1024.jpeg'
);

const product48 = new Product(
  48,
  'Lámpara de mesa Línea Nórdica "Noruega"',
  'Diámetro base 25 cm - Altura 70 cm',
  'Iluminacion',
  9850,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-23-at-13-56-071-ba46f945d6be407f6515955235777663-1024-1024.jpeg'
);

const product49 = new Product(
  49,
  'Lámpara de pìe arco gigante',
  'Pantalla cónica blanca (diámetro sup. 40 cm / diámetro inf. 50 cm / altura 26 cm)',
  'Iluminacion',
  30340,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-23-at-16-52-571-3aa172ef842e9f3d4815955348532362-1024-1024.jpeg'
);

const product50 = new Product(
  50,
  'Lámpara de mesa Línea Nórdica "Lata"',
  'Diámetro base 19 cm - Altura mínima 38 cm ',
  'Iluminacion',
  9270,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-07-23-at-13-56-111-3d16b2d7cf6f96f6e615955235079007-1024-1024.jpeg'
);

const product51 = new Product(
  51,
  'Lámpara Pie Tambor - Línea nórdica',
  '1.70 m altura máxima - 1.30m altura hasta balancín - 0,25cm base ',
  'Iluminacion',
  13680,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-05-26-at-12-54-381-78230a49aacc76b71b16220450644349-1024-1024.jpeg'
);

// Muebles

const product52 = new Product(
  52,
  'Mesa rectangular Contemporánea',
  'Medidas: Largo: 1.80 m. / Profundidad: 0.90 m. / Alto: 0.78 m.',
  'Muebles',
  57260,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/mesa-fija-contemp-roble-gnd-contemp-mesa-fija-03b1-12a338d0c3cf6b84db16340455840564-1024-1024.jpg'
);

const product53 = new Product(
  53,
  'Mesa fija Pata Lustre Roble / Tapa Blanca - Línea Vintage',
  'Medidas: Largo: 1.60 m. / Profundidad: 0.90 m. / Alto: 0.80 m',
  'Muebles',
  45640,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/mesqa-vintage-comb-gnd-vintage-mesa-fija-031-dfe4789213ef05042916340453491038-1024-1024.jpg'
);

const product54 = new Product(
  54,
  'Banqueta EMILIA - Jagger Habano',
  'Banqueta pie de cama 1 metro ancho x 0.50 cm profundidad x 0.37 cm alto',
  'Muebles',
  14270,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-16-at-11-04-291-4a15448cc69665165f16318011732131-1024-1024.jpeg'
);

const product55 = new Product(
  55,
  'Silla Osaka - Lustre Roble',
  'Tapizado en pana Mostaza',
  'Muebles',
  17350,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-08-20-at-14-25-461-f327f59b13dda8692e16294828288319-1024-1024.jpeg'
);

const product56 = new Product(
  56,
  'Sillón Individual - HANSEL - Madera y Rattan',
  'Alto Total: 72 cm / Altura asiento 40 cm',
  'Muebles',
  53780,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-08-11-at-15-36-59-141-fa04fa63f6ee9d38ae16287848771525-1024-1024.jpeg'
);

const product57 = new Product(
  57,
  'Mesa de Centro Chic Marble - Tapa símil mármol blanco',
  'Patas cromo - 110 x 60 x 49',
  'Muebles',
  41140,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-05-26-at-12-11-171-eacc2082b60b3df46b16220420816389-1024-1024.jpeg'
);

const product58 = new Product(
  58,
  'Mesa tapa Símil Mármol - Pata Cruz símil madera Natural',
  '1.6 x 0.90 mts',
  'Muebles',
  67700,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-05-26-at-12-23-281-bade5bb310947c51f316220428001719-1024-1024.jpeg'
);

const product59 = new Product(
  59,
  'Rack TV Vintage',
  'Ancho 160 cm - Profundidad 46cm - Altura 65cm',
  'Muebles',
  46370,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/cc4ffa8b-cbbf-4241-8bed-81bb1b3a2786_1_105_c1-e091ffd3de8e17ddd615870373458156-1024-1024.jpeg'
);

const product60 = new Product(
  60,
  'Rack TV Contemporáneo Nogal',
  'Ancho 155cm - Profundidad 45cm - Altura 62cm',
  'Muebles',
  72290,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/captura-de-pantalla-2020-09-21-a-las-17-58-551-29343d3fc889b9fb2b16007219635465-640-0.png'
);

const product61 = new Product(
  61,
  'Mesa de luz Contemporánea - Lustre Nogal',
  'Largo: 0.48 m. Profundidad: 0.38 m., Alto: 0.77 m.',
  'Muebles',
  28480,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2020-09-17-at-13-48-081-be563c89f53751d31216003613278584-1024-1024.jpeg'
);

// Sillones y sofas

const product62 = new Product(
  62,
  'Sillón Atenas - Individual - Nirvana Gris Azulado',
  'ancho: 74 cm - profundo: 70 cm - alto: 74 cm',
  'Sillones y sofas',
  21400,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-29-at-13-56-04-21-e3ba077e436697db9016329579812814-1024-1024.jpeg'
);

const product63 = new Product(
  63,
  'Sofá Trento - 2 cuerpos Nirvana Piedra (Beige)',
  'Estructura: 90% madera maciza y 10% aglomerado de partículas.',
  'Sillones y sofas',
  53600,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-29-at-14-06-151-e7cf866669facf923916329584057123-1024-1024.jpeg'
);

const product64 = new Product(
  64,
  'Sillón Valentino + Banqueta',
  'sillón: 2.33 mts x 0.93 profundidad / Banqueta',
  'Sillones y sofas',
  143300,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-29-at-13-52-031-f056b40fd751ff537716329577438375-1024-1024.jpeg'
);

const product65 = new Product(
  65,
  'Sillón Cartagena - Individual - Beige',
  'Modelo: Cartagena',
  'Sillones y sofas',
  27400,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-29-at-14-00-53-11-a763be5740168bfcf216329581993819-1024-1024.jpeg'
);

const product66 = new Product(
  66,
  'Sofá Chester - 3 cuerpos Cuerotex Chocolate',
  '2.05 mts x 0.96 prof. - 100% madera maciza',
  'Sillones y sofas',
  113800,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/captura-de-pantalla-2020-06-13-a-las-17-46-221-059a489c3c5701c15f15920812401295-640-0.png'
);

const product67 = new Product(
  67,
  'Sofá Camastro Shot nickel',
  '1.75 mts ancho x 0.93 cm profundidad x 0.75 cm alto',
  'Sillones y sofas',
  76500,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-09-29-at-13-58-021-118e4465efe2c2080816329580200827-1024-1024.jpeg'
);

const product68 = new Product(
  68,
  'Sofá Valentino II Esquinero Lino Gris Oscuro',
  '2.87 m x 2.10 x 0.94',
  'Sillones y Sofas',
  138800,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-07-23-at-15-30-231-a3632a2e5f7b00cb1016270650581677-640-0.jpeg'
);

const product69 = new Product(
  69,
  'Sofá Orión Nirvana Gris Azulado',
  '1.95 mts x 0.95 profundidad',
  'Sillones y Sofas',
  61500,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-07-23-at-15-20-0711-894a30e8e22b2a9b1b16270645059643-1024-1024.jpeg'
);

const product70 = new Product(
  70,
  'Sofá Trento Nirvana Gris',
  'Estructura: 90% madera maciza y 10% aglomerado de partículas.',
  'Sillones y sofas',
  53600,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-07-23-at-15-26-301-491be0a5bdb12434f116270648489948-640-0.jpeg'
);

const product71 = new Product(
  71,
  'Sofá Valentino con Butaca con Brazo',
  'Sillón + Banqueta: 2.53 largo x 0.93 profundidad del sillón x 1.86 mts chaise long',
  'Sillones y sofas',
  144100,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-04-23-at-16-46-491-6f1aee39285dc5457216192080838681-1024-1024.jpeg'
);

const product72 = new Product(
  72,
  'Sofá Camastro Pana Shot Gris',
  'Medidas: 2.30 mts x 0.90',
  'Sillones y sofas',
  100517,
  10,
  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/143/products/whatsapp-image-2021-04-22-at-15-27-461-7a23f095b87abb831416191162857765-1024-1024.jpeg'
);

store.push(
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
  product27,
  product28,
  product29,
  product30,
  product31,
  product32,
  product33,
  product34,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
  product41,
  product42,
  product43,
  product44,
  product45,
  product46,
  product47,
  product48,
  product49,
  product50,
  product51,
  product52,
  product53,
  product54,
  product55,
  product56,
  product57,
  product58,
  product59,
  product60,
  product61,
  product62,
  product63,
  product64,
  product65,
  product66,
  product67,
  product68,
  product69,
  product70,
  product71,
  product72
);

localStorage.setItem('Store', JSON.stringify(store));
const productsContainer = document.getElementById('productsContainer');

store.forEach((el) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', el.id);
  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img-top');
  cardImg.setAttribute('src', el.src);
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.textContent = el.name;
  cardTitle.classList.add('card-title');
  const cardText = document.createElement('p');
  cardText.textContent = el.description;
  cardText.classList.add('card-text');
  const cardPrice = document.createElement('p');
  cardPrice.textContent = `$${el.price}`;
  cardPrice.classList.add('card-price');
  const cardBtn = document.createElement('button');
  cardBtn.textContent = 'COMPRAR';
  cardBtn.classList.add('btn', 'card-btn');
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  card.appendChild(cardBtn);
  productsContainer.appendChild(card);
});
