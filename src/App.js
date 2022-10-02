import React, { useState, useEffect } from "react";
import Homepage from "./Homepage/Homepage";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading === false ? (
        <Homepage key="homepage" />
      ) : (
        <LoadingScreen key="loading" />
      )}
    </AnimatePresence>
  );
}

export default App;

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const onPageLoad = () => {
//       setTimeout(() => setLoading(false), 5000);
//     };

//     if (document.readyState === "complete") {
//       onPageLoad();
//     } else {
//       window.addEventListener("load", onPageLoad);

//       return () => window.removeEventListener("load", onPageLoad);
//     }
//   }, []);

//   return <>{loading === false ? <Homepage /> : <LoadingScreen />}</>;
// }
