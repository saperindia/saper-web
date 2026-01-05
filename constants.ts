

// ============================================
// SITE INFORMATION
// ============================================
export const SITE_INFO = {
  brandName: 'Saper Ind',
  tagline: 'Empowering Industries with Critical Power & Intelligence.',
  foundingYear: '2010',
  location: 'Global Operations',
  copyright: 'Saper Ind Projects © 2025',
  websiteCredit: 'Website by Agency',
  logo: {
    // Option 1: Use image URL (PNG, SVG file, etc.)
    imageUrl: '/logo.png', // Set to image path like '/logo.png' or leave empty to use SVG paths
    alt: 'Saper Ind Logo',
    // Option 2: Use inline SVG paths (used when imageUrl is empty)
    viewBox: '0 0 24 24',

  },
};

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT_INFO = {
  email: 'sales@saperind.com',
  phone: '+91 902 015 1947',
  phoneFormatted: '+91 902 015 1947',
  whatsapp: '+919020151947',
  whatsappFormatted: '+91 902 015 1947',
  address: {
    line1: 'F-10, Phase-I, Industrial Park',
    line2: 'Puzhakkal, Thrissur',
    line3: 'Kerala, India',
  },
  availability: 'Available Mon - Fri, 9am - 6pm IST',
  socialMedia: {
    facebook: '#',
    linkedin: '#',
    instagram: '#',
  },
};

// ============================================
// CONTACT MODAL
// ============================================
export const CONTACT_MODAL = {
  title: "Contact Us.",
  subtitle: "We'd love to hear about your project.",
  options: [
    {
      label: 'Email',
      value: 'sales@saperind.com',
      href: 'mailto:sales@saperind.com',
      type: 'email',
    },
    {
      label: 'WhatsApp',
      value: '+91 902 015 1947',
      href: 'https://wa.me/919020151947',
      type: 'whatsapp',
    },
    {
      label: 'Phone',
      value: '+91 902 015 1947',
      href: 'tel:+919020151947',
      type: 'phone',
    },
  ],
};

// ============================================
// HERO SECTION
// ============================================
export const HERO_CONTENT = {
  title: 'Saper Ind',
  image: {
    url: '/hero-image.webp',
    alt: 'Comprehensive Industrial Power Infrastructure - Solar, Critical Power, EV Charging & Automation',
  },
};

// ============================================
// INTRO SECTION
// ============================================
export const INTRO_CONTENT = {
  headline: {
    prefix: 'Specializing in',
    line1: 'industrial infrastructure,',
    highlight: 'Saper Ind',
    line2: 'creates',
    line3: 'sustainable power.',
  },
  description: 'At Saper, we provide dependable power backup solutions and manage complex EPC projects with precision and care. From critical infrastructure to time-sensitive installations, we ensure seamless execution and lasting value. Clients trust us as a single-point partner for reliable delivery and technical excellence.',
  established: 'Est. 2010',
  mission: {
    index: '01',
    title: 'Mission',
    text: 'To deliver resilient infrastructure with speed, integrity, and long-term value—empowering clients to operate without interruption, even in the most critical environments.'
  },
  vision: {
    index: '02',
    title: 'Vision',
    text: 'To be the trusted partner for industries that demand reliable power backup solutions and precision-driven EPC project execution.'
  }
};

// ============================================
// FOOTER SECTION
// ============================================
export const FOOTER_CONTENT = {
  description: 'A specialist in industrial infrastructure, Saper Ind builds sustainable systems that combine quality, innovation and expertise.',
};

// ============================================
// LEGACY SECTION
// ============================================
export const LEGACY_CONTENT = {
  title: {
    line1: 'A history of',
    line2: 'trust & precision',
  },
  description: 'With a tradition rooted in engineering know-how, Saper Ind builds sustainable power networks with passion and rigor. Commitment, quality, and innovation are the cornerstones of each of our projects.',
  image: {
    url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop',
    alt: 'Engineers installing solar panels - renewable energy infrastructure work',
  },
  foundedBadge: 'Founded 2010',
};

// ============================================
// LEGAL INFORMATION
// ============================================
export const LEGAL_INFO = {
  effectiveDate: 'January 2026',
  lastUpdated: 'January 2026',
  companyName: SITE_INFO.brandName,
  contact: {
    email: CONTACT_INFO.email,
    address: CONTACT_INFO.address,
    jurisdiction: 'Courts of Thrissur, Kerala',
  },
};

