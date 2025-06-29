import { Post } from "@/domain/entities/Post";
import { IPostRepository } from "@/domain/repositories/IPostRepository";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(post: Post): Promise<void> {
    return this.postRepository.create(post);
  }
}
