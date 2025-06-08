'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import GithubIcon from '@/components/GithubIcon';
import LinkedInIcon from '@/components/LinkedInIcon';

export default function Portfolio() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const sections = [
                'hero',
                'about',
                'projects',
                'experience',
                'contact',
            ];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Dummy POST - just show success message
        alert('Message sent successfully! (This is a demo)');
    };

    const skillCategories = {
        languages: [
            { name: 'HTML5', logo: '/logos/HTML_logo.png' },
            { name: 'CSS3', logo: '/logos/CSS_logo.png' },
            { name: 'JavaScript', logo: '/logos/javascript_logo.png' },
            { name: 'TypeScript', logo: '/logos/typescript_logo.png' },
            { name: 'Python', logo: '/logos/python_logo.png' },
            { name: 'Java', logo: '/logos/java_logo.png' },
            { name: 'C#', logo: '/logos/C_Sharp_logo.png' },
            { name: 'R', logo: '/logos/R_logo.png' },
            { name: 'SQL', logo: '/logos/SQL_logo.png' },
        ],
        frameworksAndLibraries: [
            { name: 'React', logo: '/logos/react_logo.png' },
            { name: 'Next.js', logo: '/logos/next.js_logo.png' },
            { name: 'Vue.js', logo: '/logos/vue_logo.png' },
            { name: 'Node.js', logo: '/logos/node.js_logo.png' },
            { name: 'Tailwind CSS', logo: '/logos/tailwind_logo.png' },
            { name: 'Fast API', logo: '/logos/fast_api_logo.png' },
            { name: 'Docker', logo: '/logos/docker_logo.png' },
            { name: 'AWS', logo: '/logos/AWS_logo.png' },
            { name: 'Firebase', logo: '/logos/firebase_logo.png' },
        ],
        databasesAndORMs: [
            { name: 'MySQL', logo: '/logos/mysql_logo.png' },
            { name: 'PostgreSQL', logo: '/logos/postgres_logo.png' },
            { name: 'MongoDB', logo: '/logos/mongodb_logo.png' },
            { name: 'Redis', logo: '/logos/redis_logo.png' },
            { name: 'Prisma', logo: '/logos/prisma_logo.png' },
            { name: 'Supabase', logo: '/logos/supabase_logo.png' },
        ],
    };

    const projects = [
        {
            id: 1,
            name: 'E-Commerce Platform',
            description:
                'Full-stack web application built with React, Node.js, and MongoDB featuring user authentication and payment integration.',
            image: '/placeholder.svg?height=200&width=300',
        },
        {
            id: 2,
            name: 'ML Prediction Model',
            description:
                'Machine learning model for stock price prediction using Python, TensorFlow, and real-time data analysis.',
            image: '/placeholder.svg?height=200&width=300',
        },
        {
            id: 3,
            name: 'Mobile Task Manager',
            description:
                'Cross-platform mobile app developed with React Native, featuring offline sync and push notifications.',
            image: '/placeholder.svg?height=200&width=300',
        },
        {
            id: 4,
            name: 'Data Visualization Dashboard',
            description:
                'Interactive dashboard for business analytics using D3.js, React, and real-time WebSocket connections.',
            image: '/placeholder.svg?height=200&width=300',
        },
        {
            id: 5,
            name: 'AI Chatbot Assistant',
            description:
                'Intelligent chatbot powered by OpenAI API with natural language processing and context awareness.',
            image: '/placeholder.svg?height=200&width=300',
        },
        {
            id: 6,
            name: 'Blockchain Voting System',
            description:
                'Secure voting platform built on Ethereum blockchain with smart contracts and web3 integration.',
            image: '/placeholder.svg?height=200&width=300',
        },
    ];

    const experiences = [
        {
            position: 'Director of Engineering',
            company: 'Crimson Consultant Group',
            dates: 'February 2024 - May 2025',
            logo: '/experience_img/CCG.jpg',
            responsibilities: [
                'Spearheaded a client project for a multi-billion-dollar short-term rental company by directing product development teams to curate an application programming interface for 23,000 monthly active homeowner stakeholders',
                'Created an improved web application utilizing Vue and Google Firebase to store and display information seamlessly',
                'Managed a GitHub repository for a 10-member Agile team, overseeing commits and approving merge/pull requests',
            ],
        },
        {
            position: 'Software Engineer Intern',
            company: 'NextFoundArtist',
            dates: 'January 2025 - May 2025',
            logo: '/experience_img/NextFoundArtist.jpg',
            responsibilities: [
                'Established CRUD operations using Python, FastAPI, and SQL, optimizing data management and backend performance',
                'Enhanced the user dashboard utilizing React, Next.js, and TypeScript, ensuring a dynamic and responsive user interface',
                'Containerized 15 FastAPI endpoints with Docker and deployed via AWS SAM to AWS Lambda, cutting release time by 88%',
            ],
        },
        {
            position: 'Full Stack Software Engineer',
            company: 'HHQueen',
            dates: 'February 2025 - April 2025',
            logo: '/experience_img/HHQueen.jpg',
            responsibilities: [
                'Optimized database schema with Prisma, improving data management for user profiles, venues, and menu images',
                'Deployed a Next.js web app using React and TypeScript, facilitating B2B login and auto-fill search for venue access requests',
                'Designed API functions, including a business-owner notification system, ensuring the archiving of outdated venues',
            ],
        },
        {
            position: 'Software Engineer Intern',
            company: 'Valley Veterinary Hospital',
            dates: 'May 2024 - August 2024',
            logo: '/experience_img/ValleyVetPlaceholder.png',
            responsibilities: [
                'Developed an automated client registration system using React Native Expo and Supabase that reduced new client entry time by 10% and removed data-entry errors, allowing veterinary technicians to spend more time assisting clients and pets',
                'Integrated a Chrome extension to auto-populate new client information into veterinary management software, which streamlined workflow and minimized manual data handling, increasing the number of new clients every month',
                'Deployed a Next.js web app displaying real-time client data, enabling vet technicians to view and copy registrations',
            ],
        },
        {
            position: 'Algorithms Teaching Assistant',
            company: 'Loyola Marymount University',
            dates: 'August 2023 - May 2024',
            logo: '/experience_img/TeachingAssistant.jpg',
            responsibilities: [
                'Enabled understanding of Python algorithmic concepts for 75 students through 1-1 tutoring, facilitating academic success',
                'Assessed homework projects, providing detailed feedback to students to improve their understanding of algorithmic concepts',
                "Identified professors' needs with various workloads through meetings, reducing their work by 3 hours a week",
            ],
        },
        {
            position: 'Software Engineer Researcher',
            company: 'Loyola Marymount University',
            dates: 'May 2023 - June 2023',
            logo: '/experience_img/SoftwareEngineerResearcher.jpg',
            responsibilities: [
                'Designed a web app using React and the eBird API, improving online experience and access to avian knowledge',
                'Resolved API connectivity issues by rectifying the API key discrepancy, ensuring uninterrupted data flow and functionality',
                'Composed a responsive layout that adapts to various devices, enhancing accessibility and user engagement',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[#101014] text-[#ebebf0] font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#101014]/90 backdrop-blur-sm border-b border-[#91A3B2]/20">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={scrollToTop}
                        className="text-[#ebebf0] hover:text-[#0367a6] transition-colors cursor-pointer text-xl font-mono"
                    >
                        {'< / >'}
                    </button>

                    <nav className="flex items-center gap-6">
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`text-[#ebebf0] hover:text-[#0367a6] transition-colors ${
                                activeSection === 'about'
                                    ? 'text-[#0367a6]'
                                    : ''
                            }`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className={`text-[#ebebf0] hover:text-[#0367a6] transition-colors ${
                                activeSection === 'experience'
                                    ? 'text-[#0367a6]'
                                    : ''
                            }`}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`text-[#ebebf0] hover:text-[#0367a6] transition-colors ${
                                activeSection === 'projects'
                                    ? 'text-[#0367a6]'
                                    : ''
                            }`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`text-[#ebebf0] hover:text-[#0367a6] transition-colors ${
                                activeSection === 'contact'
                                    ? 'text-[#0367a6]'
                                    : ''
                            }`}
                        >
                            Contact
                        </button>

                        <LinkedInIcon width={24} height={24} />
                        <GithubIcon width={24} height={24} />

                        <Button
                            asChild
                            className="bg-[#0367a6] hover:bg-[#2d84d0] cursor-pointer text-white transition-colors !rounded-[0.5rem]"
                        >
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="hero"
                className="min-h-screen flex items-center justify-center px-4 pt-20"
            >
                <div
                    className={`container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl transition-all duration-1000 ${
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div
                        className={`transition-all duration-1000 delay-300 ${
                            isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-10'
                        }`}
                    >
                        <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#0367a6]/30 shadow-2xl">
                            <Image
                                src="/img/ProfilePic.jpg"
                                alt="Mitchell Cootauco"
                                width={256}
                                height={256}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div
                        className={`text-center lg:text-center transition-all duration-1000 delay-500 ${
                            isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-10'
                        }`}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                            Hi! I'm{' '}
                            <strong className="text-[#0367a6]">
                                Mitchell Cootauco
                            </strong>
                        </h1>
                        <div className="flex justify-center">
                            <p className="text-lg lg:text-xl text-[#91A3B2] max-w-2xl leading-relaxed">
                                <strong>Full Stack Software Engineer </strong>{' '}
                                based in Los Angeles
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 lg:py-32 px-4 bg-[#0f0f13]">
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-left">
                        About Me
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column - Profile Photo and Bio */}
                        <div className="flex flex-col items-center gap-8">
                            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#0367a6]/30 shadow-xl transition-transform duration-300 hover:scale-110">
                                <Image
                                    src="/img/ProfilePic2.jpg"
                                    alt="Mitchell Cootauco"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-[#ebebf0]">
                                    Fully committed to the philosophy of
                                    life-long learning, I'm a full stack
                                    developer with a deep passion for
                                    JavaScript, React and all things web
                                    development.
                                </p>
                                <p className="text-lg leading-relaxed text-[#ebebf0]">
                                    My skills don't stop there, during the
                                    pandemic, I've helped numerous small
                                    businesses navigate the digital landscape by
                                    building their online presence. When I'm not
                                    at my computer I love to spend my time
                                    cycling, taking photos, listening to music,
                                    and playing guitar.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Skills */}
                        <div>
                            <h3 className="text-2xl text-center font-bold mb-6 text-[#ebebf0]">
                                My Skills
                            </h3>
                            <div className="space-y-12">
                                {/* Languages and Frameworks/Libraries row */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    {/* Languages Column */}
                                    <div>
                                        <h4 className="text-xl text-center font-bold mb-8 text-[#0367a6]">
                                            Languages
                                        </h4>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                            {skillCategories.languages.map(
                                                (skill, index) => (
                                                    <div
                                                        key={index}
                                                        className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
                                                        style={{
                                                            animation: `fadeInUp 0.6s ease-out ${
                                                                index * 0.1
                                                            }s forwards`,
                                                            opacity: 0,
                                                        }}
                                                    >
                                                        <div className="w-16 h-16 flex items-center justify-center">
                                                            <Image
                                                                src={skill.logo}
                                                                alt={`${skill.name} logo`}
                                                                width={64}
                                                                height={64}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1a1a20] text-[#ebebf0] px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                            {skill.name}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Frameworks & Libraries Column */}
                                    <div>
                                        <h4 className="text-xl text-center font-bold mb-8 text-[#0367a6]">
                                            Frameworks & Libraries
                                        </h4>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                            {skillCategories.frameworksAndLibraries.map(
                                                (skill, index) => (
                                                    <div
                                                        key={index}
                                                        className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
                                                        style={{
                                                            animation: `fadeInUp 0.6s ease-out ${
                                                                index * 0.1
                                                            }s forwards`,
                                                            opacity: 0,
                                                        }}
                                                    >
                                                        <div className="w-16 h-16 flex items-center justify-center">
                                                            <Image
                                                                src={skill.logo}
                                                                alt={`${skill.name} logo`}
                                                                width={64}
                                                                height={64}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1a1a20] text-[#ebebf0] px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                            {skill.name}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Databases & ORMs row */}
                                <div>
                                    <h4 className="text-xl text-center font-bold mb-8 text-[#0367a6]">
                                        Databases & ORMs
                                    </h4>
                                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                                        {skillCategories.databasesAndORMs.map(
                                            (skill, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
                                                    style={{
                                                        animation: `fadeInUp 0.6s ease-out ${
                                                            index * 0.1
                                                        }s forwards`,
                                                        opacity: 0,
                                                    }}
                                                >
                                                    <div className="w-16 h-16 flex items-center justify-center">
                                                        <Image
                                                            src={skill.logo}
                                                            alt={`${skill.name} logo`}
                                                            width={64}
                                                            height={64}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1a1a20] text-[#ebebf0] px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                        {skill.name}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section
                id="experience"
                className="py-20 lg:py-32 px-4 bg-[#0f0f13]"
            >
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
                        Experience
                    </h2>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-start gap-8 transition-all duration-1000 ${
                                    isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-10'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex-1 lg:w-1/2">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-[#ebebf0]">
                                        {exp.position}
                                    </h3>
                                    <h4 className="text-xl mb-2 text-[#0367a6]">
                                        {exp.company}
                                    </h4>
                                    <p className="text-lg mb-6 text-[#91A3B2]">
                                        {exp.dates}
                                    </p>

                                    <ul className="space-y-3">
                                        {exp.responsibilities.map(
                                            (responsibility, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="text-[#0367a6] mt-2">
                                                        •
                                                    </span>
                                                    <span className="text-[#ebebf0] leading-relaxed">
                                                        {responsibility}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="lg:w-1/2 flex justify-center items-center">
                                    <div className="w-[90%] h-[300px] bg-[#1a1a1f] rounded-lg border border-[#91A3B2]/20 flex items-center justify-center p-8">
                                        <Image
                                            src={exp.logo || '/placeholder.svg'}
                                            alt={`${exp.company} logo`}
                                            width={500}
                                            height={300}
                                            className="max-w-full max-h-full object-contain opacity-80"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 lg:py-32 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
                        My Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`bg-[#1a1a1f] rounded-lg overflow-hidden border border-[#91A3B2]/20 hover:border-[#0367a6]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl group ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={
                                            project.image || '/placeholder.svg'
                                        }
                                        alt={project.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-[#ebebf0]">
                                        {project.name}
                                    </h3>
                                    <p className="text-[#91A3B2] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 lg:py-32 px-4">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
                        Contact Me
                    </h2>

                    <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2 text-[#ebebf0]"
                                >
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    className="bg-[#1a1a1f] border-[#91A3B2]/30 text-[#ebebf0] focus:border-[#0367a6] focus:ring-[#0367a6]"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2 text-[#ebebf0]"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    className="bg-[#1a1a1f] border-[#91A3B2]/30 text-[#ebebf0] focus:border-[#0367a6] focus:ring-[#0367a6]"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2 text-[#ebebf0]"
                            >
                                Message
                            </label>
                            <Textarea
                                id="message"
                                required
                                rows={6}
                                className="bg-[#1a1a1f] border-[#91A3B2]/30 text-[#ebebf0] focus:border-[#0367a6] focus:ring-[#0367a6] resize-none"
                                placeholder="Tell me about your project or just say hello!"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#0367a6] hover:bg-[#2d84d0] text-white py-3 text-lg font-medium transition-colors !rounded-[0.5rem]"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-[#91A3B2]/20">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center gap-6 mb-6">
                        <LinkedInIcon width={24} height={24} />
                        <GithubIcon width={24} height={24} />
                    </div>
                    <p className="text-[#ebebf0] text-sm">
                        © 2025 Mitchell Cootauco. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-[#0367a6] hover:bg-[#2d84d0] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <ChevronUp size={20} />
            </button>
        </div>
    );
}
