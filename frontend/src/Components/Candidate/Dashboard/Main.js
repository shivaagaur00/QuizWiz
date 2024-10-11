import React from "react";
import { useAppContext } from "../../../LocalStorage";
function Main() {
  const { user } = useAppContext();
  return (
    <div>
      <nav>{user.firstName}</nav>
      <div>div</div>
    </div>
  );
}

export default Main;
