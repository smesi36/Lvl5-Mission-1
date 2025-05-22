<a id="readme-top"></a>

# Turners Car Auction Insurance Project

A web app that uses a trained Azure custom vision object detector AI model to identify vehicle types and some brands

## 📁 Table of Content

1. [About the Project](#about-the-project)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Usage](#usage)
4. [Roadmap](#roadmap)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)
8. [Acknowledgments](#acknowledgments)

---

<h2 id="about-the-project">🧾 About the Project</h2>

This project is a simple web-based app designed for Turners Car Auction Insurance. It enables users to upload and analyse vehicle images. The app uses Microsoft Azure Custom Vision to detect three types of vehicles: **Truck**, **SUV**, and **Sedan**, and identifies brands as **Mercedes**, **Toyota**, or **Other**.

<img src="src/assets/default-img-preview.png" alt="Homepage Screenshot" width="640"/>

<p align='right'>(<a href='#readme-top'>back to top</a>)</p>

<h3 id="built-with">🔧 Built With</h3>

- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- Node.js & Express
- Multer & CORS middleware
- Dotenv
- Axios
- SCC Modules
- JavaScript (ES6+)
- HTML5

---

<p align='right'>(<a href='#readme-top'>back to top</a>)</p>

<h2 id="getting-started">🚀 Getting Started</h2>

To get a local copy up and running, follow the steps below.

<h3 id="prerequisites">Prerequisites</h3>

You'll need [Node.js](http://nodejs.org/) and npm installed:

Frontend:
```bash
npm install
```
Backend:
```bash
npm init
npm install express cors multer dotenv axios
npm install --save-dev nodemon 
```
Optional DevTools
You can run the backend with nodemon for auto-restart during development:
```bash
npx nodemon server.js
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h3 id="installation">🛠️ Installation</h3>

1. Clone the repo

```bash
git clone https://github.com/smesi36/Lvl5-Mission-1.git
```

2. Install dependencies in both frontend and backend folders.

3. Create a .env file in the backend folder:

```sh
CUSTOM_VISION_URL=your_custom_vision_url
CUSTOM_VISION_KEY=your_prediction_key
```
4. Ensure .gitignore includes the .env file:

```sh
node_modules
.env
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="usage">💻 Usage</h2>

Once installed, start the front end and back end development server:

```sh
npm run dev
```
Open your browser and visit http://localhost:5173 to view the site.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="roadmap">🗺️ Roadmap</h2>

- [x] Integrate Azure Custom Vision API
- [x] Identify vehicle types (Truck, SUV, Sedan)
- [x] Identify brands (Toyota, Mercedes, Other)
- [] Add drag & drop image upload
- [] Add loading animation during prediction
- [] Improve responsive styling
- [] Deploy to Azure or Vercel

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="contributing">🤝 Contributing</h2>

Contributions make open-source great! If you have suggestions:

1. Fork the Project
2. Create your branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to GitHub (`git push origin feature/YourFeature`)
5. Open a pull request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="license">📄 License</h2>

This project is licensed under the <a href='https://choosealicense.com/licenses/mit/'>MIT License</a>.

You are free to use, copy, modify, merge, publish, and distribute the software.

<h2 id="contact">📫 Contact</h2>

**Erekle Sesiashvili**  
📧 [erekles@missionreadyhq.com](mailto:erekles@missionreadyhq.com)<br>
[GitHub Profile] https://github.com/smesi36<br>
![GitHub Repository](https://img.icons8.com/?size=18&id=bVGqATNwfhYq&format=png&color=000000)[GitHub Repository]https://github.com/smesi36/Lvl5-Mission-1

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="acknowledgments">🙏 Acknowledgments</h2>

- [W3Schools – CSS Flexbox Guide](https://www.w3schools.com/css/css3_flexbox.asp)
- [Azure - Custom Vision](https://azure.microsoft.com/en-gb)
- [File Uploads in React](https://youtu.be/pWd6Enu2Pjs?si=Zz9Dd_iWqTgApAnL)
- [Icons8 – GitHub Icon](https://icons8.com/icons/set/github)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
