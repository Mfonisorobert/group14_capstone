# GROUP14_CAPSTONE PROJECT - Planet Web App

A responsive planet-information website built with **HTML, CSS and JavaScript**.

This is a Capstone project about Planets. It's a web app that lets you search for any planet and instantly see its details - image, type, mass, gravity, orbit, period, and more. It also has a comparison table for all planets. Data from NASA


## Team Members:

Mfoniso Robert https://github.com/Mfonisorobert/

Uchechukwu Princewill Ndubueze https://github.com/PPintentionally1

Umunnakwe Adaeze Vivian https://github.com/Evergreen1bella

Bello Abdulrahman Ohinoyi https://github.com/aohinoyi

Nwankpa Goodnews https://github.com/GoodNyx

Alao Hazzan https://github.com/omba123-pr

Adepoju Samuel https://github.com/Smilee452

Olatuga Samuel https://github.com/glitch-codes

Edim Bond Inyang https://github.com/DocTech007

Elvis Ihimire https://github.com/

Jacklyn Nwachukwu https://github.com/





## Work Structure

1. Structuring of the project

## Project structure

```text
GROUP14_CAPSTONE/
├── index.html
├── README.md
├── css/
│   ├── base.css
│   ├── header.css
│   ├── search.css
│   ├── planet-card.css
│   ├── table.css
│   ├── footer.css
│   └── responsive.css
├── javascript/
│   ├── data.js
│   ├── theme.js
│   ├── planet-card.js
│   ├── search.js
│   └── table.js
└── images/
    ├── logo_black.svg
    └── logo.svg
```

## What each file does

- `index.html`: page structure and links to styles/scripts.
- `css/base.css`: global colors, typography, reset and shared layout.
- `css/header.css`: logo and light/dark theme control.
- `css/search.css`: planet search bar and feedback messages.
- `css/planet-card.css`: selected planet information and icons.
- `css/table.css`: planetary comparison table.
- `css/footer.css`: footer layout.
- `css/responsive.css`: tablet and mobile adjustments.
- `javascript/data.js`: shared planet information.
- `javascript/theme.js`: theme switching, exact supplied SVG logo switching and saved preference.
- `javascript/planet-card.js`: updates the planet information card.
- `javascript/search.js`: search behavior.
- `javascript/table.js`: builds the table and handles row selection.
- `images/logo_black.svg`: supplied black logo for light mode.
- `images/logo.svg`: supplied white logo for dark mode.

## Team workflow

### Ground rules

1. Do not work directly on `main`.
2. Pull the latest `main` before starting a new task.
3. Create a branch for your task.
4. Work mainly in the files assigned to you.
5. Commit and push your branch.
6. Open a Pull Request from your branch into `main`.
7. The team lead reviews and merges Pull Requests.

### First time on a member's computer

```bash
git clone https://github.com/Mfonisorobert/GROUP14_CAPSTONE.git
cd GROUP14_CAPSTONE
git switch -c feature/your-task
```

Replace the URL with the actual repository URL and replace `feature/your-task` with the branch assigned to you.

### Save and share your work

```bash
git status
git add .
git commit -m "Describe the change"
git push -u origin feature/your-task
```

Then open GitHub and create a Pull Request targeting `main`.

### Start a new task later

```bash
git switch main
git pull origin main
git switch -c feature/new-task
```

### Suggested task branches

- `feature/header-theme`
- `feature/search`
- `feature/planet-card`
- `feature/planet-table`
- `feature/footer`
- `feature/responsive`

## Coordination notes

- Only the team lead should change `index.html` unless a change is agreed in advance.
- Coordinate before editing a file assigned to another member.
- If Git reports a merge conflict, stop and ask the team lead for help rather than deleting code at random.
- Never commit passwords, API keys, or private credentials.
