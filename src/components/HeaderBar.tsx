import Image from "next/image"

const HeaderBar = () => {
    return (
        <div className={`fixed top-0 flex min-h-[60px] items-center border bg-[#4792e6] 
        w-full justify-center pl-8 pr-8 border-spacing-2 z-20`}>
        <div className={`flex w-[1000px] justify-between`}>
            <div>
                <Image
                    src={`/images/clock3.png`}
                    alt={`Ícone de Clock`}
                    height={40}
                    width={40}
                    priority={true}
                />
            </div>
            <div></div>
            <div className={`justify-center items-center flex`}>
                <button className={`bg-slate-950 pl-4 pr-4 rounded-md 
                transition-colors hover:bg-[#f7f7f7] hover:text-black`}>
                    Bater Ponto
                </button>
            </div>
            </div>
        </div>
    )
}

export default HeaderBar
