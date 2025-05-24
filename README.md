# **Proyecto 1: Calculadora**

¡Bienvenido! Este es el repositorio del Proyecto 1 de la asignatura Sistemas y Tecnologías Web. Aquí encontrarás la información esencial sobre los requerimientos, ejecución y visualización de este proyecto.

En esta actividad, desarrollarás una calculadora simple utilizando herramientas modernas del ecosistema web como React, Vite, TailwindCSS y Bun. El objetivo es poner en práctica conceptos clave como diseño basado en componentes, pruebas automatizadas y verificación de estilo mediante linting.

## **Requerimientos**

Para optar a una calificación válida, tu proyecto debe cumplir los siguientes requerimientos funcionales y técnicos:

### Funcionalidad básica
1. La calculadora debe tener un **display** y un **teclado numérico** con botones HTML.
2. Todos los inputs deben ser ingresados mediante los botones.
3. Al presionar un número, debe mostrarse en el display y concatenarse a la derecha del número actual.
4. Al presionar una operación, el siguiente número debe reemplazar el contenido del display.
5. Se deben mostrar los resultados al presionar una operación o el botón de igual.

### Operaciones requeridas
- Suma  
- Resta  
- Multiplicación  
- Igual (=)

### Condiciones específicas
- El display debe limitarse a **9 caracteres**.
- Números negativos deben desplegar **ERROR**.
- Números mayores a 999,999,999 deben mostrar **ERROR**.

### Entrega
- Publicar la calculadora en el servidor de clase.
- Proveer un enlace al código.
- Asegurarse de que `bun test` o `npm test` ejecuta las pruebas correctamente desde la raíz del proyecto.
- **No subir `node_modules` al repositorio**.

### Puntos adicionales (Opcionales)
- Implementación del punto decimal (5 pts)
- Operación de división (10 pts)
- Operación módulo (5 pts)
- Función "+/-" para invertir el signo (5 pts)
- Uso de hooks personalizados (5 pts)
- Componentes con menos de 20 líneas (20 pts)
- Linting sin errores y sin uso de punto y coma (10 pts)
- Pruebas no triviales (hasta 20 pts)
- Historias de Storybook (hasta 20 pts)

## **Ejecución del Proyecto**

Asegúrate de tener instalado **Bun** y **Node.js**. Luego, ejecuta los siguientes comandos:

```bash
bun install           # Instala las dependencias
bun run dev           # Ejecuta el servidor de desarrollo
bun run test          # Corre los tests configurados
bun run lint          # Corre el linting (sin errores ni punto y coma)
bun run storybook     # Corre la interfaz para ver las historias de Storybook
```

## **Visualización del Proyecto**

A continuación se muestra una vista previa de la calculadora en funcionamiento:  

![CalculadoraWeb](https://i.imgur.com/pRIwz0d.png)  

**Figura 1.** Calculadora (Resultado). Ver en el sitio del curso: [CalicheOficial/231359/Proyecto1](https://calicheoficial.lat/231359/Proyecto-1/index.html)  

## **Colaboradores**  

- Cristian Túnchez (231359)