// ============================================
// PRIVACY POLICY
// ============================================
export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  introduction: `${LEGAL_INFO.companyName} ("Company", "we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.`,

  sections: [
    {
      title: 'Contact Information',
      content: [
        `Email: ${LEGAL_INFO.contact.email}`,
        `Address: ${LEGAL_INFO.contact.address.line1}, ${LEGAL_INFO.contact.address.line2}, ${LEGAL_INFO.contact.address.line3}`,
        `Jurisdiction: ${LEGAL_INFO.contact.jurisdiction}`,
      ],
    },
    {
      title: 'Information We Collect',
      subsections: [
        {
          subtitle: 'Personal Information',
          items: ['Name, email, phone number, company details'],
        },
        {
          subtitle: 'Technical Information',
          items: ['IP address, browser type, device identifiers, cookies, and usage data'],
        },
        {
          subtitle: 'Transactional Information',
          items: ['Records of inquiries, purchases, or service requests'],
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our services',
        'To respond to inquiries and communicate with you',
        'To send updates, promotional materials, or important notices',
        'To comply with legal and regulatory requirements',
      ],
    },
    {
      title: 'Data Sharing & Disclosure',
      content: [
        'We do not sell your personal data',
        'Information may be shared with trusted service providers assisting in operations',
        'Data may be disclosed to government or regulatory authorities when legally required',
        'Logos and trademarks of partner companies are used for marketing/distribution purposes only and remain the property of their respective owners',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'Request access to your personal data',
        'Ask for corrections or updates',
        'Request deletion of your data, subject to legal obligations',
        'Withdraw consent for marketing communications',
      ],
    },
    {
      title: 'Cookies & Tracking',
      content: [
        'Our website uses cookies and similar technologies to enhance user experience, analyze traffic and performance, and remember preferences',
        'You can manage cookie preferences through your browser settings',
        'Disabling cookies may affect website functionality',
      ],
    },
    {
      title: 'Third-Party Links',
      content: [
        'Our website may contain links to external sites',
        'We are not responsible for the privacy practices or content of those websites',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        `This Privacy Policy is governed by the laws of Kerala, India. Any disputes shall be subject to the exclusive jurisdiction of the ${LEGAL_INFO.contact.jurisdiction}.`,
      ],
    },
    {
      title: 'Updates to This Policy',
      content: [
        'We may update this Privacy Policy from time to time',
        'Changes will be posted on this page with a revised "Last Updated" date',
      ],
    },
  ],
};

