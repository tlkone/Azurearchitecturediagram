# 📦 Complete Deployment Guide to GitHub Pages

## Prerequisites
- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer (download from https://git-scm.com/)

---

## 🚀 PART 1: Deploy to GitHub Pages

### Step 1: Create a New GitHub Repository

1. Open your web browser and go to https://github.com
2. Click the **"+"** button in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `azure-landing-zone-diagram` (or any name you prefer)
   - **Description:** "Enterprise Azure Landing Zone Architecture Diagram"
   - **Visibility:** Select **Public** (required for free GitHub Pages)
   - ⚠️ **IMPORTANT:** Do NOT check any boxes (no README, no .gitignore, no license)
5. Click **"Create repository"**
6. **KEEP THIS PAGE OPEN** - you'll need the repository URL

### Step 2: Prepare Your Local Files

1. Open your terminal/command prompt
2. Navigate to your project folder where all these files are located:
   ```bash
   cd path/to/your/project
   ```
   (Replace `path/to/your/project` with the actual path)

### Step 3: Initialize Git and Push to GitHub

Copy and paste these commands **one at a time** into your terminal:

```bash
# 1. Initialize git repository
git init

# 2. Add all your files
git add .

# 3. Commit your files
git commit -m "Initial commit: Azure Landing Zone diagram"

# 4. Rename branch to main
git branch -M main

# 5. Connect to your GitHub repository
# ⚠️ REPLACE with YOUR repository URL from Step 1
git remote add origin https://github.com/YOUR_USERNAME/azure-landing-zone-diagram.git

# 6. Push to GitHub
git push -u origin main
```

**Example for step 5:**
If your GitHub username is `johnsmith` and your repo is `azure-landing-zone-diagram`, the command would be:
```bash
git remote add origin https://github.com/johnsmith/azure-landing-zone-diagram.git
```

### Step 4: Enable GitHub Pages

1. Go back to your repository on GitHub (https://github.com/YOUR_USERNAME/azure-landing-zone-diagram)
2. Click the **"Settings"** tab (top menu)
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** from the dropdown
5. The page will auto-save (you'll see a blue notification)

### Step 5: Wait for Deployment

1. Click the **"Actions"** tab (top menu)
2. You should see a workflow running: **"Deploy to GitHub Pages"**
3. Click on it to watch the progress
4. Wait until you see green checkmarks ✅ (usually takes 1-2 minutes)
5. Once complete, you'll see a deployment URL in the deploy step

### Step 6: Access Your Live Diagram

Your diagram is now live at:
```
https://YOUR_USERNAME.github.io/azure-landing-zone-diagram/
```

**Example:**
If your username is `johnsmith`:
```
https://johnsmith.github.io/azure-landing-zone-diagram/
```

---

## 📄 PART 2: Add to Your README

### Option A: Embed as a Link

Add this to your project's README.md file:

```markdown
## 🏗️ Architecture Diagram

View the interactive Azure Landing Zone architecture diagram:

**[🔗 View Live Diagram](https://YOUR_USERNAME.github.io/azure-landing-zone-diagram/)**
```

### Option B: Embed with More Details

```markdown
## 🏗️ Architecture Diagram

This project includes a comprehensive interactive architecture diagram showing:
- Complete management group hierarchy
- Hub-spoke networking topology
- All deployed Azure resources
- Governance components and policies
- Validation results

**[🔗 View Interactive Diagram](https://YOUR_USERNAME.github.io/azure-landing-zone-diagram/)**

The diagram is built with React and visualizes the complete Enterprise Azure Landing Zone deployment following Microsoft's Cloud Adoption Framework principles.
```

### Option C: Add to Table of Contents

```markdown
## Table of Contents

- [Overview](#overview)
- [🏗️ Architecture Diagram](https://YOUR_USERNAME.github.io/azure-landing-zone-diagram/)
- [Prerequisites](#prerequisites)
- [Deployment](#deployment)
- [Configuration](#configuration)
```

---

## 🔄 How to Update Your Diagram Later

Whenever you make changes to your diagram:

```bash
# 1. Make your changes to the code files

# 2. Add the changes
git add .

# 3. Commit with a message
git commit -m "Updated architecture diagram"

# 4. Push to GitHub
git push
```

The diagram will automatically rebuild and deploy in 1-2 minutes!

---

## ❓ Troubleshooting

### "git: command not found"
- Install Git from https://git-scm.com/
- Restart your terminal after installing

### "Permission denied" when pushing
- Make sure you're logged into GitHub
- You may need to set up SSH keys or use a Personal Access Token
- Follow: https://docs.github.com/en/authentication

### Workflow fails in Actions tab
- Check the error message in the Actions tab
- Most common issue: `package-lock.json` is missing
- Fix: Run `npm install` in your project folder, then:
  ```bash
  git add package-lock.json
  git commit -m "Add package-lock.json"
  git push
  ```

### Page shows 404
- Wait 5 minutes and try again
- Clear your browser cache
- Make sure GitHub Pages is enabled (Step 4)
- Check that the repository is public

### "Repository not found"
- Double-check your repository URL
- Make sure you're using YOUR username, not the example

---

## 📧 Need Help?

If you get stuck:
1. Check the error message carefully
2. Copy the exact error and search on Google
3. Visit GitHub's help: https://docs.github.com/en/pages

---

## ✅ Quick Checklist

Before you start:
- [ ] Git is installed on your computer
- [ ] You have a GitHub account
- [ ] You're in the correct project folder in terminal

After deployment:
- [ ] Repository created on GitHub
- [ ] Files pushed successfully
- [ ] GitHub Pages enabled
- [ ] Actions workflow completed successfully
- [ ] Live site is accessible
- [ ] Link added to README

---

Good luck! 🎉
