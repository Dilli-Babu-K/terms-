
import { LegalContent } from './types.ts';

export const RECOVA_TERMS: LegalContent = {
  lastUpdated: '17 January 2026',
  contactEmail: 'recova.app0@gmail.com',
  sections: [
    {
      id: 'purpose',
      title: 'Purpose of the App',
      content: [
        'Recova provides recovery and readiness insights based on user-entered information.',
        'Recova is NOT a medical application.'
      ]
    },
    {
      id: 'disclaimer',
      title: 'Health Disclaimer (IMPORTANT)',
      isWarning: true,
      content: [
        'Recova does not diagnose medical conditions.',
        'Recova does not provide medical advice.',
        'Recova does not replace professional healthcare services.',
        'All insights are informational only. Always consult a qualified healthcare professional before making health decisions.'
      ]
    },
    {
      id: 'responsibilities',
      title: 'User Responsibilities',
      content: [
        'Provide accurate information.',
        'Use the app for personal use only.',
        'Not misuse, modify, reverse engineer, or exploit the app.'
      ]
    },
    {
      id: 'accounts',
      title: 'Accounts',
      content: [
        'You may use Recova with Google Sign-In or as a Guest user.',
        'You are responsible for maintaining access to your account.'
      ]
    },
    {
      id: 'privacy',
      title: 'Data & Privacy',
      content: [
        'Your data is handled according to our Privacy Policy.',
        'By using Recova, you consent to data processing as described there.'
      ]
    },
    {
      id: 'availability',
      title: 'Availability',
      content: [
        'We strive to keep Recova available, but service interruptions may occur.',
        'Features may change or be discontinued.',
        'We are not responsible for interruptions beyond reasonable control.'
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, Recova is provided "as is".',
        'We are not liable for indirect or consequential damages.',
        'Use of the app is at your own risk.'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      content: [
        'We may suspend or terminate access if these terms are violated or if the app is misused.',
        'You may stop using the app at any time.'
      ]
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: [
        'We may update these Terms & Conditions.',
        'Continued use of Recova means acceptance of updated terms.'
      ]
    },
    {
      id: 'law',
      title: 'Governing Law',
      content: 'These Terms are governed by the laws of India.'
    }
  ]
};