// ============================================
// TERMS OF USE
// ============================================
export const TERMS_OF_USE = {
  title: 'Terms of Use',
  introduction: 'By accessing or using our website and services, you agree to these Terms of Use. Please read them carefully.',

  sections: [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using our website and services, you agree to these Terms & Conditions',
      ],
    },
    {
      title: 'Eligibility',
      content: [
        'You must be at least 18 years old or have parental/guardian consent',
        'By using our website, you confirm that you have the legal capacity to enter into this agreement',
      ],
    },
    {
      title: 'Use of Services',
      content: [
        'You agree to use our services only for lawful purposes',
        'You must not attempt to disrupt, hack, or gain unauthorized access to our systems',
        'Misuse may result in suspension or termination of access',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        `The name "${LEGAL_INFO.companyName}" and the Saper logo are the exclusive property of ${LEGAL_INFO.companyName}`,
        'All other trademarks, logos, and product names displayed are the property of their respective companies or organizations',
        'Use of such logos is solely for identification and marketing purposes and does not imply ownership by ' + LEGAL_INFO.companyName,
        'You may not reproduce, distribute, or modify any content without prior written consent from the rightful owner',
      ],
    },
    {
      title: 'Products & Distribution',
      content: [
        `${LEGAL_INFO.companyName} acts as a distributor/marketer of products owned by respective companies`,
        'Product quality, warranties, and guarantees are the responsibility of the original manufacturer or brand owner',
        'We are not liable for defects, damages, or claims arising from third-party products',
      ],
    },
    {
      title: 'Disclaimer',
      content: [
        'The content provided on this website is for informational and marketing purposes only',
        'We make no warranties regarding accuracy, completeness, or reliability of the information',
        'Logos and trademarks of third-party companies remain their property; their inclusion does not imply endorsement or ownership',
        'Any technical, financial, or legal information shared should not be considered professional advice',
        'Please consult a qualified expert for specific guidance',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'We strive to provide accurate information but make no guarantees regarding completeness or reliability',
        'We shall not be liable for indirect, incidental, or consequential damages arising from the use of our website or services',
        'We are not responsible for external links or third-party content',
      ],
    },
    {
      title: 'Refunds & Cancellation Policy',
      subsections: [
        {
          subtitle: 'Cancellations',
          items: [
            'Orders may be cancelled within 24 hours of placement, provided the product has not yet been dispatched',
            'Once an order is shipped, cancellation is not possible',
          ],
        },
        {
          subtitle: 'Refunds',
          items: [
            'Refunds are applicable only in cases of: wrong product delivered, damaged product received (must be reported within 7 days of delivery with proof), or service not rendered as agreed',
            'Refunds will be processed to the original payment method within 7-10 business days after approval',
          ],
        },
        {
          subtitle: 'Non-Refundable Items',
          items: [
            'Customized or special-order products',
            'Products/services already utilized or consumed',
            'Any items explicitly marked "non-refundable" at the time of purchase',
          ],
        },
        {
          subtitle: 'Responsibility',
          items: [
            `As a distributor/marketer, ${LEGAL_INFO.companyName} facilitates sales but product warranties, guarantees, and technical support remain the responsibility of the original manufacturer or brand owner`,
          ],
        },
      ],
    },
    {
      title: 'Termination',
      content: [
        'We reserve the right to suspend or terminate access to our website or services at our discretion, without prior notice, if you violate these Terms',
      ],
    },
    {
      title: 'Governing Law & Jurisdiction',
      content: [
        `These Terms of Use are governed by the laws of Kerala, India. Any disputes shall be subject to the exclusive jurisdiction of the ${LEGAL_INFO.contact.jurisdiction}.`,
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We may update these Terms of Use from time to time',
        'Updates will be posted on this page with a revised "Last Updated" date',
      ],
    },
    {
      title: 'Contact Information',
      content: [
        `For questions regarding refunds, cancellations, or any other matters, please contact us at ${LEGAL_INFO.contact.email}`,
      ],
    },
  ],
};

// ============================================
// NAVIGATION
// ============================================
export const NAVBAR_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Core pillars (Services) - with Key Activities items
export const PROJECTS = [
  {
    id: '01',
    title: 'Critical Power',
    subtitle: 'UPS & Servo Stabilizers',
    description: 'Industrial-grade power conditioning. From 1 kVA modular units to 3000 kVA oil-cooled servo stabilizers for zero-downtime environments.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Heavy Industrial Power / Switchgear
    items: ['Online UPS - Industrial Grade', 'Servo Stabilizer - Industrial', 'Isolated Power Supply (OT-Hospitals)', 'Batteries (VRLA)', 'Energy Storage Systems (Li-ion, LFP)']
  },
  {
    id: '02',
    title: 'E-Mobility',
    subtitle: 'EV Charging Infrastructure',
    description: 'Powering the transition. Deploying 240KW DC Fast Chargers and 7.4KW Type-II AC units for fleets and residential complexes.',
    image: 'https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    items: ['AC Smart Chargers (3.3-9.9KW)', 'AC Type II Chargers (7.4-15KW)', 'DC Fast Chargers (30-240KW)', 'Battery Chargers & Testers']
  },
  {
    id: '03',
    title: 'Renewable',
    subtitle: 'Utility & Floating Solar',
    description: 'Harvesting gigawatts. Comprehensive EPC for utility-scale solar farms, industrial rooftops, and advanced floating solar arrays.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Blue Solar Panels
    items: ['Solar Power Projects', 'On/Off-Grid Inverters', 'Hybrid Solar Inverters', 'Floating Solar Panels', 'Energy Storage (Li-Ion, LFP, VRLA)']
  },
  {
    id: '04',
    title: 'Automation',
    subtitle: 'Industrial Intelligence',
    description: 'Smart factory integration. Custom CNC machinery, hydraulic systems, and Building Management Systems (BMS) for total control.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Robot Hand / AI
    items: ['CNC Transformer Winding Machines', 'Special Purpose Machines (SPMs)', 'Testing Equipment', 'Hydraulic/Pneumatic Systems', 'Building Management System (BMS)']
  },
  {
    id: '05',
    title: 'EPC Projects',
    subtitle: 'End-to-End Solutions',
    description: 'Complete engineering, procurement, and construction services for power infrastructure and industrial facilities.',
    image: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    items: ['PSU Projects', 'Power & Electrical Solutions', 'Oil and Gas - Material Supply', 'Access Management Systems']
  }
];










