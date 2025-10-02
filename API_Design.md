# Customer API Design Documentation

## 1. Create Customer (POST)

**Route** | POST /api/customer

**Payload (body)** |
```json
{
  "name": "John Doe",
  "dateOfBirth": "1990-05-15",
  "memberNumber": 1,
  "interests": "movies, football, gym, gaming"
}
```

**Response** |
```json
{
  "_id": "66f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gym, gaming",
  "__v": 0
}
```

**File** | /app/api/customer/route.js

**Test** |
```bash
curl -X POST http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","dateOfBirth":"1990-05-15","memberNumber":1,"interests":"movies, football, gym, gaming"}'
```

---

## 2. Read All Customers (GET)

**Route** | GET /api/customer

**Payload (body)** | -

**Response** |
```json
[
  {
    "_id": "66f1a2b3c4d5e6f7g8h9i0j1",
    "name": "John Doe",
    "dateOfBirth": "1990-05-15T00:00:00.000Z",
    "memberNumber": 1,
    "interests": "movies, football, gym, gaming",
    "__v": 0
  },
  {
    "_id": "66f1a2b3c4d5e6f7g8h9i0j2",
    "name": "Jane Smith",
    "dateOfBirth": "1995-08-22T00:00:00.000Z",
    "memberNumber": 2,
    "interests": "reading, swimming, music",
    "__v": 0
  }
]
```

**File** | /app/api/customer/route.js

**Test** |
```bash
curl http://localhost:3000/api/customer
```

---

## 3. Read Single Customer by ID (GET)

**Route** | GET /api/customer/[id]

**Payload (body)** | -

**Response** |
```json
{
  "_id": "66f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gym, gaming",
  "__v": 0
}
```

**File** | /app/api/customer/[id]/route.js

**Test** |
```bash
curl http://localhost:3000/api/customer/66f1a2b3c4d5e6f7g8h9i0j1
```

---

## 4. Update Customer (PUT)

**Route** | PUT /api/customer

**Payload (body)** |
```json
{
  "_id": "66f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-05-15",
  "memberNumber": 1,
  "interests": "movies, football, gym, gaming, reading"
}
```

**Response** |
```json
{
  "_id": "66f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gym, gaming, reading",
  "__v": 0
}
```

**File** | /app/api/customer/route.js

**Test** |
```bash
curl -X PUT http://localhost:3000/api/customer \
  -H "Content-Type: application/json" \
  -d '{"_id":"66f1a2b3c4d5e6f7g8h9i0j1","name":"John Doe Updated","dateOfBirth":"1990-05-15","memberNumber":1,"interests":"movies, football, gym, gaming, reading"}'
```

---

## 5. Delete Customer (DELETE)

**Route** | DELETE /api/customer/[id]

**Payload (body)** | -

**Response** |
```json
{
  "_id": "66f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe Updated",
  "dateOfBirth": "1990-05-15T00:00:00.000Z",
  "memberNumber": 1,
  "interests": "movies, football, gym, gaming, reading",
  "__v": 0
}
```

**File** | /app/api/customer/[id]/route.js

**Test** |
```bash
curl -X DELETE http://localhost:3000/api/customer/66f1a2b3c4d5e6f7g8h9i0j1
```

---

## Summary

All Customer CRUD APIs follow RESTful conventions:
- **POST** /api/customer - Create new customer
- **GET** /api/customer - Read all customers
- **GET** /api/customer/[id] - Read single customer
- **PUT** /api/customer - Update customer
- **DELETE** /api/customer/[id] - Delete customer
