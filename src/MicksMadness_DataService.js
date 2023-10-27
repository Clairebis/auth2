/*nothing to do with me!

import { auth } from "./firebase";

export class DataService {
  constructor() {
    this.userPromise = this.fetchUser();

    this.userPromise.then((user) => {
      this.user = user;
    });
  }

  async getUser() {
    if (!this.user) {
      return this.userPromise;
    }
    return Promise.resolve(this.user);
  }

  async fetchUser() {
    const url = `https://react-firebase-authentic-ba936-default-rtdb.europe-west1.firebasedatabase.app/users/${auth.currentUser?.uid}.json`;

    const response = await fetch(url);
    const userData = await response.json();
    return userData;
  }
}

// export default new DataService();
*/
