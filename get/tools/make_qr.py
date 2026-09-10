#!/usr/bin/env python3
"""Erzeugt ../assets/qr.svg fuer die Desktop-Ansicht.
Nach dem Festlegen der Domain: DOMAIN unten ersetzen und Skript einmal laufen lassen.
Braucht `segno` (pip install segno)."""
import os
import segno

DOMAIN = "https://luifire.github.io/glimpse-documents/get/"  # TODO: eigene Domain eintragen, muss zu DOMAIN in index.html passen

qr = segno.make(DOMAIN, error="m")
qr.save(os.path.join(os.path.dirname(__file__), "..", "assets", "qr.svg"), kind="svg", scale=1, border=2,
        dark="#0E1226", light="#F2EFE7", svgclass=None, lineclass=None, omitsize=True)
print(f"{DOMAIN} -> v{qr.version}, {qr.symbol_size(border=0)[0]} Module")
