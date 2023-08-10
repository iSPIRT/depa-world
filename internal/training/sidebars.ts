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
        'confidential_clean_room_dp',
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
      label: 'Getting Started',
      collapsed: true,
      items: [
        'reference-implementation',
      ],
    },
  ],
};
