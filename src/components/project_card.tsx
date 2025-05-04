import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    coverImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, coverImage }) => {
    return (
        <div className="transition-opacity transform hover:scale-105 hover:opacity-100 hover:cursor-pointer opacity-30 bg-white shadow-md rounded-lg max-w-sm">
            {coverImage && (
                <img 
                    src={coverImage} 
                    alt={title} 
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
            )}
            <div className="p-2">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;