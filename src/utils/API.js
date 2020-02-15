import axios from "axios";

const BASEURL = "https://randomuser.me/api/";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(gender) {

    if (gender == "female")
    return axios.get("https://randomuser.me/api/?results=200&gender=female");

    else if(gender == "male")
    return axios.get("https://randomuser.me/api/?results=200&gender=male");

    else 
    return axios.get("https://randomuser.me/api/?results=200");
  }
};