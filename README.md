# JuegoPingPong

Este es un código en JavaScript que contiene la definición de tres clases: Forma, Pelota y Rectángulo. La clase Forma es la clase base, y las otras dos clases Pelota y Rectángulo heredan de ella.

La clase Pelota es una representación de una pelota que se mueve por la pantalla. Tiene un constructor que establece su posición inicial, radio, velocidad horizontal y vertical, así como otras propiedades como la velocidad incrementada y el puntaje de los jugadores. También tiene métodos para mostrar y actualizar la posición de la pelota, detectar colisiones con rectángulos (jugadores) y reiniciar la pelota.

La clase Rectangulo es una representación de un rectángulo (jugador) que se mueve por la pantalla. Tiene un constructor que establece su posición inicial, ancho, alto, velocidad, y teclas de control. También tiene métodos para mostrar y actualizar la posición del rectángulo, detectar colisiones con la pelota y mover el rectángulo hacia arriba o hacia abajo en respuesta a las teclas presionadas.

La clase Forma es la clase base que tiene un constructor que establece la posición inicial de la forma y los métodos para mostrar y actualizar la posición de la forma. También tiene un método para cambiar el color de relleno de la forma al azar, ya sea de la pelota y rectangulos presentes.

Juego que consta en 2 jugadores uno que mueve el rectangulo 1 con W y S y el jugador 2 que mueve el rectangulo 2 con flechitas hacia arriba y abajo y debe anotar puntos al contrario, el primero que llegue a 5 puntos ganara en automatico.
