import "./style.css";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.querySelector("#app").innerHTML = `

<main>

  <!-- HERO SLIDER -->

  <section class="hero-section" aria-label="Hero slider">

    <div
      class="swiper heroSwiper"
      aria-label="Featured content slider"
    >

      <div class="swiper-wrapper">

        <!-- SLIDE 1 -->

        <div class="swiper-slide">

          <div class="hero-container">

            <div class="hero-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Developer workspace with coding setup"
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

                <button type="button">
                  Shop Now
                </button>

                <button
                  type="button"
                  class="secondary-btn"
                >
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
                alt="Modern coding setup with laptop"
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

                <button type="button">
                  Start Now
                </button>

                <button
                  type="button"
                  class="secondary-btn"
                >
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div
        class="swiper-button-next"
        aria-label="Next slide"
      ></div>

      <div
        class="swiper-button-prev"
        aria-label="Previous slide"
      ></div>

      <div class="swiper-pagination"></div>

    </div>

  </section>

  <!-- PRODUCTS -->

  <section
    class="products-section"
    aria-labelledby="products-title"
  >

    <h2
      class="section-title"
      id="products-title"
    >
      Products
    </h2>

    <div class="products-grid">

      ${[1,2,3,4,5,6,7,8].map((_, index) => `

        <article class="product-card">

          <div class="product-image-box">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Apple Watch product image ${index + 1}"
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

  <section
    class="tabs-section"
    aria-labelledby="tabs-title"
  >

    <h2
      id="tabs-title"
      class="sr-only"
    >
      Product Information Tabs
    </h2>

    <div
      class="tabs-header"
      role="tablist"
      aria-label="Product information tabs"
    >

      <button
        class="tab-btn active-tab"
        id="tab-overview"
        data-tab="overview"
        role="tab"
        aria-selected="true"
        aria-controls="overview"
        tabindex="0"
        type="button"
      >
        Overview
      </button>

      <button
        class="tab-btn"
        id="tab-features"
        data-tab="features"
        role="tab"
        aria-selected="false"
        aria-controls="features"
        tabindex="-1"
        type="button"
      >
        Features
      </button>

      <button
        class="tab-btn"
        id="tab-reviews"
        data-tab="reviews"
        role="tab"
        aria-selected="false"
        aria-controls="reviews"
        tabindex="-1"
        type="button"
      >
        Reviews
      </button>

    </div>

    <div
      class="tab-content active-content"
      id="overview"
      role="tabpanel"
      aria-labelledby="tab-overview"
    >
      Overview content goes here.
    </div>

    <div
      class="tab-content"
      id="features"
      role="tabpanel"
      aria-labelledby="tab-features"
      hidden
    >
      Features content goes here.
    </div>

    <div
      class="tab-content"
      id="reviews"
      role="tabpanel"
      aria-labelledby="tab-reviews"
      hidden
    >
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

function activateTab(tab) {

  tabs.forEach((btn) => {

    btn.classList.remove("active-tab");

    btn.setAttribute("aria-selected", "false");

    btn.setAttribute("tabindex", "-1");

  });

  contents.forEach((content) => {

    content.classList.remove("active-content");

    content.hidden = true;

  });

  tab.classList.add("active-tab");

  tab.setAttribute("aria-selected", "true");

  tab.setAttribute("tabindex", "0");

  tab.focus();

  const activePanel = document.getElementById(tab.dataset.tab);

  activePanel.classList.add("active-content");

  activePanel.hidden = false;

}

tabs.forEach((tab, index) => {

  tab.addEventListener("click", () => {

    activateTab(tab);

  });

  tab.addEventListener("keydown", (e) => {

    let newIndex = index;

    // ENTER OR SPACE

    if (e.key === "Enter" || e.key === " ") {

      e.preventDefault();

      activateTab(tab);

    }

    // RIGHT ARROW

    if (e.key === "ArrowRight") {

      newIndex = (index + 1) % tabs.length;

      tabs[newIndex].focus();

    }

    // LEFT ARROW

    if (e.key === "ArrowLeft") {

      newIndex = (index - 1 + tabs.length) % tabs.length;

      tabs[newIndex].focus();

    }

  });

});