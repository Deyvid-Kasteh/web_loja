"use client"

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = ({ produtos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === produtos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? produtos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Produtos em Destaque</h2>

      {/* Área principal do carrossel */}
      <div className="relative h-80">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="min-w-full h-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col items-center justify-center p-6">
                <div className="w-48 h-48 mb-4 overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {produto.nome}
                </h3>
                {produto.destaque && (
                  <span className="mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Destaque
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        aria-label="Produto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        aria-label="Próximo produto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de posição */}
      <div className="flex justify-center mt-4 gap-2">
        {produtos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
