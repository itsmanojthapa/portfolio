import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import * as motion from "framer-motion/client";

const socialLinks = [
  {
    icon: IoMailOutline,
    href: "mailto:imailmanojthapa@example.com",
    label: "Email",
  },
  { icon: FaGithub, href: "https://github.com/itsmanojthapa", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/itsmanojthapa",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/itsmanojthapa",
    label: "Twitter",
  },
  {
    icon: SiHashnode,
    href: "https://hashnode.com/@itsmanojthapa",
    label: "Blogs",
  },
];

const experiences = [
  {
    company: "SELF",
    role: "Full Stack Developer",
    period: "Present",
    description:
      "Focused on learning through experimentation and product development.",
  },
];

const projects = [
  {
    title: "IGNOU-DSC",
    description: "Collage social media platform.",
    technologies: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Prisma",
      "NodeJS",
      "NextAuth",
    ],
    github: "https://github.com/itsmanojthapa/ignou-dsc",
    live: "https://ignou-dsc.vercel.app",
    image: "/IGNOUDSC.png",
  },
  {
    title: "Portfolio",
    description: "The website you are currently on.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/itsmanojthapa/portfolio",
    live: "https://itsmanojthapa.tech",
    image: "/portfolio.png",
  },
];

const openSourceContributions = [
  {
    name: "Rocket.Chat",
    description:
      "Rocket.Chat is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection.",
    technologies: ["Next.js", "Meteor", "Websockets", "NodeJS"],
    link: "https://github.com/RocketChat/Rocket.Chat/pulls?q=is%3Apr+author%3Aitsmanojthapa+is%3Aclosed",
  },
];

const accordionItems = [
  {
    value: "about",
    title: "About Me",
    content: (
      <p className="text-gray-400">
        I am a MERN stack developer with a passion for building efficient and
        scalable web applications. Leveraging MongoDB, Express.js, React, and
        Node.js, I create high-quality solutions tailored to client needs. iam
        always eager to enhance user experience and optimize performance in
        every project I undertake.
      </p>
    ),
  },
  {
    value: "experience",
    title: "Experience",
    content: experiences.map((exp, index) => (
      <Card key={index} className="mb-4 border-none bg-slate-900 p-4">
        <h3 className="font-semibold text-white">{exp.company}</h3>
        <div className="flex justify-between text-sm">
          <p className="text-white">{exp.role}</p>
          <p className="text-slate-400">{exp.period}</p>
        </div>
        <p className="mt-1 text-sm text-gray-400">{exp.description}</p>
      </Card>
    )),
  },
  {
    value: "skills",
    title: "Skills",
    content: (
      <div className="flex flex-wrap gap-2">
        {[
          "JavaScript/TypeScript",
          "React.js/Next.js",
          "Node.js",
          "Express.js",
          "Tailwind CSS",
          "SQL/NoSQL → Prisma ORM",
          "Postgress",
          "MongoDB",
          "git",
          "Docker",
          "Postman",
          "GraphQL",
          "Figma",
          "Monorepo → Turborepo",
        ].map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-slate-700 text-white hover:bg-gray-600"
          >
            {skill}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    value: "projects",
    title: "Projects",
    content: (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="border-gray-700 bg-gray-900">
            <CardHeader>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1200}
                height={630}
                className="rounded-lg"
              />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-400">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    ),
  },
  {
    value: "opensource",
    title: "Open Source Contributions",
    titleExtra: (
      <a
        href="https://itsmanojthapa.notion.site/Open-Source-Contributions-1110cfc965168045b794fc494b997564?pvs=4"
        target="_blank"
        className="text-blue-400 hover:text-blue-300"
      >
        <FaLink size={16} />
      </a>
    ),
    content: (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {openSourceContributions.map((project, index) => (
          <Card key={index} className="border-gray-700 bg-gray-900 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                <FaLink />
              </a>
            </div>
            <p className="mb-4 text-sm text-slate-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    ),
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="m-5 flex min-h-screen w-screen max-w-4xl flex-col p-8 text-white"
    >
      <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold">Manoj Thapa</h1>
            <a href="mailto:imailmanojthapa@gmail.com">
              <Badge variant="secondary" className="whitespace-nowrap">
                Hire Me!
              </Badge>
            </a>
          </div>
          <p className="text-md max-w-md text-pretty font-medium text-gray-400">
            Full Stack Developer → MERN.
            <br /> 📍 Gurugram, Haryana
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 p-1 text-gray-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <Image
          src="/me.gif"
          alt="Profile picture of Sujith Thirumalaisamy"
          width={120}
          height={120}
          className="rounded-md invert"
        />
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Accordion
          type="multiple"
          defaultValue={[
            "about",
            "experience",
            "projects",
            "skills",
            "opensource",
          ]}
          className="w-full space-y-4"
        >
          {accordionItems.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
            >
              <AccordionItem
                value={item.value}
                className="rounded-lg border border-gray-700 bg-slate-950 bg-opacity-70"
              >
                <AccordionTrigger className="px-4 py-2 text-lg font-bold transition-colors hover:bg-gray-800 hover:no-underline">
                  {item.titleExtra ? (
                    <div className="flex items-center gap-3">
                      {item.title}
                      {item.titleExtra}
                    </div>
                  ) : (
                    item.title
                  )}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2 text-gray-300">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
