from django.test import SimpleTestCase
from django.urls import resolve, reverse
from ..views import ProductoViewSet

class TestUrls(SimpleTestCase):
  def test_productos_url_is_resolved(self):
    url = reverse('producto-list')
    self.assertEqual(resolve(url).url_name, 'producto-list')
    
  def test_categorias_url_is_resolved(self):
    url = reverse('categoria-list')
    self.assertEqual(resolve(url).url_name, 'categoria-list')