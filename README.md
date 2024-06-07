# Outil pour une sélection optimale de la méthodologie de gestion de projet

## Description
Ce projet vise à fournir un outil permettant de sélectionner la méthodologie de gestion de projet la plus appropriée en fonction des caractéristiques spécifiques d'un projet donné. Cet outil est destiné à être utilisé par des individus, qu'ils soient débutants ou expérimentés, afin d'optimiser leurs chances de réussite en choisissant la bonne méthodologie dès le début.

## Fonctionnalités
- Sélection de la méthodologie de gestion de projet en fonction des réponses à un formulaire.
- Utilisation de technologies modernes pour créer une interface utilisateur réactive et dynamique.
- Base de données flexible pour stocker les informations des utilisateurs et les résultats de la sélection.

## Technologies Utilisées
- Frontend: React.js
- Backend: Node.js, Express.js
- Base de données: MongoDB

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- [Node.js](https://nodejs.org/en/download/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/get-npm) (version 6.x ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.x ou supérieure)

## Installation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/MarcVo00/selGestionApp.git
    cd selGestionApp
    ```

2. Installez les dépendances pour le frontend et le backend :
    ```bash
    # Dans le répertoire racine du projet
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

3. Configurez les variables d'environnement :
    Créez un fichier `.env` dans le répertoire `backend` et ajoutez-y les variables suivantes :
    ```env
    PORT=5000
    MONGO_URI=votre_url_mongodb
    ```

## Déploiement en Local

1. Démarrez MongoDB :
    ```bash
    mongod
    ```

2. Démarrez le serveur backend :
    ```bash
    cd backend
    npm start
    ```

3. Démarrez le serveur frontend :
    ```bash
    cd ../frontend
    npm start
    ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`

