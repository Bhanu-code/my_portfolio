

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Cloud, Terminal, Send, Calendar, MapPin } from 'lucide-react';

import hero3 from "../assets/hero3.png";


import ReactNative from "../../public/react-native.svg";
import TypeScript from "../../public/icons8-typescript.svg";
import Next from "../../public/next.svg"
import Remix from "../../public/remixjs.png";
import Node from "../../public/icons8-node-js.svg";
import Express from "../../public/icons8-express-js.svg";
import Nest from "../../public/icons8-nestjs.svg";
import CircleCI from "../../public/icons8-circleci.svg";
import Jenkins from "../../public/icons8-jenkins.svg";
import Linux from "../../public/icons8-linux-96.png";
import Ansible from "../../public/icons8-ansible.svg";
import Kubernetes from "../../public/icons8-kubernetes.svg";
import AWS from "../../public/icons8-aws.svg";
import GCP from "../../public/icons8-google-cloud.svg";
import Terraform from "../../public/icons8-terraform.svg";
import Docker from "../../public/icons8-docker.svg";
import Git from "../../public/icons8-git.svg";
import Jest from "../../public/icons8-jest-96.png";




// Animation variants
const sectionVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: 'easeOut' },
  }),
  hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const buttonVariants: any = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const inputVariants: any = {
  focus: { scale: 1.02, borderColor: '#3b82f6', transition: { duration: 0.3 } },
};

