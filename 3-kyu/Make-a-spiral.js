/*Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. */

function spiralize(n) {
    // Crear la matriz NxN llena de 0s
    let spiral = Array.from({ length: n }, () => Array(n).fill(0));

    let x = 0, y = 0; // Posición inicial en la esquina superior izquierda
    let direction = "right"; // Direcciones: "right", "down", "left", "up"
    
    while (true) {
        spiral[y][x] = 1; // Marcar la posición actual con 1
        
        // Calcular el siguiente paso según la dirección actual
        let [nextX, nextY] = getNextPosition(x, y, direction);

        // Si el siguiente paso no es válido, intentamos cambiar de dirección
        if (!isValidMove(nextX, nextY, spiral, n)) {
            direction = getNextDirection(direction);
            [nextX, nextY] = getNextPosition(x, y, direction);

            // Si aún no es válido, terminamos
            if (!isValidMove(nextX, nextY, spiral, n)) break;
        }

        // Moverse a la nueva posición
        x = nextX;
        y = nextY;
    }

    return spiral;
}

// Función para obtener la siguiente dirección en la espiral
function getNextDirection(dir) {
    return dir === "right" ? "down"
         : dir === "down" ? "left"
         : dir === "left" ? "up"
         : "right";
}

// Función para calcular la próxima posición según la dirección
function getNextPosition(x, y, direction) {
    if (direction === "right") return [x + 1, y];
    if (direction === "down") return [x, y + 1];
    if (direction === "left") return [x - 1, y];
    if (direction === "up") return [x, y - 1];
}

// Función para verificar si el próximo paso es válido
function isValidMove(x, y, spiral, n) {
    // Comprobar que estamos dentro de los límites
    if (x < 0 || y < 0 || x >= n || y >= n || spiral[y][x] === 1) return false;
    
    // Verificar que no toque su propia "cola" (una celda vacía rodeada por 1s)
    let count = 0;
    if (y > 0 && spiral[y - 1][x] === 1) count++;  // Arriba
    if (y < n - 1 && spiral[y + 1][x] === 1) count++; // Abajo
    if (x > 0 && spiral[y][x - 1] === 1) count++; // Izquierda
    if (x < n - 1 && spiral[y][x + 1] === 1) count++; // Derecha

    return count < 2; // Si está rodeado en 2 direcciones o más, no es válido
}

// Ejemplo
console.log(spiralize(5));
