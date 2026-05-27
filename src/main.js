import "./style.css";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.querySelector("#app").innerHTML = `

<main>

  <!-- HERO SLIDER -->

  <section class="hero-section">

    <div class="swiper heroSwiper">

      <div class="swiper-wrapper">

        <!-- SLIDE 1 -->

        <div class="swiper-slide">

          <div class="hero-container">

            <div class="hero-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Developer workspace"
                class="hero-image"
              />

            </div>

            <div class="hero-content">

              <p class="tagline">
                Explore
              </p>

              <h1>
                AI Learning Labs
              </h1>

              <p class="description">
                Your path to frontend success starts here.
              </p>

              <div class="hero-buttons">

                <button>
                  Shop Now
                </button>

                <button class="secondary-btn">
                  Discover All
                </button>

              </div>

            </div>

          </div>

        </div>

        <!-- SLIDE 2 -->

        <div class="swiper-slide">

          <div class="hero-container">

            <div class="hero-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Coding setup"
                class="hero-image"
              />

            </div>

            <div class="hero-content">

              <p class="tagline">
                Build
              </p>

              <h1>
                Modern Interfaces
              </h1>

              <p class="description">
                Create beautiful responsive applications.
              </p>

              <div class="hero-buttons">

                <button>
                  Start Now
                </button>

                <button class="secondary-btn">
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="swiper-button-next"></div>

      <div class="swiper-button-prev"></div>

      <div class="swiper-pagination"></div>

    </div>

  </section>

  <!-- PRODUCTS -->

  <section class="products-section">

    <h2 class="section-title">
      Products
    </h2>

    <div class="products-grid">

      ${[1,2,3,4,5,6,7,8].map(() => `
        
        <article class="product-card">

          <div class="product-image-box">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Watch product"
              class="product-image"
            />

          </div>

          <div class="product-details">

            <p class="brand-name">
              Apple
            </p>

            <h3 class="product-title">
              Apple Watch Series
            </h3>

            <div class="price-box">

              <span class="current-price">
                $80
              </span>

              <span class="old-price">
                $120
              </span>

            </div>

          </div>

        </article>

      `).join("")}

    </div>

  </section>

  <!-- TABS -->

  <section class="tabs-section">

    <div class="tabs-header" role="tablist">

      <button
        class="tab-btn active-tab"
        data-tab="overview"
        role="tab"
      >
        Overview
      </button>

      <button
        class="tab-btn"
        data-tab="features"
        role="tab"
      >
        Features
      </button>

      <button
        class="tab-btn"
        data-tab="reviews"
        role="tab"
      >
        Reviews
      </button>

    </div>

    <div class="tab-content active-content" id="overview">
      Overview content goes here.
    </div>

    <div class="tab-content" id="features">
      Features content goes here.
    </div>

    <div class="tab-content" id="reviews">
      Reviews content goes here.
    </div>

  </section>

</main>
`;

new Swiper(".heroSwiper", {
  modules: [Navigation, Pagination, Autoplay],

  loop: true,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tabs = document.querySelectorAll(".tab-btn");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    tabs.forEach((btn) => {
      btn.classList.remove("active-tab");
    });

    contents.forEach((content) => {
      content.classList.remove("active-content");
    });

    tab.classList.add("active-tab");

    document
      .getElementById(tab.dataset.tab)
      .classList.add("active-content");

  });

});