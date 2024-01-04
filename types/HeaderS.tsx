import { PortableTextBlock } from "sanity";

export type HeaderS = {
    _id: string;
    _createdAt: Date;
    logo: string;
    menu1: string;
    menu2: string;
    menu3: string;
    url: string;
    descripcion: PortableTextBlock[];
}