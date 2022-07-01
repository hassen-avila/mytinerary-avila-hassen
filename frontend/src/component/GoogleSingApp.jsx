import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import userAction from "../redux/action/userAction";

const GoogleSignUp = () => {
  const dispatch = useDispatch();

  async function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    console.log(userObject.sub);
    console.log(userObject);
    dispatch(
      userAction.singUpUsers({
        nameUser: userObject.given_name,
        lastNameUser: userObject.family_name,
        email: userObject.email,
        country: "argentina",
        photoUser: userObject.picture,
        password: userObject.sub,
        from: "google",
      }),
    )
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "15100862035-vtmgkckdn1vftua21p12amqm0fqvi95n.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("button-div"), {
      theme: "outline",
      size: "medium",
      type: "standard",
      shape: "rectangular",
      locale: "en",
      text: "button",
      width: "100%"
    });
  });

  return (
    <div id="button-div" >
    </div>
  );
};

export default GoogleSignUp;