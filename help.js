function help() {
  return `Per avere una descrizione dettagliata dell'ambiente in cui ti trovi:
  - guarda (g)
  
  Comandi per il movimento (tra parentesi l'abbreviazione):
  - nord (n)
  - sud (s)
  - est (e)
  - ovest (o)
  - alto (a)
  - basso (b)
  
  Per avere l'elenco degli oggetti che possiedi:
  - inventario (i)
  
  Per prendere un oggetto:
  - prendi (p) 
  
  Per usare un oggetto:
  - usa (u) + [nome oggetto]

  Per rivedere questo messaggio:
  - help (h)
  
  Per uscire dal gioco:
  - esci
  `; 
}

module.exports = {
  help,
}
