# Generated by Django 4.0.3 on 2023-09-06 05:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_appointment_technician'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='date',
            new_name='date_time',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='time',
        ),
    ]
