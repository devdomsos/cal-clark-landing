/**
 * Bibliographic sources for /citations. Titles, citations, and link labels
 * stay English in every locale. Cal AI's andeal.org template.cfm URL is gone;
 * we point at the 2014 Adult Weight Management executive summary that still
 * includes energy-needs recommendations.
 */

export type CitationItem = {
  title: string;
  citation: string;
  href: string;
  hrefLabel: string;
};

export type CitationSectionId =
  | "registration"
  | "pace"
  | "budget"
  | "micronutrients"
  | "macros";

export const CITATION_SECTIONS: {
  id: CitationSectionId;
  sources: CitationItem[];
}[] = [
  {
    id: "registration",
    sources: [
      {
        title: "Physiology | Body Mass Index",
        citation:
          "Zierle-Ghosh A, Jan A. Physiology, Body Mass Index [Internet]. National Library of Medicine. StatPearls Publishing; 2023.",
        href: "https://www.ncbi.nlm.nih.gov/books/NBK535456/",
        hrefLabel: "ncbi.nlm.nih.gov/books/NBK535456",
      },
      {
        title:
          "Adult Weight Management Recommendations Summary: Assess Energy Needs",
        citation:
          "Adult Weight Management Recommendations Summary - Assess Energy Needs 2014. www.andeal.org.",
        href: "https://www.andeal.org/topic.cfm?cat=4690&menu=5276",
        hrefLabel: "andeal.org",
      },
      {
        title:
          "The Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults: The Evidence Report",
        citation:
          "The Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults: The Evidence Report. National Institutes of Health; National Heart, Lung and Blood Institute; 1998.",
        href: "https://www.nhlbi.nih.gov/files/docs/guidelines/ob_gdlns.pdf",
        hrefLabel: "nhlbi.nih.gov (PDF)",
      },
      {
        title: "2020 - 2025 Dietary Guidelines for Americans",
        citation:
          "2020 Dietary Guidelines | Dietary Guidelines for Americans [Internet]. Dietaryguidelines.gov. 2020.",
        href: "https://www.dietaryguidelines.gov/",
        hrefLabel: "dietaryguidelines.gov",
      },
      {
        title:
          "International Society of Sports Nutrition Position Stand: Diets and Body Composition",
        citation:
          "Aragon AA, Schoenfeld BJ, Wildman R, Kleiner S, VanDusseldorp T, Taylor L, et al. International society of sports nutrition position stand: diets and body composition. Journal of the International Society of Sports Nutrition. 2017 Jun 14;14(1).",
        href: "https://doi.org/10.1186/s12970-017-0174-y",
        hrefLabel: "doi.org/10.1186/s12970-017-0174-y",
      },
    ],
  },
  {
    id: "pace",
    sources: [
      {
        title:
          "The Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults: The Evidence Report",
        citation:
          "The Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults: The Evidence Report. National Institutes of Health; National Heart, Lung and Blood Institute; 1998.",
        href: "https://www.nhlbi.nih.gov/files/docs/guidelines/ob_gdlns.pdf",
        hrefLabel: "nhlbi.nih.gov (PDF)",
      },
      {
        title:
          "International Society of Sports Nutrition Position Stand: Diets and Body Composition",
        citation:
          "Aragon AA, Schoenfeld BJ, Wildman R, Kleiner S, VanDusseldorp T, Taylor L, et al. International society of sports nutrition position stand: diets and body composition. Journal of the International Society of Sports Nutrition. 2017 Jun 14;14(1).",
        href: "https://doi.org/10.1186/s12970-017-0174-y",
        hrefLabel: "doi.org/10.1186/s12970-017-0174-y",
      },
      {
        title: "Physiology | Body Mass Index",
        citation:
          "Zierle-Ghosh A, Jan A. Physiology, Body Mass Index [Internet]. National Library of Medicine. StatPearls Publishing; 2023.",
        href: "https://www.ncbi.nlm.nih.gov/books/NBK535456/",
        hrefLabel: "ncbi.nlm.nih.gov/books/NBK535456",
      },
      {
        title: "2020 - 2025 Dietary Guidelines for Americans",
        citation:
          "2020 Dietary Guidelines | Dietary Guidelines for Americans [Internet]. Dietaryguidelines.gov. 2020.",
        href: "https://www.dietaryguidelines.gov/",
        hrefLabel: "dietaryguidelines.gov",
      },
    ],
  },
  {
    id: "budget",
    sources: [
      {
        title:
          "A new predictive equation for resting energy expenditure in healthy individuals",
        citation:
          "Mifflin MD, St Jeor ST, Hill LA, Scott BJ, Daugherty SA, Koh YO. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241-247.",
        href: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
        hrefLabel: "pubmed.ncbi.nlm.nih.gov/2305711",
      },
      {
        title:
          "2011 Compendium of Physical Activities: a second update of codes and MET values",
        citation:
          "Ainsworth BE, Haskell WL, Herrmann SD, Meckes N, Bassett DR Jr, Tudor-Locke C, et al. 2011 Compendium of Physical Activities: a second update of codes and MET values. Med Sci Sports Exerc. 2011;43(8):1575-1581.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21681120/",
        hrefLabel: "pubmed.ncbi.nlm.nih.gov/21681120",
      },
    ],
  },
  {
    id: "micronutrients",
    sources: [
      {
        title: "Daily Values",
        citation:
          "Daily Values. Nih.gov. Published 2026. Accessed July 8, 2026.",
        href: "https://dsld.od.nih.gov/daily-values",
        hrefLabel: "dsld.od.nih.gov/daily-values",
      },
      {
        title: "Daily Value on the Nutrition and Supplement Facts Labels",
        citation:
          "FDA. Daily Value on the Nutrition and Supplement Facts Labels. FDA. Published online March 5, 2024. Accessed July 8, 2026.",
        href: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
        hrefLabel: "fda.gov",
      },
    ],
  },
  {
    id: "macros",
    sources: [
      {
        title: "Dietary Guidelines for Americans 2020-2025",
        citation:
          "United States Department of Agriculture. Dietary Guidelines for Americans 2020-2025. USDA; 2020. Accessed July 6, 2026.",
        href: "https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf",
        hrefLabel: "dietaryguidelines.gov (PDF)",
      },
      {
        title: "Description of the Acceptable Macronutrient Distribution Range",
        citation:
          "Description of the Acceptable Macronutrient Distribution Range. Nih.gov. Published November 12, 2024. Accessed July 6, 2026.",
        href: "https://www.ncbi.nlm.nih.gov/books/NBK610333/",
        hrefLabel: "ncbi.nlm.nih.gov/books/NBK610333",
      },
      {
        title:
          "Evaluation of the Effect of Macronutrients Combination on Blood Sugar Levels in Healthy Individuals",
        citation:
          "Basturk B, Koc Ozerson Z, Yuksel A. Evaluation of the effect of macronutrients combination on blood sugar levels in healthy individuals. Iran J Public Health. 2021;50(2):280-287.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7956086/",
        hrefLabel: "pmc.ncbi.nlm.nih.gov/articles/PMC7956086",
      },
      {
        title:
          "International Society of Sports Nutrition Position Stand: Diets and Body Composition",
        citation:
          "Aragon AA, Schoenfeld BJ, Wildman R, et al. International society of sports nutrition position stand: diets and body composition. Journal of the International Society of Sports Nutrition. 2017;14(1).",
        href: "https://doi.org/10.1186/s12970-017-0174-y",
        hrefLabel: "doi.org/10.1186/s12970-017-0174-y",
      },
      {
        title:
          "ISSN Exercise & Sports Nutrition Review Update: Research & Recommendations",
        citation:
          "Kerksick CM, Wilborn CD, Roberts MD, et al. ISSN exercise & sports nutrition review update: research & recommendations. Journal of the International Society of Sports Nutrition. 2018;15(1).",
        href: "https://doi.org/10.1186/s12970-018-0242-y",
        hrefLabel: "doi.org/10.1186/s12970-018-0242-y",
      },
      {
        title:
          'Defining "Low-Carb" in the Scientific Literature: A Scoping Review of Clinical Studies',
        citation:
          'Chacón V, Cara KC, Chung M, Wallace TC. Defining "low-carb" in the scientific literature: A scoping review of clinical studies. Critical Reviews in Food Science and Nutrition. 2024;65(10):1-10.',
        href: "https://doi.org/10.1080/10408398.2023.2300705",
        hrefLabel: "doi.org/10.1080/10408398.2023.2300705",
      },
      {
        title: "Ketogenic Diets for Body Weight Loss: A Comparison with Other Diets",
        citation:
          "Dyńka D, Rodzeń Ł, Rodzeń M, et al. Ketogenic Diets for Body Weight Loss: A Comparison with Other Diets. Nutrients. 2025;17(6):965.",
        href: "https://doi.org/10.3390/nu17060965",
        hrefLabel: "doi.org/10.3390/nu17060965",
      },
    ],
  },
];
