const techLogo = {
  react:`https://image.pngaaa.com/875/2507875-small.png`,
  reactNative:`https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png`,
  javascript:`data:image/png;base64,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`,
  node: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMahgIiQ2JJDPj9bLxGNSzBWUMrAzXYYHKiA&usqp=CAU`,
  css:``,
  html:``,
  java:``,
  aws:``,
  graphql:``,
  express:``,
  mongodb:``,
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
      Image: ``,
      url: `https://imthesong.site`,
    },
    {
      id: "project2",
      title: "Switter",
      subTitle: "Social Network Service",
      tech: [['react',techLogo.react], ['node', techLogo.node], ['express', techLogo.express], ['graphql', techLogo.graphql], ['styledComponents', techLogo.styledComponents], ['html', techLogo.html], ['css', techLogo.css], ['mongodbAtlas', techLogo.mongodb]],
      Image: ``,
      url: ``,
    },
    {
      id: "project3",
      title: "Movie APP",
      subTitle: "Movie ",
      tech: [['react',techLogo.react], ['graphql', techLogo.graphql],['javascript', techLogo.javascript], ['html', techLogo.html], ['css', techLogo.css]],
      Image: ``,
      url: ``,
    },
    {
      id: "project4",
      title: "Chrome App",
      subTitle: "Chrome App with Todos and weather",
      tech: [['javascript', techLogo.javascript], ['html', techLogo.html], ['css', techLogo.css]],
      Image: ``,
      url: `https://songnyeong-nam.github.io/`,
    },
    {
      id: "project5",
      title: "Simple Weather",
      subTitle: "Simple weather indicating Application",
      tech:[['reactNative',techLogo.reactNative],['javascript', techLogo.javascript],['openweatherapi', techLogo.weather]],
      Image: ``,
      url: ``,
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
      Image: ``,
      url: ``,
    },
    projects2: {
      title: "Switter",
      subTitle: "Social Network Service",
      tech: `React.js, Node.js, Node Express, GraphQL, Styled-Components, HTML, MongoDB Atlas`,
      Image: ``,
      url: ``,
    },
    project3: {
      title: "Movie APP",
      subTitle: "Movie ",
      tech: `Javascript, HTML, Css`,
      Image: ``,
      url: ``,
    },
    project4: {
      title: "Chrome App",
      subTitle: "Chrome App with Todos and weather",
      tech: `Javascript, HTML, CSS`,
      Image: ``,
      url: `https://songnyeong-nam.github.io/`,
    },
    projects5: {
      title: "Simple Weather",
      subTitle: "Simple weather indicating Application",
      tech: "React Navice, Open weather API ",
      Image: ``,
      url: ``,
    },
  },
};

export const contactsList =
  [{
    name: 'github',
    logo: `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`,
    address: `https://github.com/Songnyeong-Nam`,
  },
  {
    name: 'linkedin',
    logo: `https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg`,
    address: `www.linkedin.com/in/songnyeong`,
  },
  {
    name: 'gmail',
    logo: `https://image.similarpng.com/very-thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png`,
    address: `dev.songnyeong@gmail.com`
  }]


