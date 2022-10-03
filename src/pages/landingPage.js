import React from "react";
import sat from "../assets/sat4.png";

const landingPage = () => {
  const navigation = [
    { title: "Timeline", path: "/" },
    { title: "Missions", path: "/" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6 text-white">
          <a href="/">An0de</a>
          <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
            {navigation.map((item, idx) => (
              <li className="text-white-200" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
            <li></li>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            All space missions only at
            <span className="text-indigo-400"> Team An0de</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            To develop an engaging multimedia depiction of all NASA’s
            Earth-observing missions that demonstrates how the mission unfolds
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="https://earthobservatory.nasa.gov/"
              target="_blank"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Launch!
            </a>
            <a
              href="/"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img src={sat} className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
      </section>
    </div>
  );
};

export default landingPage;
