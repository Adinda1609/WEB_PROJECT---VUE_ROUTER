<template>
  <main class="about-view">
    <section class="about-hero">
      <div class="hero-content">
        <h1>Our Story</h1>
        <p class="tagline">Crafting beauty, one bucket at a time.</p>
      </div>
    </section>

    <div class="container content-section">
      <section class="story-section">
        <div class="story-text">
          <h2>Our Humble Beginnings</h2>
          <p>
            Founded in **2025** in the heart of **Riau**, Bucket Mart was born from a simple yet profound idea: **everyday items can be sources of joy and beauty.** We believe that even the simplest containers hold the potential for artistic transformation.
          </p>
          <p>
            Our journey began in a small, passionate workshop, driven by a love for craftsmanship and a desire to infuse ordinary objects with extraordinary charm. We meticulously honed our skills, transforming humble materials into pieces that spark delight.
          </p>
        </div>
        <div class="story-image reveal-on-scroll">
          <img src="https://margariagroup.id/wp-content/uploads/2024/08/MGRA5336-2048x1368.jpg" alt="Bucket Mart Workshop" />
        </div>
      </section>

      <section class="story-section reverse-on-mobile">
        <div class="story-image reveal-on-scroll">
          <img src="https://akcdn.detik.net.id/community/media/visual/2023/06/27/relawan-sandiaga.jpeg?w=700&q=90" alt="Handcrafted Buckets and Baskets" />
        </div>
        <div class="story-text">
          <h2>The Art of Handcrafting</h2>
          <p>
            Today, we proudly continue that tradition. At Bucket Mart, we don't just sell products; we offer a **curated collection of handcrafted buckets, baskets, and organizers**, each telling its own story. Every piece is designed to be both functional and aesthetically pleasing, adding a touch of elegance to your home or office.
          </p>
          <p>
            We are committed to preserving the art of handcrafting, ensuring that each item you receive embodies quality, durability, and a unique character that mass-produced goods simply cannot replicate.
          </p>
        </div>
      </section>

      <section class="mission-section">
        <h2>Our Mission</h2>
        <p class="mission-statement">
          Our mission is simple: to provide **high-quality, aesthetically pleasing products** that help you celebrate life's moments, big and small. From organizing your space to adorning your special occasions, Bucket Mart is here to add beauty to your everyday.
        </p>
        <p class="gratitude">
          Thank you for being a part of our journey. We are thrilled to share our passion with you.
        </p>
        <router-link to="/products" class="btn-primary">Explore Our Products</router-link>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible'); // Optional: remove if scrolled out
          }
        });
      }, {
        threshold: 0.3 // Trigger when 30% of the element is visible
      });

      document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.observe(element);
      });
    }
  }
};
</script>

<style scoped>
/* Import Google Fonts (example: Poppins and Playfair Display for headings) */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');

:root {
  /* Define some custom properties for easier theming */
  --primary-color: #A0522D; /* A warm, earthy tone for primary actions/accents */
  --secondary-color: #D2B48C; /* Lighter complementary color */
  --text-dark: #333;
  --text-light: #555;
  --background-light: #f9f9f9;
  --background-white: #ffffff;
  --border-color: #e0e0e0;
}

.about-view {
  font-family: 'Poppins', sans-serif;
  color: var(--text-dark);
  background-color: var(--background-light);
  padding-bottom: 4rem; /* Padding at the very bottom */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem; /* Consistent horizontal padding */
}

/* Hero/Banner Section */
.about-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://via.placeholder.com/1920x600?text=Bucket+Mart+Hero+Image') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 10rem 1rem; /* Adjust padding for vertical centering and spacing */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px; /* Minimum height for the banner */
  margin-bottom: 4rem;
  box-shadow: inset 0 -5px 15px rgba(0, 0, 0, 0.2); /* Inner shadow for depth */
}

.hero-content {
  max-width: 800px;
}

.about-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.8rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for readability */
}

.about-hero .tagline {
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Content Sections */
.content-section {
  padding-top: 2rem; /* Add padding at the top of the main content area */
}

.story-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem; /* Space between text and image */
  margin-bottom: 5rem; /* Space between sections */
  background-color: var(--background-white);
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); /* Soft shadow for content blocks */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.story-section:hover {
  transform: translateY(-5px); /* Slight lift on hover */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.story-section:nth-child(even) {
  flex-direction: row-reverse; /* Alternate image/text layout */
}

.story-text {
  flex: 1;
  min-width: 45%;
}

.story-text h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-color); /* Highlight headings */
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.story-text h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 4px;
  background-color: var(--secondary-color);
  border-radius: 2px;
}

.story-text p {
  line-height: 1.8;
  margin-bottom: 1rem;
  color: var(--text-light);
  font-size: 1.05rem;
}

.story-text p strong {
  color: var(--primary-color);
  font-weight: 600;
}

.story-image {
  flex: 1;
  min-width: 45%;
  text-align: center;
  opacity: 0; /* Hidden by default for animation */
  transform: translateY(20px); /* Slightly moved down for animation */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.story-image.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.story-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Mission Section */
.mission-section {
  text-align: center;
  padding: 4rem 3rem;
  background-color: var(--primary-color); /* Stronger background for emphasis */
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  margin-top: 5rem;
}

.mission-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #fff; /* Ensure white text on dark background */
}

.mission-statement {
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto 2rem;
  font-weight: 300;
}

.gratitude {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.btn-primary {
  display: inline-block;
  background-color: #fff; /* White button on dark background */
  color: var(--primary-color);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background-color: var(--secondary-color); /* Light brown on hover */
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 992px) {
  .about-hero h1 {
    font-size: 3rem;
  }
  .about-hero .tagline {
    font-size: 1.3rem;
  }
  .story-section {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  .story-section:nth-child(even) {
    flex-direction: column; /* Reset order for alternating sections on mobile */
  }
  .story-text, .story-image {
    min-width: 100%; /* Full width on smaller screens */
  }
  .story-text h2 {
    font-size: 2rem;
    text-align: center; /* Center heading on mobile */
  }
  .story-text h2::after {
    left: 50%;
    transform: translateX(-50%); /* Center underline on mobile */
  }
  .story-text p {
    text-align: center; /* Center text on mobile */
  }
  .mission-section h2 {
    font-size: 2.5rem;
  }
  .mission-statement {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .about-hero {
    padding: 8rem 1rem;
    min-height: 350px;
  }
  .about-hero h1 {
    font-size: 2.5rem;
  }
  .about-hero .tagline {
    font-size: 1.1rem;
  }
  .story-section {
    margin-bottom: 3rem;
    padding: 1.5rem;
  }
  .story-text h2 {
    font-size: 1.8rem;
  }
  .story-text p {
    font-size: 1rem;
  }
  .mission-section {
    padding: 3rem 1.5rem;
  }
  .mission-section h2 {
    font-size: 2rem;
  }
  .mission-statement {
    font-size: 1.1rem;
  }
  .btn-primary {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about-hero {
    min-height: 300px;
    margin-bottom: 3rem;
  }
  .about-hero h1 {
    font-size: 2rem;
  }
  .about-hero .tagline {
    font-size: 1rem;
  }
  .story-section {
    padding: 1rem;
  }
  .story-text h2 {
    font-size: 1.5rem;
  }
  .story-text p {
    font-size: 0.95rem;
  }
  .mission-section {
    padding: 2rem 1rem;
  }
  .mission-section h2 {
    font-size: 1.8rem;
  }
  .mission-statement {
    font-size: 1rem;
  }
}
</style>