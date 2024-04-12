from rest_framework import viewsets
from .serializer import clientesSerializer
from .models import Clientes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class ClientesView(viewsets.ModelViewSet):
    serializer_class = clientesSerializer
    queryset = Clientes.objects.all()

    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]