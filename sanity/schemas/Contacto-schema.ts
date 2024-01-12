const contactoSchema = {
    name: 'contacto',
    title: 'Seccion Contacto',
    type: 'document',
    fields: [

        {
            name: 'titulo1',
            title: 'Título de Correo (correo)',
            type: 'string'
        },

        {
            name: 'descripcion1',
            title: 'Descripción de casilla de Correo',
            type: 'string'
        },

        {
            name: 'enlace1',
            title: ' al hacer click en correo',
            type: 'string'
        },

        {
            name: 'titulo2',
            title: 'Título de Whatsapp (Numero de Whatsapp)',
            type: 'string'
        },

        {
            name: 'descripcion2',
            title: 'Descricpción de casilla Whatsapp',
            type: 'string'
        },

        {
            name: 'enlace2',
            title: 'Enlace al hacer click en Whatsapp',
            type: 'string'
        },

        {
            name: 'titulo3',
            title: 'Titulo de Instagram (nombre de usuario)',
            type: 'string'
        },

        {
            name: 'descripcion3',
            title: 'Descripción de casilla de instagram',
            type: 'string'
        },

        {
            name: 'enlace3',
            title: 'Enlace al hacer click en instagram',
            type: 'string'
        },

        {
            name: 'titulo4',
            title: 'Título del formulario de contacto',
            type: 'string'
        },

        {
            name: 'descripcion4',
            title: 'Subtitulo debajo del Título de contacto',
            type: 'string'
        },

        {
            name: 'nombre',
            title: 'Nombre que aparecerá en el campo "Nombre" del formulario',
            type: 'string'
        },

        {
            name: 'telefonoCorreo',
            title: 'Nombre que aparecerá en el campo "Telefono o Correo" del formulario',
            type: 'string'
        },

        {
            name: 'asunto',
            title: 'Nombre que aparecerá en el campo "Asunto" del formulario',
            type: 'string'
        },

        {
            name: 'mensaje',
            title: 'Nombre que aparecerá en el campo "Mensaje" del formulario',
            type: 'string'
        },

        {
            name: 'descripcion',
            title: "Descripción de cambios",
            type: 'array',
            of: [{ type: "block"}]
        }
    ]
}

export default contactoSchema