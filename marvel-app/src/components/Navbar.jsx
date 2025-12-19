const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4">
      <span className="navbar-brand fw-bold">Marvel Explorer</span>

      <button
        className="btn btn-outline-light ms-auto"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
