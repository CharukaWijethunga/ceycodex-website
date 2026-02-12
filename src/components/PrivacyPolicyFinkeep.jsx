import React from 'react';
import './PrivacyPolicyFinkeep.css';

const PrivacyPolicyFinkeep = () => {
  return (
    <main className="privacy-policy-page">
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective date:</strong> February 12, 2026</p>
        <p>
          FinKeep ("the App", "we", "us") is designed to help you manage your personal finances.
          This Privacy Policy explains what data is collected, how it is used, and your choices.
        </p>

        <h2>1. Information We Process</h2>
        <h3>1.1 Data you enter in the App</h3>
        <ul>
          <li>Accounts, balances, categories, transactions, budgets, bills, recurring rules</li>
          <li>Assets, liabilities, goals, investments</li>
          <li>App settings (theme, currency, reminders, backup preferences)</li>
        </ul>
        <p>This data is primarily stored locally on your device.</p>

        <h3>1.2 Backup data</h3>
        <p>If you choose backup features:</p>
        <ul>
          <li>Local backup: exported JSON file on your device storage</li>
          <li>Google Drive backup: backup file in your Google Drive App Data folder (appDataFolder)</li>
        </ul>
        <p>We do not operate our own cloud servers for your finance data.</p>

        <h3>1.3 Advertising and purchases (if enabled)</h3>
        <ul>
          <li>AdMob may process device/app identifiers for ad delivery and measurement.</li>
          <li>Google Play Billing / App Store may process purchase information for Pro entitlement.</li>
          <li>We receive only necessary entitlement/status in the app flow.</li>
        </ul>

        <h3>1.4 Diagnostic and startup messages</h3>
        <p>
          The app may show local startup warnings (e.g., missing configuration, unavailable plugins).
          These are for on-device troubleshooting and not sent to us by default.
        </p>

        <h2>2. How We Use Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide finance tracking features</li>
          <li>Generate reports and insights</li>
          <li>Schedule local reminders</li>
          <li>Enable backup/restore you request</li>
          <li>Unlock premium features after purchase</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not sell your personal data.</p>
        <p>Data may be shared only with:</p>
        <ul>
          <li>Google Drive (if you use Drive backup)</li>
          <li>Google AdMob (if ads are enabled)</li>
          <li>In-app purchase provider (Google Play / Apple) for transactions</li>
        </ul>
        <p>Sharing is limited to what is required for those services.</p>

        <h2>4. Data Storage and Retention</h2>
        <ul>
          <li>Primary data is stored locally on your device.</li>
          <li>Backup files remain until you delete them.</li>
          <li>Google Drive backups remain in your Drive appDataFolder until removed/replaced.</li>
        </ul>

        <h2>5. Your Choices and Controls</h2>
        <p>You can:</p>
        <ul>
          <li>Edit or delete financial records in-app</li>
          <li>Disable ads by upgrading to Pro (where applicable)</li>
          <li>Enable/disable local reminders</li>
          <li>Enable/disable auto backup</li>
          <li>Export your data (JSON/CSV)</li>
          <li>Create and restore local backups</li>
          <li>Restore from Google Drive backups (if configured)</li>
        </ul>

        <h2>6. Security</h2>
        <p>
          We apply reasonable app-level safeguards and local storage protections provided by the platform.
          No method of storage/transmission is 100% secure.
        </p>
        <p>You are responsible for:</p>
        <ul>
          <li>Protecting your device access</li>
          <li>Securing backup files</li>
          <li>Safeguarding your Google account credentials</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          FinKeep is not intended for children under 13 (or equivalent minimum age in your region).
          We do not knowingly collect children's personal information.
        </p>

        <h2>8. International Use</h2>
        <p>
          If you use third-party services (Google Drive, AdMob, billing), your data may be processed in
          countries where those providers operate, under their policies.
        </p>

        <h2>9. Third-Party Services</h2>
        <p>Use of third-party features is subject to their privacy policies:</p>
        <ul>
          <li>Google Drive / Google APIs</li>
          <li>Google AdMob</li>
          <li>Google Play Billing / Apple In-App Purchase</li>
        </ul>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. The latest version will be made available in the app
          listing/repository. Continued use after updates means you accept the revised policy.
        </p>

        <h2>11. Contact</h2>
        <p>If you have questions about this Privacy Policy, contact:</p>
        <p><strong>App:</strong> FinKeep</p>
        <p><strong>Email:</strong> <a href="mailto:chawijethunga@gmail.com">chawijethunga@gmail.com</a></p>
      </div>
    </main>
  );
};

export default PrivacyPolicyFinkeep;
