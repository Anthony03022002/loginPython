from django.db import models

# Create your models here.
class Clientes(models.Model):
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=50,decimal_places=2)
    fecha = models.DateField(null=True, blank=True)


    class Meta:
        db_table = 'clientes'

    def __str__(self):
        return self.nombre