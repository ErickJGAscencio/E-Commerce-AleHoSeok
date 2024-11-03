from django.test import TestCase
from ..models import Producto

class ProductoModelTest(TestCase):
  def setUp(self):
    self.producto = Producto.objects.create(
      nombre_producto="Organizadores",
      precio=75.00,
      tamaño="15x7.5"
      )

  def test_producto_str(self):
    self.assertEqual(str(self.producto), "Organizadores")

  def test_producto_nombre_producto(self):
    self.assertEqual(self.producto.nombre_producto, "Organizadores")  
    
  def test_producto_precio(self):
    self.assertEqual(self.producto.precio, 75)  
    
  def test_producto_tamaño(self):
    self.assertEqual(self.producto.tamaño, "15x7.5")  
