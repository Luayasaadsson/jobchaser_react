
import { useTheme } from "../context/useTheme";
import ThemeSwitcherCss from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

// Light Mode SVG
const lightModeSVG = (
  <svg className={ThemeSwitcherCss.themeIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" style={{ width: '35px', height: '35px' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" stroke={theme === 'light' ? 'currentColor' : '#efe33e'} />
  </svg>
);

// Dark Mode SVG
const darkModeSVG = (
  <svg className={ThemeSwitcherCss.themeIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" style={{ width: '35px', height: '35px' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" stroke={theme === 'light' ? 'currentColor' : '#efe33e'} />
  </svg>
);

  return (
    <button className={ThemeSwitcherCss.themeswitcherbtn} onClick={toggleTheme} title="Toggle theme">
      {theme === 'light' ? darkModeSVG : lightModeSVG}
      <span className="sr-only">Byt till {theme === 'light' ? 'mörkt' : 'ljus'} läge</span>
    </button>
  );
};

export default ThemeSwitcher;
