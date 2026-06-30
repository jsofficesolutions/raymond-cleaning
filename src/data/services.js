export const services = [
  {
    id: 1,
    title: "Window Cleaning",
    slug: "window-cleaning",
    desc: "Commercial and Residential window cleaning covering the South East.",
    longDesc: "At Raymond Cleaning Services, we specialize in high-quality window cleaning for both residential and commercial properties throughout Essex. Using the latest pure-water-fed pole systems, we clean not just the glass, but also the sills and frames for a complete, long-lasting finish. No ladders are required, keeping your property safe and private while reaching heights of up to 50 feet.",
    image: "/images/window-cleaning.png",
    iconSvgPath: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1.091m-18-4.5v13.5m15-16.5v16.5M12.75 7.5h.008v.008H12.75V7.5zm0 3.75h.008v.008H12.75v-.008zm0 3.75h.008v.008H12.75V15z", // House grid / window indicator
    benefits: [
      "100% pure water filtration leaves windows streak-free without chemical residue",
      "We clean glass, frames, sills, and external doors with every visit",
      "Water-fed poles ensure safety and access to hard-to-reach windows",
      "Available on reliable 4-weekly or 8-weekly regular schedules"
    ],
    faqs: [
      { q: "Do you clean the frames and sills?", a: "Yes, we clean sills, frames, and plastics on every single visit as part of our standard service." },
      { q: "What is pure water cleaning?", a: "Pure water has all minerals removed so that when it dries naturally on your glass, it leaves no spots or streaks behind." }
    ],
    seoKeywords: "window cleaning Essex, professional window cleaners Chelmsford, residential window cleaning Southend, commercial window wash"
  },
  {
    id: 2,
    title: "Gutter Clearance",
    slug: "gutter-clearance",
    desc: "Routine maintenance to avoid overflowing gutters and unwanted vermin.",
    longDesc: "Blocked gutters can lead to serious water damage, damp issues, and costly roof repairs. Raymond Cleaning Services provides safe, high-reach gutter clearance services. Using powerful industrial gutter vacuums with carbon-fiber poles and onboard cameras, we clear out all moss, leaves, silt, and debris safely from the ground and show you the clean result.",
    image: "/images/gutter-clearance.png",
    iconSvgPath: "M12 3v13m0 0l-4-4m4 4l4-4m-9 7h10a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2z", // Gutter U-shape receiver & downward vacuum suction arrow
    benefits: [
      "Prevents structural dampness and water ingress around your roofline",
      "Camera inspections ensure every pocket of debris is fully removed",
      "Eliminates nesting sites for insects, birds, and vermin",
      "No ladders or scaffolding required, preserving your landscaping"
    ],
    faqs: [
      { q: "How often should gutters be cleaned?", a: "We recommend at least once a year, preferably in late autumn after the leaves have finished falling, to prevent winter blockages." },
      { q: "Do you clean the outside of the gutters too?", a: "Gutter clearance refers to clearing the inside. If you want the exterior gutters, fascias, and soffits washed, that is covered under our Fascia & Soffits service!" }
    ],
    seoKeywords: "gutter clearance Essex, gutter cleaning Chelmsford, blocked gutters Colchester, residential gutter vacuuming"
  },
  {
    id: 3,
    title: "Pressure Washing",
    slug: "pressure-washing",
    desc: "High-powered cleaning for driveways, patios, and tough exterior surfaces.",
    longDesc: "Over time, driveways, block paving, and patios accumulate weeds, moss, algae, and grime, becoming unsightly and dangerously slippery. Our high-pressure washing system removes decades of dirt and organic growth, restoring the natural beauty of your stone, concrete, or brickwork. We also offer re-sanding and sealing to protect your surfaces for years to come.",
    image: "/images/pressure-washing.png",
    iconSvgPath: "M20 4L4 20M20 4v6m0-6H14m-3.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM17 12a1 1 0 11-2 0 1 1 0 012 0zm-5 5a1 1 0 11-2 0 1 1 0 012 0z", // Power nozzle spray jet blasts
    benefits: [
      "Restores slippery, dangerous paths into safe, slip-resistant walkways",
      "Deep cleans block paving, patio slabs, concrete, and brick driveways",
      "Includes weed removal and professional joint re-sanding options",
      "Instantly boosts the curb appeal and value of your Essex property"
    ],
    faqs: [
      { q: "Will the pressure washer damage my block paving?", a: "No, we adjust the pressure specifically for each surface and re-sand block paving after cleaning to maintain structural integrity." },
      { q: "How long does it take?", a: "Most residential driveways or patios can be fully cleaned, re-sanded, and treated in a single day." }
    ],
    seoKeywords: "driveway cleaning Essex, patio pressure washing Chelmsford, pressure washer Colchester, block paving cleaning Southend"
  },
  {
    id: 4,
    title: "Soft Washing",
    slug: "soft-washing",
    desc: "Gentle, chemical-assisted cleaning to remove organic growth without damage.",
    longDesc: "High pressure can easily damage delicate render, roof tiles, cladding, and timber. Our soft washing service utilizes low-pressure sprayers combined with specialized, biodegradable sanitizing solutions. This method targets, kills, and dissolves algae, lichen, mold, and mildew at their roots, keeping surfaces cleaner for up to 3-4 times longer than pressure washing alone.",
    image: "/images/soft-washing.png",
    iconSvgPath: "M9.75 3.104v1.242c0 .289.165.552.425.682l1.01.505a.75.75 0 010 1.342l-1.01.505a.75.75 0 00-.425.682v1.242M9 10.5a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0zm-3 8.25a3 3 0 11-6 0 3 3 0 016 0z", // Delicate misting cloud bubbles
    benefits: [
      "Cleans delicate exterior surfaces (K-Rend, render, cladding) without damage",
      "Kills the spores of black mold, red algae, and lichen at their root",
      "Uses environmentally safe, biodegradable sanitizing detergents",
      "Provides long-lasting results, keeping surfaces clean for years"
    ],
    faqs: [
      { q: "Is soft washing safe for plants?", a: "Yes, we thoroughly pre-wet all nearby grass and garden beds, and rinse them afterward, ensuring zero harm to your landscaping." },
      { q: "What surfaces require soft washing?", a: "Delicate colored renders, wood siding, uPVC cladding, roof tiles, and older brickwork are ideal candidates for soft washing." }
    ],
    seoKeywords: "render cleaning Essex, soft washing Chelmsford, exterior wall cleaning Essex, non-destructive algae wash"
  },
  {
    id: 5,
    title: "Fascia & Soffits",
    slug: "fascia-soffits",
    desc: "Restore the roofline of your property to a brilliant, clean white.",
    longDesc: "Your home's roofline is highly visible and gathers gray grime, green algae, and dirt over time. Raymond Cleaning Services offers complete fascia, soffit, and bargeboard cleaning. Utilizing specialized cleaning detergents and pure water poles, we wash away organic growth and traffic film, returning your uPVC rooflines to their original, bright-white condition.",
    image: "/images/fascia-soffits.png",
    iconSvgPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", // Roof eaves and line highlight
    benefits: [
      "Brightens greyed or algae-ridden uPVC trim, restoring a clean white look",
      "Washes gutter exteriors, downpipes, bargeboards, and soffits",
      "Protects uPVC from long-term staining and discoloration",
      "Dramatically improves the overall visual appeal of your home's roofline"
    ],
    faqs: [
      { q: "Do you clean the inside of the gutters during this service?", a: "This service cleans the external surfaces. For clearing blockages on the inside, you can add our Gutter Clearance service." },
      { q: "How often should fascias and soffits be washed?", a: "Typically every 1-2 years is sufficient to keep them bright and prevent permanent staining from grime and algae." }
    ],
    seoKeywords: "fascia cleaning Essex, soffit washing Chelmsford, uPVC cleaning Colchester, roofline wash Essex"
  }
];
