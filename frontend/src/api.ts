import http from "./http";

class HttpApi {

  create(data: any) {
    http.post("/", data).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

export default new HttpApi();
