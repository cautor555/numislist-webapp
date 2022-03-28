import DS from "ember-data";
import Ember from 'ember';
import EmberResolver from "ember-resolver";

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  // Cookie: JSESSIONID='22C042503E4D08E033673F7D5BF8201D'
  // corsWithCredentials: true,
  // xhrFields : { withCredentials: true },
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjQ4NTA1NTg1fQ.hjQpHCRTNOk6VEHY0GS1v6zlY3WsI7ySY8F9bhbWSyE'
    // 'x-appid': '2375498237',
    // 'x-secret': '238945298235236236236236375923'
   },


});


// function getJSessionId(){
//   var jsId = document.cookie.match(/JSESSIONID=[^;]+/);
//   if(jsId != null) {
//       if (jsId instanceof Array)
//           jsId = jsId[0].substring(11);
//       else
//           jsId = jsId.substring(11);
//   }
//   console.log(jsId);
//   return jsId;
// }
