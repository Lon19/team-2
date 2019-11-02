from django.db import models

# Create your models here.


class ChestionarMentalHealth(models.Model):
    form_name = models.CharField(max_length=100, default='')
    user_id = models.IntegerField()
    q1 = models.CharField(max_length=100, default='')
    q2 = models.CharField(max_length=100, default='')
    q3 = models.CharField(max_length=100, default='')
    q4 = models.CharField(max_length=100, default='')
    q5 = models.CharField(max_length=100, default='')
    q6 = models.CharField(max_length=100, default='')
    q7 = models.CharField(max_length=100, default='')
    q8 = models.CharField(max_length=100, default='')
    q9 = models.CharField(max_length=100, default='')
    q10 = models.CharField(max_length=100, default='')
    q11 = models.CharField(max_length=100, default='')
    q12 = models.CharField(max_length=100, default='')
    q13 = models.CharField(max_length=100, default='')
    q14 = models.CharField(max_length=100, default='')
    q15 = models.CharField(max_length=100, default='')
    q16 = models.CharField(max_length=100, default='')
    q17 = models.CharField(max_length=100, default='')
    q18 = models.CharField(max_length=100, default='')
    q19 = models.CharField(max_length=100, default='')
    q20 = models.CharField(max_length=100, default='')
    q21 = models.CharField(max_length=100, default='')
    date = models.DateTimeField()


class ChestionarAdjustments(models.Model):
    form_name = models.CharField(max_length=100, default='')
    user_id = models.IntegerField()
    q1 = models.CharField(max_length=100, default='')
    q2 = models.CharField(max_length=100, default='')
    q3 = models.CharField(max_length=100, default='')
    q4 = models.CharField(max_length=100, default='')
    q5 = models.CharField(max_length=100, default='')
    date = models.DateTimeField()


class ChestionarSelfConfidence(models.Model):
    form_name = models.CharField(max_length=100, default='')
    user_id = models.IntegerField()
    q1 = models.CharField(max_length=100, default='')
    q2 = models.CharField(max_length=100, default='')
    q3 = models.CharField(max_length=100, default='')
    q4 = models.CharField(max_length=100, default='')
    q5 = models.CharField(max_length=100, default='')
    q6 = models.CharField(max_length=100, default='')
    q7 = models.CharField(max_length=100, default='')
    q8 = models.CharField(max_length=100, default='')
    q9 = models.CharField(max_length=100, default='')
    q10 = models.CharField(max_length=100, default='')
    q11 = models.CharField(max_length=100, default='')
    q12 = models.CharField(max_length=100, default='')
    q13 = models.CharField(max_length=100, default='')
    q14 = models.CharField(max_length=100, default='')
    q15 = models.CharField(max_length=100, default='')
    q16 = models.CharField(max_length=100, default='')
    q17 = models.CharField(max_length=100, default='')
    q18 = models.CharField(max_length=100, default='')
    q19 = models.CharField(max_length=100, default='')
    q20 = models.CharField(max_length=100, default='')
    q21 = models.CharField(max_length=100, default='')
    q22 = models.CharField(max_length=100, default='')
    q23 = models.CharField(max_length=100, default='')
    q24 = models.CharField(max_length=100, default='')
    q25 = models.CharField(max_length=100, default='')
    q26 = models.CharField(max_length=100, default='')
    q27 = models.CharField(max_length=100, default='')
    q28 = models.CharField(max_length=100, default='')
    q29 = models.CharField(max_length=100, default='')
    q30 = models.CharField(max_length=100, default='')
    date = models.DateTimeField()


class ChestionarOrganizationalCulture(models.Model):
    form_name = models.CharField(max_length=100, default='')
    user_id = models.IntegerField()
    q1 = models.CharField(max_length=100, default='')
    q2 = models.CharField(max_length=100, default='')
    q3 = models.CharField(max_length=100, default='')
    q4 = models.CharField(max_length=100, default='')
    q5 = models.CharField(max_length=100, default='')
    q6 = models.CharField(max_length=100, default='')
    q7 = models.CharField(max_length=100, default='')
    date = models.DateTimeField()


class User(models.Model):
    user_id = models.IntegerField()
    user_name = models.CharField(max_length=100, default='')
