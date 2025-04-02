import { HttpContext } from '@adonisjs/core/http';
import Post from '#models/post';

export default class PostsController {
  public async index(ctx: HttpContext) {
    const posts = await Post.all();
    return ctx.response.json(posts);
  }

  public async store(ctx: HttpContext) {
    const data:any = ctx.request.only(['title', 'content', 'image']);
    const post = await Post.create(data);
    return ctx.response.json(post);
  }

  public async show(ctx: HttpContext) {
    const post = await Post.findOrFail(ctx.params.id);
    return ctx.response.json(post);
  }

  public async update(ctx: HttpContext) {
    const post = await Post.findOrFail(ctx.params.id);
    post.merge(ctx.request.only(['title', 'content']));
    await post.save();
    return ctx.response.json(post);
  }

  public async destroy(ctx: HttpContext) {
    const post = await Post.findOrFail(ctx.params.id);
    await post.delete();
    return ctx.response.json({ message: 'Post deleted' });
  }
}
