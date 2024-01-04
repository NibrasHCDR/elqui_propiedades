import { PortableTextBlock } from "sanity";

export type PortadaS = {
    _id: string;
    _createdAt: Date;
    fondo: string;
    titulo1: string;
    titulo2: string;
    boton: string;
    url: string;
    descripcion: PortableTextBlock[];
}