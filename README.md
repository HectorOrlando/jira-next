# Next.js OpenJira App
Para correr localmente, se necesita la base de datos Mongodb version 7.0.0
``` 
docker-compose up -d
```

* El -d, significa __detached__

* Comprobar la versión de docker instalado
```
docker-compose --version
```

* MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base de tados con información de pruebas
Llamara:
```
http://localhost:3000/api/seed
```