// ============================================
// PARTNERS (expanded from brochure)
// ============================================
export const PARTNERS = [
  { name: "Poweron", logo: "https://cdn.brandfetch.io/poweronenertech.com" },
  { name: "Benoit", logo: "https://cdn.brandfetch.io/btlme.com" },
  { name: "Trishul", logo: "https://cdn.brandfetch.io/trishulindia.com", scale: 1.6 },
  { name: "Elnix", logo: "https://www.elnixpowersystems.com/images/logo.png" },
  { name: "Bijilify", logo: "https://bijlifynow.com/static/media/logo.ff2f46c4e3aae30c7a1e0af7cb5ce7ee.svg" },
  { name: "Sungrow", logo: "https://cdn.brandfetch.io/sungrowpower.com" },
  { name: "Honeywell", logo: "https://cdn.brandfetch.io/honeywell.com" },
  { name: "Socomec", logo: "https://cdn.worldvectorlogo.com/logos/socomec.svg" },
  { name: "Siemens", logo: "https://cdn.brandfetch.io/siemens.com" },
  { name: "Essl", logo: "https://cdn.brandfetch.io/esslsecurity.com" },
  { name: "Crompton", logo: "https://cdn.brandfetch.io/crompton.co.in" },
  { name: "HPL", logo: "https://cdn.brandfetch.io/hplindia.com" },
  { name: "ATC", logo: "https://cdn.brandfetch.io/atcgroup.co", scale: 1.5 },
];

