from django.db import models

# Create your models here.


class ChestionarMentalHealth(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()


class ChestionarAdjustments(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()


class ChestionarSelfConfidence(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()


class ChestionarOrganizationalCulture(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()

