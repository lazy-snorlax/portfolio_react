import React from "react";

function Footer() {
  return (
    <footer className="p-10 text-primary-content footer-center flex-row">
      <div className="">
        <div className="flex-none px-2 mx-2">
          <p>Copyright &copy; 2022. All rights reserved</p>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <a
              href="https://www.linkedin.com/in/anthony-morelli-246a69178/"
              target="_blank"
              referrerpolicy="no-referrer"
              className="text-3xl px-4"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/lazy-snorlax"
              target="_blank"
              referrerpolicy="no-referrer"
              className="text-3xl"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
