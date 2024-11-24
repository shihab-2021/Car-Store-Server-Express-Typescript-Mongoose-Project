# Car Store API 🚗

## **Overview**
The Car Store API is a RESTful web service for managing a car inventory and processing car orders. Built with Express.js and TypeScript, it integrates MongoDB for database operations using Mongoose.

---

## **Features**
1. **Car Management:**
   - Create, read, update, and delete cars.
   - Filter cars by brand, model, or category.

2. **Order Management:**
   - Place orders with inventory adjustment.
   - Prevent orders with insufficient stock.

3. **Revenue Calculation:**
   - Aggregates total revenue from all orders.

4. **Validation:**
   - Uses Zod for schema validation to ensure data integrity.

5. **Error Handling:**
   - Comprehensive error messages for validation failures, not found, and insufficient stock.

---

## **Technologies Used**
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB, Mongoose
- **Validation:** Zod
- **Environment Management:** dotenv

---

## **API Endpoints**

### **Cars**
| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | `/api/cars`               | Create a new car.               |
| GET    | `/api/cars`               | Retrieve all cars.              |
| GET    | `/api/cars/:carId`        | Retrieve a specific car.        |
| PUT    | `/api/cars/:carId`        | Update a car.                   |
| DELETE | `/api/cars/:carId`        | Delete a car.                   |

### **Orders**
| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | `/api/orders`             | Place an order.                 |
| GET    | `/api/orders/revenue`     | Calculate total revenue.        |

---

## **Installation**

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or hosted)
- npm/yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/shihab-2021/Car-Store-Server-Express-Typescript-Mongoose-Project.git
   cd car-store-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: Create a .env file and configure the following:
   ```bash
   PORT=5000
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/car-store
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
5. Access the API at:
   - Local: http://localhost:5000/api

---

## **Testing**
Use Postman or any API client to test the endpoints. Example requests and responses are provided in the project documentation.
