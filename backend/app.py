from flask import Flask
from flask_cors import CORS
from routes.product_routes import product_bp
from config import Config
from models.redis_client import redis_db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    # Register Blueprints
    app.register_blueprint(product_bp, url_prefix='/api/products')

    @app.route('/')
    def index():
        return {"message": "Welcome to the Grocery Store API"}

    @app.route('/health')
    def health():
        redis_status = redis_db.ping()
        return {
            "status": "healthy",
            "redis_connected": redis_status
        }

    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        if redis_db.ping():
            print("🚀 Connected to Redis successfully!")
        else:
            print("❌ Failed to connect to Redis. Please check if Redis is running.")
    app.run(host='0.0.0.0', port=5001, debug=True)
