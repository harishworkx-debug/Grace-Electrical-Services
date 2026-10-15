export const BUSINESS = {
  name: 'Grace Electrical Services',
  phone: '504-559-5351',
  phoneLink: 'tel:5045595351',
  domain: 'https://www.electricalwiringinstallationhahnville.com',
  city: 'Hahnville',
  state: 'Louisiana',
  zip: '70057',
  fullLocation: 'Hahnville, Louisiana 70057',
  mapsListing: 'https://maps.app.goo.gl/QAe2nY7owLaxnPQu6',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55303.83434629346!2d-90.49194088948813!3d29.965355111550448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb622e8fa5d184db%3A0x13ef870f92f3cf45!2sGrace%20Electrical%20Services!5e0!3m2!1sen!2sin!4v1792061134833!5m2!1sen!2sin',
};

export type ServiceInfo = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  icon: string;
  longDescription: string;
  situations: string[];
  whatItInvolves: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
};

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'electrical-wiring-installation',
    title: 'Electrical Wiring Installation',
    shortTitle: 'Wiring Installation',
    description:
      'Professional electrical wiring installation for new construction, renovations, and addition projects in Hahnville and nearby areas.',
    heroImage:
      'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt:
      'Electrician installing wiring in a new building wearing safety gear',
    icon: 'Cable',
    longDescription:
      'Electrical wiring installation is the foundation of any safe and functional electrical system. Whether you are building a new home, adding an addition, or undertaking a major renovation, proper wiring ensures that your electrical system can handle your daily demands safely and efficiently. Grace Electrical Services handles wiring installation projects in Hahnville, Louisiana and surrounding communities, working with you to understand the scope and requirements of your project.',
    situations: [
      'New home or building construction requiring full wiring',
      'Home renovations that involve opening walls or adding rooms',
      'Room additions or converted spaces that need new circuits',
      'Garage, workshop, or outdoor structure wiring',
      'Upgrading old wiring during a remodel',
    ],
    whatItInvolves: [
      'Assessing the electrical load requirements for the space',
      'Planning circuit layout and wiring routes',
      'Running cables through walls, ceilings, and conduit',
      'Connecting wiring to outlets, switches, and fixtures',
      'Connecting circuits to the electrical panel',
      'Testing installed wiring for proper function and safety',
    ],
    benefits: [
      'Safe, code-compliant electrical infrastructure',
      'Proper capacity for your current and future needs',
      'Reduced risk of overloaded circuits and electrical hazards',
      'Clean, organized wiring that supports future upgrades',
    ],
    faqs: [
      {
        question: 'What types of wiring installation projects do you handle?',
        answer:
          'We handle wiring for new construction, renovations, room additions, and similar projects. Call us to discuss the specifics of your project so we can determine how to help.',
      },
      {
        question: 'How long does a wiring installation take?',
        answer:
          'The timeline depends on the size and complexity of the project. We can provide a better sense of timing after discussing your project details over the phone.',
      },
    ],
    relatedServices: [
      'electrical-rewiring',
      'outlet-installation',
      'switch-installation',
      'electrical-panel-upgrades',
    ],
  },
  {
    slug: 'electrical-repairs-troubleshooting',
    title: 'Electrical Repairs and Troubleshooting',
    shortTitle: 'Repairs & Troubleshooting',
    description:
      'Diagnosis and repair of common electrical issues including malfunctioning outlets, flickering lights, and circuit problems.',
    heroImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt:
      'Electrician working on a circuit breaker panel with colorful wires',
    icon: 'Wrench',
    longDescription:
      'Electrical problems can range from minor annoyances to serious safety concerns. Flickering lights, outlets that stop working, breakers that trip repeatedly, and unusual sounds or smells from electrical equipment all warrant attention. Grace Electrical Services provides troubleshooting and repair services to diagnose and address electrical issues in homes and businesses throughout the Hahnville area.',
    situations: [
      'Outlets or switches that have stopped working',
      'Lights that flicker, dim, or turn off unexpectedly',
      'Circuit breakers that trip frequently',
      'Burning smell or unusual heat from outlets or switches',
      'Power surges or inconsistent electrical supply',
    ],
    whatItInvolves: [
      'Inspecting the affected circuits and components',
      'Testing wiring, outlets, switches, and panel connections',
      'Identifying the root cause of the problem',
      'Replacing or repairing damaged components',
      'Testing the repair to confirm the issue is resolved',
    ],
    benefits: [
      'Restored safe and reliable electrical function',
      'Identification of underlying causes, not just symptoms',
      'Reduced risk of electrical fire or further damage',
      'Peace of mind knowing the issue was properly diagnosed',
    ],
    faqs: [
      {
        question: 'Can you fix any electrical problem?',
        answer:
          'We diagnose and repair a wide range of common electrical issues. Some problems may require specialized solutions — call us to describe what you are experiencing and we will let you know how we can help.',
      },
      {
        question: 'Is a flickering light always a serious problem?',
        answer:
          'Not always, but flickering can indicate a loose connection, a failing fixture, or a circuit issue. It is best to have it checked to rule out any safety concerns.',
      },
    ],
    relatedServices: [
      'electrical-panel-repair',
      'outlet-installation',
      'switch-installation',
      'electrical-rewiring',
    ],
  },
  {
    slug: 'outlet-installation',
    title: 'Outlet Installation',
    shortTitle: 'Outlet Installation',
    description:
      'Installation of new electrical outlets and replacement of old or damaged outlets for homes and businesses.',
    heroImage:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt: 'Gloved hands using a drill to install a power outlet on a wall',
    icon: 'Plug',
    longDescription:
      'Whether you need additional outlets for convenience, are replacing old two-prong outlets with grounded ones, or need GFCI outlets in kitchens and bathrooms, outlet installation is a common electrical service. Grace Electrical Services installs and replaces outlets for residential and commercial properties in Hahnville and nearby areas.',
    situations: [
      'Not having enough outlets and relying on extension cords',
      'Replacing old, worn, or damaged outlets',
      'Upgrading to GFCI or AFCI outlets in kitchens, baths, and outdoors',
      'Adding outlets for new appliances or electronics',
      'Outlets that are loose, sparking, or discolored',
    ],
    whatItInvolves: [
      'Assessing the location and existing wiring',
      'Selecting the appropriate outlet type for the application',
      'Running new wiring if needed for new outlet locations',
      'Installing and securing the outlet box and receptacle',
      'Testing the outlet for proper voltage and grounding',
    ],
    benefits: [
      'Convenient access to power where you need it',
      'Improved safety with properly grounded, code-compliant outlets',
      'Reduced reliance on extension cords and power strips',
      'GFCI protection in wet or damp areas',
    ],
    faqs: [
      {
        question: 'What is a GFCI outlet and do I need one?',
        answer:
          'A GFCI (ground fault circuit interrupter) outlet shuts off power if it detects an imbalance, providing important protection in wet areas. They are typically required in kitchens, bathrooms, garages, and outdoor locations.',
      },
      {
        question: 'Can you add an outlet anywhere I want?',
        answer:
          'In most cases, yes. We will assess the location and existing wiring to determine the best approach. Call us to discuss where you need an outlet.',
      },
    ],
    relatedServices: [
      'switch-installation',
      'electrical-wiring-installation',
      'electrical-repairs-troubleshooting',
    ],
  },
  {
    slug: 'switch-installation',
    title: 'Switch Installation',
    shortTitle: 'Switch Installation',
    description:
      'Installation and replacement of light switches, dimmer switches, and smart switches for residential and commercial properties.',
    heroImage:
      'https://images.pexels.com/photos/12996907/pexels-photo-12996907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt: 'White electrical rocker switches on a textured stone wall',
    icon: 'ToggleRight',
    longDescription:
      'Switch installation covers everything from replacing a faulty light switch to installing dimmer switches for ambiance or smart switches for added convenience. Grace Electrical Services installs and replaces switches for homes and businesses in Hahnville, Louisiana and surrounding areas.',
    situations: [
      'Replacing a switch that is not working properly',
      'Installing dimmer switches for adjustable lighting',
      'Upgrading to smart or programmable switches',
      'Adding a switch in a new location',
      'Converting a single switch to a three-way configuration',
    ],
    whatItInvolves: [
      'Assessing the existing wiring and switch box',
      'Selecting the correct switch type for the circuit',
      'Disconnecting and removing the old switch',
      'Wiring and securing the new switch',
      'Testing for proper operation',
    ],
    benefits: [
      'Reliable, responsive switch operation',
      'Improved lighting control and ambiance with dimmers',
      'Updated look and feel for your space',
      'Proper wiring connections for safety',
    ],
    faqs: [
      {
        question: 'Can you install a dimmer on any light fixture?',
        answer:
          'Dimmer compatibility depends on the type of fixture and bulbs being used. We can assess your setup and recommend the right dimmer switch for your needs.',
      },
      {
        question: 'Do you install smart switches?',
        answer:
          'Yes, we can install smart and programmable switches. Call to discuss the specific switch you have in mind and we will confirm compatibility.',
      },
    ],
    relatedServices: [
      'outlet-installation',
      'lighting-installation',
      'electrical-wiring-installation',
    ],
  },
  {
    slug: 'electrical-panel-repair',
    title: 'Electrical Panel Repair',
    shortTitle: 'Panel Repair',
    description:
      'Inspection and repair of electrical panel issues including breaker problems, loose connections, and panel maintenance.',
    heroImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt:
      'Electrician examining a residential fuse box for electrical safety',
    icon: 'ShieldAlert',
    longDescription:
      'The electrical panel is the central hub that distributes power throughout your home or business. Panel problems — such as breakers that will not stay reset, warm or buzzing panels, corrosion, or outdated components — should be assessed promptly. Grace Electrical Services provides electrical panel inspection and repair for properties in Hahnville and nearby communities.',
    situations: [
      'Breakers that trip frequently or will not reset',
      'Panel feels warm to the touch or makes buzzing sounds',
      'Burning smell near the panel',
      'Outdated or corroded panel components',
      'Inconsistent power distribution across circuits',
    ],
    whatItInvolves: [
      'Visually inspecting the panel and internal components',
      'Testing breakers and connections',
      'Tightening loose connections',
      'Replacing damaged or worn breakers',
      'Assessing whether a panel upgrade is needed',
    ],
    benefits: [
      'Safe, reliable power distribution',
      'Reduced fire risk from loose or corroded connections',
      'Properly functioning circuit protection',
      'Professional assessment of whether repair or replacement is needed',
    ],
    faqs: [
      {
        question: 'How do I know if my panel needs repair or replacement?',
        answer:
          'Signs like frequent breaker trips, warmth, buzzing, or visible damage suggest a problem. We can inspect your panel and advise whether a repair is sufficient or if an upgrade is recommended.',
      },
      {
        question: 'Is it safe to reset a tripped breaker myself?',
        answer:
          'Resetting a tripped breaker is generally safe, but if it trips again immediately, do not keep resetting it. Call us to diagnose the underlying cause.',
      },
    ],
    relatedServices: [
      'electrical-panel-upgrades',
      'electrical-repairs-troubleshooting',
      'electrical-wiring-installation',
    ],
  },
  {
    slug: 'electrical-panel-upgrades',
    title: 'Electrical Panel Upgrades',
    shortTitle: 'Panel Upgrades',
    description:
      'Upgrading electrical panels to increase capacity, improve safety, and meet the demands of modern homes and businesses.',
    heroImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt:
      'Close-up of an organized circuit breaker panel with color-coded wiring',
    icon: 'Zap',
    longDescription:
      'An electrical panel upgrade replaces an older or undersized panel with a new one that provides more capacity and modern safety features. If your home or business has added appliances, an addition, or EV charging, your existing panel may no longer have enough capacity. Grace Electrical Services handles panel upgrades for properties in Hahnville and surrounding areas.',
    situations: [
      'Your panel does not have enough breaker slots for new circuits',
      'Adding large appliances, an addition, or EV charging',
      'Older home with a fuse box or low-amp panel',
      'Flickering lights or tripped breakers when running multiple devices',
      'Panel is outdated or no longer meets current electrical codes',
    ],
    whatItInvolves: [
      'Assessing current and future electrical load requirements',
      'Selecting an appropriately sized panel',
      'Removing the old panel and installing the new one',
      'Transferring and reorganizing circuits',
      'Installing new breakers and labeling all circuits',
      'Testing the new panel for proper function',
    ],
    benefits: [
      'Increased electrical capacity for modern demands',
      'Improved safety with modern breaker technology',
      'Enough circuits for future additions or upgrades',
      'Compliance with current electrical codes',
    ],
    faqs: [
      {
        question: 'How do I know if I need a panel upgrade?',
        answer:
          'If your panel is over 20 years old, does not have enough space for new circuits, or you are experiencing tripped breakers when running multiple devices, an upgrade may be needed. Call us to discuss your situation.',
      },
      {
        question: 'How long does a panel upgrade take?',
        answer:
          'Most panel upgrades are completed in a day. We can give you a better estimate after understanding your specific setup.',
      },
    ],
    relatedServices: [
      'electrical-panel-repair',
      'electrical-wiring-installation',
      'electrical-rewiring',
    ],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortTitle: 'Lighting Installation',
    description:
      'Installation of indoor and outdoor lighting including recessed lighting, fixtures, landscape lighting, and more.',
    heroImage:
      'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt: 'Person screwing a light bulb into a new lamp during renovation',
    icon: 'Lightbulb',
    longDescription:
      'Lighting installation covers a wide range of indoor and outdoor projects — from recessed lighting and ceiling fixtures to landscape and security lighting. Grace Electrical Services installs lighting for residential and commercial properties in Hahnville, Louisiana and surrounding communities.',
    situations: [
      'Installing recessed or can lighting in ceilings',
      'Adding ceiling fans with integrated lighting',
      'Outdoor landscape and pathway lighting',
      'Security and motion-activated lighting',
      'Replacing outdated fixtures with modern ones',
    ],
    whatItInvolves: [
      'Assessing the fixture type and installation location',
      'Running wiring to the fixture location if needed',
      'Installing junction boxes and mounting hardware',
      'Connecting and securing the fixture',
      'Installing bulbs and testing operation',
    ],
    benefits: [
      'Enhanced aesthetics and functionality of your space',
      'Energy-efficient lighting options',
      'Improved safety and security with outdoor lighting',
      'Professional installation for long-lasting performance',
    ],
    faqs: [
      {
        question: 'Can you install outdoor lighting?',
        answer:
          'Yes, we install outdoor and landscape lighting. Call to describe what you have in mind and we will discuss the options.',
      },
      {
        question: 'Do you install recessed lighting in existing ceilings?',
        answer:
          'Yes, we can install recessed lighting in both new and existing ceilings. The process may involve accessing the ceiling space above. Call us to discuss your space.',
      },
    ],
    relatedServices: [
      'switch-installation',
      'electrical-wiring-installation',
      'outlet-installation',
    ],
  },
  {
    slug: 'electrical-rewiring',
    title: 'Electrical Rewiring',
    shortTitle: 'Rewiring',
    description:
      'Complete or partial rewiring of homes and businesses to replace aging, damaged, or unsafe electrical wiring.',
    heroImage:
      'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt:
      'Exposed electrical wiring being installed during home renovation',
    icon: 'Cable',
    longDescription:
      'Electrical rewiring involves replacing old or damaged wiring throughout a home or building. Older properties may have wiring that has degraded over time, does not meet current safety standards, or cannot support modern electrical demands. Grace Electrical Services handles rewiring projects for properties in Hahnville and nearby areas.',
    situations: [
      'Older home with aging or degraded wiring',
      'Wiring that does not support modern electrical loads',
      'Damaged wiring from renovation, pests, or water exposure',
      'Frequent electrical issues that suggest systemic wiring problems',
      'Upgrading ungrounded wiring to grounded circuits',
    ],
    whatItInvolves: [
      'Assessing the existing wiring throughout the property',
      'Planning the rewiring approach to minimize disruption',
      'Removing old wiring where accessible',
      'Running new wiring through walls, ceilings, and crawl spaces',
      'Updating outlets, switches, and panel connections',
      'Testing the new wiring system for safety and function',
    ],
    benefits: [
      'Safe, modern wiring that meets current codes',
      'Proper grounding throughout the property',
      'Increased capacity for modern electrical demands',
      'Reduced risk of electrical fire and equipment damage',
    ],
    faqs: [
      {
        question: 'How do I know if my home needs rewiring?',
        answer:
          'Signs include frequently tripped breakers, flickering lights, discolored outlets, or a home that is more than 40 years old with original wiring. Call us to discuss what you are experiencing.',
      },
      {
        question: 'Does rewiring require opening all my walls?',
        answer:
          'Not always. We plan rewiring to minimize disruption and access wiring through attics, crawl spaces, and other routes where possible. The extent depends on your home\'s layout.',
      },
    ],
    relatedServices: [
      'electrical-wiring-installation',
      'electrical-panel-upgrades',
      'outlet-installation',
    ],
  },
  {
    slug: 'residential-electrical-services',
    title: 'Residential Electrical Services',
    shortTitle: 'Residential Services',
    description:
      'Electrical services for homes in Hahnville and nearby areas including wiring, repairs, installations, and upgrades.',
    heroImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt: 'Exposed electrical wiring in wall sockets ready for installation',
    icon: 'Home',
    longDescription:
      'Grace Electrical Services provides a range of electrical services for homeowners in Hahnville, Louisiana and surrounding communities. From wiring installation and repairs to outlet and switch replacement, panel upgrades, and lighting installation, we work with homeowners to address their electrical needs.',
    situations: [
      'New construction or renovation wiring',
      'Repairing malfunctioning outlets, switches, or fixtures',
      'Upgrading an electrical panel for more capacity',
      'Installing new lighting or ceiling fans',
      'Whole-home rewiring for older properties',
    ],
    whatItInvolves: [
      'Discussing your project and electrical needs',
      'Assessing the property and existing electrical system',
      'Planning the work to fit your home and budget',
      'Performing installations, repairs, or upgrades',
      'Testing all work for safety and proper function',
    ],
    benefits: [
      'Safe, code-compliant electrical work for your home',
      'Improved comfort, convenience, and property value',
      'Professional assessment of your electrical system',
      'A single point of contact for your electrical needs',
    ],
    faqs: [
      {
        question: 'What residential electrical services do you offer?',
        answer:
          'We offer wiring installation, repairs, troubleshooting, outlet and switch installation, panel repair and upgrades, lighting installation, and rewiring for homes. Call us to discuss your specific needs.',
      },
      {
        question: 'Do you work on older homes?',
        answer:
          'Yes, we work on homes of all ages, including those that need rewiring or panel upgrades. Call us to discuss your home\'s electrical system.',
      },
    ],
    relatedServices: [
      'electrical-wiring-installation',
      'electrical-repairs-troubleshooting',
      'lighting-installation',
      'electrical-panel-upgrades',
    ],
  },
  {
    slug: 'commercial-electrical-services',
    title: 'Commercial Electrical Services',
    shortTitle: 'Commercial Services',
    description:
      'Electrical services for commercial properties including wiring, repairs, panel work, and lighting installation.',
    heroImage:
      'https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heroAlt:
      'Construction worker installing electrical cables on a commercial site',
    icon: 'Building2',
    longDescription:
      'Grace Electrical Services provides electrical services for commercial properties in Hahnville, Louisiana and nearby areas. From wiring and lighting installation to panel upgrades and repairs, we work with business owners and property managers to address their commercial electrical needs.',
    situations: [
      'Tenant build-outs and office renovations',
      'Commercial lighting installation and repair',
      'Panel upgrades for increased electrical capacity',
      'Outlet and wiring installations for new equipment',
      'Troubleshooting and repair of commercial electrical issues',
    ],
    whatItInvolves: [
      'Understanding the commercial property and its electrical requirements',
      'Planning work to minimize disruption to business operations',
      'Performing installations, repairs, or upgrades',
      'Coordinating with other contractors when needed',
      'Testing all work for safety and compliance',
    ],
    benefits: [
      'Safe, reliable electrical systems for your business',
      'Minimized downtime with efficient work scheduling',
      'Professional installation that meets commercial codes',
      'Support for business growth and equipment additions',
    ],
    faqs: [
      {
        question: 'What types of commercial properties do you work on?',
        answer:
          'We work on a range of commercial properties including offices, retail spaces, and small commercial buildings. Call us to discuss your specific property and needs.',
      },
      {
        question: 'Can you work around our business hours?',
        answer:
          'We understand that business operations need to continue. Call us to discuss scheduling that works for your business.',
      },
    ],
    relatedServices: [
      'electrical-wiring-installation',
      'electrical-panel-upgrades',
      'lighting-installation',
      'electrical-repairs-troubleshooting',
    ],
  },
];