export const imageUrls = {
  aboutMain: `https://lh3.googleusercontent.com/r1hTzRrNxArD9dFuXFm_INNDCWCoBPsUvm9rkFDJcWZnop0sSWLF6ZYHX14PBPg2-ebU1OrT8gStFTJqPhf45OJZU5qiTsyG1-eH1ftKM22gNxr_PofBfFYUTTD0T2FCOWjme67P5-SLq2u8N_uvNzHOAEHNHFyCAwU3Ot8fOwygW0sbhT88kr9on86m3kHGo8DISsqsoK4q46mLkBjwTQ-RFzfzrdBGAB61P9nT992Qkmb-4jDVxun_HwHDpxefMTOiEaBPEg0DDWaRGY-CEOXEVoCSbog5tIuLzNRBpGMKu2y14JMScF7kneV4Czct1hwRa2O-PvAKUrCgygldCJ9k8fT4wOzL8bnBaTGSgWqrRs4ayUpt_MCHgZ0Z4GqR4js0QwefZPrYPspKmHcW-q5INcVOepshS7-SQugJgwrse_ty69nLLSyvrY3GAHtTWE_pgBqJOapwhOLoSyiR4PR2XFXG4BOeLw2uWWlJ_Ct7DmEhHicXccCPsVSNochX9Tnl5DIOr4geyzfLyQF_BknuJlK2PDwQjSERkdP_yAbJ0ylhVZh36A23KuNTpXUNCqurcG26JWEyrt4kZtV7Or54yJ8htnMdQn8oueLp1sLHYL4qJob8qkVKYaA6uo3fsv34Aqo1z5O5o_LmkZywnPdqGvDOau4r0j3AlORwBrN7AaLWl8QsQio4Q2E=w2356-h1570-no?authuser=2`,
  aboutSub1: `https://lh3.googleusercontent.com/CxjhqQceFubfU4nU6PHx31MJam7IjtlbwKwzpBYlgAR6IxYyNR7d6VtAs-_JtTbcQGRW5prjfLzjsKV83symcCIrkmDHdub5En4K5PK0DpmTLkp5t0Tq-td7QinsQn9MhXmKJc6H8IqdZI7kk2nYpgZh-akR6cpJpiCMma4Ws9B9fghBowv-uFoXztVidqWcP3C0FyYNiJ8gDcjQ0nprkEaQlDIML8DQLs1zcNZBGXuYMuEl1tQafc1EW32580QCLIYtrb8p3FOkIeNPrfehSE2kCB3ei-WOtn28vHnPk_2U0aBtp1F5giddNejlCdg4WQNE0oSHExDZYNH9eU-kmlGS-l0YPtwtJnUKN5k5upwxxStlyBzLaEG30RoS9hjDWGZYKCoIYgwEEzo8So6OlsYeV5fecfv0s4xkoquy227xfNpjFLjklPWBXvoA6UIipHdlbO8BxfEC9ysxbQQnKnPO46d1KksdXGQA6YJUSsNqfh1sDX7zFf5zV3YT6X5Qtw04K9w5AK7L9hPfY_yucZafM-Y6tLe3d39xU-sbx-yzx3NmfSSBAv8tNwc2vJwhjjBO99i5rxef2drEIXLiUuh0KNmYtkJAICu7X4lyJCqXPkGrr0ufObxnqsBm4pxa3DOQ6JMTVk886qE202YqMIh9lBQp3norLzEUmaIjQ8DsxEXFU4mNpJP6K-I=w609-h913-no?authuser=2`,
  aboutSub2: `https://lh3.googleusercontent.com/ANkVXQR8vxzyiUnHXhys-UkqerUhnZezAK0sBFgyE4xXztZ7e6ckKgHBD7jd2O8yjHTPxgj91cNHAhzuiXxEO3QmCI99z1jFBg3GtxDXz4c5ezG6cZyaatb1pU6dnW_TWj-6XXKCOBZo9iRiYoVUSJ2cFX_WqJMIOW88PTYgzoE8ZK-78ORGxgaO9T-_Xl-Lv5Oh-J351J2qK6O_TykskHeuvQj5PmfB-bsDN5836blo-RkCqdiaFzocToVhI-p-q7hDok-7YHuc6HfjexIU_Y1D0mK7jN32B34zOymSLd867l6S6AKQoFfo7yLQHNii9_1onOlbnDyXc8GYCxiqFmU0sOIN0CguGt6eLofStJxV95krD0iv_fYI0u4J0qDWsya61HfiswwkfmpBEvWtpmXPVvkNlNUvNtDTrtehaOYCADYkvWgbXYAf_yrivLi2vDf9tAu42tnKGrH8qV_7LwG8vulVFgKq9jalIgyaxGZGu6kOgdB_ddjmnsb1i6OLatQCQlkWPl7vVLebJ4HTVdt9iWkkx_PojNTXG1i5fZijTXZZrrHkg8-x_bTnk_rcx3b9SmJjzxsFlWwBHSOzRuIMF3f7ekUzoQjStrP6tyglGq6m1Gip1krCS8nDazNdtYCP4NlpEGD2JmX6mdEgMuGEnLuB1ODybYukEoHMHuKglViZoflSABGRong=w515-h913-no?authuser=2`,
  aboutSub3: `https://lh3.googleusercontent.com/Hnk4h3ZHIz16gMB201K1CU-ygDZ_3RDCbGQ6awlOQ4nIDKLAifA7A03tMmYNaehxcNy3PlwnNNeGdfZFfHQpkysgfiHkzYAomqyZJNVsvxLnSxE_HIJG6Y77IxsAenRjvPp0-Alvsr2mBRaycXrSuIAaYoVkFJcsmmVCdVYITcKFBhULCPbdZ1r3LaJw0QRxbYSf62krh2eLd57xdNsjYdejfmb_WNsuCX9ZYhMQoDzw0e_4eLupsKejktWZSKMIN-vMq2doQfS7Q16VRpqsvGS5IkhnEICC3jOUjq0j0M5MpuOgJGEm1_W3uei-Z_0mbFPUyIuDbfH_IzGOz_474ikbUlZdxhK8Lvhd9XcjkksQRk4U2FGx0_Wt4A-3uGcuPTD-VvjZ3c4fedlK-ay87IN4hCm1RVBgJNkMEoQfM6N8_erYFz81RZrmN2RY_a26qAGB2tqXkwzCevhQ5z3921sOHronZ7azs_J04MvM8gz0b7JQNvOk6p1rAzsGNjJiVz7hqBDgTZrdmeUE74afvkZ1VkbQ3GbOUrXmXYqQluN-9_S_Y19EpetOP3qzXmCKQPASo9hG_2NgZMfdwPixUOcLBFciFKFEY2m5l1ydMMqKzF7lt_8W4swJSoxBJYYpGGPO2glJRFmM5g5GJzC6IJNsDz122Ksx70wPbjGMOX1P6a6PicK0P-Pjr_A=w580-h414-no?authuser=2`,
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