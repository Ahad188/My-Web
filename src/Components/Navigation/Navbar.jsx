import "./Navbar.css";
const Navbar = () => {
     const item =  <>
     <li><a href="/home">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#portfolio">Portfolio</a></li>
     <li><a href="#contact">Contact</a></li>
     </>
           
     
  return (
    <div className="">
      {/*  */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f75023] rounded-box w-52"
            >
               {item}
            </ul>
          </div>
          <a href="/" className="logo">Bin<span>Das!</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="nav">
            {item}
          </ul>
        </div>
        <div className="navbar-end">
        <a href="https://drive.google.com/file/d/1rN_6PleWlTO5NLZXks_YacpL7Eqidgzr/view?usp=sharing" target="/_blank" className="top-btn">Resume</a>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Navbar;

 
