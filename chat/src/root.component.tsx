import React, { useEffect } from "react";
import SendBird from "sendbird";

const sendbirdHandle = () => {
  // Initialize SendBird instance to use APIs in your app.
  var sb = new SendBird({
    appId: "08651581-4F2E-4F37-B21C-943812BB4639",
  }); // The `localCacheEnabled` is optional.

  sb.connect("96103100086", function (user, error) {
    if (error) {
      console.log("USER ERROR");
    }
    if (!error) {
      console.log("USER CONNECTED", user.nickname);
    }
  });

  console.log("sb =>", sb);
};

export default function chat() {
  useEffect(() => {
    sendbirdHandle();
  }, []);

  return (
    <div>
      <h1>aca va el chat</h1>
    </div>
  );
}
