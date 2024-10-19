import {
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Layout from "./Layout";
import Button from "./ui/Button";
import Card from "./ui/Card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const values = [
  {
    icon: <HeartIcon className="w-12 h-12" />,
    title: "Забота",
  },
  {
    icon: <RocketLaunchIcon className="w-12 h-12" />,
    title: "Инновации",
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    title: "Надежность",
  },
  {
    icon: <UserGroupIcon className="w-12 h-12" />,
    title: "Командная работа",
  },
];

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeIn}>
          О компании MediPro
        </motion.h1>

        <motion.section
          className="mb-12"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Наша история</h2>
          <p className="text-lg leading-relaxed">
            MediPro была основана в 2005 году группой энтузиастов, стремящихся
            улучшить качество медицинского обслуживания путем внедрения
            передовых технологий. За прошедшие годы мы выросли из небольшого
            стартапа в ведущего поставщика медицинского оборудования,
            обслуживающего клиники и больницы по всей стране.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Наша миссия</h2>
          <p className="text-lg leading-relaxed">
            Наша миссия - обеспечивать пациентов высококачественной медицинской
            помощью, используя передовые технологии и индивидуальный подход к
            каждому. Мы стремимся улучшать жизни людей, предоставляя доступ к
            лучшему медицинскому оборудованию.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Наши ценности</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col items-center p-6">
                {value.icon}
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">
                  {value.title}
                </h3>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeIn}
          transition={{ delay: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="text-3xl font-semibold mb-4">Наша команда</h2>
          <p className="text-lg leading-relaxed mb-6">
            В MediPro работают более 200 высококвалифицированных специалистов,
            включая врачей различных специальностей, инженеров, медсестер и
            административный персонал. Наша команда - наша гордость и главный
            актив.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full self-center">
            Познакомиться с нашими специалистами
          </Button>
        </motion.section>
      </div>
    </Layout>
  );
};

export default About;
