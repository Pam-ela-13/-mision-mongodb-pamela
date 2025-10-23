PREGUNTA 1
NoSQL vs. SQL: ¿Por qué un modelo de documentos como MongoDB es más adecuado para el "Bestiario Digital" que un modelo relacional estricto como el que usaste en la tarea anterior? Enfócate en la flexibilidad del esquema.

Respuesta1:
Mongodb al ser una base de datos no relacional permite mayor flexibilidad en el esquema ya que se pueden almacenar la información en un solo documento aunque tenga estructuras diferentes. En un bestiario se obtiene  criaturas únicas con distintos atributos igual de únicos, estos atributos varian segun la criatura, gracias a mongo, lo diferente puede agregarse sin problema, tambien mongodb permite cambiar atributos ya que no cuenta con un esquema riguido definido.

PREGUNTA 2
Tipos de NoSQL: MongoDB es una base de datos orientada a documentos. Investiga y describe brevemente otro tipo de base de datos NoSQL (ej: Clave-Valor, Columnar, Grafo) y propón un escenario donde ese tipo sería más útil que MongoDB.

Respuesta2:
Dentro de las bases de datos nosql encontramos: 
    - Base de datos Columnar: 
        Estas almacenan los datos por columnas en lugar de por filas, lo que facilita la lectura y análisis de grandes volúmenes de información. Están diseñadas para consultas analíticas masivas y procesamiento distribuido. Algunos ejemplos son Apache Cassandra, HBase.
        Escenario: 
        En una empresa de telecomunicaciones puede usar Cassandra para analizar el tráfico de red en tiempo real o almacenar series temporales de dispositivos, ya que permite escalar fácilmente y realizar lecturas rápidas sobre grandes cantidades de datos distribuidos.
        Aplicaciones en la vida real: Empresas como Facebook, Google o Amazon utilizan bases de datos columnar (por ejemplo, Apache Cassandra o Google Bigtable) para analizar enormes volúmenes de datos.

    - Base de datos de grafos:
        diseñadas para almacenar y gestionar datos que están altamente interconectados. Representan la información mediante nodos (entidades) y aristas (relaciones), lo que permite modelar redes complejas de una forma más natural y eficiente. Cada nodo puede tener propiedades, y las conexiones entre ellos pueden incluir información adicional, facilitando consultas sobre relaciones profundas o indirectas.
        Escenario: 
        En el desarrollo de una red social o plataforma de contactos profesionales, como LinkedIn. En este tipo de aplicaciones lo más importante son las relaciones entre los usurios.
        Aplicaciones en la vida real: empresas líderes en redes sociales, comercio electrónico, entretenimiento y tecnología, como: LinkedIn, Facebook, Google, eBay y Netflix, porque les permiten entender y aprovechar las relaciones complejas entre sus datos para ofrecer mejores servicios, seguridad y recomendaciones.


PREGUNTA 3
Casos de Estudio: Basándote en el material de referencia y tu propia investigación, menciona una aplicación del mundo real (ej: una red social, una plataforma de e-commerce) que utilice MongoDB y explica por qué su elección fue acertada.

Respuesta3
Uber, empresa de transporte y entrega, utuliza Mongodb para manejar información sobre sus usuarios, conductores, viajes y geolocalización. Uber eligió MongoDB debido a su flexibilidad para manejar datos heterogéneos mediante documentos BSON, lo que permite almacenar información variada de usuarios, conductores, viajes y tarifas sin necesidad de un esquema rígido. Su capacidad de consultas geoespaciales rápidas facilita la búsqueda eficiente de conductores cercanos, mientras que su alto rendimiento de escritura asegura que las actualizaciones en tiempo real, como cambios de estado o ubicación de viajes, se procesen sin retrasos. Finalmente, MongoDB se integra fácilmente con sistemas de análisis y microservicios, permitiendo a Uber optimizar rutas, predecir demanda y generar recomendaciones en tiempo real, convirtiéndolo en una solución ideal para su plataforma global de transporte.

