# BACK-END_Proyecto_RedSocialM2_LCSC

Rutas funcionales

Usuarios
- POST http://localhost:3000/usuarios/register
- POST http://localhost:3000/usuarios/login
- PUT http://localhost:3000/usuarios/edituser/:userid
- DELETE http://localhost:3000/usuarios/deleteuser/:userid

Posts
- POST http://localhost:3000/posts/addpost
- GET http://localhost:3000/posts
- GET http://localhost:3000/posts/user/:userId
- POST http://localhost:3000/posts/feed
- PUT http://localhost:3000/posts/editpost/:postId
- DELETE http://localhost:3000/posts/deletepost/:postId
