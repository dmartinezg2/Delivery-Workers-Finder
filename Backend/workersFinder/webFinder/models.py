from django.db import models


class Workers(models.Model):
    ide = models.IntegerField()
    xCoord = models.IntegerField()
    yCoord = models.IntegerField()
    lUpdate = models.CharField(max_length=20)

    def _str_(self):
        return self.lUpdate
