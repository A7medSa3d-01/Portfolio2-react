import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModel, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="bullets icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        style={{ justifyContent: "center"}}
        className="moon flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-remove"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

// import { useEffect, useState } from "react";
// import "./header.css";

// export default function Header() {
//   const [showModel, setShowModel] = useState(false);
//   const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light" );
//   useEffect(() => {
//     if (theme === "light") {
//       document.body.classList.remove("dark");
//       document.body.classList.add("light");
//     }else {
//       document.body.classList.remove("light");
//       document.body.classList.add("dark");
//     }
//   }, [theme]);

//   return (
//     <header className="flex">
//       <button className="bullets icon-menu" />
//       <div />
//       <nav>
//         <ul className="flex">
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Articles</a>
//           </li>
//           <li>
//             <a href="#">Projects</a>
//           </li>
//           <li>
//             <a href="#">Speaking</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <button
//         onClick={() => {
//           localStorage.setItem(
//             "currentMode",
//             theme === "dark" ? "light" : "dark"
//           );
//           setTheme(localStorage.getItem("currentMode"));
//         }}
//         className="moon"
//       >
//         {theme === "dark" ? (
//           <span className="icon-moon-o"></span>
//         ) : (
//           <span className="icon-sun"></span>
//         )}
//       </button>
//       {}
//       {showModel && (
//         <div className="fixed">
//           <ul className="model">
//             <li>
//               <button
//                 className="closeBullets icon-remove"
//                 onClick={() => {
//                   setShowModel(false);
//                 }}
//               />
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Articles</a>
//             </li>
//             <li>
//               <a href="#">Projects</a>
//             </li>
//             <li>
//               <a href="#">Speaking</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
