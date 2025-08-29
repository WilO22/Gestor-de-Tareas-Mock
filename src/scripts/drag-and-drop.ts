// src/scripts/drag-and-drop.ts

// ¡Importante! Ahora también importamos 'SortableEvent' para que TypeScript sepa
// qué forma tiene el objeto de información del evento.
import Sortable from 'sortablejs'; // Importamos el "valor" (la clase)
import type { SortableEvent } from 'sortablejs'; // Importamos el "tipo" por separado

const columns = document.querySelectorAll('.task-list');

columns.forEach(column => {
  new Sortable(column as HTMLElement, {
    group: 'shared',
    animation: 150,
    ghostClass: 'blue-background-class',
    forceFallback: true,
    
    // --- NUEVA SECCIÓN AÑADIDA ---
    // Esta es la "alarma" que se activa cuando sueltas una tarjeta.
    // 'onEnd' es una función que se ejecuta al final del arrastre.
    
    onEnd: (event: SortableEvent) => {
  // Obtenemos los IDs que pusimos en el HTML usando .dataset
  const taskId = (event.item as HTMLElement).dataset.id;
  const newColumnId = (event.to as HTMLElement).dataset.id;
  const oldColumnId = (event.from as HTMLElement).dataset.id;

  // Mostramos un mensaje mucho más claro y útil
  console.log(`
    --- TARJETA MOVIDA ---
    - ID de Tarea: ${taskId}
    - Salió de la Columna: ${oldColumnId}
    - Llegó a la Columna: ${newColumnId}
    - Posición Anterior: ${event.oldIndex}
    - Nueva Posición: ${event.newIndex}
    --------------------
  `);
}

  });
});