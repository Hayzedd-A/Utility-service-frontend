import React, { useContext } from "react";
import coverPage from "../../assets/cover_page_out.png";
import { AppContext } from "../../config/AppContext";

function Image() {
  // Adjust position based on login form state (left or right) to create a visual effect
  const { loginForm } = useContext(AppContext);
  const position = loginForm === "signup" ? "50%" : "4em";
  console.log(position);
  return (
    <div className="image-cover" style={{ right: position }}>
      <img src={coverPage} alt="The cover page " />;
    </div>
  );
}

export default Image;
