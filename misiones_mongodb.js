use ("bestiario")
//CREACIÓN DE LA COLLECCIÓN
db.createCollection("criaturas")

//Inserción (Create)
db.criaturas.insertOne({
    name: "Dragón de Fuego",
    habitat: "Montañas Volcánicas",
    danger_level: 10,
    diet: ["rocas", "caballeros"],
    habilidades: ["vuelo", "aliento de fuego", "garras afiladas"],
    descubierto_por: "Eldrin el Valiente"
})
db.criaturas.insertMany([
    {
        name: "Unicornio",
        habitat: "Bosques Encantados",
        danger_level: 3,
        diet: ["hierbas", "flores"],
        habilidades: ["curación", "velocidad"],
        descubierto_por: "Pamela la Sabia"
    },
    
    {
        name: "Elfo",
        habitat: "Bosques Encantados",
        danger_level: 7,
        diet: ["frutas", "hongos"],
        habilidades: ["agilidad", "visión aguda"],
        descubierto_por: "Sir Roland",
        estadisticas: { ataque: 8, defensa: 6 }
    },

    {
        name: "Troll",
        habitat: "Cavernas Oscuras",
        danger_level: 8,
        diet: ["carne", "piedras"],
        habilidades: ["regeneración", "fuerza bruta"],
        descubierto_por: "Juan el Explorador",
        estadisticas: { ataque: 9, defensa: 7 }
    },

    {
        name: "hada",
        habitat: "Praderas Mágicas",
        danger_level: 4,
        diet: ["néctar", "polen"],
        habilidades: ["invisibilidad", "magia ligera"],
        descubierto_por: "Anderson el Místico",
        estadisticas: { ataque: 5, defensa: 4 }
    }

    
])

//Lectura (Read)
db.criaturas.find()

//Para buscar las criaturas de un habitat en concreto
db.criaturas.find({ habitat: "Bosques Antiguos" })

//Para buscar criaturas con un nivel_peligro mayor que 8
db.criaturas.find({ danger_level: { $gt: 8 } })

//Actulñización (Update)

db.criaturas.updateOne(
    { name: "Elfo" },
    { $push: { habilidades: "poder magico" } }

)
db.criaturas.updateMany(
    { habitat: "Bosques Encantados" },
    { $inc: { danger_level: 1 } }
)