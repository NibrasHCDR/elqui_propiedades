import { PortableTextBlock } from "sanity";

export type CasasS = {
    _id: string;
    _createdAt: Date;
    imagen_1: string;
    imagen_2: string;
    imagen_3: string;
    imagen_4: string;
    imagen_5: string;
    imagen_6: string;
    nombre: string; 
    valor: string;
    ubicacion: string;
    metrosCuadrados: string;
    dormitorios: string;
    banos: string;
    descripcion: string;
    detalle: PortableTextBlock[];
}