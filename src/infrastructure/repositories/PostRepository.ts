import { Post } from "@/domain/entities/Post";
import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { api } from "../api/postApi";

export class PostRepository implements IPostRepository {
  async getAll(): Promise<Post[]> {
    const { data } = await api.get("/posts");
    return data;
  }

  async create(post: Post): Promise<void> {
    await api.post("/posts", post);
  }
}
