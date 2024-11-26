"""
URL configuration for college_management project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.urls import path
#from management import views
#from django.contrib import admin


#urlpatterns = [
   # path('admin/', admin.site.urls),
    #path('api/users/', views.usersViewset.as_view(), name='user-list'),
    #path('api/users/<int:id>/', views.usersViewset.as_view(), name='user-detail'),
    #path('api/studentdetails/', views.StudentDetailsViewset.as_view(), name='studentdetails-list'),
    #path('api/studentdetails/<int:id>/', views.StudentDetailsViewset.as_view(), name='studentdetails-detail'),
   # path('api/management/', views.managementViewset.as_view(), name='management-list'),
   # path('api/management/<int:id>/', views.managementViewset.as_view(), name='management-detail'),
#]
# college_management/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('management.urls')),  # Add this line
]
