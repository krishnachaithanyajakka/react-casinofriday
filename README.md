# react-casinofriday
Casino gaming application build on react &amp; redux based technology 

# we have total four environment file
  dev envirnoment , stage envirnoment, qa envirnment & production envirnoment files

# Command to run this envirnoment are:
     Note: Use npm run with below name
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",

    "start:dev":"env-cmd -f environments/.env.dev react-scripts start",
    "build:dev":"env-cmd -f environments/.env.dev npm run build",

    "start:stage":"env-cmd -f environments/.env.stage react-scripts start",
    "build:stage":"env-cmd -f environments/.env.stage npm run build",

    "start:prod":"env-cmd -f environments/.env.prod react-scripts start",
    "build:prod":"env-cmd -f environments/.env.prod npm run build",

    "start:qa":"env-cmd -f environments/.env.testing react-scripts start",
    "build:qa":"env-cmd -f environments/.env.testing npm run build"


### Envirnoment variable related document link below

This document provide you basic information to setup environment file https://www.opcito.com/blogs/managing-multiple-environment-configurations-in-react-app/ please refer for basic understand 