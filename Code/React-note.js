/*creando app en react:
comando para crear app : npx create-react-app react-basicos

El flujo basico de una aplicacion de react es el siguiente

la plantilla principal del la app sera un index.html que se encontrara en  la carpeta public
en este index encontraremos un <div id="root"></div>

A esta carpeta sera el scrip index.js de src el que tomara el id root y lo manipulara con
un document.getElementById('root');

sera este mismo script quien importara App.js que llevara todo el codigo y aplicacion que se ejecutara en 
index.html*/

public/index.html --> src/index.js --> src/app.js

#JSX

//Como regla general al codificar jsx todo los elementos debera estar dentro de un contenedor padre
//no puede haber mas elementos adyasentes de fortma libre por ejemplo

//codigo React jsx

<section className="Mi seccion">

	<div>
		<h1> Hola Mundo</h1>
	</div>
	<div>
		<p> Este es un parrafo creado en jsx</p>
	</div>

</section>

//Resultado en js plano

"use strict";

/*#__PURE__*/
React.createElement(
  "div",
  {
    className: "mainContent"
  },
  /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "title"
    },
    /*#__PURE__*/ React.createElement("h1", null, "Hola Mundo desde jsx")
  ),
  /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "text"
    },
    /*#__PURE__*/ React.createElement("p", null, "Este es un parrafo desde JSX")
  )
);

//Para contrarestrar la regla anterior podemos usar etiquetas vacias
<>
</>
//de esta manera podemos crear un fragmento de react y de esta manera ser renderizara de manera correcta
 Ejemplo
 <>
	<div className="SubTitle">
		<h2>Subtitulo</h2>
	</div>
	<div>
		<p>Texto del subtitulo con fragment</p>
	</div>
 </>

"use strict";

/*#__PURE__*/
React.createElement(
  React.Fragment,
  null,
  /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "title"
    },
    /*#__PURE__*/ React.createElement("h1", null, "Hola Mundo desde jsx")
  ),
  /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "text"
    },
    /*#__PURE__*/ React.createElement("p", null, "Este es un parrafo desde JSX")
  )
);



/*PARA IMPORTAR LIBRERIAS INSTALADAS USAMOS EN EL CASO DE BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css'



//Por ejemplo para usar el metodo map para crear una lista a partir de un array seria de la siguiente manera
let estaciones=["Verano","Otoño","invierno","Primavera"];


<ul>
    {estaciones.map((el)=>(
      <li>{el}</li>
    ))}
</ul>


//Creando componente basado en clases
//Crear carpeta components y dentro el archivo Componente.js

//importamos el objeto Component de React
import React,{Component} from "react";

//Creamos la clase Componente --la clase debe llamarse igual al archivo en cuention 
//extendimos la clase Componente de Component

	//todo componente basado en clases debera contar con el metodo render(){} con el cual
	//se renderisara todo el codigo JSX
class Componente extend Component{
	render(){
	return <h2>Hola Soy un componente de clase</h2>
	}
}

//exportamos el componente con export
 
export default Componente

//vamos a app.js e importamos nuestro componente 

import Componente from "./components/Componente";

//con esto ya podriamos definir nuestro componente usando <Componente></Componente> o <Componente/>

<Componente></Componente>

<Componente/>

//otra forma seria usando props(propiedad) por ejemplo
//Componente.js-->
<h2>{this.props.msg}</h2>

//App.js -->
//agregamos el atributo msg
<Componente msg ="Hola Soy un componente desde una prop" />

//COMPONENTE DE CLASE
class Componente extend Component{
	render(){
	return <h2>Hola Soy un componente de clase</h2>
	}
}

//COMPONENTE FUNCIONAL
function Componete(props){
	return <h2>{props.msg} </h2>
}

//COMPONENTE EXPRESIVO ARROW function

const Componente =(props)=><h2>{props.msg}</h2>;
