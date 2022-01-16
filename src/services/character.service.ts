import Configuration from "@/common/config";
import ApiService from "@/common/api.service";
import { Character } from "@/services/character.model";

class CharacterService {
  instance: ApiService;
  hash: string;
  timeStamp: number;
  constructor() {
    this.hash = Configuration.API_HASH;
    this.timeStamp = Configuration.API_TIMESTAMP;
    this.instance = new ApiService();
  }

  async getAllCharacter(): Promise<Character[]> {
    const url = `${Configuration.API_URL}/characters`;
    return this.instance
      .request("GET", url, {
        ts: this.timeStamp,
        apikey: Configuration.API_KEY,
        hash: this.hash,
      })
      .then((response) => {
        const results = response?.data?.data?.results ?? [];
        return results.map((character: never) => {
          return new Character(character);
        });
      });
  }
}

export default CharacterService;
