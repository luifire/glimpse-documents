---
title: Privacy Policy – Glimpse
description: How Glimpse collects, uses and protects your data
---

# Privacy Policy – Glimpse

_Last updated: 3 July 2026_

## 1. Controller

The controller responsible for data processing is:

**David Luibrand**
Stählistrasse 7
8280 Kreuzlingen
Switzerland
Email: [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com)

## 2. Minimum Age

This app is intended for users aged **18 and older**. We do not knowingly collect personal data from anyone under the age of 18. If we become aware that a user is under 18, their account and associated data will be deleted. To enforce this, the app applies an age check during onboarding (see section 3f).

## 3. Data Collected and Purposes

### a) Account and Profile Data

When you create an account, the following data is collected:

- **Email address** — used for authentication via Supabase Auth.
- **Username** — used as your display name within the app.
- **Gender** — used to display you correctly to other users.
- **Gender preference** — used to filter which users are shown to you.

Gender preference may constitute data concerning sexual orientation and is therefore treated as a **special category of personal data** under Art. 9 GDPR / Art. 5 DSG. Processing is based on your explicit consent, which you grant when entering this information during onboarding. You may withdraw this consent at any time by deleting your account.

> **Legal basis:** Explicit consent (Art. 9(2)(a) GDPR / Art. 5 DSG).

### b) Camera and Photo Access

The app requests access to your camera and photo library (Android permissions `CAMERA` and `READ_MEDIA_IMAGES`) only when you choose to add or change your profile photo.

- **Purpose:** Users can take or select a profile photo to be recognizable within the app.
- **Storage:** The photo is stored online and temporarily cached on other users' devices to ensure app performance. Other users have no direct access to the image file.
- **Visibility:** The profile photo is only visible to users who can see you in the app. Users can set themselves to "invisible", which hides their photo.
- **Local visibility:** People who know the user in real life may see the photo.
- **Deletion:** Users can delete their account and photo directly in the app. Deletion requests can also be sent to [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com).

> **Legal basis:** Consent (Art. 6(1)(a) GDPR / Art. 13(1) DSG).

### c) Bluetooth Access

The app uses Bluetooth Low Energy (BLE) to detect other nearby users. On Android this uses the `BLUETOOTH_SCAN` (declared with the `neverForLocation` flag), `BLUETOOTH_CONNECT` and `BLUETOOTH_ADVERTISE` permissions.

- **Purpose:** Detect other nearby Glimpse users — without processing GPS or location data.
- **No location data:** The Bluetooth scan permission is declared with `neverForLocation`, meaning Bluetooth is **not** used to derive your physical location. No GPS coordinates are collected or stored.
- **Storage:** Detection events (sightings) are stored temporarily both locally and online to keep the interaction list up to date.

> **Legal basis:** Consent and performance of contract (Art. 6(1)(a),(b) GDPR / Art. 13(1) DSG).

### d) Interaction Data

- **Purpose:** When users like, block, or otherwise interact with other users, this data is stored online.
- **Necessity:** This is required to track interactions (e.g. blocks) and protect user privacy, even after a reinstall.

> **Legal basis:** Performance of contract and legitimate interests (Art. 6(1)(b),(f) GDPR / Art. 13(1) DSG).

### e) Push Notifications

The app requests the `POST_NOTIFICATIONS` permission to send notifications about matches, interactions, and activity from other users via Firebase Cloud Messaging (FCM).

- **Storage:** FCM tokens are stored server-side and used solely for delivering notifications.

> **Legal basis:** Consent (Art. 6(1)(a) GDPR / Art. 13(1) DSG).

### f) Age Verification Data

To keep the app restricted to adults (18+), you provide your **date of birth** during onboarding. The app derives your age from it and stores a durable age-verification record consisting of:

- your **self-declared date of birth**, and
- a **hashed device identifier** (a one-way SHA-256 hash of the Android device ID), used only to make the age decision reinstall-proof so the 18+ requirement cannot be circumvented by deleting and reinstalling the app.

The hashed device identifier cannot be reversed to reveal the original device ID. This record is kept even after account deletion to enforce a block against under-age access (see section 9).

> **Legal basis:** Compliance with a legal obligation and legitimate interests in protecting minors (Art. 6(1)(c),(f) GDPR / Art. 13(1) DSG).

## 4. Legal Basis Summary

