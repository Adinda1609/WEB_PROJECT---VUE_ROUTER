<template>
  <div class="profile-container">
    <h2 class="title">Profil Pengguna</h2>

    <div class="profile-card">
      <div class="avatar">
        <img :src="user.avatarUrl" alt="User Avatar" />
      </div>

      <div class="user-info">
        <h3>{{ user.name }}</h3>
        <p class="email">{{ user.email }}</p>
        <p class="username">@{{ user.username }}</p>

        <div class="info-group">
          <p><strong>Bahasa Dipelajari:</strong> {{ user.language }}</p>
          <p><strong>Tanggal Bergabung:</strong> {{ formattedDate }}</p>
        </div>

        <button class="edit-btn" @click="editProfile">Edit Profil</button>
      </div>
    </div>
  </div>
</template>

<script>
import profilImage from '/src/assets/profil.jpg'
export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        name: "Sri Adinda",
        email: "sriadinda@student.uir.ac.id",
        username: "dnda16",
        language: "Bahasa Jepang",
        joinDate: "2023-08-01",
        avatarUrl: profilImage
      }
    };
  },
  computed: {
    formattedDate() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.user.joinDate).toLocaleDateString("id-ID", options);
    }
  },
  methods: {
    editProfile() {
      alert("Fitur edit profil belum tersedia.");
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-container {
  padding: 60px 20px;
  background: linear-gradient(135deg, #e0ffff 0%, #e9f1f7 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #212121;

  .title {
    font-size: 28px;
    font-weight: 700;
    color: #1b2838;
    margin-bottom: 30px;
    text-align: center;
  }

  .profile-card {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 14px;
    padding: 28px 24px;
    box-shadow: 0 4px 20px rgba(13, 110, 253, 0.12);
    align-items: center;
    max-width: 800px;
    margin: 0 auto;

    .avatar {
      flex: 0 0 120px;
      margin-right: 30px;
      text-align: center;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .user-info {
      flex: 1;

      h3 {
        font-size: 22px;
        font-weight: 700;
        color: #1b2838;
        margin-bottom: 5px;
      }

      .email, .username {
        font-size: 15px;
        color: #5F9EA0;
        margin-bottom: 6px;
      }

      .info-group {
        margin-top: 10px;

        p {
          margin: 6px 0;
          font-size: 15px;
          color: #555;
        }
      }

      .edit-btn {
        display: inline-block;
        background-color: #5F9EA0;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 14px;
        margin-top: 20px;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 15px rgba(13, 110, 253, 0.3);
        transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;

        &:hover {
          background-color: #d7240c;
          box-shadow: 0 12px 20px rgba(8, 70, 183, 0.45);
          transform: translateY(-3px);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .profile-card {
      flex-direction: column;
      text-align: center;

      .avatar {
        margin-bottom: 20px;
        margin-right: 0;
      }

      .user-info {
        .edit-btn {
          margin: 20px auto 0;
        }
      }
    }
  }
}
</style>
