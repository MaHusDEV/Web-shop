"use strict";

const Products = [
  {
    id: 1,
    name: "Boks Helm",
    price: 80,
    img: "assets/images/BoksHelm.jpg",
    description: `Mijn boks helm is van topkwaliteit en biedt uitstekende bescherming
    voor het hoofd tijdens intensieve trainingen en wedstrijden. Het is
    gemaakt van sterk, schokabsorberend materiaal en heeft een verstelbare
    pasvorm, zodat het perfect aansluit op het hoofd. Het ontwerp zorgt
    voor maximale veiligheid, terwijl het tegelijkertijd het zicht en
    comfort niet beperkt. De ademende voering houdt je koel en droog,
    zelfs tijdens lange trainingssessies.`,
    material: `huid`,
    kleur: ` geel, blauw`,
    Oorsprong: `België`,
  },
  {
    id: 2,
    name: "Bokshandschoenen",
    price: 150,
    img: "assets/images/BoksHandSchoenen.png",
    description: `Mijn bokshandschoenen zijn van de hoogste kwaliteit, gemaakt van
    duurzaam materiaal dat zowel comfort als bescherming biedt. Ze zijn
    perfect voor intensieve trainingen en wedstrijden, en zorgen voor een
    uitstekende pasvorm en maximale ondersteuning. De handschoenen zijn
    ontworpen om de impact van stoten te absorberen, wat het risico op
    blessures minimaliseert.`,
    material: `kunstleer`,
    kleur: ` blauw, zwart`,
    Oorsprong: `België`,
  },
  {
    id: 3,
    name: "Boks Schoenen",
    price: 200,
    img: "assets/images/BoksSchoenen.jpg",
    description: `Mijn boks schoenen zijn ontworpen voor maximale grip en stabiliteit in
    de ring. Ze zijn licht van gewicht, waardoor ze perfecte flexibiliteit
    en snelheid bieden. Het ademende materiaal houdt je voeten droog en
    comfortabel, zelfs tijdens intensieve trainingen. De schoenen hebben
    een stevige zool die zorgt voor een uitstekende demping en
    ondersteuning, waardoor je met vertrouwen kunt bewegen.`,
    material: `Huid`,
    kleur: `blauwe, wit, oranje`,
    Oorsprong: `België`,
  },
  {
    id: 4,
    name: "Boks bandages",
    price: 20,
    img: "assets/images/BoksBandages.jpg",
    description: `Mijn boks bandages bieden extra ondersteuning en bescherming voor de
    handen en polsen tijdens het trainen. Ze zijn gemaakt van stevig,
    ademend materiaal dat zorgt voor een perfecte pasvorm en comfort. De
    bandages helpen bij het stabiliseren van de gewrichten en verminderen
    de kans op blessures. Ze zijn gemakkelijk aan te brengen en blijven
    stevig op hun plaats, zelfs tijdens de intensiefste trainingssessies.`,
    material: `textieltape op basis van katoen`,
    kleur: `zwart`,
    Oorsprong: `België`,
  },
  {
    id: 5,
    name: "Mondstuk",
    price: 20,
    img: "assets/images/mondStuk.jpg",
    description: `Mijn bitje is ontworpen voor optimale bescherming van de tanden en
    kaak tijdens het boksen. Het is gemaakt van duurzaam, schokbestendig
    materiaal en biedt een comfortabele pasvorm die de druk gelijkmatig
    verdeelt. Het bitje is lichtgewicht en ademend, waardoor je het
    gemakkelijk kunt dragen tijdens lange trainingssessies en wedstrijden
    zonder ongemak. Het zorgt ervoor dat je veilig kunt boksen zonder je
    zorgen te maken over mogelijke blessures aan je mond of tanden.`,
    material: `silicium`,
    kleur: `zwart, wit`,
    Oorsprong: `België`,
  },
  {
    id: 6,
    name: "Boks zak",
    price: 500,
    img: "assets/images/BoksZak.jpg",
    description: `Mijn boks zak is gemaakt van hoogwaardige, duurzame materialen die
    bestand zijn tegen de zwaarste trainingen. Hij biedt een uitstekende
    schokabsorptie en is perfect voor het verbeteren van techniek, kracht
    en uithoudingsvermogen. De stevige ophanging zorgt voor stabiliteit
    tijdens elke stoot en trap.`,
    material: `zwart, rood`,
    kleur: `zwart, wit`,
    Oorsprong: `België`,
  },
];

