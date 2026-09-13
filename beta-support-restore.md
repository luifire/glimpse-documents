---
# Nicht veroeffentlichen: steht in _config.yml unter exclude.
---

# Beta-/TestFlight-Fassung der Support-Seite (archiviert)

**Warum entfernt.** Waehrend der laufenden App-Store-Pruefung ist `support.html`
die in App Store Connect hinterlegte Support-URL. Die Seite sagte dem Pruefer
woertlich, die iOS-Fassung sei ein offener Test ("open test", "It's a beta",
"Test versions expire after 90 days"). Das ist die Steilvorlage fuer
Guideline 2.2 ("Demos, betas, and trial versions of your app don't belong on
the App Store"), und die Google-Play-Links dazu fuer Guideline 2.3.10
("don't include names, icons, or imagery of other mobile platforms or
alternative app marketplaces in your app or metadata").

**Was NICHT passiert ist.** Das TestFlight-Programm laeuft unveraendert weiter,
und `get/index.html` ist unveraendert: dort stehen Einladungslink, die zwei
Installationsschritte und der Play-Link nach wie vor. Das ist die Seite, auf
die Flyer und QR-Code zeigen. Entfernt wurde nur der Weg von den
Dokumentseiten dorthin (der CTA "Glimpse installieren") und jede
Verfuegbarkeitsaussage auf der Support-Seite selbst.

**Wann zurueck.** Kurz vor dem Test-Launch, oder sobald die iOS-Fassung im
App Store ist. Im zweiten Fall NICHT unveraendert zurueckspielen: dann ist die
TestFlight-Anleitung nicht mehr nur ein Pruefrisiko, sondern schickt iPhone-
Nutzer an deinem eigenen Store-Eintrag vorbei in einen Build, der nach 90
Tagen ablaeuft.

**Nicht versuchen, beides in einem Text zu formulieren.** Jede Fassung, die
TestFlight ueberhaupt erwaehnt, enthaelt genau den Satz, der die Pruefung
kostet. Zwei Zustaende mit einem Umschaltpunkt sind sauberer als ein
Kompromisstext.

## Was ausser den beiden Abschnitten unten veraendert wurde

In `support.html`:

1. Inhaltsverzeichnis: der Eintrag auf den TestFlight-Abschnitt, DE und EN.
2. "Erste Schritte" / "Getting started", Schritt 1: nannte Google Play mit Link
   und den offenen Test. Jetzt nur noch "Installiere Glimpse auf deinem Handy".
3. Berechtigungstabelle: Zusatz "(Android: Geraete in der Naehe)" und der
   `neverForLocation`-Klammersatz.
4. Zeile unter der Tabelle: die Pfade "Android: Einstellungen, Apps, ..." und
   "iPhone: Einstellungen, Glimpse". Jetzt "in den Einstellungen deines Handys".
5. FAQ "Warum muss die App laufen?": nannte Android-Akku-Optimierung und das
   iPhone-Hintergrundlimit getrennt. Jetzt plattformneutral.
6. FAQ "Ich bekomme keine Benachrichtigungen": dieselben Pfade.
7. FAQ "Ist Glimpse auf dem iPhone noch ein Test?" wurde ersetzt durch
   "Funktioniert Glimpse zwischen verschiedenen Handys?".
8. Fehlersuche-Checkliste Schritt 1 und die Kontaktzeilen: "Google Play, auf
   dem iPhone TestFlight" und "Android- oder iOS-Version".

In allen Dokumentseiten (`support`, `index`, `terms`, `privacy-policy`,
`imprint`, `delete-account`, `csae-policy`, `how-it-works`):

9. Der CTA `<a class="cta" href="get/index.html">Glimpse installieren</a>` vor
   dem Footer. Er war der Ein-Klick-Weg von der Support-URL auf die Seite mit
   "iPhone, offener Test" und "Bei Google Play holen".
10. Die Footer-Zeile "Fuer iOS und Android. Kein GPS, ..." heisst jetzt nur
    noch "Kein GPS, kein Location Tracking, ab 18.".

**Bewusst NICHT angefasst:** die Plattformnennungen in `privacy-policy.html`
und `terms.html` (Geltungsbereich "Android und iOS", Abschnitt 11 "Angaben fuer
App Store und Google Play", die `neverForLocation`-Erklaerung, die
Geraetekennung). Das sind Pflicht- und Transparenzangaben eines
plattformuebergreifenden Rechtstexts, kein Marketing, und eine
Datenschutzerklaerung, die ihren eigenen Geltungsbereich verschweigt, waere
schlechter, nicht sicherer.

## Entfernter Abschnitt, englisch

```html
<h2 id="testflight-en">Glimpse on iPhone: installing via TestFlight</h2>
<p>On iPhone, Glimpse is not in the App Store yet &mdash; it runs as an <strong>open test</strong>. Apple requires such tests to go through <strong>TestFlight</strong>, Apple's own free app for beta versions. So you install two things once: TestFlight, and then Glimpse inside it. You need nothing but a normal Apple account, and it costs nothing.</p>
<ol>
<li><strong>Install TestFlight</strong> from the App Store: <a href="https://apps.apple.com/de/app/testflight/id899247664">TestFlight</a>. It's made by Apple and only serves to deliver test versions.</li>
<li><strong>Open the invitation link:</strong> <a href="https://testflight.apple.com/join/fv2p49fh">testflight.apple.com/join/fv2p49fh</a>. Important: open it in <strong>Safari</strong>. Tapped inside Instagram, WhatsApp or another app's built-in browser, the link often doesn't hand over to TestFlight &mdash; copy it into Safari instead.</li>
<li><strong>Tap "Accept", then "Install".</strong> TestFlight downloads Glimpse.</li>
<li><strong>Open Glimpse from your home screen</strong> like any other app. It appears as <strong>Glimpse - Dates 2 Go</strong>, and in TestFlight it carries an orange dot, which just marks it as a test version.</li>
</ol>
<p>What's different from a normal App Store app:</p>
<ul>
<li><strong>Updates come through TestFlight</strong>, not the App Store. TestFlight tells you when a new version is there; leaving its notifications on means you don't have to check.</li>
<li><strong>Test versions expire after 90 days.</strong> If Glimpse says the build has expired, open TestFlight and install the current one &mdash; your account, your profile and your matches stay untouched.</li>
<li><strong>It's a beta,</strong> so a bug can slip through. You can write to us straight from TestFlight via "Send Beta Feedback", or by email at <a href="mailto:feedback.glimpse@gmail.com">feedback.glimpse@gmail.com</a>.</li>
<li><strong>Functionally it's the same app.</strong> An iPhone and an Android phone find each other exactly the same way.</li>
</ul>
<p>The <a href="get/index.html">install page</a> walks you through the same two steps on the phone, and opens the right link for whichever device you're holding.</p>
```

## Entfernter Abschnitt, deutsch

```html
<h2 id="testflight-de">Glimpse auf dem iPhone: Installation über TestFlight</h2>
<p>Auf dem iPhone ist Glimpse noch nicht im App Store, sondern läuft als <strong>offener Test</strong>. Apple verlangt für solche Tests <strong>TestFlight</strong>, Apples eigene, kostenlose App für Beta-Versionen. Du installierst also einmalig zwei Dinge: TestFlight und darin Glimpse. Mehr als ein normales Apple-Konto brauchst du nicht, und es kostet nichts.</p>
<ol>
<li><strong>Installiere TestFlight</strong> aus dem App Store: <a href="https://apps.apple.com/de/app/testflight/id899247664">TestFlight</a>. Die App kommt von Apple selbst und dient nur dazu, Testversionen auszuliefern.</li>
<li><strong>Öffne den Einladungslink:</strong> <a href="https://testflight.apple.com/join/fv2p49fh">testflight.apple.com/join/fv2p49fh</a>. Wichtig: in <strong>Safari</strong> öffnen. Tippst du ihn im eingebauten Browser von Instagram, WhatsApp oder einer anderen App an, springt er oft nicht zu TestFlight. Kopiere ihn dann einfach nach Safari.</li>
<li><strong>Tippe auf „Akzeptieren“ und dann auf „Installieren“.</strong> TestFlight lädt Glimpse herunter.</li>
<li><strong>Öffne Glimpse von deinem Home-Bildschirm</strong> wie jede andere App. Sie erscheint als <strong>Glimpse - Dates 2 Go</strong>, und in TestFlight trägt sie einen orangen Punkt, der sie nur als Testversion markiert.</li>
</ol>
<p>Was anders ist als bei einer normalen App aus dem App Store:</p>
<ul>
<li><strong>Updates kommen über TestFlight</strong>, nicht über den App Store. TestFlight sagt dir Bescheid, wenn eine neue Version da ist. Lass die Benachrichtigungen von TestFlight an, dann musst du nicht selbst nachsehen.</li>
<li><strong>Testversionen laufen nach 90 Tagen ab.</strong> Meldet Glimpse, die Testversion sei abgelaufen, öffne TestFlight und installiere die aktuelle. Dein Konto, dein Profil und deine Matches bleiben davon unberührt.</li>
<li><strong>Es ist eine Beta</strong>, ein Fehler kann also durchrutschen. Du kannst uns direkt aus TestFlight über „Feedback senden“ schreiben oder per Mail an <a href="mailto:feedback.glimpse@gmail.com">feedback.glimpse@gmail.com</a>.</li>
<li><strong>Funktional ist es dieselbe App.</strong> Ein iPhone und ein Android-Handy finden sich genauso wie zwei gleiche Geräte.</li>
</ul>
<p>Die <a href="get/index.html">Installationsseite</a> führt dich am Handy durch dieselben zwei Schritte und öffnet passend zu deinem Gerät den richtigen Link.</p>
```

## Ausserdem entfernt, der Verweis am Ende beider Abschnitte

```html
<p>The <a href="get/index.html">install page</a> walks you through the same two steps on the phone, and opens the right link for whichever device you're holding.</p>
<p>Die <a href="get/index.html">Installationsseite</a> fuehrt dich am Handy durch dieselben zwei Schritte und oeffnet passend zu deinem Geraet den richtigen Link.</p>
```

Der vollstaendige Vorher-Stand steht ausserdem in der Git-Historie:
`git show <commit-der-entfernung>^:support.html`
