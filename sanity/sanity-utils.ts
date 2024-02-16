
import { createClient, groq } from "next-sanity";
import {apiVersion, dataset, projectId} from '../sanity/env'

export const dynamic = 'force-dynamic';
export const revalidate = 1;


export async function getHeader() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "header"]{
        _id,
        _createdAt,
        "logo": logo.asset->url,
        menu1,
        menu2,
        menu3,
        url,
        descripcion
    }`
  )

}

export async function getPortada() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "portada"]{
        _id,
        _createdAt,
        "fondo": fondo.asset->url,
        titulo1,
        titulo2,
        boton,
        url,
        descripcion
    }`
  )

}


export async function getTerrenos() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "terrenos"]{
      _id,
      _createdAt,
      "imagen_1": imagen_1.asset->url,
      "imagen_2": imagen_2.asset->url,
      "imagen_3": imagen_3.asset->url,
      "imagen_4": imagen_4.asset->url,
      "imagen_5": imagen_5.asset->url,
      "imagen_6": imagen_6.asset->url,
      nombre,
      "slug": slug.current,
      valor,
      ubicacion,
      ubicacionEnlace,
      metrosCuadrados,
      descripcion,
      detalle
    }`
  )

}

export async function getSeccion1() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "seccion1"]{
        _id,
        _createdAt,
        titulo1,
        titulo2,
        descripcion
    }`
  )

}

export async function getSeccion2() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "seccion2"]{
        _id,
        _createdAt,
        titulo1,
        titulo2,
        descripcion
    }`
  )

}

export async function getCasas() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "casas"]{
      _id,
      _createdAt,
      "imagen_1": imagen_1.asset->url,
      "imagen_2": imagen_2.asset->url,
      "imagen_3": imagen_3.asset->url,
      "imagen_4": imagen_4.asset->url,
      "imagen_5": imagen_5.asset->url,
      "imagen_6": imagen_6.asset->url,
      nombre,
      "slug": slug.current,
      valor,
      ubicacion,
      ubicacionEnlace,
      metrosCuadrados,
      dormitorios,
      banos,
      descripcion,
      detalle
    }`
  )

}

export async function getContacto() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "contacto"]{
      _id,
      _createdAt,
      titulo1,
      descripcion1,
      enlace1,
      titulo2,
      descripcion2,
      enlace2,
      titulo3,
      descripcion3,
      enlace3,
      titulo4,
      descripcion4,
      nombre,
      telefonoCorreo,
      asunto,
      mensaje,
      descripcion,
    }`
  )

}

export async function getFooter() {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "footer"]{
      _id,
      _createdAt,
      "logo": logo.asset->url,
      texto1,
      texto2,
      texto3,
      texto4,
      descripcion,
    }`
  )

}

export async function getTerreno(slug: string) {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "terrenos" && slug.current == $slug][0]{
      _id,
      _createdAt,
      "imagen_1": imagen_1.asset->url,
      "imagen_2": imagen_2.asset->url,
      "imagen_3": imagen_3.asset->url,
      "imagen_4": imagen_4.asset->url,
      "imagen_5": imagen_5.asset->url,
      "imagen_6": imagen_6.asset->url,
      nombre,
      "slug": slug.current,
      valor,
      ubicacion,
      ubicacionEnlace,
      metrosCuadrados,
      descripcion,
      detalle
    }`,
    { slug }
  )

}

export async function getCasa(slug: string) {


  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(

    groq`*[_type == "casas" && slug.current == $slug][0]{
      _id,
      _createdAt,
      "imagen_1": imagen_1.asset->url,
      "imagen_2": imagen_2.asset->url,
      "imagen_3": imagen_3.asset->url,
      "imagen_4": imagen_4.asset->url,
      "imagen_5": imagen_5.asset->url,
      "imagen_6": imagen_6.asset->url,
      nombre,
      "slug": slug.current,
      valor,
      ubicacion,
      ubicacionEnlace,
      metrosCuadrados,
      dormitorios,
      banos,
      descripcion,
      detalle
    }`,
    { slug }
  )

}
