#TypeScript + Express Setup


---

#  1. Create Project

```bash
mkdir devtrackr
cd devtrackr
npm init -y
```

---

# 2. Install Dependencies

```bash
npm install express
npm install -D typescript ts-node nodemon @types/node @types/express
```

---

# 3. Setup TypeScript

```bash
npx tsc --init
```

---

# 🧱 4. Folder Structure

```
node-app/
  src/
    app.ts
    server.ts
  package.json
  tsconfig.json
```

---

# 5. tsconfig.json

Replace with this:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "commonjs",
    "target": "es6",
    "esModuleInterop": true,
    "strict": true
  }
}
```

---

# ⚙️ 6. package.json Scripts

```json
"scripts": {
  "dev": "nodemon --exec ts-node src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

# 7. app.ts

```ts
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

export default app;
```

---

# 8. server.ts

```ts
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

# 9. Run Project

```bash
npm run dev
```

---

# 10. Test

Open browser:

```
http://localhost:3000
```

Output:

```
Server is running
```

---

# Key Points (Remember)

- Use "commonjs" (simple setup)
- Use nodemon + ts-node for dev
- Keep structure clean (app + server separate)

---

This is your base for all backend projects.

