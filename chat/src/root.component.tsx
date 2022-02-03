import React, { useEffect } from "react";
import SendBird from "sendbird";
import Chat from "./components/Chat/Chat";
import Banner from "./components/UI/Banner/Banner";

export default function chat() {
  return (
    <div>
      <Banner />
      <Chat />
    </div>
  );
}
