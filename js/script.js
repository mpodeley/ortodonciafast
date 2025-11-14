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
            whatsapp_link: "
