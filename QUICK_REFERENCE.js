// 🎯 QUICK REFERENCE: Card to Singleview Flow
// ================================================

// 1️⃣ DEFINE YOUR CARD DATA
// -------------------------
const myCards = [
  {
    // Required - Card display
    title: "Min Fantastiske Titel",
    image: "url-til-billede.jpg",
    link: "/aktiv_singleview",
    
    // Required - Singleview content
    singleviewHeader: "Overskrift i singleview",
    singleviewText: "Lorem ipsum dolor sit amet...",
    singleviewList: ["Punkt 1", "Punkt 2", "Punkt 3"],
    singleviewTheme: "home", // home | volunteer | action | recipes
    singleviewMedia: "url-til-sekundært-billede.jpg",
    
    // Optional - Extra content
    additionalText: "Mere tekst til singleview...",
    ctaText: "Klik her",
    ctaLink: "/tilmeldt",
    backLink: "/card-example"
  }
];

// 2️⃣ MAP CARDS IN YOUR PAGE
// --------------------------
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {myCards.map((card) => (
    <Card {...card} />  {/* Spread operator = alle props automatisk! */}
  ))}
</div>

// 3️⃣ RESULT
// ---------
// ✅ Cards render with image, title, and "Læs mere" link
// ✅ Click card → goes to /aktiv_singleview with all data in URL
// ✅ Singleview displays all content dynamically
// ✅ Theme-based colors applied automatically
// ✅ Fully responsive on all devices
// ✅ Smooth animations included

// 🎨 AVAILABLE THEMES
// -------------------
// home      → Primary colors (teal)
// volunteer → Secondary colors (orange) 
// action    → Primary-400 (cyan)
// recipes   → Secondary-400 (yellow)

// 📱 RESPONSIVE GRID OPTIONS
// ---------------------------
// Simple: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// Full:   "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"

// 🔥 PRO TIP: Using Spread Operator
// ----------------------------------
// Instead of:
<Card 
  title={card.title}
  image={card.image}
  link={card.link}
  // ... 10+ more props
/>

// Do this:
<Card {...card} />  // Automatically passes ALL props!
