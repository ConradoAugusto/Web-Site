import { RoutesMain } from "./routes/RoutesMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("touchstart", () => {}, true);
  }, []);

  useEffect(() => {
    if (location.pathname === "/agradecimento") {
      localStorage.setItem("currentPath", "/");
    } else if (!["/contato", "/formulario"].includes(location.pathname)) {
      localStorage.setItem("currentPath", location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "none";
          void entry.target.offsetWidth;

          const animationMap = {
            fadeLeftSlow: "fadeLeftSlow 1s ease-in-out forwards",
            fadeRightSlow: "fadeRightSlow 1s ease-in-out forwards",
            fadeTopSlow: "fadeTopSlow 1s ease-in-out forwards",
            fadeBottomSlow: "fadeBottomSlow 1s ease-in-out forwards",
          };

          Object.keys(animationMap).forEach((cls) => {
            if (entry.target.classList.contains(cls)) {
              entry.target.style.animation = animationMap[cls];
            }
          });
        }
      });
    });

    const elementos = document.querySelectorAll(
      ".fadeLeftSlow, .fadeRightSlow, .fadeTopSlow, .fadeBottomSlow"
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => elementos.forEach((elemento) => observer.unobserve(elemento));
  }, [location.pathname]);

  return (
    <>
      <RoutesMain key={location.pathname} />
    </>
  );
}

export default App;
