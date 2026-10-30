# Lab 01: Building Basic Web Servers with Node.js and Express

**Author:** VINOD KUMAR | **Hall Ticket / Reg No:** 252U1R1184 | **Branch & Section:** B.Tech CSE - 2D  
**Subject:** Backend Development Fundamentals (II Year - II Sem) | **Mentor:** SAI SIVA TEJA | **University:** Aurora Deemed to be University  
**Live Production URL:** [https://backend-development-lab-1-vinod.vercel.app](https://backend-development-lab-1-vinod.vercel.app)

---

## ðŸ“‘ Index
1. [Project Overview & Goals](#-project-overview--goals)
2. [Deep Dive into package.json Properties](#-deep-dive-into-packagejson-properties)
3. [Setup & Running Locally](#-setup--running-locally)
4. [Route Specifications & Scripts](#-route-specifications--scripts)
5. [Visual Output & Route Proofs](#-visual-output--route-proofs)
6. [Troubleshooting & Key Learnings](#-troubleshooting--key-learnings)
7. [Viva Assessment Q&A](#-viva-assessment-qa)

---

## ðŸŽ¯ Project Overview & Goals
The primary goal of this practical lab is to grasp foundational server-side development in Node.js. This includes:
- Creating a baseline HTTP server utilizing the built-in `http` core module (`http.createServer`).
- Transitioning to the `Express.js` framework to understand routing architecture, middleware execution, JSON serialization, and centralized 404 error routing.
- Testing API endpoints across standard HTTP status codes (`200 OK`, `404 Not Found`).

---

## âš™ï¸ Deep Dive into `package.json` Properties
Running `npm init -y` sets up the project configuration file. Below is an overview of what each key represents:

| Key | Significance |
| :--- | :--- |
| `"name"` | The official package identifier in lower-case notation (`"lab-1"`). |
| `"version"` | Semantic versioning format (`Major.Minor.Patch`) indicating current build stage (`"1.0.0"`). |
| `"description"` | A concise summary explaining what the project does. |
| `"main"` | The primary entry script triggered when the package is loaded (`"index.js"`). |
| `"scripts"` | Custom execution commands callable through npm (such as `npm start` and `npm run start:http`). |
| `"keywords"` | Search tags facilitating discovery across npm or documentation systems. |
| `"author"` | Credits the creator/developer of the project (`"Vinod Kumar"`). |
| `"license"` | Dictates rights and usage permissions for the codebase (`"ISC"`). |
| `"type"` | Sets the module standard: `"commonjs"` (for `require`/`module.exports`) vs `"module"` (ES modules). |
| `"dependencies"` | External libraries necessary for running the server in production (e.g., `"express"`). |

---

## ðŸš€ Setup & Running Locally

### Step 1: Environment Requirements
Ensure **Node.js** (v18+) and **npm** (v9+) are present on your machine.

### Step 2: Clone and Install
```bash
# Enter the lab directory
cd lab-01

# Fetch project dependencies
npm install
```

### Step 3: Optional Configurations (`.env`)
You may declare an optional `.env` file to customize environmental properties:
```env
PORT=3000
STUDENT_NAME=Vinod Kumar
STUDENT_REG_NO=252U1R1184
STUDENT_SECTION=CSE-2D
```

### Step 4: Starting the Applications
- **To launch the plain native Node HTTP server:**
  ```bash
  npm run start:http
  # Listens on http://localhost:3000
  ```

- **To start the Express server:**
  ```bash
  npm start
  # Listens on http://localhost:3000
  ```

---

## ðŸ›£ï¸ Route Specifications & Scripts

### Available NPM Scripts
- `npm start` âž” Executes `node index.js` (Express application).
- `npm run start:http` âž” Executes `node http-server.js` (Native HTTP module).

### Route Table
| Method | Endpoint | Expected Payload / Response | Status |
| :---: | :--- | :--- | :---: |
| `GET` | `/` | Text banner greeting the user to the Express server. | `200` |
| `GET` | `/about` | JSON object displaying student identity (name, reg number, section, course). | `200` |
| `GET` | `/date` | String presenting the date formatted as learned in class lectures. | `200` |
| `GET` | `/time` | JSON object containing current date & time string via `new Date().toString()`. | `200` |
| `*` | Any undefined path (e.g. `/random`) | Fallback JSON indicating route does not exist. | `404` |

---

## ðŸ“¸ Visual Output & Route Proofs

### 1. Native HTTP Server (`http-server.js`)
Replies with plain text `Hello Vinod Kumar`:
![Native HTTP Server](screenshots/route_http_plain.png)

### 2. Express Server - Home Route (`/`)
Returns confirmation welcome text:
![GET Root Route](screenshots/route_root.png)

### 3. Express Server - Student Information (`/about`)
Delivers parsed JSON student identity:
![GET About Route](screenshots/route_about_details.png)

### 4. Express Server - Lecture Date (`/date`)
Displays today's calendar string:
![GET Date Route](screenshots/route_date.png)

### 5. Express Server - Realtime Clock (`/time`)
Generates timestamp using `new Date()`:
![GET Time Route](screenshots/route_time.png)

### 6. Express Server - Unregistered Route Fallback (404)
Graceful catch-all handler for undefined paths:
![GET 404 Route](screenshots/route_404.png)

---

## ðŸ’¡ Troubleshooting & Key Learnings
1. **Handling Port Duplication (`EADDRINUSE`)**:
   - *Issue:* Attempting to run both the plain HTTP server and Express at the same time on port `3000` causes an address collision.
   - *Resolution:* Configured fallback binding `const PORT = process.env.PORT || 3000` and terminated the previous background process prior to spinning up another server.
2. **Excluding Heavy Dependencies via Git**:
   - *Issue:* Committing `node_modules` floods the Git history with hundreds of megabytes of third-party packages.
   - *Resolution:* Created a `.gitignore` containing `node_modules` and `.env` so only essential source code is committed.
3. **Handling Unknown Routes Gracefully**:
   - *Issue:* Without a custom fallback, Express renders a generic HTML error stack.
   - *Resolution:* Registered a catch-all middleware (`app.use((req, res) => {...})`) at the bottom of all route definitions to return an informative JSON payload alongside HTTP 404.

---

## ðŸŽ¯ Viva Assessment Q&A
- **Differentiate between `package.json` and `node_modules`:**
  `package.json` is the configuration blueprint stating metadata, scripts, and package version rules that gets pushed to GitHub. `node_modules` is the local runtime folder storing the downloaded package source files and is intentionally kept out of source control.
- **Explain the role of `app.listen()`:**
  It binds and listens for incoming TCP client connections on the configured port number, continuously awaiting HTTP requests.
- **What is the contrast between `req` and `res`?**
  `req` (Request) is an object wrapping information transmitted by the client (HTTP method, headers, parameters, query, body). `res` (Response) is the server-side object used to construct headers, set HTTP status codes, and transmit data back to the client.
