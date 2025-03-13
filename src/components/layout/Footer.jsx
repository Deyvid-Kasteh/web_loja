import React from 'react'

function Footer() {
  return (
    <footer className=" bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-2">Sobre Nós</h3>
            <p className="text-sm">
              Uma breve descrição da sua empresa ou site.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Links Úteis</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contato</h3>
            <p className="text-sm">
              Email: contato@exemplo.com
              <br />
              Telefone: (XX) XXXX-XXXX
            </p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            © 2024 Seu Nome ou Empresa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer