document.addEventListener('DOMContentLoaded', function() {

// --- 1. DATOS DE PATOLOGÍAS ---
    const pathologyData = {
        "apiñamiento": {
            title: "Apiñamiento Dental",
            description: "Cuando no hay espacio suficiente para que los dientes se alineen correctamente.",
            causes: "Falta de espacio óseo, dientes grandes, pérdida temprana de dientes de leche.",
            consequences: "Dificulta la higiene, riesgo de caries/gingivitis, problemas de mordida, estética.",
            why_correct: "Facilita la limpieza, previene enfermedades, mejora función y estética.",
            treatment_focus: "Los <strong>alineadores invisibles</strong> son ideales para corregir el apiñamiento de forma discreta y eficiente.",
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
            duration_range: "12 - 24 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20mordida%20cruzada."
        },
        "sobremordida": {
            title: "Sobremordida Aumentada",
            description: "Los dientes superiores cubren excesivamente a los inferiores al morder.",
            causes: "Genética, hábitos orales, desarrollo óseo.",
            consequences: "Desgaste de dientes inferiores, problemas en encías, dolor mandibular.",
            why_correct: "Evita el desgaste prematuro y mejora la funcionalidad de la mandíbula.",
            treatment_focus: "Con <strong>alineadores</strong> podemos intruir dientes y corregir la posición mandibular.",
            duration_range: "12 - 20 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20sobremordida."
        },
        "mordida_abierta": {
            title: "Mordida Abierta",
            description: "Los dientes superiores e inferiores no se tocan al cerrar la boca (generalmente al frente).",
            causes: "Uso prolongado de chupete, chuparse el dedo, empuje lingual.",
            consequences: "Dificultad para morder y hablar, desgaste en dientes posteriores.",
            why_correct: "Restaura la función masticatoria y mejora la estética de la sonrisa.",
            treatment_focus: "El tratamiento con <strong>alineadores</strong> es muy efectivo para cerrar mordidas abiertas anteriores.",
            duration_range: "12 - 24 meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20mordida%20abierta."
        },
        "prognatismo": {
            title: "Prognatismo (Clase III)",
            description: "La mandíbula inferior se proyecta hacia adelante más que la superior.",
            causes: "Principalmente genético y de desarrollo óseo.",
            consequences: "Problemas para masticar, dolor articular (ATM), perfil facial cóncavo.",
            why_correct: "Mejora significativamente el perfil y la salud articular a largo plazo.",
            treatment_focus: "Casos leves o moderados pueden camuflarse con <strong>alineadores</strong>; casos severos pueden requerir cirugía.",
            duration_range: "18 - 24+ meses (Estimado)",
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20me%20interesa%20consultar%20sobre%20tratamiento%20para%20prognatismo."
        }
    };

    // --- 2. LÓGICA DEL EVALUADOR (EL CÓDIGO QUE FALTABA) ---
    const options = document.querySelectorAll('.bite-option');
    const detailsContainer = document.getElementById('details');

    if (options.length > 0 && detailsContainer) {
        options.forEach(option => {
            option.addEventListener('click', function() {
                const pathologyKey = this.dataset.pathology;
                const data = pathologyData[pathologyKey]; // Busca la data

                if (data) {
                    // Si encuentra data, construye el HTML
                    detailsContainer.innerHTML = `
                        <h3>${data.title}</h3>
                        <p><strong>Descripción:</strong> ${data.description}</p>
                        <p><strong>Causas Comunes:</strong> ${data.causes}</p>
                        <p><strong>Consecuencias:</strong> ${data.consequences}</p>
                        <p><strong>Por qué Corregirlo:</strong> ${data.why_correct}</p>
                        <p>${data.treatment_focus}</p>
                        <em>Duración estimada del tratamiento: ${data.duration_range}</em>
                        <div class="details-buttons">
                            <a href="${data.whatsapp_link}" target="_blank" class="btn btn-primary btn-whatsapp-contact">
                                <img src="img/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"> Consultar por este caso
                            </a>
                            <a href="${data.docturno_link}" target="_blank" class="btn btn-secondary">Agendar Turno</a>
                        </div>
                    `;
                    detailsContainer.style.display = 'block';
                } else if (pathologyKey === "unknown") {
                    // Manejo especial para el botón "No sé / Otro"
                    detailsContainer.innerHTML = `
                        <h3>No te preocupes</h3>
                        <p>Es muy común no estar seguro. Nuestros especialistas pueden identificar tu caso con una simple evaluación.</p>
                        <p>Podemos evaluar tu caso específico y darte un plan de tratamiento digital personalizado.</p>
                        <div class="details-buttons">
                            <a href="https://wa.me/5491128892043?text=Hola%2C%20vi%20la%20página%20y%20no%20estoy%20seguro%20de%20mi%20caso%2C%20%C2%BFpuedo%20enviarles%20una%20foto?" target="_blank" class="btn btn-primary btn-whatsapp-contact">
                                <img src="img/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"> Enviar mi foto por WhatsApp
                            </a>
                            <a href="https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&" target="_blank" class="btn btn-secondary">Agendar Evaluación</a>
                        </div>
                    `;
                    detailsContainer.style.display = 'block';
                } else {
                    // Si se clickea uno sin data (ej. "sobremordida" que no está en tu objeto), oculta
                    detailsContainer.style.display = 'none';
                }
                
                // Scroll suave hacia el detalle
                if(detailsContainer.style.display === 'block') {
                   detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // --- 3. CÓDIGO PARA EL MENÚ MÓVIL (HAMBURGUESA) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            if (!link.classList.contains('dropbtn')) {
                 link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            }
        });
    }

    // --- 4. CÓDIGO PARA EL AÑO EN EL FOOTER ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

}); // <-- FIN DEL DOMContentLoaded
