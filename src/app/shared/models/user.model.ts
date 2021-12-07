
export class User {
  private name: string;
  private bio: string;
  private email: string;
  private picture: string;
  private is_artist: boolean;
  private search_token: string;
  private playlists: [];

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
