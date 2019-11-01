from django.db import models

# Create your models here.


class ChestionarMentalHealth(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()
    q1 = models.CharField(max_length=100)
    q2 = models.CharField(max_length=100)
    q3 = models.CharField(max_length=100)
    q4 = models.CharField(max_length=100)
    q5 = models.CharField(max_length=100)
    q6 = models.CharField(max_length=100)
    q7 = models.CharField(max_length=100)
    q8 = models.CharField(max_length=100)
    q9 = models.CharField(max_length=100)
    q10 = models.CharField(max_length=100)
    q11 = models.CharField(max_length=100)
    q12 = models.CharField(max_length=100)
    q13 = models.CharField(max_length=100)
    q14 = models.CharField(max_length=100)
    q15 = models.CharField(max_length=100)
    q16 = models.CharField(max_length=100)
    q17 = models.CharField(max_length=100)
    q18 = models.CharField(max_length=100)
    q19 = models.CharField(max_length=100)
    q20 = models.CharField(max_length=100)
    q21 = models.CharField(max_length=100)


class ChestionarAdjustments(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()
    q1 = models.CharField(max_length=100)
    q2 = models.CharField(max_length=100)
    q3 = models.CharField(max_length=100)
    q4 = models.CharField(max_length=100)
    q5 = models.CharField(max_length=100)


class ChestionarSelfConfidence(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()


class ChestionarOrganizationalCulture(models.Model):
    user_id = models.IntegerField()
    form_name = models.CharField(max_length=100)
    date = models.DateTimeField()
    q1 = models.CharField(max_length=100)
    q2 = models.CharField(max_length=100)
    q3 = models.CharField(max_length=100)
    q4 = models.CharField(max_length=100)
    q5 = models.CharField(max_length=100)
    q6 = models.CharField(max_length=100)
    q7 = models.CharField(max_length=100)


class User(models.Model):
    user_id = models.IntegerField()
    user_name = models.CharField(max_length=100)