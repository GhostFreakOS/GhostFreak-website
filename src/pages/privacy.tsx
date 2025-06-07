import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title()}>Privacy Policy and Terms of Service</h1>
          
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="mb-4">Effective Date: June 7, 2025</p>
            <p className="mb-4">Owners: 
                <a href="https://github.com/GhostFreakk">Ahmed Shafiq (Ghostty)</a>
                , 
                <a href="https://github.com/asaadzx">Asaad Zain (asaadzx)</a>

                </p>
            
            <p className="mb-6">At GhostfreakOS, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you use our operating system and related services.</p>

            <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Personal Information: We may collect your name, email address, and contact info only if you register or contact support.</li>
              <li>Device Information: Basic hardware and software info for compatibility and troubleshooting.</li>
              <li>No Tracking: We do NOT track your browsing or personal activities outside the OS environment.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2. How We Use Your Data</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and maintain the OS and services.</li>
              <li>To improve and customize your experience.</li>
              <li>To communicate important updates, security alerts, and support.</li>
              <li>We NEVER sell or rent your personal information to third parties.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3. Data Security</h3>
            <p className="mb-6">We use industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>

            <h3 className="text-xl font-semibold mb-2">4. Your Rights</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>You can request access to any personal info we hold about you.</li>
              <li>You can ask us to delete your personal info.</li>
              <li>You control your data — uninstalling GhostfreakOS removes any locally stored personal info.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">5. Third-Party Services</h3>
            <p className="mb-6">GhostfreakOS may integrate third-party tools or drivers. These services have their own privacy policies, which we encourage you to review.</p>

            <h3 className="text-xl font-semibold mb-2">6. Changes to This Policy</h3>
            <p className="mb-6">We may update this policy occasionally. Changes will be posted here with an updated date.</p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Terms of Service (ToS)</h2>
            <p className="mb-4">Effective Date: March 19, 2024</p>
            <p className="mb-4">Owners: Ahmed Shafiq (Ghostty), Asaad Zain (asaadzx)</p>

            <p className="mb-6">By using GhostfreakOS ("the OS"), you agree to the following terms:</p>

            <h3 className="text-xl font-semibold mb-2">1. License and Ownership</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>GhostfreakOS is owned by Ahmed Shafiq and Asaad Zain.</li>
              <li>We grant you a non-exclusive, non-transferable license to use GhostfreakOS for personal and commercial purposes as outlined.</li>
              <li>You may NOT redistribute GhostfreakOS or modified versions without explicit permission.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2. Use Restrictions</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Do not reverse engineer, decompile, or modify GhostfreakOS beyond allowed modifications.</li>
              <li>Do not use GhostfreakOS for unlawful or harmful activities.</li>
              <li>Respect all applicable laws and regulations.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3. Updates and Support</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>We may provide updates and patches at our discretion.</li>
              <li>Support is provided via official channels only.</li>
              <li>We are not liable for damages caused by use or inability to use the OS.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">4. Warranty Disclaimer</h3>
            <p className="mb-6">GhostfreakOS is provided "AS IS," without warranties of any kind. We disclaim all implied warranties including merchantability or fitness for a particular purpose.</p>

            <h3 className="text-xl font-semibold mb-2">5. Limitation of Liability</h3>
            <p className="mb-6">In no event shall Ahmed Shafiq or Asaad Zain be liable for any damages arising from your use of GhostfreakOS.</p>

            <h3 className="text-xl font-semibold mb-2">6. Termination</h3>
            <p className="mb-6">We may terminate your license if you violate these terms.</p>

            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="mb-2">For questions about these policies, contact:</p>
            <p>Ahmed Shafiq (Ghostty) – 
                <a href="mailto:ahmed.shafek.official@gmail.com">ahmed.shafek.official@gmail.com</a>
                </p>
            <p>Asaad Zain (asaadzx) – 
                <a href="mailto:asaad.work2010@gmail.com">asaad.work2010@gmail.com</a>
                </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} 