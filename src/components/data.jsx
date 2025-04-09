import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import Digital from "../assets/Digital.jpeg";
import Clothify from "../assets/Clothify.png";
import simon from "../assets/simon.png";
import Nike from "../assets/Nike.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

// Timeline icons
const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

// Services
export const service = [
  {
    title: "Web Design",
    desc: "The most modern and high-quality design made at a professional level.",
    logo: <MdOutlineWeb />
  },
  {
    title: "Web Development",
    desc: "The most modern and high-quality design made at a professional level.",
    logo: <FaLaptopCode />
  },
  {
    title: "Data Structure And Algorithm",
    desc: "Strong in DSA, problem-solving, algorithms, and coding efficiency.",
    logo: <FaMobileAlt />
  },
  {
    title: "Competitive Programming",
    desc: "Passionate about CP, competitive coding, problem-solving, and algorithm optimization.",
    logo: <FontAwesomeIcon icon={faLaptopCode} className="text-yellow-500 text-4xl" />
  },
];




//  Timeline
export const timeline = [
  {
    icon: schoolIcon,
    date: '2023 – 2027',
    title: 'B.Tech - Computer Science and Engineering',
    subtitle: 'MMMUT, Gorakhpur, Uttar Pradesh',
    desc: 'Currently pursuing B.Tech in CSE with a CGPA of 8.48. Studying core subjects including DSA, DBMS, OS, and Web Development.',
  },
  {
    icon: workIcon,
    date: '2023 – Present',
    title: 'DSA & Competitive Programming',
    desc: 'Solved 500+ problems across CodeChef, LeetCode, and Codeforces. Focused on algorithms, problem-solving, and performance optimization.',
  },
  
  {
    icon: workIcon,
    date: 'Mar 2024',
    title: 'Hackathon Participation',
    subtitle: 'Vultr Cloud Innovate Hackathon',
    desc: 'Developed cloud-based applications and gained hands-on experience in scalable web solutions. Received certificate of participation.',
  },
  {
    icon: workIcon,
    date: 'Feb 2024',
    title: 'Postman API Student Expert',
    desc: 'Completed Postman Student Expert training. Learned RESTful API testing, automation, and documentation using Postman.',
  },
  { icon: starIcon },
];

// Projects
export const projects = [
  {
    title: "Quiz App",
    description: "Developed a responsive Quiz App with timer, score tracking, authentication, random questions, leaderboard, categories, feedback, and real-time results.",
    techStack: ["React Js", "Tailwind"],
    link: "",
    github: 'https://github.com/Abhishek526-star/Quiz_App2',
    image: Digital
  },
  {
    title: "pokemon",
    description: "Built a Pokémon App using API integration to display characters, search/filter Pokémon, view stats, responsive UI, and real-time data rendering.",
    techStack: ["React", "Node.js","Tailwind"],
    link: "https://pokemon-eight-self.vercel.app/",
    github: 'https://github.com/Abhishek526-star/Pokemon',
    image: Nike
  },
  {
    title: "Tic Tac Toe Game",
    description: "Created a Tic Tac Toe game with multiplayer mode, turn tracking, win detection, reset button, responsive design, and smooth user interaction.",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://abhishek526-star.github.io/Tic-Tac-Toe-/",
    github: 'https://github.com/Abhishek526-star/Tic-Tac-Toe-',
    image: Clothify
  },
  {
    title: "Simon-Game",
    description: "Built an interactive Simon Game with color patterns, sound effects, score tracking, increasing difficulty, responsive design, and real-time user input.",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://abhishek526-star.github.io/Simon-Game/",
    github: 'https://github.com/Abhishek526-star/Simon-Game',
    image: simon
  }
];
