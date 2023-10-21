function simuladorPrestamo() {
    let continuar;

    do {
        let montoPrestamo, tasaInteresAnual, plazoPrestamoMeses;

        // Se obtiene el monto del préstamo del usuario con validación
        do {
            montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
            if (isNaN(montoPrestamo) || montoPrestamo <= 0) {
                alert('Por favor, ingrese un monto válido y positivo.');
            }
        } while (isNaN(montoPrestamo) || montoPrestamo <= 0);

        // Se obtiene la tasa de interés anual del usuario con validación
        do {
            tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):")) / 100;
            if (isNaN(tasaInteresAnual) || tasaInteresAnual <= 0) {
                alert('Por favor, ingrese una tasa de interés válida y positiva.');
            }
        } while (isNaN(tasaInteresAnual) || tasaInteresAnual <= 0);

        // Se obtiene el plazo del préstamo en meses con validación
        do {
            plazoPrestamoMeses = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));
            if (isNaN(plazoPrestamoMeses) || plazoPrestamoMeses <= 0) {
                alert('Por favor, ingrese un plazo válido y positivo en meses.');
            }
        } while (isNaN(plazoPrestamoMeses) || plazoPrestamoMeses <= 0);

        // Se calcula la tasa de interés mensual
        const tasaInteresMensual = tasaInteresAnual / 12;

        // Se calcula la cuota mensual utilizando la fórmula del sistema francés
        const cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoPrestamoMeses));

        // Se muestra la cuota mensual al usuario
        alert(`La cuota mensual es de $${cuotaMensual.toFixed(2)}`);

        // Se consulta si desea realizar otro cálculo al usuario
        continuar = prompt("¿Desea realizar otro cálculo? (Si/No)");

        // Se muestra mensaje de cierre de simulador
        if (continuar.toLowerCase() !== "si") {
            alert("Simulador de préstamo cerrado.");
        }

    } while (continuar.toLowerCase() === "si");
}

// Se llama a la función del simulador
simuladorPrestamo();