# URL Shortener API
A simple and efficient API for shortening URLs, built with Node.js and Express.

### 🚀 Features
Shorten URLs: Convert long URLs into concise, easy-to-share links.   
Redirect: Navigate to the original URL using the shortened link.   
RESTful API: Clean and straightforward API endpoints.   
Modular Structure: Organized codebase with separate folders for configuration, controllers, models, and routes.   

### 🛠️ Installation
Clone the repository
```
git clone https://github.com/richie48/Url-shortener-api.git
cd Url-shortener-api
```
Install dependencies
```
npm install
```
Start server
```
node server.js
```

### 📬 API Endpoints
POST /api/shorten
Description: Shortens a given URL.
Request Body: json   
{   
  "longUrl": "https://www.example.com"
}   
Response: json   
{   
  "shortUrl": "http://localhost:3000/abc123"   
}  
    
GET /:code
Description: Redirects to the original URL corresponding to the given code.
Example: Accessing http://localhost:3000/abc123 will redirect to https://www.example.com.

🧪 Testing
You can use tools like Postman or cURL to test the API endpoints.
