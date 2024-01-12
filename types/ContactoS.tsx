import { PortableTextBlock } from "sanity";

export type ContactoS = {
    _id: string;
    _createdAt: Date;
    titulo1: string;
    descripcion1: string;
    enlace1: string;
    titulo2: string;
    descripcion2: string;
    enlace2: string;
    titulo3: string;
    descripcion3: string;
    enlace3: string;
    titulo4: string;
    descripcion4: string;
    nombre: string;
    telefonoCorreo: string;
    asunto: string;
    mensaje: string;
    descripcion: PortableTextBlock[];
}