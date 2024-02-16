const portadaSchema = {
    name: 'portada',
    title: 'Portada',
    type: 'document',
    fields: [

        {
            name: 'id_seccion',
            title: 'Nombre de la Sección',
            type: 'string'
        },
        
        {
            name: 'fondo',
            title: 'Imagen de Fondo',
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
            name: 'titulo1',
            title: 'Título 1',
            type: 'string'
        },

        {
            name: 'titulo2',
            title: 'Título 2',
            type: 'string'
        },

        {
            name: 'boton',
            title: 'Texto del Botón',
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

export default portadaSchema