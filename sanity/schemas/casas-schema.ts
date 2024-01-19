const casasSchema = {
    name: 'casas',
    title: '*Casas Publicadas',
    type: 'document',
    fields: [
        {
            name: 'imagen_1',
            title: 'Imagen Principal de la Casa',
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
            title: 'Imagen de la Casa (opcional)',
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
            title: 'Imagen de la Casa (opcional)',
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
            title: 'Imagen de la Casa (opcional)',
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
            title: 'Imagen de la Casa (opcional)',
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
            title: 'Imagen de la Casa (opcional)',
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
            title: 'Nombre de la Casa',
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
            title: 'Valor de la Casa',
            type: 'string'
        },

        {
            name: 'ubicacion',
            title: 'ubicación o dirección de la Casa',
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
            name: 'dormitorios',
            title: 'Cantidad de Dormitorios',
            type: 'string'
        },

        
        {
            name: 'banos',
            title: 'Cantidad de Baños',
            type: 'string'
        },

        {
            name: 'descripcion',
            title: 'Descripción detallada de la Casa',
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

export default casasSchema