import React from "react";

function Header() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("img/bg1.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-primary-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Anthony Morelli</h1>
            <p className="mb-5">
              I'm a web developer specializing in full stack web development.
            </p>
            <a href="#aboutme" className="btn btn-primary">
              About Me
            </a>
          </div>
        </div>
        {/* <h5 className="text-3xl">Full Stack Web Developer</h5> */}
      </div>
    </>
  );
}

export default Header;
