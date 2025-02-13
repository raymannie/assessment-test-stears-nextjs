# Next.js Authentication App

This project is a Next.js authentication app using NextAuth.js with Google, Facebook, and email/password authentication (stored in local storage or cookies for temporary storage). The app supports running in a Docker container and includes unit/integration tests.

## Features

- Authentication using Google, Facebook, and email/password.
- Credentials authentication checks users from a local array stored in cookies.
- Uses NextAuth.js for authentication handling.
- Fully dockerized setup with `docker-compose`.
- Unit and integration tests using Vitest and React Testing Library.

---

## **Setup & Installation**

### **1. Clone the Repository**

```sh
git clone https://github.com/your-repo/next-auth-app.git
cd next-auth-app
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Set Up Environment Variables**

Create a `.env.local` file in the root directory and add the following:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
NEXTAUTH_SECRET=your-random-secret-key
```

### **4. Run the Development Server**

```sh
npm run dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

---

## **Running with Docker**

### **1. Build the Docker Image**

```sh
docker-compose build
```

### **2. Start the Container**

```sh
docker-compose up
```

The app should now be accessible at `http://localhost:3000`.

---

## **Testing**

### **1. Run Unit and Integration Tests**

```sh
npm test
```

Tests are written using Vitest and React Testing Library.

---

## **API Endpoints**

### **1. Sign In**

- **POST** `/api/auth/signin`
- Request body:
  ```json
  {
    "email": "example@example.com",
    "password": "yourpassword"
  }
  ```

### **2. Sign Out**

- **POST** `/api/auth/signout`

### **3. Get Session**

- **GET** `/api/auth/session`

---

## **License**

This project is licensed under the MIT License.

---

## **Contributors**

- Your Name (@raymanie)
