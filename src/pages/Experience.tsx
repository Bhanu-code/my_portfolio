import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and reduced deployment time by 60%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Terraform'],
      highlights: [
        'Architected and deployed microservices on AWS EKS',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations Ltd.',
      period: '2022 - 2023',
      location: 'Bangalore, India',
      description: 'Developed full-stack applications using modern JavaScript frameworks and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Remix', 'TypeScript', 'GCP', 'Linux', 'Ansible'],
      highlights: [
        'Built responsive web applications with Remix and TypeScript',
        'Automated infrastructure provisioning using Ansible',
        'Collaborated with DevOps team to implement monitoring solutions'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <h4 className="text-xl text-blue-300 mb-2">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="mr-2" size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="mr-2" size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3 text-white">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-3 text-white">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-2xl font-bold text-blue-400 mr-2">2+</span>
            <span className="text-gray-300">Years of Professional Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience
