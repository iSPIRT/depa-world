module.exports = {
  training: [
    'depa_training_framework',
    {
      type: 'category',
      label: 'Overview',
      collapsed: true,
      items: [
        'depa',
        'principles',
        'glossary',
        'architecture',
        'use_cases',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      collapsed: true,
      items: [
        'contracts',
        'contract_service_specifications',
        'payments',
      ],
    },
    {
      type: 'category',
      label: 'Confidential Clean Rooms',
      collapsed: true,
      items: [
        'confidential_clean_room_design',
        'confidential_clean_room_specifications',
        'differential_privacy',
      ],
    },
    {
      type: 'category',
      label: 'Workflows and API specifications',
      collapsed: true,
      items: [
        'workflows',
        'api-specs.yaml',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsed: true,
      items: [
        'legal_faq',
        'tech_faq'
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'reference-implementation',
      ],
    }
  ],
};
