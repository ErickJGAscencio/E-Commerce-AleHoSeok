from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

# Modelos Relacion Usuario

class TipoUsuario(models.Model):
  nombre_tipo = models.CharField(max_length=100)
  
  def __str__(self):
    return self.nombre_tipo
  
class CustomUser(AbstractUser):
  telefono = models.CharField(max_length=15, null=True, blank=True)
  tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.SET_NULL, null=True, blank=True)
    
  def __str__(self):
    return self.username

class Direccion(models.Model):
  estado = models.CharField(max_length=50, null=True, blank=True)
  ciudad = models.CharField(max_length=50, null=True, blank=True)
  codigo_postal = models.CharField(max_length=5, null=True, blank=True)
  calle_principal = models.CharField(max_length=50, null=True, blank=True)
  calle_primera = models.CharField(max_length=50, null=True, blank=True)
  calle_segunda = models.CharField(max_length=50, null=True, blank=True)
  usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)  

# Modelos Relacion Producto
class Categoria(models.Model):
  nombre_categoria = models.CharField(max_length=50, null=False, blank=False)
  
  def __str__(self):
    return self.nombre_categoria
  
class Acabado(models.Model):
  nombre_acabado = models.CharField(max_length=50, null=False, blank=False)
  
  def __str__(self):
    return self.nombre_acabado
    
class Modelo(models.Model):
  nombre_modelo = models.CharField(max_length=50, null=False, blank=False)
  
  def __str__(self):
    return self.nombre_modelo
    
class Material(models.Model):
  nombre_material = models.CharField(max_length=50, null=False, blank=False)
  
  def __str__(self):
    return self.nombre_material
  
class Producto(models.Model):
  nombre_producto = models.CharField(max_length=50, null=False, blank=False)
  precio = models.FloatField(max_length=15, null=False)
  # imagen
  tamaño = models.CharField(max_length=50, null=True, blank=True)
  disponible = models.BooleanField(default=True)
  
  # Si se borra alguna opcion de las siguientes de la base de datos, en productos será Null
  categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True)
  acabado = models.ForeignKey(Acabado, on_delete=models.SET_NULL, null=True, blank=True)
  modelo = models.ForeignKey(Modelo, on_delete=models.SET_NULL, null=True, blank=True)
  material = models.ForeignKey(Material, on_delete=models.SET_NULL, null=True, blank=True)
  
  def __str__(self):
    return self.nombre_producto

# Modelos Relacion Compras
class Carrito(models.Model):
  producto = models.ForeignKey(Producto, on_delete=models.CASCADE, null=False, blank=False)
  cantidad = models.IntegerField(null=False, blank=False)
  usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

  def __str__(self):
    return self.producto.nombre_producto
