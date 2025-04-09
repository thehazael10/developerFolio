// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hazael Puche",
  title: "Hola, soy Hazael 👋",
  subTitle: emoji(
    "Analista de datos e ingeniero con pasión por la tecnología, los retos y el aprendizaje continuo. Me encanta trabajar con datos desde su origen hasta modelos de Machine Learning en producción. 📊💻🚀"
  ),
  resumeLink: "https://tucv.com/cv-hazael-puche.pdf", // Reemplaza con un enlace real si subes tu CV
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thehazael10",
  linkedin: "www.linkedin.com/in/hazaelpuchesanchez",
  gmail: "hazaelpuche10@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle: "INGENIERO Y ANALISTA DE DATOS APASIONADO POR LA TECNOLOGÍA Y LA MEJORA CONTINUA",
  skills: [
    emoji("⚡ Procesos ETL y análisis de datos con SQL, Python, R y Pyspark"),
    emoji("⚡ Desarrollo de dashboards con Power BI y Google Data Studio"),
    emoji("⚡ Despliegue de modelos de Machine Learning en AWS SageMaker"),
    emoji("⚡ Automatización con scripts, Git y metodologías ágiles")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "R", fontAwesomeClassname: "fas fa-code" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Pyspark", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Google Data Studio", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" }
  ],

  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad Internacional de Valencia",
      logo: require("./assets/images/valenciaLogo.png"), // ← Puedes usar un logo real si tienes uno o quitar esta línea
      subHeader: "Máster en Big Data y Ciencia de Datos",
      duration: "2023 - 2024",
      desc: "Especialización en Inteligencia de Negocio, modelos de Machine Learning y Cloud Computing con AWS para toma de decisiones estratégicas.",
      descBullets: [
        "ETL, Dashboards y visualización de datos",
        "Modelado predictivo y análisis avanzado en la nube"
      ]
    },
    {
      schoolName: "Universidad Politécnica de Valencia",
      logo: require("./assets/images/upvLogo.png"), // ← Puedes usar un logo real si lo tienes
      subHeader: "Grado en Ingeniería en Diseño Industrial y Desarrollo de Producto",
      duration: "2016 - 2020",
      desc: "Especialización en organización industrial, integración de sistemas de producción y análisis de datos en entornos industriales.",
      descBullets: [
        "Sistemas MES, datalakes y mejora de procesos",
        "Proyectos de innovación orientados a la industria 4.0"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Análisis de datos / BI",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning & Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud (AWS, ETL, Automatización)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Analyst",
      company: "NTT DATA",
      companylogo: require("./assets/images/nttdataLogo.png"), // Si no tienes el logo, puedes comentar esta línea
      date: "2024 – Presente",
      desc: "Consultoría tecnológica en banca, orientado a Data Quality. Mapeo de campos, trazabilidad, definición de normas y creación de dashboards KPI’s."
    },
    {
      role: "Analista de datos",
      company: "Escuela de la Memoria",
      companylogo: require("./assets/images/memoriaLogo.png"),
      date: "2022 – 2024",
      desc: "Análisis de datos de clientes y plataformas, creación de dashboards ejecutivos con ETL multiplataforma, Google Analytics y Google Cloud."
    },
    {
      role: "Ingeniero de procesos",
      company: "Saxun",
      companylogo: require("./assets/images/saxunLogo.png"),
      date: "2020 – 2022",
      desc: "Implantación de Lean Manufacturing y metodologías ágiles. Mapeo de campos en datalakes de sistemas MES y optimización de procesos."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Curriculum",
  subtitle: "Descarga mi cv si lo necesitas ;)",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle: "¿Quieres hablar sobre un proyecto, colaboración o simplemente saludar? ¡Estoy abierto a nuevas oportunidades!",
  number: "+34 618 764 415",
  email_address: "hazaelpuche10@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
