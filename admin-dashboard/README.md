# Nomad7 Admin Dashboard

## 🚀 Quick Start Guide

### How to Access the Admin Dashboard

#### 1. **Start the Admin Dashboard**
```bash
cd admin-dashboard
npm install
npm run dev
```
The admin dashboard will be available at: `http://localhost:3001`

#### 2. **Demo Login Credentials**

| Role | Username | Password | Access Level |
|------|----------|----------|--------------|
| **Super Admin** | `superadmin` | `admin123` | Full platform access |
| **Admin** | `admin` | `nomad123` | Administrative access |
| **Moderator** | `moderator` | `mod123` | Content & safety moderation |
| **Support** | `support` | `support123` | Customer support tools |

#### 3. **Available Features by Role**

##### Super Admin (`superadmin` / `admin123`)
- ✅ Full dashboard access
- ✅ User management
- ✅ Family safety monitoring
- ✅ Real-time analytics
- ✅ System settings
- ✅ Message monitoring
- ✅ Verification queue management

##### Admin (`admin` / `nomad123`)
- ✅ Dashboard overview
- ✅ User management (limited)
- ✅ Family safety monitoring
- ✅ Analytics
- ❌ System settings
- ✅ Message monitoring

##### Moderator (`moderator` / `mod123`)
- ✅ Dashboard overview
- ❌ User management
- ✅ Family safety monitoring
- ✅ Content moderation
- ❌ System settings
- ✅ Message monitoring

##### Support (`support` / `support123`)
- ✅ Dashboard overview
- ❌ User management
- ✅ Basic family safety
- ❌ Analytics
- ❌ System settings
- ✅ Customer support tools

### 🔐 Security Features

#### Authentication
- Secure login with role-based access
- Session management
- Auto-logout on inactivity
- Encrypted credentials storage

#### Privacy Protection
- End-to-end encrypted message monitoring
- No access to actual message content
- Metadata-only analysis
- GDPR compliant data handling

#### Audit Logging
- All admin actions logged
- User activity tracking
- System access monitoring
- Security event alerts

### 📊 Dashboard Features

#### Real-Time Analytics
- Live user activity monitoring
- Platform health metrics
- Safety score tracking
- Message flow analysis

#### Family Safety Management
- Verification queue management
- Safety report handling
- Risk assessment tools
- Incident tracking

#### User Management
- Account status monitoring
- Verification management
- Role assignment
- Activity tracking

### 🛠️ Development Setup

#### Prerequisites
- Node.js 18+
- npm or yarn
- Modern web browser

#### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to admin dashboard
cd admin-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

#### Environment Setup
```bash
# Create .env file
VITE_API_URL=https://api.nomad7.app
VITE_SOCKET_URL=wss://socket.nomad7.app
VITE_ENCRYPTION_KEY=your-encryption-key
```

### 📱 Mobile Access

The admin dashboard is fully responsive and can be accessed on:
- Desktop computers
- Tablets
- Mobile phones
- Any device with a modern web browser

### 🔗 Quick Links

- **Main Platform**: https://nomad7.life
- **Admin Dashboard**: https://nomad7.app (or localhost:3001 for development)
- **API Documentation**: https://docs.nomad7.app
- **Support**: admin-support@nomad7.app

### 🚨 Emergency Access

In case of emergency or locked accounts:
- Contact: emergency@nomad7.app
- Phone: +1 (555) 911-NOMAD
- Emergency reset available for super admins

### 📞 Support

For admin dashboard support:
- Email: admin-support@nomad7.app
- Slack: #admin-support
- Documentation: https://docs.nomad7.app/admin