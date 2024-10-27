from rest_framework import serializers
from .models import Producto, Direccion, TipoUsuario, Categoria, Modelo, Acabado, Material

class DireccionSerializer(serializers.ModelSerializer):
  class Meta():
    model = Direccion
    fields = '__all__'
    
class TipoUsuarioSerializer(serializers.ModelSerializer):
  class Meta():
    model = TipoUsuario
    fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
  class Meta():
    model = Categoria
    fields = '__all__'

class AcabadoSerializer(serializers.ModelSerializer):
  class Meta():
    model = Acabado
    fields = '__all__'

class ModeloSerializer(serializers.ModelSerializer):
  class Meta():
    model = Modelo
    fields = '__all__'
    
class MaterialSerializer(serializers.ModelSerializer):
  class Meta():
    model = Material
    fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
  class Meta():
    model = Producto
    fields = '__all__'
