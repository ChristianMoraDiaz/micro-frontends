import React, { useEffect } from "react";
import SendBird from "sendbird";

const sendbirdHandle = () => {
  const sb = new SendBird({
    appId: "08651581-4F2E-4F37-B21C-943812BB4639",
    localCacheEnabled: true,
  });

  sb.connect("1", function (user, error) {
    if (error) {
      console.log("USER ERROR");
    }
    if (!error) {
      console.log("USER CONNECTED", user.nickname);
    }
  });

  sb.OpenChannel.getChannel(
    "sendbird_group_channel_152235700_a39a0776f4b40b2ec9db436bb21a43393d3c73db",
    function (openChannel, error) {
      if (error) {
        console.log("CHANNEL NOT FOUND");
      }
      if (!error) {
        console.log("CHANNEL FOUND");
        openChannel.enter(function (response, error) {
          if (error) {
            console.log("CHANNEL ERROR");
          }
          if (!error) {
            console.log("CHANNEL CONNECTED");
          }
        });
      }
    }
  );

  console.log("sb =>", sb);
};

export default function Chat() {
  useEffect(() => {
    sendbirdHandle();
  }, []);

  return (
    <div>
      <h1>aca va el chat</h1>
    </div>
  );
}
