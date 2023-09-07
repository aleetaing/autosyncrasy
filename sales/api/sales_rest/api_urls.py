from django.urls import path
from .api_views import (
    api_list_salespeople,
    api_delete_salespeople,
    api_list_customer,
    api_delete_customer,
    api_list_sales,
    api_delete_sales,
)


urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:pk>/", api_delete_salespeople, name="api_delete_salespeople"),
    path("customers/", api_list_customer, name="api_list_salespeople"),
    path("customers/<int:pk>/", api_delete_customer, name="api_delete_salespeople"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>/", api_delete_sales, name="api_delete_sales"),
]
