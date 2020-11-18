export default class ShibeService {
  static getShibe() {
    return fetch(`http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=false`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}