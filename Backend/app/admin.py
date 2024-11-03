from django.contrib import admin
from .models import CustomUser, TipoUsuario, Producto, Categoria, Acabado, Modelo, Material, Direccion, Carrito
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(TipoUsuario)
admin.site.register(Producto)
admin.site.register(Categoria)
admin.site.register(Acabado)
admin.site.register(Modelo)
admin.site.register(Material)
admin.site.register(Direccion)
admin.site.register(Carrito)