export type ServiceAreaInfo = {
  slug: string;
  city: string;
  state: string;
  description: string;
  nearLandmark: string;
};

export const SERVICE_AREAS: ServiceAreaInfo[] = [
  {
    slug: 'hahnville-la',
    city: 'Hahnville',
    state: 'LA',
    description:
      'Hahnville is the primary location for Grace Electrical Services. We provide electrical wiring installation, repairs, panel work, lighting, and other electrical services to homes and businesses throughout Hahnville, Louisiana.',
    nearLandmark: 'the Mississippi River corridor in St. Charles Parish',
  },
  {
    slug: 'luling-la',
    city: 'Luling',
    state: 'LA',
    description:
      'Luling is located just a few miles from Hahnville along the Mississippi River. Grace Electrical Services provides electrical services to homes and businesses in Luling, Louisiana, including wiring installation, repairs, panel work, and lighting.',
    nearLandmark: 'the Mississippi River in St. Charles Parish, near Hahnville',
  },
  {
    slug: 'destrehan-la',
    city: 'Destrehan',
    state: 'LA',
    description:
      'Destrehan is a nearby community in St. Charles Parish, close to Hahnville. Grace Electrical Services offers electrical wiring installation, repairs, panel upgrades, and lighting services to properties in Destrehan, Louisiana.',
    nearLandmark: 'St. Charles Parish, a short drive from Hahnville',
  },
  {
    slug: 'norco-la',
    city: 'Norco',
    state: 'LA',
    description:
      'Norco is a community in St. Charles Parish near Hahnville. Grace Electrical Services provides electrical services including wiring, repairs, outlet and switch installation, and panel work to Norco residents and businesses.',
    nearLandmark: 'St. Charles Parish along the Mississippi River',
  },
  {
    slug: 'boutte-la',
    city: 'Boutte',
    state: 'LA',
    description:
      'Boutte is a community in St. Charles Parish near Hahnville. Grace Electrical Services offers electrical wiring, repairs, lighting installation, and panel services to homes and businesses in Boutte, Louisiana.',
    nearLandmark: 'St. Charles Parish, west of Hahnville',
  },
  {
    slug: 'paradis-la',
    city: 'Paradis',
    state: 'LA',
    description:
      'Paradis is a small community in St. Charles Parish near Boutte and Hahnville. Grace Electrical Services provides electrical services to homes and businesses in Paradis, including wiring, repairs, and lighting.',
    nearLandmark: 'St. Charles Parish, near Boutte',
  },
  {
    slug: 'st-rose-la',
    city: 'St. Rose',
    state: 'LA',
    description:
      'St. Rose is a community in St. Charles Parish along the Mississippi River. Grace Electrical Services offers electrical wiring installation, repairs, panel work, and lighting to properties in St. Rose, Louisiana.',
    nearLandmark: 'St. Charles Parish, along the river corridor',
  },
  {
    slug: 'new-sarpy-la',
    city: 'New Sarpy',
    state: 'LA',
    description:
      'New Sarpy is a community in St. Charles Parish near Norco and Hahnville. Grace Electrical Services provides electrical services to New Sarpy residents and businesses, including wiring, repairs, and lighting installation.',
    nearLandmark: 'St. Charles Parish, near Norco',
  },
  {
    slug: 'ama-la',
    city: 'Ama',
    state: 'LA',
    description:
      'Ama is a community in St. Charles Parish along the Mississippi River near Hahnville. Grace Electrical Services offers electrical wiring, repairs, panel work, and lighting services to homes and businesses in Ama, Louisiana.',
    nearLandmark: 'St. Charles Parish, along the river from Hahnville',
  },
  {
    slug: 'montz-la',
    city: 'Montz',
    state: 'LA',
    description:
      'Montz is a community in St. Charles Parish near Norco and Hahnville. Grace Electrical Services provides electrical services including wiring installation, repairs, outlet and switch work, and lighting to Montz properties.',
    nearLandmark: 'St. Charles Parish, near Norco and Hahnville',
  },
];

