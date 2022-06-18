# LIVE CHAT FRONT

Este proyecto es una demo realizada usando React y Websockets con el empaquetador Vite, se muestra un chat en tiempo real, en donde basicamente los usuarios pueden registrarse y loguearse para ingresar al sitio del chat.

## Run the app locally

Debe crear un archivo `.env` en la raíz del proyecto y agregarle los siguientes parámetros

```
VITE_BACKEND_URL=
VITE_AVATARS_URL=
VITE_AVATAR_KEY=
```

- Backend_url, Backend en tu local host: `"http://localhost:5000"` (tener en cuenta el número de puerto en que se esta ejecutando el backend)
- Avatars_url, es la url base de la api de multiavatars.
- Avatar_key, es la clave propia generada de la cuenta de la api multiavatars.

Luego de tener esto configurado, ejecutar en la terminal:

- `npm run dev`

Mas detalle en la documentación oficial de vite.

## Producción

A continuación se muestra la demo [Aquí](https://marv-live-chat.netlify.app/).
Para poder probar el sitio, puedes loguearte con estos usuarios `user1`, `user2`, `user3` con contraseña 12345 y usando varias pantallas a la vez; O también puedes crear tu propio usuario; registrándote.
