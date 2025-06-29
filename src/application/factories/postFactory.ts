import { PostRepository } from "@/infrastructure/repositories/PostRepository";
import { CreatePostUseCase } from "../usecases/post/CreatePostUseCase";
import { GetPostsUseCase } from "../usecases/post/GetPostsUseCase";

export namespace PostFactory {
  const repository = new PostRepository();

  export const makeCreatePostUseCase = () => new CreatePostUseCase(repository);

  export const makeGetPostsUseCase = () => new GetPostsUseCase(repository);
}
