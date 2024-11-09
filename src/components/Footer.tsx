import Link from "next/link";
import bg from "../../public/encanador_footer.png";
import {
  FaFacebook,
<<<<<<< HEAD
=======
  FaTwitter,
>>>>>>> f4e5f81400da1e5b6c48c77841eeffd4ef44c4db
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Importando os ícones do react-icons

export function Footer() {
  return (
    <footer className="bg-AzulForte">
      <div className="w-screen overflow-y-auto">
        {" "}
        {/* Adicionando rolagem vertical */}
        <div className="flex mx-auto max-w-screen-xl">
          <div className="w-2/3 min-h-full">
            {/* cards */}
            <div className="grid grid-cols-2 h-5/6">
              <div className="flex flex-col col-start h-full justify-evenly">
                <div className="max-w-72">
                  <div className="flex items-center">
                    <img
                      src="./logoneg.png"
                      alt="Logo"
                      className="h-16 w-auto"
                    />
                    <h6 className="ml-2 mr-20 font-bold text-2xl whitespace-nowrap">
                      Mão na Roda
                    </h6>
                  </div>
                </div>
                <div className="max-w-72 text-gray-200 mt-[-30px] row-start-2">
                  <p>
                    Conectando você aos melhores profissionais para serviços
                    rápidos e confiáveis. Seu lar em boas mãos!
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600"
                  >
                    <FaFacebook size={40} />
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#775d9c]"
                  >
                    <FaInstagram size={40} />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600"
                  >
                    <FaLinkedin size={40} />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-700"
                  >
                    <FaYoutube size={40} />
                  </a>
                </div>
              </div>
              <div className="col-start-2 flex flex-col text-gray-200 h-full justify-evenly">
                <Link
                  href="mailto:suporte@maonaroda.com"
                  className="w-60 flex flex-row justify-start items-center cursor-pointer"
                >
                  <img src="./icones/icone_mail.svg" alt="" />
                  <p className="ps-2">suporte@maonaroda.com</p>
                </Link>
                <Link
                  href="#"
                  className="w-60 flex flex-row justify-start items-center cursor-pointer"
                >
                  <img src="./icones/icone_localizacao.svg" alt="" />
                  <p className="ps-2">Pelotas, RS - Sede</p>
                </Link>
                <Link
                  href="#"
                  className="w-60 flex flex-row justify-start text-wrap items-center cursor-pointer"
                >
                  <img src="./icones/icone_whats.svg" alt="" />
                  <div className="flex flex-col text-center">
                    <p className="">Whats App</p>
                    <p className="ps-2">(53) 99643 - 0964</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* copyright */}
            <div className="flex items-center h-1/6 text-gray-200 border-t border-t-AzulHr">
              <p>Copyright © 2024. a senac_rs_project. All rights reserved.</p>
            </div>
          </div>
          <div className="w-1/3 h-full">
            <img className="max-h-96" src="encanador_footer.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
