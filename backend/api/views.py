from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import *
from rest_framework import authentication, permissions
from api.serializers import *


# Create your views here.
class HelloWorld(APIView):
    def get(self, request):
        return Response("{'hello': 'world'}")


class ListUsers(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class GetUser(APIView):
    def get(self, request, uid):
        users = User.objects.get(user_id=uid)
        serializer = UserSerializer(users)
        return Response(serializer.data)


class ListChestionarMentalHealth(APIView):
    def get(self, request):
        foo = ChestionarMentalHealth.objects.all()
        serializer = ChestionarMentalHealthSerializer(foo, many=True)
        return Response(serializer.data)


class ListChestionarAdjustments(APIView):
    def get(self, request):
        users = ChestionarAdjustments.objects.all()
        serializer = ChestionarAdjustmentsSerializer(users, many=True)
        return Response(serializer.data)


class ListChestionarSelfConfidence(APIView):
    def get(self, request):
        users = ChestionarSelfConfidence.objects.all()
        serializer = ChestionarSelfConfidenceSerializer(users, many=True)
        return Response(serializer.data)


class ListChestionarOrganizationalCulture(APIView):
    def get(self, request):
        users = ChestionarOrganizationalCulture.objects.all()
        serializer = ChestionarOrganizationalCultureSerializer(users, many=True)
        return Response(serializer.data)
