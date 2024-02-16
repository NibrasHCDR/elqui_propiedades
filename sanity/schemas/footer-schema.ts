const footerSchema = {
    name: 'footer',
    title: 'Pie De Página',
    type: 'document',
    fields: [

        {
            name: 'id_seccion',
            title: 'Nombre de la Sección',
            type: 'string'
        },
        
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'alt',
                    type: 'string'
                }
            ]
        },

        {
            name: 'texto1',
            title: 'Texto de Enlace 1 de Pie de Página',
            type: 'string'
        },

        {
            name: 'texto2',
            title: 'Texto de Enlace 2 de Pie de Página',
            type: 'string'
        },

        {
            name: 'texto3',
            title: 'Texto de Enlace 3 de Pie de Página',
            type: 'string'
        },

        {
            name: 'texto4',
            title: 'Texto de Enlace 4 de Pie de Página',
            type: 'string'
        },

        {
            name: 'descripcion',
            title: "Descripción",
            type: 'array',
            of: [{ type: "block"}]
        }
    ]
}

export default footerSchema