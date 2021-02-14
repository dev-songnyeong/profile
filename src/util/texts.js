const techLogo = {
  react:`/imgs/react.png`,
  reactNative:`/imgs/react.png`,
  javascript:`/imgs/javascript.svg`,
  node: `/imgs/nodejs.svg`,
  css:`/imgs/css3.png`,
  html:`/imgs/html5.svg`,
  java:`/imgs/java.svg`,
  aws:`/imgs/aws.png`,
  graphql:`/imgs/graphql.svg`,
  express:``,
  mongodb:`/imgs/mongodb.svg`,
  styledComponents:``,
  weather:``,
}

export const eng = {
  home: {
    first: `Hello I'm Songnyeong`,
    second: `Frontend Developer`,
  },
  about: `Enthusiastic and responsible problem solver, ready to deploy my new
    career. Have potential to develop and specialize deeper knowledge to be
    a web developer and a team player with excellent communication skills.
     `,
  projects: [
    {
      id: "project1",
      title: "Pickle",
      subTitle:
        "an Integrated school managemnet system. supporting streaming service",
      tech: [['react',techLogo.react],['javascript', techLogo.javascript],['java',techLogo.java], ['node', techLogo.node], ['css', techLogo.css], ['html', techLogo.html], ['aws', techLogo.aws]],
      image: `/imgs/projectMain/pickle_main.JPG`,
      url: `https://www.notion.so/Pickle-98bbf67e242b43409893d295725ea762`,
    },
    {
      id: "project2",
      title: "Switter",
      subTitle: "Social Network Service",
      tech: [['react',techLogo.react], ['node', techLogo.node], ['express', techLogo.express], ['graphql', techLogo.graphql], ['styledComponents', techLogo.styledComponents], ['html', techLogo.html], ['css', techLogo.css], ['mongodbAtlas', techLogo.mongodb]],
      image: `/imgs/projectMain/movie_app_main.JPG`,
      url: ``,
    },
    {
      id: "project3",
      title: "Movie APP",
      subTitle: "Simple movie app",
      tech: [['react',techLogo.react], ['graphql', techLogo.graphql],['javascript', techLogo.javascript], ['html', techLogo.html], ['css', techLogo.css]],
      image: `/imgs/projectMain/movie_app_main.JPG`,
      url: `https://www.notion.so/MovieApp-bcc998e445554bc6818aa85f5750dae0`,
    },
    {
      id: "project4",
      title: "Chrome App",
      subTitle: "Chrome App with Todos and weather",
      tech: [['javascript', techLogo.javascript], ['html', techLogo.html], ['css', techLogo.css]],
      image: `/imgs/projectMain/chrome_app_main.JPG`,
      url: `https://songnyeong-nam.github.io/`,
    },
    {
      id: "project5",
      title: "Simple Weather",
      subTitle: "Simple weather indicating Application based on user's location",
      tech:[['reactNative',techLogo.reactNative],['javascript', techLogo.javascript],['openweatherapi', techLogo.weather]],
      image: `/imgs/projectMain/simple_weather_main.jpg`,
      url: `https://snack.expo.io/@songnyeong/simple-weather`,
    },
  ],
  cv:{
    eng:`https://docs.google.com/presentation/d/1ICJqATcXkiX5L8cazbFOTZ3N_I3tX3GEfM3T4w-wvIg/edit?usp=sharing`,
    kor:``,
  }
};
export const kor = {
  home: {
    first: `안녕하세요`,
    second: `개발자 남송녕입니다`,
  },
  about: {
    intro: `Enthusiastic and responsible problem solver, ready to deploy my new
   career. Have potential to develop and specialize deeper knowledge to be
   a web developer and a team player with excellent communication skills.
    `,
    mbti: {
      type: "INFP",
      character1: "Passionate about growth and creativity",
      character2: "Excellent communicators",
    },
  },
  projects: {
    project1: {
      title: "Pickle",
      subTitle:
        "an Integrated school managing system. supporting streaming service",
      tech: `React.js, Java, Node.js, CSS, HTML, AWS`,
      image: ``,
      url: ``,
    },
    projects2: {
      title: "Switter",
      subTitle: "Social Network Service",
      tech: `React.js, Node.js, Node Express, GraphQL, Styled Components, HTML, MongoDB Atlas`,
      image: ``,
      url: ``,
    },
    project3: {
      title: "Movie APP",
      subTitle: "Movie ",
      tech: `Javascript, HTML, Css`,
      image: ``,
      url: ``,
    },
    project4: {
      title: "Chrome App",
      subTitle: "Chrome App with Todos and weather",
      tech: `Javascript, HTML, CSS`,
      image: ``,
      url: `https://songnyeong-nam.github.io/`,
    },
    projects5: {
      title: "Simple Weather",
      subTitle: "Simple weather indicating Application",
      tech: "React Navice, Open weather API ",
      image: ``,
      url: ``,
    },
  },
};

export const contactsList =
  [{
    name: 'github',
    logo: `/imgs/github.png`,
    address: `https://github.com/Songnyeong-Nam`,
  },
  {
    name: 'linkedin',
    logo: `/imgs/linkedin.png`,
    address: `www.linkedin.com/in/songnyeong`,
  },
  {
    name: 'gmail',
    logo: `/imgs/email.png`,
    address: `dev.songnyeong@gmail.com`
  }]


export const imageUrls = {
  aboutMain: `http://drive.google.com/uc?export=view&id=1Y9zla1FzgHepHwdY71_QDrah8kbO48HK`,
  aboutSub1: `http://drive.google.com/uc?export=view&id=1KsjgLo297tix199ZgEHj-C1HpK6bX1t_`,
  aboutSub2: `http://drive.google.com/uc?export=view&id=1HzGCF0JxsyCz5RWROrSiU1JIrbFL0Pki`,
  aboutSub3: `http://drive.google.com/uc?export=view&id=14GR-qgEjfgDeJkUeUL1gTMp54Xa0LpDL`,
};

export const text = `ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMeContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe ContactMe ContactMe
ContactMe ContactMe ContactMe ContactMe`