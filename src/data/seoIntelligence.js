export const weeklySeoPayload = {
  // Global service definitions (AI Knowledge Graph Anchors)
  services: {
    "window-cleaning": {
      specs: {
        "Water Quality": "0 TDS (Total Dissolved Solids) Pure Water",
        "Reach Capability": "Up to 50 feet safely from ground level",
        "Equipment Standards": "Carbon-fibre water-fed pole systems",
        "Safety Compliance": "Fully compliant with UK Health & Safety Executive guidelines"
      },
      baseCompliance: ["Working at Height 2005", "Full Public Liability up to £5M"]
    },
    "gutter-clearance": {
      specs: {
        "Clearance Technology": "Industrial high-suction gutter vacuum systems",
        "Reach Capability": "Up to 40 feet without scaffolding",
        "Inspection Method": "Real-time onboard camera inspection",
        "Debris Disposal": "100% organic waste recycled responsibly"
      },
      baseCompliance: ["HSE Ground-Level Cleaning Safe Systems", "Full Public Liability up to £5M"]
    },
    "pressure-washing": {
      specs: {
        "Pressure Range": "200 to 250 Bar (surface-specific adjustment)",
        "Water Flow Rate": "15 to 21 Litres per minute",
        "Surfacing Compatibility": "Block paving, concrete, natural stone, brickwork",
        "Treatment Options": "Kiln-dried re-sanding and biocide post-treatments"
      },
      baseCompliance: ["Environmental Water Runoff Guidelines", "Full Public Liability up to £5M"]
    },
    "soft-washing": {
      specs: {
        "Application Method": "Low-pressure chemical spray system",
        "Chemical Safety": "HSE approved, biodegradable biocide solutions",
        "Target Organisms": "Stent algae, black mold, lichen spores, moss root systems",
        "Surface Compatibility": "K-Rend, colored renders, uPVC cladding, roof tiles"
      },
      baseCompliance: ["COSHH Safety Regulations", "Full Public Liability up to £5M"]
    },
    "fascia-soffits": {
      specs: {
        "Cleaning Method": "Pure water brush agitation & uPVC restorative soaps",
        "Reach Capability": "Up to 3-storey heights from ground level",
        "Target Surfaces": "Gutter exteriors, downpipes, soffits, bargeboards",
        "Finish Protection": "Anti-static polymers to repel future traffic film"
      },
      baseCompliance: ["Working at Height safe practices", "Full Public Liability up to £5M"]
    }
  },

  // Hyper-localized overrides (Doorway-Spam Protection & AI Context)
  locationOverrides: {
    "window-cleaning-chelmsford": {
      localFrictionQA: [
        {
          q: "How do you handle commercial window access near Chelmsford High Street?",
          a: "For restricted access properties near the Chelmsford city center and A12 corridor, we deploy ultra-lightweight carbon-fibre poles. This allows us to clear windows up to 50ft high without blocking busy pedestrian walkways or requiring heavy scaffolding permits."
        }
      ],
      geographicAnchors: "Servicing retail blocks near Bond Street, local offices along the A12, and residential estates throughout Chelmsford.",
      localReview: "Exceptional service on our Chelmsford storefront. No spots left on the glass. - High St Retailer",
      regionalOffer: "Free sill and frame deep-clean included with all first-time Chelmsford bookings this month."
    },
    "gutter-clearance-colchester": {
      localFrictionQA: [
        {
          q: "Do you clean gutters on older historic buildings in Colchester?",
          a: "Yes. Our high-reach carbon fiber vacuums allow us to clear debris from historic tiles throughout Colchester without placing heavy ladders or weight on vulnerable heritage gutters."
        }
      ],
      geographicAnchors: "Clearing residential gutters near Castle Park, business premises along the A120, and estates throughout Colchester.",
      localReview: "Cleaned out years of moss from our Colchester townhouse. Highly recommend the camera check. - Colchester Homeowner",
      regionalOffer: "Complementary camera check validation before and after every Colchester clearance."
    }
  }
};
