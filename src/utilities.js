export function compareHorario(range, time) {
    // Separar el rango en inicio y fin
    const [start, end] = range.split('-');
    const now = time.split(':');
    const startParts = start.split(':');
    const endParts = end.split(':');
    
    const nowInSeconds = parseInt(now[0]) * 3600 + parseInt(now[1]) * 60 + parseInt(now[2]);
    let startInSeconds = parseInt(startParts[0]) * 3600 + parseInt(startParts[1]) * 60;
    let endInSeconds = parseInt(endParts[0]) * 3600 + parseInt(endParts[1]) * 60;
  
    // Si el rango cruza la medianoche, ajustamos el límite final a la medianoche
    if (endInSeconds < startInSeconds) {
      endInSeconds = 24 * 3600;
    }
  
    if (nowInSeconds >= startInSeconds && nowInSeconds <= endInSeconds) {
      return true;
    } else if (nowInSeconds > endInSeconds) {
      return 'after';
    } else {
      return 'before';
    }
  }
  
