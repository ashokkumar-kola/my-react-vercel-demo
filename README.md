# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# Create a sample React project and deploy it using Vercel + GitHub. Let's build this step by step!

## Step 1: Create a Sample React Project

First, let's create a React application using Vite (faster and more modern):

```bash
# Create a new React project with Vite
npm create vite@latest my-react-vercel-demo -- --template react
cd my-react-vercel-demo

# Install dependencies
npm install
```

Or if you prefer Create React App:

```bash
# Alternative: using Create React App
npx create-react-app my-react-vercel-demo
cd my-react-vercel-demo
```

## Step 2: Customize the Sample Project

Let's modify the default React app to make it more demo-friendly:

**Update `src/App.jsx`** (or `src/App.js`):

```jsx
```

**Update `src/App.css`**:

```css
```

## Step 3: Create Vercel Configuration (Optional)

Create a `vercel.json` file in the root directory to configure Vercel:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Step 4: Test Locally

```bash
# Run the development server
npm run dev
```

Visit `http://localhost:5173` (Vite) or `http://localhost:3000` (Create React App) to see your app running locally.

## Step 5: Push to GitHub

### Initialize Git and push to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: React Vercel demo project"

# Create GitHub repository (do this on GitHub.com)
# Then connect your local repo:

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-react-vercel-demo.git
git push -u origin main
```

## Step 6: Deploy with Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Click "Add New Project"**
3. **Connect your GitHub account** and authorize Vercel
4. **Import your repository** - select `my-react-vercel-demo`
5. **Configure project**:
   - Framework Preset: Vite (or Create React App)
   - Build Command: `npm run build`
   - Output Directory: `dist` (for Vite) or `build` (for Create React App)
6. **Click "Deploy"** 🚀

## Step 7: Set Up Branch Deployments

### Create development and staging branches:

```bash
# Create and push staging branch
git checkout -b staging
git push -u origin staging

# Create and push dev branch  
git checkout -b dev
git push -u origin dev

# Switch back to main
git checkout main
```

### In Vercel Dashboard:
1. Go to **Project → Settings → Git**
2. Connect the additional branches (staging, dev)
3. Vercel will automatically create preview deployments for each branch

## Step 8: Test the CI/CD Pipeline

Make a small change to test automatic deployments:

```bash
# Edit the title in src/App.jsx
# Change "🚀 React + Vercel CI/CD" to "🚀 React + Vercel CI/CD - Updated!"

git add .
git commit -m "Test: Update title to verify auto-deployment"
git push origin main
```

**Visit your Vercel URL** - you should see the changes live within 1-2 minutes!

## Project Structure Recap

Your final project structure should look like:
```
my-react-vercel-demo/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── public/
├── package.json
├── vercel.json
├── vite.config.js (or other config files)
└── README.md
```

## Your Live URLs

After deployment, you'll get:
- **Production**: `https://my-react-vercel-demo.vercel.app` (main branch)
- **Staging**: `https://my-react-vercel-demo-git-staging-your-username.vercel.app` 
- **Development**: `https://my-react-vercel-demo-git-dev-your-username.vercel.app`

## Troubleshooting Tips

If you encounter issues:

1. **Build fails**: Check build logs in Vercel dashboard
2. **404 errors**: Ensure output directory is correct (`dist` for Vite, `build` for CRA)
3. **Environment variables**: Add them in Vercel project settings
4. **Routes not working**: May need to configure redirects in `vercel.json`

Your React app with free CI/CD pipeline is now live! Every git push automatically triggers a new deployment. 🎉