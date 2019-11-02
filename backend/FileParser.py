import csv
from api.models import *


def parseToDb():
    # Mental Health Questionnaire
    filename = 'wpforms-Autistica-8211-Mental-Health.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarMentalHealth(*response)
            questionnaire.save()
    csvFile.close()

    # Adjusments Questionnaire
    filename = 'wpforms-Autistica-8211-Adjusments.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarAdjustments(*response)
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
            questionnaire = ChestionarOrganizationalCulture(*response)
            questionnaire.save()
    csvFile.close()

    # Mental Health Questionnaire
    filename = 'wpforms-Autistica-8211-Self-Confidence.csv'
    with open(filename, 'r') as csvFile:
        reader = csv.reader(csvFile)
        next(reader, None)
        for response in reader:
            response.pop(-1)
            response.pop(1)
            questionnaire = ChestionarSelfConfidence(*response)
            questionnaire.save()
    csvFile.close()
