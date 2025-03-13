// pages/novidades.js
import Head from "next/head";
import Link from "next/link";
import { Calendar, Star, ChevronRight, Bell } from "lucide-react";

export default function NovidadesPage() {
  // Dados simulados de produtos novos
  const novidades = [
    {
      id: 101,
      nome: "Smart Watch Pro 5",
      lancamento: "10/03/2025",
      preco: 1299.9,
      cor: "bg-emerald-400",
      avaliacao: 4.9,
      categoria: "Smartwatches",
    },
    {
      id: 102,
      nome: "Fone Bluetooth Elite",
      lancamento: "08/03/2025",
      preco: 499.9,
      cor: "bg-blue-400",
      avaliacao: 4.7,
      categoria: "Áudio",
    },
    {
      id: 103,
      nome: 'Monitor UltraWide 34"',
      lancamento: "05/03/2025",
      preco: 2799.9,
      cor: "bg-purple-400",
      avaliacao: 4.8,
      categoria: "Monitores",
    },
    {
      id: 104,
      nome: "Console GameMax X",
      lancamento: "01/03/2025",
      preco: 3999.9,
      cor: "bg-red-400",
      avaliacao: 5.0,
      categoria: "Games",
    },
    {
      id: 105,
      nome: "Teclado Mecânico RGB",
      lancamento: "28/02/2025",
      preco: 399.9,
      cor: "bg-yellow-400",
      avaliacao: 4.6,
      categoria: "Periféricos",
    },
    {
      id: 106,
      nome: "Câmera de Segurança WiFi",
      lancamento: "25/02/2025",
      preco: 349.9,
      cor: "bg-indigo-400",
      avaliacao: 4.5,
      categoria: "Casa Inteligente",
    },
  ];

  // Categorias de destaque
  const categoriasDestaque = [
    { nome: "Smartphones", cor: "bg-blue-500" },
    { nome: "Notebooks", cor: "bg-purple-500" },
    { nome: "Tablets", cor: "bg-green-500" },
    { nome: "Smart TVs", cor: "bg-red-500" },
    { nome: "Smartwatches", cor: "bg-yellow-500" },
  ];

  // Próximos lançamentos
  const proximosLancamentos = [
    {
      id: 201,
      nome: "Smartphone NextGen 12",
      data: "25/03/2025",
      cor: "bg-blue-300",
    },
    {
      id: 202,
      nome: "Tablet Ultra Slim",
      data: "28/03/2025",
      cor: "bg-green-300",
    },
    {
      id: 203,
      nome: "Notebook ProWork X1",
      data: "03/04/2025",
      cor: "bg-purple-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Novidades | LojaBR</title>
        <meta
          name="description"
          content="Confira os produtos mais recentes e lançamentos exclusivos"
        />
      </Head>


      <main className="container mx-auto px-4 py-8">
        {/* Banner principal */}
        <div className="w-full h-56 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Novidades e Lançamentos
            </h1>
            <p className="text-xl">
              Seja o primeiro a conhecer os produtos mais recentes
            </p>
          </div>
        </div>

        {/* Newsletter de novidades */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold flex items-center">
                <Bell size={20} className="mr-2 text-teal-600" />
                Receba alertas de lançamentos
              </h2>
              <p className="text-gray-600 mt-1">
                Cadastre-se para ser notificado quando novos produtos chegarem
              </p>
            </div>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button className="bg-teal-600 text-white px-6 py-2 rounded-r-md hover:bg-teal-700">
                Cadastrar
              </button>
            </div>
          </div>
        </div>

        {/* Categorias em destaque */}
        <h2 className="text-2xl font-bold mb-4">Categorias em Destaque</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {categoriasDestaque.map((categoria, index) => (
            <Link
              href={`/categoria/${categoria.nome.toLowerCase()}`}
              key={index}
              className="block"
            >
              <div
                className={`${categoria.cor} h-32 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center`}
              >
                <span className="text-white text-xl font-bold">
                  {categoria.nome}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Produtos recém chegados */}
        <h2 className="text-2xl font-bold mb-4">Recém Chegados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {novidades.map((produto) => (
            <Link href={`/produto/${produto.id}`} key={produto.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Div colorida simulando imagem */}
                <div
                  className={`${produto.cor} h-48 flex items-center justify-center relative`}
                >
                  <span className="text-white text-xl font-bold">
                    Produto {produto.id}
                  </span>
                  <span className="absolute top-3 left-3 bg-white text-teal-600 text-xs font-bold rounded-full px-3 py-1 flex items-center">
                    <Calendar size={12} className="mr-1" /> Novo
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">
                      {produto.nome}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {produto.categoria}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Lançado em: {produto.lancamento}
                  </p>

                  <div className="mt-2 flex items-center">
                    <div className="flex text-yellow-400">
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star
                        fill="currentColor"
                        size={16}
                        className={
                          produto.avaliacao < 5
                            ? "text-gray-200 fill-current"
                            : ""
                        }
                      />
                    </div>
                    <span className="ml-1 text-sm text-gray-500">
                      {produto.avaliacao}
                    </span>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-end">
                      <span className="text-xl font-bold text-gray-900">
                        R$ {produto.preco.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        à vista
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      ou 10x de R$ {(produto.preco / 10).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Próximos lançamentos */}
        <h2 className="text-2xl font-bold mb-4">Em Breve na LojaBR</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left">Produto</th>
                  <th className="py-3 px-4 text-left">Data Prevista</th>
                  <th className="py-3 px-4 text-left">Ação</th>
                </tr>
              </thead>
              <tbody>
                {proximosLancamentos.map((produto) => (
                  <tr key={produto.id} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div
                          className={`${produto.cor} h-12 w-12 rounded flex items-center justify-center mr-3`}
                        >
                          <span className="text-white font-bold text-xs">
                            Novo
                          </span>
                        </div>
                        <span className="font-medium">{produto.nome}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2 text-teal-600" />
                        {produto.data}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm hover:bg-teal-200">
                        Avise-me
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blog de tecnologia */}
        <h2 className="text-2xl font-bold mb-4">Blog de Tecnologia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-800 h-48 flex items-center justify-center text-white text-center p-6">
              <h3 className="text-xl font-bold">
                Tecnologias que vão revolucionar 2025
              </h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">
                Descubra as principais tendências tecnológicas que prometem
                mudar o mercado neste ano.
              </p>
              <Link
                href="/blog/tecnologias-2025"
                className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                Leia mais <ChevronRight size={16} />
              </Link>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-800 h-48 flex items-center justify-center text-white text-center p-6">
              <h3 className="text-xl font-bold">
                Guia: Como escolher o smartphone ideal para você
              </h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">
                Confira dicas importantes para encontrar o smartphone perfeito
                para o seu perfil de uso.
              </p>
              <Link
                href="/blog/guia-smartphones"
                className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                Leia mais <ChevronRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </main>


    </div>
  );
}
