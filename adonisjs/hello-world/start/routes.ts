/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import router from '@adonisjs/core/services/router'

// router.get('/', async () => {
//   return {
//     hello: 'world',
//   }
// })


import router from '@adonisjs/core/services/router';
import PostsController from '#controllers/posts_controller';


router.get('/posts', [PostsController, 'index']);
router.post('/posts', [PostsController, 'store']);
router.get('/posts/:id', [PostsController, 'show']);
router.put('/posts/:id', [PostsController, 'update']);
router.delete('/posts/:id', [PostsController, 'destroy']);