// Load existing cart and wishlist from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Save to localStorage
function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
// Add to cart
function addToCart(product) {
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  saveData();
  updateCartView();
}
// Toggle wishlist
function toggleWishlist(product) {
  const index = wishlist.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    wishlist.splice(index, 1);
    alert(`${product.name} removed from wishlist`);
  } else {
    wishlist.push(product);
    alert(`${product.name} added to wishlist`);
  }
  saveData();
  updateWishlistView();
}
// Update cart display
function updateCartView() {
  const cartDiv = document.querySelector(".cart-items");
  let total = 0;

  cartDiv.innerHTML = '<p class="stick-to-top">Shopping Cart</p>';
  if (cart.length === 0) {
    cartDiv.innerHTML += '<p class="stick-to-top">(empty)</p>';
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartDiv.innerHTML += `
      <div class="item-box">
        <img src="${item.img}" alt="${item.name}" class="item-img-vertical">
        <div class="item-info">
          <div class="item-name">${item.name} (${item.quantity})</div>
          <div class="item-bottom">
            <span class="item-price">€${(item.price * item.quantity).toFixed(
              2
            )}</span>
            <button class="remove-btn" data-index="${
              item.index
            }" data-type="cart">❌</button>
          </div>
        </div>
      </div>`;
  });
  cartDiv.innerHTML += `
  <div class="stick-to-bottom">
    <strong>Total: €${total.toFixed(2)}</strong>
  </div>`;
}
// Update wishlist display
function updateWishlistView() {
  const wishDiv = document.querySelector(".wishlist-items");
  wishDiv.innerHTML = '<p class="stick-to-top">Wishlist</p>';

  if (wishlist.length === 0) {
    wishDiv.innerHTML += '<p class="stick-to-top">(empty)</p>';
    return;
  }

  wishlist.forEach((item, index) => {
    wishDiv.innerHTML += `
    <div class="item-box">
      <img src="${item.img}" alt="${item.name}" class="item-img-vertical">
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-bottom">
          <span class="item-price">€${item.price.toFixed(2)}</span>
          <button class="remove-btn" data-index="${
            item.index
          }" data-type="wishlist">❌</button>
        </div>
      </div>
    </div>`;
  });
}
// Handle product cards on shop.html
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".grid-class-foto article");

  cards.forEach((card) => {
    const name = card.querySelector("h2").textContent.trim();
    const priceText = card
      .querySelector(".price")
      .textContent.replace("€", "")
      .trim();
    const product = Products.find((p) => p.name === name);
    if (!product) return;
    const cartBtn = card.querySelector(".add-to-cart");
    const wishBtn = card.querySelector(".add-to-wishlist");
    if (cartBtn) {
      cartBtn.addEventListener("click", () => addToCart({ ...product }));
    }
    if (wishBtn) {
      wishBtn.addEventListener("click", () => toggleWishlist({ ...product }));
    }
  });
  updateCartView();
  updateWishlistView();
});
// Handle single product pages
document.addEventListener("DOMContentLoaded", function () {
  const nameEl = document.querySelector(".product-title");
  const priceEl = document.querySelector(".price");
  const imgEl = document.querySelector(".productfoto");
  if (nameEl && imgEl) {
    const product = {
      name: nameEl.textContent.trim(),
      price: 0,
      img: imgEl.src,
    };
    if (priceEl) {
      let priceText = priceEl.textContent.replace("€", "").trim();
      product.price = parseFloat(priceText);
    }
    const cartBtn = document.querySelector(".add-to-cart");
    const wishBtn = document.querySelector(".add-to-wishlist");
    if (cartBtn) {
      cartBtn.addEventListener("click", () => {
        addToCart({
          name: product.name,
          price: Number(product.price),
          img: product.img,
        });
      });
    }
    if (wishBtn) {
      wishBtn.addEventListener("click", () => {
        toggleWishlist({
          name: product.name,
          price: Number(product.price),
          img: product.img,
        });
      });
    }
  }
});
//delete items
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "cart") {
      cart.splice(index, 1);
      saveData();
      updateCartView();
    } else if (type === "wishlist") {
      wishlist.splice(index, 1);
      saveData();
      updateWishlistView();
    }
  }
});
