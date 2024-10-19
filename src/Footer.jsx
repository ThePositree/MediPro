import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "./images/Logo";
import Odnoklassniki from "./images/Odnoklassniki";
import VK from "./images/VK";

const FooterLink = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        {children}
      </Link>
    </li>
  );
};

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FooterSection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    {children}
  </motion.div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const SocialLink = ({ href, aria, children }) => (
  <motion.a
    href={href}
    aria-label={aria}
    className="text-white hover:text-blue-300 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  aria: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const quickLinks = [
  { to: "/", text: "Главная" },
  { to: "/catalog", text: "Каталог" },
  { to: "/about", text: "О нас" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <motion.footer
      className="mt-12 bg-white bg-opacity-10 p-8 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <FooterSection title="О компании">
            <p className="text-opacity-80 mb-2">
              MediPro - ваш надежный поставщик медицинского оборудования с 2005
              года. Мы стремимся обеспечивать медицинские учреждения
              высококачественной техникой для улучшения здоровья пациентов.
            </p>
            <p className="text-opacity-80">
              ИНН: 1234567890 | ОГРН: 1234567890123
            </p>
          </FooterSection>

          <FooterSection title="Быстрые ссылки">
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.text}
                </FooterLink>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Контакты">
            <p className="text-white text-opacity-80 mb-2">
              Адрес: г. Москва, ул. Медицинская, д. 1
            </p>
            <p className="text-white text-opacity-80 mb-2">
              Email: info@medipro.com
            </p>
            <p className="text-white text-opacity-80 mb-2">
              Телефон: +7 (123) 456-78-90
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="#" aria="Мы в Одноклассниках">
                <Odnoklassniki />
              </SocialLink>
              <SocialLink href="#" aria="Мы ВКонтакте">
                <VK />
              </SocialLink>
            </div>
          </FooterSection>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center text-white text-opacity-60 text-sm mr-4">
            © {currentYear} MediPro. Все права защищены.
          </div>
          <Logo width={35} height={35} />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
