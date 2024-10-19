import { motion } from "framer-motion";
import Layout from "./Layout.jsx";

import {
  BeakerIcon,
  CubeIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Button from "./ui/Button.jsx";
import Card from "./ui/Card.jsx";

const advantages = [
  {
    icon: <BeakerIcon className="h-12 w-12 text-white mb-4" />,
    title: "Широкий ассортимент",
    description:
      "Большой выбор медицинской техники для различных специальностей",
  },
  {
    icon: <CubeIcon className="h-12 w-12 text-white mb-4" />,
    title: "Ведущие производители",
    description: "Оборудование от известных мировых брендов",
  },
  {
    icon: <WrenchScrewdriverIcon className="h-12 w-12 text-white mb-4" />,
    title: "Техническая поддержка",
    description: "Профессиональная консультация и сервисное обслуживание",
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-white mb-4" />,
    title: "Гарантия качества",
    description: "Сертифицированное оборудование с гарантией производителя",
  },
];

const Hello = () => {
  return (
    <Layout>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Добро пожаловать в MediPro
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Ваш надежный поставщик медицинского оборудования
        </motion.p>
        <motion.div
          className="mb-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-6">
            Наши преимущества:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-md">
            {advantages.map((advantage) => (
              <Card
                key={advantage.title}
                className="flex flex-col items-center p-6"
              >
                {advantage.icon}
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Button
            to="/catalog"
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Просмотреть каталог
          </Button>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Hello;
