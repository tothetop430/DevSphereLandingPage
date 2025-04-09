import React from "react";
import { Linkedin } from "lucide-react";

const people = [
  {
    id: 1,
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 5,
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 6,
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 7,
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 8,
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 9,
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 10,
    fullName: "Alice Johnson",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com/in/alicejohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 11,
    fullName: "Bob Smith",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 12,
    fullName: "Carol White",
    role: "UX Designer",
    linkedinUrl: "https://linkedin.com/in/carolwhite",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export function MeetTeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          {/* <p className="mt-2 text-lg text-gray-600">Delivering excellence in every project</p> */}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {people.map((person, index) => (
            <div
              key={person.linkedinUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
}