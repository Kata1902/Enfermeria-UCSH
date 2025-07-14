document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    const pr = ramo.getAttribute('data-pr');
    let mensaje = '';

    switch (ramo.id) {
      case 'quimica': mensaje += 'Créditos: 6'; break;
      case 'bioquimica': mensaje += 'Créditos: 6'; break;
      case 'biologia': mensaje += 'Créditos: 6'; break;
      case 'morfo1': mensaje += 'Créditos: 6'; break;
      case 'morfo2': mensaje += 'Créditos: 6'; break;
      case 'fisiologia': mensaje += 'Créditos: 6'; break;
      case 'ciclo1': mensaje += 'Créditos: 6'; break;
      case 'ciclo2': mensaje += 'Créditos: 6'; break;
      case 'salud_mental': mensaje += 'Créditos: 6'; break;
      case 'gestion_cuidado': mensaje += 'Créditos: 4'; break;
      case 'mejora_cuidado': mensaje += 'Créditos: 4'; break;
      case 'fin_vida': mensaje += 'Créditos: 4'; break;
      case 'examen_titulo': mensaje += 'Créditos: 4'; break;
      case 'microbiologia': mensaje += 'Créditos: 6'; break;
      case 'farmacologia': mensaje += 'Créditos: 6'; break;
      case 'cuidados_ninos1': mensaje += 'Créditos: 6'; break;
      case 'cuidados_ninos2': mensaje += 'Créditos: 6'; break;
      case 'necesidades_especiales': mensaje += 'Créditos: 4'; break;
      case 'cancer': mensaje += 'Créditos: 6'; break;
      case 'socioantropologia': mensaje += 'Créditos: 4'; break;
      case 'psicologia_general': mensaje += 'Créditos: 4'; break;
      case 'psicologia_evolutiva': mensaje += 'Créditos: 4'; break;
      case 'fisiopatologia': mensaje += 'Créditos: 6'; break;
      case 'comunidad1': mensaje += 'Créditos: 6'; break;
      case 'comunidad2': mensaje += 'Créditos: 6'; break;
      case 'urgencia1': mensaje += 'Créditos: 6'; break;
      case 'urgencia2': mensaje += 'Créditos: 6'; break;
      case 'educacion_salud': mensaje += 'Créditos: 4'; break;
      case 'introduccion_enfermeria': mensaje += 'Créditos: 4'; break;
      case 'seguridad_cuidado': mensaje += 'Créditos: 4'; break;
      case 'cuidados_mayores1': mensaje += 'Créditos: 4'; break;
      case 'cuidados_mayores2': mensaje += 'Créditos: 6'; break;
      case 'adulto1': mensaje += 'Créditos: 6'; break;
      case 'adulto2': mensaje += 'Créditos: 6'; break;
      case 'familiar_domiciliaria': mensaje += 'Créditos: 4'; break;
      case 'diseno_critico': mensaje += 'Créditos: 6'; break;
      case 'bioetica': mensaje += 'Créditos: 4'; break;
      case 'genero': mensaje += 'Créditos: 4'; break;
      case 'seminario': mensaje += 'Créditos: 6'; break;
      case 'internado1': mensaje += 'Créditos: 30'; break;
      case 'internado2': mensaje += 'Créditos: 26'; break;
      case 'cfg1': case 'cfg2': case 'cfg3': case 'cfg4': case 'cfg5': case 'cfg6': 
        mensaje += 'Créditos: 4'; break;
      case 'optativo1': case 'optativo2': mensaje += 'Créditos: 4'; break;
      case 'bioestadistica': mensaje += 'Créditos: 6'; break;
      default: mensaje += 'Créditos: no especificados'; break;
    }

    if (pr && pr !== "240 SCT") {
      mensaje += `\nPrerrequisito: ${pr}`;
    } else if (pr === "240 SCT") {
      mensaje += "\nPrerrequisito: 240 créditos SCT acumulados";
    } else {
      mensaje += '\nSin prerrequisitos.';
    }

    alert(mensaje);
  });
});
