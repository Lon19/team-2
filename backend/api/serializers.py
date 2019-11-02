from rest_framework import serializers
from api.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'user_name', 'gender', 'age', 'diagnosis', 'income', 'education', 'password', 'email']
