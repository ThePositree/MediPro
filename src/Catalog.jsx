import { motion } from "framer-motion";
import { useState } from "react";
import products from "./data/products.json";
import Layout from "./Layout";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Rating from "./ui/Rating";
import Select from "./ui/Select";

const categories = [
  "Все",
  "Диагностическое оборудование",
  "Хирургическое оборудование",
  "Реабилитационное оборудование",
  "Лабораторное оборудование",
];

const sortOptions = [
  { value: "ratingDesc", label: "Рейтинг (по убыванию)" },
  { value: "ratingAsc", label: "Рейтинг (по возрастанию)" },
  { value: "priceDesc", label: "Цена (по убыванию)" },
  { value: "priceAsc", label: "Цена (по возрастанию)" },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [sortBy, setSortBy] = useState("ratingDesc");

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "ratingAsc":
        return a.rating - b.rating;
      case "ratingDesc":
        return b.rating - a.rating;
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Каталог медицинского оборудования
        </motion.h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">
            Категории:
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                className={`text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-blue-500"
                    : "bg-white bg-opacity-10 hover:bg-blue-400"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">
            Сортировка:
          </h2>
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={(value) => setSortBy(value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="flex flex-col h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-blue-300 font-semibold">
                      {product.price.toLocaleString()} ₽
                    </p>
                    <Rating rating={product.rating} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
