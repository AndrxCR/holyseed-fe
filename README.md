# 🌱 Holyseed

Una aplicación web personal que te permite convertir setlists de conciertos en playlists de Spotify.

## 🎯 Descripción

Holyseed es una herramienta que conecta la información de conciertos de [setlist.fm](https://www.setlist.fm/) con tu cuenta de Spotify, permitiéndote crear playlists automáticamente basadas en los setlists de tus conciertos favoritos.

## ✨ Características

- 🔍 **Búsqueda de Setlists**: Encuentra setlists de conciertos usando la API de setlist.fm
- 📝 **Visualización de Canciones**: Ve todas las canciones tocadas durante un concierto específico
- 🎧 **Exportación a Spotify**: Crea playlists en tu cuenta de Spotify con un solo clic
- 🔐 **Autenticación Segura**: Integración con Spotify OAuth para proteger tu cuenta

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **CSS Modules** - Estilos con diseño moderno y dark mode

### Backend (Próximamente)
- **Node.js** - Runtime
- **Express** - Framework web
- **Supabase** - Base de datos y autenticación

## 🚀 Comenzar

### Prerrequisitos

- Node.js 18+ y npm
- Cuenta en [setlist.fm](https://www.setlist.fm/) para obtener API key
- Cuenta de desarrollador en [Spotify](https://developer.spotify.com/)

### Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd holyseed-fe
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Edita el archivo `.env` con tus credenciales:
   - `VITE_SETLISTFM_API_KEY`: Tu API key de setlist.fm
   - `VITE_SPOTIFY_CLIENT_ID`: Tu Client ID de Spotify
   - `VITE_SPOTIFY_REDIRECT_URI`: URI de redirección (por defecto: http://localhost:3000/callback)

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

6. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🔑 Obtener API Keys

### Setlist.fm API
1. Visita [setlist.fm API](https://api.setlist.fm/docs/1.0/index.html)
2. Regístrate para obtener una API key
3. Agrega la key a tu archivo `.env`

### Spotify API
1. Visita [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Crea una nueva aplicación
3. Obtén tu Client ID
4. Configura la Redirect URI en la configuración de tu app
5. Agrega las credenciales a tu archivo `.env`

## 🗺️ Roadmap

- [x] Configuración inicial del proyecto
- [x] Diseño de UI/UX
- [x] Estructura de componentes base
- [ ] Integración con setlist.fm API
- [ ] Integración con Spotify API
- [ ] Sistema de autenticación
- [ ] Backend con Node.js
- [ ] Base de datos con Supabase
- [ ] Gestión de playlists
- [ ] Funcionalidades adicionales

## 📝 Licencia

Este proyecto es de uso personal.

## 👤 Autor

Jose Mata