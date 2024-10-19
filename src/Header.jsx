import { Link } from "react-router-dom";
import Logo from "./images/Logo";
import Button from "./ui/Button";

const links = [
  { to: "/", text: "Главная" },
  { to: "/catalog", text: "Каталог" },
  { to: "/about", text: "О нас" },
];

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" className="flex-shrink-0 mb-4 sm:mb-0">
            <Logo className="h-10 w-auto" />
          </Link>
          <nav className="flex justify-center items-center space-x-2 ">
            {links.map((link) => (
              <Button
                to={link.to}
                key={link.to}
                className="text-sm font-medium bg-blue-500 hover:bg-blue-600"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                {link.text}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
