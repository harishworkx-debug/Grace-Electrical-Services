export type GuideArticle = {
  id: string;
  category: 'Safety & Warnings' | 'Older Homes & Rewiring' | 'Troubleshooting' | 'Planning & Code' | 'Real Case Studies';
  title: string;
  summary: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    paragraphs: string[];
  }[];
  caseStudies?: {
    client: string;
    location: string;
    issue: string;
    workUndertaken: string;
    result: string;
  }[];
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  secondaryServiceSlug?: string;
  secondaryServiceTitle?: string;
};

export const GUIDES_AND_CASE_STUDIES: GuideArticle[] = [
  {
    id: 'warning-signs-panel-assessment',
    category: 'Safety & Warnings',
    title: 'Warning Signs That an Electrical Panel Needs Professional Assessment',
    summary:
      'Humming noises, breakers that trip repeatedly, warm panel doors, and burn marks: learn the subtle warning signs of internal panel arcing and when an emergency inspection is required.',
    readTime: '5 min read',
    author: 'Rodney (Master Electrician)',
    date: 'Updated for 2026',
    image:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Electrician inspecting residential circuit breaker panel bus bars in Hahnville, LA',
    keyTakeaways: [
      'Circuit breaker panels should operate in complete silence; buzzing or clicking indicates dangerous electrical arcing.',
      'Never remove the dead-front metal cover yourselfâ€”240V main service lugs remain energized even with the main breaker off.',
      'Frequent tripping means a circuit is carrying near or above its maximum continuous load, or a breaker mechanism has weakened.',
      'Obsolete panels like Federal Pacific Electric (Stab-Lok) or Zinsco have documented failure rates and require complete replacement.',
    ],
    contentSections: [
      {
        heading: 'Why Electrical Panels Degrade Over Time',
        paragraphs: [
          'Your electrical panel handles thousands of kilowatt-hours of electrical current each month. In South Louisiana, extreme summer humidity, seasonal temperature shifts, and heavy electrical demand from air conditioning accelerate oxidation on copper and aluminum bus bars.',
          'Over decades, thermal expansion and contraction loosen terminal connections. Loose terminal screws create electrical resistance, which generates heat, which further loosens the connectionâ€”a destructive cycle that can ignite surrounding wall framing.',
        ],
      },
      {
        heading: 'Crucial Warning Signs Every Homeowner Should Watch For',
        paragraphs: [
          '1. Audible Buzzing or Humming: Breakers contain bimetallic strips and electromagnetic coils. When you hear a faint buzzing or sizzle, current is actively jumping (arcing) between the breaker clip and the bus bar.',
          '2. Warm Wall or Panel Surfaces: While transformers generate mild heat, a breaker switch or panel cover that feels noticeably warm to the touch is carrying dangerously excessive resistance.',
          '3. Rust or Moisture Discoloration: Humidity along the Mississippi River corridor frequently condenses inside unsealed exterior meter sockets and trickles down service cables into the main panel, corroding neutral bars.',
          '4. Faint Odor of Burning Plastic or Fishy Smells: Overheated wire insulation and breaker phenolic casing emit a distinctive chemical odor when melting.',
        ],
      },
      {
        heading: 'Safe Next Steps: What You Should and Should NOT Do',
        paragraphs: [
          'If you notice any of these signs, switch off the affected branch circuit breaker immediately. NEVER attempt to force a tripped breaker into the ON position if it immediately clicks back to centerâ€”forcing a tripped breaker overrides its internal safety trip latch and creates an immediate fire hazard.',
          'CRITICAL SAFETY WARNING: Under no circumstances should a homeowner unscrew and remove the dead-front protective cover of an electrical panel. The main service entrance cables connected to the top lugs carry 240 volts of unfused utility current directly from Entergy and can cause fatal electrocution or an arc-flash explosion.',
        ],
      },
    ],
    relatedServiceSlug: 'electrical-panel-repair-hahnville-la',
    relatedServiceTitle: 'Electrical Panel Repair in Hahnville, LA',
    secondaryServiceSlug: 'electrical-panel-upgrades-hahnville-la',
    secondaryServiceTitle: '200A Electrical Panel Upgrades',
  },
  {
    id: 'when-to-inspect-older-home-wiring',
    category: 'Older Homes & Rewiring',
    title: 'When Older-Home Wiring Should Be Inspected: Cloth Wiring & Ungrounded Circuits',
    summary:
      'Living in a historic or mid-century home in St. Charles Parish? Learn how cloth insulation flakes, why ungrounded two-prong outlets pose shock risks, and what a comprehensive wiring assessment involves.',
    readTime: '6 min read',
    author: 'Rodney (Master Electrician)',
    date: 'Updated for 2026',
    image:
      'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Electrician pulling modern copper Romex cables during older home rewiring in Hahnville, LA',
    keyTakeaways: [
      'Homes built before 1970 often contain cloth-jacketed wiring with vulcanized rubber insulation that turns brittle and crumbles inside wall cavities.',
      'Two-prong outlets indicate the absence of an equipment grounding conductor, exposing sensitive computers and appliances to surge damage.',
      'Partial rewiring (focusing on high-draw kitchens and bathrooms first) is a practical, cost-effective way to modernize living safety.',
      'Modern rewiring can be accomplished through attic and crawl-space wire fishing with minimal sheetrock or plaster cutting.',
    ],
    contentSections: [
      {
        heading: 'The Hidden Risks Behind Older Home Walls',
        paragraphs: [
          'Many beautiful homes throughout Hahnville, Norco, and historic St. Charles Parish communities were constructed 40 to 70 years ago. While the architecture and hardwood framing are remarkably durable, the original electrical infrastructure was designed for a world before microwaves, computers, central air conditioning, and electric vehicles.',
          'Vintage cloth-sheathed wiring utilized natural rubber insulation wrapped in cotton braid. Over decades of heat and current flow, this rubber dries out, becoming so brittle that minor vibrations cause it to flake off, leaving exposed bare conductors inside wooden wall cavities.',
        ],
      },
      {
        heading: 'When Should You Schedule an In-Home Wiring Inspection?',
        paragraphs: [
          'You should have your home wiring professionally inspected if: (1) Your home has two-prong outlets in any living area, (2) Outlets spark or show black carbon soot when appliances are plugged in, (3) Breakers or fuses trip when running a hair dryer and space heater simultaneously, (4) You are planning a kitchen or bathroom renovation, or (5) Your homeowner insurance policy requires a 4-point inspection or code certification.',
          'Insurance underwriters in Louisiana are increasingly refusing coverage or adding massive surcharges on properties containing active knob-and-tube or ungrounded cloth branch circuits.',
        ],
      },
      {
        heading: 'Non-Destructive Wire Fishing: How Modern Rewiring Works',
        paragraphs: [
          'A common misconception is that rewiring an older home requires gutting all your walls. In reality, an experienced electrician uses specialized fiberglass fish rods, flexible drill bits, and access through attics, crawl spaces, and baseboards to pull fresh non-metallic sheathed copper (NM-B Romex) conductors with minimal wall incisions.',
          'We also offer phased rewiringâ€”upgrading critical high-amperage areas like kitchens, bathrooms, and laundry rooms first to fit your familyâ€™s budget and schedule.',
        ],
      },
    ],
    relatedServiceSlug: 'electrical-rewiring-hahnville-la',
    relatedServiceTitle: 'Electrical Rewiring Services in Hahnville, LA',
    secondaryServiceSlug: 'outlet-installation-hahnville-la',
    secondaryServiceTitle: 'Tamper-Resistant Outlet Installation',
  },
  {
    id: 'breaker-problem-vs-electrical-fault',
    category: 'Troubleshooting',
    title: 'The Difference Between a Breaker Problem and a Wider Electrical Fault',
    summary:
      'Is your breaker tripping because the switch itself has weakened, or is there a dangerous short circuit or loose neutral wire down the line? How root-cause diagnostics protect your home.',
    readTime: '4 min read',
    author: 'Rodney (Master Electrician)',
    date: 'Updated for 2026',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Electrician performing root-cause multi-meter troubleshooting in Hahnville, LA',
    keyTakeaways: [
      'Circuit breakers are mechanical safety switches designed to trip under thermal overload or magnetic short circuits.',
      'A breaker that trips immediately upon reset indicates a dead short circuit, ground fault, or bad internal mechanism.',
      'A breaker that trips after 10 to 30 minutes usually indicates an overloaded branch circuit carrying more amps than rated.',
      'Never replace a 15-amp breaker with a 20-amp breaker to stop trippingâ€”this forces wall wiring to overheat and causes house fires.',
    ],
    contentSections: [
      {
        heading: 'How a Circuit Breaker Actually Protects Your Home',
        paragraphs: [
          'A circuit breaker has two independent trip mechanisms: a bimetallic strip that bends under continuous heat (protecting against slow overloads) and an electromagnet that trips instantly when an immense surge of current occurs (protecting against dead short circuits).',
          'When a breaker trips, it is performing its primary life-safety job: cutting power before conductors behind your walls get hot enough to ignite wood framing or insulation.',
        ],
      },
      {
        heading: 'Breaker Failure vs. Downstream Circuit Faults',
        paragraphs: [
          'Symptoms of a Bad Breaker: If you unplug every appliance on the circuit and the breaker still trips with zero load, or if the switch handle feels spongy and refuses to click firmly into the ON position, the breakerâ€™s internal mechanical spring has likely failed and requires replacement.',
          'Symptoms of a Downstream Short Circuit: If the breaker trips instantaneously with an audible "pop" or flash, an ungrounded hot wire is touching a neutral wire or metal electrical box somewhere along the circuit path.',
          'Symptoms of an Overload: If the circuit operates normally for 15 minutes while running a refrigerator and microwave together before tripping, the cumulative current draw exceeds the 15A or 20A branch rating.',
        ],
      },
      {
        heading: 'Safe Homeowner Troubleshooting Protocol',
        paragraphs: [
          'Step 1: Unplug all appliances and turn off all wall switches powered by that circuit.',
          'Step 2: Firmly push the breaker switch all the way to OFF until it clicks, then push it to ON.',
          'Step 3: If it holds, plug in appliances one by one to identify which device triggers the trip.',
          'Step 4: If the breaker trips immediately with nothing plugged in, leave it OFF and call Rodney at 504-534-9620 for systematic multi-meter diagnostic testing.',
        ],
      },
    ],
    relatedServiceSlug: 'electrical-repairs-troubleshooting-hahnville-la',
    relatedServiceTitle: 'Electrical Repairs & Troubleshooting in Hahnville, LA',
    secondaryServiceSlug: 'electrical-panel-repair-hahnville-la',
    secondaryServiceTitle: 'Electrical Panel Repair Services',
  },
  {
    id: 'what-to-know-before-outlets-and-lighting',
    category: 'Planning & Code',
    title: 'What Homeowners Should Know Before Installing New Outlets or Lighting',
    summary:
      'Planning new recessed lights, ceiling fans, or outdoor outlets? Essential insights on box cubic volume, LED trailing-edge dimmers, structural fan braces, and outdoor GFCI bubble covers.',
    readTime: '5 min read',
    author: 'Rodney (Master Electrician)',
    date: 'Updated for 2026',
    image:
      'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Recessed ceiling lighting and fan installation in renovated home',
    keyTakeaways: [
      'Standard plastic ceiling electrical boxes are only rated for 35 lbs of static weight and MUST be replaced with UL-listed metal fan braces for ceiling fans.',
      'LED bulbs require trailing-edge digital dimmers; older incandescent dimmers cause annoying buzzing, flickering, and premature driver failure.',
      'Outdoor receptacles in Louisiana require weatherproof in-use "bubble covers" that keep rain out even while cords remain plugged in.',
      'All newly installed receptacles in homes must be Tamper-Resistant (TR) to protect children from accidental electric shock.',
    ],
    contentSections: [
      {
        heading: 'Ceiling Fan Support: The Crucial Mistake Many Homeowners Make',
        paragraphs: [
          'Many DIYers make the dangerous assumption that any existing ceiling light box can hold a new ceiling fan. Standard round junction boxes are held by two small drywall screws and are only rated for static, non-moving light fixtures.',
          'Ceiling fans produce rotational vibration and dynamic torque. Mounting a fan to a standard box inevitably leads to loosening, ceiling sheetrock cracking, and potentially catastrophic falling accidents. We install heavy-duty metal fan braces bolted securely between structural joists.',
        ],
      },
      {
        heading: 'Why Do LED Dimmers Buzz or Flicker?',
        paragraphs: [
          'If you recently installed LED bulbs and your switch makes a buzzing sound or the lights strobe at low levels, the issue is dimmer incompatibility. Traditional dimmers chopped AC voltage for resistive incandescent filaments.',
          'LED fixtures utilize electronic solid-state drivers. Pairing them requires a modern trailing-edge or electronic low-voltage (ELV) dimmer with an adjustable low-end trim potentiometer to calibrate smooth, silent illumination.',
        ],
      },
      {
        heading: 'Ground-Fault Circuit Interrupters (GFCI) & Tamper-Resistant Standards',
        paragraphs: [
          'Under current National Electrical Code (NEC) rules, GFCI protection is mandatory in kitchens, bathrooms, laundry rooms, garages, crawl spaces, and all exterior receptacles. GFCIs monitor current balance between hot and neutral wires, cutting power in 1/40th of a second if current leaks toward earth ground.',
          'Furthermore, modern codes require tamper-resistant shutters inside all 15A and 20A receptacles, preventing young children from inserting keys, paperclips, or hairpins.',
        ],
      },
    ],
    relatedServiceSlug: 'lighting-installation-hahnville-la',
    relatedServiceTitle: 'Lighting Installation in Hahnville, LA',
    secondaryServiceSlug: 'outlet-installation-hahnville-la',
    secondaryServiceTitle: 'Outlet Installation Services',
  },
  {
    id: 'how-to-prepare-for-wiring-installation',
    category: 'Planning & Code',
    title: 'How to Prepare for an Electrical Wiring Installation in Hahnville',
    summary:
      'Planning a room addition, workshop, or full electrical upgrade? Here is how to plan circuit routing, calculate demand loads, coordinate parish permits, and prepare your living space.',
    readTime: '5 min read',
    author: 'Rodney (Master Electrician)',
    date: 'Updated for 2026',
    image:
      'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Electrician reviewing blueprint layout and electrical wiring plan in Hahnville, LA',
    keyTakeaways: [
      'Accurate demand load calculations per NEC Article 220 prevent panel overloads before any cable is pulled.',
      'Major structural wiring, service upgrades, and additions require St. Charles Parish building permits and inspection sign-offs.',
      'Clearing a 3-foot radius around electrical panels and attic scuttle access paths saves substantial installation time.',
      'Planning dedicated appliance circuits during the rough-in stage avoids costly retrofits and drywall patching later.',
    ],
    contentSections: [
      {
        heading: 'Step 1: Calculating Your Household Electrical Load',
        paragraphs: [
          'Before running a single wire, Rodney calculates your propertyâ€™s total connected load. We add up general lighting loads (3 volt-amps per square foot), dedicated small appliance branch circuits (minimum two 20A kitchen circuits), laundry circuits, and dedicated high-draw appliance loads (AC compressor, water heater, range, dryer, EV charger).',
          'This ensures your main breaker panel and incoming utility service conductors have sufficient ampacity to power your lifestyle without tripping.',
        ],
      },
      {
        heading: 'Step 2: St. Charles Parish Permitting & Utility Coordination',
        paragraphs: [
          'Structural wiring projects and service upgrades require electrical permits from the St. Charles Parish Department of Planning & Zoning in Hahnville. As a licensed professional, Grace Electrical Services files all documentation, coordinates service disconnects and reconnects directly with Entergy, and attends municipal inspections.',
          'Having work permitted and inspected protects your propertyâ€™s resale value and guarantees compliance with homeowner insurance underwriting guidelines.',
        ],
      },
      {
        heading: 'Step 3: Preparing Your Home for Installation Day',
        paragraphs: [
          'Homeowners can help ensure a smooth installation by: (1) Clearing furniture and storage items within 36 inches in front of your electrical panel, (2) Providing clear access to your attic ladder or crawl-space hatch, and (3) Securing household pets in a quiet room.',
          'Rodney provides clear communication regarding any temporary power shutoffs so your daily family routines or remote work are not disrupted.',
        ],
      },
    ],
    relatedServiceSlug: 'electrical-wiring-installation-hahnville-la',
    relatedServiceTitle: 'Electrical Wiring Installation in Hahnville, LA',
    secondaryServiceSlug: 'electrical-panel-upgrades-hahnville-la',
    secondaryServiceTitle: '200A Electrical Panel Upgrades',
  },
  {
    id: 'real-project-case-studies',
    category: 'Real Case Studies',
    title: 'Real Project Case Studies: Issue, Work Undertaken & Verifiable Results',
    summary:
      'Explore real-world case studies demonstrating Rodneyâ€™s systematic diagnostics, whole-house construction wiring, and structural ceiling fan installations across St. Charles Parish.',
    readTime: '6 min read',
    author: 'Rodney (Master Electrician)',
    date: 'Verified Real Projects',
    image:
      'https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Electrician completing code-compliant electrical work in St. Charles Parish, LA',
    keyTakeaways: [
      'Real case studies illustrate how systematic meter diagnostics locate hidden arcing faults that big corporate companies overlook.',
      'Direct owner-operator execution ensures zero corner-cutting on wire torquing, structural bracing, and cleanup.',
      'Verified customer reviews from Abu, Anthony, Rhodes, and Barbara Manuel confirm transparent pricing and on-time arrival.',
    ],
    contentSections: [
      {
        heading: 'Demonstrating Experience, Workmanship & Value Across St. Charles Parish',
        paragraphs: [
          'At Grace Electrical Services, we believe homeowners deserve honest, verifiable proof of capability. Below are actual projects completed by Rodney across Hahnville, Luling, and surrounding parish townsâ€”outlining the initial symptom, the diagnostic procedure, the actual repair or installation, and the long-term result.',
        ],
      },
    ],
    caseStudies: [
      {
        client: 'Abu',
        location: 'Hahnville, LA',
        issue:
          'Recurring living room breaker trip causing loss of power to computers and lighting. A large regional electrical franchise quoted a massive diagnostic fee just to locate the circuit problem.',
        workUndertaken:
          'Rodney performed systematic digital multi-meter testing along the branch circuit. Traced an intermittent open neutral and arcing wire backstabbed into an old receptacle. Converted all device splices to secure screw-torqued pigtails and tested circuit continuity under 15A continuous load.',
        result:
          'Circuit fully stabilized with zero subsequent trips. Abu saved substantial money compared to corporate franchise estimates and praised Rodneyâ€™s honest, step-by-step approach.',
      },
      {
        client: 'Rhodes',
        location: 'St. Charles Parish, LA',
        issue:
          'Complete whole-house electrical wiring installation required for new construction home, requiring full rough-in, service panel, and code compliance.',
        workUndertaken:
          'Calculated total connected electrical demand, pulled 100% solid copper commercial-grade Romex branch circuits, installed dedicated 20A kitchen/bath lines, mounted 200A main service panel with whole-home surge suppression, and organized full circuit directory labeling.',
        result:
          'Passed St. Charles Parish electrical inspection on the first walkthrough. Rhodes commended Rodney as "very efficient, knowledgeable and competent" and confirmed he would definitely hire him again.',
      },
      {
        client: 'Anthony & Shelby Jusselin',
        location: 'Hahnville, LA',
        issue:
          'Homeowner attempting DIY ceiling fan replacement discovered an unsafe, unbraced plastic light box that was incapable of supporting dynamic fan rotation.',
        workUndertaken:
          'Rodney arrived the next day, removed the weak plastic box, installed a heavy-duty UL-listed structural metal ceiling fan brace securely bolted between ceiling joists, wired multi-speed controls, and laser-balanced the fan blades for silent operation.',
        result:
          'Rock-solid, quiet ceiling fan installation with zero vibration or ceiling stress. Anthony noted Rodney "stayed without complaint and knocked it out cleanly... my go-to guy for all electrical needs."',
      },
      {
        client: 'Willowdale Resident',
        location: 'Luling, LA',
        issue:
          'Older home operating on a maxed-out 100-amp service panel with no breaker slots available for a new heat pump and Level 2 electric vehicle charger.',
        workUndertaken:
          'Coordinated Entergy utility disconnect, installed a modern 200-amp Square D panel with 40 breaker slots, added Type 2 whole-home surge protection, drove dual 8-foot bonded copper grounding rods, and ran a dedicated 50-amp 240V garage charging line.',
        result:
          'Plentiful electrical capacity for all modern appliances and EV charging, passed parish code inspection, and lowered insurance underwriting risk.',
      },
    ],
    relatedServiceSlug: 'residential-electrical-services-hahnville-la',
    relatedServiceTitle: 'Residential Electrical Services in Hahnville, LA',
    secondaryServiceSlug: 'electrical-repairs-troubleshooting-hahnville-la',
    secondaryServiceTitle: 'Repairs & Troubleshooting Services',
  },
];

