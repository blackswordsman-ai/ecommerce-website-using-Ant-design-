from models.redis_client import redis_db

products = [
    {
        "id": "1",
        "name": "Fresh Bananas",
        "category": "Fruits",
        "price": 0.59,
        "description": "High-quality fresh bananas from Ecuador."
    },
    {
        "id": "2",
        "name": "Red Apples",
        "category": "Fruits",
        "price": 0.99,
        "description": "Crispy and sweet red apples."
    },
    {
        "id": "3",
        "name": "Whole Milk",
        "category": "Dairy",
        "price": 3.49,
        "description": "Fresh farm whole milk (1 Gallon)."
    }
]

def seed():
    print("🌱 Seeding data to Redis...")
    for p in products:
        redis_db.hset('products', p['id'], p)
    print("✅ Seeding complete!")

if __name__ == "__main__":
    seed()
