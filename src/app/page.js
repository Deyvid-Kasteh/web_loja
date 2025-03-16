"use client"
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Erro ao carregar as imagens:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Mudar a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <Head>
        <title>Carrossel Simples</title>
        <meta
          name="description"
          content="Um carrossel simples com imagens de diferentes cores."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-screen">
        <div
          className="w-1/2 max-w-md overflow-hidden rounded-lg shadow-md relative"
          style={{ width: "500px", height: "400px" }}
        >
          <div
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-screen bg-center bg-cover relative"
                style={{ width: "500px", height: "400px" }}
              >
                <div
                  style={{ backgroundColor: image.color }}
                  className="absolute inset-0 opacity-75"
                ></div>
              </div>
            ))}
          </div>

          {/* Controle de navegação */}
          <div className="flex absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex - 1 + images.length) % images.length
                )
              }
              className="bg-white text-black px-4 py-2 rounded-full mr-2"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
              }
              className="bg-white text-black px-4 py-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}