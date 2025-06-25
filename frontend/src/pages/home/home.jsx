import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
    const cards = [
        {
            imagem: '/assets/discord_yt_twich_kick.png',
        },
        {
            imagem: '/assets/pessoa_usando_rede.png'
        },
        {
            imagem: '/assets/centralize_seu_publico.png',
        },
        {
            imagem: '/assets/pessoa_usando_rede.png',
        },
    ];

    return (
        <div className="bg-gradient-to-br from-blue-950 to-green-900 min-h-screen">
            <div className="p-4">
                <title>Rede Gamer - Nos conheça melhor</title>

                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 10000 }}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-transparent rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src={card.imagem} alt={card.titulo} className="w-full h-120 object-cover" />
                                {/* <div className="p-4">
                                    <h3 className="text-lg font-bold mb-1">{card.titulo}</h3>
                                    <p className="text-sm text-gray-600">{card.descricao}</p>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="p-4 text-white h-280 flex flex-col items-center text-center">
                <p>
                    <span className="text-2xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                        Busque pelo seu criador de conteúdo preferido.
                    </span>
                    <br /><br />

                    <img
                        src="/assets/busca_perfil_home.png"
                        alt="Local para buscar perfil"
                        className="w-265 h-110 object-cover rounded-lg shadow-lg border-2 border-blue-500"
                    />
                    <br /><br />

                    <span className="text-2xl font-semibold text-green-400 hover:text-green-500 transition duration-300 ease-in-out">
                        Cadastre-se e crie a sua página agora mesmo!
                    </span>
                    <br /><br />

                    <img
                        src="/assets/perfil_cauenj.png"
                        alt="Perfil de CaueNJ"
                        className="w-265 h-110 object-cover rounded-lg shadow-lg border-2 border-green-500"
                    />
                </p>
            </div>

        </div>
    );
}
