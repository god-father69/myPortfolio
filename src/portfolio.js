/* Change this file to get your personal Portfolio */

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
  username: "Sanu Das",
  title: "Hi all, I'm Sanu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sRz1Q1LrYaYA9hLOqh2usHAgHa8gmzck/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/god-father69",
  linkedin: "https://www.linkedin.com/in/sanukr/",
  gmail: "sanudas1202@gmail.com",
  facebook: "#",
  // medium: "#",
  stackoverflow: "https://stackoverflow.com/users/22601457/sanu-das",
  twitter: "https://twitter.com/sannuuu_",
  instagram: "https://instagram.com/itzsanu_?igshid=MzMyNGUyNmU2YQ==",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Utilizing various hosting platforms like Netlify, Heroku, Render, etc., for third-party service integration.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Sri City",
      logo: require("./assets/images/sricityLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "November 2020 - June 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full stack Developer Intern",
      company: "FindHer",
      companylogo: require("./assets/images/findher.jpeg"),
      date: "Aug 2023 – Present",
      // desc: "FindHer empowers women’s job search with necessary information they need to make informed career decisions.",
      descBullets: [
        "Developed 5+ product pages with corresponding back-end functionality",
        "Utilized Crunchbase APIs for Company data retrieval, eliminated multiple API calls using debouncing concept",
        "Designed a custom hook to track user page time and currently working on implementing review engagement features."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Lawazia Tech",
      companylogo: require("./assets/images/lawazia.jpeg"),
      date: "Jan 2023 – May 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets:[
        "Designed a custom hook to track user page time and currently working on implementing review engagement features.",
        "Developed re-usable components like Popups, Alert messages, etc and pages using React.Js and material UI",
        "Integrated front end with back-end using REST APIs."
      ]
    },
    {
      role: "Technical Content writer-Freelance",
      company: "DataFlair",
      companylogo: require("./assets/images/dataflair.jpeg"),
      date: "Feb 2023 – July 2023",
      descBullets:[
        "Worked with the SEO team throughout.",
        "Delivered 30+ articles on Node.Js and its modules.",
        "Prepared 100+ advanced level questions for the students."
      ]
    },
    {
      role: "Subject Matter Expert-CSE",
      company: "Chegg Inc",
      companylogo: require("./assets/images/chegg.jpeg"),
      date: "Feb 2023 – July 2023",
      desc:"As a Chegg Subject Matter Expert (SME) in Computer Science, I provided online tutoring services to students and assisted them with their homework and assignments. I shared my knowledge and expertise in computer science with students from around the world, helping them to understand complex concepts and achieve academic success."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my Projects:",
  projects: [
    {
      image: require("./assets/images/zrading.jpg"),
      projectName: "Zrading",
      projectDesc: "A platform for traders to give their services like copy trading and subscription based tips and signal.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zrading.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/flipr.jpg"),
      projectName: "Flipr-Stock price monitoring",
      projectDesc: "A project for Flipr-Hackathon, to monitor stock price.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fastidious-torte-cc50dc.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/speechai.jpg"),
      projectName: "Flipr-Stock price monitoring",
      projectDesc: "A project for Flipr-Hackathon, to monitor stock price.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://benevolent-frangollo-9bacbf.netlify.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "100X.VC Founder's Dating",
      subtitle:
        "Our startup was chosen to participate in the exclusive Founders Dating event hosted by 100x.vc, where I had the privilege of being the youngest founder in attendance.",
      image: require("./assets/images/100x.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://www.100x.vc/founders-dating"
        },
      ]
    },
    {
      title: "AIR-560 in WBJee",
      subtitle:
        "Achieved an all India rank of 560 in the general category out of 1 Lakh students in the WBJEE exam.",
      image: require("./assets/images/wbjee.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://wbjeeb.nic.in/WBJEEBBoardCMS/Page/Page?PageId=1&LangId=P"
        }
      ]
    },

    {
      title: "1st Prize in Treasure Hunt",
      subtitle: "Got 1st Prize in Treasure Hunt with 4 other members Organized by GDSC IIITS.",
      image: require("./assets/images/gdsc.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Website", url: "https://gdsc.community.dev/indian-institute-of-information-technology-sri-city/"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      url: "https://medium.com/@ff/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Volunteer Experience",
  subtitle: emoji(
    "In addition to my professional experiences, I've been actively involved in leadership roles too."
  ),

  talks: [
    {
      title: "Assistant Club Head,(Aug 2022-June 2023)",
      subtitle: "Served as an Assistant Club Head of GDSC, IIIT Sri City. Organized multiple hackathons and events.",
      slides_url: "https://bit.ly/ff-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "PR and Marketing Lead,GDSC",
      subtitle: "Served as an PR and Marketing Lead of IIIT Sri City from Aug 2021-June 2022",
      slides_url: "https://bit.ly/ff-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---gg-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-0000000000",
  email_address: "sanudas1202@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
