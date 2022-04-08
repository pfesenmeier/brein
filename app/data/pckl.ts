export class PcklClient {
  // https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
  constructor(private url: string) {}

  async getRecipes() {

    // return fetch(`${this.url}/recipes`); 
    return fetch('https://plaintextsports.com/');
  }
}
