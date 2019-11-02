from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from api import models
from rest_framework import authentication, permissions
from django.contrib.auth.models import User


# Create your views here.
class HelloWorld(APIView):
    def get(self, request):
        return Response("{'hello': 'world'}")


class ListUsers(APIView):
    def get(self, request):
        usernames = [user.user_name for user in models.User.objects.all()]
        return Response(usernames)
