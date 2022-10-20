# Challenge Bennu - Backend

_Api rest realizada con express y mongoDB_

## Comenzando 🚀

### EndPoints
[GET] _/api/users_  retorna todos los registros de los usuarios

[GET] _/api/users/counts_ retorna el total de registros de usuarios

[POST] _/api/users_ Crea un nuevo usuario

### Instalación 🔧
_Npm install_ para reconstruir los modulos de Node

renombrar el archivo example.env a .env y agregar su cadena de conexion de mongoDB


## Ejecutando las pruebas ⚙️
### la peticion post de usuarios debe tener el siguiente formato
```
{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
```
## GetApi
![GetApi](https://github.com/joelgdeveloper/challenge-bennu-backend/blob/main/public/assets/get.PNG)
## GetApiCounts
![GetApi](https://github.com/joelgdeveloper/challenge-bennu-backend/blob/main/public/assets/getcounts.PNG)
## GetPost
![GetApi](https://github.com/joelgdeveloper/challenge-bennu-backend/blob/main/public/assets/post.PNG)
