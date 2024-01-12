import { PortableTextBlock } from "sanity";

export type FooterS = {
    _id: string;
    _createdAt: Date;
    logo: string;
    texto1: string;
    texto2: string;
    texto3: string;
    texto4: string;
    descripcion: PortableTextBlock[];
}