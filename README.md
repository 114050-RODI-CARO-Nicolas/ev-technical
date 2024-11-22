# Evoltis Technical Interview

Este es un proyecto que consiste en un **backend** construido con **.NET 8** y un **frontend** desarrollado con **Angular**. 

El proyecto consta de un ABM de Candidatos/Programadores, donde se puede dar de alta un nuevo candidato con sus datos, además de visualizar
una tabla con determinadas acciones como edición y eliminación del programador.



## Backend

Este proyecto es una API backend construida con .NET 8, que utiliza MySQL como base de datos. También incluye phpMyAdmin para gestionar la base de datos de forma visual.

### Requisitos previos
- **Docker** (versión 20.10 o superior)

### Configuración inicial

1. Clonar el repositorio y ubicarse en la ruta `EvoltisTechnical_BE/EvoltisTechnical_BE`, que es donde se encuentra el archivo `docker-compose.yml`:
   ```bash
   git clone <url>
   cd EvoltisTechnical_BE/EvoltisTechnical_BE
   ```

2. Ejecutar el siguiente comando para construir y levantar los contenedores:
   ```bash
   docker-compose up --build
   ```

3. Esperar a que los contenedores terminen de inicializarse. Los servicios estarán disponibles en las siguientes URLs:

   - **API Swagger**: [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html)  
   - **phpMyAdmin**: [http://localhost:8080](http://localhost:8080)  
     - Usuario: `admin`  
     - Contraseña: `admin123`

### Contenedores incluidos

#### 1. **Backend**
   - Basado en .NET 8.
   - Mapeado al puerto `5000` en la máquina local.
   - Ruta Swagger: `/swagger/index.html`.

#### 2. **MySQL**
   - Imagen: `mysql:8.0`.
   - Puerto: `3306`.
   - Credenciales predeterminadas:
     - Usuario root: `rootpassword`
     - Usuario admin: `admin` / `admin123`
   - Base de datos inicial: `ProgrammerDb`.

#### 3. **phpMyAdmin**
   - Imagen: `phpmyadmin/phpmyadmin`.
   - Puerto: `8080`.
   - Conexión a la base de datos MySQL.

---

## Frontend

El frontend está construido con **Angular** y se comunica con el backend a través de la API expuesta por el servidor.

### Requisitos previos
- **Node.js** (versión v20.18.0)
- **Angular CLI** (versión 18.2.10)

### Configuración inicial

1. Clonar el repositorio y ubicarse en la ruta del frontend, que siempre es donde está ubicado el archivo package.json
   ```bash
   git clone <url>
   cd EvoltisTechnical_FE
   ```

2. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```

3. Ejecutar el siguiente comando para levantar el servidor de desarrollo de Angular:
   ```bash
   ng serve
   ```

4. Una vez que el servidor esté corriendo, se puede acceder al frontend en la siguiente URL:
   - **Frontend**: [http://localhost:4200](http://localhost:4200)

### Notas adicionales

El proyecto que se levanta por medio de docker es el de backend, el de frontend se levanta por separado utilizando el comando ng serve.