from rest_framework import serializers
from api.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'user_name', 'gender', 'age', 'diagnosis', 'income', 'education', 'password', 'email']


class ChestionarAdjustmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChestionarAdjustments
        fields = '__all__'


class ChestionarSelfConfidenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChestionarSelfConfidence
        fields = '__all__'


class ChestionarOrganizationalCultureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChestionarOrganizationalCulture
        fields = '__all__'


class ChestionarMentalHealthSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChestionarMentalHealth
        fields = '__all__'
