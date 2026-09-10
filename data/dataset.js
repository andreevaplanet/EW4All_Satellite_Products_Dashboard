/* ==============================================================================================
   EW4All Satellite Products Dashboard — dataset

   Generated from products.xlsx by update.html. Do not edit by hand: edit the workbook and
   regenerate. Generated 2026-09-10 · 190 products · 58 training resources
   ============================================================================================== */

window.EW4ALL_SAT = {
  "meta": {
    "source": "2026.01.06 Data call on Satellite Products for EW4ALL (NASA edit)",
    "sheets": 11,
    "dataRows": 276,
    "readRows": 257,
    "droppedRows": 19,
    "products": 190,
    "training": 58,
    "generated": "2026-09-10",
    "trainingSource": "Australian VLab CoE Regional Focus Group recording addresses as at August 2026",
    "readFrom": "data/products.xlsx"
  },
  "hazardMeta": [
    {
      "name": "Floods",
      "colour": "#005BAA",
      "tagline": "Rainfall, soil moisture and inundation",
      "gap": "All ten providers report flood-relevant products, but the set is heavily weighted to precipitation (17 of 42). Only two wind products and one Roshydromet and one ISRO entry; three products are not yet operational."
    },
    {
      "name": "Tropical cyclones",
      "colour": "#00B5D5",
      "tagline": "Structure, intensity, winds and rain",
      "gap": "The largest set, but dedicated cyclone-analysis products (Dvorak/ADT, MTCSWA, eTRaP, HISA, TCFP, trajectories) come only from NOAA and Roshydromet. Six products carry no coverage statement."
    },
    {
      "name": "Heatwaves",
      "colour": "#FAA61A",
      "tagline": "Land and sea surface temperature, radiation",
      "gap": "No heatwave entries from JMA or Roshydromet. Marine heat dominates (16 sea-surface temperature products against 11 land surface temperature), and no heat-stress or heat-index product is reported by any provider."
    },
    {
      "name": "Droughts",
      "colour": "#B5460A",
      "tagline": "Vegetation, soil moisture and precipitation deficit",
      "gap": "No drought entries from JMA, IMD, ISRO or Roshydromet. Twelve of 38 products are research or pre-operational, the highest share of any hazard."
    },
    {
      "name": "Fires",
      "colour": "#A8332B",
      "tagline": "Active fire, radiative power and smoke",
      "gap": "No fire entries from IMD. Detection leans on polar-orbiting MODIS and VIIRS (12 of 32); ten products are research products, and no burned-area product is reported outside NASA."
    },
    {
      "name": "Volcanic ash",
      "colour": "#5A6A7C",
      "tagline": "Ash height and mass, SO₂ and aerosol",
      "gap": "The smallest set (20 products) and only two product groups. No entries from Roshydromet, IMD or ISRO, and the only advisory-level product is the NOAA Washington VAAC advisory."
    },
    {
      "name": "Thunderstorms & squall lines",
      "colour": "#70BF54",
      "tagline": "Convection and lightning — training material only",
      "gap": "Not one of the six hazards in the data call. It appears only in the Australian VLab CoE material, which carries 16 recordings on convection and lightning with no matching product rows in the workbook."
    }
  ],
  "operators": [
    {
      "name": "EUMETSAT",
      "full": "European Organisation for the Exploitation of Meteorological Satellites",
      "place": "Europe (Darmstadt)"
    },
    {
      "name": "NOAA",
      "full": "National Oceanic and Atmospheric Administration",
      "place": "United States of America"
    },
    {
      "name": "CMA",
      "full": "China Meteorological Administration — National Satellite Meteorological Center",
      "place": "China"
    },
    {
      "name": "JMA",
      "full": "Japan Meteorological Agency",
      "place": "Japan"
    },
    {
      "name": "JAXA",
      "full": "Japan Aerospace Exploration Agency",
      "place": "Japan"
    },
    {
      "name": "KMA",
      "full": "Korea Meteorological Administration — National Meteorological Satellite Center",
      "place": "Republic of Korea"
    },
    {
      "name": "NASA",
      "full": "National Aeronautics and Space Administration",
      "place": "United States of America"
    },
    {
      "name": "IMD",
      "full": "India Meteorological Department",
      "place": "India"
    },
    {
      "name": "ISRO",
      "full": "Indian Space Research Organisation — Space Applications Centre",
      "place": "India"
    },
    {
      "name": "Roshydromet",
      "full": "SRC \"Planeta\", Roshydromet",
      "place": "Russian Federation"
    }
  ],
  "dictionary": [
    {
      "field": "Product name",
      "source": "All sheets, column C \"Raw data/Data set/Product name\"",
      "coding": "Kept as given, except where a provider has supplied a clearer name. Rows carrying the same name, provider and input are merged into one product; the hazards and dissemination routes are collected on that product."
    },
    {
      "field": "Priority hazard",
      "source": "Column A \"Priority Hazards\"",
      "coding": "Mapped to the six data-call hazards by keyword. \"Tropical Cyclones (multi-hazards: wind…\", \"Tropical cyclones\", \"FIRE\", \"Drought\" and \"Volcanic Ash\" are folded into single labels. One cell listing four hazards yields four hazard tags. \"Heavy Rain, Flooding monitoring\" is read as Floods."
    },
    {
      "field": "Provider",
      "source": "Column O \"Provider Organization\"",
      "coding": "Verbatim, with SAF names spaced (EUMETSAT LSA SAF) and the two spellings of the Russian centre merged."
    },
    {
      "field": "Operator",
      "source": "Derived from the sheet name",
      "coding": "Ten operator families. The SWCEM sheet is a WMO programme rather than an operator: its rows are attributed to JAXA and NOAA as stated in the provider column, and tagged \"WMO SWCEM\"."
    },
    {
      "field": "Satellite",
      "source": "Column B \"Input data (satellite, sensor)\"",
      "coding": "Pattern-matched to 27 satellite or platform families. Non-satellite inputs — ground and in-situ networks, model and reanalysis fields — are held under one label, \"Ground, in-situ and model inputs\", so blended products are not read as pure satellite products. The verbatim cell is shown on the product."
    },
    {
      "field": "Product group",
      "source": "Derived from product name and stated purpose",
      "coding": "Thirteen groups derived from what the sheets actually contain, not an imposed taxonomy. Products whose name matches more than one group are placed by name first, purpose second."
    },
    {
      "field": "Coverage",
      "source": "Column G \"Spatial Extent/Geographical coverage\"",
      "coding": "Seven classes. \"Full disk\" is resolved by operator: East Asia & Western Pacific for KMA and CMA, Indian Ocean & South Asia for IMD and ISRO. Verbatim extent is shown on the product."
    },
    {
      "field": "Access",
      "source": "Column M \"Data policy\"",
      "coding": "Read from the data-policy column: free/open; free/open with conditions on some routes (where a product is open on one route but needs NMHS credentials or covers delivery cost on another, as with the JMA Himawari routes); free with NMHS credentials required; provider data-policy terms (EUMETSAT and JAXA policy links, Copernicus terms); not stated. Every verbatim policy statement is shown on the product, so a mixed case can be read route by route."
    },
    {
      "field": "Status",
      "source": "Column N \"Operational or In-Development\"",
      "coding": "Four classes from 15 source variants: Operational (includes \"Released\", \"routine production\", \"Standard product\"); pre-operational or in development; research product; demonstration."
    },
    {
      "field": "Latency",
      "source": "Column I \"Product Delivery Latency\"",
      "coding": "Near real-time / delayed mode / both / not stated, from 18 source variants. The verbatim value is kept on the product."
    },
    {
      "field": "Access route",
      "source": "Column K \"Dissemination mechanism(s)\" with column L \"URL(s)\"",
      "coding": "One route per distinct dissemination-and-URL pair. This is what collapses the 15 JMA Himawari imagery rows into one product with five routes (HimawariCast, HimawariCloud, WIS GISC Tokyo, JDDS, JMBSC)."
    },
    {
      "field": "Capitalisation",
      "source": "All sheets",
      "coding": "Values written entirely in capitals (HALF HOURLY, THREE HOURLY, DAILY; FULL DISK; INDIAN REGION) are set in sentence case. Acronyms, satellite names, formats and units keep their case."
    },
    {
      "field": "Training resource",
      "source": "Column R \"Training Resources\" plus the Australian VLab CoE document",
      "coding": "Held once each at hazard level with operator and satellite cross-references, never repeated per product."
    },
    {
      "field": "Archive period",
      "source": "Column H \"Temporal Extent (archived since)\"",
      "coding": "Normalised to \"start – end\", with \"present\" for an open archive and the most precise start the provider gave (YYYY, YYYY-MM or YYYY-MM-DD). Excel date serials on the EUMETSAT sheet were converted to dates; \"since 1998\", \"Since November 2022\" and KMA’s \"2019.7.25. ~\" were rewritten to the same pattern; multi-satellite and multi-component answers keep each component with its own period in brackets. Three answers stated a retention period (\"3 days\", \"1 day\", \"12 hours\") rather than a start date; these are shown as not stated, with the original kept in the dataset."
    },
    {
      "field": "Missing vs none",
      "source": "—",
      "coding": "A blank cell is shown as \"Not stated\" and never counted as a negative. An explicit \"N/A\", \"-\" or \"n.a.\" is shown as \"None / not applicable\". The two are distinguished everywhere."
    }
  ],
  "issues": [],
  "products": [
    {
      "id": "p1",
      "name": "Rainfall Rate (RR)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring heavy rainfall",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R2",
        "KMA!R14"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Rainfall Rate(RR)"
    },
    {
      "id": "p2",
      "name": "AMI Total Precipitable Water (TPW)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring heavy rainfall",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R3",
        "KMA!R15"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Total precipitable water(TPW)"
    },
    {
      "id": "p3",
      "name": "Ground GNSS Total Precipitable Water (TPW)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Ground GNSS"
      ],
      "purpose": "local rainfall analysis and TPW Verification",
      "freq": [
        "1hour"
      ],
      "res": [
        "-"
      ],
      "extent": [
        "Korea"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "BUFR"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "GTS",
          "u": "-",
          "f": "BUFR"
        },
        {
          "d": "GTS",
          "u": "https://nmsc.kma.go.kr/",
          "f": "BUFR"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R4",
        "KMA!R16"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "Total precipitable water(TPW)"
    },
    {
      "id": "p4",
      "name": "Downward Solar Radiation (DSR)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Radiation & energy fluxes",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring and analysis of drought & heatwave",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R5"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Downward Solar Radiation(DSR)"
    },
    {
      "id": "p5",
      "name": "Sea Surface Temperature, 1 Day (SST-1D)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on typhoon source of thermal dynamic factor",
      "freq": [
        "1day"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R6"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Sea surface temperature-1Day(SST-1D)"
    },
    {
      "id": "p6",
      "name": "Sea Surface Temperature, 5 Day (SST-5D)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on typhoon source of thermal dynamic factor",
      "freq": [
        "5day"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R7"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Sea surface temperature-5Day(SST-5D)"
    },
    {
      "id": "p7",
      "name": "Cloud Top Temperature (CTT)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on typhoon intensity and find center of typhoon",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R8"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Cloud top temperatures (CTT)"
    },
    {
      "id": "p8",
      "name": "Cloud Top Height (CTH)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on typhoon intensity and find center of typhoon",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R9"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Cloud Top Height(CTH)"
    },
    {
      "id": "p9",
      "name": "Atmospheric Motion Vector, Infrared 10.5 µm, Cloud Target (AMV IR105 CD)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on upper divegence and jet stream",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R10"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Atmospheric Motion Vector- Infrared(10.5㎛) –Cloud target(AMV IR105 CD)"
    },
    {
      "id": "p10",
      "name": "Atmospheric Motion Vector, Water Vapour (AMV WV069)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on upper divegence and jet stream",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R11"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Atmospheric Motion Vector-Water Vapor 069(AMV WV069)"
    },
    {
      "id": "p11",
      "name": "Atmospheric Motion Vector, Shortwave Infrared 3.8 µm, Cloud Target (AMV SW038 CD)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on upper divegence and jet stream",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R12"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Atmospheric Motion Vector- Shortwave infrared(3.8㎛)-Cloud target(AMV SW038 CD)"
    },
    {
      "id": "p12",
      "name": "Atmospheric Motion Vector, Visible 0.6 µm, Cloud Target (AMV VI006 CD)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "analysis on upper divegence and jet stream",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R13"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Atmospheric Motion Vector-Visible(0.6㎛)-Cloud target(AMV-VI006-CD)"
    },
    {
      "id": "p13",
      "name": "Forest Fire (FF)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring fire forest early stage",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R17"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7. ~"
      ],
      "nameSrc": "Forest fire(FF)"
    },
    {
      "id": "p14",
      "name": "Volcanic Ash Height (VAH)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring volcanic ash intensity",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R18"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "volcanic ash height(VAH)"
    },
    {
      "id": "p15",
      "name": "Volcanic Ash Mass (VAM)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring volcanic ash intensity",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R19"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "volcanic ash mass(VAM)"
    },
    {
      "id": "p16",
      "name": "Sulphur Dioxide Detection",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring volcanic ash",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R20"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Sulfur dioxide detection(SO2D)"
    },
    {
      "id": "p17",
      "name": "Aerosol Detection Products (ADPS)",
      "provider": "KMA National Meteorological Satellite Center",
      "operator": "KMA",
      "operators": [
        "KMA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "GK-2A"
      ],
      "inputs": [
        "GK2A / AMI"
      ],
      "purpose": "monitoring volcanic ash, dust, haze",
      "freq": [
        "10min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "2019-07-25 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, PNG"
      ],
      "access": "Free / open",
      "policy": [
        "open"
      ],
      "status": "Operational",
      "poc": [
        "kmasod@korea.kr"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Homepage Download, Homepage Viewer, API",
          "u": "https://nmsc.kma.go.kr/",
          "f": "NetCDF, PNG"
        }
      ],
      "urls": [
        "https://nmsc.kma.go.kr/"
      ],
      "rows": [
        "KMA!R21"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019.7.25. ~"
      ],
      "nameSrc": "Aerosol Detection Products(ADPS)"
    },
    {
      "id": "p18",
      "name": "MERSI-II Precipitable Water Vapour (Near-Infrared/Daily)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "estimate precipitation conditions",
      "freq": [
        "Daily"
      ],
      "res": [
        "5000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R3"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Precipitable Water Vapor (Near-Infrared/Daily)"
    },
    {
      "id": "p19",
      "name": "MWRI Microwave Rain Rate (Daily/Ascending)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "retrived rain rate",
      "freq": [
        "Daily"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R4"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Microwave Rain Rate (Daily/Ascend)"
    },
    {
      "id": "p20",
      "name": "MWRI Microwave Rain Rate (Daily/Descending)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "retrived rain rate",
      "freq": [
        "Daily"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R5"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Microwave Rain Rate (Daily/Descend)"
    },
    {
      "id": "p21",
      "name": "AGRI Quantitative Precipitation Estimation (Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate total QPE induced flood",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R6"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Quantitative Precipitation Estimation (Full Disk)"
    },
    {
      "id": "p22",
      "name": "MWRI Land Surface Temperature (Daily/25 km)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "Climate change and environment change estimation",
      "freq": [
        "Daily"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R7"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Land Surface Temperature (Daily/25KM)"
    },
    {
      "id": "p23",
      "name": "MWRI Sea Surface Temperature (Daily)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "estimate global sea surface heat condition change",
      "freq": [
        "Daily"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R8"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Sea Surface Temperature (Daily)"
    },
    {
      "id": "p24",
      "name": "MERSI-LL Land Surface Temperature (Daily)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3E"
      ],
      "purpose": "estimate global land surface heat condition change",
      "freq": [
        "Daily"
      ],
      "res": [
        "1000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R9"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-LL Land Surface Temperature (Daily)"
    },
    {
      "id": "p25",
      "name": "MERSI-LL Sea Surface Temperature (Daily/5000 m/00 h)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3E"
      ],
      "purpose": "estimate global sea surface heat condition change",
      "freq": [
        "Daily"
      ],
      "res": [
        "5000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R10"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-LL Sea Surface Temperature (Daily/5000M/00 hour)"
    },
    {
      "id": "p26",
      "name": "MERSI-LL Sea Surface Temperature (Daily/5000 m/12 h)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3E"
      ],
      "purpose": "estimate global sea surface heat condition change",
      "freq": [
        "Daily"
      ],
      "res": [
        "5000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R11"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-LL Sea Surface Temperature (Daily/5000M/12 hour)"
    },
    {
      "id": "p27",
      "name": "AGRI Land Surface Temperature (Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate fulldisk land surface heat condition change",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R12"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Land Surface Temperature (Full Disk)"
    },
    {
      "id": "p28",
      "name": "AGRI Sea Surface Temperature (Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate fulldisk sea surface heat condition change",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R13"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Sea Surface Temperature (Full Disk)"
    },
    {
      "id": "p29",
      "name": "AGRI Sea Surface Temperature (Monthly/Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate monthly sea surface heat condition change",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R14"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Sea Surface Temperature (Monthly/Full Disk)"
    },
    {
      "id": "p30",
      "name": "AGRI Sea Surface Temperature (Pentad/Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate sea surface heat condition change",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R15"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Sea Surface Temperature (Pentad/Full Disk)"
    },
    {
      "id": "p31",
      "name": "AGRI Sea Surface Temperature (Dekad/Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate sea surface heat condition change",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R16"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Sea Surface Temperature (Dekad/Full Disk)"
    },
    {
      "id": "p32",
      "name": "AGRI Sea Surface Temperature (Daily/Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate daily sea surface heat condition",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R17"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Sea Surface Temperature (Daily/Full Disk)"
    },
    {
      "id": "p33",
      "name": "AGRI Fire and Hot Spot Detection (Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "estimate heatwave influence",
      "freq": [
        "HHmm"
      ],
      "res": [
        "2000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R18"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Fire and Hot Spot detection (Full Disk)"
    },
    {
      "id": "p34",
      "name": "MERSI-II Outgoing Longwave Radiation (Daily)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Radiation & energy fluxes",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "estimate tropical cyclone intensity",
      "freq": [
        "Daily"
      ],
      "res": [
        "5000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R19"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Outgoing Long-wave Radiation (Daily)"
    },
    {
      "id": "p35",
      "name": "MWRI Cloud Liquid Water (Orbital/Ascending)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "retrive precipitation",
      "freq": [
        "ORBIT"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Orbital swath"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R21"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Cloud Liquid Water (Orbital/Ascend)"
    },
    {
      "id": "p36",
      "name": "MWRI Microwave Rain Rate (Orbital/Ascending)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "retrive rain rate",
      "freq": [
        "ORBIT"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Orbital swath"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R23"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Microwave Rain Rate (Orbital/Ascend)"
    },
    {
      "id": "p37",
      "name": "MWRI Total Precipitable Water (Orbital/Descending)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "retrive precipitation",
      "freq": [
        "ORBIT"
      ],
      "res": [
        "25KM"
      ],
      "extent": [
        "Orbital swath"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R25"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MWRI Total Precipitation Water (Orbital/Descend)"
    },
    {
      "id": "p38",
      "name": "Ocean Surface Wind Vector, Wind Radar (Orbital)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3E"
      ],
      "purpose": "tropical cyclone model",
      "freq": [
        "ORBIT"
      ],
      "res": [
        "10km/25km"
      ],
      "extent": [
        "Orbital swath"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R27"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "Ocean Surface Wind Vector,Wind Radar(Orbital)"
    },
    {
      "id": "p39",
      "name": "MERSI-II Normalized Vegetation Index (Dekad/250 m)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "drought index",
      "freq": [
        "10DAY"
      ],
      "res": [
        "250M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R28"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Normalized Vegetation Index (Dekad/250M)"
    },
    {
      "id": "p40",
      "name": "MERSI-II Normalized Vegetation Index (Dekad/1000 m)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "drought index",
      "freq": [
        "10DAY"
      ],
      "res": [
        "1000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R29"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Normalized Vegetation Index (Dekad/1000M)"
    },
    {
      "id": "p41",
      "name": "MERSI-II Normalized Vegetation Index (Monthly/5000 m)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "global monthly drought index",
      "freq": [
        "Monthly"
      ],
      "res": [
        "5000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R30"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Normalized Vegetation Index (Monthly/5000M)"
    },
    {
      "id": "p42",
      "name": "MERSI-II Normalized Vegetation Index (Dekad/5000 m)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "global drought index",
      "freq": [
        "10DAY"
      ],
      "res": [
        "5000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R31"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Normalized Vegetation Index (Dekad/5000M)"
    },
    {
      "id": "p43",
      "name": "MERSI-II Global Fire Spot Monitoring (Daily)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "FY-3"
      ],
      "inputs": [
        "FY3D"
      ],
      "purpose": "hot spot, burned area",
      "freq": [
        "Daily"
      ],
      "res": [
        "1000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "HDF"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R32"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "MERSI-II Global Fire Spot Monitoring (Daily)"
    },
    {
      "id": "p44",
      "name": "AGRI Fire Image (Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "hot spot monitoring",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "JPG"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "JPG"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R33"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Fire Image (Full Disk)"
    },
    {
      "id": "p45",
      "name": "AGRI Ash Image (Full Disk)",
      "provider": "National Satellite Meteorological Center (CMA)",
      "operator": "CMA",
      "operators": [
        "CMA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "FY-4B"
      ],
      "inputs": [
        "FY4B"
      ],
      "purpose": "volcanic monitoring",
      "freq": [
        "HHmm"
      ],
      "res": [
        "4000M"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "JPG"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "data server(http://data.nsmc.org.cn) online portal (http://fyearth.nsmc.org.cn)",
          "u": "",
          "f": "JPG"
        }
      ],
      "urls": [],
      "rows": [
        "CMA!R34"
      ],
      "training": [],
      "latencyRaw": [
        "near real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [],
      "nameSrc": "AGRI Ash Image (Full Disk)"
    },
    {
      "id": "p46",
      "name": "Himawari Satellite Imagery",
      "provider": "JMA",
      "operator": "JMA",
      "operators": [
        "JMA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones",
        "Fires"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Disaster Risk Reduction",
      "freq": [
        "every 10 minutes",
        "every 10 minutes for full domain, every 2.5 minutes for target area observation and Japan area",
        "every 30 minutes"
      ],
      "res": [
        "1 to 4 km resolution",
        "0.5 to 2 km resolution",
        "4 km resolution",
        "0.5 to 4 km resolution"
      ],
      "extent": [
        "Eastern Asia and Western Pacific"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [
        "N/A"
      ],
      "latency": "Near real-time",
      "formats": [
        "HRIT",
        "Dedicated format (Himawari Standard Data) NetCDF, PNG",
        "Dedicated format (SATAID)",
        "HRIT, JPEG",
        "Dedicated format (Himawari Standard Data) NetCDF, HRIT, PNG, JPEG"
      ],
      "access": "Free / open, conditions on some routes",
      "policy": [
        "free and unrestricted access",
        "free and unrestricted access (IDs and PWs to access are provided only to NMHSs)",
        "free and unrestricted access (charged no more than the cost of reproduction and delivery to access JMBSC)",
        "free and restricted access (IDs and PWs to access are provided only to NMHSs)",
        "free and restricted access"
      ],
      "status": "Operational",
      "poc": [
        "YASUI Kazuki (metsat@met.kishou.go.jp)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "HimawariCast",
          "u": "(direct distribution)",
          "f": "HRIT"
        },
        {
          "d": "HimawariCloud",
          "u": "(dedicated URL for individual user)",
          "f": "Dedicated format (Himawari Standard Data) NetCDF, PNG"
        },
        {
          "d": "WIS (GISC Tokyo)",
          "u": "(direct distribution)",
          "f": "Dedicated format (SATAID)"
        },
        {
          "d": "JDDS",
          "u": "(distribution URL using Direct authentication)",
          "f": "HRIT, JPEG"
        },
        {
          "d": "The Japan Meteorological Business Support Center (JMBSC)",
          "u": "(direct distribution)",
          "f": "Dedicated format (Himawari Standard Data) NetCDF, HRIT, PNG, JPEG"
        }
      ],
      "urls": [],
      "rows": [
        "JMA!R2",
        "JMA!R3",
        "JMA!R5",
        "JMA!R6",
        "JMA!R7",
        "JMA!R12",
        "JMA!R13",
        "JMA!R15",
        "JMA!R16",
        "JMA!R17",
        "JMA!R20",
        "JMA!R21",
        "JMA!R22",
        "JMA!R23",
        "JMA!R24"
      ],
      "training": [],
      "latencyRaw": [
        "real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "N/A",
        "3 days",
        "1 day"
      ],
      "nameSrc": "Himawari satellite imagery"
    },
    {
      "id": "p47",
      "name": "Himawari RGB Composite Imagery",
      "provider": "JMA",
      "operator": "JMA",
      "operators": [
        "JMA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones",
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Disaster Risk Reduction",
      "freq": [
        "every 10 minutes for full domain, every 2.5 minutes for target area observation and Japan area"
      ],
      "res": [
        "1 to 2 km resolution"
      ],
      "extent": [
        "Eastern Asia and Western Pacific"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "JPEG"
      ],
      "access": "Free / open",
      "policy": [
        "free and unrestricted access"
      ],
      "status": "Operational",
      "poc": [
        "YASUI Kazuki (metsat@met.kishou.go.jp)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://www.data.jma.go.jp/mscweb/data/himawari/index.html",
          "f": "JPEG"
        }
      ],
      "urls": [
        "https://www.data.jma.go.jp/mscweb/data/himawari/index.html"
      ],
      "rows": [
        "JMA!R4",
        "JMA!R14",
        "JMA!R25"
      ],
      "training": [],
      "latencyRaw": [
        "real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1 day"
      ],
      "nameSrc": "Himawari RGB composite imagery"
    },
    {
      "id": "p48",
      "name": "Heavy Rainfall Potential (HRP)",
      "provider": "JMA",
      "operator": "JMA",
      "operators": [
        "JMA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Disaster Risk Reduction",
      "freq": [
        "Every 10 minute",
        "Every 10 minutes"
      ],
      "res": [
        "2km resolution"
      ],
      "extent": [
        "Eastern Asia and Western pacific"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "Tiled PNG image"
      ],
      "access": "Free / open",
      "policy": [
        "free and unrestricted access"
      ],
      "status": "Operational",
      "poc": [
        "MOURI Kouki (k_mouri@met.kishou.go.jp)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://www.jma.go.jp/jma/jma-eng/jma-center/nowcasting/",
          "f": "Tiled PNG image"
        }
      ],
      "urls": [
        "https://www.jma.go.jp/jma/jma-eng/jma-center/nowcasting/"
      ],
      "rows": [
        "JMA!R8",
        "JMA!R18"
      ],
      "training": [],
      "latencyRaw": [
        "real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "12 hours"
      ],
      "nameSrc": "Heavy Rainfall Potential (HRP)"
    },
    {
      "id": "p49",
      "name": "High-Resolution Cloud Analysis Information (HCAI)",
      "provider": "JMA",
      "operator": "JMA",
      "operators": [
        "JMA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Disaster Risk Reduction",
      "freq": [
        "Every hour"
      ],
      "res": [
        "2km resolution"
      ],
      "extent": [
        "Eastern Asia and Western pacific"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "Tiled PNG image"
      ],
      "access": "Free / open",
      "policy": [
        "free and unrestricted access"
      ],
      "status": "Operational",
      "poc": [
        "MOURI Kouki (k_mouri@met.kishou.go.jp)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://www.jma.go.jp/jma/jma-eng/jma-center/nowcasting/",
          "f": "Tiled PNG image"
        }
      ],
      "urls": [
        "https://www.jma.go.jp/jma/jma-eng/jma-center/nowcasting/"
      ],
      "rows": [
        "JMA!R9",
        "JMA!R19"
      ],
      "training": [],
      "latencyRaw": [
        "real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "12 hours"
      ],
      "nameSrc": "High-resolution Cloud Analysis Information (HCAI)"
    },
    {
      "id": "p50",
      "name": "AMV-Based Sea Surface Wind",
      "provider": "JMA",
      "operator": "JMA",
      "operators": [
        "JMA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Disaster Risk Reduction",
      "freq": [
        "every 30 minutes for full domain, every 10 minutes for target area observation"
      ],
      "res": [
        "18 km resolution for full domain, 3.5 km resolution for target area observation"
      ],
      "extent": [
        "Eastern Asia and Western Pacific for full domain, 1,000km square for Eastern Asia and Western Pacific for target area observation"
      ],
      "coverage": [
        "East Asia & Western Pacific"
      ],
      "temporal": [],
      "latency": "Near real-time",
      "formats": [
        "PNG",
        "Dedicated format (sataidwind format)"
      ],
      "access": "Free / open, conditions on some routes",
      "policy": [
        "free and unrestricted access",
        "free and unrestricted access (IDs and PWs to access are provided only to NMHSs)"
      ],
      "status": "Operational",
      "poc": [
        "YASUI Kazuki (metsat@met.kishou.go.jp)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://www.data.jma.go.jp/mscweb/en/product/aswind.php",
          "f": "PNG"
        },
        {
          "d": "JDDS",
          "u": "(distribution URL using Direct authentication) Reference URL: https://www.data.jma.go.jp/mscweb/en/product/product_ASWind.html",
          "f": "Dedicated format (sataidwind format)"
        }
      ],
      "urls": [
        "https://www.data.jma.go.jp/mscweb/en/product/aswind.php",
        "https://www.data.jma.go.jp/mscweb/en/product/product_ASWind.html"
      ],
      "rows": [
        "JMA!R10",
        "JMA!R11"
      ],
      "training": [],
      "latencyRaw": [
        "real-time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1 day"
      ],
      "nameSrc": "AMV-based Sea-surface Wind"
    },
    {
      "id": "p51",
      "name": "Global Satellite Mapping of Precipitation (GSMaP)",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones",
        "Droughts"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation"
      ],
      "inputs": [
        "Dual-frequency Precipitation Radar (DPR) onboard GPM core satellites, other GPM passive microwave constellation satellites, and Geostationary satellites"
      ],
      "purpose": "precipitation projections and derived indices",
      "freq": [
        "Hourly",
        "Hourly ( with 12h, 24h, 72h accumulation )",
        "Daily, 3 days, Pentad, Weekly, 10 days, Monthly ( with area over top 10% precipitation intensity )",
        "Hourly ( with past 12h, 24h, 72h accumulation )",
        "Monthly Drought Index (SPI)"
      ],
      "res": [
        "0.1 degree latitude/longitude"
      ],
      "extent": [
        "Global",
        "50E-160W 40N to 45S"
      ],
      "coverage": [
        "East Asia & Western Pacific",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "1998 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Binary/NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [
        "Precipitation information by GSMaP has been widely used, not only for scientific purposes, but also for meteorology, disaster preventions, climate monitoring, agricultural monitoring, public health, educations and so on. For specific examples, please see the Utilization book."
      ],
      "mode": "Nowcasting / Climate monitoring",
      "programmes": [
        "WMO SWCEM"
      ],
      "channels": [
        {
          "d": "JAXA FTP, GSMaP Web Site",
          "u": "https://sharaku.eorc.jaxa.jp/GSMaP/index.htm",
          "f": "Binary/NetCDF"
        },
        {
          "d": "JAXA FTP, GSMaP Web Site",
          "u": "ftp://semdp:SEMaP+1803@hokusai.eorc.jaxa.jp/GSMaP_GNRT/DATA",
          "f": "Binary/NetCDF"
        }
      ],
      "urls": [
        "https://sharaku.eorc.jaxa.jp/GSMaP/index.htm",
        "ftp://semdp:SEMaP+1803@hokusai.eorc.jaxa.jp/GSMaP_GNRT/DATA"
      ],
      "rows": [
        "JAXA!R2",
        "JAXA!R8",
        "SWCEM!R2",
        "SWCEM!R3",
        "SWCEM!R4",
        "SWCEM!R5",
        "SWCEM!R6"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time",
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product",
        "Standard product"
      ],
      "temporalSrc": [
        "since 1998"
      ],
      "nameSrc": "Global Satellite Mapping of Precipitation (GSMaP)"
    },
    {
      "id": "p52",
      "name": "Precipitation Intensity at Surface (Liquid or Solid)",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "precipitation projections (incl. extremes)",
      "freq": [
        "once/day"
      ],
      "res": [
        "0.1 degree latitude/longitude",
        "15km"
      ],
      "extent": [
        "Global ~40 degrees N and S latitude"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R3",
        "JAXA!R9"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time",
        "Near-real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Precipitation intensity at surface (liquid or solid)"
    },
    {
      "id": "p53",
      "name": "Brightness Temperature",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "Flood area estimation",
      "freq": [
        "once/day"
      ],
      "res": [
        "5 to 50 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R4"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Brightness temperature"
    },
    {
      "id": "p54",
      "name": "AMSR2 Surface Temperature",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "Heat waves",
      "freq": [
        "once/day"
      ],
      "res": [
        "15 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R5",
        "JAXA!R17"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time",
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Surface temperature"
    },
    {
      "id": "p55",
      "name": "SGLI Land Surface Temperature",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "GCOM-C (SGLI)"
      ],
      "inputs": [
        "Second generation GLobal Imager (SGLI) onbord GCOM-C"
      ],
      "purpose": "Heat waves",
      "freq": [
        "once/day"
      ],
      "res": [
        "250m, 1km, 1/24 degree latidute/longitude"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://suzaku.eorc.jaxa.jp/GCOM_C/data/update/Algorithm_LST_en.html",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://suzaku.eorc.jaxa.jp/GCOM_C/data/update/Algorithm_LST_en.html"
      ],
      "rows": [
        "JAXA!R6"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2018"
      ],
      "nameSrc": "Land surface temperature (LST)"
    },
    {
      "id": "p56",
      "name": "Shortwave Radiation",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Radiation & energy fluxes",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Heat waves",
      "freq": [
        "10 min"
      ],
      "res": [
        "5 km"
      ],
      "extent": [
        "60S-60N, 80E-160W"
      ],
      "coverage": [
        "East Asia & Western Pacific",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA Himawari Monitor",
          "u": "https://www.eorc.jaxa.jp/ptree/index.html",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.eorc.jaxa.jp/ptree/index.html"
      ],
      "rows": [
        "JAXA!R7"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2015"
      ],
      "nameSrc": "Short wave radiation"
    },
    {
      "id": "p57",
      "name": "AMSR2 All-Weather Sea Surface Wind Speed",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "wind speed projections",
      "freq": [
        "once/day"
      ],
      "res": [
        "60km"
      ],
      "extent": [
        "Global ~40 degrees N and S latitude"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R10"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "All-weather Sea surfave wind speed"
    },
    {
      "id": "p58",
      "name": "AMSR2 Sea Surface Wind Speed",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "wind speed projections",
      "freq": [
        "once/day"
      ],
      "res": [
        "15km"
      ],
      "extent": [
        "Global ~40 degrees N and S latitude"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R11"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Sea surfave wind speed"
    },
    {
      "id": "p59",
      "name": "AMSR2 Sea Surface Temperature",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "SST projections",
      "freq": [
        "once/day"
      ],
      "res": [
        "50km"
      ],
      "extent": [
        "Global ~40 degrees N and S latitude"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R12"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Sea surface temperature"
    },
    {
      "id": "p60",
      "name": "SGLI Sea Surface Temperature",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "GCOM-C (SGLI)"
      ],
      "inputs": [
        "Second generation GLobal Imager (SGLI) onbord GCOM-C"
      ],
      "purpose": "SST projections",
      "freq": [
        "8 days accumlation"
      ],
      "res": [
        "1/24 degree latitude/longitude"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://suzaku.eorc.jaxa.jp/GCOM_C/data/update/Algorithm_SST_en.html",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://suzaku.eorc.jaxa.jp/GCOM_C/data/update/Algorithm_SST_en.html"
      ],
      "rows": [
        "JAXA!R13"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2018"
      ],
      "nameSrc": "Sea surface temperature"
    },
    {
      "id": "p61",
      "name": "Himawari Sea Surface Temperature",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "SST projections",
      "freq": [
        "10 min"
      ],
      "res": [
        "2km"
      ],
      "extent": [
        "60S-60N, 80E-160W"
      ],
      "coverage": [
        "East Asia & Western Pacific",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA Himawari Monitor",
          "u": "https://www.eorc.jaxa.jp/ptree/index.html",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.eorc.jaxa.jp/ptree/index.html"
      ],
      "rows": [
        "JAXA!R14"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2015"
      ],
      "nameSrc": "Sea surface temperature"
    },
    {
      "id": "p62",
      "name": "GSMaP Standardized Precipitation Index (SPI)",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation"
      ],
      "inputs": [
        "Dual-frequency Precipitation Radar (DPR) onboard GPM core satellites, other GPM passive microwave constellation satellites, and Geostationary satellites"
      ],
      "purpose": "precipitation projections",
      "freq": [
        "Monthly"
      ],
      "res": [
        "0.25 degree latitude/longitude"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1998 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Binary/NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [
        "Precipitation information by GSMaP has been widely used, not only for scientific purposes, but also for meteorology, disaster preventions, climate monitoring, agricultural monitoring, public health, educations and so on. For specific examples, please see the Utilization book."
      ],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA FTP, GSMaP Web Site",
          "u": "https://sharaku.eorc.jaxa.jp/GSMaP_CLM/index_j.htm",
          "f": "Binary/NetCDF"
        }
      ],
      "urls": [
        "https://sharaku.eorc.jaxa.jp/GSMaP_CLM/index_j.htm"
      ],
      "rows": [
        "JAXA!R15"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 1998"
      ],
      "nameSrc": "Global Satellite Mapping of Precipitation (GSMaP), SPI"
    },
    {
      "id": "p63",
      "name": "Soil Moisture Content",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "Soil moisure projections",
      "freq": [
        "once/day"
      ],
      "res": [
        "50km"
      ],
      "extent": [
        "Global ~40 degrees N and S latitude"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R16"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Soil Moisture Content"
    },
    {
      "id": "p64",
      "name": "Snow Depth",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "GCOM-W (AMSR2)"
      ],
      "inputs": [
        "Advanced Microwave Scanning Radiometer 2 (AMSR2) onboard GCOM-W"
      ],
      "purpose": "droughts",
      "freq": [
        "once/day"
      ],
      "res": [
        "30 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://gportal.jaxa.jp/gpr/information/beginner1",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://gportal.jaxa.jp/gpr/information/beginner1"
      ],
      "rows": [
        "JAXA!R18"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2012"
      ],
      "nameSrc": "Snow depth"
    },
    {
      "id": "p65",
      "name": "SGLI Wildfire, Daytime",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "GCOM-C (SGLI)"
      ],
      "inputs": [
        "Second generation GLobal Imager (SGLI) onbord GCOM-C"
      ],
      "purpose": "Wild fire detection",
      "freq": [
        "once/day"
      ],
      "res": [
        "250 m"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "CSV"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JASMES",
          "u": "https://www.eorc.jaxa.jp/JASMES/index_map.html",
          "f": "CSV"
        }
      ],
      "urls": [
        "https://www.eorc.jaxa.jp/JASMES/index_map.html"
      ],
      "rows": [
        "JAXA!R19"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2018"
      ],
      "nameSrc": "Wild Fire Daytime"
    },
    {
      "id": "p66",
      "name": "SGLI Wildfire Radiative Power, Nighttime",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "GCOM-C (SGLI)"
      ],
      "inputs": [
        "Second generation GLobal Imager (SGLI) onbord GCOM-C"
      ],
      "purpose": "Wild fire radiative power monitoring",
      "freq": [
        "once/day"
      ],
      "res": [
        "250 m"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "CSV"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JASMES",
          "u": "https://www.eorc.jaxa.jp/JASMES/index_map.html",
          "f": "CSV"
        }
      ],
      "urls": [
        "https://www.eorc.jaxa.jp/JASMES/index_map.html"
      ],
      "rows": [
        "JAXA!R20"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2018"
      ],
      "nameSrc": "Wild Fire Radiative Power (FRP) Nighttime"
    },
    {
      "id": "p67",
      "name": "Himawari Wildfire",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "wild fire",
      "freq": [
        "10 minute"
      ],
      "res": [
        "2 km"
      ],
      "extent": [
        "60S-60N, 80E-160W"
      ],
      "coverage": [
        "East Asia & Western Pacific",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "CSV"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA Himawari Monitor",
          "u": "https://www.eorc.jaxa.jp/ptree/index.html",
          "f": "CSV"
        }
      ],
      "urls": [
        "https://www.eorc.jaxa.jp/ptree/index.html"
      ],
      "rows": [
        "JAXA!R21"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2015"
      ],
      "nameSrc": "Wild Fire"
    },
    {
      "id": "p68",
      "name": "SGLI Aerosol Properties (ARNP)",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "GCOM-C (SGLI)"
      ],
      "inputs": [
        "Second generation GLobal Imager (SGLI) onbord GCOM-C"
      ],
      "purpose": "Monitoring of aerosol, dust and volcanic ash distribution",
      "freq": [
        "once/day"
      ],
      "res": [
        "1km, 1/24 degree latitude/longitude"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA G-Portal",
          "u": "https://suzaku.eorc.jaxa.jp/GCOM_C/data/update/Algorithm_ARNP_en.html",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://suzaku.eorc.jaxa.jp/GCOM_C/data/update/Algorithm_ARNP_en.html"
      ],
      "rows": [
        "JAXA!R22"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Standard product"
      ],
      "temporalSrc": [
        "since 2018"
      ],
      "nameSrc": "Aerosol Properties (ARNP)"
    },
    {
      "id": "p69",
      "name": "Himawari Aerosol Properties",
      "provider": "JAXA",
      "operator": "JAXA",
      "operators": [
        "JAXA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Himawari-8/9"
      ],
      "inputs": [
        "Himawari satellite"
      ],
      "purpose": "Monitoring of aerosol, dust and volcanic ash distribution",
      "freq": [
        "10 min (daytime only)"
      ],
      "res": [
        "5 km"
      ],
      "extent": [
        "60S-60N, 80E-160W"
      ],
      "coverage": [
        "East Asia & Western Pacific",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "JAXA data policy (earth.jaxa.jp/en/data/policy)"
      ],
      "status": "Research product",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "JAXA Himawari Monitor",
          "u": "https://www.eorc.jaxa.jp/ptree/index.html",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.eorc.jaxa.jp/ptree/index.html"
      ],
      "rows": [
        "JAXA!R23"
      ],
      "training": [],
      "latencyRaw": [
        "Near real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "since 2015"
      ],
      "nameSrc": "Aerosol Property"
    },
    {
      "id": "p70",
      "name": "Streamflow (m³/s)",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Drought monitoring",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America, Central Asia",
        "North America"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R2",
        "NASA!R19"
      ],
      "training": [
        "https://www.earthdata.nasa.gov/learn/trainings/monitoring-modeling-floods-using-earth-observations"
      ],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "In-Development"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Streamflow [m3/s]"
    },
    {
      "id": "p71",
      "name": "Flooded Area (km²)",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Inland flooding",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America, Central Asia"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R3"
      ],
      "training": [
        "https://www.earthdata.nasa.gov/learn/trainings/monitoring-modeling-floods-using-earth-observations"
      ],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "In-Development"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Flooded area [km2]"
    },
    {
      "id": "p72",
      "name": "GeoNEX",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts",
        "Fires"
      ],
      "group": "Climate datasets & projections",
      "satellites": [
        "Multiple / not specified"
      ],
      "inputs": [
        "Satellite: geostationary"
      ],
      "purpose": "Land surface temperature",
      "freq": [
        "Sub-daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "Global sub-polar (<60 deg) when MTG data are available"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "N/A"
      ],
      "latency": "Delayed mode",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Ian Brosnan (ian.g.brosnan@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://data.nas.nasa.gov/geonex/",
          "f": "HDF"
        }
      ],
      "urls": [
        "https://data.nas.nasa.gov/geonex/"
      ],
      "rows": [
        "NASA!R4",
        "NASA!R13",
        "NASA!R20"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "N/A"
      ],
      "nameSrc": "GeoNEX"
    },
    {
      "id": "p73",
      "name": "NEX-GDDP-CMIP6 (NASA Earth eXchange Global Daily Downscaled Projection)",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts",
        "Fires"
      ],
      "group": "Climate datasets & projections",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple space and ground-based observations and re-analysis"
      ],
      "purpose": "Precipitation projections and derived indices",
      "freq": [
        "Daily"
      ],
      "res": [
        "0.25 deg"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1950 – 2100"
      ],
      "latency": "Delayed mode",
      "formats": [
        "NetCDF, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Ian Brosnan (ian.g.brosnan@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6",
          "f": "NetCDF, imagery"
        }
      ],
      "urls": [
        "https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6"
      ],
      "rows": [
        "NASA!R5",
        "NASA!R14",
        "NASA!R21"
      ],
      "training": [
        "https://www.earthdata.nasa.gov/learn/trainings/assessing-extreme-weather-statistics-using-nasa-earth-exchange-global-daily"
      ],
      "latencyRaw": [
        "Static projection"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "1950 - 2100"
      ],
      "nameSrc": "NEX-GDDP-CMIP6 (NASA Earth eXchange Global Daily Downscaled Projection)"
    },
    {
      "id": "p74",
      "name": "Land Surface Temperature",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Heat extremes",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R6"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Land surface temperature (K)"
    },
    {
      "id": "p75",
      "name": "Evapotranspiration",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Drought monitoring",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R7",
        "NASA!R17"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product",
        "in-Development"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Evapotranspiration"
    },
    {
      "id": "p76",
      "name": "Over-Ocean Surface Wind Speed, Soil Moisture and Inundation",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "CYGNSS"
      ],
      "inputs": [
        "Satellite: CYGNSS"
      ],
      "purpose": "Tropical cyclone prediction, ocean surface winds, drough and flood prediction",
      "freq": [
        "Median revisit time ~3 hours"
      ],
      "res": [
        "25 km"
      ],
      "extent": [
        "Global tropics between ~35 degrees N and S latitude"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2016 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Christopher Ruf (cruf@umich.edu)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://podaac.jpl.nasa.gov/CYGNSS?tab=mission-objectives&sections=about%2Bdata",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://podaac.jpl.nasa.gov/CYGNSS?tab=mission-objectives&sections=about%2Bdata"
      ],
      "rows": [
        "NASA!R8"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2016 - present"
      ],
      "nameSrc": "Over-ocean surface wind speed, soil moisture, and inundation"
    },
    {
      "id": "p77",
      "name": "GPM Derived Accumulated Precipitation",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation"
      ],
      "inputs": [
        "Satellite: GPM"
      ],
      "purpose": "Tropical cyclone prediction, rainfall, flooding, storm surge potential - also fits under flooding",
      "freq": [
        "Median revisit time ~6 hrs"
      ],
      "res": [
        "varies by sensor"
      ],
      "extent": [
        "Global ~65 latitude N/S"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2014 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Emily Berndt (emily.b.berndt@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal",
          "u": "https://weather.ndc.nasa.gov/sport/",
          "f": "NetCDF, imagery"
        }
      ],
      "urls": [
        "https://weather.ndc.nasa.gov/sport/"
      ],
      "rows": [
        "NASA!R9"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2014 - present"
      ],
      "nameSrc": "GPM derived accumulated precipitatin"
    },
    {
      "id": "p78",
      "name": "Sea Surface Temperature",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)",
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: MODIS and VIIRS blended with OSTIA and NESDIS global products"
      ],
      "purpose": "Tropical cyclone prediction",
      "freq": [
        "2x daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "Northern hemisphere"
      ],
      "coverage": [
        "Americas",
        "Europe, Middle East & Africa",
        "East Asia & Western Pacific",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "Rolling archive (no start date given)"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Emily Berndt (emily.b.berndt@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal",
          "u": "https://weather.ndc.nasa.gov/sport/",
          "f": "NetCDF, imagery"
        }
      ],
      "urls": [
        "https://weather.ndc.nasa.gov/sport/"
      ],
      "rows": [
        "NASA!R10"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "Rolling archive"
      ],
      "nameSrc": "Sea Surface Temperature"
    },
    {
      "id": "p79",
      "name": "IMERG Derived Accumulated Precipitation",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: IMERG"
      ],
      "purpose": "Tropical cyclone prediction, rainfall, flooding, storm surge potential - also fits under droughts and flooding",
      "freq": [
        "30 min"
      ],
      "res": [
        "10 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "Rolling archive (no start date given)"
      ],
      "latency": "Delayed mode",
      "formats": [
        "NetCDF, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Emily Berndt (emily.b.berndt@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal",
          "u": "https://weather.ndc.nasa.gov/sport/",
          "f": "NetCDF, imagery"
        }
      ],
      "urls": [
        "https://weather.ndc.nasa.gov/sport/"
      ],
      "rows": [
        "NASA!R11"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "Rolling archive"
      ],
      "nameSrc": "IMERG derived accululated precipitation"
    },
    {
      "id": "p80",
      "name": "SPoRT Real-Time Land Information System (LIS)",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)",
        "Terra / Aqua (MODIS, AIRS)",
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: MODIS, VIIRS"
      ],
      "purpose": "Tropical cyclone hazard prediction, flooding, storm surge potential - Also fits under droughts and flooding",
      "freq": [
        "Hourly"
      ],
      "res": [
        "3 km"
      ],
      "extent": [
        "CONUS +Alaska"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2010 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Christopher Hain (christopher.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal",
          "u": "https://weather.ndc.nasa.gov/sport/",
          "f": "NetCDF, imagery"
        }
      ],
      "urls": [
        "https://weather.ndc.nasa.gov/sport/"
      ],
      "rows": [
        "NASA!R12"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2010 - present"
      ],
      "nameSrc": "SPoRT real-time LIS (Land Information System)"
    },
    {
      "id": "p81",
      "name": "Soil Moisture",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Drought monitoring",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R15"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "In-Development"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Soil moisture"
    },
    {
      "id": "p82",
      "name": "Terrestrial Water Storage",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Drought monitoring",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R16"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "In-Development"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Terrestrial water storage"
    },
    {
      "id": "p83",
      "name": "Snow Water Equivalent",
      "provider": "NASA MSFC",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Multiple inputs assimilated: NLDAS3"
      ],
      "purpose": "Drought monitoring",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "North America"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "Chris Hain (chris.hain@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://ldas.gsfc.nasa.gov/nldas/v3",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://ldas.gsfc.nasa.gov/nldas/v3"
      ],
      "rows": [
        "NASA!R18"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "In-Development"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "Snow water equivalent"
    },
    {
      "id": "p84",
      "name": "MODIS Active Fire Daily (MOD14A1)",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: MODIS on Terra"
      ],
      "purpose": "Location of active fires on a set grid. This product is often used in scientific research",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2001 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Louis Giglio (lgiglio@umd.edu)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf",
          "f": "HDF"
        }
      ],
      "urls": [
        "https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf"
      ],
      "rows": [
        "NASA!R22"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2001 - present"
      ],
      "nameSrc": "MODIS Active Fire Daily (MOD14A1)"
    },
    {
      "id": "p85",
      "name": "MODIS Active Fire Daily (MYD14A1)",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: MODIS on Aqua"
      ],
      "purpose": "Location of active fires on a set grid. This product is often used in scientific research",
      "freq": [
        "Daily"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2002 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "HDF"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Louis Giglio (lgiglio@umd.edu)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf",
          "f": "HDF"
        }
      ],
      "urls": [
        "https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf"
      ],
      "rows": [
        "NASA!R23"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2002 - present"
      ],
      "nameSrc": "MODIS Active Fire Daily (MYD14A1)"
    },
    {
      "id": "p86",
      "name": "MODIS Active Fire Location Product (MCD14ML)",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: MODIS on Terra and Aqua"
      ],
      "purpose": "Fire location product is often used in media stories, operational fire management agencies",
      "freq": [
        ">4 times a day"
      ],
      "res": [
        "1 km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2001 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Raw data"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Louis Giglio (lgiglio@umd.edu)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal",
          "u": "https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf",
          "f": "Raw data"
        }
      ],
      "urls": [
        "https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf"
      ],
      "rows": [
        "NASA!R24"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2001 - present"
      ],
      "nameSrc": "MODIS Active Fire Location Product (MCD14ML)"
    },
    {
      "id": "p87",
      "name": "MODIS Burned Area Product (MCD64A1)",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: MODIS on Terra and Aqua"
      ],
      "purpose": "This product maps the burned pixels. Since this is a delayed product, it is often used in scientific research for post-fire severity analyses. fire trend analyses etc.",
      "freq": [
        "Daily"
      ],
      "res": [
        "500 m"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2001 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "HDF, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Louis Giglio (lgiglio@umd.edu)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://modis-fire.umd.edu/files/MODIS_C61_BA_User_Guide_1.1.pdf",
          "f": "HDF, imagery"
        }
      ],
      "urls": [
        "https://modis-fire.umd.edu/files/MODIS_C61_BA_User_Guide_1.1.pdf"
      ],
      "rows": [
        "NASA!R25"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2001 - present"
      ],
      "nameSrc": "MODIS Burned Area Product (MCD64A1)"
    },
    {
      "id": "p88",
      "name": "Fire Information for Resource Management System (FIRMS)",
      "provider": "NASA",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Himawari-8/9",
        "JPSS (S-NPP, NOAA-20/21)",
        "GOES",
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: MODIS (on Terra & Aqua), VIIRS (on S-NPP, NOAA-20, NOAA-21), and geostationary satellites including GOES (NOAA) and Himawari (JAXA)"
      ],
      "purpose": "Identifying and tracking global active wildfires and hotspots in near-real-time.",
      "freq": [
        "Varies by sensor"
      ],
      "res": [
        "Varies by sensor"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2000 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Diane Davies (diane.k.davies@nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal",
          "u": "https://firms.modaps.eosdis.nasa.gov",
          "f": "Imagery"
        }
      ],
      "urls": [
        "https://firms.modaps.eosdis.nasa.gov"
      ],
      "rows": [
        "NASA!R26"
      ],
      "training": [
        "https://www.earthdata.nasa.gov/learn/trainings/introduction-nasa-earth-observations-tools-wildfire-monitoring-management"
      ],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2000 - present"
      ],
      "nameSrc": "Fire Information for Resource Management System (FIRMS)"
    },
    {
      "id": "p89",
      "name": "AIRS Rapid Response: Latest Sulfur Dioxide and Dust Detection",
      "provider": "NASA JPL",
      "operator": "NASA",
      "operators": [
        "NASA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "inputs": [
        "Satellite: AIRS on Aqua"
      ],
      "purpose": "NRT monitoring of atmospheric dust / ash / SO2 for potential warning for air traffic, etc",
      "freq": [
        "Daily"
      ],
      "res": [
        "15 km"
      ],
      "extent": [
        "Alaska Volcanoes"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2019 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "KMZ, imagery"
      ],
      "access": "Free / open",
      "policy": [
        "Open access"
      ],
      "status": "Research product",
      "poc": [
        "Joao Teixeira (Joao.Teixeira@jpl.nasa.gov)"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Data server/archive",
          "u": "https://airs.jpl.nasa.gov/applications/volcano/",
          "f": "KMZ, imagery"
        }
      ],
      "urls": [
        "https://airs.jpl.nasa.gov/applications/volcano/"
      ],
      "rows": [
        "NASA!R27"
      ],
      "training": [],
      "latencyRaw": [
        "Near-real-time"
      ],
      "statusRaw": [
        "Research product"
      ],
      "temporalSrc": [
        "2019 - present"
      ],
      "nameSrc": "AIRS Rapid Response: Latest Sulfur Dioxide and Dust Detection"
    },
    {
      "id": "p90",
      "name": "NOAA/NCEI Blended Seawinds (NBS)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "DMSP",
        "QuikSCAT"
      ],
      "inputs": [
        "NOAA Partrners Satellites: DMSP SSM/I, AMSR, AMSR-E, QuikSCAT, ASACT"
      ],
      "purpose": "shiping routine service, storm monitoring, input for model forecasts of the ocean and weather, coastal flloding, enginerring construnction",
      "freq": [
        "Daily"
      ],
      "res": [
        "0.25-degree grid"
      ],
      "extent": [
        "Global Ocean"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1987 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, ZRR"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "ncei.satellite.ocean.internal@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ncei.noaa.gov/products/blended-sea-winds",
          "f": "NetCDF, ZRR"
        }
      ],
      "urls": [
        "https://www.ncei.noaa.gov/products/blended-sea-winds"
      ],
      "rows": [
        "NOAA!R2"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1987 - present"
      ],
      "nameSrc": "NOAA/NCEI Blended Seawinds (NBS) product"
    },
    {
      "id": "p91",
      "name": "Tropical Cyclone Formation Probability (TCFP)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Himawari-8/9",
        "Meteosat (MSG)",
        "GOES"
      ],
      "inputs": [
        "GOES ABI MSG SEVIRI HIMAWARI AHI"
      ],
      "purpose": "Provides short-term forecasts of global tropical cyclogenesis.",
      "freq": [
        "0-48 hour (2-Day)"
      ],
      "res": [
        "1 degree grid"
      ],
      "extent": [
        "Global tropical (45 S-45 N)"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "Not yet archived"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "aiwu.li@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "NCEI/CLASS, NOAA PDA",
          "u": "https://origin-east-01-www-ospo.woc.noaa.gov/Products_/ocean/tropical/tcfp/tcfp-main.html",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://origin-east-01-www-ospo.woc.noaa.gov/Products_/ocean/tropical/tcfp/tcfp-main.html"
      ],
      "rows": [
        "NOAA!R3"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "To be archived"
      ],
      "nameSrc": "Tropical Cyclone Formation Probability (TCFP)"
    },
    {
      "id": "p92",
      "name": "Advanced Dvorak Technique (ADT)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Himawari-8/9",
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Meteosat (MSG)",
        "GOES"
      ],
      "inputs": [
        "GOES ABI MSG SEVIRI HIMAWARI AHI GPM GMI GCOM-W1 AMSR2"
      ],
      "purpose": "Hurricane intensity and path forecast",
      "freq": [
        "30min"
      ],
      "res": [
        "N/A"
      ],
      "extent": [
        "Storm region"
      ],
      "coverage": [
        "Not specified"
      ],
      "temporal": [
        "2008 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "ATCF FIX"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "aiwu.li@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ospo.noaa.gov/products/ocean/tropical/adt.html",
          "f": "ATCF FIX"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/ocean/tropical/adt.html"
      ],
      "rows": [
        "NOAA!R4"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2008-present"
      ],
      "nameSrc": "Advanced Dvorak Technique (ADT)"
    },
    {
      "id": "p93",
      "name": "Multiplatform Tropical Cyclone Surface Winds Analysis (MTCSWA)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Himawari-8/9",
        "Meteosat (MSG)",
        "Metop",
        "GOES"
      ],
      "inputs": [
        "GOES ABI MSG SEVIRI HIMAWARI AHI MetOp-B/C ASCAT"
      ],
      "purpose": "Tropical storm characteristics products (e.g. wind, pressure, structure)",
      "freq": [
        "3 hours"
      ],
      "res": [
        "10 km"
      ],
      "extent": [
        "Storm region"
      ],
      "coverage": [
        "Not specified"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF ATCF FIX"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "aiwu.li@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://www.ospo.noaa.gov/products/ocean/tropical/mtcswa.html",
          "f": "NetCDF ATCF FIX"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/ocean/tropical/mtcswa.html"
      ],
      "rows": [
        "NOAA!R5"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021-present"
      ],
      "nameSrc": "Multiplatform Tropical Cyclone Surface Winds Analysis (MTCSWA)"
    },
    {
      "id": "p94",
      "name": "Ensemble Tropical Rainfall Potential (eTRaP)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Himawari-8/9",
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Meteosat (MSG)",
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "GOES",
        "DMSP"
      ],
      "inputs": [
        "GOES ABI MSG SEVIRI HIMAWARI AHI MetOp-B/C AMSU-A,HMS NPP/N20 ATMS DMSP SSMIS GCOM-W1 AMSR2 GPM GMI"
      ],
      "purpose": "Used for deterministic and probabilistic rain forecasts for each of four 6h and the 24 hour cumulative time period.",
      "freq": [
        "6 hours"
      ],
      "res": [
        "8km"
      ],
      "extent": [
        "Storm region"
      ],
      "coverage": [
        "Not specified"
      ],
      "temporal": [
        "2010 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Binary, tar"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "aiwu.li@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, NCEI",
          "u": "https://www.ospo.noaa.gov/products/ocean/tropical/etrap.html",
          "f": "Binary, tar"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/ocean/tropical/etrap.html"
      ],
      "rows": [
        "NOAA!R6"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2010-present"
      ],
      "nameSrc": "Ensemble Tropical Rainfall Potential (eTRaP)"
    },
    {
      "id": "p95",
      "name": "Hurricane Intensity and Structure Algorithm (HISA)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "inputs": [
        "MetOp B, C AMSU-A/MHS NPP/N20/N21 ATMS"
      ],
      "purpose": "Provides estimates of tropical cyclone maximum wind speed, minimum sea level pressure, and wind radii",
      "freq": [
        "2 hours"
      ],
      "res": [
        "0.2 degree grid"
      ],
      "extent": [
        "Storm region"
      ],
      "coverage": [
        "Not specified"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF ATCF FIX"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "aiwu.li@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://www.ospo.noaa.gov/products/ocean/tropical/mwtc.html",
          "f": "NetCDF ATCF FIX"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/ocean/tropical/mwtc.html"
      ],
      "rows": [
        "NOAA!R7"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2015-present"
      ],
      "nameSrc": "Hurricane Intensity and Structure Algorithm (HISA)"
    },
    {
      "id": "p96",
      "name": "Dvorak Classification Technique",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Multiple / not specified"
      ],
      "inputs": [
        "Various Satellites"
      ],
      "purpose": "T number and position estimates",
      "freq": [
        "6 hours"
      ],
      "res": [
        "N/A"
      ],
      "extent": [
        "Almost Global Ocean"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1974 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Text"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Not stated",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ospo.noaa.gov/products/ocean/tropical/tdpositions.html",
          "f": "Text"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/ocean/tropical/tdpositions.html"
      ],
      "rows": [
        "NOAA!R8"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [],
      "temporalSrc": [
        "1974-present"
      ],
      "nameSrc": "Dvorak Classification Technique"
    },
    {
      "id": "p97",
      "name": "ASCAT Ocean Surface Winds",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "MetOp B/C ASCAT"
      ],
      "purpose": "weather observation and forecast; Storm analysis and forecast; NWP models input",
      "freq": [
        "3 mins"
      ],
      "res": [
        "25km; 50km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2008 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, BUFR"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Hongming.Qi@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA, CLASS",
          "u": "https://www.ospo.noaa.gov/products/atmosphere/ascat/winds.html",
          "f": "NetCDF, BUFR"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/atmosphere/ascat/winds.html"
      ],
      "rows": [
        "NOAA!R9"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2008 - present"
      ],
      "nameSrc": "ASCAT Ocean Surface Winds"
    },
    {
      "id": "p98",
      "name": "ASCAT Ultra High-Resolution Winds",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "MetOp B/C ASCAT"
      ],
      "purpose": "weather observation and forecast; Storm analysis and forecast",
      "freq": [
        "storm based"
      ],
      "res": [
        "4.45km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2008 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Hongming.Qi@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA",
          "u": "https://www.ospo.noaa.gov/products/atmosphere/ascat/uhr/winds/",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/atmosphere/ascat/uhr/winds/"
      ],
      "rows": [
        "NOAA!R10"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2008 - present"
      ],
      "nameSrc": "ASCAT Ultra High Resolution Winds"
    },
    {
      "id": "p99",
      "name": "SAR High-Resolution Tropical Cyclone Wind Speeds",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Sentinel (Copernicus)",
        "RADARSAT / RCM"
      ],
      "inputs": [
        "Sentinel 1, RadarSAT Constillation Mission, RadarSAT 2"
      ],
      "purpose": "Determining surface wind speeds and surface level storm structure for tropical cyclones , ATCF",
      "freq": [
        "Variable, programable"
      ],
      "res": [
        "500 m"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GeoTIFF, text, NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "sean.helfrich@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online",
          "u": "https://www.star.nesdis.noaa.gov/socd/mecb/sar/sarwinds_tropical.php",
          "f": "GeoTIFF, text, NetCDF"
        }
      ],
      "urls": [
        "https://www.star.nesdis.noaa.gov/socd/mecb/sar/sarwinds_tropical.php"
      ],
      "rows": [
        "NOAA!R11"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Pre-Operational"
      ],
      "temporalSrc": [
        "2015-Present"
      ],
      "nameSrc": "SAR High Resolution Tropical Cyclone Wind Speeds"
    },
    {
      "id": "p100",
      "name": "Blended Total Precipitable Water (bTPW)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "GOES",
        "DMSP"
      ],
      "inputs": [
        "GOES TPW MetOp-B/C AMSU-A,HMS NPP/N20 ATMS DMSP SSMIS Ground-based GPS retrievals"
      ],
      "purpose": "Monitoring atmospheric water vapor. Specific phenominon include atmospheric rivers, moisture plumes, dry patches of atmosphere, environmental and advected tropical cyclone moisture",
      "freq": [
        "Hourly"
      ],
      "res": [
        "25 km"
      ],
      "extent": [
        "gloabal"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2010 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "john.knaff@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://www.ospo.noaa.gov/products/bTPW/",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/bTPW/"
      ],
      "rows": [
        "NOAA!R12"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2010-present"
      ],
      "nameSrc": "bTPW (blended TPW)"
    },
    {
      "id": "p101",
      "name": "Advective Layered Precipitable Water (ALPW)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "DMSP"
      ],
      "inputs": [
        "MetOp-B/C AMSU-A,HMS NPP/N20 ATMS DMSP SSMIS Ground-based GPS retrievals"
      ],
      "purpose": "Monitoring atmospheric water vapor. Specific phenominon include atmospheric rivers, moisture plumes, dry patches of atmosphere, environmental and advected tropical cyclone moisture",
      "freq": [
        "Hourly"
      ],
      "res": [
        "25 km"
      ],
      "extent": [
        "global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "john.knaff@noaa.gov"
      ],
      "comments": [
        "Transition is occuring 25 September 2024 ospo page does not exist yet"
      ],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://www.star.nesdis.noaa.gov/star/documents/meetings/2020JPSSGOES/Posters/C_11_Kusselson_Forsythe_final_2019_Annual_NWA_Poster_ALPW_Sep2019.pdf",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.star.nesdis.noaa.gov/star/documents/meetings/2020JPSSGOES/Posters/C_11_Kusselson_Forsythe_final_2019_Annual_NWA_Poster_ALPW_Sep2019.pdf"
      ],
      "rows": [
        "NOAA!R13"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2024-present"
      ],
      "nameSrc": "ALPW (advective layered precipitable water)"
    },
    {
      "id": "p102",
      "name": "Extended Reconstructed Sea Surface Temperature (ERSST)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "In-Situ Sensors"
      ],
      "purpose": "Used for NOAA official El Nino index calculation, linked to climate moitoring including drought and flooding",
      "freq": [
        "Monthly"
      ],
      "res": [
        "2-degree grid"
      ],
      "extent": [
        "Global Ocean"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1850 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "ersst.contact@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ncei.noaa.gov/products/extended-reconstructed-sst",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ncei.noaa.gov/products/extended-reconstructed-sst"
      ],
      "rows": [
        "NOAA!R14"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1850 - present"
      ],
      "nameSrc": "Extended Reconstructed Sea Surface Temperature (ERSST)"
    },
    {
      "id": "p103",
      "name": "NOAA Global Land+Ocean Surface Temperature Analysis (NOAAGlobalTemp)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "In-Situ Sensors"
      ],
      "purpose": "Global climate monitoring include droughts, fires, heatwaves, etc.",
      "freq": [
        "Monthly"
      ],
      "res": [
        "5-degree grid"
      ],
      "extent": [
        "global, Land+Ocean surface"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1850 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Not stated",
      "poc": [
        "ncei.noaaglobaltemp.help@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ncei.noaa.gov/products/land-based-station/noaa-global-temp",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ncei.noaa.gov/products/land-based-station/noaa-global-temp"
      ],
      "rows": [
        "NOAA!R15"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [],
      "temporalSrc": [
        "1850 - present"
      ],
      "nameSrc": "NOAA Global Land+Ocean Surface Temperature Analysis (NOAAGlobalTemp)"
    },
    {
      "id": "p104",
      "name": "Vegetation Health Products (VHP)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "inputs": [
        "S-NPP/NOAA-20/NOAA-21 VIIRS"
      ],
      "purpose": "Drought monitoring. Provide estimates of the Vegetation Condition Index, Temperature Condition Index and Vegetation Health Index. These indices are designed to characterize moisture and thermal and total vegetation health conditions in response to weather impacts.",
      "freq": [
        "Weekly"
      ],
      "res": [
        "1km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2013 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Hanjun.Ding@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA, CLASS",
          "u": "https://www.ospo.noaa.gov/products/land/vvhp/",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/land/vvhp/"
      ],
      "rows": [
        "NOAA!R16"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2013 - present"
      ],
      "nameSrc": "Vegetation Health Products (VHP)"
    },
    {
      "id": "p105",
      "name": "MiRS Precipitation Rate; GAASP Precipitation Rate; Snowfall Rate",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Droughts",
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "DMSP",
        "NOAA-19"
      ],
      "inputs": [
        "S-NPP/NOAA-20/NOAA-21 ATMS Metop-B/Metop-C/NOAA-19 AMSU-A/MHS GPM GMI GCOM-W AMSR2 DMSP SSMIS"
      ],
      "purpose": "Prediction of drought based on precipitation (rain and snowfall for snow pack information)",
      "freq": [
        "25 min - 4 hours"
      ],
      "res": [
        "4x7 km - 16 km at nadir"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2007 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Liqun.Ma@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA, CLASS",
          "u": "https://www.ospo.noaa.gov/products/atmosphere/mirs/index.html https://www.ospo.noaa.gov/products/atmosphere/sfr/index.html https://sfr.umd.edu",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/atmosphere/mirs/index.html",
        "https://www.ospo.noaa.gov/products/atmosphere/sfr/index.html",
        "https://sfr.umd.edu"
      ],
      "rows": [
        "NOAA!R17",
        "NOAA!R21"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2007 - present"
      ],
      "nameSrc": "MiRS Precipitation Rate GAASP Precipitation Rate Snowfall Rate"
    },
    {
      "id": "p106",
      "name": "Hazard Mapping System Fire and Smoke Product",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)",
        "GOES"
      ],
      "inputs": [
        "S-NPP VIIRS, NOAA-20/21 VIIRS, GOES ABI"
      ],
      "purpose": "Provide current analysis of fire and smoke",
      "freq": [
        "Continuously Updated Daily 8 am - 10 pm"
      ],
      "res": [
        "N/A"
      ],
      "extent": [
        "14.6 N - 72 N, 50 W - 170 W, over land"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "2003 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "CSV/shapefile"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Not stated",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ospo.noaa.gov/products/land/hms.html",
          "f": "CSV/shapefile"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/land/hms.html"
      ],
      "rows": [
        "NOAA!R18"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [],
      "temporalSrc": [
        "2003-present"
      ],
      "nameSrc": "Hazard Mapping System Fire and Smoke Product"
    },
    {
      "id": "p107",
      "name": "NUCAPS Temperature, Moisture, Ozone and CO Vertical Profiles",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "inputs": [
        "MetOp IASI/AMSU-A/MHS NPP/N20/N21 CrIS/ATMS"
      ],
      "purpose": "",
      "freq": [
        "Daily"
      ],
      "res": [
        "50 km"
      ],
      "extent": [
        "global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2014 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, binary"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Ken.Pryor@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://www.ospo.noaa.gov/products/atmosphere/soundings/heap/skewt/WORLD.html",
          "f": "NetCDF, binary"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/atmosphere/soundings/heap/skewt/WORLD.html"
      ],
      "rows": [
        "NOAA!R19"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2014-present"
      ],
      "nameSrc": "NUCAPS temperature/moisture/ozone/CO vertical profiles"
    },
    {
      "id": "p108",
      "name": "Enterprise Fire (eFire)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "inputs": [
        "S-NPP/NOAA-20/NOAA-21 VIIRS"
      ],
      "purpose": "Detect active fires/hot spots by using multiple satellite sensors.",
      "freq": [
        "15 mins"
      ],
      "res": [
        "N/A"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2023 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Hanjun.Ding@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA, CLASS",
          "u": "https://www.ospo.noaa.gov/products/land/efire.html",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/land/efire.html"
      ],
      "rows": [
        "NOAA!R20"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2023 - present"
      ],
      "nameSrc": "Enterprise Fire (eFire)"
    },
    {
      "id": "p109",
      "name": "Flood Inundation Mapping Extent, Downscaled Flood Depth and Extent, Blended FIM",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Himawari-8/9",
        "JPSS (S-NPP, NOAA-20/21)",
        "GOES"
      ],
      "inputs": [
        "VIiRS (all), GOES ABI (All), Himawari AHI"
      ],
      "purpose": "Detection of current flood extent and severity",
      "freq": [
        "1 hr for GOES and AHI, 1 day for VIIRS"
      ],
      "res": [
        "375 m for VIIRS, 1km for ABI/AHI, 1km for Blended, 30m for downscaled VIIRS flood extent and depth"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2016 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, GeoTIFF, COG"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "sean.helfrich@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA, CLASS, online",
          "u": "https://www.ssec.wisc.edu/flood-map-demo/flood-products/",
          "f": "NetCDF, GeoTIFF, COG"
        }
      ],
      "urls": [
        "https://www.ssec.wisc.edu/flood-map-demo/flood-products/"
      ],
      "rows": [
        "NOAA!R22"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2016 - Present"
      ],
      "nameSrc": "Flood Inundation Mapping Extent, Downscaled Flood Depth and Extent, Blended FIM"
    },
    {
      "id": "p110",
      "name": "Flood Inundation Mapping Extent and Depth",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Sentinel (Copernicus)",
        "RADARSAT / RCM"
      ],
      "inputs": [
        "Sentinel 1, RadarSAT Constillation Mission, RadarSAT 2"
      ],
      "purpose": "Detection of current flood extent and severity",
      "freq": [
        "Variable"
      ],
      "res": [
        "30 m"
      ],
      "extent": [
        "Global, but centered on US Areas"
      ],
      "coverage": [
        "Global / near-global",
        "Americas"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GeoTIFF, COG"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "sean.helfrich@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online",
          "u": "https://www.ssec.wisc.edu/flood-map-demo/flood-products/",
          "f": "GeoTIFF, COG"
        }
      ],
      "urls": [
        "https://www.ssec.wisc.edu/flood-map-demo/flood-products/"
      ],
      "rows": [
        "NOAA!R23"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "In Development"
      ],
      "temporalSrc": [
        "2021 - Present"
      ],
      "nameSrc": "Flood Inundation Mapping Extent and Depth"
    },
    {
      "id": "p111",
      "name": "Cloud and Moisture Imagery (CMI)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones",
        "Fires",
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "GOES"
      ],
      "inputs": [
        "GOES ABI"
      ],
      "purpose": "Leveraging single-band and multi-spectral VIS, NIR, SWIR, and LWIR imagery to monitor atmospheric moisture, synoptic scale feature evolution, clouds, thunderstorms, tropical cyclones, wildfire hot spots and smoke plumes and volcanic hot spots and ash plumes.",
      "freq": [
        "30-sec, 1-min, 5-min, 10-min"
      ],
      "res": [
        "0.5 km, 1km, 2 km"
      ],
      "extent": [
        "Western hemisphere"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "1974 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "bill.line@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://www.goes-r.gov/products/baseline-cloud-moisture-imagery.html https://www.star.nesdis.noaa.gov/goes/index.php",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.goes-r.gov/products/baseline-cloud-moisture-imagery.html",
        "https://www.star.nesdis.noaa.gov/goes/index.php"
      ],
      "rows": [
        "NOAA!R24"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1974 - present"
      ],
      "nameSrc": "Cloud and Moisture Imagery (CMI)"
    },
    {
      "id": "p112",
      "name": "Imagery Environmental Data Record (EDR)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones",
        "Fires",
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "inputs": [
        "S-NPP/NOAA-20/NOAA-21 VIIRS"
      ],
      "purpose": "Leveraging single-band and multi-spectral VIS, NIR, SWIR, and LWIR imagery to monitor atmospheric moisture, synoptic and meso scale feature evolution, clouds, thunderstorms, tropical cyclones, wildfire hot spots and smoke plumes, and volcanic hot spots and ash plumes.",
      "freq": [
        "25-min to 12 hours"
      ],
      "res": [
        "375 m, 750 m"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2011 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "bill.line@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online, CLASS",
          "u": "https://rammb2.cira.colostate.edu/research/calibration_validation_and_visualization/ https://rammb-slider.cira.colostate.edu/?sat=jpss&sec=northern_hemisphere&x=16000&y=16000",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://rammb2.cira.colostate.edu/research/calibration_validation_and_visualization/",
        "https://rammb-slider.cira.colostate.edu/?sat=jpss&sec=northern_hemisphere&x=16000&y=16000"
      ],
      "rows": [
        "NOAA!R25"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2011 - present"
      ],
      "nameSrc": "Imagery Environmental Data Record (EDR)"
    },
    {
      "id": "p113",
      "name": "Marine Heatwave Indices",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Satellite + In-Situ Data"
      ],
      "purpose": "Monitoring Marine Heatwaves",
      "freq": [
        "Yearly, semiannual"
      ],
      "res": [
        "regional (e.g. US Large Marine Ecosystems), and global 0.25-grid"
      ],
      "extent": [
        "23 U.S. Large Marine Ecosystem Regions; global oceans"
      ],
      "coverage": [
        "Global / near-global",
        "Americas"
      ],
      "temporal": [
        "1982 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "ASCII"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "oisst-help@noaa.gov"
      ],
      "comments": [
        "Jointly with NOAA EcoWatch"
      ],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ncei.noaa.gov/pub/data/cmb/ersst/v5/tmp/lmer/",
          "f": "ASCII"
        }
      ],
      "urls": [
        "https://www.ncei.noaa.gov/pub/data/cmb/ersst/v5/tmp/lmer/"
      ],
      "rows": [
        "NOAA!R26"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed-Mode"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1982 - present"
      ],
      "nameSrc": "Marine Heateave Indices"
    },
    {
      "id": "p114",
      "name": "Optimum Interpolation Sea Surface Temperature",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Satellite + In-Situ Data"
      ],
      "purpose": "Base input data for computing Marine Heatwaves",
      "freq": [
        "Daily"
      ],
      "res": [
        "0.25-degree grid"
      ],
      "extent": [
        "Global Ocean"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1981 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "oisst-help@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ncei.noaa.gov/products/optimum-interpolation-sst",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ncei.noaa.gov/products/optimum-interpolation-sst"
      ],
      "rows": [
        "NOAA!R27"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1981 - present"
      ],
      "nameSrc": "Optimum Interpolation Sea Surface Tempeature"
    },
    {
      "id": "p115",
      "name": "The International Comprehensive Ocean-Atmosphere Data Set (ICOADS)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "In-Situ Sensors"
      ],
      "purpose": "Base input data for computing Marine Heatwaves",
      "freq": [
        "Daily"
      ],
      "res": [
        "irregular"
      ],
      "extent": [
        "Global Ocean"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1662 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "ncei.surface.marine@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://icoads.noaa.gov/",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://icoads.noaa.gov/"
      ],
      "rows": [
        "NOAA!R28"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "1662 - present"
      ],
      "nameSrc": "The International Comprehensive Ocean-Atmosphere Data Set (ICOADS)"
    },
    {
      "id": "p116",
      "name": "Land Surface Temperature (LST) and Monthly Global LST Anomaly Report",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)",
        "GOES"
      ],
      "inputs": [
        "JPSS Satellites VIIRS, GOES ABI"
      ],
      "purpose": "heatwave management and alert; provide LST anomaly monthly analysis in graphic and animation",
      "freq": [
        "monthly; can be weekly if required"
      ],
      "res": [
        "4 km; will extend to 1 km."
      ],
      "extent": [
        "global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "Monthly report in PPT slides"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Not stated",
      "poc": [
        "yunyue.yu@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.star.nesdis.noaa.gov/smcd/emb/land/monthly_lst.php?sat=JPSS",
          "f": "Monthly report in PPT slides"
        }
      ],
      "urls": [
        "https://www.star.nesdis.noaa.gov/smcd/emb/land/monthly_lst.php?sat=JPSS"
      ],
      "rows": [
        "NOAA!R29"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed-Mode"
      ],
      "statusRaw": [],
      "temporalSrc": [
        "2021 - present"
      ],
      "nameSrc": "Land surface temperature (LST), monthly global LST anomaly report"
    },
    {
      "id": "p117",
      "name": "Volcanic Ash Advisories and Associated Volcanic Ash Graphic",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Multiple / not specified"
      ],
      "inputs": [
        "Various Satellites/Sensors"
      ],
      "purpose": "Provide volcanic ash advisory including 18-hour forecast with a graphic",
      "freq": [
        "6 hours and as needed"
      ],
      "res": [
        "N/A"
      ],
      "extent": [
        "VAAC Washington Region"
      ],
      "coverage": [
        "Americas"
      ],
      "temporal": [
        "1997 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "JPEG/XML"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Not stated",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online",
          "u": "https://www.ospo.noaa.gov/products/atmosphere/vaac/",
          "f": "JPEG/XML"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/atmosphere/vaac/"
      ],
      "rows": [
        "NOAA!R30"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [],
      "temporalSrc": [
        "1997-Present"
      ],
      "nameSrc": "Volcanic Ash Advisories and associated Volcanic Ash Graphic"
    },
    {
      "id": "p118",
      "name": "JPSS Volcanic Ash (Ash Cloud Top Height and Ash Mass Loading)",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "inputs": [
        "S-NPP/NOAA-20/NOAA-21 VIIRS"
      ],
      "purpose": "Air quality, FAA flight safety",
      "freq": [
        "90 mins"
      ],
      "res": [
        "3km(V); 750m(H)"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2015 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "Free & Unrestricted"
      ],
      "status": "Operational",
      "poc": [
        "Hongming.Qi@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "PDA, CLASS",
          "u": "https://www.ospo.noaa.gov/products/suites/jpss-rr/count_JRR_product.html?product=volash",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://www.ospo.noaa.gov/products/suites/jpss-rr/count_JRR_product.html?product=volash"
      ],
      "rows": [
        "NOAA!R31"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2015 - present"
      ],
      "nameSrc": "JPSS Volcanic Ash (ash cloud top height and ash mass loading)"
    },
    {
      "id": "p119",
      "name": "Maps of Hydrological Situation",
      "provider": "SRC \"Planeta\" (Roshydromet)",
      "operator": "Roshydromet",
      "operators": [
        "Roshydromet"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)",
        "Meteor-M",
        "Kanopus-V"
      ],
      "inputs": [
        "Meteor-M №1/KMSS , Meteor-M №2/KMSS , Meteor-М №2-2/KMSS; Terra, Aqua/Modis; Kanopus-V № 1, 3, 4, 5, 6, Kanopus-V-IR/MSS, PSS"
      ],
      "purpose": "Floods monitoring",
      "freq": [
        "Daily during flood time"
      ],
      "res": [
        "60 m; 250 m; 2,1 m and 10,5 m"
      ],
      "extent": [
        "Russian river basins"
      ],
      "coverage": [
        "Russia & Northern Eurasia"
      ],
      "temporal": [
        "2009 – 2022; 2014 – 2023; 2019 – present; 1999; 2002 – present; 2012 – 2020; 2018 – present; 2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GeoTIFF"
      ],
      "access": "Free / open",
      "policy": [
        "Free"
      ],
      "status": "Operational",
      "poc": [
        "Ganina Tamara gtd@ntsomz.ru"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Ftp, web-portal",
          "u": "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=187 http://planet.rssi.ru/index.php?page_type=oper_pages&page=flood&lang=ru http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=365",
          "f": "GeoTIFF"
        }
      ],
      "urls": [
        "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=187",
        "http://planet.rssi.ru/index.php?page_type=oper_pages&page=flood&lang=ru",
        "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=365"
      ],
      "rows": [
        "ROSC!R2"
      ],
      "training": [],
      "latencyRaw": [
        "In near-real time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2009-2022, 2014-2023, 2019-present time; 1999 and 2002 - present time; 2012-2020, 2018- present time, 2017-present time"
      ],
      "nameSrc": "Maps of hydrological situation"
    },
    {
      "id": "p120",
      "name": "Tropical Cyclone Trajectories; Emergence Points; Recurrence; Montage of Images at Every Stage of Development",
      "provider": "SRC \"Planeta\" (Roshydromet)",
      "operator": "Roshydromet",
      "operators": [
        "Roshydromet"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "satellites": [
        "Himawari-8/9",
        "Meteosat (MSG)",
        "GOES",
        "Elektro-L"
      ],
      "inputs": [
        "Elektro-L №1/MSU-GS, Elektro-L №2/MSU-GS, Elektro-L №3/MSU-GS, Elektro-L №4/MSU-GS; Himawari-8/AHI, Himawari-9/AHI; Meteosat-8/SEVIRI, Meteosat-9/SEVIRI, Meteosat-10/SEVIRI, Meteosat-11/SEVIRI; GOES-14/GOES Imager, GOES-15/GOES Imager"
      ],
      "purpose": "Tropical cyclones monotoring",
      "freq": [
        "All year round"
      ],
      "res": [
        "1 km or 4 km; 0,5 km or 2 km; 3 km or 1 km; 1 km or 4 km;"
      ],
      "extent": [
        "Tropical and temperate latitudes of World Ocean"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2011 – 2016; 2015 – present; 2019 – present; 2023 – present; 2014 – present; 2002 – 2016; 2005 – 2022; 2012 – present; 2009 – present; 2010 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Geographical coordinates of tropical cyclones` centres; Satellite image fragments of tropical cyclones at different stages of development"
      ],
      "access": "Free / open",
      "policy": [
        "Free"
      ],
      "status": "Operational",
      "poc": [
        "Ganina Tamara gtd@ntsomz.ru"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Ftp, web-portal",
          "u": "http://planet.iitp.ru/index.php?lang=ru&page_type=oper_prod&page=product&prod=99 http://planet.iitp.ru/index.php?lang=ru&page_type=oper_prod&page=static_archive&filename=tc_data_2 http://planet.iitp.ru/index.php?lang=ru&page_type=oper_prod&page=product&prod=789",
          "f": "Geographical coordinates of tropical cyclones` centres; Satellite image fragments of tropical cyclones at different stages of development"
        }
      ],
      "urls": [
        "http://planet.iitp.ru/index.php?lang=ru&page_type=oper_prod&page=product&prod=99",
        "http://planet.iitp.ru/index.php?lang=ru&page_type=oper_prod&page=static_archive&filename=tc_data_2",
        "http://planet.iitp.ru/index.php?lang=ru&page_type=oper_prod&page=product&prod=789"
      ],
      "rows": [
        "ROSC!R3"
      ],
      "training": [],
      "latencyRaw": [
        "In near-real time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2011-2016; 2015-present time; 2019-present time; 2023-present time; 2014-present time; 2019-present time; 2002-2016; 2005-2022; 2012-present time; 2015-present time; 2014-present time; 2009-present time: 2010-present time"
      ],
      "nameSrc": "Tropical cyclones` trajectories; Emergence points of tropical cyclones; Recurrence of tropical cyclones; Montage of images of specific tropical cyclones at every stage of development"
    },
    {
      "id": "p121",
      "name": "Maps of Fire Emergence Points, Smoke Plume and Fumes",
      "provider": "SRC \"Planeta\" (Roshydromet)",
      "operator": "Roshydromet",
      "operators": [
        "Roshydromet"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)",
        "Terra / Aqua (MODIS, AIRS)",
        "Elektro-L",
        "Arktika-M",
        "Meteor-M",
        "Kanopus-V"
      ],
      "inputs": [
        "Elektro-L №1/MSU-GS, Elektro-L №2/MSU-GS, Elektro-L №3/MSU-GS, Elektro-L №4/MSU-GS; Arctica-М №1/MSU-GS; Meteor-M №1/MSU-MR, KMSS, Meteor-M №2/MSU-MR, KMSS , Meteor-M №2-2/MSU-MR, KMSS; Suomi NPP/VIIRS, NOAA-20/VIIRS, Terra, Aqua/Modis; Kanopus-V № 1, 3, 4, 5, 6, Kanopus-V-IR/MSS, PSS"
      ],
      "purpose": "Fires monitoring",
      "freq": [
        "All year round during fires season"
      ],
      "res": [
        "1 km or 4 km; 1 km or 4 km; 1 km, 60 m; 375 m or 750 m; 250 m or 1 km; 2,1 m and 10,5 m"
      ],
      "extent": [
        "Territory of the Russian Federation"
      ],
      "coverage": [
        "Russia & Northern Eurasia"
      ],
      "temporal": [
        "2011 – 2016; 2015 – present; 2019 – present; 2023 – present; 2021 – present; 2009 – 2022; 2014 – 2023; 2011 – present; 2017 – present; 2012 – 2020; 2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GeoTIFF"
      ],
      "access": "Free / open",
      "policy": [
        "Free"
      ],
      "status": "Operational",
      "poc": [
        "Ganina Tamara gtd@ntsomz.ru"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Ftp, web-portal",
          "u": "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=343 http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=130 http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=258",
          "f": "GeoTIFF"
        }
      ],
      "urls": [
        "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=343",
        "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=130",
        "http://planet.rssi.ru/index.php?page_type=oper_prod&page=product&prod=258"
      ],
      "rows": [
        "ROSC!R4"
      ],
      "training": [],
      "latencyRaw": [
        "In near-real time"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2011-2016; 2015-present time; 2019-present time; 2023-present time; 2021-present time; 2009-2022, 2014-2023, 2019-present time; 2011-present time; 2017-present time; 2012-2020, 2018-present time, 2017-present time"
      ],
      "nameSrc": "Maps of fire emergence points, maps of smoke plume and fumes"
    },
    {
      "id": "p122",
      "name": "Blended SEVIRI/LEO MW Precipitation Rate (H60B)",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Meteosat (MSG)",
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "DMSP"
      ],
      "inputs": [
        "MSG SEVIRI, SSMIS, AMSU/MHS, AMSR-2, ATMS, and GMI"
      ],
      "purpose": "Estimating instantaneous rain rates, as input to weather forecasts and hydrological models, especially in areas without radar coverage (using predecessor product (H03)) (using predecessor product (H03))",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2022-06-09 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, EUMETView, Data Store",
          "u": "https://view.eumetsat.int/productviewer?v=57336 (H60)",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://view.eumetsat.int/productviewer?v=57336"
      ],
      "rows": [
        "EUM!R2",
        "EUM!R46"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2022-06-09"
      ],
      "nameSrc": "Blended SEVIRI / LEO MW precipitation rate (H60B)"
    },
    {
      "id": "p123",
      "name": "Blended SEVIRI/LEO MW Precipitation Rate (H63B)",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Meteosat (MSG)",
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "DMSP"
      ],
      "inputs": [
        "MSG SEVIRI, SSMIS, AMSU/MHS, AMSR-2, ATMS, and GMI"
      ],
      "purpose": "Estimating instantaneous rain rates, as input to weather forecasts and hydrological models, especially in areas without radar coverage (using predecessor product (H03)) (using predecessor product (H03))",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2022-06-09 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, EUMETView, Data Store",
          "u": "https://view.eumetsat.int/productviewer?v=57337 (H63)",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "https://view.eumetsat.int/productviewer?v=57337"
      ],
      "rows": [
        "EUM!R3",
        "EUM!R47"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2022-06-09"
      ],
      "nameSrc": "Blended SEVIRI / LEO MW precipitation rate (H63B)"
    },
    {
      "id": "p124",
      "name": "Accumulated Precipitation at Ground by Blended MW and IR (H61)",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Meteosat (MSG)",
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "DMSP"
      ],
      "inputs": [
        "MSG SEVIRI, SSMIS, AMSU, AMSR-2, ATMS, and GMI"
      ],
      "purpose": "Estimating accumulated rainfall amounts, as input to weather forecasts, hydrological forecasts, impact assessments",
      "freq": [
        "1h (for 1h accumulated), 24h (for 24h accumulated)"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2022-06-09 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, Data Store",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R4",
        "EUM!R48"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2022-06-09"
      ],
      "nameSrc": "Accumulated Precipitation at ground by blended MW and IR (H61)"
    },
    {
      "id": "p125",
      "name": "Accumulated Precipitation at Ground by Blended MW and IR (H90)",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "GPM constellation",
        "GCOM-W (AMSR2)",
        "Meteosat (MSG)",
        "Metop",
        "JPSS (S-NPP, NOAA-20/21)",
        "DMSP"
      ],
      "inputs": [
        "MSG SEVIRI, SSMIS, AMSU, AMSR-2, ATMS, and GMI"
      ],
      "purpose": "Estimating accumulated rainfall amounts, as input to weather forecasts, hydrological forecasts, impact assessments",
      "freq": [
        "1h (for 1h accumulated), 24h (for 24h accumulated)"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2022-06-09 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, Data Store",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R5",
        "EUM!R49"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2022-06-09"
      ],
      "nameSrc": "Accumulated Precipitation at ground by blended MW and IR (H90)"
    },
    {
      "id": "p126",
      "name": "Convective Rain Rate Based on Cloud Physical Properties (CRRPh)",
      "provider": "EUMETSAT NWC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "Himawari-8/9",
        "Meteosat (MSG)",
        "GOES"
      ],
      "inputs": [
        "MSG SEVIRI, GOES ABI, Himawari-8/9 AHI"
      ],
      "purpose": "Estimating instantaneous rain rates, as input to weather forecasts and hydrological models, especially in areas without radar coverag",
      "freq": [
        "10-15min"
      ],
      "res": [
        "3km (SSP for SEVIRI)"
      ],
      "extent": [
        "GEO ring"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "n.a."
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [
        "Product generated by software that is provided by the EUMETSAT Nowcasting SAF (NWCSAF); software is configurable to run with GOES ABI and Himawari-8/9 AHI as well as MSG SEVIRI."
      ],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Locally produced using NWCSAF software",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R6"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "n.a."
      ],
      "nameSrc": "Convective Rain Rate based on Cloud Physical Properties (CRRPh)"
    },
    {
      "id": "p127",
      "name": "Surface Soil Moisture at 12.5/25 km Swath Grid",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop ASCAT"
      ],
      "purpose": "Input to hydrological forecasts, drought condition estimates",
      "freq": [
        "Daily"
      ],
      "res": [
        "12.5km, 25km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2007-06-01 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "Native, BUFR"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, Data Store, SAF Archive, GTS",
          "u": "",
          "f": "Native, BUFR"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R7",
        "EUM!R59"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2007-06-01"
      ],
      "nameSrc": "Surface Soil Moisture at 12.5 / 25 km Swath Grid"
    },
    {
      "id": "p128",
      "name": "Root Zone Soil Moisture Profile Index",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop ASCAT"
      ],
      "purpose": "Input to hydrological forecasts, drought condition estimates",
      "freq": [
        "Daily"
      ],
      "res": [
        "10km horizontal, Vertical (below surface): 4 layers: 0-7 cm, 7-28 cm, 28-100 cm, 100-289 cm"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2021-01-08 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, GRIB"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, SAF Archive",
          "u": "",
          "f": "NetCDF, GRIB"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R8",
        "EUM!R60"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021-01-08"
      ],
      "nameSrc": "Root Zone Soil Moisture profile index"
    },
    {
      "id": "p129",
      "name": "Soil Wetness Index in the Roots Region",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop ASCAT"
      ],
      "purpose": "Input to hydrological forecasts, drought condition estimates",
      "freq": [
        "Daily"
      ],
      "res": [
        "25km horizontal, Vertical (below surface): 4 layers: 0-7 cm, 7-28 cm, 28-100 cm, 100-289 cm"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012-01-01 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GRIB"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "HSAF ftp",
          "u": "",
          "f": "GRIB"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R9",
        "EUM!R61"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2012-01-01"
      ],
      "nameSrc": "Soil Wetness Index in the Roots Region"
    },
    {
      "id": "p130",
      "name": "MSG Evapotranspiration and Daily Evapotranspiration",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Input to weather and hydrological forecasts, drought condition estimates",
      "freq": [
        "30min, Daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2010 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R10"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2010"
      ],
      "nameSrc": "MSG ET/Daily ET Evapotranspiration"
    },
    {
      "id": "p131",
      "name": "Latent and Sensible Heat Flux (LE/H)",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Heatwaves"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Input to weather and hydrological forecasts, drought condition estimates",
      "freq": [
        "30min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2019 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R11",
        "EUM!R23"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2019"
      ],
      "nameSrc": "Latent and Sensible Heat Flux (LE/H)"
    },
    {
      "id": "p132",
      "name": "Fraction of Vegetation Cover (FVC)",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Important for assessing flood hazard based on vegetation-soil dynamics conditions",
      "freq": [
        "10-daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2011 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R12"
      ],
      "training": [],
      "latencyRaw": [
        "Delayed mode"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2011"
      ],
      "nameSrc": "Fraction of vegetation cover (FVC)"
    },
    {
      "id": "p133",
      "name": "Ocean Surface Winds (25 km)",
      "provider": "EUMETSAT OSI SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop ASCAT"
      ],
      "purpose": "Storm surge and coastal flooding",
      "freq": [
        "Continuous"
      ],
      "res": [
        "25km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, BUFR"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, EUMETView, SAF Archive, Data Store, GTS, GEONETCast-Americas",
          "u": "",
          "f": "NetCDF, BUFR"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R13",
        "EUM!R52"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2012"
      ],
      "nameSrc": "Ocean surface winds (25km)"
    },
    {
      "id": "p134",
      "name": "Coastal Winds (12.5 km)",
      "provider": "EUMETSAT OSI SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop ASCAT"
      ],
      "purpose": "Storm surge and coastal flooding",
      "freq": [
        "Continuous"
      ],
      "res": [
        "12.5km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2012 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, BUFR"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, EUMETView, SAF Archive, Data Store, GTS, GEONETCast-Americas",
          "u": "",
          "f": "NetCDF, BUFR"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R14",
        "EUM!R53"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2012"
      ],
      "nameSrc": "Coastal winds (12.5km)"
    },
    {
      "id": "p135",
      "name": "Altimetry Level 2 Global Short Term Critical",
      "provider": "EUMETSAT for Copernicus",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Sentinel (Copernicus)"
      ],
      "inputs": [
        "Sentinel-3 SRAL"
      ],
      "purpose": "Storm surge and coastal flooding",
      "freq": [
        "27 days (Altimeter track)"
      ],
      "res": [
        "7km (1Hz), 300m (20Hz)"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2016 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "SENTINEL-SAFE, NetCDF, XML"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "Copernicus Data Usage Terms and Conditions (EUMETSAT)"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, Data Centre, Data Store, WEkEO",
          "u": "",
          "f": "SENTINEL-SAFE, NetCDF, XML"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R15",
        "EUM!R54"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2016"
      ],
      "nameSrc": "L2 Altimetry Global Short Term Critical"
    },
    {
      "id": "p136",
      "name": "Altimetry Level 2 High Resolution",
      "provider": "EUMETSAT for Copernicus",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Floods",
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Sentinel (Copernicus)"
      ],
      "inputs": [
        "Sentinel-6 Poseidon-4"
      ],
      "purpose": "Storm surge and coastal flooding",
      "freq": [
        "10 days (Altimeter track)"
      ],
      "res": [
        "Low res, High res"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2021-11-29 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "SENTINEL-SAFE, NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "Copernicus Data Usage Terms and Conditions (EUMETSAT)"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Terrestrial, Data Centre, SFTP",
          "u": "",
          "f": "SENTINEL-SAFE, NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R16",
        "EUM!R55"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021-11-29"
      ],
      "nameSrc": "Altimetry Level 2 High Resolution"
    },
    {
      "id": "p137",
      "name": "Downwelling Total and Diffuse Surface Shortwave and Longwave Fluxes (DSSF, DSLF)",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Radiation & energy fluxes",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "For calculating solar irradiance as driver for heatwaves",
      "freq": [
        "15min, Daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2004 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MDIDSSF/ https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MDSSFTD/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R18"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2004"
      ],
      "nameSrc": "Downwelling Total and Diffuse Surface Shortwave & Longwave Fluxes (DSSF, DSLF)"
    },
    {
      "id": "p138",
      "name": "MSG Land Surface Temperature Directional Effects",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Measure of heat stress on vegetation and soils, proxy for near-surface air temperature",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MLST/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R19",
        "EUM!R62"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021"
      ],
      "nameSrc": "MSG Land surface temperature Directional effects"
    },
    {
      "id": "p139",
      "name": "MSG-IODC Derived Land Surface Temperature",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Measure of heat stress on vegetation and soils, proxy for near-surface air temperature",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Demonstration",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG-IODC/DLST/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R20",
        "EUM!R63"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Demonstrational"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "MSG IODC Derived Land surface temperature"
    },
    {
      "id": "p140",
      "name": "MSG Leaf Area Index (LAI) and 10-Day LAI",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Effect of heatwaves on vegetation",
      "freq": [
        "Daily, 10-daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2016 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MDLAI/ https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MTLAI/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R21",
        "EUM!R64"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2016"
      ],
      "nameSrc": "MSG Leaf Area Index (LAI), 10-days LAI"
    },
    {
      "id": "p141",
      "name": "MSG-IODC Leaf Area Index (LAI) and 10-Day LAI",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Effect of heatwaves on vegetation",
      "freq": [
        "Daily, 10-daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG-IODC/MDLAI/ https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG-IODC/MTLAI/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R22",
        "EUM!R65"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "MSG-IODC _Leaf Area Index (LAI), 10-days LAI"
    },
    {
      "id": "p142",
      "name": "NWC SAF Cloud Mask",
      "provider": "EUMETSAT NWC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Estimating cloud-induced effects on radiation regime, often absorbing solar irradiance and attenuating heatwaves",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "GEO ring"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "n.a."
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [
        "Product generated by software that is provided by the EUMETSAT Nowcasting SAF (NWCSAF); software is configurable to run with GOES ABI and Himawari-8/9 AHI as well as MSG SEVIRI."
      ],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Locally produced using NWCSAF software",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R24"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "n.a."
      ],
      "nameSrc": "NWCSAF Cloud Mask"
    },
    {
      "id": "p143",
      "name": "Optimal Cloud Estimation",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Estimating cloud-induced effects on radiation regime, often absorbing solar irradiance and attenuating heatwaves",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2013 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GRIB"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Demonstration",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, Data Centre",
          "u": "",
          "f": "GRIB"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R25"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Demonstrational"
      ],
      "temporalSrc": [
        "2013"
      ],
      "nameSrc": "Optimal Cloud Estimation"
    },
    {
      "id": "p144",
      "name": "Surface Radiation Dataset - Heliosat (SARAH-3 CDR): Sunshine Duration, Solar Incoming Shortwave",
      "provider": "EUMETSAT CM SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Radiation & energy fluxes",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "For calculating solar irradiance as driver for heatwaves",
      "freq": [
        "30min, Daily, Monthly"
      ],
      "res": [
        "0.05°x0.05°"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "1983 – present"
      ],
      "latency": "Near real-time and delayed mode",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, SAF Archive",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R26",
        "EUM!R68"
      ],
      "training": [],
      "latencyRaw": [
        "NRT and Delayed mode"
      ],
      "statusRaw": [
        "Released"
      ],
      "temporalSrc": [
        "1983"
      ],
      "nameSrc": "Surface Radiation Dataset - Heliosat (SARAH-3 CDR): Sunshine Duration, Solar Incoming Shortwave"
    },
    {
      "id": "p145",
      "name": "Interim Climate Data Record Surface Radiation Based on SARAH-2",
      "provider": "EUMETSAT CM SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Radiation & energy fluxes",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "For calculating solar irradiance as driver for heatwaves",
      "freq": [
        "30min, Daily, Monthly"
      ],
      "res": [
        "0.05°x0.05°"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2018 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, SAF Archive",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R27",
        "EUM!R69"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2018"
      ],
      "nameSrc": "Interim Climate Data Record Surface Radiation - based on SARAH-2"
    },
    {
      "id": "p146",
      "name": "Solar Incoming Shortwave in the CLARA-A3 Product (Cloud, Albedo and Surface Radiation Dataset from AVHRR), CDR and ICDR",
      "provider": "EUMETSAT CM SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Droughts"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "For calculating solar irradiance as driver for heatwaves",
      "freq": [
        "Daily, Monthly"
      ],
      "res": [
        "0.25°x0.25°"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "1979 – present"
      ],
      "latency": "Near real-time and delayed mode",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "SAF archive https://wui.cmsaf.eu/safira/action/viewDoiDetails?acronym=CLARA_AVHRR_V003",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R28",
        "EUM!R70"
      ],
      "training": [],
      "latencyRaw": [
        "NRT and Delayed mode"
      ],
      "statusRaw": [
        "Released"
      ],
      "temporalSrc": [
        "1979"
      ],
      "nameSrc": "Solar Incoming Shortwave in CLARA-A3 product (Cloud, Albedo and Surface Radiation Dataset from AVHRR (CLARA-A3)) CDR and ICDR"
    },
    {
      "id": "p147",
      "name": "Global Metop Sea Surface Temperature",
      "provider": "EUMETSAT OSI SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop AVHRR"
      ],
      "purpose": "Monitoring SST as a key driver for TC life cycle",
      "freq": [
        "2 per day"
      ],
      "res": [
        "0.05°x0.05°"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2008 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4, GeoTIFF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, SAF Archive, Data Centre, Data Store, EUMETView",
          "u": "",
          "f": "NetCDF4, GeoTIFF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R29",
        "EUM!R43"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2008"
      ],
      "nameSrc": "Global Metop Sea Surface Temperature"
    },
    {
      "id": "p148",
      "name": "Meteosat Sea Surface Temperature",
      "provider": "EUMETSAT OSI SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Monitoring SST as a key driver for TC life cycle",
      "freq": [
        "1h"
      ],
      "res": [
        "0.05°x0.05°"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2004 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF, GRIB, GHRSST-compliant"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, SAF Archive, Data Centre",
          "u": "",
          "f": "NetCDF, GRIB, GHRSST-compliant"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R30",
        "EUM!R44"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2004"
      ],
      "nameSrc": "Meteosat Sea Surface Temperature"
    },
    {
      "id": "p149",
      "name": "IASI Sea Surface Temperature",
      "provider": "EUMETSAT OSI SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop IASI"
      ],
      "purpose": "Monitoring SST as a key driver for TC life cycle",
      "freq": [
        "Every 3min"
      ],
      "res": [
        "12 to 40km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2014 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R31",
        "EUM!R45"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2014"
      ],
      "nameSrc": "IASI Sea Surface Temperature"
    },
    {
      "id": "p150",
      "name": "SLSTR Level 2 Sea Surface Temperature",
      "provider": "EUMETSAT for Copernicus",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Heatwaves",
        "Tropical cyclones"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "Sentinel (Copernicus)"
      ],
      "inputs": [
        "Sentinel-3 SLSTR"
      ],
      "purpose": "Monitoring SST as a key driver for TC life cycle",
      "freq": [
        "Continuous"
      ],
      "res": [
        "1km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "SENTINEL-SAFE"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "Copernicus Data Usage Terms and Conditions (EUMETSAT)",
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store, WEkEO",
          "u": "",
          "f": "SENTINEL-SAFE"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R32",
        "EUM!R42"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "SLSTR L2 Sea Surface Temperature"
    },
    {
      "id": "p151",
      "name": "All SEVIRI Channels (mostly HRV, IR 10.8, Day/Night/24 h Microphysical RGBs, HRV Clouds RGB, Severe Storms RGB)",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Analysis of storm track, intensification, rain bands",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa",
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2004 – present",
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HRIT, GeoTIFF, Native, NetCDF, HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [
        "RGBs are not disseminated, but need to be generated by users (except for some RGBs on EUMETCast-Africa)"
      ],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store, EUMETView",
          "u": "",
          "f": "HRIT, GeoTIFF, Native, NetCDF, HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R35",
        "EUM!R36"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2004",
        "2017"
      ],
      "nameSrc": "All SEVIRI channels (mostly HRV, IR 10.8, Day/Night/24h Microphysical RGBs, HRV clouds RGB, Severe Storms RGB)"
    },
    {
      "id": "p152",
      "name": "All FCI Channels (mostly VIS and IR, 24 h Microphysical RGB, Cloud Phase RGB, Cloud Type RGB, Severe Storms RGB)",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG FCI"
      ],
      "purpose": "Analysis of storm track, intensification, rain bands",
      "freq": [
        "10min"
      ],
      "res": [
        "0.5-2km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [],
      "latency": "Not stated",
      "formats": [],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa (subset), Data Centre, Data Store",
          "u": "",
          "f": ""
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R37"
      ],
      "training": [],
      "latencyRaw": [],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [],
      "nameSrc": "All FCI channels, mostly VIS and IR, 24h Microphysical RGB, Cloud Phase RGB, Cloud Type RGB, Severe Storms RGB"
    },
    {
      "id": "p153",
      "name": "Cloud Analysis Product, Optimal Cloud Analysis, Global Instability Index",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG FCI"
      ],
      "purpose": "Analysis of storm track, intensification, rain bands",
      "freq": [
        "10min"
      ],
      "res": [
        "0.5-2km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa (subset), Data Centre, Data Store",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R38"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [
        "2024"
      ],
      "nameSrc": "Cloud Analysis Product, Optimal Cloud Analysis, GII"
    },
    {
      "id": "p154",
      "name": "Cloud Products from NWC SAF (Cloud Mask, Cloud Top Height, Cloud Top Temperature)",
      "provider": "EUMETSAT NWC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Himawari-8/9",
        "Meteosat (MSG)",
        "Meteosat (MTG)",
        "GOES"
      ],
      "inputs": [
        "MSG SEVIRI, GOES ABI, Himawari-8/9 AHI, MTG FCI"
      ],
      "purpose": "Monitoring and forecasting TC track and intensity, rainfall areas",
      "freq": [
        "10-15min"
      ],
      "res": [
        "3km (SSP for SEVIRI)"
      ],
      "extent": [
        "GEO ring"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "n.a."
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Locally produced using NWCSAF software",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R39"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "n.a."
      ],
      "nameSrc": "Cloud Products from Nowcasting SAF (Cloud Mask, Cloud Top Height, Cloud Top Temperature)"
    },
    {
      "id": "p155",
      "name": "Lightning Groups, Flashes, Accumulated Flashes, Accumulated Flash Radiance, Accumulated Flash Area",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG LI"
      ],
      "purpose": "Analysis of storm track, intensification, rain bands",
      "freq": [
        "10-30s"
      ],
      "res": [
        "4.5km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa (subset), Data Centre, Data Store",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R40"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [
        "2024"
      ],
      "nameSrc": "Lightning Groups, Flashes, Accumulated Flashes, Accumulated Flash Radiance, Accumulated Flash Area"
    },
    {
      "id": "p156",
      "name": "IASI Level 2 Temperature and Humidity Soundings",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop IASI"
      ],
      "purpose": "Analysis of storm track, intensification, rain bands",
      "freq": [
        "Continuous"
      ],
      "res": [
        "12 to 40km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R41"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "IASI temperature and humidity soundings (IASI L2)"
    },
    {
      "id": "p157",
      "name": "MSG-IODC Global Instability Index",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Set of indices which describe atmospheric air mass instability in cloud free areas, important for forecasting Tropical Cyclone tracks",
      "freq": [
        "15min"
      ],
      "res": [
        "9km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GeoTIFF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETView",
          "u": "",
          "f": "GeoTIFF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R50"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021"
      ],
      "nameSrc": "Global Instability Index - MSG - Indian Ocean"
    },
    {
      "id": "p158",
      "name": "MSG Global Instability Index",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Set of indices which describe atmospheric air mass instability in cloud free areas, important for forecasting Tropical Cyclone tracks",
      "freq": [
        "15min"
      ],
      "res": [
        "9km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "GeoTIFF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETView",
          "u": "",
          "f": "GeoTIFF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R51"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021"
      ],
      "nameSrc": "Global Instability Index - MSG"
    },
    {
      "id": "p159",
      "name": "MSG Fraction of Vegetation Cover (FVC) and 10-Day FVC",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Vegetation cover as proxy for agricultural drought conditions",
      "freq": [
        "Daily, 10-daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2016 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MDFVC/ https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG/MTFVC/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R66"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2016"
      ],
      "nameSrc": "MSG Fraction of Vegetation Cover (FVC), 10-days FVC"
    },
    {
      "id": "p160",
      "name": "MSG-IODC Fraction of Vegetation Cover (FVC) and 10-Day FVC",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Vegetation cover as proxy for agricultural drought conditions",
      "freq": [
        "Daily, 10-daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "LSASAF archive https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG-IODC/MDFVC/ https://datalsasaf.lsasvcs.ipma.pt/PRODUCTS/MSG-IODC/MDFVC/",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R67"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "MSG-IODC Fraction of Vegetation Cover (FVC), 10-days FVC"
    },
    {
      "id": "p161",
      "name": "Snow Detection (Snow Mask, H34)",
      "provider": "EUMETSAT H SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Soil moisture, hydrology & snow",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "For estimating snow extent and snow water equivalent",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, SAF Archive",
          "u": "",
          "f": "NetCDF"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R71"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Pre-Operational"
      ],
      "temporalSrc": [
        "2021"
      ],
      "nameSrc": "Snow detection (snow mask, H34)"
    },
    {
      "id": "p162",
      "name": "MSG Fire Radiative Power (Pixel, Grid)",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Fire management NRT, fire follow-up, assimilation in CAMS NWP model",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP) (pixel), 5x5° (grid)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2016 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Africa, -Terrestrial, SAF Archive",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R73"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2016"
      ],
      "nameSrc": "MSG Fire Radiative Power (pixel, grid)"
    },
    {
      "id": "p163",
      "name": "MSG-IODC Fire Radiative Power (Pixel)",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Fire management NRT, fire follow-up, assimilation in CAMS NWP model",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP) (pixel), 5x5° (grid)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Demonstration",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "SAF archive",
          "u": "FRP-PIXEL - datalsasaf.lsasvcs.ipma.pt > PRODUCTS > MSG-IODC > FRP-PIXEL",
          "f": "HDF5"
        }
      ],
      "urls": [
        "datalsasaf.lsasvcs.ipma.pt"
      ],
      "rows": [
        "EUM!R74"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Demonstration"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "MSG Fire Radiative Power - IODC (pixel)"
    },
    {
      "id": "p164",
      "name": "MSG Fire Risk",
      "provider": "EUMETSAT LSA SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Fire risk management, prevention, forecasting",
      "freq": [
        "Daily"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2021 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, EUMETCast-Terrestrial, SAF Archive",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R75"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2021"
      ],
      "nameSrc": "MSG Fire Risk"
    },
    {
      "id": "p165",
      "name": "SEVIRI 3.9 µm Channel",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Fire detection and monitoring",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2004 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HRIT, GeoTIFF, Native, NetCDF, HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store, EUMETView",
          "u": "",
          "f": "HRIT, GeoTIFF, Native, NetCDF, HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R76"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2004"
      ],
      "nameSrc": "SEVIRI 3.9um channel"
    },
    {
      "id": "p166",
      "name": "FCI 2.2 and 3.8 µm Channels; Fire Temperature RGB",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG FCI"
      ],
      "purpose": "Fire detection and monitoring",
      "freq": [
        "10min"
      ],
      "res": [
        "1-2km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa (subset), Data Centre, Data Store",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R77"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [
        "2024"
      ],
      "nameSrc": "FCI 2.2, 3.8um channels; Fire Temperature RGB"
    },
    {
      "id": "p167",
      "name": "FCI 0.4, 0.5 and 0.6 µm Channels",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG FCI"
      ],
      "purpose": "Smoke plume detection and tracking",
      "freq": [
        "10min"
      ],
      "res": [
        "0.5-1km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa (subset), Data Centre, Data Store",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R78"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [
        "2024"
      ],
      "nameSrc": "FCI 0.4, 0.5, 0.6um channels"
    },
    {
      "id": "p168",
      "name": "Near Real-Time Absorbing Aerosol Index (AAI)",
      "provider": "EUMETSAT AC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires",
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop GOME-2"
      ],
      "purpose": "Tracking volcanic ash plumes, SO2 emissions associated with volcanic eruptions",
      "freq": [
        "Continuous"
      ],
      "res": [
        "40x40km to 40x240km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2013 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, SAF Archive",
          "u": "",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R79",
        "EUM!R92"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2013"
      ],
      "nameSrc": "NRT Absorbing Aerosol Index (AAI)"
    },
    {
      "id": "p169",
      "name": "Near Real-Time Absorbing Aerosol Height",
      "provider": "EUMETSAT AC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires",
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop GOME-2"
      ],
      "purpose": "Estimating smoke plume height",
      "freq": [
        "Continuous"
      ],
      "res": [
        "40x40km to 40x80km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2020 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "SAF Archive",
          "u": "Access information of offline products (acsaf.org)",
          "f": "HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R80",
        "EUM!R93"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2020"
      ],
      "nameSrc": "NRT Absorbing Aerosol Height"
    },
    {
      "id": "p170",
      "name": "Near Real-Time Total Column and Tropospheric NO2",
      "provider": "EUMETSAT AC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop GOME-2"
      ],
      "purpose": "Wildfire emission estimate - long range transport - climate assessment",
      "freq": [
        "Continuous"
      ],
      "res": [
        "40x40km to 40x80km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2007 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5, BUFR"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, SAF Archive",
          "u": "",
          "f": "HDF5, BUFR"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R81"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2007"
      ],
      "nameSrc": "Near real-time total column and tropospheric NO2"
    },
    {
      "id": "p171",
      "name": "SLSTR Level 2 Fire Radiative Power (NRT S3 FRP)",
      "provider": "EUMETSAT for Copernicus",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "Sentinel (Copernicus)"
      ],
      "inputs": [
        "Sentinel-3 SLSTR"
      ],
      "purpose": "Fire management NRT, fire follow-up, assimilation in CAMS NWP model",
      "freq": [
        "Continuous"
      ],
      "res": [
        "1km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2020 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4, SENTINEL-SAFE"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "Copernicus Data Usage Terms and Conditions (EUMETSAT)"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, Data Centre, Data Store",
          "u": "",
          "f": "NetCDF4, SENTINEL-SAFE"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R82"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Pre-operational"
      ],
      "temporalSrc": [
        "2020"
      ],
      "nameSrc": "SLSTR Level 2 Fire Radiative Power (NRT S3 FRP)"
    },
    {
      "id": "p172",
      "name": "SLSTR Level 2 Near Real-Time Aerosol Optical Depth",
      "provider": "EUMETSAT for Copernicus",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Sentinel (Copernicus)"
      ],
      "inputs": [
        "Sentinel-3 SLSTR"
      ],
      "purpose": "Fire management NRT, fire follow-up, assimilation in CAMS NWP model",
      "freq": [
        "Continuous"
      ],
      "res": [
        "9.5km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2020 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "SENTINEL-SAFE"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "Copernicus Data Usage Terms and Conditions (EUMETSAT)"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, Data Centre, Data Store",
          "u": "",
          "f": "SENTINEL-SAFE"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R83"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Pre-operational"
      ],
      "temporalSrc": [
        "2020"
      ],
      "nameSrc": "SLSTR Level 2 Aerosol Optical Depth in NRT"
    },
    {
      "id": "p173",
      "name": "Volcanic Ash/SO2 RGB and SEVIRI 8.7 µm Channel (SO2)",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Tracking volcanic ash plumes, SO2 emissions associated with volcanic eruptions",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2004 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HRIT, GeoTIFF, Native, NetCDF, HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store, EUMETView",
          "u": "",
          "f": "HRIT, GeoTIFF, Native, NetCDF, HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R87"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2004"
      ],
      "nameSrc": "Volcanic Ash/SO2 RGB and SEVIRI 8.7um channel (SO2)"
    },
    {
      "id": "p174",
      "name": "Volcanic Ash/SO2 RGB and SEVIRI 8.7 µm Channel (SO2) – IODC",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MSG)"
      ],
      "inputs": [
        "MSG SEVIRI"
      ],
      "purpose": "Tracking volcanic ash plumes, SO2 emissions associated with volcanic eruptions",
      "freq": [
        "15min"
      ],
      "res": [
        "3km (SSP)"
      ],
      "extent": [
        "Mediterranean basin, Africa, Middle East, Indian Ocean (IODC)"
      ],
      "coverage": [
        "Europe, Middle East & Africa",
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2017 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HRIT, GeoTIFF, Native, NetCDF, HDF5"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store, EUMETView",
          "u": "",
          "f": "HRIT, GeoTIFF, Native, NetCDF, HDF5"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R88"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2017"
      ],
      "nameSrc": "Volcanic Ash/SO2 RGB and SEVIRI 8.7um channel (SO2) - IODC"
    },
    {
      "id": "p175",
      "name": "Volcanic Ash/SO2 RGB and FCI 8.7 µm Channel (SO2)",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG FCI"
      ],
      "purpose": "Tracking volcanic ash plumes, SO2 emissions associated with volcanic eruptions",
      "freq": [
        "10min"
      ],
      "res": [
        "1-2km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R89"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [
        "2024"
      ],
      "nameSrc": "Volcanic Ash/SO2 RGB and FCI 8.7um channel (SO2)"
    },
    {
      "id": "p176",
      "name": "FCI 0.6, 1.6 and 2.2 µm Channels",
      "provider": "EUMETSAT",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "Meteosat (MTG)"
      ],
      "inputs": [
        "MTG FCI"
      ],
      "purpose": "Tracking volcanic ash plumes",
      "freq": [
        "10min"
      ],
      "res": [
        "1-2km (SSP)"
      ],
      "extent": [
        "Europe, Middle East, Africa"
      ],
      "coverage": [
        "Europe, Middle East & Africa"
      ],
      "temporal": [
        "2024 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF4"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Pre-operational / in development",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, Data Centre, Data Store",
          "u": "",
          "f": "NetCDF4"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R90"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Commissioning/Development"
      ],
      "temporalSrc": [
        "2024"
      ],
      "nameSrc": "FCI 0.6, 1.6, 2.2um channels"
    },
    {
      "id": "p177",
      "name": "GOME-2 SO2 Total Column",
      "provider": "EUMETSAT AC SAF",
      "operator": "EUMETSAT",
      "operators": [
        "EUMETSAT"
      ],
      "hazards": [
        "Volcanic ash"
      ],
      "group": "Aerosol, ash & trace gases",
      "satellites": [
        "Metop"
      ],
      "inputs": [
        "Metop GOME-2"
      ],
      "purpose": "Tracking SO2 emissions associated with volcanic eruptions",
      "freq": [
        "Continuous"
      ],
      "res": [
        "40x40km to 40x240km"
      ],
      "extent": [
        "Global"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "2007 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5, BUFR"
      ],
      "access": "Provider data-policy terms",
      "policy": [
        "EUMETSAT data policy"
      ],
      "status": "Operational",
      "poc": [
        "ops@eumetsat.int"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "EUMETCast-Europe, -Terrestrial, -Africa, SAF Archive",
          "u": "",
          "f": "HDF5, BUFR"
        }
      ],
      "urls": [],
      "rows": [
        "EUM!R91"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "2007"
      ],
      "nameSrc": "GOME-2 SO2 Total Column"
    },
    {
      "id": "p178",
      "name": "Hydro Estimator Precipitation",
      "provider": "India Meteorological Department (IMD) · Space Applications Centre, ISRO",
      "operator": "IMD / ISRO",
      "operators": [
        "IMD",
        "ISRO"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT3DR/3DS, Imager"
      ],
      "purpose": "Estimating Precipitation",
      "freq": [
        "Half hourly, three hourly, daily"
      ],
      "res": [
        "4km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted",
        "free, open access"
      ],
      "status": "Operational",
      "poc": [
        "mogweb@sac.isro.gov.in"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        },
        {
          "d": "online portal",
          "u": "www.mosdac.gov.in",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/",
        "www.mosdac.gov.in"
      ],
      "rows": [
        "IMD!R2",
        "ISRO!R4"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Hydro Estimator Precipitation"
    },
    {
      "id": "p179",
      "name": "INSAT Multispectral Rainfall",
      "provider": "India Meteorological Department (IMD)",
      "operator": "IMD",
      "operators": [
        "IMD"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT3DR/3DS, Imager"
      ],
      "purpose": "Rainfall detection",
      "freq": [
        "Half hourly, three hourly, daily"
      ],
      "res": [
        "4km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/"
      ],
      "rows": [
        "IMD!R3"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "INSAT Multispectral Rainfall"
    },
    {
      "id": "p180",
      "name": "Total Precipitable Water Vapour",
      "provider": "India Meteorological Department (IMD)",
      "operator": "IMD",
      "operators": [
        "IMD"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT3DR/3DS, Sounder"
      ],
      "purpose": "Estimate precipitation conditions",
      "freq": [
        "Hourly"
      ],
      "res": [
        "10km"
      ],
      "extent": [
        "Indian region"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/"
      ],
      "rows": [
        "IMD!R4"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Total Precipitable water vapour"
    },
    {
      "id": "p181",
      "name": "Tropical Cyclone Monitoring Imagery and Enhancement Products",
      "provider": "India Meteorological Department (IMD)",
      "operator": "IMD",
      "operators": [
        "IMD"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT-3DR/3DS, Imager"
      ],
      "purpose": "Eye detection,Cloud band movement",
      "freq": [
        "Half hourly"
      ],
      "res": [
        "1-4km"
      ],
      "extent": [
        "Full disk and Indian region"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/"
      ],
      "rows": [
        "IMD!R5"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Tropical Cyclone Monitoring Imagery and Enhancement Products"
    },
    {
      "id": "p182",
      "name": "Ocean Surface Vector Winds",
      "provider": "India Meteorological Department (IMD) · Space Applications Centre, ISRO",
      "operator": "IMD / ISRO",
      "operators": [
        "IMD",
        "ISRO"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Wind & atmospheric motion",
      "satellites": [
        "Oceansat-3"
      ],
      "inputs": [
        "Oceansat-3 (Scatterometerer)"
      ],
      "purpose": "Cyclogeneisis prediction, cyclone intensity estimation, cyclone wind parameter estimation",
      "freq": [
        "12 hours"
      ],
      "res": [
        "12km and 25km",
        "50 kmx50 km and 12 km x 12 km"
      ],
      "extent": [
        "Indian region",
        "Global passes"
      ],
      "coverage": [
        "Indian Ocean & South Asia",
        "Global / near-global"
      ],
      "temporal": [
        "2022-11 – present"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5",
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted",
        "free, open access"
      ],
      "status": "Operational",
      "poc": [
        "mogweb@sac.isro.gov.in"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        },
        {
          "d": "Online portal (For visualizaion and download)",
          "u": "www.mosdac.gov.in",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/",
        "www.mosdac.gov.in"
      ],
      "rows": [
        "IMD!R6",
        "ISRO!R3"
      ],
      "training": [],
      "latencyRaw": [
        "NRT",
        "Near Real-time: Standard Products and value added products"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "Since November 2022"
      ],
      "nameSrc": "Ocean Surface Vector Winds"
    },
    {
      "id": "p183",
      "name": "Sea Surface Temperature",
      "provider": "India Meteorological Department (IMD)",
      "operator": "IMD",
      "operators": [
        "IMD"
      ],
      "hazards": [
        "Tropical cyclones",
        "Heatwaves"
      ],
      "group": "Sea surface temperature & ocean",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT-3DR/3DS, Imager"
      ],
      "purpose": "Analysis of thermal pattern for cyclogenesis",
      "freq": [
        "Half hourly, daily"
      ],
      "res": [
        "4km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/"
      ],
      "rows": [
        "IMD!R7",
        "IMD!R10"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Sea Surface Temperature (SST)"
    },
    {
      "id": "p184",
      "name": "Atmospheric Motion Vectors and Derived Wind Diagnostics",
      "provider": "India Meteorological Department (IMD)",
      "operator": "IMD",
      "operators": [
        "IMD"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Water vapour & soundings",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT-3DR/3DS, Imager"
      ],
      "purpose": "Help in checking weather system is dissipating or not",
      "freq": [
        "Half hourly"
      ],
      "res": [
        "50km"
      ],
      "extent": [
        "Indian region"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/"
      ],
      "rows": [
        "IMD!R8"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Atmospheric Motion Vectors and Derived Wind Diagnostics"
    },
    {
      "id": "p185",
      "name": "Land Surface Temperature",
      "provider": "India Meteorological Department (IMD) · Space Applications Centre, ISRO",
      "operator": "IMD / ISRO",
      "operators": [
        "IMD",
        "ISRO"
      ],
      "hazards": [
        "Heatwaves"
      ],
      "group": "Land surface temperature & heat",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT-3DR/3DS, Imager"
      ],
      "purpose": "Heat Waves",
      "freq": [
        "Half hourly, daily"
      ],
      "res": [
        "4km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "Free,unrestricted",
        "free, open access"
      ],
      "status": "Operational",
      "poc": [
        "mogweb@sac.isro.gov.in"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "https://mausam.imd.gov.in/",
          "f": "HDF5"
        },
        {
          "d": "online portal",
          "u": "www.mosdac.gov.in",
          "f": "HDF5"
        }
      ],
      "urls": [
        "https://mausam.imd.gov.in/",
        "www.mosdac.gov.in"
      ],
      "rows": [
        "IMD!R9",
        "ISRO!R5"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Land Surface Temperature"
    },
    {
      "id": "p186",
      "name": "INSAT-3D Imager – Level 1B Full Disk Imagery",
      "provider": "Space Applications Centre, ISRO",
      "operator": "ISRO",
      "operators": [
        "ISRO"
      ],
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Cloud, convection & lightning",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT-3D and INSAT-3DR (TIR-1, Visible, Water Vapour),"
      ],
      "purpose": "Real-time cyclone monitoring, Geolocation estimation, Intensity estimation, Size estimation, wind paramter estimation, rain estimation",
      "freq": [
        "Half Houly"
      ],
      "res": [
        "Visible: 1km x 1 km; TIR: 4 km x 4 km, Water Vapour: 8 km x 8 km"
      ],
      "extent": [
        "Full Disk coverage from GEO at 82E & 74E, Covering North Indian ocean and surrounding region"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2013-07 – 2024-06-18 (INSAT-3D); 2016-09 – present (INSAT-3DR)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "free, open access"
      ],
      "status": "Operational",
      "poc": [
        "mogweb@sac.isro.gov.in"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "Online portal (For visualizaion and download)",
          "u": "www.mosdac.gov.in",
          "f": "HDF5"
        }
      ],
      "urls": [
        "www.mosdac.gov.in"
      ],
      "rows": [
        "ISRO!R2"
      ],
      "training": [],
      "latencyRaw": [
        "Near Real-time : Standard Geophysical products (OLR, SST, LST, Rainfall), radiances and Imageries over the Standard (full Disk, ASIA Sector and Sector product)"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3D (July 2013-18 June 2024), INSAT-3DR since September 2016"
      ],
      "nameSrc": "INSAT-3D Imager – Level 1B Full Disk Imagery"
    },
    {
      "id": "p190",
      "name": "Fire",
      "provider": "Space Applications Centre, ISRO",
      "operator": "ISRO",
      "operators": [
        "ISRO"
      ],
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "satellites": [
        "INSAT-3D/3DR/3DS"
      ],
      "inputs": [
        "INSAT-3DR/3DS, Imager"
      ],
      "purpose": "FIRE",
      "freq": [
        "Half hourly, daily"
      ],
      "res": [
        "4km"
      ],
      "extent": [
        "Full disk"
      ],
      "coverage": [
        "Indian Ocean & South Asia"
      ],
      "temporal": [
        "2016-09 – present (INSAT-3DR); 2024-06 – present (INSAT-3DS)"
      ],
      "latency": "Near real-time",
      "formats": [
        "HDF5"
      ],
      "access": "Free / open",
      "policy": [
        "free, open access"
      ],
      "status": "Operational",
      "poc": [
        "mogweb@sac.isro.gov.in"
      ],
      "comments": [],
      "mode": "",
      "programmes": [],
      "channels": [
        {
          "d": "online portal",
          "u": "www.mosdac.gov.in",
          "f": "HDF5"
        }
      ],
      "urls": [
        "www.mosdac.gov.in"
      ],
      "rows": [
        "ISRO!R6"
      ],
      "training": [],
      "latencyRaw": [
        "NRT"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "INSAT-3DR since September 2016,INSAT-3DS(since June 2024)"
      ],
      "nameSrc": "Fire"
    },
    {
      "id": "p191",
      "name": "CPC Unified Daily Gauge Analysis and CPC Morphing Technique Satellite Precipitation Estimates",
      "provider": "NOAA NWS CPC",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Gauge-based analysis of daily precipitation, CMORPH1 integrated satellite precipitation estimates"
      ],
      "purpose": "Real-time monitoring of global precipitation over the global land (with gauge analysis) and over the entire globe (with the CMORPH)",
      "freq": [
        "Gauge analysis: daily, 5-day, weekly, monthly CMORPH: 30 minutes, 3-hourly, daily, pentad, weekly, monthly"
      ],
      "res": [
        "gauge analysis: 0.25deg lat/lon, CMORPH: 8km, 0.25deg"
      ],
      "extent": [
        "gauge analysis: entire global land,; CMORPH: 60S-60N;"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1979 – present (gauge analysis); 1998 – present (CMORPH1)"
      ],
      "latency": "Delayed mode",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [
        "Pingping.Xie@noaa.gov; Yanjuan.Guo@noaa.gov"
      ],
      "comments": [],
      "mode": "Climate monitoring",
      "programmes": [
        "WMO SWCEM"
      ],
      "channels": [
        {
          "d": "CPC ftp site",
          "u": "ftp.cpc.ncep.noaa.gov/precip/PORT/SEMDP",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "ftp.cpc.ncep.noaa.gov/precip/PORT/SEMDP"
      ],
      "rows": [
        "SWCEM!R7"
      ],
      "training": [],
      "latencyRaw": [
        "gauge analysis: 18 hours, CMORPH: 4 hours"
      ],
      "statusRaw": [
        "Operational"
      ],
      "temporalSrc": [
        "gauge analysis: 1979; CMORPH1: 1998;"
      ],
      "nameSrc": "CPC Unifields daily gauge analysis, CPC Morphing technique satellite precipitation estimates"
    },
    {
      "id": "p192",
      "name": "NESDIS Global Vegetation Health Products",
      "provider": "NOAA NESDIS",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Droughts"
      ],
      "group": "Vegetation & land condition",
      "satellites": [
        "Multiple / not specified"
      ],
      "inputs": [
        "NOAA/NESDIS Vegetation Health Index"
      ],
      "purpose": "Monitoring of global vegetaion state",
      "freq": [
        "weekly"
      ],
      "res": [
        "1km, 4km, 16km,0.25deg lat/lon"
      ],
      "extent": [
        "entire global land"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1981 – present"
      ],
      "latency": "Delayed mode",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [],
      "comments": [
        "This is a NESDIS product. CPC collect the global data from NESDIS and extracts the data for the SWCEM program."
      ],
      "mode": "Climate monitoring",
      "programmes": [
        "WMO SWCEM"
      ],
      "channels": [
        {
          "d": "CPC ftp site",
          "u": "ftp.cpc.ncep.noaa.gov/precip/PORT/SEMDP",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "ftp.cpc.ncep.noaa.gov/precip/PORT/SEMDP"
      ],
      "rows": [
        "SWCEM!R8"
      ],
      "training": [],
      "latencyRaw": [
        "4 days"
      ],
      "statusRaw": [
        "routine production"
      ],
      "temporalSrc": [
        "1981"
      ],
      "nameSrc": "NESDIS Global Vegetation Health Products"
    },
    {
      "id": "p193",
      "name": "CMORPH Precipitation Estimates",
      "provider": "NOAA NWS CPC",
      "operator": "NOAA",
      "operators": [
        "NOAA"
      ],
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "inputs": [
        "Gauge measurements, estimates from >10 GEO and LEO satellites"
      ],
      "purpose": "Rea-Time monitoring and diagnostic analysis of heavy rainfall, flooding, driving river forecast models",
      "freq": [
        "30 minutes"
      ],
      "res": [
        "CMORPH1 8kmx8km"
      ],
      "extent": [
        "CMORPH1: 60S-60N"
      ],
      "coverage": [
        "Global / near-global"
      ],
      "temporal": [
        "1998 – present (CMORPH1)"
      ],
      "latency": "Near real-time",
      "formats": [
        "NetCDF"
      ],
      "access": "Free / open",
      "policy": [
        "free"
      ],
      "status": "Operational",
      "poc": [
        "Pingping.Xie@noaa.gov"
      ],
      "comments": [],
      "mode": "",
      "programmes": [
        "WMO SWCEM"
      ],
      "channels": [
        {
          "d": "CPC ftp site",
          "u": "ftp.cpc.ncep.noaa.gov",
          "f": "NetCDF"
        }
      ],
      "urls": [
        "ftp.cpc.ncep.noaa.gov"
      ],
      "rows": [
        "SWCEM!R9"
      ],
      "training": [],
      "latencyRaw": [
        "CMORPH1: 2 hours"
      ],
      "statusRaw": [
        "Operational production"
      ],
      "temporalSrc": [
        "CMORPH1: since 1998"
      ],
      "nameSrc": "CMORPH Precipitation Estimates"
    }
  ],
  "training": [
    {
      "id": "n1",
      "title": "Monitoring and Modeling Floods Using Earth Observations",
      "source": "Data call — NASA sheet",
      "provider": "NASA ARSET (Earthdata Applied Remote Sensing Training)",
      "presenter": "",
      "type": "Online training course",
      "hazards": [
        "Floods"
      ],
      "group": "Soil moisture, hydrology & snow",
      "operators": [
        "NASA"
      ],
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "region": "Global",
      "minutes": "",
      "language": "English",
      "urls": [
        "https://www.earthdata.nasa.gov/learn/trainings/monitoring-modeling-floods-using-earth-observations"
      ],
      "parts": [],
      "linkedProducts": [
        "Streamflow (m³/s)",
        "Flooded Area (km²)"
      ]
    },
    {
      "id": "n2",
      "title": "Assessing Extreme Weather Statistics Using NASA Earth Exchange Global Daily Downscaled Projections",
      "source": "Data call — NASA sheet",
      "provider": "NASA ARSET (Earthdata Applied Remote Sensing Training)",
      "presenter": "",
      "type": "Online training course",
      "hazards": [
        "Heatwaves",
        "Droughts",
        "Fires"
      ],
      "group": "Climate datasets & projections",
      "operators": [
        "NASA"
      ],
      "satellites": [
        "Ground, in-situ and model inputs"
      ],
      "region": "Global",
      "minutes": "",
      "language": "English",
      "urls": [
        "https://www.earthdata.nasa.gov/learn/trainings/assessing-extreme-weather-statistics-using-nasa-earth-exchange-global-daily"
      ],
      "parts": [],
      "linkedProducts": [
        "NEX-GDDP-CMIP6 (NASA Earth eXchange Global Daily Downscaled Projection)"
      ]
    },
    {
      "id": "n3",
      "title": "Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management",
      "source": "Data call — NASA sheet",
      "provider": "NASA ARSET (Earthdata Applied Remote Sensing Training)",
      "presenter": "",
      "type": "Online training course",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [
        "NASA"
      ],
      "satellites": [
        "Terra / Aqua (MODIS, AIRS)",
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "region": "Global",
      "minutes": "",
      "language": "English",
      "urls": [
        "https://www.earthdata.nasa.gov/learn/trainings/introduction-nasa-earth-observations-tools-wildfire-monitoring-management"
      ],
      "parts": [],
      "linkedProducts": [
        "Fire Information for Resource Management System (FIRMS)"
      ]
    },
    {
      "id": "t1",
      "title": "An introduction to the NOAA Global LEO/GEO Flood Product",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "NOAA",
      "presenter": "William Straka III Researcher, SSEC/CIMSS, NOAA/JPSS",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [
        "NOAA"
      ],
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "region": "General",
      "minutes": "27",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000688408/296d276c64",
        "https://vimeo.com/1000688368/822d8ca9be"
      ],
      "parts": [
        "Post presentation Question and Answer session with William Straka 22 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t2",
      "title": "Utilisation of the Global Satellite Mapping of Precipitation (GSMaP) dataset",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "JAXA",
      "presenter": "Nao Yoshida, Earth Observation Research Center, Japan Aerospace Exploration Agency (JAXA",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [
        "JAXA"
      ],
      "satellites": [
        "GPM constellation"
      ],
      "region": "General",
      "minutes": "27",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000584644/1ffe240f10"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t3",
      "title": "A case study utilising GSMaP data",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "JAXA",
      "presenter": "Nao Yoshida, Earth Observation Research Center, JAXA",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [
        "JAXA"
      ],
      "satellites": [
        "GPM constellation"
      ],
      "region": "Japan",
      "minutes": "7",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000584685/6be4618e10"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t4",
      "title": "Weather and Forecast Discussion with a focus on the recent heavy rainfall event over eastern Australia, March 2021",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "28",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000685134/ed644d8205"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t5",
      "title": "Examining various MODIS Aqua and Terra and Himawari-8 satellite products for monitoring the Kati Thanda-Lake Eyre floods, Central Australia, 30 March to 11 April 2019",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [
        "JMA",
        "NASA"
      ],
      "satellites": [
        "Himawari-8/9",
        "Terra / Aqua (MODIS, AIRS)"
      ],
      "region": "Australia",
      "minutes": "20",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001517877/955eeae21e"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t6",
      "title": "Utilising microwave data from polar orbiting satellites and Himawari-8 data for the forecasting and nowcasting of heavy rainfall events including a case study from North Queensland",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Australia",
      "minutes": "30",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1003966763/37410d39e6"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t7",
      "title": "Ambon Island Flooding",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "BMKG, Indonesia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Indonesia",
      "minutes": "11",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000672541/9eaead056b"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t8",
      "title": "Extreme rain over Jabodetabek on the first day of 2020",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "BMKG, Indonesia",
      "presenter": "Idhan Abubakar BMKG Indonesia",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Indonesia",
      "minutes": "26",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000710450/140dcaaff0"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t9",
      "title": "Meteorological Overview of a Heavy Rain Event over Java Island during the Dry Period",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "BMKG, Indonesia",
      "presenter": "Teguh Setyawan BMKG Indonesia",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Indonesia",
      "minutes": "21",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1003966842/707c9344e6"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t10",
      "title": "Tropical Case Study: West Java Flooding Event, 20-21 September 2016",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Indonesia",
      "minutes": "31",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1005303923/0ce3ea0a6d"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t11",
      "title": "Some Fiji and Solomon Island examples from 2020 with feedback from William Straka",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre.",
      "type": "Case-study PDF",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Fiji and Solomon Islands",
      "minutes": "",
      "language": "Not stated",
      "urls": [
        "https://learn.bom.gov.au/pluginfile.php/122115/mod_page/content/23/Fiji_and_Solomon_Islands_flooding_examples_Q_and_A.pdf"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t12",
      "title": "The heavy rainfall and flooding event over Auckland, New Zealand, 27th January 2023",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "New Zealand",
      "minutes": "57",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000598850/d70be0ee72"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t13",
      "title": "Heavy rainfall and flooding event over Samoa, 8th June 2023",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Silipa Mulitalo, Samoa Meteorological Service and Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "Samoa",
      "minutes": "33",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000592228/27119f9e78",
        "https://vimeo.com/1000592304/aa45f89af0"
      ],
      "parts": [
        "Post presentation discussion. 5 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t14",
      "title": "Heavy Summer Rainfall over South Korea",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "KMA / Korea VLab CoE",
      "presenter": "Dr Jinho Shin, Korea VLab Centre of Excellence",
      "type": "Focus Group recording",
      "hazards": [
        "Floods"
      ],
      "group": "Precipitation & rainfall",
      "operators": [],
      "satellites": [],
      "region": "South Korea",
      "minutes": "30",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000613777/13934fd0bb"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t16",
      "title": "Detecting and forecasting Tropical Cyclone Rapid Intensification",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "General / Australia",
      "minutes": "48",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001505845/37ab8e2350"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t17",
      "title": "The development and non-development of Tropical Cyclone Lincoln, February 2024",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "55",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000583964/d4657a6445"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t18",
      "title": "The Australian season of non developers? A review of recent tropical lows: 08, 10, 11 and 12U",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "60",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000685596/ac27e1b0a8"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t19",
      "title": "Some forecasting highlights from Tropical Cyclone Damien",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "53",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000709632/ed9a48cdf5"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t20",
      "title": "High Resolution Himawari-8 Target Area Observation case study of Tropical Cyclone Veronica, 23-25th March 2019",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Australia",
      "minutes": "29",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001519875/1a32ee458d"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t21",
      "title": "Tropical Cyclone Debbie at landfall time; comparing various Himawari-8 satellite products and associated observations and NWP products",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Australia",
      "minutes": "32",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1004421429/6510b70b04"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t22",
      "title": "Case study 1: Tropical Cyclone Gita, 15th February 2018",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Fiji",
      "minutes": "15",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1003974578/ad7a413b11"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t23",
      "title": "A Quadruplet of Tropical Cyclones over the Western Pacific during the Winter Season",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Danice Yin Lam NG, Hong Kong Observatory, China and Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Hong Kong / Philippines / Micronesia",
      "minutes": "11",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1044486243/03b25a709e"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t24",
      "title": "On the rapid intensification and weakening of Tropical Cyclones Vernon and Charlotte",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Indonesia / Indian Ocean",
      "minutes": "59",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000622334/7cf141df62"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t25",
      "title": "Formation of Tropical Cyclone 05U \"Teratai\"",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Indonesia / Indian Ocean",
      "minutes": "3",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000678732/a22f4a4de7"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t26",
      "title": "A case study of Typhoon / Tropical Storm Krosa, including the High-Resolution Himawari-8 Target Area Observations of the mesovortices within the centre of the system; 14th August 2019",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Japan / Pacific region",
      "minutes": "45",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001523554/2dbd1c1f21"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t27",
      "title": "Tropical Cyclone 05B \"Jawad\" and Introduction",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "DMH, Myanmar",
      "presenter": "U Kyaw Lwin Oo, Myanmar Department of Meteorology and Hydrology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Myanmar",
      "minutes": "5",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000678778/ce28f783b0"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t28",
      "title": "Tropical Cyclone Paul 10-11 April 2024: New technologies adding value; ASCAT UHR and Tropics Microwave",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [
        "EUMETSAT"
      ],
      "satellites": [
        "Metop"
      ],
      "region": "Solomon Islands / Papua New Guinea",
      "minutes": "8",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1053199237/3729b0719b",
        "https://vimeo.com/1053199350/36ca292925"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t29",
      "title": "Satellite analysis for Tropical Cyclone over KMA",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "KMA / Korea VLab CoE",
      "presenter": "Jun Park Korea Meteorological Administration",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "South Korea",
      "minutes": "31",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000702657/23a097cfd1"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t30",
      "title": "Tropical Cyclone Harold: Intensity and structural variations using microwave and scatterometry",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Senior Meteorologist, Tropical Cyclone Department, Australian Bureau of Meteorology",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [],
      "satellites": [],
      "region": "Vanuatu",
      "minutes": "60",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000708754/b6d3f28c5c"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t53",
      "title": "Application of SAR, scatterometry, and microwave imagery during Severe Tropical Cyclone Fina, November 2025",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Australian Bureau of Meteorology",
      "presenter": "Joe Courtney, Bureau of Meteorology, Perth",
      "type": "Focus Group recording",
      "hazards": [
        "Tropical cyclones"
      ],
      "group": "Tropical cyclone analysis",
      "operators": [
        "EUMETSAT"
      ],
      "satellites": [
        "Sentinel (Copernicus)",
        "Metop"
      ],
      "region": "Australia / Indonesia",
      "minutes": "18",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1160086330/e58db56328",
        "https://vimeo.com/1160086420/01171bfb6f"
      ],
      "parts": [
        "Post presentation discussion. 3 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t54",
      "title": "Hail Storm Analysis in Brisbane using GIS and Satellite Imagery",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "BMKG, Indonesia",
      "presenter": "Rion Salman, BMKG Indonesia",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "14",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1160094792/bce6211009"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t31",
      "title": "A short case study of the Hector thunderstorm over northern Australia; utilising satellite data in combination with other observational data and high-resolution NWP model data",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "25",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000619110/4b4c428e29"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t32",
      "title": "Warm cloud top thunderstorms over northern Queensland, 14th September 2021",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "14",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000680693/63e13c0710"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t33",
      "title": "Monitoring warm cloud convection and associated lightning using Himawari-8 and other data",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Australia",
      "minutes": "18",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1003967957/5ffe5a90eb"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t34",
      "title": "Mid-latitude Case Study: South Australian Severe Storm, 28th September 2016",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "18",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1005303758/84d10a5c8c"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t55",
      "title": "Explosive cyclogenesis over the south Tasman Sea on 23 October 2025",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "MetService New Zealand",
      "presenter": "Chris Webster, MetService New Zealand",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Australia / New Zealand",
      "minutes": "13",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1160094823/0bf45dfeb5"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t35",
      "title": "Case studies demonstrating the ProbSevere LightningCast Machine Learning Storm Prediction Tool over the South Pacific Region, with input from the 2024 BMTC Graduate Diploma of Meteorology graduate students",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [
        "NOAA"
      ],
      "satellites": [
        "JPSS (S-NPP, NOAA-20/21)"
      ],
      "region": "Fiji",
      "minutes": "23",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1072393555/c3cf635424",
        "https://vimeo.com/1072393526/d8d012227e"
      ],
      "parts": [
        "Post presentation discussion. 2 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t36",
      "title": "Monitoring of Lightning associated with Thunderstorms over Fiji",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Fiji",
      "minutes": "16",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000274913/37eb691432",
        "https://vimeo.com/1000274896/5de3663351"
      ],
      "parts": [
        "Post presentation discussion. 6 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t37",
      "title": "High-based convection and turbulence northeast of Hawaii",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "NOAA",
      "presenter": "Jordan Gerth, NOAA/NESDIS",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Hawaii",
      "minutes": "16",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1053199378/711a62713e"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t38",
      "title": "Analysis of Puting Beliung Rancaekek, Bandung, West Java by using Geostationary Satellite",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Indonesian VLab CoE",
      "presenter": "Rion Salman, Indonesian VLab Centre of Excellence",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Indonesia",
      "minutes": "10",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1044486368/6e82b69b5a",
        "https://vimeo.com/1044486326/36f86977ae"
      ],
      "parts": [
        "Post presentation discussion. 3 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t39",
      "title": "Detection of Mesoscale Convective System (MCS) over the Banda Sea, Maluku",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Indonesian VLab CoE",
      "presenter": "Rion Salman, Indonesian VLab Centre of Excellence",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Indonesia",
      "minutes": "10",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000585239/7908ce945f"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t40",
      "title": "Analysis of Cumulonimbus development over the Ambon region of Indonesia using Himawari-8 satellite data",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "BMKG, Indonesia",
      "presenter": "Rion Salman, Forecaster of Pattimura Meteorological Station BMKG Indonesia",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Indonesia",
      "minutes": "27",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001509844/3771fd79cb"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t41",
      "title": "The remarkable development of Sumatra Squall Line SQL-31 \"Xavi\"",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Indonesia / Singapore",
      "minutes": "27",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000682679/19accc8814"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t42",
      "title": "Rapidly Developing Thunderstorm Detection using various Satellite Products",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "KMA / Korea VLab CoE",
      "presenter": "Dr Hye Sook Park, Korea Meteorological Administration",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Korea",
      "minutes": "24",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1004420322/5e9fd0307e"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t43",
      "title": "Satellite Imagery with a Tornado in Myanmar",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "SSEC/CIMSS, University of Wisconsin–Madison",
      "presenter": "Dr Scott Lindstrom, SSEC University of Wisconsin Madison",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Myanmar",
      "minutes": "15",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000585310/d0b4c762b7"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t44",
      "title": "The evolution of a low-level lee vortex and the development of convection over northern Luzon, Philippines",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Philippines",
      "minutes": "17",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000683540/2b2e206350"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t56",
      "title": "Hail in the Samoan Archipelago",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "SSEC/CIMSS, University of Wisconsin–Madison",
      "presenter": "Timothy J. Wagner, SSEC University of Wisconsin–Madison",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Samoa",
      "minutes": "11",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1160094863/6201c1a831"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t45",
      "title": "Thunderstorms and associated Lightning over Maritime Areas with a Pacific Ocean Case Study",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "Samoa",
      "minutes": "26",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000273925/d4c12af545"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t46",
      "title": "Analysis of a Mesoscale Convective Complex in the South China Sea",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Thunderstorms & squall lines"
      ],
      "group": "Cloud, convection & lightning",
      "operators": [],
      "satellites": [],
      "region": "South China Sea",
      "minutes": "17",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1004415670/43b20d15ac"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t47",
      "title": "Early Warning System for Land and Forest Fires in Indonesia",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "BMKG, Indonesia",
      "presenter": "Teguh Setiawan, BMKG Indonesia Public Weather Services",
      "type": "Focus Group recording",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [],
      "satellites": [],
      "region": "General / Indonesia",
      "minutes": "26",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000586538/992df27091"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t48",
      "title": "High Resolution Himawari-8 Target Area Observation case study of the Bunyip and Licola fires in southeastern Australia, including an evaluation of the Fire Temperature RGB product",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre Introduction to the High-Resolution Himawari-8 Target Area Observations and the Bunyip fire situation of the 2nd March 2018",
      "type": "Focus Group recording",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Australia",
      "minutes": "21",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001515833/e7906f2256",
        "https://vimeo.com/1001515872/afb04e3ed2",
        "https://vimeo.com/1001515768/f9a1ca5048"
      ],
      "parts": [
        "Examination of the Fire Temperature RGB and the Bunyip fire situation overnight 2nd / 3rd March 2018. 13 minutes duration",
        "Examination of the Licola Fire, 3rd March utilising High Resolution Himawari-8 Target Area Observations. 15 minutes duration"
      ],
      "linkedProducts": []
    },
    {
      "id": "t49",
      "title": "High Resolution Himawari-8 Target Area Observation case study of the recent Queensland fires",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Australia",
      "minutes": "22",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1001511937/4091f1214f"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t50",
      "title": "Case study 2: The Wollemi National Park / Putty State Forest Fire, 14th February 2018",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [],
      "satellites": [],
      "region": "Australia",
      "minutes": "8",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1003974535/8fcfb7e30d"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t51",
      "title": "Wildfires on the island of Maui in Hawai'i. Using satellite data to describe a fire prone environment",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "NOAA",
      "presenter": "Dr Jordan Gerth, NOAA/NWS",
      "type": "Focus Group recording",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [],
      "satellites": [],
      "region": "Hawaii",
      "minutes": "13",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1000585395/c91556facc"
      ],
      "parts": [],
      "linkedProducts": []
    },
    {
      "id": "t52",
      "title": "Related case studies pertaining to smoke and fire detection using the new Himawari-8 SWIR channel and associated products",
      "source": "Australian VLab CoE Regional Focus Group",
      "provider": "Bureau of Meteorology Training Centre, Australia",
      "presenter": "Bodo Zeschke, Australian Bureau of Meteorology Training Centre",
      "type": "Focus Group recording",
      "hazards": [
        "Fires"
      ],
      "group": "Fire & smoke",
      "operators": [
        "JMA"
      ],
      "satellites": [
        "Himawari-8/9"
      ],
      "region": "Singapore / Australia",
      "minutes": "20",
      "language": "Not stated",
      "urls": [
        "https://vimeo.com/1005294302/3a3b0d7ab0"
      ],
      "parts": [],
      "linkedProducts": []
    }
  ],
  "groups": [
    "Precipitation & rainfall",
    "Water vapour & soundings",
    "Cloud, convection & lightning",
    "Wind & atmospheric motion",
    "Sea surface temperature & ocean",
    "Land surface temperature & heat",
    "Soil moisture, hydrology & snow",
    "Vegetation & land condition",
    "Radiation & energy fluxes",
    "Fire & smoke",
    "Aerosol, ash & trace gases",
    "Tropical cyclone analysis",
    "Climate datasets & projections"
  ],
  "coverageClasses": [
    "Global / near-global",
    "East Asia & Western Pacific",
    "Europe, Middle East & Africa",
    "Indian Ocean & South Asia",
    "Americas",
    "Russia & Northern Eurasia",
    "Not specified"
  ],
  "accessClasses": [
    "Free / open",
    "Free / open, conditions on some routes",
    "Free, NMHS credentials required",
    "Provider data-policy terms",
    "Not stated"
  ],
  "statusClasses": [
    "Operational",
    "Pre-operational / in development",
    "Research product",
    "Demonstration",
    "Not stated"
  ],
  "satelliteOwners": {
    "Meteosat (MSG)": "EUMETSAT",
    "Meteosat (MTG)": "EUMETSAT",
    "Metop": "EUMETSAT",
    "Sentinel (Copernicus)": "EU Copernicus — EUMETSAT / ESA",
    "GK-2A": "KMA",
    "FY-3": "CMA",
    "FY-4B": "CMA",
    "Himawari-8/9": "JMA",
    "GPM constellation": "NASA / JAXA",
    "GCOM-W (AMSR2)": "JAXA",
    "GCOM-C (SGLI)": "JAXA",
    "JPSS (S-NPP, NOAA-20/21)": "NOAA / NASA",
    "GOES": "NOAA",
    "NOAA-19": "NOAA",
    "DMSP": "US Department of Defense",
    "Terra / Aqua (MODIS, AIRS)": "NASA",
    "CYGNSS": "NASA",
    "QuikSCAT": "NASA",
    "INSAT-3D/3DR/3DS": "ISRO / IMD",
    "Oceansat-3": "ISRO",
    "Elektro-L": "Roscosmos",
    "Arktika-M": "Roscosmos",
    "Meteor-M": "Roscosmos",
    "Kanopus-V": "Roscosmos",
    "RADARSAT / RCM": "Canadian Space Agency",
    "Ground, in-situ and model inputs": "Various — non-satellite",
    "Multiple / not specified": "Not specified"
  }
};
