import React from 'react';
import { MapPin, Users, Activity } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';

// Import images
import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';

import bergsonImg from '../assets/projects/bergson.png';
import project4 from '../assets/projects/project4.jpg';
import project5 from '../assets/projects/project5.jpg';
import project6 from '../assets/projects/project6.jpg';

const projects = [
    {
        id: 1,
        address: "בר כוכבא",
        tenants: 32,
        role: "מארגן דיירים",
        status: "הושלם התהליך, קידום ברשויות",
        stage: "שלב 5 | קידום להיתרים וביצוע",
        image: project1,
        stageNumber: 5
    },
    {
        id: 2,
        address: "ביאליק 8–12",
        tenants: 32,
        role: "מארגן דיירים",
        status: "הושלם התהליך, קידום ברשויות",
        stage: "שלב 5 | קידום להיתרים וביצוע",
        image: project2,
        stageNumber: 5
    },
    {
        id: 3,
        address: "ברגסון 1–5",
        tenants: 32,
        role: "מארגן דיירים",
        status: "הושלם התהליך, קידום ברשויות",
        stage: "שלב 5 | קידום להיתרים וביצוע",
        image: bergsonImg,
        stageNumber: 5
    },
    {
        id: 4,
        address: "ביאליק",
        tenants: 84,
        role: "מארגן דיירים",
        status: "בחירת חברה יזמית",
        stage: "שלב 4 | מכרז יזמים ומשא ומתן",
        image: project4,
        stageNumber: 4
    },
    {
        id: 5,
        address: "חננאל",
        tenants: 18,
        role: "מארגן דיירים",
        status: "בחירת חברה יזמית",
        stage: "שלב 4 | מכרז יזמים ומשא ומתן",
        image: project5,
        stageNumber: 4
    },
    {
        id: 6,
        address: 'חיד"א',
        tenants: 180,
        role: "מארגן דיירים",
        status: "בחירת נציגות דיירים",
        stage: "שלב 2 | מינוי נציגות",
        image: project6,
        stageNumber: 2
    }
];

const getStageColor = (stage) => {
    switch (stage) {
        case 5: return "bg-green-100 text-green-700 border-green-200";
        case 4: return "bg-blue-100 text-blue-700 border-blue-200";
        case 2: return "bg-orange-100 text-orange-700 border-orange-200";
        default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">

            <div className="container mx-auto px-4">
                <center className="mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text text-center mb-6">
                            פרויקטים <span className="text-brand-gold">בהתחדשות עירונית</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
                            תמונת מצב עדכנית של הפרויקטים שאני מלווה בשטח.
                        </p>
                    </Reveal>
                </center>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={project.id} delay={index * 0.1} direction="up">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                                {/* Image Cover */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={`פרויקט ${project.address}`}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                    <h3 className="absolute bottom-4 right-4 text-white text-2xl font-bold z-20 flex items-center gap-2">
                                        <MapPin size={20} className="text-brand-gold" />
                                        {project.address}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="space-y-4 flex-grow">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Users size={18} className="text-brand-gold shrink-0" />
                                            <span><span className="font-bold">{project.tenants}</span> דיירים</span>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Activity size={18} className="text-brand-gold shrink-0" />
                                            <span>
                                                <span className="block text-sm text-gray-500 mb-0.5">סטטוס:</span>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <div className={`text-center py-2 px-4 rounded-lg border font-bold text-sm ${getStageColor(project.stageNumber)}`}>
                                            {project.stage}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
