const headerSchema = {
    name: 'header',
    title: 'Encabezado',
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
            name: 'menu1',
            title: 'Enlace Del Menu 1 (propiedades)',
            type: 'string'
        },

        {
            name: 'menu2',
            title: 'Enlace Del Menu 2 (terrenos)',
            type: 'string'
        },

        {
            name: 'menu3',
            title: 'Enlace Del Menu 3 (contacto)',
            type: 'string'
        },

        {
            name: 'url',
            title: 'url',
            type: 'url'
        },

        {
            name: 'descripcion',
            title: "Descripción",
            type: 'array',
            of: [{ type: "block"}]
        }
    ]
}

export default headerSchema