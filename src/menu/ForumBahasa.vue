<template>
  <div class="beranda">
    <section class="hero">
      <div class="text">
        <h1>Selamat Datang di <span>Forum Bahasa</span></h1>
        <p class="slogan">Komunitas Pembelajar Bahasa Asing</p>
        <p class="desc">
          Temukan teman belajar, diskusikan kesulitan, dan berbagi tips dalam menguasai bahasa asing. Forum ini adalah ruang terbuka untuk saling mendukung dalam proses belajar yang menyenangkan!
        </p>
        <router-link to="/forum" class="cta">Gabung Forum Sekarang</router-link>
      </div>
      <div class="image">
        <img src="https://cdn-icons-png.flaticon.com/512/3814/3814567.png" alt="Forum Bahasa Asing" />
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <h3>Tips Belajar Bahasa</h3>
        <p>Bagikan dan temukan strategi belajar efektif dari berbagai pengalaman anggota forum.</p>
      </div>
      <div class="feature">
        <h3>Tanya Grammar & Kosakata</h3>
        <p>Ajukan pertanyaan seputar struktur kalimat, arti kata, atau idiom dalam berbagai bahasa asing.</p>
      </div>
      <div class="feature">
        <h3>Diskusi Budaya & Bahasa</h3>
        <p>Bahas bagaimana budaya memengaruhi cara berbahasa dan gunakan bahasa asing dalam konteks nyata.</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.beranda {
  padding: 60px 20px;
  background: linear-gradient(135deg, #e0ffff 0%, #e9f1f7 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #212121;

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 70px;

    .text {
      flex: 1;
      max-width: 520px;
      padding-right: 40px;

      h1 {
        font-size: 38px;
        font-weight: 700;
        color: #1b2838;
        margin-bottom: 12px;
        line-height: 1.2;

        span {
          color: #359094;
          background: linear-gradient(45deg, #5F9EA0 30%, #161717 90%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
      }

      .slogan {
        font-size: 20px;
        color: #5F9EA0;
        font-weight: 600;
        margin-bottom: 20px;
        letter-spacing: 0.03em;
      }

      .desc {
        font-size: 17px;
        color: #00B0BA;
        margin-bottom: 30px;
        line-height: 1.6;
        font-weight: 400;
      }

      .cta {
        display: inline-block;
        background-color: #5F9EA0;
        color: white;
        padding: 14px 28px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 16px;
        text-decoration: none;
        box-shadow: 0 8px 15px rgba(13, 110, 253, 0.3);
        transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;

        &:hover {
          background-color: #d7240c;
          box-shadow: 0 12px 20px rgba(8, 70, 183, 0.45);
          transform: translateY(-3px);
        }
      }
    }

    .image {
      flex: 1;
      max-width: 400px;
      text-align: center;
      img {
        max-width: 100%;
        height: auto;
        filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  .features {
    display: flex;
    justify-content: space-between;
    gap: 28px;
    flex-wrap: wrap;

    .feature {
      background-color: white;
      border-radius: 14px;
      padding: 28px 24px;
      flex: 1;
      min-width: 260px;
      box-shadow: 0 4px 20px rgba(13, 110, 253, 0.12);
      text-align: center;
      transition: box-shadow 0.3s ease, transform 0.3s ease;

      &:hover {
        box-shadow: 0 8px 30px rgba(13, 110, 253, 0.25);
        transform: translateY(-6px);
      }

      h3 {
        color: #5F9EA0;
        font-size: 22px;
        margin-bottom: 14px;
        font-weight: 700;
      }

      p {
        color: #555;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }

  @media (max-width: 900px) {
    .hero {
      flex-direction: column-reverse;
      text-align: center;

      .text {
        padding-right: 0;
        max-width: 100%;
        margin-top: 30px;
      }

      .image {
        max-width: 280px;
        margin: 0 auto;
      }
    }

    .features {
      flex-direction: column;
      gap: 24px;

      .feature {
        max-width: 100%;
      }
    }
  }
}
</style>
