# ALX Listing App

- This project is a full-stack clone of the popular accommodation booking platform AirBnB. The goal is to build a functional web application that allows users to browse property listings, view detailed property information, and complete bookings. The project will cover frontend development, backend APIs, database design, and deployment.

## 🌐 Live Demo

- 🔗 [Frontend Demo]("Comming soon")
- 🔗 [Backend API Docs]("Comming soon")

---

## 🧰 Tech Stack

### 🖥️ Frontend
- Next.js
- TypeScript
- Tailwind CSS 

### 🗄️ Backend
- Django
- MySQL
- JWT Authentication / OAuth
- RESTful API / GraphQL

---

## 📂 Project Structure

### Frontend source code

/components  # Reusable UI components     
/constants   # Constants and configuration
/interfaces  # TypeScript interfaces
/pages       # Next.js pages
/public/assets   # Public assets (images, fonts, etc.)
/styles  # Global styles and Tailwind CSS configuration

README.md      # Project documentation
package.json   # Dependency management
next.config.js # Next.js configuration
tailwind.config.js # Tailwind CSS configuration
tsconfig.json  # TypeScript configuration
postcss.config.js # PostCSS configuration
package-lock.json # Dependency lock file
eslint.config.js # ESLint configuration
gitignore      # Git ignore file
next-env.d.ts # Next.js environment types

### Backend source code

/server       
/controllers
/models
/routes
/middleware
/config

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

- Next.js version 13+.
- Node.js version 16+ installed locally.
- Text editor (e.g., VS Code) with TypeScript and - TailwindCSS extensions installed.

### 📦 Backend Setup

```bash
cd server
npm install
# create a .env file with DB_URI, JWT_SECRET, etc.
npm run dev
```

### 💻 Frontend Setup

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🔐 Environment Variables

Add the following to your `.env` files:

**Backend `.env`**

```
PORT=5000
DB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret_key
```

**Frontend `.env`**

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🧪 Testing

```bash
# Run backend tests
cd server
npm test

# Run frontend tests
cd client
npm test
```

---

## 🚀 Features

* 🔐 User Authentication (Login/Register/JWT)
* 📦 API with CRUD operations
* 📊 Dashboard for users/admins
* 📨 Contact form or messaging
* 📁 File uploads
* 📱 Mobile responsive

---

## 🔑 Core Functionalities

The Airbnb Clone enables core features essential to a rental marketplace platform.

---

### 1. 👥 User Management
- **User Registration**
  - Guests and hosts can register.
  - Secure authentication using JWT.
- **User Login and Authentication**
  - Email/password login.
  - Optional OAuth login (e.g., Google, Facebook).
- **Profile Management**
  - Update profile info, including photo, contact, and preferences.

---

### 2. 🏡 Property Listings Management
- **Add Listings**
  - Hosts can create listings with title, description, location, price, amenities, and availability.
- **Edit/Delete Listings**
  - Hosts can manage their listings.

---

### 3. 🔍 Search and Filtering
- Search by:
  - Location
  - Price range
  - Number of guests
  - Amenities (Wi-Fi, pool, pet-friendly, etc.)
- Supports pagination for large result sets.

---

### 4. 📆 Booking Management
- **Create Bookings**
  - Guests can book listings with date validation.
- **Cancel Bookings**
  - Guests and hosts can cancel based on cancellation policies.
- **Track Booking Status**
  - Booking status: `pending`, `confirmed`, `canceled`, `completed`.

---

### 5. 💳 Payment Integration
- Integrated with payment gateways like **Stripe** or **PayPal**.
- Handles:
  - Guest payments
  - Host payouts
  - Multi-currency support

---

### 6. 🌟 Reviews and Ratings
- Guests can leave reviews and star ratings.
- Hosts can respond to reviews.
- Reviews are linked to verified bookings.

---

### 7. 🔔 Notifications System
- In-app and email notifications for:
  - Booking confirmations
  - Cancellations
  - Payment updates

---

### 8. 🛠️ Admin Dashboard
- Manage:
  - Users
  - Listings
  - Bookings
  - Payments

---

## 🧱 Technical Requirements

### 9. 🗃️ Database Management
- **PostgreSQL** or **MySQL**
- Tables:
  - `users`
  - `properties`
  - `bookings`
  - `reviews`
  - `payments`

---

### 10. 🔌 API Development
- RESTful APIs with proper:
  - HTTP methods (`GET`, `POST`, `PUT/PATCH`, `DELETE`)
  - Status codes and error responses
- Optional: **GraphQL** for advanced queries

---

### 11. 🔐 Authentication & Authorization
- JWT-based sessions
- Role-Based Access Control (RBAC) for:
  - Guests
  - Hosts
  - Admins

---

### 12. 🖼️ File Storage
- Property images and user profile photos
- Stored using local or cloud storage (e.g., AWS S3, Cloudinary)

---

### 13. 📨 Third-Party Services
- Email delivery via **SendGrid** or **Mailgun**

---

### 14. 🐞 Error Handling and Logging
- Global API error handling
- Request and error logging

---

## 🚀 Non-Functional Requirements

### 15. 📈 Scalability
- Modular architecture
- Horizontal scaling with load balancers

### 16. 🔒 Security
- Encrypted passwords and payment data
- Firewalls and rate limiting for protection

### 17. ⚡ Performance Optimization
- Caching with Redis
- Optimized DB queries

### 18. ✅ Testing
- Unit & integration tests (e.g., `pytest`)
- Automated API endpoint testing

---

## 📸 Screenshots

| Home Page                       | Admin Panel                       |
| ------------------------------- | --------------------------------- |
| ![Home](./screenshots/home.png) | ![Admin](./screenshots/admin.png) |

---

## 🛡️ License

This project is licensed under the [MIT License](./LICENSE).

---

## 👏 Contributing

Contributions are welcome! Please fork the repo and open a pull request.

```bash
git clone https://github.com/Eyobed9/alx-listing-app.git
git checkout -b feature/feature-name
```

---

## 📬 Contact

For questions, reach out at [eyobedteshome@gmail.com] → [eyobedteshome@gmail.com](mailto:eyobedteshome@gmail.com) or connect via [LinkedIn](https://www.linkedin.com/in/eyobed-d-249634230/).

---

## 🙏 Acknowledgments

* [Node.js](https://nodejs.org/)
* [Tailwind CSS](https://tailwindcss.com/)


