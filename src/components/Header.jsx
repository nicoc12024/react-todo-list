import "../stylesheets/Header.css";

function Header() {
  const d = new Date();
  const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  return (
    <div className="header-container">
      <h1>Things To Do</h1>
      <div className="currentDate">
        <h3>{date}</h3>
      </div>
    </div>
  );
}
export default Header;
