import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginBottom: 12 }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
      <span style={{ marginLeft: 8 }}>Current: {theme}</span>
    </div>
  );
}