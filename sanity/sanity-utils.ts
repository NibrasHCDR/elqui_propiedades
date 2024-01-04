
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