import Image from 'next/image'
import Inicio from '../app/components/Inicio'
import Header from './components/Header'
import Seccion1 from './components/seccion_1/Seccion1'

export default function Home() {
  return (
    <>
    <section className="" id="header">
      <Header />
    </section>

    <section className="" id="inicio">
        <Inicio />
      </section>

      <section className="" id="seccion1">
        <Seccion1 />
      </section>
    </>
  )
}
