import { useState } from "react"
import img1 from "../assets/valores-img1.png"
import img2 from "../assets/valores-img2.png"
import img3 from "../assets/valores-img3.png"
import img4 from "../assets/valores-img4.png"

const Valores = () => {
    const [mostrarVideo, setMostrarVideo] = useState(false);
    return (
        <div className="p-33.75 ">
            <div className="flex gap-40 *:flex-1">
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={img1} alt="" />
                        <h6 className="font-bold text-2xl text-marron-medio-1">Missão</h6>
                    </div>
                    <p className="text-marron-black-2">Fornecer soluções, produtos e serviços
de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores
e sócios, através da criação de valores.</p>
                    </div>
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={img2} alt="" />
                        <h6 className="font-bold text-2xl text-marron-medio-1">Visão</h6>
                    </div>
                    <p className="text-marron-black-2">Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.</p>
                    </div>
                <div>
                    <div className="flex items-center gap-4 mb-5">
                        <img src={img3} alt="" />
                        <h6 className="font-bold text-2xl text-marron-medio-1">Valores</h6>
                    </div>
                    <p className="text-marron-black-2">Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente</p>
                    </div>
            </div>
            <div>
                <h2 className=" mt-33.75 text-[50px] leading-15 text-marron-medio-1 font-bold">Coisas boas acontecem àqueles
<br/>que gostam de café</h2>
<img onClick={() => setMostrarVideo(true)} src={img4} alt="" className="w-full mt-20 rounded-2xl cursor-pointer" />
            </div>
            <div className={` w-full h-screen bg-black/85 fixed top-0 left-0  justify-center items-center flex duration-200 ${mostrarVideo ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <iframe width="1000" height="600" src="https://www.youtube.com/embed/RWCP7z8ufiA?si=dOBJ0XxdyTDroLO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Valores;