export type FAQItem = { question: string; answer: string };

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'What electrical services does Grace Electrical Services offer?',
    answer:
      'Grace Electrical Services offers electrical wiring installation, electrical repairs and troubleshooting, outlet installation, switch installation, electrical panel repair and upgrades, lighting installation, electrical rewiring, and residential and commercial electrical services. Call 504-559-5351 to discuss your specific needs.',
  },
  {
    question: 'Do you provide electrical wiring installation?',
    answer:
      'Yes, electrical wiring installation is a primary service we offer. We handle wiring for new construction, renovations, room additions, and similar projects. Call us to discuss your wiring project.',
  },
  {
    question: 'Can I call to discuss an electrical repair?',
    answer:
      'Absolutely. Call 504-559-5351 to describe the electrical issue you are experiencing. We can discuss the problem and determine how to help.',
  },
  {
    question:
      'What information should I provide when describing an electrical problem?',
    answer:
      'It helps to describe what is happening, when it started, which circuits or areas are affected, and whether anything has changed recently (new appliances, renovations, storms). The more detail you provide, the better we can assess the situation.',
  },
  {
    question: 'Do you serve areas near Hahnville, Louisiana?',
    answer:
      'Yes, in addition to Hahnville, we serve surrounding communities in St. Charles Parish including Luling, Destrehan, Norco, Boutte, Paradis, St. Rose, New Sarpy, Ama, and Montz. Call to confirm we serve your specific location.',
  },
  {
    question: 'How can I contact Grace Electrical Services?',
    answer:
      'The best way to reach us is by phone at 504-559-5351. You can also visit our contact page for our location and a map.',
  },
  {
    question: 'Do you work on both residential and commercial properties?',
    answer:
      'Yes, we provide electrical services for both residential and commercial properties. Call us to discuss your property and project.',
  },
  {
    question: 'How do I know if I need an electrical panel upgrade?',
    answer:
      'Signs include frequently tripped breakers, a panel that feels warm or makes buzzing sounds, not enough breaker slots for new circuits, or an older panel that may not meet current electrical codes. Call us to discuss your situation.',
  },
];
