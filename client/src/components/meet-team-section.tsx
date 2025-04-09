import React from "react";
import { Linkedin } from "lucide-react";

type Person = {
  fullName: string;
  role: string;
  linkedinUrl: string;
  imageUrl: string;
};

type PeopleListProps = {
  people: Person[];
};

const MeetTeamSection: React.FC<PeopleListProps> = ({ people }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          {/* <p className="mt-2 text-lg text-gray-600">Delivering excellence in every project</p> */}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
            <div
            key={index}
            className="flex items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
            >
            <img
                src={person.imageUrl}
                alt={person.fullName}
                className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div className="flex-1">
                <div className="text-lg font-semibold">{person.fullName}</div>
                <div className="text-sm text-gray-500">{person.role}</div>
            </div>
            <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
            >
                <Linkedin className="w-5 h-5" />
            </a>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTeamSection;