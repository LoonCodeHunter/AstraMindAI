export class UserRepository {
  findById(id: string) {
    return { id, email: "user@example.com" };
  }
}
