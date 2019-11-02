"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls import url
from django.contrib import admin
from django.views.generic.base import TemplateView
from api.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^helloworld/', HelloWorld.as_view()),
    url(r'^users/list/', ListUsers.as_view()),
    url(r'^users/(?P<uid>\w+)/', GetUser.as_view()),
    url(r'^q/mental-health/list/', ListChestionarMentalHealth.as_view()),
    url(r'^q/self-confidence/list/', ListChestionarSelfConfidence.as_view()),
    url(r'^q/organizational-culture/list/', ListChestionarOrganizationalCulture.as_view()),
    url(r'^q/adjustments/list/', ListChestionarAdjustments.as_view()),
    url(r'^.*', TemplateView.as_view(template_name="home.html"), name="home")
]
