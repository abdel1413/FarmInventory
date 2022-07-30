/**
 * squerrel record his journal
 */
let record = []; //where the records are save
function Journal(events, squerrel) {
  record.push({ events, squerrel });
}

Journal(["workday", "work", "break", "skying"], false);
Journal(["week end", "play", "skying"], tru);
