import React, { useEffect } from "react";
import { useAppContext } from "../../../LocalStorage";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
function Main() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (user === undefined) {
      navigate("/auth/candidate");
    } else if (user.type === 1) {
      navigate("/examiner/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-row w-full h-screen">
      <nav className="bg-purple-200 w-1/5 border-r-2 text-blue-950 border-purple-300 justify-between flex flex-col">
        <div className="flex flex-col justify-center items-center mt-20">
          <img
            alt="profile picture"
            src={user?.photo}
            className="rounded-full border-4 p-2 border-purple-400 w-40"
          ></img>
          <h2 className="font-rubik font-semibold m-2 mt-6 ">
            {user?.firstName} {user?.lastName}
          </h2>
          <h3 className="font-serif text-sm m-2 ">{user?.email}</h3>
          <h3 className="font-playfair font-bold text-sm m-2 ">
            {user?.college}
          </h3>
        </div>
        <button className="bg-blue-900 p-3 m-4 rounded-md text-white font-rubik flex justify-center items-center hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-900 transition-colors duration-300">
          <EditNoteOutlinedIcon></EditNoteOutlinedIcon>
          <h1 className="ml-2">Join a Quiz exciting</h1>
        </button>
        <button
          onClick={(e) => setUser(undefined)}
          className="mb-6 flex flex-row justify-center bg-purple-300 border-t-4 border-b-4  border-purple-400 p-4"
        >
          <LogoutIcon></LogoutIcon>
          <h1 classNameName="ml-2 font-rubik font-semibold">Log out</h1>
        </button>
      </nav>
      <div>this is the detail secwnvjoenjn ;ew/jpwgtion</div>
    </div>
  );
}

export default Main;
