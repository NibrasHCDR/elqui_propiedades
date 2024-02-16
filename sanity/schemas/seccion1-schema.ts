const seccion1Schema = {
    name: 'seccion1',
    title: 'Seccion Terrenos',
    type: 'document',
    fields: [

        {
            name: 'id_seccion',
            title: 'Nombre de la Sección',
            type: 'string'
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
            name: 'descripcion',
            title: "Descripción de cambios",
            type: 'array',
            of: [{ type: "block"}]
        }
    ]
}

export default seccion1Schema