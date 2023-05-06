import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextApi } from "../State/context";


const Detail = () => {
  const [show, setShow] = useState(false);
  const {
    state: { tv },
  } = useContext(contextApi);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShow(false);
    alert("Ticket booked successfully!");
  };

 
  return (
    <section
      className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 h-screen place-items-center pt-10 gap-4 ${
        show ? "overflow-hidden" : ""
      }`}
    >
      {/* img section  */}
      <div className="h-[25rem] md:h-[35rem]">
        <img
          src={
            tv.show.image
              ? tv.show.image.original
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={tv.show.name}
          className="rounded-xl"
        />
      </div>

      {/* summary section  */}
      <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
        <Link
          to="/"
          className="text-para_text transition duration-200 ease-in hover:text-white hover:tracking-wider"
        >
          <button
          className="bg-white px-4 py-1 text-xl font-semibold rounded-2xl hover:bg-para_text active:scale-90">
          Home / {tv.show.id}
          </button>
        </Link>
        <h1 className="text-6xl font-bold text-center py-2">{tv.show.name}</h1>
        <div className="flex justify-between items-center gap-4">
          <div>
            {tv.show.genres.map((genre) => (
              <span
                key={genre}
                className="border border-white/50 rounded-lg px-3 py-1 mr-3"
              >
                {genre}
              </span>
            ))}
          </div>

          <button
            className="bg-blue px-4 py-1 text-xl font-semibold rounded-2xl hover:bg-blue/40 active:scale-90"
            onClick={() => setShow(true)}
          >
            Book Now
          </button>
        </div>
        <div className="px-2">
          <h1 className="font-bold text-xl mb-1">STORY:</h1>
          <p className="text-para_text">
            {tv.show.summary.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        <div className="text-para_text px-2 pb-10">
          <h1 className="text-white font-bold text-xl mb-1">DETAILS:</h1>
          <p>Status: {tv.show.status}</p>
          <p>First air date: {tv.show.premiered || "Unknown"}</p>
          <p>Spoken language: {tv.show.language}</p>
          <p>Runtime: {tv.show.runtime || "Unknown"} minute</p>
        </div>
      </div>

      {/* booking model  */}
      
      {show && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Book Ticket</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="movieName">
                  Movie Name
                </label>
                <input
                  className="text-black border rounded-lg py-2 px-3"
                  type="text"
                  name="movieName"
                  id="movieName"
                  value={tv.show.name}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="userName">
                  Name
                </label>
                <input
                  className="border rounded-lg py-2 px-3"
                  type="text"
                  name="userName"
                  id="userName"
              
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border rounded-lg py-2 px-3"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="border rounded-lg py-2 px-3"
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                />
                <div className="flex justify-end">
                <button className="bg-blue px-4 py-1 text-white font-semibold rounded-lg hover:bg-blue/80 active:scale-90 mr-2 mt-2">
                  Book
                </button>
                <button className="bg-gray-300 px-4 py-1 text-white font-semibold rounded-lg hover:bg-para_text active:scale-90 mt-2" onClick={() => setShow(false)}>
                  Cancel
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
