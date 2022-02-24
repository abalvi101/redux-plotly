# Redux y Plotly en React

Este es un proyecto de ejemplo muy sencillo del funcionamiento de las librerías Redux y Plotly en React.js.

## Redux

![Redux](https://miro.medium.com/max/700/0*R73zsxhSuasT9MKR.png)

Redux es un sistema de almacenamiento de estados, que nos permite tener un storage común a toda la aplicación para
compartir estados entre componentes de forma muy simple.

>[Aquí](https://es.redux.js.org/) puede saber más sobre Redux

## Plotly

![Plotly](https://metalblueberry.github.io/post/blog/2020-05-11_go_plotly/plotly.png#m)

Plotly es una librería disponible para varios lenguajes enfocada en la creación de gráficas de todo tipos.
Desde los clásicos gráficos de barras o de barra, hasta mapas de calor, gráficos 3D, etc.
Es muy potente y versátil y permite gran nivel de personalización.

>[Aquí](https://plotly.com/javascript/) puede saber más sobre Plotly

## ¿Cómo iniciar el proyecto?

1. Primero debes ejecutar `$yarn install` para que se instalen todas las dependencias.
2. Luego para desplegar la aplicación bastará con `$yarn start`.
3. Cuando hayamos terminado, con el atajo `Ctrl+C` finalizaremos el proceso.

## ¿En qué consiste la aplicación?

Como mencioné antes se trata de un ejemplo muy sencillo. Este consiste en un panel con tres colores (rojo, azul y verde), cada uno de ellos tiene un contador (inicialmente a 0) y dos botones, uno para sumar y otro para restar. Estos contadores se encuentran en la store de Redux, mediante la cuál se le proporciona a otro componente, donde se encuentra un gráfico circular en el que se van reflejando los tres colores con sus respectivas proporciones.


![App](/public/app.png)
