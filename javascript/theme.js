const 
themeToggle=document.getElementById("themeToggle"),
themeLabel=document.getElementById("themeLabel"),
themeIcon=document.getElementById("themeIcon");
function updateThemeUI(isDark){themeLabel.textContent=isDark?"LIGHT":"DARK";
    themeToggle.setAttribute("aria-label",isDark?"Switch to light mode":"Switch to dark mode");
    themeToggle.setAttribute("aria-pressed",String(isDark));themeIcon.innerHTML=isDark?'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.7 15.2A8.5 8.5 0 0 1 8.8 3.3a8.5 8.5 0 1 0 11.9 11.9Z"/></svg>'}const savedTheme=localStorage.getItem("planet-theme");if(savedTheme==="dark")document.body.classList.add("dark");updateThemeUI(document.body.classList.contains("dark"));themeToggle.addEventListener("click",()=>{const isDark=document.body.classList.toggle("dark");localStorage.setItem("planet-theme",isDark?"dark":"light");updateThemeUI(isDark)});