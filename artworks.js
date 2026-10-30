// =====================================================================
//  ARTWORKS LIST — the only file you need to edit to add or update work
// =====================================================================
//
//  HOW TO ADD A NEW PIECE
//  1. Put the image(s) in the "images" folder. Use lowercase names with
//     no spaces, e.g. "blue-river.jpg", "blue-river-detail1.jpg".
//     (Netlify treats "Blue.jpg" and "blue.jpg" as different files.)
//  2. Copy one whole block below, from the opening {  to the closing },
//     paste it where you want the piece to appear in the gallery,
//     and change the details.
//  3. Save, then Commit and Push in GitHub Desktop.
//
//  HOW TO MARK A PIECE AS SOLD
//  Change   sold: false   to   sold: true
//  (the red dot appears and its detail page is switched off)
//
//  FIELDS
//  id          short unique name, lowercase, hyphens instead of spaces.
//              It becomes part of the web address. Don't change it later.
//  title, year, technique, size   shown in the gallery and on the page
//  description optional short text for the detail page ("" = none)
//  price       e.g. "€350"  — leave "" to show no price
//  sold        true or false
//  image       main image
//  alt         optional description for screen readers and Google
//              ("" = the title and technique are used)
//  closeups    list of close-up images, e.g.
//              ["images/blue-river-detail1.jpg", "images/blue-river-detail2.jpg"]
//              Leave [] for none.
//  scale       image showing the piece in a room or next to an object,
//              e.g. "images/blue-river-scale.jpg". Leave "" for none.
//
//  Watch the punctuation: text in "quotes", a comma at the end of
//  every line inside a block, and a comma after every closing }.
// =====================================================================


// ---- SETTINGS ----
// Your email for the "Enquire about this piece" button.
// Leave "" to send visitors to the Contact page instead.
const ENQUIRE_EMAIL = "";


// ---- ARTWORKS (gallery order = order in this list) ----
const ARTWORKS = [
{
    id: "abstract-black-orange-aug26",
    title: "Abstract in Black & Orange",
    year: "2026",
    technique: "Inks & Collage",
    size: "21 x 15 cm",
    description: "",
    price: "",
    sold: false,
    image: "images/abstract-black-orange-aug26.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },
  {
    id: "green-lake",
    title: "Green Lake",
    year: "2026",
    technique: "Oils & Chine Collé",
    size: "A4",
    description: "",
    price: "",
    sold: false,
    image: "images/greenlake.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "red-lake",
    title: "Red Lake",
    year: "2025",
    technique: "Collages & Oils",
    size: "30 x 24 cm",
    description: "",
    price: "",
    sold: true,
    image: "images/REDLAKE.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "unchained",
    title: "Unchained",
    year: "2025",
    technique: "Collages & Chine Collé on Inked Collagraph",
    size: "A4",
    description: "",
    price: "",
    sold: true,
    image: "images/unchained.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "apocalypse-now",
    title: "Apocalypse Now",
    year: "2026",
    technique: "Oils and Collage",
    size: "A4",
    description: "",
    price: "",
    sold: true,
    image: "images/apocalypsenow.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "cycles-1",
    title: "Cycles I",
    year: "2026",
    technique: "Mixed Media",
    size: "10 x 10 cm",
    description: "",
    price: "",
    sold: false,
    image: "images/cycles1.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "abstract-with-blue-collage",
    title: "Abstract with Blue Collage",
    year: "2025",
    technique: "Collage & Oils",
    size: "A4",
    description: "",
    price: "",
    sold: false,
    image: "images/abstractwithbluecollage.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "marine",
    title: "Marine",
    year: "2025",
    technique: "Collage & Oils",
    size: "20 x 20 cm",
    description: "",
    price: "",
    sold: true,
    image: "images/marine1.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "sunset",
    title: "Sunset",
    year: "2025",
    technique: "Collage & Oils",
    size: "20 x 20 cm",
    description: "",
    price: "",
    sold: true,
    image: "images/sunset.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "cycles-2",
    title: "Cycles II",
    year: "2025",
    technique: "Mixed Media",
    size: "10 x 10 cm",
    description: "",
    price: "",
    sold: false,
    image: "images/cycles2.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "canal-views",
    title: "Canal Views",
    year: "2026",
    technique: "Oils",
    size: "41.5 x 34.5 cm (monotype), 56 x 52 cm (paper)",
    description: "",
    price: "",
    sold: false,
    image: "images/print-10.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "two-moons",
    title: "2 Moons",
    year: "2026",
    technique: "Collage & Oils",
    size: "42 x 29 cm",
    description: "",
    price: "",
    sold: false,
    image: "images/mirrorlandscape.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "fires",
    title: "Fires",
    year: "2026",
    technique: "Inks & Collages",
    size: "17 x 12 cm (monotype), 28 x 20 cm incl. mat",
    description: "",
    price: "",
    sold: false,
    image: "images/fires.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "abstract-green-red",
    title: "Abstract with Green & Red",
    year: "2026",
    technique: "Inks",
    size: "43.5 x 36 cm (monotype), 64.5 x 50 cm incl. backing",
    description: "",
    price: "",
    sold: false,
    image: "images/Abstract-Green-Red.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "abstract-green-purple",
    title: "Abstract with Green & Purple",
    year: "2026",
    technique: "Inks",
    size: "37 x 43 cm (monotype), 64.5 x 50 cm incl. backing",
    description: "",
    price: "",
    sold: false,
    image: "images/Abstract-purple-green.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

  {
    id: "night-vision",
    title: "Night Vision",
    year: "2026",
    technique: "Inks",
    size: "49.5 x 42 cm (monotype), 64.5 x 50 cm incl. backing",
    description: "",
    price: "",
    sold: false,
    image: "images/night-visions-1.jpg",
    alt: "",
    closeups: [],
    scale: ""
  },

];


// ---- Helpers used by the pages (no need to edit below) ----
function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function altText(a) {
  return a.alt || [a.title, a.technique].filter(Boolean).join(", ");
}
