# 🏗️ Enterprise Azure Landing Zone - Architecture Diagram

An interactive visualization of a secure, compliant, enterprise-ready Azure Landing Zone following Microsoft's Cloud Adoption Framework (CAF) principles.

## 🌐 Live Demo

**[View Live Diagram](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)**

## 📋 Overview

This interactive architecture diagram visualizes:

- **Management Group Hierarchy** - Tenant Root → Platform → Landing Zones structure
- **Hub-Spoke Network Topology** - VNet peering with centralized security
- **Resource Groups & Services** - Log Analytics, Key Vault, Azure Firewall, and more
- **Governance Controls** - Azure Policies, RBAC assignments, and compliance validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages.

### Setup Instructions

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source
   - The workflow will automatically deploy on every push to `main`

3. **Access your diagram:**
   - Once deployed, visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🏗️ Architecture Components

### Management Groups
- **Platform**: Identity, Management, Connectivity
- **Landing Zones**: Corp, Sandbox

### Network Topology
- **Hub VNet** (10.0.0.0/16): Azure Firewall, VPN Gateway, Bastion
- **Spoke VNets** (10.x.0.0/16): Application workloads

### Governance
- **Policies**: Location restrictions, tag enforcement, HTTPS requirements
- **RBAC**: Platform ops, security ops, network ops, app teams
- **Compliance**: Automated validation and enforcement

## 🛠️ Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Shadcn/ui** - Component library

## 📁 Project Structure

```
├── App.tsx                          # Main application component
├── components/
│   ├── AzureArchitectureDiagram.tsx # Architecture diagram component
│   └── ui/                          # Reusable UI components
├── styles/
│   └── globals.css                  # Global styles
├── .github/workflows/
│   └── deploy.yml                   # GitHub Pages deployment
└── package.json                     # Dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this in your own projects!

## 🔗 Related Resources

- [Microsoft Cloud Adoption Framework](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/)
- [Azure Landing Zones](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
- [Enterprise-Scale Architecture](https://github.com/Azure/Enterprise-Scale)

---

Built with ❤️ for Azure Cloud Architects
