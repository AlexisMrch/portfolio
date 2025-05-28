<script setup>

</script>

<template>
  <div class="container">
    <h1>Profil</h1>
    <hr class="line">
    <div STYLE="margin-left: 50px" class="profil-container">
      <h2>Alexis MARICHY</h2>
      <h4 style="margin-bottom: 30px">Développeur informatique</h4>
      <div class="row-profil">
        <span class="text"><img src="../assets/mail.png">alexis.marichy1@gmail.com</span>
      </div>
      <div class="row-profil">
        <span class="text"><img src="../assets/telephone.png">+33 6 50 43 02 86</span>
      </div>
  </div>
    <hr class="line">
    <h3 class="title">Compétences</h3>
    <div class="profil-container">
        <span class="competence">HTML / CSS</span>
        <span class="competence">VUE JS</span>
        <span class="competence">NODE JS</span>
        <span class="competence">MY SQL / POSTGRESQL</span>
        <span class="competence">PYTHON / JAVA</span>
        <span class="competence">MICROSOFT ACCESS</span>
    </div>
    <hr class="line">
    <h3 class="title">Expériences</h3>
    <div class="profil-container">
      <div style="margin-bottom: 40px" class="xp-div">
        <h4>Stage développement Web / Android</h4>
        <span style="margin-bottom: 20px" class="text">AFC Info - Pont de roide</span>
        <span style= "margin-left: 40px" class="text">• Refonte graphique du site internet AFC avec ajout d’une fonctionnalité de transfert de données en lien avec un ERP
</span>
        <span style= "margin-left: 40px" class="text">• Développement d’une application sous Android pour faire des tests réseau</span>
      </div>

      <div class="xp-div">
        <h4>Projet universitaire</h4>
        <span style="margin-bottom: 20px" class="text">Création d’un site Web d’évenementiel - 5 étudiants - 2ème année de BUT</span>
        <span style= "margin-left: 40px" class="text">• Utilisation des langages NodeJs et VueJs</span>
        <span style= "margin-left: 40px" class="text">• Création d’un site Web d’évenementiel - 5 étudiants - 2ème année de BUT</span>
      </div>
    </div>
    <hr class="line">
    <h3 class="title">Parcours</h3>
    <div class="profil-container">
      <div class="xp-div">
        <span style="font-weight: 600" class="text">Bachelor Universitaire de Technologie | Université de Nord Franche Compté</span>
        <span style="margin-bottom: 20px" class="text">2022 - 2026</span>
      </div>
      <div class="xp-div">
        <span style="font-weight: 600"  class="text">Baccalauréat scientifique | Lycée Armand Peugeot</span>
        <span class="text">2019 - 2022</span>
      </div>
    </div>
    <hr class="line">
  </div>
</template>

<style scoped>

.xp-div{
  display: flex;
  flex-wrap: wrap;
}

.xp-div span{
  width: 100%;
}

.competence{
  background-color: #b03346;
  color: white;
  font-size: 18px;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  margin-right: 30px;
}

.title{
  font-weight: 600;
  margin-bottom: 30px;
}

hr.line{
  background-color: #b03346;
  height: 3px;
  margin: 30px 80px 30px 0px ;

}

.row-profil{
  display: flex;
  margin-top: 10px;
}

.container{

  padding: 50px 40px 50px 50px;
  width: 84%;
  display: flex;
  flex-direction: column;

}

.profil-container{
  padding: 10px 20px 20px 50px;
}

img{
  width: 4%;
  vertical-align: middle;
  margin-right: 20px;
}

</style>