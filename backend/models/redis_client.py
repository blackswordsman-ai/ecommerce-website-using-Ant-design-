import redis
import json
from config import Config

class RedisClient:
    def __init__(self):
        self.client = redis.Redis(
            host=Config.REDIS_HOST,
            port=Config.REDIS_PORT,
            db=Config.REDIS_DB,
            decode_responses=True
        )

    def ping(self):
        try:
            return self.client.ping()
        except redis.ConnectionError:
            return False

    def get(self, key):
        data = self.client.get(key)
        return json.loads(data) if data else None

    def set(self, key, value):
        return self.client.set(key, json.dumps(value))

    def delete(self, key):
        return self.client.delete(key)

    def hgetall(self, name):
        return self.client.hgetall(name)

    def hset(self, name, key, value):
        return self.client.hset(name, key, json.dumps(value))

    def hget(self, name, key):
        data = self.client.hget(name, key)
        return json.loads(data) if data else None

    def hdel(self, name, key):
        return self.client.hdel(name, key)

    def hvals(self, name):
        values = self.client.hvals(name)
        return [json.loads(v) for v in values]

redis_db = RedisClient()
