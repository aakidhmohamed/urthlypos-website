
export interface LegalSection {
    title?: string;
    content: string[];
}

export interface LegalDocument {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalDocument = {
    title: "Privacy Policy",
    lastUpdated: "February 17, 2026",
    sections: [
        {
            title: "Your Privacy is Our Priority",
            content: [
                "At Urthly POS, we understand that your business data is sensitive. We are committed to maintaining the highest standards of transparency and security regarding your personal and operational information."
            ]
        },
        {
            title: "1. Information We Collect",
            content: [
                "We collect minimal data necessary to provide our 'offline-first' experience:",
                "• Account Information: Name, business name, and contact details during registration.",
                "• Device Data: Hardware identifiers for license verification and synchronization.",
                "• Operational Data: Your business transactions remain on your device. We only sync data to our secure servers if you explicitly enable cloud backup."
            ]
        },
        {
            title: "2. How We Use Your Data",
            content: [
                "Your information is used strictly to enhance your business operations:",
                "• To verify your license and provide technical support.",
                "• To improve the performance and reliability of the Urthly POS engine.",
                "• We NEVER sell or share your business data with third-party advertisers."
            ]
        },
        {
            title: "3. The 'Offline-First' Security Model",
            content: [
                "Unlike traditional POS systems, Urthly POS keeps your database locally. This means:",
                "• High Privacy: Your data doesn't leave your shop unless you choose to back it up.",
                "• Resilience: No internet is required for core billing and inventory management."
            ]
        },
        {
            title: "4. Data Protection",
            content: [
                "We employ industry-leading encryption for all data in transit and at rest (during cloud backups). Our infrastructure is monitored 24/7 to prevent unauthorized access."
            ]
        },
        {
            title: "5. Your Rights",
            content: [
                "You have the right to access, export, or delete your account information at any time. Simply contact our support team to initiate a data request."
            ]
        },
        {
            title: "6. Contact Information",
            content: [
                "For privacy-related inquiries, please reach out to our team at privacy@urthly.com or visit us at our Weweldeniya office."
            ]
        }
    ]
};

export const TERMS_AND_CONDITIONS: LegalDocument = {
    title: "Terms & Conditions",
    lastUpdated: "February 17, 2026",
    sections: [
        {
            title: "1. Professional Service Agreement",
            content: [
                "By using Urthly POS, you enter into a professional agreement with Urthly Technology. These terms ensure a fair and secure environment for all our business partners."
            ]
        },
        {
            title: "2. Software Usage & License",
            content: [
                "• Grant of License: We grant you a non-transferable license to use Urthly POS for your business operations.",
                "• Ownership: All intellectual property rights in the software remain with Urthly.",
                "• Offline Resilience: While the software is designed to work offline, certain features (backups/updates) require a periodic internet connection."
            ]
        },
        {
            title: "3. One-Time Payment Policy",
            content: [
                "Urthly POS prides itself on transparent pricing. Your one-time payment covers the core license. Optional cloud services or hardware maintenance may carry separate, clearly stated fees."
            ]
        },
        {
            title: "4. User Responsibilities",
            content: [
                "As a business owner, you are responsible for:",
                "• Maintaining the security of your local device and backup passwords.",
                "• Ensuring your business operations comply with local tax and trade regulations."
            ]
        },
        {
            title: "5. Limitation of Liability",
            content: [
                "Urthly provides a robust tool for business management. However, we are not liable for business losses resulting from hardware failure, data loss due to lack of backups, or misuse of the software."
            ]
        },
        {
            title: "6. Service Updates",
            content: [
                "We continuously improve Urthly POS. Updates are provided to ensure security and roll out new features. We recommend keeping your system updated for the best experience."
            ]
        },
        {
            title: "7. Governing Law",
            content: [
                "This agreement is governed by the laws of Sri Lanka. Any disputes will be settled in the jurisdiction of the courts in Weweldeniya or Kandy."
            ]
        }
    ]
};