// ============================================
// PRODUCT SPECIFICATIONS
// ============================================
export const PRODUCTS = [
  {
    id: 'p1',
    name: 'Online UPS Systems',
    subtitle: 'Zero-Downtime Power Backup',
    description: 'Industrial-grade power protection ensuring seamless business continuity. Capable of handling massive loads with high efficiency.',
    image: "https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: [
      { label: 'Range', value: '1 kVA - 1 MW' },
      { label: 'Efficiency', value: '> 96%' },
      { label: 'Battery', value: 'Li-ion / VRLA' },
      { label: 'Display', value: 'Touch Panel' }
    ],
    variants: ['Online Double Conversion UPS', 'Modular UPS (Scalable)', 'Outdoor UPS (for extreme environmental conditions)'],
    applications: ['Data Centers', 'Medical Facilities', 'Industrial Automation', 'Telecommunications']
  },
  {
    id: 'p2',
    name: 'Servo Stabilisers',
    subtitle: 'Grid Voltage Regulation',
    description: 'Precision voltage correction systems designed to protect sensitive industrial machinery from grid fluctuations.',
    image: "https://images.pexels.com/photos/159201/circuit-board-printed-circuit-board-computer-computer-engineering-159201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: [
      { label: 'Capacity', value: 'Up to 3000 kVA' },
      { label: 'Cooling', value: 'Air / Oil Cooled' },
      { label: 'Technology', value: 'Microprocessor' },
      { label: 'Response', value: '< 10ms' }
    ],
    variants: ['Air-Cooled Servo Stabilisers', 'Oil-Cooled Servo Stabilisers', 'Single/Three Phase'],
    applications: ['CNC Machines', 'Medical Equipment', 'Industrial Plants', 'Textile Mills']
  },
  {
    id: 'p3',
    name: 'EV Charging Stations',
    subtitle: 'Smart Mobility Infrastructure',
    description: 'Comprehensive charging solutions for the electric future, ranging from home units to ultra-fast public chargers.',
    image: "https://images.pexels.com/photos/27355835/pexels-photo-27355835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: [
      { label: 'AC Smart', value: '3.3KW - 9.9KW' },
      { label: 'AC Type II', value: '7.4KW - 15KW' },
      { label: 'DC Fast', value: '30KW - 240KW' },
      { label: 'Protocol', value: 'OCPP 1.6J/2.0' }
    ],
    variants: ['AC Smart Chargers', 'AC Type II Fast Chargers', 'DC Fast Chargers (Dual Gun)'],
    applications: ['Commercial Buildings', 'Fleet Operators', 'Housing Societies', 'Fuel Stations', 'EV Dealers']
  },
  {
    id: 'p4',
    name: 'IPS - Isolated Power',
    subtitle: 'Medical Grade Safety',
    description: 'Critical safety power systems for group 2 medical locations, ensuring patient safety and device continuity.',
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: 'Capacity', value: '5 - 10 kVA' },
      { label: 'Input', value: 'Single Phase' },
      { label: 'Compliance', value: 'IEC 60364-7-710' },
      { label: 'Standard', value: 'NEC 2011 / SP 30:2011' }
    ],
    variants: ['Medical Isolation Panels', 'Operation Theatre Panels', 'ICU Power Units'],
    applications: ['Operation Theatres', 'ICUs', 'Cath Labs', 'Premature Baby Rooms', 'Recovery Rooms', 'Angiographic Rooms']
  },
  {
    id: 'p5',
    name: 'CNC Winding Machines',
    subtitle: 'Precision Automation',
    description: 'State-of-the-art transformer winding automation featuring bifilar capabilities and custom SWG ranges.',
    image: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: [
      { label: 'SWG Ranges', value: '(46-25) (46-19) (30-15) (22-8)' },
      { label: 'Type', value: 'Bifilar Winding' },
      { label: 'Control', value: 'CNC Digital' },
      { label: 'Custom', value: 'Available' }
    ],
    variants: ['Linear Winding', 'Toroidal Winding', 'Foil Winding', 'Tape Insulation'],
    applications: ['Transformer Manufacturing', 'Coil Winding', 'Electrical Manufacturing']
  },
  {
    id: 'p6',
    name: 'Solar Installations',
    subtitle: 'Utility & Floating PV',
    description: 'End-to-end solar energy solutions for massive scale, maximizing energy harvesting through advanced deployment.',
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: 'Inverters', value: 'On/Off/Hybrid' },
      { label: 'Storage', value: 'Li-ion / LFP' },
      { label: 'Mounting', value: 'Float/Ground/Roof' },
      { label: 'Monitor', value: 'IoT Enabled' }
    ],
    variants: ['Utility-Scale Projects', 'Floating Solar Panels', 'Industrial/Commercial/Residential Rooftop'],
    applications: ['Solar Farms', 'Water Bodies', 'Large Factories', 'Commercial Complexes']
  },
  {
    id: 'p7',
    name: 'Battery Chargers',
    subtitle: 'Intelligent Energy Mgmt',
    description: 'Advanced charging systems with auto-cutoff and multi-stage algorithms for optimal battery health.',
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a914?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: 'Current', value: '2A - 20A' },
      { label: 'Voltage', value: '12V - 96V' },
      { label: 'Stages', value: 'Multi-Stage' },
      { label: 'Feature', value: 'Auto-Cutoff' }
    ],
    variants: ['Constant Voltage', 'Smart Chargers', 'Multi-Battery Chargers (MBC)'],
    applications: ['Automotive', 'UPS Banks', 'Solar Storage', 'Industrial Backup']
  },
  {
    id: 'p8',
    name: 'BESS - Energy Storage',
    subtitle: 'Grid Stability Solutions',
    description: 'Advanced Battery Energy Storage Systems (BESS) for grid stabilization, peak shaving, and renewable integration.',
    image: "https://images.unsplash.com/photo-1620646193913-9426f21223e7?q=80&w=2574&auto=format&fit=crop",
    specs: [
      { label: 'Capacity', value: '50kWh - 100MWh' },
      { label: 'Technology', value: 'Li-Ion / LFP' },
      { label: 'Response', value: '< 20ms' },
      { label: 'Life', value: '> 6000 Cycles' }
    ],
    variants: ['Containerized BESS', 'C&I Storage', 'Hybrid Systems'],
    applications: ['Grid Support', 'Microgrids', 'Peak Shaving', 'Renewable Integration']
  }
];


