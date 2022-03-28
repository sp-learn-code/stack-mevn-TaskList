# stack-mevn-TaskList

Un *stack* es un conjunto de tecnologias que un desarrollador utiliza para desarrollar aplicaciones.

*Stack MEVN:* MongoDb - Express - VueJs - NodeJs

Estas tecnologias si trabajan en conjunto, nos permiten desarrollar aplicaciones webs modernas utilizando a Javacript como unico lenguaje de programacion.

Este stack se caracteriza utilizar `Single page Aplications`, es decir, en lugar de que el servidor envie multiples archivos, envie solamente un HTLM y la aplicacion se empieza a construir con JS.

+ *.babelrc:* Este archivo sirve para configurar `babel`, que es transpilador de codigo, es decir, convierte codigo de JS moderno a codigo que los navegadores entiendan.

+ *weboack.config.js:* Tecnologia llamada `webpack`.

***

## Descripcion de las carpetas

+ *src:* Carpeta que contendra todo el codigo

  + *routes:* Contendra todas las rutas o URLs que tendra mi servidor
  + *models:* Para crear los modelos, o como van a lucir los datos dentro de MongoDB
  + *public:* A traves de nuestro servidor express siempre se la enviara al navegador, aqui se coloca todo el codigo de VueJs transformado.
  + *app:* Contendra todo el codigo del cliente, es decir, todo el codigo para el frontend. Este codigo traducido ira a la carpeta public. 

***

## Otras Descripciones
+ *process.env.PORT:* Variable de entorno para establecer el puerto en el que va a correr el servidor