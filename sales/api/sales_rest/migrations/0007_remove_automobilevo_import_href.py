# Generated by Django 4.0.3 on 2023-09-06 22:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0006_automobilevo_import_href_alter_automobilevo_vin_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_href',
        ),
    ]
