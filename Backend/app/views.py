from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404

# Modelos
from .models import (
  CustomUser, 
  Producto, 
  Direccion, 
  TipoUsuario, 
  Categoria, Modelo, 
  Acabado, 
  Material,
  )
# Serializers
from .serializer import (
  ProductoSerializer, 
  DireccionSerializer, 
  TipoUsuarioSerializer,
  CategoriaSerializer,
  AcabadoSerializer,
  ModeloSerializer,
  MaterialSerializer,
  )

# Vistas Relacion Usuario
@api_view(["POST"])
def signup_view(request):
  # Obtener los datos de la solicitud
  username = request.data.get("username")
  password = request.data.get("password")
  # telefono = request.data.get("telefono", None)
  # tipo_usuario_id = request.data.get("tipo_usuario_id", None)  # Asumiendo que pasas el ID de TipoUsuario

  if not username or not password:
    return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

  # Crear el usuario
  try:
    user = CustomUser.objects.create(
      username=username,
      password=make_password(password),  # Encriptamos la contraseña
      # telefono=telefono
      # tipo_usuario_id=tipo_usuario_id
      )
    return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
  except Exception as e:
    return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def login_view(request):
  username = request.data.get("username")
  password = request.data.get("password")
  
  if not username or not password:
    return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

  user = get_object_or_404(CustomUser, username=username)

  if not user.check_password(password):
    return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)

  # Generar o obtener un token de autenticación para el usuario
  token, created = Token.objects.get_or_create(user=user)
  user_data = {
    "username": user.username,
    # "telefono": user.telefono
    }

  return Response({
    "token": token.key,  # Retorna el token generado
    "user": user_data
  }, status=status.HTTP_200_OK)

@api_view(["GET"])
def user_profile_view(request):
  user = request.user  # Obtenemos al usuario autenticado desde el request
  if user.is_authenticated:
    user_data = {
      "username": user.username,
      "telefono": user.telefono,
      "tipo_usuario": user.tipo_usuario.nombre_tipo if user.tipo_usuario else None
      }
    return Response({"user": user_data}, status=status.HTTP_200_OK)
  else:
    return Response({"error": "User not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(["GET"])
def tipo_usuarios_view(request):
  tipo_usuarios = TipoUsuario.objects.all()
  serializer = TipoUsuarioSerializer(tipo_usuarios, many=True)
  return Response({"tipo_usuarios": serializer.data}, status=status.HTTP_200_OK)

@api_view(["GET"])
def direcciones_view(request):
  user = request.user
  direcciones = Direccion.objects.all()
  serializer = DireccionSerializer(direcciones, many=True)
  return Response({"direcciones": serializer.data, 
                  #  "user":user.id
                   }
                  , status=status.HTTP_200_OK)

from rest_framework import viewsets

# Vistas Relacion Producto
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class AcabadoViewSet(viewsets.ModelViewSet):
    queryset = Acabado.objects.all()
    serializer_class = AcabadoSerializer
    
class ModeloViewSet(viewsets.ModelViewSet):
    queryset = Modelo.objects.all()
    serializer_class = ModeloSerializer    

class MaterialView(APIView):
  def get(self, request):
    materiales = Material.objects.all()
    serializer = MaterialSerializer(materiales, many=True)
    return Response({"materiales": serializer.data}, status=status.HTTP_200_OK)
  
  def post(self, request):
    serializer = MaterialSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response({"material": serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def put(self, request, pk=None):
    try:
      material = Material.objects.get(pk=pk)
    except Material.DoesNotExist:
      return Response({"error": "Material not found."}, status=status.HTTP_404_NOT_FOUND)

    data=request.data
    serializer = MaterialSerializer(material, data) 
    if serializer.is_valid(): 
      serializer.save()
      return Response({"material": serializer.data}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
  
  def delete(self, request, pk=None):
    try:
      material = Material.objects.get(pk=pk)
      material.delete()
      return Response({"message": "Material deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
    except:
      return Response({"error": "Material not found."}, status=status.HTTP_404_NOT_FOUND)