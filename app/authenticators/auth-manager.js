import Base from 'ember-simple-auth/authenticators/base' 

export default Base.extend({
  async restore(data){

    let {token} = data.access_token;
    // if(token != null){
      return data;
    // }
    // else{
    //   throw 'no valid session data';
    // }
  },

  async authenticate(login, password) {

    let response = await fetch('http://10.252.174.190:8080/login', {
      method: "post",
      mode: "cors",
      body: new URLSearchParams({
        'username': login,
        'password': password,
      })
    });

    if(response.ok){
      return response.json();
    }
    else{
      let error = await response.status;
      console.log(error);
      throw error;
    }
},

  async invalidate(data) {},

});
