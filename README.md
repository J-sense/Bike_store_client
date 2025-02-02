🛍️ E-Commerce Platform
A fully functional e-commerce platform built with role-based authentication, product management, and a secure checkout process using SurjoPay. This platform allows users to browse, search, filter, and purchase products while providing admins with the ability to manage users, products, and orders.

✨ Features

1. User Registration & Authentication (Role-Based)
   Secure Registration & Login:

Users can register with a name, email, and password.

Default role: customer (can be manually updated to admin if necessary).

Passwords are securely hashed before storing in the database.

Users can log in using their email and password.

JWT Authentication:

A JWT token is generated upon login for secure authentication.

The token is stored in local storage to maintain user sessions.

Logout:

Clears the token from local storage upon logout and redirects the user to the login page.

2. Public Routes
   Home Page
   Navbar:

Includes a logo, favicon, navigation items, and buttons for login/signup.

Banner:

Showcases platform highlights or special offers with an optional carousel.

Featured Products:

Displays up to 6 products with a "View All" button.

Extra Section:

Includes testimonials, blogs, or other relevant content.

Footer:

Contains essential links, social media icons, and contact details.

All Products Page
Search Functionality:

Allows users to search by brand, bike name, or category.

Filters:

Includes options for price range, model, brand, category, and availability.

Dynamic Results:

Results update based on search terms or selected filters.

Product Cards:

Displays product details including name, brand, model, price, and category.

Includes a "View Details" button for each product.

Product Details Page
Displays the product image and detailed information.

Provides a "Buy Now" button that redirects to the checkout page.

About Page
Includes an overview of the shop, its mission, and any other relevant details.

3. Private Routes
   Checkout Page
   Allows users to place orders.

Ensures ordered quantity does not exceed stock.

Order Form:

Includes product details, user details, total price calculation, and payment method.

Payment Integration:

Integrated with SurjoPay for secure transactions.

"Order Now" Button:

Confirms the purchase.

Dashboard (Role-Based Access)
Admin Dashboard:

Manage users (e.g., deactivate accounts).

Manage products (CRUD operations).

Manage orders (CRUD operations).

User Dashboard:

View orders.

Manage profile settings.

Update passwords (requires current password for security).

🛠️ Installation & Setup
Prerequisites
Node.js

MongoDB

Vercel (for deployment)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/J-sense/ecommerce-platform.git
cd ecommerce-platform
Install dependencies:

bash
Copy
npm install
Create a .env file and add the necessary environment variables:

env
Copy
DATABASE_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
SURJOPAY_API_KEY=your_surjopay_api_key
Start the development server:

bash
Copy
npm run dev
Deployment
To deploy the backend to Vercel, run:

bash
Copy
npm run build
vercel deploy
🧰 Tech Stack
Frontend: React, Next.js, Tailwind CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT

Payment Gateway: SurjoPay

Deployment: Vercel

📜 License
This project is open-source and available under the MIT License.

🚀 Developed by
Md. Najmul Hasan Jishan
📧 [Contact Email]
🌐 [Portfolio/Website]
🔗 GitHub Profile
