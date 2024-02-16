const terrenosSchema = {
    name: 'terrenos',
    title: '+ Terrenos Publicados',
    type: 'document',
    fields: [
        {
            name: 'imagen_1',
            title: 'Imagen Principal del Terreno',
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
            name: 'imagen_2',
            title: 'Imagen del Terreno (opcional)',
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
            name: 'imagen_3',
            title: 'Imagen del Terreno (opcional)',
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
            name: 'imagen_4',
            title: 'Imagen del Terreno (opcional)',
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
            name: 'imagen_5',
            title: 'Imagen del Terreno (opcional)',
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
            name: 'imagen_6',
            title: 'Imagen del Terreno (opcional)',
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
            name: 'nombre',
            title: 'Nombre del Terreno',
            type: 'string'
        },
        
        {
            name: 'slug',
            title: 'Identificador',
            type: 'slug',
            options: { source: 'nombre'}
        },

        {
            name: 'valor',
            title: 'Valor del Terreno',
            type: 'string'
        },

        {
            name: 'ubicacion',
            title: 'Ubicación o dirección del terreno',
            type: 'string'
        },

        {
            name: 'ubicacionEnlace',
            title: 'Enlace de Google Maps o Google Earth',
            type: 'string'
        },

        {
            name: 'metrosCuadrados',
            title: 'Tamaño en Metros Cuadrados',
            type: 'string'
        },

        {
            name: 'descripcion',
            title: 'Descripción detallada del Terreno',
            type: 'string'
        },

        {
            name: 'detalle',
            title: "Detalle de Cambios Realizados",
            type: 'array',
            of: [{ type: "block"}]
        }
    ]
}

export default terrenosSchema