El Cronista de Datos NoSQL

El Bestiario Digital

Autor

 Pamela Nicole Tapia Cárdenas

Descripción del Escenario.

Un Bestiario Digital es una colección de criaturas mágicas y fántasticas con atributos variables y estructuras flexibles. Algunas de estas criaturas pueden tener alas, cuernos, multiples cabezas, habilidades mágicas, destrezas o incluso estadisticas únicas. Este es un escenario que nos invita a explorar las ventajas de la base de datos NoSQL MongoDB frente a bases de datos relacionales, gracias al modelo orientado a esquemas y documentos.

Misión 1

Instrucciones para ejecutar el script.

Cabe recalcar que para esta misión se utilizó MongoDB Atlas y se realizo la conexión a visual studio code por medio de la extencion propia para el entorno de desarrollo. Antes de comenzar es óptimo asegurarse de verificar la correcta conexión.
Pasos:

    1. Crea un Playground

        En VS Code, haz clic en el ícono de MongoDB en la barra lateral. Selecciona Playgrounds → New Playground. Esto abrirá un archivo con extensión .mongodb donde se puede escribir comandos.

    2. Copia el contenido de tu script

        Abre el archivo misiones_mongodb.js.Copia todo el contenido y pégalo en el Playground. Si existe algún código por defecto es preferible reemplazarlo con el contenido del archivo misiones_mongodb.js
    
    3. Configura la base de datos

        En la parte superior del Playground, asegúrate de que la conexión apunta a tu cluster y que la base de datos es bestiario. es recomendable usar use('bestiario') al inicio.

    4. Ejecuta el Playground

        Haz clic en el botón Run (arriba a la derecha del Playground). Esto ejecutará todos los comandos en tu cluster Atlas. 

------------------------------------------------------------------------------------------------------------------------------------

Misión 2: Validación y Relaciones

En esta misión se trabajó en la creación de colecciones de guardianes y criaturas, aplicando validaciones de datos mediante JSON Schema en MongoDB. Se definieron reglas para asegurar que los documentos cumplan con los tipos de datos y las restricciones requeridas (por ejemplo, rango del guardián, password con mayúscula y número, inventario mínimo, habilidades de las criaturas, ficha veterinaria, etc.).

Además, se establecieron relaciones entre las colecciones:

1-a-1 embebida: La ficha_veterinaria está dentro de cada criatura, porque es información única de cada una.

1-a-N embebida: El inventario está dentro de cada guardián, ya que pertenece solo a ese guardián.

1-a-N referenciada: Las criaturas se referencian desde el guardián mediante id_guardian, para manejar documentos más grandes y permitir consultas independientes.

Estructura de Archivos .mongodb

--Se agregaron validaciones para que no se inserten los datos y nos marque un error---

01_definicion_guardianes.mongodb: Define la colección guardianes con sus propiedades y reglas de validación. Se agregaron validators para asegurar que los campos cumplan con tipos de datos, restricciones de rango, password y estructura del inventario.

02_definicion_criaturas.mongodb: Define la colección criaturas con sus propiedades, reglas y relaciones con los guardianes. También se agregaron validators para asegurar tipos de datos, arrays mínimos de habilidades, ficha veterinaria correcta y referencias válidas a guardianes.

03_pruebas_insercion.mongodb: Contiene los inserts para probar validaciones: documentos válidos e inválidos, mostrando los errores que MongoDB devuelve.