const Homepage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const experiences = [
    {
      company: 'Imparable Tech',
      position: 'Co Founder | Engineer',
      duration: 'June 2025 - Present',
      location: 'Kolkata, India',
      description: 'Lead development of web applications like Ecommerce, Matrimony, POS billing Softwares etc. Architected cloud services and mentored junior developers.',
      achievements: [
        'Developed web apps, backends and with load time & memory optimization',
        'Led migration to cloud-native architecture using GCP & AWS',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      technologies: ['Next.js', 'Remix.js', 'GCP', 'AWS', 'CircleCI']
    },
    {
      company: 'Cubiclespace.pro',
      position: 'Senior Frontend Engineer',
      duration: 'May 2024 - June 2025',
      location: 'Kolkata, INdia',
      description: 'Lead frontend development of the HRMS web application Q-Desk serving. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Engineered the client UI with load time optimization',
        'Led migration to cloud-native architecture using GCP',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Led product explaination in Investment roundes.'
      ],
      technologies: ['React', 'TypeScript', 'GCP', 'Docker', 'CircleCI']
    },
    {
      company: 'HCL Tech',
      position: 'Services Analyst Intern',
      duration: 'Dec 2022 - Feb 2023',
      location: 'Noida, India',
      description: 'As an services analyst intern learnt about ticket resolution and client communication.',
      achievements: [
        'Learnt about ticket resolution with ServiceNow etc.',
        'Learnt about communication with clients.',
      ],
      technologies: ['AWS', 'ServiceNow']
    },
    {
      company: 'Cognizant Technology Solutions',
      position: 'Programmer Analyst',
      duration: 'Feb 2022 - Sept 2022',
      location: 'Remote',
      description: 'Started career in a team-paced MNC comapany, learning modern development practices and contributing to application development process.',
      achievements: [
        'Contributed in development process of a big application in a big team.',
        'Participated in agile development processes',
        'Gained experience with PEGA CRPC, databases and monitoring'
      ],
      technologies: ['PEGA', 'MySQL', 'SQL', 'JSON']
    }
  ];

  const skills = [
    { name: 'TypeScript', category: 'Language', icon: TypeScript },
    { name: 'Git', category: 'Version Control', icon: Git },
    { name: 'React.js', category: 'Frontend', icon: ReactNative },
    { name: 'Remix.js', category: 'Frontend', icon: Remix },
    { name: 'Next.js', category: 'Frontend', icon: Next },
    { name: 'Node.js', category: 'Backend', icon: Node },
    { name: 'Express.js', category: 'Backend', icon: Express },
    { name: 'Nest.js', category: 'Backend', icon: Nest },
    { name: 'Jest', category: 'Testing', icon: Jest },
    { name: 'Linux', category: 'System', icon: Linux },
    { name: 'CircleCi', category: 'Automation', icon: CircleCI },
    { name: 'Jenkins', category: 'Automation', icon: Jenkins },
    { name: 'Ansible', category: 'Configuration', icon: Ansible },
    { name: 'Docker', category: 'Containerization', icon: Docker },
    { name: 'Kubernetes', category: 'Orchestration', icon: Kubernetes },
    { name: 'Terraform', category: 'IaC', icon: Terraform },
    { name: 'AWS', category: 'Cloud', icon: AWS },
    { name: 'GCP', category: 'Cloud', icon: GCP },
  ];

  const projects = [
    {
      title: 'Ratna Kuthi - E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Remix, TypeScript, and GCP services',
      tech: ['Remix.js', 'TypeScript', 'GCP', 'Docker'],
      category: 'Full Stack',
      link: "https://ratnakuthi.com"
    },
    {
      title: 'Content & Inventory System - Ratna Kuthi',
      description: 'Inventory & Content management dashboard for Ratna Kuthi Ecommerce Platform',
      tech: ['React.js', 'Node.js', 'GCP', 'Docker'],
      category: 'Full Stack',
      link: "https://cpanel.ratnakuthi.com"
    },
    {
      title: 'Subhobibaho Matrimony',
      description: 'Matrimony & match making platform exclusve for bengali community.',
      tech: ['React.js', 'Node.js', 'React Native', 'GCP', 'Docker'],
      category: 'Full Stack',
      link: "https://subhobibaho.com"
    },
    {
      title: 'Client Management System - Subhobibaho',
      description: 'Client management system for Subhobibaho Matrimony.',
      tech: ['React.js', 'Node.js', 'GCP', 'Docker'],
      category: 'Full Stack',
      link: "https://cpanel.subhobibaho.com"
    },
    {
      title: 'Earthaam - Real Estate',
      description: 'Modern website for real estate company Earthaam.',
      tech: ['Next.js', 'AWS Cloudfront', 'AWS S3', 'Route 53',],
      category: 'Frontend',
      link: 'https://earthaam.netlify.app/',
      playstore: ''
    },
    {
      title: 'Daksh Infraspace - Real Estate',
      description: 'Modern website for real estate company Daksha Infraspace & Daksh Buildcon.',
      tech: ['Next.js', 'AWS Cloudfront', 'AWS S3', 'Route 53',],
      category: 'Frontend',
      link: 'https://dakshainfratech.netlify.app/',
      playstore: ''
    },
    {
      title: 'DTS Fincorp - Loan & DSA Services',
      description: 'Modern website for processing client loan requirments like CIBILE score checking and document verifcation',
      tech: ['React', 'TypeScript', 'Node.js', 'Hostinger'],
      category: 'Full Stack',
      link: 'https://dtsfincorp.in'
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1D2027]">
      {/* Navigation */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1D2027] border-b border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              Bhanu Chowhan
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-gray-400 hover:text-white transition-colors ${activeSection === section ? 'text-red-500' : ''
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="bg-[#1D2027] py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <motion.div className="space-y-4" variants={sectionVariants}>
              <motion.span
                className="text-red-500 text-xl font-medium"
                variants={sectionVariants}
              >
                Welcome
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                variants={sectionVariants}
              >
                Bhanu Chowhan
              </motion.h1>
              <motion.p
                className="text-gray-400 text-lg max-w-xl"
                variants={sectionVariants}
              >
                Full Stack Engineer | Cloud Architect
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                <motion.a
                  href="https://github.com/Bhanu-code"
                  target="_blank"
                  whileHover="hover"
                  variants={buttonVariants}
                  className="p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhanu-chowhan-130816266/"
                  target="_blank"
                  whileHover="hover"
                  variants={buttonVariants}
                  className="p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:bhanuchowhan652@gmail.com"
                  whileHover="hover"
                  variants={buttonVariants}
                  className="p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                  <Mail size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden"
            >
              <img
                src="/hero.png"
                alt="Bhanu Chowhan"
                className="rounded-xl cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <motion.div className="space-y-6" variants={sectionVariants}>
            <motion.span className="text-red-500 font-medium" variants={sectionVariants}>
              About Me
            </motion.span>
            <motion.h2 className="text-3xl font-bold" variants={sectionVariants}>
              Passionate Software Engineer
            </motion.h2>
            <motion.p className="text-gray-600 max-w-2xl" variants={sectionVariants}>
              I'm a software engineer with 2 years of experience building scalable web applications and cloud infrastructure.
              My expertise spans frontend development with React and Remix, backend services with Node.js, and cloud deployment
              using AWS, GCP, Docker, and Infrastructure as Code tools.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={sectionVariants}
            >
              {[
                { icon: <Code className="w-5 h-5 text-blue-600" />, text: 'Frontend Development' },
                { icon: <Server className="w-5 h-5 text-green-600" />, text: 'Backend Services' },
                { icon: <Cloud className="w-5 h-5 text-purple-600" />, text: 'Cloud Architecture' },
                { icon: <Terminal className="w-5 h-5 text-orange-600" />, text: 'DevOps & Automation' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                  variants={cardVariants}
                  custom={index}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative"
          >
            <img src={hero3} className='w-full max-w-md' />
          </motion.div>
        </div>
      </motion.section>


      {/* Skills Section */}
      <motion.section
        id="skills"
        className="bg-gray-50 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-12" variants={sectionVariants}>
            <motion.span className="text-red-500 font-medium" variants={sectionVariants}>
              Skills
            </motion.span>
            <motion.h2 className="text-3xl font-bold mt-2" variants={sectionVariants}>
              Technologies I Work With
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <img src={skill.icon} alt="icon" className='size-8' />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                    <p className="text-gray-600 text-sm">{skill.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-500 font-medium">Experience</span>
            <h2 className="text-3xl font-bold mt-2">Professional Journey</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.company}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.position}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{experience.company}</h4>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                  </div>
                  <div className="flex flex-col md:text-right gap-2">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-12" variants={sectionVariants}>
            <motion.span className="text-red-500 font-medium" variants={sectionVariants}>
              Projects
            </motion.span>
            <motion.h2 className="text-3xl font-bold mt-2" variants={sectionVariants}>
              Featured Work
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg">
                    {project.category}
                  </span>
                  <a href={project.link} target='_blank' className="text-gray-600 hover:text-blue-600">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="bg-[#1D2027] py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-12" variants={sectionVariants}>
            <motion.span className="text-red-500 font-medium" variants={sectionVariants}>
              Contact
            </motion.span>
            <motion.h2 className="text-3xl font-bold text-white mt-2" variants={sectionVariants}>
              Let's Connect
            </motion.h2>
            <motion.p className="text-gray-400 mt-4 max-w-2xl mx-auto" variants={sectionVariants}>
              I'm always interested in new opportunities and exciting projects. Get in touch to discuss how we can work together!
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-6" variants={sectionVariants}>
              <motion.div
                className="flex flex-col gap-4"
                variants={sectionVariants}
              >
                {[
                  { icon: <Mail className="w-5 h-5 text-blue-600" />, text: 'bhanuchowhan652@gmail.com' },
                  { icon: <Linkedin className="w-5 h-5 text-blue-600" />, text: 'https://www.linkedin.com/in/bhanu-chowhan' },
                  { icon: <Github className="w-5 h-5 text-blue-600" />, text: 'https://github.com/Bhanu-code' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                    variants={cardVariants}
                    custom={index}
                  >
                    {item.icon}
                    <span className='text-[#F0F0F0]'>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={inputVariants} whileFocus="focus">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border bg-[#F0F0F0] border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-[#F0F0F0] border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>
              <motion.div variants={inputVariants} whileFocus="focus">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#F0F0F0] border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1D2027] border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bhanu Chowhan. Built with React, TypeScript & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;