import React, { useState } from "react";
import UserInput from "../../components/userinput/userinput";
//import './Profile.css';

const ProfileData = () => {
  const token = localStorage.getItem("token");

  const getResponse = (response: any) => {
    return new Promise(() => {
      setMessage(response);
      setShowMessage(true);
    });
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setBio("");
    setImage("");

    try {
      const putUser = await fetch(`http://localhost:8080/api/user`, {
        method: "PUT",
        body: JSON.stringify({ username, email, bio, image }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const response = await putUser.json();
      await getResponse(response.message);
    } catch (error) {
      console.log(error.message);
      getResponse("Connection failed.");
    }
  };

  return (
    <form className="profile-info" onSubmit={submit}>
      <div className="profile-box">
        <div className="profile-username">
          Current Username:
          <UserInput
            title=""
            divClass="useredit-input"
            labelClass="userform-label"
            inputClass="profile-username-input"
            id="user"
            type="text"
            value={username}
            whenChange={(e: any) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="profile-email">
          Current E-mail:
          <UserInput
            title=""
            divClass="useredit-input"
            labelClass="userform-label"
            inputClass="profile-email-input"
            id="email"
            type="email"
            value={email}
            whenChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="profile-bio">
          Current bio:
          <UserInput
            title=""
            divClass="useredit-input"
            labelClass="userform-label"
            inputClass="profile-bio-input"
            id="bio"
            type="bio"
            value={bio}
            whenChange={(e: any) => setBio(e.target.value)}
          />
      </div>

          <div className="profile-image">
            Current image:
            <UserInput
              title=""
              divClass="useredit-input"
              labelClass="userform-label"
              inputClass="profile-image-input"
              id="image"
              type="image"
              value={image}
              whenChange={(e: any) => setImage(e.target.value)}
            />
                  </div>

          <button id="update-button" type="submit">
            {" "}
            Save{" "}
          </button>
          {showMessage ? (
            <div id="profile-form-message">{message}</div>
          ) : (
            <div> </div>
          )}
        </div>

      
    </form>
  );
};

export default ProfileData;
