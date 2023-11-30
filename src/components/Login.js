import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import "./login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ name: "", password: "" });
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name === "" || userInfo.password === "") {
      return alert("Please fill your information.");
    }
    console.log("Username: ", userInfo.name);
    console.log("UserPassword: ", userInfo.password);

    userInfo.name = "";
    userInfo.password = "";
  };
  return (
    <div className="LoginContainer">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputGp">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={userInfo.name}
            onChange={(e) => {
              setUserInfo({ ...userInfo, name: e.target.value });
            }}
          />
        </div>

        <div className="inputGp">
          <label htmlFor="password">Password</label>
          <div className="inputFlex">
            <div>
              <input
                type={visible ? "text" : "password"}
                id="password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </div>

            <div className="position" onClick={() => setVisible(!visible)}>
              {visible ? <IoEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        <input type="submit" className="btn" value="Login" />
      </form>
    </div>
  );
};
export default Login;
