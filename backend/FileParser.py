import csv
from api.models import *
from datetime import datetime
from django.utils import timezone


def parseToDb():
    # Mental Health Questionnaire
    filename = 'wpforms-Autistica-8211-Mental-Health.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarMentalHealth(form_name=response[0],
                                                   user_id=response[1],
                                                   q1=response[2],
                                                   q2=response[3],
                                                   q3=response[4],
                                                   q4=response[5],
                                                   q5=response[6],
                                                   q6=response[7],
                                                   q7=response[8],
                                                   q8=response[9],
                                                   q9=response[10],
                                                   q10=response[11],
                                                   q11=response[12],
                                                   q12=response[13],
                                                   q13=response[14],
                                                   q14=response[15],
                                                   q15=response[16],
                                                   q16=response[17],
                                                   q17=response[18],
                                                   q18=response[19],
                                                   q19=response[20],
                                                   q20=response[21],
                                                   q21=response[22],
                                                   date=timezone.make_aware(datetime.strptime(response[23], '%m/%d/%Y')))
            questionnaire.save()
    csvFile.close()

    # Adjusments Questionnaire
    filename = 'wpforms-Autistica-8211-Adjustments.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarAdjustments(form_name=response[0],
                                                  user_id=response[1],
                                                  q1=response[2],
                                                  q2=response[3],
                                                  q3=response[4],
                                                  q4=response[5],
                                                  q5=response[6],
                                                  date=timezone.make_aware(datetime.strptime(response[7], '%m/%d/%Y')))
            questionnaire.save()
    csvFile.close()

    # Organisational Culture Questionnaire
    filename = 'wpforms-Autistica-8211-Organisational-Culture.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarOrganizationalCulture(form_name=response[0],
                                                            user_id=response[1],
                                                            q1=response[2],
                                                            q2=response[3],
                                                            q3=response[4],
                                                            q4=response[5],
                                                            q5=response[6],
                                                            q6=response[7],
                                                            q7=response[8],
                                                            date=timezone.make_aware(datetime.strptime(response[9], '%m/%d/%Y')))
            questionnaire.save()
    csvFile.close()

    # Work Self Confidence Questionnaire
    filename = 'wpforms-Autistica-8211-Work-Self-Confidence.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarSelfConfidence(form_name=response[0],
                                                     user_id=response[1],
                                                     q1=response[2],
                                                     q2=response[3],
                                                     q3=response[4],
                                                     q4=response[5],
                                                     q5=response[6],
                                                     q6=response[7],
                                                     q7=response[8],
                                                     q8=response[9],
                                                     q9=response[10],
                                                     q10=response[11],
                                                     q11=response[12],
                                                     q12=response[13],
                                                     q13=response[14],
                                                     q14=response[15],
                                                     q15=response[16],
                                                     q16=response[17],
                                                     q17=response[18],
                                                     q18=response[19],
                                                     q19=response[20],
                                                     q20=response[21],
                                                     q21=response[22],
                                                     q22=response[23],
                                                     q23=response[24],
                                                     q24=response[25],
                                                     q25=response[26],
                                                     q26=response[27],
                                                     q27=response[28],
                                                     q28=response[29],
                                                     q29=response[30],
                                                     q30=response[31],
                                                     date=timezone.make_aware(datetime.strptime(response[32], '%m/%d/%Y')))
            questionnaire.save()
    csvFile.close()

    # Participant attribute data
    filename = 'Participant-attribute-data.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.insert(0, response[0])
            questionnaire = User(*response)
            questionnaire.save()
    csvFile.close()

