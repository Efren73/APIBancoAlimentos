module.exports = (DB, type) => {
    return DB.define('spontaneousDonation',
    {
        id: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true,
        },
        kg_frutas_verduras: {
            type: type.INTEGER,
        },
        kg_abarrotes: {
            type: type.INTEGER,
        },
        kg_pan: {
            type: type.INTEGER,
        },
        kg_no_comestibles: {
            type: type.INTEGER,
        },
        folio: {
            type: type.INTEGER,
        },
        estatus: {
            type: type.ENUM,
            values: ['Pendiente', 'Completado'],
        },
        fecha: {
            type: type.DATE,
        },
        responsable: {
            type: type.STRING,
        },
        idOperador: {
            foreignKey: true,
            type: type.INTEGER,
            references: {
                model: 'operator',
                key: 'id'
            }
        },
        idTienda: {
            foreignKey: true,
            type: type.INTEGER,
            references: {
                model: 'store',
                key: 'id'
            }
        },
    }, {
        // Opción para permitir soft delete
        paranoid: true
    })
}