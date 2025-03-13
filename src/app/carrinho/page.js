"use client"

// pages/carrinho.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ChevronRight,
  CreditCard,
  ArrowLeft,
} from "lucide-react";

export default function CarrinhoPage() {
  // Estado para os itens do carrinho
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nome: "Smartphone XYZ",
      cor: "bg-blue-400",
      preco: 1899.9,
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Fone de Ouvido sem Fio",
      cor: "bg-green-400",
      preco: 249.9,
      quantidade: 2,
    },
    {
      id: 6,
      nome: "Relógio Inteligente",
      cor: "bg-indigo-400",
      preco: 599.9,
      quantidade: 1,
    },
  ]);

  // Função para alterar quantidade
  const alterarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  // Função para remover item
  const removerItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calcular subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  // Valores fixos para frete e desconto
  const frete = 29.9;
  const cupomDesconto = 100.0;

  // Calcular total
  const total = subtotal + frete - cupomDesconto;

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Carrinho de Compras | LojaBR</title>
        <meta
          name="description"
          content="Revise os itens em seu carrinho e finalize sua compra"
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Meu Carrinho</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h2 className="text-xl font-medium mb-4">
              Seu carrinho está vazio
            </h2>
            <p className="text-gray-600 mb-6">
              Que tal aproveitar nossas ofertas especiais?
            </p>
            <Link
              href="/ofertas"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 inline-block"
            >
              Ver ofertas
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Lista de produtos */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Cabeçalho da tabela */}
                <div className="hidden md:grid md:grid-cols-12 text-sm font-medium bg-gray-50 p-4">
                  <div className="md:col-span-6">Produto</div>
                  <div className="md:col-span-2 text-center">Preço</div>
                  <div className="md:col-span-2 text-center">Quantidade</div>
                  <div className="md:col-span-2 text-right">Subtotal</div>
                </div>

                {/* Itens do carrinho */}
                {cartItems.map((item) => (
                  <div key={item.id} className="border-t border-gray-200">
                    <div className="grid md:grid-cols-12 gap-4 p-4">
                      {/* Produto */}
                      <div className="md:col-span-6 flex items-center space-x-4">
                        <div
                          className={`${item.cor} h-20 w-20 rounded flex items-center justify-center`}
                        >
                          <span className="text-white font-bold">
                            Item {item.id}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium">{item.nome}</h3>
                          <button
                            onClick={() => removerItem(item.id)}
                            className="text-red-500 text-sm flex items-center mt-2 hover:text-red-700"
                          >
                            <Trash2 size={14} className="mr-1" /> Remover
                          </button>
                        </div>
                      </div>

                      {/* Preço */}
                      <div className="md:col-span-2 flex items-center justify-center md:justify-center">
                        <span className="md:hidden font-medium mr-2">
                          Preço:
                        </span>
                        <span>R$ {item.preco.toFixed(2)}</span>
                      </div>

                      {/* Quantidade */}
                      <div className="md:col-span-2 flex items-center justify-start md:justify-center">
                        <span className="md:hidden font-medium mr-2">
                          Quantidade:
                        </span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() =>
                              alterarQuantidade(item.id, item.quantidade - 1)
                            }
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3">{item.quantidade}</span>
                          <button
                            onClick={() =>
                              alterarQuantidade(item.id, item.quantidade + 1)
                            }
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                        <span className="md:hidden font-medium mr-2">
                          Subtotal:
                        </span>
                        <span className="font-medium">
                          R$ {(item.preco * item.quantidade).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botões de navegação */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <Link
                  href="/ofertas"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <ArrowLeft size={16} className="mr-1" /> Continuar comprando
                </Link>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cupom de desconto"
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                    Aplicar
                  </button>
                </div>
              </div>
            </div>

            {/* Resumo da compra */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold mb-4">Resumo da Compra</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal (
                      {cartItems.reduce(
                        (total, item) => total + item.quantidade,
                        0
                      )}{" "}
                      itens):
                    </span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Frete:</span>
                    <span>R$ {frete.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Desconto:</span>
                    <span>- R$ {cupomDesconto.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-500 text-right mt-1">
                      em até 10x de R$ {(total / 10).toFixed(2)} sem juros
                    </div>
                  </div>
                </div>

                <button className="w-full bg-indigo-600 text-white font-medium py-3 rounded-md flex items-center justify-center hover:bg-indigo-700">
                  <CreditCard size={18} className="mr-2" />
                  Finalizar Compra
                </button>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">
                    Formas de pagamento aceitas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                      Visa
                    </div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                      MC
                    </div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                      Amex
                    </div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                      Pix
                    </div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                      Boleto
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <p>Frete calculado para CEP: 01310-100</p>
                  <button className="text-indigo-600 hover:text-indigo-800 mt-1">
                    Alterar CEP
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <h3 className="text-green-800 font-medium flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Envio Garantido
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Receba em até 3 dias úteis para este CEP ou devolvemos seu
                  dinheiro.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
