# Frontend Control & Manager

¡Bienvenido a **Sistema Automatizador Desarrollado por LowSolutions**! Este es un sistema de gestión para restaurantes desarrollado con [Next.js](https://nextjs.org). A continuación, encontrarás las instrucciones para instalar, configurar y desplegar el proyecto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Instala las dependencias del proyecto:

    Con `npm`:

    ```bash
    npm install
    ```

2. Configura las variables de entorno:

    Crea un archivo `.env` en caso que no se encuentre en la raíz del proyecto y define las variables necesarias


    **Para desarrollo mantenlo de la siguiente manera:**

    ```env
    API_URL=http://localhost:4000/api
    NEXT_PUBLIC_API_URL=http://localhost:4000/api
    ```

    Para producción:

    ```env
    API_URL=Url de tu API desplegada
    NEXT_PUBLIC_API_URL=Url de tu API desplegada
    ```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en acción.

Puedes comenzar a editar las páginas modificando los archivos en la carpeta `app/`. Los cambios se reflejarán automáticamente en el navegador.

## Cambio de Logo
Para cambiar el logo de la aplicación, sigue estos pasos:
1. Reemplaza el archivo `public/image.png` con tu propio logo. Asegúrate de que el nuevo logo tenga el mismo nombre (`image.png`) y esté en la misma ubicación.
2. Ingresa a la carpeta `src/assets/image.png` y reemplaza el archivo `image.png` con tu propio logo. Asegúrate de que el nuevo logo tenga el mismo nombre (`image.png`) y esté en la misma ubicación.

# Cambio de Logo de LowSolutions
3. Para realizar el cambio del logo de LowSolutions deberás reemplazar el archivo `public/images/logo.png` && `public/images/logowhite.png.png` con tu propio logo. Asegúrate de que el nuevo logo tenga el mismo nombre (`logo.png`) && (`logowhite.png`) y esté en la misma ubicación.
4. De igual manera, ingresa a la carpeta `src/assets/images/logo.png` && `src/assets/images/logowhite.png` y reemplaza el archivo `logo.png` && `logowhite.png` con tu propio logo. Asegúrate de que el nuevo logo tenga el mismo nombre (`logo.png`) && (`logowhite.png`) y esté en la misma ubicación.

## Agregar Iconos Para el Menú
Para agregar iconos al menú, sigue estos pasos:
1. Obligatoriamente se recomienda que los iconos sean Vectoriales (SVG) para evitar problemas de calidad.
2. Agrega iconos en la carpeta `public/logos/` y asegúrate de que tengan el mismo nombre que la categoria agregada al menú escritos con la nomenclatura siguiente:
    - `icon_{nombreDeLaCategoria}.svg`

## Despliegue

El despliegue más sencillo es utilizando la plataforma [Vercel](https://vercel.com/). Sigue estos pasos:

1. Crea una cuenta en [Vercel](https://vercel.com/).
2. Conecta tu repositorio de GitHub con Vercel.
3. Configura las variables de entorno en el panel de Vercel.
4. Haz clic en "Deploy" y tu aplicación estará en línea.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

---
