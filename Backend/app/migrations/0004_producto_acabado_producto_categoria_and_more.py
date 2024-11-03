# Generated by Django 5.1.2 on 2024-10-26 17:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_acabado_categoria_material_modelo'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='acabado',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.acabado'),
        ),
        migrations.AddField(
            model_name='producto',
            name='categoria',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.categoria'),
        ),
        migrations.AddField(
            model_name='producto',
            name='material',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.material'),
        ),
        migrations.AddField(
            model_name='producto',
            name='modelo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.modelo'),
        ),
    ]
