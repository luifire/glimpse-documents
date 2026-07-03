# Privacy Policy – Glimpse iOS

## 1. Controller

The controller responsible for data processing is:

**David Luibrand**
Stählistrasse 7
8280 Kreuzlingen
Switzerland
Email: [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com)

## 2. Minimum Age

This app is intended for users aged **18 and older**. We do not knowingly collect personal data from anyone under the age of 18. If we become aware that a user is under 18, their account and associated data will be deleted.

## 3. Data Collected and Purposes

### a) Account and Profile Data

When you create your profile, the following data is collected:

- **Username** — used as your display name within the app.
- **Gender** — used to display you correctly to other users.
- **Gender preference** — used to filter which users are shown to you.

Gender preference may constitute data concerning sexual orientation and is therefore treated as a **special category of personal data** under Art. 9 GDPR / Art. 5 DSG. Processing is based on your explicit consent, which you grant when entering this information during onboarding. You may withdraw this consent at any time by deleting your account.

> **Legal basis:** Explicit consent (Art. 9(2)(a) GDPR / Art. 5 DSG).

### b) Camera Permission (`NSCameraUsageDescription`)

- **Purpose:** Users can take a profile photo to be recognizable within the app.
- **Storage:** The photo is stored online and temporarily cached on other users' devices to ensure app performance. Other users have no direct access to the image file.
- **Visibility:** The profile photo is only visible to users who can see you in the app. Users can set themselves to "invisible", which hides their photo.
- **Local visibility:** People who know the user in real life may see the photo.
- **Deletion:** Once the app is released, users can delete their account and photo directly in the app. Until then, deletion requests can be sent to [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com).

> **Legal basis:** Consent (Art. 6(1)(a) GDPR / Art. 13(1) DSG).

### c) Bluetooth Permission (`NSBluetoothAlwaysUsageDescription`)

- **Purpose:** The app uses Bluetooth Low Energy (BLE) to detect other nearby users — without processing GPS or location data.
- **Storage:** Detection events (sightings) are stored temporarily both locally and online to keep the interaction list up to date.
- **No location data:** No GPS coordinates are collected or stored.

> **Legal basis:** Consent and performance of contract (Art. 6(1)(a),(b) GDPR / Art. 13(1) DSG).

### d) Interaction Data

- **Purpose:** When users like, block, or otherwise interact with other users, this data is stored online.
- **Necessity:** This is required to track interactions (e.g. blocks) and protect user privacy, even after a reinstall.

> **Legal basis:** Performance of contract and legitimate interests (Art. 6(1)(b),(f) GDPR / Art. 13(1) DSG).

### e) Push Notifications (`NSUserNotificationUsageDescription`)

- **Purpose:** The app sends notifications about matches, interactions, and activity from other users via Firebase Cloud Messaging (FCM).
- **Storage:** FCM tokens are stored server-side and used solely for delivering notifications.

> **Legal basis:** Consent (Art. 6(1)(a) GDPR / Art. 13(1) DSG).

### f) Age Verification Data

Glimpse is for adults only, so before you can create a profile you confirm your **date of birth** during onboarding. We use it solely to check that you meet the minimum age of 18. For this age check we process:

- your **self-declared date of birth**;
- a **pseudonymous device identifier** — a salted, one-way SHA-256 hash derived from a device identifier (such as the iOS identifier for vendor), or, if that is unavailable, a random identifier stored on your device. It cannot be reversed to reveal the original identifier, is not linked to advertising, and is not shared. Its only purpose is to make the age decision reinstall-proof, so the 18+ requirement cannot be bypassed by deleting and reinstalling the app; and
- the **resulting age status** (allowed / blocked), used to enable or restrict access to the app's features.

**If you do not meet the minimum age**, we do **not** create a dating profile, do **not** upload a photo, and do **not** collect an advertising identifier or track you. We keep only a minimal pseudonymous record — the device hash plus a "blocked" flag, **without your date of birth** — purely to enforce the age restriction (see section 9).

> **Legal basis:** Compliance with a legal obligation and legitimate interests in protecting minors and age assurance (Art. 6(1)(c),(f) GDPR / Art. 13(1) DSG).

## 4. Legal Basis Summary

| Data | Legal Basis |
| --- | --- |
| Username | Performance of contract (Art. 6(1)(b)) |
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

No personal data is sold or passed to third parties beyond the infrastructure listed below:

| Service | Purpose | Privacy Policy |
| --- | --- | --- |
| Supabase | Backend / database / authentication | [supabase.com/privacy](https://supabase.com/privacy) |
| Firebase (Google) | Push notifications | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |

## 7. User Rights

You have the right to:

- **Access** the personal data we process about you.
- **Rectification** of inaccurate data.
- **Erasure** of your data ("right to be forgotten").
- **Data portability** (in a machine-readable format).
- **Withdraw consent** at any time with effect for the future, without affecting the lawfulness of processing prior to withdrawal.
- **Object** (Art. 21 GDPR) to processing based on legitimate interests (Art. 6(1)(f)) at any time. We will then no longer process your data for those purposes unless we can demonstrate compelling legitimate grounds that override your interests, or for the establishment, exercise, or defence of legal claims.

To exercise any of these rights, send a request to: [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com)

iOS permissions (camera, Bluetooth, notifications) can be revoked at any time under **Settings → Glimpse**.

## 8. Right to Lodge a Complaint

You have the right to lodge a complaint with a data protection supervisory authority:

- **Switzerland:** Federal Data Protection and Information Commissioner (FDPIC / EDÖB) — [edoeb.admin.ch](https://www.edoeb.admin.ch)
- **EU users:** The supervisory authority of your EU member state of residence or place of work.

## 9. Retention Periods

We keep personal data only for as long as it is needed for the purposes described in this policy, and delete or anonymise it once it is no longer required. Where a specific timeframe is given below, it is a target rather than a guaranteed maximum. You can delete your account at any time to have your data removed.

| Data | Retention |
| --- | --- |
| Username | Kept while your account exists; deleted when you delete your account. |
| Profile photos | Kept while your account exists; deleted when you delete your account. We also aim to remove the photos of long-inactive accounts. |
| Gender / preference data | Deleted when you delete your account. |
| Interaction data | Kept as long as needed to enforce blocks and protect users; deleted or anonymised when you delete your account. |
| BLE sighting data | Kept only temporarily to power the nearby-users list, and removed once it is no longer needed. |
| FCM tokens | Kept as long as needed to deliver notifications; removed when you delete your account. |
| Date of birth | Deleted when you delete your account. |
| Age-block marker (device hash + status) | For a device found not to meet the minimum age, we retain only a pseudonymous marker (device hash + "blocked" flag, **no date of birth**) to enforce the age restriction. Any non-blocked record is deleted on account deletion. |

## 10. Data Security

Technical and organisational measures are in place to protect data against unauthorised access, loss, or misuse. All data transmission is encrypted (HTTPS/TLS).

## 11. App Store Privacy Nutrition Labels

The data practices declared in Apple's App Store Connect for this app reflect the categories described in this policy. The following data is collected and **linked to your identity**:

- Username
- Profile photo
- Gender and gender preference
- Date of birth
- Interaction history

BLE sighting data and the hashed device identifier used for age verification are collected but are **not linked to your identity** in a way that is shared externally.

## 12. Changes to This Privacy Policy

This privacy policy may be updated. The current version is available on request at [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com).

## 13. Contact

For any privacy-related questions, please contact: [feedback.glimpse@gmail.com](mailto:feedback.glimpse@gmail.com)
