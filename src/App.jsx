import { useLayoutEffect } from "react";
import markup from "./legacy-markup.html?raw";
import { initializePrototype } from "./prototype.js";

export function App() {
  useLayoutEffect(() => {
    initializePrototype();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
