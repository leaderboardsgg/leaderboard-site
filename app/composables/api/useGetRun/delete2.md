
## Access & Availability

* **Permissions:** Open to guests, users, and admins.
* **Error Handling:** If the `runId` is invalid, the page must display a "Run not found" message.

---

## Display Requirements

The page must display the following data points. All status indicators (e.g., Banned, Deleted, Published) **must not rely on color alone** to ensure accessibility for colorblind users.

| Category | Details to Display |
| :--- | :--- |
| **Hierarchy** | Name of the Category and Leaderboard (both must link back to their respective pages). |
| **Runner** | Runner's name and their Banned status. |
| **Run Metadata** | Run status (Published/Deleted), type (Timed/Scored), date performed, and submission timestamp. |
| **Content** | Run info text (may be truncated or shown in a modal if long). |

### Formatting Specifics

* **Accessibility:** Use text labels, icons, or formatting alongside color to convey statuses.
* **Run Types:**
  * **Timed:** Display duration as `h h m m s s`.
    * *Optional:* Omit hours if < 1 hour; omit minutes if < 1 minute.
    * *Precision:* Display necessary decimal places.
  * **Scored:** Display score as `x pts.`
* **Info Text:** If using a modal, provide a clearly labeled open button and a close button within the modal. If no text exists, no placeholder is required.

---
