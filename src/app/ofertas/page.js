"use client"

// pages/ofertas.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Star, ChevronDown, Filter, ArrowUpDown } from 'lucide-react';

export default function OfertasPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Dados simulados de produtos em oferta
  const ofertas = [
    { id: 1, nome: 'Smartphone XYZ', precoOriginal: 2499.90, precoAtual: 1899.90, desconto: 24, cor: 'bg-blue-400', avaliacao: 4.7 },
    { id: 2, nome: 'Notebook Ultra', precoOriginal: 5999.90, precoAtual: 4799.90, desconto: 20, cor: 'bg-purple-400', avaliacao: 4.5 },
    { id: 3, nome: 'Fone de Ouvido sem Fio', precoOriginal: 399.90, precoAtual: 249.90, desconto: 38, cor: 'bg-green-400', avaliacao: 4.8 },
    { id: 4, nome: 'Smart TV 4K 50"', precoOriginal: 3299.90, precoAtual: 2599.90, desconto: 21, cor: 'bg-red-400', avaliacao: 4.6 },
    { id: 5, nome: 'Câmera Digital Pro', precoOriginal: 1799.90, precoAtual: 1299.90, desconto: 28, cor: 'bg-yellow-400', avaliacao: 4.4 },
    { id: 6, nome: 'Relógio Inteligente', precoOriginal: 899.90, precoAtual: 599.90, desconto: 33, cor: 'bg-indigo-400', avaliacao: 4.3 },
    { id: 7, nome: 'Aspirador Robô', precoOriginal: 1499.90, precoAtual: 999.90, desconto: 33, cor: 'bg-teal-400', avaliacao: 4.7 },
    { id: 8, nome: 'Tablet Premium', precoOriginal: 2099.90, precoAtual: 1599.90, desconto: 24, cor: 'bg-pink-400', avaliacao: 4.5 },
  ];

  // Categorias para filtro
  const categorias = [
    "Eletrônicos", "Celulares", "Informática", "TV e Áudio", "Eletrodomésticos", "Casa Inteligente"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ofertas Especiais | LojaBR</title>
        <meta name="description" content="Aproveite as melhores ofertas com descontos exclusivos!" />
      </Head>


      <main className="container mx-auto px-4 py-8">
        {/* Banner principal */}
        <div className="w-full h-56 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Ofertas Imperdíveis!</h1>
            <p className="text-xl">Descontos de até 50% em produtos selecionados</p>
          </div>
        </div>

        {/* Filtros e ordenação */}
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <div className="relative mb-4 md:mb-0">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-gray-50"
            >
              <Filter size={16} />
              <span>Filtrar</span>
              <ChevronDown size={16} />
            </button>

            {filterOpen && (
              <div className="absolute z-10 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Categorias</h3>
                  <div className="space-y-2">
                    {categorias.map((categoria, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`cat-${index}`}
                          className="mr-2"
                        />
                        <label htmlFor={`cat-${index}`}>{categoria}</label>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-medium mt-4 mb-2">Faixa de Preço</h3>
                  <div className="flex justify-between">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-20 p-1 border border-gray-300 rounded"
                    />
                    <span className="mx-2">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-20 p-1 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700">
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-gray-50"
            >
              <ArrowUpDown size={16} />
              <span>Ordenar por</span>
              <ChevronDown size={16} />
            </button>

            {sortOpen && (
              <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                <div className="py-1">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Maior Desconto
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Menor Preço
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Maior Preço
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Melhor Avaliação
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ofertas.map((produto) => (
            <Link href={`/produto/${produto.id}`} key={produto.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Div colorida simulando imagem */}
                <div className={`${produto.cor} h-48 flex items-center justify-center`}>
                  <span className="text-white text-xl font-bold">Produto {produto.id}</span>
                </div>

                <div className="p-4">
                  <span className="inline-block bg-red-500 text-white text-xs font-bold rounded px-2 py-1 mb-2">
                    {produto.desconto}% OFF
                  </span>

                  <h3 className="font-medium text-gray-900">{produto.nome}</h3>

                  <div className="mt-1 flex items-center">
                    <div className="flex text-yellow-400">
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} className="text-gray-200 fill-current" />
                    </div>
                    <span className="ml-1 text-sm text-gray-500">{produto.avaliacao}</span>
                  </div>

                  <div className="mt-2">
                    <span className="text-gray-500 line-through text-sm">
                      R$ {produto.precoOriginal.toFixed(2)}
                    </span>
                    <div className="flex items-end">
                      <span className="text-xl font-bold text-gray-900">
                        R$ {produto.precoAtual.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">à vista</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      ou 10x de R$ {(produto.precoAtual / 10).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginação */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-4 py-2 border border-indigo-600 rounded-md bg-indigo-600 text-white">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              Próxima
            </button>
          </div>
        </div>
      </main>

      {/* Banner de newsletter */}
      <div className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Receba nossas ofertas exclusivas!</h3>
            <p className="text-gray-600 mb-4">Inscreva-se para receber promoções e novidades em primeira mão.</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-700">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}