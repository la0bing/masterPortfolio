/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Melvin Low's Portfolio",
  description:
    "An AI aficionado, a machine learning maven, and a tech enthusiast all rolled into one!",
  og: {
    title: "Melvin Low's Portfolio",
    type: "website",
    url: "http://melvinlow.com/",
  },
};

//Home Page
const greeting = {
  title: "Melvin Low",
  logo_name: "MelvinLow",
  nickname: "@la0bing",
  subTitle:
    "An AI aficionado, a machine learning maven, and a tech enthusiast all rolled into one!",
  resumeLink:
    "https://drive.google.com/file/d/1PKVsJ-PJyAzgIFNyrKUjlwjPNcZzuiQl/view?usp=share_link",
  portfolio_repository: "https://github.com/la0bing/masterPortfolio",
  githubProfile: "https://github.com/la0bing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/la0bing",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/melvin-low-387651167/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:lowbingjiun@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "MLOps & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various use cases",
        "⚡ Experience of working with NLP, Recommender System and Deep Learning projects",
        "⚡ Developing tools to improve the efficiency of Data Science teams to iterate quickly",
        "⚡ Design and develop Machine Learning pipelines for production deployment",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Kubeflow",
          imageSrc: "kubeflow_logo.png",
        },
        {
          skillName: "Metaflow",
          imageSrc: "metaflow_logo.png",
        },
        {
          skillName: "BentoML",
          imageSrc: "bentoml_logo.png",
        },
        {
          skillName: "Vertex AI",
          imageSrc: "vertex_ai_logo.png",
        },
        {
          skillName: "Sagemaker",
          imageSrc: "sagemaker_logo.png",
        },
      ],
    },
    {
      title: "Infra & Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing overall architecture of website infrastructure on Google Cloud Platform and Firebase",
        "⚡ Developing backend for a scalable web apps using React, Flask & Django",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "skill-icons:gcp-light",
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "skill-icons:react-dark",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Zhejiang University",
      subtitle: "Bsc. in Statistics",
      logo_path: "zju_logo.png",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ Studied basic statistics related subjects like Probability Theory, Mathematical Statistics, Linear Algebra, Multivariate Analysis, Regression Analysis, Time Series Analysis, Sampling Survey, etc.",
        "⚡ Initially my goal was to become an actuary, but I found myself more interested in data science and machine learning. So I started to learn more about these fields and finally decided to pursue a career in data science.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IBM Data Science Specialization",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/LG34VEWDKJKZ",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/86d3be57-e6ee-4d24-b451-95703ced7ed5/badges/495660?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Kubernetes in Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/86d3be57-e6ee-4d24-b451-95703ced7ed5/badges/231216?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many great companies, both local and overseas, mostly related to Data Science and Machine Learning fields as it is where I am passionate about. As I was not a Computer Science major student, my first Data Engineer job what somewhat like an entrance to the Technology world, and from there slowly improved my coding capabilities and became the first Data Scientist there.\nAfter some time I realized I like productionizing models with new MLOps tech stacks, which is why I am shifting from Data Scientist to more of a Machine Learning Engineer guy.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Scientist (MLOps)",
          company: "MoneyLion",
          company_url: "https://www.moneylion.com/",
          logo_path: "moneylion_logo.png",
          duration: "Dec 2022 - Present",
          location: "Kuala Lumpur, Malaysia",
          description:
            "Managing Machine Learning models and lifecycles, handling end-to-end machine learning pipelines, and building MLOps platform for the company.",
          color: "#04e3c3",
        },
        {
          title: "Machine Learning Engineer",
          company: "Maxis",
          company_url: "https://www.maxis.com.my/en/home/",
          logo_path: "maxis_logo.png",
          duration: "Apr 2022 - Nov 2022",
          location: "Kuala Lumpur, Malaysia",
          description:
            "Handling MLOps platform and monitoring tools. Helping data scientist to productionalize POC use cases and build scalable machine learning/AI pipelines for business usage.",
          color: "#48e810",
        },
        {
          title: "Data Scientist",
          company: "GBG",
          company_url: "https://www.gbgplc.com/en/",
          logo_path: "gbg_logo.png",
          duration: "July 2021 - Mar 2022",
          location: "Kuala Lumpur, Malaysia",
          description:
            "Training and evaluating models for AI Address Parser. Managing architecture and process flows to productionize models into existing solution.",
          color: "#271e2c",
        },
        {
          title: "Data Engineer",
          company: "GBG",
          company_url: "https://www.gbgplc.com/en/",
          logo_path: "gbg_logo.png",
          duration: "July 2019 - June 2021",
          location: "Kuala Lumpur, Malaysia",
          description:
            "Started off as data engineer which helps on fine tuning countries to cater for our addressing product.Currently shifted into a more data science team that focus on building a new AI platform for the addressing processes.",
          color: "#271e2c",
        },
        {
          title: "Research Executive",
          company: "Astro Radio",
          company_url: "https://astroradio.com.my/",
          logo_path: "astro_radio_logo.png",
          duration: "Aug 2018 - June 2019",
          location: "Kuala Lumpur, Malaysia",
          description:
            "Mostly working to conduct research and insights about Malaysia's radio listenereship to help ourstakeholders understand the market more and target audience better.",
          color: "#ec008c",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my side projects that I tried to do when I am free, mainly to let me gain more knowledge on things that I don't get to touch while working.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_img.png",
    description:
      "Feel free to contact me via email or LinkedIn. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
  },
  blogSection: {
    title: "Me",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
