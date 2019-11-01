from django.contrib import admin

# Register your models here.
from api.models import User, ChestionarAdjustments, ChestionarMentalHealth, ChestionarOrganizationalCulture,\
    ChestionarSelfConfidence

admin.site.register(User)
admin.site.register(ChestionarAdjustments)
admin.site.register(ChestionarMentalHealth)
admin.site.register(ChestionarOrganizationalCulture)
admin.site.register(ChestionarSelfConfidence)
