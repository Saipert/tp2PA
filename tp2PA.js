codigo_js = ""
// 01. Ejercicios sobre Objetos

// 1. Crea un objeto llamado "libro" con las propiedades "titulo", "autor" y "añoDePublicacion". Muestra cada una de estas propiedades en la consola.
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  añoDePublicacion: 1967
};
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.añoDePublicacion);

// 2. Crea un objeto llamado "estudiante" que tenga las propiedades "nombre", "edad" y "direccion". "direccion" debe ser otro objeto con las propiedades "calle", "ciudad" y "pais". Muestra en la consola la direccion completa del estudiante.
const estudiante = {
  nombre: "Juan",
  edad: 21,
  direccion: {
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: "USA"
  }
};
console.log(`${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);

// 3. Agrega un método llamado "descripcion" al objeto "libro" que retorne una cadena de texto que describa el libro. Muestra la descripción en la consola.
libro.descripcion = function() {
  return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
};
console.log(libro.descripcion());

// 4. Crea un objeto llamado "producto" con las propiedades "nombre", "precio" y "disponible". Usa un bucle para mostrar todas las propiedades del objeto en la consola.
const producto = {
  nombre: "Laptop",
  precio: 1200,
  disponible: true
};
for (let propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}

// 5. Modifica el precio del objeto "producto" y muestra el objeto actualizado en la consola.
producto.precio = 1000;
console.log(producto);

// 6. Crea una función que reciba un objeto y una propiedad, y verifique si el objeto tiene esa propiedad usando hasOwnProperty. Prueba la función con el objeto "producto".
function tienePropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);
}
console.log(tienePropiedad(producto, 'precio')); // true
console.log(tienePropiedad(producto, 'marca'));  // false

// 7. Elimina la propiedad "disponible" del objeto "producto" y muestra el objeto resultante en la consola.
console.log(producto);
delete producto.disponible;
console.log(producto);

// 8. Combina dos objetos, por ejemplo "persona1" y "persona2", en uno solo usando Object.assign(). Muestra el nuevo objeto en la consola.
const persona1 = { nombre: "Ana", edad: 30 };
const persona2 = { profesion: "Ingeniera", pais: "Argentina" };
const personaCombinada = Object.assign({}, persona1, persona2);
console.log(personaCombinada);

// 9. Crea una copia del objeto "estudiante" usando JSON.parse() y JSON.stringify(), cambia el nombre del estudiante en la copia, y muestra ambos objetos en la consola para verificar que son diferentes.
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
copiaEstudiante.nombre = "Carlos";
console.log(estudiante);
console.log(copiaEstudiante);

// 10. Usa Object.defineProperty() para agregar un getter y un setter para la propiedad "añoDePublicacion" del objeto "libro". Usa el setter para cambiar el año y luego muestra el año actualizado en la consola.
Object.defineProperty(libro, 'añoDePublicacion', {
  get: function() {
    return this._añoDePublicacion;
  },
  set: function(año) {
    this._añoDePublicacion = año;
  }
});
libro.añoDePublicacion = 1970;
console.log(libro.añoDePublicacion);


// 02. Ejercicios sobre Funciones

// 1. Crea una función llamada "sumar" que tome dos números como parámetros y retorne su suma. Prueba la función en la consola.
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 7));

// 2. Crea una función llamada "multiplicar" que tome dos números como parámetros y retorne su producto. Prueba la función en la consola.
function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(4, 6));

// 3. Crea una función llamada "saludar" que tome un parámetro "nombre" y retorne "Hola, [nombre]". Si no se proporciona un nombre, debe retornar "Hola, Invitado".
function saludar(nombre = "Invitado") {
  return `Hola, ${nombre}`;
}
console.log(saludar());
console.log(saludar("María"));

// 4. Crea una función llamada "crearPersona" que tome "nombre" y "edad" como parámetros, y retorne un objeto con esas propiedades.
function crearPersona(nombre, edad) {
  return { nombre, edad };
}
console.log(crearPersona("Luis", 25));

// 5. Crea una función llamada "actualizarEdad" que tome un objeto "persona" y una nueva edad, y actualice la propiedad "edad" del objeto.
function actualizarEdad(persona, nuevaEdad) {
  persona.edad = nuevaEdad;
}
const persona = { nombre: "Carlos", edad: 40 };
actualizarEdad(persona, 45);
console.log(persona);

// 6. Crea una función recursiva llamada "factorial" que tome un número como parámetro y retorne el factorial de ese número.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 7. Crea una función llamada "despedir" que contenga otra función interna llamada "adios". La función "despedir" debe retornar el valor de "adios".
function despedir() {
  function adios() {
    return "Adiós!";
  }
  return adios();
}
console.log(despedir());

// 8. Función que Usa Otra Función:

function procesarArray(arr, funcion) {
    return arr.map(funcion);
  }
  console.log(procesarArray([1, 2, 3], (x) => x * 2));
  
  // 9. Función que Devuelve Otra Función:
  
  function crearMultiplicador(x) {
    return function(y) {
      return x * y;
    };
  }
  const multiplicarPorCinco = crearMultiplicador(5);
  console.log(multiplicarPorCinco(3)); // Resultado: 15
  
  // 10. Función Anónima:
  
  const sumarAnonima = function(a, b) {
    return a + b;
  };
  console.log(sumarAnonima(4, 6)); // Resultado: 10

  // 03. Ejercicios sobre Funciones (Consumo de Datos, Mapeo de Información, Autenticación de Usuarios)
  // 1. Consumo de Datos desde una API:

async function obtenerUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await respuesta.json();
      console.log(usuarios);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  }
  obtenerUsuarios();
  
  // 2. Procesamiento de Datos de una API:
 
  async function imprimirNombresDeUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await respuesta.json();
      const nombres = usuarios.map(usuario => usuario.name);
      console.log(nombres);
    } catch (error) {
      console.error("Error al imprimir nombres de usuarios:", error);
    }
  }
  imprimirNombresDeUsuarios();
  
  // 3. Autenticación Simulada:

  const usuarioPredefinido = {
    usuario: "admin",
    contraseña: "12345"
  };
  
  function autenticarUsuario(credenciales) {
    return credenciales.usuario === usuarioPredefinido.usuario &&
           credenciales.contraseña === usuarioPredefinido.contraseña;
  }
  
  console.log(autenticarUsuario({ usuario: "admin", contraseña: "12345" })); // true
  console.log(autenticarUsuario({ usuario: "user", contraseña: "12345" }));  // false
  
  // 4. Transformación de Datos:

  async function mapearUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await respuesta.json();
      const usuariosMapeados = usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
      }));
      console.log(usuariosMapeados);
    } catch (error) {
      console.error("Error al mapear usuarios:", error);
    }
  }
  mapearUsuarios();
  
  // 5. Validación de Formularios:
 
  function validarFormulario(formulario) {
    return formulario.nombre && formulario.email && formulario.password;
  }
  
  console.log(validarFormulario({ nombre: "Juan", email: "juan@example.com", password: "12345" })); // true
  console.log(validarFormulario({ nombre: "", email: "juan@example.com", password: "12345" }));      // false
  
  // 6. Paginación de Datos:
  
  function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
  }
  
  const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(obtenerPagina(datos, 1)); // [1, 2, 3, 4, 5]
  console.log(obtenerPagina(datos, 2)); // [6, 7, 8, 9, 10]
  
  // 7. Envío de Datos a una API:
  
  async function enviarDatos(data) {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const respuestaJson = await respuesta.json();
      console.log(respuestaJson);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  }
  
  enviarDatos({ title: 'foo', body: 'bar', userId: 1 });
  
  // 8. Búsqueda de Usuarios:
 
  async function buscarUsuarioPorEmail(email) {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await respuesta.json();
      const usuario = usuarios.find(user => user.email === email);
      console.log(usuario);
    } catch (error) {
      console.error("Error al buscar usuario:", error);
    }
  }
  
  buscarUsuarioPorEmail('Sincere@april.biz');
  
  // 9. Generación de Token de Autenticación:
  
  function generarToken(usuario) {
    const token = btoa(JSON.stringify(usuario));
    return token;
  }
  
  const token = generarToken({ nombre: "Juan", id: 1 });
  console.log(token);
  
  // 10. Actualización de Información del Usuario:
  
  function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
  }
  
  const usuario = { nombre: "Juan", edad: 30 };
  const cambios = { edad: 31, email: "juan@example.com" };
  const usuarioActualizado = actualizarUsuario(usuario, cambios);
  console.log(usuarioActualizado);
  
// 04. Ejercicios sobre Operaciones con Arrays

// 1. Agregar y Eliminar Elementos:

let frutas = ["manzana", "banana", "pera"];
frutas.push("naranja"); // Agregamos una nueva fruta al final
console.log(frutas); // ["manzana", "banana", "pera", "naranja"]

frutas.pop(); // Eliminamos la última fruta
console.log(frutas); // ["manzana", "banana", "pera"]

// 2. Array Bidimensional:

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][1]); // Accede al número 5

// 3. Iterar sobre un Array:

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 4. Uso de map:

function elevarAlCuadrado(numeros) {
  return numeros.map(num => num * num);
}

let numeros = [1, 2, 3, 4];
let cuadrados = elevarAlCuadrado(numeros);
console.log(cuadrados); // [1, 4, 9, 16]

// 5. Uso de filter:

function filtrarMayoresDe(numeros, referencia) {
  return numeros.filter(num => num > referencia);
}

let numerosFiltrados = filtrarMayoresDe(numeros, 2);
console.log(numerosFiltrados); // [3, 4]

// 6. Uso de reduce:

function sumarElementos(numeros) {
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

let suma = sumarElementos(numeros);
console.log(suma); // 10

// 7. Uso de some:

let numerosSome = [5, 8, 12, 3];
let hayMayorQueDiez = numerosSome.some(num => num > 10);
console.log(hayMayorQueDiez); // true

// 8. Uso de every:

let todosPositivos = numerosSome.every(num => num > 0);
console.log(todosPositivos); // true

// 9. Uso de find:

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 35 },
  { nombre: "Carlos", edad: 28 }
];

let personaMayorDe30 = personas.find(persona => persona.edad > 30);
console.log(personaMayorDe30); // { nombre: 'Ana', edad: 35 }

// 10. Uso de sort:

let palabras = ["banana", "manzana", "pera", "naranja"];
palabras.sort();
console.log(palabras); // ["banana", "manzana", "naranja", "pera"]
