function simuladorPrestamo() {
    let continuar;

    do {
        // Se obtener el monto del préstamo del usuario
        const montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));

        // Se obtener la tasa de interés anual del usuario
        const tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):")) / 100;

        // Se obtener el plazo del préstamo en meses
        const plazoPrestamoMeses = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

        // Se calcula la tasa de interés mensual
        const tasaInteresMensual = tasaInteresAnual / 12;

        // Se calcula la cuota mensual utilizando la fórmula del sistema francés
        const cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoPrestamoMeses));

        // Se muestra la cuota mensual al usuario
        alert(`La cuota mensual es de $${cuotaMensual.toFixed(2)}`);

        // Se consulta si desde realizar otro calculo al usuario
        continuar = prompt("¿Desea realizar otro cálculo? (Si/No)");

        // Se muestra mensaje de cierre de simulador
        if (continuar.toLowerCase() !== "si") {
            alert("Simulador de préstamo cerrado.");
        }

    } while (continuar.toLowerCase() === "si");
}

// Se llama a la función del simulador
simuladorPrestamo();
