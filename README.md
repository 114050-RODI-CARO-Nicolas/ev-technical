
# Evoltis Technical Backend

Este proyecto es una API backend construida con .NET 8, que utiliza MySQL como base de datos. También incluye phpMyAdmin para gestionar la base de datos de forma visual.

## Requisitos previos
- **Docker** 

## Configuración inicial

1. Clonar el repositorio y ubicarse en la ruta EvoltisTechnical_BE/EvoltisTechnical_BE, que es donde se encuentra el archivo docker-compose.yml.
   ```bash
   git clone <url>
   cd EvoltisTechnical_BE/EvoltisTechnical_BE
   ```

2. Ejecutar el siguiente comando para construir y levantar los contenedores:
   ```bash
   docker-compose up --build
   ```

3. Espera a que los contenedores terminen de inicializarse. Los servicios estarán disponibles en las siguientes URLs:

   - **API Swagger**: [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html)  
   - **phpMyAdmin**: [http://localhost:8080](http://localhost:8080)  
     - Usuario: `admin`  
     - Contraseña: `admin123`

## Contenedores incluidos
### 1. **Backend**
   - Basado en .NET 8.
   - Mapeado al puerto `5000` en la máquina local.
   - Ruta Swagger: `/swagger/index.html`.

### 2. **MySQL**
   - Imagen: `mysql:8.0`.
   - Puerto: `3306`.
   - Credenciales predeterminadas:
     - Usuario root: `rootpassword`
     - Usuario admin: `admin` / `admin123`
   - Base de datos inicial: `ProgrammerDb`.

### 3. **phpMyAdmin**
   - Imagen: `phpmyadmin/phpmyadmin`.
   - Puerto: `8080`.
   - Conexión a la base de datos MySQL.


