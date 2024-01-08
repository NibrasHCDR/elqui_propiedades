
import { createClient, groq } from "next-sanity";
import { revalidatePath } from "next/cache";

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
      valor,
      ubicacion,
      metrosCuadrados,
      cantidadCasas,
      cantidadBanos,
      cantidadDormitorios,
      descripcion,
      detalle
    }`
  )

}