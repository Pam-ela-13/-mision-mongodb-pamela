*******************************************************************************************************
                             PREGUNTAS
*******************************************************************************************************
Validación: ¿Por qué es preferible implementar la validación de datos a nivel de Base de Datos (con JSON Schema) en lugar de hacerlo únicamente en el código de la aplicación (backend)?

Respuesta: Es preferible implementar la validación de datos directamente en la base de datos porque esto asegura que ningún dato incorrecto se pueda guardar, sin importar desde dónde se inserte. Si solo se hace validación en el backend, cualquier error en la aplicación o un usuario que intente insertar datos directamente podría romper la consistencia de la base de datos. Al usar JSON schema en MongoDB, los datos siempre cumplen con las reglas establecidas, lo que aumenta la seguridad y la confiabilidad de la información. Además, esto ayuda a que diferentes aplicaciones que usen la misma base de datos respeten las reglas automáticamente.


Relaciones 1-a-1: Explicaste la ficha_veterinaria como una relación 1-a-1 embebida. ¿Por qué crees que este fue un buen enfoque? ¿Bajo qué circunstancias hubieras preferido modelarla como referenciada (en su propia colección)?

Respuesta: La ficha veterinaria es un documento embebido dentro de cada criatura porque cada criatura tiene solo una ficha y esta información no se comparte con otras criaturas, esto hace que sea más fácil y rápido acceder a la información de salud de la criatura sin tener que hacer consultas adicionales. Si la ficha veterinaria fuera muy grande seria mejor modelarla como referenciada, ahí si se necesita mantener un historial largo de revisiones, o si se pudiera compartir entre varias criaturas, porque en esos casos sería más eficiente tenerla en su propia colección.

Relaciones 1-a-N: En tu modelo, usaste dos tipos de relaciones 1-a-N:

Guardián -> Inventario (Embebida)

Guardián -> Criaturas (Referenciada) Justifica por qué cada decisión de modelado (embebida vs. referenciada) fue la correcta para cada caso.

Respuesta: Se usaron dos tipos de relaciones 1-a-N. Primero, el inventario del guardián está embebido dentro del guardián porque los objetos son pequeños, pertenecen únicamente a ese guardián y se consultan junto con él. Esto hace que sea rápido y sencillo acceder al inventario sin buscar en otra colección. Por otro lado, las criaturas están en su propia colección y se referencian desde el guardián. Esto es porque cada criatura puede tener información más compleja, como habilidades y ficha veterinaria, y podrían crecer mucho en tamaño. Además, separarlas permite consultarlas y modificarlas de manera independiente sin afectar el documento del guardian.