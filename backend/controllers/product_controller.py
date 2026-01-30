from flask import jsonify, request
from models.redis_client import redis_db

class ProductController:
    @staticmethod
    def get_all():
        products = redis_db.hvals('products')
        return jsonify(products)

    @staticmethod
    def get_one(product_id):
        product = redis_db.hget('products', product_id)
        if product:
            return jsonify(product)
        return jsonify({"error": "Product not found"}), 404

    @staticmethod
    def create():
        data = request.json
        product_id = data.get('id')
        if not product_id:
            return jsonify({"error": "Product ID is required"}), 400
        
        redis_db.hset('products', product_id, data)
        return jsonify(data), 201

    @staticmethod
    def update(product_id):
        data = request.json
        existing = redis_db.hget('products', product_id)
        if not existing:
            return jsonify({"error": "Product not found"}), 404
        
        existing.update(data)
        redis_db.hset('products', product_id, existing)
        return jsonify(existing)

    @staticmethod
    def delete(product_id):
        result = redis_db.hdel('products', product_id)
        if result:
            return jsonify({"message": "Product deleted"})
        return jsonify({"error": "Product not found"}), 404
