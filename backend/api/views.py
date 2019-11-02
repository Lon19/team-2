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


class GetChestionarMentalHealth(APIView):
    def get(self, request, uid):
        foo = ChestionarMentalHealth.objects.filter(user_id=uid)
        serializer = ChestionarMentalHealthSerializer(foo, many=True)
        return Response(serializer.data)


class ListChestionarAdjustments(APIView):
    def get(self, request):
        foo = ChestionarAdjustments.objects.all()
        serializer = ChestionarAdjustmentsSerializer(foo, many=True)
        return Response(serializer.data)


class GetChestionarAdjustments(APIView):
    def get(self, request, uid):
        users = ChestionarAdjustments.objects.filter(user_id=uid)
        serializer = ChestionarAdjustmentsSerializer(users, many=True)
        return Response(serializer.data)


class ListChestionarSelfConfidence(APIView):
    def get(self, request):
        users = ChestionarSelfConfidence.objects.all()
        serializer = ChestionarSelfConfidenceSerializer(users, many=True)
        return Response(serializer.data)


class GetChestionarSelfConfidence(APIView):
    def get(self, request, uid):
        users = ChestionarSelfConfidence.objects.filter(user_id=uid)
        serializer = ChestionarSelfConfidenceSerializer(users, many=True)
        return Response(serializer.data)


class ListChestionarOrganizationalCulture(APIView):
    def get(self, request):
        users = ChestionarOrganizationalCulture.objects.all()
        serializer = ChestionarOrganizationalCultureSerializer(users, many=True)
        return Response(serializer.data)


class GetChestionarOrganizationalCulture(APIView):
    def get(self, request, uid):
        users = ChestionarOrganizationalCulture.objects.filter(user_id=uid)
        serializer = ChestionarOrganizationalCultureSerializer(users, many=True)
        return Response(serializer.data)
