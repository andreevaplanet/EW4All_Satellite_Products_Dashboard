# EW4All Satellite Products Dashboard

Which satellite products can support a given priority hazard, who provides them, which
satellites are involved, and where to find relevant training.

Prepared for the Joint RA II / RA V Task Team on Satellite Data and Products in Support of
Early Warnings for All.

## Updating the dashboard

Edit **`data/products.xlsx`** and commit it. That is the whole procedure — no code to touch
and nothing to install. The dashboard reads the workbook every time it loads, so a change to
a product name, a link, a hazard or a training resource appears on the next page load.

The workbook's first sheet, *How to edit*, explains the rules. In short:

| Sheet | One row per |
|---|---|
| Products | satellite product (190) |
| Training | training resource (58) |
| Operators | satellite operator (10) |
| Hazards | EW4All priority hazard |
| Reference | permitted values for the classified columns — read only |

Short controlled values share a cell separated by `; ` (`Floods; Tropical cyclones`). Longer
written values go one per line inside the cell. Access routes are one per line, written as
`Route name | URL | Format`.

Keep the product ID when editing a row; give a new product a new one (`p191`, `p192`…). The
ID is how the dashboard keeps a product's source references.

### Served over HTTP — GitHub Pages, or `python3 -m http.server`

Editing the workbook is the whole procedure. The dashboard reads it directly.

### Opened straight off the disk

A browser will not let a local page read a workbook beside it, so the dashboard uses
`data/dataset.js` instead — the same content, generated from the workbook. Regenerate it
whenever you change the workbook:

1. open `update.html`
2. drop `data/products.xlsx` onto it
3. it checks the workbook, reports what changed, and offers `dataset.js`
4. save that over `data/dataset.js` and commit both files

Nothing is uploaded; the workbook is read in your own browser. Do this and the dashboard is
correct however it is opened — served, from disk, or emailed as a folder.

## Running it

    python3 -m http.server

then open <http://localhost:8000>. No build step, no package manager, no dependencies.

## Files

    index.html               the dashboard — structure, logic, workbook reader and runtime
    update.html              regenerates data/dataset.js from the workbook, in the browser
    data/products.xlsx       the dataset you edit
    data/dataset.js          generated from the workbook; what the page uses off-disk
    assets/wmo-logo.png      WMO logo
    docs/                    the same dataset as CSV, plus the normalisation notes

## How index.html is organised

Six banner-commented sections:

| Section | Line (approx.) | What it is |
|---|---|---|
| 1. Fonts and base styles | 36 | webfont links and a handful of resets |
| 2. Page structure | 53 | the markup of every screen, as readable HTML |
| 3. Page logic | 552 | one class preparing the values the markup displays |
| 4. Workbook reader | 1730 | opens `data/products.xlsx` when the page is served |
| 5. Dataset | 1995 | one line loading `data/dataset.js` |
| 6. Rendering runtime | 2004 | generated library, not written by hand |

To change what the dashboard shows, edit the workbook. To change how it looks, edit
section 2.

The dataset lives in `data/dataset.js` rather than inside `index.html`, which keeps the page
under 4,000 readable lines and lets a browser load it from disk.

## Sources

Products, providers, satellites and links come from the data call on satellite products for
EW4All. Training resources come from that data call and from the Australian VLab Centre of
Excellence Regional Focus Group recordings. Nothing in the dashboard is added from outside
those sources.

`docs/data-dictionary.csv` documents every field, `docs/product-naming-convention.txt`
records the naming rules applied across the catalogue, and `docs/source-issues.csv` lists
entries still awaiting confirmation from providers.

## WIS2

The WIS2 availability tab queries the WIS2 Global Discovery Catalogue operated by the
Meteorological Service of Canada when the page loads:

    https://wis2-gdc.weather.gc.ca/collections/wis2-discovery-metadata

Nothing is cached in this repository, so newly registered products appear without the
dashboard being changed. If the catalogue cannot be reached the tab says so and the rest of
the dashboard is unaffected.
