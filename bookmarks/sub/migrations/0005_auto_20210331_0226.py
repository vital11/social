# Generated by Django 3.1.7 on 2021-03-30 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sub', '0004_auto_20210331_0216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='sub_status',
            field=models.CharField(default='-', max_length=50),
        ),
    ]
