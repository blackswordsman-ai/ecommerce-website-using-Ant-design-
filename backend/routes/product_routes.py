from flask import Blueprint
from controllers.product_controller import ProductController

product_bp = Blueprint('products', __name__)

@product_bp.route('/', methods=['GET'])
def get_products():
    return ProductController.get_all()

@product_bp.route('/<product_id>', methods=['GET'])
def get_product(product_id):
    return ProductController.get_one(product_id)

@product_bp.route('/', methods=['POST'])
def create_product():
    return ProductController.create()

@product_bp.route('/<product_id>', methods=['PUT', 'PATCH'])
def update_product(product_id):
    return ProductController.update(product_id)

@product_bp.route('/<product_id>', methods=['DELETE'])
def delete_product(product_id):
    return ProductController.delete(product_id)
