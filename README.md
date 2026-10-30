# Lab 1: Node.js and Express server

**Student Name:** VINOD KUMAR · **Registration Number:** 252U1R1184 · **Section:** CSE-2D  
**Course:** Backend Development Fundamentals (Year II Term II) · **Faculty:** SAI SIVA TEJA · **Institution:** Aurora Deemed to be University  
**Live Link:** [https://backend-development-lab-1-vinod.vercel.app](https://backend-development-lab-1-vinod.vercel.app)  

---

## --> Table of Contents
1. [Objective](#objective)
2. [Explanation of package.json Fields](#explanation-of-packagejson-fields)
3. [How to Run](#how-to-run)
4. [Endpoints and Scripts](#endpoints-and-scripts)
5. [Screenshots of Working Endpoints](#screenshots-of-working-endpoints)
6. [Notes: Problems Faced & Solutions](#notes-problems-faced--solutions)
7. [Viva Preparation & Concept Q&A](#viva-preparation--concept-qa)

---

## --> Objective
Set up a Node.js project and build a modular web server, first using Node's built-in `http` module and then rewritten using the `Express` framework with routing, status code handling, and 404 fallback handling.

---

## --> Explanation of `package.json` Fields
When initializing a Node.js project with `npm init -y`, `package.json` is generated as the project manifest. Below is an explanation of every field:

| Field | Purpose / Description |
| :--- | :--- |
| `"name"` | The lowercase, URL-friendly unique identifier/name for this Node.js package or project (e.g., `"lab-01"`). |
| `"version"` | Follows Semantic Versioning (`MAJOR.MINOR.PATCH`, e.g., `"1.0.0"`). Tracks release iterations. |
| `"description"` | A brief human-readable summary of the package/project purpose. |
| `"main"` | The primary entry point file of the application that gets executed when the package is required or imported (e.g., `"index.js"`). |
| `"scripts"` | Custom terminal alias scripts that can be invoked via `npm run <script-name>` or `npm start` (e.g., `"start": "node index.js"`). |
| `"keywords"` | An array of search keywords to help discover the package in the npm registry. |
| `"author"` | Name, email, or URL of the package author/maintainer (`"Vinod Kumar"`). |
| `"license"` | The legal software distribution license (e.g., `"ISC"`, `"MIT"`). |
| `"type"` | Specifies the module system: `"commonjs"` (uses `require` / `module.exports`) or `"module"` (ESM syntax using `import` / `export`). |
| `"dependencies"` | Production packages and libraries required at runtime (e.g., `"express": "^5.3.0"`). Installed into `node_modules`. |

---

## --> How to Run

### 1. Prerequisites
- **Node.js** (v18.x or later installed)
- **npm** (v9.x or later installed)

### 2. Installation
Navigate to the lab folder and install dependencies:
```bash
# Navigate to the lab folder
cd lab-01

# Install required dependencies (Express)
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of `lab-01/` (optional, default fallbacks are provided in code):
```env
PORT=3000
STUDENT_NAME=Vinod Kumar
STUDENT_REG_NO=252U1R1184
STUDENT_SECTION=CSE-2D
```

### 4. Running the Servers
- **Run the Plain HTTP Server (Task 3):**
  ```bash
  npm run start:http
  # Or: npm run http
  # Runs http-server.js on http://localhost:3000
  ```

- **Run the Express Server (Tasks 4–7):**
  ```bash
  npm start
  # Runs index.js on http://localhost:3000
  ```

---

## --> Endpoints and Scripts

### Available NPM Scripts
| Script Command | Description |
| :--- | :--- |
| `npm start` | Runs the Express application server (`node index.js`). |
| `npm run start:http` | Runs the plain Node.js built-in HTTP server (`node http-server.js`). |

### API Endpoints
| HTTP Method | Route Path | Description | Expected Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Welcome text message confirming the server is alive. | `200 OK` |
| `GET` | `/about` | Returns student information (Name, Reg No, Section, Course) in JSON format. | `200 OK` |
| `GET` | `/date` | Returns today's date formatted string (`Today's date is ${date}`) as taught in NxtWave. | `200 OK` |
| `GET` | `/time` | Returns JSON with current date/time using `new Date()` (`{ currentTime: new Date().toString() }`). | `200 OK` |
| `*` | Any undefined path (e.g., `/random`) | Custom 404 JSON response for unhandled routes. | `404 Not Found` |

---

## --> Screenshots of Working Endpoints

### 1. Plain HTTP Server (`http.createServer`) - Replying "Hello Vinod Kumar"
![Plain HTTP Server](screenshots/route_http_plain.png)

### 2. Express Server: GET `/` (Welcome Text)
![GET Root Route](screenshots/route_root.png)

### 3. Express Server: GET `/about` (JSON Student Details)
![GET About Route](screenshots/route_about_details.png)

### 4. Express Server: GET `/date` (Getting Today's Date)
![GET Date Route](screenshots/route_date.png)

### 5. Express Server: GET `/time` (Current Date and Time)
![GET Time Route](screenshots/route_time.png)

### 6. Express Server: GET `/unknown-path` (404 Not Found Handling)
![GET 404 Route](screenshots/route_404.png)

---

## --> Notes: Problems Faced & Solutions
1. **Port Conflicts (`EADDRINUSE`)**:
   - *Problem:* Running both `http-server.js` and `index.js` simultaneously on port `3000` causes an `EADDRINUSE` error.
   - *Solution:* Used environment variable `PORT = process.env.PORT || 3000` allowing dynamic port assignment, and stopped the plain HTTP server process before starting the Express server.
2. **Preventing `node_modules` from Git Commits**:
   - *Problem:* `node_modules` contains thousands of files and should not be uploaded to GitHub.
   - *Solution:* Configured a `.gitignore` file with `node_modules/` and `.env` before initializing git commits.
3. **Handling Undefined Routes (404)**:
   - *Problem:* Express by default sends an HTML 404 page for unmatched routes.
   - *Solution:* Placed a catch-all middleware (`app.use((req, res) => ... )`) at the very end of the route definitions to return a structured JSON 404 response.

---

## --> Viva Preparation & Concept Q&A
- **`package.json` vs `node_modules`:** `package.json` lists the project's metadata, dependencies, and script aliases (lightweight, committed to Git). `node_modules` holds the actual downloaded package files (heavy, excluded via `.gitignore`, recreated via `npm install`).
- **`app.listen()`:** Starts the server and makes it listen for incoming connections and HTTP requests on the specified port.
- **Request (`req`) vs Response (`res`):** `req` represents incoming HTTP request data from client (headers, URL, method, query, body); `res` represents outgoing HTTP response sent back by server (status codes, headers, body).
