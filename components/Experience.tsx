'use client'
import { Component } from "@/components/ui/experience";

export const Experience = () => {
  const testimonials = [
    {
      text: 'Working as a freelance Senior Software Engineer with Koders Club, delivering and deploying scalable MEAN/MERN solutions for various clients. Develop full-stack features, design APIs, build dynamic frontends, manage MongoDB/PostgreSQL databases, and handle end-to-end deployments. Also support teams with architecture guidance, clean code practices, and smooth production rollouts.',
      name: 'Koders Club',
      date: ' (March 2025 - present)',
      jobtitle: 'Part-Time',
      skills: "Full-Stack Development · MEAN · MERN · Node.js · React · Angular · MongoDB · PostgreSQL · REST APIs · Deployment · CI/CD · Mentorship",
    },
    {
      text: 'Lead development of scalable full-stack solutions with Node.js and React, boosting client retention by 20% and improving system performance by 30% through microservices. Built a custom WhatsApp chatbot, integrated Shopify stores with external systems, and delivered integration solutions for eBay and Ecwid. Managed a team of developers, deployed new features, refactored APIs, designed efficient databases, documented PRDs, and optimized cloud costs — all while contributing to frontend and mobile tasks when needed.',
      name: 'Codup Pvt Ltd',
      date: '(Jan 2024 - Nov 2024)',
      jobtitle: 'Full-Time',
      skills: "React.js, Microservices, Software Development, Shopify, Ebay, ECWID, meta API's, Open API, PostgreSQL, Full-Stack Development, Jenkins, Redis, REST APIs, JavaScript, SQL · Nest.js, TypeScript, Jira, Git, Node.js"
    },
    {
      text: 'As a UX designer, I appreciate the attention to detail. The components are well-crafted. Played a key role in Dastgyr’s US$37M Series A funding by building and scaling a dynamic B2B marketplace for retailers and sellers across Pakistan. Led a team of 8 developers, developed and optimized microservices in Node.js on AWS, deployed 8+ new features, and refactored 50+ APIs — cutting complaints by 70%. Designed robust database structures, improved code quality through detailed PRs, and documented PRDs.',
      name: 'Dastgyr PTE Ltd',
      date: '(Feb 2022 - Jan 2024)',
      jobtitle: 'Full-Time',
      skills: "Microservice, Typescript, JavaScript, Node.js, React, Redis, Postgres, Sqlite, HTML, CSS, AWS, Kafka, Finja, Socket, Slack, Bitbucket, Gitlab, Jira, Knex, Firebase, Jest, Stripe",
    },
    {
      text: 'Worked on integration-focused projects, automating workflows using batch scripts and implementing webhooks, Socket.io, and real-time features. Contributed to both MEAN and MERN stack codebases. Guided integration logic, built REST APIs, and supported backend processes using Node.js, PHP, Redis, PostgreSQL, and Jenkins in an agile setup.',
      date: '(Feb 2022 - Dec 2022)',
      name: 'Inaequo Solutions',
      jobtitle: 'Part-Time',
      skills:"Node.js · React · Angular · MongoDB · Express · Webhooks · Socket.io · Redis · Automation Scripting · Jenkins · PostgreSQL · Git · Agile · PHP",
    },
    {
      text: 'Worked on integration-focused projects, automating workflows using batch scripts and implementing webhooks, Socket.io, and real-time features. Contributed to both MEAN and MERN stack codebases. Guided integration logic, built REST APIs, and supported backend processes using Node.js, PHP, Redis, PostgreSQL, and Jenkins in an agile setup.',
      name: 'NXT Labs',
      date: ' (March 2023 - June 2023)',
      jobtitle: 'Part-Time',
      skills: "Node.js · React · Angular · MongoDB · Express · Webhooks · Socket.io · Redis · Automation Scripting · Jenkins · PostgreSQL · Git · Agile · PHP",
    },
    {
      text: 'Delivered 10+ Finland-based projects at Progstream, building scalable web and mobile apps like an online store, ride-sharing app, farmer job portal, and dynamic UIs with Contentful & React. Worked with Node.js, React, Angular (old & new), .NET, Laravel, AWS, and PostgreSQL, using monolithic and microservices approaches. Managed secure payments, real-time features with Socket.io, deployment troubleshooting, and CI/CD pipelines with Jenkins in an agile team.',
      name: 'Progstream Pvt Ltd',
      date: ' (Feb 2019 - Dec 2021)',
      jobtitle: 'Full-Time',
      skills: "Angular | Node.js | Laravel | .Net | PostgreSQL | IoT | Sqlite | HTML | CSS | AWS | Kafka | Finja | Socket | Slack | Bitbucket | Gitlab | Jira | Knex | Firebase | Jest | Stripe",
    },
    {
      text: 'Developed a rice supply chain management system at Generic Solution, enabling better coordination between distributors, retailers, importers, and exporters. Used .NET Entity Framework 3 and AngularJS 1.x, later transitioned to Angular 6. Built REST APIs and UIs for inventory, transactions, and relationship tracking in the rice trade ecosystem.',
      name: 'Generic Solution',
      date: '(Dec 2018 - Feb 2019)',
      jobtitle: 'Full-Time',
      skills: ".NET · Entity Framework 3 · AngularJS 1.x · Angular 6 · REST APIs · Git · Backend Development",
    },
    {
      text: 'Started my career at Universal Information System, developing backend APIs for NAVEX (logistics) using Java Spring and designing/integrating frontend with AngularJS 1.x. Gained hands-on full-stack experience handling core logistics modules from backend logic to user interface.',
      name: 'U.I.S BPO',
      date: '(Feb 2018 - July 2018)',
      jobtitle: 'Full-Time',
      skills: "Java · Spring Framework · AngularJS 1.x · REST APIs · Frontend Integration",
    },
  ];

  return (
    <section id="experience"> 
      <div className="flex w-full h-screen justify-center items-center bg-linear-to-b to-black via-gray-950/80 from-black ">
        <Component testimonials={testimonials} />
      </div>
    </section>
  );
};

