import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useCallback } from "react";

function Facebook() {
  const appId = "304717439171510";

  const handleSuccess = (response) => {
    console.log(response);
    console.log(response.data);
  };
  const handleReject = (error) => {
    console.log(error);
  };
  const LoginStart = useCallback(() => {
    alert("login start");
  }, []);

  return (
    <div className="w-full">
      <LoginSocialFacebook
        appId={appId}
        onResolve={handleSuccess}
        onReject={handleReject}
        onLoginStart={LoginStart}
        isOnlyGetToken={true}
      >
        <FacebookLoginButton
          text="Sign up with Facebook"
          className="rounded text-sm"
          style={{
            fontSize: "12px",
            width: "100%",
            height: "40px",
          }}
          //   style={{
          //     borderRadius: "36px",
          //     fontSize: "16px",
          //     fontFamily: "Inter",
          //     fontWeight: 500,
          //     width: "271px",
          //     height: "46px",
          //   }}
        />
      </LoginSocialFacebook>
    </div>
  );
}

export default Facebook;

// import React, { useCallback, useRef, useState } from "react";
// import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

// // CUSTOMIZE ANY UI BUTTON
// import {
//   FacebookLoginButton,
//   GoogleLoginButton
// } from "react-social-login-buttons";

// // const REDIRECT_URI = "http://localhost:3000/account/login";

// const SocialLogin = () => {
//   const [provider, setProvider] = useState("");
//   const [profile, setProfile] = useState();

//   const googleRef = useRef();
//   const facebookRef = useRef();

//   const onLoginStart = useCallback(() => {
//     alert("login start");
//   }, []);

//   const onLogoutFailure = useCallback(() => {
//     alert("logout fail");
//   }, []);

//   const onLogoutSuccess = useCallback(() => {
//     setProfile(null);
//     setProvider("");
//     alert("logout success");
//   }, []);

//   return (
//     <>
//       <div>
//         <LoginSocialFacebook
//           ref={facebookRef}
//           appId={"431451242017946"}
//           onLoginStart={onLoginStart}
//           onLogoutSuccess={onLogoutSuccess}
//           onResolve={({ provider, data }) => {
//             setProvider(provider);
//             setProfile(data);
//             console.log(data, "data");
//             console.log(provider, "provider");
//           }}
//           onReject={(err) => {
//             console.log(err);
//           }}
//         >
//           <FacebookLoginButton />
//         </LoginSocialFacebook>

//         <LoginSocialGoogle
//           ref={googleRef}
//           client_id="1024616921919-hns9m0q39jb21qrp4kpb57kti2sd5t1n.apps.googleusercontent.com"
//           onLogoutFailure={onLogoutFailure}
//           onLoginStart={onLoginStart}
//           onLogoutSuccess={onLogoutSuccess}
//           onResolve={({ provider, data }) => {
//             setProvider(provider);
//             setProfile(data);
//             console.log(data, "data");
//             console.log(provider, "provider");
//           }}
//           onReject={(err) => {
//             console.log("hbhbdhd", err);
//           }}
//         >
//           <GoogleLoginButton />
//         </LoginSocialGoogle>
//       </div>
//     </>
//   );
// };

// export default SocialLogin;
