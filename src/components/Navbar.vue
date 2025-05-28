<script setup>

</script>

<template>

  <div class="navbar">
    <div class="logo-container">
      <router-link to="/"><img src="../assets/width_639.jpg" class="logo" alt="Image profil">
      </router-link>
    </div>
    <div class="navbar-container">
        <ul class="links">
          <li>
            <router-link to="/profil">Mon profil</router-link>
          </li>
          <li>
            <router-link to="/skills">Mes compétences</router-link>
          </li>
          <li>
            <a href="/public/Alexis_Marichy_CV.pdf" target="_blank" to="/skills">Mon CV</a>
          </li>
        </ul>
    </div>
  </div>

</template>

<style scoped>





.navbar{
  width: 16%;
  padding-left: 50px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction : column;
}

.links {
  margin-top: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.links li{
  display: inline;
  font-size: 28px;
  text-decoration: none;

}

a {
  text-decoration: none;
  color: #b03346;
  font-weight: 600;

}


a:hover{
  color : #421c21;
}

.router-link-active{
  color: #421c21 !important;

}

.logo{
  width: 75%;
  border-radius: 20px;
}

.logo-container{
  margin-top: 50px;
  margin-left: 10px;
}

</style>