// Clase base Forma
class Forma {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  mostrar() {
    // Código para mostrar la forma en pantalla
  }
  
  actualizar() {
    // Código para actualizar la posición de la forma
  }
  cambiarColor(){
    var r;
    var g;
    var b;
      r = random(200,255); 
      g = random(90,255);
      b = random(90,255); 
       fill(r, g, b);
  }
}

// Clase Pelota que hereda de la clase Forma
class Pelota extends Forma {
  constructor(x, y, r, xspeed, yspeed) {
    super(x, y);
    this.r = r;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.velIncrement = 0.4; 
    this.puntuacion1 = 0; // Puntaje del jugador 1
    this.puntuacion2 = 0; // Puntaje del jugador 2
    
  }


  mostrar() {
    ellipse(this.x, this.y, this.r * 2);
  }
  

  actualizar() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

 //Colision con los rectangulos (Players)
 colision(rectangulo1, rectangulo2) {
  if (this.y - this.r < 0 || this.y + this.r > height) {
    this.yspeed *= -1;
    
  } else if (this.y + this.r > height) {
    
    this.yspeed *= -1;
    if (this.x >= rectangulo1.x && this.x <= rectangulo1.x + rectangulo1.ancho &&
        this.y >= rectangulo1.y && this.y <= rectangulo1.y + rectangulo1.alto) {
      
      this.xspeed *= -1;
        this.xspeed += this.velIncrement; //Incremento de velocidad
    }
    if (this.x >= rectangulo2.x && this.x <= rectangulo2.x + rectangulo2.ancho &&
        this.y >= rectangulo2.y && this.y <= rectangulo2.y + rectangulo2.alto) {
      this.xspeed *= -1;
       this.xspeed += this.velIncrement; // Incremento de la velocidad
    }
  }
   
// Condicion que por que da un tope de 5 puntos maximos y cuando el jugador uno haga 5 puntos lance una alerta de gano jugador 1
   if (this.x - this.r < 0) {
  this.puntuacion2++;
  if (this.puntuacion2 >= puntuacionMaxima2) {
    alert("¡El jugador 2 ha ganado!");
    this.puntuacion1 = 0;
    this.puntuacion2 = 0;
  } else {
    this.reiniciar();
  }
     
// Condicion que por que da un tope de 5 puntos maximos y cuando el jugador uno haga 5 puntos lance una alerta de gano jugador 2
} else if (this.x + this.r > width) {
  this.puntuacion1++;
  if (this.puntuacion1 >= puntuacionMaxima1) {
    alert("¡El jugador 1 ha ganado!");
    this.puntuacion1 = 0;
    this.puntuacion2 = 0;
  } else {
    this.reiniciar();
  }
}

  // Colisión con rectángulo1 o player 1
  if (this.x - this.r < rectangulo1.x + rectangulo1.ancho &&
      this.x + this.r > rectangulo1.x &&
      this.y + this.r > rectangulo1.y &&
      this.y - this.r < rectangulo1.y + rectangulo1.alto) {
    this.xspeed *= -1;
     this.xspeed += this.velIncrement; // aumentar la velocidad
  }

  // Colisión con rectángulo2 o player 2
  if (this.x - this.r < rectangulo2.x + rectangulo2.ancho &&
      this.x + this.r > rectangulo2.x &&
      this.y + this.r > rectangulo2.y &&
      this.y - this.r < rectangulo2.y + rectangulo2.alto) {
    this.xspeed *= -1;
     this.xspeed -= this.velIncrement; // aumentar la velocidad
  }

   
  //Condicion que detecta la colision con el lienzo y incrementa un punto
  if (this.x - this.r < 0) {
      this.puntuacion2++;
      this.reiniciar();
    } else if (this.x + this.r > width) {
      this.puntuacion1++;
      this.reiniciar();
    }
  }

  // Reiniciar la pelota en cuanto toca el liezo por izquierda o por derecha
  reiniciar() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed *= -1;
  }
}




// Clase Rectangulo que hereda de Forma
class Rectangulo extends Forma {
  constructor(x, y, ancho, alto, speed, upKey, downKey) {
    super(x, y);
    this.ancho = ancho;
    this.alto = alto;
    this.speed = speed;
    this.upKey = upKey;
    this.downKey = downKey;
  }

  mostrar() {
    rect(this.x, this.y, this.ancho, this.alto);
  }

  actualizar() {
    if (keyIsDown(this.upKey)) {
      this.y -= this.speed;
    }
    if (keyIsDown(this.downKey)) {
      this.y += this.speed;
    }
    if (this.y + this.alto > height) {
      this.y = height - this.alto;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }
}



//Variables
let pelota;
let rectangulo1;
let rectangulo2;
let objetos = [];
let puntuacionMaxima1 = 5;
let puntuacionMaxima2 = 5;


function setup() {
  createCanvas(600, 400);
 
  // Agregamos la pelota y los rectángulos al arreglo de objetos
  objetos.push(new Pelota(200, 200, 20, 5, 3));
  
  objetos.push(new Rectangulo(0, 150, 20, 100, 7, 87, 83)); // "W" y "S"
  objetos.push(new Rectangulo(580, 150, 20, 100, 7, UP_ARROW, DOWN_ARROW)); // flecha arriba y abajo

}

function draw() {
  background(16,16,16);

  //Titulo del juego
  titulo = createDiv('¡Ping Pong!');
  titulo.position(250,20);
  titulo.style('color', '#fff');
  
 // Mostramos y actualizamos todos los objetos del arreglo
  for (let i = 0; i < objetos.length; i++) {
    objetos[i].mostrar();
    objetos[i].actualizar();
    objetos[i].cambiarColor();
  }

  // Verifica la colisión rgb(0,0,0)n los rectángulos
  if (objetos[0] instanceof Pelota) {
    objetos[0].colision(objetos[1], objetos[2]);
  }

  // Mostramos la puntuación de los jugadores cuando  la pelota sale del lienzo por izquierda y derecha
  textSize(32);
  textAlign(CENTER);
  text(objetos[0].puntuacion1 + " - " + objetos[0].puntuacion2, width / 2.1, 70);
  
}