# NeonCasa 3D

Versione italiana indipendente di **NeonPlan 3D**, progetto di **Mastershort**, distribuito con licenza MIT. NeonCasa 3D 1.0.0 deriva dalla versione 1.8.1; commit e provenienza sono in `UPSTREAM.json`. Non è una versione ufficiale dell'autore originale.

Disegna la casa in Home Assistant, arredala e controlla luci, tapparelle, termostati, sensori e dispositivi nella vista 3D. L'interfaccia include 914 testi italiani. Il pulsante **Disegna casa** apre l'editor. Geometria, grafica, funzioni e controlli restano quelli della versione di partenza.

## Installazione manuale

Richiede Home Assistant 2025.1 o successivo e un browser con WebGL 2.

1. Estrai lo ZIP.
2. Copia la cartella `custom_components/neoncasa3d` dentro `/config/custom_components/` di Home Assistant. Il risultato deve essere `/config/custom_components/neoncasa3d/manifest.json`.
3. Riavvia Home Assistant.
4. Apri **Impostazioni → Dispositivi e servizi → Aggiungi integrazione** e cerca **NeonCasa 3D**.
5. Ricarica la pagina. Nel menu laterale apri **NeonCasa 3D** e premi **Disegna casa**. Per modificare serve un utente amministratore.

Non caricare lo ZIP nello store dei componenti aggiuntivi: questo progetto è un'integrazione personalizzata.

## Primo disegno

- Premi **Aggiungi piano**: significa un livello della casa, non una piantina da caricare.
- Usa **Rettangolo** trascinando sul foglio; per stanze irregolari usa **Forma libera**. Puoi usare **Disegna con misure** e inserire lunghezze e direzioni dei muri.
- Seleziona la stanza, assegnale un nome e collegala a un'area di Home Assistant.
- Inserisci **Porte e finestre** cliccando sui muri e aggiungi mobili da **Arredamento**.
- Nella sezione **Dispositivi** usa **Posiziona** per luci, termostati e altri dispositivi.
- Premi **3D** per vedere e controllare la casa. Il salvataggio è automatico.

## Card della dashboard

Apri **Modifica dashboard → Aggiungi scheda → Manuale**:

```yaml
type: custom:neoncasa3d-card
height: 500
```

L'integrazione registra automaticamente la risorsa della card.

## Convivenza con l'originale

NeonCasa usa dominio, percorso laterale, API WebSocket, risorse JavaScript, componenti web, preferenze del browser e archivi separati. Non legge, migra o sovrascrive automaticamente i disegni di NeonPlan 3D. Puoi tenere installati entrambi.

I backup di questa edizione hanno un formato identificato come NeonCasa. Questa prima versione non include la migrazione automatica dei backup originali.

## Installazione da HACS

1. Apri **HACS → ⋮ → Repository personalizzati**.
2. Inserisci `https://github.com/EdisonACDC/neoncasa3d` e scegli **Integrazione**.
3. Cerca **NeonCasa 3D**, scaricalo e riavvia Home Assistant.
4. Apri **Impostazioni → Dispositivi e servizi → Aggiungi integrazione → NeonCasa 3D**.
5. Nel menu laterale apri **NeonCasa 3D → Disegna casa**.

NeonPlan può restare installato: le due integrazioni usano dati e componenti separati. Gli aggiornamenti di NeonCasa arriveranno da questo repository, non da quello originale.

## Licenze ed estensioni

Il file `LICENSE` conserva la licenza MIT e il copyright dell'autore originale. Il manuale originale è collegato dal progetto e i riferimenti commerciali continuano a puntare al negozio dell'autore.

I pacchetti opzionali e le funzioni Pro non sono resi gratuiti: verifiche delle firme, chiavi pubbliche, vincoli d'installazione e licenze restano attivi. La compatibilità commerciale e l'attivazione dei pacchetti acquistati in questa edizione indipendente non sono state verificate. Le descrizioni dei pacchetti, i nomi delle tue entità e i siti esterni mantengono la lingua dei rispettivi dati/autori.

## Sviluppo

Dentro `frontend` esegui `npm ci`, `npm run typecheck`, `npm test` e `npm run build`. I bundle compilati sono già inclusi nell'integrazione. L'archivio contiene anche i sorgenti modificabili.
