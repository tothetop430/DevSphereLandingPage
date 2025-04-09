import React from "react";
import { Linkedin } from "lucide-react";

<<<<<<< HEAD
const people = [
  {
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export default function MeetTeamSection() {
=======
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
>>>>>>> 69f45918706977b3d2c8a969974102ed472693b8
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          {/* <p className="mt-2 text-lg text-gray-600">Delivering excellence in every project</p> */}
        </div>
<<<<<<< HEAD
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {people.map((person, index) => (
            <div
            key={index}
            className="relative h-64 rounded-3xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${person.imageUrl})` }}
            />
  
            {/* LinkedIn Icon (Top Right) */}
            <a
              href={person.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 z-10"
              aria-label={`${person.fullName}'s LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
  
            {/* Bottom Info */}
            <div className="w-full flex justify-center">
              <div className="absolute bottom-3 w-[90%] bg-white bg-opacity-90 py-2 px-5 z-10 rounded-2xl">
                <div className="text-sm font-bold text-gray-900">{person.fullName}</div>
                <div className="text-xs text-violet-600">{person.role}</div>
              </div>
            </div>
          </div>
=======
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
>>>>>>> 69f45918706977b3d2c8a969974102ed472693b8
        ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}

export default MeetTeamSection;
>>>>>>> 69f45918706977b3d2c8a969974102ed472693b8
