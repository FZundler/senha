import { useState, useEffect } from "react";
import axios from "axios";

interface Anuncio {
    id: number;
    titulo: string;
    descricao: string;
    categoria: string;
    localidade: string;
    preco: string;
}

export function AnunciosCard() {
    const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
    const [categoria, setCategoria] = useState("");
    const [localidade, setLocalidade] = useState("");

    // Função para carregar anúncios com base nos filtros
    const fetchAnuncios = async () => {
        try {
            const response = await axios.get("/api/anuncios", {
                params: {
                    categoria,
                    localidade
                }
            });
            setAnuncios(response.data);
        } catch (error) {
            console.error("Erro ao carregar anúncios:", error);
        }
    };

    useEffect(() => {
        fetchAnuncios();
    }, [categoria, localidade]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            {/* Filtros */}
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2 text-gray-900">Filtrar Anúncios</h2>
                <label className="block mb-2">
                    Categoria:
                    <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Todas</option>
                        <option value="Elétrica">Elétrica</option>
                        <option value="Jardinagem">Jardinagem</option>
                        <option value="Limpeza">Limpeza</option>
                        <option value="Reformas">Reformas</option>
                    </select>
                </label>
                <label className="block mb-4">
                    Localidade:
                    <input
                        type="text"
                        value={localidade}
                        onChange={(e) => setLocalidade(e.target.value)}
                        className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ex: São Paulo"
                    />
                </label>
                <button
                    onClick={fetchAnuncios}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                >
                    Aplicar Filtros
                </button>
            </div>

            {/* Exibição de Anúncios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {anuncios.length > 0 ? (
                    anuncios.map((anuncio) => (
                        <div
                            key={anuncio.id}
                            className="bg-blue-900 text-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
                        >
                            <h3 className="text-xl font-semibold">{anuncio.titulo}</h3>
                            <p className="text-sm text-gray-300 mt-2">{anuncio.descricao}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-gray-400">{anuncio.localidade}</span>
                                <span className="text-lg font-semibold text-blue-600">{anuncio.preco}</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-sm text-gray-400">{anuncio.categoria}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-500 col-span-full">Nenhum anúncio encontrado.</p>
                )}
            </div>
        </div>
    );
}

export default AnunciosCard;