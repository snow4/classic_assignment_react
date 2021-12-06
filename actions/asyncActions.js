import {makeAsyncRequest} from "../constants/Request"
import * as syncActions from "./syncActions"
import Store from "../redux/store"
import Axios from "axios";

export const CheckLogin =  async(req, res)=>{
  console.log("query ",req)
  await Axios.post("http://localhost:4200/api/user/login", req)
    .then((response) => {
      console.log(response);
      // Cookies.set('token', `${response.data.token}`, { expires: 1 })
      if (typeof window !== "undefined") {
        console.log("in local")
        localStorage.setItem("user", JSON.stringify(response))
        Store.dispatch(syncActions.checkLogin(response.data));
        }
    })
    .catch((err) => {
      console.log(err);
    });
}

export const SignUp =  async(req, res)=>{
  console.log("query ",req)
  await Axios.post("http://localhost:4200/api/user/signup", req)
    .then((response) => {
      console.log(response)
      alert("You are successfully Registered. Login to continue.")
      Store.dispatch(syncActions.getUpscSubjectQuery(response.data));
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
}

export const LogOut = () =>{
  if (typeof window !== "undefined") {
    localStorage.removeItem('user');
    Store.dispatch(syncActions.LogOut(false));
  }
}

export const createNote = async(req, res) =>{
  console.log("createNote ",req)
  await Axios.post("http://localhost:4200/api/list/add-new", req)
    .then((response) => {
      console.log(response)
      Store.dispatch(syncActions.createNote(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
}

// get all list of a profile
export const getAllLists = async(req, res) =>{
  console.log("getalllist ", req)
  await Axios.post("http://localhost:4200/api/list/getall-list", req)
  .then((response) => {
    console.log("GET ALL LIST ",response)
    Store.dispatch(syncActions.getAllLists(response.data));
  })
  .catch((err) => {
    console.log(err);
  });
}


export const checkAuthentication = () =>{
  console.log("check Authentication");
  if (typeof window !== "undefined") {
    
    var user= JSON.parse(localStorage.getItem("user"))
    console.log("in local",user)
    if(user){
      Store.dispatch(syncActions.checkAuthentication(true));
      Store.dispatch(syncActions.checkLogin(user));
    }else{
      Store.dispatch(syncActions.checkAuthentication(false));
    }

    }

}

