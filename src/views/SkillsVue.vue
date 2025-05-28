<script setup>

</script>

<template>
  <div class="container">
    <h1>Compétences</h1>
    <hr class="line">
    <h3 class="title"> AC 1 - Réaliser un développement d’application / AC 4 - Gérer des données de l’information</h3>
    <div class="img-container">
      <img class="img1" src="../assets/Ie6JIytEc6.PNG">
      <div style="display: flex;flex-direction: column">
      <span class="text">La figure ci-contre illustre une fonction développée en VBA sous Microsoft Access, permettant d’extraire des données provenant de plusieurs bases Access et de les transmettre à une API REST afin de les rendre accessibles via un site web.</span>
      <span class="text">Cette fonction est conçue pour envoyer différents types de documents (factures, bons de livraison, etc.) à l’API en fonction d’un paramètre numérique définissant leur nature (1).</span>
      <span class="text">J'exécute une requête SQL complexe pour récupérer uniquement les documents qui disposent d’un fichier PDF associé et qui sont liés à un utilisateur (2). Cette sélection permet d’optimiser la charge envoyée à l’API et d’éviter des transmissions inutiles.</span>
      <span class="text">Je parcours chaque résultat de la requête et je stocke le nom du champ ainsi que sa valeur dans un dictionnaire (objet se rapprochant le plus de la stucture d'un objet json) (3). Je vérifie ensuite l’accessibilité du fichier PDF (4). Une fois cette vérification effectuée, le fichier est converti en base64 afin de pouvoir être transmis à l’API, qui le retransformera ensuite en PDF (5).</span>
      <span class="text">Le dictionnaire est transformé en un objet JSON (6), format requis par l’API pour le traitement des données. J'envoie ensuite une requête POST à l'API avec pour contenu l'objet JSON transformé précédemment (7).</span>
      <span class="text">En cas de confirmation de réception correcte par l’API (8), la base de données Access est mise à jour. Je complète un champ spécifique avec la date d’envoi du document (9), garantissant que les fichiers déjà transmis ne seront pas envoyés à nouveau.</span>
      <span class="text">Enfin, j'envoie une dernière requête POST à l’API (10), contenant la liste des nouveaux documents envoyés. Une fois cette requête reçue, l’API déclenche automatiquement l’envoi d’un courriel aux utilisateurs pour les informer de la mise à disposition de nouveaux fichiers.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.img-container{
  display: flex;
  gap: 30px;
  width: 100%;
}

.title{
  font-weight: 600;
  margin-bottom: 30px;
}

.img-container img{
  width: 50%;
}

.img-container span{
  width: 95%;
}

span {
  display: inline-block;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin-bottom: 25px;
  text-align: justify;
  text-indent: 40px;
}

.container{
  padding: 50px 40px 50px 50px;
  width: 84%;
  display: flex;
  flex-direction: column;
}

.img1{
  width: 50%;
}

.text{
  line-height: 1.7;
}

hr.line{
  background-color: #b03346;
  height: 3px;
  margin: 30px 80px 30px 0px ;
}
</style>