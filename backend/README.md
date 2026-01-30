# Backend - Grocery Store API

This is the Flask backend for the Grocery Store application.

## Prerequisites

- Python 3.x
- Redis server running locally

## Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip3 install -r requirements.txt
   ```
3. Run the application:
   ```bash
   python3 app.py
   ```

The API will be available at `http://localhost:5001`.

## API Endpoints

- `GET /api/products/` - Get all products
- `POST /api/products/` - Add a new product
- `PUT /api/products/<id>` - Update a product
- `DELETE /api/products/<id>` - Delete a product
