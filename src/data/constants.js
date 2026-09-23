import discord_bot_thumbnail from '../images/discord_bot_thumbnail.jpg'
import spendwise_thumbnail from '../images/spendwise_thumbnail.jpg' 
import progresspal_thumbnail from '../images/progresspal_thumbnail.jpg'
import kpit_certificate from '../images/kpit_certificate.jpg'

import eventloop_card from '../images/eventloop-card.svg'
import bitmask_card from '../images/bitmask-card.svg'
import bluetooth_icon from '../images/bluetooth-icon.svg'
import cgc_logo from '../images/cgc-logo.webp'
import netaji_logo from '../images/netaji-logo.jpg'
import holy_family_logo from '../images/holy-family-logo.png'
import kpit_logo from '../images/kpit-logo.png'

export const Bio = {
  name: "Vipin Kumar",
  roles: ["Software Engineer", "C++ Developer", "Embedded Systems Engineer"],
  description:
    "Software Engineer building production C++ software for automotive infotainment (IVI) systems \u2014 Bluetooth connectivity stacks and AOSP-based application features, shipped to production for OEM clients.",
  github: "https://github.com/VipinKum4r",
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  linkedin: "https://www.linkedin.com/in/vipinkum4r/",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Embedded, Bluetooth & Linux",
    skills: [
      {
        name: "Linux",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
      {
        name: "AOSP / Android",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
      },
      {
        name: "Bluetooth (HFP, PBAP, MAP, BLE)",
        image: bluetooth_icon,
      },
    ],
  },
  {
    title: "Testing & Build Tools",
    skills: [
      {
        name: "Google Test (GTest)",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "CMake",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cmake/cmake-original.svg",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub Actions",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Shell Scripting",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: kpit_logo,
    role: "Engineer",
    company: "KPIT Technologies",
    date: "Feb 2026 - Present",
    desc: "Solely designed and implemented a reverse-camera parking-guidance overlay feature at the application layer on a TCC805x-based AOSP infotainment platform, shipped to production for an OEM client. Independently triaged and resolved ~20 Bluetooth defects (connection drops, pairing, audio routing, HFP/PBAP) within a 15-engineer cross-functional team.",
    skills: ["C++", "AOSP", "Android", "Bluetooth", "Linux"],
  },
  {
    id: 1,
    img: kpit_logo,
    role: "Associate Engineer",
    company: "KPIT Technologies",
    date: "Feb 2025 - Jan 2026",
    desc: "Designed and developed reusable C++ modules for core Bluetooth connectivity profiles (HFP, PBAP, MAP, BLE) within an automotive IVI head unit, collaborating directly with OEM clients. Performed root cause analysis and resolved critical defects via HCI and Bluetooth sniffer log analysis. Authored GTest unit tests covering 10+ multithreaded/embedded components. Automated a Linux-based build/deploy/file-transfer pipeline (Docker + shell scripting), cutting a 5-step manual process to one command.",
    skills: ["C++14/17", "Bluetooth", "GTest", "CMake", "Docker", "Linux"],
  },
  {
    id: 2,
    img: kpit_logo,
    role: "Trainee",
    company: "KPIT Technologies",
    date: "Dec 2023 - Jan 2025",
    desc: "Ramped up on modern C++ (C++14/17), multithreaded and embedded systems, socket programming, and Agile/Scrum and Git-based workflows. Converted to full-time Associate Engineer based on performance.",
    skills: ["C++", "C", "Multithreading", "Git", "Agile/Scrum"],
    doc: kpit_certificate,
  },
];

export const education = [
  {
    id: 0,
    img: cgc_logo,
    school: "Chandigarh Engineering College, Chandigarh",
    date: "June 2020 - August 2024",
    grade: "7.80 CGPA",
    desc: "Bachelor's degree in Computer Science, with a specialization in Artificial Intelligence & Machine Learning, at Chandigarh Engineering College, Chandigarh. Coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    degree: "Bachelor of Technology - BTech, Computer Science (Specialization: AI & ML)",
  },
  {
    id: 1,
    img: netaji_logo,
    school: "Netaji Model School, Ropar",
    date: "Apr 2019 - Apr 2020",
    grade: "69%",
    desc: "I completed my class 12 high school education at Netaji Model School, Ropar, where I studied Science with Maths.",
    degree: "CBSE(XII), Non Medical",
  },
  {
    id: 2,
    img: holy_family_logo,
    school: "Holy Family Convent School, Ropar",
    date: "Apr 2017 - Apr 2018",
    grade: "84.6%",
    desc: "I completed my class 10 education at Holy Family Convent School, Ropar, where I studied Science with Computer Application.",
    degree: "ICSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "EventLoop — GTest Coverage",
    date: "Open Source Contribution",
    description:
      "Added GTest unit test coverage from scratch to a C++17 object-oriented event loop library for Linux, improving coverage from 0% to 88.6% (functions) / lines, with CMake restructuring and Windows/MSVC cross-platform support.",
    image: eventloop_card,
    tags: ["C++17", "GTest", "CMake", "lcov", "OpenCppCoverage"],
    category: "systems",
    github: "https://github.com/VipinKum4r/EventLoop",
  },
  {
    id: 1,
    title: "Bitmask — Secure File Sharing",
    date: "Open Source Contribution",
    description:
      "Contributed Windows portability to a hybrid-encryption (RSA-2048 + AES-256) secure file-sharing and communication tool, extending compatibility beyond the existing Linux/Mac support baseline.",
    image: bitmask_card,
    tags: ["Python", "OpenSSL", "PKI"],
    category: "systems",
    github: "https://github.com/VipinKum4r/Bitmask",
  },
  {
    id: 2,
    title: "SpendWise",
    date: "Sept 2024 - Nov 2024",
    description:
      "A sleek finance tracker web app that allows users to securely manage and track their income, expenses, assets, and investments. It offers a user-friendly interface and responsive design for effective financial management.",
    image: spendwise_thumbnail,
    tags: [
      "Flask",
      "HTML",
      "CSS",
      "Javascript",
      "Docker",
      "SQLite",
    ],
    category: "web app",
    github: "https://github.com/VipinKum4r/Spend-Wise",
    webapp: "https://youtu.be/X2Fc5-c2SBU",
  },
  {
    id: 3,
    title: "Discord bot",
    date: "Oct 2024 - Dec 2024",
    description:
      "This project is a Critical Ops Discord Bot designed to fetch and display player statistics for the game Critical Ops. Using the discord.py library, the bot allows users to retrieve in-depth stats by entering commands like !stats <username>. It connects to the game's public API to gather information such as player rank, kills, deaths, wins, losses, and other performance metrics for a specific season. This bot aims to enhance the gaming experience by providing an intuitive way for players to track their performance and share stats in their Discord community.",
    image: discord_bot_thumbnail,
    tags: [
      "Flask",
      "discord.py",
      "threading",
    ],
    category: "web app",
    github: "https://github.com/VipinKum4r/Critical-ops-discord-bot",
  },
  {
    id: 4,
    title: "ProgressPal",
    date: "Nov 2024 - Dec 2024",
    description:
      "ProgressPal is a web app for tracking fitness and lifestyle goals, featuring user authentication, habit/workout tracking. Built with Django, MySQL, and a responsive frontend.",
    image: progresspal_thumbnail,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "MySQL",
      "Docker",
    ],
    category: "web app",
    github: "https://github.com/VipinKum4r/ProgressPal",
    webapp: "https://youtu.be/fucR8H75BLQ",
  },
];

export const TimeLineData = [
  { year: 2020, text: "Started my coding journey" },
  { year: 2023, text: "Joined KPIT Technologies as a Graduate Engineering Trainee" },
  { year: 2025, text: "Converted to full-time Associate Engineer" },
  { year: 2026, text: "Promoted to Engineer" },
];