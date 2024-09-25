import React from 'react';

const JobCard = ({ title, count }) => {
    return (
        <div className="w-full p-4 rounded-lg bg-[#fcffcb] shadow-lg border-2 border-gray-300">
            <div className="text-center overflow-hidden">
                <h2 className="text-sm md:text-xl font-bold mb-2">{title}</h2>
                <span className="text-sm md:text-xl">{count}</span>
            </div>
        </div>
    );
};

export default JobCard;