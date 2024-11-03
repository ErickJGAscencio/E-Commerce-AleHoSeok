from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'productos', views.ProductoViewSet)
router.register(r'categorias', views.CategoriaViewSet)
router.register(r'acabados', views.AcabadoViewSet)
router.register(r'modelos', views.ModeloViewSet)

# Luego incluyes las rutas en tu urls.py
urlpatterns = [
    path('', include(router.urls)),
    
    path("signup/", views.signup_view, name="signup"),
    path("login/", views.login_view, name="login"),
    path("profile/", views.user_profile_view, name="profile"),
    
    path("tipos-usuario/", views.tipo_usuarios_view, name="tipo-usuario"),
    # path("productos/", views.productos_view, name="productos"),
    # path("categorias/", views.categorias_view, name="categorias"),
    # path("nueva-categorias/", views.categorias_post_view, name="nueva-categorias"),
    # path("acabados/", views.acabados_view, name="acabados"),
    # path("modelos/", views.modelos_view, name="modelos"),
    path("materiales/", views.MaterialView.as_view(), name="materiales-lista"),
    path("materiales/<int:pk>/", views.MaterialView.as_view(), name="materiales-detalles"),
]