| Data | Legal Basis |
| --- | --- |
| Email, username | Performance of contract (Art. 6(1)(b)) |
| Profile photo | Consent (Art. 6(1)(a)) |
| Gender preference | Explicit consent (Art. 9(2)(a)) |
| Interaction data | Contract + legitimate interests (Art. 6(1)(b),(f)) |
| BLE sighting data | Consent + contract (Art. 6(1)(a),(b)) |
| FCM token | Consent (Art. 6(1)(a)) |
| Date of birth + hashed device identifier | Legal obligation + legitimate interests (Art. 6(1)(c),(f)) |

## 5. International Data Transfers

Supabase and Firebase (Google) may store and process data on servers located in the United States. These transfers are carried out on the basis of the **EU Standard Contractual Clauses (SCCs)** adopted by the European Commission, which provide an appropriate level of data protection.

- Supabase: [supabase.com/privacy](https://supabase.com/privacy)
- Firebase / Google: [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)

## 6. Third-Party Services

No personal data is sold or passed to third parties beyond the infrastructure listed below. The app does **not** include advertising, analytics, or crash-reporting SDKs.

| Service | Purpose | Privacy Policy |
| --- | --- | --- |
| Supabase | Backend / database / authentication | [supabase.com/privacy](https://supabase.com/privacy) |
| Firebase (Google) | Push notifications (FCM) | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |

## 7. User Rights

You have the right to:

- **Access** the personal data we process about you.
- **Rectification** of inaccurate data.
- **Erasure** of your data ("right to be forgotten").
- **Data portability** (in a machine-readable format).
- **Withdraw consent** at any time with effect for the future, without affecting the lawfulness of processing prior to withdrawal.
- **Object** (Art. 21 GDPR) to processing based on legitimate interests (Art. 6(1)(f)) at any time. We will then no longer process your data for those purposes unless we can demonstrate compelling legitimate grounds that override your interests, or for the establishment, exercise, or defence of legal claims.

To exercise any of these rights, send a request to: [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com)

App permissions (camera, Bluetooth, notifications) can be revoked at any time under **Android: Settings → Apps → Glimpse → Permissions**.

## 8. Right to Lodge a Complaint

You have the right to lodge a complaint with a data protection supervisory authority:

- **Switzerland:** Federal Data Protection and Information Commissioner (FDPIC / EDÖB) — [edoeb.admin.ch](https://www.edoeb.admin.ch)
- **EU users:** The supervisory authority of your EU member state of residence or place of work.

## 9. Retention Periods

We keep personal data only for as long as it is needed for the purposes described in this policy, and delete or anonymise it once it is no longer required. The entries below describe the criteria we apply; where a specific timeframe is given, it is a target rather than a guaranteed maximum, and may change as the app evolves. In all cases you can delete your account (in-app or by email) to have your data removed.

| Data | Retention |
| --- | --- |
| Email / username | Kept while your account exists; deleted when you delete your account. |
| Profile photos | Kept while your account exists; deleted when you delete your account. We also aim to remove the photos of long-inactive accounts. |
| Gender / preference data | Deleted when you delete your account. |
| Interaction data | Kept as long as needed to enforce blocks and protect users; deleted or anonymised when you delete your account. |
| BLE sighting data | Kept only temporarily to power the nearby-users list, and removed once it is no longer needed. |
| FCM tokens | Kept as long as needed to deliver notifications; removed when you delete your account. |
| Age-verification record (date of birth + hashed device identifier) | Kept for as long as necessary to enforce the 18+ requirement, including after account deletion. |

## 10. Data Security

Technical and organisational measures are in place to protect data against unauthorised access, loss, or misuse. All data transmission is encrypted (HTTPS/TLS).

## 11. Google Play Data Safety

The data practices declared in the **Google Play Data Safety** section for this app reflect the categories described in this policy. The following data is collected and **linked to your identity**:

- Email address
- Username
- Gender and gender preference
- Date of birth
- Profile photo
- Interaction history
- Push notification token (device identifier)

Data is **encrypted in transit**, is **not sold**, and you can request its deletion (in-app or by email). BLE sighting data and the hashed device identifier used for age verification are collected but are not shared externally in a form linked to your public identity. The app does **not** collect location data.

## 12. Changes to This Privacy Policy

This privacy policy may be updated. The current version is always available at this page; you can also request it at [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com).

## 13. Contact

For any privacy-related questions, please contact: [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com)
