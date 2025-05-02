// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Datos de Patologías (SIN RANGOS DE PRECIOS) ---
    const pathologyData = {
        "apiñamiento": {
            title: "Apiñamiento Dental",
            description: "Cuando no hay espacio suficiente para que los dientes se alineen correctamente.",
            causes: "Falta de espacio óseo, dientes grandes, pérdida temprana de dientes de leche.",
            consequences: "Dificulta la higiene, riesgo de caries/gingivitis, problemas de mordida, estética.",
            why_correct: "Facilita la limpieza, previene enfermedades, mejora función y estética.",
            treatment_focus: "Los <strong>alineadores invisibles</strong> son ideales para corregir el apiñamiento de forma discreta y eficiente.",
            // price_range: ELIMINADO,
            duration_range: "6 - 18 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20apiñamiento."
        },
        "diastemas": {
            title: "Diastemas (Dientes Separados)",
            description: "Espacios visibles entre dientes.",
            causes: "Desproporción dientes/maxilar, frenillo labial grueso, hábitos.",
            consequences: "Impacto estético, posible dificultad fonética, acumulación de comida.",
            why_correct: "Mejora estética, función y previene problemas de encías.",
            treatment_focus: "Los <strong>alineadores invisibles</strong> cierran estos espacios de manera controlada y estética.",
            // price_range: ELIMINADO,
            duration_range: "6 - 12 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20diastemas."
        },
         "mordida_cruzada": {
            title: "Mordida Cruzada",
            description: "Uno o más dientes superiores muerden por dentro de los inferiores.",
            causes: "Genética, desarrollo desigual maxilares, hábitos.",
            consequences: "Desgaste dental anormal, problemas ATM, asimetría facial, masticación ineficiente.",
            why_correct: "Logra mordida funcional, previene desgaste y problemas articulares, mejora simetría.",
            treatment_focus: "<strong>Alineadores invisibles</strong>, a menudo con auxiliares (elásticos), pueden corregir muchos casos.",
            // price_range: ELIMINADO,
            duration_range: "12 - 24 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20mordida%20cruzada."
        },
         "sobremordida": {
            title: "Sobremordida Aumentada",
            description: "Dientes superiores cubren excesivamente a los inferiores verticalmente.",
            causes: "Genética, desarrollo óseo mandibular.",
            consequences: "Desgaste incisivos inferiores, daño encía palatina, problemas ATM.",
            why_correct: "Previene desgaste, protege encías y articulación, mejora función.",
            treatment_focus: "Corrección muy efectiva con <strong>alineadores invisibles</strong>, logrando nivelación vertical.",
            // price_range: ELIMINADO,
            duration_range: "12 - 20 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20sobremordida."
        },
         "mordida_abierta": {
            title: "Mordida Abierta",
            description: "Espacio vertical entre dientes superiores e inferiores al cerrar.",
            causes: "Hábitos (succión, empuje lingual), genética, crecimiento vertical.",
            consequences: "Dificultad masticatoria/fonética, estética afectada.",
            why_correct: "Restaura función masticatoria/fonética, mejora estética.",
            treatment_focus: "<strong>Alineadores invisibles</strong>, a menudo junto a corrección de hábitos, pueden cerrar la mordida.",
            // price_range: ELIMINADO,
            duration_range: "18 - 30 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20mordida%20abierta."
        },
         "prognatismo": {
            title: "Prognatismo (Mordida Invertida)",
            description: "Dientes inferiores muerden por delante de los superiores (Clase III).",
            causes: "Genética (factor hereditario), desarrollo mandibular/maxilar.",
            consequences: "Perfil facial característico, desgaste dental, dificultad masticatoria, problemas ATM.",
            why_correct: "Mejora función masticatoria, estética facial, previene problemas articulares.",
            treatment_focus: "Casos leves/moderados pueden tratarse con <strong>alineadores invisibles</strong> (a veces con auxiliares). Casos esqueléticos severos pueden requerir cirugía + ortodoncia.",
            // price_range: ELIMINADO,
            duration_range: "18 - 36 meses (Estimado, varía mucho)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20prognatismo."
        },
        "unknown": {
            title: "Agenda una Evaluación Personalizada",
            description: "¡No te preocupes si no estás seguro de tu tipo de mordida! La mejor forma de saber qué tratamiento es el adecuado para ti es a través de una evaluación profesional en nuestro consultorio.",
            causes: "",
            consequences: "",
            why_correct: "Podremos realizar un diagnóstico preciso, explicarte tus opciones de tratamiento (incluyendo alineadores invisibles) y crear un plan personalizado para lograr tu sonrisa ideal.",
            treatment_focus: "",
            // price_range: ELIMINADO (Ya estaba "A determinar..."),
            duration_range: "A determinar en consulta", // Se mantiene
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20no%20estoy%20seguro%2Fsegura%20de%20mi%20tipo%20de%20mordida.%20Quisiera%20agendar%20una%20evaluación."
        }
    };

    // --- Selección de Elementos del DOM ---
    const biteOptionsContainer = document.querySelector('.bite-options');
    const detailsContainer = document.getElementById('details');
    const currentYearSpan = document.getElementById('year');

    // --- Lógica de la Botonera ---
    if (biteOptionsContainer) {
        biteOptionsContainer.addEventListener('click', function(event) {
            const button = event.target.closest('.bite-option');
            if (!button) return;

            const pathologyType = button.dataset.pathology;
            const data = pathologyData[pathologyType];

            if (data) {
                // Construir el HTML interno dinámicamente
                let detailsHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;

                if(data.causes) detailsHTML += `<p><strong>Causas frecuentes:</strong> ${data.causes}</p>`;
                if(data.consequences) detailsHTML += `<p><strong>Por qué puede ser un problema:</strong> ${data.consequences}</p>`;
                if(data.why_correct) detailsHTML += `<p><strong>Por qué vale la pena corregirlo:</strong> ${data.why_correct}</p>`;
                if(data.treatment_focus) detailsHTML += `<p><strong>Nuestro enfoque con Alineadores Invisibles:</strong> ${data.treatment_focus}</p>`;

                // --- MODIFICADO: Mostrar sólo Duración si está disponible ---
                if (data.duration_range && data.duration_range !== "A determinar en consulta") {
                    detailsHTML += `
                        <ul>
                            <li><strong>Duración Estimada del Tratamiento*:</strong> ${data.duration_range}</li>
                        </ul>
                        <em>*La duración exacta depende de la complejidad de tu caso y se determina en la evaluación inicial.</em>
                    `;
                } else if (data.duration_range === "A determinar en consulta") {
                     detailsHTML += `
                        <ul>
                            <li><strong>Duración:</strong> ${data.duration_range}</li>
                        </ul>
                     `;
                     // No se muestra costo ni la nota de duración exacta aquí
                }
                // --- FIN MODIFICADO ---


                // Añadir AMBOS botones de acción
                detailsHTML += `
                    <div class="details-buttons">
                        <a href="${data.docturno_link}" target="_blank" class="btn btn-primary">
                           Agendar Turno Online (Docturno)
                        </a>
                        <a href="${data.whatsapp_link}" target="_blank" class="btn btn-secondary btn-whatsapp-contact">
                           <img src="img/whatsapp-icon.svg" alt="WhatsApp" class="whatsapp-icon"> Consultar por WhatsApp
                        </a>
                    </div>
                `;

                // Actualizar el contenedor y mostrarlo
                detailsContainer.innerHTML = detailsHTML;
                detailsContainer.style.display = 'block';
                detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 'center' puede ser mejor
            }
        });
    }

    // --- Actualizar año en el Footer ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

}); // Fin de DOMContentLoaded