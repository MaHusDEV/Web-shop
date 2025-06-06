"use strict";
const htmlShop = document.querySelector("body");
htmlShop.innerHTML += `  
    <header>
      <img src="assets/images/Logo.png" alt="Logo" class="Logo" />
      <div>
        <nav>
          <ul class="navcolor">
            <li><a href="index.html" target="_blank">HOME</a></li>
            <li><a href="shop.html" target="_blank">SHOP</a></li>
            <li><a href="contact.html" target="_blank">CONTACT</a></li>
            <li>
              <form class="search-form">
                <input
                  type="text"
                  placeholder="search..."
                  class="search-input"
                />
                <button type="submit" class="search-button">🔍</button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="main-container">
        <aside class="cart-section">
          <div class="cart-items"><p>Shopping Cart</p></div>
          <div class="wishlist-items"><p>Wishlist</p></div>
        </aside>
        <article class="grid-class-foto">
          <article class="BackGroundFoto1">
            <div class="buttons add-to">
              <aside class="button-container">
                <button class="button add-to-cart">🛒</button>
                <button class="button add-to-wishlist">❤️</button>
              </aside>
            </div>
            <div class="description">
              <div>
                <h2 class="namebold">
                  <a href="product-boksHelm.html">Boks Helm</a>
                </h2>
                <h3 class="descriptionsmall"><span>Hoofd pantser</span></h3>
              </div>
              <span class="price">€80</span>
            </div>
          </article>
          <article class="BackGroundFoto2">
            <div class="buttons add-to">
              <aside class="button-container">
                <button class="button add-to-cart">🛒</button>
                <button class="button add-to-wishlist">❤️</button>
              </aside>
            </div>
            <div class="description">
              <div>
                <h2 class="namebold">
                  <a href="product-boks-handschoenen.html">Bokshandschoenen</a>
                </h2>
                <h3 class="descriptionsmall"><span>Handbescherming</span></h3>
              </div>
              <span class="price">€150</span>
            </div>
          </article>
          <article class="BackGroundFoto3">
            <div class="buttons add-to">
              <aside class="button-container">
                <button class="button add-to-cart">🛒</button>
                <button class="button add-to-wishlist">❤️</button>
              </aside>
            </div>
            <div class="description">
              <div>
                <h2 class="namebold">
                  <a href="product-boks-schoenen.html">Boks Schoenen</a>
                </h2>
                <h3 class="descriptionsmall"><span>Mobiliteit</span></h3>
              </div>
              <span class="price">€200</span>
            </div>
          </article>
          <article class="BackGroundFoto4">
            <div class="buttons add-to">
              <aside class="button-container">
                <button class="button add-to-cart">🛒</button>
                <button class="button add-to-wishlist">❤️</button>
              </aside>
            </div>
            <div class="description">
              <div>
                <h2 class="namebold">
                  <a href="product-box-bandages.html">Boks bandages</a>
                </h2>
                <h3 class="descriptionsmall"><span>Handbeschermer</span></h3>
              </div>
              <span class="price">€20</span>
            </div>
          </article>
          <article class="BackGroundFoto5">
            <div class="buttons add-to">
              <aside class="button-container">
                <button class="button add-to-cart">🛒</button>
                <button class="button add-to-wishlist">❤️</button>
              </aside>
            </div>
            <div class="description">
              <div>
                <h2 class="namebold">
                  <a href="product-mond-stuk.html">Mondstuk</a>
                </h2>
                <h3 class="descriptionsmall"><span>Mondbeschermer</span></h3>
              </div>
              <span class="price">€20</span>
            </div>
          </article>
          <article class="BackGroundFoto6">
            <div class="buttons add-to">
              <aside class="button-container">
                <button class="button add-to-cart">🛒</button>
                <button class="button add-to-wishlist">❤️</button>
              </aside>
            </div>
            <div class="description">
              <div>
                <h2 class="namebold">
                  <a href="product-boks-zak.html">Boks zak</a>
                </h2>
                <h3 class="descriptionsmall"><span>Trainingszak</span></h3>
              </div>
              <span class="price">€500</span>
            </div>
          </article>
        </article>
      </div>
    </main>
    <footer>
      <p class="space"></p>
      <p class="center">Boks Industrie, gemaakt door Marian</p>
    </footer>`;
