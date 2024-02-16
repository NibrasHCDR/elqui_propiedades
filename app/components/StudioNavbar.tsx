import Link from "next/link"

import { RiArrowGoBackLine } from "react-icons/ri";

function StudioNavbar(props: any) {
  return (
    <div className="w-full bg-[#13141B]">
        <div className="flex items-center justify-between p-5">
            <Link href={"/"} className="text-[#385AE0] flex items-center">
                <RiArrowGoBackLine className="h-6 w-6 text-[#385AE0] mr-2">
                </RiArrowGoBackLine>
                Volver a tu Sitio
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#385AE0]">
                <h1 className="font-bold text-white">
                     Para mas información visita nuestra web ⟶
                </h1>
                <Link 
                href={"https://xplendev.com/"}
                className="text-[#385AE0] font-bold ml-2">

                    www.xplendev.com

                </Link>
            </div>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar