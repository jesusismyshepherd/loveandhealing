(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const r={lang:"cn",page:"mannayan"},l={};let c=null;function T(e,n){l[e]=n}function y(e,n=!0){var a;l[e]||(e="mannayan"),(a=c==null?void 0:c.unmount)==null||a.call(c);const i=document.getElementById("app");l[e].mount(i),c=l[e],r.page=e,Object.keys(l).forEach(t=>{var o;(o=document.getElementById("nav-"+t))==null||o.classList.toggle("active",t===e)}),window.scrollTo(0,0),n&&history.pushState({page:e},"","/"+e)}function C(){const e=location.pathname.replace(/^\//,"").split("/")[0],n=l[e]?e:"mannayan";y(n,!1),l[e]||history.replaceState({page:n},"","/"+n)}window.addEventListener("popstate",e=>{var n;y(((n=e.state)==null?void 0:n.page)||"mannayan",!1)});const g={en:{eyebrow:"Premium Nutritional Supplements",heroTitle:"Nature's <em>Intelligence</em>,<br>Scientifically Delivered",heroSub:"Food-state formulas crafted to work with your body's natural intelligence — pure, potent, and precisely made.",sectionTitle:"Our Collection",readMore:"Learn more",tabOverview:"Overview",tabDetails:"Details",tabIngredients:"Ingredients",footerRepTitle:"Representative",footerQrLabel:"WeChat",footerBottom:"© 2025 L&H Love and Healing GmbH · Authorised distributor of"},cn:{eyebrow:"高品质营养补充剂",heroTitle:"顺应自然<em>智慧</em>，<br>科学精准呈现",heroSub:"食物态配方，顺应身体自然吸收方式，纯净、高效、精准制造。",sectionTitle:"产品系列",readMore:"了解更多",tabOverview:"产品概述",tabDetails:"详细介绍",tabIngredients:"成分解析",footerRepTitle:"联系人",footerQrLabel:"微信",footerBottom:"© 2025 L&H Love and Healing GmbH · 官方授权经销商"}};function k(e){r.lang=e,document.getElementById("btn-en").classList.toggle("active",e==="en"),document.getElementById("btn-cn").classList.toggle("active",e==="cn"),S(),document.dispatchEvent(new CustomEvent("langchange",{detail:e}))}function S(){const e=g[r.lang],n=document.getElementById("footer-bottom");n&&(n.innerHTML=`${e.footerBottom} <a href="https://mannayan.com" target="_blank">mannayan.com</a>`);const i=document.getElementById("footer-rep-title");i&&(i.textContent=e.footerRepTitle);const a=document.getElementById("footer-qr-label");a&&(a.textContent=e.footerQrLabel)}function A(){document.querySelectorAll("[data-nav]").forEach(e=>{e.addEventListener("click",n=>{n.preventDefault(),y(e.dataset.nav)})}),document.querySelectorAll("[data-lang]").forEach(e=>{e.addEventListener("click",()=>k(e.dataset.lang))})}const _=[{name:"Mannayan 7&1+ (SPURENELEMENTE + JOD)",url:"https://mannayan.com/Mannayan-7-1-SPURENELEMENTE-JOD/011262",price:["27,90 €"],product_number:"011262",quantity:["90 Tabletten"],image_url:"https://mannayan.com/media/a5/d5/d9/1766136426/7%2B1%2B_Spuenelemente_2025.jpg?ts=1766136426",image_local:"images/7%2B1%2B_Spuenelemente_2025.jpg",content:{cn:{label:`Mannayan 7&1+ 微量元素+碘
为日常活力提供基础支持
• 支持能量代谢与免疫健康
• 促进认知功能与甲状腺平衡
• 作为多种酶的辅助因子
• 来自食物态复合配方
90粒素食胶囊 | 每日1-3粒
无麸质、无乳制品、无人工添加剂 | 纯素配方`,short_description:`你是否感觉日常的精力总是不够用，注意力难以集中，或者身体对季节变化格外敏感？这些细微的信号，常常是身体在提醒我们，那些看不见却至关重要的微量元素可能正处于失衡状态。

Mannayan 7&1+ 提供七种必需微量元素与碘的协同组合。它们不像宏量营养素那样被大量需要，却在体内数百种生化反应中扮演着关键角色，从能量的产生到细胞的保护，从神经信号的传递到激素的合成，都离不开这些微小的助手。这款补充剂的核心在于其“食物态”形式，意味着其中的矿物质并非孤立的化合物，而是与天然食物基质结合，模拟身体从完整食物中吸收营养的方式。

每日服用1至3粒胶囊，每3粒提供锌、锰、铜、铬、钼、硒、铁七种微量元素的足量或高比例营养参考值，以及支持甲状腺健康的碘。配方纯净，不含麸质、乳制品、大豆、人工色素或防腐剂，采用素食胶囊。`,long_description:`当身体发出一些模糊的信号——比如容易感到疲倦、思维不如以往清晰、指甲脆弱，或是总觉得“不在最佳状态”——我们常常归咎于压力或睡眠不足。然而，这些感受的根源可能更深层，与体内一系列精密化学反应所需的“火花塞”不足有关。这些火花塞就是微量元素，它们需求量极小，却对从能量产生到免疫防御的每一个生理过程都至关重要。现代饮食和土壤变化，使得通过日常食物稳定获取全面且足量的这些元素变得更具挑战。

**食物态技术**
Mannayan 7&1+ 采用独特的食物态技术。这意味着其中的矿物质并非以常见的、分离的合成盐形式存在，而是预先与天然的全食物基质（如富集矿物质的荞麦复合物）结合。这种形式模拟了自然界中矿物质的存在方式，即与食物中的蛋白质、碳水化合物和酶等共同构成一个完整的营养复合体。身体识别并吸收这种复合体的方式，更接近于消化一顿营养均衡的餐食，而非处理单一的化学成分，旨在支持更自然、更高效的利用。

**完整体系**
配方中的七种微量元素与碘并非孤立工作，它们构成一个相互支持的内部网络。锌和硒共同守护着免疫细胞的活性与抗氧化防线；锰和铜是体内关键抗氧化酶的核心组成部分，协同保护细胞免受氧化压力；铬参与维持血糖代谢的平稳，为持续的能量供应打下基础；钼作为几种重要酶的辅助因子，帮助身体处理代谢副产品；铁是氧气运输的核心，关乎每一个细胞的能量产出。而碘，则是甲状腺激素合成的必需原料，这些激素如同身体新陈代谢的总指挥，影响着能量水平、体温和整体活力。这个配方旨在填补现代生活中可能出现的多种微量元素缺口，从多个根本层面支持身体的平衡与韧性。

**适合人群**
这款产品适合那些饮食结构可能较为单一、或对特定食物群体有所限制（如素食者），感觉自身能量代谢不够顺畅、容易在午后感到精力不济的人。它也适合那些关注长期健康基础，希望为免疫系统和认知功能提供全面矿物质支持，而不仅仅是应对单一问题的人。对于生活在土壤微量元素可能相对匮乏地区，或日常饮食中海鲜、海藻、坚果、全谷物摄入不足的人群，这提供了一个便捷且全面的补充选择。

**纯净与成分完整性**
我们坚信，补充剂本身不应成为身体的额外负担。因此，该配方严格剔除了常见的致敏原和不需要的添加物。它不含麸质、小麦、大豆、乳制品（乳糖）、淀粉、人工色素、人工香料、防腐剂或添加糖。胶囊外壳采用植物来源的羟丙甲纤维素，确保整个产品符合纯素标准，且非转基因。成分的纯净度是我们对产品效能信任的基石。

**健康管理者与经销商：临床背景与方案搭配**
对于健康管理从业者而言，这款广谱的微量元素复合物可以作为基础营养支持方案的核心组成部分。在临床实践中，微量元素的广泛缺乏或边缘性缺乏常被低估，它们与疲劳综合征、免疫功能低下、皮肤毛发健康及甲状腺功能亚临床状态均有潜在关联。本产品可作为针对上述广泛性问题的营养基础干预，亦可与针对性的维生素（如B族维生素、维生素D）或特定高剂量矿物质补充剂搭配使用，以构建更立体的支持方案。其食物态形式也意味着更高的生物利用度和更低的胃肠道刺激风险，适合长期维护使用。

**用法与剂量**
建议每日服用1至3粒胶囊，随足量液体吞服。初始可从每日1粒开始，根据个人需求和健康专业人士的建议调整至维持剂量。每瓶包含90粒胶囊，足以满足一个月至三个月的用量（视剂量而定）。为达到最佳效果，建议随餐服用，以利用食物中的脂肪促进某些脂溶性成分的吸收。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。标示的每日建议食用量不应被超过。请将产品置于儿童无法触及的阴凉干燥处保存。若密封条破损，请勿食用。对于有特定健康状况（如血色沉着病、威尔森病、甲状腺功能亢进等）或正在服用药物（特别是甲状腺药物或抗凝血剂）的人群，在使用前咨询医生或营养师是必要的。`,ingredient_reference:`**锌**
锌是体内超过300种酶反应所必需的矿物质，尤其在免疫细胞功能、DNA合成、蛋白质代谢和伤口愈合中扮演核心角色。它以高生物利用度的形式提供，支持健康的皮肤、毛发和指甲。对于免疫系统经常面临挑战、或饮食中红肉和贝类摄入不足的人群尤为重要。在配方中，锌与硒协同作用，共同强化身体的防御体系。

**锰**
锰是超氧化物歧化酶（SOD）的关键组成部分，这种酶是体内最重要的抗氧化防御系统之一，保护细胞线粒体免受氧化损伤。它还参与骨骼形成、胶原蛋白产生以及碳水化合物和氨基酸的代谢。适合关注长期细胞健康、关节支持及能量代谢的人群。它与铜共同构成抗氧化酶的核心，并与配方中其他矿物质协同维持代谢平衡。

**铜**
铜与铁代谢和红细胞的形成密切相关，并是另一种超氧化物歧化酶（铜锌SOD）的必需成分，支持结缔组织的健康与神经系统的正常功能。它有助于维持血管和骨骼的完整性。对于铁代谢需要支持或饮食中坚果、种子和全谷物摄入有限的人有重要意义。在配方中，它与锌和锰在抗氧化防御中形成互补。

**铬**
铬主要以三价铬形式存在，通过增强胰岛素的作用效能，在维持健康的血糖代谢水平方面发挥作用。这有助于支持更平稳的能量供应，减少因血糖波动引起的疲劳感和食欲不稳。适合饮食中精制碳水化合物比例较高、或寻求维持代谢健康的人群。它是该能量代谢支持配方中的重要一环。

**钼**
钼是几种酶的辅助因子，这些酶参与体内特定氨基酸（如含硫氨基酸）的代谢以及嘌呤的分解过程。它帮助身体有效处理代谢产生的副产品，支持肝脏的解毒途径。对于追求全面代谢健康支持的人群是一个基础但常被忽视的成分。它在配方中完善了微量元素对代谢循环的支持网络。

**铁**
铁是血红蛋白的核心成分，负责将氧气从肺部运输至全身各组织，对细胞的能量（ATP）生产至关重要。它还参与DNA合成和免疫细胞功能。本品提供的铁形式旨在支持良好的吸收，特别适合女性、素食者或日常饮食中红肉、豆类摄入不足，可能面临铁储备边缘性不足风险的人群。它是整个配方支持能量活力的关键。

**硒**
硒是谷胱甘肽过氧化物酶家族的关键成分，这是一类强大的抗氧化酶，保护细胞膜免受氧化损伤。它对甲状腺激素的代谢和激活也必不可少，并支持免疫系统的正常功能。适合关注甲状腺健康、整体抗氧化防御及生活在土壤硒含量较低地区的人群。它与碘在甲状腺功能支持上紧密协同，并与锌共同增强免疫应答。

**碘（来自海藻提取物）**
碘是合成甲状腺激素（T3和T4）的绝对必需元素，这些激素调节基础代谢率、体温、能量产生和生长发育。本品中的碘来源于天然海藻（昆布），提供有机形式的碘。对于碘摄入可能不足（如很少食用加碘盐、海产品或海藻）的人群至关重要。它是整个配方的“代谢调节器”，与硒协同确保甲状腺激素的有效合成与转化。`},en:{label:`Mannayan 7&1+ Trace Minerals + Iodine
Foundational Support for Daily Vitality
• Supports Energy Metabolism & Immune Health
• Promotes Cognitive Function & Thyroid Balance
• Acts as Cofactors for Numerous Enzymes
• From a Food-State Complex Formula
90 Vegetarian Capsules | 1-3 Capsules Daily
Gluten-Free, Dairy-Free, No Artificial Additives | Vegan Formula`,short_description:`Do you often feel like your daily energy is never quite enough, your focus is hard to maintain, or your body is unusually sensitive to seasonal changes? These subtle signals are often your body's way of reminding you that those invisible yet vital trace minerals may be out of balance.

Mannayan 7&1+ offers a synergistic combination of seven essential trace minerals and iodine. They aren't needed in large quantities like macronutrients, yet they play critical roles in hundreds of biochemical reactions within the body—from energy production and cellular protection to nerve signal transmission and hormone synthesis, all relying on these tiny helpers. The core of this supplement lies in its 'food-state' form, meaning the minerals are not isolated compounds but are bound to a natural food matrix, mimicking the way the body absorbs nutrients from whole foods.

Take 1 to 3 capsules daily. Every 3 capsules provide substantial or high percentages of the Nutrient Reference Values for seven trace minerals—zinc, manganese, copper, chromium, molybdenum, selenium, and iron—along with iodine to support thyroid health. The formula is pure, free from gluten, dairy, soy, artificial colors, or preservatives, and uses vegetarian capsules.`,long_description:`When the body sends vague signals—like persistent fatigue, less mental clarity than before, brittle nails, or a general feeling of being 'off your game'—we often blame stress or lack of sleep. However, the root of these feelings may be deeper, linked to a shortage of the 'spark plugs' required for a series of precise chemical reactions in the body. These spark plugs are trace minerals. They are needed in minute amounts but are crucial for every physiological process, from energy production to immune defense. Modern diets and changes in soil composition make it increasingly challenging to obtain a complete and adequate supply of these elements consistently through food alone.

**Food-State Technology**
Mannayan 7&1+ utilizes unique food-state technology. This means the minerals are not present as common, isolated synthetic salts but are pre-bound to a natural whole-food matrix (such as a mineral-enriched buckwheat complex). This form mimics how minerals exist in nature—as part of a complete nutritional complex alongside proteins, carbohydrates, and enzymes from food. The body recognizes and absorbs this complex in a way more akin to digesting a balanced meal than processing a single chemical compound, aiming to support more natural and efficient utilization.

**A Complete System**
The seven trace minerals and iodine in the formula do not work in isolation; they form an interconnected, supportive network. Zinc and selenium jointly guard immune cell activity and the antioxidant defense line. Manganese and copper are core components of key antioxidant enzymes, working together to protect cells from oxidative stress. Chromium helps maintain steady blood sugar metabolism, laying the groundwork for sustained energy supply. Molybdenum acts as a cofactor for several important enzymes, aiding the body in processing metabolic byproducts. Iron is central to oxygen transport, impacting energy output in every cell. Iodine is an essential raw material for synthesizing thyroid hormones, which act as the body's metabolic conductors, influencing energy levels, body temperature, and overall vitality. This formula is designed to address potential gaps in multiple trace minerals common in modern life, supporting the body's balance and resilience from several fundamental levels.

**Who It's For**
This product is suitable for individuals whose diets may be relatively limited or who restrict certain food groups (such as vegans), and who feel their energy metabolism isn't optimal or tend to experience an afternoon slump. It's also for those focused on long-term foundational health, seeking comprehensive mineral support for the immune system and cognitive function, rather than addressing a single issue. It provides a convenient and comprehensive supplementation option for people living in areas where soil trace minerals may be relatively depleted, or whose daily diets lack sufficient seafood, seaweed, nuts, and whole grains.

**Purity & Ingredient Integrity**
We firmly believe that a supplement should not become an additional burden on the body. Therefore, this formula strictly excludes common allergens and unwanted additives. It contains no gluten, wheat, soy, dairy (lactose), starch, artificial colors, artificial flavors, preservatives, or added sugars. The capsule shell is made from plant-derived hypromellose, ensuring the entire product meets vegan standards and is non-GMO. Ingredient purity is the cornerstone of our trust in the product's efficacy.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
For health practitioners, this broad-spectrum trace mineral complex can serve as a core component of foundational nutritional support protocols. In clinical practice, widespread or marginal deficiencies in trace minerals are often underestimated and are potentially linked to conditions like chronic fatigue syndrome, suboptimal immune function, skin/hair health, and subclinical thyroid states. This product can serve as a foundational nutritional intervention for such broad concerns and can be paired with targeted vitamins (like B-complex or Vitamin D) or specific high-dose mineral supplements to build a more comprehensive support strategy. Its food-state form also suggests higher bioavailability and lower risk of gastrointestinal irritation, making it suitable for long-term maintenance.

**Usage & Dosage**
Take 1 to 3 capsules daily with plenty of liquid. You may start with 1 capsule daily and adjust to a maintenance dose based on individual needs and the advice of a health professional. Each bottle contains 90 capsules, sufficient for one to three months of use (depending on dosage). For best results, take with a meal to utilize dietary fats for the absorption of certain components.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced, varied diet and a healthy lifestyle. Do not exceed the recommended daily intake. Store in a cool, dry place out of reach of children. Do not consume if the safety seal is broken. Individuals with specific health conditions (such as hemochromatosis, Wilson's disease, hyperthyroidism, etc.) or those taking medications (especially thyroid medications or anticoagulants) should consult a doctor or nutritionist before use.`,ingredient_reference:`**Zinc**
Zinc is a mineral essential for over 300 enzymatic reactions in the body, playing a central role in immune cell function, DNA synthesis, protein metabolism, and wound healing. Provided in a highly bioavailable form, it supports healthy skin, hair, and nails. It is particularly important for individuals whose immune systems are frequently challenged or whose diets are low in red meat and shellfish. In the formula, zinc works synergistically with selenium to strengthen the body's defense system.

**Manganese**
Manganese is a key component of superoxide dismutase (SOD), one of the body's most important antioxidant defense systems, protecting cellular mitochondria from oxidative damage. It is also involved in bone formation, collagen production, and the metabolism of carbohydrates and amino acids. It is suitable for those focused on long-term cellular health, joint support, and energy metabolism. It works with copper to form the core of antioxidant enzymes and cooperates with other minerals in the formula to maintain metabolic balance.

**Copper**
Copper is closely linked to iron metabolism and red blood cell formation and is an essential component of another superoxide dismutase (Cu/Zn SOD), supporting the health of connective tissues and the normal function of the nervous system. It helps maintain the integrity of blood vessels and bones. It is significant for individuals needing support with iron metabolism or whose diets are limited in nuts, seeds, and whole grains. In the formula, it complements zinc and manganese in antioxidant defense.

**Chromium**
Chromium, primarily in its trivalent form, plays a role in maintaining healthy blood sugar metabolism levels by enhancing insulin's effectiveness. This helps support more stable energy supply, reducing fatigue and appetite fluctuations caused by blood sugar swings. It is suitable for individuals with diets high in refined carbohydrates or those seeking to maintain metabolic health. It is an important part of this energy metabolism support formula.

**Molybdenum**
Molybdenum acts as a cofactor for several enzymes involved in the metabolism of specific amino acids (like sulfur-containing ones) and the breakdown of purines. It helps the body efficiently process metabolic byproducts, supporting the liver's detoxification pathways. It is a foundational yet often overlooked component for those pursuing comprehensive metabolic health support. In the formula, it completes the trace mineral network supporting metabolic cycles.

**Iron**
Iron is a core component of hemoglobin, responsible for transporting oxygen from the lungs to tissues throughout the body, and is crucial for cellular energy (ATP) production. It is also involved in DNA synthesis and immune cell function. The iron provided in this product is in a form designed to support good absorption, making it particularly suitable for women, vegetarians, or individuals whose diets are low in red meat and legumes and who may be at risk of marginal iron deficiency. It is key to the formula's support for energy and vitality.

**Selenium**
Selenium is a key component of the glutathione peroxidase family, a class of powerful antioxidant enzymes that protect cell membranes from oxidative damage. It is also essential for the metabolism and activation of thyroid hormones and supports normal immune system function. It is suitable for those focused on thyroid health, overall antioxidant defense, or living in areas with low soil selenium content. It works closely with iodine to support thyroid function and synergizes with zinc to enhance immune response.

**Iodine (from Kelp Extract)**
Iodine is an absolute necessity for synthesizing thyroid hormones (T3 and T4), which regulate basal metabolic rate, body temperature, energy production, and growth. The iodine in this product is sourced from natural kelp, providing an organic form of iodine. It is crucial for individuals whose iodine intake may be insufficient (e.g., those who rarely use iodized salt or consume seafood or seaweed). It acts as the 'metabolic regulator' of the entire formula, working with selenium to ensure the effective synthesis and conversion of thyroid hormones.`}}},{name:"Mannayan AMINO (120 Tabletten)",url:"https://mannayan.com/Mannayan-AMINO-120-Tabletten/010002",price:["44,80 €"],product_number:"010002",quantity:["120 Tabletten"],image_url:"https://mannayan.com/media/86/33/55/1625482256/Amino.jpg?ts=1625482263",image_local:"images/Amino.jpg",content:{cn:{label:`Mannayan AMINO 氨基酸
为身体提供基础构建模块
• 支持肌肉组织维护与修复
• 促进蛋白质合成与代谢
• 维持日常精力与耐力水平
• 为整体健康提供营养支持
120片 / 每日10片
纯净配方：无麸质、无乳糖、无大豆、无人工色素香料、无防腐剂、非转基因、适合素食者`,short_description:`你是否感觉日常精力总有些跟不上，或是运动后的恢复过程变得缓慢？身体就像一座持续运转的建筑，需要优质的材料来维护和修复。当基础营养供给不足时，整体状态便会受到影响。

Mannayan AMINO提供八种人体必需氨基酸，它们是身体无法自行合成、必须从外界获取的基础营养。这些氨基酸是蛋白质的组成单元，直接参与身体的构建与修复过程，从肌肉组织到多种生理功能都离不开它们。

配方采用纯净的植物来源，以游离结晶形态存在，便于身体识别和利用。它不含常见的致敏原和人工添加剂，为日常营养补充提供了一个清晰、纯粹的选择。

每瓶包含120片，建议每日服用10片（分两次，每次5片），为身体持续供应这些必需的基础材料。`,long_description:`现代生活的节奏常常让身体处于持续的消耗之中。你可能注意到体力不如从前，运动后肌肉酸痛持续更久，或是单纯地感到身体修复和更新的速度变慢了。这些感受背后，往往是身体构建和修复材料——蛋白质及其基本单元氨基酸——的供需出现了缺口。身体无法储存氨基酸，它们需要被持续、均衡地供应。

**食物态技术与递送形式**
产品中的八种必需氨基酸均来源于天然植物，并以游离、结晶的纯净形态存在。这种形态意味着氨基酸已经处于易于身体识别和利用的“准备就绪”状态，无需复杂的分解过程，可以更直接地进入代谢通路，支持身体的即时需求。

**完整的协同支持体系**
这八种氨基酸并非孤立作用，它们共同构成一个完整的支持网络。亮氨酸、异亮氨酸和缬氨酸作为支链氨基酸，协同支持肌肉蛋白质的合成与能量代谢。赖氨酸和蛋氨酸参与多种重要物质的生成。苯丙氨酸、苏氨酸和色氨酸则是神经递质前体与多种蛋白质合成的关键。它们以科学配比组合，模拟了优质蛋白质在体内释放氨基酸的模式，旨在提供全面、均衡的基础支持。

**适合的人群与生活情境**
它适合那些日常体力消耗较大、希望支持身体恢复能力的人；也适合饮食中蛋白质来源有限或消化吸收功能需要额外关注的人。对于坚持植物性饮食，希望确保必需营养摄入完整的人，它提供了一个明确的补充方案。当身体处于需要更多支持的特殊阶段，或感觉常规饮食不足以满足需求时，它可以作为基础营养的补充。

**纯净与成分的完整性**
配方专注于核心成分，不含任何多余添加。它明确避免了麸质、乳糖、大豆、人工色素、人工香料、防腐剂，且为非转基因来源。这种纯净性让关注成分来源和身体反应的人可以放心选择。每一批产品都致力于成分的纯粹与剂量的准确。

**用法与剂量**
建议每日服用10片，可分为两次，每次5片，随足量液体吞服。这个剂量旨在提供一份均衡的必需氨基酸组合，可以作为日常营养计划的一部分。具体用量可根据个人需求和健康管理者的指导进行调整。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过建议每日食用量。请将产品置于儿童无法触及之处，于阴凉干燥处避光保存，使用后请盖紧瓶盖。若密封带缺失，请勿食用。`,ingredient_reference:`**L-亮氨酸**
亮氨酸是三种支链氨基酸中关键的一种，在调节肌肉蛋白质合成中扮演核心角色。它不仅是构建蛋白质的原料，本身也是一种信号分子，有助于启动肌肉组织的修复与生长过程。在配方中，其含量较高，突出了对蛋白质代谢的支持重点。它与异亮氨酸、缬氨酸协同工作，共同维持氮平衡与能量供应。

**L-缬氨酸**
缬氨酸是另一种支链氨基酸，主要参与肌肉代谢和能量生产。它在肌肉组织中可以被直接用作燃料，有助于在持续活动期间维持能量水平。缬氨酸也参与身体其他组织的修复过程。它与亮氨酸、异亮氨酸保持特定比例，共同优化支链氨基酸的代谢效率，防止单一氨基酸的失衡。

**L-异亮氨酸**
异亮氨酸同样属于支链氨基酸，功能上与亮氨酸和缬氨酸紧密相连。它特别参与血红蛋白的合成，并帮助调节血糖水平，为身体提供稳定的能量基础。异亮氨酸在肌肉和整体能量代谢中不可或缺。三者的组合旨在全面支持肌肉健康与代谢功能。

**L-赖氨酸**
赖氨酸是许多结构性蛋白质（如胶原蛋白）的重要组成部分，对组织的生长与修复至关重要。它也是肉碱合成的必要前体，而肉碱参与脂肪的能量代谢。赖氨酸通常被认为是植物性饮食中需要关注的氨基酸。在配方中，它补充了蛋白质合成的必需要素。

**L-苯丙氨酸**
苯丙氨酸是酪氨酸和多巴胺、肾上腺素等神经递质的前体，因此与神经系统功能和情绪调节有关。它也在体内转化为酪氨酸，进而参与甲状腺激素和皮肤色素的生成。作为必需氨基酸，它支持着从情绪到代谢的多个层面。

**L-苏氨酸**
苏氨酸是维持蛋白质结构完整性的重要成分，尤其富含于胶原蛋白和弹性蛋白中，这些蛋白是皮肤、骨骼和结缔组织的基础。它还在脂肪代谢和免疫系统功能中发挥作用。苏氨酸的补充有助于支持身体的基础构建与维护系统。

**L-蛋氨酸**
蛋氨酸是一种含硫氨基酸，是体内许多重要化合物（如谷胱甘肽、肉碱）合成的起点。它参与肝脏的解毒过程和脂肪代谢，并对头发、皮肤和指甲的健康有支持作用。蛋氨酸的含硫特性使其在抗氧化防御系统中具有独特价值。

**L-色氨酸**
色氨酸最为人知的是作为血清素和褪黑激素的前体，这两种物质分别调节情绪和睡眠节律。它也是蛋白质合成所必需的。色氨酸在配方中的含量经过考量，旨在平衡其他氨基酸的摄入，避免因比例不当而影响其进入大脑的效率，从而温和支持神经系统的平衡。`},en:{label:`Mannayan AMINO Amino Acids
Providing the Body's Fundamental Building Blocks
• Supports Muscle Tissue Maintenance and Repair
• Promotes Protein Synthesis and Metabolism
• Helps Maintain Daily Energy and Endurance Levels
• Offers Nutritional Support for Overall Health
120 Tablets / 10 Tablets Daily
Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Colors or Flavors, No Preservatives, Non-GMO, Suitable for Vegetarians`,short_description:`Do you ever feel like your daily energy is lagging, or that recovery after exercise is taking longer? The body is like a constantly operating structure, requiring quality materials for maintenance and repair. When fundamental nutrition is insufficient, overall vitality can be affected.

Mannayan AMINO provides all eight essential amino acids that the human body cannot produce on its own and must obtain from external sources. These amino acids are the building blocks of protein, directly involved in the body's construction and repair processes—essential for everything from muscle tissue to various physiological functions.

This formula uses pure, plant-derived ingredients in a free-form crystalline state, making them easily recognizable and usable by the body. It contains no common allergens or artificial additives, offering a clear, straightforward choice for daily nutritional supplementation.

Each bottle contains 120 tablets. The suggested daily intake is 10 tablets (taken in two servings of 5 tablets each), providing a consistent supply of these essential foundational materials for your body.`,long_description:`The pace of modern life often places the body in a state of continuous demand. You may notice your stamina isn't what it used to be, muscle soreness lasts longer after exercise, or you simply feel that your body's repair and renewal processes have slowed. These sensations often point to a gap between supply and demand for the body's construction and repair materials—protein and its basic units, amino acids. The body cannot store amino acids; they require a consistent, balanced supply.

**Food-State Technology and Delivery Form**
All eight essential amino acids in this product are sourced from natural plants and are provided in a pure, free-form crystalline state. This form means the amino acids are in a 'ready-to-use' state, easily recognized and utilized by the body without complex breakdown processes, allowing them to enter metabolic pathways more directly to support the body's immediate needs.

**A Complete Synergistic Support System**
These eight amino acids do not work in isolation; they form a complete support network. Leucine, isoleucine, and valine, as branched-chain amino acids, work together to support muscle protein synthesis and energy metabolism. Lysine and methionine are involved in the production of various vital substances. Phenylalanine, threonine, and tryptophan are key precursors for neurotransmitters and the synthesis of numerous proteins. Combined in a scientifically balanced ratio, they mimic the pattern of amino acid release from high-quality protein in the body, aiming to provide comprehensive, balanced foundational support.

**Suitable Individuals and Life Situations**
This product is suitable for those with high daily physical demands who wish to support their body's recovery capacity; it's also suitable for individuals with limited protein sources in their diet or those who need to pay extra attention to digestion and absorption. For those adhering to a plant-based diet who want to ensure complete intake of essential nutrients, it offers a clear supplementation plan. It can serve as a foundational nutritional supplement during phases when the body needs extra support or when regular dietary intake feels insufficient.

**Purity and Ingredient Integrity**
The formula focuses on core ingredients, containing no unnecessary additives. It is explicitly free from gluten, lactose, soy, artificial colors, artificial flavors, and preservatives, and is derived from non-GMO sources. This purity allows individuals concerned about ingredient sourcing and bodily responses to choose with confidence. Every batch is committed to ingredient purity and accurate dosing.

**Usage and Dosage**
The suggested daily intake is 10 tablets, which can be divided into two servings of 5 tablets each, swallowed with ample liquid. This dosage is designed to provide a balanced combination of essential amino acids and can be part of a daily nutritional plan. Specific intake can be adjusted based on individual needs and the guidance of a healthcare professional.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the suggested daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Close the lid tightly after use. Do not consume if the seal is broken or missing.`,ingredient_reference:`**L-Leucine**
Leucine is a key member of the three branched-chain amino acids, playing a central role in regulating muscle protein synthesis. It is not only a building block for protein but also acts as a signaling molecule, helping to initiate the repair and growth processes of muscle tissue. Its higher concentration in the formula highlights the focus on supporting protein metabolism. It works synergistically with isoleucine and valine to maintain nitrogen balance and energy supply.

**L-Valine**
Valine is another branched-chain amino acid primarily involved in muscle metabolism and energy production. It can be used directly as fuel in muscle tissue, helping to sustain energy levels during prolonged activity. Valine also participates in the repair processes of other body tissues. It maintains a specific ratio with leucine and isoleucine to collectively optimize the metabolic efficiency of branched-chain amino acids and prevent an imbalance of any single amino acid.

**L-Isoleucine**
Isoleucine is also a branched-chain amino acid, functionally linked to leucine and valine. It is particularly involved in hemoglobin synthesis and helps regulate blood sugar levels, providing a stable energy foundation for the body. Isoleucine is indispensable for muscle and overall energy metabolism. The combination of these three aims to comprehensively support muscle health and metabolic function.

**L-Lysine**
Lysine is a vital component of many structural proteins, such as collagen, and is crucial for tissue growth and repair. It is also a necessary precursor for carnitine synthesis, which is involved in fat metabolism for energy. Lysine is often considered an amino acid of focus in plant-based diets. In this formula, it supplies an essential element for protein synthesis.

**L-Phenylalanine**
Phenylalanine is a precursor to tyrosine and neurotransmitters like dopamine and epinephrine, thus relating to nervous system function and mood regulation. It is also converted into tyrosine in the body, which then participates in the production of thyroid hormones and skin pigments. As an essential amino acid, it supports multiple levels, from mood to metabolism.

**L-Threonine**
Threonine is an important component for maintaining protein structural integrity, particularly abundant in collagen and elastin, which form the basis of skin, bones, and connective tissues. It also plays a role in fat metabolism and immune system function. Supplementing with threonine helps support the body's foundational construction and maintenance systems.

**L-Methionine**
Methionine is a sulfur-containing amino acid and the starting point for the synthesis of many important compounds in the body, such as glutathione and carnitine. It participates in liver detoxification processes and fat metabolism, and supports the health of hair, skin, and nails. Its sulfur-containing nature gives it unique value in the antioxidant defense system.

**L-Tryptophan**
Tryptophan is best known as a precursor to serotonin and melatonin, which regulate mood and sleep cycles, respectively. It is also essential for protein synthesis. Its concentration in the formula is carefully considered to balance the intake of other amino acids, preventing disproportionate ratios that could affect its efficiency in reaching the brain, thereby gently supporting nervous system balance.`}}},{name:"Mannayan ANTIOXI + (60 Kapseln)",url:"https://mannayan.com/Mannayan-ANTIOXI-60-Kapseln/010014",price:["39,90 €"],product_number:"010014",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/28/16/4c/1766136495/Antioxi%2B_2025.jpg?ts=1766136495",image_local:"images/Antioxi%2B_2025.jpg",content:{cn:{label:`Mannayan ANTIOXI+ 抗氧化复合配方

为内在平衡提供全面抗氧化支持

• 协同抗氧化，中和自由基
• 支持细胞能量代谢
• 维护日常免疫健康
• 促进肌肤与内在活力

60粒胶囊 | 每日1粒

纯净配方：无麸质、无大豆、无乳制品、无人工添加
适合素食与纯素者`,short_description:`你是否感觉身体需要一些额外的支持来应对日常的消耗？现代生活的节奏、环境因素，以及自然衰老的过程，都可能让身体的内在平衡面临挑战。这时候，一套完整的抗氧化防御体系就显得尤为重要。

Mannayan ANTIOXI+ 并非简单的维生素组合。它采用独特的食物态技术，将维生素C、E、β-胡萝卜素、锌、硒以及辅酶Q10等关键营养素，复育到天然的植物基质中。这意味着身体能像识别和利用完整食物一样吸收这些成分，生物利用度显著提高。

这款配方旨在从多个层面协同工作。维生素C和E相互再生，β-胡萝卜素提供前体支持，锌和硒作为关键的辅因子，而辅酶Q10则深入到细胞的能量中心发挥作用。它们共同构建了一个多层次的抗氧化网络。

每瓶包含60粒胶囊，建议每日服用1粒。配方纯净，不含麸质、大豆、乳制品、人工色素、香料或防腐剂，且适合素食与纯素生活方式。`,long_description:`当身体感到容易疲倦、精力不如从前，或者皮肤状态反映出内在的消耗时，这常常是内在平衡需要关注的信号。这些感受可能源于氧化压力——一种当身体产生的自由基超过其自身中和能力时出现的自然状态。ANTIOXI+ 正是为了支持身体自身的防御机制而设计。

**食物态技术**
产品的核心在于其食物态技术。这意味着其中的维生素、矿物质和微量元素并非孤立存在，而是被复育到一个由植物浓缩物构成的天然基质中。这个基质天然含有氨基酸、活性转运蛋白、碳水化合物和必需脂肪酸，模拟了完整食物的营养环境。这种形式显著提高了营养素的生物利用度，让身体能够更自然、更高效地识别和利用它们，如同摄取天然全食物一样。

**完整协同体系**
ANTIOXI+ 构建了一个精心设计的协同防御体系。维生素C作为水溶性的主力，在体液中工作，并能再生被消耗的维生素E。维生素E则守护细胞膜的脂质区域。β-胡萝卜素作为维生素A的前体，提供另一层支持。矿物质锌和硒是体内多种抗氧化酶（如超氧化物歧化酶和谷胱甘肽过氧化物酶）不可或缺的辅因子，它们让身体自身的抗氧化系统得以高效运行。辅酶Q10尤其关键，它直接参与细胞线粒体的能量生产，并在那里作为脂溶性抗氧化剂发挥作用，保护能量的源泉。这些成分不是各自为战，而是形成了一个相互支持、多层次的保护网络。

**适合人群**
这款配方适合那些生活节奏快、经常感到精力需要额外支持的人；也适合关注长期健康、希望为身体提供基础性维护的人；对于素食或纯素饮食者，这是一款补充关键抗氧化营养素的纯净选择；同样，它也适用于那些对特定成分敏感，寻求简单、纯净配方的人群。

**纯净与成分完整性**
我们坚信纯净是效力的基础。该配方不含小麦、麸质、淀粉、大豆、乳制品（乳糖）、糖、人工色素、香料或防腐剂。未使用转基因原料。每一粒胶囊都致力于只提供身体真正需要的、来源清晰的支持成分。

**用法与剂量**
建议每日服用1粒胶囊，随足量液体吞服，或遵医嘱。一瓶包含60粒胶囊，约为两个月的用量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐每日摄入量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**维生素C（来自针叶樱桃提取物）**
维生素C是一种强大的水溶性抗氧化剂，遍布于体液中。它直接中和自由基，并具有独特的能力再生已被氧化的维生素E，使其恢复活性。在配方中，它作为第一道防线，与脂溶性的维生素E和辅酶Q10形成互补。对于希望支持日常免疫健康和胶原蛋白合成的人来说尤为重要。

**维生素E（D-α-生育酚乙酸酯）**
维生素E是主要的脂溶性抗氧化剂，主要保护细胞膜免受脂质过氧化的损害。它守护着细胞的脂质结构，而维生素C则确保它能被循环利用。这种形式是天然存在的活性形式，生物利用度高。它是维护细胞结构完整性的关键，尤其与辅酶Q10在保护细胞膜和线粒体膜方面协同作用。

**β-胡萝卜素（来自盐生杜氏藻）**
β-胡萝卜素是维生素A的前体，身体会根据需要将其转化为维生素A。它本身也具有抗氧化活性，特别是在低氧环境中。在配方中，它提供了另一种抗氧化途径，并支持健康的视觉和皮肤。它与维生素C和E一起，拓宽了抗氧化防御的光谱。

**锌（双甘氨酸锌）**
锌不仅仅是一种矿物质，它是超氧化物歧化酶（SOD）等关键抗氧化酶的核心组成部分。这种螯合形式（双甘氨酸锌）增强了吸收和耐受性。锌在支持免疫功能和蛋白质合成中扮演角色，是体内众多酶反应必需的辅因子。它与硒协同，共同支持身体自身的酶抗氧化系统。

**硒（硒酵母）**
硒是谷胱甘肽过氧化物酶家族的必要成分，这是体内最重要的抗氧化酶系统之一。硒酵母形式提供了有机硒，易于吸收利用。它直接帮助将有害的过氧化物转化为无害的物质，与锌共同构成了酶防御系统的基石。对于支持甲状腺健康和整体抗氧化防御至关重要。

**辅酶Q10（Kaneka Ubiquinol™）**
辅酶Q10是细胞能量生产（ATP合成）中的关键物质，主要在线粒体中工作。这里的Ubiquinol形式是还原态、活性更高的形式，无需转化即可被身体直接利用。它在线粒体内部作为抗氧化剂，保护能量生成过程本身。它与维生素E在细胞膜保护上协同，是整个能量和抗氧化防御网络的核心。

**锰（葡萄糖酸锰）**
锰是另一种抗氧化酶（如锰超氧化物歧化酶）的辅助因子，主要存在于线粒体中。它支持结缔组织的形成和骨骼健康。在配方中，它作为微量的支持成分，进一步完善了矿物质辅因子的组合，确保酶系统能够全面运作。`},en:{label:`Mannayan ANTIOXI+ Antioxidant Complex Formula

Comprehensive Antioxidant Support for Inner Balance

• Synergistic Antioxidant Action, Neutralizes Free Radicals
• Supports Cellular Energy Metabolism
• Maintains Daily Immune Health
• Promotes Skin and Inner Vitality

60 Capsules | 1 Capsule Daily

Pure Formula: Gluten-Free, Soy-Free, Dairy-Free, No Artificial Additives
Suitable for Vegetarians and Vegans`,short_description:`Do you feel your body could use some extra support to cope with daily demands? The pace of modern life, environmental factors, and the natural aging process can all challenge your body's inner balance. That's when a complete antioxidant defense system becomes especially important.

Mannayan ANTIOXI+ is not just a simple vitamin blend. It utilizes a unique food-state technology, embedding key nutrients like Vitamin C, E, Beta-Carotene, Zinc, Selenium, and Coenzyme Q10 into a natural plant matrix. This means your body can absorb these components as it would recognize and utilize whole food, significantly enhancing bioavailability.

This formula is designed to work synergistically on multiple levels. Vitamins C and E regenerate each other, Beta-Carotene provides precursor support, Zinc and Selenium act as crucial cofactors, while Coenzyme Q10 works deep within the cell's energy centers. Together, they build a multi-layered antioxidant network.

Each bottle contains 60 capsules, with a recommended intake of 1 capsule daily. The formula is pure, free from gluten, soy, dairy, artificial colors, flavors, or preservatives, and is suitable for vegetarian and vegan lifestyles.`,long_description:`When your body feels easily fatigued, your energy isn't what it used to be, or your skin reflects inner depletion, these are often signals that your inner balance needs attention. These feelings may stem from oxidative stress—a natural state that occurs when the body produces more free radicals than it can neutralize on its own. ANTIOXI+ is designed precisely to support the body's own defense mechanisms.

**Food-State Technology**
The core of the product lies in its food-state technology. This means the vitamins, minerals, and trace elements are not isolated but are embedded into a natural matrix composed of plant concentrates. This matrix naturally contains amino acids, active transport proteins, carbohydrates, and essential fatty acids, mimicking the nutritional environment of whole food. This form significantly enhances the bioavailability of nutrients, allowing the body to recognize and utilize them more naturally and efficiently, much like consuming natural whole foods.

**Complete Synergistic System**
ANTIOXI+ builds a meticulously designed synergistic defense system. Vitamin C, as the water-soluble workhorse, operates in bodily fluids and can regenerate depleted Vitamin E. Vitamin E guards the lipid regions of cell membranes. Beta-Carotene, as a precursor to Vitamin A, provides another layer of support. The minerals Zinc and Selenium are indispensable cofactors for various antioxidant enzymes within the body (such as Superoxide Dismutase and Glutathione Peroxidase), enabling the body's own antioxidant systems to function efficiently. Coenzyme Q10 is particularly crucial; it directly participates in cellular energy (ATP) production in the mitochondria and acts there as a fat-soluble antioxidant, protecting the very source of energy. These components do not work in isolation but form an interconnected, multi-layered protective network that supports each other.

**Who It's For**
This formula is suitable for those with a fast-paced lifestyle who often feel their energy needs extra support; for those focused on long-term health who wish to provide foundational maintenance for the body; for vegetarians or vegans seeking a pure option to supplement key antioxidant nutrients; and equally, for those with sensitivities to specific ingredients, looking for a simple, pure formula.

**Purity and Ingredient Integrity**
We firmly believe purity is the foundation of efficacy. This formula contains no wheat, gluten, starch, soy, dairy (lactose), sugar, artificial colors, flavors, or preservatives. No genetically modified ingredients are used. Each capsule is dedicated to providing only the supportive components the body truly needs, from clear sources.

**Usage & Dosage**
Take 1 capsule daily, swallowed with a sufficient amount of liquid, or as directed by a healthcare practitioner. One bottle contains 60 capsules, providing approximately a two-month supply.

**Important Notes**
Food supplements should not replace a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Vitamin C (from Acerola Cherry Extract)**
Vitamin C is a powerful water-soluble antioxidant found throughout bodily fluids. It directly neutralizes free radicals and has the unique ability to regenerate oxidized Vitamin E, restoring its activity. In this formula, it serves as the first line of defense, complementing the fat-soluble Vitamin E and Coenzyme Q10. It is particularly important for those looking to support daily immune health and collagen synthesis.

**Vitamin E (D-alpha-Tocopheryl Acetate)**
Vitamin E is the primary fat-soluble antioxidant, primarily protecting cell membranes from lipid peroxidation damage. It guards the lipid structures of cells, while Vitamin C ensures it can be recycled. This form is the naturally occurring, active form with high bioavailability. It is key to maintaining cellular structural integrity, working synergistically especially with Coenzyme Q10 in protecting cell and mitochondrial membranes.

**Beta-Carotene (from Dunaliella salina)**
Beta-Carotene is a precursor to Vitamin A, which the body converts as needed. It also possesses its own antioxidant activity, particularly in low-oxygen environments. In this formula, it provides another antioxidant pathway and supports healthy vision and skin. Together with Vitamins C and E, it broadens the spectrum of antioxidant defense.

**Zinc (Zinc Bisglycinate)**
Zinc is more than just a mineral; it is a core component of key antioxidant enzymes like Superoxide Dismutase (SOD). This chelated form (Zinc Bisglycinate) enhances absorption and tolerance. Zinc plays a role in supporting immune function and protein synthesis and is an essential cofactor for numerous enzymatic reactions in the body. It works synergistically with Selenium to support the body's own enzymatic antioxidant systems.

**Selenium (Selenium Yeast)**
Selenium is a necessary component of the Glutathione Peroxidase family, one of the body's most important antioxidant enzyme systems. The Selenium Yeast form provides organic selenium that is readily absorbed and utilized. It directly helps convert harmful peroxides into harmless substances and, together with Zinc, forms the cornerstone of the enzymatic defense system. It is crucial for supporting thyroid health and overall antioxidant defense.

**Coenzyme Q10 (Kaneka Ubiquinol™)**
Coenzyme Q10 is a key substance in cellular energy production (ATP synthesis), working primarily in the mitochondria. The Ubiquinol form used here is the reduced, more active form that can be utilized directly by the body without conversion. It acts as an antioxidant within the mitochondria, protecting the energy generation process itself. It works synergistically with Vitamin E in cell membrane protection and is central to the entire energy and antioxidant defense network.

**Manganese (Manganese Gluconate)**
Manganese is a cofactor for another antioxidant enzyme, Manganese Superoxide Dismutase, primarily located in the mitochondria. It supports connective tissue formation and bone health. In this formula, it serves as a trace supportive component, further refining the combination of mineral cofactors to ensure the enzyme systems can operate comprehensively.`}}},{name:"Mannayan B-KOMPLETT + (60 Tabletten)",url:"https://mannayan.com/Mannayan-B-KOMPLETT-60-Tabletten/010030",price:["31,90 €"],product_number:"010030",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/c2/17/67/1766136562/B_Komplett%2B_2025.jpg?ts=1766136562",image_local:"images/B_Komplett%2B_2025.jpg",content:{cn:{label:`Mannayan B-KOMPLETT+ 复合B族维生素

支持能量代谢·维护神经系统·促进细胞健康·协同增效配方

每片含完整8种必需B族维生素、维生素C、镁、胆碱、肌醇
60片装·每日1片

纯净配方认证：无麸质、无乳制品、无大豆、无人工色素香料、适合素食者`,short_description:`你是否感觉日常的精力总是不够用，注意力难以集中，或者身体在忙碌后恢复得特别慢？这些感受常常与身体内那些微妙的、支持基础代谢的营养素平衡有关。

Mannayan B-KOMPLETT+ 提供的是一个完整的B族维生素复合配方，并加入了维生素C和镁。它的核心在于，不仅包含了所有8种必需的B族维生素，还特别考虑了它们之间的天然配比关系，并添加了胆碱、肌醇等辅助因子。这种设计模拟了食物中营养素自然协同的方式，旨在支持身体更顺畅地利用这些基础营养。

产品采用Food State食物态技术，将维生素与天然的水果、蔬菜或发酵基质相结合。这意味着其中的营养素是以更接近完整食物的形态存在的，旨在帮助身体更自然地识别和吸收。

每瓶包含60片，建议每日服用1片。配方纯净，不含麸质、乳制品、大豆、酵母及人工添加剂，适合素食者和有特定饮食需求的人士。`,long_description:`现代生活的节奏常常让身体处于一种持续的消耗状态。你可能注意到自己更容易感到疲惫，即使睡眠充足，白天的精神也不够饱满；面对压力时，神经似乎绷得更紧，难以放松；或者皮肤、头发的状态不如以往有活力。这些看似不相关的信号，往往指向同一个内在系统——那就是维系我们每日万千细胞新陈代谢的基础营养网络。B族维生素正是这个网络的核心工作者，它们如同一支协同作业的团队，共同参与能量转化、神经信号传递和细胞再生。

**食物态技术：回归营养的本源形态**
Mannayan B-KOMPLETT+ 采用的Food State技术，其理念是让补充剂中的营养素以更接近天然食物的形态被身体接纳。技术过程并非简单混合，而是将维生素与它们天然存在的食物基质重新结合。例如，维生素C被融入柑橘果肉浓缩物中，生物素则来自玉米浓缩物。矿物质如镁，被整合到由保加利亚乳杆菌酶解获得的食物混合物里。这样做，是为了让每种维生素和矿物质在进入人体时，就已经被其天然的“伙伴”——如生物类黄酮和辅助因子——所包围。这种形态旨在被身体识别为“食物”，而非孤立的化学物质，从而支持更顺畅、更完整的代谢利用路径。

**一个完整的协同体系**
这款配方远不止是几种B族维生素的简单叠加。它构建了一个以完整B族维生素为核心，并延伸其功能的微生态系统。配方包含了所有8种必需B族维生素（B1, B2, B3, B5, B6, B12，生物素和叶酸），其中部分如B6采用了活性形式（吡哆醛-5-磷酸）。关键在于，它们被按照在生物体内自然存在的比例进行配比，因为B族维生素在代谢中环环相扣，任何一种的不足都可能影响整体的效能。在此基础上，配方引入了对氨基苯甲酸（PABA），它是肠道有益菌合成叶酸的前体物质。还加入了胆碱和肌醇，这些维生素样物质与B族协同，共同支持神经信号传导和细胞膜健康。最后，维生素C和镁的加入并非随意：维生素C作为抗氧化剂，保护这些水溶性维生素的活性；而镁是体内超过300种酶反应的辅助因子，许多能量代谢过程离不开它与B族维生素的携手合作。这个体系的目标是提供全面、平衡的支持，而非单一功能的强化。

**适合哪些生活情境**
这款补充剂适合那些感觉日常饮食难以覆盖全面营养，生活节奏快、精神压力较大的人士。当你因工作或学习需要长时间保持专注和思维清晰时，当身体经历阶段性疲劳、恢复能力感觉下降时，或者当你希望为日常健康维护建立一个扎实的营养基础时，这样一个完整的B族协同配方可以提供广泛的支持。它也适用于遵循纯净饮食（如素食）并关注营养素全面性的人群。

**纯净与成分完整性**
我们坚信，补充剂应该为身体带来纯粹的滋养，而非不必要的负担。该配方不含小麦、麸质、淀粉、大豆、乳制品（乳糖）、酵母。同时，我们杜绝使用任何人工色素、人工香料和防腐剂。片剂使用的辅料仅限于必要的成型和稳定用途，如植物纤维素。这种纯净承诺确保了产品适合过敏体质者、念珠菌敏感人群及素食者安心使用。

**给健康管理者的参考：临床背景与搭配思路**
对于健康从业者而言，此配方提供了一个基础且全面的B族维生素支持方案。其Food State形式和协同配比设计，着眼于提高利用率和减少代谢负担。在临床方案中，它可以作为支持能量代谢、神经系统功能和抗压力反应的营养基础。可考虑与针对特定目标的补充剂搭配，例如，与欧米伽-3脂肪酸共同支持认知健康，或与适应原草本结合用于全面的压力管理方案。建议根据个体情况进行个性化调整。

**用法与剂量**
建议每日服用1片，随餐或餐后以足量水送服，以促进吸收。也可根据专业健康顾问的具体指导进行调整。一瓶60片装可供两个月的日常使用。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥处保存。若瓶口密封条缺失，请勿食用。`,ingredient_reference:`**完整B族维生素复合物（B1, B2, B3, B5, B6, B12，生物素，叶酸）**
这是一组水溶性的必需维生素，在体内主要作为辅酶，共同驱动能量代谢、神经传导物质合成和DNA修复等数百种生化反应。它们协同工作，像一条链上的环节，彼此依赖。配方中部分B族维生素（如B6）以活性形式（P-5-P）提供，身体可直接利用，无需额外转化。适合所有需要基础代谢支持、常感疲劳或精神压力较大的人群。与配方中的胆碱、肌醇、维生素C和镁共同构成一个高效的代谢支持网络。

**对氨基苯甲酸（PABA）**
PABA是叶酸分子的一个组成部分，也被视为一种B族复合维生素因子。它在肠道中可由有益微生物利用，作为合成叶酸的前体物质。这支持了从肠道内部生成活性叶酸的途径，与直接补充的叶酸形成互补。特别适合关注肠道健康与营养素内在合成能力的人群。它在配方中强化了B族维生素，特别是叶酸的生物利用维度。

**胆碱**
胆碱是一种对大脑和肝脏健康至关重要的必需营养素，常被归为B族维生素相关物质。它是构成细胞膜和神经递质乙酰胆碱的关键成分，支持记忆、情绪和肌肉控制。饮食中胆碱来源有限，补充尤为重要。适合用脑频繁、希望支持认知功能和肝脏健康的人。在配方中，它与肌醇及其他B族维生素协同，共同维护神经系统和细胞膜的完整性。

**肌醇**
肌醇是另一种维生素样物质，常与胆碱配对出现。它在细胞内信号传导中扮演信使角色，并对神经系统的健康和情绪平衡有支持作用。与胆碱结合，共同构成细胞膜磷脂的重要部分。适合那些寻求情绪平稳支持和全面神经营养保护的人群。在B族复合物中，它增强了配方对细胞通讯和神经系统的支持层面。

**维生素C（来自柑橘果肉浓缩物）**
在此配方中，维生素C不仅以其强大的抗氧化能力保护水溶性的B族维生素免受氧化失活，还直接参与胶原蛋白合成和免疫支持。采用Food State技术，将其融入天然柑橘果肉浓缩物，提供了伴随的生物类黄酮，旨在提升其生物利用度和协同效应。适合所有希望增强配方抗氧化效能和整体协同作用的人群。它与B族维生素及镁共同工作，支持能量代谢和抗压反应。

**镁（柠檬酸镁）**
镁是体内含量第四的矿物质，是超过300种酶系统的必需辅助因子，涉及能量产生、蛋白质合成、肌肉和神经功能。柠檬酸镁是一种具有良好吸收率的有机镁形式。在配方中，镁与B族维生素关系密切，特别是在将食物转化为可用能量的ATP代谢循环中，两者必须紧密合作。适合常感肌肉紧张、疲劳或希望支持心脏及神经系统健康的人群。它是这个B族协同配方中不可或缺的矿物质伙伴。`},en:{label:`Mannayan B-KOMPLETT+ Complete B-Complex

Supports Energy Metabolism · Maintains Nervous System · Promotes Cellular Health · Synergistic Formula

Each tablet contains all 8 essential B vitamins, plus vitamin C, magnesium, choline, and inositol
60 tablets · 1 tablet daily

Certified Pure Formula: Gluten-free, Dairy-free, Soy-free, No Artificial Colors or Flavors, Suitable for Vegetarians`,short_description:`Do you often feel like your daily energy is never enough, find it hard to focus, or notice your body recovers slowly after a busy day? These feelings are often linked to the delicate balance of nutrients within your body that support fundamental metabolism.

Mannayan B-KOMPLETT+ offers a complete B-complex formula, enhanced with vitamin C and magnesium. At its core, it doesn't just include all 8 essential B vitamins, but also carefully considers their natural ratios and adds cofactors like choline and inositol. This design mimics the way nutrients work together synergistically in whole foods, aiming to support your body in utilizing these foundational nutrients more smoothly.

The product utilizes Food State technology, binding vitamins to natural fruit, vegetable, or fermented food bases. This means the nutrients exist in a form closer to that found in whole foods, designed to help your body recognize and absorb them more naturally.

Each bottle contains 60 tablets, with a recommended intake of 1 tablet daily. The formula is pure, free from gluten, dairy, soy, yeast, and artificial additives, making it suitable for vegetarians and those with specific dietary needs.`,long_description:`The pace of modern life often keeps the body in a state of constant expenditure. You might notice you tire more easily, feeling less vibrant during the day even with adequate sleep; your nerves seem to tense up more under stress, making relaxation difficult; or the vitality of your skin and hair isn't what it used to be. These seemingly unrelated signals often point to the same internal system—the foundational nutrient network that sustains the daily metabolism of our countless cells. B vitamins are the core workers in this network, functioning like a collaborative team involved in energy conversion, nerve signal transmission, and cellular regeneration.

**Food State Technology: Returning to Nutrition's Original Form**
The Food State technology used in Mannayan B-KOMPLETT+ is based on the idea of allowing the nutrients in a supplement to be accepted by the body in a form closer to that of natural food. The process isn't simple mixing; it involves recombining vitamins with the food matrices in which they naturally exist. For example, vitamin C is integrated into citrus fruit pulp concentrate, while biotin comes from corn concentrate. Minerals like magnesium are incorporated into a food mixture obtained through the enzymatic action of *Lactobacillus bulgaricus*. This is done so that each vitamin and mineral, upon entering the body, is already surrounded by its natural "partners"—such as bioflavonoids and cofactors. This form is designed to be recognized by the body as "food," rather than isolated chemical compounds, thereby supporting a smoother, more complete metabolic utilization pathway.

**A Complete Synergistic System**
This formula is far more than a simple stack of B vitamins. It builds a micro-ecosystem centered on the complete B-complex and extends its functions. The formula includes all 8 essential B vitamins (B1, B2, B3, B5, B6, B12, biotin, and folate), with some, like B6, provided in their active form (pyridoxal-5-phosphate). Crucially, they are proportioned according to the ratios in which they naturally exist in biological systems, because B vitamins are interlinked in metabolism—a deficiency in any one can affect the efficacy of the whole. Building on this, the formula introduces para-aminobenzoic acid (PABA), a precursor substance that beneficial gut bacteria use to synthesize folate. It also adds choline and inositol, vitamin-like substances that work synergistically with the B vitamins to support nerve signal transmission and cell membrane health. Finally, the inclusion of vitamin C and magnesium is not arbitrary: vitamin C acts as an antioxidant, protecting the activity of these water-soluble vitamins, while magnesium is a cofactor for over 300 enzymatic reactions in the body, many energy metabolism processes requiring its collaboration with B vitamins. The goal of this system is to provide comprehensive, balanced support, not just a boost to a single function.

**Suitable For Which Life Situations**
This supplement is suitable for individuals who feel their daily diet may not cover all nutritional needs, those with fast-paced lifestyles and significant mental stress, and anyone seeking to establish a solid nutritional foundation for daily health maintenance. It can provide broad support when you need to maintain prolonged focus and mental clarity for work or study, when your body experiences periods of fatigue and feels like recovery is slowing, or when you follow a pure diet (like vegetarianism) and are concerned about nutritional completeness.

**Purity and Ingredient Integrity**
We firmly believe supplements should provide pure nourishment to the body, not unnecessary burdens. This formula contains no wheat, gluten, starch, soy, dairy (lactose), or yeast. Furthermore, we prohibit the use of any artificial colors, artificial flavors, and preservatives. Excipients used in the tablets are limited to those necessary for forming and stability, such as plant cellulose. This commitment to purity ensures the product is safe for use by those with allergies, candida sensitivity, and vegetarians.

**Reference for Health Managers: Clinical Context and Combination Strategies**
For health practitioners, this formula provides a foundational and comprehensive B vitamin support protocol. Its Food State form and synergistic design focus on improving bioavailability and reducing metabolic burden. In clinical protocols, it can serve as a nutritional foundation for supporting energy metabolism, nervous system function, and stress response. Consider combining it with supplements targeting specific goals—for example, with omega-3 fatty acids for cognitive health support, or with adaptogenic herbs for a comprehensive stress management plan. Personalized adjustment based on individual circumstances is recommended.

**Usage and Dosage**
Take 1 tablet daily, with or after a meal, with plenty of water to aid absorption. Dosage may be adjusted based on specific guidance from a qualified health advisor. One bottle of 60 tablets provides a two-month supply for daily use.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing.`,ingredient_reference:`**Complete B-Complex (B1, B2, B3, B5, B6, B12, Biotin, Folate)**
This is a group of water-soluble essential vitamins that primarily function as coenzymes in the body, collectively driving hundreds of biochemical reactions including energy metabolism, neurotransmitter synthesis, and DNA repair. They work synergistically, like links in a chain, dependent on one another. Some B vitamins in the formula (e.g., B6) are provided in their active form (P-5-P), which the body can use directly without additional conversion. Suitable for anyone needing foundational metabolic support, those who often feel fatigued, or individuals under significant mental stress. Works together with choline, inositol, vitamin C, and magnesium in the formula to form an efficient metabolic support network.

**Para-Aminobenzoic Acid (PABA)**
PABA is a component of the folate molecule and is also considered a B-complex vitamin factor. It can be utilized by beneficial microorganisms in the gut as a precursor for synthesizing folate. This supports the pathway for generating active folate internally from the gut, complementing directly supplemented folate. Particularly suitable for those focused on gut health and the body's intrinsic nutrient synthesis capacity. In the formula, it strengthens the bioavailability dimension of the B vitamins, especially folate.

**Choline**
Choline is an essential nutrient crucial for brain and liver health, often categorized alongside B vitamins. It is a key component of cell membranes and the neurotransmitter acetylcholine, supporting memory, mood, and muscle control. Dietary sources of choline can be limited, making supplementation particularly important. Suitable for those with frequent mental exertion who wish to support cognitive function and liver health. In the formula, it works synergistically with inositol and other B vitamins to maintain nervous system and cell membrane integrity.

**Inositol**
Inositol is another vitamin-like substance, often paired with choline. It acts as a messenger in cellular signaling and supports nervous system health and emotional balance. Combined with choline, it forms an important part of cell membrane phospholipids. Suitable for those seeking emotional stability support and comprehensive neuro-nutritional protection. Within the B-complex, it enhances the formula's support for cellular communication and the nervous system.

**Vitamin C (from Citrus Fruit Pulp Concentrate)**
In this formula, vitamin C not only protects the water-soluble B vitamins from oxidative degradation with its potent antioxidant capacity but also directly participates in collagen synthesis and immune support. Using Food State technology, it is integrated into natural citrus fruit pulp concentrate, providing accompanying bioflavonoids designed to enhance its bioavailability and synergistic effects. Suitable for anyone wishing to boost the formula's antioxidant efficacy and overall synergy. It works alongside the B vitamins and magnesium to support energy metabolism and stress response.

**Magnesium (Magnesium Citrate)**
Magnesium is the fourth most abundant mineral in the body and an essential cofactor for over 300 enzyme systems, involved in energy production, protein synthesis, and muscle and nerve function. Magnesium citrate is an organic form of magnesium with good absorption. In the formula, magnesium has a close relationship with the B vitamins, particularly in the ATP metabolic cycle that converts food into usable energy, where the two must work closely together. Suitable for those who often experience muscle tension, fatigue, or wish to support heart and nervous system health. It is an indispensable mineral partner in this synergistic B-complex formula.`}}},{name:"Mannayan BASIS MULTI + (60 Tabletten)",url:"https://mannayan.com/Mannayan-BASIS-MULTI-60-Tabletten/010016",price:["29,90 €"],product_number:"010016",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/c2/fd/27/1766136610/Basis-Multi%2B2025.jpg?ts=1766136610",image_local:"images/Basis-Multi%2B2025.jpg",content:{cn:{label:`Mannayan BASIS MULTI+ | 食物态复合维生素与矿物质

支持日常能量与活力
维护免疫系统健康
促进新陈代谢平衡
滋养神经系统
支持骨骼与心血管健康

60片 | 每日1-2片

无麸质、无大豆、无乳制品、无人工添加剂、非转基因、素食友好`,short_description:`你是否感觉日常的忙碌消耗了你的精力，即使饮食注意，也总觉得身体缺少点什么来维持最佳状态？现代生活的节奏和饮食方式，有时让我们难以从三餐中获取全面且充足的微量营养素。

Mannayan BASIS MULTI+ 是一款采用食物态技术的复合维生素与矿物质补充剂。它的核心理念是模仿天然食物中营养素的呈现方式。在天然食物中，维生素和矿物质并非孤立存在，而是与蛋白质、生物类黄酮等辅助因子结合在一起。这些辅助因子就像是营养素的‘天然导航系统’，帮助身体识别、吸收并将其精准输送到需要的细胞。

这款产品通过专利工艺，将维生素融入其天然存在的果蔬浓缩物中（如维生素C融入柑橘果肉，β-胡萝卜素融入胡萝卜浓缩物），而矿物质则通过乳酸菌或营养酵母的培养过程进行‘赋能’。这样，每种营养素在进入身体时，都已配备了其天然的辅助因子网络，旨在实现更接近食物来源的吸收与利用。

每瓶包含60片，建议每日服用1-2片。配方纯净，不含麸质、大豆、乳制品、糖、人工色素香料及防腐剂，适合素食者及对特定成分敏感的人群。`,long_description:`当身体长期处于高要求状态，或是饮食难以面面俱到时，你可能会注意到一些细微的信号：精力不像以前那样持久，注意力容易分散，或是感觉身体的恢复速度变慢了。这些常常是身体在提示，维持日常精密运转所需的微量营养素基础可能出现了缺口。单纯增加食物量未必能解决问题，关键在于营养素的形态与吸收效率。

**食物态技术**
传统合成维生素矿物质是孤立的化合物，身体需要额外消耗资源来‘装配’其所需的辅助因子才能利用。Mannayan BASIS MULTI+ 的核心在于其专利的食物态技术。这项技术并非简单地将营养素与食物粉末混合，而是通过一个受控的营养素活化过程，让维生素‘回归’到其天然的果蔬母体中，让矿物质在乳酸杆菌或营养酵母的培养环境中被整合。其结果就是，每一份营养素都携带着其天然的生物‘身份证’和‘运输队’——即特定的蛋白质载体和生物类黄酮。这使得身体能够像处理一个完整的食物微粒一样识别并处理它们，旨在实现更高效、更温和的吸收与利用路径。

**完整协同体系**
这款配方并非各种营养素的简单堆砌，而是构建了一个相互支持的体系。B族维生素作为一个家族协同工作，支持能量代谢和神经系统功能，其中的胆碱和肌醇进一步强化了对细胞膜健康和神经信号的支持。抗氧化网络由维生素C、E、β-胡萝卜素及硒、锌等矿物质构成，共同维护细胞免受氧化压力。钙、镁、维生素D3和维生素K1则共同关注骨骼健康与心血管系统的平衡。矿物质如铁、铜、锰在酶系统中扮演关键角色，而铬和钼则参与糖与蛋白质的代谢调节。每一种成分的存在，都考虑了其在整体生理背景下的角色及其与其他成分的对话。

**适合人群**
它适合那些生活节奏快，饮食内容可能因条件限制而无法始终保证丰富多样的人；适合那些对合成补充剂感觉不适，寻求更接近食物形态营养支持的人；也适合素食者或因饮食选择需要额外关注某些营养素摄入的人群。当身体处于特殊阶段，如压力期、恢复期，或随着年龄增长对营养吸收效率有所关注时，它也能作为日常营养基础的补充。

**纯净与成分完整性**
配方的纯净度与有效性同等重要。产品不含常见的过敏原如麸质、大豆、乳制品，也杜绝了糖、人工色素、香料和防腐剂。辅料仅使用必要的微晶纤维素等作为片剂成型所需，最大程度减少了非活性成分的干扰。整个生产过程尊重成分的完整性，旨在交付一个纯净、有效的营养复合体。

**健康管理者与经销商：临床背景与方案搭配**
许多自然疗法医师和健康顾问将此类食物态基础营养方案视为构建健康根基的第一步。在临床实践中，它常被用作一个温和而全面的营养支持起点，为身体补充构建模块，为进一步的针对性调理方案打下基础。它可以与益生菌、Omega-3脂肪酸或其他针对性草本配方搭配，但具体组合应基于个人的整体状况进行评估。

**用法与剂量**
建议每日服用1至2片，随餐或餐前用足量水送服。具体剂量可根据个人需求和生活状态调整，或遵循健康专业人士的指导。一瓶60片的包装可供一个月至两个月的日常使用。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日食用量。置于儿童无法触及处。孕妇、哺乳期妇女、正在服药或有特定健康状况者，在使用前建议咨询医生或专业健康顾问。`,ingredient_reference:`**维生素C（来自柑橘类水果）**
作为关键的抗氧化剂和胶原蛋白合成辅助因子，它支持免疫系统功能和皮肤健康。在配方中，它被整合于柑橘果肉中，提供了其天然的生物类黄酮伴侣，如橙皮苷，这有助于稳定维生素C并延长其在体内的作用时间。它与其他抗氧化营养素如维生素E和硒协同工作，再生抗氧化网络。

**B族维生素复合体（B1, B2, B3, B5, B6, B9, B12, 生物素）**
这是一个协同工作的家族，主要参与细胞内的能量代谢过程，将食物转化为可用能量。它们对神经系统的正常功能、红细胞的生成以及激素合成至关重要。食物态形式旨在提供更完整的辅酶形态，帮助身体直接利用。胆碱和肌醇作为亲脂性营养素，与B族维生素共同支持细胞膜健康和神经信号传递。

**维生素D3（胆钙化醇）**
它不仅关乎钙的吸收与骨骼健康，也广泛参与免疫调节和细胞生长。在复合配方中，它与维生素K1、钙、镁共同构成骨骼与心血管健康支持矩阵，帮助引导钙质沉积于适当的部位。

**维生素E与β-胡萝卜素**
脂溶性抗氧化剂，保护细胞膜免受氧化损伤。β-胡萝卜素是维生素A的前体，身体会根据需要安全地将其转化。它们与维生素C、硒等形成抗氧化防御体系，覆盖水溶性和脂溶性的细胞环境。

**钙与镁**
这两种矿物质是骨骼健康的基础，同时也参与肌肉收缩与放松、神经信号传导及数百种酶反应。它们以平衡的比例存在，并采用食物态形式（通过乳酸杆菌培养过程整合），旨在提高生物利用度并减少对胃肠道的潜在干扰。

**锌与硒**
关键的微量元素，作为多种酶的核心组成部分。锌支持免疫功能、伤口愈合和味觉嗅觉。硒是谷胱甘肽过氧化物酶的重要成分，这是一种强大的内源性抗氧化酶。它们与维生素协同，强化身体的防御和修复系统。

**铁**
作为血红蛋白的核心成分，负责血液中的氧气运输。采用温和的食物态形式，旨在提供易于身体管理利用的铁，减少对消化系统的刺激，并与维生素C搭配以支持吸收。

**其他矿物质（铜、锰、铬、钼、碘、硼）**
这些微量元素虽然需求量小，但作用关键。它们作为辅助因子，参与能量代谢、抗氧化防御（如超氧化物歧化酶需要铜和锰）、甲状腺功能（碘）以及糖和脂肪代谢的调节（铬）。在食物态复合物中，它们被预先整合到有机基质中，模拟其在天然食物中的结合状态。

**胆碱、肌醇与PABA**
这些物质有时被归为B族维生素相关营养素。胆碱对肝脏健康、神经递质合成和细胞膜结构至关重要。肌醇参与细胞信号传导和胰岛素敏感性。PABA（对氨基苯甲酸）是叶酸分子的组成部分。它们在配方中共同支持代谢与神经系统的细微平衡。`},en:{label:`Mannayan BASIS MULTI+ | Food-State Multivitamin & Mineral Complex

Supports Daily Energy & Vitality
Maintains Immune System Health
Promotes Metabolic Balance
Nourishes the Nervous System
Supports Bone & Cardiovascular Health

60 Tablets | 1-2 Tablets Daily

Gluten-Free, Soy-Free, Dairy-Free, No Artificial Additives, Non-GMO, Vegetarian-Friendly`,short_description:`Do you feel like the busyness of daily life drains your energy, and even with careful eating, your body still seems to lack something to maintain peak condition? The pace of modern life and dietary habits can sometimes make it hard to get a full, adequate spectrum of micronutrients from meals alone.

Mannayan BASIS MULTI+ is a multivitamin and mineral supplement that utilizes food-state technology. Its core philosophy is to mimic how nutrients are presented in natural foods. In whole foods, vitamins and minerals don't exist in isolation; they are bound together with co-factors like proteins and bioflavonoids. These co-factors act like a 'natural guidance system' for nutrients, helping the body recognize, absorb, and precisely deliver them to cells in need.

Through a patented process, this product infuses vitamins into their naturally occurring fruit and vegetable concentrates (like vitamin C into citrus pulp, beta-carotene into carrot concentrate), while minerals are 'activated' through a cultivation process with lactic acid bacteria or nutritional yeast. This way, each nutrient enters the body already equipped with its natural network of co-factors, designed for absorption and utilization closer to that of whole food sources.

Each bottle contains 60 tablets, with a suggested daily intake of 1-2 tablets. The formula is pure, free from gluten, soy, dairy, sugar, artificial colors, flavors, and preservatives, making it suitable for vegetarians and those sensitive to specific ingredients.`,long_description:`When the body is under prolonged high demand, or when diet falls short in variety, you might notice subtle signals: energy doesn't last as long, focus drifts more easily, or the body's recovery seems slower. These are often hints that the foundational micronutrients needed for daily, precise operation might be lacking. Simply eating more food may not solve the issue; the key lies in the form and absorption efficiency of the nutrients.

**Food-State Technology**
Traditional synthetic vitamins and minerals are isolated compounds, requiring the body to expend extra resources to 'assemble' the necessary co-factors for utilization. The core of Mannayan BASIS MULTI+ lies in its patented food-state technology. This process isn't simply mixing nutrients with food powders; it's a controlled nutrient activation that returns vitamins to their natural fruit/vegetable matrix and integrates minerals within a cultivation environment of Lactobacillus or nutritional yeast. The result is that each nutrient carries its natural biological 'ID' and 'transport team'—specific protein carriers and bioflavonoids. This allows the body to recognize and process them much like it would a complete food particle, aiming for a more efficient and gentler pathway of absorption and utilization.

**Complete Synergistic System**
This formula isn't a simple pile of nutrients; it builds a mutually supportive system. The B-vitamins work together as a family to support energy metabolism and nervous system function, with choline and inositol further reinforcing support for cell membrane health and nerve signaling. An antioxidant network of vitamin C, E, beta-carotene, and minerals like selenium and zinc works collectively to protect cells from oxidative stress. Calcium, magnesium, vitamin D3, and vitamin K1 jointly focus on bone health and cardiovascular system balance. Minerals like iron, copper, and manganese play key roles in enzyme systems, while chromium and molybdenum participate in regulating sugar and protein metabolism. The inclusion of each ingredient considers its role within the overall physiological context and its interaction with other components.

**Who It's For**
It's suitable for those with fast-paced lives whose dietary variety may be limited by circumstances; for those who experience discomfort with synthetic supplements and seek nutritional support closer to food forms; and for vegetarians or those whose dietary choices require extra attention to certain nutrient intakes. It can also serve as a supplement to daily nutritional foundations during special phases, such as periods of stress or recovery, or when concerns about nutrient absorption efficiency arise with age.

**Purity & Ingredient Integrity**
The purity of the formula is as important as its efficacy. The product is free from common allergens like gluten, soy, and dairy, and excludes sugar, artificial colors, flavors, and preservatives. Excipients are limited to essentials like microcrystalline cellulose for tablet formation, minimizing non-active ingredient interference. The entire production process respects ingredient integrity, aiming to deliver a pure, effective nutritional complex.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
Many naturopathic doctors and health consultants view such food-state foundational nutrition protocols as the first step in building a health foundation. In clinical practice, it's often used as a gentle, comprehensive starting point for nutritional support, replenishing the body's building blocks and laying groundwork for more targeted protocols. It can be paired with probiotics, Omega-3s, or other targeted herbal formulas, though specific combinations should be assessed based on an individual's overall picture.

**Usage & Dosage**
Take 1 to 2 tablets daily, with a full glass of water, with or before a meal. The specific dose can be adjusted based on individual needs and lifestyle, or as directed by a health professional. One bottle of 60 tablets provides a one- to two-month supply for daily use.

**Important Note**
This product is a dietary supplement and is not intended to replace a balanced, varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Pregnant or nursing women, individuals taking medication, or those with specific health conditions should consult a doctor or qualified health advisor before use.`,ingredient_reference:`**Vitamin C (from Citrus Fruit)**
A key antioxidant and co-factor for collagen synthesis, it supports immune function and skin health. In this formula, it is integrated within citrus pulp, providing its natural bioflavonoid companions like hesperidin, which helps stabilize vitamin C and prolong its activity in the body. It works synergistically with other antioxidant nutrients like vitamin E and selenium to regenerate the antioxidant network.

**B-Vitamin Complex (B1, B2, B3, B5, B6, B9, B12, Biotin)**
This is a synergistic family primarily involved in intracellular energy metabolism, converting food into usable energy. They are crucial for normal nervous system function, red blood cell formation, and hormone synthesis. The food-state form aims to provide more complete coenzyme forms for direct utilization by the body. Choline and inositol, as lipotropic nutrients, work alongside B-vitamins to support cell membrane health and nerve signal transmission.

**Vitamin D3 (Cholecalciferol)**
It is not only vital for calcium absorption and bone health but also broadly involved in immune regulation and cell growth. Within the complex formula, it works with vitamin K1, calcium, and magnesium to form a matrix supporting bone and cardiovascular health, helping guide calcium deposition to appropriate sites.

**Vitamin E & Beta-Carotene**
Fat-soluble antioxidants that protect cell membranes from oxidative damage. Beta-carotene is a precursor to vitamin A, which the body converts safely as needed. Together with vitamin C, selenium, and others, they form an antioxidant defense system covering both water- and fat-soluble cellular environments.

**Calcium & Magnesium**
These minerals are foundational for bone health and also participate in muscle contraction/relaxation, nerve signal transmission, and hundreds of enzyme reactions. They are present in a balanced ratio and in a food-state form (integrated via a Lactobacillus cultivation process), designed to enhance bioavailability and reduce potential gastrointestinal disturbance.

**Zinc & Selenium**
Key trace minerals serving as core components of numerous enzymes. Zinc supports immune function, wound healing, and taste/smell. Selenium is a vital component of glutathione peroxidase, a powerful endogenous antioxidant enzyme. They work in synergy with vitamins to strengthen the body's defense and repair systems.

**Iron**
The core component of hemoglobin, responsible for oxygen transport in the blood. Provided in a gentle food-state form, it aims to offer iron that is easier for the body to manage and utilize, reducing digestive system irritation, and is paired with vitamin C to support absorption.

**Other Minerals (Copper, Manganese, Chromium, Molybdenum, Iodine, Boron)**
These trace minerals, though required in small amounts, play critical roles. They act as co-factors in energy metabolism, antioxidant defense (e.g., superoxide dismutase requires copper and manganese), thyroid function (iodine), and regulation of sugar and fat metabolism (chromium). In the food-state complex, they are pre-integrated into an organic matrix, mimicking their bound state in natural foods.

**Choline, Inositol & PABA**
These are sometimes categorized as B-vitamin related nutrients. Choline is crucial for liver health, neurotransmitter synthesis, and cell membrane structure. Inositol is involved in cellular signaling and insulin sensitivity. PABA (Para-Aminobenzoic Acid) is a component of the folate molecule. In this formula, they collectively support subtle balances in metabolism and the nervous system.`}}},{name:"Mannayan BETA + mit Lutein (60 Kapseln)",url:"https://mannayan.com/Mannayan-BETA-mit-Lutein-60-Kapseln/820",price:["59,80 €"],product_number:"820",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/ed/2e/6c/1766136638/Beta%2Bmit-Lutein_2025.jpg?ts=1766136638",image_local:"images/Beta%2Bmit-Lutein_2025.jpg",content:{cn:{label:`Mannayan BETA+ 叶黄素
植物全食物抗氧化复合配方
• 中和自由基，效力相当于10份蔬果
• 支持细胞健康与内在平衡
• 提供眼部关键营养素叶黄素
• 源自纯净植物浓缩物
• 60粒胶囊，每日1粒
• 适合素食者、过敏体质
• 不含麸质、大豆、乳制品、人工添加剂`,short_description:`现代生活节奏快，环境压力无处不在，身体时常感到需要额外的支持来维持内在的清晰与活力。你是否觉得需要一种更根本的方式来补充日常饮食可能无法完全提供的保护？

Mannayan BETA+ 叶黄素正是为此而生。它并非单一的合成营养素，而是从完整的食物中萃取出精华，将多种植物浓缩物智慧地结合在一起。这些成分协同工作，帮助身体应对氧化压力，支持细胞层面的健康，并为眼睛提供重要的营养支持。

每一粒胶囊都浓缩了多种植物精华，其抗氧化能力相当于食用10份水果或蔬菜。这是一种从根本入手的支持方式，旨在补充现代饮食的不足，帮助身体回归自然的平衡状态。

产品包含60粒胶囊，建议每日服用1粒。配方纯净，适合素食者，并且不含麸质、大豆、乳制品及人工色素、香料和防腐剂。`,long_description:`在长时间面对屏幕后感到眼睛干涩、疲劳，或是觉得身体需要从日常压力中恢复活力，这些都是身体发出的微妙信号，提示内在的平衡可能需要关注。现代饮食虽然丰富，但往往难以提供足够浓度和特定组合的植物营养素来应对这些挑战。

**食物态技术**
Mannayan BETA+ 叶黄素采用全食物理念制成。这意味着其中的营养成分并非人工合成或孤立提取，而是从完整的植物原料中温和浓缩而得。这种方法保留了食物中天然存在的生物活性物质复合体，让身体更容易识别和利用，如同从一顿营养丰富的植物大餐中获取精华。

**完整体系**
配方中的每一种植物提取物都扮演着独特的角色，并与其他成分协同增效。从杜氏盐藻中提取的天然β-胡萝卜素作为基础，万寿菊提取物提供叶黄素和玉米黄质，专门支持眼部健康。同时，配方融入了如槲皮素、葡萄籽提取物、绿茶提取物、姜黄提取物、西兰花提取物等多种植物精华。它们共同构成了一个广泛的抗氧化网络，从不同路径帮助中和自由基，支持身体的自然防御与修复机制。这种复合作用远非单一成分可以比拟，它模拟了自然界中植物保护自身的智慧。

**适合人群**
这款配方适合那些经常使用电子设备、用眼较多，希望为眼睛提供针对性营养支持的人。也适合日常饮食中蔬果摄入不足，希望以浓缩形式补充多样化植物营养素，从而支持整体抗氧化健康的人。对于寻求纯净、植物来源补充剂，且可能有特定饮食限制（如素食、过敏体质）的个体，这是一个贴合需求的选择。

**纯净与成分完整性**
我们坚持配方的纯净性。产品不含小麦、麸质、大豆、乳制品、酵母、人工色素、人工香料及防腐剂。胶囊外壳采用植物源的羟丙甲纤维素。每一批原料都经过精心筛选，确保其效力和纯净度，让您摄入的每一粒胶囊都专注于提供有效的植物营养，无需担心不必要的添加物。

**健康管理者与经销商：临床背景与方案搭配**
该配方由具有临床背景的健康专家参与设计，成分的选择基于其对细胞保护和特定生理功能的支持研究。对于健康管理者而言，它可以作为全面健康方案中的基础抗氧化部分，与针对性的营养素或生活方式建议相结合，为寻求系统性健康改善的个体提供支持。

**用法与剂量**
建议成年人每日服用1粒胶囊，随足量液体吞服。也可根据专业健康指导者的建议进行调整。一瓶包含60粒胶囊，恰好为两个月的用量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐每日摄入量。请将产品置于儿童无法触及之处。储存于阴凉、干燥、避光的地方。如果密封条缺失，请勿食用。`,ingredient_reference:`**β-胡萝卜素（来自杜氏盐藻提取物）**
这是一种天然的类胡萝卜素前体，可在体内根据需要转化为维生素A，对维持视觉健康、皮肤黏膜完整性及免疫功能有重要作用。采用杜氏盐藻来源，生物利用率高。它为整个配方的抗氧化网络提供了基础支持，特别适合那些希望以天然形式补充维生素A前体的人群。在配方中，它与叶黄素等其他类胡萝卜素协同，提供更全面的保护。

**叶黄素与玉米黄质（来自万寿菊提取物）**
这是两种集中于眼睛黄斑区的关键类胡萝卜素，被称为“眼睛的防晒霜”，帮助过滤有害蓝光并抵抗氧化损伤。提取自万寿菊，浓度标准化。对于长时间暴露于屏幕光或关注长期眼部健康的人群尤为重要。在配方中，它们与β-胡萝卜素及其他抗氧化成分共同守护视觉系统。

**槲皮素**
一种广泛存在于果蔬中的类黄酮，具有显著的抗氧化和抗炎特性，有助于稳定细胞膜，支持心血管健康和正常的免疫反应。它作为配方中的核心类黄酮成分，与其他多酚类物质如葡萄籽提取物中的OPC产生协同，增强整体的自由基清除能力。

**葡萄籽提取物（95%多酚，含OPC）**
富含原花青素等多酚物质，是强效的抗氧化剂，尤其有助于保护血管内皮健康，促进微循环。其高浓度的多酚成分使其成为配方中抗氧化防御的中坚力量。它与绿茶提取物中的EGCG等其他多酚协同作用，提供广泛的保护。

**绿茶提取物（45% EGCG，95%多酚）**
EGCG是绿茶中研究最深入的儿茶素，以其强大的抗氧化和代谢支持特性而闻名。标准化的高含量EGCG确保了成分的活性和一致性。适合关注细胞健康与能量代谢的人群。在配方中，它激活自身的抗氧化通路，并与其他植物化学物质互补。

**姜黄提取物（95%姜黄素类）**
姜黄素是姜黄中的主要活性成分，以其支持健康炎症反应和抗氧化能力而备受关注。高浓度的标准化提取物保证了功效。它与西兰花提取物中的萝卜硫素可能存在有益的相互作用，共同支持细胞的防御机制。

**西兰花提取物（10%萝卜硫素）**
萝卜硫素是十字花科蔬菜中的明星成分，能够激活细胞自身的抗氧化和解毒通路。这种独特的机制与其他直接抗氧化成分相辅相成，为身体提供多层次的保护策略，特别适合希望增强内在防御系统的人群。

**蓝莓与越橘提取物（含花青素）**
富含花青素，这类色素以其对微循环和视觉健康的支持而闻名。越橘提取物标准化的花青素含量确保了其活性。它们为配方增添了针对毛细血管健康和视觉适应能力的支持，与叶黄素在眼部健康领域协同作用。

**番茄红素（10%，来自番茄提取物）**
一种强效的脂溶性类胡萝卜素抗氧化剂，对前列腺健康和皮肤保护有特定益处。来自番茄的天然提取物。它丰富了配方的类胡萝卜素谱系，与β-胡萝卜素、叶黄素一起，提供了更全面的脂相抗氧化保护。

**生姜提取物（5%姜辣素）**
提供姜辣素等活性成分，传统上用于支持消化舒适和健康的炎症反应。标准化的姜辣素含量保证了其温和而有效的特性。在配方中，它有助于平衡整体作用，并可能支持其他成分的吸收与利用。`},en:{label:`Mannayan BETA+ Lutein
Whole Food Plant-Based Antioxidant Complex
• Neutralizes free radicals, equivalent to 10 servings of fruits & vegetables
• Supports cellular health and internal balance
• Provides lutein, a key eye nutrient
• Sourced from pure plant concentrates
• 60 capsules, 1 capsule daily
• Suitable for vegetarians and sensitive individuals
• Free from gluten, soy, dairy, and artificial additives`,short_description:`Modern life is fast-paced, with environmental stressors everywhere. Your body often needs extra support to maintain inner clarity and vitality. Do you feel the need for a more foundational way to supplement the protection your daily diet may not fully provide?

Mannayan BETA+ Lutein was created for this very purpose. It's not a single synthetic nutrient, but an intelligent blend of concentrated essences extracted from whole foods. These components work synergistically to help the body cope with oxidative stress, support health at the cellular level, and provide important nutritional support for the eyes.

Each capsule is concentrated with a variety of plant essences, offering antioxidant capacity equivalent to consuming 10 servings of fruits or vegetables. This is a foundational approach to support, designed to supplement the shortcomings of the modern diet and help the body return to a natural state of balance.

The product contains 60 capsules, with a recommended intake of 1 capsule daily. The formula is pure, suitable for vegetarians, and free from gluten, soy, dairy, and artificial colors, flavors, and preservatives.`,long_description:`Feeling dry, tired eyes after long screen time, or sensing your body needs to recover vitality from daily stress—these are subtle signals from your body, hinting that your internal balance may need attention. While the modern diet is abundant, it often struggles to provide sufficient concentrations and specific combinations of phytonutrients to meet these challenges.

**Whole Food Technology**
Mannayan BETA+ Lutein is crafted using a whole food philosophy. This means its nutrients are not artificially synthesized or isolated, but gently concentrated from complete plant sources. This method preserves the naturally occurring bioactive complexes found in food, making them easier for the body to recognize and utilize—like obtaining the essence from a nutrient-rich plant-based meal.

**Complete System**
Each plant extract in the formula plays a unique role and works synergistically with the others. Natural beta-carotene from Dunaliella salina serves as the foundation, while marigold extract provides lutein and zeaxanthin, specifically supporting eye health. Simultaneously, the formula incorporates various plant essences such as quercetin, grape seed extract, green tea extract, turmeric extract, and broccoli extract. Together, they form a broad antioxidant network, helping to neutralize free radicals through different pathways and supporting the body's natural defense and repair mechanisms. This complex action far surpasses what a single ingredient can achieve, mimicking the wisdom plants use to protect themselves in nature.

**Suitable For**
This formula is ideal for individuals who frequently use electronic devices, have high visual demands, and wish to provide targeted nutritional support for their eyes. It's also suitable for those whose daily diet lacks sufficient fruits and vegetables and who want to supplement with a concentrated form of diverse phytonutrients to support overall antioxidant health. For individuals seeking pure, plant-based supplements who may have specific dietary restrictions (e.g., vegetarian, sensitive), this is a well-suited choice.

**Purity & Ingredient Integrity**
We adhere to the purity of the formula. The product is free from wheat, gluten, soy, dairy, yeast, artificial colors, artificial flavors, and preservatives. The capsule shell is made from plant-derived hydroxypropyl methylcellulose. Every batch of raw materials is meticulously selected to ensure potency and purity, so each capsule you take focuses on delivering effective plant nutrition without unnecessary additives.

**For Health Practitioners & Distributors: Clinical Background & Protocol Integration**
This formula was designed with input from health experts with clinical backgrounds. Ingredient selection is based on research supporting cellular protection and specific physiological functions. For health practitioners, it can serve as the foundational antioxidant component within a comprehensive health protocol, combined with targeted nutrients or lifestyle recommendations to support individuals seeking systemic health improvement.

**Usage & Dosage**
Adults are advised to take 1 capsule daily, swallowed with plenty of liquid. Dosage can be adjusted based on the advice of a qualified health practitioner. One bottle contains 60 capsules, providing exactly a two-month supply.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Beta-Carotene (from Dunaliella salina extract)**
This is a natural carotenoid precursor that can be converted into vitamin A in the body as needed. It plays an important role in maintaining visual health, skin/mucous membrane integrity, and immune function. Sourced from Dunaliella salina, it offers high bioavailability. It provides foundational support for the formula's antioxidant network and is particularly suitable for those wishing to supplement with a natural form of vitamin A precursor. In the formula, it works synergistically with lutein and other carotenoids to provide more comprehensive protection.

**Lutein & Zeaxanthin (from Marigold extract)**
These are two key carotenoids concentrated in the macula of the eye, often called "sunscreen for the eyes." They help filter harmful blue light and resist oxidative damage. Extracted from marigold and standardized for concentration, they are especially important for individuals frequently exposed to screen light or those focused on long-term eye health. In the formula, they work alongside beta-carotene and other antioxidant components to protect the visual system.

**Quercetin**
A flavonoid widely found in fruits and vegetables, known for its significant antioxidant and anti-inflammatory properties. It helps stabilize cell membranes and supports cardiovascular health and normal immune responses. As a core flavonoid in the formula, it works synergistically with other polyphenols, such as OPC from grape seed extract, to enhance overall free radical scavenging capacity.

**Grape Seed Extract (95% polyphenols, containing OPC)**
Rich in polyphenolic substances like proanthocyanidins, it is a potent antioxidant, particularly helpful for protecting vascular endothelial health and promoting microcirculation. Its high concentration of polyphenols makes it a central force in the formula's antioxidant defense. It works synergistically with other polyphenols, such as EGCG from green tea extract, to provide broad-spectrum protection.

**Green Tea Extract (45% EGCG, 95% polyphenols)**
EGCG is the most extensively studied catechin in green tea, renowned for its powerful antioxidant and metabolic support properties. Standardized high EGCG content ensures ingredient activity and consistency. Suitable for individuals focused on cellular health and energy metabolism. In the formula, it activates its own antioxidant pathways and complements other phytochemicals.

**Turmeric Extract (95% curcuminoids)**
Curcumin is the primary active component in turmeric, highly regarded for its support of healthy inflammatory responses and antioxidant capacity. A high-concentration, standardized extract guarantees efficacy. It may have beneficial interactions with sulforaphane from broccoli extract, jointly supporting cellular defense mechanisms.

**Broccoli Extract (10% sulforaphane)**
Sulforaphane is a star component in cruciferous vegetables, capable of activating the body's own antioxidant and detoxification pathways. This unique mechanism complements other direct antioxidant ingredients, providing the body with a multi-layered protection strategy. It is particularly suitable for those looking to enhance their internal defense systems.

**Blueberry & Bilberry Extract (containing anthocyanins)**
Rich in anthocyanins, pigments known for their support of microcirculation and visual health. Standardized anthocyanin content in bilberry extract ensures its activity. They add support for capillary health and visual adaptation to the formula, working synergistically with lutein in the realm of eye health.

**Lycopene (10%, from Tomato extract)**
A potent fat-soluble carotenoid antioxidant with specific benefits for prostate health and skin protection. Sourced from natural tomato extract, it enriches the formula's carotenoid profile. Together with beta-carotene and lutein, it provides more comprehensive lipid-phase antioxidant protection.

**Ginger Extract (5% gingerols)**
Provides active components like gingerols, traditionally used to support digestive comfort and healthy inflammatory responses. Standardized gingerol content ensures its gentle yet effective properties. In the formula, it helps balance the overall action and may support the absorption and utilization of other ingredients.`}}},{name:"Mannayan BETAIN HCL & PEPSIN + (60 Kapseln)",url:"https://mannayan.com/Mannayan-BETAIN-HCL-PEPSIN-60-Kapseln/010026",price:["18,90 €"],product_number:"010026",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/3b/1d/47/1766136706/Betain-HCL-Pepsin%2B_2025.jpg?ts=1766136706",image_local:"images/Betain-HCL-Pepsin%2B_2025.jpg",content:{cn:{label:`Mannayan 盐酸甜菜碱 & 胃蛋白酶+
支持胃部舒适与营养吸收
• 补充胃酸支持蛋白质消化
• 帮助分解食物释放营养
• 支持整体消化舒适度
• 适用于对念珠菌敏感人群
60粒胶囊 | 每日1-2粒随主餐服用
无麸质、无乳糖、无大豆、无人工添加剂`,short_description:`你是否在饭后常感到胃部沉重、胀气，或是觉得食物在胃里停留太久？这种感觉可能源于胃酸不足，影响了食物正常的分解过程。

Mannayan 盐酸甜菜碱与胃蛋白酶+旨在为消化过程提供支持。它提供盐酸甜菜碱，这是一种与盐酸结合的甜菜碱形式，能温和地补充胃酸环境。同时添加了胃蛋白酶，这是一种关键的蛋白质消化酶，两者协同工作，帮助启动和优化食物的初始分解。

当食物能被更有效地初步分解时，身体后续吸收蛋白质、维生素和矿物质等关键营养的路径也会更顺畅。这不仅关乎胃部的舒适感，更关乎从每一餐中获取充分的滋养。

每份提供345毫克盐酸甜菜碱和10毫克胃蛋白酶。配方纯净，不含麸质、乳制品、大豆、酵母、淀粉、糖及人工色素与香料。`,long_description:`一顿饭下肚，换来的不是满足与精力，而是上腹的饱胀、隐痛，或是食物久久不消化的停滞感。这常常是消化过程的第一步——胃部消化——未能顺畅进行的信号。胃酸不仅是分解食物的起点，更是激活消化酶、为营养吸收铺平道路的关键。当这一步动力不足，后续的消化负担便会加重，影响整体的舒适与能量水平。

**完整体系**
本配方并非单一成分的补充，而是一个为支持胃部初期消化而设计的协同体系。盐酸甜菜碱在胃中释放，温和地提供支持胃酸环境的物质基础。与此同时，胃蛋白酶这一专司蛋白质分解的酶被直接引入，立即投入工作，帮助将食物中的大分子蛋白质切割成更小的肽段。两者一为环境支持，一为功能执行，共同致力于减轻胃的消化负担，为食物进入肠道进行下一步精细吸收做好准备。这种协同作用旨在恢复消化流程的自然节奏。

**适合人群**
这款补充剂适合那些在进食后，尤其是富含蛋白质的餐食后，容易感到胃部胀满、不适或消化缓慢的人。它也适用于那些关注自身消化效率，希望确保从饮食中获得充分营养支持的人。根据产品信息，其配方亦考虑了对念珠菌敏感人群的适用性。

**纯净与成分完整性**
我们深知摄入物质的纯净度与身体感受直接相关。该产品胶囊由羟丙甲纤维素构成，活性成分仅为盐酸甜菜碱与胃蛋白酶。它明确不含小麦、麸质、乳制品（乳糖）、糖、大豆、淀粉、酵母、防腐剂以及人工色素和香料。配方中不含转基因成分，致力于提供直接、纯粹的消化支持。

**用法与剂量**
建议每日随主餐服用1至2粒胶囊，并用足量水送服。请勿在服用前咬破或打开胶囊，因为内容物可能对牙釉质产生影响。剂量可根据个人需求和专业健康顾问的建议进行调整。

**重要提示**
如果已知或怀疑存在胃溃疡，请勿使用本产品。膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若密封条缺失，请勿食用。推荐摄入量不应被超过。`,ingredient_reference:`**盐酸甜菜碱**
盐酸甜菜碱是甜菜碱与盐酸的结合形式，其中约76%为甜菜碱，24%为盐酸。在体内，甜菜碱本身是参与脂肪代谢和同型半胱氨酸循环的重要甲基供体。而在此配方中，其核心作用是随胶囊在胃中崩解后，提供支持健康胃酸环境的物质基础。这种形式能更直接、温和地作用于胃部消化的初始环节。它非常适合那些感觉胃动力不足、饭后消化迟缓的人群。在配方中，它为胃蛋白酶发挥最佳活性创造了适宜的环境，是功能协同的基础。

**胃蛋白酶**
胃蛋白酶是一种由胃部分泌的蛋白水解酶，其功能是启动膳食蛋白质的消化过程，将复杂的蛋白质长链分解成较小的肽段。本产品提供的胃蛋白酶活性标准为1:10,000 NF。直接补充胃蛋白酶，相当于为胃部的蛋白质消化环节提供了即时的功能性支持，尤其当身体自身分泌可能不足时。它主要服务于需要额外蛋白质消化支持的人群。在配方中，它与盐酸甜菜碱紧密配合，后者支持了其发挥活性所需的酸性环境，从而形成一个完整的初期蛋白质消化支持方案。`},en:{label:`Mannayan Betaine HCl & Pepsin+
Supports Gastric Comfort and Nutrient Absorption
• Provides hydrochloric acid support for protein digestion
• Helps break down food to release nutrients
• Supports overall digestive comfort
• Suitable for those sensitive to Candida
60 Capsules | Take 1-2 capsules daily with main meals
Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives`,short_description:`Do you often feel heavy, bloated, or like food sits in your stomach too long after eating? This sensation may stem from insufficient stomach acid, which can disrupt the normal breakdown of food.

Mannayan Betaine HCl & Pepsin+ is designed to support the digestive process. It provides betaine hydrochloride, a form of betaine bound to hydrochloric acid that gently contributes to the gastric acid environment. It also includes pepsin, a key enzyme for protein digestion. Together, they work synergistically to help initiate and optimize the initial breakdown of food.

When food is broken down more effectively at the start, the body's subsequent pathways for absorbing key nutrients—like proteins, vitamins, and minerals—become smoother. This isn't just about comfort in the stomach; it's about getting the full nourishment from every meal.

Each serving provides 345 mg of betaine hydrochloride and 10 mg of pepsin. The formula is pure, free from gluten, dairy, soy, yeast, starch, sugar, and artificial colors or flavors.`,long_description:`After a meal, instead of feeling satisfied and energized, you might experience bloating, mild discomfort in the upper abdomen, or a lingering feeling that the food isn't digesting. This is often a sign that the first step of digestion—gastric digestion—isn't proceeding smoothly. Stomach acid is not only the starting point for breaking down food but also crucial for activating digestive enzymes and paving the way for nutrient absorption. When this initial step lacks momentum, the subsequent digestive burden increases, affecting overall comfort and energy levels.

**A Complete System**
This formula is not a single-ingredient supplement but a synergistic system designed to support the initial phase of gastric digestion. Betaine hydrochloride is released in the stomach, gently providing foundational support for a healthy gastric acid environment. At the same time, pepsin—the enzyme specifically responsible for protein breakdown—is introduced directly, getting to work immediately to help cleave large protein molecules in food into smaller peptides. One supports the environment; the other performs the function. Together, they aim to ease the digestive burden on the stomach and prepare food for the next stage of detailed absorption in the intestines. This synergy is intended to help restore the natural rhythm of the digestive process.

**Who It's For**
This supplement is suitable for those who often feel bloated, uncomfortable, or experience slow digestion after eating, especially after meals rich in protein. It is also for individuals focused on their digestive efficiency who want to ensure they are getting adequate nutritional support from their diet. According to the product information, the formulation also considers suitability for those sensitive to Candida.

**Purity and Ingredient Integrity**
We understand that the purity of what you ingest directly impacts how you feel. The capsules are made from hypromellose, and the active ingredients are solely betaine hydrochloride and pepsin. The product is explicitly free from wheat, gluten, dairy (lactose), sugar, soy, starch, yeast, preservatives, and artificial colors and flavors. The formula contains no genetically modified ingredients and is committed to providing direct, pure digestive support.

**Usage and Dosage**
It is recommended to take 1 to 2 capsules daily with your main meals, swallowed with plenty of water. Do not chew or open the capsules before swallowing, as the contents may affect tooth enamel. The dosage can be adjusted based on individual needs and the advice of a qualified health consultant.

**Important Notes**
Do not use this product if you have or suspect you have a stomach ulcer. Dietary supplements are not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal is missing. The recommended intake should not be exceeded.`,ingredient_reference:`**Betaine Hydrochloride**
Betaine hydrochloride is a compound of betaine and hydrochloric acid, consisting of approximately 76% betaine and 24% hydrochloric acid. In the body, betaine itself is an important methyl donor involved in fat metabolism and the homocysteine cycle. In this formula, its primary role is to provide foundational support for a healthy gastric acid environment after the capsule dissolves in the stomach. This form allows for a more direct and gentle action on the initial stage of gastric digestion. It is particularly suitable for those who feel their gastric motility is insufficient or experience slow digestion after meals. In the formula, it helps create an optimal environment for pepsin to function at its best, forming the basis of functional synergy.

**Pepsin**
Pepsin is a proteolytic enzyme secreted by the stomach. Its function is to initiate the digestion of dietary proteins, breaking down complex protein chains into smaller peptides. The pepsin in this product has an activity standard of 1:10,000 NF. Supplementing with pepsin directly provides immediate functional support for the protein digestion phase in the stomach, especially when the body's own secretion may be inadequate. It primarily serves individuals who need extra support for protein digestion. In the formula, it works closely with betaine hydrochloride, which supports the acidic environment necessary for its activity, forming a complete support system for the initial phase of protein digestion.`}}},{name:"Mannayan Bio-(B)Remsen",url:"https://mannayan.com/Mannayan-Bio-B-Remsen/010174",price:["23,90 €"],product_number:"010174",quantity:["50 ml"],image_url:"https://mannayan.com/media/ae/25/92/1658912669/Bremsen_oP%2070.jpg?ts=1658912669",image_local:"images/Bremsen_oP%2070.jpg",content:{cn:{label:`Mannayan Bio-(B)Remsen
森林的硫磺力量
• 支持身体自然排毒与净化过程
• 提供植物性镁与铁，缓解日常疲劳
• 促进消化系统舒适与平衡
• 以生物活性形式补充易缺乏的硫化合物
50毫升 | 每日2次，每次20滴
欧盟有机认证 | 纯素 | 无麸质 | 无人工添加`,short_description:`你是否感觉身体时常沉重，仿佛需要一次内在的清新？现代饮食中，那些带有天然辛香、富含关键矿物质的植物越来越少见，我们的身体可能因此错过了一些古老而根本的支持。

Mannayan Bio-(B)Remsen 源自欧洲森林的野生蒜，又称熊葱。它被认为是欧洲含硫最丰富的植物之一，这些天然的硫化合物是身体许多酶系统运作所依赖的基石。当日常饮食难以提供这些活性成分时，它提供了一种温和而有效的补充途径。

这款萃取液采用有机种植的熊葱叶片，在有机乙醇中精心制备，以保存其完整的植物精华。它不含麸质、乳制品、人工色素或防腐剂，配方纯净而专注。

每瓶50毫升，建议每日两次，每次20滴，溶于水或果汁中饮用。它适合素食者和纯素者，为寻求从植物根本获取营养支持的人，提供一份来自森林的馈赠。`,long_description:`早晨醒来仍感倦怠，午后精力难以持续，或是总觉得身体需要一些内在的清理——这些感受常常指向现代生活中一种隐性的失衡。我们远离了土地，食物也变得过于精制，那些曾经在传统饮食中扮演清洁与激活角色的、风味浓郁的野生植物，如今已难觅踪影。其中，一种关键的元素——生物可利用的硫——正悄然变得缺乏。

**食物态萃取技术**
Mannayan Bio-(B)Remsen 的制作尊重植物的完整性。我们只选用获得欧盟有机认证的熊葱叶片。通过将其浸泡在有机乙醇与纯净水的溶液中，我们进行了一次温和的萃取。这个过程不追求分离出单一的“有效物质”，而是旨在将整株植物的生物活性谱系——包括其天然的硫化合物、矿物质乃至微妙的植物信息——尽可能完整地转移到液体中。这种液态萃取的形式，也让它更易于被身体接纳和利用。

**一个基于协同作用的完整体系**
这款产品的核心并非单一成分的孤立作用。熊葱本身就是一个微型的协同体系。它丰富的有机硫化合物，如蒜氨酸及其衍生物，是体内诸多解毒酶和抗氧化酶（如谷胱甘肽）合成与激活的关键支持。与此同时，它所含的植物性镁，直接参与能量代谢，帮助缓解肌肉紧张与神经疲劳；其天然的铁元素则支持气血的生成。硫、镁、铁在体内本就相互关联，共同维护着细胞的能量工厂和清洁机制。这款萃取液将这种天然的协同关系原样呈现，提供的是植物整体的支持智慧，而非零散的功能碎片。

**适合哪些生活情境**
它适合那些饮食精致但可能缺乏“土气”与“辛香”的人，感觉身体代谢迟缓、需要季节性调理支持的人，以及因长期压力或环境因素感到身体负担加重、寻求温和净化途径的人。它也适合素食者，作为从植物中获取特定矿物质和活性化合物的一种补充。当你想为身体提供一些来自野生植物的、根基性的营养时，它会是一个忠实的选择。

**纯净与成分的完整性**
配方中只有两种成分：有机乙醇、纯净水和有机熊葱萃取物。我们坚持使用全有机的原料，并明确拒绝添加任何非必要的成分：无麸质、无乳糖、无人工色素、无人工香料、无防腐剂、无转基因原料。瓶中的每一滴，都只承载着熊葱本身的力量与纯净的载体。欧盟有机认证是对这份承诺的外部鉴证。

**健康管理者与搭配建议**
许多自然疗法从业者将熊葱视为春季调理和支持肝胆功能的传统草药。在整体健康方案中，它可以与支持消化健康的益生菌、或与其他富含抗氧化物的植物萃取液搭配使用，以构建一个多层次的内在环境支持体系。建议在专业健康顾问的指导下，将其融入个人化的健康计划。

**用法与剂量**
每日两次，每次取20滴，直接滴入一杯水或果汁中，搅拌均匀后饮用。建议在餐间服用。持续使用比大剂量偶尔使用更为重要，让植物的力量温和地融入日常。一瓶50毫升的容量，适合持续使用。

**重要提示**
请勿超过推荐的每日食用量。孕妇、哺乳期妇女不宜使用。请置于儿童无法触及之处。储存于阴凉、干燥、避光的地方。本品为膳食补充剂，不能替代多样化、均衡的饮食和健康的生活方式。`,ingredient_reference:`**有机熊葱（Allium ursinum）叶片萃取物**
熊葱是一种生长于欧洲阴凉林地中的野生葱属植物，被誉为“森林大蒜”。它是已知含硫最丰富的植物之一，这些硫以有机化合物的形式存在，如蒜氨酸。在体内，这些化合物是合成谷胱甘肽等关键抗氧化和解毒分子的重要前体，支持肝脏的二期解毒通路。其所用的形式是全叶的液态乙醇萃取，这有助于保存包括硫化物、挥发油、类黄酮以及植物性镁、铁在内的全谱植物营养素。它特别适合那些感觉身体需要温和净化支持、或饮食中缺乏葱蒜类食物的人。在本配方中，它是唯一的功能成分，其含有的硫、镁、铁等元素在体内自然协同，共同作用于能量代谢和细胞保护机制。`},en:{label:`Mannayan Bio-(B)Remsen
The Forest's Sulfur Power
• Supports the body's natural detoxification and purification processes
• Provides plant-based magnesium and iron to ease daily fatigue
• Promotes digestive comfort and balance
• Replenishes easily deficient sulfur compounds in bioactive form
50 ml | 20 drops, twice daily
EU Organic Certified | Vegan | Gluten-Free | No Artificial Additives`,short_description:`Do you often feel heavy in your body, as if in need of an inner refresh? In modern diets, those naturally pungent, mineral-rich plants are becoming increasingly rare, and our bodies may be missing out on some ancient, fundamental support.

Mannayan Bio-(B)Remsen is derived from wild garlic, also known as bear's garlic, from European forests. It is considered one of Europe's most sulfur-rich plants. These natural sulfur compounds are foundational building blocks that many of the body's enzyme systems rely on. When daily diet struggles to provide these active components, it offers a gentle yet effective supplemental pathway.

This extract is carefully prepared from organically cultivated bear's garlic leaves in organic ethanol to preserve the plant's full essence. It is free from gluten, dairy, artificial colors, or preservatives—a pure and focused formula.

Each 50 ml bottle suggests a dosage of 20 drops, twice daily, taken in water or juice. Suitable for vegetarians and vegans, it offers a gift from the forest for those seeking foundational nutritional support from plants.`,long_description:`Waking up still tired, struggling to sustain energy through the afternoon, or often feeling your body needs some internal cleansing—these sensations frequently point to a subtle imbalance in modern life. We've grown distant from the land, and our food has become overly refined. Those wild, flavor-rich plants that once played cleansing and activating roles in traditional diets are now hard to find. Among them, a key element—bioavailable sulfur—is quietly becoming deficient.

**Food-State Extraction Technology**
The making of Mannayan Bio-(B)Remsen respects the plant's integrity. We use only EU organic certified bear's garlic leaves. By steeping them in a solution of organic ethanol and purified water, we perform a gentle extraction. This process does not aim to isolate a single "active compound," but rather to transfer as completely as possible the plant's full spectrum of bioactive constituents—including its natural sulfur compounds, minerals, and even subtle plant intelligence—into the liquid. This liquid extract form also makes it more readily accepted and utilized by the body.

**A Complete System Based on Synergy**
The core of this product is not the isolated action of a single ingredient. Bear's garlic itself is a miniature synergistic system. Its rich organic sulfur compounds, such as alliin and its derivatives, are crucial supporters for the synthesis and activation of many of the body's detoxification and antioxidant enzymes (like glutathione). Simultaneously, its plant-based magnesium directly participates in energy metabolism, helping to ease muscle tension and nervous fatigue; its natural iron supports the generation of qi and blood. Sulfur, magnesium, and iron are inherently interconnected in the body, jointly maintaining the cell's energy factories and cleansing mechanisms. This extract presents this natural synergy as it is, offering the plant's holistic supportive wisdom, not fragmented functional pieces.

**Suitable Life Situations**
It suits those with refined diets that may lack "earthiness" and "pungency," those who feel their metabolism is sluggish and need seasonal support, and those who feel an increased bodily burden from long-term stress or environmental factors and seek a gentle purification pathway. It is also suitable for vegetarians as a supplement for obtaining specific minerals and active compounds from plants. When you wish to provide your body with some foundational, wild-plant-based nutrition, it is a faithful choice.

**Purity and Ingredient Integrity**
The formula contains only two ingredients: organic ethanol, purified water, and organic bear's garlic extract. We insist on using fully organic raw materials and explicitly refuse to add any unnecessary components: gluten-free, lactose-free, no artificial colors, no artificial flavors, no preservatives, no GMO ingredients. Every drop in the bottle carries only the power of bear's garlic itself and its pure carrier. The EU Organic Certification is an external validation of this commitment.

**For Health Practitioners & Pairing Suggestions**
Many naturopathic practitioners regard bear's garlic as a traditional herb for spring cleansing and supporting liver and gallbladder function. Within a holistic health plan, it can be paired with probiotics that support digestive health or other antioxidant-rich plant extracts to build a multi-layered internal environment support system. It is recommended to incorporate it into a personalized health plan under the guidance of a professional health advisor.

**Usage & Dosage**
Twice daily, take 20 drops directly into a glass of water or juice, stir well, and drink. Suggested to be taken between meals. Consistent use is more important than occasional high doses, allowing the plant's power to integrate gently into daily life. The 50 ml bottle size is suitable for sustained use.

**Important Notes**
Do not exceed the recommended daily intake. Not suitable for use during pregnancy or breastfeeding. Keep out of reach of children. Store in a cool, dry place away from light. This product is a dietary supplement and is not a substitute for a varied, balanced diet and a healthy lifestyle.`,ingredient_reference:`**Organic Bear's Garlic (Allium ursinum) Leaf Extract**
Bear's garlic is a wild Allium plant that grows in the shady woodlands of Europe, renowned as "forest garlic." It is one of the most sulfur-rich plants known, with sulfur present in organic compound forms such as alliin. In the body, these compounds are important precursors for synthesizing key antioxidant and detoxification molecules like glutathione, supporting the liver's Phase II detoxification pathways. The form used is a whole-leaf liquid ethanol extract, which helps preserve the full spectrum of phytonutrients, including sulfides, volatile oils, flavonoids, and plant-based magnesium and iron. It is particularly suitable for those who feel their body needs gentle cleansing support or whose diet lacks Allium vegetables. In this formula, it is the sole functional ingredient. Its contained elements—sulfur, magnesium, iron—work in natural synergy within the body, jointly supporting energy metabolism and cellular protection mechanisms.`}}},{name:"Mannayan BIO-BÄRLAUCH (Würze)",url:"https://mannayan.com/Mannayan-BIO-BAERLAUCH-Wuerze/010109",price:["24,90 €"],product_number:"010109",quantity:["50 ml"],image_url:"https://mannayan.com/media/9a/3b/e2/1658912567/Baerlauch_oP%2070.jpg?ts=1658912567",image_local:"images/Baerlauch_oP%2070.jpg",content:{cn:{label:`Mannayan 有机熊葱精华
自然的硫与矿物质宝库
• 支持新陈代谢与免疫系统
• 提供植物性镁与铁
• 源自欧洲硫含量最高的植物
• 有机认证，纯净配方
50毫升 / 每日2次，每次20滴
欧盟有机认证 | 素食者适用 | 无麸质、无乳制品、无人工添加`,short_description:`你是否感觉身体需要一些自然的支持，却又不想依赖复杂的化学合成品？日常饮食中，我们可能难以获取足够多样的植物营养素来维持内在的平衡。

熊葱，这种被称为“森林大蒜”的野生植物，在欧洲传统中被珍视已久。它不仅是欧洲已知硫含量最高的植物之一，还天然富含植物形态的镁和铁。这些元素共同构成了支持身体基础代谢与防御系统的重要基石。

这款有机熊葱精华，采用其新鲜叶片的液态提取物，以温和的有机乙醇为载体，旨在完整保留植物的天然活性。它提供了一种从根本入手的自然调理方式，帮助补充日常饮食可能缺失的特定营养素。

每瓶50毫升，建议每日两次，每次20滴，溶于水或果汁中饮用。产品获得欧盟有机认证，配方纯净，不含麸质、乳制品、人工色素或防腐剂，适合素食者。`,long_description:`当身体的代谢节奏感觉有些迟缓，或是寻求一种更温和、更根本的方式来支持内在的活力时，人们往往会将目光转向自然。熊葱，这种在春季森林中散发独特气息的植物，其价值远不止于调味。它承载着一种整体性的滋养理念，从矿物质平衡入手，为身体的日常运转提供 foundational 支持。

**食物态技术与提取工艺**
本产品采用熊葱新鲜叶片的液态提取物。提取过程使用经过认证的有机乙醇，这是一种传统而有效的溶剂，能够温和地将植物中的活性成分，包括那些珍贵的含硫化合物、矿物质和植物营养素，从细胞结构中释放并稳定保存。这种“食物态”的提取方式，旨在提供一种更易于身体识别和利用的植物精华，而非孤立的化学成分。

**完整的作用体系**
熊葱的作用源于其成分的天然协同。丰富的有机硫化合物是许多体内关键代谢过程的参与者，有助于维持细胞环境的健康。同时，它所含的植物性镁，是能量产生和肌肉神经功能所需的矿物质；而其天然的铁元素，则对血液健康和氧气运输至关重要。这三种核心要素——硫、镁、铁——在熊葱中以一种天然平衡的形式存在，共同作用于新陈代谢的推动、免疫系统的正常应答以及整体能量水平的维护，形成了一个内在支持的三角体系。

**适合的人群**
这款精华适合那些注重从饮食中获取全面营养，但意识到现代生活方式可能带来挑战的人。它适用于日常饮食中绿色蔬菜摄入有限者、寻求天然矿物质补充来源的素食者，或是在特定生命阶段（如成长期、或随着年龄增长）对铁、镁等营养素有额外关注的人群。它也为那些偏好使用完整植物提取物而非单一合成营养素的人，提供了一个纯净的选择。

**纯净与成分完整性**
产品的核心是来自欧盟有机认证农场的熊葱。整个生产过程遵循严格的有机标准，确保植物在无合成农药和化肥的环境中生长。配方极其简洁：只有有机熊葱提取物和用于提取的有机乙醇及纯净水。产品明确不含麸质、乳糖、人工防腐剂、色素和香料，也未使用转基因原料。这份纯净清单不是营销话术，而是对成分来源和制造过程透明度的基本承诺。

**健康管理者与搭配建议**
对于健康领域的专业人士而言，这是一款可以作为基础调理方案一部分的工具。其温和、系统的特性，使其易于与其他针对性的营养支持方案相结合。例如，在关注心血管健康、消化系统支持或整体排毒代谢的复合方案中，它可以作为提供关键矿物质和植物硫化合物的基础组成部分。临床背景的从业者会欣赏其有机来源和完整的植物基质。

**用法与剂量**
建议每日服用两次，每次20滴。可将滴剂直接加入一杯水、草本茶或果汁中，搅拌均匀后饮用。此剂量旨在提供日常支持，可根据个人体质或在专业健康顾问的指导下进行微调。一瓶50毫升的容量，大约可供三至四周的日常使用。

**重要提示**
请勿超过推荐的每日食用量。本产品不适用于孕妇、哺乳期妇女。应存放于儿童无法触及之处，避光、阴凉、干燥保存。膳食补充剂不能替代均衡多样的饮食和健康的生活方式。如有健康状况或正在服用药物，使用前请咨询您的健康顾问。`,ingredient_reference:`**有机熊葱（Allium ursinum）叶片提取物**
熊葱是一种野生葱属植物，在欧洲的林地中自然生长，被誉为欧洲硫含量最高的植物。它所含的硫主要以有机硫化合物的形式存在，这些化合物是体内许多酶反应和抗氧化防御系统的重要组成部分。产品采用其新鲜叶片的液态提取物，最大限度地保留了植物的全谱活性成分。这种形式特别适合那些寻求通过完整植物来支持新陈代谢、免疫健康及矿物质营养的人群。在配方中，它是所有益处的唯一来源，其含有的硫、镁、铁等成分天然共存，协同发挥支持作用。

**有机乙醇（提取溶剂）**
本品使用有机认证的乙醇作为提取溶剂，最终产品中乙醇浓度为20% vol。乙醇在草药提取中是一种经典且有效的媒介，能够高效地溶解并萃取出熊葱中的水溶性和醇溶性活性物质，如多种硫苷、矿物质和抗氧化成分。这种提取方式得到的酊剂，其生物利用度通常较高，且易于保存。在配方中，它不仅是载体，也参与了活性成分的稳定和递送过程，确保植物精华以易于吸收的形式呈现。`},en:{label:`Mannayan Organic Wild Garlic (Bear's Garlic) Extract
A Natural Treasury of Sulfur & Minerals
• Supports Metabolism & Immune System
• Provides Plant-Based Magnesium & Iron
• Sourced from Europe's Highest Sulfur-Content Plant
• Organic Certified, Pure Formula
50 ml / Twice Daily, 20 Drops per Serving
EU Organic Certified | Suitable for Vegetarians | Gluten-Free, Dairy-Free, No Artificial Additives`,short_description:`Do you feel your body needs some natural support, but you don't want to rely on complex synthetic chemicals? In our daily diets, it can be difficult to obtain a sufficiently diverse range of phytonutrients to maintain internal balance.

Wild garlic, also known as 'forest garlic,' is a wild plant long cherished in European tradition. It is not only one of the plants with the highest known sulfur content in Europe but also naturally rich in plant-based magnesium and iron. These elements together form important building blocks that support the body's foundational metabolism and defense systems.

This organic wild garlic extract uses a liquid extract of its fresh leaves, with gentle organic ethanol as the carrier, aiming to fully preserve the plant's natural activity. It offers a natural, root-level approach to wellness, helping to supplement specific nutrients that may be missing from the daily diet.

Each bottle contains 50 ml. The recommended usage is twice daily, 20 drops each time, dissolved in water or juice. The product is EU Organic Certified, with a pure formula free from gluten, dairy, artificial colors, or preservatives, and is suitable for vegetarians.`,long_description:`When the body's metabolic rhythm feels a bit sluggish, or when seeking a gentler, more fundamental way to support inner vitality, people often turn to nature. Wild garlic, a plant that emits a unique aroma in spring forests, offers value far beyond seasoning. It embodies a holistic concept of nourishment, starting from mineral balance, to provide foundational support for the body's daily functions.

**Food-State Technology & Extraction Process**
This product uses a liquid extract of fresh wild garlic leaves. The extraction process employs certified organic ethanol, a traditional and effective solvent that gently releases and stabilizes the plant's active components—including precious sulfur-containing compounds, minerals, and phytonutrients—from the cellular structure. This 'food-state' extraction method aims to deliver a plant essence that is more easily recognized and utilized by the body, rather than isolated chemical compounds.

**A Complete System of Action**
Wild garlic's benefits stem from the natural synergy of its components. Its abundant organic sulfur compounds participate in many key metabolic processes within the body, helping to maintain a healthy cellular environment. Simultaneously, its plant-based magnesium is a mineral required for energy production and muscle-nerve function, while its natural iron is crucial for blood health and oxygen transport. These three core elements—sulfur, magnesium, and iron—exist in wild garlic in a naturally balanced form, working together to support metabolic drive, the immune system's normal response, and the maintenance of overall energy levels, forming an internal support triangle.

**Suitable For**
This extract is suitable for those who focus on obtaining comprehensive nutrition from their diet but recognize the challenges posed by modern lifestyles. It is ideal for individuals with limited intake of green vegetables in their daily diet, vegetarians seeking natural mineral sources, or those with extra focus on nutrients like iron and magnesium during specific life stages (such as growth periods or with aging). It also offers a pure choice for those who prefer using whole plant extracts over single synthetic nutrients.

**Purity & Ingredient Integrity**
The product's core is wild garlic sourced from EU Organic Certified farms. The entire production process follows strict organic standards, ensuring the plants are grown without synthetic pesticides or fertilizers. The formula is exceptionally simple: only organic wild garlic extract, and the organic ethanol and purified water used for extraction. The product is clearly free from gluten, lactose, artificial preservatives, colors, and flavors, and does not use genetically modified ingredients. This purity list is not marketing language but a fundamental commitment to transparency regarding ingredient sourcing and manufacturing.

**For Health Professionals & Pairing Suggestions**
For professionals in the health field, this is a tool that can be part of a foundational wellness protocol. Its gentle, systemic nature makes it easy to combine with other targeted nutritional support plans. For example, within comprehensive protocols focused on cardiovascular health, digestive system support, or overall detoxification and metabolism, it can serve as a foundational component providing key minerals and plant sulfur compounds. Clinically oriented practitioners will appreciate its organic origin and whole-plant matrix.

**Usage & Dosage**
The recommended intake is twice daily, 20 drops per serving. The drops can be added directly to a glass of water, herbal tea, or juice, stirred well, and consumed. This dosage is designed for daily support and can be fine-tuned based on individual constitution or under the guidance of a professional health advisor. One 50 ml bottle provides approximately three to four weeks of daily use.

**Important Notes**
Do not exceed the recommended daily intake. This product is not suitable for pregnant or breastfeeding women. Keep out of reach of children. Store in a cool, dry place away from light. Food supplements are not a substitute for a balanced, varied diet and a healthy lifestyle. If you have a health condition or are taking medication, please consult your health advisor before use.`,ingredient_reference:`**Organic Wild Garlic (Allium ursinum) Leaf Extract**
Wild garlic is a wild allium plant that grows naturally in European woodlands and is renowned as the plant with the highest sulfur content in Europe. Its sulfur is primarily present in the form of organic sulfur compounds, which are important components of many enzymatic reactions and the antioxidant defense system within the body. The product uses a liquid extract of its fresh leaves, maximizing the retention of the plant's full-spectrum active components. This form is particularly suitable for those seeking to support metabolism, immune health, and mineral nutrition through whole plants. In the formula, it is the sole source of all benefits, with its naturally co-existing components like sulfur, magnesium, and iron working synergistically.

**Organic Ethanol (Extraction Solvent)**
This product uses organic certified ethanol as the extraction solvent, with a final ethanol concentration of 20% vol. Ethanol is a classic and effective medium in herbal extraction, efficiently dissolving and extracting both water-soluble and alcohol-soluble active substances from wild garlic, such as various glucosinolates, minerals, and antioxidant components. The tincture obtained through this extraction method typically has high bioavailability and is easy to preserve. In the formula, it not only acts as a carrier but also participates in stabilizing and delivering the active components, ensuring the plant essence is presented in an easily absorbable form.`}}},{name:"Mannayan Bio-Cook Island Noni Saft",url:"https://mannayan.com/Mannayan-Bio-Cook-Island-Noni-Saft/207",price:["14,90 €"],product_number:"207",quantity:["330 ml"],image_url:"https://mannayan.com/media/a5/51/85/1596464542/Cook%20Island%20Noni%20Saft.jpg?ts=1623761749",image_local:"images/Cook%20Island%20Noni%20Saft.jpg",content:{cn:{label:`曼纳岩有机库克岛诺丽果汁
源自太平洋的生命之果
• 支持内在平衡与活力
• 提供天然营养素与微量元素
• 促进日常整体健康
• 源自纯净有机种植
330毫升装 | 每日30毫升
欧盟有机认证 | 纯素 | 无麸质 | 无添加`,short_description:`有时，身体会发出一些微妙的信号，比如感觉精力不济、状态难以调整，或是单纯地觉得需要一些来自自然的支持。这不是疾病，而是现代生活节奏下，身体寻求内在平衡的一种表达。

曼纳岩有机库克岛诺丽果汁，是将源自南太平洋的传统果实——诺丽果，以最直接的方式呈现。它并非提取物或浓缩还原汁，而是100%的纯原汁。这意味着你品尝到的，是果实本身完整的风味与内涵，未经任何稀释或风味修饰。

在波利尼西亚的传统中，诺丽果被视为一种具有多种用途的食物资源。我们通过有机种植和温和的加工方式，力求保留这份天然的完整性。其独特的风味，正是其纯粹无添加的证明。

每瓶330毫升，建议每日饮用30毫升。它获得欧盟有机认证，纯素配方，不含麸质、乳糖、添加糖或任何人工添加剂。`,long_description:`你是否经历过这样的时刻：并非生病，却总觉得缺了点什么，精力像被悄悄抽走，恢复起来也比以往慢？睡眠似乎不够解乏，白天的专注力也难以持续。这些细微的感受，常常是身体内在系统需要关注与支持的信号。它提醒我们，在忙碌的日常之外，需要回归到更基础、更根本的层面去滋养自身。

**食物态的完整呈现**
我们相信，最有效的滋养往往以最接近自然的状态存在。这款诺丽果汁采用100%原汁灌装，非浓缩还原。这意味着从成熟的诺丽果实到瓶中的汁液，没有经过提取、分离或重构的步骤。果实中天然共存的各类营养素、矿物质与微量元素，得以以其原始的、相互协同的复合形态保存下来。这种“食物态”的完整性，是任何单一成分提取物难以比拟的。灌装于棕色玻璃瓶中，是为了更好地保护这些光敏性成分，确保每一口都充满活性。

**一个协同作用的整体**
诺丽果的价值不在于某一种明星化合物，而在于其作为一个食物整体所蕴含的复杂谱系。果实中天然含有的多种成分共同作用，支持身体的基础代谢功能与内在平衡机制。它们像是一个微型的生态系统，协同工作，为身体提供广泛的滋养基础。我们的理念是提供这个完整的食物体系，让身体这个更精妙的系统，去识别、选取并利用它所需要的部分。这不是针对单一目标的定向干预，而是为身体的自我调节提供一份来自土地的、全面的资源支持。

**适合这些生活情境的你**
它适合那些在高压工作后感觉恢复缓慢，希望从自然中寻找温和支持的人；适合饮食结构单一、渴望为日常补充多样化植物营养素的人；也适合在季节更替时，感觉身体需要额外关注与滋养的人。对于追求纯净饮食、遵循素食或需要避开麸质、乳糖的饮食方式者，这瓶纯粹的果汁能无缝融入你的生活。它更像是一种日常的饮食补充，一种可以融入晨间或餐前仪式的液态滋养。

**纯净，是唯一的标准**
产品的核心承诺是纯净。原料来自获得欧盟有机认证的库克岛种植园，从土壤开始就杜绝了合成农药与化肥。整个生产过程，除了必要的物理压榨与灌装，再无其他。配料表只有一项：100%有机诺丽原汁。不含任何添加糖来掩盖其原本的醇厚风味，没有防腐剂、人工色素或香料。这份坦诚的清单，让你对自己摄入的内容一目了然，纯净本身即是一种效力。

**用法与剂量**
使用前请摇晃均匀。建议每日饮用30毫升，最好在餐前约30分钟食用。可以直接饮用，也可以与其他果汁混合以调节风味。开瓶后请冷藏保存，并在14日内饮用完毕，以保持最佳的新鲜度与活性。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的日常饮食。请勿超过推荐每日食用量。请置于儿童无法触及之处，于阴凉干燥处避光保存。若瓶口密封条缺失，请勿食用。`,ingredient_reference:`**有机诺丽果原汁**
诺丽果是生长于南太平洋群岛的一种果实，学名Morinda citrifolia L.，在波利尼西亚文化中有着悠久的食用历史。它并非作为药物使用，而是作为一种营养丰富的传统食物资源。其价值来源于果实作为一个整体所包含的多种天然化合物、矿物质（如钾、钙）和微量元素的复合组合。在配方中，它以100%原汁的完整食物形式存在，这意味着所有成分均以其天然的比例和结合状态呈现，可能比单一成分更容易被身体识别和利用。它适合那些寻求从天然完整食物中获取广泛营养支持，并重视饮食纯净性的人群。作为配方中的唯一成分，它代表了极简与纯粹的理念，其效力正源于这种未经分割与重构的完整性。`},en:{label:`Manna Rock Organic Cook Islands Noni Juice
The Life Fruit from the Pacific
• Supports Inner Balance & Vitality
• Provides Natural Nutrients & Trace Elements
• Promotes Daily Overall Wellness
• Sourced from Pure Organic Cultivation
330ml Bottle | 30ml Daily Serving
EU Organic Certified | Vegan | Gluten-Free | No Additives`,short_description:`Sometimes, the body sends subtle signals—like feeling low on energy, struggling to find your rhythm, or simply sensing a need for some support from nature. This isn't illness; it's the body's way of seeking inner balance amidst the pace of modern life.

Manna Rock Organic Cook Islands Noni Juice presents the traditional South Pacific fruit—the noni—in its most direct form. This is not an extract or a concentrate; it is 100% pure, raw juice. What you taste is the fruit's complete flavor and essence, undiluted and unaltered.

In Polynesian tradition, the noni fruit is regarded as a versatile food resource. Through organic cultivation and gentle processing, we strive to preserve this natural integrity. Its distinctive flavor is a testament to its purity and lack of additives.

Each 330ml bottle suggests a daily serving of 30ml. It is EU Organic Certified, vegan, and free from gluten, lactose, added sugars, and any artificial additives.`,long_description:`Have you ever experienced moments when you're not ill, yet feel something is missing—your energy seems quietly drained, recovery feels slower, sleep doesn't quite refresh, and daytime focus is hard to sustain? These subtle sensations are often signals that your inner systems need attention and support. They remind us that beyond busy routines, we need to return to a more fundamental level to nourish ourselves.

**Presented in Its Whole Food State**
We believe the most effective nourishment exists closest to its natural state. This noni juice is bottled as 100% raw juice, not from concentrate. This means from ripe noni fruit to the juice in the bottle, there are no steps of extraction, separation, or reconstruction. The various nutrients, minerals, and trace elements that naturally coexist in the fruit are preserved in their original, synergistic complex form. This "whole food" integrity is something no single-ingredient extract can match. Bottled in amber glass to protect these light-sensitive components, ensuring every sip is full of vitality.

**A Synergistic Whole**
The value of noni fruit lies not in any one star compound, but in the complex spectrum it contains as a whole food. The fruit's naturally occurring components work together to support the body's foundational metabolic functions and internal balance mechanisms. They function like a miniature ecosystem, working in synergy to provide a broad base of nourishment. Our philosophy is to offer this complete food system, allowing the body—a far more sophisticated system—to recognize, select, and utilize what it needs. This is not a targeted intervention for a single goal, but a comprehensive, earth-derived resource to support the body's self-regulation.

**For You in These Life Situations**
It's for those who feel slow to recover after high-pressure work and seek gentle support from nature; for those with limited dietary variety who wish to supplement their daily intake with diverse phytonutrients; and for those who feel their bodies need extra attention and nourishment during seasonal transitions. For anyone pursuing a clean diet, following a vegan lifestyle, or needing to avoid gluten or lactose, this pure juice integrates seamlessly into your life. It's more like a daily dietary addition, a liquid nourishment that can become part of a morning or pre-meal ritual.

**Purity is the Only Standard**
The product's core promise is purity. Ingredients come from EU Organic Certified plantations in the Cook Islands, free from synthetic pesticides and fertilizers from the soil up. Beyond necessary physical pressing and bottling, nothing else is added. The ingredient list has only one entry: 100% Organic Noni Raw Juice. No added sugars to mask its naturally robust flavor, no preservatives, artificial colors, or flavors. This transparent list lets you see exactly what you're consuming—purity itself is a form of potency.

**Usage & Dosage**
Shake well before use. The recommended daily serving is 30ml, ideally taken about 30 minutes before a meal. It can be consumed directly or mixed with other juices to adjust the flavor. After opening, refrigerate and consume within 14 days to maintain optimal freshness and activity.

**Important Notes**
This product is a dietary supplement and is not a substitute for a balanced and varied daily diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's seal is missing.`,ingredient_reference:`**Organic Noni Fruit Raw Juice**
Noni fruit is a fruit native to the South Pacific islands, scientifically known as Morinda citrifolia L., with a long history of dietary use in Polynesian culture. It is not used as a medicine but as a nutrient-rich traditional food resource. Its value stems from the complex combination of various natural compounds, minerals (such as potassium and calcium), and trace elements contained within the fruit as a whole. In this formulation, it exists as a 100% raw juice—a whole food—meaning all components are presented in their natural proportions and bound states, which may be more readily recognized and utilized by the body compared to isolated ingredients. It is suitable for those seeking broad nutritional support from natural, whole foods and who value dietary purity. As the sole ingredient in the formulation, it embodies a philosophy of minimalism and purity; its efficacy arises precisely from this undivided, un-reconstructed integrity.`}}},{name:"Mannayan Bio-Koriander - Würze",url:"https://mannayan.com/Mannayan-Bio-Koriander-Wuerze/010117",price:["24,90 €"],product_number:"010117",quantity:["50 ml"],image_url:"https://mannayan.com/media/5a/d6/9f/1658912619/KorianderWuerze_oP%2070.jpg?ts=1658912619",image_local:"images/KorianderWuerze_oP%2070.jpg",content:{cn:{label:`Mannayan 有机香菜酊剂
草本精华，自然平衡
• 支持消化系统自然节律
• 源自有机种植香菜
• 20%有机乙醇萃取
• 纯净配方，无麸质、无乳制品
• 50毫升装，每日两次，每次20滴
欧盟有机认证 ÖkoP-zertifiziert`,short_description:`你是否感觉饭后有些沉重，消化过程似乎不如以往顺畅？那种轻微的腹胀感，或是食物在体内停留过久的感觉，常常让人感到不适。

Mannayan 有机香菜酊剂，源自古老的草本智慧。香菜作为一种传统香料，其价值远不止于调味。我们采用整株有机种植的香菜，通过温和的有机乙醇进行萃取，旨在捕捉其完整的植物精华。

它以一种温和的方式，支持身体自身的消化节律，帮助缓解因消化迟缓带来的不适感。这不是一种强效的干预，而是一种回归自然平衡的日常支持。

每瓶50毫升，建议每日两次，每次20滴，溶于水或果汁中服用。配方纯净，不含麸质、乳制品、人工色素或防腐剂，并获得欧盟有机认证。`,long_description:`一顿美餐之后，本应是满足与放松的时刻，但有时身体却传来不同的信号——轻微的饱胀、迟缓的消化，或是那种食物未能顺畅转化的感觉。这些细微的迹象，常常是身体内部节律需要温和调整的提示。

**食物态萃取技术**
我们深知，植物的完整价值在于其天然复合的状态。因此，我们摒弃了仅仅提取单一化合物的做法。Mannayan 有机香菜酊剂采用整株有机认证的香菜（Coriandrum sativum），通过特定浓度的有机乙醇进行浸提。这种传统的酊剂制备方法，旨在温和地溶解并保存香菜中多种协同作用的植物化合物，包括其天然的挥发性精油成分，最终形成20%乙醇浓度的液态萃取物。这种形式不仅保留了植物的“食物态”完整性，也使其更易于身体识别和利用。

**完整体系的温和支持**
香菜作为一种古老的草本植物，其作用并非通过单一的强力途径实现。我们将其视为一种温和的调节者。酊剂中的多种植物成分协同工作，主要旨在支持消化系统的自然蠕动与分泌功能，帮助缓解因消化过程迟缓可能伴随的腹部不适感。它不替代身体自身的功能，而是为消化过程提供一个顺畅的环境，促进食物更有效地被分解和吸收，从而帮助减轻饱腹后的沉重感。这是一种着眼于整体平衡的支持。

**适合人群**
这款酊剂适合那些在饮食后容易感到消化迟缓、腹部有轻微胀满感，并寻求一种温和、自然的草本方式来支持日常消化舒适度的人。它也适合饮食结构多样、希望从整体上关照消化系统健康节律的成年人。对于遵循纯净饮食原则的素食者、纯素者，或对麸质、乳制品敏感的人群，其纯净配方提供了安心的选择。

**纯净与成分完整性**
纯净是效力的基础。我们只使用两种成分：经过认证的有机香菜，以及由有机乙醇和纯化水调配而成的萃取溶剂。产品不含麸质、乳制品（包括乳糖）、人工防腐剂、人工色素或香料，且非转基因。整个生产过程符合欧盟有机农业标准（DE-ÖKO-037），并获得ÖkoP有机认证。我们相信，真正的健康支持始于源头纯粹的成分。

**健康管理者与经销商：临床背景与方案搭配**
许多自然疗法医师和健康顾问将香菜酊剂视为日常消化支持方案中的基础温和选项。由于其性质温和，它常被建议作为综合性健康管理计划的一部分，可能与针对肠道菌群平衡、肝脏支持或压力管理的其他自然疗法产品协同使用。专业健康管理者会根据个体的具体状况，建议合适的搭配与使用周期。

**用法与剂量**
建议成人每日服用两次，每次20滴。将滴剂加入一杯水或果汁中，搅拌均匀后饮用。请勿直接口服原液。持续使用可获得更佳的支持效果。使用前请摇匀。

**重要提示**
本品为食品补充剂，不能替代均衡多样的饮食和健康的生活方式。请勿超过每日建议用量。孕妇、哺乳期妇女不宜使用。请置于儿童无法触及之处，避光、阴凉干燥处保存。若密封带缺失，请勿食用。`,ingredient_reference:`**有机香菜（Coriandrum sativum）液态萃取物**
香菜是一种一年生草本植物，其叶片和种子在全球许多菜系中都被用作香料。在传统使用中，整株香菜都被认为具有价值。我们使用的是经过有机认证的整株香菜，通过乙醇萃取其全谱植物精华。这种萃取物含有香菜天然的挥发性精油复合物及其他植物成分。在体内，这些成分协同作用，主要被用于温和地支持消化系统的舒适度与正常功能，帮助缓解偶尔的消化迟缓和腹部胀满感。它特别适合那些寻求通过温和草本方式支持日常消化过程的人群。在本配方中，它是唯一的功能性植物成分，其价值通过有机种植和完整的酊剂萃取工艺得以最大化保留。

**有机乙醇溶剂（20% vol）**
我们使用由96%有机乙醇和药典级纯化水调配而成的20%浓度乙醇溶液作为萃取溶剂。乙醇是一种历史悠久且有效的植物成分提取媒介，能够较好地溶解香菜中的多种活性化合物，包括亲水性和部分亲脂性成分。这种浓度的乙醇既能有效萃取，又使得最终产品口感相对温和，易于服用。它确保了香菜萃取物的稳定性和生物可利用度。对于关注成分来源纯净度的使用者而言，有机来源的乙醇是更安心的选择。`},en:{label:`Mannayan Organic Cilantro Tincture
Herbal Essence, Natural Balance
• Supports the natural rhythm of the digestive system
• Sourced from organically grown cilantro
• 20% organic ethanol extraction
• Pure formula, gluten-free, dairy-free
• 50 ml bottle, 20 drops twice daily
EU Organic Certified ÖkoP-zertifiziert`,short_description:`Do you sometimes feel a bit heavy after meals, as if your digestion isn't as smooth as it used to be? That slight feeling of bloating, or the sense that food lingers a bit too long, can often be uncomfortable.

Mannayan Organic Cilantro Tincture is born from ancient herbal wisdom. Cilantro, a traditional spice, holds value far beyond flavoring. We use the whole, organically grown cilantro plant, gently extracted with organic ethanol to capture its complete botanical essence.

It works in a gentle way to support the body's own digestive rhythm, helping to ease the discomfort that can come with sluggish digestion. This is not a forceful intervention, but a daily support for returning to natural balance.

Each 50 ml bottle suggests a dosage of 20 drops, twice daily, taken in water or juice. The formula is pure, free from gluten, dairy, artificial colors, or preservatives, and is certified organic by the EU.`,long_description:`After a satisfying meal, it should be a time of contentment and relaxation, but sometimes the body sends different signals—a slight fullness, sluggish digestion, or a feeling that food isn't being processed smoothly. These subtle signs are often hints that the body's internal rhythm could benefit from gentle adjustment.

**Food-State Extraction Technology**
We understand that a plant's full value lies in its naturally complex state. Therefore, we avoid extracting just single compounds. Mannayan Organic Cilantro Tincture uses the whole, certified organic cilantro plant (Coriandrum sativum), macerated in a specific concentration of organic ethanol. This traditional tincture preparation method aims to gently dissolve and preserve the various synergistic plant compounds in cilantro, including its natural volatile essential oils, resulting in a 20% ethanol liquid extract. This form not only retains the plant's 'food-state' integrity but also makes it more recognizable and usable by the body.

**Gentle Support for the Whole System**
Cilantro, an ancient herb, doesn't work through a single, forceful pathway. We see it as a gentle modulator. The multiple plant constituents in the tincture work together, primarily aiming to support the natural peristalsis and secretory functions of the digestive system, helping to alleviate the abdominal discomfort that can accompany a slow digestive process. It doesn't replace the body's own functions but provides a smoother environment for digestion, promoting more efficient breakdown and absorption of food, thereby helping to reduce that heavy feeling after eating. This is support focused on overall balance.

**Who It's For**
This tincture is suitable for those who tend to experience sluggish digestion and mild abdominal fullness after meals and are seeking a gentle, natural herbal way to support daily digestive comfort. It's also suitable for adults with diverse diets who wish to holistically care for the healthy rhythm of their digestive system. For vegetarians, vegans, or those sensitive to gluten or dairy following pure dietary principles, its clean formula offers a reassuring choice.

**Purity & Ingredient Integrity**
Purity is the foundation of efficacy. We use only two ingredients: certified organic cilantro and an extraction solvent made from organic ethanol and purified water. The product is free from gluten, dairy (including lactose), artificial preservatives, artificial colors or flavors, and is non-GMO. The entire production process complies with EU organic farming standards (DE-ÖKO-037) and is ÖkoP organic certified. We believe true health support begins with ingredients of pure origin.

**For Health Practitioners & Retailers: Clinical Context & Protocol Pairing**
Many naturopathic doctors and health consultants view cilantro tincture as a foundational, gentle option in daily digestive support protocols. Due to its gentle nature, it is often recommended as part of a comprehensive health management plan, potentially used synergistically with other natural remedy products targeting gut flora balance, liver support, or stress management. Professional health practitioners will suggest appropriate pairings and usage cycles based on an individual's specific situation.

**Usage & Dosage**
Recommended for adults: 20 drops, twice daily. Add the drops to a glass of water or juice, stir, and drink. Do not take the liquid concentrate directly. Consistent use yields better supportive effects. Shake well before use.

**Important Notes**
This product is a food supplement and is not a substitute for a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Not suitable for use during pregnancy or breastfeeding. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the security seal is missing.`,ingredient_reference:`**Organic Cilantro (Coriandrum sativum) Liquid Extract**
Cilantro is an annual herb whose leaves and seeds are used as a spice in many global cuisines. In traditional use, the whole plant is considered valuable. We use certified organic whole cilantro, extracting its full-spectrum botanical essence via ethanol. This extract contains cilantro's natural complex of volatile essential oils and other plant constituents. In the body, these components work synergistically, primarily used to gently support digestive comfort and normal function, helping to ease occasional sluggish digestion and abdominal fullness. It is particularly suitable for those seeking a gentle herbal way to support their daily digestive process. In this formula, it is the sole functional botanical ingredient, its value maximally preserved through organic cultivation and the complete tincture extraction process.

**Organic Ethanol Solvent (20% vol)**
We use a 20% concentration ethanol solution, made from 96% organic ethanol and pharmacopoeia-grade purified water, as the extraction solvent. Ethanol is a time-honored and effective medium for extracting plant constituents, capable of dissolving many of cilantro's active compounds well, including both hydrophilic and some lipophilic components. This ethanol concentration is effective for extraction while making the final product relatively mild-tasting and easy to take. It ensures the stability and bioavailability of the cilantro extract. For users concerned about ingredient source purity, organically sourced ethanol is a more reassuring choice.`}}},{name:"Mannayan Bio-Schwarzkümmelöl 100 ml",url:"https://mannayan.com/Mannayan-Bio-Schwarzkuemmeloel-100-ml/010193",price:["13,50 €"],product_number:"010193",quantity:["100 ml"],image_url:"https://mannayan.com/media/04/97/f8/1604558352/Schwarzkuemmeloel_100ml.jpg?ts=1624948528",image_local:"images/Schwarzkuemmeloel_100ml.jpg",content:{cn:{label:`曼纳延有机黑种草籽油
源自埃及的古老平衡
• 支持呼吸系统舒适
• 促进整体平衡与适应力
• 提供必需脂肪酸
• 源自有机种植，首道冷压
100毫升 | 每日3次，每次½茶匙（1.5-2毫升）
欧盟有机认证 | 纯素 | 无麸质 | 无人工添加`,short_description:`你是否感觉身体需要一些额外的支持来应对季节变化或日常压力？那种希望从内部获得更稳固基础的感受，是许多人寻求自然调理方式的起点。

曼纳延有机黑种草籽油源自埃及有机种植的黑种草籽，通过首道冷压工艺完整保留其天然养分。它富含多种不饱和脂肪酸，特别是亚油酸，这些是身体无法自行制造、需要从外部获取的基础物质。

这种油不是针对单一问题的快速方案，而是为身体的整体平衡提供广泛支持。它帮助维持呼吸系统的舒适状态，并支持身体在面对内外变化时的自然适应能力。其作用温和而全面，适合作为长期健康维护的一部分。

每瓶含100毫升纯油。建议每日3次，每次½茶匙（约1.5-2毫升），随餐或餐前服用，持续至少6个月。本品为100%纯黑种草籽油，获得欧盟有机认证，适合纯素者，不含麸质、乳制品、防腐剂及人工色素香料。`,long_description:`当季节更替时感到呼吸不那么顺畅，或是觉得身体的反应不如以往那般从容，这些细微的信号常常提醒我们，内在的平衡需要关注。这不是疾病，而是一种状态——一种身体基础需要巩固与滋养的状态。

**食物态技术与工艺**
我们深知，成分的天然形态和提取方式决定了其最终能否被身体有效识别与利用。曼纳延黑种草籽油采用首道冷压技术，在低温下从埃及有机种植的黑种草籽中压榨而出。这种方法避免了高温对油脂和天然挥发性成分的破坏，完整保留了种子中多种不饱和脂肪酸、天然维生素及微量元素的原始构象。它不是经过高度提纯或合成的单一化合物，而是以食物原本的复合状态呈现，这使得身体能够以其熟悉的方式接收并运用这些养分。

**完整的支持体系**
黑种草籽油的作用源于其复杂的天然构成。其中丰富的亚油酸等必需脂肪酸，是构建细胞膜、支持细胞间通讯的基础材料。同时，油中天然含有的其他活性成分协同作用，共同营造一个支持身体自我调节的环境。它不强行干预某个特定生理过程，而是为多个维持健康所必需的系统——尤其是呼吸系统和免疫应答系统——提供广泛的营养支持，帮助身体在面对环境变化时保持稳定与弹性。这种从根本着手的支持，追求的是长期、整体的和谐，而非短暂的表面效果。

**适合的人群**
这款油适合那些在换季时格外留意身体感受，希望为呼吸健康打下坚实基础的人。也适合生活节奏紧张、寻求一种温和方式来支持身体整体适应力与恢复力的人士。对于注重饮食纯净、偏好从天然食物中获取营养支持的素食者和纯素者，它提供了一个简单而直接的脂肪酸补充来源。它更像是一位静默的伙伴，融入每日饮食，为持续的健康管理提供底层的滋养。

**纯净与成分完整性**
瓶中所装，唯有油本身。100%来自埃及有机农场的黑种草籽，经过一次冷压便直接装瓶。没有载体油稀释，没有人工合成的添加剂、色素、香料或防腐剂。欧盟有机认证确保了从种植到加工的全程可追溯与高标准。我们相信，真正的纯净意味着尽可能少的加工步骤，让自然赋予的成分以其最本真的形态发挥作用。这份完整性，是产品效力的核心所在。

**用法与剂量**
建议每日服用三次，每次半茶匙（约1.5至2毫升），可在餐前或随餐服用，并用足量水送服。为了给身体足够的时间响应这种基础性的滋养，建议持续使用至少六个月。你可以直接口服，也可将其拌入酸奶、沙拉或凉菜中食用。100毫升的容量经过精心计算，足以支持数月的日常使用。

**重要提示**
请勿超过推荐的每日食用量。本产品是膳食补充剂，不能替代均衡多样的饮食。请置于儿童无法触及之处，避光、阴凉、干燥保存。如果瓶口的密封条缺失，请勿食用。在开始任何新的补充剂计划前，咨询您的健康顾问总是一个明智的选择。`,ingredient_reference:`**黑种草籽油**
黑种草籽油是从黑种草植物的种子中冷压提取的天然油脂，这种植物传统上在亚洲和东方地区种植。它在体内主要作为必需脂肪酸的来源，特别是亚油酸，这些脂肪酸是构建健康细胞膜和合成一系列重要信号分子所必需的基础物质。曼纳延选用埃及有机种植的黑种草籽，并通过首道冷压获取，最大程度保留了脂肪酸的天然构型以及种子中伴随的微量营养素和天然挥发性成分。它特别适合那些希望通过天然食物来源补充必需脂肪酸，并寻求对呼吸健康和整体平衡提供广泛支持的人群。作为配方中唯一的成分，它的价值正在于其未经稀释、未受破坏的完整性与复杂性，所有天然成分协同作用，共同构成了其广泛的支持特性。`},en:{label:`Mannayan Organic Black Seed Oil
Ancient Balance from Egypt
• Supports Respiratory Comfort
• Promotes Overall Balance & Resilience
• Provides Essential Fatty Acids
• Organically Grown, First Cold-Pressed
100 ml | 3 Times Daily, ½ Teaspoon (1.5-2 ml) per Serving
EU Organic Certified | Vegan | Gluten-Free | No Artificial Additives`,short_description:`Do you feel your body could use some extra support during seasonal shifts or daily stress? That desire for a more solid foundation from within is where many people begin their search for natural ways to nurture well-being.

Mannayan Organic Black Seed Oil is sourced from organically grown black cumin seeds in Egypt, using a first cold-press process to preserve their full spectrum of natural nutrients. It is rich in various polyunsaturated fatty acids, particularly linoleic acid—essential building blocks that the body cannot produce on its own and must obtain from external sources.

This oil is not a quick fix for a single issue, but rather offers broad support for the body's overall equilibrium. It helps maintain a state of respiratory comfort and supports the body's natural adaptability in the face of internal and external changes. Its action is gentle yet comprehensive, making it suitable as part of a long-term health maintenance routine.

Each bottle contains 100 ml of pure oil. The recommended usage is three times daily, ½ teaspoon (approx. 1.5-2 ml) per serving, taken with or before meals, for at least six months. This product is 100% pure black seed oil, certified organic by the EU, suitable for vegans, and free from gluten, dairy, preservatives, and artificial colors or flavors.`,long_description:`When the seasons change and breathing feels less effortless, or when the body's responses seem less resilient than before, these subtle signals often remind us that our inner balance deserves attention. This isn't illness, but a state—a state where the body's foundation could benefit from consolidation and nourishment.

**Food-State Technology & Craftsmanship**
We understand that the natural form of an ingredient and how it is extracted determine whether the body can effectively recognize and utilize it. Mannayan Black Seed Oil is produced using a first cold-press technique, gently pressed at low temperatures from organically grown black cumin seeds in Egypt. This method avoids the damage that heat can cause to oils and natural volatile compounds, fully preserving the original conformation of the seeds' polyunsaturated fatty acids, natural vitamins, and trace elements. It is not a highly refined or synthesized single compound, but presented in the complex, food-state form nature intended. This allows the body to receive and use these nutrients in a familiar way.

**A Complete Support System**
The benefits of black seed oil stem from its complex natural composition. Its rich content of essential fatty acids like linoleic acid serves as foundational material for building cell membranes and supporting cellular communication. Simultaneously, other naturally occurring active components in the oil work synergistically to create an environment that supports the body's self-regulation. It does not forcefully intervene in a specific physiological process, but instead provides broad nutritional support to multiple systems essential for maintaining health—particularly the respiratory and immune response systems—helping the body maintain stability and resilience amidst environmental changes. This foundational support aims for long-term, holistic harmony rather than temporary, superficial effects.

**Who It's For**
This oil is suitable for those who are particularly attuned to their body's signals during seasonal transitions and wish to build a solid foundation for respiratory health. It is also for individuals with demanding lifestyles seeking a gentle way to support the body's overall adaptability and recovery. For those who value dietary purity and prefer obtaining nutritional support from natural foods, including vegetarians and vegans, it offers a simple and direct source of fatty acid supplementation. Think of it as a quiet companion, integrated into your daily diet, providing underlying nourishment for ongoing health management.

**Purity & Ingredient Integrity**
Inside the bottle is nothing but the oil itself. 100% from organically farmed black cumin seeds in Egypt, cold-pressed once and bottled directly. No carrier oils for dilution, no artificial additives, colors, flavors, or preservatives. EU Organic Certification ensures full traceability and high standards from cultivation to processing. We believe true purity means as few processing steps as possible, allowing nature's gifts to work in their most authentic form. This integrity is the core of the product's efficacy.

**Usage & Dosage**
The recommended intake is three times daily, half a teaspoon (approx. 1.5 to 2 ml) per serving, taken before or with meals, followed by a sufficient amount of water. To allow the body adequate time to respond to this foundational nourishment, consistent use for at least six months is suggested. You can take it directly or mix it into yogurt, salads, or cold dishes. The 100 ml volume is carefully calculated to support several months of daily use.

**Important Notes**
Do not exceed the recommended daily intake. This product is a dietary supplement and is not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the seal on the bottle cap is missing or broken. Consulting your healthcare advisor before starting any new supplement regimen is always a wise choice.`,ingredient_reference:`**Black Seed Oil**
Black seed oil is a natural oil cold-pressed from the seeds of the Nigella sativa plant, traditionally cultivated in Asia and the Orient. In the body, it primarily serves as a source of essential fatty acids, particularly linoleic acid. These fatty acids are fundamental building blocks necessary for constructing healthy cell membranes and synthesizing a range of important signaling molecules. Mannayan selects organically grown black cumin seeds from Egypt and obtains the oil via first cold-pressing, maximizing the preservation of the fatty acids' natural configuration along with the accompanying trace nutrients and natural volatile compounds from the seeds. It is especially suitable for individuals seeking to supplement essential fatty acids from a natural food source and looking for broad support for respiratory health and overall balance. As the sole ingredient in the formula, its value lies precisely in its undiluted, unadulterated integrity and complexity, where all natural components work synergistically to constitute its wide-ranging supportive properties.`}}},{name:"Mannayan Bio-Schwarzkümmelöl 250 ml",url:"https://mannayan.com/Mannayan-Bio-Schwarzkuemmeloel-250-ml/010194",price:["28,50 €"],product_number:"010194",quantity:["250 ml"],image_url:"https://mannayan.com/media/d9/59/01/1632839836/Schwarzkuemmeloel.jpg?ts=1632839836",image_local:"images/Schwarzkuemmeloel.jpg",content:{cn:{label:`Mannayan 有机黑种草籽油

源自埃及的纯净生命力

• 支持免疫系统自然平衡
• 提供必需脂肪酸营养
• 维护呼吸系统舒适
• 促进皮肤健康状态
• 帮助季节性适应

250毫升 | 每日3次，每次½茶匙（1.5-2毫升）

欧盟有机认证 | 100%纯天然 | 首道冷压`,short_description:`当季节变换，或是感到身体需要一些额外的支持时，很多人会寻找一种温和而根本的调理方式。那种希望从内部增强自身防御能力，让身体保持平稳状态的需求，是真实而普遍的。

Mannayan有机黑种草籽油就是这样一种源自古老智慧的自然馈赠。它来自埃及有机农场的黑种草籽，通过首道冷压技术，完整保留了种子中的天然营养精华。这些珍贵的油脂，特别是丰富的必需脂肪酸，为身体的日常平衡提供了基础支持。

它不是针对某个具体问题的速效方案，而更像是一种日常的滋养习惯。通过补充这些身体无法自行合成的必需营养，它帮助维持免疫系统的正常反应，支持呼吸道的舒适，并促进皮肤的健康状态。许多人在持续使用后，感受到的是身体整体状态的平稳与和谐。

每瓶250毫升的有机黑种草籽油，建议每日三次，每次半茶匙，随餐服用。它获得欧盟有机认证，100%纯天然，不含任何人工添加剂、麸质或乳制品，适合素食者和严格素食者。`,long_description:`你是否注意到，在某些时候身体似乎更容易感到疲惫，或是需要更多支持来维持日常的活力？这不是单一的症状，而是一种整体状态的微妙信号，提示内在的平衡可能需要关注。现代生活的节奏、环境的变化，都在无形中考验着我们身体的适应能力。寻找一种温和、根本的方式来支持这种内在的平衡，成为许多人健康管理中的重要一环。

**食物态技术与纯净来源**
Mannayan黑种草籽油的核心在于其纯粹的形态与精良的提取工艺。我们选用埃及有机农场种植的黑种草籽，采用首道冷压技术。这种方法避免了高温对营养成分的破坏，如同轻轻挤压果实获取最纯净的汁液，完整保留了种子中天然的必需脂肪酸、维生素以及珍贵的挥发性精油成分。这种“食物态”的油脂，其营养结构最接近自然本来的样子，身体也更容易识别和利用。

**一个完整的支持体系**
黑种草籽油的作用并非依赖于某种单一的“明星成分”，而是其天然复合营养体系的协同效应。其中丰富的亚油酸等必需脂肪酸，是构建细胞膜、支持免疫细胞正常功能的基础材料。同时，天然含有的微量营养素和挥发性成分，共同参与调节身体的平衡机制。它们像是一个配合默契的团队，从多个温和的途径支持免疫系统的正常应答，维护呼吸黏膜的健康，并参与皮肤屏障功能的维护。这种整体性的支持，正是其历经时间考验的价值所在。

**适合哪些生活情境**
它适合那些寻求日常基础营养支持，注重从根本调理的人。比如，在季节更替、出差旅行或工作压力较大时期，希望为身体提供额外滋养的人；关注呼吸系统舒适度和皮肤健康，偏好天然养护方式的人；或是素食饮食者，希望补充优质植物性脂肪酸来源。它更是一种预防性的健康习惯，融入每日饮食，为身体的长期平衡打下基础。

**纯净与成分完整性承诺**
纯净不是营销口号，而是产品的根本。这瓶油里只有一种成分：100%有机冷压黑种草籽油。不含任何填充剂、人工香料、色素、防腐剂，也无麸质和乳制品。瓶身上的欧盟有机认证，代表了从种子到成品全链条的严格标准。我们相信，真正的效力来自于成分本身的完整与纯粹，而非复杂的添加。

**给健康管理者与搭配建议**
许多自然疗法医师和健康顾问将黑种草籽油视为基础营养支持方案的一部分。其温和、广谱的特性使其易于与其他养护方案结合。例如，在支持呼吸道健康的方案中，它可以与维生素C、锌等营养素协同；在关注皮肤健康的方案中，它可以与欧米伽-3脂肪酸互补。临床背景的健康管理者看重其通过营养途径支持生理平衡的底层逻辑。

**用法与剂量**
建议每日三次，每次半茶匙（约1.5至2毫升），最好在餐前或餐中服用，并用足量温水送服。为了达到稳定的支持效果，建议持续使用至少六个月，让身体有充分的时间接收并利用这些基础营养。一瓶250毫升的容量，足以支持数周的日常使用。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请勿超过推荐每日食用量。置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口密封条缺失，请勿食用。`,ingredient_reference:`**黑种草籽油**
黑种草籽油是从黑种草植物种子中冷压提取的纯植物油，在传统应用中已有悠久历史。它富含多种不饱和脂肪酸，特别是人体必需的亚油酸和亚麻酸，这些是构建健康细胞膜和参与体内多种代谢过程的重要基础。我们采用的埃及有机黑种草籽，通过首道冷压技术提取，最大程度保留了其天然的脂肪酸谱、维生素和挥发性精油成分的完整性。它特别适合那些寻求通过优质脂肪营养来支持整体生理平衡、关注免疫和呼吸系统健康的人群。在配方中，它作为单一且完整的成分，其各种营养素天然共存，协同发挥支持作用，无需其他成分辅助。`},en:{label:`Mannayan Organic Black Seed Oil

Pure Vitality from Egypt

• Supports the body's natural immune balance
• Provides essential fatty acid nutrition
• Maintains respiratory comfort
• Promotes healthy skin
• Aids seasonal adaptation

250 ml | Take ½ teaspoon (1.5–2 ml) three times daily

EU Organic Certified | 100% Pure & Natural | First Cold Press`,short_description:`When seasons change, or when you feel your body needs a little extra support, many people look for a gentle, foundational way to care for themselves. The desire to strengthen your inner defenses from within and help your body stay steady is real and common.

Mannayan Organic Black Seed Oil is a natural gift from ancient wisdom. It comes from organically farmed black seeds in Egypt, extracted using first cold-press technology to fully preserve the seed's natural nutritional essence. These precious oils, especially the rich essential fatty acids, provide foundational support for the body's daily balance.

It is not a quick fix for a specific issue, but more like a daily nourishing habit. By supplementing with these essential nutrients the body cannot produce on its own, it helps maintain the immune system's normal response, supports respiratory comfort, and promotes healthy skin. Many people who use it consistently feel a sense of overall steadiness and harmony in their body.

Each 250 ml bottle of organic black seed oil is recommended to be taken three times daily, half a teaspoon with meals. It is EU Organic Certified, 100% pure and natural, free from artificial additives, gluten, or dairy, and suitable for vegetarians and vegans.`,long_description:`Have you noticed times when your body seems more prone to fatigue, or needs extra support to maintain daily vitality? This isn't a single symptom, but a subtle signal of your overall state, hinting that your inner balance may need attention. The pace of modern life and environmental changes constantly test our body's adaptability. Finding a gentle, foundational way to support this inner balance has become an important part of many people's health management.

**Food-State Technology & Pure Source**
The core of Mannayan Black Seed Oil lies in its pure form and meticulous extraction process. We use black seeds from certified organic farms in Egypt and employ first cold-press technology. This method avoids the nutrient damage caused by high heat, akin to gently squeezing fruit for its purest juice, fully preserving the seed's natural essential fatty acids, vitamins, and precious volatile oil compounds. This "food-state" oil has a nutritional structure closest to its natural form, making it easier for the body to recognize and utilize.

**A Complete Support System**
The benefits of black seed oil do not rely on a single "star ingredient," but on the synergistic effect of its natural complex of nutrients. Its rich essential fatty acids, like linoleic acid, are foundational building blocks for cell membranes and support normal immune cell function. Simultaneously, naturally occurring micronutrients and volatile compounds work together to help regulate the body's balancing mechanisms. They function like a well-coordinated team, supporting the immune system's normal response through multiple gentle pathways, maintaining the health of respiratory mucosa, and contributing to skin barrier function. This holistic support is the enduring value that has stood the test of time.

**Suitable For Which Life Situations**
It is suitable for those seeking daily foundational nutritional support and who focus on caring for themselves from the ground up. For example: individuals wanting to provide extra nourishment during seasonal changes, business travel, or periods of high work stress; those attentive to respiratory comfort and skin health who prefer natural care methods; or vegetarians/vegans looking to supplement with a high-quality plant-based fatty acid source. It is more of a preventive health habit, integrated into daily diet to lay a foundation for the body's long-term balance.

**Commitment to Purity & Ingredient Integrity**
Purity is not a marketing slogan but the product's foundation. This bottle contains only one ingredient: 100% organic cold-pressed black seed oil. It contains no fillers, artificial flavors, colors, preservatives, and is gluten- and dairy-free. The EU Organic Certification on the bottle represents strict standards throughout the entire chain, from seed to finished product. We believe true efficacy comes from the integrity and purity of the ingredient itself, not from complex additions.

**For Health Managers & Combination Suggestions**
Many naturopathic doctors and health advisors view black seed oil as part of a foundational nutritional support plan. Its gentle, broad-spectrum nature makes it easy to combine with other wellness routines. For instance, in a plan supporting respiratory health, it can work synergistically with nutrients like Vitamin C and zinc; in a plan focused on skin health, it can complement omega-3 fatty acids. Clinically-minded health managers value its underlying logic of supporting physiological balance through nutritional pathways.

**Usage & Dosage**
Recommended dosage is half a teaspoon (approx. 1.5–2 ml) three times daily, preferably before or with meals, followed by a sufficient amount of water. To achieve steady supportive effects, consistent use for at least six months is recommended, allowing the body ample time to receive and utilize these foundational nutrients. One 250 ml bottle provides several weeks of daily use.

**Important Notice**
This product is a dietary supplement and is not intended to replace a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's safety seal is missing.`,ingredient_reference:`**Black Seed Oil**
Black seed oil is a pure vegetable oil cold-pressed from the seeds of the Nigella sativa plant, with a long history of use in traditional applications. It is rich in various polyunsaturated fatty acids, particularly the essential linoleic and linolenic acids, which are vital building blocks for healthy cell membranes and participate in numerous metabolic processes in the body. The Egyptian organic black seeds we use are extracted via first cold-press technology, maximizing the preservation of the natural fatty acid profile, vitamins, and volatile oil compounds. It is especially suitable for those seeking to support overall physiological balance through high-quality fat nutrition and who are attentive to immune and respiratory system health. In this formulation, it serves as a single, complete ingredient where its various nutrients naturally coexist and work synergistically, requiring no auxiliary components.`}}},{name:"Mannayan Bio-Schwarzkümmelöl 50 ml",url:"https://mannayan.com/Mannayan-Bio-Schwarzkuemmeloel-50-ml/010192",price:["7,80 €"],product_number:"010192",quantity:["50 ml"],image_url:"https://mannayan.com/media/b6/cf/75/1595406877/Schwarzk%C3%BCmmeloell_%2850ml.%29%20600x.jpg?ts=1623762050",image_local:"images/Schwarzk%C3%BCmmeloell_%2850ml.%29%20600x.jpg",content:{cn:{label:`Mannayan 有机黑种草籽油
源自埃及的古老平衡
• 支持呼吸系统自然舒适
• 维持皮肤健康状态
• 提供必需脂肪酸营养
• 源自有机种植，首道冷压
50毫升 | 素食者适用 | ÖkoP有机认证`,short_description:`你是否感觉季节变化时，身体需要更多内在的支持？或是希望为日常的平衡养护增添一份源自自然的纯粹力量？

黑种草籽油是一种古老的植物精华，主要生长于亚洲和东方地区。它富含多种不饱和脂肪酸，如亚油酸和亚麻酸，这些成分以一种特殊的组合形式存在，构成了其独特的营养价值。它不仅仅是一种油脂，更被视为一种高价值的营养补充。

我们的黑种草籽油来自埃及的有机农场，采用首道冷压工艺精心提取。这种温和的加工方式对于保留油脂中天然的维生素和营养成分至关重要。最终得到的是一瓶100%天然纯净、富含多不饱和脂肪酸和天然精油的珍贵籽油。

每瓶容量为50毫升。产品适合素食者和纯素者，不含麸质、乳制品、防腐剂以及人工色素和香精，非转基因。`,long_description:`当外界环境变化，或感到需要为身体的内在平衡寻求一份额外的、温和的支持时，许多人会转向历史悠久的自然馈赠。那种寻求从根本着手、为系统提供基础养护的渴望，正是黑种草籽油长久以来所回应的。

**食物态技术与提取工艺**
这份油脂的价值始于源头与工艺。我们选用埃及有机农场的黑种草籽（Nigella sativa），通过首道冷压的方式提取油脂。冷压是一种温和的物理压榨工艺，避免了高温对油脂中热敏性营养素（如天然维生素和活性成分）的破坏。这种方法确保了最终获得的油液最大限度地保留了种子本身的完整营养谱系和天然风味，使其以最接近食物原始状态的形式呈现。

**一个完整的营养体系**
黑种草籽油的作用源于其复杂的天然构成。它富含多种不饱和脂肪酸，特别是亚油酸等必需脂肪酸，它们以独特的比例协同存在。这些脂肪酸是细胞膜的重要组成部分，参与身体多项基础功能的调节。此外，油液中天然含有的微量营养素和植物化合物，与这些脂肪酸共同作用，形成了一个内在协同的营养整体，为身体的平衡与适应力提供广泛的基础支持。

**适合的人群**
这款油适合那些在日常生活中注重通过天然食物和补充剂来维护整体健康状态的人。它适用于寻求季节性呼吸支持方案的人，关注皮肤健康并从内在营养入手的人，以及希望在日常饮食中增加优质必需脂肪酸来源的素食或纯素饮食者。它服务于一种主动的健康管理生活方式。

**纯净与成分完整性**
瓶中所装，唯有100%天然纯净的有机黑种草籽油，别无他物。我们坚持有机种植，杜绝合成农药与化肥。产品不含麸质、乳糖、防腐剂、人工色素与香精，且非转基因。ÖkoP有机认证并非一个营销标签，而是对我们从种植到装瓶整个过程中，对纯净与真实承诺的独立验证。

**用法与剂量**
建议每日3次，每次半茶匙（约1.5-2毫升），于饭前或饭后用足量水送服。为达到更佳效果，建议持续使用至少6个月。也可根据健康管理者的具体指导进行服用。

**重要提示**
请勿超过推荐的每日食用量。本产品是膳食补充剂，不能替代均衡多样的饮食。请置于儿童无法触及之处，避光、阴凉、干燥保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**黑种草籽油（Nigella sativa）**
黑种草籽油是从黑种草（Nigella sativa）种子中冷压提取的天然植物油。这种植物主要生长于亚洲和东方地区，其油脂富含多种不饱和脂肪酸。在体内，这些脂肪酸，特别是亚油酸等，是构建细胞膜、支持细胞正常功能以及参与体内某些调节过程的重要基础物质。我们所选用的是来自埃及的有机种植品种，并通过首道冷压提取，旨在保留油脂中完整的脂肪酸谱、天然维生素和植物活性成分。它非常适合那些寻求从天然食物来源获取必需脂肪酸，并希望支持身体整体平衡与适应力的人群。作为配方中唯一的成分，它本身就是一个完整的协同体系，其各种脂肪酸和微量营养素以天然比例共同发挥作用。`},en:{label:`Mannayan Organic Black Seed Oil
Ancient Balance from Egypt
• Supports natural comfort for the respiratory system
• Helps maintain healthy skin
• Provides essential fatty acid nutrition
• Sourced from organic farming, first cold-pressed
50 ml | Suitable for vegetarians | ÖkoP Organic Certified`,short_description:`Do you feel your body needs more internal support when the seasons change? Or wish to add a touch of pure, natural power to your daily balance and care routine?

Black seed oil is an ancient botanical essence, primarily grown in Asia and the East. It is rich in various polyunsaturated fatty acids, such as linoleic acid and linolenic acid, which exist in a special combination that forms its unique nutritional value. It is not merely an oil but is regarded as a high-value nutritional supplement.

Our black seed oil comes from organic farms in Egypt, meticulously extracted using a first cold-press process. This gentle processing method is crucial for preserving the natural vitamins and nutrients within the oil. The result is a precious seed oil that is 100% natural and pure, rich in polyunsaturated fatty acids and natural essential oils.

Each bottle contains 50 ml. The product is suitable for vegetarians and vegans, and is free from gluten, dairy, preservatives, artificial colors, and flavors. It is non-GMO.`,long_description:`When the external environment changes, or when you feel the need for an extra, gentle form of support for your body's internal balance, many turn to time-honored gifts from nature. That desire to address fundamentals and provide foundational care for your system is precisely what black seed oil has long responded to.

**Food-State Technology & Extraction Process**
The value of this oil begins with its source and process. We select black cumin seeds (Nigella sativa) from organic farms in Egypt and extract the oil via a first cold-press method. Cold-pressing is a gentle mechanical process that avoids the high temperatures that can damage heat-sensitive nutrients in the oil, such as natural vitamins and active compounds. This method ensures the final oil retains the seed's complete nutritional profile and natural flavor to the greatest extent, presenting it in a form closest to its original food state.

**A Complete Nutritional System**
The benefits of black seed oil stem from its complex natural composition. It is rich in various polyunsaturated fatty acids, particularly essential fatty acids like linoleic acid, which exist in a unique, synergistic ratio. These fatty acids are vital components of cell membranes and participate in regulating many of the body's foundational functions. Furthermore, the naturally occurring micronutrients and phytonutrients in the oil work together with these fatty acids, forming an internally synergistic nutritional whole that provides broad-based support for the body's balance and resilience.

**Who It's For**
This oil is suitable for those who focus on maintaining overall well-being through natural foods and supplements in their daily lives. It is for individuals seeking seasonal respiratory support, those attentive to skin health who wish to address it from a nutritional standpoint, and vegetarians or vegans looking to add a high-quality source of essential fatty acids to their diet. It serves an active, health-management lifestyle.

**Purity & Ingredient Integrity**
The bottle contains nothing but 100% natural, pure, organic black seed oil. We adhere to organic farming, free from synthetic pesticides and fertilizers. The product is free from gluten, lactose, preservatives, artificial colors and flavors, and is non-GMO. The ÖkoP Organic Certification is not a marketing label but an independent verification of our commitment to purity and authenticity from cultivation to bottling.

**Usage & Dosage**
The recommended dosage is half a teaspoon (approximately 1.5-2 ml), three times daily, taken with ample water before or after meals. For optimal results, consistent use for at least six months is suggested. It can also be taken according to the specific guidance of your health practitioner.

**Important Notes**
Do not exceed the recommended daily intake. This product is a dietary supplement and is not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the security seal is missing.`,ingredient_reference:`**Black Seed Oil (Nigella sativa)**
Black seed oil is a natural vegetable oil cold-pressed from the seeds of the black cumin plant (Nigella sativa). This plant is primarily grown in Asia and the East, and its oil is rich in various polyunsaturated fatty acids. In the body, these fatty acids, particularly linoleic acid and others, are essential foundational substances for building cell membranes, supporting normal cellular function, and participating in certain regulatory processes. We source an organically grown variety from Egypt and extract it via a first cold-press to preserve the oil's complete fatty acid profile, natural vitamins, and phytonutrients. It is ideal for those seeking essential fatty acids from a natural food source and wishing to support the body's overall balance and resilience. As the sole ingredient in the formulation, it constitutes a complete synergistic system where its various fatty acids and micronutrients work together in their natural proportions.`}}},{name:"Mannayan Biotin & PABA+ (60 Kapseln)",url:"https://mannayan.com/Mannayan-Biotin-PABA-60-Kapseln/011123",price:["20,90 €"],product_number:"011123",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/b4/e8/bd/1766136761/Biotin%2BPaba%2B_2025_11.12.jpg?ts=1766136761",image_local:"images/Biotin%2BPaba%2B_2025_11.12.jpg",content:{cn:{label:`Mannayan Biotin & PABA+
支持内在平衡与外在展现
• 支持正常能量代谢
• 维持正常皮肤与黏膜
• 维持正常头发状态
• 支持神经系统功能
• 支持正常心理功能
60粒胶囊 / 每日1粒
纯净配方：无麸质、无大豆、无乳制品、无人工添加剂、非转基因、素食友好`,short_description:`你是否感觉日常的忙碌消耗了身体的能量，或者希望从内而外维持一种健康的状态？外在的皮肤、头发状态，往往是我们内在营养状况的反映。

这款补充剂的核心是两种协同作用的B族维生素相关成分：生物素和PABA。生物素参与我们身体将食物转化为能量的过程，并支持皮肤、头发等组织的健康。PABA则是叶酸的组成部分，支持身体自身的叶酸生成路径。它们共同工作，从代谢的基础层面提供支持。

每日一粒，提供2000微克（2毫克）生物素和250毫克PABA。配方纯净，不含常见过敏原如麸质、大豆、乳制品，也无人工色素、香料或防腐剂，适合素食者。`,long_description:`当日常的节奏加快，我们有时会感到精力不济，或者注意到皮肤和头发失去了往日的光泽。这些外在的信号，常常指向内在营养支持的微妙需求。身体的更新与修复是一个持续的过程，需要基础营养素的稳定参与。

**食物态技术与协同体系**
本产品采用生物素与对氨基苯甲酸（PABA）的精准组合。PABA是叶酸（维生素B9）的天然结构单元，肠道中的有益微生物可以利用它来合成叶酸，供身体吸收利用。这种设计尊重了身体自身的生化路径，而非简单地提供单一终端产物。生物素，作为多种代谢酶的辅因子，与这一叶酸前体协同，在细胞能量产生和氨基酸代谢等基础过程中提供广泛支持。它们共同构成了一个支持整体代谢健康与细胞更新的微型体系。

**适合的人群**
这款产品适合那些关注自身整体活力，并希望从营养基础层面给予皮肤、头发健康支持的人。它适用于生活节奏紧凑、寻求简单有效营养补充方案的成年人，尤其是那些偏好纯净、无多余添加成分配方的人士。对于遵循素食或需要避免常见致敏成分的个体，这也是一个合适的选择。

**纯净与成分完整性**
我们坚信补充剂应如其名——是对饮食的补充，而非负担。因此，配方中不含小麦、麸质、大豆、乳制品、淀粉、糖、酵母。我们杜绝使用任何人工色素、香料或防腐剂，并确保产品非转基因。胶囊外壳采用植物源的羟丙甲纤维素，让每一粒都纯净、专注。

**健康管理者与搭配方案**
对于健康领域的专业人士，此配方可作为基础B族维生素支持和代谢健康方案的一部分。其不含刺激性成分的纯净特性，使其易于与其他个性化营养方案搭配，共同支持客户的整体健康目标。临床背景的从业者可根据个体情况，将其纳入更广泛的健康管理计划中。

**用法与剂量**
建议每日服用1粒胶囊，随足量液体吞服。可根据专业健康指导人员的建议进行调整。一瓶包含60粒胶囊，可供约两个月的日常使用。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将本品放在儿童不能接触的地方。置于阴凉、干燥、避光处保存。若密封带缺失，请勿食用。`,ingredient_reference:`**对氨基苯甲酸（PABA）**
PABA是叶酸分子结构的一个组成部分，因此常被视为叶酸的“前体”或构建单元。它在体内的重要作用之一是支持肠道微生物群合成叶酸，这是一种对DNA合成、细胞分裂和红细胞形成至关重要的B族维生素。这种250毫克的剂量形式，旨在为身体自身的叶酸生成路径提供充足的原料支持。它特别适合那些希望从更基础的层面支持细胞更新与代谢健康的人。在配方中，PABA与生物素协同，共同支持广泛的B族维生素相关功能。

**生物素**
生物素，有时也被称为维生素H，是一种水溶性的B族维生素。它在体内作为多种羧化酶的辅酶，直接参与碳水化合物、脂肪和蛋白质的代谢过程，帮助将这些宏量营养素转化为可用能量。此外，生物素对维持皮肤、黏膜和头发的正常结构有公认的支持作用。本品每粒提供2000微克（2毫克）生物素，以高生物利用度的形式提供显著支持。它非常适合那些寻求支持能量代谢活力及皮肤、头发外观健康的人。作为配方中的核心，它与PABA在支持整体代谢与细胞健康方面形成了功能上的互补与增强。`},en:{label:`Mannayan Biotin & PABA+
Supporting Inner Balance and Outer Expression
• Supports normal energy metabolism
• Maintains normal skin and mucous membranes
• Maintains normal hair condition
• Supports nervous system function
• Supports normal psychological function
60 capsules / 1 capsule daily
Pure formula: Gluten-free, soy-free, dairy-free, no artificial additives, non-GMO, vegetarian-friendly`,short_description:`Do you feel that daily busyness drains your body's energy, or do you wish to maintain a healthy state from the inside out? The condition of our external skin and hair often reflects our internal nutritional status.

At the core of this supplement are two synergistic B-vitamin-related components: biotin and PABA. Biotin is involved in our body's process of converting food into energy and supports the health of tissues like skin and hair. PABA is a component of folic acid, supporting the body's own folate production pathway. They work together to provide support at the foundational level of metabolism.

One capsule daily provides 2000 mcg (2 mg) of biotin and 250 mg of PABA. The formula is pure, free from common allergens like gluten, soy, and dairy, and contains no artificial colors, flavors, or preservatives. Suitable for vegetarians.`,long_description:`When the pace of daily life quickens, we sometimes feel a lack of energy or notice that our skin and hair have lost their former luster. These external signals often point to subtle needs for internal nutritional support. The body's renewal and repair is an ongoing process that requires the steady participation of foundational nutrients.

**Food-State Technology and Synergistic System**
This product uses a precise combination of biotin and para-aminobenzoic acid (PABA). PABA is a natural building block of folate (vitamin B9); beneficial microbes in the gut can utilize it to synthesize folate for the body's absorption and use. This design respects the body's own biochemical pathways rather than simply providing a single end product. Biotin, as a cofactor for multiple metabolic enzymes, works synergistically with this folate precursor to provide broad support in fundamental processes like cellular energy production and amino acid metabolism. Together, they form a micro-system that supports overall metabolic health and cellular renewal.

**Who It's For**
This product is suitable for those who care about their overall vitality and wish to support the health of their skin and hair from a foundational nutritional level. It is intended for adults with busy lifestyles seeking a simple, effective nutritional supplement, especially those who prefer pure formulas without unnecessary additives. It is also a suitable choice for individuals following a vegetarian diet or needing to avoid common allergenic ingredients.

**Purity and Ingredient Integrity**
We firmly believe that supplements should live up to their name—a complement to the diet, not a burden. Therefore, the formula contains no wheat, gluten, soy, dairy, starch, sugar, or yeast. We prohibit the use of any artificial colors, flavors, or preservatives and ensure the product is non-GMO. The capsule shell is made from plant-derived hydroxypropyl methylcellulose, making each capsule pure and focused.

**For Health Professionals and Combination Plans**
For professionals in the health field, this formula can serve as part of a foundational B-vitamin support and metabolic health plan. Its pure, non-stimulating nature makes it easy to combine with other personalized nutrition plans to collectively support clients' overall health goals. Clinically oriented practitioners can incorporate it into broader health management plans based on individual circumstances.

**Usage and Dosage**
It is recommended to take 1 capsule daily, swallowed with plenty of liquid. Adjustments can be made based on the advice of a qualified health professional. One bottle contains 60 capsules, providing approximately two months of daily use.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Para-Aminobenzoic Acid (PABA)**
PABA is a component of the molecular structure of folic acid and is therefore often regarded as a 'precursor' or building block of folate. One of its important roles in the body is to support the gut microbiota in synthesizing folate, a B vitamin crucial for DNA synthesis, cell division, and red blood cell formation. This 250 mg dosage form is designed to provide ample raw material support for the body's own folate production pathway. It is particularly suitable for those who wish to support cellular renewal and metabolic health from a more foundational level. In the formula, PABA works synergistically with biotin to collectively support a wide range of B-vitamin-related functions.

**Biotin**
Biotin, sometimes also called vitamin H, is a water-soluble B vitamin. In the body, it acts as a coenzyme for multiple carboxylases, directly involved in the metabolic processes of carbohydrates, fats, and proteins, helping to convert these macronutrients into usable energy. Furthermore, biotin is recognized for its supportive role in maintaining the normal structure of skin, mucous membranes, and hair. Each capsule provides 2000 mcg (2 mg) of biotin in a highly bioavailable form, offering significant support. It is well-suited for those seeking to support energetic metabolic vitality and the healthy appearance of skin and hair. As the core of the formula, it forms a functional complement and enhancement with PABA in supporting overall metabolism and cellular health.`}}},{name:"Mannayan BROM + (60 Kapseln)",url:"https://mannayan.com/Mannayan-BROM-60-Kapseln/010034",price:["22,90 €"],product_number:"010034",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/13/e8/84/1766138125/Brom%2B_2025.jpg?ts=1766138125",image_local:"images/Brom%2B_2025.jpg",content:{cn:{label:`Mannayan BROM+
植物酶支持方案
• 源自天然菠萝提取物
• 支持蛋白质的正常分解
• 促进健康的炎症反应过程
• 为消化系统提供植物酶支持
• 维持身体内在平衡
60粒素食胶囊 / 每日3次，每次1粒
纯净配方：无麸质、无乳制品、无大豆、无人工添加剂、非转基因、素食友好`,short_description:`你是否感觉身体在应对日常挑战时，反应不如以往那般顺畅？或是消化系统在分解某些食物后，感觉有些沉重、不够利落？这些感受常常提示，身体内在的某些支持系统可能需要额外的关注。

Mannayan BROM+ 的核心是一种从菠萝茎和果肉中精心提取的植物酶复合物——菠萝蛋白酶。它并非外来物质，其作用方式与我们身体自身产生的某些酶相似，因此能被身体更好地识别和利用。这些酶主要协助蛋白质的分解过程，并在身体需要管理正常的炎症反应时提供支持。

我们选择从菠萝中提取，是因为这种天然来源的酶复合物具有特定的活性，且身体对其有良好的接受度。通过温和的压榨和分离工艺，我们保留了酶的自然构象，确保其进入体内后能发挥预期的作用。

每粒胶囊提供150毫克标准化的菠萝蛋白酶提取物。每日建议服用3次，每次1粒，餐前至少30分钟用足量水送服。配方纯净，不含麸质、乳制品、大豆、酵母、淀粉、糖及任何人工色素、香料或防腐剂，采用植物纤维素胶囊，适合素食者及对多种食物敏感的人群。`,long_description:`当身体在应对运动后的肌肉恢复、季节更替带来的不适，或是消化一顿丰盛蛋白质餐食后感到些许滞重时，这往往不仅仅是单一层面的问题。它可能反映了身体内部酶支持系统与当下需求之间的微妙平衡需要被看见和关照。这种感受不是故障，而是一种信号，提醒我们去关注那些维持内在流畅运作的基础支持。

**食物态技术与递送**
Mannayan BROM+ 的效力根植于其来源与形式。我们并非合成酶，而是从特定品种菠萝的茎与内部果肉中，通过物理压榨获取汁液，再从中温和分离出完整的酶复合物。这些植物酶在结构上与人体自身的蛋白酶有相似之处，这使得它们能够被肠道有效识别并吸收，进而顺利进入循环系统，到达需要它们发挥作用的地方。植物胶囊外壳确保了活性成分的稳定递送，同时避免了常见的过敏原。

**一个完整的支持体系**
菠萝蛋白酶本身就是一个协同作用的复合体，包含多种蛋白水解酶。在体内，它们主要从两个方面提供支持：一是协助将大分子蛋白质分解为更小、更易处理的肽段和氨基酸，减轻消化系统的分解负担；二是在身体启动正常的、健康的炎症反应程序时，通过调节某些信号通路的活性，帮助管理这一过程的节奏与范围，避免反应过度或迁延。这两方面并非孤立，健康的消化与吸收是全身平衡的基础，而平衡的炎症反应管理则有助于为修复与恢复创造更佳的内部环境。

**适合哪些生活情境**
这款补充剂适合那些生活方式活跃，经常感到肌肉需要额外支持以应对运动负荷的人；也适合那些注意到自己的消化系统在处理高蛋白食物（如肉类、豆类）后效率不如从前，容易产生饱胀感的人。当季节变化或环境挑战增多，身体发出需要额外支持的信号时，它也能作为日常养护方案的一部分。此外，对于遵循纯净饮食、希望避免常见过敏原（如麸质、乳制品、大豆）的素食者，它提供了明确的选择。

**纯净与成分的完整性**
纯净不是营销概念，而是产品效力的基础。配方中除了活性菠萝蛋白酶提取物，仅使用微晶纤维素作为填充剂和植物来源的羟丙甲纤维素构成胶囊外壳。我们明确排除了一系列可能干扰身体反应或引起不适的成分：小麦、麸质、乳制品（乳糖）、大豆、添加糖、淀粉、酵母、防腐剂以及所有人造色素和香料。产品非转基因制造，从源头到成品，每一步都旨在减少不必要的负担，让身体只接收到它真正需要的支持信号。

**给健康管理者与搭配建议**
许多具有临床背景的健康顾问会关注客户全身性的平衡状态。Mannayan BROM+ 因其明确的植物酶支持和炎症反应管理特性，常被纳入更广泛的健康方案中。例如，在与维生素C、锌等支持免疫健康的营养素搭配时，它可以作为基础支持层；在针对运动恢复的方案中，可与镁、氨基酸等结合，共同支持肌肉功能的正常维持。它提供的是基础性的调节支持，为其他更具针对性的干预创造更平稳的内部环境。

**用法与剂量**
建议每日服用3次，每次1粒胶囊。为达到最佳吸收并发挥其系统性的支持作用，应在餐前至少30分钟，用一大杯水送服。空腹状态有助于酶更直接地进入循环系统。持续使用比偶尔大剂量服用更能帮助身体建立稳定的支持环境。一瓶60粒的包装约为20天的用量。

**重要提示**
已知对菠萝有过敏反应者请勿使用。由于菠萝蛋白酶可能影响凝血过程，患有出血性疾病或正在服用抗凝血药物（如华法林）的人士不应使用本品。当消化道存在急性炎症或活动性溃疡时，也应避免使用蛋白水解酶产品。本品为膳食补充剂，不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若密封条破损，请勿食用。`,ingredient_reference:`**菠萝蛋白酶提取物**
菠萝蛋白酶是从菠萝植物的茎和果实中提取的一组蛋白水解酶复合物。在体内，这些酶能够特异性切断蛋白质中的肽键，将大分子蛋白质分解为更小的片段。除了在消化过程中辅助分解膳食蛋白质，菠萝蛋白酶更被认识到具有系统性的作用，它能温和地调节体内某些与炎症反应相关的酶和细胞因子的活性，从而帮助身体将炎症反应维持在正常、健康的生理范围内。我们选用的是标准化提取物，确保每份剂量（150毫克）含有稳定、可预测的酶活性。它特别适合那些需要额外消化支持，尤其是针对蛋白质消化，或希望为身体应对物理性应激（如运动）后的恢复过程提供基础支持的人群。在整个配方中，它是唯一且核心的活性成分，其多方面的作用机制本身就构成了一个内在协同的支持体系。`},en:{label:`Mannayan BROM+
Plant Enzyme Support Formula
• Derived from Natural Pineapple Extract
• Supports Normal Protein Breakdown
• Promotes Healthy Inflammatory Response Processes
• Provides Plant-Based Enzyme Support for the Digestive System
• Helps Maintain Internal Balance
60 Vegan Capsules / 3 Times Daily, 1 Capsule Each
Pure Formula: Gluten-Free, Dairy-Free, Soy-Free, No Artificial Additives, Non-GMO, Vegan-Friendly`,short_description:`Do you feel your body isn't responding as smoothly as it used to when facing daily challenges? Or does your digestive system feel heavy and sluggish after breaking down certain foods? These sensations often signal that some of your body's internal support systems may need extra attention.

At the heart of Mannayan BROM+ is a carefully extracted plant enzyme complex from pineapple stems and flesh—bromelain. It's not a foreign substance; its mode of action resembles certain enzymes our bodies naturally produce, allowing it to be better recognized and utilized. These enzymes primarily assist in the breakdown of proteins and provide support when the body needs to manage normal inflammatory responses.

We chose extraction from pineapple because this naturally sourced enzyme complex possesses specific activity and is well-accepted by the body. Through gentle pressing and separation processes, we preserve the enzyme's natural conformation, ensuring it performs as intended once inside the body.

Each capsule provides 150 mg of standardized bromelain extract. The recommended daily intake is 3 times per day, 1 capsule each time, taken with plenty of water at least 30 minutes before meals. The formula is pure, free from gluten, dairy, soy, yeast, starch, sugar, and any artificial colors, flavors, or preservatives. It uses plant cellulose capsules, making it suitable for vegetarians and those with multiple food sensitivities.`,long_description:`When your body feels sluggish after exercise recovery, seasonal changes, or digesting a protein-rich meal, it's often not just a single issue. It may reflect a subtle imbalance between your internal enzyme support systems and current needs—a balance that needs to be seen and cared for. This feeling isn't a malfunction but a signal, reminding us to pay attention to the foundational support that keeps our inner workings flowing smoothly.

**Food-State Technology and Delivery**
The efficacy of Mannayan BROM+ is rooted in its source and form. We don't synthesize enzymes; instead, we physically press juice from specific pineapple varieties' stems and inner flesh, then gently separate the complete enzyme complex. These plant enzymes structurally resemble the body's own proteases, allowing them to be effectively recognized and absorbed in the gut, enter circulation, and reach where they're needed. The plant-based capsule shell ensures stable delivery of active ingredients while avoiding common allergens.

**A Complete Support System**
Bromelain itself is a synergistic complex containing multiple proteolytic enzymes. In the body, they provide support in two main ways: first, by helping break down large protein molecules into smaller, more manageable peptides and amino acids, easing the digestive system's breakdown burden; second, when the body initiates normal, healthy inflammatory response processes, by modulating the activity of certain signaling pathways to help manage the pace and scope of this process, preventing overreaction or prolongation. These aspects aren't isolated—healthy digestion and absorption are the foundation of whole-body balance, and balanced inflammatory response management helps create a better internal environment for repair and recovery.

**Suitable Life Situations**
This supplement suits those with active lifestyles who often feel their muscles need extra support to handle exercise loads; it also suits those who notice their digestive system is less efficient at processing high-protein foods (like meat, legumes) and prone to bloating. When seasonal changes or environmental challenges increase and the body signals a need for extra support, it can be part of a daily maintenance routine. Additionally, for vegetarians following a clean diet who wish to avoid common allergens (like gluten, dairy, soy), it offers a clear choice.

**Purity and Ingredient Integrity**
Purity isn't a marketing concept but the foundation of product efficacy. Besides active bromelain extract, the formula uses only microcrystalline cellulose as a filler and plant-derived hypromellose for the capsule shell. We explicitly exclude a range of ingredients that might interfere with the body's response or cause discomfort: wheat, gluten, dairy (lactose), soy, added sugars, starch, yeast, preservatives, and all artificial colors and flavors. The product is non-GMO manufactured, aiming from source to finished product to reduce unnecessary burden, so the body receives only the support signals it truly needs.

**For Health Managers and Pairing Suggestions**
Many health consultants with clinical backgrounds focus on clients' systemic balance. Due to its clear plant enzyme support and inflammatory response management properties, Mannayan BROM+ is often incorporated into broader wellness plans. For example, paired with immune-support nutrients like Vitamin C and zinc, it can serve as a foundational support layer; in exercise recovery protocols, it can be combined with magnesium, amino acids, etc., to jointly support normal muscle function maintenance. It provides foundational regulatory support, creating a more stable internal environment for other more targeted interventions.

**Usage and Dosage**
Recommended intake is 3 times daily, 1 capsule each. For optimal absorption and systemic support, take at least 30 minutes before meals with a large glass of water. An empty stomach helps enzymes enter circulation more directly. Consistent use is more helpful for establishing a stable support environment than occasional high doses. A 60-capsule bottle provides about a 20-day supply.

**Important Notes**
Do not use if you have a known allergy to pineapple. Because bromelain may affect blood clotting, individuals with bleeding disorders or taking anticoagulant medications (e.g., warfarin) should not use this product. Avoid proteolytic enzyme products during acute gastrointestinal inflammation or active ulcers. This product is a dietary supplement and not a substitute for a balanced, varied diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal is broken.`,ingredient_reference:`**Bromelain Extract**
Bromelain is a group of proteolytic enzyme complexes extracted from the stems and fruit of the pineapple plant. In the body, these enzymes can specifically cleave peptide bonds in proteins, breaking large protein molecules into smaller fragments. Beyond assisting in the breakdown of dietary proteins during digestion, bromelain is increasingly recognized for its systemic actions—it gently modulates the activity of certain enzymes and cytokines related to inflammatory responses, helping the body maintain inflammation within normal, healthy physiological ranges. We use a standardized extract to ensure each serving (150 mg) contains stable, predictable enzyme activity. It's particularly suitable for those needing extra digestive support, especially for protein digestion, or who wish to provide foundational support for the body's recovery processes after physical stress (like exercise). In the entire formula, it's the sole and core active ingredient; its multifaceted mechanisms of action inherently form an internally synergistic support system.`}}},{name:"Mannayan CAL + (60 Kapseln)",url:"https://mannayan.com/Mannayan-CAL-60-Kapseln/010038",price:["27,50 €"],product_number:"010038",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/b0/05/46/1766136828/Cal%2B_2025.jpg?ts=1766136828",image_local:"images/Cal%2B_2025.jpg",content:{cn:{label:"Mannayan CAL+ 钙+ | 源自海洋的植物钙 | 支持骨骼健康·维持肌肉功能·参与能量代谢·促进神经信号传递 | 60粒胶囊 | 每粒含200毫克钙、14毫克镁 | 全食物来源·有机认证·无麸质·无大豆·无乳制品·纯素",short_description:`你是否感觉身体需要更稳固的支撑？日常的忙碌和压力，有时会让身体发出需要更多关注的信号，比如偶尔的紧绷感或是对整体活力的期待。

Mannayan CAL+ 提供了一种来自海洋的天然解决方案。它并非普通的钙片，而是源自一种生长在洁净大西洋水域的化石红藻——钙化红藻。这种藻类在生长过程中，自然地从海水中吸收并储存了丰富的矿物质，形成了易于身体识别和利用的有机形态。

这种全食物形式的钙，与人体有天然的亲和力。它协同配方中天然伴生的镁及其他微量矿物质，共同支持身体的平衡运作，从骨骼的坚实到肌肉的放松，再到能量的顺畅转化。

每日1至3粒，即可补充日常所需。每粒胶囊提供200毫克钙和14毫克镁。产品获得有机认证，不含麸质、大豆、乳制品、酵母、人工色素及防腐剂，适合追求纯净配方的人群。`,long_description:`当身体偶尔感到需要额外的支持，无论是希望步履更稳健，还是期待日常活动后能更快恢复轻松状态，这常常是身体在提醒我们关注矿物质的平衡。骨骼的健康、肌肉的舒缩、乃至神经信号的平稳传递，都离不开一种基础矿物质的持续支持。

**食物态技术与海洋来源**
Mannayan CAL+的核心是一种名为钙化红藻（Lithothamnium calcareum）的海洋植物。它生长于无污染的大西洋水域，在漫长的生命过程中，其细胞结构自然沉积了来自海洋的丰富矿物质。我们并非提取或合成单一的钙化合物，而是将整株藻类低温精细研磨后封装。这意味着你摄入的是包含钙、镁以及多种天然伴生微量元素（如钾、硫、锌、硒、碘等）的完整食物基质。这种结构使得矿物质以有机络合形式存在，身体能更顺畅地识别和利用。

**一个协同作用的完整体系**
配方中的钙与镁并非孤立存在，它们以自然界中的原生比例共同呈现。钙主要关注于骨骼与牙齿的矿物密度维持、正常的肌肉收缩功能以及神经信号传导。而镁则像一位协调者，它有助于肌肉的放松，并参与体内数百种酶反应，支持能量代谢的正常进行。这两种矿物质在体内的吸收与利用过程中相互影响、相互支持。此外，藻类中天然存在的其他微量元素，共同构成了一个微型的矿物生态，以更接近食物本源的形态，支持身体的整体矿物质平衡。

**适合这些生活情境的你**
如果你日常饮食中乳制品摄入有限，或偏好植物性饮食，正在寻找一种纯净的矿物质补充来源。如果你的生活节奏快，希望为身体的支撑系统提供持续而温和的养护。如果你注重成分的来源与形式，倾向于选择身体更易接纳的全食物配方。那么，这种来自海洋的植物钙可能是一个贴合你需求的选择。

**纯净与成分的完整性**
产品源自经认证的有机钙化红藻，是100%的植物性原料。整个生产过程尊重成分的天然完整性。胶囊外壳采用植物纤维素。产品不含小麦、麸质、淀粉、大豆、乳制品（乳糖）、酵母、添加糖、人工色素、香精及防腐剂。纯净的配方旨在减少不必要的负担，让你专注于吸收自然馈赠的核心营养。

**健康管理者与搭配方案**
许多具有临床背景的健康顾问会关注矿物质平衡对整体健康的基础作用。Mannayan CAL+ 因其高生物利用度和良好的耐受性，常被纳入长期的健康维护方案中。它可以与维生素D3、维生素K2等支持骨骼健康的营养素搭配，形成更全面的支持体系。具体搭配请遵循专业指导。

**用法与剂量**
建议每日服用1至3粒胶囊，随足量液体吞服。为满足日常基础需求，每日1粒（提供200毫克钙）即可。可根据个人具体情况或专业健康顾问的建议调整用量。一瓶含60粒胶囊。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐每日食用量。请置于儿童无法触及之处，避光、阴凉、干燥保存。若密封条缺失，请勿食用。`,ingredient_reference:`**钙（来自钙化红藻）**
钙是一种对维持生命活动至关重要的常量矿物质。在体内，它不仅是构成骨骼和牙齿的主要成分，为其提供硬度和结构支撑，还广泛参与肌肉收缩、神经冲动传递、血液凝固以及多种酶的激活过程。本产品中的钙源自化石红藻钙化红藻，以碳酸钙等有机络合形式天然存在。这种全食物形态的钙具有较高的生物利用度，意味着身体可以更有效地吸收和利用它。它特别适合那些希望从植物性、非乳制品来源补充钙质，并追求成分天然完整性的人群。在配方中，它与天然伴生的镁协同工作，共同维持神经肌肉的正常兴奋性与放松。

**镁（来自钙化红藻）**
镁是体内含量第四丰富的矿物质，参与超过300种酶促反应，涉及能量产生、蛋白质合成、肌肉与神经功能调节等多个方面。它有助于维持正常的肌肉功能，包括促进肌肉放松，并与钙共同调节神经信号的传递。产品中的镁同样来自钙化红藻，是藻类生长过程中自然吸收储存的矿物质的一部分。这种形式确保了镁与钙等矿物质的天然配比。它非常适合那些关注整体矿物质平衡，尤其是希望支持肌肉放松、能量代谢和神经系统健康的人群。在配方中，镁平衡了钙的作用，两者相辅相成，共同支持更和谐的生理状态。`},en:{label:"Mannayan CAL+ Calcium+ | Plant-Based Calcium from the Ocean | Supports Bone Health · Maintains Muscle Function · Involved in Energy Metabolism · Promotes Nerve Signal Transmission | 60 Capsules | Each Capsule Contains 200mg Calcium, 14mg Magnesium | Whole Food Source · Organic Certified · Gluten-Free · Soy-Free · Dairy-Free · Vegan",short_description:`Do you feel your body needs more solid support? The daily hustle and stress can sometimes send signals that your body needs more attention—perhaps an occasional feeling of tightness or a desire for more overall vitality.

Mannayan CAL+ offers a natural solution from the ocean. This isn't ordinary calcium; it's sourced from a fossilized red algae called Lithothamnium calcareum, which grows in the clean waters of the Atlantic. As this algae grows, it naturally absorbs and stores a wealth of minerals from seawater, forming an organic structure that the body easily recognizes and utilizes.

This whole-food calcium has a natural affinity for the human body. It works synergistically with the naturally occurring magnesium and other trace minerals in the formula to support balanced bodily functions—from bone strength to muscle relaxation, and smooth energy conversion.

Take 1 to 3 capsules daily to supplement your needs. Each capsule provides 200mg of calcium and 14mg of magnesium. The product is organically certified and free from gluten, soy, dairy, yeast, artificial colors, and preservatives, making it suitable for those seeking a pure formula.`,long_description:`When the body occasionally signals a need for extra support—whether hoping for steadier steps or expecting to recover a sense of ease more quickly after daily activities—it's often a reminder to pay attention to mineral balance. The health of bones, the contraction and relaxation of muscles, and even the smooth transmission of nerve signals all rely on the steady support of foundational minerals.

**Whole-Food Technology & Marine Source**
At the heart of Mannayan CAL+ is a marine plant called Lithothamnium calcareum. It grows in unpolluted Atlantic waters, and over its long life, its cellular structure naturally deposits a rich array of minerals from the ocean. We don't extract or synthesize isolated calcium compounds; instead, we gently mill the entire algae at low temperatures and encapsulate it. This means you're consuming a complete food matrix containing calcium, magnesium, and a variety of naturally co-occurring trace minerals (such as potassium, sulfur, zinc, selenium, iodine, and more). This structure keeps the minerals in an organically complexed form, allowing the body to recognize and utilize them more smoothly.

**A Synergistic, Complete System**
The calcium and magnesium in the formula are not isolated; they are presented in their native, natural ratio. Calcium primarily focuses on maintaining bone and tooth mineral density, supporting normal muscle contraction, and nerve signal transmission. Magnesium acts like a coordinator, aiding muscle relaxation and participating in hundreds of enzymatic reactions to support normal energy metabolism. These two minerals interact and support each other during absorption and utilization in the body. Additionally, the other trace minerals naturally present in the algae form a miniature mineral ecosystem that, in a form closer to whole food, supports the body's overall mineral balance.

**For You in These Life Situations**
If your daily diet includes limited dairy or you prefer a plant-based diet and are looking for a pure mineral supplement source. If your life is fast-paced, and you wish to provide continuous, gentle care for your body's support systems. If you value ingredient sourcing and form, leaning toward whole-food formulas that the body more readily accepts. Then, this plant-based calcium from the ocean may be a choice that fits your needs.

**Purity & Ingredient Integrity**
The product is sourced from certified organic Lithothamnium calcareum and is 100% plant-based. The entire production process respects the natural integrity of the ingredients. The capsule shell is made from plant cellulose. The product is free from wheat, gluten, starch, soy, dairy (lactose), yeast, added sugars, artificial colors, flavors, and preservatives. This pure formula aims to reduce unnecessary burdens, allowing you to focus on absorbing the core nutrients from nature's gift.

**Health Managers & Combination Strategies**
Many health consultants with clinical backgrounds emphasize the foundational role of mineral balance in overall health. Due to its high bioavailability and good tolerability, Mannayan CAL+ is often included in long-term wellness maintenance plans. It can be combined with nutrients like Vitamin D3 and Vitamin K2, which support bone health, to form a more comprehensive support system. Please follow professional guidance for specific combinations.

**Usage & Dosage**
Take 1 to 3 capsules daily with plenty of liquid. For basic daily needs, 1 capsule (providing 200mg calcium) is sufficient. Dosage can be adjusted based on individual circumstances or the advice of a professional health consultant. Each bottle contains 60 capsules.

**Important Notes**
Food supplements should not replace a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Calcium (from Lithothamnium calcareum)**
Calcium is an essential macromineral crucial for sustaining life activities. In the body, it is not only the primary component of bones and teeth, providing hardness and structural support, but also widely involved in muscle contraction, nerve impulse transmission, blood clotting, and the activation of numerous enzymes. The calcium in this product is sourced from the fossilized red algae Lithothamnium calcareum, naturally present in organically complexed forms such as calcium carbonate. This whole-food form of calcium has high bioavailability, meaning the body can absorb and utilize it more effectively. It is especially suitable for those seeking to supplement calcium from plant-based, non-dairy sources while pursuing the natural integrity of ingredients. In the formula, it works synergistically with naturally co-occurring magnesium to maintain normal neuromuscular excitability and relaxation.

**Magnesium (from Lithothamnium calcareum)**
Magnesium is the fourth most abundant mineral in the body, involved in over 300 enzymatic reactions spanning energy production, protein synthesis, muscle and nerve function regulation, and more. It helps maintain normal muscle function, including promoting muscle relaxation, and works with calcium to regulate nerve signal transmission. The magnesium in this product also comes from Lithothamnium calcareum, part of the minerals naturally absorbed and stored by the algae during growth. This form ensures a natural ratio of magnesium to calcium and other minerals. It is particularly suitable for those focused on overall mineral balance, especially individuals looking to support muscle relaxation, energy metabolism, and nervous system health. In the formula, magnesium balances the action of calcium, with the two working in tandem to support a more harmonious physiological state.`}}},{name:"Mannayan CAND + (60 Kapseln)",url:"https://mannayan.com/Mannayan-CAND-60-Kapseln/010040",price:["29,90 €"],product_number:"010040",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/a7/35/be/1766136850/Cand%2B_2025.jpg?ts=1766136850",image_local:"images/Cand%2B_2025.jpg",content:{cn:{label:`Mannayan CAND+ 肠道平衡酵母
支持肠道环境，促进自然防御
• 含布拉氏酵母菌Saccharomyces boulardii
• 快速定植于胃肠道
• 支持肠道菌群平衡
• 适合敏感体质
60粒胶囊 / 每日1粒
纯净配方：无麸质、无小麦、无淀粉、无糖、无人工色素香料、无防腐剂、非转基因、素食认证`,short_description:`你是否感觉肠道状态容易受到外界影响，饮食或生活节奏的细微变化就可能带来不适？维持一个稳定、有活力的肠道环境，是整体健康的基础。

Mannayan CAND+ 的核心是一种特殊的益生酵母——布拉氏酵母菌。它不同于常见的细菌类益生菌，作为一种酵母菌，它能快速通过胃部酸性环境，在肠道中定植并发挥作用，支持肠道内环境的稳定与平衡。

这款配方专注于单一、高效的活性成分，避免复杂添加可能带来的负担。每粒胶囊提供250毫克冻干布拉氏酵母菌，每日一粒，简单直接。配方纯净，不含麸质、小麦、淀粉、糖及任何人工添加剂，也适合素食者。`,long_description:`肠道的感觉常常是我们整体状态的晴雨表。当它感到不适、敏感或失去平衡时，影响的远不止是消化本身，更关乎一天的精力与整体的安宁。这种不适可能源于多种因素，但核心往往在于肠道内环境的稳定与否。

**食物态技术与递送**
产品中的布拉氏酵母菌以冻干形式存在，这种技术最大程度地保留了酵母的活性与稳定性。更重要的是，酵母菌本身的结构使其具备天然的耐酸性，能够有效抵御胃酸，确保足量的活性成分抵达肠道，在那里开始它的工作。

**完整的支持体系**
Mannayan CAND+ 的配方理念是专注与协同。其核心成分布拉氏酵母菌在肠道中发挥作用，并非孤立存在。它通过自身的代谢活动，参与营造一个更有利于有益微生物生长的肠道环境。这种从微观生态层面的支持，有助于恢复肠道自身的调节能力，为整体的消化舒适与防御功能打下基础。配方中不添加多余的填充物或复杂成分，让身体能够清晰地接收到这一核心支持信号。

**适合的人群**
这款产品适合那些关注肠道日常维护，并希望以温和、专注方式进行支持的人。当你感觉肠道较为敏感，容易受到饮食、旅行或压力影响时；当你寻求一种不增加消化负担的纯净益生元支持时；或者，当你遵循素食生活方式，同时需要针对性肠道养护时，CAND+ 提供了一个清晰的选择。它同样适用于那些对多种食物成分敏感，需要避开常见过敏原如麸质、小麦的人群。

**纯净与成分完整性**
纯净是有效的前提。胶囊外壳采用植物源的羟丙甲纤维素，填充物仅为糙米米粉。整个配方杜绝了麸质、小麦、淀粉、精制糖、人工色素、人工香料和防腐剂，且为非转基因。每一粒胶囊都旨在传递纯净的活性成分，不含任何可能干扰其作用或增加身体不必要负担的添加物。

**用法与剂量**
日常维护，建议每日服用1粒胶囊，最好在餐后约30分钟或睡前，用足量温水送服。在需要加强支持的阶段，可根据自身感受或健康管理者的建议，增至每日最多3次，每次1粒。一瓶60粒的容量，适合为期两个月的日常基础支持。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口密封条缺失，请勿食用。`,ingredient_reference:`**布拉氏酵母菌 (Saccharomyces boulardii)**
这是一种具有益生菌特性的独特酵母菌株，不同于酿酒酵母，它被广泛研究并应用于支持肠道健康。它在体内不长期定植，但能快速通过消化道并在此期间发挥积极作用。其作用包括参与维持肠道菌群平衡，并支持肠道黏膜的自身防御机制。产品中采用冻干形式，确保了高活性和稳定性，使其能有效抵达作用部位。它特别适合那些需要温和、非细菌类肠道支持，或肠道环境敏感的人群。在此配方中，它是唯一且核心的活性成分，其设计旨在提供专注、明确的支持作用。`},en:{label:`Mannayan CAND+ Gut Balance Yeast
Supports Gut Environment, Promotes Natural Defenses
• Contains Saccharomyces boulardii
• Rapidly Colonizes the Gastrointestinal Tract
• Supports Gut Microbiome Balance
• Suitable for Sensitive Constitutions
60 Capsules / 1 Capsule Daily
Pure Formula: Gluten-Free, Wheat-Free, Starch-Free, Sugar-Free, No Artificial Colors or Flavors, No Preservatives, Non-GMO, Vegan Certified`,short_description:`Does your gut feel easily affected by external factors, where slight changes in diet or routine can lead to discomfort? Maintaining a stable, resilient gut environment is foundational to overall health.

At the heart of Mannayan CAND+ is a special probiotic yeast—Saccharomyces boulardii. Unlike common bacterial probiotics, as a yeast, it can quickly pass through the stomach's acidic environment, colonize the intestines, and go to work, supporting the stability and balance of the gut's internal milieu.

This formula focuses on a single, highly effective active ingredient, avoiding the potential burden of complex additions. Each capsule delivers 250 mg of freeze-dried Saccharomyces boulardii—one capsule daily, simple and direct. The formula is pure, free from gluten, wheat, starch, sugar, and any artificial additives, and is also suitable for vegetarians.`,long_description:`The state of our gut is often a barometer for our overall well-being. When it feels uncomfortable, sensitive, or out of balance, the impact goes far beyond digestion alone—it affects our daily energy and overall sense of ease. This discomfort can stem from various factors, but at its core often lies the stability of the gut's internal environment.

**Food-State Technology and Delivery**
The Saccharomyces boulardii in this product is in a freeze-dried form, a technology that maximizes the preservation of the yeast's activity and stability. More importantly, the yeast's natural structure gives it inherent acid resistance, allowing it to effectively withstand stomach acid and ensure a sufficient amount of active ingredient reaches the intestines, where it begins its work.

**A Complete Support System**
The formulation philosophy of Mannayan CAND+ is focus and synergy. Its core ingredient, Saccharomyces boulardii, works in the gut not in isolation. Through its own metabolic activities, it participates in fostering a gut environment more conducive to the growth of beneficial microorganisms. This support at the micro-ecological level helps restore the gut's own regulatory capacity, laying a foundation for overall digestive comfort and defensive function. The formula avoids unnecessary fillers or complex ingredients, allowing the body to clearly receive this core supportive signal.

**Who It's For**
This product is suitable for those focused on daily gut maintenance who desire a gentle, targeted form of support. When you feel your gut is particularly sensitive and easily affected by diet, travel, or stress; when you seek a pure probiotic support that doesn't add to digestive burden; or when you follow a vegetarian lifestyle while needing targeted gut care—CAND+ offers a clear choice. It is also suitable for those sensitive to multiple food ingredients who need to avoid common allergens like gluten and wheat.

**Purity and Ingredient Integrity**
Purity is a prerequisite for efficacy. The capsule shell is made from plant-derived hypromellose, and the filler is solely brown rice flour. The entire formula excludes gluten, wheat, starch, refined sugar, artificial colors, artificial flavors, and preservatives, and is non-GMO. Each capsule is designed to deliver a pure active ingredient, free from any additives that might interfere with its action or place an unnecessary burden on the body.

**Usage and Dosage**
For daily maintenance, take 1 capsule daily, preferably about 30 minutes after a meal or before bedtime, with a full glass of water. During periods requiring enhanced support, intake can be increased to a maximum of 3 times daily, 1 capsule each time, based on personal experience or the advice of a healthcare practitioner. One bottle contains 60 capsules, suitable for a two-month foundation of daily support.

**Important Notes**
Dietary supplements are not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing.`,ingredient_reference:`**Saccharomyces boulardii**
This is a unique yeast strain with probiotic properties, distinct from Saccharomyces cerevisiae. It has been extensively studied and is used to support gut health. It does not permanently colonize the body but passes rapidly through the digestive tract, exerting positive effects during its transit. Its actions include helping to maintain gut microbiome balance and supporting the gut mucosa's own defense mechanisms. The freeze-dried form used in this product ensures high activity and stability, allowing it to effectively reach the site of action. It is particularly suitable for those needing gentle, non-bacterial gut support or for individuals with sensitive gut environments. In this formula, it is the sole and core active ingredient, designed to provide focused, clear support.`}}},{name:"Mannayan CHOLIN  + (Pulver)",url:"https://mannayan.com/Mannayan-CHOLIN-Pulver/010042",price:["28,90 €"],product_number:"010042",quantity:["100g"],image_url:"https://mannayan.com/media/23/44/4e/1625211178/Cholin%2B.jpg?ts=1625211187",image_local:"images/Cholin%2B.jpg",content:{cn:{label:`Mannayan CHOLIN+ 粉末
核心支持，清晰思维
• 支持肝脏健康与脂肪代谢
• 促进细胞膜结构与功能
• 为神经递质合成提供基础
• 辅助认知功能与记忆
每份（1平茶匙）含：胆碱酒石酸盐 3.6克（相当于纯胆碱 1.8克）
100克粉末装
纯净认证：纯素、无麸质、无大豆、无乳制品、无糖、无人工添加剂、非转基因`,short_description:`你是否感觉思绪有时像蒙上了一层薄雾，不够清晰？或者，在需要集中精力应对工作与生活时，总觉得能量调配不够顺畅？这些感受，可能与身体内一种基础但常被忽视的营养素——胆碱的供应有关。

胆碱是维持身体多项基础功能的关键。它参与构建健康的细胞膜，是肝脏处理脂肪时的重要助手，也是大脑中负责记忆与思维的信使物质的原料。虽然身体能少量合成，但现代饮食模式往往难以提供充足且稳定的来源。

Mannayan CHOLIN+ 提供高生物利用度的胆碱酒石酸盐粉末。这种形式温和易吸收，能有效补充日常所需。你可以轻松地将粉末搅拌在水或果汁中，随餐服用，让支持融入日常。

每份（一平茶匙）提供3.6克胆碱酒石酸盐，相当于1.8克纯胆碱。产品配方极致纯净，适合纯素食者，并且不含麸质、大豆、乳制品、糖及任何人工添加剂。`,long_description:`在快节奏的生活中，清晰的思维和稳定的内在状态是应对一切的根基。有时，我们会感到精神疲惫、注意力难以持续集中，或是觉得身体代谢废物的能力变慢，这背后可能指向一个共同的生理基础——胆碱的平衡。胆碱并非典型的维生素，但它对肝脏的正常工作、神经信号的传递以及细胞自身的维护都至关重要。当这种基础支持不足时，身体这座精密的城市，其交通与清洁系统就可能无法以最佳状态运行。

**食物态技术与递送形式**
本品采用胆碱酒石酸盐这一特定形式。酒石酸盐的加入并非随意，它能与胆碱形成稳定的复合物，显著提升其在消化道中的溶解性与吸收效率。这种形式被证实具有高生物利用度，意味着更多的有效成分能被身体识别并利用。更重要的是，胆碱酒石酸盐对胃肠道温和，即使对于肝脏功能需要特别关注的人群，也是一种适宜且有效的补充选择。粉末剂型赋予了使用的灵活性，让你可以轻松调整剂量，并融入任何饮品。

**一个完整的支持体系**
胆碱的作用是系统性的。在肝脏，它是合成磷脂的重要原料，协助脂肪以健康的方式转运和代谢，避免脂肪异常堆积，从而为肝脏减负。在神经系统，胆碱是乙酰胆碱的前体，这种神经递质直接关系到学习、记忆和肌肉控制。在全身每一个细胞，胆碱参与构建细胞膜的结构，确保营养物质和信号分子能够顺畅进出。补充胆碱，并非针对单一症状的“修补”，而是为这些基础的、互相关联的生理过程提供坚实的原料支持，从根源上促进整体的功能平衡。

**适合的人群**
它适合那些饮食中蛋黄、动物肝脏摄入有限的人，尤其是遵循纯素食或植物性饮食模式的朋友。它也适合长期面对高强度脑力工作，感觉认知负荷过重、需要额外神经支持的专业人士。对于关注肝脏长期健康，希望为其脂肪代谢功能提供辅助支持的人，以及寻求纯净、无复杂添加的营养补充方案的个人，CHOLIN+ 都是一个直接而清晰的选择。

**纯净与成分的完整性**
我们相信，补充剂应该只包含你真正需要的成分。Mannayan CHOLIN+ 的配方表极其简洁：只有胆碱酒石酸盐粉末。它不含任何填充剂、甜味剂、香料或色素。产品经过严格认证，确保不含麸质、大豆、乳制品、酵母和糖。它采用非转基因原料，并且完全适合纯素食者。这份纯净，让你摄入的每一份支持都明确无误。

**给健康管理者与经销商的说明**
胆碱在功能性医学和临床营养中是一个基础的支持营养素。临床实践常将其用于支持脂肪肝管理、认知健康方案以及针对甲基化循环支持的协同配方中。胆碱酒石酸盐因其良好的耐受性和生物利用度，是临床环境下可靠的选择。它可以与B族维生素（尤其是叶酸和B12）、甜菜碱等营养素搭配，共同支持身体的甲基化代谢途径，为更全面的健康管理方案提供核心模块。

**用法与剂量**
建议每日两次，每次半平匙到一平匙（约1.8-3.6克胆碱酒石酸盐），随餐服用。将粉末充分搅拌于一杯水或果汁中饮用即可。初始使用时，可从较低剂量开始，让身体适应。具体的用量可根据个人需求和健康专业人士的建议进行调整。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过建议每日食用量。请将产品置于儿童无法触及的阴凉干燥处保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**胆碱酒石酸盐**
胆碱是一种水溶性的必需营养素，其生理作用与B族维生素相似。它在体内承担着多重关键角色：是构成细胞膜结构磷脂（如磷脂酰胆碱）的必需成分，也是神经递质乙酰胆碱的直接前体。本品采用的胆碱酒石酸盐是胆碱与酒石酸形成的盐，这种形式显著提高了胆碱在消化道中的稳定性和吸收率。它特别适合饮食中胆碱来源不足（如纯素食者）、寻求认知功能支持或希望辅助肝脏脂肪代谢健康的人群。在配方中，它作为单一且足量的活性成分，直接、高效地填补日常摄入与生理需求之间的缺口。`},en:{label:`Mannayan CHOLIN+ Powder
Core Support for Clear Thinking
• Supports Liver Health & Fat Metabolism
• Promotes Cell Membrane Structure & Function
• Provides the Foundation for Neurotransmitter Synthesis
• Aids Cognitive Function & Memory
Per Serving (1 level teaspoon): Choline Bitartrate 3.6g (Equivalent to Pure Choline 1.8g)
100g Powder
Purity Certified: Vegan, Gluten-Free, Soy-Free, Dairy-Free, Sugar-Free, No Artificial Additives, Non-GMO`,short_description:`Do you ever feel like your thoughts are shrouded in a light fog, lacking clarity? Or, when you need to focus on work and life, does it seem like your energy isn't flowing smoothly? These feelings may be related to the supply of a fundamental yet often overlooked nutrient in your body—choline.

Choline is key to maintaining many of the body's basic functions. It helps build healthy cell membranes, acts as an important assistant for the liver in processing fats, and serves as the raw material for the messenger substances in the brain responsible for memory and thinking. Although the body can synthesize small amounts, modern dietary patterns often fail to provide a sufficient and consistent source.

Mannayan CHOLIN+ provides highly bioavailable choline bitartrate powder. This form is gentle and easy to absorb, effectively supplementing daily needs. You can easily stir the powder into water or juice and take it with meals, seamlessly integrating support into your daily routine.

Each serving (one level teaspoon) provides 3.6g of choline bitartrate, equivalent to 1.8g of pure choline. The formula is exceptionally pure, suitable for vegans, and free from gluten, soy, dairy, sugar, and any artificial additives.`,long_description:`In a fast-paced life, clear thinking and a stable internal state are the foundation for handling everything. At times, we may feel mentally fatigued, struggle to maintain focus, or sense that the body's ability to process waste has slowed down. These may point to a common physiological foundation—choline balance. Choline is not a typical vitamin, but it is crucial for the liver's normal function, nerve signal transmission, and cellular maintenance. When this foundational support is insufficient, the body's intricate systems—like traffic and sanitation in a city—may not operate at their best.

**Food-State Technology & Delivery Form**
This product uses the specific form of choline bitartrate. The addition of bitartrate is not arbitrary; it forms a stable complex with choline, significantly enhancing its solubility and absorption efficiency in the digestive tract. This form has been proven to have high bioavailability, meaning more of the active ingredient can be recognized and utilized by the body. Importantly, choline bitartrate is gentle on the gastrointestinal tract, making it a suitable and effective supplemental choice even for those with specific liver health considerations. The powder form offers flexibility, allowing you to easily adjust the dosage and incorporate it into any beverage.

**A Complete Support System**
Choline's role is systemic. In the liver, it is a key raw material for synthesizing phospholipids, assisting in the healthy transport and metabolism of fats, preventing abnormal fat accumulation, and thereby lightening the liver's load. In the nervous system, choline is the precursor to acetylcholine, a neurotransmitter directly involved in learning, memory, and muscle control. In every cell throughout the body, choline participates in building cell membrane structure, ensuring nutrients and signaling molecules can move in and out smoothly. Supplementing with choline is not a 'patch' for a single symptom but provides solid raw material support for these fundamental, interconnected physiological processes, promoting overall functional balance from the root.

**Who It's For**
It is suitable for those with limited intake of dietary sources like egg yolks and animal liver, especially friends following a vegan or plant-based diet. It also suits professionals facing long-term, high-intensity mental work who feel cognitive overload and need additional neural support. For those focused on long-term liver health, seeking to support its fat metabolism function, and individuals looking for a pure, additive-free nutritional supplement solution, CHOLIN+ is a direct and clear choice.

**Purity & Ingredient Integrity**
We believe supplements should only contain what you truly need. The Mannayan CHOLIN+ formula is exceptionally simple: just choline bitartrate powder. It contains no fillers, sweeteners, flavors, or colors. The product is rigorously certified to be free from gluten, soy, dairy, yeast, and sugar. It uses non-GMO ingredients and is completely suitable for vegans. This purity ensures every serving of support you take is clear and unambiguous.

**Note for Health Practitioners & Distributors**
Choline is a foundational support nutrient in functional medicine and clinical nutrition. Clinical practice often uses it to support fatty liver management, cognitive health protocols, and synergistic formulations for methylation cycle support. Choline bitartrate, due to its good tolerability and bioavailability, is a reliable choice in clinical settings. It can be combined with B vitamins (especially folate and B12), betaine, and other nutrients to jointly support the body's methylation metabolic pathways, serving as a core module for more comprehensive health management plans.

**Usage & Dosage**
Recommended: Twice daily, half to one level teaspoon (approx. 1.8-3.6g choline bitartrate) with meals. Stir the powder thoroughly into a glass of water or juice. When starting, begin with a lower dose to allow your body to adjust. Specific dosage can be tailored based on individual needs and the advice of a health professional.

**Important Information**
This product is a dietary supplement and is not intended to replace a varied and balanced diet. Do not exceed the recommended daily intake. Store in a cool, dry place out of reach of children. Do not consume if the seal is missing.`,ingredient_reference:`**Choline Bitartrate**
Choline is a water-soluble essential nutrient whose physiological roles are similar to B vitamins. It performs multiple key functions in the body: it is an essential component of phospholipids (like phosphatidylcholine) that form cell membrane structure, and it is the direct precursor to the neurotransmitter acetylcholine. The choline bitartrate used in this product is a salt formed from choline and tartaric acid. This form significantly improves choline's stability and absorption rate in the digestive tract. It is particularly suitable for those with insufficient dietary choline sources (such as vegans), individuals seeking cognitive function support, or those wishing to assist healthy liver fat metabolism. In the formula, it serves as the single, ample active ingredient, directly and efficiently bridging the gap between daily intake and physiological needs.`}}},{name:"Mannayan CHROM + (60 Kapseln)",url:"https://mannayan.com/Mannayan-CHROM-60-Kapseln/010043",price:["28,90 €"],product_number:"010043",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/6b/8c/0f/1766136867/Chrom%2B_2025.jpg?ts=1766136867",image_local:"images/Chrom%2B_2025.jpg",content:{cn:{label:"Mannayan 铬+ | 食物态铬补充剂 | 维持正常血糖水平 | 支持宏量营养素代谢 | 60粒胶囊 | 每粒含铬100微克 (250% NRV) | 全食物来源 | 无麸质、无乳糖、无大豆、无人工添加剂 | 适合素食者",short_description:`你是否感觉身体对糖分的处理能力不如从前，餐后容易感到疲倦或精力波动？这常常与体内一种关键微量元素的平衡有关。

Mannayan 铬+ 提供来自有机香蕉粉的全食物态铬，并采用专利技术，将铬与氨基酸、碳水化合物和优质脂肪酸自然结合。这种形式让铬在进入身体时，就已处于其天然的工作环境中，更易于被识别和利用。

每日一粒，提供100微克铬，满足身体对维持正常血糖和能量代谢的基础需求。产品纯净，不含常见的过敏原和人工成分，配方简单而专注。`,long_description:`当身体对糖分的反应变得迟钝，或是能量水平在进食后大起大落，这背后可能不仅仅是饮食选择的问题，而是一种内在调节机制的提示。铬，作为一种必需的微量元素，正是这种精细调节过程中的关键参与者。

**食物态递送技术**
Mannayan 铬+ 的核心在于其专利的“再自然化”过程。我们并非简单添加分离的矿物质，而是将铬富集于一种通过酶法从水培芥菜中获得的食物基质中。最终产物是一个“营养整体”，铬被自然地整合进由氨基酸、碳水化合物和优质脂肪酸构成的复合体中。这意味着，当你摄入它时，铬并非孤军奋战，而是携带着其天然伴侣一同抵达，以身体熟悉的方式被接纳和运用。

**完整的支持体系**
本配方以有机香蕉粉为基础，香蕉本身是铬的天然食物来源。在此基础上，我们加入了高生物利用度的吡啶甲酸铬，并通过专利技术将其转化为更接近食物状态的形式。这种结合旨在从不同层面提供支持：食物基质提供熟悉的载体和协同因子，而高纯度的铬则确保足量的活性成分。它们共同作用于糖代谢途径，帮助维持已经处于正常范围内的血糖水平，并支持碳水化合物、脂肪和蛋白质这些宏量营养素的正常代谢，这是身体能量生产的基石。

**适合的人群**
这款产品适合那些饮食结构可能不够均衡，或感觉身体对精致碳水化合物处理能力有所变化的成年人。它也适用于追求纯净、简单补充方案的素食者，以及希望避免常见过敏原如麸质、乳糖、大豆的人群。对于日常饮食中全谷物和优质蛋白摄入有限的人，它可作为一项基础性的营养支持。

**纯净与成分完整性**
我们坚信补充剂应如其来源般纯净。Mannayan 铬+ 不含转基因成分、麸质、酵母、防腐剂、人工色素与香精、乳制品、大豆、淀粉、小麦及人造糖。胶囊外壳仅使用植物源的羟丙甲纤维素。每一批产品都致力于成分的透明与完整。

**健康管理者与搭配方案**
许多自然疗法医师和营养顾问将铬视为代谢支持方案中的基础元素。它常被纳入更广泛的健康管理计划中，与强调低血糖负荷的饮食、规律运动以及压力管理相结合。在专业指导下，它也可能与其他支持能量代谢或胰岛素敏感性的营养素，如镁、锌、B族维生素或α-硫辛酸等协同使用，以构建更全面的支持网络。

**用法与剂量**
建议每日服用1粒胶囊，随足量液体吞服，或遵循专业健康顾问的指导。一瓶包含60粒胶囊，可供两个月的日常使用。请勿超过推荐每日摄入量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若密封条缺失，请勿食用。正在使用胰岛素的糖尿病患者，在开始服用任何铬补充剂前，建议咨询医生，因为它可能会影响胰岛素需求。`,ingredient_reference:`**有机香蕉粉**
作为配方的基础载体，有机香蕉粉是铬的天然膳食来源之一。它提供了食物本身的基质，其中包含的天然糖分、纤维和植物化合物，为铬创造了一个熟悉的食物环境。这种全食物形式有助于矿物质的温和递送。它特别适合偏好食物基补充剂、寻求更接近天然饮食摄入方式的人群。在配方中，它为专利的铬复合体提供了基础背景。

**吡啶甲酸铬**
这是一种经过充分研究的铬元素形式，以其良好的稳定性和生物利用度而闻名。铬是葡萄糖耐量因子的关键组成部分，参与支持胰岛素在体内的正常功能，从而帮助维持健康的血糖代谢。我们选择此形式以确保产品能提供足量、有效的铬。它适合需要针对性补充铬以支持代谢健康的人群。在专利技术下，它与食物基质结合，转化为更复杂的“营养整体”。

**铬（来自专利食物复合体）**
这是通过专利工艺将铬“再自然化”后形成的核心活性成分。在此过程中，铬被整合进一个由氨基酸、碳水化合物和优质脂肪酸构成的天然食物复合体中。这种结构模拟了食物中矿物质的天然存在状态，可能提升其在体内的识别与利用效率。它作用于维持正常血糖水平和宏量营养素代谢的根本环节。适合那些重视营养成分生物协同性、追求“食物状态”补充理念的使用者。它是整个配方协同作用的最终体现，将单一矿物质转化为一个完整的营养单元。`},en:{label:"Mannayan Chromium+ | Food-State Chromium Supplement | Supports Normal Blood Sugar Levels | Aids Macronutrient Metabolism | 60 Capsules | 100mcg Chromium per Capsule (250% NRV) | Whole Food Source | Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives | Suitable for Vegetarians",short_description:`Do you feel your body's ability to handle sugar isn't what it used to be, often experiencing fatigue or energy fluctuations after meals? This is often related to the balance of a key trace element in the body.

Mannayan Chromium+ provides food-state chromium from organic banana powder, using a patented technology that naturally binds chromium with amino acids, carbohydrates, and quality fatty acids. This form allows chromium to enter the body already within its natural working environment, making it easier for the body to recognize and utilize.

One capsule daily provides 100mcg of chromium, meeting the body's foundational needs for maintaining normal blood sugar and energy metabolism. The product is pure, free from common allergens and artificial ingredients, with a simple and focused formula.`,long_description:`When the body's response to sugar becomes sluggish, or energy levels spike and crash after eating, it may signal more than just dietary choices—it can be a sign of an internal regulatory mechanism. Chromium, an essential trace element, is a key player in this delicate balancing act.

**Food-State Delivery Technology**
The core of Mannayan Chromium+ lies in its patented 're-naturalization' process. We don't simply add isolated minerals; instead, chromium is enriched within a food matrix obtained enzymatically from hydroponically grown mustard greens. The final product is a 'nutritional whole,' where chromium is naturally integrated into a complex of amino acids, carbohydrates, and quality fatty acids. This means when you take it, chromium doesn't arrive alone—it comes with its natural companions, ready to be accepted and used in a way the body recognizes.

**A Complete Support System**
This formula is based on organic banana powder, a natural food source of chromium. To this, we've added highly bioavailable chromium picolinate, transformed via patented technology into a form closer to its natural food state. This combination aims to provide support on multiple levels: the food matrix offers a familiar carrier and synergistic factors, while the high-purity chromium ensures an adequate amount of the active component. Together, they work on sugar metabolism pathways, helping to maintain already normal blood sugar levels and supporting the normal metabolism of macronutrients—carbohydrates, fats, and proteins—which are the foundation of the body's energy production.

**Who It's For**
This product is suitable for adults whose diets may not be perfectly balanced or who feel their body's ability to handle refined carbohydrates has changed. It's also ideal for vegetarians seeking a pure, simple supplement, and for those wishing to avoid common allergens like gluten, lactose, and soy. For individuals with limited intake of whole grains and quality protein in their daily diet, it can serve as foundational nutritional support.

**Purity and Ingredient Integrity**
We believe supplements should be as pure as their source. Mannayan Chromium+ contains no GMOs, gluten, yeast, preservatives, artificial colors or flavors, dairy, soy, starch, wheat, or artificial sweeteners. The capsule shell uses only plant-derived hydroxypropyl methylcellulose. Every batch is committed to ingredient transparency and integrity.

**For Health Managers and Combination Plans**
Many naturopathic doctors and nutritional consultants view chromium as a foundational element in metabolic support protocols. It's often incorporated into broader health management plans alongside a diet emphasizing a low glycemic load, regular exercise, and stress management. Under professional guidance, it may also be used synergistically with other nutrients that support energy metabolism or insulin sensitivity, such as magnesium, zinc, B vitamins, or alpha-lipoic acid, to build a more comprehensive support network.

**Usage and Dosage**
Take 1 capsule daily with plenty of liquid, or as directed by a qualified health advisor. One bottle contains 60 capsules, providing a two-month supply. Do not exceed the recommended daily intake.

**Important Information**
Food supplements should not replace a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is missing. Individuals with diabetes using insulin are advised to consult a doctor before starting any chromium supplement, as it may affect insulin requirements.`,ingredient_reference:`**Organic Banana Powder**
Serving as the foundational carrier of the formula, organic banana powder is a natural dietary source of chromium. It provides the matrix of the food itself, containing natural sugars, fiber, and plant compounds that create a familiar food environment for chromium. This whole-food form aids in the gentle delivery of the mineral. It is particularly suitable for those who prefer food-based supplements and seek an intake method closer to a natural diet. In the formula, it provides the foundational context for the patented chromium complex.

**Chromium Picolinate**
This is a well-researched form of chromium, known for its good stability and bioavailability. Chromium is a key component of Glucose Tolerance Factor, involved in supporting the normal function of insulin in the body, thereby helping to maintain healthy blood sugar metabolism. We chose this form to ensure the product delivers an adequate and effective amount of chromium. It is suitable for individuals needing targeted chromium supplementation to support metabolic health. Through patented technology, it is combined with the food matrix and transformed into a more complex 'nutritional whole.'

**Chromium (from Patented Food Complex)**
This is the core active ingredient formed after chromium is 're-naturalized' through a patented process. In this process, chromium is integrated into a natural food complex composed of amino acids, carbohydrates, and quality fatty acids. This structure mimics the natural state of minerals in food, potentially enhancing the body's recognition and utilization efficiency. It works at the fundamental level of maintaining normal blood sugar levels and macronutrient metabolism. It is suitable for users who value the biological synergy of nutrients and pursue a 'food-state' supplementation philosophy. It is the ultimate expression of the formula's synergistic action, transforming a single mineral into a complete nutritional unit.`}}},{name:"Mannayan CLEAN + (60 Kapseln)",url:"https://mannayan.com/Mannayan-CLEAN-60-Kapseln/010044",price:["22,90 €"],product_number:"010044",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/dc/0d/d1/1766136899/Clean%2B_2025.jpg?ts=1766136899",image_local:"images/Clean%2B_2025.jpg",content:{cn:{label:`Mannayan CLEAN+
草本益生菌配方
• 支持肠道菌群平衡 • 温和促进肠道蠕动 • 提供植物纤维与草本精华 • 不含常见过敏原与人工添加物
60粒胶囊 | 素食胶囊 | 无麸质、无大豆、无乳糖、无人工添加剂`,short_description:`你是否感觉身体沉重，消化系统似乎总在慢速运转？现代饮食和快节奏生活，有时会让我们的身体需要一次温和而深层的调整。

Mannayan CLEAN+ 是一款独特的草本益生菌配方。它并非强效泻药，而是通过植物纤维、精选草本和益生菌的协同作用，为肠道环境提供支持，帮助恢复其自然的节律和清洁功能。

配方包含了洋车前子壳、魔芋葡甘露聚糖等天然纤维，以及紫花苜蓿、辣椒、鼠李皮等17种植物精华，并加入了嗜酸乳杆菌。这些成分共同协作，旨在从多个层面支持消化系统的健康。

每瓶包含60粒素食胶囊。配方纯净，不含麸质、大豆、乳制品、酵母、糖、淀粉及人工色素、香料和防腐剂，适合素食者及对多种食物敏感的人群。`,long_description:`当消化变得迟缓，身体感到滞重，或是饮食过后总有不适感萦绕不去时，这往往是身体在提示我们需要关注内在环境的平衡。肠道不仅是消化器官，更是整体健康的基础，它的状态直接影响着我们的精力和感受。

**食物态技术与配方理念**
Mannayan CLEAN+ 将益生菌与经过精心挑选的草本植物及纤维结合在一起。这种组合方式旨在模拟一种更为整体的支持方案。益生菌为肠道引入有益菌种，而多种植物纤维则为这些菌群和肠道自身功能提供所需的营养基质，草本成分则以其传统的支持特性融入其中。整个配方以食物为基础，旨在协同工作，而非孤立地发挥作用。

**一个完整的支持体系**
配方中的成分各司其职，又相互增强。洋车前子壳和魔芋葡甘露聚糖是温和的纤维来源，有助于增加体积并促进肠道规律运动。十七种植物精华，如紫花苜蓿、辣椒、鼠李皮、黄连、拉帕乔树皮等，各自贡献其传统的支持特性，有的侧重于舒缓，有的侧重于滋养消化组织。核心的嗜酸乳杆菌则直接补充有益菌群。它们共同构建了一个多层次的支持网络，旨在帮助清理与重建健康的肠道环境。

**适合在这样的时候考虑使用**
当你感觉日常饮食过于精细或油腻，需要为消化系统提供一些植物纤维和草本支持时；在季节更替或生活习惯改变后，希望帮助身体重新找回平衡节奏时；或者，你本身就注重通过天然草本和益生菌来维护长期的消化健康。它适用于成年人寻求一种温和、全面的肠道养护方案。

**对纯净与成分完整性的坚持**
我们深知摄入物质的纯净度至关重要。因此，该配方坚决排除了一系列常见问题成分：无麸质、无大豆、无乳糖、无酵母、无添加糖、无淀粉、无人造色素、香料或防腐剂。胶囊采用植物纤维素制成，完全适合素食者和纯素者。每一批产品都确保不涉及转基因技术。

**健康管理者的视角：搭配与背景**
许多自然疗法医师或营养顾问会将此类配方纳入更广泛的健康管理方案中。它常被用于为期数周的肠道养护计划的开端或伴随阶段，与饮食调整、水分补充及其他支持肝臟或代谢的补充剂相结合。临床背景的专业人士看重其多成分协同作用以及极高的纯净度，这使其能够安全地适用于包括对念珠菌敏感、有多种食物不耐受在内的广泛人群。

**用法与剂量**
作为为期约四周的肠道养护计划的一部分，建议每日服用1至3粒胶囊，于餐前用足量水送服。具体剂量可根据个人需求和健康顾问的建议进行调整。重要的是，服用期间务必饮用充足的水分，以帮助纤维成分充分发挥作用。

**重要提示**
本产品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐的每日食用量。孕妇、哺乳期妇女不应使用。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**洋车前子壳粉**
洋车前子壳是一种源自植物的天然可溶性纤维。它在接触水分后会膨胀形成凝胶状物质，这有助于增加粪便体积并软化其质地，从而温和地促进肠道规律蠕动。其所提供的纤维也是肠道有益菌群的营养来源。在配方中，它作为基础的物理清洁和支持成分，与其他草本协同工作。

**魔芋葡甘露聚糖**
源自魔芋根，这是一种高度黏稠的可溶性膳食纤维。它具有极强的吸水性，能形成饱腹感，并同样通过增加体积来支持肠道蠕动。其凝胶特性有助于在消化过程中形成温和的推进力。它与洋车前子壳共同构成了配方的核心纤维基质，为整个清洁过程提供物理基础。

**嗜酸乳杆菌**
这是一种广泛研究和使用的益生菌菌株，属于肠道内的常见有益菌。它通过定植在肠道内，帮助维持菌群平衡，支持健康的肠道环境，并为消化过程提供辅助。在此配方中，益生菌的加入旨在与植物纤维和草本相辅相成，在清洁的同时引入有益菌种，支持肠道生态的再平衡。

**综合植物精华（紫花苜蓿、辣椒、苹果果胶、丁香、拉帕乔树皮、黄连、茴香籽、大蒜等）**
这组精选的草本和植物成分各具传统的支持特性。例如，紫花苜蓿富含营养，常用于整体滋养；辣椒含有辣椒素，能温和刺激循环和消化液分泌；苹果果胶是另一种有益的可溶性纤维；丁香、大蒜具有传统的抗菌支持特性；黄连、拉帕乔树皮常用于支持消化系统健康和免疫应答。它们共同提供了一个广泛的植物营养和活性成分谱，从不同角度支持消化系统的清洁和健康功能。

**关键植物提取物（鼠李皮、覆盆子叶、牛蒡根、小檗皮）**
这些是经过浓缩的草本提取物，以更高的活性成分含量提供针对性支持。鼠李皮提取物传统上用于支持肠道蠕动和清洁；覆盆子叶富含单宁，有助于舒缓肠道组织；牛蒡根被认为支持身体的自然排毒途径；小檗皮（主要活性成分为小檗碱）常用于支持健康的肠道环境和代谢。这些提取物与完整的草本粉末相结合，增强了配方在特定方面的支持深度。

**辛酸镁**
这是中链脂肪酸辛酸的镁盐形式。辛酸以其支持健康的肠道环境特性而闻名，尤其在某些微生物平衡方面。在此，它作为一种辅助成分，帮助创造更有利于有益菌群生长、而不利于问题微生物过度繁殖的肠道条件，与益生菌和草本成分协同作用。`},en:{label:`Mannayan CLEAN+
Herbal Probiotic Formula
• Supports Gut Flora Balance • Gently Promotes Bowel Motility • Provides Plant Fiber & Herbal Essences • Free from Common Allergens & Artificial Additives
60 Capsules | Vegetarian Capsules | Gluten-Free, Soy-Free, Lactose-Free, No Artificial Additives`,short_description:`Do you feel heavy, as if your digestive system is constantly running in slow motion? Modern diets and fast-paced living can sometimes leave our bodies in need of a gentle, deep reset.

Mannayan CLEAN+ is a unique herbal probiotic formula. It is not a harsh laxative, but rather works through the synergy of plant fibers, select herbs, and probiotics to support the intestinal environment, helping to restore its natural rhythm and cleansing function.

This formula includes natural fibers like psyllium husk and konjac glucomannan, along with 17 plant essences such as alfalfa, cayenne, and cascara sagrada, and is fortified with Lactobacillus acidophilus. These ingredients work together to support digestive health from multiple angles.

Each bottle contains 60 vegetarian capsules. The formula is pure, free from gluten, soy, dairy, yeast, sugar, starch, and artificial colors, flavors, or preservatives. It is suitable for vegetarians and those with multiple food sensitivities.`,long_description:`When digestion slows, the body feels sluggish, or a sense of discomfort lingers after meals, it's often a sign that our internal environment needs attention. The gut is not just a digestive organ; it's the foundation of overall health, and its state directly impacts our energy and well-being.

**Food-State Technology & Formulation Philosophy**
Mannayan CLEAN+ combines probiotics with carefully selected herbs and fibers. This blend aims to mimic a more holistic support system. Probiotics introduce beneficial bacteria, while various plant fibers provide the nutritional substrate these microbes and gut functions need. Herbal components contribute their traditional supportive properties. The entire formula is food-based, designed to work synergistically, not in isolation.

**A Complete Support System**
Each ingredient in the formula has a specific role, yet they enhance one another. Psyllium husk and konjac glucomannan are gentle fiber sources that help add bulk and promote regular bowel movements. Seventeen plant essences, such as alfalfa, cayenne, cascara sagrada, goldenseal, and pau d'arco bark, each contribute their traditional supportive properties—some focusing on soothing, others on nourishing digestive tissues. The core Lactobacillus acidophilus directly replenishes beneficial flora. Together, they create a multi-layered support network designed to help cleanse and rebuild a healthy gut environment.

**Consider Using It When...**
You feel your daily diet is too refined or greasy and your digestive system needs some plant fiber and herbal support; when you wish to help your body regain its balanced rhythm after seasonal changes or shifts in lifestyle; or if you already prioritize maintaining long-term digestive health through natural herbs and probiotics. It is suitable for adults seeking a gentle, comprehensive gut maintenance plan.

**Commitment to Purity & Ingredient Integrity**
We understand the importance of purity in what we consume. Therefore, this formula strictly excludes a range of common problematic ingredients: it is gluten-free, soy-free, lactose-free, yeast-free, free from added sugars, starch, and artificial colors, flavors, or preservatives. The capsules are made from plant cellulose, making them fully suitable for vegetarians and vegans. Every batch is guaranteed non-GMO.

**From a Health Practitioner's Perspective: Pairing & Context**
Many naturopathic doctors or nutritional consultants incorporate such formulas into broader wellness protocols. It is often used at the beginning or as part of a several-week gut maintenance plan, combined with dietary adjustments, increased hydration, and other supplements that support liver or metabolic function. Clinically-minded professionals value its multi-ingredient synergy and high purity, allowing it to be safely used by a wide range of individuals, including those sensitive to candida or with multiple food intolerances.

**Usage & Dosage**
As part of an approximately four-week gut maintenance plan, it is recommended to take 1 to 3 capsules daily with a full glass of water before meals. The specific dosage can be adjusted based on individual needs and the advice of a health consultant. It is crucial to drink plenty of water during use to help the fiber components work effectively.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced and varied diet. Do not exceed the recommended daily intake. Not for use by pregnant or breastfeeding women. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's safety seal is missing.`,ingredient_reference:`**Psyllium Husk Powder**
Psyllium husk is a natural, plant-derived soluble fiber. It expands upon contact with water to form a gel-like substance, which helps increase stool bulk and soften its consistency, thereby gently promoting regular bowel movements. The fiber it provides also serves as a nutritional source for beneficial gut bacteria. In this formula, it acts as a foundational physical cleansing and support component, working synergistically with other herbs.

**Konjac Glucomannan**
Derived from the konjac root, this is a highly viscous soluble dietary fiber. It has strong water-absorbing properties, can promote a feeling of fullness, and similarly supports bowel motility by increasing bulk. Its gel-like quality helps create a gentle pushing force during digestion. Together with psyllium husk, it forms the core fiber matrix of the formula, providing the physical foundation for the cleansing process.

**Lactobacillus Acidophilus**
This is a widely researched and used probiotic strain, commonly found as a beneficial bacterium in the gut. It helps maintain microbial balance, supports a healthy intestinal environment, and aids the digestive process by colonizing the gut. In this formula, the addition of probiotics is designed to complement the plant fibers and herbs, introducing beneficial strains while cleansing to support the rebalancing of the gut ecosystem.

**Comprehensive Plant Essences (Alfalfa, Cayenne, Apple Pectin, Clove, Pau D'Arco Bark, Goldenseal, Fennel Seed, Garlic, etc.)**
This selected group of herbs and plant components each possess traditional supportive properties. For example, alfalfa is nutrient-rich and often used for overall nourishment; cayenne contains capsaicin, which gently stimulates circulation and digestive secretions; apple pectin is another beneficial soluble fiber; clove and garlic have traditional antimicrobial support properties; goldenseal and pau d'arco bark are traditionally used to support digestive system health and immune response. Together, they provide a broad spectrum of plant nutrients and active compounds, supporting the cleansing and healthy function of the digestive system from various angles.

**Key Plant Extracts (Cascara Sagrada, Raspberry Leaf, Burdock Root, Barberry Bark)**
These are concentrated herbal extracts, offering targeted support with higher levels of active constituents. Cascara sagrada extract is traditionally used to support bowel motility and cleansing; raspberry leaf is rich in tannins, helping to soothe intestinal tissues; burdock root is believed to support the body's natural detoxification pathways; barberry bark (whose primary active is berberine) is commonly used to support a healthy gut environment and metabolism. These extracts, combined with the whole herb powders, enhance the formula's depth of support in specific areas.

**Magnesium Caprylate**
This is the magnesium salt form of caprylic acid, a medium-chain fatty acid. Caprylic acid is known for its properties that support a healthy intestinal environment, particularly concerning certain microbial balances. Here, it serves as a complementary ingredient, helping to create gut conditions more favorable for beneficial flora and less conducive to the overgrowth of problematic microbes, working synergistically with the probiotics and herbal components.`}}},{name:"Mannayan ColoVital",url:"https://mannayan.com/Mannayan-ColoVital/010047",price:["29,50 €"],product_number:"010047",quantity:["90 Tabletten"],image_url:"https://mannayan.com/media/58/15/bb/1624950934/Colovital.jpg?ts=1624950942",image_local:"images/Colovital.jpg",content:{cn:{label:`Mannayan ColoVital
肠道活力咀嚼片
• 支持肠道菌群平衡 • 促进规律消化 • 提供天然维生素C • 含益生菌与益生元 • 清洁配方，无麸质
90片 | 每日3片`,short_description:`你是否感觉消化过程不再像以前那样顺畅，饭后常有饱胀感，或者身体的精力状态与消化舒适度息息相关？肠道健康是整体活力的基石，它的状态直接影响着我们的日常感受。

ColoVital 是一款专为支持肠道日常健康而设计的综合配方。它结合了精选的益生菌、天然植物纤维和维生素C，旨在从多个层面为肠道环境提供支持。益生菌帮助补充有益菌群，植物纤维为它们提供养分，而来自天然来源的维生素C则贡献抗氧化支持。

每日只需咀嚼三片，即可方便地融入日常健康管理。配方纯净，不含麸质、人工色素、香料或防腐剂，让你在支持健康的同时，也安心于成分的纯粹。`,long_description:`当消化节奏变得缓慢，腹部时常感到不适，或是身体的能量水平似乎与消化系统的状态紧密相连时，我们往往能体会到肠道健康的重要性。它不仅是消化吸收的场所，更是影响整体感受与内在平衡的核心。

**食物态成分与协同体系**
ColoVital 的配方理念在于提供一套完整的支持体系。它并非单一成分的作用，而是通过益生菌、益生元、消化酶和植物营养素的协同配合来工作。配方中的低聚果糖和洋车前子壳粉作为益生元，为添加的嗜酸乳杆菌和长双歧杆菌等有益菌群提供专属营养，帮助它们在肠道中定植与繁衍。同时，添加的菠萝蛋白酶和木瓜蛋白酶有助于分解蛋白质，支持整体的消化舒适度。来自针叶樱桃提取物和抗坏血酸的维生素C，则为肠道细胞提供抗氧化支持，共同维护一个健康的内部环境。

**适合人群**
这款产品适合那些因饮食不规律、膳食纤维摄入不足而感到消化负担加重的人；也适合在旅行、季节变化或生活节奏紧张后，希望帮助肠道恢复规律节奏的人。对于注重通过内在调理来提升整体活力感，并寻求一种方便、纯净的日常支持方式的人来说，它是一个务实的选择。

**纯净与成分完整性**
我们深知摄入物质的纯净至关重要。ColoVital 不含麸质、人工防腐剂、人工色素或人工香料。配方中的微晶纤维素等辅料仅用于确保片剂的稳定成型，活性成分才是我们关注的核心。每一批产品都经过严格质控，确保你摄入的是有效且洁净的成分。

**用法与剂量**
建议每日咀嚼3片，或遵从业内健康管理者的指导。咀嚼后请饮用足量温水。每瓶包含90片，约为30天的用量。坚持日常使用，有助于为肠道健康提供持续的支持。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐每日食用量。请将产品置于儿童无法触及之处，于阴凉干燥处避光保存。若瓶口密封条破损，请勿食用。`,ingredient_reference:`**嗜酸乳杆菌与长双歧杆菌**
这是两种经过深入研究的有益菌株，属于益生菌。它们天然存在于健康肠道中，有助于维持肠道菌群的多样性与平衡。当因饮食或压力导致菌群失调时，补充这些特定菌株可以帮助恢复有益菌的数量，支持肠道屏障功能。适合所有希望从基础层面维护肠道微生态健康的人群。在配方中，它们与益生元协同作用，以提高存活和定植效率。

**低聚果糖**
一种天然的水溶性膳食纤维，属于益生元。它不能被人体直接消化，但可以选择性地被肠道有益菌发酵利用，作为其生长的“燃料”。这种作用有助于刺激有益菌的增殖，从而间接支持肠道健康。它为配方中的益生菌提供了持续的营养支持，是构建健康肠道环境的重要基石。

**洋车前子壳粉**
源自洋车前子种子的外壳，富含可溶性与不可溶性纤维。它具有良好的吸水性，能在肠道中形成柔软的团块，有助于增加粪便体积并促进其规律移动。这种温和的物理作用能支持正常的排便节奏，同时其可发酵部分也能为肠道菌群提供养分。适合日常膳食纤维摄入不足、希望改善肠道蠕动功能的人群。

**针叶樱桃提取物与抗坏血酸（维生素C）**
针叶樱桃是自然界中维生素C含量极高的水果之一，其提取物提供了天然的维生素C来源；抗坏血酸则是维生素C的直接形式。维生素C是一种重要的抗氧化剂，有助于保护细胞免受氧化应激。在肠道健康背景下，它对维持肠道黏膜细胞的健康具有支持作用。这种天然与直接形式的组合，确保了维生素C的稳定供应和良好吸收。

**螺旋藻粉与甜菜根粉**
螺旋藻是一种蓝绿藻，富含蛋白质、维生素和矿物质，提供广泛的植物营养素支持。甜菜根粉则含有天然的硝酸盐和抗氧化物质。它们共同为配方增添了来自植物的全面营养密度，旨在为身体和肠道细胞提供额外的营养支持，是整体健康配方的有益补充。

**菠萝蛋白酶与木瓜蛋白酶**
这是两种来源于菠萝和木瓜的蛋白水解酶。它们的主要作用是帮助分解食物中的蛋白质，将其分解为更小的肽段和氨基酸，从而支持整体的消化过程，减轻消化系统的负担。在配方中，它们与益生菌、益生元协同，从“消化”和“养护”两个维度共同支持肠道舒适度。

**柠檬皮（磨粉）**
柠檬皮富含类黄酮等生物活性物质和天然纤维。它为产品带来天然的柑橘风味，同时其含有的植物化合物也可能提供额外的抗氧化益处。在配方中，它与其他植物成分一起，贡献了来自完整食物的协同价值。`},en:{label:`Mannayan ColoVital
Gut Vitality Chewable Tablets
• Supports Gut Flora Balance • Promotes Regular Digestion • Provides Natural Vitamin C • Contains Probiotics & Prebiotics • Clean Formula, Gluten-Free
90 Tablets | 3 Tablets Daily`,short_description:`Does your digestion feel less smooth than before, often leaving you with a sense of fullness after meals? Or do you notice that your energy and overall well-being seem closely tied to digestive comfort? Gut health is the cornerstone of overall vitality, and its state directly influences how we feel day to day.

ColoVital is a comprehensive formula specifically designed to support daily gut health. It combines selected probiotics, natural plant fibers, and Vitamin C, aiming to support the intestinal environment on multiple levels. Probiotics help replenish beneficial flora, plant fibers provide them with nourishment, and Vitamin C from natural sources contributes antioxidant support.

Simply chew three tablets daily to conveniently integrate it into your wellness routine. The formula is pure, free from gluten, artificial colors, flavors, or preservatives, allowing you to support your health while feeling assured about ingredient integrity.`,long_description:`When digestion slows, abdominal discomfort arises, or energy levels seem tightly linked to the state of your digestive system, we often come to appreciate the importance of gut health. It's not just the site of digestion and absorption; it's a core influence on our overall feeling and internal balance.

**Whole-Food Ingredients & Synergistic System**
The formulation philosophy behind ColoVital is to provide a complete support system. It works not through a single ingredient, but via the synergistic combination of probiotics, prebiotics, digestive enzymes, and phytonutrients. Prebiotics like fructooligosaccharides and psyllium husk powder in the formula provide specialized nutrition for added beneficial strains such as Lactobacillus acidophilus and Bifidobacterium longum, helping them colonize and thrive in the gut. Simultaneously, added bromelain and papain help break down proteins, supporting overall digestive comfort. Vitamin C from acerola cherry extract and ascorbic acid provides antioxidant support for intestinal cells, collectively helping maintain a healthy internal environment.

**Who It's For**
This product is suitable for those who feel increased digestive burden due to irregular eating habits or insufficient dietary fiber intake. It's also for anyone looking to help their gut regain a regular rhythm after travel, seasonal changes, or periods of life stress. For individuals focused on enhancing overall vitality through internal care and seeking a convenient, pure form of daily support, it's a practical choice.

**Purity & Ingredient Integrity**
We understand the importance of purity in what you consume. ColoVital contains no gluten, artificial preservatives, artificial colors, or artificial flavors. Excipients like microcrystalline cellulose are used only to ensure tablet stability—the active ingredients are our core focus. Every batch undergoes strict quality control to ensure you're receiving effective and clean ingredients.

**Usage & Dosage**
It is recommended to chew 3 tablets daily, or as directed by your healthcare practitioner. Drink an adequate amount of warm water after chewing. Each bottle contains 90 tablets, approximately a 30-day supply. Consistent daily use helps provide ongoing support for gut health.

**Important Notes**
Dietary supplements are not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is broken.`,ingredient_reference:`**Lactobacillus acidophilus & Bifidobacterium longum**
These are two well-researched beneficial bacterial strains, classified as probiotics. They are naturally present in a healthy gut and help maintain the diversity and balance of the gut microbiota. When dysbiosis occurs due to diet or stress, supplementing with these specific strains can help restore beneficial bacteria levels and support gut barrier function. Suitable for anyone looking to maintain gut microbiome health at a foundational level. In the formula, they work synergistically with prebiotics to enhance survival and colonization efficiency.

**Fructooligosaccharides (FOS)**
A natural, water-soluble dietary fiber classified as a prebiotic. It is not directly digested by the body but can be selectively fermented and utilized by beneficial gut bacteria as a 'fuel' source for their growth. This action helps stimulate the proliferation of beneficial bacteria, thereby indirectly supporting gut health. It provides ongoing nutritional support for the probiotics in the formula and is a key building block for a healthy intestinal environment.

**Psyllium Husk Powder**
Derived from the husk of psyllium seeds, it is rich in both soluble and insoluble fiber. It has excellent water-absorbing properties, forming a soft bulk in the intestines that helps increase stool volume and promote its regular movement. This gentle physical action supports normal bowel rhythm, while its fermentable portion also provides nourishment for gut flora. Suitable for those with insufficient daily dietary fiber intake who wish to support healthy intestinal motility.

**Acerola Cherry Extract & Ascorbic Acid (Vitamin C)**
Acerola cherry is one of nature's richest fruit sources of Vitamin C, and its extract provides a natural source; ascorbic acid is the direct form of Vitamin C. Vitamin C is an important antioxidant that helps protect cells from oxidative stress. In the context of gut health, it supports the health of intestinal mucosal cells. This combination of natural and direct forms ensures a stable supply and good absorption of Vitamin C.

**Spirulina Powder & Beetroot Powder**
Spirulina is a blue-green algae rich in protein, vitamins, and minerals, providing broad-spectrum phytonutrient support. Beetroot powder contains natural nitrates and antioxidants. Together, they add comprehensive plant-based nutritional density to the formula, aiming to provide additional nutritional support for the body and intestinal cells, serving as a beneficial complement to the overall health formula.

**Bromelain & Papain**
These are two proteolytic enzymes derived from pineapple and papaya, respectively. Their primary role is to help break down dietary proteins into smaller peptides and amino acids, thereby supporting the overall digestive process and easing the burden on the digestive system. In the formula, they work synergistically with probiotics and prebiotics, supporting gut comfort from both the 'digestion' and 'nurturing' dimensions.

**Lemon Peel (Powdered)**
Lemon peel is rich in bioactive compounds like flavonoids and natural fiber. It imparts a natural citrus flavor to the product, while the plant compounds it contains may also provide additional antioxidant benefits. In the formula, along with other plant ingredients, it contributes synergistic value from whole foods.`}}},{name:"Mannayan CURCU FORTE + (60 Kapseln)",url:"https://mannayan.com/Mannayan-CURCU-FORTE-60-Kapseln/010048",price:["40,90 €"],product_number:"010048",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/47/78/77/1625484307/Curcu%20Forte%2B.jpg?ts=1625484314",image_local:"images/Curcu%20Forte%2B.jpg",content:{cn:{label:`Mannayan CURCU FORTE +
强效姜黄素与生姜
• 支持关节舒适与灵活度
• 促进健康的炎症反应管理
• 维护消化系统平衡
• 提供抗氧化保护
每份含量：姜黄素250毫克（含64%姜黄素类化合物），生姜根150毫克（含5%姜辣素）
60粒胶囊 | 每日2次，每次1粒
纯净配方：无麸质、无乳糖、非转基因、素食适用`,short_description:`你是否感觉身体在忙碌一天后，关节和肌肉的僵硬感变得明显，或者消化系统在压力下容易失衡？这些都是身体需要额外支持的信号。

CURCU FORTE+ 结合了高浓度的姜黄素与生姜根精华，旨在从根源上提供支持。姜黄素以其对健康炎症反应的调节作用而闻名，而生姜则有助于消化舒适和循环。它们协同工作，帮助身体恢复内在的平衡状态。

产品采用创新的Longvida®优化姜黄素技术，这种脂质体形式的姜黄素能更有效地进入血液循环并靶向组织，意味着身体能更好地吸收和利用这些珍贵的植物精华。

每粒胶囊提供250毫克姜黄素和150毫克生姜根提取物。配方纯净，不含麸质、乳糖、人工添加剂，适合素食者，让你在补充营养时无需顾虑。`,long_description:`早晨醒来时身体的沉重感，或是长时间工作后关节发出的细微信号，常常提醒我们身体内部需要更多的关注与平衡。这不仅仅是单一部位的不适，而是整体系统协调性的体现。

**食物态技术与递送系统**
CURCU FORTE+ 的核心是Longvida®优化姜黄素。这项技术并非简单提取，而是将姜黄素封装在一种类似细胞膜的脂质结构中。这种"食物态"的递送方式，让姜黄素能够顺利通过消化屏障，直接进入血液循环，并精准地到达需要它的组织。这意味着更多的活性成分能被身体实际利用，而不是被代谢掉。

**完整的协同作用体系**
配方中的两大支柱——姜黄素与生姜根提取物，构建了一个相互增强的支持体系。姜黄素作为主要的调节成分，帮助维持身体正常的炎症反应通路。而生姜根，特别是其含有的姜辣素，不仅温暖脾胃、支持消化顺畅，还能促进循环，为姜黄素的作用创造更佳的内环境。两者结合，共同致力于缓解因现代生活节奏和压力可能带来的身体紧张与失衡，支持关节的舒适度与整体的灵活感。

**适合的人群**
这款补充剂适合那些在日常生活中经常感到身体有僵硬或紧绷感的人，无论是久坐办公后的腰背不适，还是活动后的关节反馈。它也适合关注消化健康，希望饮食后感觉更轻松舒适的人群。对于寻求天然方式支持身体整体抗氧化防御和内在平衡的积极健康管理者来说，这是一个扎实的选择。

**纯净与成分完整性**
我们坚信，补充剂应该尽可能纯净。CURCU FORTE+ 不含麸质、乳糖、酵母、防腐剂以及人工色素和香精。胶囊由植物纤维素制成，完全适合素食者和纯素者。我们避免使用非必要的辅料，确保你摄入的是精华本身。

**给健康管理者与搭配建议**
对于健康领域的专业人士，本产品因其高生物利用度的形式和明确的成分剂量，易于融入更广泛的健康管理方案。它可以与Omega-3脂肪酸补充剂搭配，共同支持关节健康；也可以作为整体抗氧化和细胞健康支持方案的一部分。其作用机制清晰，适合在需要针对性支持身体舒适度和反应平衡的长期计划中使用。

**用法与剂量**
建议每日服用2次，每次1粒胶囊，随足量液体吞服。为达到最佳效果，建议随餐服用，食物中的脂肪有助于脂溶性成分的吸收。一瓶包含60粒胶囊，恰好是一个月的用量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。建议的每日剂量不应被超过。如果您有胆囊或胆道疾病，或正在怀孕、哺乳期，请在专业健康顾问的指导下使用。请将产品置于儿童无法触及的地方，避光、阴凉干燥处保存。`,ingredient_reference:`**Longvida® 优化姜黄素**
这是一种经过特殊稳定的姜黄提取物，主要活性成分为姜黄素类化合物。它在体内的核心作用是帮助调节与炎症反应相关的信号通路，从而支持关节、肌肉等组织的舒适与健康。Longvida® 技术的关键在于其脂质体递送系统，这极大地提高了姜黄素穿越血脑屏障和到达全身组织的生物利用度。它特别适合那些寻求高效、有科学研究支持的关节和整体健康支持方案的人群。在配方中，它与生姜协同，生姜促进的循环有助于姜黄素的分布和作用。

**生姜根提取物 (10:1，含5%姜辣素)**
这是一种从生姜根中浓缩提取的精华，标准化含有5%的活性成分姜辣素。生姜在体内以其温暖特性著称，主要支持健康的消化功能，缓解偶发的消化不良和胀气感。同时，它也能促进健康的血液循环。其标准化提取确保了每次剂量中活性成分的一致性和可靠性。它非常适合饮食不规律或容易感到腹部不适的人群。在本配方中，生姜不仅独立发挥对消化系统的益处，其促循环特性还为姜黄素更有效地输送到作用部位提供了辅助，两者共同构建了从内部舒适到外部灵活的全方位支持。`},en:{label:`Mannayan CURCU FORTE +
Potent Curcumin & Ginger
• Supports Joint Comfort & Flexibility
• Promotes Healthy Inflammatory Response Management
• Maintains Digestive System Balance
• Provides Antioxidant Protection
Per Serving: Curcumin 250mg (containing 64% curcuminoids), Ginger Root 150mg (containing 5% gingerols)
60 Capsules | Take 1 capsule twice daily
Pure Formula: Gluten-Free, Lactose-Free, Non-GMO, Vegetarian Friendly`,short_description:`Do you notice your joints and muscles feeling stiff after a busy day, or your digestive system becoming easily imbalanced under stress? These are signals that your body needs extra support.

CURCU FORTE+ combines high-concentration curcumin with ginger root extract, designed to provide support at the root level. Curcumin is renowned for its role in modulating a healthy inflammatory response, while ginger aids digestive comfort and circulation. They work synergistically to help the body restore its natural state of balance.

This product utilizes innovative Longvida® Optimized Curcumin technology. This lipid-based form of curcumin is more effectively delivered into the bloodstream and targets tissues, meaning your body can better absorb and utilize these precious botanical extracts.

Each capsule provides 250mg of curcumin and 150mg of ginger root extract. The formula is pure, free from gluten, lactose, and artificial additives, and suitable for vegetarians, allowing you to supplement with confidence.`,long_description:`The heaviness you feel upon waking in the morning, or the subtle signals from your joints after long hours of work, often remind us that our bodies need more attention and internal balance. This isn't just discomfort in one area; it's a reflection of the overall system's coordination.

**Food-State Technology & Delivery System**
At the heart of CURCU FORTE+ is Longvida® Optimized Curcumin. This technology doesn't simply extract; it encapsulates curcumin within a lipid structure resembling a cell membrane. This "food-state" delivery method allows curcumin to pass smoothly through digestive barriers, enter the bloodstream directly, and precisely reach the tissues that need it. This means more of the active ingredient is actually utilized by the body, rather than being metabolized away.

**A Complete Synergistic Support System**
The two pillars of the formula—curcumin and ginger root extract—create a mutually reinforcing support system. Curcumin, as the primary modulating component, helps maintain the body's normal inflammatory response pathways. Ginger root, particularly its gingerol content, not only warms the stomach and supports smooth digestion but also promotes circulation, creating a better internal environment for curcumin's action. Together, they work to ease the physical tension and imbalance that modern lifestyles and stress can bring, supporting joint comfort and overall flexibility.

**Who It's For**
This supplement is suitable for those who frequently feel stiffness or tightness in their bodies during daily life, whether it's lower back discomfort after long hours at a desk or joint feedback after activity. It's also ideal for individuals focused on digestive health who wish to feel lighter and more comfortable after meals. For proactive health managers seeking natural ways to support the body's overall antioxidant defenses and internal balance, this is a solid choice.

**Purity & Ingredient Integrity**
We firmly believe supplements should be as pure as possible. CURCU FORTE+ is free from gluten, lactose, yeast, preservatives, and artificial colors or flavors. The capsules are made from plant cellulose, making them fully suitable for vegetarians and vegans. We avoid unnecessary excipients, ensuring you're consuming the essence itself.

**For Health Managers & Pairing Suggestions**
For health professionals, this product, with its high-bioavailability form and clear ingredient dosages, is easy to integrate into broader wellness plans. It can be paired with Omega-3 fatty acid supplements for joint health support, or used as part of a comprehensive antioxidant and cellular health support regimen. Its clear mechanism of action makes it suitable for long-term plans requiring targeted support for bodily comfort and response balance.

**Usage & Dosage**
Take 1 capsule twice daily, swallowed with plenty of liquid. For optimal results, take with meals, as dietary fats aid in the absorption of fat-soluble components. One bottle contains 60 capsules, providing a full month's supply.

**Important Notes**
Dietary supplements are not a substitute for a varied and balanced diet. The recommended daily dose should not be exceeded. If you have gallbladder or biliary tract conditions, or are pregnant or breastfeeding, please use under the guidance of a qualified health advisor. Keep out of reach of children. Store in a cool, dry place away from light.`,ingredient_reference:`**Longvida® Optimized Curcumin**
This is a specially stabilized turmeric extract, with curcuminoids as its primary active compounds. Its core function in the body is to help modulate signaling pathways related to the inflammatory response, thereby supporting the comfort and health of tissues like joints and muscles. The key to Longvida® technology lies in its liposomal delivery system, which significantly increases curcumin's bioavailability for crossing the blood-brain barrier and reaching tissues throughout the body. It is particularly suitable for those seeking an efficient, scientifically-backed support plan for joint and overall health. In this formula, it works synergistically with ginger, whose circulation-promoting properties aid in the distribution and action of curcumin.

**Ginger Root Extract (10:1, containing 5% gingerols)**
This is a concentrated extract from ginger root, standardized to contain 5% of the active compound gingerols. Ginger is known in the body for its warming properties, primarily supporting healthy digestive function and easing occasional indigestion and bloating. Simultaneously, it promotes healthy blood circulation. Its standardized extract ensures consistency and reliability of the active ingredient in every dose. It is well-suited for individuals with irregular eating habits or those prone to abdominal discomfort. In this formula, ginger not only independently benefits the digestive system, but its circulation-promoting properties also assist in the more effective delivery of curcumin to its sites of action. Together, they build comprehensive support from internal comfort to external flexibility.`}}},{name:"Mannayan CYST + (60 Kapseln)",url:"https://mannayan.com/Mannayan-CYST-60-Kapseln/010050",price:["26,90 €"],product_number:"010050",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/14/8f/g0/1625730785/Cyst%2B.jpg?ts=1625730791",image_local:"images/Cyst%2B.jpg",content:{cn:{label:`Mannayan CYST+ | 植物协同配方

支持泌尿系统健康
维持正常排尿功能
提供抗氧化保护
含锌，支持免疫系统

60粒胶囊 | 每日1-2粒

无麸质、无乳糖、无人工添加剂、素食配方`,short_description:`你是否感觉排尿不够顺畅，或是需要更频繁地起夜？日常的忙碌和压力，有时会让身体最基本的平衡感受到干扰。

Mannayan CYST+ 是一款专为支持泌尿系统健康而设计的植物配方。它汇集了荨麻提取物、南瓜籽提取物、番茄红素和植物甾醇，并特别添加了微量元素锌。这些成分协同作用，旨在从多个层面为泌尿系统提供支持，帮助维持其正常功能。

每日服用1至2粒胶囊，即可获得这份植物精华的支持。配方纯净，不含麸质、乳糖、人工色素和防腐剂，适合素食者。`,long_description:`当身体发出信号，比如排尿频率的改变或不适感，这常常是内部平衡需要关注的时刻。泌尿系统的顺畅运作，是整体健康一个基础而重要的部分。

**食物态技术与成分形式**
配方中的植物成分均采用高浓缩提取物，例如4:1浓缩的荨麻和南瓜籽提取物，这意味着从大量原料中萃取了精华。番茄红素来自番茄提取物，是天然的食物来源形式。锌以葡萄糖酸锌的形式提供，这是一种生物利用率较高的有机形态。硒则采用L-硒代蛋氨酸，这是一种与食物中天然硒形态相似、易于身体识别和利用的形式。

**完整协同体系**
这款配方并非单一成分的堆砌，而是一个精心设计的协同体系。荨麻和南瓜籽提取物是传统上用于支持泌尿健康的两种经典植物成分，它们共同作用。番茄红素和植物甾醇则提供了强大的抗氧化支持，帮助应对氧化压力。锌的加入是关键一环，它不仅支持免疫系统，也是维持前列腺健康所必需的微量元素。硒进一步强化了抗氧化网络。这些成分相互配合，从舒缓支持、抗氧化到营养供给，形成了一个多角度的支持方案。

**适合人群**
这款产品适合那些因生活节奏快、压力大，而感觉泌尿系统需要额外关注的人士。也适合注重日常保养，希望从植物中获取系统性支持的成年人。对于选择素食生活方式，希望找到纯净植物配方来支持健康的人，它也是一个合适的选择。

**纯净与成分完整性**
我们坚信，补充剂应该尽可能纯净。该配方不含麸质、乳糖、人工色素、人工香料、防腐剂和转基因成分。胶囊外壳由植物纤维素制成，确保产品适合素食者和对常见过敏原敏感的人群。每一批产品都经过严格质量控制，确保你摄入的是声明中的有效成分。

**健康管理者与经销商：临床背景与方案搭配**
许多自然疗法医师和健康顾问将此类植物协同配方视为整体健康管理方案的一部分。它常被用于支持以生活方式调整为基础的养生计划中。专业人士可能会根据个体情况，建议将其与调整饮水习惯、管理压力或特定的饮食建议相结合，以达到更全面的效果。

**用法与剂量**
建议每日服用1至2粒胶囊，随足量水吞服。具体剂量可根据个人需求和健康顾问的建议进行调整。一瓶包含60粒胶囊，按照每日1粒的用量，可满足两个月的需求；按每日2粒，则为一个月的用量。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请勿超过推荐每日摄入量。请将产品置于儿童无法触及的地方，避光、阴凉干燥处保存。如果密封条破损或缺失，请勿食用。孕妇、哺乳期妇女或正在服用其他药物者，使用前请咨询医生或专业健康顾问。`,ingredient_reference:`**荨麻提取物 (4:1)**
荨麻是一种常用于支持泌尿系统健康的传统植物。其提取物含有多种活性化合物，包括多酚和芦丁等。在配方中，它主要提供舒缓和支持作用。采用4:1浓缩提取，确保了活性成分的浓度。它特别适合那些寻求植物性方式以维持泌尿系统日常舒适感的人群，与南瓜籽提取物有经典的协同效应。

**南瓜籽提取物 (4:1)**
南瓜籽提取物是另一种备受推崇的、用于支持泌尿健康的植物成分。它富含多种植物营养素。其作用机制与荨麻提取物互补，共同为泌尿系统提供基础支持。同样采用高浓缩形式，确保效力。适合作为日常植物保健方案的一部分，与配方中的锌协同，支持相关组织的健康。

**番茄红素 (来自番茄提取物)**
番茄红素是一种强效的天然类胡萝卜素抗氧化剂，赋予番茄红色。它在体内主要发挥抗氧化作用，帮助保护细胞免受氧化应激的损害。以番茄提取物的形式提供，是天然的食物基质来源。对于希望增强整体抗氧化防御，特别是关注特定部位健康的人群有益。它与植物甾醇及其他成分共同构建抗氧化网络。

**植物甾醇**
植物甾醇是存在于植物细胞膜中的天然化合物，结构与胆固醇相似。它们以其支持健康胆固醇水平的能力而闻名，同时也具有抗炎和抗氧化特性。在本配方中，它们主要贡献抗氧化支持，并可能对整体健康有积极影响。适合那些关注全面健康维护的成年人。

**锌 (葡萄糖酸锌)**
锌是人体必需的微量元素，参与数百种酶反应。它对免疫系统的正常功能至关重要，并且在维持前列腺健康方面扮演着特定角色。采用葡萄糖酸锌形式，这是一种有机螯合形态，通常具有良好的吸收率。对于需要额外免疫支持或关注特定部位营养供给的男性尤其重要。它是本配方中连接植物成分与微量元素支持的关键桥梁。

**硒 (L-硒代蛋氨酸)**
硒是另一种重要的微量元素，是谷胱甘肽过氧化物酶等关键抗氧化酶的组成部分。L-硒代蛋氨酸是一种有机硒形式，其中硒与蛋氨酸（一种氨基酸）结合，模拟食物中天然存在的形态，易于吸收和利用。它强化了配方的抗氧化防御系统，并与锌协同支持免疫功能。适合希望补充优质硒形态以支持整体抗氧化状态的人群。`},en:{label:`Mannayan CYST+ | Botanical Synergy Formula

Supports Urinary System Health
Maintains Normal Urinary Function
Provides Antioxidant Protection
With Zinc to Support the Immune System

60 Capsules | 1-2 Capsules Daily

Gluten-Free, Lactose-Free, No Artificial Additives, Vegan Formula`,short_description:`Do you feel your urinary flow isn't as smooth as it could be, or find yourself waking up more frequently at night? The hustle and stress of daily life can sometimes disrupt the body's most fundamental sense of balance.

Mannayan CYST+ is a botanical formula specifically designed to support urinary system health. It combines Nettle Extract, Pumpkin Seed Extract, Lycopene, and Plant Sterols, with the special addition of the trace mineral Zinc. These ingredients work synergistically, aiming to provide multi-faceted support for the urinary system and help maintain its normal function.

Just 1 to 2 capsules daily delivers this botanical support. The formula is pure, free from gluten, lactose, artificial colors, and preservatives, and is suitable for vegetarians.`,long_description:`When the body sends signals, such as changes in urinary frequency or discomfort, it's often a moment when internal balance needs attention. The smooth operation of the urinary system is a fundamental and vital part of overall health.

**Food-State Technology & Ingredient Forms**
The botanical ingredients in the formula utilize highly concentrated extracts, such as 4:1 concentrated Nettle and Pumpkin Seed extracts, meaning the essence is extracted from a large quantity of raw material. Lycopene comes from Tomato Extract, a natural food-source form. Zinc is provided as Zinc Gluconate, a highly bioavailable organic form. Selenium uses L-Selenomethionine, a form similar to the natural selenium found in food, making it easily recognizable and utilized by the body.

**Complete Synergistic System**
This formula is not a simple stacking of single ingredients, but a carefully designed synergistic system. Nettle and Pumpkin Seed extracts are two classic botanicals traditionally used to support urinary health, working together. Lycopene and Plant Sterols provide powerful antioxidant support, helping to address oxidative stress. The inclusion of Zinc is a key piece; it not only supports the immune system but is also an essential trace mineral for maintaining prostate health. Selenium further strengthens the antioxidant network. These components work in concert, forming a multi-angled support plan ranging from soothing support and antioxidant activity to nutritional supply.

**Who It's For**
This product is suitable for individuals who, due to a fast-paced, high-stress lifestyle, feel their urinary system needs extra attention. It's also suitable for adults focused on daily maintenance who seek systemic support from botanicals. For those who choose a vegetarian lifestyle and are looking for a pure botanical formula to support their health, it is also an appropriate choice.

**Purity & Ingredient Integrity**
We firmly believe supplements should be as pure as possible. This formula is free from gluten, lactose, artificial colors, artificial flavors, preservatives, and GMO ingredients. The capsule shell is made from plant cellulose, ensuring the product is suitable for vegetarians and those sensitive to common allergens. Every batch undergoes strict quality control to ensure you are ingesting the declared active ingredients.

**For Health Practitioners & Retailers: Clinical Context & Protocol Pairing**
Many naturopathic doctors and health consultants view such botanical synergy formulas as part of a holistic health management plan. It is often used to support wellness plans based on lifestyle adjustments. Professionals may recommend pairing it with adjustments to hydration habits, stress management, or specific dietary advice based on individual circumstances for more comprehensive results.

**Usage & Dosage**
It is recommended to take 1 to 2 capsules daily, swallowed with plenty of water. The specific dosage can be adjusted based on individual needs and the advice of a health consultant. One bottle contains 60 capsules, providing a two-month supply at 1 capsule daily, or a one-month supply at 2 capsules daily.

**Important Information**
This product is a dietary supplement and is not intended to replace a balanced, varied diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is broken or missing. Pregnant or breastfeeding women, or individuals taking other medications, should consult a doctor or qualified health advisor before use.`,ingredient_reference:`**Nettle Extract (4:1)**
Nettle is a traditional plant commonly used to support urinary system health. Its extract contains various active compounds, including polyphenols and rutin. In this formula, it primarily provides soothing and supportive action. Using a 4:1 concentrated extract ensures a potency of active constituents. It is particularly suitable for those seeking a botanical approach to maintain daily comfort in the urinary system and has a classic synergistic effect with Pumpkin Seed Extract.

**Pumpkin Seed Extract (4:1)**
Pumpkin Seed Extract is another highly regarded botanical ingredient for supporting urinary health. It is rich in various phytonutrients. Its mechanism of action complements that of Nettle Extract, together providing foundational support for the urinary system. Also in a highly concentrated form to ensure efficacy. Suitable as part of a daily botanical wellness regimen, it works synergistically with the Zinc in the formula to support the health of related tissues.

**Lycopene (from Tomato Extract)**
Lycopene is a potent natural carotenoid antioxidant that gives tomatoes their red color. It primarily functions as an antioxidant in the body, helping to protect cells from oxidative stress. Provided as Tomato Extract, it is a natural food-matrix source. Beneficial for those looking to enhance overall antioxidant defenses, particularly individuals focused on the health of specific areas. It works with Plant Sterols and other ingredients to build an antioxidant network.

**Plant Sterols**
Plant Sterols are natural compounds found in plant cell membranes, structurally similar to cholesterol. They are well-known for their ability to support healthy cholesterol levels and also possess anti-inflammatory and antioxidant properties. In this formula, they primarily contribute antioxidant support and may have a positive impact on overall wellness. Suitable for adults focused on comprehensive health maintenance.

**Zinc (as Zinc Gluconate)**
Zinc is an essential trace mineral involved in hundreds of enzymatic reactions. It is crucial for the normal function of the immune system and plays a specific role in maintaining prostate health. The Zinc Gluconate form is an organic chelated form, typically associated with good absorption rates. Particularly important for men seeking additional immune support or focused on the nutritional supply to specific areas. It is the key bridge in this formula connecting botanical ingredients with trace mineral support.

**Selenium (as L-Selenomethionine)**
Selenium is another important trace mineral, a component of key antioxidant enzymes like glutathione peroxidase. L-Selenomethionine is an organic selenium form where selenium is bound to methionine (an amino acid), mimicking the form naturally present in food, making it easy to absorb and utilize. It strengthens the formula's antioxidant defense system and works synergistically with Zinc to support immune function. Suitable for those wishing to supplement with a high-quality selenium form to support overall antioxidant status.`}}},{name:"Mannayan D-MANNOSE & CRANBERRY + (Pulver)",url:"https://mannayan.com/Mannayan-D-MANNOSE-CRANBERRY-Pulver/010053",price:["27,90 €"],product_number:"010053",quantity:["50g"],image_url:"https://mannayan.com/media/2e/9f/17/1766136927/D-Manose-Cranberry%2B_2025.jpg?ts=1766136927",image_local:"images/D-Manose-Cranberry%2B_2025.jpg",content:{cn:{label:`Mannayan D-甘露糖 & 蔓越莓+ 粉剂
支持泌尿系统自然平衡
• 帮助维持泌尿道舒适环境
• 支持细菌的物理性排出
• 提供蔓越莓原花青素
• 适合敏感体质日常维护
50克粉剂 | 无麸质、无乳糖、纯素配方 | 无人工添加`,short_description:`有时，身体的微妙信号会提醒我们，内部的平衡需要关注。那种频繁的、轻微的不适感，或是饮水习惯改变后依然感觉到的负担，常常是身体在寻求支持。

这款粉剂的核心是D-甘露糖，一种天然存在于蔓越莓等水果中的单糖。它以一种温和的、物理性的方式工作，帮助身体维持泌尿道环境的清洁。配合高浓缩的蔓越莓提取物，共同为身体的自然防御机制提供营养基础。

每日只需一小勺，溶于水或果汁中，即可融入日常。产品采用纯净配方，不含麸质、乳制品、大豆、人工色素或香料，适合包括纯素食者在内的多种生活方式。每份（2-3克）提供约950毫克D-甘露糖与50毫克高浓缩蔓越莓提取物。`,long_description:`那种挥之不去的轻微不适，频繁的如厕感，或是总感觉需要多喝水来“冲洗”系统的感觉，常常是身体内部环境需要重新平衡的信号。这并非总是急症，而更像是一种持续的、消耗精力的背景音，干扰着日常的安宁与自在。

**食物态技术与递送**
产品采用精细粉末形态，确保了成分的快速溶解与高效吸收。D-甘露糖以纯净的单糖形式提供，身体能轻易识别并利用。蔓越莓提取物经过浓缩（36:1），意味着从大量原果中萃取出其精华——原花青素，避免了摄入多余糖分，使支持更为精准。

**协同作用的完整体系**
D-甘露糖与蔓越莓提取物在这里并非简单叠加，而是构成一个两步支持体系。D-甘露糖发挥其独特的物理特性，在泌尿系统中协助创造一种不利于某些细菌定植的环境。与此同时，高浓缩蔓越莓提取物提供的原花青素，则从另一个层面支持尿道内壁的健康状态，共同维护一个清洁、平衡的内部通道。两者结合，为身体的自我维护系统提供了更全面的营养基石。

**适合的人群**
这款产品适合那些在生活压力增大、饮水不足或感觉自身防御机制需要额外支持时，寻求一种温和、日常维护方法的人。它也适用于偏好粉剂形态、便于随餐饮用，或对片剂胶囊有吞咽困难的人群。对于饮食受限者，如纯素食者或对麸质、乳糖敏感的人，其纯净配方提供了安心的选择。

**纯净与成分完整性**
配方极简而专注。除了活性成分D-甘露糖和蔓越莓提取物，仅使用微量的二氧化硅防止结块，以及麦芽糊精作为载体，确保粉末流动性。我们明确承诺不含转基因成分、麸质、人工防腐剂、人工色素与香料、乳制品、大豆和小麦。每一批产品都致力于成分来源的透明与纯净。

**用法与剂量**
当感觉需要集中支持时，可每日两次，每次取一平茶匙（约2-3克）粉末，充分溶解于一大杯水或果汁中饮用。用于长期的日常维护，则建议每日一次，每次半茶匙（约1.5克）。充足饮水是发挥其最佳作用的重要伴侣。

**重要提示**
本产品为食品补充剂，不能替代均衡多样的饮食和健康的生活方式。标示的每日建议食用量请勿超过。果糖不耐受者食用可能导致消化不适。孕妇、哺乳期妇女或在服用任何药物前，建议咨询专业健康顾问。请存放于阴凉干燥处，避免儿童接触。`,ingredient_reference:`**D-甘露糖**
D-甘露糖是一种天然存在的单糖，在人体内有少量代谢，但大部分会迅速经肾脏进入尿液。其核心作用机制具有物理特性：它能与尿道中某些不希望存在的细菌结合，从而支持身体通过尿液将其自然冲刷排出，而非杀死它们。这种作用方式温和且具有针对性。产品中使用的是高纯度的D-甘露糖粉末，确保了生物利用度。它特别适合寻求一种非抗生素方式来维持泌尿系统日常清洁平衡的人群。在配方中，它与蔓越莓提取物协同，从不同路径共同支持泌尿道的健康环境。

**蔓越莓提取物（36:1）**
这是一种从蔓越莓中高度浓缩获得的提取物，“36:1”的浓缩比意味着需要36公斤新鲜蔓越莓才能得到1公斤此提取物，其核心价值在于富集了原花青素等活性多酚物质。这些化合物有助于维持尿道内壁细胞的健康状态，使其不易让细菌附着。与直接食用蔓越莓或果汁相比，这种形式能提供高浓度的活性成分，同时避免了额外的糖分摄入。它适合那些希望获得蔓越莓精华益处，但又需控制糖分或寻求便捷补充方式的人。在配方中，它与D-甘露糖相辅相成，前者支持内壁健康，后者协助物理清除，共同构建更全面的维护体系。`},en:{label:`Mannayan D-Mannose & Cranberry+ Powder
Supports Natural Urinary System Balance
• Helps maintain a comfortable urinary environment
• Supports the physical clearance of bacteria
• Provides cranberry proanthocyanidins
• Suitable for daily maintenance of sensitive constitutions
50g Powder | Gluten-Free, Lactose-Free, Vegan Formula | No Artificial Additives`,short_description:`Sometimes, the body's subtle signals remind us that its internal balance needs attention. That frequent, mild discomfort, or the lingering sense of burden even after adjusting your water intake, is often your body seeking support.

At the heart of this powder is D-Mannose, a simple sugar naturally found in fruits like cranberries. It works in a gentle, physical way, helping the body maintain a clean urinary tract environment. Combined with highly concentrated cranberry extract, it provides a nutritional foundation for the body's natural defense mechanisms.

Just one small scoop daily, dissolved in water or juice, integrates seamlessly into your routine. The formula is pure, free from gluten, dairy, soy, artificial colors, or flavors, and suitable for various lifestyles, including vegan. Each serving (2–3g) provides approximately 950mg of D-Mannose and 50mg of highly concentrated cranberry extract.`,long_description:`That lingering mild discomfort, the frequent urge to go, or the constant feeling of needing to drink more water to 'flush' your system—these are often signals that your internal environment needs rebalancing. It's not always an acute issue, but more like a persistent, draining background noise that disrupts daily peace and ease.

**Food-State Technology & Delivery**
The product comes in a fine powder form, ensuring rapid dissolution and efficient absorption. D-Mannose is provided in its pure, simple sugar form, which the body easily recognizes and utilizes. The cranberry extract is highly concentrated (36:1), meaning the essence—proanthocyanidins—is extracted from a large quantity of fresh berries, avoiding excess sugar intake and delivering targeted support.

**A Synergistic, Complete System**
D-Mannose and cranberry extract here are not simply added together; they form a two-step support system. D-Mannose leverages its unique physical properties to help create an environment in the urinary tract that is less conducive to the colonization of certain bacteria. Meanwhile, the proanthocyanidins from the highly concentrated cranberry extract support the health of the urinary tract lining from another angle. Together, they help maintain a clean, balanced internal passageway, providing a more comprehensive nutritional foundation for the body's self-maintenance systems.

**Who It's For**
This product is suitable for those seeking a gentle, daily maintenance approach during times of increased life stress, inadequate hydration, or when feeling their natural defenses need extra support. It's also ideal for individuals who prefer a powder form for easy consumption with meals, or who have difficulty swallowing tablets or capsules. For those with dietary restrictions, such as vegans or individuals sensitive to gluten or lactose, its pure formula offers a reassuring choice.

**Purity & Ingredient Integrity**
The formula is minimal and focused. Beyond the active ingredients D-Mannose and cranberry extract, it contains only a minimal amount of silica to prevent caking and maltodextrin as a carrier to ensure powder flow. We clearly commit to being free from GMOs, gluten, artificial preservatives, artificial colors and flavors, dairy, soy, and wheat. Every batch is dedicated to transparency and purity in sourcing.

**Usage & Dosage**
When focused support is needed, take one level teaspoon (approx. 2–3g) of powder, fully dissolved in a large glass of water or juice, twice daily. For long-term daily maintenance, a half teaspoon (approx. 1.5g) once daily is recommended. Adequate water intake is an important companion for its optimal function.

**Important Notes**
This product is a food supplement and is not a substitute for a varied, balanced diet and a healthy lifestyle. Do not exceed the stated recommended daily intake. Consumption by individuals with fructose intolerance may cause digestive discomfort. Pregnant or breastfeeding women, or anyone taking medication, should consult a professional health advisor before use. Store in a cool, dry place, out of reach of children.`,ingredient_reference:`**D-Mannose**
D-Mannose is a naturally occurring simple sugar. A small amount is metabolized in the body, but most is rapidly excreted via the kidneys into urine. Its core mechanism of action is physical: it can bind to certain undesirable bacteria in the urinary tract, thereby supporting the body's natural clearance of them through urination, rather than killing them. This mode of action is gentle and targeted. The product uses high-purity D-Mannose powder, ensuring bioavailability. It is particularly suitable for those seeking a non-antibiotic approach to maintaining daily urinary tract cleanliness and balance. In the formula, it works synergistically with cranberry extract, supporting urinary tract health from different pathways.

**Cranberry Extract (36:1)**
This is a highly concentrated extract obtained from cranberries. A '36:1' concentration ratio means 36 kilograms of fresh cranberries are required to produce 1 kilogram of this extract. Its core value lies in its enrichment of active polyphenolic compounds like proanthocyanidins. These compounds help maintain the health of the cells lining the urinary tract, making them less prone to bacterial adhesion. Compared to consuming cranberries or juice directly, this form delivers a high concentration of active ingredients while avoiding extra sugar intake. It is suitable for those who want the benefits of cranberry essence but need to control sugar or prefer a convenient supplement. In the formula, it complements D-Mannose—the former supports lining health, the latter assists with physical clearance—together building a more comprehensive maintenance system.`}}},{name:"Mannayan D-RIBOSE + (Pulver)",url:"https://mannayan.com/Mannayan-D-RIBOSE-Pulver/010054",price:["44,90 €"],product_number:"010054",quantity:["100g"],image_url:"https://mannayan.com/media/7d/96/54/1625731324/D-Ribose%2B.jpg?ts=1625731333",image_local:"images/D-Ribose%2B.jpg",content:{cn:{label:`Mannayan D-核糖+（粉末）
细胞能量基石
• 支持细胞能量代谢 • 促进ATP生成 • 帮助身体从疲惫中恢复 • 维持日常精力水平 • 纯净粉末，易于混合
每份：1平茶匙（约5克）
100克装
纯净配方认证：无麸质、无乳糖、无大豆、无人工添加剂、非转基因、适合素食者与纯素者`,short_description:`一天下来，是否感觉能量被彻底抽空，即使休息后也难以完全恢复？那种从细胞深处透出的疲惫感，可能不仅仅是睡眠不足那么简单。

D-核糖是一种天然存在的糖，它是身体制造ATP（三磷酸腺苷）的关键基石。ATP是细胞可直接使用的能量货币。当身体需要快速补充能量储备时，提供D-核糖就如同为能量生产线输送了核心原料。

这款产品是纯净的D-核糖粉末，源自葡萄糖（玉米提取）。它设计简洁，不含任何不必要的添加物，让你摄入的只是身体认识并需要的核心物质。

建议每日1-2茶匙（3-6克），随餐或餐后服用。每罐含100克粉末。配方纯净，不含麸质、乳制品、大豆、酵母、人工色素或防腐剂，且为非转基因产品，也适合素食和纯素饮食。`,long_description:`你是否经历过这样的时刻：明明睡眠充足，但身体深处依然感到一种挥之不去的倦怠，思维像蒙上了一层薄雾，体力恢复的速度似乎越来越跟不上日常的消耗。这种状态往往不是单一原因造成的，它可能指向细胞层面能量生产的效率问题。身体的每一个动作、每一次心跳、每一个思考，都依赖于一种叫做ATP的微小分子。当ATP的合成速度跟不上消耗时，那种根基性的疲惫感便会浮现。

**食物态技术与纯净来源**
本产品采用纯净的D-核糖粉末形式。D-核糖是一种五碳糖，天然存在于所有活细胞中，是构建ATP分子骨架不可或缺的部分。这里的D-核糖来源于经发酵工艺从玉米葡萄糖中提取的纯净原料，以一种身体易于识别和利用的形态提供。粉末剂型让你可以轻松将其融入水、果汁或奶昔中，根据个人需求和感受灵活调整剂量。

**作用于能量生成的核心路径**
D-核糖的作用机制直接而根本。在细胞内部，特别是在心脏、肌肉和大脑等高耗能组织中，ATP被不断分解以释放能量，其分解产物之一就是腺苷。为了循环利用腺苷并重新合成ATP，细胞需要D-核糖来重建ATP的核糖骨架。补充D-核糖，相当于为这个关键的再生循环提供了优先的底物，有助于支持细胞，尤其是那些代谢压力较大的细胞，更高效地恢复其能量储备。它不直接提供快速爆发的能量，而是支持能量生产基础设施的恢复能力。

**适合的人群与生活情境**
这款产品适合那些在日常生活中感到精力恢复缓慢、希望从根本层面支持身体能量代谢的人。例如，在持续高强度脑力工作后感到思维滞重、在规律锻炼后肌肉恢复时间延长、或是在一天忙碌后总觉得休息不够的人。它也是一种常见的方案，用于支持那些因生活方式导致能量需求增加的人群。重要的是，它采用纯净配方，也适合有特定饮食偏好或敏感的人群，如素食者、纯素者，或对酵母、麸质、乳制品敏感的人士。

**对纯净与成分完整性的坚持**
我们相信，补充剂应该尽可能简单和纯净。这份D-核糖粉末中除了核心成分外别无他物。它不含小麦、麸质、酵母、乳制品（乳糖）、大豆、防腐剂以及人工色素和香精。产品为非转基因，并且生产过程注重纯净度。这种简洁性确保了身体接收到的信息是清晰且专注的。

**健康管理者的视角：作为整体方案的一部分**
从健康管理的角度看，D-核糖常被视为支持能量代谢基础的工具。它可能与其他旨在优化细胞功能的营养素（如镁、辅酶Q10）形成协同。有经验的健康顾问可能会将其纳入一个更广泛的方案中，该方案同时关注营养支持、合理的运动与恢复周期以及压力管理。在考虑任何新的补充剂时，特别是在有既定健康状况或正在服用药物的情况下，咨询专业人士总是明智的。

**用法与剂量**
建议起始剂量为每日1平茶匙（约3克），可随餐或餐后与足量液体混合饮用。根据个人感受和需求，剂量可逐渐增加至每日2茶匙（约6克），分次服用效果更佳。为避免可能的不适，请勿空腹服用。每罐净含量为100克粉末。

**重要提示**
D-核糖不适合18岁以下人群、孕妇、哺乳期妇女、糖尿病患者或低血糖（血糖过低）患者使用。正在接受药物治疗的人士在服用本产品前应咨询医生。请勿超过推荐每日食用量。膳食补充剂不能替代均衡多样的饮食。请存放于阴凉干燥处，避免儿童接触。若密封条缺失，请勿食用。`,ingredient_reference:`**D-核糖粉末**
D-核糖是一种天然存在的五碳单糖，它是所有生命细胞中遗传物质（RNA）和关键能量分子ATP的结构组成部分。在体内，D-核糖的核心作用是作为合成ATP的必需前体，特别是在能量需求高或ATP再生速度至关重要的组织，如心肌、骨骼肌和大脑中。本品采用经发酵工艺从玉米来源的葡萄糖中提取的高纯度D-核糖粉末，确保了生物利用度和纯净度。它特别适合那些日常消耗大、感到精力恢复缓慢，或希望从细胞能量生产层面提供支持的人群。在配方中，它作为单一且专注的成分，直接作用于能量代谢的核心再生循环，其作用在于支持身体自身能量基础设施的恢复能力，而非提供直接的刺激。`},en:{label:`Mannayan D-Ribose+ (Powder)
Cellular Energy Foundation
• Supports cellular energy metabolism • Promotes ATP production • Aids in recovery from fatigue • Helps maintain daily energy levels • Pure powder, easy to mix
Serving: 1 level teaspoon (approx. 5g)
100g container
Certified pure formula: Gluten-free, lactose-free, soy-free, no artificial additives, non-GMO, suitable for vegetarians and vegans`,short_description:`Do you feel completely drained by the end of the day, struggling to fully recover even after rest? That deep-seated fatigue from within your cells might be more than just a lack of sleep.

D-Ribose is a naturally occurring sugar that serves as a key building block for your body's production of ATP (adenosine triphosphate)—the direct energy currency of cells. When your body needs to quickly replenish its energy reserves, providing D-Ribose is like supplying the core raw material to the energy production line.

This product is pure D-Ribose powder, sourced from glucose (corn-derived). It's designed with simplicity, free from any unnecessary additives, so you're consuming only the core substance your body recognizes and needs.

Suggested use: 1–2 teaspoons (3–6g) daily, taken with or after meals. Each jar contains 100g of powder. The formula is pure, containing no gluten, dairy, soy, yeast, artificial colors, or preservatives. It is non-GMO and suitable for vegetarian and vegan diets.`,long_description:`Have you ever experienced moments when, despite getting enough sleep, a lingering sense of fatigue persists deep within your body, your mind feels foggy, and your physical recovery seems increasingly unable to keep up with daily demands? This state often has multiple causes and may point to inefficiencies in energy production at the cellular level. Every movement, heartbeat, and thought relies on a tiny molecule called ATP. When ATP synthesis can't keep pace with consumption, that foundational feeling of exhaustion emerges.

**Food-State Technology & Pure Sourcing**
This product comes in the form of pure D-Ribose powder. D-Ribose is a five-carbon sugar naturally present in all living cells and is an indispensable part of building the molecular backbone of ATP. The D-Ribose here is derived from a pure source—fermented from corn glucose—and is provided in a form that the body easily recognizes and utilizes. The powder format allows you to effortlessly mix it into water, juice, or smoothies, adjusting the dosage flexibly based on personal needs and feelings.

**Acts on the Core Pathway of Energy Generation**
D-Ribose works in a direct and fundamental way. Inside cells, particularly in high-energy-demand tissues like the heart, muscles, and brain, ATP is constantly broken down to release energy, with adenosine being one of its breakdown products. To recycle adenosine and resynthesize ATP, cells require D-Ribose to rebuild ATP's ribose backbone. Supplementing with D-Ribose essentially provides a prioritized substrate for this crucial regeneration cycle, helping to support cells—especially those under metabolic stress—in more efficiently restoring their energy reserves. It doesn't provide a quick burst of energy directly but supports the recovery capacity of the energy production infrastructure.

**Suitable Users & Life Situations**
This product is suitable for those who feel their energy recovery is slow in daily life and wish to support their body's energy metabolism at a foundational level. Examples include feeling mentally sluggish after sustained high-intensity cognitive work, experiencing prolonged muscle recovery after regular exercise, or consistently feeling under-rested after a busy day. It is also a common choice for supporting individuals with increased energy demands due to lifestyle factors. Importantly, its pure formula makes it suitable for those with specific dietary preferences or sensitivities, such as vegetarians, vegans, or individuals sensitive to yeast, gluten, or dairy.

**Commitment to Purity & Ingredient Integrity**
We believe supplements should be as simple and pure as possible. This D-Ribose powder contains nothing but the core ingredient. It is free from wheat, gluten, yeast, dairy (lactose), soy, preservatives, and artificial colors or flavors. The product is non-GMO, and the production process emphasizes purity. This simplicity ensures the body receives a clear and focused message.

**A Health Manager's Perspective: As Part of a Holistic Approach**
From a health management standpoint, D-Ribose is often viewed as a tool to support the foundation of energy metabolism. It may synergize with other nutrients aimed at optimizing cellular function, such as magnesium or CoQ10. Experienced health advisors might incorporate it into a broader protocol that also considers nutritional support, appropriate exercise and recovery cycles, and stress management. When considering any new supplement, especially if you have a pre-existing health condition or are taking medication, consulting a professional is always wise.

**Usage & Dosage**
The suggested starting dose is 1 level teaspoon (approx. 3g) daily, mixed with ample liquid and taken with or after a meal. Based on personal response and needs, the dose may be gradually increased to 2 teaspoons (approx. 6g) daily, with divided doses often being more effective. To avoid potential discomfort, do not take on an empty stomach. Each jar contains a net weight of 100g of powder.

**Important Notes**
D-Ribose is not suitable for individuals under 18 years old, pregnant or nursing women, individuals with diabetes, or those with hypoglycemia (low blood sugar). Individuals undergoing medical treatment should consult a doctor before using this product. Do not exceed the recommended daily intake. Dietary supplements are not a substitute for a balanced and varied diet. Store in a cool, dry place, out of reach of children. Do not consume if the seal is broken or missing.`,ingredient_reference:`**D-Ribose Powder**
D-Ribose is a naturally occurring five-carbon monosaccharide that serves as a structural component of genetic material (RNA) and the critical energy molecule ATP in all living cells. In the body, its core role is as an essential precursor for ATP synthesis, particularly in tissues with high energy demands or where ATP regeneration speed is crucial, such as the heart muscle, skeletal muscles, and brain. This product uses high-purity D-Ribose powder, extracted via fermentation from corn-derived glucose, ensuring bioavailability and purity. It is especially suitable for individuals with high daily expenditure, those who feel their energy recovery is slow, or anyone wishing to provide support at the level of cellular energy production. In the formula, it serves as a single, focused ingredient that acts directly on the core regeneration cycle of energy metabolism, supporting the body's own energy infrastructure recovery capacity rather than providing direct stimulation.`}}},{name:"Mannayan DETOX + (60 Kapseln)",url:"https://mannayan.com/Mannayan-DETOX-60-Kapseln/010052",price:["24,90 €"],product_number:"010052",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/62/d4/07/1766136984/Detox%2B_2025.jpg?ts=1766136984",image_local:"images/Detox%2B_2025.jpg",content:{cn:{label:`Mannayan DETOX+
支持肝脏自然净化
• 提供肝脏酶活性所需的关键辅酶
• 含维生素C、B族、锌、硒等
• 食物态基质，高生物利用度
• 低剂量，高效能，避免系统负担
60粒胶囊 | 素食配方 | 无麸质、无乳制品、无人工添加剂`,short_description:`你是否感觉身体沉重，精力不济，或是皮肤状态总难达到理想？现代生活的节奏和无处不在的环境因素，常常让身体的天然净化系统——尤其是肝脏——承受额外负担。它需要合适的营养支持才能高效工作。

Mannayan DETOX+ 并非强力“排毒”产品，而是一套精准的营养支持方案。它专注于提供肝脏第二阶段解毒酶系所需的关键辅酶，这些辅酶就像工具，帮助肝脏将体内代谢废物和外来物质转化为可安全排出的形式。配方中的维生素C、B族维生素、锌、硒及含硫氨基酸（如谷氨酰胺、甘氨酸、半胱氨酸）正是构成这些“工具”的核心材料。

特别之处在于其“食物态”技术。营养成分被整合在由保加利亚乳杆菌酶解得到的食物基质中，其中包含了天然食物中存在的辅助因子。这让身体能像识别和利用完整食物一样吸收这些营养素，实现更高的生物利用度。正因如此，产品采用科学合理的低剂量设计，旨在被身体完全利用，避免用高剂量“淹没”系统。

每日1-2粒，随餐服用。每瓶60粒，提供1-2个月的用量。配方纯净，适合素食者及纯素主义者，不含麸质、乳制品、大豆、小麦及人工色素、香料与防腐剂。`,long_description:`早晨醒来仍感疲惫，午后精力难以集中，或是皮肤容易出状况，这些常常是身体内在平衡需要关注的信号。我们的肝脏是沉默的劳模，日夜不停地处理着新陈代谢的产物和日常接触的各种物质。当它得到的支持不足时，整个系统的流畅度就会受到影响。

**食物态递送技术**
Mannayan DETOX+ 的核心在于其递送方式。活性成分并非孤立存在，而是被精心嵌入一个特殊的“食物矩阵”中。这个基质来源于保加利亚乳杆菌的酶解过程，它天然含有多种辅助因子。这意味着，你补充的维生素、矿物质和氨基酸，是以一种更接近天然食物中复合形态的方式呈现的。身体识别这种形态，吸收和利用效率更高，我们称之为高生物利用度。这解释了为何配方采用相对较低的剂量——因为每一分营养都能被有效送达并利用，无需过量添加。

**一个协同作用的完整体系**
这款产品的设计思路是提供一套完整的“工具包”，支持肝脏解毒的第二阶段——结合反应。这一过程需要大量的辅酶参与。维生素C和B族维生素（如B1、B6）是许多酶反应不可或缺的辅助因子。锌、硒、铜、锰、铬、钼等微量元素，是构成这些酶的核心部分或激活剂。特别添加的含硫氨基酸——L-谷氨酰胺、甘氨酸和半胱氨酸——直接作为结合反应的底物，帮助中和并转运需要排出的物质。β-胡萝卜素和来自海带提取物的碘，则从抗氧化和支持整体代谢的角度提供额外支持。所有这些成分不是孤立工作，而是像一支训练有素的团队，各司其职，协同确保肝脏解毒通路顺畅运行。

**适合人群**
它适合那些生活节奏快、经常外食、感到身体需要“重启”支持的人；也适合关注长期健康，希望为身体主要代谢器官提供基础营养维护的人。当你想为健康生活方式增加一层科学支持，尤其是在季节更替或感觉特别疲惫的时期，它可以成为一个温和而有效的选择。它并非用于治疗特定疾病，而是着眼于日常的生理支持。

**纯净与成分完整性**
我们坚信，补充剂应该尽可能纯净。Mannayan DETOX+ 配方不含小麦、麸质、大豆、乳制品（乳糖）、防腐剂以及人工色素和香料。它采用非转基因成分，并且胶囊本身适合素食者和纯素者。成分列表透明，活性成分与辅助剂分开标明，让你清楚知道自己摄入的是什么。

**健康管理者与经销商：临床背景与方案搭配**
本产品基于对肝脏生物化学通路的研究设计，其低剂量、高生物利用度的理念，旨在模拟从优质食物中获取营养的方式，易于整合到更广泛的健康管理方案中。健康从业者可能会将其作为支持整体代谢、促进内在平衡的基础营养方案的一部分，与个性化的饮食和生活建议相结合。

**用法与剂量**
建议每日服用1至2粒胶囊，随足量水吞服。可以根据个人需求和健康专业人士的建议进行调整。一瓶60粒的包装，在标准用量下可满足一个月或两个月的需求。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请勿超过推荐每日摄入量。对酵母过敏或不耐受者请勿使用。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**维生素C（来自针叶樱桃提取物）**
维生素C是一种强大的水溶性抗氧化剂，对于合成谷胱甘肽至关重要——这是肝脏最主要的内源性抗氧化剂和解毒剂。在配方中，它来自天然的针叶樱桃提取物，提供了更完整的植物营养素谱。它与其他抗氧化成分如硒、β-胡萝卜素协同工作，保护肝细胞免受氧化压力，并支持多种酶的功能。

**B族维生素（B1, B6）**
B族维生素是能量代谢和数百种酶反应的必需辅因子。硫胺素（B1）和吡哆醇（B6）直接参与碳水化合物、脂肪和蛋白质的代谢，为肝脏的解毒工作提供能量基础。B6尤其参与氨基酸代谢和神经递质合成，与配方中的甘氨酸、半胱氨酸等氨基酸协同，支持肝脏的结合解毒通路。

**锌**
锌是体内超过300种酶的组成部分或激活剂，其中包括超氧化物歧化酶（SOD）等关键的抗氧化酶，以及酒精脱氢酶等与解毒相关的酶。它对于维持细胞膜完整性、蛋白质合成和免疫功能都必不可少。在配方中，锌与硒、铜等矿物质共同构成了抗氧化防御网络和酶活性中心。

**硒（来自硒酵母）**
硒是谷胱甘肽过氧化物酶的核心成分，这种酶是细胞内最重要的抗氧化防御系统之一，能直接中和过氧化氢和脂质过氧化物。采用硒酵母形式，提供了有机硒，更利于人体吸收和储存。它与维生素C和锌协同，强化身体的抗氧化能力，保护肝细胞结构。

**铁**
铁是血红蛋白和肌红蛋白的组成部分，负责氧气的运输和储存，确保组织（包括肝脏）有充足的氧气供应进行代谢活动。采用富马酸亚铁形式，具有较好的吸收率和温和的胃肠道耐受性。充足的铁状态对于产生能量的细胞呼吸链功能至关重要。

**含硫氨基酸（L-谷氨酰胺、甘氨酸、半胱氨酸）**
这三者是支持肝脏第二阶段解毒（结合反应）的基石。甘氨酸和谷氨酰胺是合成谷胱甘肽的前体，也是直接参与结合反应的分子。半胱氨酸本身就含有巯基，是谷胱甘肽的直接组成部分。它们共同为肝脏提供了将脂溶性毒素转化为水溶性物质以便排出的“结合工具”，是这个配方支持解毒功能的核心机制所在。

**β-胡萝卜素**
作为维生素A的前体，β-胡萝卜素是一种脂溶性抗氧化剂，能够淬灭单线态氧，保护细胞膜免受脂质过氧化损伤。它来自杜氏盐藻，是一种天然来源。在肝脏健康中，它有助于维护上皮细胞（包括肝窦内皮细胞）的健康，并与维生素C、E（配方辅料中含多种生育酚）等形成抗氧化协同。

**其他微量元素（铜、锰、铬、钼、碘）**
这些微量元素虽然需求量微小，但作用关键。铜和锰是超氧化物歧化酶（SOD）不同形式的辅因子；铬以GTF酵母形式存在，支持胰岛素功能与糖代谢平衡；钼是几种氧化酶（如醛氧化酶）的必需成分；碘来自海带提取物，对甲状腺激素合成至关重要，而甲状腺激素调控着全身的基础代谢率，包括肝脏的代谢活性。它们共同确保与能量生产和解毒相关的多种酶系统能够正常运作。`},en:{label:`Mannayan DETOX+
Support for the Liver's Natural Purification
• Provides key coenzymes required for liver enzyme activity
• Contains Vitamin C, B Vitamins, Zinc, Selenium, and more
• Food-State Matrix for high bioavailability
• Low dose, high efficacy, avoids systemic burden
60 Capsules | Vegan Formula | Gluten-Free, Dairy-Free, No Artificial Additives`,short_description:`Do you feel heavy, low on energy, or struggle to achieve your ideal skin condition? The pace of modern life and ever-present environmental factors often place an extra burden on the body's natural purification systems—especially the liver. It needs the right nutritional support to work efficiently.

Mannayan DETOX+ is not a harsh 'detox' product, but a precise nutritional support system. It focuses on providing the key coenzymes required for the liver's Phase II detoxification enzyme systems. These coenzymes act like tools, helping the liver convert metabolic waste and foreign substances into forms that can be safely eliminated. The formula's Vitamin C, B Vitamins, Zinc, Selenium, and sulfur-containing amino acids (like Glutamine, Glycine, Cysteine) are the core building blocks for these 'tools'.

Its special feature is the 'Food-State' technology. Nutrients are integrated into a food matrix derived from the enzymatic breakdown of *Lactobacillus bulgaricus*, which includes cofactors naturally present in whole foods. This allows the body to recognize and absorb these nutrients as it would from whole foods, achieving higher bioavailability. Because of this, the product uses a scientifically sound, low-dose design, intended to be fully utilized by the body, avoiding the need to 'flood' the system with high doses.

Take 1-2 capsules daily with meals. Each bottle contains 60 capsules, providing a 1-2 month supply. The formula is pure, suitable for vegetarians and vegans, and is free from gluten, dairy, soy, wheat, and artificial colors, flavors, and preservatives.`,long_description:`Waking up still tired, struggling to focus in the afternoon, or skin that's prone to issues—these are often signals that your body's internal balance needs attention. Our liver is a silent workhorse, tirelessly processing metabolic byproducts and the various substances we encounter daily. When it lacks sufficient support, the smooth functioning of the entire system can be affected.

**Food-State Delivery Technology**
The core of Mannayan DETOX+ lies in its delivery method. The active ingredients are not isolated but are carefully embedded within a special 'food matrix'. This substrate comes from the enzymatic process of *Lactobacillus bulgaricus* and naturally contains various cofactors. This means the vitamins, minerals, and amino acids you supplement are presented in a complex form closer to that found in natural foods. The body recognizes this form, leading to higher absorption and utilization efficiency—what we call high bioavailability. This explains why the formula uses relatively low doses—because every bit of nutrition is effectively delivered and utilized, eliminating the need for excess.

**A Complete System of Synergistic Action**
This product is designed to provide a complete 'toolkit' to support the liver's Phase II detoxification—the conjugation process. This process requires significant coenzyme participation. Vitamin C and B Vitamins (like B1, B6) are indispensable cofactors for many enzymatic reactions. Trace minerals like Zinc, Selenium, Copper, Manganese, Chromium, and Molybdenum are core components or activators of these enzymes. Specially added sulfur-containing amino acids—L-Glutamine, Glycine, and Cysteine—act directly as substrates for conjugation, helping to neutralize and transport substances for elimination. Beta-Carotene and Iodine (from kelp extract) provide additional support from an antioxidant and overall metabolic perspective. All these components don't work in isolation; they function like a well-trained team, each with its role, working synergistically to ensure the smooth operation of the liver's detoxification pathways.

**Who It's For**
It's suitable for those with fast-paced lives, frequent dining out, or who feel their body needs 'reboot' support. It's also for those focused on long-term health, wishing to provide foundational nutritional maintenance for the body's primary metabolic organ. When you want to add a layer of scientific support to a healthy lifestyle, especially during seasonal changes or periods of particular fatigue, it can be a gentle yet effective choice. It is not intended to treat specific diseases but focuses on daily physiological support.

**Purity & Ingredient Integrity**
We firmly believe supplements should be as pure as possible. The Mannayan DETOX+ formula is free from wheat, gluten, soy, dairy (lactose), preservatives, and artificial colors and flavors. It uses non-GMO ingredients, and the capsules themselves are suitable for vegetarians and vegans. The ingredient list is transparent, with active ingredients and excipients listed separately, so you know exactly what you're consuming.

**For Health Practitioners & Distributors: Clinical Background & Protocol Integration**
This product is designed based on research into liver biochemical pathways. Its low-dose, high-bioavailability philosophy aims to mimic obtaining nutrients from high-quality foods, making it easy to integrate into broader health management protocols. Health practitioners may incorporate it as part of a foundational nutritional protocol to support overall metabolism and promote internal balance, combined with personalized dietary and lifestyle advice.

**Usage & Dosage**
Take 1 to 2 capsules daily, swallowed with plenty of water. This can be adjusted based on individual needs and the advice of a health professional. One bottle of 60 capsules provides a one-month or two-month supply at the standard dosage.

**Important Notes**
This product is a dietary supplement and is not a substitute for a balanced, varied diet and a healthy lifestyle. Do not exceed the recommended daily intake. Do not use if you have a yeast allergy or intolerance. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing.`,ingredient_reference:`**Vitamin C (from Acerola Cherry Extract)**
Vitamin C is a powerful water-soluble antioxidant, crucial for synthesizing glutathione—the liver's primary endogenous antioxidant and detoxifier. In this formula, it comes from natural Acerola Cherry extract, providing a more complete phytonutrient profile. It works synergistically with other antioxidants like Selenium and Beta-Carotene to protect liver cells from oxidative stress and support various enzyme functions.

**B Vitamins (B1, B6)**
B Vitamins are essential cofactors for energy metabolism and hundreds of enzymatic reactions. Thiamine (B1) and Pyridoxine (B6) are directly involved in the metabolism of carbohydrates, fats, and proteins, providing the energy foundation for the liver's detoxification work. B6, in particular, participates in amino acid metabolism and neurotransmitter synthesis, working synergistically with amino acids like Glycine and Cysteine in the formula to support the liver's conjugation detoxification pathways.

**Zinc**
Zinc is a component or activator of over 300 enzymes in the body, including key antioxidant enzymes like Superoxide Dismutase (SOD) and detoxification-related enzymes like alcohol dehydrogenase. It is essential for maintaining cell membrane integrity, protein synthesis, and immune function. In the formula, Zinc works together with minerals like Selenium and Copper to form an antioxidant defense network and enzyme active centers.

**Selenium (from Selenium Yeast)**
Selenium is the core component of Glutathione Peroxidase, one of the cell's most important antioxidant defense systems, capable of directly neutralizing hydrogen peroxide and lipid peroxides. The Selenium Yeast form provides organic selenium, which is more conducive to human absorption and storage. It works synergistically with Vitamin C and Zinc to strengthen the body's antioxidant capacity and protect liver cell structure.

**Iron**
Iron is a component of hemoglobin and myoglobin, responsible for oxygen transport and storage, ensuring tissues (including the liver) have an adequate oxygen supply for metabolic activities. The Ferrous Fumarate form offers good absorption and gentle gastrointestinal tolerance. Sufficient iron status is crucial for the function of the energy-producing cellular respiratory chain.

**Sulfur-Containing Amino Acids (L-Glutamine, Glycine, Cysteine)**
These three are the cornerstones supporting the liver's Phase II detoxification (conjugation). Glycine and Glutamine are precursors for glutathione synthesis and are molecules directly involved in conjugation reactions. Cysteine itself contains a thiol group and is a direct component of glutathione. Together, they provide the liver with the 'conjugation tools' to convert fat-soluble toxins into water-soluble substances for elimination, representing the core mechanism by which this formula supports detoxification function.

**Beta-Carotene**
As a precursor to Vitamin A, Beta-Carotene is a fat-soluble antioxidant capable of quenching singlet oxygen and protecting cell membranes from lipid peroxidation damage. It is sourced from *Dunaliella salina*, a natural source. In liver health, it helps maintain the health of epithelial cells (including liver sinusoidal endothelial cells) and forms an antioxidant synergy with Vitamin C and E (the formula's excipients contain various tocopherols).

**Other Trace Minerals (Copper, Manganese, Chromium, Molybdenum, Iodine)**
Although required in minute amounts, these trace minerals play key roles. Copper and Manganese are cofactors for different forms of Superoxide Dismutase (SOD); Chromium, in GTF Yeast form, supports insulin function and glucose metabolism balance; Molybdenum is an essential component of several oxidases (like aldehyde oxidase); Iodine, from kelp extract, is crucial for thyroid hormone synthesis, which regulates the body's basal metabolic rate, including the liver's metabolic activity. Together, they ensure the proper functioning of various enzyme systems related to energy production and detoxification.`}}},{name:"Mannayan FER + (60 Tabletten)",url:"https://mannayan.com/Mannayan-FER-60-Tabletten/010055",price:["21,90 €"],product_number:"010055",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/f3/42/97/1625731424/Fer%2B.jpg?ts=1625731432",image_local:"images/Fer%2B.jpg",content:{cn:{label:`Mannayan FER+
食物态铁补充剂
• 支持健康红血球生成
• 促进能量代谢
• 提升铁吸收与利用
• 温和配方，不刺激肠胃
• 适合敏感体质
每片含：铁10毫克、维生素C30毫克、钼20微克
60片装
纯净认证：无麸质、无乳糖、无大豆、无人工添加剂、素食配方`,short_description:`你是否常常感到精力不济，即使睡眠充足也提不起精神？或者面色容易显得苍白，手脚在温暖环境中也感觉冰凉？这些细微的感受，可能指向身体对铁元素的日常需求。

铁是维持生命活力的基础元素之一，它参与制造红血球，将氧气输送到全身各处。当身体储备不足时，就像引擎缺乏足够的燃料，自然会感到动力下降。

Mannayan FER+采用独特的食物态技术，将铁与天然的保加利亚乳杆菌载体结合。这种形式让身体更容易识别和吸收，就像从完整食物中获取营养一样，大大减少了传统铁剂可能带来的肠胃不适。配方中还特别添加了维生素C和微量元素钼，协同促进铁在体内的有效利用。

每日一片，即可提供10毫克铁、30毫克维生素C和20微克钼。产品配方纯净，不含麸质、乳糖、大豆及常见过敏原，也适合素食者选择。`,long_description:`那种挥之不去的疲惫感，并非总是源于过度的劳累。有时，它更像一种深层的倦怠，即使休息也难以缓解。注意力难以集中，面色失去往日的红润，甚至轻微的体力活动都让人气喘吁吁——这些信号常常在提醒我们，身体的基础能量代谢可能正需要关注。铁元素在其中扮演着核心角色，它是血红蛋白的关键成分，负责将生命所需的氧气运送到每一个细胞。

**食物态技术：回归自然的吸收方式**
Mannayan FER+的核心在于其食物态技术。这里的铁并非孤立的矿物质，而是与经灭活处理的保加利亚乳杆菌载体相结合。这种技术模拟了天然食物中营养素的复合存在状态。身体对它的识别和吸收路径，更接近于消化一份完整的食物，而非处理一个单一的化学合成物。研究数据显示，这种形式的铁吸收率显著高于常见的分离形式铁剂。更重要的是，这种温和的递送方式，让铁元素能够平缓地进入系统，有效避免了传统铁补充剂常见的肠胃刺激、便秘等困扰，使得长期补充成为一件轻松而可持续的事。

**一个完整的支持体系**
配方中的每一种成分都不是孤立存在的，它们构成了一个协同工作的完整体系。铁是核心，负责构建血红蛋白。维生素C作为强大的辅助因子，在肠道中创造了一个更有利于铁吸收的酸性环境，并将铁转化为更易被身体利用的形式。微量元素钼则参与了体内关键的酶促反应，这些酶负责将吸收的铁有效地整合到血红蛋白中，并促进其后续的代谢循环。三者相辅相成，确保了从吸收、转运到最终利用的每一个环节都得到支持，旨在帮助身体更高效地建立和维持健康的铁储备水平。

**适合人群**
这款产品适合那些在日常生活中感受到能量水平不如从前，希望通过基础营养支持来改善整体状态的人。无论是因饮食选择（如素食者）可能面临铁摄入挑战，还是生理周期导致铁需求增加的女性，或是单纯希望以更温和、身体友好方式补充矿物质的人，都可以从中找到价值。它同样适用于对常见过敏原敏感，或追求纯净配方的人群。

**纯净与成分完整性**
我们坚信，补充剂应该为身体带来纯粹的滋养，而非不必要的负担。Mannayan FER+的配方严格排除了麸质、乳制品、大豆、酵母、淀粉以及所有人工色素、香精和防腐剂。它也不涉及转基因原料。辅料仅选用必要的载体和稳定剂，如微晶纤维素和二氧化硅，且用量极简。每一片产品都致力于只提供你所需要的活性成分，别无其他。

**用法与剂量**
作为日常膳食补充，建议每日服用1片，随足量清水吞服。在需求较高的阶段，或在健康管理者的指导下，每日剂量可增至最多3片。为避免影响铁的吸收，建议避免与牛奶、钙补充剂或浓茶同时服用。本产品为60片装。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若瓶口密封条缺失，请勿食用。如果您正在怀孕、哺乳期、有特定健康状况或正在服用其他药物，在开始任何新的补充剂计划前，咨询您的健康顾问是明智之举。`,ingredient_reference:`**铁（来自富马酸亚铁）**
铁是人体必需的矿物质，是血红蛋白和肌红蛋白的核心成分，负责在血液中运输和储存氧气。它同时也参与多种细胞的能量产生过程。本品提供的是二价铁（亚铁），这是身体优先吸收和利用的形式。与食物态载体结合后，其生物利用度和耐受性得到显著提升。适合所有关注红血球健康、能量水平和氧气输送效率的人群。在配方中，它与维生素C和钼协同工作，确保吸收后的高效利用。

**维生素C（抗坏血酸）**
维生素C在本配方中扮演着关键辅助角色。它在肠道内能帮助将三价铁还原为更易吸收的二价铁，并与之结合形成可溶性复合物，从而显著提升铁的吸收率。此外，维生素C本身也是一种重要的抗氧化剂，支持免疫健康和胶原蛋白合成。对于希望优化铁补充效果，并寻求整体抗氧化支持的人来说，它是理想的搭配。它与铁的结合是营养协同作用的经典范例。

**钼（来自钼酸钠）**
钼是一种必需的微量元素，作为多种酶（如亚硫酸盐氧化酶、黄嘌呤氧化酶）的辅助因子发挥作用。这些酶参与体内重要的代谢过程，包括含硫氨基酸的代谢以及嘌呤的分解。在铁代谢的背景下，钼辅助的酶系统有助于铁从储存形式转化为功能形式，并促进其进入血红蛋白的合成路径。它虽然需求量微小，但对于确保吸收的铁能被身体有效利用至关重要。适合那些关注营养物质在体内最终代谢效率的人群。

**食物态载体（灭活保加利亚乳杆菌）**
这不是一种益生菌，而是一种经过灭活处理的天然食物载体。保加利亚乳杆菌在发酵过程中自然产生并携带着一系列营养物质和辅助因子。铁元素被整合进这个天然的载体矩阵中，形成了所谓的“食物态”复合物。这种形式为铁提供了天然的“护送”物质，使其能够通过身体熟悉的食物消化吸收通道被识别和转运，从而大幅提高生物利用度并改善胃肠耐受性。它是本产品实现温和高效补充的技术基石。`},en:{label:`Mannayan FER+
Food-State Iron Supplement
• Supports Healthy Red Blood Cell Production
• Promotes Energy Metabolism
• Enhances Iron Absorption and Utilization
• Gentle Formula, Non-Irritating to the Gut
• Suitable for Sensitive Constitutions
Per Tablet: Iron 10mg, Vitamin C 30mg, Molybdenum 20mcg
60 Tablets
Purity Certified: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Vegetarian Formula`,short_description:`Do you often feel low on energy, even after a full night's sleep? Or notice a paleness in your complexion, with hands and feet feeling cold even in warm environments? These subtle signs may point to your body's daily need for iron.

Iron is a foundational element for sustaining vitality. It plays a key role in producing red blood cells, which carry oxygen throughout your body. When your body's reserves are low, it's like an engine running on insufficient fuel—naturally, you'll feel a drop in drive.

Mannayan FER+ utilizes unique food-state technology, binding iron to a natural carrier of inactivated Lactobacillus bulgaricus. This form allows your body to recognize and absorb it more easily, much like obtaining nutrients from whole foods, significantly reducing the gastrointestinal discomfort often associated with traditional iron supplements. The formula is further enhanced with Vitamin C and the trace mineral molybdenum, working synergistically to promote the effective utilization of iron within your body.

Just one tablet daily provides 10mg of iron, 30mg of Vitamin C, and 20mcg of molybdenum. The formula is pure, free from gluten, lactose, soy, and common allergens, making it a suitable choice for vegetarians as well.`,long_description:`That lingering sense of fatigue isn't always due to overexertion. Sometimes, it feels more like a deep-seated weariness that rest alone can't shake. Difficulty concentrating, a loss of your usual healthy glow, even getting winded from mild physical activity—these signals often remind us that our body's foundational energy metabolism may need attention. Iron plays a central role here; it's a key component of hemoglobin, responsible for transporting the oxygen essential for life to every single cell.

**Food-State Technology: Returning to a Natural Way of Absorption**
The core of Mannayan FER+ lies in its food-state technology. The iron here isn't an isolated mineral; it's bound to a carrier of inactivated Lactobacillus bulgaricus. This technology mimics the complex, composite state of nutrients found in natural foods. Your body recognizes and absorbs it via pathways closer to digesting a whole food rather than processing a single, chemically synthesized compound. Research data shows that iron in this form has a significantly higher absorption rate compared to common isolated forms. More importantly, this gentle delivery method allows iron to enter your system smoothly, effectively avoiding the gastrointestinal irritation, constipation, and other discomforts often associated with traditional iron supplements, making long-term supplementation an easy and sustainable practice.

**A Complete Support System**
Every ingredient in this formula exists not in isolation but as part of a synergistic, complete system. Iron is the core, responsible for building hemoglobin. Vitamin C acts as a powerful cofactor, creating a more acidic environment in the gut that favors iron absorption and converting iron into a form more readily usable by the body. The trace mineral molybdenum participates in key enzymatic reactions within the body; these enzymes are responsible for effectively integrating the absorbed iron into hemoglobin and promoting its subsequent metabolic cycle. The three work in harmony, ensuring support at every stage—from absorption and transport to final utilization—aiming to help your body more efficiently build and maintain healthy iron reserve levels.

**Who It's For**
This product is suitable for those who feel their daily energy levels aren't what they used to be and wish to improve their overall state through foundational nutritional support. Whether you face challenges with iron intake due to dietary choices (like vegetarians), are a woman with increased iron needs due to your menstrual cycle, or simply prefer a gentler, more body-friendly way to supplement minerals, you can find value here. It's also suitable for those sensitive to common allergens or who seek pure, clean formulas.

**Purity and Ingredient Integrity**
We firmly believe that supplements should provide pure nourishment for the body, not unnecessary burdens. The Mannayan FER+ formula strictly excludes gluten, dairy, soy, yeast, starch, and all artificial colors, flavors, and preservatives. It involves no genetically modified ingredients. Excipients are limited to only necessary carriers and stabilizers, such as microcrystalline cellulose and silicon dioxide, used minimally. Every tablet is dedicated to delivering only the active ingredients you need, and nothing else.

**Usage and Dosage**
As a daily dietary supplement, take 1 tablet per day with a full glass of water. During periods of higher need, or under the guidance of a healthcare practitioner, the daily dose may be increased to a maximum of 3 tablets. To avoid interfering with iron absorption, it's recommended not to take it simultaneously with milk, calcium supplements, or strong tea. This product comes in a bottle of 60 tablets.

**Important Notes**
Dietary supplements are not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing or broken. If you are pregnant, breastfeeding, have a specific health condition, or are taking other medications, it is wise to consult your healthcare advisor before starting any new supplement regimen.`,ingredient_reference:`**Iron (from Ferrous Fumarate)**
Iron is an essential mineral for the human body. It is a core component of hemoglobin and myoglobin, responsible for transporting and storing oxygen in the blood. It also participates in energy production processes in various cells. This product provides iron in the ferrous (Fe2+) form, which is the form the body preferentially absorbs and utilizes. When combined with the food-state carrier, its bioavailability and tolerability are significantly enhanced. It is suitable for anyone concerned with red blood cell health, energy levels, and oxygen delivery efficiency. In the formula, it works synergistically with Vitamin C and molybdenum to ensure efficient utilization after absorption.

**Vitamin C (Ascorbic Acid)**
Vitamin C plays a key supporting role in this formula. In the intestines, it helps reduce ferric iron (Fe3+) to the more absorbable ferrous form (Fe2+) and binds with it to form soluble complexes, thereby significantly increasing iron absorption. Furthermore, Vitamin C itself is an important antioxidant, supporting immune health and collagen synthesis. It is an ideal companion for those looking to optimize the effects of iron supplementation while also seeking overall antioxidant support. Its combination with iron is a classic example of nutritional synergy.

**Molybdenum (from Sodium Molybdate)**
Molybdenum is an essential trace mineral that acts as a cofactor for several enzymes (such as sulfite oxidase and xanthine oxidase). These enzymes are involved in vital metabolic processes within the body, including the metabolism of sulfur-containing amino acids and the breakdown of purines. In the context of iron metabolism, the molybdenum-assisted enzyme system helps convert iron from its storage form to its functional form and promotes its entry into the hemoglobin synthesis pathway. Although required in minute amounts, it is crucial for ensuring that the absorbed iron is effectively utilized by the body. It is suitable for those who focus on the final metabolic efficiency of nutrients within the body.

**Food-State Carrier (Inactivated Lactobacillus bulgaricus)**
This is not a probiotic but a natural food carrier that has undergone an inactivation process. Lactobacillus bulgaricus naturally produces and carries a range of nutrients and cofactors during fermentation. The iron element is integrated into this natural carrier matrix, forming what is known as a "food-state" complex. This form provides iron with natural "escort" substances, allowing it to be recognized and transported through the body's familiar food digestion and absorption channels, thereby significantly increasing bioavailability and improving gastrointestinal tolerability. It is the technological foundation that enables this product to provide gentle yet highly effective supplementation.`}}},{name:"Mannayan Flor",url:"https://mannayan.com/Mannayan-Flor/010056",price:["34,80 €"],product_number:"010056",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/03/3f/78/1624950813/Flor.jpg?ts=1624950821",image_local:"images/Flor.jpg",content:{cn:{label:`Mannayan Flor
八联益生菌
支持肠道平衡 · 促进消化舒适 · 维护内在环境 · 精选菌株组合
每粒含300亿CFU · 8种菌株 · 60粒装
非转基因 · 无麸质 · 无乳制品 · 无人工添加剂`,short_description:`你是否感觉消化系统不够顺畅，饭后容易腹胀，或是身体的整体状态容易受到饮食和压力的影响？这些感受常常与内在的菌群平衡有关。

Mannayan Flor 精选八种经过研究的益生菌株，以特定比例组合而成。这些菌株能够耐受胃酸，活着到达肠道，在那里定植并发挥作用，帮助调节内在环境，支持食物的正常分解与营养吸收。

每日1-2粒，即可补充高达300亿的活性菌落形成单位。配方纯净，不含常见的致敏原如麸质、乳制品、大豆，也无人工色素、香料或防腐剂，只专注于提供你所需的菌群支持。`,long_description:`现代生活的节奏、多变的饮食和偶尔的压力，都可能让我们的消化系统感到负担。那种饭后持久的饱胀感、时不时的肠胃不适，或是感觉身体内部环境不够稳定，这些信号常常在提醒我们关注内在的平衡。肠道不仅是消化器官，更是整体健康的重要基石，其内部数以万亿计的微生物构成了一个复杂的生态系统。

**胃酸稳定递送技术**
为了让这些有益的细菌真正抵达它们需要发挥作用的地方，Mannayan Flor采用了耐胃酸的胶囊技术。这层保护确保了胶囊内的活菌能够安全通过胃部的酸性环境，完整地进入肠道，从而最大限度地提高活菌定植的可能性。

**协同作用的完整体系**
配方中的八种菌株并非随意组合。它们包括了乳杆菌属和双歧杆菌属的代表性菌株，各自在肠道生态中扮演着不同的角色。例如，有些菌株擅长在肠道前端营造适宜的环境，而另一些则更适应后端的工作。它们协同作用，共同参与调节肠道pH值，支持有益菌群的生长，并协助维持肠道屏障的完整性。这种多菌株、高剂量的设计，旨在更全面地支持肠道微生态的多样性与平衡。

**适合人群**
这款产品适合那些在饮食调整后仍感觉消化不够轻松、容易因饮食不当或生活压力而感到肠胃不适的人。也适合在旅行、季节变换或生活习惯改变期间，希望为消化系统提供额外支持，以维持内在稳定的人。它关注的是身体发出的那些细微信号，并提供一种基础而专注的养护方式。

**纯净与成分完整性**
我们坚信补充剂的本质在于其成分的纯粹与有效。Mannayan Flor的配方剔除了所有不必要的添加物。它不含麸质、乳制品（乳糖）、大豆、小麦、鱼类、贝类、花生、鸡蛋等常见致敏原，也杜绝了人工色素、香料和防腐剂。胶囊本身由植物纤维素制成，确保每一粒都只专注于传递其核心的益生菌价值。

**用法与剂量**
建议每日服用1至2粒，最好在餐前用足量清水送服。可根据个人感受或健康管理者的具体指导进行调整。每瓶包含60粒胶囊，便于持续补充。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**嗜酸乳杆菌**
嗜酸乳杆菌是肠道中常见的益生菌之一，主要栖息于小肠。它通过发酵碳水化合物产生乳酸等有机酸，帮助降低肠道环境的pH值，创造一个不利于有害菌生长的酸性环境。这种菌株对于支持正常的消化过程和维持小肠的微生物平衡尤为重要。在配方中，它作为主要菌株之一，为其他菌株的定植和功能发挥创造了有利条件。

**乳双歧杆菌**
乳双歧杆菌是双歧杆菌属中研究广泛的菌株，具有良好的耐受性和适应性。它定殖于大肠，是结肠健康的关键支持者。该菌株有助于分解膳食纤维，产生短链脂肪酸，为肠道细胞提供能量，并参与调节免疫反应。在配方中，它与嗜酸乳杆菌形成互补，共同覆盖从小肠到大肠的养护范围。

**长双歧杆菌**
长双歧杆菌是人体肠道原生菌群的重要组成部分，尤其在成年人的肠道中常见。它以其强大的定植能力和稳定性著称，能够长期存在于肠道中。该菌株在维持肠道菌群结构稳定、支持肠道屏障功能方面扮演着角色。作为配方中的一员，它增强了整个菌群组合的持久性和生态稳定性。

**鼠李糖乳杆菌**
鼠李糖乳杆菌以其良好的粘附性和耐受性而闻名。它能够较好地附着在肠道粘膜上，从而更持久地发挥作用。该菌株也参与调节肠道局部环境，并因其特性而被广泛研究。在复合配方中，它增加了菌群在肠道中的附着点，有助于整个益生菌群落更有效地定植。

**短双歧杆菌**
短双歧杆菌是另一种重要的肠道原生菌，尤其在生命早期阶段含量丰富。它参与多种代谢活动，并与其他菌株有积极的相互作用。该菌株的加入，丰富了配方的菌种多样性，模拟了更接近自然状态的肠道菌群构成，支持微生物网络的复杂性。

**干酪乳杆菌**
干酪乳杆菌是一种适应性很强的益生菌，存在于发酵食品和肠道中。它有助于发酵过程，并可能支持营养物质的利用。该菌株的纳入，使得配方能够应对更广泛的肠道环境条件，增强了整个益生菌组合的适应性和韧性。

**唾液乳杆菌**
唾液乳杆菌顾名思义，最初从口腔唾液中发现，但也存在于胃肠道中。它被认为是胃肠道粘膜的常见居民之一。该菌株有助于在肠道局部形成保护性生物膜，支持粘膜健康。它在配方中补充了其他菌株，共同维护肠道内表面的微环境。

**植物乳杆菌**
植物乳杆菌常见于发酵植物性食品中，具有强大的环境适应能力。它能在较宽的pH和温度范围内保持活性。该菌株在肠道中参与发酵产酸，并可能支持整体菌群的平衡。它的加入，为配方带来了来自植物发酵环境的特性，进一步增强了菌群组合的多样性和稳定性。`},en:{label:`Mannayan Flor
8-Strain Probiotic
Supports Gut Balance · Promotes Digestive Comfort · Maintains Internal Environment · Selected Strain Blend
300 Billion CFU per Capsule · 8 Strains · 60 Capsules
Non-GMO · Gluten-Free · Dairy-Free · No Artificial Additives`,short_description:`Do you feel your digestion isn't as smooth as it could be, experience bloating after meals, or find your overall well-being easily affected by diet and stress? These sensations are often linked to the balance of your internal flora.

Mannayan Flor is formulated with eight carefully selected, researched probiotic strains combined in specific proportions. These strains are acid-resistant, surviving stomach acid to reach the intestines alive, where they colonize and work to help regulate your internal environment, supporting normal food breakdown and nutrient absorption.

Just 1-2 capsules daily deliver up to 30 billion active colony-forming units. The formula is pure, free from common allergens like gluten, dairy, and soy, and contains no artificial colors, flavors, or preservatives—focusing solely on providing the flora support you need.`,long_description:`The pace of modern life, varied diets, and occasional stress can all place a burden on our digestive systems. That lingering feeling of fullness after meals, occasional gastrointestinal discomfort, or a sense that your internal environment isn't quite stable—these signals often remind us to pay attention to inner balance. The gut is not just a digestive organ; it's a crucial cornerstone of overall health, home to trillions of microorganisms that form a complex ecosystem.

**Acid-Stable Delivery Technology**
To ensure these beneficial bacteria truly reach where they need to work, Mannayan Flor utilizes acid-resistant capsule technology. This protective layer ensures the live bacteria inside the capsule safely pass through the stomach's acidic environment and arrive intact in the intestines, maximizing the potential for live colonization.

**A Synergistic, Complete System**
The eight strains in the formula are not randomly combined. They include representative strains from the Lactobacillus and Bifidobacterium genera, each playing distinct roles in the gut ecosystem. For instance, some strains excel at creating a suitable environment in the upper intestines, while others are better adapted to work in the lower tract. They work synergistically, collectively helping to regulate intestinal pH, support the growth of beneficial flora, and assist in maintaining gut barrier integrity. This multi-strain, high-potency design aims to more comprehensively support the diversity and balance of the gut microbiome.

**Who It's For**
This product is suitable for those who still feel their digestion isn't effortless even after dietary adjustments, or who are prone to gastrointestinal discomfort from improper diet or life stress. It's also ideal for individuals seeking extra support for their digestive system during travel, seasonal changes, or lifestyle shifts to help maintain internal stability. It pays attention to the subtle signals your body sends and offers a foundational, focused approach to care.

**Purity and Ingredient Integrity**
We believe the essence of a supplement lies in the purity and efficacy of its ingredients. The Mannayan Flor formula eliminates all unnecessary additives. It is free from common allergens like gluten, dairy (lactose), soy, wheat, fish, shellfish, peanuts, and eggs, and contains no artificial colors, flavors, or preservatives. The capsules themselves are made from plant cellulose, ensuring each one is dedicated solely to delivering its core probiotic value.

**Usage & Dosage**
Take 1 to 2 capsules daily, preferably before a meal with plenty of water. Adjust based on personal experience or the specific guidance of your health practitioner. Each bottle contains 60 capsules for convenient ongoing supplementation.

**Important Note**
This product is a dietary supplement and is not intended to replace a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal on the bottle is missing.`,ingredient_reference:`**Lactobacillus acidophilus**
Lactobacillus acidophilus is one of the common probiotics in the gut, primarily inhabiting the small intestine. It ferments carbohydrates to produce organic acids like lactic acid, helping to lower the pH of the intestinal environment and create an acidic milieu less favorable for harmful bacteria. This strain is particularly important for supporting normal digestive processes and maintaining microbial balance in the small intestine. In the formula, it serves as a primary strain, creating favorable conditions for the colonization and function of other strains.

**Bifidobacterium lactis**
Bifidobacterium lactis is a widely researched strain within the Bifidobacterium genus, known for its good tolerance and adaptability. It colonizes the large intestine and is a key supporter of colon health. This strain helps break down dietary fiber, producing short-chain fatty acids that provide energy for intestinal cells and participate in modulating immune responses. In the formula, it complements Lactobacillus acidophilus, together covering care from the small to the large intestine.

**Bifidobacterium longum**
Bifidobacterium longum is an important component of the native gut flora, particularly common in the adult intestine. It is known for its strong colonization ability and stability, capable of persisting in the gut long-term. This strain plays a role in maintaining the structural stability of the gut flora and supporting gut barrier function. As part of the formula, it enhances the longevity and ecological stability of the entire bacterial blend.

**Lactobacillus rhamnosus**
Lactobacillus rhamnosus is renowned for its good adhesion and tolerance. It can adhere well to the intestinal mucosa, allowing it to function more persistently. This strain also participates in regulating the local gut environment and has been widely studied for its properties. In the complex formula, it increases the adhesion points for the flora in the gut, helping the entire probiotic community colonize more effectively.

**Bifidobacterium breve**
Bifidobacterium breve is another important native gut bacterium, especially abundant in early life stages. It is involved in various metabolic activities and interacts positively with other strains. The inclusion of this strain enriches the species diversity of the formula, mimicking a gut flora composition closer to a natural state and supporting the complexity of the microbial network.

**Lactobacillus casei**
Lactobacillus casei is a highly adaptable probiotic found in fermented foods and the gut. It aids in fermentation processes and may support nutrient utilization. Incorporating this strain allows the formula to adapt to a wider range of gut environmental conditions, enhancing the adaptability and resilience of the entire probiotic blend.

**Lactobacillus salivarius**
As the name suggests, Lactobacillus salivarius was initially isolated from oral saliva but is also present in the gastrointestinal tract. It is considered a common resident of the GI mucosa. This strain helps form a protective biofilm locally in the gut, supporting mucosal health. In the formula, it complements other strains in maintaining the microenvironment of the gut's inner surface.

**Lactobacillus plantarum**
Lactobacillus plantarum is commonly found in fermented plant-based foods and possesses strong environmental adaptability. It remains active across a broad range of pH and temperatures. In the gut, this strain participates in acid-producing fermentation and may support overall flora balance. Its addition brings characteristics from plant fermentation environments, further enhancing the diversity and stability of the bacterial blend.`}}},{name:"Mannayan FOL + (60 Kapseln)",url:"https://mannayan.com/Mannayan-FOL-60-Kapseln/010057",price:["19,90 €"],product_number:"010057",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/e8/a7/8b/1766137004/Fol%2B_2025.jpg?ts=1766137004",image_local:"images/Fol%2B_2025.jpg",content:{cn:{label:`Mannayan FOL+ | 食物态活性叶酸

• 支持细胞能量与新生
• 维护心血管系统健康
• 促进同型半胱氨酸正常代谢
• 采用生物活性甲基叶酸形式
• 60粒胶囊 | 每日1粒，含400微克叶酸（200% NRV）
• 全食物来源 | 素食友好 | 无麸质、无大豆、无乳制品、无人工添加剂`,short_description:`你是否感觉日常精力总差那么一点，或者希望为身体的长期健康打下更坚实的基础？许多现代饮食方式可能无法稳定提供一种对细胞更新和能量代谢至关重要的营养素——活性叶酸。

Mannayan FOL+ 提供的是5-甲基四氢叶酸，这是叶酸在体内直接起作用的活性形式。它无需经过复杂的转化过程，能被身体高效识别和利用，直接参与到支持细胞健康、神经信号传递和同型半胱氨酸代谢平衡的核心环节中。

这款补充剂的核心在于其“食物态”理念。活性叶酸并非孤立存在，而是与苜蓿浓缩物这一完整的植物基质相结合。这种形式模拟了从天然食物中获取营养的方式，可能带来更好的生物利用度和耐受性。

每粒胶囊提供400微克活性叶酸。配方纯净，适合素食者，并且不含麸质、大豆、乳制品及人工色素、香料和防腐剂。`,long_description:`当身体的更新节奏需要支持，或是你寻求一种更贴近自然方式的营养补充时，活性叶酸的角色便显得尤为重要。它不像普通的合成叶酸，需要身体多一步转化才能工作；它以准备好的形式直接参与生命的基础进程。

**食物态递送技术**
Mannayan FOL+ 采用的不是单纯的成分分离。其中的5-甲基四氢叶酸（活性叶酸）被“重植”回一个完整的植物营养复合体——苜蓿浓缩物中。这个过程我们称之为“食物态”技术。它不仅仅是混合，而是让活性成分与苜蓿中的天然蛋白质、酶和其他食物因子重新结合。这样做的目的是让身体将其识别为“食物”，而非“外来的化学物质”，从而可能以更自然、更高效的方式进行吸收和利用。

**一个协同运作的完整体系**
配方虽然成分聚焦，但理念是完整的。活性叶酸是B族维生素家族的关键成员，它直接参与体内“一碳单位”的代谢循环。这个循环是DNA合成与修复、细胞分裂、以及神经递质生成等核心生理活动的基石。当活性叶酸以食物态形式提供时，它所带来的不仅仅是单一分子，还有与之相伴的植物基质中微妙的协同因子。这为身体利用这一关键营养素提供了更全面的支持环境，尤其关注同型半胱氨酸这一重要健康指标的代谢平衡。

**适合人群**
这款产品适合那些饮食中绿叶蔬菜摄入不足，或是对自身营养代谢效率有更高要求的人。它也适用于偏好从更接近天然食物形态中获取营养补充的个体。对于那些关注心血管系统长期健康、希望支持身体自然更新能力，或是在专业健康管理人士指导下需要针对性补充活性叶酸形式的人群，这是一个纯净而直接的选择。

**纯净与成分完整性**
我们坚信，补充剂应该补充营养，而不应增加身体的负担。因此，Mannayan FOL+ 的配方极其简洁。除了核心的活性叶酸-苜蓿复合物，仅使用必要的植物胶囊壳和极少量辅助成分以确保产品稳定性。它不含小麦、麸质、大豆、乳制品、酵母，也杜绝了所有人工色素、香料和防腐剂。这份纯净清单本身，就是我们对成分完整性的承诺。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士而言，Mannayan FOL+ 提供了一个高生物利用度且耐受性良好的叶酸补充选项。其采用的5-甲基四氢叶酸（5-MTHF）是绕过MTHFR酶转化步骤的直接形式，这在临床营养方案中具有明确意义。它可以作为支持心血管代谢健康、细胞功能及特定生命周期营养需求的基石方案的一部分，易于与其他B族维生素、或针对性的抗氧化及代谢支持方案进行搭配。

**用法与剂量**
建议每日服用1粒胶囊，最好在餐前约1小时用足量水送服，以利于吸收。每粒提供400微克活性叶酸（5-甲基四氢叶酸），满足日常高标准需求。一瓶包含60粒胶囊，为期两个月的用量。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。如有特定健康状况或正在服用药物，使用前请咨询您的健康顾问。`,ingredient_reference:`**5-甲基四氢叶酸（活性叶酸）**
这是叶酸在人体内直接发挥生理功能的活性形式，也称为甲基叶酸。它无需经过肝脏的酶促转化，能直接进入血液循环和细胞代谢途径。在体内，它作为关键的甲基供体，参与DNA合成与修复、支持细胞正常分裂，并协助维持同型半胱氨酸的健康代谢水平。本产品采用此形式，旨在为那些可能对普通叶酸转化效率不佳的人群提供直接支持。在配方中，它与苜蓿基质结合，模拟了从天然食物中摄取复合营养的状态。

**苜蓿浓缩物（食物态基质）**
苜蓿是一种营养丰富的豆科植物。在本产品中，它不仅是载体，更是“食物态”技术的核心。活性叶酸被重新整合到苜蓿的天然营养复合体中，其中包含植物蛋白质、酶和多种尚未被完全定义的生物活性因子。这种结合方式旨在提升身体对核心成分的“食物识别度”和生物利用度。苜蓿本身也提供广泛的植物营养素，为活性叶酸的代谢利用创造了一个更完整、更温和的微环境，这与直接补充单一合成成分的理念截然不同。`},en:{label:`Mannayan FOL+ | Food-State Active Folate

• Supports Cellular Energy & Renewal
• Maintains Cardiovascular System Health
• Promotes Healthy Homocysteine Metabolism
• Features Bioactive Methylfolate Form
• 60 Capsules | 1 Daily, Providing 400 mcg Folate (200% NRV)
• Whole-Food Sourced | Vegetarian Friendly | Free From Gluten, Soy, Dairy & Artificial Additives`,short_description:`Do you feel your daily energy is always just a little short, or wish to build a stronger foundation for your long-term health? Many modern diets may not consistently provide a crucial nutrient for cellular renewal and energy metabolism—active folate.

Mannayan FOL+ delivers 5-methyltetrahydrofolate, the active form of folate that works directly in the body. It bypasses complex conversion processes, is efficiently recognized and utilized, and directly participates in supporting cellular health, nerve signaling, and balanced homocysteine metabolism.

At the heart of this supplement is its “food-state” philosophy. The active folate is not isolated but integrated with a complete plant matrix—alfalfa concentrate. This form mimics how nutrients are obtained from whole foods, potentially offering better bioavailability and tolerance.

Each capsule provides 400 mcg of active folate. The formula is pure, suitable for vegetarians, and free from gluten, soy, dairy, and artificial colors, flavors, and preservatives.`,long_description:`When your body’s renewal rhythm needs support, or you seek a more natural approach to supplementation, active folate plays a particularly vital role. Unlike ordinary synthetic folic acid, which requires an extra conversion step in the body, it arrives ready to participate directly in life’s fundamental processes.

**Food-State Delivery Technology**
Mannayan FOL+ does not use isolated ingredients. Its 5-methyltetrahydrofolate (active folate) is “re-planted” into a complete plant nutrient complex—alfalfa concentrate. We call this “food-state” technology. It’s more than a blend; it allows the active compound to recombine with the natural proteins, enzymes, and other food factors in alfalfa. The goal is for the body to recognize it as “food,” not a “foreign chemical,” potentially leading to more natural and efficient absorption and utilization.

**A Synergistic, Complete System**
While the formula is focused, its philosophy is holistic. Active folate is a key member of the B-vitamin family, directly involved in the body’s “one-carbon unit” metabolic cycle. This cycle is the cornerstone of core physiological activities like DNA synthesis and repair, cell division, and neurotransmitter production. When active folate is delivered in a food-state form, it brings not just a single molecule but also the subtle co-factors from its accompanying plant matrix. This provides a more comprehensive support environment for the body to utilize this key nutrient, with particular attention to the metabolic balance of homocysteine, an important health marker.

**Who It’s For**
This product is suitable for those with insufficient leafy green vegetable intake or who have higher demands for their nutritional metabolic efficiency. It’s also for individuals who prefer supplements closer to natural food forms. For those focused on long-term cardiovascular health, wishing to support the body’s natural renewal capacity, or who, under the guidance of a health professional, require targeted supplementation with the active folate form, this is a pure and direct choice.

**Purity & Ingredient Integrity**
We firmly believe supplements should add nutrition, not burden the body. Therefore, the Mannayan FOL+ formula is exceptionally clean. Beyond the core active folate-alfalfa complex, it uses only the necessary plant-based capsule shell and minimal processing aids to ensure product stability. It contains no wheat, gluten, soy, dairy, yeast, and excludes all artificial colors, flavors, and preservatives. This purity list itself is our commitment to ingredient integrity.

**For Health Practitioners & Distributors: Clinical Context & Protocol Synergy**
For health professionals, Mannayan FOL+ offers a highly bioavailable and well-tolerated folate option. Its use of 5-methyltetrahydrofolate (5-MTHF) is the direct form that bypasses the MTHFR enzyme conversion step, which has clear significance in clinical nutrition protocols. It can serve as part of a foundational protocol supporting cardiovascular metabolic health, cellular function, and specific life-stage nutritional needs, and pairs easily with other B vitamins or targeted antioxidant and metabolic support regimens.

**Usage & Dosage**
Take 1 capsule daily, preferably about 1 hour before a meal with plenty of water to aid absorption. Each capsule provides 400 mcg of active folate (5-methyltetrahydrofolate), meeting high daily standards. One bottle contains 60 capsules, a two-month supply.

**Important Notes**
This product is a dietary supplement and is not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the inner seal is missing. If you have a specific health condition or are taking medication, consult your health advisor before use.`,ingredient_reference:`**5-Methyltetrahydrofolate (Active Folate)**
This is the active form of folate that functions directly in the human body, also known as methylfolate. It does not require enzymatic conversion in the liver and can directly enter the bloodstream and cellular metabolic pathways. In the body, it acts as a key methyl donor, participating in DNA synthesis and repair, supporting normal cell division, and helping maintain healthy homocysteine metabolism levels. This product uses this form to provide direct support for individuals who may have reduced efficiency in converting ordinary folic acid. In the formula, it is combined with an alfalfa matrix, simulating the state of obtaining complex nutrition from natural foods.

**Alfalfa Concentrate (Food-State Matrix)**
Alfalfa is a nutrient-rich legume. In this product, it is not just a carrier but the core of the “food-state” technology. The active folate is reintegrated into alfalfa’s natural nutrient complex, which includes plant proteins, enzymes, and various yet-to-be-fully-defined bioactive factors. This integration aims to enhance the body’s “food recognition” and bioavailability of the core ingredient. Alfalfa itself also provides a broad spectrum of phytonutrients, creating a more complete and gentle microenvironment for the metabolic utilization of active folate—a philosophy distinctly different from supplementing with an isolated synthetic compound.`}}},{name:"Mannayan Gewürznelke",url:"https://mannayan.com/Mannayan-Gewuerznelke/010147",price:[],product_number:"010147",quantity:["150 Kapseln"],image_url:"https://mannayan.com/media/d6/20/e9/1624950747/Gew%C3%BCrznelke.jpg?ts=1624950757",image_local:"images/Gew%C3%BCrznelke.jpg",content:{cn:{label:`Mannayan 丁香
源自花蕾的天然力量
• 支持消化系统自然舒适
• 维持口腔环境清新健康
• 提供源自植物的抗氧化支持
• 帮助身体应对季节性挑战
150粒胶囊 / 每粒含500毫克丁香粉 (5:1浓缩)
无麸质、无大豆、无乳制品、无人工添加剂、非转基因`,short_description:`你是否感觉饭后有些沉滞，或是希望为日常的自我照护增添一份来自古老植物的温和支持？丁香，这种温暖而熟悉的香料，其价值远不止于厨房。

Mannayan 丁香胶囊选用纯粹的丁香花蕾，通过温和工艺制成5:1浓缩粉末。这意味着每一粒胶囊都凝聚了植物的精华，旨在以易于身体接纳的形式，提供其固有的自然属性。它作用于身体的多个层面，从支持消化过程的顺畅，到维护口腔的清新感受。

每日随餐服用1至3粒，即可将这份植物的温和力量融入日常生活。产品采用植物胶囊，并严格确保配方纯净，不含常见的致敏原与人工添加剂。`,long_description:`那种饭后隐隐的胀满感，或是希望为身体找到一种简单、纯净的植物性支持——这些感受常常指向对内在平衡的深层需求。我们寻求的并非剧烈的改变，而是如涓涓细流般融入日常的、源自自然的调理。

**食物态技术与配方纯净**
本产品采用纯粹的丁香（Syzygium aromaticum）干燥花蕾，经细致研磨并浓缩制成5:1粉末。这意味着约5份原料浓缩为1份成品，旨在保留植物中活跃的天然化合物。胶囊外壳选用羟丙甲纤维素，一种植物来源的纤维素，确保产品纯净，适合广泛人群。整个生产过程遵循严格标准，最终成品不含麸质、大豆、乳制品、人工色素、香料及防腐剂，且为非转基因。

**完整的作用体系**
丁香并非单一作用的成分。其温暖的特质传统上被认为能支持健康的消化功能，帮助缓解偶尔的消化不良与饭后不适。同时，丁香以其天然的清新特性著称，有助于维持口腔环境的健康与口气清新。更重要的是，丁香富含天然的植物抗氧化成分，为身体应对日常环境压力提供支持。这些方面共同作用，构成了一个温和而全面的日常健康支持方案。

**适合的人群**
这款产品适合那些在饮食后容易感到消化负担，寻求天然方式促进消化舒适度的人。也适合注重口腔健康，希望以内部调理方式辅助维持清新感受的成年人。对于希望在季节更替或压力较大时期，为免疫系统提供植物性抗氧化支持的人群，它也是一个简单的选择。它适合作为纯净生活方式的一部分，融入注重整体平衡的日常养生习惯。

**纯净与成分完整性**
我们相信，补充剂的价值首先在于其成分的纯粹与真实。每一批丁香原料都经过甄选，确保其品质与效力。5:1的浓缩工艺旨在提供更具效益的剂量，而无需服用大量胶囊。配方中除了活性成分与必要的植物胶囊外，别无他物。这种对纯净的坚持，让身体能够直接汲取植物的益处，无需处理不必要的添加剂。

**健康管理者与搭配建议**
许多自然疗法医师与健康顾问将丁香视为一种基础性的温热香料，常用于支持消化系统健康与整体活力方案。在临床实践中，它常被纳入针对消化功能、口腔微生态或整体抗氧化支持的复合方案中。它可以与其他消化酶、益生菌或温和的草本配方协同使用，以构建更个性化的健康管理计划。建议使用者咨询自己的健康顾问，以获得最适合个人情况的搭配与剂量指导。

**用法与剂量**
建议每日服用1至3粒胶囊，最好在餐前用足量水送服。具体剂量可根据个人需求和健康顾问的建议进行调整。一瓶含有150粒胶囊，在常规用量下可提供50至150天的支持。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食与健康的生活方式。请勿超过建议每日食用量。不适合孕妇、哺乳期妇女及7岁以下儿童使用。请将产品置于儿童无法触及的阴凉干燥处保存。如果密封条破损，请勿食用。`,ingredient_reference:`**丁香粉 (5:1浓缩物)**
丁香来源于丁香树（Syzygium aromaticum）的干燥花蕾，是一种历史悠久的温热香料与草本植物。其5:1浓缩形式意味着经过工艺提取，使有效成分更为集中，每500毫克胶囊相当于约2500毫克原丁香粉的浓缩精华。在体内，丁香中的天然化合物，尤其是丁香酚，主要作用于消化系统，帮助缓解胃肠痉挛与胀气，支持健康的消化过程。同时，它具有天然的抗菌与抗氧化特性，有助于维护口腔健康并应对氧化压力。这种成分特别适合饮食后易有饱胀不适感，或寻求全面植物性抗氧化支持的人群。在本配方中，作为单一核心成分，它提供了直接而专注的益处，无需与其他成分协同，其效力来自于自身浓缩的完整植物基质。`},en:{label:`Mannayan Clove
Natural Power from Flower Buds
• Supports natural digestive comfort
• Maintains a fresh, healthy oral environment
• Provides plant-based antioxidant support
• Helps the body cope with seasonal challenges
150 capsules / 500 mg clove powder (5:1 concentrate) per capsule
Gluten-free, soy-free, dairy-free, no artificial additives, non-GMO`,short_description:`Do you sometimes feel heavy after meals, or wish to add a gentle, ancient plant-based support to your daily self-care routine? Clove, that warm and familiar spice, offers far more than just culinary value.

Mannayan Clove Capsules are made from pure clove flower buds, gently processed into a 5:1 concentrated powder. This means each capsule delivers the concentrated essence of the plant, designed to provide its inherent natural properties in a form your body can easily embrace. It works on multiple levels—from supporting smooth digestion to maintaining a fresh feeling in the mouth.

Take 1 to 3 capsules daily with meals to incorporate this gentle botanical power into your routine. The product uses plant-based capsules and is rigorously formulated to be pure, free from common allergens and artificial additives.`,long_description:`That subtle feeling of fullness after eating, or the desire to find a simple, pure plant-based support for your body—these feelings often point to a deeper need for internal balance. What we seek is not drastic change, but gentle, natural nourishment that flows seamlessly into daily life, like a steady stream.

**Food-State Technology & Formula Purity**
This product uses pure dried flower buds of clove (Syzygium aromaticum), carefully ground and concentrated into a 5:1 powder. This means approximately 5 parts of raw material are concentrated into 1 part of finished product, aiming to preserve the plant's active natural compounds. The capsule shell is made from hydroxypropyl methylcellulose, a plant-derived cellulose, ensuring purity and suitability for a wide range of individuals. The entire production process follows strict standards, and the final product is free from gluten, soy, dairy, artificial colors, flavors, preservatives, and is non-GMO.

**A Complete System of Action**
Clove is not a single-action ingredient. Its warming properties have traditionally been associated with supporting healthy digestive function, helping to ease occasional indigestion and post-meal discomfort. At the same time, clove is renowned for its natural freshening qualities, aiding in maintaining a healthy oral environment and fresh breath. Importantly, clove is rich in natural plant-based antioxidants, providing support for the body in coping with everyday environmental stressors. These aspects work together to form a gentle yet comprehensive daily wellness support plan.

**Who It's For**
This product is suitable for those who often feel digestive burden after meals and seek a natural way to promote digestive comfort. It is also ideal for adults who value oral health and wish to support a fresh feeling through internal care. For those looking to provide plant-based antioxidant support to their immune system during seasonal changes or periods of higher stress, it offers a simple option. It fits as part of a pure lifestyle, integrating into daily wellness habits focused on holistic balance.

**Purity & Ingredient Integrity**
We believe the value of a supplement lies first in the purity and authenticity of its ingredients. Each batch of clove is carefully selected to ensure quality and potency. The 5:1 concentration process aims to deliver a more efficacious dose without requiring a large number of capsules. The formula contains nothing but the active ingredient and the necessary plant-based capsule—no unnecessary fillers. This commitment to purity allows the body to directly receive the plant's benefits without processing unwanted additives.

**Health Practitioners & Combination Suggestions**
Many naturopaths and wellness advisors view clove as a foundational warming spice, often used to support digestive health and overall vitality. In clinical practice, it is frequently incorporated into complex protocols targeting digestive function, oral microbiome, or overall antioxidant support. It can be used synergistically with other digestive enzymes, probiotics, or gentle herbal formulas to build a more personalized wellness plan. Users are advised to consult their healthcare advisor for the most suitable combinations and dosage guidance for their individual situation.

**Usage & Dosage**
Take 1 to 3 capsules daily, preferably before meals with plenty of water. The specific dosage can be adjusted based on individual needs and healthcare advisor recommendations. One bottle contains 150 capsules, providing 50 to 150 days of support at typical usage levels.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced, varied diet and a healthy lifestyle. Do not exceed the recommended daily intake. Not suitable for use by pregnant or breastfeeding women, or children under 7 years of age. Store in a cool, dry place out of reach of children. Do not consume if the safety seal is broken.`,ingredient_reference:`**Clove Powder (5:1 Concentrate)**
Clove is derived from the dried flower buds of the clove tree (Syzygium aromaticum), a historically revered warming spice and herb. Its 5:1 concentrated form means it has been processed to concentrate the active constituents, with each 500 mg capsule equivalent to the concentrated essence of approximately 2500 mg of raw clove powder. In the body, the natural compounds in clove, particularly eugenol, primarily act on the digestive system, helping to ease gastrointestinal spasms and bloating while supporting a healthy digestive process. Simultaneously, it possesses natural antibacterial and antioxidant properties, aiding in maintaining oral health and coping with oxidative stress. This ingredient is especially suitable for individuals who experience post-meal fullness or discomfort, or those seeking comprehensive plant-based antioxidant support. In this formulation, as the single core ingredient, it provides direct and focused benefits without requiring synergy with other components; its efficacy comes from its own concentrated, complete plant matrix.`}}},{name:"Mannayan GIN + (60 Tabletten)",url:"https://mannayan.com/Mannayan-GIN-60-Tabletten/010059",price:["29,50 €"],product_number:"010059",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/b1/9e/b2/1766137022/Gin%2B_2025.jpg?ts=1766137022",image_local:"images/Gin%2B_2025.jpg",content:{cn:{label:`Mannayan GIN + 西伯利亚刺五加
适应原草本，支持日常能量与平衡
• 支持身体适应日常压力
• 促进精力与耐力
• 帮助维持整体平衡
• 源自传统草本智慧
60片素食胶囊 | 每日1片，含600毫克西伯利亚刺五加提取物
纯净配方：无麸质、无乳糖、无大豆、无人工色素香料、无防腐剂、适合素食者`,short_description:`你是否感觉一天下来，精力总是不够用，应对日常事务有些力不从心？现代生活的节奏常常让身体处于一种持续的消耗状态，需要一种从根本上的支持。

Mannayan GIN + 的核心是西伯利亚刺五加，这是一种在严酷环境中生长的古老草本。它并非提供短暂的刺激，而是帮助身体更好地适应内外部的变化，建立自身的平衡与韧性，从而让精力更自然地流淌。

每日只需服用一片，即可提供600毫克高浓度的西伯利亚刺五加。它采用纯净的素食胶囊封装，不含任何常见的过敏原或人工添加剂，配方简单而专注。建议连续服用约六周后，暂停两到三周，让身体有休息和整合的时间。`,long_description:`那种感觉你可能很熟悉：明明没有做什么特别劳累的事，但就是提不起精神，注意力容易分散，身体仿佛总是处在一种低能量的待机状态。这不是懒惰，而是身体在告诉你，它需要更深层的支持来应对日复一日的消耗。

**食物态技术与配方纯净性**
本产品采用西伯利亚刺五加的完整提取物，以粉末形式封装于植物来源的羟丙甲纤维素胶囊中。这种形式旨在保留草本中协同作用的天然复合成分，而非单一的化合物。整个配方极度纯净，不含麸质、乳制品、大豆、小麦，也无任何人工色素、香料或防腐剂。它从源头开始，就致力于提供最少的干扰和最大的支持。

**完整的作用体系**
西伯利亚刺五加被归类为一种“适应原”。这意味着它的核心作用不是针对某个单一的器官或症状，而是作用于身体的整体调节系统，特别是与压力反应相关的系统。它帮助身体在面对各种生理和心理需求时，更平稳、更有效地调动自身资源，从而增强内在的适应能力和恢复力。这种从系统层面的支持，是它提升精力感、促进耐力并帮助维持整体平衡的基础。

**适合的人群**
它适合那些生活节奏快、感到精力被日常事务持续消耗的人；适合在压力时期需要额外支持以保持状态稳定的人；也适合追求自然、纯净生活方式，希望从传统草本智慧中寻找温和而有效支持的人。无论是应对繁忙的工作，还是处理家庭琐事，当身体需要一种更深层、更持久的能量基础时，它都能提供帮助。

**健康管理者与搭配方案**
对于健康管理者而言，西伯利亚刺五加因其广泛的调节作用而备受重视。它可以作为基础支持方案的一部分，帮助个体在压力管理、能量提升和整体恢复方面打下基础。临床实践中，它常被用于支持因长期慢性压力导致的疲劳状态，或作为康复期的辅助支持。它可以与其他针对性的营养方案搭配，但建议咨询专业人士以获得个性化指导。

**用法与剂量**
建议每日服用1片素食胶囊，随足量液体吞服。为了获得最佳效果并尊重身体的自然节律，建议以大约六周为一个周期进行补充，之后暂停两到三周，让身体有一个休息和重新校准的间隔。之后可以根据自身感受决定是否开始新的周期。

**重要提示**
请勿超过推荐的每日食用量。膳食补充剂不能替代均衡多样的饮食。请将本品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**西伯利亚刺五加提取物**
西伯利亚刺五加是一种生长在西伯利亚严酷气候下的灌木根部，在传统应用中已有悠久历史。它属于适应原草本，主要作用于人体的下丘脑-垂体-肾上腺轴，帮助调节身体对压力的反应，促进内稳态的平衡。本产品采用其根部标准提取物粉末，每份提供600毫克的高浓度成分。它特别适合那些因长期、低强度压力而感到精力不济、恢复缓慢的人群。在配方中，它是唯一且核心的成分，其价值在于通过多靶点的温和调节，为身体提供全面的适应性支持，而非单一的刺激作用。`},en:{label:`Mannayan GIN + Siberian Eleuthero
Adaptogenic Herb for Daily Energy & Balance
• Supports the body’s adaptation to daily stress
• Promotes energy and endurance
• Helps maintain overall balance
• Rooted in traditional herbal wisdom
60 Vegan Capsules | 1 capsule daily, containing 600 mg Siberian Eleuthero extract
Pure Formula: Gluten-free, lactose-free, soy-free, no artificial colors or flavors, no preservatives, suitable for vegetarians`,short_description:`Do you often feel like your energy runs low by the end of the day, making it hard to keep up with daily demands? The pace of modern life can leave the body in a state of constant depletion, calling for foundational support.

At the heart of Mannayan GIN + is Siberian Eleuthero, an ancient herb that thrives in harsh environments. Instead of offering a short-lived boost, it helps the body better adapt to internal and external changes, building its own balance and resilience so that energy flows more naturally.

Just one capsule daily delivers 600 mg of concentrated Siberian Eleuthero. Encased in pure vegan capsules, it’s free from common allergens and artificial additives—a simple, focused formula. For best results, we recommend taking it consistently for about six weeks, followed by a two-to-three-week break to allow the body time to rest and integrate.`,long_description:`You may know the feeling well: even without doing anything particularly strenuous, you lack drive, focus drifts easily, and the body seems stuck in a low-energy standby mode. This isn’t laziness—it’s your body signaling that it needs deeper support to cope with day-to-day depletion.

**Food-State Technology & Formulation Purity**
This product uses a full-spectrum extract of Siberian Eleuthero, delivered as a powder in plant-derived hydroxypropyl methylcellulose capsules. This form aims to preserve the naturally synergistic compounds of the herb, rather than isolating a single constituent. The entire formula is exceptionally pure—free from gluten, dairy, soy, wheat, and any artificial colors, flavors, or preservatives. From the source onward, it’s designed to provide minimal interference and maximum support.

**A Holistic Action System**
Siberian Eleuthero is classified as an “adaptogen.” This means its core action is not targeting a single organ or symptom, but rather supporting the body’s overall regulatory systems, particularly those involved in stress response. It helps the body mobilize its own resources more smoothly and effectively when facing various physical and mental demands, thereby enhancing innate adaptability and resilience. This system-level support is the foundation for its ability to uplift energy, promote endurance, and help maintain overall balance.

**Who It’s For**
It’s suited for those with a fast-paced lifestyle who feel their energy is constantly drained by daily tasks; for individuals needing extra support during stressful periods to maintain steadiness; and for those pursuing a natural, clean lifestyle who seek gentle yet effective support from traditional herbal wisdom. Whether navigating a busy work schedule or managing household responsibilities, it can help when the body needs a deeper, more sustained foundation of energy.

**For Health Managers & Stacking Suggestions**
Health practitioners value Siberian Eleuthero for its broad regulatory influence. It can serve as part of a foundational support plan, helping to build a base for stress management, energy enhancement, and overall recovery. In clinical practice, it is often used to support fatigue related to chronic stress or as an adjunct during convalescence. It can be combined with other targeted nutritional approaches, though consulting a professional for personalized guidance is recommended.

**Usage & Dosage**
Take 1 vegan capsule daily with plenty of liquid. To optimize benefits and honor the body’s natural rhythms, we suggest a supplementation cycle of about six weeks, followed by a two-to-three-week pause to allow for rest and recalibration. Afterward, you can decide based on how you feel whether to begin a new cycle.

**Important Notes**
Do not exceed the recommended daily intake. Dietary supplements are not a substitute for a varied, balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle’s inner seal is missing.`,ingredient_reference:`**Siberian Eleuthero Extract**
Siberian Eleuthero is a shrub root that grows in the harsh climate of Siberia, with a long history in traditional use. It belongs to the adaptogen class of herbs, primarily acting on the body’s hypothalamic-pituitary-adrenal (HPA) axis to help modulate the stress response and promote homeostasis. This product uses a standardized root extract powder, delivering 600 mg of high-concentration ingredient per serving. It is especially suitable for those experiencing low energy and slow recovery due to prolonged, low-grade stress. In the formula, it is the sole and core ingredient—its value lies in providing comprehensive adaptive support through gentle, multi-targeted modulation, rather than a single stimulant effect.`}}},{name:"Mannayan GLUCAN + (60 Kapseln)",url:"https://mannayan.com/Mannayan-GLUCAN-60-Kapseln/010060",price:["32,90 €"],product_number:"010060",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/36/7c/82/1766137043/Glucan%2B_2025.jpg?ts=1766137043",image_local:"images/Glucan%2B_2025.jpg",content:{cn:{label:`Mannayan GLUCAN+
酵母β-葡聚糖与协同营养素
• 支持核心防御系统功能
• 促进免疫细胞沟通与应答
• 提供抗氧化保护
• 维持黏膜健康屏障
60粒胶囊 / 每日1-3粒
纯素配方 | 无麸质、乳制品、大豆、人工添加剂`,short_description:`你是否感觉季节更替时身体更容易受到外界影响，或是希望为日常的平衡状态提供更稳固的支持？这常常是身体内在防御与调节系统需要额外关注的信号。

Mannayan GLUCAN+ 的核心是从面包酵母中精心提取的1,3/1,6-β-葡聚糖。这种特殊的膳食纤维是身体识别并启动协调反应的关键信使之一。它并非直接作用于某个单一目标，而是帮助身体优化自身的沟通与应答网络。

配方中特别加入了维生素C、锌和硒。它们不仅是抗氧化剂，更是支持免疫细胞正常生成、分化与功能所必需的微量营养素。它们与β-葡聚糖协同工作，共同维护一个完整而有效的防御体系。

每粒胶囊提供250毫克高纯度酵母β-葡聚糖，并含有维生素C、锌和硒。产品采用纯素胶囊，不含麸质、乳制品、大豆、糖及任何人工色素、香料或防腐剂。`,long_description:`当身体感到容易受到外界环境挑战，或是寻求在忙碌生活中维持内在的稳定与韧性时，往往需要从根本的沟通与调节机制入手。这不仅仅是增强某一方面，而是支持整个系统更顺畅、更协调地工作。

**食物态提取技术**
自然界中的β-葡聚糖存在于酵母细胞壁中，与其它成分紧密结合，难以被人体直接有效利用。Mannayan GLUCAN+ 采用温和的提取工艺，从面包酵母中分离出高纯度的1,3/1-6结构β-葡聚糖。这种形式去除了酵母中可能引起不耐受的其他成分，只保留其核心活性结构，使其生物利用度显著提高，即使对酵母本身敏感的人群也通常适用。

**完整协同体系**
本配方构建了一个多层次的支持网络。酵母β-葡聚糖作为核心信使，与体内特定的识别机制互动，帮助启动和调节防御细胞的活性与沟通。这就像一个精准的信号，提醒系统进入协调状态。单独的信号需要稳固的基础设施来执行，因此配方加入了维生素C、锌和硒。维生素C是重要的抗氧化剂，同时支持免疫细胞的正常功能与移动。锌参与了数百种酶的活性，对细胞的生长、分化和屏障完整性至关重要。硒则是强大抗氧化酶的核心成分，帮助保护细胞免受氧化应激的损伤。这四种成分并非简单叠加，而是构成了一个闭环：β-葡聚糖发出协调信号，而维生素C、锌和硒则为细胞的响应、增殖和自我保护提供必要的物质基础与保护，共同维持系统整体的平衡与效能。

**适合人群**
这款产品适合那些关注身体基础防御力、希望在季节变化或生活压力较大时期为身体提供额外支持的人。也适合那些饮食可能无法全面覆盖这些特定营养素，或希望采用更直接方式支持内在平衡机制的个体。其纯净配方也使其成为素食者及有常见食物不耐受（如麸质、乳糖）人群的合适选择。

**纯净与成分完整性**
我们坚信补充剂应尽可能纯净、有效。每粒胶囊仅包含活性成分及必要的植物源性胶囊壳和极少量润滑剂。产品不含麸质、乳制品、大豆、添加糖、人工色素、香料或防腐剂。所有成分来源透明，β-葡聚糖提取自非转基因面包酵母，确保您摄入的是精准、无干扰的支持。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士，此配方基于对免疫调节通路和微量营养素协同作用的科学理解设计。酵母来源的1,3/1,6-β-葡聚糖具有特定的受体亲和性，是临床研究中常用于支持免疫健康的成分。维生素C、锌和硒的剂量旨在提供实质性支持，同时符合安全范围。GLUCAN+ 可与 Mannayan 抗氧化系列等其他产品搭配，形成更全面的健康维护方案，例如与 **Mannayan Antioxi+** 一同服用，从防御调节与抗氧化两个核心层面提供协同支持。建议根据个体情况制定具体方案。

**用法与剂量**
建议每日服用1至3粒胶囊，随足量水吞服，最好在餐前或两餐之间服用，以获得最佳吸收。初始阶段或日常维护可从每日1粒开始，根据个人感受和需求调整。具体用量可遵从健康顾问的指导。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥处保存。若密封条破损，请勿食用。`,ingredient_reference:`**酵母β-1,3/1,6-葡聚糖**
这是一种从面包酵母细胞壁中提取的天然多糖，具有独特的支链结构。它在体内主要与免疫细胞表面的特定受体相互作用，扮演“免疫调节剂”或“生物反应调节剂”的角色，帮助优化免疫系统的识别、通讯与应答效率，而非简单地刺激或抑制。其所用的70%高纯度提取物形式，确保了生物活性与良好的耐受性。它非常适合那些希望从根本的调节机制入手，支持身体维持内在平衡与韧性的人群。在配方中，它为维生素C、锌和硒的作用提供了关键的“信号”背景，使这些营养素能更有效地支持后续的细胞功能。

**维生素C（抗坏血酸）**
维生素C是一种必需的水溶性维生素和强大的抗氧化剂。它在体内参与胶原蛋白合成、支持血管健康，并对免疫细胞的功能、移动和抗氧化保护至关重要。这里采用标准的抗坏血酸形式，具有良好的生物利用度。它适合所有需要增强抗氧化防御、支持皮肤黏膜健康及整体细胞功能的人群。在本配方中，维生素C在β-葡聚糖发出协调信号后，为免疫细胞的正常运作提供必要的抗氧化支持和功能辅助，与锌、硒共同巩固防御体系。

**锌（柠檬酸锌）**
锌是人体必需的微量元素，作为数百种酶的辅因子，广泛参与DNA合成、蛋白质代谢、细胞生长与分化。它对维持皮肤和黏膜等物理屏障的完整性、以及免疫细胞的正常发育和功能有核心作用。柠檬酸锌是一种有机螯合形式，易于吸收。它特别适合那些饮食中锌摄入可能不足，或希望支持伤口愈合、屏障健康和整体代谢活力的人。在协同作用中，锌是执行β-葡聚糖所启动的许多细胞过程（如增殖、分化）所必需的矿物质，并与维生素C、硒在抗氧化防御中相互支持。

**硒（硒酵母）**
硒是谷胱甘肽过氧化物酶等关键抗氧化酶的核心成分，对于保护细胞膜和细胞器免受氧化损伤至关重要，同时也支持甲状腺激素的正常代谢和免疫调节。硒酵母是一种有机形式的硒，含有多种硒蛋氨酸等化合物，吸收和利用效率高，能在体内缓慢释放。它适合关注长期抗氧化保护、甲状腺健康及整体细胞防御的人群。在配方中，硒提供了深层次的细胞内抗氧化保护，与维生素C的胞外抗氧化作用形成互补，共同维护β-葡聚糖所支持的活跃细胞免受氧化应激的影响，确保系统稳健运行。`},en:{label:`Mannayan GLUCAN+
Yeast Beta-Glucan with Synergistic Nutrients
• Supports core defense system function
• Promotes immune cell communication and response
• Provides antioxidant protection
• Maintains healthy mucosal barriers
60 Capsules / 1–3 Capsules Daily
Vegan Formula | Gluten-Free, Dairy-Free, Soy-Free, No Artificial Additives`,short_description:`Do you feel your body is more susceptible during seasonal changes, or do you wish to provide more solid support for your daily state of balance? This is often a sign that your body's internal defense and regulation systems need extra attention.

The heart of Mannayan GLUCAN+ is 1,3/1,6-Beta-Glucan, carefully extracted from baker's yeast. This special dietary fiber is one of the key messengers that helps your body recognize and initiate a coordinated response. It doesn't act on a single target directly; instead, it helps your body optimize its own communication and response network.

The formula is specially enhanced with Vitamin C, Zinc, and Selenium. These are not only antioxidants but also essential micronutrients that support the normal production, differentiation, and function of immune cells. They work synergistically with Beta-Glucan to maintain a complete and effective defense system.

Each capsule provides 250 mg of high-purity yeast Beta-Glucan, along with Vitamin C, Zinc, and Selenium. The product uses vegan capsules and contains no gluten, dairy, soy, sugar, or any artificial colors, flavors, or preservatives.`,long_description:`When the body feels vulnerable to environmental challenges or seeks to maintain internal stability and resilience amidst a busy life, it often requires support starting from the fundamental communication and regulation mechanisms. This isn't just about boosting one aspect, but about supporting the entire system to work more smoothly and harmoniously.

**Food-State Extraction Technology**
In nature, Beta-Glucan is found within yeast cell walls, tightly bound to other components, making it difficult for the body to utilize directly and effectively. Mannayan GLUCAN+ employs a gentle extraction process to isolate high-purity 1,3/1-6 structure Beta-Glucan from baker's yeast. This form removes other components from the yeast that may cause intolerance, preserving only its core active structure, which significantly increases its bioavailability and is generally suitable even for those sensitive to yeast itself.

**Complete Synergistic System**
This formula builds a multi-layered support network. Yeast Beta-Glucan acts as the core messenger, interacting with specific recognition mechanisms in the body to help initiate and regulate the activity and communication of defense cells. It's like a precise signal, prompting the system into a coordinated state. A signal alone requires a solid infrastructure to execute, which is why the formula includes Vitamin C, Zinc, and Selenium. Vitamin C is an important antioxidant that also supports the normal function and mobility of immune cells. Zinc is involved in the activity of hundreds of enzymes and is crucial for cell growth, differentiation, and barrier integrity. Selenium is a core component of powerful antioxidant enzymes, helping to protect cells from oxidative stress damage. These four components are not simply added together; they form a closed loop: Beta-Glucan sends the coordination signal, while Vitamin C, Zinc, and Selenium provide the necessary material foundation and protection for cellular response, proliferation, and self-defense, working together to maintain the overall balance and efficacy of the system.

**Who It's For**
This product is suitable for those focused on their body's foundational defenses, who wish to provide extra support during seasonal changes or periods of high life stress. It's also suitable for individuals whose diets may not fully cover these specific nutrients or who prefer a more direct approach to supporting internal balance mechanisms. Its pure formula also makes it an appropriate choice for vegetarians and those with common food intolerances (e.g., gluten, lactose).

**Purity and Ingredient Integrity**
We firmly believe supplements should be as pure and effective as possible. Each capsule contains only the active ingredients, necessary plant-derived capsule shells, and a minimal amount of lubricant. The product contains no gluten, dairy, soy, added sugar, artificial colors, flavors, or preservatives. All ingredient sources are transparent; the Beta-Glucan is extracted from non-GMO baker's yeast, ensuring you receive precise, non-interfering support.

**For Health Practitioners & Distributors: Clinical Background & Protocol Pairing**
For professionals in the health field, this formula is designed based on a scientific understanding of immune regulation pathways and micronutrient synergy. Yeast-derived 1,3/1,6-Beta-Glucan has specific receptor affinity and is a component commonly used in clinical research to support immune health. The dosages of Vitamin C, Zinc, and Selenium are intended to provide substantive support while remaining within safe ranges. GLUCAN+ can be paired with other Mannayan products, such as the antioxidant series, to form a more comprehensive wellness protocol. For example, taking it alongside **Mannayan Antioxi+** provides synergistic support from two core levels: defense regulation and antioxidant protection. We recommend developing specific protocols based on individual circumstances.

**Usage & Dosage**
Take 1 to 3 capsules daily with plenty of water. For optimal absorption, it's best taken before meals or between meals. You can start with 1 capsule daily during an initial phase or for daily maintenance, adjusting based on personal experience and needs. Specific dosage can follow the guidance of a health advisor.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is broken.`,ingredient_reference:`**Yeast Beta-1,3/1,6-Glucan**
This is a natural polysaccharide extracted from baker's yeast cell walls, with a unique branched structure. In the body, it primarily interacts with specific receptors on immune cell surfaces, acting as an 'immune modulator' or 'biological response modifier.' It helps optimize the immune system's recognition, communication, and response efficiency, rather than simply stimulating or suppressing it. The 70% high-purity extract form used ensures biological activity and good tolerability. It is particularly suitable for those who wish to start from the fundamental regulatory mechanisms to support the body in maintaining internal balance and resilience. In the formula, it provides the crucial 'signaling' context for the actions of Vitamin C, Zinc, and Selenium, enabling these nutrients to more effectively support subsequent cellular functions.

**Vitamin C (Ascorbic Acid)**
Vitamin C is an essential water-soluble vitamin and a powerful antioxidant. It is involved in collagen synthesis, supports vascular health, and is crucial for immune cell function, mobility, and antioxidant protection. The standard ascorbic acid form used here has good bioavailability. It is suitable for anyone looking to enhance antioxidant defense, support skin and mucosal health, and overall cellular function. In this formula, after Beta-Glucan sends the coordination signal, Vitamin C provides the necessary antioxidant support and functional assistance for the normal operation of immune cells, working with Zinc and Selenium to solidify the defense system.

**Zinc (Zinc Citrate)**
Zinc is an essential trace mineral that acts as a cofactor for hundreds of enzymes, widely involved in DNA synthesis, protein metabolism, and cell growth and differentiation. It plays a central role in maintaining the integrity of physical barriers like skin and mucous membranes, as well as the normal development and function of immune cells. Zinc citrate is an organic chelated form that is easily absorbed. It is especially suitable for those whose diets may be insufficient in zinc, or who wish to support wound healing, barrier health, and overall metabolic vitality. In the synergy, Zinc is the essential mineral required for executing many of the cellular processes (like proliferation and differentiation) initiated by Beta-Glucan, and it provides mutual support with Vitamin C and Selenium in antioxidant defense.

**Selenium (Selenium Yeast)**
Selenium is a core component of key antioxidant enzymes like glutathione peroxidase, essential for protecting cell membranes and organelles from oxidative damage. It also supports normal thyroid hormone metabolism and immune regulation. Selenium yeast is an organic form of selenium containing various compounds like selenomethionine. It is highly absorbable and efficiently utilized, releasing slowly in the body. It is suitable for those focused on long-term antioxidant protection, thyroid health, and overall cellular defense. In the formula, Selenium provides deep intracellular antioxidant protection, complementing the extracellular antioxidant action of Vitamin C. Together, they help protect the active cells supported by Beta-Glucan from the effects of oxidative stress, ensuring the system operates robustly.`}}},{name:"Mannayan GLUCO + (120 Kapseln)",url:"https://mannayan.com/Mannayan-GLUCO-120-Kapseln/010061",price:["37,90 €"],product_number:"010061",quantity:["120 Kapseln"],image_url:"https://mannayan.com/media/5d/ff/29/1766137065/Gluco%2B_2025.jpg?ts=1766137065",image_local:"images/Gluco%2B_2025.jpg",content:{cn:{label:`Mannayan GLUCO+
关节与结缔组织基础营养
• 支持关节舒适与灵活性
• 提供软骨基质关键成分
• 促进结缔组织健康
• 含协同维生素与矿物质
120粒胶囊 | 每日1-2粒
纯素 | 无麸质 | 无大豆 | 无乳制品 | 无人工添加物`,short_description:`你是否感觉日常活动后关节需要更多支持，或是希望为身体的灵活运转打下更坚实的基础？随着年龄增长或活动量增加，关节与结缔组织的自然营养供给可能变得不那么充足。

Mannayan GLUCO+ 提供了一种全面的支持方案。它以植物来源的氨基葡萄糖为核心，这是构成关节软骨和润滑液（如透明质酸）的基础物质。产品不单单提供这一种成分，而是将其与一系列精心挑选的维生素和矿物质相结合，如维生素C、E、锌和锰，这些营养素共同参与结缔组织的合成与维护，帮助身体更有效地利用核心成分。

这种配方理念源于对食物完整性的理解——在天然食物中，营养素从来不是孤立存在的。因此，这些协同因子被嵌入一个由植物浓缩物和益生菌组成的营养基质中，模拟食物的自然状态，旨在提升身体的接纳与利用效率。

每瓶包含120粒素食胶囊。配方纯净，适合素食者与纯素者，不含麸质、大豆、乳制品、糖及人工色素与香料。`,long_description:`当身体的灵活性与舒适度开始提醒你关注关节与结缔组织的健康时，这往往是一个信号，表明这些结构的基础营养支持需要得到加强。日常的磨损、年龄相关的自然变化，或是活跃的生活方式，都可能增加对这些基础构建模块的需求。

**食物态递送技术**
Mannayan GLUCO+ 中的活性成分并非孤立存在。维生素、矿物质和微量元素被整合到一个富含营养的基质中，这个基质由植物浓缩物和保加利亚乳杆菌构成。这种设计模拟了天然食物中营养素共存的状态，包含了食物中天然存在的辅助因子。其目的在于支持营养成分在体内的生物利用度，让身体能以更熟悉、更自然的方式识别和利用这些物质。

**一个完整的支持体系**
本配方的核心是植物来源的葡萄糖胺盐酸盐，它是蛋白多糖的一种，是构成透明质酸和软骨基质的基础材料。单独补充葡萄糖胺是一方面，但身体的构建与修复过程是一个复杂的网络。因此，配方中加入了维生素C和锰，它们直接参与胶原蛋白——一种关键结缔组织蛋白——的合成。维生素E和硒作为抗氧化成分，帮助应对日常代谢过程中产生的氧化压力。锌和铜是多种酶系统的辅助因子，这些酶对于结缔组织的形成和维护至关重要。B族维生素，包括生物素，则支持整体的能量代谢和蛋白质利用，为修复过程提供后勤保障。每一种成分都不是孤军奋战，它们相互关联，共同致力于为关节与结缔组织健康创造一个全面的营养环境。

**适合哪些生活情境**
这款产品适合那些感觉关节需要额外关照的成年人，无论是由于年龄的自然进程，还是因为经常进行步行、健身或园艺等爱好而给关节带来规律性负荷。它也适用于关注长期骨骼关节健康，希望从营养层面进行基础维护的人群。对于饮食中较少摄取动物软骨、筋膜或甲壳类海鲜（这些是葡萄糖胺的天然食物来源）的素食者或纯素者，这提供了一种可行的补充选择。

**纯净与成分完整性**
我们坚信补充剂的纯净度。Mannayan GLUCO+ 胶囊由羟丙甲纤维素制成，适合素食者。配方中不含小麦、麸质、大豆、乳制品（乳糖）、添加糖、淀粉、人工色素、人工香料或防腐剂。成分来源经过审慎选择，旨在提供有效支持的同时，最大限度减少不必要的添加物。

**健康管理者与搭配建议**
本产品由拥有临床营养背景的团队开发，理解身体系统的复杂性。健康管理者可能会将GLUCO+作为全面关节健康方案的一部分。它可以与富含Omega-3脂肪酸的补充剂搭配，以支持健康的炎症反应管理；或与维生素D3和维生素K2组合使用，共同促进骨骼矿物质健康。建议咨询您的健康顾问，以获得个性化的方案。

**用法与剂量**
建议每日服用1至2粒胶囊，最好在两餐之间或餐前，用足量水送服。也可遵照您的健康管理者的具体指导。每瓶含120粒胶囊，在建议用量下可持续使用60至120天。

**重要提示**
请勿超过推荐的每日食用量。膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口密封条缺失，请勿食用。对大豆过敏或不耐受者不宜使用。`,ingredient_reference:`**葡萄糖胺盐酸盐**
葡萄糖胺是一种氨基糖，由葡萄糖和谷氨酸结合而成，天然存在于人体的关节、结缔组织和肌肉中。它是蛋白多糖的基本组成单元，而蛋白多糖是构成软骨基质和关节滑液（如透明质酸）的关键物质。本产品采用植物来源的葡萄糖胺盐酸盐形式。它特别适合希望支持关节舒适度和软骨健康的人群。在配方中，它与维生素C和锰协同作用，共同支持胶原蛋白和结缔组织的合成。

**维生素C（来自抗坏血酸钙）**
维生素C是一种必需的水溶性维生素，具有强大的抗氧化特性。它在体内是合成胶原蛋白不可或缺的辅因子，而胶原蛋白是肌腱、韧带、软骨和骨骼的主要结构蛋白。采用抗坏血酸钙形式提供了维生素C和钙的温和来源。任何关注结缔组织完整性、伤口愈合或抗氧化支持的人都可从中受益。它与葡萄糖胺和锰直接协同，共同构建健康的结缔组织框架。

**钙（来自柠檬酸钙）与镁（来自无水柠檬酸镁）**
钙和镁是支持骨骼健康和神经肌肉功能的必需矿物质。钙是骨骼和牙齿的主要矿物质，也参与肌肉收缩和神经信号传导。镁则参与超过300种酶反应，包括能量产生、蛋白质合成和肌肉放松。采用柠檬酸盐形式通常具有良好的生物利用度。这两者共同作用，有助于维持骨骼矿物质密度和支持正常的肌肉功能，为活跃的关节系统提供基础支撑。

**维生素E（琥珀酸酯）**
维生素E是一种脂溶性抗氧化剂，主要保护细胞膜免受氧化损伤。氧化压力是组织磨损和老化的一个因素。采用琥珀酸酯形式的维生素E稳定性更好。它适合所有希望为身体细胞，包括关节周围细胞，提供抗氧化防御的人群。在配方中，它与硒协同，增强整体的抗氧化网络。

**锌（来自柠檬酸锌）与铜（来自无水硫酸铜）**
锌和铜是多种酶系统的关键微量元素。锌对于蛋白质合成、伤口愈合和免疫功能至关重要，同时也是合成胶原蛋白所需的酶的辅因子。铜则参与弹性蛋白和胶原蛋白的交联，赋予结缔组织强度和弹性。它们以生物可利用的柠檬酸盐和硫酸盐形式存在。两者平衡补充对于维持健康的结缔组织结构和酶功能非常重要，它们与维生素C共同支持胶原蛋白的形成。

**锰（来自葡萄糖酸锰）**
锰是一种微量元素，是形成骨骼和结缔组织（特别是蛋白多糖）所必需的几种酶的组成部分。它直接参与软骨和骨骼的发育与维护。采用葡萄糖酸锰形式。对于关注关节和骨骼健康的人尤其相关。它是本配方的关键协同成分，与葡萄糖胺和维生素C紧密合作，共同支持软骨基质的产生。

**B族维生素复合物（B1, B2, B3, B5, B6, B7, B12）**
B族维生素作为辅酶，广泛参与体内的能量代谢、蛋白质合成和细胞修复过程。例如，生物素（B7）对蛋白质代谢有支持作用。本配方包含了甲基钴胺素形式的B12，这是具有生物活性的形式。它们为整个身体，包括修复和维持结缔组织的细胞，提供代谢支持。它们确保身体有足够的“能量”和“工具”来利用配方中的其他构建模块。

**硒（来自硒酸钠）与硼（来自硼酸）**
硒是谷胱甘肽过氧化物酶的重要组成部分，这是一种强大的内源性抗氧化酶。硼是一种微量元素，被认为在骨骼健康和矿物质代谢中扮演支持性角色。它们以硒酸钠和硼酸的形式添加。硒增强了配方的整体抗氧化防御能力，而硼则对骨骼矿物质代谢提供额外的支持，与钙、镁和维生素D的作用路径相关联。`},en:{label:`Mannayan GLUCO+
Joint & Connective Tissue Foundation
• Supports Joint Comfort & Flexibility
• Provides Key Cartilage Matrix Components
• Promotes Connective Tissue Health
• Contains Synergistic Vitamins & Minerals
120 Capsules | 1-2 Capsules Daily
Vegan | Gluten-Free | Soy-Free | Dairy-Free | No Artificial Additives`,short_description:`Do you feel your joints need more support after daily activities, or wish to build a stronger foundation for your body's flexible movement? As we age or increase activity, the natural nutritional supply to joints and connective tissues may become less sufficient.

Mannayan GLUCO+ offers a comprehensive support solution. At its core is plant-derived glucosamine, a foundational substance for joint cartilage and lubricating fluid (like hyaluronic acid). The product doesn't stop at this single ingredient; it combines it with a carefully selected array of vitamins and minerals, such as Vitamin C, E, Zinc, and Manganese. These nutrients work together in the synthesis and maintenance of connective tissue, helping the body utilize the core components more effectively.

This formulation philosophy stems from an understanding of food integrity—in whole foods, nutrients never exist in isolation. Therefore, these synergistic cofactors are embedded within a nutrient matrix of plant concentrates and probiotics, mimicking the natural state of food, aiming to enhance the body's acceptance and utilization efficiency.

Each bottle contains 120 vegan capsules. The formula is pure, suitable for vegetarians and vegans, and free from gluten, soy, dairy, sugar, and artificial colors or flavors.`,long_description:`When your body's flexibility and comfort begin to remind you to pay attention to the health of your joints and connective tissues, it's often a signal that the foundational nutritional support for these structures needs reinforcement. Daily wear and tear, age-related natural changes, or an active lifestyle can all increase the demand for these fundamental building blocks.

**Food-State Delivery Technology**
The active ingredients in Mannayan GLUCO+ do not exist in isolation. Vitamins, minerals, and trace elements are integrated into a nutrient-rich matrix composed of plant concentrates and Lactobacillus bulgaricus. This design mimics the state of co-existing nutrients found in whole foods, including naturally occurring cofactors. The aim is to support the bioavailability of nutrients within the body, allowing it to recognize and utilize these substances in a more familiar, natural way.

**A Complete Support System**
The core of this formula is plant-derived Glucosamine Hydrochloride, a type of proteoglycan and a foundational material for hyaluronic acid and cartilage matrix. Supplementing glucosamine alone is one aspect, but the body's building and repair processes form a complex network. Therefore, the formula includes Vitamin C and Manganese, which are directly involved in the synthesis of collagen—a key connective tissue protein. Vitamin E and Selenium act as antioxidant components, helping to address oxidative stress produced during daily metabolic processes. Zinc and Copper are cofactors for numerous enzyme systems crucial for the formation and maintenance of connective tissue. B Vitamins, including Biotin, support overall energy metabolism and protein utilization, providing logistical support for repair processes. No ingredient works alone; they are interconnected, collectively dedicated to creating a comprehensive nutritional environment for joint and connective tissue health.

**Suitable For Which Life Situations**
This product is suitable for adults who feel their joints need extra care, whether due to the natural aging process or regular joint load from hobbies like walking, fitness, or gardening. It's also for those focused on long-term bone and joint health, wishing to perform foundational maintenance at a nutritional level. For vegetarians or vegans whose diets include less animal cartilage, fascia, or shellfish (natural food sources of glucosamine), this offers a viable supplemental option.

**Purity & Ingredient Integrity**
We firmly believe in supplement purity. Mannayan GLUCO+ capsules are made from Hypromellose, suitable for vegetarians. The formula contains no wheat, gluten, soy, dairy (lactose), added sugars, starch, artificial colors, artificial flavors, or preservatives. Ingredient sources are carefully selected to provide effective support while minimizing unnecessary additives.

**Health Practitioner & Pairing Suggestions**
This product was developed by a team with a clinical nutrition background, understanding the complexity of body systems. Health practitioners may incorporate GLUCO+ as part of a comprehensive joint health plan. It can be paired with Omega-3 fatty acid supplements to support healthy inflammatory response management, or with Vitamin D3 and Vitamin K2 combinations to jointly promote bone mineral health. Consult your health advisor for a personalized plan.

**Usage & Dosage**
Take 1 to 2 capsules daily, preferably between meals or before meals, with ample water. Follow your health practitioner's specific guidance. Each bottle contains 120 capsules, providing a 60 to 120-day supply at the suggested dosage.

**Important Notes**
Do not exceed the recommended daily intake. Food supplements should not replace a varied, balanced diet. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the bottle's safety seal is missing. Not suitable for individuals with soy allergies or intolerances.`,ingredient_reference:`**Glucosamine Hydrochloride**
Glucosamine is an amino sugar, formed from glucose and glutamine, naturally present in human joints, connective tissues, and muscles. It is the basic building block of proteoglycans, which are key substances constituting cartilage matrix and joint fluid (like hyaluronic acid). This product uses a plant-derived Glucosamine Hydrochloride form. It is particularly suitable for those wishing to support joint comfort and cartilage health. In the formula, it works synergistically with Vitamin C and Manganese to support collagen and connective tissue synthesis.

**Vitamin C (from Calcium Ascorbate)**
Vitamin C is an essential water-soluble vitamin with potent antioxidant properties. It is an indispensable cofactor for collagen synthesis within the body, and collagen is the main structural protein of tendons, ligaments, cartilage, and bones. The Calcium Ascorbate form provides a gentle source of both Vitamin C and Calcium. Anyone concerned with connective tissue integrity, wound healing, or antioxidant support can benefit. It works directly in synergy with Glucosamine and Manganese to build a healthy connective tissue framework.

**Calcium (from Calcium Citrate) & Magnesium (from Magnesium Citrate Anhydrous)**
Calcium and Magnesium are essential minerals supporting bone health and neuromuscular function. Calcium is the primary mineral in bones and teeth and is involved in muscle contraction and nerve signaling. Magnesium participates in over 300 enzyme reactions, including energy production, protein synthesis, and muscle relaxation. The citrate forms generally offer good bioavailability. Together, they help maintain bone mineral density and support normal muscle function, providing foundational support for an active joint system.

**Vitamin E (as d-alpha-Tocopheryl Succinate)**
Vitamin E is a fat-soluble antioxidant primarily protecting cell membranes from oxidative damage. Oxidative stress is a factor in tissue wear and aging. The Succinate form of Vitamin E offers better stability. It is suitable for anyone wishing to provide antioxidant defense for body cells, including those surrounding joints. In the formula, it works synergistically with Selenium to enhance the overall antioxidant network.

**Zinc (from Zinc Citrate) & Copper (from Copper Sulfate Anhydrous)**
Zinc and Copper are key trace elements for numerous enzyme systems. Zinc is crucial for protein synthesis, wound healing, and immune function, and is also a cofactor for enzymes required in collagen synthesis. Copper is involved in the cross-linking of elastin and collagen, giving connective tissue strength and elasticity. They are present in bioavailable citrate and sulfate forms. Balanced supplementation of both is important for maintaining healthy connective tissue structure and enzyme function; they work with Vitamin C to support collagen formation.

**Manganese (from Manganese Gluconate)**
Manganese is a trace element and a component of several enzymes necessary for the formation of bone and connective tissue (particularly proteoglycans). It is directly involved in the development and maintenance of cartilage and bone. The Manganese Gluconate form is used. It is especially relevant for those focused on joint and bone health. It is a key synergistic component in this formula, working closely with Glucosamine and Vitamin C to support cartilage matrix production.

**B Vitamin Complex (B1, B2, B3, B5, B6, B7, B12)**
B Vitamins act as coenzymes, widely involved in the body's energy metabolism, protein synthesis, and cellular repair processes. For example, Biotin (B7) supports protein metabolism. This formula includes B12 in the Methylcobalamin form, which is the bioactive form. They provide metabolic support for the entire body, including cells involved in repairing and maintaining connective tissue. They ensure the body has sufficient 'energy' and 'tools' to utilize the other building blocks in the formula.

**Selenium (from Sodium Selenate) & Boron (from Boric Acid)**
Selenium is a key component of Glutathione Peroxidase, a powerful endogenous antioxidant enzyme. Boron is a trace element believed to play a supportive role in bone health and mineral metabolism. They are added as Sodium Selenate and Boric Acid. Selenium enhances the formula's overall antioxidant defense, while Boron provides additional support for bone mineral metabolism, linking to the action pathways of Calcium, Magnesium, and Vitamin D.`}}},{name:"Mannayan Kolloidales Eisen 100 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Eisen-100-ml/011170",price:["9,90 €"],product_number:"011170",quantity:[],image_url:"https://mannayan.com/media/12/fc/ac/1643294203/Eisen_Kolloidal_100_ml_26.01.2022.jpg?ts=1643294203",image_local:"images/Eisen_Kolloidal_100_ml_26.01.2022.jpg"},{name:"Mannayan Kolloidales Eisen 250 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Eisen-250-ml/011171",price:["14,90 €"],product_number:"011171",quantity:[],image_url:"https://mannayan.com/media/06/dc/78/1643294730/Eisen_Kolloidal_250_ml_26.01.2022.jpg?ts=1643294730",image_local:"images/Eisen_Kolloidal_250_ml_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体铁
支持内在活力与平衡
• 支持能量代谢与循环
• 维持整体生理功能
• 采用高电压等离子体工艺
• 纳米级胶体，高生物利用度
• 经谐波频率应用赋能
250毫升 | 20 ppm浓度
仅含双重蒸馏纯净水与99.9%纯铁
非转基因 | 德国制造`,short_description:`有时，即使休息充足，身体依然感觉沉重、精力不济，仿佛内在的活力源泉需要重新激活。这种状态常常与身体的基础支持系统有关。

这款产品提供了一种独特的铁元素形式——胶体铁。它不是普通的铁补充剂，而是将99.9%纯度的铁，通过特殊的高电压等离子体工艺，制成纳米级的微小带电粒子，悬浮于双重蒸馏的纯净水中。这种形式旨在让铁元素更易于被身体识别和利用。

其核心在于支持身体的自然循环与能量代谢过程。铁是维持这些基础功能的关键元素之一。产品在德国制造，并经过谐波频率应用的额外赋能，每瓶250毫升，浓度为20 ppm。配方极致纯净，仅包含两种成分：双重蒸馏过滤的纯净水和99.9%纯铁，不含任何转基因成分。`,long_description:`当日常的活力感逐渐消退，身体容易感到疲倦，或是面色缺乏应有的光泽时，这常常是身体在提示，那些支持生命基本活动的内在系统需要关注。血液的流动、氧气的输送、能量的产生，这些无声却至关重要的过程，构成了我们整体状态的根基。

**食物态技术与递送形式**
这款产品采用独特的胶体形态。它并非简单的化学溶液，而是通过高电压等离子体工艺，将99.9%纯度的金属铁转化为纳米级的超微粒子。每个粒子仅由几个原子组成，并带有微弱的电荷，使其能够稳定地悬浮于双重蒸馏的纯净水中。这种工艺产生的粒子极其微小，甚至无法被普通显微镜观测或纸质过滤器截留。相较于传统的电解法，这种方法旨在产生更小、电荷特性更佳的胶体粒子，这种形态在传统与现代的健康体系中都有其渊源。

**完整的作用体系**
产品的价值在于其形态与纯净度共同构成的体系。纳米级的胶体铁粒子旨在以更接近生物体内天然活性物质的状态存在，例如血液和淋巴液中的某些成分。这种形态的设计，是为了在不干扰周围环境的前提下，支持铁元素参与其固有的生理功能。铁是能量代谢、氧气运输及多种酶系统运作的核心矿物质之一。产品在制成后，还经过了谐波频率应用的额外处理，旨在为溶液赋予更协调的能量特性，从而形成一个从物理形态到能量状态都力求完整的作用体系。

**适合的人群**
它适合那些感觉自身能量代谢需要额外支持，希望从基础层面关照循环与活力的人；也适合那些在寻找一种纯净、简单、且制作工艺考究的矿物质补充形式，作为日常健康管理的一部分。它适用于关注配方完整性，偏好非化学合成形态补充剂的使用者。

**纯净与成分完整性**
配方的纯净是其根本。瓶中仅有两样东西：经过双重蒸馏及反渗透过滤的纯净水，以及纯度高达99.9%的铁。没有填充剂，没有稳定剂，没有调味剂，也绝对不含转基因成分。整个生产过程在德国完成，并且产品不经长期储存，旨在保持胶体溶液的新鲜与活性。这种极简主义的配方，让关注点完全回归到成分本身的质量与形态上。

**健康管理者与搭配方案**
对于健康领域的专业人士而言，这是一个基于独特递送技术的矿物质支持方案。其高电压等离子体生产工艺和纳米胶体形态，为铁元素的补充提供了另一种思路。它可以作为整体健康方案的一部分，与关注基础营养、抗氧化支持或能量代谢的其他方案相搭配，共同支持身体的底层平衡。建议根据个体的整体状况进行综合考量。

**用法与剂量**
建议外用，局部使用1至2滴。请将产品存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。

**重要提示**
如果您对铁元素过敏，请勿使用本产品。由于欧盟法规，我们必须指出，胶体溶液不被批准作为药品、食品补充剂或化妆品使用。我们仅提供关于制造工艺和质量的信息，关于胶体（微细）粒子在水中的应用领域，请通过相关信息来源（互联网、专业书籍等）自行了解。产品有100毫升（可选带喷雾头）、250毫升和500毫升规格可供选择。`,ingredient_reference:`**胶体铁（纳米级）**
这是产品的核心活性成分，指纯度高达99.9%的金属铁，经高电压等离子体工艺处理形成的纳米级胶体粒子。它在水中以带电荷的、亚微观的原子团形式存在，旨在模拟生物体内某些天然活性物质的物理状态。这种形态设计的目的是为了提升其生物利用度和相容性，使其能够更顺畅地参与身体的基础代谢过程。它特别适合那些寻求传统铁盐补充剂（如硫酸亚铁）之外更温和、更纯净形式的人群。在这个配方中，它与双重蒸馏水共同构成了一个极其简单却高度专注的递送系统。

**双重蒸馏纯净水**
这不仅是溶剂，更是整个胶体系统的基质。水经过双重蒸馏和反渗透过滤，去除了绝大部分的矿物质和杂质，达到了极高的纯净度。这种纯净的环境对于维持纳米级铁胶体的电荷稳定性和分散性至关重要，防止了不必要的相互作用。它确保了铁胶体粒子能够均匀悬浮并保持其活性状态。对于追求配方极致纯净和工艺完整性的使用者来说，基底水的质量与活性成分本身同等重要。`},en:{label:`Mannayan Colloidal Iron
Supporting Inner Vitality & Balance
• Supports Energy Metabolism & Circulation
• Maintains Overall Physiological Function
• Produced via High-Voltage Plasma Process
• Nano-Scale Colloids, High Bioavailability
• Enhanced with Applied Harmonic Frequencies
250 ml | 20 ppm Concentration
Contains Only Double-Distilled Purified Water & 99.9% Pure Iron
Non-GMO | Made in Germany`,short_description:`Sometimes, even with adequate rest, the body can feel heavy and low on energy, as if the inner wellspring of vitality needs reawakening. This state is often connected to the body's foundational support systems.

This product offers a unique form of iron—colloidal iron. It is not an ordinary iron supplement. Instead, 99.9% pure iron is processed through a special high-voltage plasma technique to create nano-scale, charged particles suspended in double-distilled purified water. This form is designed to make the iron more recognizable and usable by the body.

Its core purpose is to support the body's natural circulatory and energy metabolism processes. Iron is a key element in maintaining these fundamental functions. The product is made in Germany and receives additional enhancement through applied harmonic frequencies. Each bottle contains 250 ml at a concentration of 20 ppm. The formula is exceptionally pure, containing only two ingredients: double-distilled, filtered purified water and 99.9% pure iron. It contains no genetically modified ingredients.`,long_description:`When daily vitality wanes, the body tires easily, or the complexion lacks its natural glow, it is often the body's signal that the internal systems supporting life's basic activities need attention. The flow of blood, the transport of oxygen, the generation of energy—these silent yet vital processes form the foundation of our overall state.

**Food-State Technology & Delivery Form**
This product utilizes a unique colloidal form. It is not a simple chemical solution. Through a high-voltage plasma process, 99.9% pure metallic iron is transformed into nano-scale ultra-fine particles. Each particle consists of just a few atoms and carries a slight electrical charge, allowing it to remain stably suspended in double-distilled purified water. The particles produced by this method are so minute they cannot be observed with a standard microscope or captured by a paper filter. Compared to traditional electrolysis methods, this technique aims to produce smaller colloidal particles with superior charge characteristics—a form with roots in both traditional and modern health systems.

**A Complete System of Action**
The product's value lies in the system created by its form and purity together. Nano-scale colloidal iron particles are designed to exist in a state closer to natural bioactive substances within the body, such as certain components in blood and lymph. This form is intended to allow iron to participate in its inherent physiological functions without disturbing the surrounding environment. Iron is a core mineral for energy metabolism, oxygen transport, and the function of numerous enzyme systems. After production, the solution undergoes additional treatment with applied harmonic frequencies, aiming to imbue it with more harmonious energetic properties. This creates a system of action that strives for completeness, from physical form to energetic state.

**Who It's For**
It is suitable for those who feel their energy metabolism could use extra support and wish to care for circulation and vitality from a foundational level. It is also for those seeking a pure, simple, and meticulously crafted mineral supplement form as part of their daily wellness routine. It is appropriate for users who value formula integrity and prefer non-chemically synthesized supplement forms.

**Purity & Ingredient Integrity**
Purity is fundamental to the formula. The bottle contains only two things: purified water that has undergone double distillation and reverse osmosis filtration, and iron of 99.9% purity. There are no fillers, stabilizers, flavorings, and absolutely no genetically modified ingredients. The entire production process takes place in Germany, and the product is not stored long-term, aiming to preserve the freshness and activity of the colloidal solution. This minimalist formulation brings the focus entirely back to the quality and form of the ingredients themselves.

**For Health Practitioners & Synergistic Pairing**
For health professionals, this represents a mineral support solution based on unique delivery technology. Its high-voltage plasma production process and nano-colloidal form offer an alternative approach to iron supplementation. It can be part of a holistic wellness plan, paired with other protocols focused on foundational nutrition, antioxidant support, or energy metabolism to collectively support the body's underlying balance. A comprehensive assessment of the individual's overall condition is recommended.

**Usage & Dosage**
For topical use, apply 1 to 2 drops locally. Store the product in a cool, dry place, protected from light, and out of reach of children.

**Important Note**
Do not use this product if you are allergic to iron. Due to EU regulations, we must state that colloidal solutions are not approved for use as medicines, food supplements, or cosmetics. We provide information only about the manufacturing process and quality. For information on the application fields of colloidal (fine) particles in water, please consult relevant sources (internet, professional literature, etc.). The product is available in 100 ml (optionally with a spray head), 250 ml, and 500 ml sizes.`,ingredient_reference:`**Colloidal Iron (Nano-Scale)**
This is the core active ingredient of the product, referring to 99.9% pure metallic iron processed via a high-voltage plasma technique to form nano-scale colloidal particles. It exists in water as charged, submicroscopic atomic clusters, designed to mimic the physical state of certain natural bioactive substances within the body. This form is intended to enhance its bioavailability and biocompatibility, allowing it to participate more smoothly in the body's foundational metabolic processes. It is particularly suitable for those seeking a gentler, purer form of iron beyond traditional iron salt supplements (like ferrous sulfate). In this formula, it forms an exceptionally simple yet highly focused delivery system together with double-distilled water.

**Double-Distilled Purified Water**
This is not merely a solvent but the very matrix of the entire colloidal system. The water undergoes double distillation and reverse osmosis filtration, removing the vast majority of minerals and impurities to achieve an extremely high level of purity. This pure environment is crucial for maintaining the charge stability and dispersion of the nano-scale iron colloids, preventing unnecessary interactions. It ensures the iron colloidal particles remain uniformly suspended and maintain their active state. For users who value ultimate formula purity and process integrity, the quality of the base water is as important as the active ingredient itself.`}}},{name:"Mannayan Kolloidales Eisen 500 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Eisen-500-ml/011172",price:["24,90 €"],product_number:"011172",quantity:[],image_url:"https://mannayan.com/media/d7/53/5c/1643294933/Eisen_Kolloidal_500_ml_26.01.2022.jpg?ts=1643294933",image_local:"images/Eisen_Kolloidal_500_ml_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体铁
铁的纯净能量态
• 支持能量代谢与活力感
• 维持血液系统健康功能
• 采用高压等离子体工艺
• 纳米级胶体，高生物利用度
• 成分纯净：双蒸水与99.9%纯铁
500毫升 | 20 ppm浓度`,short_description:`你是否感觉日常的精力总是不够用，即使休息后也难以恢复那种充沛的活力？身体像一台需要优质燃料的精密仪器，而铁是其中不可或缺的关键元素之一。

Mannayan胶体铁提供了一种独特的铁补充形式。它不是普通的铁化合物，而是将99.9%纯度的金属铁，通过高压等离子体工艺处理成纳米级的胶体颗粒，悬浮于双重蒸馏的纯净水中。这种形态旨在让铁以更易被身体识别和利用的方式存在。

产品仅由两种成分构成：双重蒸馏过滤的纯净水和99.9%纯铁。每瓶500毫升，胶体铁浓度为20 ppm。不含任何遗传工程成分，制作过程在德国完成。`,long_description:`当身体的能量循环感觉迟滞，思维不如往常清晰，或是面色缺乏自然的红润时，这常常是内在平衡需要关注的信号。铁在身体的能量产生和氧气运输中扮演着核心角色，它的充足与否，直接影响着整个系统的活力水平。

**食物态技术与递送**
这款产品采用高压等离子体工艺，而非传统的电解法。这一工艺产生出粒径极小的胶体铁颗粒，其尺寸达到纳米级别，以至于无法被普通滤纸截留。这些微小的、带有电荷的铁颗粒稳定地悬浮在双重蒸馏的纯净水中，形成一种胶体溶液。这种形态旨在模拟自然界中某些元素的存在方式，以期更温和地融入身体环境。

**一个完整的支持体系**
胶体铁的核心在于其物理形态所带来的潜在特性。纳米级的铁颗粒提供了巨大的表面积，旨在促进与身体系统的有效互动。铁本身是血红蛋白的重要组成部分，参与氧气的运输和细胞能量的生成。当铁以这种高度分散的胶体形式提供时，目的是为了支持其生物利用度，使其能够更顺畅地参与到维持血液健康、支持能量代谢和整体活力感的过程中。

**适合哪些生活情境**
这款产品适合那些感觉自身能量循环需要额外支持，希望从基础元素层面为身体补充资源的人。也适用于在注重整体调理的日常实践中，寻求成分极度纯净、工艺讲究的补充方案的人士。它针对的是对内在平衡有要求，而非仅仅应对单一指标的生活状态。

**纯净与成分的完整性**
配方中只有两种物质：经过双重蒸馏和渗透过滤的纯净水，以及纯度高达99.9%的铁。没有添加任何其他成分。生产过程在德国进行，避免了不必要的储存环节，并宣称在制作中融合了谐波频率应用。这体现了一种极简主义的成分哲学，让核心物质自己发挥作用。

**给健康管理者与搭配建议**
对于关注基础营养支持的健康顾问而言，这款胶体铁可作为矿物质补充方案中的一个纯净选项。它的胶体形态和纳米粒径是其区别于常规铁补充剂的技术特点。在制定整体方案时，可以考虑将其与支持血液健康的其他营养素（如维生素C、B族维生素）或旨在改善吸收的饮食调整相结合，形成一个更全面的支持网络。

**用法与剂量**
建议外用，局部使用1至2滴。请置于儿童无法触及的地方。如果您对铁过敏，请勿使用本品。

**重要提示**
请避光、在阴凉干燥处保存。根据欧盟法规，胶体溶液不被归类为药品、食品补充剂或化妆品。我们建议您通过相关信息资源（如互联网、专业书籍）了解胶体（微细）颗粒在水中的应用领域。`,ingredient_reference:`**胶体铁（纳米级）**
胶体铁是将纯度99.9%的金属铁通过高压等离子体工艺处理而成的纳米级颗粒悬浮液。它在配方中并非以常见的化合物形式存在，而是以微小的原子簇形态悬浮。这种形态旨在利用纳米颗粒的高表面活性，可能影响其在体内的相互作用方式。它最适合那些寻求传统铁补充形式之外、注重元素物理形态和生物利用度的人群。在本配方中，它与双重蒸馏水共同构成了一个极其简单的二元系统，水的纯净度确保了胶体体系的稳定性。

**双重蒸馏纯净水**
这是经过双重蒸馏和反渗透过滤处理的高纯度水，作为胶体铁的载体。它的作用不仅仅是溶剂，更是创造了一个洁净、低干扰的环境，让纳米铁颗粒能够稳定悬浮并保持其胶体特性。这种高纯度的水旨在避免任何矿物质或杂质干扰胶体体系的电荷平衡和颗粒分散度。它最适合对补充剂基质纯净度有极高要求的使用者。在配方中，它与高纯铁共同构成了产品的全部，其质量直接决定了最终胶体溶液的品质。`},en:{label:`Mannayan Colloidal Iron
The Pure Energetic State of Iron
• Supports Energy Metabolism & Vitality
• Maintains Healthy Blood System Function
• Produced via High-Pressure Plasma Process
• Nanoscale Colloids, High Bioavailability
• Pure Ingredients: Double-Distilled Water & 99.9% Pure Iron
500 ml | 20 ppm Concentration`,short_description:`Do you often feel like your daily energy just isn't enough, struggling to regain that full vitality even after rest? Your body is like a precision instrument requiring high-quality fuel, and iron is one of its indispensable key elements.

Mannayan Colloidal Iron offers a unique form of iron supplementation. It is not an ordinary iron compound. Instead, 99.9% pure metallic iron is processed into nanoscale colloidal particles via a high-pressure plasma technique, suspended in double-distilled, purified water. This form is designed to allow iron to exist in a way that is more readily recognized and utilized by the body.

The product consists of only two ingredients: double-distilled, filtered purified water and 99.9% pure iron. Each bottle contains 500 ml with a colloidal iron concentration of 20 ppm. Contains no genetically engineered ingredients. Made in Germany.`,long_description:`When your body's energy cycle feels sluggish, your thinking isn't as sharp as usual, or your complexion lacks a natural, healthy glow, these are often signals that your internal balance needs attention. Iron plays a central role in the body's energy production and oxygen transport. Its sufficiency directly impacts the vitality level of your entire system.

**Food-State Technology & Delivery**
This product utilizes a high-pressure plasma process, not the traditional electrolysis method. This technique produces extremely fine colloidal iron particles at the nanoscale—so small they cannot be captured by ordinary filter paper. These tiny, charged iron particles are stably suspended in double-distilled purified water, forming a colloidal solution. This form aims to mimic the way certain elements exist in nature, with the intention of integrating more gently into the body's environment.

**A Complete Support System**
The essence of colloidal iron lies in the potential properties afforded by its physical form. Nanoscale iron particles provide a vast surface area, designed to promote effective interaction with the body's systems. Iron itself is a key component of hemoglobin, involved in oxygen transport and cellular energy production. When iron is provided in this highly dispersed colloidal form, the goal is to support its bioavailability, allowing it to participate more smoothly in processes that maintain blood health, support energy metabolism, and contribute to an overall sense of vitality.

**Suitable For Which Life Situations**
This product is suitable for those who feel their energy cycle needs additional support and wish to replenish the body's resources at a foundational, elemental level. It is also for individuals in daily practices focused on holistic well-being, seeking supplementation with extremely pure ingredients and refined craftsmanship. It addresses a lifestyle state that values internal balance, not merely addressing a single metric.

**Purity & Ingredient Integrity**
The formula contains only two substances: purified water that has undergone double distillation and reverse osmosis filtration, and iron with a purity of 99.9%. No other ingredients are added. Production takes place in Germany, avoiding unnecessary storage steps, and incorporates the application of harmonic frequencies during creation. This reflects a minimalist ingredient philosophy, allowing the core substance to work on its own.

**For Health Managers & Pairing Suggestions**
For health consultants focused on foundational nutritional support, this colloidal iron can serve as a pure option within a mineral supplementation plan. Its colloidal form and nanoparticle size are its distinguishing technical features compared to conventional iron supplements. When developing a holistic plan, consider combining it with other nutrients that support blood health (such as Vitamin C, B vitamins) or dietary adjustments aimed at improving absorption, forming a more comprehensive support network.

**Usage & Dosage**
For topical use. Apply 1 to 2 drops locally. Keep out of reach of children. Do not use this product if you are allergic to iron.

**Important Note**
Store away from light in a cool, dry place. According to EU regulations, colloidal solutions are not classified as medicinal products, food supplements, or cosmetics. We recommend you inform yourself about the application areas of colloidal (fine) particles in water through relevant information resources (e.g., the internet, professional literature).`,ingredient_reference:`**Colloidal Iron (Nanoscale)**
Colloidal Iron is a suspension of nanoscale particles created by processing 99.9% pure metallic iron via a high-pressure plasma technique. In this formula, it does not exist in a common compound form but as suspended microscopic atomic clusters. This form aims to utilize the high surface activity of nanoparticles, potentially influencing their mode of interaction within the body. It is most suitable for those seeking an alternative to traditional iron supplementation forms, who value the physical state of the element and its bioavailability. In this formula, it forms an extremely simple binary system with double-distilled water, where the purity of the water ensures the stability of the colloidal system.

**Double-Distilled Purified Water**
This is high-purity water treated through double distillation and reverse osmosis filtration, serving as the carrier for the colloidal iron. Its role is not merely as a solvent; it creates a clean, low-interference environment that allows the nano-iron particles to remain stably suspended and maintain their colloidal properties. This high-purity water is intended to prevent any minerals or impurities from disrupting the charge balance and particle dispersion of the colloidal system. It is most suitable for users with extremely high requirements for supplement base purity. In the formula, together with high-purity iron, it constitutes the entirety of the product. Its quality directly determines the final quality of the colloidal solution.`}}},{name:"Mannayan Kolloidales Gold 100 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Gold-100-ml/011143",price:["9,90 €"],product_number:"011143",quantity:[],image_url:"https://mannayan.com/media/4d/ff/ba/1637930241/Gold_Kolloid_100_ml_Nr.2.jpg?ts=1637930241",image_local:"images/Gold_Kolloid_100_ml_Nr.2.jpg"},{name:"Mannayan Kolloidales Gold 250 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Gold-250-ml/011144",price:["14,90 €"],product_number:"011144",quantity:[],image_url:"https://mannayan.com/media/53/40/bf/1638185847/Gold_Kolloid_250_ml.jpg?ts=1638185847",image_local:"images/Gold_Kolloid_250_ml.jpg",content:{cn:{label:`Mannayan 胶体金
支持内在平衡的液态金
• 支持认知清晰度
• 促进情绪平衡
• 辅助能量代谢
• 支持关节舒适
• 250毫升 / 10 ppm浓度
• 99.9%纯金
• 双重蒸馏过滤纯水
• 无转基因添加`,short_description:`你是否感觉思绪有时像蒙上了一层薄雾，难以集中精神，或是身体的活力总达不到理想状态？现代生活的节奏常常让我们感到内在的平衡被打破。

Mannayan胶体金提供了一种纯净、古老而现代的支持方式。它并非化学合成物，而是将99.9%的纯金通过高压等离子工艺，制成悬浮于双重蒸馏纯水中的纳米级胶体微粒。这种微小的形态，旨在更易于被身体接纳和利用。

它从支持身体的基础系统——如血液和淋巴液的顺畅运行——入手，为整体的平衡与和谐提供支持。当内在环境趋于稳定，清晰、平静与活力便有了自然生发的土壤。

每瓶250毫升，采用10 ppm（百万分之十）的温和浓度，由仅有的两种成分构成：99.9%纯金与双重蒸馏过滤的纯水。不含任何转基因成分。`,long_description:`当日常的压力累积，思绪开始纷杂，身体的能量像潮水般起伏不定时，我们常常感到需要一种深层的、来自根本的安抚与支持。这不仅仅是应对一时的疲劳，更是为了找回那种内在的稳定与清晰的感受。

**食物态技术与递送**
Mannayan胶体金采用高压等离子工艺制备，这与传统的电解法不同。该工艺产生的是尺寸极小、电荷独特的胶体金微粒。这些纳米级的金颗粒并非化学溶解，而是以原子簇的形式稳定悬浮于最纯净的水中。其微粒之细微，甚至无法被普通显微镜观测或纸质过滤器截留，旨在实现一种温和而高效的递送方式。产品还融入了谐波频率应用技术，为配方增添了一层精微的维度。

**完整的支持体系**
这款产品的作用方式，着眼于支持人体内本就存在的、类似胶体系统的关键流体——血液和淋巴液。血液负责输送养分、氧气与信息分子，并维持体温与防御；淋巴系统则主管免疫防御、废物清理与体液平衡。胶体金旨在与这些内在系统协同工作，通过支持这些基础生理过程的顺畅运行，从而间接促进认知的清晰度、情绪的平稳、能量的有效利用以及关节的舒适感受。它不是针对单一目标的干预，而是对整体内环境的一种和谐化支持。

**适合的人群**
它适合那些在繁忙生活中寻求内在稳定与心智清晰的人；适合感觉身心能量需要温和调理与支持的人；也适合那些重视从根本入手、采用纯净方式维护长期健康的人。当你在寻求一种非侵入性、旨在支持身体自愈力的日常补充时，可以考虑它。

**纯净与成分完整性**
配方极致简约，仅包含两种成分：99.9%高纯度的黄金，以及经过双重蒸馏和反渗透过滤的纯水。浓度设定为10 ppm，这是一个温和而有效的范围。整个生产过程在德国完成，且产品不经过长期储存，以保持胶体颗粒的最佳活性状态。我们明确承诺不含任何转基因成分。

**健康管理者与经销商：背景与搭配**
对于健康领域的专业人士而言，这是一个基于传统智慧与现代胶体科学结合的工具。胶体物质在多种传统健康体系中已有悠久历史。在现代实践中，它可以作为一个基础支持方案的一部分，与营养均衡的膳食、适当的草本配方或其他针对性的补充剂相结合，共同构建一个全面的健康管理策略。其温和的特性使其易于融入多种方案。

**用法与剂量**
建议外用，局部使用1至2滴。请存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。

**重要提示**
根据欧盟法规，胶体溶液不被定义为药品、食品补充剂或化妆品。我们建议您通过其他可靠信息来源（如专业书籍、研究资料）深入了解胶体物质的潜在应用领域。如果您对黄金有过敏反应，请勿使用本产品。`,ingredient_reference:`**胶体金（99.9%纯度）**
胶体金是超高纯度的金属金以纳米级原子簇形式悬浮于水中的体系，并非化学意义上的金化合物。在体内，这些微小的带电颗粒被认为可能通过与体液的物理化学相互作用，支持细胞间的信息传递与能量状态。所使用的99.9%医药级纯度确保了没有其他金属杂质的干扰。它特别适合那些寻求从物理能量层面支持身体整体平衡的人群。在本配方中，它与极致纯净的水共同构成了一个稳定、纯净的胶体系统，其功效源于整个胶体体系的特性，而非孤立的金原子。

**纯水（双重蒸馏及反渗透过滤）**
这里的水不仅是溶剂，更是胶体体系不可或缺的载体介质。经过双重蒸馏和反渗透过滤，去除了几乎所有的矿物质、电解质和杂质，达到了极高的纯度。这种极低电导率的水（0.3-0.5 ppm）对于维持胶体金颗粒的稳定悬浮和电荷分布至关重要，防止了颗粒的聚集和沉淀。它确保了有效成分能以设计中的纳米胶体形态被递送。对于追求配方绝对纯净和载体介质零干扰的用户来说，这是关键的一环。它与高纯度黄金共同定义了本产品的基础品质。`},en:{label:`Mannayan Colloidal Gold
Liquid Gold for Inner Balance
• Supports cognitive clarity
• Promotes emotional balance
• Aids energy metabolism
• Supports joint comfort
• 250 ml / 10 ppm concentration
• 99.9% pure gold
• Double-distilled filtered water
• Non-GMO`,short_description:`Do you ever feel like your thoughts are shrouded in a haze, making it hard to focus, or that your body's energy never quite reaches its ideal state? The pace of modern life often disrupts our inner equilibrium.

Mannayan Colloidal Gold offers a pure, ancient yet modern form of support. It is not a chemical compound, but rather 99.9% pure gold transformed through a high-pressure plasma process into nano-scale colloidal particles suspended in double-distilled pure water. This minute form is designed to be more readily accepted and utilized by the body.

It begins by supporting the body's foundational systems—such as the smooth flow of blood and lymph—to foster overall balance and harmony. When the internal environment stabilizes, clarity, calm, and vitality have fertile ground to emerge naturally.

Each 250 ml bottle features a gentle 10 ppm (parts per million) concentration and contains only two ingredients: 99.9% pure gold and double-distilled, filtered pure water. Contains no genetically modified ingredients.`,long_description:`When daily stress accumulates, thoughts become scattered, and the body's energy ebbs and flows unpredictably, we often feel the need for deep, foundational soothing and support. This is not just about managing temporary fatigue, but about rediscovering that feeling of inner stability and clarity.

**Food-State Technology & Delivery**
Mannayan Colloidal Gold is prepared using a high-pressure plasma process, which differs from traditional electrolysis. This process creates uniquely charged colloidal gold particles of extremely small size. These nano-scale gold particles are not chemically dissolved but exist as stable atomic clusters suspended in the purest water. Their particles are so fine they cannot be observed with a standard microscope or captured by a paper filter, aiming for a gentle yet efficient delivery method. The formulation also incorporates harmonic frequency application technology, adding a subtle dimension to the product.

**A Holistic Support System**
This product works by supporting the body's own key colloidal-like fluids—blood and lymph. Blood is responsible for transporting nutrients, oxygen, and signaling molecules, while maintaining temperature and defense. The lymphatic system manages immune defense, waste removal, and fluid balance. Colloidal gold is designed to work in harmony with these internal systems, supporting the smooth functioning of these fundamental physiological processes. This, in turn, indirectly promotes cognitive clarity, emotional steadiness, efficient energy utilization, and joint comfort. It is not a single-target intervention but a harmonizing support for the overall internal environment.

**Who It's For**
It is suitable for those seeking inner stability and mental clarity amidst a busy life; for those who feel their physical and mental energy needs gentle conditioning and support; and for those who value a fundamental, pure approach to long-term well-being. Consider it when seeking a non-invasive daily supplement designed to support the body's self-healing capacity.

**Purity & Ingredient Integrity**
The formulation is exceptionally simple, containing only two ingredients: 99.9% high-purity gold and pure water that has undergone double distillation and reverse osmosis filtration. The concentration is set at 10 ppm, a gentle yet effective range. The entire production process takes place in Germany, and the product is not stored long-term to preserve the optimal active state of the colloidal particles. We explicitly state it contains no genetically modified ingredients.

**For Health Practitioners & Distributors: Context & Synergy**
For health professionals, this is a tool that combines traditional wisdom with modern colloidal science. Colloidal substances have a long history in various traditional health systems. In modern practice, it can be part of a foundational support protocol, combined with a balanced diet, appropriate herbal formulations, or other targeted supplements to build a comprehensive health management strategy. Its gentle nature makes it easy to integrate into various protocols.

**Usage & Dosage**
For topical use. Apply 1 to 2 drops locally. Store in a cool, dry place away from light and out of reach of children.

**Important Notice**
According to EU regulations, colloidal solutions are not defined as medicines, food supplements, or cosmetics. We recommend consulting other reliable information sources (such as professional books, research materials) to gain a deeper understanding of the potential application areas of colloidal substances. Do not use this product if you have a known allergy to gold.`,ingredient_reference:`**Colloidal Gold (99.9% Purity)**
Colloidal gold is a system where ultra-high purity metallic gold is suspended in water as nano-scale atomic clusters, not a chemical gold compound. Within the body, these minute, charged particles are thought to potentially support intercellular communication and energy states through physicochemical interactions with bodily fluids. The use of 99.9% pharmaceutical-grade purity ensures no interference from other metal impurities. It is particularly suitable for those seeking to support the body's overall balance from a physical energy perspective. In this formulation, it combines with ultra-pure water to create a stable, pure colloidal system whose efficacy stems from the properties of the entire colloidal system, not isolated gold atoms.

**Pure Water (Double-Distilled & Reverse Osmosis Filtered)**
Here, water is not merely a solvent but an essential carrier medium for the colloidal system. After double distillation and reverse osmosis filtration, it removes virtually all minerals, electrolytes, and impurities, achieving extremely high purity. This water, with its very low conductivity (0.3-0.5 ppm), is crucial for maintaining the stable suspension and charge distribution of the colloidal gold particles, preventing their aggregation and precipitation. It ensures the active ingredient can be delivered in its designed nano-colloidal form. For users who prioritize absolute formulation purity and zero interference from the carrier medium, this is a key element. Together with high-purity gold, it defines the foundational quality of this product.`}}},{name:"Mannayan Kolloidales Gold 500 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Gold-500-ml/011173",price:["24,90 €"],product_number:"011173",quantity:[],image_url:"https://mannayan.com/media/3b/ee/82/1643291024/Gold_Kolloidal_500_ml_26.01.2022.jpg?ts=1643291024",image_local:"images/Gold_Kolloidal_500_ml_26.01.2022.jpg",content:{cn:{label:`曼纳延胶体金
液态金质平衡
• 支持内在平衡与和谐
• 促进能量流动与活力
• 辅助认知清晰与专注
• 帮助情绪稳定与安宁
• 支持整体健康基础
500毫升 | 10 ppm浓度 | 外用滴剂
99.9%纯金 | 双重蒸馏渗透过滤纯水 | 无转基因添加`,short_description:`在忙碌的日常中，有时会感到思绪纷杂，难以沉静，或是能量像被无形消耗，难以凝聚。身体的内在平衡需要细致的关照。

曼纳延胶体金提供了一种纯净的液态支持。它采用99.9%的纯金，通过高压等离子体工艺制成极细微的纳米级胶体颗粒，悬浮于双重蒸馏并渗透过滤的纯水中。这种形态旨在让金质以更易亲和的方式存在。

传统与现代的实践都认识到，某些纯净物质能协助身体维持其自然的秩序与流动。胶体金并非化学合成物，而是物理分散的金属微粒，其微小的尺寸和电荷特性是其核心。

每瓶500毫升，浓度为10 ppm，适合局部外用。配方仅含两种成分：最高纯度的金与经过深度净化的水，无任何不必要的添加。`,long_description:`当生活的节奏不断加快，身心容易陷入一种持续的紧张与耗散感，仿佛内在的和谐需要重新校准。这不是单一的问题，而是一种整体状态的提醒。

**食物态技术与递送**
本产品采用高压等离子体工艺，而非常见的电解法。这一工艺能产生尺寸更小、电荷特性更优的胶体金颗粒。这些纳米级的金颗粒并非化学溶解，而是以微小的原子团形式物理悬浮于纯水中，其分散度极高，甚至能穿透普通滤纸。这种形态旨在模拟自然界中物质更精细的存在与作用方式。

**完整体系**
配方极致简约，仅由两种元素构成：作为载体的深度净化水，与作为活性物质的高纯金。水的纯净确保了金颗粒稳定悬浮的环境，而金的独特物理性质则构成了支持的基础。两者结合，旨在提供一个纯净、无干扰的支持系统，让身体能够自然地与之互动，而不必处理复杂的合成化合物或添加剂。它关注的是提供一种基础性的、非侵入性的平衡支持。

**适合人群**
适合那些在日常生活中寻求一种简单、纯净方式来辅助维持内在平静与清晰状态的人；适合在长时间专注工作或学习后，希望帮助思绪回归安宁的人；也适合那些注重整体养生，偏好从根本和基础层面进行调理的实践者。它作为一种外用的辅助选择，融入日常的自我关照环节。

**纯净与成分完整性**
成分表一目了然：双重蒸馏并经渗透过滤的纯水，以及99.9%纯度的黄金。生产过程在德国完成，并避免了长期储存，以保持产品的新鲜度与活性。产品明确不含转基因成分。纯净，在这里不是营销口号，而是配方的起点和终点。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士而言，这是一个成分极度透明、工艺考究的单一物质配方。其高压等离子体制备工艺是关键的品质区分点。它可以被视作一个基础模块，用于构建更个性化的健康支持方案，尤其适合那些强调减少化学负荷、追求成分纯粹性的整体健康管理思路。建议从业者结合对个体需求的全面评估来考量其应用。

**用法与剂量**
建议外用，每次取1至2滴，涂抹于所需局部皮肤区域。请置于儿童无法触及之处。

**重要提示**
对黄金有过敏反应者请勿使用。请存放于阴凉、干燥、避光处。由于欧盟法规限制，本品不被定义为药品、食品补充剂或化妆品。我们提供关于制造工艺与质量的客观信息，关于胶体物质的传统与现代应用，建议您通过其他专业渠道进行了解。`,ingredient_reference:`**胶体金（纳米级）**
胶体金是99.9%纯度的金属金，通过高压等离子体工艺物理分散成纳米尺度的微小颗粒悬浮于水中。它不是化学意义上的溶解，而是以带电荷的原子团形式存在。这种极细微的形态旨在使其能够以更亲和的方式与身体互动。在传统与现代的健康实践中，金因其独特的物理化学性质常与支持平衡、清晰和活力相关联。在本配方中，它是唯一的活性物质，依托于超纯水这一纯净载体发挥作用。

**双重蒸馏渗透过滤纯水**
这不是普通的水，而是经过双重蒸馏并结合渗透过滤技术深度净化的纯水。它的作用远不止是溶剂或填充物。它首先作为一个极度纯净、惰性的载体，为胶体金颗粒提供稳定悬浮的介质，防止颗粒聚集，确保产品的均一性和长期稳定性。其次，水的纯净度直接决定了最终产品中“杂质”的水平，这里的水质标准最大限度地减少了任何可能干扰金本身特性的因素。它与金共同构成了这个配方完整且不可分割的二元体系。`},en:{label:`Mannayan Colloidal Gold
Liquid Gold Balance
• Supports inner balance and harmony
• Promotes energy flow and vitality
• Aids cognitive clarity and focus
• Helps emotional stability and calm
• Supports overall foundational health
500 ml | 10 ppm concentration | Topical drops
99.9% pure gold | Double-distilled, reverse osmosis filtered water | Non-GMO`,short_description:`In the rush of daily life, it's common to feel scattered thoughts, a lack of calm, or energy that seems to drain away without focus. The body's inner balance needs gentle care.

Mannayan Colloidal Gold offers a pure form of liquid support. It uses 99.9% pure gold, processed via high-pressure plasma technology into ultra-fine, nano-scale colloidal particles suspended in double-distilled, reverse osmosis filtered water. This form is designed to allow the gold to exist in a more bio-affinitive state.

Both traditional and modern practices recognize that certain pure substances can assist the body in maintaining its natural order and flow. Colloidal gold is not a chemical compound, but physically dispersed metal particles; their minute size and charge characteristics are central to its nature.

Each 500 ml bottle has a concentration of 10 ppm and is suitable for topical use. The formula contains only two ingredients: gold of the highest purity and deeply purified water, with no unnecessary additives.`,long_description:`As life's pace accelerates, the mind and body can easily fall into a state of persistent tension and dissipation, as if inner harmony needs recalibration. This is not a single issue, but a reminder of an overall state.

**Food-State Technology & Delivery**
This product utilizes high-pressure plasma technology, not the common electrolysis method. This process produces colloidal gold particles with smaller size and superior charge characteristics. These nano-scale gold particles are not chemically dissolved but are physically suspended as tiny atomic clusters in pure water, with extremely high dispersion—even capable of passing through ordinary filter paper. This form aims to mimic the finer existence and mode of action of substances in nature.

**Complete System**
The formula is exceptionally simple, composed of only two elements: deeply purified water as the carrier, and high-purity gold as the active substance. The purity of the water ensures a stable suspension environment for the gold particles, while the unique physical properties of gold form the basis of support. Combined, they aim to provide a pure, non-interfering support system, allowing the body to interact with it naturally without having to process complex synthetic compounds or additives. The focus is on offering foundational, non-invasive balance support.

**Who It's For**
Suitable for those seeking a simple, pure way to help maintain inner calm and clarity in daily life; for those who, after long periods of focused work or study, wish to help their thoughts return to tranquility; and for practitioners who value holistic wellness and prefer to nurture from a fundamental, foundational level. It serves as a topical adjunct, integrating into daily self-care routines.

**Purity & Ingredient Integrity**
The ingredient list is clear: double-distilled, reverse osmosis filtered pure water, and 99.9% purity gold. Production takes place in Germany, avoiding long-term storage to preserve freshness and activity. The product is explicitly non-GMO. Here, purity is not a marketing slogan but the starting and ending point of the formulation.

**For Health Practitioners & Distributors: Clinical Context & Protocol Integration**
For professionals in the health field, this is a single-substance formula with extreme transparency and refined craftsmanship. Its high-pressure plasma preparation process is a key quality differentiator. It can be viewed as a foundational module for building more personalized health support protocols, especially suited to holistic health management approaches that emphasize reducing chemical load and pursuing ingredient purity. Practitioners are advised to consider its application based on a comprehensive assessment of individual needs.

**Usage & Dosage**
Recommended for topical use. Apply 1 to 2 drops to the desired area of skin. Keep out of reach of children.

**Important Notes**
Do not use if you have a known allergy to gold. Store in a cool, dry place, protected from light. Due to EU regulations, this product is not defined as a medicine, food supplement, or cosmetic. We provide objective information about the manufacturing process and quality; for information on the traditional and modern applications of colloidal substances, we recommend consulting other professional sources.`,ingredient_reference:`**Colloidal Gold (Nano-scale)**
Colloidal gold is 99.9% pure metallic gold, physically dispersed via high-pressure plasma technology into nano-scale particles suspended in water. It is not chemically dissolved but exists as charged atomic clusters. This ultra-fine form is designed to allow it to interact with the body in a more affinitive manner. In both traditional and modern health practices, gold—due to its unique physicochemical properties—is often associated with supporting balance, clarity, and vitality. In this formula, it is the sole active substance, functioning within the pure carrier of ultra-pure water.

**Double-Distilled, Reverse Osmosis Filtered Pure Water**
This is not ordinary water, but deeply purified water that has undergone double distillation combined with reverse osmosis filtration. Its role extends far beyond being a solvent or filler. Primarily, it serves as an extremely pure, inert carrier, providing a stable suspension medium for the colloidal gold particles, preventing aggregation and ensuring product uniformity and long-term stability. Secondly, the purity of the water directly determines the level of 'impurities' in the final product; the water quality standard here minimizes any factors that might interfere with gold's inherent properties. Together with gold, it forms the complete, inseparable binary system of this formula.`}}},{name:"Mannayan Kolloidales Kupfer 100 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Kupfer-100-ml/011165",price:["9,90 €"],product_number:"011165",quantity:[],image_url:"https://mannayan.com/media/b8/cb/ba/1643309693/Kupfer_Kolloidal_100_ml_2_26.01.2022.jpg?ts=1643309693",image_local:"images/Kupfer_Kolloidal_100_ml_2_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体铜
支持内在平衡的纯净微量矿物质
• 支持能量代谢与活力
• 维持结缔组织健康
• 辅助抗氧化防御系统
• 促进铁的正常吸收与利用
100毫升 | 20 ppm浓度
仅含双重蒸馏纯水与99.9%高纯铜
无添加、无转基因`,short_description:`你是否感觉日常的忙碌消耗了身体的能量储备，或是觉得身体的恢复力不如从前？有时候，这种状态可能与我们体内一些基础但关键的微量元素的平衡有关。

这款产品提供了一种高度纯净的铜元素形式——胶体铜。它采用高压等离子体工艺制备，铜粒子达到纳米级别，均匀悬浮于双重蒸馏的纯水中。这种形态旨在支持元素在体内的生物可利用性。

它不含任何添加剂，仅由两种成分构成：经过双重蒸馏和反渗透过滤的纯水，以及纯度高达99.9%的铜。每瓶100毫升，胶体铜浓度为20 ppm，提供一种简单、纯净的微量矿物质补充方式。`,long_description:`当身体感到持续的倦怠，或是关节与结缔组织缺乏往日的柔韧与舒适时，我们往往需要从最基础的营养层面寻找支持。铜，作为一种必需的微量矿物质，在身体的许多核心功能中扮演着无声却关键的角色。

**食物态技术与递送形式**
本产品采用高压等离子体工艺，而非传统的电解法，制备出纳米级别的胶体铜。这意味着铜以极微小的金属原子簇形式存在，并带有微弱的电荷，稳定地悬浮于纯净的水基质中。这种技术旨在产生粒径更小、电荷特性更优的胶体粒子，其尺寸细微到可以穿透普通的滤纸，理论上可能更易于被身体识别和利用。产品还经过了谐波频率应用的加持，这是制造工艺的一部分。

**一个协同作用的完整体系**
虽然配方极其简洁，但其中蕴含的协同关系在于铜元素本身与身体系统的互动。铜是多种酶的必需辅因子，这些酶参与能量生产（细胞呼吸）、铁的代谢与转运、结缔组织（如胶原蛋白和弹性蛋白）的合成与维持，以及强大的抗氧化防御系统（通过超氧化物歧化酶）。它并非孤立工作，而是支持着身体从能量产生到结构完整、从抗氧化到神经信号传递等一系列相互关联的生理过程。

**适合的人群**
这款产品适合那些关注整体矿物质平衡，并倾向于选择最简单、最纯净成分来源的人。它可能吸引那些日常饮食可能无法提供充足微量矿物质支持，或是在生活中感到能量代谢需要额外关注的人。对于注重皮肤、头发、关节等结缔组织健康，并理解矿物质在其中基础作用的人，这也可能是一个考量的选择。

**纯净与成分完整性**
纯净是这款产品的基石。它的成分表简短到只有两行：双重蒸馏并经反渗透过滤的纯水，以及纯度达到99.9%的铜金属。没有防腐剂，没有稳定剂，没有调味剂，也非转基因。这种极简主义配方，旨在最大程度减少外来干扰，只提供核心物质。

**给健康管理者与经销商的说明**
对于具有临床背景的健康顾问而言，这款胶体铜可作为关注矿物质营养、抗氧化支持或结缔组织健康整体方案中的一个纯净组成部分。在构建方案时，可以考虑其与维生素C、锌、铁等其他协同营养素的搭配，以支持更广泛的代谢通路。其纳米胶体形态为讨论营养物质的生物利用度提供了切入点。

**用法与剂量**
建议外用，局部使用1至2滴。请将产品存放在阴凉、干燥、避光的地方，并置于儿童无法触及之处。

**重要提示**
对铜过敏者请勿使用。本品为胶体溶液，根据欧盟法规，不作为药品、食品补充剂或化妆品进行销售和使用。有关胶体微粒在水中的应用领域信息，请参考相关的专业资料。`,ingredient_reference:`**胶体铜（纳米级）**
胶体铜是纯度高达99.9%的金属铜，通过高压等离子体工艺制备成纳米尺度的微小原子簇，并带有微弱的表面电荷，稳定悬浮于纯水中。它在体内作为多种关键酶的必需辅因子，这些酶广泛参与能量代谢、铁的转运与利用、结缔组织的合成以及内源性抗氧化防御。这种纳米胶体形态旨在提高粒子的表面积和生物界面活性。它特别适合那些寻求高纯度、易吸收形态的微量矿物质，并关注整体能量与结构健康的人群。在配方中，它是唯一活性成分，其作用依赖于与身体内既有酶系统和其它矿物质（如铁、锌）的天然协同。

**双重蒸馏纯水**
本品使用的水基质是经过双重蒸馏并进一步通过反渗透过滤的纯水。这个过程去除了绝大多数的矿物质、杂质和可能的污染物，创造了一个高度纯净、惰性的载体环境。它的作用是为纳米胶体铜粒子提供一个稳定、均一的悬浮介质，确保有效成分的分散性和一致性，同时避免任何不必要的溶质干扰产品的纯净度。这种水基质的选择，体现了对产品载体本身质量的同等重视。它适合所有追求成分极致纯净的消费者。在配方中，它与高纯铜共同构成了产品的全部，是保证胶体稳定性和产品安全性的基础。`},en:{label:`Mannayan Colloidal Copper
A Pure Trace Mineral for Inner Balance
• Supports energy metabolism and vitality
• Maintains connective tissue health
• Aids the antioxidant defense system
• Promotes normal iron absorption and utilization
100 ml | 20 ppm concentration
Contains only double-distilled pure water and 99.9% high-purity copper
No additives, non-GMO`,short_description:`Do you feel that daily busyness drains your body's energy reserves, or that your recovery isn't what it used to be? Sometimes, this state may be related to the balance of certain foundational yet critical trace elements within us.

This product offers a highly pure form of copper—colloidal copper. It is prepared using a high-pressure plasma process, with copper particles at the nanoscale, uniformly suspended in double-distilled pure water. This form is designed to support the element's bioavailability in the body.

It contains no additives and is composed of only two ingredients: pure water that has undergone double distillation and reverse osmosis filtration, and copper with a purity of 99.9%. Each 100 ml bottle has a colloidal copper concentration of 20 ppm, providing a simple, pure way to supplement trace minerals.`,long_description:`When the body feels persistently fatigued, or when joints and connective tissues lack their usual flexibility and comfort, we often need to seek support at the most fundamental nutritional level. Copper, as an essential trace mineral, plays a silent yet crucial role in many of the body's core functions.

**Food-State Technology and Delivery Form**
This product uses a high-pressure plasma process, rather than traditional electrolysis, to produce nanoscale colloidal copper. This means the copper exists as extremely fine metallic atomic clusters with a slight charge, stably suspended in a pure aqueous matrix. This technology aims to create colloidal particles with smaller size and optimized charge characteristics—so fine they can pass through ordinary filter paper—theoretically making them more easily recognized and utilized by the body. The product has also undergone harmonic frequency application as part of the manufacturing process.

**A Synergistic, Holistic System**
While the formulation is extremely simple, the synergy lies in the interaction of the copper element itself with the body's systems. Copper is an essential cofactor for numerous enzymes involved in energy production (cellular respiration), iron metabolism and transport, the synthesis and maintenance of connective tissues (such as collagen and elastin), and a robust antioxidant defense system (via superoxide dismutase). It does not work in isolation but supports a series of interconnected physiological processes, from energy generation to structural integrity, from antioxidation to nerve signaling.

**Who It's For**
This product is suitable for those who are mindful of overall mineral balance and prefer the simplest, purest ingredient sources. It may appeal to individuals whose daily diet may not provide sufficient trace mineral support, or who feel their energy metabolism needs extra attention. It may also be a consideration for those focused on the health of connective tissues like skin, hair, and joints, and who understand the foundational role minerals play.

**Purity and Ingredient Integrity**
Purity is the cornerstone of this product. Its ingredient list is brief—just two lines: double-distilled, reverse-osmosis-filtered pure water, and copper metal with 99.9% purity. No preservatives, no stabilizers, no flavorings, and non-GMO. This minimalist formulation aims to minimize external interference, delivering only the core substance.

**Note for Health Practitioners and Distributors**
For clinically-oriented health advisors, this colloidal copper can serve as a pure component within a holistic protocol focused on mineral nutrition, antioxidant support, or connective tissue health. When building a protocol, consider pairing it with other synergistic nutrients like vitamin C, zinc, or iron to support broader metabolic pathways. Its nano-colloidal form provides a point of discussion regarding nutrient bioavailability.

**Usage and Dosage**
For topical use, apply 1 to 2 drops locally. Store in a cool, dry place away from light and out of reach of children.

**Important Note**
Do not use if you are allergic to copper. As a colloidal solution, this product is not marketed or used as a medicine, food supplement, or cosmetic under EU regulations. For information on the application fields of colloidal particles in water, please refer to relevant professional literature.`,ingredient_reference:`**Colloidal Copper (Nanoscale)**
Colloidal copper is metal copper with a purity of 99.9%, prepared via a high-pressure plasma process into nanoscale atomic clusters with a slight surface charge, stably suspended in pure water. In the body, it acts as an essential cofactor for numerous key enzymes involved in energy metabolism, iron transport and utilization, connective tissue synthesis, and endogenous antioxidant defense. This nano-colloidal form is designed to increase particle surface area and bio-interface activity. It is particularly suitable for those seeking a high-purity, easily absorbable form of trace minerals and who are mindful of overall energy and structural health. In the formulation, it is the sole active ingredient, and its action relies on natural synergy with the body's existing enzyme systems and other minerals (such as iron and zinc).

**Double-Distilled Pure Water**
The aqueous base used in this product is pure water that has undergone double distillation and further reverse osmosis filtration. This process removes the vast majority of minerals, impurities, and potential contaminants, creating a highly pure, inert carrier environment. Its role is to provide a stable, uniform suspension medium for the nano-colloidal copper particles, ensuring the dispersibility and consistency of the active ingredient while avoiding any unnecessary solute interference with the product's purity. This choice of aqueous base reflects equal emphasis on the quality of the carrier itself. It is suitable for all consumers who prioritize ultimate ingredient purity. In the formulation, together with high-purity copper, it constitutes the entirety of the product, forming the foundation for colloidal stability and product safety.`}}},{name:"Mannayan Kolloidales Kupfer 20ppm (500 ml)",url:"https://mannayan.com/Mannayan-Kolloidales-Kupfer-20ppm-500-ml/011168",price:["24,90 €"],product_number:"011168",quantity:[],image_url:"https://mannayan.com/media/80/45/78/1643309056/Kupfer_Kolloidal_500_ml_26.01.2022.jpg?ts=1643309056",image_local:"images/Kupfer_Kolloidal_500_ml_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体铜 20ppm
微量纯净，内在支持
• 支持能量代谢与活力感
• 维持结缔组织健康
• 辅助抗氧化防御系统
• 促进铁的正常利用
• 支持神经系统功能
500毫升 / 20ppm浓度
仅含双重蒸馏纯水与99.9%纯铜
等离子高频技术制备`,short_description:`有时，即使睡眠充足，身体仍感到一种莫名的疲惫，仿佛能量生产跟不上日常消耗的步伐。这种状态可能不仅仅是劳累，而是身体内部某些基础支持系统需要细微调整的信号。

这款胶体铜溶液提供了一种纯净、易于吸收的铜元素形式。铜是体内许多关键酶反应的必需因子，参与从能量产生到结缔组织构建的多个基础过程。它以纳米级的带电粒子悬浮于纯水中，这种形态旨在支持其生物可利用性。

产品采用高压等离子体工艺在德国制备，而非传统的电解法，旨在获得更小、电荷更高的胶体粒子。制备后不经储存，并辅以谐波频率应用进行赋能，以保持其独特的胶体状态。

每瓶500毫升，浓度为20ppm（百万分之二十）。配方极致纯净，仅包含双重蒸馏、反渗透过滤的纯水以及纯度为99.9%的铜。不含任何遗传工程成分。`,long_description:`当日常的活力感逐渐褪去，身体感到沉重，或是皮肤与关节失去了往日的柔韧与支撑感时，我们往往意识到身体需要更深层的关照。这些感受可能指向维持身体基本架构与能量流动的那些细微却至关重要的过程，其中就包括对铜这一必需微量元素的平衡需求。

**纳米胶体与等离子技术**
这并非简单的铜溶解于水。胶体铜是纯度99.9%的金属铜，以亚微观的原子簇形式存在，每个原子携带微弱电荷，使其能稳定悬浮于极致纯净的水中。我们采用高压等离子体工艺进行制备，相比传统电解法，这一过程旨在产生粒径更小、表面电荷更高的胶体粒子。这些纳米粒子细小到无法被滤纸截留，甚至在普通显微镜下也难以观测。制备完成后，溶液立即灌装，避免储存带来的状态变化，并额外接受了谐波频率应用的赋能，以支持其胶体系统的稳定性与协同性。

**一个支持性的完整体系**
铜在体内扮演着多重角色，它并非孤立工作。它是多种酶的核心组成部分，这些酶共同构成了一个支持网络：参与细胞内的能量生成线，帮助将食物转化为可用能量；催化胶原蛋白与弹性蛋白的合成，这是维持皮肤、血管、骨骼和结缔组织强健与弹性的基础；作为强大的抗氧化酶（超氧化物歧化酶）的辅因子，协助中和自由基，保护细胞免受氧化应激；同时，它还协助铁的正常代谢与利用，支持健康的血液循环。这种胶体形态的设计，旨在让铜元素以一种易于细胞利用的形式，温和地融入这个支持体系。

**适合哪些生活情境**
这款产品适合那些感觉自身能量代谢需要额外支持，希望从基础层面关照结缔组织健康的人士。也适用于日常饮食可能不够均衡，或处于特殊生理阶段对微量元素需求有所增加，希望以纯净形式进行补充的成年人。对于关注整体抗氧化防御，寻求简单、纯净配方来支持内在平衡的人来说，它提供了一种选择。

**纯净与成分的完整性**
配方的纯粹性是其核心。整个体系仅由两种物质构成：经过双重蒸馏并经反渗透过滤的极致纯水，以及纯度高达99.9%的铜源。没有任何形式的添加剂、填充剂、稳定剂或防腐剂。我们坚信，最少的成分往往能带来最直接、最纯粹的支持。产品不含任何转基因成分。

**给健康管理者与搭配思路**
对于健康领域的专业人士而言，了解其制备工艺与形态特性是将其纳入整体方案的关键。其纳米胶体形态旨在提高生物可利用性，且配方纯净，干扰因素极少。在考虑搭配时，它可以作为支持能量代谢和抗氧化系统方案的一部分。例如，与富含维生素C的食物或补充剂结合，可能有助于支持胶原蛋白的合成；与铁补充剂适时错开使用，则可能支持两者更平衡的吸收与利用。始终建议基于个体的全面评估来制定方案。

**用法与剂量**
建议外用，局部使用。每次取1至2滴于所需部位。请将产品存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。

**重要提示**
对铜有过敏反应的人群请勿使用。本品为胶体溶液，根据欧盟法规，不作为药品、食品补充剂或化妆品进行使用。用户可通过互联网、专业书籍等相关信息渠道，自行了解胶体（微细）粒子在水中的应用领域。此处信息仅涉及制造工艺与产品质量描述。`,ingredient_reference:`**胶体铜（纳米级）**
胶体铜是纯度99.9%的金属铜形成的纳米级带电粒子悬浮液，而非离子或化合物形式的铜。在体内，铜是多种关键酶的必需辅因子，深度参与细胞能量（ATP）的产生、强大的内源性抗氧化防御（通过超氧化物歧化酶SOD）、以及维持结缔组织强度与弹性的胶原蛋白与弹性蛋白的合成。本品采用高压等离子工艺制备，旨在获得高表面电荷、超细粒径的纳米胶体，这可能有利于其在生物系统中的分布与利用。它特别适合那些关注基础能量代谢、寻求支持身体天然抗氧化能力及结缔组织健康的人群。在配方中，它作为唯一活性成分，其效用的发挥完全依赖于其独特的胶体形态与极高的纯净度。

**双重蒸馏反渗透纯水**
这并非普通溶剂，而是经过双重蒸馏并进一步通过反渗透过滤的极致纯净水。它的作用是作为胶体铜纳米粒子的理想分散介质，其极高的纯度确保了不会引入任何杂质离子干扰胶体粒子的表面电荷与稳定性，从而维持整个胶体系统的均一与长效。这种介质的选择对于保持纳米粒子的悬浮状态和生物活性至关重要。它适合所有追求配方极致纯净、避免不必要添加物的使用者。在配方中，它与99.9%纯铜共同构成了一个极其简单却精密的二元系统，是胶体技术得以实现的基础。`},en:{label:`Mannayan Colloidal Copper 20ppm
Micro-Pure, Inner Support
• Supports energy metabolism & vitality
• Maintains connective tissue health
• Aids antioxidant defense systems
• Promotes normal iron utilization
• Supports nervous system function
500 ml / 20ppm concentration
Contains only double-distilled water & 99.9% pure copper
Prepared via plasma high-frequency technology`,short_description:`Sometimes, even with adequate sleep, the body feels an inexplicable fatigue, as if energy production can't keep pace with daily demands. This state may be more than just tiredness—it can be a signal that certain foundational support systems within the body need subtle tuning.

This colloidal copper solution offers a pure, readily absorbable form of copper. Copper is an essential cofactor for many key enzymatic reactions in the body, involved in fundamental processes from energy production to connective tissue formation. It is suspended as nano-sized, charged particles in pure water, a form designed to support its bioavailability.

The product is prepared in Germany using a high-voltage plasma process, not traditional electrolysis, aiming to produce smaller colloidal particles with higher charge. After preparation, it is not stored and is further energized with harmonic frequency applications to maintain its unique colloidal state.

Each bottle contains 500 ml at a concentration of 20ppm (parts per million). The formula is exceptionally pure, containing only double-distilled, reverse-osmosis filtered water and 99.9% pure copper. Contains no genetically engineered ingredients.`,long_description:`When daily vitality fades, the body feels heavy, or skin and joints lose their former suppleness and support, we often realize the body needs deeper care. These sensations may point to the subtle yet vital processes that maintain the body's basic structure and energy flow, including the balanced need for the essential trace element copper.

**Nano-Colloidal & Plasma Technology**
This is not simply copper dissolved in water. Colloidal copper is 99.9% pure metallic copper existing as submicroscopic atomic clusters, each carrying a slight electrical charge, allowing it to remain stably suspended in ultra-pure water. We use a high-voltage plasma process for preparation. Compared to traditional electrolysis, this method aims to produce colloidal particles with smaller size and higher surface charge. These nanoparticles are so fine they cannot be captured by filter paper and are difficult to observe even under a standard microscope. After preparation, the solution is immediately bottled to avoid changes from storage and is additionally energized with harmonic frequency applications to support the stability and synergy of its colloidal system.

**A Supportive, Integrated System**
Copper plays multiple roles in the body; it does not work in isolation. It is a core component of various enzymes that together form a supportive network: participating in the cellular energy production line, helping convert food into usable energy; catalyzing the synthesis of collagen and elastin, the foundation for maintaining the strength and elasticity of skin, blood vessels, bones, and connective tissue; acting as a cofactor for the powerful antioxidant enzyme superoxide dismutase (SOD), helping neutralize free radicals and protect cells from oxidative stress; and it also assists in the normal metabolism and utilization of iron, supporting healthy blood circulation. This colloidal form is designed to allow copper to integrate gently into this support system in a manner readily usable by cells.

**Suitable Life Contexts**
This product is suitable for those who feel their energy metabolism needs additional support and wish to care for connective tissue health at a foundational level. It is also suitable for adults whose daily diet may not be fully balanced, or who are in life stages with increased trace element needs and seek supplementation in a pure form. For those focused on overall antioxidant defense, seeking a simple, pure formula to support inner balance, it offers an option.

**Purity & Ingredient Integrity**
The purity of the formula is its core. The entire system consists of only two substances: ultra-pure water that has undergone double distillation and reverse osmosis filtration, and a copper source of 99.9% purity. There are no additives, fillers, stabilizers, or preservatives of any kind. We believe the fewest ingredients often provide the most direct, purest support. The product contains no genetically modified ingredients.

**For Health Managers & Combination Considerations**
For health professionals, understanding its preparation process and form characteristics is key to integrating it into a holistic plan. Its nano-colloidal form is designed to enhance bioavailability, and the formula is pure with minimal interfering factors. When considering combinations, it can be part of a plan supporting energy metabolism and antioxidant systems. For example, combining it with vitamin C-rich foods or supplements may help support collagen synthesis; using it separately in timing from iron supplements may support more balanced absorption and utilization of both. It is always advised to develop a plan based on a comprehensive individual assessment.

**Usage & Dosage**
Recommended for topical, localized use. Apply 1 to 2 drops to the desired area. Store the product in a cool, dry place, protected from light, and out of reach of children.

**Important Notice**
Do not use if you have a known allergy to copper. This product is a colloidal solution and, according to EU regulations, is not intended for use as a medicine, food supplement, or cosmetic. Users may independently research the application fields of colloidal (microfine) particles in water via the internet, professional literature, and other relevant information channels. The information provided here pertains solely to the description of the manufacturing process and product quality.`,ingredient_reference:`**Colloidal Copper (Nano-Grade)**
Colloidal copper is a suspension of nano-sized, charged particles formed from 99.9% pure metallic copper, not ionic or compound forms of copper. In the body, copper is an essential cofactor for numerous key enzymes, deeply involved in cellular energy (ATP) production, powerful endogenous antioxidant defense (via superoxide dismutase, SOD), and the synthesis of collagen and elastin which maintain the strength and elasticity of connective tissue. This product is prepared using a high-voltage plasma process, aiming to produce nano-colloids with high surface charge and ultra-fine particle size, which may favor their distribution and utilization in biological systems. It is particularly suitable for those focused on foundational energy metabolism, seeking to support the body's natural antioxidant capacity and connective tissue health. In the formula, it serves as the sole active ingredient; its efficacy relies entirely on its unique colloidal form and exceptional purity.

**Double-Distilled Reverse Osmosis Pure Water**
This is not an ordinary solvent, but ultra-pure water that has undergone double distillation and further reverse osmosis filtration. Its role is to serve as the ideal dispersion medium for the colloidal copper nanoparticles. Its extreme purity ensures no impurity ions are introduced that could interfere with the surface charge and stability of the colloidal particles, thereby maintaining the homogeneity and longevity of the entire colloidal system. The choice of this medium is crucial for preserving the suspended state and bioactivity of the nanoparticles. It is suitable for all users seeking an exceptionally pure formula and wishing to avoid unnecessary additives. In the formula, together with 99.9% pure copper, it forms an exceedingly simple yet precise binary system, the foundation upon which the colloidal technology is realized.`}}},{name:"Mannayan Kolloidales Kupfer 250 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Kupfer-250-ml/011167",price:["14,90 €"],product_number:"011167",quantity:[],image_url:"https://mannayan.com/media/79/84/85/1643309595/Kupfer_Kolloidal_250_ml_26.01.2022.jpg?ts=1643309595",image_local:"images/Kupfer_Kolloidal_250_ml_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体铜
支持内在平衡的纯净矿物
• 支持能量代谢与活力
• 促进结缔组织健康
• 辅助抗氧化防御系统
• 支持神经信号传递
• 250毫升瓶装，20 ppm浓度
• 仅含双重蒸馏水与99.9%纯铜
• 德国制造，高压等离子体工艺`,short_description:`有时，即使休息充足，身体仍感觉能量跟不上节奏，仿佛内在的活力源泉需要一点支持。日常的消耗、现代生活的节奏，都可能让身体对某些基础元素的需求增加。

胶体铜提供了一种高度生物可利用的铜元素形式。铜是体内许多关键酶系统的组成部分，参与从能量产生到结缔组织形成的多种过程。这种胶体形态意味着铜以极微小的带电粒子悬浮在纯净水中，易于身体识别和利用。

本品采用高压等离子体工艺在德国制造，确保产生特别细小且带电的胶体粒子。配方极致纯净，仅包含双重蒸馏、反渗透过滤的纯水以及纯度高达99.9%的铜。不含任何遗传工程成分。`,long_description:`当你感到精力不似往常充沛，或是身体在应对日常压力后恢复得不如预期般顺畅时，这可能不仅仅是疲劳的信号。身体的平衡运作依赖于一系列微量但至关重要的矿物质，它们像精密的催化剂，参与数百种维持生命活力的内在反应。铜，正是这样一位沉默的协作者。

**食物态技术与递送形式**
本产品并非简单的铜化合物溶液，而是采用高压等离子体工艺制成的胶体铜。这意味着纯度99.9%的金属铜被分解为亚微观的原子簇，这些微小的粒子携带微弱电荷，稳定悬浮于双重净化的纯水中。其粒子尺寸达到纳米级别，甚至能穿透普通滤纸。这种形态模仿了自然界中矿物质存在的生物可利用状态，旨在让身体更易于接纳和运用。

**一个协同作用的完整体系**
铜在体内的作用并非孤立发生。它是构成超氧化物歧化酶（SOD）等关键抗氧化酶的核心，协助中和自由基，为细胞创造更清净的内在环境。同时，铜是赖氨酰氧化酶的必要组分，该酶负责胶原蛋白和弹性蛋白的交联，这是维持皮肤、血管、骨骼等结缔组织强韧与弹性的基础。在能量代谢层面，铜参与细胞色素C氧化酶系统，这是线粒体能量产生的最后一环。此外，它对神经递质的合成及髓鞘的形成也至关重要。胶体形态旨在支持这些功能的自然、和谐运行。

**适合哪些生活情境**
这款产品适合那些饮食可能不够多样均衡，或处于特定生活阶段对营养支持有额外需求的人。例如，长期处于高压工作环境、感到持续性倦怠的人；关注皮肤与关节等结缔组织长期健康的人；或是追求全面抗氧化防御策略，作为健康生活方式一部分的实践者。它适用于希望以纯净、直接的方式补充这一必需微量矿物质的成年人。

**纯净与成分的完整性**
我们坚信，补充剂的核心价值在于其成分的纯粹与真实。本品仅含两种成分：经过双重蒸馏及反渗透过滤的至高纯度水，以及纯度达99.9%的铜金属。制造过程在德国完成，采用高压等离子体技术，避免了电解法可能带来的杂质。产品不添加任何防腐剂、填料或来自遗传工程的物质。每一瓶都代表着对成分完整性的坚持。

**给健康管理者与搭配建议**
对于健康领域的专业人士，本品可作为整体健康方案中的一个基础矿物质支持选项。铜与锌、铁等矿物质在吸收和功能上存在微妙的平衡关系。在制定综合营养方案时，考虑这些矿物质的协同与拮抗是重要的。本品纯净的配方使其易于与其他膳食补充方案结合，但建议基于个体的全面评估进行搭配。

**用法与剂量**
本品为外用。建议每日1-2次，每次取1-2滴于所需部位。请避免接触眼睛及黏膜。使用后请拧紧瓶盖，存放于儿童无法触及之处。

**重要提示**
对铜有过敏反应者请勿使用。本品为外用产品，不可内服。请存放于阴凉、干燥、避光处。如果正在怀孕、哺乳期，或有任何健康状况及正在服用药物，使用前请咨询您的健康顾问。`,ingredient_reference:`**胶体铜**
胶体铜是纯度99.9%的金属铜经高压等离子体工艺处理后形成的亚微观带电粒子，稳定悬浮于超纯水中。它在体内作为多种关键酶的辅助因子，这些酶涉及能量代谢、抗氧化防御、结缔组织形成及神经系统功能。所使用的胶体形态旨在提高生物可利用性，粒子尺寸极小，易于局部应用。适合那些寻求通过纯净形式支持身体基础矿物质平衡，特别是关注能量水平、抗氧化状态及结缔组织健康的人群。在配方中，它是唯一活性成分，其效力依赖于极高的纯度和先进的分散技术。

**双重蒸馏反渗透纯水**
这是经过双重蒸馏并结合反渗透过滤技术处理的极高纯度水，作为胶体铜粒子的悬浮介质。它的作用不仅是溶剂，更是确保胶体系统稳定、无杂质干扰的关键。超纯水环境使得铜胶体粒子能保持其电荷和分散状态，避免聚集。这种载体形式对于追求成分极致纯净、避免不必要添加剂的使用者尤为重要。它在配方中创造了洁净的‘画布’，让铜的功效得以纯粹呈现。`},en:{label:`Mannayan Colloidal Copper
A Pure Mineral for Inner Balance
• Supports Energy Metabolism & Vitality
• Promotes Connective Tissue Health
• Aids Antioxidant Defense Systems
• Supports Nerve Signal Transmission
• 250ml Bottle, 20 ppm Concentration
• Contains Only Double-Distilled Water & 99.9% Pure Copper
• Made in Germany, High-Pressure Plasma Process`,short_description:`Sometimes, even with adequate rest, the body can feel like it's struggling to keep up with the pace—as if its inner wellspring of vitality needs a little support. Daily demands and the rhythm of modern life can increase the body's need for certain foundational elements.

Colloidal Copper provides a highly bioavailable form of copper. Copper is a component of many key enzyme systems in the body, involved in processes ranging from energy production to connective tissue formation. This colloidal form means copper is suspended as extremely fine, charged particles in pure water, making it easy for the body to recognize and utilize.

This product is manufactured in Germany using a high-pressure plasma process, ensuring exceptionally small and charged colloidal particles. The formula is supremely pure, containing only double-distilled, reverse-osmosis filtered pure water and copper with a purity of 99.9%. Contains no genetically engineered ingredients.`,long_description:`When you feel your energy isn't as robust as usual, or your body doesn't recover as smoothly as expected after daily stresses, it may be more than just a sign of fatigue. The body's balanced functioning relies on a series of trace yet vital minerals—they act like precise catalysts, participating in hundreds of internal reactions that sustain life's vitality. Copper is one such silent collaborator.

**Food-State Technology & Delivery Form**
This product is not a simple copper compound solution, but colloidal copper produced using a high-pressure plasma process. This means 99.9% pure metallic copper is broken down into submicroscopic atomic clusters. These tiny particles carry a slight electrical charge and are stably suspended in doubly purified water. Their particle size reaches the nanoscale, even capable of passing through ordinary filter paper. This form mimics the bioavailable state in which minerals exist in nature, designed to make the body more receptive and able to use them.

**A Complete System of Synergistic Action**
Copper's role in the body does not occur in isolation. It is a core component of key antioxidant enzymes like superoxide dismutase (SOD), helping to neutralize free radicals and create a cleaner internal environment for cells. Simultaneously, copper is an essential component of lysyl oxidase, the enzyme responsible for cross-linking collagen and elastin—the foundation for maintaining the strength and elasticity of connective tissues like skin, blood vessels, and bones. At the level of energy metabolism, copper participates in the cytochrome c oxidase system, the final step in mitochondrial energy production. Furthermore, it is crucial for neurotransmitter synthesis and myelin formation. The colloidal form is designed to support the natural, harmonious functioning of these processes.

**Suitable Life Situations**
This product is suitable for individuals whose diets may not be sufficiently varied and balanced, or who are in specific life stages with additional nutritional support needs. Examples include those in long-term high-pressure work environments experiencing persistent fatigue; individuals focused on the long-term health of connective tissues like skin and joints; or practitioners seeking a comprehensive antioxidant defense strategy as part of a healthy lifestyle. It is intended for adults wishing to supplement this essential trace mineral in a pure, direct way.

**Purity & Ingredient Integrity**
We firmly believe the core value of a supplement lies in the purity and authenticity of its ingredients. This product contains only two ingredients: water of the highest purity, processed through double distillation and reverse osmosis filtration, and metallic copper with a purity of 99.9%. The manufacturing process is completed in Germany using high-pressure plasma technology, avoiding impurities that can arise from electrolytic methods. The product contains no preservatives, fillers, or genetically engineered materials. Each bottle represents a commitment to ingredient integrity.

**For Health Practitioners & Combination Suggestions**
For professionals in the health field, this product can serve as a foundational mineral support option within a holistic wellness plan. Copper exists in a delicate balance with minerals like zinc and iron in terms of absorption and function. When formulating a comprehensive nutritional plan, considering the synergy and antagonism between these minerals is important. This product's pure formula makes it easy to combine with other dietary supplement regimens, but pairing should be based on a comprehensive individual assessment.

**Usage & Dosage**
This product is for topical use. It is recommended to apply 1-2 drops to the desired area 1-2 times daily. Avoid contact with eyes and mucous membranes. Tighten the cap after use and store out of reach of children.

**Important Notes**
Do not use if you have a known allergy to copper. This product is for topical use only and is not for internal consumption. Store in a cool, dry place away from light. If you are pregnant, nursing, have any health conditions, or are taking medication, please consult your health advisor before use.`,ingredient_reference:`**Colloidal Copper**
Colloidal Copper consists of 99.9% pure metallic copper processed via a high-pressure plasma technique to form submicroscopic charged particles, stably suspended in ultrapure water. In the body, it acts as a cofactor for numerous key enzymes involved in energy metabolism, antioxidant defense, connective tissue formation, and nervous system function. The colloidal form used is designed to enhance bioavailability, with extremely small particle size suitable for topical application. It is suitable for individuals seeking to support the body's foundational mineral balance through a pure form, particularly those focused on energy levels, antioxidant status, and connective tissue health. In the formula, it is the sole active ingredient, its efficacy reliant on exceptional purity and advanced dispersion technology.

**Double-Distilled Reverse Osmosis Purified Water**
This is water of the highest purity, processed through double distillation combined with reverse osmosis filtration. It serves as the suspension medium for the colloidal copper particles. Its role is not merely as a solvent but is crucial for ensuring the stability of the colloidal system and the absence of interfering impurities. The ultrapure water environment allows the copper colloidal particles to maintain their charge and dispersed state, preventing aggregation. This carrier form is particularly important for users seeking ultimate ingredient purity and wishing to avoid unnecessary additives. In the formula, it creates a clean 'canvas,' allowing the efficacy of the copper to be presented purely.`}}},{name:"Mannayan Kolloidales Magnesium 100 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Magnesium-100-ml/011152",price:["12,90 €"],product_number:"011152",quantity:[],image_url:"https://mannayan.com/media/4f/db/ba/1638181548/Magnesium_Kolloid_100_ml_Nr.2.jpg?ts=1638181548",image_local:"images/Magnesium_Kolloid_100_ml_Nr.2.jpg",content:{cn:{label:`曼纳扬胶体镁
纳米级镁离子悬浮液
• 支持神经与肌肉功能
• 促进能量代谢与放松
• 高生物利用度形式
• 仅含双重蒸馏水与99.9%纯镁
100毫升 | 10 ppm浓度 | 外用滴剂`,short_description:`有时，身体会发出一些微妙的信号：肌肉在一天结束时感觉格外紧绷，思绪难以平静，或是恢复精力所需的时间似乎变长了。这些感受常常与身体内一种基础矿物质的平衡有关。

曼纳扬胶体镁提供了一种独特的镁补充形式。它不是普通的化合物，而是将99.9%纯度的镁，通过电解工艺处理成纳米级的微小粒子，悬浮于双重蒸馏的纯净水中。这种胶体状态旨在让镁元素以更易被身体识别和利用的形式存在。

产品采用外用方式，可直接作用于局部皮肤。配方极致纯净，仅包含两种成分：经过双重蒸馏和反渗透过滤的超纯水，以及高纯度的镁金属。不含任何遗传工程成分。`,long_description:`当日常的节奏让身体感到持续的紧绷，或是夜晚的休息无法带来深层的舒缓时，这往往不仅仅是疲劳，而是身体在寻求一种根本性的平衡。镁，作为参与体内数百种酶反应的必需矿物质，其充足与否直接影响着从能量产生到神经信号传递的多个层面。

**食物态技术与递送形式**
这款产品采用胶体技术。胶体既非简单的溶液，也非悬浮液，而是一种独特的物理状态。在这里，99.9%纯度的镁被分解成纳米级的原子簇，通过微弱的电荷稳定地悬浮于超纯水中。这种形态模仿了自然界中某些生物活性物质的存在方式，其微小的粒子尺寸被认为有助于与身体组织进行更直接的交互。产品在制造过程中还融入了谐波频率应用，这是曼纳扬工艺的一个特点。

**一个完整的支持体系**
虽然成分简洁，但其作用机制着眼于系统性支持。镁离子是体内多种生化通路的关键辅助因子。以这种胶体形式外用时，它旨在为局部区域提供镁元素，可能支持该区域的肌肉与神经末梢的功能。其作用并非孤立，而是融入身体自身利用镁的广泛网络之中，从支持正常的肌肉收缩与放松，到参与能量代谢过程。

**适合的人群**
这款产品适合那些寻求通过局部外用方式补充矿物质的人，尤其是关注身体特定区域感受的人。它也适用于偏好极致纯净配方、不希望摄入复杂添加剂或填充剂的个体。对于生活方式活跃、经常感到身体需要额外支持的人，或是在寻求自然方式帮助放松的人来说，这可能是一个值得了解的选择。

**纯净与成分完整性**
纯净是配方的核心。整个产品仅由两种物质构成：经过双重蒸馏和反渗透过滤的超纯水，以及纯度高达99.9%的镁金属。制造过程在德国进行，采用电解工艺。不涉及任何遗传工程技术，没有添加防腐剂、香料或化学稳定剂。标签上的内容就是瓶中的全部。

**用法与剂量**
建议外用，局部使用1至2滴。请将产品存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。如果您已知对镁过敏，请勿使用本品。

**重要提示**
本产品为胶体溶液。请根据个人需要和感受谨慎使用。保持瓶口清洁，避免污染。如果出现任何不适，请停止使用。本品不能替代均衡多样的饮食和健康的生活方式。`,ingredient_reference:`**胶体镁**
胶体镁是指将高纯度（99.9%）的金属镁通过物理电解工艺，处理成纳米尺度的微小粒子，并使其稳定悬浮于超纯水中形成的胶体分散系。这种形态不同于常见的镁盐化合物，其粒子尺寸极小，具有较大的比表面积。在局部外用时，这种形式旨在促进镁元素与皮肤及皮下组织的接触与潜在交换。它最适合那些寻求传统镁盐补充形式之外选择、并注重成分极致简化的人群。在整个配方中，它是唯一的活性物质载体，其效力与纯净度直接相关。

**超纯水（双重蒸馏及反渗透过滤）**
这里的超纯水并非普通的饮用水，而是经过双重蒸馏并结合反渗透过滤技术处理后的高纯度水，其导电率极低（约0.3-0.5 ppm）。它在此配方中扮演着双重角色：既是胶体镁粒子的悬浮介质，也是保证整个配方纯净无杂质的基石。高度纯净的水介质能最大程度地减少外来离子干扰，有助于维持胶体系统的稳定性。它确保了最终产品中除了意图补充的镁之外，没有其他不必要的矿物质或杂质。对于配方完整性要求极高的使用者而言，这是关键的基础。`},en:{label:`Mannayan Colloidal Magnesium
Nano-Scale Magnesium Ion Suspension
• Supports Nerve & Muscle Function
• Promotes Energy Metabolism & Relaxation
• High Bioavailability Form
• Contains Only Double-Distilled Water & 99.9% Pure Magnesium
100 ml | 10 ppm Concentration | Topical Dropper`,short_description:`Sometimes, the body sends subtle signals: muscles feel unusually tight at the end of the day, thoughts struggle to settle, or it seems to take longer to regain energy. These sensations are often linked to the balance of a foundational mineral within the body.

Mannayan Colloidal Magnesium offers a unique form of magnesium supplementation. It is not an ordinary compound; instead, 99.9% pure magnesium is processed via electrolysis into nano-scale particles, suspended in double-distilled, purified water. This colloidal state is designed to allow magnesium to exist in a form that the body may more readily recognize and utilize.

The product is intended for topical application and can be applied directly to local areas of the skin. The formula is exceptionally pure, containing only two ingredients: ultra-pure water processed through double distillation and reverse osmosis filtration, and high-purity magnesium metal. Contains no genetically engineered ingredients.`,long_description:`When the pace of daily life leaves the body feeling persistently tense, or when nighttime rest fails to bring deep relief, it’s often more than just fatigue—it can be the body seeking a fundamental balance. Magnesium, an essential mineral involved in hundreds of enzymatic reactions in the body, directly influences multiple levels of function, from energy production to nerve signal transmission.

**Colloidal Technology & Delivery Form**
This product utilizes colloidal technology. A colloid is neither a simple solution nor a suspension, but a unique physical state. Here, 99.9% pure magnesium is broken down into nano-scale atomic clusters, stabilized by a weak electrical charge and suspended in ultra-pure water. This form mimics the way certain bioactive substances exist in nature, and its minute particle size is believed to facilitate more direct interaction with body tissues. The manufacturing process also incorporates the application of harmonic frequencies, a hallmark of the Mannayan process.

**A Holistic Support System**
Though the ingredient list is simple, its mechanism of action is designed for systemic support. Magnesium ions are key cofactors in numerous biochemical pathways in the body. When applied topically in this colloidal form, it aims to provide magnesium to local areas, potentially supporting the function of muscles and nerve endings in that region. Its action is not isolated; it integrates into the body’s own extensive network for utilizing magnesium—from supporting normal muscle contraction and relaxation to participating in energy metabolism.

**Who It’s For**
This product is suitable for those seeking to supplement minerals through topical application, especially individuals attentive to sensations in specific areas of the body. It is also appropriate for those who prefer exceptionally pure formulas and wish to avoid complex additives or fillers. For active individuals who often feel their body needs extra support, or for those exploring natural ways to aid relaxation, this may be an option worth considering.

**Purity & Ingredient Integrity**
Purity is at the heart of the formula. The entire product consists of only two substances: ultra-pure water processed through double distillation and reverse osmosis filtration, and magnesium metal with a purity of 99.9%. Manufacturing takes place in Germany using an electrolysis process. No genetic engineering techniques are involved, and no preservatives, fragrances, or chemical stabilizers are added. What’s on the label is exactly what’s in the bottle.

**Usage & Dosage**
For topical use, apply 1 to 2 drops locally. Store in a cool, dry place, protected from light, and out of reach of children. Do not use if you have a known allergy to magnesium.

**Important Notes**
This product is a colloidal solution. Please use cautiously according to personal needs and sensations. Keep the bottle opening clean to avoid contamination. Discontinue use if any discomfort occurs. This product is not a substitute for a balanced, varied diet and a healthy lifestyle.`,ingredient_reference:`**Colloidal Magnesium**
Colloidal magnesium refers to a colloidal dispersion system where high-purity (99.9%) metallic magnesium is processed via physical electrolysis into nano-scale particles, stabilized and suspended in ultra-pure water. This form differs from common magnesium salt compounds; its particle size is extremely small, providing a large surface area. When applied topically, this form is designed to facilitate contact and potential exchange of magnesium with the skin and underlying tissues. It is best suited for individuals seeking an alternative to traditional magnesium salt supplements and who prioritize extreme simplicity in ingredients. Within the entire formula, it is the sole active substance carrier, with its efficacy directly linked to its purity.

**Ultra-Pure Water (Double-Distilled & Reverse Osmosis Filtered)**
The ultra-pure water here is not ordinary drinking water; it is high-purity water processed through double distillation combined with reverse osmosis filtration, with extremely low conductivity (approximately 0.3–0.5 ppm). It plays a dual role in this formula: it serves as the suspension medium for the colloidal magnesium particles and acts as the foundation ensuring the purity of the entire formula. A highly pure water medium minimizes interference from foreign ions, helping to maintain the stability of the colloidal system. It ensures that, aside from the intended magnesium, there are no unnecessary minerals or impurities in the final product. For users with high demands for formula integrity, this is a critical foundation.`}}},{name:"Mannayan Kolloidales Magnesium 250 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Magnesium-250-ml/011154",price:["19,90 €"],product_number:"011154",quantity:[],image_url:"https://mannayan.com/media/7d/fa/c1/1638183278/Magnesium_Kolloid_250_ml.jpg?ts=1638183278",image_local:"images/Magnesium_Kolloid_250_ml.jpg",content:{cn:{label:`Mannayan 胶体镁
纳米级纯净镁液
• 支持神经与肌肉功能 • 促进能量代谢 • 辅助放松与睡眠 • 维持电解质平衡
250毫升 / 外用1-2滴
纯净配方：双重蒸馏过滤纯水、99.9%高纯镁
无转基因添加`,short_description:`有时，身体会发出一些微妙的信号：肌肉在休息时仍感到紧绷，思绪在夜晚难以平静，或是白天总觉得精力接续不上。这些感受常常与体内一种基础矿物质的平衡有关。

这款产品提供了一种独特的镁补充形式——胶体镁。它不是普通的溶液，而是将99.9%高纯度的镁，处理成纳米级的微小粒子，悬浮于双重净化过的纯水中。这种形态旨在让镁元素更易于被局部利用。

它采用外用方式，每次仅需使用1到2滴，直接应用于需要关注的局部皮肤区域。配方极致简洁，仅包含双重蒸馏过滤的纯水和99.9%纯度的镁，无任何不必要的添加。`,long_description:`当肌肉在一天结束后仍残留着莫名的紧张感，或是思绪在需要休息时依旧纷扰不休，这常常不仅仅是疲劳，更可能是身体在寻求一种基础的矿物质平衡。镁参与着体内数百种生化反应，从能量产生到神经信号传导，但它却是一种现代饮食中容易摄入不足的营养素。

**食物态技术与递送形式**
这款产品采用胶体形态。胶体并非简单的溶解，而是将99.9%高纯度的镁通过电解工艺，制备成亚微观的、仅由数个原子组成的纳米级粒子群。这些带微弱电荷的粒子均匀悬浮于双重净化（蒸馏与反渗透过滤）的纯水中，形成一种稳定的分散体系。其粒子细小到无法被普通滤纸截留，也超越了普通光学显微镜的观测范围。这种形态旨在模仿体内某些天然生物活性流体（如淋巴液）的状态，以期实现更温和的局部应用与利用。

**一个基于纯净元素的完整体系**
产品的完整性源于其极致的精简与纯净。整个体系只由两个部分构成：作为载体的超纯水，以及作为活性物质的高纯镁。两者之间没有化学键合，镁以原始的原子簇形态存在。这种设计避免了复杂的化合物对局部环境可能带来的干扰，让关注点回归到镁元素本身。生产过程中还融入了谐波频率应用，这是对产品能量状态的一种精细化处理。

**适合哪些生活情境**
适合那些在日常生活中感受到肌肉需要额外舒缓支持的人；适合在脑力活动密集后，希望辅助神经系统放松下来的人；也适合那些注重通过局部外用方式，为特定身体区域提供矿物质支持的人。它服务于那些认同“少即是多”，追求配方极致纯净的日常健康管理理念。

**纯净与成分完整性承诺**
纯净是配方的核心。成分清单简短而明确：双重蒸馏并经反渗透过滤的纯水，以及纯度高达99.9%的镁金属。生产在德国完成，采用电解工艺。产品明确不含转基因成分。我们相信，真正的品质来自于对原料纯粹度的坚持与对添加物的克制。

**健康管理者与经销商：背景与搭配思路**
对于健康领域的专业人士而言，这是一款可作为基础矿物质支持方案中局部外用选项的产品。其胶体形态和纳米级粒径提供了不同于口服镁补充剂的作用途径。临床背景的从业者可能会将其纳入针对肌肉舒缓、局部放松或整体矿物质平衡管理的综合方案中，与饮食调整、其他营养补充及生活方式建议相结合。

**用法与剂量**
建议外用。每日1至2次，每次取1到2滴，直接涂抹于清洁后的相关皮肤区域。无需揉搓过度。请置于儿童无法触及之处。

**重要提示**
如果您已知对镁有过敏反应，请勿使用本品。产品应避光，存放于阴凉干燥处。由于欧盟法规对胶体溶液分类的规定，本品不作为药品、食品补充剂或化妆品进行销售与宣称。我们鼓励您通过其他可靠信息渠道了解胶体物质的潜在应用领域。`,ingredient_reference:`**胶体镁（纳米级）**
胶体镁并非镁的化合物，而是纯度99.9%的金属镁经特殊电解工艺处理后形成的纳米级原子簇。这些微小的粒子带微弱电荷，稳定悬浮于纯水中。这种形态旨在提供一种高生物利用度的元素镁形式，其亚微观尺寸可能利于局部应用时的接触与利用。它最适合寻求通过外用途径进行局部镁支持的人群。在整个配方中，它是唯一的活性物质，其效力依赖于超高纯度和独特的物理分散状态。

**双重净化纯水**
本品使用经过双重蒸馏并结合反渗透过滤技术处理的超纯水，其纯净度极高。它在此处并非简单的溶剂，而是作为胶体体系的载体介质，其极低的杂质含量确保了纳米镁粒子的稳定性，防止其发生不必要的聚集或反应。这种水本身不含矿物质，其作用是创造一个纯净的环境，让镁粒子能够充分发挥其特性。它体现了配方的基础理念：去除一切非必要的干扰，让核心成分清晰呈现。`},en:{label:`Mannayan Colloidal Magnesium
Nano-Pure Magnesium Liquid
• Supports Nerve & Muscle Function • Promotes Energy Metabolism • Aids Relaxation & Sleep • Maintains Electrolyte Balance
250ml / Topical Use: 1-2 Drops
Pure Formula: Double-Distilled Filtered Water, 99.9% High-Purity Magnesium
Non-GMO`,short_description:`Sometimes, the body sends subtle signals: muscles that feel tight even at rest, a mind that struggles to quiet down at night, or a sense that daytime energy just doesn't flow smoothly. These sensations are often connected to the balance of a fundamental mineral within.

This product offers a unique form of magnesium supplementation—colloidal magnesium. It is not a typical solution, but rather 99.9% high-purity magnesium processed into nano-scale particles, suspended in double-purified water. This form is designed to make the magnesium element more readily available for local use.

It is applied topically, requiring only 1 to 2 drops per use, applied directly to the specific area of skin needing attention. The formula is exceptionally simple, containing only double-distilled filtered water and 99.9% pure magnesium, with no unnecessary additives.`,long_description:`When muscles retain an inexplicable tightness at the end of the day, or thoughts remain restless when it's time to unwind, it's often more than just fatigue—it may be the body seeking balance in a fundamental mineral. Magnesium is involved in hundreds of biochemical reactions in the body, from energy production to nerve signal transmission, yet it is a nutrient often lacking in modern diets.

**Colloidal Technology & Delivery Form**
This product utilizes a colloidal form. A colloid is not a simple dissolution; here, 99.9% high-purity magnesium is processed via electrolysis into submicroscopic, nano-scale particle clusters consisting of just a few atoms. These faintly charged particles are uniformly suspended in double-purified (distilled and reverse osmosis filtered) water, forming a stable dispersion. The particles are so fine they cannot be captured by ordinary filter paper and are beyond the observation range of standard optical microscopes. This form aims to mimic the state of certain natural bioactive fluids in the body (like lymph), intended for gentler topical application and utilization.

**A Complete System Based on Pure Elements**
The integrity of the product stems from its ultimate simplicity and purity. The entire system consists of only two components: ultra-pure water as the carrier, and high-purity magnesium as the active substance. There is no chemical bonding between them; the magnesium exists in its primal atomic cluster form. This design avoids potential interference from complex compounds on the local environment, refocusing attention on the magnesium element itself. The production process also incorporates harmonic frequency application, a refinement of the product's energetic state.

**Suitable For Which Life Situations**
Suitable for those who feel their muscles need extra soothing support in daily life; for those seeking to aid nervous system relaxation after intensive mental activity; and for those who prefer providing mineral support to specific body areas through topical application. It serves individuals who embrace the 'less is more' philosophy and pursue a daily wellness management concept centered on极致配方纯净.

**Purity & Ingredient Integrity Commitment**
Purity is the core of the formula. The ingredient list is brief and clear: double-distilled and reverse osmosis filtered pure water, and magnesium metal with a purity of 99.9%. Production is completed in Germany using electrolysis. The product is explicitly non-GMO. We believe true quality comes from a commitment to原料纯粹度 and restraint with additives.

**For Health Practitioners & Distributors: Context & Integration**
For professionals in the health field, this product can serve as a topical option within foundational mineral support protocols. Its colloidal form and nano-scale particle size offer a different pathway of action compared to oral magnesium supplements. Clinically oriented practitioners may integrate it into comprehensive approaches for muscle soothing, local relaxation, or overall mineral balance management, combining it with dietary adjustments, other nutritional support, and lifestyle recommendations.

**Usage & Dosage**
For topical use. Apply 1 to 2 times daily, using 1 to 2 drops each time, directly onto clean skin in the relevant area. No need for excessive rubbing. Keep out of reach of children.

**Important Notes**
Do not use this product if you have a known allergy to magnesium. Store away from light in a cool, dry place. Due to EU regulatory classification for colloidal solutions, this product is not marketed or claimed as a medicine, food supplement, or cosmetic. We encourage you to explore the potential application areas of colloidal substances through other reliable information channels.`,ingredient_reference:`**Colloidal Magnesium (Nano-Scale)**
Colloidal magnesium is not a magnesium compound, but rather 99.9% pure metallic magnesium processed via a specialized electrolysis technique into nano-scale atomic clusters. These minute particles carry a faint charge and are stably suspended in pure water. This form is designed to provide a highly bioavailable form of elemental magnesium, whose submicroscopic size may facilitate contact and utilization during topical application. It is most suitable for those seeking localized magnesium support via a topical route. Within the entire formula, it is the sole active substance, its efficacy reliant on ultra-high purity and its unique physical state of dispersion.

**Double-Purified Water**
This product uses ultra-pure water treated through double distillation combined with reverse osmosis filtration technology, achieving an extremely high level of purity. Here, it is not merely a solvent but serves as the carrier medium for the colloidal system. Its exceptionally low impurity content ensures the stability of the nano-magnesium particles, preventing unnecessary aggregation or reactions. This water itself contains no minerals; its role is to create a pure environment allowing the magnesium particles to fully express their properties. It embodies the foundational concept of the formula: removing all non-essential interference to let the core ingredient be clearly presented.`}}},{name:"Mannayan Kolloidales Magnesium 500 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Magnesium-500-ml/011174",price:["29,90 €"],product_number:"011174",quantity:[],image_url:"https://mannayan.com/media/d8/fa/f4/1643291182/Magnesium_Kolloidal_500_ml_26.01.2022.jpg?ts=1643291182",image_local:"images/Magnesium_Kolloidal_500_ml_26.01.2022.jpg",content:{cn:{label:`曼纳扬胶体镁
500毫升
纳米级纯净镁液
支持神经肌肉功能
促进能量代谢
辅助放松与睡眠
外用局部涂抹
仅含双重蒸馏纯净水与99.9%纯镁
无添加，无残留`,short_description:`有时，身体的紧绷感挥之不去，肌肉仿佛记住了压力，难以真正放松。这种状态不仅影响休息，也消耗着日常的精力。

曼纳扬胶体镁提供了一种纯净直接的镁元素补充方式。它以纳米级的胶体形态悬浮于双重蒸馏的纯净水中，性质温和，适合局部外用。这种形式旨在让镁元素更易于被局部组织接触利用。

产品仅由两种成分构成：经过双重蒸馏与反渗透过滤的纯净水，以及纯度高达99.9%的镁。不含任何遗传工程成分，配方极致简洁。每瓶容量为500毫升，建议外用，每次局部涂抹1至2滴。`,long_description:`当肌肉在一天结束后仍感到僵硬酸胀，或是思绪在夜晚难以平静下来，这常常是身体发出的一种细微信号，提示着某种基础元素的平衡可能需要关注。镁，作为体内数百种酶反应的必需矿物质，参与着从能量产生到神经信号传递的诸多核心过程。现代生活的节奏和饮食方式，有时让我们与这种天然矿物质的充足摄入之间产生了距离。

**食物态技术与递送形式**
曼纳扬胶体镁并非普通的镁化合物溶液。它通过特殊的电解工艺制备，将纯度99.9%的镁转化为纳米级别的胶体颗粒。这些微小的原子簇带微弱电荷，稳定地悬浮于双重净化过的纯净水中，形成一种高度分散的体系。其颗粒细小到无法被普通滤纸截留，这种物理形态是传统离子溶液或化合物所不同的。产品在制造过程中还融合了谐波频率应用技术，这是其独特工艺的一部分。

**一个简洁而完整的体系**
这款产品的体系建立在“极简”与“纯净”之上。整个配方只包含两个部分：作为载体的超纯水，和作为活性物质的超高纯镁。胶体技术使得镁能以一种独特的物理状态存在，避免了需要其他化学络合物或添加剂来维持稳定。这种设计理念回归本质，让镁元素本身的性质得以凸显，旨在减少身体处理复杂化合物时的负担，专注于矿物质本身的补充。

**适合哪些生活情境**
它适合那些寻求简单、直接外用矿物质补充方式的人。例如，经常感到局部肌肉紧张、想要在运动后针对特定肌群进行舒缓护理、或是偏好极致纯净配方、对口服补充剂有顾虑的个体。它也适用于那些欣赏传统自然疗法中胶体应用理念，并希望在现代产品中体验这一形式的人们。

**纯净与成分完整性**
纯净是这款产品的基石。成分列表简短到只有两行：双重蒸馏并经反渗透过滤的纯净水，以及99.9%纯度的镁金属。没有防腐剂，没有稳定剂，没有香料，也明确不含遗传工程改造的成分。这种坦诚的配方让使用者对自己接触到的物质一清二楚。生产在德国完成，注重工艺细节。

**健康管理者与经销商视角**
对于关注整体健康方案的专业人士而言，这款产品可作为外部护理方案的一个组成部分。其胶体形态和局部使用方式，提供了一种不同于口服镁补充剂的路径。它可以被纳入旨在支持局部放松与舒适度的整体方案中，与其他生活方式建议相辅相成。其简单的成分构成也使得它易于向追求成分透明的客户进行说明。

**用法与剂量**
建议用于外部局部护理。取1至2滴，直接涂抹于清洁的皮肤区域，轻轻按摩至吸收。请避开眼睛及黏膜部位。由于是局部外用，其作用方式与口服补充剂不同，旨在针对应用区域。

**重要提示**
请将产品置于阴凉、干燥、避光处保存，并放在儿童无法触及的地方。如果您已知对镁有过敏反应，请勿使用本产品。本品为胶体溶液，根据欧盟法规，不作为药品、食品补充剂或化妆品进行使用。关于胶体物质的更多特性与应用信息，建议参考相关的专业资料与书籍。`,ingredient_reference:`**胶体镁**
胶体镁是纯度高达99.9%的金属镁经特殊电解工艺制成的纳米级颗粒悬浮液。这些微小的镁原子簇带微弱电荷，稳定分散于超纯水中，形成独特的胶体体系。在体内，镁是至关重要的矿物质，参与超过300种酶促反应，包括能量代谢（ATP产生）、蛋白质合成、肌肉与神经功能调节以及心率维持。这种胶体形态旨在提供一种物理性质独特的镁，其纳米尺度和高分散性可能影响其与局部组织的相互作用方式。它特别适合那些寻求传统胶体应用理念、偏好极致纯净外用配方的人群。在整个配方中，它是唯一的活性物质，依托超纯水这一纯净载体发挥作用。

**双重蒸馏纯净水**
本品使用的水经过双重蒸馏并结合反渗透过滤处理，达到极高的纯净度，作为胶体镁的唯一载体。它的作用不仅是溶解介质，更是创造一个无干扰的环境，让胶体镁颗粒能够稳定悬浮。这种处理方式去除了绝大多数可能存在的杂质、矿物质和微粒，确保了配方的基础极度洁净。对于配方完整性而言，这种超纯水是实现“仅含镁与水”这一简洁承诺的关键，它避免了其他离子或化合物可能对胶体稳定性和性质产生的影响，让使用者的关注点完全集中于镁元素本身。`},en:{label:`Mannayan Colloidal Magnesium
500 ml
Nano-Pure Magnesium Liquid
Supports Neuromuscular Function
Promotes Energy Metabolism
Aids Relaxation & Sleep
For Topical External Application
Contains Only Double-Distilled Purified Water & 99.9% Pure Magnesium
No Additives, No Residues`,short_description:`Sometimes, a lingering sense of physical tension persists, as if the muscles have memorized stress, making true relaxation difficult. This state not only affects rest but also drains daily energy.

Mannayan Colloidal Magnesium offers a pure and direct way to supplement magnesium. It is suspended in double-distilled purified water in a nano-scale colloidal form, making it gentle and suitable for topical use. This form is designed to allow magnesium to be more readily contacted and utilized by local tissues.

The product consists of only two ingredients: purified water that has undergone double distillation and reverse osmosis filtration, and magnesium with a purity of 99.9%. It contains no genetically engineered ingredients, and the formula is exceptionally simple. Each bottle contains 500 ml. It is recommended for external use, applying 1 to 2 drops topically as needed.`,long_description:`When muscles remain stiff and sore at the end of the day, or when the mind struggles to find calm at night, these are often subtle signals from the body, hinting that the balance of a fundamental element may need attention. Magnesium, an essential mineral for hundreds of enzymatic reactions in the body, is involved in numerous core processes from energy production to nerve signal transmission. The pace of modern life and dietary habits can sometimes create a gap between us and adequate intake of this natural mineral.

**Food-State Technology & Delivery Form**
Mannayan Colloidal Magnesium is not an ordinary magnesium compound solution. It is prepared through a special electrolytic process that transforms 99.9% pure magnesium into nano-scale colloidal particles. These tiny atomic clusters carry a slight charge and are stably suspended in doubly-purified water, forming a highly dispersed system. The particles are so fine they cannot be captured by ordinary filter paper—a physical form distinct from traditional ionic solutions or compounds. The manufacturing process also incorporates harmonic frequency application technology, which is part of its unique craftsmanship.

**A Simple Yet Complete System**
This product's system is built on the principles of 'minimalism' and 'purity.' The entire formula contains only two parts: ultra-pure water as the carrier and ultra-high-purity magnesium as the active substance. Colloidal technology allows the magnesium to exist in a unique physical state, eliminating the need for other chemical complexes or additives to maintain stability. This design philosophy returns to the essence, allowing the inherent properties of magnesium to shine through. It aims to reduce the body's burden of processing complex compounds, focusing instead on supplementing the mineral itself.

**Suitable For Which Life Situations**
It is suitable for those seeking a simple, direct method for topical mineral supplementation. For example, individuals who frequently experience localized muscle tension, wish to soothe specific muscle groups after exercise, prefer extremely pure formulas, or have concerns about oral supplements. It is also for those who appreciate the concept of colloidal applications in traditional natural therapies and wish to experience this form in a modern product.

**Purity & Ingredient Integrity**
Purity is the cornerstone of this product. The ingredient list is brief, only two lines: double-distilled, reverse-osmosis filtered purified water, and 99.9% pure magnesium metal. No preservatives, no stabilizers, no fragrances, and it explicitly contains no genetically engineered ingredients. This transparent formulation allows users to be completely clear about what they are applying. Production takes place in Germany, with attention to detail in craftsmanship.

**Perspective for Health Practitioners & Distributors**
For professionals focused on holistic health protocols, this product can serve as a component of an external care regimen. Its colloidal form and topical application offer a pathway distinct from oral magnesium supplements. It can be integrated into holistic protocols aimed at supporting local relaxation and comfort, complementing other lifestyle recommendations. Its simple ingredient composition also makes it easy to explain to clients who value ingredient transparency.

**Usage & Dosage**
Recommended for external topical care. Apply 1 to 2 drops directly to clean skin areas and massage gently until absorbed. Avoid contact with eyes and mucous membranes. As a topical application, its mode of action differs from oral supplements and is intended for the applied area.

**Important Notes**
Store the product in a cool, dry place away from light and out of reach of children. Do not use this product if you have a known allergic reaction to magnesium. This product is a colloidal solution and, according to EU regulations, is not intended for use as a medicine, food supplement, or cosmetic. For more information on the properties and applications of colloidal substances, consulting relevant professional literature and books is recommended.`,ingredient_reference:`**Colloidal Magnesium**
Colloidal Magnesium is a suspension of nano-scale particles made from 99.9% pure metallic magnesium through a special electrolytic process. These tiny magnesium atomic clusters carry a slight charge and are stably dispersed in ultra-pure water, forming a unique colloidal system. In the body, magnesium is a crucial mineral involved in over 300 enzymatic reactions, including energy metabolism (ATP production), protein synthesis, regulation of muscle and nerve function, and heart rhythm maintenance. This colloidal form aims to provide magnesium with unique physical properties; its nano-scale size and high dispersibility may influence how it interacts with local tissues. It is particularly suitable for those seeking traditional colloidal application concepts and preferring extremely pure topical formulas. In the entire formulation, it is the sole active substance, relying on ultra-pure water as its pristine carrier.

**Double-Distilled Purified Water**
The water used in this product undergoes double distillation combined with reverse osmosis filtration, achieving an extremely high level of purity, serving as the sole carrier for the colloidal magnesium. Its role is not just as a solvent but to create an interference-free environment where the colloidal magnesium particles can remain stably suspended. This treatment removes the vast majority of potential impurities, minerals, and particulates, ensuring the foundation of the formula is exceptionally clean. For formula integrity, this ultra-pure water is key to fulfilling the simple promise of 'containing only magnesium and water.' It prevents other ions or compounds from potentially affecting the stability and properties of the colloid, allowing the user's focus to remain entirely on the magnesium element itself.`}}},{name:"Mannayan Kolloidales Platin 10ppm (100 ml)",url:"https://mannayan.com/Mannayan-Kolloidales-Platin-10ppm-100-ml/011161",price:["12,90 €"],product_number:"011161",quantity:[],image_url:"https://mannayan.com/media/e3/d9/37/1643310455/Platin_Kolloidal_100_ml_2_26.01.2022.jpg?ts=1643310455",image_local:"images/Platin_Kolloidal_100_ml_2_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶态铂 10ppm (100毫升)
纳米级铂金悬浮液
• 支持能量代谢与活力
• 促进内在平衡与和谐
• 辅助思维清晰与专注
• 纯净配方，无负担吸收
100毫升瓶装 • 10ppm浓度 • 99.9%高纯铂金 • 双重蒸馏过滤纯水`,short_description:`有时，即使休息充足，身体仍感觉能量不足，思绪难以集中，仿佛内在的节奏有些失衡。这不是需要强效刺激，而是需要一种温和、根本性的支持，帮助身体找回自己的节律。

Mannayan胶态铂提供了一种独特的支持方式。它并非化学合成物，而是将99.9%纯度的铂金，通过高压等离子工艺处理成纳米级的微小粒子，悬浮于双重蒸馏过滤的纯净水中。这种形态旨在让铂金以更接近自然的方式与身体互动。

铂金作为一种稀有金属，其独特的物理性质被认为能对身体的能量场产生微妙的影响。这款产品以极低的10ppm浓度呈现，旨在提供一种温和而非侵入性的日常支持，帮助维持内在环境的和谐与稳定。

每瓶100毫升，采用纯净配方，仅含高纯铂金与纯水。适合日常喷洒使用，为寻求整体平衡与根本调理的日常健康管理提供一种纯净的选择。`,long_description:`在快节奏的生活中，身体和思绪有时会发出信号：持续的疲惫感挥之不去，即使睡眠时间足够；注意力像蒙上了一层薄雾，难以凝聚；或是感觉整体的活力水平达不到内心的期望。这些感受常常指向更深层的需求——一种对内在平衡与和谐状态的根本性支持。

**纳米级递送技术**
Mannayan胶态铂的核心在于其独特的物理形态。它采用高压等离子工艺制备，而非传统的电解法。这一工艺产生了极其微小且带有电荷的铂金胶体粒子，其尺寸达到纳米级别，甚至无法被普通显微镜观测或纸质过滤器截留。这些微小的铂金粒子群稳定地悬浮于双重蒸馏并经渗透过滤的纯水中，形成一种高度分散的胶体溶液。这种形态旨在最大化粒子与身体相互作用的表面积，同时确保其纯净性与生物可利用性。

**协同作用的纯净体系**
产品的体系极为简洁而专注，仅由两个部分组成：作为载体的极致纯净水，以及作为活性物质的高纯度铂金。双重蒸馏与渗透过滤确保了水的纯净，去除了绝大多数杂质。99.9%纯度的铂金则保证了活性成分的一致性。这种极简的二元配方，避免了任何不必要的添加剂，让铂金本身的特性得以纯粹地展现。其作用机制并非通过直接的化学反应，而是通过铂金纳米粒子所携带的微电荷及其物理特性，与人体内同样以胶体状态存在的生命液（如血液、淋巴液）产生潜在的共振与调和，支持身体自身维持平衡的能力。

**适合的人群与情境**
这款产品适合那些在忙碌生活中，感到需要为身心状态提供额外基础支持的人。它适合那些偏好极简、纯净配方，希望从根本层面进行调理，而非仅仅针对表面症状的个体。当感到日常压力影响了整体的能量流动与思维清晰度时，当寻求一种温和、非刺激性的方式来辅助日常的平衡与恢复时，胶态铂可以作为一种探索性的选择。它也适合那些对传统营养补充途径有充分了解，并希望探索矿物质在胶体形态下不同作用方式的人。

**纯净与成分完整性承诺**
纯净是这款产品的基石。成分列表一目了然：纯水，纯铂金。无基因工程成分，无化学稳定剂，无防腐剂，无添加香料或色素。生产在德国进行，采用高压等离子这一精密的物理工艺，旨在保留铂金的天然特性。产品还经过了谐波频率应用的加持，这代表了生产过程中对能量品质的进一步关注。从原料的99.9%高纯度，到制备用水的多重净化，每一个环节都指向成分的完整性与能量的纯净度。

**健康管理者视角：背景与搭配**
从整体健康管理的角度看，胶态铂被视为一种基础性的调节剂。许多自然疗法实践者和能量工作者关注身体生物场的平衡，而铂金因其稳定的振动特性常被用于此领域。在健康方案中，它可以与其他旨在支持能量水平、情绪平衡或认知功能的自然疗法相辅相成，例如与适应原草药、优质脂肪酸或冥想练习结合，共同构建一个多层次的支持体系。它的作用温和，旨在为身体创造更适宜的内在环境，从而更好地响应其他调理措施。

**用法与剂量**
建议外用，局部喷洒。每日可使用1至2次，每次取1至2滴于所需部位。也可喷洒于手腕内侧、颈部或直接吸入其细微雾气。100毫升的包装便于日常携带与使用。请存放于阴凉、干燥、避光处，以保持产品稳定性。产品另有带喷雾头的包装可选，方便直接使用。

**重要提示**
本品为胶体矿物质溶液，不可替代药品或常规膳食。对铂金有已知过敏反应者请勿使用。请置于儿童无法触及之处。使用前如有任何健康状况疑虑，建议咨询您的健康顾问。产品的效果因人而异，关注自身感受的细微变化是重要的指南。`,ingredient_reference:`**胶态铂（纳米级）**
胶态铂是将高纯度铂金通过物理方法分解为纳米级微小粒子，并稳定悬浮于纯水中形成的胶体溶液。它不是铂的化合物，而是金属铂的原子簇形态，每个粒子携带微弱的电荷。在体内，这些纳米粒子因其微小的尺寸和电荷，可能与体液的胶体系统（如血液和淋巴）产生物理层面的相互作用，影响能量传递与信息交换的微环境。所用铂金纯度高达99.9%，确保了成分的单一性与高品质。它最适合那些寻求通过物理能量层面而非生化途径来支持整体平衡、清晰度与活力的人群。在整个配方中，它是唯一的活性物质，其效力依赖于极高的纯净度与纳米级的分散技术。

**双重蒸馏渗透过滤纯水**
这并非普通的水，而是经过双重蒸馏并结合反渗透过滤处理的极致纯净水，其导电率极低（约0.3-0.5 ppm）。它在此配方中扮演着至关重要的双重角色：既是胶态铂纳米粒子的悬浮载体，也是能量与信息的纯净传导介质。水的极致纯净确保了不会引入任何杂质干扰铂金粒子的特性与电荷状态，为整个溶液提供了稳定、中性的基础。它最适合所有对配方纯净度有极高要求的使用者。在配方中，它与高纯铂金共同构成了一个极简而高效的二元体系，水的品质直接决定了胶体溶液的稳定性和生物相容性。`},en:{label:`Mannayan Colloidal Platinum 10ppm (100ml)
Nano-Scale Platinum Suspension
• Supports energy metabolism and vitality
• Promotes internal balance and harmony
• Aids mental clarity and focus
• Pure formula, effortless absorption
100ml bottle • 10ppm concentration • 99.9% high-purity platinum • Double-distilled, filtered pure water`,short_description:`Sometimes, even with adequate rest, the body can feel low on energy, and the mind struggles to focus, as if its inner rhythm is slightly out of sync. This isn't a call for strong stimulation, but for a gentle, foundational support to help the body rediscover its own natural cadence.

Mannayan Colloidal Platinum offers a unique form of support. It is not a chemical compound, but 99.9% pure platinum processed into nano-scale particles via high-pressure plasma technology, suspended in double-distilled, filtered pure water. This form is designed to allow the platinum to interact with the body in a way that is closer to nature.

As a precious metal, platinum's unique physical properties are believed to subtly influence the body's energy field. This product is presented at an extremely low 10ppm concentration, intended to provide gentle, non-invasive daily support to help maintain harmony and stability within the internal environment.

Each 100ml bottle features a pure formula containing only high-purity platinum and pure water. Suitable for daily spray use, it offers a pristine choice for daily wellness management focused on holistic balance and fundamental conditioning.`,long_description:`In our fast-paced lives, the body and mind sometimes send signals: persistent fatigue lingers even with sufficient sleep; attention feels veiled in a haze, difficult to sharpen; or overall vitality doesn't meet inner expectations. These feelings often point to a deeper need—a foundational support for a state of internal balance and harmony.

**Nano-Scale Delivery Technology**
The core of Mannayan Colloidal Platinum lies in its unique physical form. It is prepared using high-pressure plasma technology, not traditional electrolysis. This process creates extremely minute, charged platinum colloid particles at the nano-scale, so small they cannot be observed by ordinary microscopes or captured by paper filters. These tiny platinum particle clusters are stably suspended in double-distilled, osmosis-filtered pure water, forming a highly dispersed colloidal solution. This form aims to maximize the surface area for interaction with the body while ensuring purity and bioavailability.

**A Pure System of Synergy**
The product's system is exceptionally simple and focused, consisting of only two components: the carrier—ultra-pure water—and the active substance—high-purity platinum. Double distillation and osmosis filtration ensure the water's purity, removing the vast majority of impurities. The 99.9% purity platinum guarantees consistency of the active ingredient. This minimalist binary formula avoids any unnecessary additives, allowing the inherent properties of platinum to be expressed purely. Its mechanism of action is not through direct chemical reaction, but potentially through the micro-charge and physical characteristics carried by the platinum nanoparticles, resonating and harmonizing with the body's own colloidal life fluids (such as blood and lymph), supporting the body's innate ability to maintain balance.

**Suitable Individuals and Contexts**
This product is suitable for those in busy lives who feel the need for additional foundational support for their physical and mental state. It suits individuals who prefer minimalist, pure formulas and wish to address wellness from a fundamental level, not merely surface symptoms. When daily stress seems to affect overall energy flow and mental clarity, or when seeking a gentle, non-stimulating way to assist daily balance and recovery, Colloidal Platinum can be an exploratory choice. It is also suitable for those well-versed in traditional nutritional supplementation who wish to explore the different modes of action of minerals in colloidal form.

**Commitment to Purity and Ingredient Integrity**
Purity is the cornerstone of this product. The ingredient list is straightforward: pure water, pure platinum. No genetically engineered ingredients, no chemical stabilizers, no preservatives, no added fragrances or colors. Manufactured in Germany using the precise physical process of high-pressure plasma technology, it aims to preserve platinum's natural characteristics. The product is also enhanced with applied harmonic frequencies, representing further attention to energetic quality during production. From the 99.9% high purity of the raw material to the multi-stage purification of the preparation water, every step points to ingredient integrity and energetic purity.

**The Wellness Manager's Perspective: Context and Pairing**
From a holistic wellness management perspective, Colloidal Platinum is viewed as a foundational regulator. Many naturopathic practitioners and energy workers focus on the balance of the body's biofield, and platinum is often used in this field due to its stable vibrational properties. Within a wellness regimen, it can complement other natural approaches aimed at supporting energy levels, emotional balance, or cognitive function—such as adaptogenic herbs, high-quality fatty acids, or meditation practices—together building a multi-layered support system. Its action is gentle, intended to create a more conducive internal environment for the body to better respond to other conditioning measures.

**Usage and Dosage**
Recommended for topical, local spray application. Can be used 1 to 2 times daily, applying 1 to 2 drops to the desired area. It can also be sprayed on the inner wrist, neck, or its fine mist can be inhaled directly. The 100ml packaging is convenient for daily carry and use. Store in a cool, dry place away from light to maintain product stability. A version with a spray head is also available for direct use.

**Important Notes**
This product is a colloidal mineral solution and is not a substitute for medication or a regular diet. Do not use if you have a known allergy to platinum. Keep out of reach of children. If you have any health concerns before use, consult your wellness advisor. Effects vary from person to person; paying attention to subtle changes in your own feelings is an important guide.`,ingredient_reference:`**Colloidal Platinum (Nano-Scale)**
Colloidal Platinum is a colloidal solution formed by decomposing high-purity platinum into nano-scale particles via physical methods and stably suspending them in pure water. It is not a platinum compound, but a cluster form of metallic platinum atoms, with each particle carrying a weak charge. Within the body, these nanoparticles, due to their minute size and charge, may interact at a physical level with the body's colloidal systems (such as blood and lymph), influencing the microenvironment of energy transfer and information exchange. The platinum used is of 99.9% purity, ensuring ingredient singularity and high quality. It is most suitable for those seeking to support overall balance, clarity, and vitality through physical energetic pathways rather than biochemical ones. In the entire formula, it is the sole active substance, its efficacy reliant on extreme purity and nano-scale dispersion technology.

**Double-Distilled, Osmosis-Filtered Pure Water**
This is not ordinary water, but ultra-pure water treated through double distillation combined with reverse osmosis filtration, with extremely low conductivity (approx. 0.3-0.5 ppm). It plays a crucial dual role in this formula: both as the suspension medium for the colloidal platinum nanoparticles and as a pure conduit for energy and information. The water's extreme purity ensures no impurities are introduced that could interfere with the properties or charge state of the platinum particles, providing a stable, neutral foundation for the entire solution. It is most suitable for all users with extremely high requirements for formula purity. In the formula, together with high-purity platinum, it constitutes a minimalist yet efficient binary system; the quality of the water directly determines the stability and biocompatibility of the colloidal solution.`}}},{name:"Mannayan Kolloidales Platin 10ppm (250 ml)",url:"https://mannayan.com/Mannayan-Kolloidales-Platin-10ppm-250-ml/011163",price:["19,90 €"],product_number:"011163",quantity:[],image_url:"https://mannayan.com/media/b0/94/a6/1643310163/Platin_Kolloidal_250_ml_26.01.2022.jpg?ts=1643310163",image_local:"images/Platin_Kolloidal_250_ml_26.01.2022.jpg",content:{cn:{label:`曼纳延胶体铂 10ppm
支持内在平衡的纯净铂能量
• 支持细胞能量代谢 • 促进内在平衡 • 维持健康活力 • 纯净配方，仅含铂与超纯水
250毫升 / 10ppm浓度
99.9%高纯铂 / 高压等离子体制备 / 无转基因 / 无添加剂`,short_description:`你是否感觉日常的忙碌消耗了你的精力，需要一种纯粹的方式来支持身体的自然节奏？现代生活的各种因素，有时会让身体的内在平衡面临挑战。

曼纳延胶体铂提供了一种极简而专注的支持。它并非化学合成物，而是将99.9%纯度的铂金属，通过高压等离子技术制成纳米级的微小粒子，悬浮于双重蒸馏并反渗透过滤的超纯水中。这些带电荷的胶体粒子，其形态与人体内天然的生物活性物质有相似之处。

它旨在为身体的自然防御与能量系统提供一种温和的辅助，帮助维持内在的稳定与活力，而不干扰周围环境。

每瓶250毫升，铂浓度为10ppm（百万分之十）。配方纯净至极，仅含铂与超纯水，无任何添加剂、无转基因成分。在德国通过高压等离子工艺精心制备。`,long_description:`当持续的疲劳感挥之不去，或是感觉身体应对日常挑战的韧性需要一些额外的支持时，我们常常会从外界寻找一种纯粹而根本的调理方式。身体是一个精密的系统，维持其内在的平衡与顺畅运行是健康的基础。

**食物态技术与递送**
这款产品采用胶体形态技术。胶体铂并非溶解的离子，而是由极少数铂原子组成的、带微弱电荷的亚微观粒子群，稳定地悬浮在超纯水中。其粒子尺寸达到纳米级别，甚至无法被普通显微镜观测或纸质过滤器截留。这种独特的物理状态，通过高压等离子体工艺实现（而非传统的电解法），确保了粒子的超微尺寸与高电荷特性，使其更容易在体内进行传递与利用。

**完整的作用体系**
铂作为一种珍贵的金属元素，在胶体形态下，其核心作用在于支持细胞层面的能量代谢过程。它可以被视为一种微小的能量催化剂，帮助优化细胞利用能量的效率。当细胞的能量工厂运转得更顺畅时，整个身体的活力与修复能力便有了更坚实的基础。这种支持是系统性的，从维持日常精力到支持身体的自然防御机制，它作用于根本，促进整体的平衡与和谐。

**适合的人群**
它适合那些在快节奏生活中，寻求一种纯净、非侵入性方式来补充日常能量消耗、支持身体恢复力的人。也适合那些注重从根本调理，偏好使用成分极简、工艺考究的自然健康产品，作为其整体健康管理方案一部分的实践者。

**纯净与成分完整性**
纯净是这款产品的基石。整个配方仅由两种物质构成：99.9%纯度的铂金属，以及经过双重蒸馏和反渗透过滤的超纯水。没有任何形式的填料、稳定剂、防腐剂或调味剂。它不含转基因成分，其制备过程旨在保留铂最本质的特性。这种极简主义确保了您摄入的是最纯粹的铂能量，没有任何不必要的干扰。

**健康管理者与经销商：背景与搭配**
曼纳延品牌专注于高品质胶体矿物质的制备，其高压等离子技术代表了该领域的专业水准。对于健康管理者而言，胶体铂可以作为支持能量代谢和抗氧化防御体系的方案之一。它可以与其他注重基础营养补充（如维生素、矿物质）或支持特定系统（如消化、睡眠）的方案搭配使用，共同构建一个多层次的整体健康支持框架。建议根据个人整体状况进行个性化搭配。

**用法与剂量**
建议外用，局部使用1至2滴。请将产品存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。

**重要提示**
对铂金属有过敏反应者请勿使用。本品为胶体溶液，根据欧盟法规，不作为药品、食品补充剂或化妆品进行使用。有关胶体物质的更多应用信息，建议您通过互联网、专业书籍等可靠信息来源自行查阅了解。`,ingredient_reference:`**胶体铂（10ppm）**
胶体铂是99.9%高纯度铂金属的纳米级悬浮液，而非化学化合物。在体内，这些带电荷的亚微观粒子群主要参与支持细胞线粒体的能量（ATP）产生过程，作为一种辅助因子优化电子传递链的效率。它所采用的高压等离子体制备工艺，确保了粒子的超微尺寸与高表面电荷，这被认为是其生物利用度和活性的关键。它特别适合那些感觉能量水平不足、希望从细胞层面支持代谢活力的人群。在整个配方中，它是唯一的功能性成分，其作用依赖于超纯水作为纯净、惰性的载体，确保其稳定性和纯净度。

**超纯水（双重蒸馏及反渗透过滤）**
超纯水是经过双重蒸馏和反渗透过滤处理的水，去除了几乎所有的矿物质、杂质和污染物。在配方中，它扮演着纯净载体的角色，为胶体铂粒子提供稳定悬浮的介质，而不引入任何可能干扰铂本身特性的其他离子或物质。其极低的导电性和纯净度，有助于维持胶体粒子电荷的稳定性，防止其聚集或发生化学反应。它确保了最终产品是铂能量最纯粹、最直接的呈现，没有任何背景“噪音”。`},en:{label:`Mannayan Colloidal Platinum 10ppm
Pure Platinum Energy to Support Inner Balance
• Supports cellular energy metabolism • Promotes inner equilibrium • Maintains healthy vitality • Pure formula, containing only platinum and ultrapure water
250 ml / 10ppm concentration
99.9% high-purity platinum / High-pressure plasma preparation / GMO-free / Additive-free`,short_description:`Do you feel that the busyness of daily life drains your energy, needing a pure way to support your body's natural rhythm? Various factors of modern life can sometimes challenge the body's inner balance.

Mannayan Colloidal Platinum offers a minimalist and focused form of support. It is not a chemical compound, but rather 99.9% pure platinum metal, transformed into nanoscale particles via high-pressure plasma technology, suspended in ultrapure water that has undergone double distillation and reverse osmosis filtration. These charged colloidal particles share a form similar to naturally occurring bioactive substances within the human body.

It is designed to provide gentle, auxiliary support for the body's natural defense and energy systems, helping to maintain inner stability and vitality without interfering with its surroundings.

Each bottle contains 250 ml with a platinum concentration of 10ppm (parts per million). The formula is exceptionally pure, containing only platinum and ultrapure water, with no additives, GMO ingredients, or fillers. Meticulously prepared in Germany using high-pressure plasma technology.`,long_description:`When persistent fatigue lingers, or when you feel your body's resilience in facing daily challenges could use some additional support, we often look outward for a pure and fundamental form of nourishment. The body is a precise system, and maintaining its inner balance and smooth operation is the foundation of health.

**Colloidal Technology and Delivery**
This product utilizes colloidal technology. Colloidal platinum is not dissolved ions, but rather submicroscopic clusters composed of very few platinum atoms, carrying a weak electrical charge, stably suspended in ultrapure water. The particle size is at the nanoscale, so small they cannot be observed by ordinary microscopes or captured by paper filters. This unique physical state is achieved through high-pressure plasma processing (as opposed to traditional electrolysis), ensuring ultra-fine particle size and high charge characteristics, which facilitates easier transport and utilization within the body.

**Holistic Support System**
As a precious metallic element in colloidal form, platinum's core role lies in supporting cellular-level energy metabolism processes. It can be seen as a microscopic energy catalyst, helping to optimize the efficiency with which cells utilize energy. When the cell's energy factories operate more smoothly, the entire body's vitality and repair capabilities gain a more solid foundation. This support is systemic, from sustaining daily energy levels to supporting the body's natural defense mechanisms. It works at a fundamental level, promoting overall balance and harmony.

**Who It's For**
It is suitable for those in a fast-paced life seeking a pure, non-invasive way to replenish daily energy expenditure and support the body's resilience. It is also for those who focus on fundamental nourishment, preferring to use natural health products with minimalist ingredients and meticulous craftsmanship as part of their overall wellness management practice.

**Purity and Ingredient Integrity**
Purity is the cornerstone of this product. The entire formula consists of only two substances: 99.9% pure platinum metal and ultrapure water that has undergone double distillation and reverse osmosis filtration. There are no fillers, stabilizers, preservatives, or flavoring agents of any kind. It contains no genetically modified ingredients. Its preparation process is designed to preserve the most essential properties of platinum. This minimalism ensures you are receiving the purest platinum energy, without any unnecessary interference.

**For Wellness Practitioners & Distributors: Background & Synergy**
The Mannayan brand specializes in the preparation of high-quality colloidal minerals, with its high-pressure plasma technology representing professional standards in the field. For wellness practitioners, colloidal platinum can be one component of a protocol aimed at supporting energy metabolism and antioxidant defense systems. It can be combined with other protocols focused on foundational nutrition (like vitamins, minerals) or supporting specific systems (like digestion, sleep) to build a multi-layered, holistic health support framework. Personalized combination based on individual overall condition is recommended.

**Usage & Dosage**
Recommended for topical use, apply 1 to 2 drops locally. Store the product in a cool, dry place, protected from light, and out of reach of children.

**Important Notice**
Do not use if you have a known allergic reaction to platinum metal. This product is a colloidal solution and, according to EU regulations, is not intended for use as a medicine, food supplement, or cosmetic. For more information on the applications of colloidal substances, we recommend consulting reliable information sources such as the internet or professional books.`,ingredient_reference:`**Colloidal Platinum (10ppm)**
Colloidal platinum is a nanoscale suspension of 99.9% high-purity platinum metal, not a chemical compound. Within the body, these charged submicroscopic particle clusters primarily participate in supporting the cellular mitochondrial energy (ATP) production process, acting as a co-factor to optimize the efficiency of the electron transport chain. The high-pressure plasma preparation process used ensures the particles' ultra-fine size and high surface charge, which are considered key to its bioavailability and activity. It is particularly suitable for those who feel their energy levels are insufficient and wish to support metabolic vitality at the cellular level. Within the entire formula, it is the sole functional ingredient. Its efficacy relies on ultrapure water as a pure, inert carrier, ensuring its stability and purity.

**Ultrapure Water (Double Distilled & Reverse Osmosis Filtered)**
Ultrapure water is water that has undergone double distillation and reverse osmosis filtration, removing virtually all minerals, impurities, and contaminants. In the formula, it serves as a pure carrier, providing a stable medium for the suspension of colloidal platinum particles without introducing any other ions or substances that might interfere with platinum's inherent properties. Its extremely low conductivity and high purity help maintain the stability of the colloidal particle charge, preventing aggregation or chemical reactions. It ensures the final product is the purest, most direct presentation of platinum energy, without any background 'noise'.`}}},{name:"Mannayan Kolloidales Platin 10ppm (500 ml)",url:"https://mannayan.com/Mannayan-Kolloidales-Platin-10ppm-500-ml/011164",price:["29,90 €"],product_number:"011164",quantity:[],image_url:"https://mannayan.com/media/bb/73/ef/1643310009/Platin_Kolloidal_500_ml_26.01.2022.jpg?ts=1643310009",image_local:"images/Platin_Kolloidal_500_ml_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体铂 10ppm (500毫升)
微细铂粒子悬浮液
• 支持能量代谢与活力 • 促进内在平衡与和谐 • 维持细胞健康功能 • 辅助身体自然防御机制 • 纯净配方，易于吸收
每瓶500毫升 • 浓度10ppm • 高电压等离子体制备 • 双重蒸馏与反渗透过滤纯水 • 99.9%高纯度铂`,short_description:`你是否感觉日常的节奏让你身心俱疲，需要一种纯粹而温和的支持来恢复内在的平衡与活力？现代生活的压力和环境因素可能悄然消耗着身体的能量储备，让人感到难以恢复应有的状态。

Mannayan胶体铂提供了一种独特的支持方式。它不是化学合成的化合物，而是将99.9%高纯度的铂金属，通过高电压等离子体技术处理成极其微小的粒子，悬浮于双重净化的纯水中。这种微细的胶体形态，旨在以更自然的方式与身体互动。

传统与现代的智慧都认识到，某些微量金属元素在维持生命系统的和谐与功能方面扮演着角色。铂以其独特的稳定性而闻名，这款产品旨在将这种特性以生物可利用的形式提供。

每瓶500毫升，铂浓度为10ppm（百万分之十）。配方极致纯净，仅含双重蒸馏并经反渗透过滤的纯水，以及高纯度铂金属。无任何添加剂、防腐剂或转基因成分。`,long_description:`在持续的快节奏和多方需求中，身体有时会发出需要额外支持的信号——不是剧烈的警报，而是那种持久的疲惫感，或是感觉恢复能力不如从前。这常常是内在系统寻求重新平衡的细微呼唤。

**高电压等离子体技术与胶体形态**
这款产品的核心在于其制备工艺。不同于常见的电解法，Mannayan采用高电压等离子体技术来生成胶体铂。这一过程产生了异常微小且带有电荷的铂粒子，其尺寸达到纳米级别，甚至无法被普通显微镜观测或纸质过滤器截留。这些微细的粒子均匀悬浮于高度纯净的水中，形成一种稳定的胶体溶液。这种形态旨在提高粒子的生物可利用性，使其能够更顺畅地在体内移动和发挥作用。

**一个协同的体系**
产品的力量源于其极简与纯粹。高纯度铂金属提供了稳定的元素基础，而先进的制备技术确保了这些元素以最利于细胞识别的物理状态存在。微小的带电粒子与双重净化的水性介质相结合，创造出一个和谐的系统。这个系统不是强行干预，而是旨在温和地补充和支持身体自身就存在的、类似胶体溶液的环境——如血液和淋巴液，它们本身就是承载营养物质、信号分子和免疫细胞的关键介质。产品的作用思路是融入并支持这些内在的液体环境，帮助维持其正常的功能与平衡。

**适合的人群**
这款产品适合那些在繁忙生活中寻求一种纯净、基础性支持的人。它适合感觉需要为身体能量代谢提供温和辅助的个体；适合注重整体平衡，希望从元素层面进行调理的养生实践者；也适合那些对补充剂成分有极高要求，偏好极简、无添加配方的人。它适用于希望在日常健康管理中融入传统智慧与现代科技结合方案的人。

**纯净与成分完整性**
纯净是这款产品的基石。瓶中所含，仅有两种成分：经过双重蒸馏和反渗透过滤的“纯水”，以及纯度高达99.9%的铂金属。没有防腐剂，没有稳定剂，没有调味剂，也没有任何来自转基因技术的成分。这种极简主义确保了您摄入的是尽可能接近本源的物质。生产在德国进行，严格的质量控制贯穿始终。

**用法与剂量**
建议外用，局部使用。每次取1至2滴，涂抹于所需部位的皮肤上。由于是高度浓缩的胶体溶液，少量即可。请将产品存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。

**重要提示**
已知对铂金属过敏者请勿使用。本品为胶体溶液，根据欧盟法规，不作为药品、食品补充剂或化妆品进行销售和使用。有关胶体物质的传统与现代应用信息，建议您通过专业书籍、权威网站等独立信息渠道进行深入了解。开启后请注意妥善保存，以维持产品的最佳状态。`,ingredient_reference:`**胶体铂（来自99.9%纯度铂）**
胶体铂是金属铂以纳米级微观粒子群的形式，稳定悬浮于纯水中的体系。它不是溶解的离子，而是保留了金属元素物理特性的超微细颗粒。在体内，这种独特的胶体形态可能有助于其与细胞环境进行更温和的互动。其所用的铂原料纯度极高（99.9%），最大限度地减少了其他金属杂质的干扰。这种形式特别适合寻求通过稀有金属元素进行基础性、系统性支持的人群。在整个配方中，它是唯一的功能性成分，其效力完全依赖于高纯度原料和先进的等离子体制备技术所赋予的微细、带电的物理状态。

**双重净化纯水（载体介质）**
这里的水并非普通溶剂，而是经过双重蒸馏并结合反渗透过滤处理的高度纯净水。它的作用是作为胶体铂粒子的理想载体和悬浮介质。极高的纯度确保了不会引入任何不必要的矿物质或杂质，从而让铂粒子能够保持稳定分散的状态，不会发生不必要的聚集或反应。这种介质模仿了体内细胞外液的低杂质环境，旨在让有效成分能够顺畅传递。它最适合那些重视产品基底绝对纯净度的使用者。在配方中，它与胶体铂共同构成了一个完整、和谐且极简的二元系统，水质本身的纯净度直接关系到整个产品体系的稳定性和品质。`},en:{label:`Mannayan Colloidal Platinum 10ppm (500ml)
Ultra-Fine Platinum Particle Suspension
• Supports Energy Metabolism & Vitality • Promotes Internal Balance & Harmony • Maintains Healthy Cellular Function • Assists the Body's Natural Defense Mechanisms • Pure Formula, Easy Absorption
500ml per bottle • 10ppm Concentration • High-Voltage Plasma Preparation • Double-Distilled & Reverse Osmosis Purified Water • 99.9% High-Purity Platinum`,short_description:`Do you feel the pace of daily life draining your body and mind, in need of a pure and gentle support to restore inner balance and vitality? The stresses of modern living and environmental factors can quietly deplete the body's energy reserves, making it difficult to regain your natural state.

Mannayan Colloidal Platinum offers a unique form of support. It is not a chemically synthesized compound. Instead, 99.9% high-purity platinum metal is processed using high-voltage plasma technology into exceptionally fine particles, suspended in doubly-purified water. This ultra-fine colloidal form is designed to interact with the body in a more natural way.

Both traditional and modern wisdom recognize that certain trace metallic elements play a role in maintaining the harmony and function of living systems. Platinum is renowned for its unique stability, and this product aims to deliver this quality in a bioavailable form.

Each 500ml bottle contains platinum at a concentration of 10ppm (parts per million). The formula is exceptionally pure, containing only double-distilled, reverse-osmosis purified water and high-purity platinum metal. It contains no additives, preservatives, or genetically modified ingredients.`,long_description:`Amidst the relentless pace and multiple demands of life, the body sometimes sends signals that it needs extra support—not a loud alarm, but a persistent feeling of fatigue, or a sense that your resilience isn't what it used to be. This is often a subtle call from your internal systems seeking to rebalance.

**High-Voltage Plasma Technology & Colloidal Form**
The core of this product lies in its preparation method. Unlike common electrolysis methods, Mannayan uses high-voltage plasma technology to generate colloidal platinum. This process creates exceptionally tiny, charged platinum particles at the nanoscale—so small they cannot be observed with a standard microscope or captured by a paper filter. These fine particles are uniformly suspended in highly purified water, forming a stable colloidal solution. This form is designed to enhance the particles' bioavailability, allowing them to move and function more smoothly within the body.

**A Synergistic System**
The product's strength comes from its minimalism and purity. High-purity platinum metal provides a stable elemental foundation, while the advanced preparation technology ensures these elements exist in a physical state most conducive to cellular recognition. The tiny, charged particles combined with the doubly-purified aqueous medium create a harmonious system. This system is not about forceful intervention, but aims to gently supplement and support the body's own inherent, colloidal-like environments—such as blood and lymph, which are themselves key media for carrying nutrients, signaling molecules, and immune cells. The product's approach is to integrate with and support these internal fluid environments, helping to maintain their normal function and balance.

**Who It's For**
This product is suitable for those seeking a pure, foundational form of support amidst a busy life. It is for individuals who feel they could benefit from gentle assistance for the body's energy metabolism; for wellness practitioners focused on holistic balance who wish to address well-being at an elemental level; and for those with extremely high standards for supplement ingredients, preferring minimalist, additive-free formulas. It is for anyone looking to incorporate a solution that blends traditional wisdom with modern technology into their daily health regimen.

**Purity & Ingredient Integrity**
Purity is the cornerstone of this product. The bottle contains only two ingredients: 'Pure Water' that has undergone double distillation and reverse osmosis filtration, and platinum metal with a purity of 99.9%. There are no preservatives, stabilizers, flavorings, or ingredients derived from genetic modification. This minimalism ensures you are ingesting a substance as close to its source as possible. Production takes place in Germany, with strict quality control throughout the entire process.

**Usage & Dosage**
Recommended for topical, localized use. Apply 1 to 2 drops to the skin of the desired area. As this is a highly concentrated colloidal solution, a small amount is sufficient. Store the product in a cool, dry place, protected from light, and out of reach of children.

**Important Note**
Do not use if you have a known allergy to platinum metal. This product is a colloidal solution and, in accordance with EU regulations, is not marketed or intended for use as a medicine, food supplement, or cosmetic. For information on the traditional and modern applications of colloidal substances, it is recommended that you conduct your own research through independent sources such as professional books and authoritative websites. Once opened, store properly to maintain the product's optimal condition.`,ingredient_reference:`**Colloidal Platinum (from 99.9% Purity Platinum)**
Colloidal platinum is a system where metallic platinum exists as a stable suspension of nanoscale microscopic particle clusters in pure water. It is not dissolved ions, but ultra-fine particles that retain the physical properties of the metallic element. Within the body, this unique colloidal form may facilitate gentler interaction with the cellular environment. The platinum raw material used is of extremely high purity (99.9%), minimizing interference from other metallic impurities. This form is particularly suitable for those seeking foundational, systemic support through rare metallic elements. In the entire formula, it is the sole functional ingredient, with its efficacy entirely dependent on the fine, charged physical state imparted by the high-purity raw material and advanced plasma preparation technology.

**Doubly-Purified Pure Water (Carrier Medium)**
The water here is not an ordinary solvent, but highly purified water that has undergone double distillation combined with reverse osmosis filtration. Its role is to serve as the ideal carrier and suspension medium for the colloidal platinum particles. Its extreme purity ensures no unnecessary minerals or impurities are introduced, allowing the platinum particles to remain stably dispersed without unwanted aggregation or reaction. This medium mimics the low-impurity environment of the body's extracellular fluids, designed to allow for the smooth transmission of the active ingredient. It is best suited for users who place high importance on the absolute purity of a product's base. In the formula, together with the colloidal platinum, it forms a complete, harmonious, and minimalist binary system. The purity of the water itself is directly related to the stability and quality of the entire product system.`}}},{name:"Mannayan Kolloidales Silber 100 ml | Silberwasser",url:"https://mannayan.com/Mannayan-Kolloidales-Silber-100-ml-Silberwasser/011155",price:["9,90 €"],product_number:"011155",quantity:[],image_url:"https://mannayan.com/media/3d/95/62/1638186807/Silber_Kolloid_100_ml.jpg?ts=1638186807",image_local:"images/Silber_Kolloid_100_ml.jpg",content:{cn:{label:`Mannayan 胶体银 | 银水
支持内在平衡的纯净银液
• 支持身体自然防御体系
• 维持皮肤表面健康环境
• 源自99.9%高纯银
• 采用高压等离子技术
• 双重蒸馏过滤纯水
100毫升 | 20 ppm浓度
德国制造 | 不含添加剂`,short_description:`当身体需要额外的支持来维持日常的平衡状态时，一种纯净而温和的辅助方式往往能带来内心的安定。

Mannayan胶体银是一种由99.9%高纯度银和双重蒸馏过滤纯水制成的液态补充剂。微小的银颗粒通过高压等离子技术均匀悬浮在水中，形成独特的胶体状态，旨在温和地支持身体自身的平衡机制。

它采用20 ppm的低浓度配方，每瓶容量为100毫升，可通过喷雾器方便地局部使用。产品在德国制造，成分纯净，仅包含银和纯水，不含任何化学添加剂或防腐剂。`,long_description:`在季节更替或环境变化时，身体有时会发出需要额外关注的信号，寻求一种温和的方式来巩固自身的防线。

**高压等离子技术**
Mannayan胶体银的独特之处在于其制造工艺。不同于常见的电解法，我们采用高压等离子技术来制备。这一工艺能产生极其微小且带有特定电荷的银颗粒，使其能更稳定地悬浮于双重蒸馏过滤的纯水中。这些纳米级的胶体粒子细小到无法被普通滤纸截留，形成了一种性质独特的液态体系。这种技术旨在保留银的天然特性，同时确保其在液体中的高度分散和稳定性。

**一个简单的协同体系**
产品的核心是两种物质的纯粹结合：99.9%的高纯度银和经过双重蒸馏及渗透过滤的纯水。这个体系不复杂，其理念在于通过最小化的干预来提供支持。微小的银胶体颗粒旨在与身体环境和谐共存，而不干扰周围介质的自然平衡。这种简单的二元组合，依托于精密的制造工艺，构成了产品发挥作用的基础。

**适合哪些生活情境**
它适合那些在日常生活中寻求一种纯净、非侵入性方式来支持整体平衡状态的人。例如，在旅行、工作繁忙或感觉需要为身体防御系统提供额外支持的时候。也适用于那些注重成分来源和制造工艺，倾向于选择简单、透明配方的人士。重要的是，它服务于一种整体的健康管理思路，而非针对特定问题。

**纯净与成分完整性**
纯净是产品的基石。成分列表一目了然：只有银和纯水。银的纯度达到99.9%，水源经过双重蒸馏和反渗透过滤，以确保其纯净度。产品在德国制造，生产后不经长期储存，并融入了谐波频率应用的频率富集工艺，这些细节共同指向对品质完整性的追求。没有任何填料、稳定剂或化学添加剂，配方本身即是对纯净的承诺。

**用法与剂量**
建议局部外用，每次使用1至2滴。产品配有喷雾器，便于精准涂抹于所需部位。请存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。

**重要提示**
根据欧盟法规，胶体溶液不被定义为药品、食品补充剂或化妆品。我们建议您通过相关信息资源（如互联网、专业书籍）自行了解胶体（微细）颗粒在水中的应用领域。如果您对银过敏，请勿使用本产品。`,ingredient_reference:`**胶体银**
胶体银并非含有银的化学化合物，而是由极少数原子组成的亚微观金属银颗粒群，每个原子携带微量电荷，使其能悬浮于纯水中。它在体内不参与直接的代谢途径，其作用机制与胶体颗粒的物理化学特性相关。Mannayan采用99.9%的高纯度银源，并通过高压等离子技术制备，旨在获得尺寸极小、电荷特性独特的胶体颗粒。这种形式被认为能更好地保持其物理活性。它适合那些寻求一种源于天然矿物质的、非化学合成支持方案的人群。在整个配方中，它与高度纯净的水结合，构成了一个极简而完整的体系。

**纯水（双重蒸馏及反渗透过滤）**
产品中使用的水并非普通饮用水，而是经过双重蒸馏和反渗透过滤处理的高纯度水。这种处理方式旨在最大限度地去除水中的矿物质、杂质和微生物，使其成为胶体银颗粒最纯净、最稳定的悬浮介质。高纯度的水确保了胶体银颗粒的电荷环境稳定，防止其因杂质影响而发生聚集或性质改变。它作为配方的唯一溶剂，其纯净度直接决定了最终产品的品质和一致性。对于追求配方极致纯净和工艺严谨的用户而言，水源的处理标准是重要的考量因素。`},en:{label:`Mannayan Colloidal Silver | Silver Water
Pure Silver Liquid to Support Inner Balance
• Supports the body's natural defense system
• Helps maintain a healthy environment on the skin's surface
• Made from 99.9% high-purity silver
• Produced using high-pressure plasma technology
• Double-distilled and filtered pure water
100 ml | 20 ppm concentration
Made in Germany | No additives`,short_description:`When the body needs extra support to maintain its daily balance, a pure and gentle approach can bring a sense of inner calm.

Mannayan Colloidal Silver is a liquid supplement made from 99.9% high-purity silver and double-distilled, filtered pure water. Tiny silver particles are evenly suspended in the water through high-pressure plasma technology, forming a unique colloidal state designed to gently support the body's own balancing mechanisms.

It features a low concentration of 20 ppm, with each bottle containing 100 ml, and can be conveniently applied topically using the included sprayer. The product is manufactured in Germany with pure ingredients—only silver and pure water—and contains no chemical additives or preservatives.`,long_description:`During seasonal changes or shifts in your environment, your body may sometimes signal that it needs extra attention, seeking a gentle way to reinforce its own defenses.

**High-Pressure Plasma Technology**
What sets Mannayan Colloidal Silver apart is its manufacturing process. Unlike common electrolysis methods, we use high-pressure plasma technology. This process creates extremely fine silver particles with a specific charge, allowing them to remain stably suspended in double-distilled, filtered pure water. These nano-scale colloidal particles are so small that they cannot be captured by ordinary filter paper, forming a uniquely stable liquid system. This technology aims to preserve the natural properties of silver while ensuring its high dispersion and stability in the liquid.

**A Simple Synergistic System**
At the heart of the product is the pure combination of two substances: 99.9% high-purity silver and pure water that has undergone double distillation and reverse osmosis filtration. The system is not complicated—its philosophy is to provide support through minimal intervention. The tiny silver colloidal particles are designed to coexist harmoniously with the body's environment without disrupting the natural balance of surrounding tissues. This simple binary combination, supported by precise manufacturing, forms the foundation of the product's function.

**Ideal for These Life Situations**
It is suitable for those seeking a pure, non-invasive way to support overall balance in daily life—for example, during travel, busy work periods, or when feeling the need for extra support for the body's defense system. It also appeals to individuals who value ingredient sourcing and manufacturing processes and prefer simple, transparent formulations. Importantly, it serves a holistic approach to well-being, rather than targeting specific issues.

**Purity and Ingredient Integrity**
Purity is the cornerstone of this product. The ingredient list is straightforward: only silver and pure water. The silver is 99.9% pure, and the water is double-distilled and reverse-osmosis filtered to ensure its purity. Manufactured in Germany, the product is not stored long-term after production and incorporates a frequency enrichment process using harmonic frequencies—details that reflect a commitment to quality integrity. There are no fillers, stabilizers, or chemical additives; the formulation itself is a promise of purity.

**Usage and Dosage**
Recommended for topical use: apply 1 to 2 drops per use. The product comes with a sprayer for precise application to desired areas. Store in a cool, dry place away from light and out of reach of children.

**Important Note**
According to EU regulations, colloidal solutions are not defined as medicines, food supplements, or cosmetics. We recommend that you research the applications of colloidal (microfine) particles in water through relevant resources (e.g., the internet, professional literature). Do not use this product if you are allergic to silver.`,ingredient_reference:`**Colloidal Silver**
Colloidal silver is not a chemical compound containing silver, but rather a submicroscopic cluster of metallic silver particles composed of very few atoms, each carrying a slight charge that allows them to suspend in pure water. It does not participate in direct metabolic pathways in the body; its mechanism of action is related to the physicochemical properties of the colloidal particles. Mannayan uses a 99.9% high-purity silver source and employs high-pressure plasma technology to produce colloidal particles that are extremely small with unique charge characteristics. This form is believed to better preserve its physical activity. It is suitable for those seeking a support option derived from natural minerals, rather than chemical synthesis. In the formulation, it combines with highly purified water to create a minimalistic yet complete system.

**Pure Water (Double-Distilled and Reverse Osmosis Filtered)**
The water used in this product is not ordinary drinking water, but high-purity water treated through double distillation and reverse osmosis filtration. This process aims to maximally remove minerals, impurities, and microorganisms from the water, making it the purest and most stable suspension medium for the colloidal silver particles. The high purity of the water ensures a stable charge environment for the particles, preventing aggregation or changes in properties due to impurities. As the sole solvent in the formulation, its purity directly determines the quality and consistency of the final product. For users who value extreme formulation purity and rigorous craftsmanship, the water treatment standard is an important consideration.`}}},{name:"Mannayan Kolloidales Silber 250 ml | Silberwasser",url:"https://mannayan.com/Mannayan-Kolloidales-Silber-250-ml-Silberwasser/010087",price:["14,90 €"],product_number:"010087",quantity:[],image_url:"https://mannayan.com/media/63/72/63/1638186556/Silber_Kolloid_250_ml.jpg?ts=1638186556",image_local:"images/Silber_Kolloid_250_ml.jpg",content:{cn:{label:`曼纳延胶体银 250毫升 | 银水
自然防御，内在平衡
• 支持身体自然防御机制
• 维持内在清洁环境
• 促进局部健康状态
• 适用于日常调理
• 20 ppm 低浓度配方
• 双重蒸馏纯净水基底
• 99.9%高纯银原料
• 德国高压等离子技术`,short_description:`生活中，身体时常需要应对各种内外环境的挑战。当感到需要一些额外的支持来维持内在的平衡与清洁感时，一种温和而纯粹的辅助方式或许正是你寻找的。

曼纳延胶体银采用独特的低压等离子体技术制备，将99.9%的高纯度银转化为纳米级的带电粒子，悬浮于双重蒸馏的纯净水中。这种技术形成的胶体溶液，粒子微小而稳定，旨在以更自然的方式与身体互动。

它不旨在替代任何身体固有的功能，而是作为一种纯净的辅助成分，为那些关注日常基础调理、寻求自然支持方式的人提供多一种选择。其核心在于成分的纯粹与制备工艺的精良。

每瓶容量250毫升，银浓度为20 ppm（百万分之二十）。配方仅含两种成分：双重蒸馏并经渗透过滤的纯净水，以及99.9%纯度的银。生产过程在德国完成，避光储存以保持品质。`,long_description:`当你感觉需要为身体的自然防御系统提供一些温和支持，或是寻求一种方式来维护局部环境的洁净与平衡时，一种源自古老智慧与现代技术结合的选择，或许值得了解。这不仅仅是关于一种物质，更是关于一种追求内在和谐与纯净状态的思路。

**食物态技术与递送形式**
本品并非简单的银离子溶液。它通过德国特有的高压等离子体技术制备，将高纯度的银转化为纳米级别的带电胶体粒子。这些粒子极其微小，甚至无法被普通显微镜观测，均匀地悬浮在双重蒸馏的纯净水中。这种技术旨在创造一种粒子尺寸更小、表面电荷更高的胶体状态，不同于传统的电解法，以期实现更稳定的分散和潜在的生物可利用性。这种形式被认为更接近自然界中某些活性物质的存在状态。

**一个追求平衡的完整思路**
产品的价值在于其整体性。从99.9%的银原料选择，到双重蒸馏与反渗透过滤的基底用水，再到精密的等离子体制备工艺，每一步都围绕着“纯净”与“完整”的理念。它不试图提供强烈的、单一方向的干预，而是旨在成为一种温和的、支持性的存在。其思路类似于传统健康观念中重视的“清”与“养”的结合——通过提供纯净的物质基础，辅助身体维持其自身应有的清洁与平衡能力。这种思路将产品本身视为一个完整的体系，而不仅仅是活性成分的载体。

**适合的生活情境**
它适合那些在日常生活中注重全面调理、倾向于选择自然温和方式的人。比如，在季节更替、环境变化或感到需要额外关注自身状态时，将其作为日常健康管理的一部分。也适合那些对成分来源和工艺有较高要求，相信“优质原料与精良工艺是根本”的人。它服务于一种主动的、预防性的健康生活态度，而非被动的应对。

**纯净与成分完整性承诺**
瓶中所含，仅两物：经过双重蒸馏及反渗透过滤的超纯水，以及纯度高达99.9%的银。没有稳定剂，没有化学添加剂，没有不必要的成分。低至20 ppm的浓度设计，体现了“适度而非过量”的原则。生产在德国完成，并注重避光、阴凉的储存条件，以最大限度保持胶体溶液的原始状态与活性。纯净在这里不是营销口号，而是可被验证的配方清单和工艺标准。

**给健康管理者与搭配建议**
对于专业健康顾问而言，了解其技术背景和温和特性至关重要。本品可作为关注基础防御与内环境平衡的综合健康方案中的一环。它可以与其他旨在支持不同系统（如消化、呼吸或皮肤健康）的天然补充剂搭配，构建一个多层次、相互支持的健康支持网络。关键在于理解其辅助性与系统性角色，根据个体的整体状况进行整合。

**用法与剂量**
建议用于局部外用。每次使用1至2滴，直接涂抹于所需关注的局部区域。由于是胶体溶液，皮肤吸收温和。请存放于儿童无法触及的阴凉干燥处，并避免阳光直射以保持最佳品质。

**重要提示**
对银有过敏史的人群请勿使用。本品为胶体溶液，根据欧盟法规，不作为药品、食品补充剂或化妆品进行定义和销售。我们提供关于制造工艺和质量的客观信息，关于胶体物质的更多应用领域，建议您通过互联网、专业书籍等独立信息渠道进行深入了解。健康是一个主动管理的过程，任何补充都应建立在良好的整体生活习惯基础之上。`,ingredient_reference:`**胶体银**
胶体银是纯度高达99.9%的金属银，通过高压等离子体技术被分解为纳米级别的超细微粒，并带有微弱的电荷，稳定悬浮于纯净水中。它不是离子银或银化合物，而是金属银的一种特殊物理分散状态。在传统的健康实践中，这种形式的银因其物理化学特性而被探讨用于支持局部清洁。在本配方中，极低的浓度（20 ppm）和纳米级的粒径旨在提供一种温和的作用界面。它最适合那些寻求传统自然物质与现代纳米技术结合，并注重成分纯净度与工艺的人群。与双重蒸馏纯净水结合，构成了一个极致简单却高度完整的系统，两者共同确保了溶液的纯净度和胶体状态的稳定性。

**双重蒸馏纯净水**
这不是普通的水，而是经过双重蒸馏并结合反渗透过滤处理的超纯水，其导电率极低（0.3-0.5 ppm）。它作为胶体银的唯一溶剂和载体，其超高纯度至关重要，因为它确保了银胶体粒子的稳定性，防止杂质干扰胶体的电荷或导致粒子聚集。它在配方中扮演着“洁净画布”的角色，为活性成分提供最中性和稳定的环境。对于追求配方极致纯净、避免任何不必要添加剂的使用者来说，基底用水的品质是信任的基础。它与高纯银协同，共同定义了整个产品的纯净特质与温和属性。`},en:{label:`Mannayan Colloidal Silver 250ml | Silver Water
Natural Defense, Inner Balance
• Supports the body's natural defense mechanisms
• Helps maintain an internal clean environment
• Promotes local wellness
• Suitable for daily care
• 20 ppm low-concentration formula
• Double-distilled purified water base
• 99.9% high-purity silver source
• German high-pressure plasma technology`,short_description:`In daily life, the body often faces various challenges from internal and external environments. When you feel the need for a little extra support to maintain inner balance and a sense of cleanliness, a gentle and pure form of assistance might be just what you're looking for.

Mannayan Colloidal Silver is prepared using a unique low-pressure plasma technology, transforming 99.9% high-purity silver into nano-sized charged particles suspended in double-distilled purified water. This technology creates a colloidal solution with tiny, stable particles, designed to interact with the body in a more natural way.

It is not intended to replace any of the body's inherent functions, but rather serves as a pure, supportive element, offering an additional option for those focused on daily foundational care and seeking natural forms of support. Its essence lies in the purity of its ingredients and the excellence of its manufacturing process.

Each bottle contains 250ml with a silver concentration of 20 ppm (parts per million). The formula contains only two ingredients: double-distilled, reverse-osmosis filtered purified water, and 99.9% pure silver. Production is completed in Germany, and the product is stored away from light to preserve quality.`,long_description:`When you feel the need to offer gentle support to your body's natural defense system, or are seeking a way to maintain cleanliness and balance in a local area, an option born from ancient wisdom combined with modern technology may be worth understanding. This is not merely about a substance, but about an approach that seeks inner harmony and a state of purity.

**Food-State Technology & Delivery Form**
This product is not a simple silver ion solution. It is prepared using Germany's unique high-pressure plasma technology, which transforms high-purity silver into nano-sized charged colloidal particles. These particles are extremely minute, even invisible under ordinary microscopes, and are uniformly suspended in double-distilled purified water. This technology aims to create a colloidal state with smaller particle size and higher surface charge compared to traditional electrolysis methods, intended to achieve more stable dispersion and potential bioavailability. This form is considered closer to the natural state of certain active substances found in nature.

**A Holistic Approach to Balance**
The product's value lies in its integrity. From the selection of 99.9% pure silver, to the double-distilled and reverse-osmosis filtered base water, to the precise plasma preparation process, every step revolves around the concepts of "purity" and "wholeness." It does not attempt to provide strong, one-directional intervention, but aims to be a gentle, supportive presence. Its philosophy is similar to the combination of "cleansing" and "nourishing" valued in traditional wellness concepts—by providing a pure material foundation, it assists the body in maintaining its own inherent capacity for cleanliness and balance. This approach views the product itself as a complete system, not merely a carrier for active ingredients.

**Suitable Life Situations**
It is suitable for those who focus on comprehensive daily care and prefer natural, gentle methods. For example, it can be incorporated as part of daily wellness management during seasonal changes, environmental shifts, or times when you feel the need for extra attention to your state. It is also suitable for those with high standards for ingredient sourcing and craftsmanship, who believe that "quality raw materials and excellent processes are fundamental." It serves a proactive, preventive approach to healthy living, not a reactive one.

**Commitment to Purity & Ingredient Integrity**
The bottle contains only two things: ultra-pure water processed through double distillation and reverse osmosis filtration, and silver with a purity of 99.9%. No stabilizers, no chemical additives, no unnecessary ingredients. The low concentration of 20 ppm embodies the principle of "moderation, not excess." Production is completed in Germany, with careful attention to storage away from light and in a cool place to maximally preserve the original state and activity of the colloidal solution. Here, purity is not a marketing slogan, but a verifiable ingredient list and process standard.

**For Wellness Practitioners & Combination Suggestions**
For professional wellness advisors, understanding its technical background and gentle nature is crucial. This product can serve as one component within a comprehensive wellness plan focused on foundational defense and internal environmental balance. It can be combined with other natural supplements aimed at supporting different systems (such as digestive, respiratory, or skin health) to build a multi-layered, mutually supportive network. The key is understanding its supportive and systemic role, integrating it based on an individual's overall condition.

**Usage & Dosage**
Recommended for topical external use. Apply 1 to 2 drops directly to the local area of concern. As a colloidal solution, skin absorption is gentle. Store in a cool, dry place out of reach of children, and avoid direct sunlight to maintain optimal quality.

**Important Notes**
Do not use if you have a known allergy to silver. This product is a colloidal solution and, according to EU regulations, is not defined or marketed as a medicine, food supplement, or cosmetic. We provide objective information about the manufacturing process and quality. For more information on the application areas of colloidal substances, we recommend consulting independent sources such as the internet or professional books. Wellness is an active management process; any supplementation should be built upon a foundation of good overall lifestyle habits.`,ingredient_reference:`**Colloidal Silver**
Colloidal Silver is metallic silver with a purity of 99.9%, broken down into nano-sized ultra-fine particles via high-pressure plasma technology, carrying a slight charge and stably suspended in purified water. It is not ionic silver or a silver compound, but a special physical dispersion state of metallic silver. In traditional wellness practices, this form of silver has been explored for supporting local cleanliness due to its physicochemical properties. In this formula, the very low concentration (20 ppm) and nano-scale particle size aim to provide a gentle interface for action. It is best suited for those seeking a combination of traditional natural substances and modern nanotechnology, and who value ingredient purity and craftsmanship. Combined with double-distilled purified water, it forms an extremely simple yet highly complete system; together, they ensure the solution's purity and the stability of the colloidal state.

**Double-Distilled Purified Water**
This is not ordinary water, but ultra-pure water processed through double distillation combined with reverse osmosis filtration, with extremely low conductivity (0.3-0.5 ppm). As the sole solvent and carrier for the colloidal silver, its ultra-high purity is crucial because it ensures the stability of the silver colloidal particles, preventing impurities from interfering with the colloid's charge or causing particle aggregation. It plays the role of a "clean canvas" in the formula, providing the most neutral and stable environment for the active ingredient. For users who seek ultimate formula purity and wish to avoid any unnecessary additives, the quality of the base water is foundational to trust. Together with the high-purity silver, it defines the entire product's pure character and gentle nature.`}}},{name:"Mannayan Kolloidales Silber 500 ml | Silberwasser",url:"https://mannayan.com/Mannayan-Kolloidales-Silber-500-ml-Silberwasser/010085",price:["24,90 €"],product_number:"010085",quantity:[],image_url:"https://mannayan.com/media/3c/1f/a2/1638186676/Silber_Kolloid_500_ml.jpg?ts=1638186676",image_local:"images/Silber_Kolloid_500_ml.jpg",content:{cn:{label:`Mannayan 胶体银 | 银水
支持身体自然防御系统
• 纳米级胶体银粒子
• 高电压等离子体制备工艺
• 20 ppm 低浓度配方
• 99.9% 高纯银源
• 双重蒸馏渗透过滤纯水
500毫升 | 外用滴剂`,short_description:`当身体的外部屏障面临挑战时，我们常常寻求一种温和而有效的方式来支持自身的防御机制。

Mannayan 胶体银采用高电压等离子体技术制备，将99.9%的高纯银转化为纳米级的带电粒子，悬浮于双重蒸馏的纯净水中。这种独特的形态旨在与身体环境和谐共存。

其20 ppm的浓度经过精心考量，旨在提供支持而不造成负担。每一瓶都在德国生产，并蕴含和谐频率应用的加持。

配方仅含两种成分：双重蒸馏并经渗透过滤的纯水，以及99.9%纯度的银。`,long_description:`皮肤是我们与外界接触的第一道防线，有时需要额外的呵护来维持其平衡与健康。当外部环境带来侵扰时，寻找一种纯净、能与身体自然机制协同作用的方式，成为许多人的选择。

**食物态技术／递送技术**
Mannayan 胶体银并非简单的化学溶液。它通过独特的高电压等离子体工艺制备，而非传统的电解法。这一工艺产生出极其微小且带有电荷的银粒子，其尺寸达到纳米级别，以至于无法被普通滤纸截留，甚至在显微镜下也难以观察。这些微小的带电粒子稳定地悬浮在双重蒸馏、并经渗透过滤的纯水中，形成一种被称为“胶体”的特殊分散体系。这种形态旨在模仿体内自然存在的生物活性物质（如血液和淋巴液中的某些成分）的某些特性，以期更好地与生命系统互动。

**完整体系**
产品的价值在于其整体性。从99.9%的高纯度银源开始，到制备过程中对粒子大小和电荷的精确控制，再到最终灌装于避光瓶中以保持活性，每一步都构成了一个完整的支持体系。低至20 ppm的浓度设计，反映了“少即是多”的理念，旨在提供恰到好处的支持，避免不必要的负担。此外，生产过程中还融入了和谐频率应用，为产品注入了另一维度的完整性。

**适合人群**
这款产品适合那些在日常生活中注重通过自然、纯净的方式来维护身体外部屏障健康的人。例如，关注皮肤表面清洁与平衡，或寻求在季节更替、环境变化时为身体防御机制提供温和辅助的个体。它适用于那些偏好使用成分简单、来源清晰、制备工艺考究的产品的人。

**纯净与成分完整性**
纯净是根本。配方中只有两种成分：经过双重蒸馏和反渗透过滤的纯水，以及纯度高达99.9%的银。没有添加任何稳定剂、防腐剂或化学合成物质。生产在德国完成，确保了从原料到成品的全程品质可控。这种对纯净的坚持，让产品本身就能说明一切。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士而言，理解胶体银的物理化学特性及其与生物系统相互作用的潜在原理是关键。其纳米粒子的尺寸、表面电荷以及胶体状态，是区别于离子溶液或银化合物的核心特征。在考虑将其纳入整体健康方案时，应基于对个体状况的全面评估，并可能与其他支持皮肤健康、免疫平衡或整体排毒通路的生活方式建议相结合。始终建议从低剂量开始观察个体反应。

**用法与剂量**
建议外用。每次取1至2滴，直接滴于需要关注的局部皮肤区域。请确保皮肤清洁干燥。由于是浓缩外用液，请避免接触眼睛和黏膜。使用后无需冲洗，让其自然吸收干燥即可。

**重要提示**
请将本品置于儿童无法触及的阴凉干燥处保存，并避免阳光直射，以保持胶体粒子的稳定性。如果您已知对银或任何金属有过敏反应，请勿使用本品。本品为外用产品，不可内服。如果出现任何不适或刺激，请立即停止使用并咨询专业人士。产品的有效性与其胶体状态的完整性密切相关，请勿将其与盐或其他物质混合，以免破坏其胶体结构。`,ingredient_reference:`**胶体银**
胶体银是指高纯度的金属银以纳米级微小粒子的形式，稳定分散在纯水中形成的胶体悬浮液。它不是离子银或银化合物，其核心是物理形态的金属银原子簇。在体内，这些微小的带电粒子因其巨大的表面积和表面特性，被认为可以与周围环境进行独特的相互作用。Mannayan 采用99.9%的纯银源，并通过高电压等离子体工艺制备，确保了粒子的纳米尺寸和均匀分散。它最适合那些寻求一种不同于传统化学抗菌剂、希望以更接近物理机制的方式支持身体外部防御的人群。在本配方中，其效力完全依赖于与双重蒸馏纯水共同构成的、无任何添加剂的纯净胶体系统。

**双重蒸馏渗透过滤纯水**
这不仅仅是溶剂，而是配方的基础介质。水经过双重蒸馏和反渗透过滤，去除了绝大多数矿物质、杂质和微生物，达到了极高的纯度。这种极纯的水环境对于维持胶体银纳米粒子的稳定悬浮和电荷分布至关重要，能有效防止粒子聚集、沉淀或发生化学反应。它在体内作为最中性和兼容的载体，确保银粒子能够以其设计的物理形态与接触的表面进行作用。它最适合对配方基底纯净度有极高要求的使用者。在此产品中，它与高纯银共同构成了一个极其简单却高度精密的二元系统，水的纯度直接决定了胶体银长期储存的稳定性和生物相容性。`},en:{label:`Mannayan Colloidal Silver | Silver Water
Supports the Body's Natural Defense System
• Nano-scale colloidal silver particles
• High-voltage plasma preparation process
• 20 ppm low-concentration formula
• 99.9% high-purity silver source
• Double-distilled, reverse-osmosis filtered pure water
500 ml | For Topical Use`,short_description:`When the body's external barriers face challenges, we often seek a gentle yet effective way to support our own defense mechanisms.

Mannayan Colloidal Silver is prepared using high-voltage plasma technology, transforming 99.9% high-purity silver into nano-scale charged particles suspended in double-distilled, purified water. This unique form is designed to coexist harmoniously with the body's environment.

Its 20 ppm concentration is carefully considered, aiming to provide support without creating a burden. Each bottle is produced in Germany and imbued with the application of harmonizing frequencies.

The formula contains only two ingredients: double-distilled, reverse-osmosis filtered pure water and 99.9% purity silver.`,long_description:`The skin is our first line of defense in contact with the outside world, and sometimes requires extra care to maintain its balance and health. When the external environment brings disturbances, many seek a pure method that can work in synergy with the body's natural mechanisms.

**Food-State Technology / Delivery Technology**
Mannayan Colloidal Silver is not a simple chemical solution. It is prepared through a unique high-voltage plasma process, not traditional electrolysis. This process produces extremely tiny, charged silver particles at the nano-scale, so small they cannot be captured by ordinary filter paper and are difficult to observe even under a microscope. These minute charged particles are stably suspended in double-distilled, reverse-osmosis filtered pure water, forming a special dispersion system known as a 'colloid.' This form is designed to mimic certain properties of naturally occurring bioactive substances in the body (such as some components in blood and lymph), with the aim of interacting better with living systems.

**Complete System**
The product's value lies in its wholeness. Starting from the 99.9% high-purity silver source, to the precise control of particle size and charge during preparation, to the final bottling in light-protective containers to preserve activity—each step constitutes a complete support system. The low 20 ppm concentration design reflects the 'less is more' philosophy, aiming to provide just the right amount of support and avoid unnecessary burden. Furthermore, the production process incorporates harmonizing frequency applications, adding another dimension of integrity to the product.

**Who It's For**
This product is suitable for those who, in daily life, focus on maintaining the health of the body's external barriers through natural, pure methods. For example, individuals concerned with surface skin cleanliness and balance, or those seeking gentle support for the body's defense mechanisms during seasonal changes or environmental shifts. It is for those who prefer products with simple ingredients, clear sourcing, and meticulous preparation processes.

**Purity & Ingredient Integrity**
Purity is fundamental. The formula contains only two ingredients: pure water that has undergone double distillation and reverse osmosis filtration, and silver with a purity of 99.9%. No stabilizers, preservatives, or chemically synthesized substances are added. Production takes place in Germany, ensuring quality control from raw materials to finished product. This commitment to purity allows the product to speak for itself.

**For Health Practitioners & Distributors: Clinical Context & Protocol Integration**
For professionals in the health field, understanding the physicochemical properties of colloidal silver and the potential principles of its interaction with biological systems is key. Its nanoparticle size, surface charge, and colloidal state are the core characteristics that distinguish it from ionic solutions or silver compounds. When considering its integration into a holistic wellness protocol, it should be based on a comprehensive assessment of the individual's condition and may be combined with other lifestyle recommendations supporting skin health, immune balance, or overall detoxification pathways. It is always advised to start with a low dose to observe individual response.

**Usage & Dosage**
For topical use. Apply 1 to 2 drops directly onto the local skin area of concern. Ensure the skin is clean and dry. As this is a concentrated topical liquid, avoid contact with eyes and mucous membranes. No need to rinse after application; allow it to absorb and dry naturally.

**Important Notes**
Store in a cool, dry place out of reach of children, and avoid direct sunlight to maintain the stability of the colloidal particles. Do not use if you have a known allergy to silver or any metals. This product is for external use only and is not for internal consumption. Discontinue use and consult a professional if any discomfort or irritation occurs. The product's efficacy is closely related to the integrity of its colloidal state; do not mix it with salt or other substances, as this may disrupt its colloidal structure.`,ingredient_reference:`**Colloidal Silver**
Colloidal silver refers to a colloidal suspension where high-purity metallic silver in the form of nano-scale particles is stably dispersed in pure water. It is not ionic silver or a silver compound; its core consists of physical clusters of metallic silver atoms. In the body, these tiny charged particles, due to their vast surface area and surface properties, are believed to engage in unique interactions with their surroundings. Mannayan uses a 99.9% pure silver source and prepares it via a high-voltage plasma process, ensuring nano-scale particle size and uniform dispersion. It is most suitable for those seeking a method different from traditional chemical antimicrobials, who wish to support the body's external defenses in a manner closer to a physical mechanism. In this formula, its efficacy relies entirely on the pure colloidal system it forms with double-distilled pure water, free of any additives.

**Double-Distilled, Reverse-Osmosis Filtered Pure Water**
This is not merely a solvent but the foundational medium of the formula. The water undergoes double distillation and reverse osmosis filtration, removing the vast majority of minerals, impurities, and microorganisms, achieving extremely high purity. This ultra-pure aqueous environment is crucial for maintaining the stable suspension and charge distribution of the colloidal silver nanoparticles, effectively preventing particle aggregation, sedimentation, or chemical reactions. In the body, it serves as the most neutral and compatible carrier, ensuring the silver particles can interact with contacted surfaces in their designed physical form. It is most suitable for users with extremely high requirements for the purity of a formula's base. In this product, together with high-purity silver, it forms an exceptionally simple yet highly precise binary system, where the water's purity directly determines the colloidal silver's long-term storage stability and biocompatibility.`}}},{name:"Mannayan Kolloidales Zink 100 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Zink-100-ml/011148",price:["9,90 €"],product_number:"011148",quantity:[],image_url:"https://mannayan.com/media/6d/4f/e6/1637930298/Zink_Kolloid_100_ml_Nr.2.jpg?ts=1637930298",image_local:"images/Zink_Kolloid_100_ml_Nr.2.jpg",content:{cn:{label:`Mannayan 胶体锌
支持内在平衡的纯净锌液
• 支持免疫系统功能
• 维持皮肤健康
• 参与体内多种酶反应
• 支持认知功能
• 促进整体活力
100毫升 / 20 ppm 浓度
高纯锌（99.9%）与双重蒸馏过滤纯水
无基因改造添加`,short_description:`你是否感觉身体需要一些额外的支持来维持日常的平衡？季节更替、忙碌的生活节奏，都可能让身体发出需要关注的信号。

Mannayan 胶体锌提供了一种纯净、易于吸收的锌元素补充形式。它不是普通的化学合成物，而是将99.9%高纯度的金属锌，通过高压等离子工艺制成极微小的纳米颗粒，悬浮于双重蒸馏过滤的纯水中。这种形式旨在让锌元素更易于被身体识别和利用。

产品采用简单的配方，仅包含两种成分：经过双重蒸馏和反渗透过滤的纯水，以及纯度高达99.9%的锌。不含任何基因改造成分。每瓶100毫升，锌浓度为20 ppm，适合局部外用。`,long_description:`当身体感到需要额外的支持，当日常的活力似乎需要一点助力，我们往往会从最基本的元素中寻找答案。锌，就是这样一种在体内扮演着众多关键角色的微量矿物质。

**食物态技术与递送形式**
这款产品并非传统的锌盐补充剂。它采用胶体技术，将纯度高达99.9%的金属锌通过独特的高压等离子工艺，制备成纳米级别的微小颗粒。这些带电的锌粒子均匀悬浮于双重蒸馏、反渗透过滤的纯水中，形成一种物理性质独特的溶液。其颗粒极其微小，甚至无法被普通滤纸截留。这种形式旨在模拟自然界中某些元素的存在状态，让身体能够以一种更自然、更直接的方式进行接触和利用。

**一个完整的支持体系**
锌本身就是一个多面手。它参与体内超过300种酶的活性，是这些生化反应不可或缺的催化剂。从支持免疫细胞的正常功能，到维护皮肤与黏膜的健康屏障；从协助蛋白质与DNA的合成，到支持正常的味觉与嗅觉，锌的作用渗透在生命活动的许多基础层面。这款胶体锌液提供的，正是这种基础而广泛的支持，旨在帮助维持身体内部各种生理过程的平衡与顺畅运行。

**适合哪些生活情境**
它适合那些在日常生活中寻求基础营养支持的人。比如，在感觉身体需要额外关照的时期；在希望为皮肤健康提供温和外部支持时；或者，仅仅是作为一种日常养生习惯，为身体补充这种重要的微量矿物质。它提供了一种不同于口服胶囊的、更为直接的局部应用方式。

**纯净与成分的完整性**
配方的纯净度是核心。整个产品只由两种物质构成：经过严格双重蒸馏和反渗透过滤的纯水，以及纯度达到99.9%的锌金属。没有复杂的化学合成过程，没有添加不必要的填料、流动剂或防腐剂。生产过程在德国完成，确保了对品质的全程把控。这种极简的配方，反映了对成分本身效力的尊重。

**用法与剂量**
建议外用，每次局部使用1至2滴。请存放于阴凉、干燥、避光处，并置于儿童无法触及的地方。如果您对锌有过敏反应，请勿使用。

**重要提示**
本产品为胶体溶液。请遵循建议的使用方法。如有任何疑虑，使用前请咨询您的健康顾问。`,ingredient_reference:`**胶体锌（纳米级）**
这是产品的活性形式，由纯度99.9%的金属锌通过高压等离子工艺制成。它以纳米级别的带电颗粒群悬浮于纯水中，而非溶解的离子状态。这种物理形态旨在提供更大的表面积和独特的生物可利用性。它适合寻求高纯度、易吸收形式锌元素支持的人群。在配方中，它与纯净的载体水协同，构成了完整而简单的补充体系。

**双重蒸馏反渗透纯水**
这不仅是溶剂，更是配方的基石。水经过双重蒸馏和反渗透过滤，去除了绝大多数杂质和矿物质，确保了极高的纯度。这种极净的环境为胶体锌颗粒的稳定悬浮提供了理想介质，避免了不必要的相互作用。它体现了配方从基础原料开始就对纯净度的追求，是整体产品理念的重要组成部分。`},en:{label:`Mannayan Colloidal Zinc
Pure Zinc Liquid for Inner Balance Support
• Supports immune system function
• Maintains skin health
• Involved in numerous enzyme reactions in the body
• Supports cognitive function
• Promotes overall vitality
100 ml / 20 ppm concentration
High-purity zinc (99.9%) with double-distilled, filtered pure water
No genetically modified additives`,short_description:`Do you feel your body could use some extra support to maintain its daily balance? Seasonal changes and a busy lifestyle can send signals that your body needs attention.

Mannayan Colloidal Zinc offers a pure, easily absorbed form of zinc supplementation. It's not an ordinary chemical compound. Instead, 99.9% high-purity metallic zinc is processed into extremely fine nanoparticles via a high-pressure plasma technique, suspended in double-distilled, filtered pure water. This form is designed to make the zinc more recognizable and usable by the body.

The formula is simple, containing only two ingredients: pure water that has undergone double distillation and reverse osmosis filtration, and zinc with a purity of 99.9%. It contains no genetically modified ingredients. Each 100 ml bottle has a zinc concentration of 20 ppm and is suitable for topical application.`,long_description:`When the body feels it needs extra support, or when daily vitality seems to need a boost, we often look for answers in the most fundamental elements. Zinc is one such trace mineral that plays many key roles in the body.

**Food-State Technology and Delivery Form**
This product is not a traditional zinc salt supplement. It uses colloidal technology, where metallic zinc of 99.9% purity is processed via a unique high-pressure plasma technique into nano-scale particles. These charged zinc particles are uniformly suspended in double-distilled, reverse osmosis filtered pure water, creating a solution with unique physical properties. The particles are so minute they cannot be captured by ordinary filter paper. This form aims to mimic the natural state of certain elements, allowing the body to interact with and utilize it in a more natural and direct way.

**A Complete Support System**
Zinc itself is a versatile player. It is involved in the activity of over 300 enzymes in the body, serving as an essential catalyst for these biochemical reactions. From supporting the normal function of immune cells to maintaining the healthy barrier of skin and mucous membranes; from assisting in protein and DNA synthesis to supporting normal taste and smell, zinc's role permeates many fundamental levels of life's activities. This colloidal zinc liquid provides precisely this foundational and broad support, aiming to help maintain the balance and smooth operation of the body's various physiological processes.

**Suitable Life Situations**
It is suitable for those seeking foundational nutritional support in daily life. For example, during times when you feel your body needs extra care; when you wish to provide gentle external support for skin health; or simply as part of a daily wellness routine to supplement this important trace mineral. It offers a more direct, topical application method, different from oral capsules.

**Purity and Ingredient Integrity**
The purity of the formula is central. The entire product consists of only two substances: strictly double-distilled and reverse osmosis filtered pure water, and metallic zinc with a purity of 99.9%. There is no complex chemical synthesis, and no unnecessary fillers, flow agents, or preservatives are added. Production takes place in Germany, ensuring full quality control. This minimalist formula reflects respect for the efficacy of the ingredients themselves.

**Usage and Dosage**
Recommended for topical use. Apply 1 to 2 drops locally per use. Store in a cool, dry place away from light and out of reach of children. Do not use if you have a known allergic reaction to zinc.

**Important Note**
This product is a colloidal solution. Please follow the recommended usage method. If you have any concerns, consult your health advisor before use.`,ingredient_reference:`**Colloidal Zinc (Nano-scale)**
This is the active form of the product, made from 99.9% purity metallic zinc via a high-pressure plasma process. It exists as a suspension of nano-scale charged particle clusters in pure water, not as dissolved ions. This physical form is designed to provide greater surface area and unique bioavailability. It is suitable for those seeking support from a high-purity, easily absorbed form of zinc. In the formula, it works synergistically with the pure carrier water to form a complete and simple supplementation system.

**Double-Distilled Reverse Osmosis Pure Water**
This is not just a solvent, but the cornerstone of the formula. The water undergoes double distillation and reverse osmosis filtration, removing the vast majority of impurities and minerals, ensuring extremely high purity. This ultra-clean environment provides an ideal medium for the stable suspension of the colloidal zinc particles, preventing unnecessary interactions. It reflects the pursuit of purity from the very base ingredients and is an integral part of the overall product philosophy.`}}},{name:"Mannayan Kolloidales Zink 250 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Zink-250-ml/011149",price:["14,90 €"],product_number:"011149",quantity:[],image_url:"https://mannayan.com/media/ee/1d/7b/1638184190/Zink_Kolloid_250_ml.jpg?ts=1638184190",image_local:"images/Zink_Kolloid_250_ml.jpg",content:{cn:{label:`曼纳延胶体锌
支持内在平衡的纯净锌
• 支持健康的免疫反应
• 维持皮肤与黏膜健康
• 参与多种酶促反应
• 支持认知功能
• 250毫升瓶装 • 20 ppm浓度 • 99.9%纯锌 • 双蒸馏渗透过滤纯水 • 无转基因添加`,short_description:`有时，身体会发出一些微妙的信号，比如感觉精力恢复得不如从前快，或者皮肤状态容易波动。这些感受常常与日常压力、季节变化或生活节奏有关，提示我们需要关注内在的平衡。

曼纳延胶体锌提供了一种纯净、易于利用的锌元素形式。它采用高电压等离子工艺制备，将99.9%纯度的锌制成纳米级的胶体颗粒，悬浮于双蒸馏、渗透过滤的纯水中。这种形式旨在让锌能够更顺畅地被身体识别和利用。

每一滴都只包含两种成分：极致纯净的水和极高纯度的锌。产品浓度为20 ppm，不含任何不必要的添加剂，也未使用转基因原料。它代表了一种回归本质的补充方式。`,long_description:`你是否留意过，当生活节奏加快或季节更替时，身体的第一道防线似乎需要更多的支持？皮肤偶尔显得不那么有活力，或者感觉需要更长的时间从疲惫中恢复。这些细微的感受，往往是身体在提醒我们关注那些维持日常韧性的基础元素。锌，正是这样一个在幕后默默支持着数百种生理过程的必需矿物质。

**高电压等离子技术与胶体形态**
曼纳延胶体锌并非简单的锌溶液。它通过独特的高电压等离子工艺制成，将99.9%的高纯度金属锌转化为纳米级的胶体颗粒。这些微小的粒子带有一致的电荷，稳定地悬浮在双重净化（蒸馏与反渗透过滤）的纯水中。胶体形态意味着锌以极细微的、生物可利用的颗粒形式存在，其尺寸小于简单的分子溶液，旨在与身体的液体环境（如淋巴液）更和谐地相容。

**一个协同运作的体系**
锌在体内的作用从来不是孤立的。它是众多酶系统的核心组成部分，这些酶参与从能量代谢到蛋白质合成的广泛过程。胶体锌的设计理念，是提供一种接近自然状态的元素形式，使其能够顺利融入身体自身的运输与利用网络，支持免疫细胞的沟通、皮肤组织的修复以及神经递质的正常功能，共同维护一个协调响应的内部环境。

**适合哪些生活情境**
这款产品适合那些在繁忙生活中，寻求以纯净方式支持身体基础健康的人。它适用于经常感到户外活动后恢复较慢、希望为皮肤健康提供内在营养支持、或是在饮食中难以持续获得充足锌来源的成年人。它也是一种简便的局部外用选择，可直接用于需要特别关照的皮肤区域。

**对纯净与成分完整性的坚持**
配方极致精简：只有两种成分。纯水经过双重蒸馏和渗透过滤，达到极高的洁净度。锌原料的纯度达到99.9%。整个生产过程在德国完成，避免不必要的储存环节，并且未添加任何防腐剂、填料或来自转基因技术的成分。纯净，在这里不是营销口号，而是产品的基本构成原则。

**用法与剂量**
作为外用，可取1至2滴直接涂抹于局部皮肤区域。请将产品置于儿童无法触及的地方。如果您已知对锌过敏，请勿使用本品。

**重要提示**
本产品为胶体溶液。请储存于阴凉、干燥、避光处。保持瓶口清洁，避免污染。本品不能替代多样化的均衡饮食。如果您正在怀孕、哺乳、有健康状况或正在服用药物，在使用任何新的补充剂前咨询您的健康顾问是明智的做法。`,ingredient_reference:`**胶体锌**
胶体锌是金属锌的纳米级颗粒悬浮液，而非化学结合的锌化合物。它由99.9%的高纯度锌通过高电压等离子工艺制成，形成带电荷的、亚微观的原子簇，稳定分散于纯水中。这种形态旨在提高其生物可利用性和在体液中的相容性。它在体内作为多种酶的必要辅助因子，支持免疫功能、蛋白质合成和伤口愈合过程。对于寻求高纯度、非化合形式矿物质补充的人群尤为合适。在本配方中，其胶体形态是与纯净水载体协同设计的核心，旨在模拟一种更接近生物体内环境的递送方式。

**双蒸馏渗透过滤纯水**
这不是普通的水，而是经过双重蒸馏并结合反渗透过滤处理的极致纯净水，其洁净度极高（0.3-0.5 ppm）。它作为胶体锌颗粒的悬浮介质，提供了一个中性、无干扰的环境。纯净的水载体确保了胶体颗粒的稳定性，并避免了杂质与活性成分竞争吸收或引发不必要的反应。它最适合那些对补充剂中非活性成分的纯净度有严格要求的使用者。在此配方中，它不仅是溶剂，更是维持胶体系统完整性和效能的关键基础。`},en:{label:`Mannayan Colloidal Zinc
Pure Zinc for Inner Balance
• Supports a healthy immune response
• Maintains skin and mucosal health
• Involved in numerous enzymatic reactions
• Supports cognitive function
• 250 ml bottle • 20 ppm concentration • 99.9% pure zinc • Double-distilled, reverse-osmosis filtered pure water • Non-GMO`,short_description:`Sometimes, the body sends subtle signals—like feeling that your energy doesn't bounce back as quickly as it used to, or that your skin's condition fluctuates easily. These sensations often relate to daily stress, seasonal shifts, or life's pace, hinting that we might need to pay attention to our inner equilibrium.

Mannayan Colloidal Zinc offers a pure, readily usable form of zinc. It is prepared using a high-voltage plasma process, transforming 99.9% pure zinc into nano-sized colloidal particles suspended in double-distilled, reverse-osmosis filtered pure water. This form is designed to allow zinc to be more smoothly recognized and utilized by the body.

Each drop contains only two ingredients: exceptionally pure water and exceptionally pure zinc. The product concentration is 20 ppm, free from any unnecessary additives and made without genetically modified ingredients. It represents a return to the essence of supplementation.`,long_description:`Have you noticed that when life speeds up or seasons change, your body's first line of defense seems to need a little extra support? Perhaps your skin occasionally lacks its usual vitality, or you feel it takes longer to recover from fatigue. These subtle feelings are often the body's way of reminding us to attend to the foundational elements that sustain our daily resilience. Zinc is one such essential mineral, quietly supporting hundreds of physiological processes behind the scenes.

**High-Voltage Plasma Technology & Colloidal Form**
Mannayan Colloidal Zinc is not simply a zinc solution. It is created through a unique high-voltage plasma process that converts 99.9% high-purity metallic zinc into nano-sized colloidal particles. These tiny particles carry a consistent charge and are stably suspended in doubly purified (distilled and reverse-osmosis filtered) pure water. The colloidal form means the zinc exists as extremely fine, bioavailable particles, smaller than those in a simple molecular solution, designed to be more compatible with the body's fluid environments, such as lymph.

**A System of Synergistic Action**
Zinc never works in isolation within the body. It is a core component of numerous enzyme systems involved in processes ranging from energy metabolism to protein synthesis. The design philosophy of colloidal zinc is to provide an elemental form close to its natural state, allowing it to integrate smoothly into the body's own transport and utilization networks. It supports immune cell communication, skin tissue repair, and normal neurotransmitter function, all working together to maintain a coordinated and responsive internal environment.

**Suitable Life Situations**
This product is for those leading busy lives who seek a pure way to support their foundational health. It is suitable for adults who often feel slower to recover after outdoor activities, wish to provide internal nutritional support for skin health, or find it challenging to consistently obtain sufficient zinc from their diet. It also serves as a convenient topical option, applicable directly to specific skin areas needing extra care.

**Commitment to Purity & Ingredient Integrity**
The formula is exceptionally minimal: only two ingredients. The pure water undergoes double distillation and reverse-osmosis filtration to achieve an extremely high level of purity. The zinc source is 99.9% pure. The entire production process takes place in Germany, avoiding unnecessary storage steps, and contains no added preservatives, fillers, or ingredients derived from genetic modification. Here, purity is not a marketing slogan—it is the fundamental principle of the product's composition.

**Usage & Dosage**
For topical use, apply 1 to 2 drops directly to the local skin area. Keep out of reach of children. Do not use this product if you have a known allergy to zinc.

**Important Notes**
This product is a colloidal solution. Store in a cool, dry place away from light. Keep the bottle opening clean to avoid contamination. This product is not a substitute for a varied and balanced diet. If you are pregnant, nursing, have a health condition, or are taking medication, it is wise to consult your health advisor before starting any new supplement.`,ingredient_reference:`**Colloidal Zinc**
Colloidal zinc is a suspension of nano-sized particles of metallic zinc, not a chemically bound zinc compound. It is made from 99.9% high-purity zinc via a high-voltage plasma process, forming charged, submicroscopic atomic clusters stably dispersed in pure water. This form is designed to enhance its bioavailability and compatibility with bodily fluids. In the body, it serves as an essential cofactor for numerous enzymes, supporting immune function, protein synthesis, and wound healing processes. It is particularly suitable for those seeking a high-purity, non-chelated form of mineral supplementation. In this formulation, its colloidal form is the core, synergistically designed with the pure water carrier to mimic a delivery method closer to the body's internal environment.

**Double-Distilled, Reverse-Osmosis Filtered Pure Water**
This is not ordinary water, but water of exceptional purity (0.3-0.5 ppm) treated through double distillation combined with reverse-osmosis filtration. It serves as the suspension medium for the colloidal zinc particles, providing a neutral, interference-free environment. The pure water carrier ensures the stability of the colloidal particles and prevents impurities from competing for absorption or triggering unnecessary reactions. It is ideal for users with stringent requirements for the purity of non-active ingredients in supplements. In this formula, it is not merely a solvent but a critical foundation for maintaining the integrity and efficacy of the colloidal system.`}}},{name:"Mannayan Kolloidales Zink 500 ml",url:"https://mannayan.com/Mannayan-Kolloidales-Zink-500-ml/011175",price:["24,90 €"],product_number:"011175",quantity:[],image_url:"https://mannayan.com/media/1a/71/95/1643291281/Zink_Kolloidal_500_ml_26.01.2022.jpg?ts=1643291281",image_local:"images/Zink_Kolloidal_500_ml_26.01.2022.jpg",content:{cn:{label:`Mannayan 胶体锌
支持内在平衡的纯净锌液
• 支持健康的免疫反应
• 维持皮肤屏障健康
• 辅助正常的味觉与嗅觉
• 参与体内数百种酶反应
500毫升 / 20 ppm浓度
仅含双重蒸馏过滤纯水与99.9%纯锌
无转基因、无添加剂`,short_description:`你是否感觉身体的防线需要一些温和而坚定的支持？在季节更替或日常忙碌时，身体的内在平衡需要稳固的基础。锌是维持这种基础平衡的关键微量矿物质之一。

这款胶体锌溶液采用独特的制备工艺，将99.9%的高纯度锌转化为纳米级的带电粒子，悬浮于双重蒸馏过滤的纯水中。这种形态旨在提升生物可利用性，让身体更容易接纳和利用。

它不含任何添加剂、填充剂或转基因成分，配方纯净到只有两种物质：纯水和纯锌。每瓶500毫升，浓度为20 ppm，适合日常外用。`,long_description:`当身体发出需要额外支持的信号时，例如感觉对外界变化的适应力减弱，或是皮肤状态反映出内在的波动，我们往往需要从根本处寻找温和而有效的调理方式。微量矿物质锌在其中扮演着不可或缺的角色，它是众多生理过程的协作者，默默支持着身体的日常运作与自我维护。

**食物态技术与递送形式**
本产品并非简单的锌化合物溶解液。它通过高压等离子体工艺制备，将99.9%纯度的金属锌转化为纳米级的胶体粒子。这些带电荷的锌粒子极其微小，能稳定悬浮于双重蒸馏、反渗透过滤的纯水中。这种胶体形态旨在模仿自然界中矿物质存在的生物可利用形式，其粒子尺寸远小于普通分子溶液，为局部外用提供了一种独特的递送途径。

**一个完整的支持体系**
锌本身就是一个多面手。它作为催化剂，参与体内超过300种酶的反应，这些酶涉及从能量代谢到蛋白质合成的广泛过程。它支持免疫细胞的正常发育与功能，是皮肤与黏膜组织健康维护的要素之一，同时也与正常的味觉、嗅觉感知密切相关。这款胶体锌溶液提供的，正是这种基础而广泛的矿物质支持，旨在帮助维持身体多个系统本就存在的平衡状态。

**适合哪些生活情境**
这款产品适合那些寻求从基础层面滋养身体，偏好使用纯净、简单配方的人。它适用于希望在日常健康管理中纳入一种温和矿物质支持方式的场合，尤其适合注重皮肤局部健康与环境适应力的人群。对于崇尚精简成分、避免不必要添加物的使用者而言，它的纯净配方提供了清晰的选择。

**纯净与成分完整性**
配方中只有两种成分：经过双重蒸馏和反渗透过滤的纯水，以及纯度高达99.9%的锌金属。生产过程在德国完成，不添加任何防腐剂、稳定剂、香料或转基因物质。每一滴溶液都力求反映成分本身的纯粹性。

**用法与剂量**
建议外用，每次局部使用1至2滴。请存放于阴凉干燥、避光处，并置于儿童无法触及的地方。对锌过敏者请勿使用。

**重要提示**
本产品为胶体溶液。请遵循建议的使用方式。如有任何健康状况或正在服用药物，使用前请咨询您的健康顾问。品质源于纯净的原料与精心的制备。`,ingredient_reference:`**胶体锌**
胶体锌是纯度99.9%的金属锌经特殊工艺处理后形成的纳米级带电粒子，悬浮于纯水中。它不是离子或化合物形态，而是以极细微的金属粒子集群存在。这种形态旨在提高其表面活性与生物可利用潜力，尤其适合局部外用。它为需要基础矿物质支持、关注皮肤健康与局部屏障功能的人群提供了一种选择。在配方中，它是唯一的活性物质，依托于纯净的载体水发挥作用。

**双重蒸馏过滤纯水**
这不仅是溶剂，更是配方的基石。水经过双重蒸馏和反渗透过滤，去除了绝大多数杂质和矿物质，达到极高的纯度。这种纯净度确保了胶体锌粒子的稳定性，防止其与水中其他离子发生不必要的反应而聚沉。它为本已极其简单的配方提供了绝对中性和纯净的背景，使得锌成为配方中唯一的作用焦点。`},en:{label:`Mannayan Colloidal Zinc
Pure Zinc Liquid for Inner Balance Support
• Supports a healthy immune response
• Helps maintain skin barrier health
• Assists normal taste and smell perception
• Involved in hundreds of enzymatic reactions in the body
500 ml / 20 ppm concentration
Contains only double-distilled filtered pure water and 99.9% pure zinc
Non-GMO, no additives`,short_description:`Do you feel your body's defenses could use some gentle yet steadfast support? During seasonal shifts or daily busyness, your inner balance needs a solid foundation. Zinc is one of the key trace minerals that helps maintain this foundational equilibrium.

This colloidal zinc solution uses a unique preparation process to transform 99.9% high-purity zinc into nano-sized charged particles, suspended in double-distilled, filtered pure water. This form is designed to enhance bioavailability, making it easier for the body to accept and utilize.

It contains no additives, fillers, or genetically modified ingredients. The formula is so pure it consists of only two substances: pure water and pure zinc. Each 500 ml bottle has a concentration of 20 ppm and is suitable for daily topical use.`,long_description:`When the body signals a need for extra support—such as feeling less resilient to external changes or when skin condition reflects inner fluctuations—we often need to find gentle yet effective ways to nurture from the ground up. The trace mineral zinc plays an indispensable role here, acting as a collaborator in numerous physiological processes, quietly supporting the body's daily operations and self-maintenance.

**Food-State Technology & Delivery Form**
This product is not a simple zinc compound solution. It is prepared using a high-pressure plasma process that transforms 99.9% pure metallic zinc into nano-sized colloidal particles. These charged zinc particles are extremely minute and remain stably suspended in double-distilled, reverse-osmosis filtered pure water. This colloidal form aims to mimic the bioavailable way minerals exist in nature, with particle sizes far smaller than typical molecular solutions, offering a unique delivery pathway for topical application.

**A Complete Support System**
Zinc itself is a multi-tasker. As a catalyst, it participates in over 300 enzymatic reactions in the body, spanning processes from energy metabolism to protein synthesis. It supports the normal development and function of immune cells, is essential for maintaining the health of skin and mucous tissues, and is closely linked to normal taste and smell perception. This colloidal zinc solution provides precisely this kind of foundational, broad-spectrum mineral support, designed to help maintain the inherent balance across multiple body systems.

**Suitable Life Situations**
This product is for those seeking to nourish the body from a foundational level and who prefer pure, simple formulas. It suits occasions where one wishes to incorporate a gentle mineral support into daily wellness routines, especially for individuals focused on local skin health and environmental resilience. For users who value minimal ingredients and wish to avoid unnecessary additives, its pure formula offers a clear choice.

**Purity & Ingredient Integrity**
The formula contains only two ingredients: pure water that has undergone double distillation and reverse osmosis filtration, and metallic zinc with a purity of 99.9%. Production takes place in Germany, with no added preservatives, stabilizers, fragrances, or GMOs. Every drop strives to reflect the purity of the ingredients themselves.

**Usage & Dosage**
Recommended for topical use. Apply 1 to 2 drops locally as needed. Store in a cool, dry place away from light and out of reach of children. Do not use if you have a known allergy to zinc.

**Important Note**
This product is a colloidal solution. Please follow the recommended usage. If you have any health conditions or are taking medication, consult your health advisor before use. Quality stems from pure ingredients and careful preparation.`,ingredient_reference:`**Colloidal Zinc**
Colloidal zinc is 99.9% pure metallic zinc processed via a special technique into nano-sized charged particles suspended in pure water. It is not in ionic or compound form, but exists as clusters of extremely fine metallic particles. This form is designed to increase its surface activity and bioavailability potential, making it particularly suitable for topical application. It offers an option for those seeking foundational mineral support, with a focus on skin health and local barrier function. In the formula, it is the sole active substance, relying on the pure carrier water to function.

**Double-Distilled Filtered Pure Water**
This is not just a solvent, but the cornerstone of the formula. The water undergoes double distillation and reverse osmosis filtration, removing the vast majority of impurities and minerals to achieve extremely high purity. This purity ensures the stability of the colloidal zinc particles, preventing unwanted reactions and aggregation with other ions in the water. It provides an absolutely neutral and pure backdrop for the already exceptionally simple formula, allowing zinc to be the sole focal point of action.`}}},{name:"Mannayan KRILL-ÖL + (60 Kapseln)",url:"https://mannayan.com/Mannayan-KRILL-OEL-60-Kapseln/010063",price:["35,00 €"],product_number:"010063",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/38/ea/59/1625733464/Krill%C3%B6l%2B.jpg?ts=1625733476",image_local:"images/Krill%C3%B6l%2B.jpg",content:{cn:{label:`Mannayan 磷虾油+
来自南极的纯净磷脂型Omega-3
• 支持大脑清晰与专注力
• 维护心血管系统健康
• 促进关节灵活与舒适
• 提供天然抗氧化保护
• 易于吸收，胃部温和
60粒胶囊 | 每日1-2粒 | 无麸质、无乳糖、无人工添加`,short_description:`你是否感觉思绪不再像以前那样清晰敏捷，或者身体的灵活性与活力有所减退？这些细微的变化，常常与身体内部支持系统所需的特定营养有关。

Mannayan磷虾油+提供了一种独特的Omega-3来源。其中的EPA和DHA并非普通鱼油，而是天然地与磷脂结合。这种形式让营养更容易被身体识别和利用，直达需要它的细胞膜，为大脑、心脏和关节等关键部位提供支持。

配方中还包含了来自磷虾本身的天然抗氧化成分，如虾青素，以及维生素A和E，共同守护营养的活性与稳定。每日1至2粒，随餐服用即可。

本品采用纯净的南极磷虾油，不含麸质、乳制品、大豆、酵母、淀粉、人工色素或防腐剂，配方纯净，适合关注成分完整性的人群。`,long_description:`当记忆的闪现不如从前迅速，关节在活动时发出轻微的提示，或是你希望为长期健康打下更稳固的基础时，身体往往在呼唤更深层的滋养。这不仅仅是补充脂肪，而是关乎构成身体亿万细胞膜的基本材料是否优质、充足且易于整合。

**磷脂递送技术**
Mannayan磷虾油+的核心在于其天然形态。其中的Omega-3脂肪酸（EPA和DHA）并非游离存在，而是与磷脂分子紧密结合。磷脂是细胞膜的主要构成成分。这种天然的结合形式意味着，当您摄入它时，身体能更顺畅地将其识别并纳入细胞膜的构建与修复过程中，实现更直接、更高效的利用。

**完整的支持体系**
这款补充剂并非单一成分的孤立作用。磷脂结合的EPA和DHA共同致力于维护细胞膜的流动性与健康，这是大脑神经信号传递、心脏细胞规律跳动和关节软骨细胞营养交换的基础。天然含有的虾青素、维生素A和E，则构成了内在的抗氧化网络，在输送过程中保护这些珍贵的Omega-3脂肪酸免受氧化，同时为身体提供额外的抗氧化支持。胆碱作为磷脂的一部分，也参与其中，支持神经信号传导。这些成分在南极磷虾中天然共存，形成了一个协同工作的完整营养复合体。

**适合人群**
它适合那些用脑频繁，希望维持思维清晰度的人；关注心血管长期健康，寻求日常养护途径的人；感到关节需要更多润滑与支持，追求活动自如的人；以及那些注重饮食纯净，偏好成分天然、配方简单、避免常见过敏原的细致管理者。

**纯净与成分完整性**
我们坚持从源头确保纯净。油料100%来自可持续捕捞的南极磷虾。整个配方摒弃了不必要的添加：无麸质、无乳糖、无大豆、无酵母、无淀粉、无人工色素、无防腐剂、非转基因。胶囊由鱼明胶制成。我们相信，让成分自己说话，纯净本身就是一种效力。

**健康管理者与经销商：临床背景与方案搭配**
许多自然疗法医师和健康顾问将磷脂型Omega-3视为基础营养支持方案的一部分。因其高效的吸收特性和细胞膜靶向性，常被用于支持认知功能、情绪平衡、炎症代谢管理及整体细胞健康的养护计划中。它可以与其他针对性的补充剂协同使用，作为构建身体内在平衡的基石之一。

**用法与剂量**
建议每日服用1至2粒胶囊，随餐服用，并用足量水送服。具体用量可根据个人健康目标及专业健康顾问的建议进行调整。一瓶包含60粒胶囊。

**重要提示**
对甲壳类海鲜（如虾、蟹）过敏者请勿食用。正在服用抗凝血药物或有肝脏问题者，使用前请咨询您的健康顾问。膳食补充剂不能替代均衡多样的饮食。请将本品置于儿童无法触及之处，避光、阴凉干燥处保存。若瓶口密封条破损，请勿食用。`,ingredient_reference:`**磷虾油（含磷脂、EPA、DHA、胆碱、虾青素）**
磷虾油是从南极磷虾中提取的天然油脂，其最大特点是Omega-3脂肪酸（EPA和DHA）以磷脂形式存在。磷脂是构成所有细胞膜的关键结构成分。这种天然结合形式使Omega-3能更有效地融入细胞膜，直接支持膜的健康与功能，这对于大脑、神经和全身细胞通讯至关重要。它非常适合寻求高生物利用度Omega-3来源、且希望支持细胞基础健康的人群。配方中的其他营养素均天然共存于此复合体中。

**EPA（二十碳五烯酸）**
EPA是一种重要的Omega-3脂肪酸，在体内参与合成一系列具有调节作用的信号分子。它主要侧重于支持健康的炎症代谢反应和心血管系统的平衡维护。在本品中，EPA与磷脂结合，使其能更精准地到达需要它的细胞部位，发挥调节作用。它与DHA协同工作，共同维护身体内部环境的稳定。

**DHA（二十二碳六烯酸）**
DHA是另一种至关重要的Omega-3脂肪酸，尤其高度集中于大脑和视网膜的细胞膜中。它是维持神经元结构完整、支持神经信号高效传递的基础物质，对认知功能、记忆力和视觉健康有根本性意义。以磷脂形式递送的DHA，能更有效地支持大脑和神经系统的营养需求。它与EPA相辅相成，一个更侧重于结构与认知，一个更侧重于调节与平衡。

**虾青素**
虾青素是一种天然存在于磷虾中的强效抗氧化剂，属于类胡萝卜素家族。它在本品中扮演着双重角色：一方面，在磷虾油内部和摄入后保护敏感的Omega-3脂肪酸免受氧化，保持其活性；另一方面，它本身也为身体提供抗氧化支持，帮助应对氧化压力。其存在使得这款磷虾油呈现出天然的红色。

**维生素A与维生素E**
这两种维生素同样作为天然的抗氧化成分存在于磷虾油中。它们与虾青素共同组成一个抗氧化网络，协同保护油脂的稳定性，确保Omega-3在抵达体内发挥作用前保持最佳状态。此外，它们也各自承担着支持免疫健康和保护细胞膜免受氧化损伤的辅助功能，与核心的Omega-3磷脂复合物相得益彰。`},en:{label:`Mannayan Krill Oil+
Pure Phospholipid-Bound Omega-3 from Antarctica
• Supports Mental Clarity & Focus
• Maintains Cardiovascular System Health
• Promotes Joint Flexibility & Comfort
• Provides Natural Antioxidant Protection
• Easy to Absorb, Gentle on the Stomach
60 Capsules | 1-2 Capsules Daily | Gluten-Free, Lactose-Free, No Artificial Additives`,short_description:`Do you feel your thoughts aren't as sharp and agile as they used to be, or that your body's flexibility and vitality have diminished? These subtle changes are often related to specific nutrients your body's internal support systems need.

Mannayan Krill Oil+ offers a unique source of Omega-3. Its EPA and DHA are not ordinary fish oils; they are naturally bound to phospholipids. This form allows the nutrients to be more easily recognized and utilized by the body, reaching the cell membranes that need them to support key areas like the brain, heart, and joints.

The formula also includes natural antioxidant components from krill itself, such as astaxanthin, along with Vitamins A and E, working together to protect the activity and stability of the nutrients. Simply take 1 to 2 capsules daily with a meal.

This product uses pure Antarctic krill oil and contains no gluten, dairy, soy, yeast, starch, artificial colors, or preservatives. Its clean formula is suitable for those who value ingredient integrity.`,long_description:`When flashes of memory aren't as quick as before, joints give subtle hints during movement, or you wish to build a more solid foundation for long-term health, your body is often calling for deeper nourishment. This isn't just about supplementing fats; it's about whether the fundamental materials that make up your body's billions of cell membranes are of high quality, sufficient, and easy to integrate.

**Phospholipid Delivery Technology**
The core of Mannayan Krill Oil+ lies in its natural form. The Omega-3 fatty acids (EPA and DHA) are not free-floating but are tightly bound to phospholipid molecules. Phospholipids are the main building blocks of cell membranes. This natural binding form means that when you consume it, your body can more smoothly recognize and incorporate it into the construction and repair processes of cell membranes, achieving more direct and efficient utilization.

**A Complete Support System**
This supplement is not about the isolated action of a single ingredient. The phospholipid-bound EPA and DHA work together to maintain the fluidity and health of cell membranes, which is the foundation for brain nerve signal transmission, regular heart cell beating, and nutrient exchange in joint cartilage cells. Naturally occurring astaxanthin and Vitamins A and E form an intrinsic antioxidant network, protecting these precious Omega-3 fatty acids from oxidation during delivery while providing the body with additional antioxidant support. Choline, as part of the phospholipids, is also involved, supporting nerve signal transmission. These components naturally coexist in Antarctic krill, forming a complete, synergistic nutritional complex.

**Who It's For**
It is suitable for those who use their minds frequently and wish to maintain mental clarity; those concerned with long-term cardiovascular health seeking daily maintenance pathways; those who feel their joints need more lubrication and support, pursuing ease of movement; and meticulous managers who value dietary purity, preferring natural ingredients, simple formulas, and avoiding common allergens.

**Purity & Ingredient Integrity**
We insist on ensuring purity from the source. The oil is 100% sourced from sustainably harvested Antarctic krill. The entire formula eliminates unnecessary additives: gluten-free, lactose-free, soy-free, yeast-free, starch-free, no artificial colors, no preservatives, non-GMO. The capsules are made from fish gelatin. We believe in letting the ingredients speak for themselves; purity itself is a form of potency.

**For Health Managers & Practitioners: Clinical Context & Protocol Synergy**
Many naturopathic doctors and health consultants view phospholipid-bound Omega-3 as part of a foundational nutritional support protocol. Due to its efficient absorption characteristics and cell membrane targeting, it is often used in plans to support cognitive function, emotional balance, inflammatory metabolism management, and overall cellular health maintenance. It can be used synergistically with other targeted supplements as one of the cornerstones for building the body's internal balance.

**Usage & Dosage**
It is recommended to take 1 to 2 capsules daily with a meal, accompanied by plenty of water. The specific dosage can be adjusted based on personal health goals and the advice of a professional health consultant. One bottle contains 60 capsules.

**Important Notes**
Do not consume if you are allergic to crustacean seafood (e.g., shrimp, crab). If you are taking anticoagulant medication or have liver issues, please consult your health advisor before use. Dietary supplements are not a substitute for a balanced and varied diet. Keep this product out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's seal is broken.`,ingredient_reference:`**Krill Oil (containing phospholipids, EPA, DHA, choline, astaxanthin)**
Krill oil is a natural oil extracted from Antarctic krill. Its most distinctive feature is that the Omega-3 fatty acids (EPA and DHA) exist in phospholipid form. Phospholipids are key structural components of all cell membranes. This natural bound form allows Omega-3 to be more effectively integrated into cell membranes, directly supporting membrane health and function, which is crucial for the brain, nerves, and cellular communication throughout the body. It is ideal for those seeking a highly bioavailable source of Omega-3 and wishing to support foundational cellular health. The other nutrients in the formula naturally coexist within this complex.

**EPA (Eicosapentaenoic Acid)**
EPA is an important Omega-3 fatty acid that participates in the synthesis of a series of regulatory signaling molecules in the body. It primarily focuses on supporting healthy inflammatory metabolism responses and maintaining cardiovascular system balance. In this product, EPA is bound to phospholipids, enabling it to more precisely reach the cellular sites where it is needed to exert its regulatory effects. It works synergistically with DHA to maintain the body's internal stability.

**DHA (Docosahexaenoic Acid)**
DHA is another crucial Omega-3 fatty acid, particularly highly concentrated in the cell membranes of the brain and retina. It is a fundamental substance for maintaining neuronal structural integrity and supporting efficient nerve signal transmission, with fundamental significance for cognitive function, memory, and visual health. DHA delivered in phospholipid form can more effectively support the nutritional needs of the brain and nervous system. It complements EPA, with one focusing more on structure and cognition, and the other more on regulation and balance.

**Astaxanthin**
Astaxanthin is a potent natural antioxidant found in krill, belonging to the carotenoid family. It plays a dual role in this product: on one hand, it protects the sensitive Omega-3 fatty acids from oxidation within the krill oil and after ingestion, preserving their activity; on the other hand, it itself provides antioxidant support to the body, helping to manage oxidative stress. Its presence gives this krill oil its natural red color.

**Vitamin A & Vitamin E**
These two vitamins also exist as natural antioxidant components in krill oil. Together with astaxanthin, they form an antioxidant network that synergistically protects the stability of the oil, ensuring the Omega-3 remains in optimal condition before reaching the body to perform its functions. Additionally, they each carry auxiliary functions of supporting immune health and protecting cell membranes from oxidative damage, complementing the core Omega-3 phospholipid complex.`}}},{name:"Mannayan L-ARGININ & L-ORNITHIN + (60 Kapseln)",url:"https://mannayan.com/Mannayan-L-ARGININ-L-ORNITHIN-60-Kapseln/010065",price:["39,90 €"],product_number:"010065",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/8a/c9/31/1625732625/L-Arginin-L-Ornithin%2B.jpg?ts=1625732644",image_local:"images/L-Arginin-L-Ornithin%2B.jpg",content:{cn:{label:`Mannayan L-精氨酸 & L-鸟氨酸+
支持循环与能量代谢的氨基酸组合
• 支持一氧化氮生成与血管功能
• 参与蛋白质合成与能量代谢
• 促进体内氮循环与废物清除
• 帮助维持运动后的恢复过程
60粒胶囊 | 每日1-4粒 | 素食胶囊 | 无麸质、无乳糖、无大豆、无人工添加`,short_description:`有时，即使休息充足，身体也感觉不够轻盈，循环似乎不够顺畅，精力恢复得不如预期。这背后可能与体内一些基础物质的平衡有关。

L-精氨酸和L-鸟氨酸是两种天然存在于体内的氨基酸。它们像是一对协同工作的伙伴，共同参与体内重要的氮循环。这个循环过程关系到能量代谢的效率，也影响着身体清除代谢废物的能力，是维持内在活力的基础环节之一。

这款补充剂以500毫克L-精氨酸和250毫克L-鸟氨酸的明确配比，提供纯净的氨基酸支持。每日1至4粒，可根据个人需要调整。配方纯净，采用素食胶囊，不含常见过敏原与人工添加剂。`,long_description:`你是否感觉日常的精力水平总差那么一点，运动后的恢复时间变长，或者身体的轻盈感不如从前？这些细微的感受，常常指向身体内部那些支撑循环与代谢的基础过程。当这些过程的效率受到影响，整体的活力感便会打折扣。

**食物态技术**
产品采用高纯度的L-精氨酸盐酸盐和L-鸟氨酸盐酸盐形式。这种稳定的盐形式有助于确保成分在体内的有效利用，提供可直接参与代谢的氨基酸，支持身体自身的生理过程。

**完整体系**
L-精氨酸和L-鸟氨酸在体内构成了一个动态的协作体系。L-精氨酸不仅是合成蛋白质的原料，更是一氧化氮的前体物质，一氧化氮在维持血管舒张与健康循环方面扮演着关键角色。而L-鸟氨酸则深度参与尿素循环，这是身体将含氮废物（如氨）转化为尿素并排出体外的核心路径。当L-精氨酸释放出氮后，它可以转化为鸟氨酸，而鸟氨酸在完成尿素循环任务后，又能通过特定途径重新生成精氨酸。这种循环确保了氮元素的有效利用与废物的及时清除，两者相辅相成，共同维护内环境的清洁与代谢的流畅。

**适合人群**
适合那些关注自身基础代谢健康，希望从内部支持循环与精力恢复过程的人。例如，日常活动量较大，感觉身体恢复速度需要额外支持的人；或是注重长期健康维护，希望为身体的清洁与修复机制提供基础营养支持的人。它也为追求纯净配方、有特定饮食需求（如素食、无麸质）的个体提供了一个明确的选择。

**纯净与成分完整性**
每一粒胶囊都只包含标明的活性成分与素食胶囊壳（羟丙甲纤维素）。产品明确不含小麦、麸质、乳制品、糖、大豆、淀粉、酵母、防腐剂以及人工色素与香精。生产过程避免使用转基因原料。这种极简的配方思路，旨在减少不必要的负担，让身体专注于吸收和利用核心的营养支持。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士，此配方提供了明确的氨基酸配比，可作为支持客户基础代谢与循环健康方案的一部分。其作用机制清晰，专注于氮代谢与一氧化氮生成通路。在制定综合方案时，可考虑将其与支持抗氧化、能量产生或肌肉健康的其他营养素结合，但需注意其可能增强降压药物效果的提示，并在建议时进行相应的评估。

**用法与剂量**
建议每日服用1至4粒胶囊，最好在两餐之间服用，并可分次摄入。用足量水送服。具体用量可根据个人需求和专业指导进行调整。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。不建议6岁以下儿童、孕妇及哺乳期妇女使用。由于L-精氨酸可能增强一氧化氮通路，服用降压药物者需注意其可能增强药效，使用前请咨询健康专业人士。请勿超过推荐每日用量。请置于儿童无法触及之处，避光、阴凉干燥处保存。若密封条缺失，请勿食用。`,ingredient_reference:`**L-精氨酸盐酸盐**
L-精氨酸是一种条件性必需氨基酸，意味着在特定生理状况下，身体对其的需求可能增加。它是合成一氧化氮的关键前体，一氧化氮是一种重要的信号分子，有助于调节血管张力与血流。此外，它也参与蛋白质合成和激素分泌。产品中采用其盐酸盐形式，提供每份500毫克的明确剂量。适合那些希望从基础层面支持循环健康与代谢效率的人群。在配方中，它与L-鸟氨酸协同，共同维持体内氮平衡，精氨酸代谢后的产物可进入鸟氨酸参与的循环。

**L-鸟氨酸盐酸盐**
L-鸟氨酸是一种非蛋白质氨基酸，主要不用于构建蛋白质，而是作为尿素循环的核心成员。它协助将体内代谢产生的、具有潜在毒性的氨转化为尿素，从而安全地通过肾脏排出。这个过程对于维持血液洁净度和整体代谢平衡至关重要。产品以盐酸盐形式提供，每份含量为250毫克。特别适合关注身体解毒与代谢废物清除能力的人。它与L-精氨酸关系密切，在尿素循环中，鸟氨酸与来自精氨酸等物质的氨结合，最终在循环中重新生成精氨酸，形成一个高效的清洁与再利用体系。`},en:{label:`Mannayan L-Arginine & L-Ornithine+
Amino Acid Duo for Circulation & Energy Metabolism
• Supports Nitric Oxide Production & Vascular Function
• Involved in Protein Synthesis & Energy Metabolism
• Promotes Nitrogen Cycle & Waste Clearance
• Aids Post-Exercise Recovery Processes
60 Capsules | 1–4 Capsules Daily | Vegetarian Capsules | Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives`,short_description:`Sometimes, even with adequate rest, the body doesn't feel quite light, circulation seems sluggish, and energy doesn't bounce back as expected. This may be related to the balance of certain foundational substances within the body.

L-Arginine and L-Ornithine are two amino acids naturally present in the body. They work like a synergistic pair, jointly participating in the vital nitrogen cycle. This cycle influences the efficiency of energy metabolism and the body's ability to clear metabolic waste, serving as a foundational process for maintaining inner vitality.

This supplement provides pure amino acid support with a clear ratio of 500 mg L-Arginine and 250 mg L-Ornithine. Take 1 to 4 capsules daily, adjustable based on individual needs. The formula is clean, using vegetarian capsules, and is free from common allergens and artificial additives.`,long_description:`Do you feel your daily energy levels are always just a bit short, recovery after exercise takes longer, or your body doesn't feel as light as before? These subtle sensations often point to the foundational internal processes that support circulation and metabolism. When the efficiency of these processes is affected, the overall sense of vitality diminishes.

**Food-State Technology**
The product uses high-purity L-Arginine HCl and L-Ornithine HCl. This stable salt form helps ensure effective utilization in the body, providing amino acids that can directly participate in metabolism and support the body's own physiological processes.

**A Complete System**
L-Arginine and L-Ornithine form a dynamic collaborative system in the body. L-Arginine is not only a building block for protein synthesis but also a precursor to nitric oxide, which plays a key role in maintaining vasodilation and healthy circulation. L-Ornithine is deeply involved in the urea cycle, the core pathway through which the body converts nitrogenous waste (like ammonia) into urea for excretion. After L-Arginine releases nitrogen, it can convert to ornithine, and ornithine, after completing its urea cycle task, can regenerate arginine through specific pathways. This cycle ensures efficient nitrogen utilization and timely waste clearance, with the two working synergistically to maintain a clean internal environment and smooth metabolism.

**Who It's For**
Suitable for those focused on foundational metabolic health, wishing to internally support circulation and energy recovery processes. For example, individuals with high daily activity levels who feel their recovery speed needs extra support; or those prioritizing long-term health maintenance, seeking to provide foundational nutritional support for the body's cleansing and repair mechanisms. It also offers a clear choice for individuals seeking pure formulas with specific dietary needs (e.g., vegetarian, gluten-free).

**Purity & Ingredient Integrity**
Each capsule contains only the stated active ingredients and a vegetarian capsule shell (hypromellose). The product is explicitly free from wheat, gluten, dairy, sugar, soy, starch, yeast, preservatives, and artificial colors or flavors. The manufacturing process avoids GMO ingredients. This minimalist formulation aims to reduce unnecessary burden, allowing the body to focus on absorbing and utilizing the core nutritional support.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
For health professionals, this formula provides a clear amino acid ratio that can be part of a protocol supporting clients' foundational metabolism and circulatory health. Its mechanism of action is clear, focusing on nitrogen metabolism and nitric oxide pathways. When designing comprehensive protocols, consider combining it with other nutrients supporting antioxidant defense, energy production, or muscle health, but note the caution regarding potential enhancement of blood pressure medication effects and conduct appropriate assessments when making recommendations.

**Usage & Dosage**
Take 1 to 4 capsules daily, preferably between meals, and may be taken in divided doses. Swallow with plenty of water. Specific dosage can be adjusted based on individual needs and professional guidance.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced and varied diet. Not recommended for children under 6, pregnant or nursing women. As L-Arginine may enhance nitric oxide pathways, individuals taking blood pressure medication should be aware it may potentiate the drug's effect; consult a health professional before use. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**L-Arginine HCl**
L-Arginine is a conditionally essential amino acid, meaning the body's demand for it may increase under specific physiological conditions. It is a key precursor for synthesizing nitric oxide, an important signaling molecule that helps regulate vascular tone and blood flow. Additionally, it participates in protein synthesis and hormone secretion. The product uses its hydrochloride form, providing a clear dose of 500 mg per serving. Suitable for those wishing to support circulatory health and metabolic efficiency at a foundational level. In the formula, it works synergistically with L-Ornithine to maintain nitrogen balance; the metabolites from arginine can enter the cycle involving ornithine.

**L-Ornithine HCl**
L-Ornithine is a non-protein amino acid, primarily not used for building proteins but serving as a core component of the urea cycle. It assists in converting metabolically produced, potentially toxic ammonia into urea for safe excretion via the kidneys. This process is crucial for maintaining blood purity and overall metabolic balance. The product provides it in hydrochloride form, with 250 mg per serving. Particularly suitable for individuals concerned with the body's detoxification and metabolic waste clearance capacity. It is closely related to L-Arginine; in the urea cycle, ornithine combines with ammonia from sources like arginine, ultimately regenerating arginine within the cycle, forming an efficient cleansing and recycling system.`}}},{name:"Mannayan LACT + (60 Kapseln)",url:"https://mannayan.com/Mannayan-LACT-60-Kapseln/010064",price:["39,90 €"],product_number:"010064",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/fe/38/e4/1766137092/Lact%2B_2025.jpg?ts=1766137092",image_local:"images/Lact%2B_2025.jpg",content:{cn:{label:`Mannayan LACT+
肠道微生态平衡配方
• 支持肠道菌群平衡
• 促进消化系统舒适
• 维护肠道屏障健康
• 辅助营养吸收
• 含9种精选菌株，35亿活性细胞/粒
• 无麸质、无乳糖、无人工添加剂
• 素食胶囊`,short_description:`你是否感觉消化系统不够顺畅，饭后容易感到腹胀或不适？日常饮食的单一或压力，都可能让肠道内的有益菌群失去平衡。

Mannayan LACT+ 是一款精心配制的益生菌补充剂，它汇集了9种经过筛选的乳酸菌和双歧杆菌菌株。这些菌株协同工作，旨在帮助恢复和维持肠道内自然的微生物环境，让消化过程回归平稳状态。

配方中特别添加了来自龙舌兰的菊粉和抗性糊精，它们作为益生元，为有益菌提供生长所需的营养，帮助菌群更好地定植和发挥作用。

每粒胶囊在出厂时含有35亿活性菌。产品采用素食胶囊，不含乳糖、麸质、牛奶蛋白及人工色素、香料和防腐剂，纯净配方适合包括过敏体质和素食者在内的广泛人群。`,long_description:`当消化变得迟缓，腹部时常感到莫名的胀满或不适，这常常是体内微生物环境需要关注的信号。肠道不仅仅是消化器官，更是整体健康平衡的基石，其内部数以万亿计的微生物状态，直接影响着身体的感受与活力。

**食物态技术与递送保障**
为确保活性成分直达作用部位，Mannayan LACT+ 采用了INTELICAPS®微囊包埋技术。这项技术将冻干的菌株进行保护性包裹，使其能够耐受胃酸的挑战，安全抵达肠道并释放活性。这种递送方式模拟了天然食物中成分被利用的过程，旨在提高菌株的存活率和定植效率。

**一个完整的协同支持体系**
这款配方并非单一菌种的简单叠加，而是一个经过设计的微生态支持体系。九种菌株，包括多种乳杆菌和双歧杆菌，各自在肠道的不同部位或功能环节发挥作用。例如，有些菌株擅长在肠道上部定植，有些则偏好下部环境，它们共同构成了一个更全面、更具层次的微生物网络。同时，来自龙舌兰的菊粉和抗性糊精（Nutriose®）作为益生元，为这些有益菌提供专属的营养支持，促进其生长与代谢活动，从而巩固整个支持体系的效果。

**适合这些生活情境的你**
如果你在饮食结构调整后、旅行期间或经历一段压力较大的时期后，感到消化功能不如以往；如果你的日常膳食中膳食纤维来源不够丰富；或者你 simply 希望为日常健康维护增添一份对肠道环境的支持，那么关注肠道菌群平衡会是一个切实的切入点。它适用于成人和儿童（有相应剂量调整），为家庭提供了一种温和的日常支持选择。

**纯净与成分的完整性**
我们理解成分来源的清晰与配方的纯净是根本。本品胶囊由植物纤维素制成，适合素食者。配方中明确不含麸质、乳糖、牛奶蛋白、酵母、人工色素、香料及防腐剂，且为非转基因产品。从菌株培养到成品封装，每个环节都旨在减少不必要的添加，让核心成分自己说话。

**健康管理者的视角：临床背景与搭配思路**
从整体健康管理的角度看，肠道健康是许多调理方案的起点。健康从业者可能会将益生菌补充视为维护肠道屏障、支持免疫系统基础功能的一部分。它可以与均衡饮食、富含益生元的食物（如洋葱、大蒜、香蕉）相结合，形成更全面的日常实践。在针对特定的消化不适制定方案时，它也可能与其他支持消化或舒缓肠道的营养素搭配使用，但具体方案应基于个人情况。

**用法与剂量**
对于长期的日常维护，建议每日1-2粒，餐前约30分钟或睡前用足量水送服。为帮助菌群初步建立，可采用阶段性加强方案：最初10天，每日3次，每次3粒；随后10天，每日3次，每次2粒；最后10天，每日3次，每次1粒。之后可转为日常维护剂量。儿童用量需减半或遵循具体指导。请勿超过推荐每日摄入量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若瓶口密封条缺失，请勿食用。个体反应可能有所不同，持续不适请咨询健康专业人士。`,ingredient_reference:`**嗜酸乳杆菌 (Lactobacillus acidophilus)**
这是一种常见的乳酸菌，主要栖息于小肠。它有助于维持肠道酸性环境，抑制不良微生物的过度生长，并支持营养物质的分解。在配方中，它作为基础菌株之一，为其他菌株创造适宜的定植条件。适合那些希望从多角度支持肠道环境平衡的人群。

**乳酸乳球菌 (Lactococcus lactis)**
这种菌以其产酸能力著称，有助于快速调节局部微环境的pH值。它在发酵过程中扮演重要角色，并能产生某些有益代谢物。在复合配方中，它与其他菌株协同，共同促进一个不利于有害菌生存的整体环境。

**鼠李糖乳杆菌 (Lactobacillus rhamnosus)**
该菌株以其良好的肠道附着能力和耐受性被广泛研究。它被认为有助于支持肠道屏障的完整性，并与免疫系统的正常沟通有关。在配方中，它增强了菌群在肠道黏膜层的定植潜力。

**嗜热链球菌 (Streptococcus thermophilus)**
常与保加利亚乳杆菌共同用于酸奶发酵，它能很好地耐受消化过程。该菌株有助于乳糖的分解，并产生胞外多糖，可能对肠道黏膜有舒缓作用。在配方中，它补充了其他乳杆菌的功能。

**干酪乳杆菌 (Lactobacillus casei)**
这是一种适应性较强的菌株，能在胃肠道的不同部位存活。它参与多种碳水化合物的代谢，并可能帮助调节肠道运动节奏。它与配方中的益生元协同，利用其提供的营养进行增殖。

**植物乳杆菌 (Lactobacillus plantarum)**
此菌株具有广泛的代谢活性，能产生多种酶。它有助于分解复杂的植物性物质，并可能支持抗氧化防御系统。在混合菌群中，它丰富了整个微生物群落的代谢功能多样性。

**长双歧杆菌 (Bifidobacterium longum)**
作为结肠中的优势有益菌之一，长双歧杆菌擅长发酵膳食纤维，产生短链脂肪酸，这些酸是结肠细胞的重要能量来源。它对于维持结肠健康环境至关重要，并与配方中的菊粉等益生元有极强的协同作用。

**短双歧杆菌 (Bifidobacterium breve)**
这种双歧杆菌尤其常见于婴幼儿肠道，但也存在于成人中。它有助于维持肠道菌群的年轻化状态，并支持对其他菌群的平衡调节。在配方中，它补充了长双歧杆菌的功能，特别是在利用寡糖方面。

**两歧双歧杆菌 (Bifidobacterium bifidum)**
这是另一种重要的结肠共生菌，以其在肠道黏膜层的定植能力而闻名。它直接参与维护肠道物理屏障，并竞争性排除病原体。在九菌株体系中，它与长双歧杆菌和短双歧杆菌共同构成了双歧杆菌属的全面支持。

**菊粉 (来自龙舌兰) 与 抗性糊精 (Nutriose®)**
它们并非活性菌，而是作为益生元。菊粉是一种天然的水溶性纤维，选择性促进双歧杆菌和乳杆菌的生长。抗性糊精同样是一种不易消化的碳水化合物，能缓慢发酵，为整个结肠的有益菌提供持久的能量来源。它们共同为配方中的九种菌株提供“食物”，是菌群能否成功定植并发挥长期作用的关键支持成分。`},en:{label:`Mannayan LACT+
Gut Microbiome Balance Formula
• Supports Gut Flora Balance
• Promotes Digestive Comfort
• Maintains Gut Barrier Health
• Aids Nutrient Absorption
• Contains 9 Selected Strains, 3.5 Billion Active Cells/Capsule
• Gluten-Free, Lactose-Free, No Artificial Additives
• Vegetarian Capsule`,short_description:`Do you feel your digestion isn't as smooth as it could be, often experiencing bloating or discomfort after meals? A monotonous diet or daily stress can easily disrupt the balance of beneficial bacteria in your gut.

Mannayan LACT+ is a carefully formulated probiotic supplement that brings together 9 selected strains of Lactobacillus and Bifidobacterium. These strains work synergistically to help restore and maintain the gut's natural microbial environment, bringing the digestive process back to a steady state.

This formula is specially enhanced with inulin from agave and resistant dextrin (Nutriose®). These act as prebiotics, providing the nourishment beneficial bacteria need to grow, helping them better colonize and function.

Each capsule contains 3.5 billion active cells at the time of manufacture. The product uses a vegetarian capsule and is free from lactose, gluten, milk protein, as well as artificial colors, flavors, and preservatives. This clean formula is suitable for a wide range of individuals, including those with sensitivities and vegetarians.`,long_description:`When digestion becomes sluggish, and you often feel inexplicably full or uncomfortable in your abdomen, it's often a signal that your internal microbial environment needs attention. The gut is not just a digestive organ; it's a cornerstone of overall health balance. The state of its trillions of microbes directly influences how your body feels and its vitality.

**Food-State Technology & Delivery Assurance**
To ensure active ingredients reach their site of action, Mannayan LACT+ utilizes INTELICAPS® microencapsulation technology. This technology protectively coats freeze-dried bacterial strains, enabling them to withstand the challenge of stomach acid, safely reach the intestines, and release their activity. This delivery method mimics how components in natural foods are utilized, aiming to improve strain survival and colonization efficiency.

**A Complete Synergistic Support System**
This formula is not a simple stack of single strains but a designed micro-ecological support system. The nine strains, including various Lactobacilli and Bifidobacteria, each play a role in different parts of the gut or functional aspects. For example, some strains excel at colonizing the upper intestine, while others prefer the lower environment. Together, they form a more comprehensive, multi-layered microbial network. Simultaneously, inulin from agave and resistant dextrin (Nutriose®) act as prebiotics, providing exclusive nutritional support for these beneficial bacteria, promoting their growth and metabolic activity, thereby solidifying the effect of the entire support system.

**If This Sounds Like Your Life Situation**
If you feel your digestive function isn't what it used to be after dietary changes, during travel, or following a stressful period; if your daily diet lacks rich sources of dietary fiber; or if you simply wish to add support for your gut environment to your daily health maintenance, then focusing on gut flora balance is a practical starting point. It is suitable for adults and children (with appropriate dosage adjustments), offering a gentle daily support option for the family.

**Purity & Ingredient Integrity**
We understand that clarity of ingredient sourcing and formula purity are fundamental. The capsule is made from plant cellulose, suitable for vegetarians. The formula is explicitly free from gluten, lactose, milk protein, yeast, artificial colors, flavors, and preservatives, and is non-GMO. From strain cultivation to final encapsulation, every step aims to minimize unnecessary additives, letting the core ingredients speak for themselves.

**From a Health Manager's Perspective: Clinical Context & Combination Ideas**
From a holistic health management viewpoint, gut health is the starting point for many wellness protocols. Health practitioners may view probiotic supplementation as part of maintaining the gut barrier and supporting the foundational functions of the immune system. It can be combined with a balanced diet and prebiotic-rich foods (like onions, garlic, bananas) to form a more comprehensive daily practice. When addressing specific digestive discomforts, it may also be paired with other nutrients that support digestion or soothe the gut, but specific protocols should be based on individual circumstances.

**Usage & Dosage**
For long-term daily maintenance, the recommendation is 1-2 capsules daily, taken with ample water about 30 minutes before a meal or at bedtime. To help establish the initial flora, a phased intensive protocol can be used: For the first 10 days, take 3 capsules, three times daily; for the next 10 days, take 2 capsules, three times daily; for the final 10 days, take 1 capsule, three times daily. Afterwards, switch to the daily maintenance dose. Children's dosage should be halved or follow specific guidance. Do not exceed the recommended daily intake.

**Important Notes**
Food supplements should not replace a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing. Individual responses may vary. Consult a health professional if discomfort persists.`,ingredient_reference:`**Lactobacillus acidophilus**
This is a common lactic acid bacterium primarily inhabiting the small intestine. It helps maintain an acidic gut environment, inhibits the overgrowth of undesirable microbes, and supports the breakdown of nutrients. In this formula, it serves as one of the foundational strains, creating favorable conditions for other strains to colonize. Suitable for those seeking to support gut environment balance from multiple angles.

**Lactococcus lactis**
This bacterium is known for its acid-producing ability, helping to quickly adjust the local microenvironment's pH. It plays a significant role in fermentation and can produce certain beneficial metabolites. In this complex formula, it works synergistically with other strains to promote an overall environment less favorable for harmful bacteria.

**Lactobacillus rhamnosus**
This strain is widely studied for its good intestinal adhesion and tolerance. It is believed to help support the integrity of the gut barrier and is associated with normal immune system communication. In the formula, it enhances the colonization potential of the flora on the intestinal mucosal layer.

**Streptococcus thermophilus**
Often used with Lactobacillus bulgaricus in yogurt fermentation, it tolerates the digestive process well. This strain aids in lactose breakdown and produces exopolysaccharides, which may have a soothing effect on the gut mucosa. In the formula, it complements the functions of other Lactobacilli.

**Lactobacillus casei**
This is a highly adaptable strain that can survive in different parts of the gastrointestinal tract. It participates in the metabolism of various carbohydrates and may help regulate intestinal motility rhythms. It works synergistically with the prebiotics in the formula, utilizing the nutrition they provide for proliferation.

**Lactobacillus plantarum**
This strain has broad metabolic activity and can produce various enzymes. It helps break down complex plant-based substances and may support the antioxidant defense system. Within the mixed flora, it enriches the diversity of metabolic functions of the entire microbial community.

**Bifidobacterium longum**
As one of the dominant beneficial bacteria in the colon, Bifidobacterium longum excels at fermenting dietary fiber to produce short-chain fatty acids, which are a crucial energy source for colon cells. It is essential for maintaining a healthy colon environment and has a powerful synergistic effect with prebiotics like inulin in the formula.

**Bifidobacterium breve**
This Bifidobacterium is particularly common in infant and toddler guts but is also present in adults. It helps maintain a youthful state of the gut flora and supports the balanced regulation of other bacterial groups. In the formula, it complements the function of B. longum, especially in utilizing oligosaccharides.

**Bifidobacterium bifidum**
This is another important colon commensal bacterium, known for its ability to colonize the intestinal mucosal layer. It directly participates in maintaining the gut's physical barrier and competitively excludes pathogens. In this nine-strain system, it works together with B. longum and B. breve to provide comprehensive support from the Bifidobacterium genus.

**Inulin (from Agave) & Resistant Dextrin (Nutriose®)**
These are not live bacteria but act as prebiotics. Inulin is a natural water-soluble fiber that selectively promotes the growth of Bifidobacteria and Lactobacilli. Resistant dextrin is also a non-digestible carbohydrate that ferments slowly, providing a sustained energy source for beneficial bacteria throughout the colon. Together, they provide "food" for the nine strains in the formula and are key supporting components for whether the flora can successfully colonize and exert long-term effects.`}}},{name:"Mannayan LEZITHIN + (Granulat)",url:"https://mannayan.com/Mannayan-LEZITHIN-Granulat/010066",price:["20,90 €"],product_number:"010066",quantity:["125g"],image_url:"https://mannayan.com/media/7b/77/4e/1625733846/Lezithin%2B.jpg?ts=1625733854",image_local:"images/Lezithin%2B.jpg",content:{cn:{label:`Mannayan 卵磷脂+（颗粒）
源自非转基因大豆的全食物磷脂
• 支持细胞膜结构与功能
• 促进脂质代谢与肝脏健康
• 助力专注力与神经信号传递
• 提供必需磷脂与脂肪酸
• 125克颗粒剂，每日1-2茶匙（3-6克）
• 全食物来源，无填充剂与粘合剂
• 适合素食者、纯素者、念珠菌敏感人群
• 不含麸质、乳制品、糖、人工添加剂`,short_description:`你是否感觉思维有时像蒙上了一层薄雾，不够清晰？或是日常的精力管理总有些力不从心？这些感受背后，可能与身体细胞层面的基础营养支持有关。

Mannayan 卵磷脂+颗粒提供了一种来自非转基因大豆的全食物磷脂复合物。它不是单一的提取物，而是完整保留了天然大豆中存在的多种磷脂成分，特别是高比例的磷脂酰胆碱。这些磷脂是构成我们身体每一个细胞膜的基本材料，就像建筑的砖瓦，直接影响着细胞的完整性和信息交换能力。

每日1到2茶匙，可以直接食用，也可以轻松拌入酸奶、麦片或果汁中。它不含任何填充剂、粘合剂、麸质、乳制品、糖或人工色素香料，配方纯净简单。每一茶匙（3克）都浓缩了来自全食物的营养智慧。`,long_description:`在快节奏的生活中，维持清晰的思维和持久的精力是一项持续的挑战。你可能注意到注意力不易集中，记忆琐事变得费力，或是身体在应对压力后恢复缓慢。这些不仅仅是疲劳的信号，它们往往指向更深层的需求——为构成身体亿万细胞的细胞膜提供优质的建筑材料。

**食物态技术与纯净提取**
Mannayan 卵磷脂+采用全食物理念制成。它并非化学合成的单一成分，而是从完整的非转基因大豆中温和提取其天然的磷脂复合物。生产过程摒弃了常规脱油卵磷脂中常用的填充剂和粘合剂，这使得最终产品中的磷脂酰胆碱比例高达32%，更接近食物原本的协同状态。这种颗粒形态的卵磷脂，易于消化吸收，也方便融入日常饮食。

**一个完整的磷脂支持体系**
这款产品提供的不是一种成分，而是一个协同工作的磷脂家族。磷脂酰胆碱作为主力，是细胞膜结构的关键和神经递质乙酰胆碱的前体，直接关联思维清晰度。磷脂酰肌醇参与细胞信号传导，影响情绪与代谢调节。磷脂酰乙醇胺则支持细胞膜的流动性。它们共同作用，从基础层面维护细胞的完整性与功能，支持肝脏健康代谢脂质，并为神经系统的顺畅沟通提供营养基础。这种复合作用，是单一成分难以企及的。

**适合这些生活状态的人**
它适合那些寻求从根本滋养神经系统、支持大脑健康的人；适合饮食中优质磷脂来源不足的素食者与纯素者；也适合关注肝脏日常养护、希望促进脂质健康代谢的人群。对于学业或工作强度大、需要保持思维敏捷的人，以及希望为整体细胞健康打下坚实营养基础的日常健康管理者，这都是一项简洁而基础的支持。

**纯净与成分的完整性**
产品的纯净度是其效力的核心。配方中只有一种成分：大豆卵磷脂颗粒。它不含麸质、乳制品、糖、淀粉、酵母、人工色素、香料或防腐剂。这种极简的构成，确保了身体接收到的就是食物中最有价值的磷脂复合物本身，没有不必要的负担。对于念珠菌敏感或注重纯净饮食的人来说，这是一个安心的选择。

**给健康管理者与搭配建议**
许多自然疗法师和健康顾问将卵磷脂视为基础营养支持方案的一部分。由于其支持脂质代谢和细胞膜健康的特性，它常被纳入肝脏养护、认知支持或心血管健康的整体方案中。它可以与Omega-3脂肪酸（如鱼油或藻油）协同使用，因为两者都是细胞膜的重要组成，相辅相成。在制定个性化方案时，健康管理者会考虑个人的整体状态与目标。

**用法与剂量**
建议每日服用1至2茶匙（约3至6克），随足量液体吞服，或直接拌入冷饮、酸奶、麦片、沙拉中食用。颗粒口感温和，带有天然的坚果香气，易于接受。儿童可将剂量减半，而老年人、运动员或从事高强度脑力、体力活动者，可根据个体需要酌情增加。请勿超过推荐每日食用量。

**重要提示**
本产品为全食物营养补充剂，不能替代均衡多样的饮食。对大豆过敏者请勿食用。请置于儿童无法触及之处，避光、阴凉、干燥保存。若密封条缺失，请勿食用。`,ingredient_reference:`**大豆卵磷脂颗粒（磷脂复合物）**
这是一种从非转基因大豆中提取的天然脂质复合物，富含多种磷脂。它在体内是构成所有细胞膜的基本结构成分，直接影响细胞的完整性、流动性和物质交换。作为全食物来源的颗粒，它提供了磷脂的天然比例和伴随的营养物质。特别适合那些希望从食物本源获取细胞膜营养、支持整体细胞健康的人群。在配方中，它本身就是完整的协同体，各磷脂成分共同发挥构建与支持作用。

**磷脂酰胆碱**
这是卵磷脂中最具代表性的磷脂成分，在本产品中含量高达32%。它是细胞膜磷脂双分子层的主要构成物，也是神经递质乙酰胆碱的重要前体。其作用直接关系到细胞膜的稳定修复以及神经信号的正常传递。采用高比例的全食物形式，意味着它与其他磷脂天然共存，吸收利用更符合生理规律。对于关注认知功能、肝脏健康（参与脂肪转运）以及整体细胞维护的人，这是核心成分。它与配方中的其他磷脂共同构成了细胞膜的完整“建材”组合。

**磷脂酰肌醇**
这是存在于细胞膜内层的一种重要磷脂，参与复杂的细胞内信号传导系统。它在细胞对激素和神经递质的反应、以及调节钙离子释放等过程中扮演角色，从而影响情绪、代谢和细胞生长等基本过程。作为全食物卵磷脂的天然组成部分，它与磷脂酰胆碱等共同维持膜的结构与功能动态平衡。适合那些希望支持细胞信号通路健康、从更精细层面关注代谢平衡的人群。其作用与磷脂酰胆碱相辅相成，一个偏重结构与基础信号，一个深入参与次级信号调控。

**磷脂酰乙醇胺**
这是细胞膜中另一类丰富的磷脂，主要分布在膜的内层。它有助于维持细胞膜的流动性和曲度，对于细胞分裂、膜融合（如神经末梢释放递质）等过程非常重要。同样以天然比例存在于大豆卵磷脂中。对于支持整体的细胞膜物理特性与功能至关重要。它与磷脂酰胆碱在空间上相互协调，共同稳定膜结构，确保其既坚固又灵活。

**磷脂酸与溶血磷脂酰胆碱**
这些是卵磷脂复合物中天然存在的其他磷脂成分。磷脂酸是多种磷脂生物合成的前体，本身也参与细胞信号传导。溶血磷脂酰胆碱则是磷脂代谢中的一种形式，具有一定的乳化特性。它们虽然在配方中含量相对较少，但作为全食物复合物的一部分，代表了天然磷脂谱系的完整性，贡献于整体的营养协同效应。`},en:{label:`Mannayan Lecithin+ (Granules)
Whole-Food Phospholipids from Non-GMO Soybeans
• Supports Cell Membrane Structure & Function
• Promotes Lipid Metabolism & Liver Health
• Aids Focus & Neural Signaling
• Provides Essential Phospholipids & Fatty Acids
• 125g Granules, 1-2 tsp (3-6g) Daily
• Whole-Food Source, No Fillers or Binders
• Suitable for Vegetarians, Vegans, Candida-Sensitive Individuals
• Free from Gluten, Dairy, Sugar, Artificial Additives`,short_description:`Do you ever feel like your thinking is a bit foggy, not as sharp as it could be? Or find that managing your daily energy is a constant struggle? These feelings may be connected to foundational nutritional support at the cellular level.

Mannayan Lecithin+ Granules offer a whole-food phospholipid complex sourced from non-GMO soybeans. It's not a single extract, but a complete complex that retains the diverse phospholipid profile naturally present in soybeans, particularly a high proportion of phosphatidylcholine. These phospholipids are the fundamental building blocks of every single cell membrane in your body—like the bricks and mortar of a building—directly influencing cellular integrity and communication.

Take 1 to 2 teaspoons daily. You can consume it directly or easily mix it into yogurt, cereal, or juice. It contains no fillers, binders, gluten, dairy, sugar, or artificial colors and flavors—a pure and simple formula. Every teaspoon (3g) concentrates the nutritional wisdom of whole food.`,long_description:`In our fast-paced lives, maintaining clear thinking and sustained energy is an ongoing challenge. You might notice difficulty concentrating, that remembering small things feels like a chore, or that your body recovers slowly after stress. These aren't just signs of fatigue; they often point to a deeper need—providing high-quality building materials for the cell membranes that make up your body's billions of cells.

**Whole-Food Technology & Pure Extraction**
Mannayan Lecithin+ is crafted with a whole-food philosophy. It is not a chemically synthesized single ingredient, but a gentle extraction of the natural phospholipid complex from complete, non-GMO soybeans. The production process avoids the fillers and binders commonly used in standard de-oiled lecithin, resulting in a final product with a phosphatidylcholine content as high as 32%, closer to the synergistic state found in food. This granular form of lecithin is easy to digest, absorb, and incorporate into your daily diet.

**A Complete Phospholipid Support System**
This product provides not one ingredient, but a synergistic family of phospholipids working together. Phosphatidylcholine, as the primary component, is crucial for cell membrane structure and a precursor to the neurotransmitter acetylcholine, directly linked to mental clarity. Phosphatidylinositol is involved in cellular signaling, influencing mood and metabolic regulation. Phosphatidylethanolamine supports cell membrane fluidity. Together, they work from the ground up to maintain cellular integrity and function, support the liver in healthy lipid metabolism, and provide a nutritional foundation for smooth nervous system communication. This complex action is difficult to achieve with a single ingredient.

**For These Lifestyles**
It's suitable for those seeking to nourish the nervous system and support brain health at a foundational level; for vegetarians and vegans whose diets may lack sufficient quality phospholipid sources; and for individuals focused on daily liver care and promoting healthy lipid metabolism. For students or professionals under high pressure who need to maintain mental agility, and for daily health managers wanting to build a solid nutritional foundation for overall cellular health, this is a simple yet fundamental support.

**Purity & Ingredient Integrity**
The purity of the product is central to its efficacy. The formula contains only one ingredient: Soy Lecithin Granules. It is free from gluten, dairy, sugar, starch, yeast, artificial colors, flavors, or preservatives. This minimalist composition ensures your body receives the valuable phospholipid complex from food itself, without unnecessary burden. It's a reassuring choice for those sensitive to candida or who prioritize a clean diet.

**For Health Managers & Synergistic Pairing**
Many naturopaths and health advisors consider lecithin a part of foundational nutritional support. Due to its properties supporting lipid metabolism and cell membrane health, it is often incorporated into holistic protocols for liver care, cognitive support, or cardiovascular health. It can be used synergistically with Omega-3 fatty acids (like fish oil or algae oil), as both are vital components of cell membranes, complementing each other. When creating personalized protocols, health managers consider an individual's overall state and goals.

**Usage & Dosage**
The recommended daily intake is 1 to 2 teaspoons (approx. 3 to 6g). Take with plenty of liquid, or mix directly into cold beverages, yogurt, cereal, or salads. The granules have a mild taste with a natural nutty aroma and are easy to accept. For children, reduce the dose by half. The elderly, athletes, or those engaged in intense mental or physical activities may increase the amount as needed based on individual requirements. Do not exceed the recommended daily intake.

**Important Notes**
This product is a whole-food dietary supplement and is not a substitute for a balanced and varied diet. Do not consume if you have a soy allergy. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the seal is missing.`,ingredient_reference:`**Soy Lecithin Granules (Phospholipid Complex)**
This is a natural lipid complex extracted from non-GMO soybeans, rich in various phospholipids. In the body, it serves as the fundamental structural component of all cell membranes, directly influencing cellular integrity, fluidity, and material exchange. As a whole-food source in granular form, it provides phospholipids in their natural ratios along with accompanying nutrients. It is particularly suitable for those seeking cell membrane nutrition from a food-based source to support overall cellular health. In the formula, it is itself a complete synergistic entity, with all phospholipid components working together in construction and support.

**Phosphatidylcholine**
This is the most representative phospholipid in lecithin, constituting up to 32% of this product. It is a primary component of the phospholipid bilayer in cell membranes and a crucial precursor to the neurotransmitter acetylcholine. Its functions are directly related to the stability, repair of cell membranes, and normal transmission of nerve signals. Being in a high-concentration, whole-food form means it naturally coexists with other phospholipids, making its absorption and utilization more aligned with physiological patterns. For those focused on cognitive function, liver health (involved in fat transport), and overall cellular maintenance, this is the core component. Together with other phospholipids in the formula, it forms a complete set of 'building materials' for cell membranes.

**Phosphatidylinositol**
This is an important phospholipid located in the inner layer of cell membranes, involved in complex intracellular signaling systems. It plays a role in cellular responses to hormones and neurotransmitters, as well as processes like regulating calcium ion release, thereby influencing fundamental processes such as mood, metabolism, and cell growth. As a natural component of whole-food lecithin, it works alongside phosphatidylcholine to maintain the structural and functional dynamic balance of membranes. It is suitable for those wishing to support healthy cellular signaling pathways and pay attention to metabolic balance at a more refined level. Its action complements phosphatidylcholine—one focuses on structure and basic signaling, the other delves into secondary signal regulation.

**Phosphatidylethanolamine**
This is another abundant class of phospholipids in cell membranes, primarily distributed in the inner layer. It helps maintain the fluidity and curvature of cell membranes, which is very important for processes like cell division and membrane fusion (e.g., neurotransmitter release at nerve terminals). It is also present in soy lecithin in its natural proportion. It is crucial for supporting the overall physical properties and functions of cell membranes. It spatially coordinates with phosphatidylcholine to jointly stabilize membrane structure, ensuring it is both sturdy and flexible.

**Phosphatidic Acid & Lysophosphatidylcholine**
These are other phospholipid components naturally present in the lecithin complex. Phosphatidic acid is a precursor for the biosynthesis of various phospholipids and itself participates in cellular signaling. Lysophosphatidylcholine is a form in phospholipid metabolism with certain emulsifying properties. Although present in relatively smaller amounts in the formula, as part of the whole-food complex, they represent the completeness of the natural phospholipid spectrum, contributing to the overall nutritional synergy.`}}},{name:"Mannayan LIPO-GLUTATHION Kombi + (60 Kapseln)",url:"https://mannayan.com/Mannayan-LIPO-GLUTATHION-Kombi-60-Kapseln/010068",price:["59,90 €"],product_number:"010068",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/15/da/2c/1766137119/Lipo-GLutathion-Kombi%2B_2025.jpg?ts=1766137119",image_local:"images/Lipo-GLutathion-Kombi%2B_2025.jpg",content:{cn:{label:`Mannayan LIPO-GLUTATHION Kombi+
细胞守护者
• 支持细胞自身抗氧化系统
• 促进细胞内关键保护分子再生
• 帮助应对日常氧化压力
• 维持细胞能量代谢平衡
60粒胶囊 | 每日1-2粒
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、素食适用`,short_description:`你是否感觉身体容易疲惫，精力恢复不如从前，或者皮肤状态对外界变化格外敏感？这些感受可能与我们每天面对的氧化压力有关。身体细胞需要持续应对来自环境、生活方式和代谢过程产生的挑战。

Mannayan LIPO-GLUTATHION Kombi+ 提供一种协同作用的支持方案。其核心在于采用脂质体包裹的谷胱甘肽，这种形式旨在帮助关键成分更好地进入细胞内部，在需要的地方发挥作用。配方中还结合了α-硫辛酸、N-乙酰左旋肉碱和多种植物提取物，共同支持身体自身的保护系统。

这不仅仅是为细胞补充单一成分，而是通过多种途径支持细胞内谷胱甘肽的循环与再生，帮助维持细胞的平衡状态。适合那些希望从细胞层面给予身体支持，应对现代生活节奏带来的压力的人群。

每瓶含60粒胶囊，建议每日随餐服用1至2粒。配方纯净，不含麸质、乳糖、大豆、人工色素、甜味剂及防腐剂，适合素食者及过敏体质者。`,long_description:`当身体长时间处于高压状态，或是感到恢复能力变慢时，往往提示细胞层面的平衡需要更多关注。氧化压力是身体自然代谢的一部分，但现代生活的节奏、环境因素会使其增加，可能影响细胞的正常功能与活力。

**脂质体递送技术**
产品中的核心成分——还原型谷胱甘肽，采用了脂质体包裹技术。脂质体是由磷脂构成的微小囊泡，其结构与人体细胞膜相似。这种设计旨在保护谷胱甘肽在消化过程中不被过早分解，并促进其穿过细胞膜屏障，更有效地递送到细胞内部发挥作用，这是支持细胞内抗氧化网络的关键一步。

**一个完整的协同支持体系**
这个配方构建了一个相互支持的系统。脂质体谷胱甘肽作为细胞内主要抗氧化剂直接提供支持。α-硫辛酸是一种兼具水溶与脂溶特性的独特成分，它不仅能直接中和自由基，更重要的作用在于帮助再生体内其他抗氧化剂，包括维生素C、维生素E和谷胱甘肽本身，形成一个循环再生的网络。N-乙酰左旋肉碱则主要支持细胞能量工厂——线粒体的功能，为细胞的维护与修复过程提供能量基础。来自虎杖的白藜芦醇、银杏叶提取物和迷迭香提取物，则提供了多酚类化合物的广泛益处，从不同通路辅助减轻氧化压力，共同维护细胞的清晰与活力。

**适合的人群**
这款产品适合那些生活节奏快、经常感到身心俱疲，希望为身体提供深层支持的人。也适合那些关注长期健康，意识到需要从细胞根本层面进行维护，而不仅仅是缓解表面症状的人。对于饮食习惯可能不够均衡，或身处环境污染较重地区的人群，它也是一种主动的日常支持选择。

**纯净与成分完整性**
我们坚信，补充剂应该只包含身体真正需要的成分。因此，配方中剔除了所有不必要的添加物：无麸质、无乳糖、无大豆、无人工色素、甜味剂、香料和防腐剂。胶囊壳采用植物源的羟丙甲纤维素，确保产品适合素食者和有多种食物敏感的人群。成分的纯净是有效性的基础。

**健康管理者与搭配方案**
许多自然疗法医师和健康顾问将此类协同抗氧化支持方案，视为现代健康管理的基础模块之一。它常被用于支持肝脏解毒路径、维护皮肤健康、或作为运动恢复方案的组成部分。临床实践中，它可能与维生素C、维生素D或Omega-3脂肪酸等基础营养素搭配，构建更全面的日常健康支持体系。在使用任何补充剂前，特别是正在服用处方药物者，咨询您的健康顾问是明智之举。

**用法与剂量**
建议每日随餐服用1至2粒胶囊，并用足量水送服。随餐服用有助于提高脂溶性成分的吸收，并减少个别敏感人群可能出现的轻微不适。剂量可根据个人需求和健康顾问的具体指导进行调整。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请勿超过推荐每日用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若密封条破损，请勿食用。`,ingredient_reference:`**还原型L-谷胱甘肽（脂质体形式）**
谷胱甘肽是人体每个细胞内部自行产生的最重要的抗氧化剂，被称为“抗氧化剂之母”。它直接在中和自由基、支持肝脏解毒过程和维持免疫细胞功能中扮演核心角色。本品采用脂质体包裹的还原型（活性形式）谷胱甘肽，旨在提高其通过消化系统并进入细胞内部的生物利用度。它特别适合那些希望直接支持细胞内抗氧化防御系统核心的人群。在配方中，它与α-硫辛酸和白藜芦醇协同工作，后两者有助于谷胱甘肽的再生循环。

**N-乙酰左旋肉碱**
N-乙酰左旋肉碱是左旋肉碱的一种生物利用度更高的形式。它的主要作用场所是细胞的线粒体，即细胞的“能量工厂”，帮助将脂肪酸运输进去以产生能量。除了支持能量代谢，它本身也具有抗氧化特性，能帮助保护线粒体免受氧化损伤。它非常适合那些感觉精力不足、希望支持细胞能量生产效率和大脑健康的人群。在配方中，它为细胞的修复和维护过程提供必需的能量底物，与抗氧化网络相辅相成。

**α-硫辛酸**
α-硫辛酸是一种独特的多功能营养素，既溶于水也溶于脂肪，因此能在全身各种细胞和组织中发挥作用。它不仅是强效的自由基清除剂，更关键的作用是能够再生其他抗氧化剂，如维生素C、维生素E以及最重要的——谷胱甘肽。这使它成为细胞内抗氧化循环网络的“再生催化剂”。它特别适合需要全面抗氧化支持，尤其是关注血糖代谢健康的人群。在本配方中，它是维持谷胱甘肽持续有效性的关键。

**白藜芦醇（来自虎杖提取物）**
白藜芦醇是一种存在于葡萄、浆果和虎杖中的多酚类化合物。它通过激活体内一系列与细胞保护、能量代谢和抗衰老相关的基因通路（如SIRT1）来发挥作用。除了直接的抗氧化作用，它更侧重于支持细胞的适应力和长期健康。它适合那些关注细胞长期活力与维护机制的人群。在协同配方中，白藜芦醇从表观遗传调控层面提供支持，与直接抗氧化成分形成互补。

**银杏叶提取物**
银杏叶提取物富含黄酮类和萜内酯类化合物。这些成分以其支持微循环和大脑认知功能而闻名，其机制部分源于其抗氧化和抗炎特性，能帮助保护血管内皮细胞和神经细胞免受氧化损伤。它非常适合那些用脑过度、希望支持大脑清晰度和血液循环的人群。在此配方中，它扩展了抗氧化保护的范围，特别关注神经系统和血管系统的健康。

**迷迭香提取物**
迷迭香提取物含有多种活性成分，如鼠尾草酸和迷迭香酸，具有显著的抗氧化和抗炎特性。它不仅能直接中和自由基，还能增强身体内源性抗氧化酶的活性。迷迭香提取物传统上用于支持消化和认知健康。它适合寻求来自香草植物的广泛保护作用的人群。在这个复合配方中，迷迭香提取物增加了植物多酚的多样性和协同效应，使抗氧化防御网络更加全面和稳固。`},en:{label:`Mannayan LIPO-GLUTATHIONE Kombi+
Cellular Guardian
• Supports the cell's own antioxidant system
• Promotes regeneration of key protective molecules within cells
• Helps address daily oxidative stress
• Maintains cellular energy metabolism balance
60 Capsules | 1-2 capsules daily
Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Do you often feel easily fatigued, find your energy slow to recover, or notice your skin is particularly sensitive to environmental changes? These feelings may be connected to the oxidative stress we face daily. Our body's cells continuously work to manage challenges from our environment, lifestyle, and metabolic processes.

Mannayan LIPO-GLUTATHIONE Kombi+ offers a synergistic support system. At its core is liposomal glutathione, a form designed to help this key ingredient reach the inside of cells where it's needed. The formula also combines alpha-lipoic acid, N-Acetyl L-Carnitine, and select botanical extracts to collectively support the body's own protective systems.

This is more than just supplementing a single nutrient; it's about supporting the glutathione cycle and regeneration within cells through multiple pathways, helping to maintain cellular balance. It's suitable for those looking to support their body at a cellular level to cope with the pressures of modern life.

Each bottle contains 60 capsules. The suggested use is 1 to 2 capsules daily with a meal. The formula is pure, free from gluten, lactose, soy, artificial colors, sweeteners, and preservatives, making it suitable for vegetarians and those with sensitivities.`,long_description:`When the body is under prolonged stress or recovery feels slower, it often signals that cellular balance needs more attention. Oxidative stress is a natural part of metabolism, but the pace of modern life and environmental factors can increase it, potentially affecting normal cellular function and vitality.

**Liposomal Delivery Technology**
The core ingredient—reduced glutathione—utilizes liposomal encapsulation. Liposomes are microscopic vesicles made from phospholipids, similar in structure to human cell membranes. This design aims to protect glutathione from premature breakdown during digestion and facilitate its passage across the cell membrane barrier, delivering it more effectively inside the cell to work where it's needed. This is a key step in supporting the intracellular antioxidant network.

**A Complete Synergistic Support System**
This formula builds a mutually supportive system. Liposomal glutathione provides direct support as a primary intracellular antioxidant. Alpha-lipoic acid is a unique compound with both water- and fat-soluble properties. It not only directly neutralizes free radicals but, more importantly, helps regenerate other antioxidants in the body, including vitamins C and E, and glutathione itself, creating a regenerative network. N-Acetyl L-Carnitine primarily supports the function of the mitochondria—the cell's energy factories—providing the energetic foundation for cellular maintenance and repair. Resveratrol from Japanese knotweed, Ginkgo biloba leaf extract, and Rosemary extract offer the broad benefits of polyphenols, assisting in reducing oxidative stress through different pathways to collectively maintain cellular clarity and vitality.

**Who It's For**
This product is suitable for those with fast-paced lives who often feel physically and mentally drained and seek deep support for their body. It's also for individuals focused on long-term health who recognize the need for maintenance at the fundamental cellular level, beyond just addressing surface symptoms. For those whose diets may not be perfectly balanced or who live in areas with higher environmental pollution, it serves as a proactive choice for daily support.

**Purity and Ingredient Integrity**
We firmly believe supplements should contain only what the body truly needs. Therefore, the formula excludes all unnecessary additives: it is gluten-free, lactose-free, soy-free, and contains no artificial colors, sweeteners, flavors, or preservatives. The capsule shell is made from plant-derived hydroxypropyl methylcellulose, ensuring suitability for vegetarians and those with multiple food sensitivities. The purity of ingredients is the foundation of efficacy.

**Health Practitioners & Combination Strategies**
Many naturopathic doctors and health advisors view such synergistic antioxidant support as a foundational module in modern health management. It is often used to support liver detoxification pathways, maintain skin health, or as part of a post-exercise recovery protocol. In clinical practice, it may be combined with foundational nutrients like vitamin C, vitamin D, or omega-3 fatty acids to build a more comprehensive daily health support system. Consulting your healthcare advisor before starting any new supplement, especially if you are taking prescription medication, is always wise.

**Usage & Dosage**
The suggested use is 1 to 2 capsules daily with a meal, taken with a full glass of water. Taking it with food can aid the absorption of fat-soluble components and may reduce the chance of minor digestive discomfort for sensitive individuals. The dosage can be adjusted based on individual needs and the specific guidance of your healthcare advisor.

**Important Information**
This product is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. It is not a substitute for a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from direct light. Do not consume if the safety seal is broken.`,ingredient_reference:`**Reduced L-Glutathione (Liposomal Form)**
Glutathione is the most important antioxidant produced internally by every cell in the human body, often called the 'master antioxidant.' It plays a central role in directly neutralizing free radicals, supporting liver detoxification processes, and maintaining immune cell function. This product uses liposomal-encapsulated reduced (active form) glutathione, designed to enhance its bioavailability through the digestive system and into the cells. It is particularly suitable for those looking to directly support the core of the intracellular antioxidant defense system. In this formula, it works synergistically with alpha-lipoic acid and resveratrol, which help in the regeneration and recycling of glutathione.

**N-Acetyl L-Carnitine**
N-Acetyl L-Carnitine is a more bioavailable form of L-carnitine. Its primary site of action is the mitochondria, the cell's 'power plants,' where it helps transport fatty acids for energy production. Beyond supporting energy metabolism, it also possesses its own antioxidant properties, helping to protect mitochondria from oxidative damage. It is well-suited for those feeling low on energy and wishing to support cellular energy production efficiency and brain health. In this formula, it provides the essential energy substrate for cellular repair and maintenance processes, complementing the antioxidant network.

**Alpha-Lipoic Acid**
Alpha-lipoic acid is a unique, multifunctional nutrient that is both water- and fat-soluble, allowing it to work throughout various cells and tissues in the body. It is not only a potent free radical scavenger but, more crucially, can regenerate other antioxidants like vitamin C, vitamin E, and most importantly—glutathione. This makes it a 'regenerative catalyst' for the intracellular antioxidant recycling network. It is especially suitable for those seeking comprehensive antioxidant support, particularly individuals mindful of metabolic health. In this formula, it is key to maintaining the ongoing effectiveness of glutathione.

**Resveratrol (from Japanese Knotweed Extract)**
Resveratrol is a polyphenol compound found in grapes, berries, and Japanese knotweed. It works by activating a series of genetic pathways in the body related to cellular protection, energy metabolism, and healthy aging (such as SIRT1). Beyond direct antioxidant action, it focuses more on supporting cellular resilience and long-term health. It is suitable for those concerned with long-term cellular vitality and maintenance mechanisms. In this synergistic formula, resveratrol provides support at the level of epigenetic regulation, complementing the direct antioxidant components.

**Ginkgo Biloba Leaf Extract**
Ginkgo biloba leaf extract is rich in flavonoids and terpene lactones. These compounds are renowned for supporting microcirculation and cognitive function, partly due to their antioxidant and anti-inflammatory properties, which help protect vascular endothelial cells and nerve cells from oxidative damage. It is ideal for those with high mental demands who wish to support mental clarity and circulation. In this formula, it extends the scope of antioxidant protection, with particular focus on nervous system and vascular health.

**Rosemary Extract**
Rosemary extract contains several active compounds, such as carnosic acid and rosmarinic acid, known for their significant antioxidant and anti-inflammatory properties. It not only directly neutralizes free radicals but can also enhance the activity of the body's endogenous antioxidant enzymes. Rosemary extract has traditionally been used to support digestive and cognitive health. It is suitable for those seeking broad protective benefits from herbal sources. In this complex formula, rosemary extract adds to the diversity and synergy of plant polyphenols, making the antioxidant defense network more comprehensive and robust.`}}},{name:"Mannayan MAG + (60 Tabletten)",url:"https://mannayan.com/Mannayan-MAG-60-Tabletten/010069",price:["31,20 €"],product_number:"010069",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/7c/0c/eb/1766137191/Mag%2B_2025.jpg?ts=1766137191",image_local:"images/Mag%2B_2025.jpg",content:{cn:{label:`Mannayan MAG+ 镁补充剂 | 食物态镁 | 60片

支持能量代谢
维持肌肉与神经功能
缓解疲劳感
促进骨骼健康
辅助蛋白质合成

每片含100毫克食物态镁（27% NRV）
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、适合素食者`,short_description:`你是否感觉白天精力不济，容易疲劳，或是肌肉偶尔感到紧绷不适？这些常常是身体发出的微妙信号，提示日常饮食可能无法满足对镁的全面需求。

Mannayan MAG+ 提供一种更接近天然食物的镁补充形式。它采用独特的食物态技术，将镁整合到富含活性转运蛋白和碳水化合物的营养基质中。这种方式让身体像识别、吸收食物中的营养一样来利用它，不仅吸收效率高，也更为温和，避免了高剂量矿物质可能带来的肠胃不适。

每片提供100毫克易于利用的镁。配方纯净，不含常见的过敏原和人工成分，适合包括素食者和敏感体质在内的广泛人群日常使用。`,long_description:`现代生活的节奏常常让身体处于持续的消耗状态。你可能注意到自己比以往更容易感到疲惫，即使睡眠充足，白天也难有充沛的精力；肌肉，尤其是小腿，在夜间或久坐后容易紧绷、抽筋；思绪有时难以平静，或是面对压力时身体的反应更为明显。这些看似不相关的零星感受，往往指向同一个基础营养素的平衡——镁。

**食物态技术：像食物一样被识别和利用**
Mannayan MAG+ 的核心在于其独特的递送方式。它不是简单的矿物质化合物，而是将有机结合的柠檬酸镁，整合到一个以保加利亚乳杆菌（灭活）为基础的营养基质中。这个基质天然含有碳水化合物、氨基酸和必要的转运物质。当身体接触到这种形式的镁时，识别系统将其归类为“食物”，从而启动与消化吸收天然食物成分相似的、高效的生物利用途径。这意味着，即使每片100毫克的剂量看起来并不惊人，但其被细胞实际摄取和利用的效率却显著提升，并且极大程度地减少了对消化系统的负担。

**一个完整的支持体系**
配方中的镁并非孤立工作。在食物态基质中，各种协同因子共同作用，确保镁离子能够顺利抵达并进入需要它的细胞内部，特别是肌肉和神经细胞。这种“护送”机制，模拟了天然食物中矿物质与其它营养素协同存在的状态，使得补充的镁能够更有效地参与到数百种酶促反应中，从支持线粒体产生能量，到调节神经递质的平衡，再到维持肌肉纤维的正常收缩与放松，形成一个内在的支持网络。

**适合哪些生活情境**
它适合那些日常饮食精细、但体力或脑力消耗较大的人；适合因年龄增长或特定饮食习惯，对矿物质吸收效率有所关注的人；也适合在运动后需要支持肌肉恢复，或希望晚间身心能更平和放松的人。对于寻求纯净、温和补充方案的素食者或具有多种食物敏感性的人群，这同样是一个可靠的选择。

**纯净与成分的完整性**
我们坚信补充剂应尽可能简单、纯净。本品不含小麦、麸质、乳制品、大豆、酵母、淀粉、添加糖、人工色素、香料或防腐剂。片剂辅料仅使用植物纤维素等必要的成型剂。这种纯粹的配方，旨在让你补充的只是你需要的营养本身，别无他物。

**给健康管理者的搭配建议**
镁与钙在体内的代谢相互关联。临床实践中常建议将两者分开服用，以优化各自的吸收和利用。一个经典的方案是：早晨补充钙，晚间补充镁。Mannayan MAG+ 与同系列的钙补充剂（如Mannayan Cal+）搭配，可以模拟天然食物中矿物质平衡的节律。镁在晚间服用，还有助于舒缓日间的神经紧张，为平静入睡创造有利条件。建议两者服用时间间隔约一小时。

**用法与剂量**
日常基础支持，建议每日1至3片，随餐或餐后用足量水送服。在感觉需求较高、压力增大或体力消耗增加的时期，可增至每日4片，或遵循专业健康顾问的指导。为获得最佳效果，建议持续补充。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，于阴凉干燥处避光保存。若密封条破损，请勿食用。`,ingredient_reference:`**食物态镁复合物（来自柠檬酸镁与保加利亚乳杆菌营养基质）**
这是本产品的核心活性成分，一种经过特殊工艺处理的有机镁形式。镁是人体内含量第四丰富的矿物质，参与超过300种酶系统，是能量生产、神经信号传导和肌肉功能不可或缺的因子。这里使用的柠檬酸镁以其良好的溶解度和生物利用度著称，并进一步通过食物态技术进行优化。它被整合到灭活的保加利亚乳杆菌及其发酵产生的天然营养基质中。这种形式特别适合那些注重营养吸收效率、希望补充方式更贴近天然食物、或肠胃对常规高剂量矿物质补充剂较为敏感的人群。基质中的天然转运成分与镁协同，确保其被高效输送至细胞内发挥作用。

**柠檬酸镁（有机镁来源）**
柠檬酸镁是一种镁与柠檬酸结合的有机盐形式。与无机镁盐相比，它在消化道中更易溶解和吸收。它在体内主要贡献镁元素，而柠檬酸根则是三羧酸循环（能量代谢的核心过程）的中间产物，这为镁参与能量代谢提供了天然的协同路径。这种形式适合需要高效补充生物可利用镁的大多数人群。在产品中，它作为镁的供体，被嵌入食物态基质，从而获得超越其本身形式的吸收和利用特性。

**保加利亚乳杆菌（灭活）营养基质**
这里使用的并非活菌益生菌，而是经过灭活处理的保加利亚乳杆菌及其发酵产物构成的完整营养基质。它富含蛋白质、肽类、碳水化合物和脂质等细胞营养物质。其核心作用不是提供益生菌功能，而是作为一个“生物载体”或“食物识别信号”。它为镁提供了一个仿生的微环境，其中含有的天然氨基酸和糖类物质，充当了矿物质进入细胞所需的“伴侣”和转运载体。这尤其适合那些希望矿物质补充能模拟完整食物吸收过程的人。它与柠檬酸镁紧密协同，共同构成了“食物态”技术的物质基础，显著提升了镁的生物可及性和细胞利用率。`},en:{label:`Mannayan MAG+ Magnesium Supplement | Food-State Magnesium | 60 Tablets

Supports Energy Metabolism
Maintains Muscle & Nerve Function
Helps Alleviate Fatigue
Promotes Bone Health
Aids Protein Synthesis

Each tablet contains 100mg of food-state magnesium (27% NRV)
Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Do you feel low on energy during the day, easily fatigued, or occasionally experience muscle tightness and discomfort? These are often subtle signals from your body, suggesting that your daily diet may not fully meet your magnesium needs.

Mannayan MAG+ offers a form of magnesium supplementation that is closer to natural food. It utilizes a unique food-state technology that integrates magnesium into a nutrient matrix rich in active transport proteins and carbohydrates. This allows your body to recognize and utilize it much like nutrients from food—not only with high absorption efficiency but also more gently, avoiding the potential gastrointestinal discomfort that can come from high-dose mineral supplements.

Each tablet provides 100mg of readily available magnesium. The formula is pure, free from common allergens and artificial ingredients, making it suitable for daily use by a wide range of individuals, including vegetarians and those with sensitive constitutions.`,long_description:`The pace of modern life often keeps the body in a state of constant depletion. You may notice you tire more easily than before, struggling to maintain full energy during the day even with adequate sleep; your muscles, especially calves, tend to tighten or cramp at night or after prolonged sitting; your mind sometimes finds it hard to settle, or your body reacts more noticeably to stress. These seemingly unrelated, scattered sensations often point to the same foundational nutrient balance—magnesium.

**Food-State Technology: Recognized and Utilized Like Food**
The core of Mannayan MAG+ lies in its unique delivery system. It is not a simple mineral compound. Instead, organically bound magnesium citrate is integrated into a nutrient matrix based on inactivated Lactobacillus bulgaricus. This matrix naturally contains carbohydrates, amino acids, and essential transport substances. When the body encounters magnesium in this form, its recognition system categorizes it as "food," thereby activating highly efficient bioavailability pathways similar to those used for digesting and absorbing natural food components. This means that even though the 100mg per tablet dose may not seem remarkable, the efficiency with which it is actually taken up and utilized by cells is significantly enhanced, while greatly reducing the burden on the digestive system.

**A Complete Support System**
The magnesium in the formula does not work in isolation. Within the food-state matrix, various co-factors work together to ensure magnesium ions can smoothly reach and enter the cells that need them, particularly muscle and nerve cells. This "escort" mechanism mimics the state in which minerals coexist synergistically with other nutrients in natural food. This allows the supplemented magnesium to participate more effectively in hundreds of enzymatic reactions—from supporting mitochondrial energy production and regulating neurotransmitter balance, to maintaining normal muscle fiber contraction and relaxation—forming an intrinsic support network.

**Suitable For Which Life Situations**
It is suitable for those with refined diets but high physical or mental exertion; for those concerned about mineral absorption efficiency due to aging or specific dietary habits; and for those needing support for muscle recovery post-exercise, or wishing for greater calm and relaxation in the evening. It is also a reliable choice for vegetarians or individuals with multiple food sensitivities seeking a pure, gentle supplementation regimen.

**Purity & Ingredient Integrity**
We firmly believe supplements should be as simple and pure as possible. This product contains no wheat, gluten, dairy, soy, yeast, starch, added sugars, artificial colors, flavors, or preservatives. Tablet excipients use only necessary forming agents like plant cellulose. This pure formula aims to ensure you supplement with only the nutrients you need, and nothing else.

**Pairing Suggestions for Health Managers**
Magnesium and calcium metabolism are interrelated in the body. Clinical practice often recommends taking them separately to optimize their respective absorption and utilization. A classic regimen is: calcium in the morning, magnesium in the evening. Pairing Mannayan MAG+ with a calcium supplement from the same series (e.g., Mannayan Cal+) can mimic the natural rhythm of mineral balance found in food. Taking magnesium in the evening also helps soothe daytime nervous tension, creating favorable conditions for peaceful sleep. It is recommended to space the intake of the two by about one hour.

**Usage & Dosage**
For daily foundational support, take 1 to 3 tablets daily with or after meals, swallowed with plenty of water. During periods of perceived higher need, increased stress, or greater physical exertion, the dose can be increased to 4 tablets daily, or as directed by a professional health advisor. For best results, consistent supplementation is recommended.

**Important Notes**
Food supplements are not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is broken.`,ingredient_reference:`**Food-State Magnesium Complex (from Magnesium Citrate and Lactobacillus Bulgaricus Nutrient Matrix)**
This is the core active ingredient of the product, a specially processed organic form of magnesium. Magnesium is the fourth most abundant mineral in the human body, involved in over 300 enzyme systems, and is an indispensable factor for energy production, nerve signal transmission, and muscle function. The magnesium citrate used here is known for its good solubility and bioavailability, and is further optimized through food-state technology. It is integrated into an inactivated Lactobacillus bulgaricus and its naturally fermented nutrient matrix. This form is particularly suitable for those focused on nutrient absorption efficiency, who prefer a supplementation method closer to natural food, or whose digestive systems are sensitive to conventional high-dose mineral supplements. The natural transport components in the matrix work synergistically with the magnesium to ensure its efficient delivery into cells for function.

**Magnesium Citrate (Organic Magnesium Source)**
Magnesium citrate is an organic salt form where magnesium is bound to citric acid. Compared to inorganic magnesium salts, it is more soluble and absorbable in the digestive tract. In the body, it primarily contributes magnesium, while the citrate moiety is an intermediate in the tricarboxylic acid (Krebs) cycle—the core process of energy metabolism—providing a natural synergistic pathway for magnesium's involvement in energy production. This form is suitable for most people needing efficient supplementation of bioavailable magnesium. In the product, it serves as the magnesium donor, embedded within the food-state matrix, thereby gaining absorption and utilization characteristics that surpass its standalone form.

**Lactobacillus Bulgaricus (Inactivated) Nutrient Matrix**
What is used here is not a live probiotic, but a complete nutrient matrix composed of inactivated Lactobacillus bulgaricus and its fermentation products. It is rich in cellular nutrients such as proteins, peptides, carbohydrates, and lipids. Its core function is not to provide probiotic benefits, but to act as a "biological carrier" or "food recognition signal." It provides a biomimetic microenvironment for magnesium, where the natural amino acids and saccharides it contains act as "chaperones" and transport carriers needed for minerals to enter cells. This is especially suitable for those who wish their mineral supplementation to mimic the complete food absorption process. It works in close synergy with magnesium citrate, together forming the material basis of the "food-state" technology, significantly enhancing magnesium's bioaccessibility and cellular utilization.`}}},{name:"Mannayan MAG-CITRAT + (90 Kapseln)",url:"https://mannayan.com/Mannayan-MAG-CITRAT-90-Kapseln/010070",price:["18,90 €"],product_number:"010070",quantity:["90 Kapseln"],image_url:"https://mannayan.com/media/95/8c/3a/1625734135/Mag-Citrat%2B.jpg?ts=1625734147",image_local:"images/Mag-Citrat%2B.jpg",content:{cn:{label:`Mannayan 镁柠檬酸+ (90粒胶囊)
高吸收镁，支持能量与放松
• 支持能量代谢与肌肉功能
• 促进神经系统平静与放松
• 有助于维持电解质平衡
• 支持骨骼健康
每粒含 500 毫克柠檬酸镁 (80 毫克镁)
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、适合素食者`,short_description:`你是否感觉白天精力不济，思绪难以集中，而到了晚上，身体却无法真正放松下来？肌肉的紧张感似乎挥之不去，影响了休息的质量。这常常与身体内一种关键矿物质的平衡有关。

Mannayan 镁柠檬酸+ 专注于提供高生物利用度的镁。镁参与体内数百种酶反应，是能量产生、神经信号传递和肌肉放松的核心。我们选择柠檬酸盐这种形式，是因为它能通过身体的天然代谢途径被高效吸收和利用。

每日1至2粒胶囊，随餐服用。每粒胶囊提供500毫克柠檬酸镁，其中含有80毫克元素镁。这款配方纯净，不含麸质、乳糖、大豆、人工色素或香料，并适合素食者。`,long_description:`现代生活的节奏常常让身体处于一种持续的、低度的紧张状态。白天，你可能感到精力像被抽空，注意力难以长时间集中；夜晚，身体躺下了，思绪却还在奔忙，或者小腿传来隐隐的抽筋感，让你无法获得深度的休息。这些看似不相关的信号，有时是身体在轻声诉说对一种基础矿物质——镁——的更多需求。镁不像钙那样常被提及，但它却是体内超过300种生化反应的参与者，是能量工厂的启动钥匙，也是神经系统从兴奋转向平静的天然调节器。

**食物态技术与吸收**
我们选择柠檬酸镁作为核心成分，并非偶然。柠檬酸盐是身体能量代谢核心循环——柠檬酸循环中的天然物质。这种形式使得镁能够借助这个现成的、高效的通道进入血液，避免了其他形式可能遇到的吸收障碍。它不依赖胃酸大量分解，对肠胃温和，确保了摄入的镁能够有效地被身体接纳和利用，直达需要它的细胞。

**一个完整的支持体系**
这款产品提供的不是孤立的镁元素，而是以柠檬酸盐为载体的完整支持单元。一旦进入体内，镁离子迅速参与到各个关键环节：在线粒体中，它帮助将食物转化为可用的能量，对抗疲劳感；在神经肌肉接头处，它调节钙离子的流动，帮助过度紧张的肌肉纤维恢复松弛，缓解紧绷感；在大脑中，它支持神经递质的平衡，营造一种内在的平静氛围，为专注和安稳的睡眠创造条件。这种从细胞能量到肌肉放松再到神经平静的多层次作用，正是镁维持整体生理平衡的体现。

**适合的人群**
它适合那些生活忙碌、精神压力较大，感觉身心难以同步放松的人；适合经常进行体力活动或锻炼，肌肉容易感到僵硬、酸痛或偶尔抽筋的人；也适合日常饮食精细，担心从食物中获取的镁可能不足，希望为身体的基礎代谢功能提供扎实支持的人。

**纯净与成分的完整性**
配方的纯净度是我们承诺的一部分。胶囊由植物纤维素制成，不含任何动物成分。整个产品杜绝了常见的过敏原如麸质、乳制品、大豆，也远离了人工色素、香料、甜味剂和防腐剂。我们相信，补充剂应该只提供身体真正需要的，而不附加任何不必要的负担。这份成分清单简洁、透明，让你摄入的每一粒都安心。

**用法与剂量**
建议每日服用1至2粒胶囊，随餐并用足量水送服。可以从每日1粒开始，根据个人的具体感受和需求调整。每粒提供500毫克柠檬酸镁，相当于80毫克元素镁。一瓶90粒的包装，足以支持一个半月至三个月的日常补充。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，于阴凉干燥处避光保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**柠檬酸镁**
柠檬酸镁是镁元素与柠檬酸结合形成的有机盐。它在体内扮演着多重角色，是能量代谢（ATP生产）不可或缺的辅因子，同时也参与调节神经肌肉的兴奋性与血管张力。我们选用这种特定形式，是因为其生物利用度较高，能通过柠檬酸循环途径被有效吸收，且对胃肠道相对温和。它特别适合那些寻求高效镁补充以支持日常能量水平、缓解肌肉紧张并促进神经系统平静的人群。在配方中，它作为唯一但足量的活性成分，提供了镁的全面基础支持。`},en:{label:`Mannayan Magnesium Citrate+ (90 Capsules)
Highly Absorbable Magnesium for Energy & Relaxation
• Supports energy metabolism & muscle function
• Promotes nervous system calm & relaxation
• Helps maintain electrolyte balance
• Supports bone health
Each capsule provides 500 mg magnesium citrate (80 mg elemental magnesium)
Pure formula: gluten-free, lactose-free, soy-free, no artificial additives, suitable for vegetarians`,short_description:`Do you feel drained during the day, struggling to focus, yet find your body unable to truly unwind at night? Lingering muscle tension may be affecting your rest quality. This is often linked to the balance of a key mineral in the body.

Mannayan Magnesium Citrate+ focuses on delivering highly bioavailable magnesium. Magnesium is involved in hundreds of enzymatic reactions and is central to energy production, nerve signaling, and muscle relaxation. We chose the citrate form because it is efficiently absorbed and utilized through the body's natural metabolic pathways.

Take 1 to 2 capsules daily with meals. Each capsule provides 500 mg of magnesium citrate, containing 80 mg of elemental magnesium. This formula is pure, free from gluten, lactose, soy, artificial colors or flavors, and is suitable for vegetarians.`,long_description:`The pace of modern life often keeps the body in a state of continuous, low-grade tension. By day, you may feel drained of energy, finding it hard to maintain focus; by night, even when your body rests, your mind may race, or a faint cramp in your calf can prevent deep, restorative sleep. These seemingly unrelated signals can sometimes be the body's quiet plea for more of a foundational mineral: magnesium. While not as commonly discussed as calcium, magnesium participates in over 300 biochemical reactions in the body. It is the ignition key for our cellular energy factories and a natural regulator that helps the nervous system shift from excitement to calm.

**Food-State Technology & Absorption**
Our choice of magnesium citrate as the core ingredient is no accident. Citrate is a natural substance in the body's core energy metabolism cycle—the citric acid cycle. This form allows magnesium to utilize this ready-made, efficient pathway into the bloodstream, avoiding absorption hurdles other forms may encounter. It does not rely heavily on stomach acid for breakdown, is gentle on the stomach, and ensures the magnesium you take is effectively accepted and utilized by the body, reaching the cells that need it.

**A Complete Support System**
This product delivers not an isolated magnesium element, but a complete support unit carried by citrate. Once in the body, magnesium ions quickly engage in key processes: in the mitochondria, they help convert food into usable energy, combating fatigue; at neuromuscular junctions, they regulate calcium flow, helping over-tense muscle fibers relax and easing tightness; in the brain, they support neurotransmitter balance, fostering an inner atmosphere of calm conducive to focus and restful sleep. This multi-layered action—from cellular energy to muscle relaxation to nervous system calm—is a reflection of magnesium's role in maintaining overall physiological balance.

**Who It's For**
It is suitable for those with busy lives and high mental stress who find it hard for body and mind to relax in sync; for those regularly engaged in physical activity or exercise whose muscles tend to feel stiff, sore, or occasionally cramp; and for those with refined diets who are concerned about potential insufficient magnesium intake from food and wish to provide solid support for the body's foundational metabolic functions.

**Purity & Ingredient Integrity**
Formula purity is part of our commitment. The capsules are made from plant cellulose and contain no animal-derived ingredients. The entire product is free from common allergens like gluten, dairy, and soy, and stays clear of artificial colors, flavors, sweeteners, and preservatives. We believe supplements should provide only what the body truly needs, without adding unnecessary burdens. This ingredient list is concise and transparent, so you can take every capsule with peace of mind.

**Usage & Dosage**
Take 1 to 2 capsules daily with meals, accompanied by plenty of water. You may start with 1 capsule per day and adjust based on your personal experience and needs. Each capsule provides 500 mg of magnesium citrate, equivalent to 80 mg of elemental magnesium. One bottle of 90 capsules provides enough for one-and-a-half to three months of daily supplementation.

**Important Notes**
Dietary supplements are not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing.`,ingredient_reference:`**Magnesium Citrate**
Magnesium citrate is an organic salt formed by combining magnesium with citric acid. It plays multiple roles in the body, serving as an indispensable cofactor for energy metabolism (ATP production) and participating in the regulation of neuromuscular excitability and vascular tone. We selected this specific form due to its high bioavailability, efficient absorption via the citric acid cycle pathway, and relative gentleness on the gastrointestinal tract. It is particularly suitable for those seeking effective magnesium supplementation to support daily energy levels, ease muscle tension, and promote nervous system calm. In this formula, it serves as the sole yet sufficient active ingredient, providing comprehensive foundational support through magnesium.`}}},{name:"Mannayan MANNASICHT + (60 Kapseln)",url:"https://mannayan.com/Mannayan-MANNASICHT-60-Kapseln/011113",price:["23,90 €"],product_number:"011113",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/5b/3e/75/1766137247/Mannasicht%2B_2025.jpg?ts=1766137247",image_local:"images/Mannasicht%2B_2025.jpg",content:{cn:{label:`Mannayan MANNASICHT+ 明目配方
支持内在视觉健康
• 滋养视网膜黄斑区
• 过滤蓝光，缓解视疲劳
• 提供抗氧化保护
• 支持夜间视觉适应
60粒胶囊 | 每日1粒 | 素食配方 | 无麸质、无乳糖、无人工添加剂`,short_description:`长时间面对屏幕后，眼睛是否感到干涩、模糊，仿佛蒙上了一层薄雾？日复一日的用眼，让视觉的清晰与舒适感渐渐流失。

Mannayan MANNASICHT+ 配方关注的是眼睛内在的营养支持。它汇聚了在视网膜黄斑区自然高浓度存在的关键营养素——叶黄素和玉米黄质，如同为眼睛内置了一层天然的“滤光片”和“抗氧化盾”。配合欧洲越橘提取物和葡萄籽提取物，共同应对现代生活中无处不在的视觉压力。

每日一粒，提供10毫克叶黄素、2毫克玉米黄质及1毫克内消旋玉米黄质，并添加了维生素E和锌。配方纯净，适合素食者，不含麸质、乳糖、人工色素与香料。`,long_description:`当眼睛开始发出疲惫的信号——阅读时容易串行、对光线变化敏感、长时间用眼后恢复缓慢——这常常是内在营养支持需要关注的时刻。视觉的清晰度不仅取决于眼睛的屈光系统，更深植于视网膜，尤其是负责精细视觉的黄斑区是否获得了它专属的营养。

**食物态技术与成分形式**
配方中的核心类胡萝卜素来源于万寿菊提取物，以酯化形式存在，这是它们在天然食物中的常见形态，具有更好的脂溶性与稳定性。欧洲越橘和葡萄籽的提取物则浓缩了其中的花青素与原花青素，这些成分的标准化确保了每一粒胶囊活性成分的一致性与有效性。

**一个完整的协同支持体系**
这不是几种成分的简单叠加，而是一个围绕黄斑健康构建的协同体系。叶黄素、玉米黄质和内消旋玉米黄质选择性沉积在黄斑，形成“黄斑色素”，直接过滤有害蓝光并中和光线产生的自由基。维生素E和锌作为关键的辅助因子，支持整个抗氧化防御网络的运作，保护脆弱的感光细胞。与此同时，欧洲越橘和葡萄籽提取物中的多酚类物质，则从循环和微血管健康的角度提供广泛的支持，帮助维持眼部良好的营养与代谢环境。它们共同工作，从核心到外围，为视觉系统提供多层次的养护。

**适合这些生活情境的人**
那些因工作需要长时间注视电脑、平板或手机屏幕的人；在夜间驾驶或昏暗光线下需要保持良好视觉的人；随着年龄增长，开始关注眼睛长期健康的人；以及感觉自己的眼睛在日间更容易疲劳、需要更长时间才能适应光线变化的人。它适用于希望从内在为眼睛提供针对性营养支持的成年人。

**纯净与成分的完整性承诺**
每一粒胶囊都力求纯净。配方不含小麦、麸质、乳制品、添加糖、人工色素、人工香料和防腐剂，且为非转基因来源。胶囊外壳采用植物源的羟丙甲纤维素，使产品同样适合素食者和纯素者。我们相信，补充剂的效力始于成分本身的纯净与真实。

**健康管理者视角：临床背景与搭配思路**
从健康管理的角度看，视觉健康是整体健康的一部分。该配方常被纳入针对长期用眼疲劳、关注黄斑长期健康的综合方案中。临床实践中，健康管理者可能会将其与支持全身循环健康或抗氧化的基础方案结合，以 addressing 局部与整体的关系。对于有特定眼部状况的人群，建议在专业健康管理者的指导下使用，以确定最适合个人的整体策略。

**用法与剂量**
建议每日随餐服用1粒胶囊，用足量水送服。随餐服用有助于脂溶性成分的吸收。一瓶包含60粒胶囊，可供连续使用两个月。

**重要提示**
推荐的每日剂量请勿超过。膳食补充剂不能替代均衡多样的饮食。孕妇、哺乳期妇女或正在服用其他药物者，使用前请咨询医生或健康顾问。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若瓶口密封条缺失，请勿食用。`,ingredient_reference:`**叶黄素（来自万寿菊提取物）**
叶黄素是一种天然存在于深绿色蔬菜中的类胡萝卜素，也是人眼视网膜黄斑区的主要色素成分。它在体内充当一种高选择性的蓝光过滤器，并具有强大的抗氧化能力，直接保护感光细胞免受氧化损伤。本配方采用酯化形式的叶黄素，这是其天然、稳定的存在形式，生物利用度良好。它特别适合那些需要应对高强度屏幕蓝光暴露或希望长期支持黄斑密度的人群。在配方中，它与玉米黄质共同构成黄斑色素的核心，其作用因维生素E和锌的抗氧化协同而得到增强。

**玉米黄质与内消旋玉米黄质（来自万寿菊提取物）**
玉米黄质和内消旋玉米黄质是叶黄素的同分异构体，同样高度集中于视网膜黄斑中心。内消旋玉米黄质尤其富集于黄斑最中心的区域，三者共同构成完整的黄斑色素光谱。它们能更有效地淬灭由短波蓝光激发的单线态氧，提供更贴近视觉焦点的保护。配方提供了标准化的含量，确保这三种关键色素的均衡摄入。对于关注中心视力精细度和对比敏感度的人群尤为重要。它们与叶黄素协同，优化整个黄斑区的光学密度和抗氧化防御。

**欧洲越橘提取物**
欧洲越橘富含花青素，这类多酚化合物以其对微循环的支持作用而闻名。它们有助于维持毛细血管的完整性与弹性，从而支持眼部良好的血流与营养输送。其抗氧化特性也为眼部血管网络提供保护。标准化至2%花青素含量确保了活性成分的效力。适合那些因用眼过度导致眼周酸胀或希望支持眼部整体代谢环境的人。在配方中，它与葡萄籽提取物协同，从血管健康角度为类胡萝卜素的局部作用提供良好的系统环境。

**葡萄籽提取物**
葡萄籽提取物是原花青素（OPCs）的丰富来源，这是一类强效的抗氧化多酚，其抗氧化能力远超维生素C和E。它们有助于保护身体细胞，包括眼部细胞，免受自由基的广泛损伤，并支持胶原蛋白的完整性，这对维持眼部组织的健康结构很重要。提取物标准化至95%的原花青素含量。对于寻求广泛抗氧化支持、以应对环境及代谢压力的人群很有价值。它在配方中强化了整体的抗氧化网络，与维生素E和锌协同，为叶黄素等核心成分创造一个更稳定的内部保护环境。

**维生素E（d-α-生育酚）**
维生素E是一种主要的脂溶性抗氧化剂，能保护细胞膜中的脂质免受氧化损伤。在眼睛中，富含多不饱和脂肪酸的视网膜尤其需要维生素E的保护。它还能再生其他抗氧化剂，如维生素C，从而延长抗氧化防御链的作用。采用天然形式的d-α-生育酚，其生物活性更高。对于关注长期细胞保护、特别是脂质结构保护的人群至关重要。在配方中，它直接保护富含脂质的视网膜细胞膜，并与其他抗氧化成分形成协同，共同维护眼部的氧化还原平衡。

**锌**
锌是人体必需的微量元素，作为超过300种酶的辅助因子，参与包括DNA合成、蛋白质代谢在内的众多生理过程。在眼部，锌高度集中于视网膜，尤其是色素上皮层，是视觉关键酶（如视黄醛还原酶）的重要组成部分，直接参与视觉循环。它也支持免疫功能和抗氧化防御。适合那些饮食可能无法满足锌需求、或需要支持大量酶促反应的人群。在配方中，锌是视觉色素再生不可或缺的矿物质，同时作为超氧化物歧化酶（SOD）的组分，与维生素E等共同构建细胞级的抗氧化防御体系。`},en:{label:`Mannayan MANNASICHT+ Vision Support Formula
Supports Internal Visual Health
• Nourishes the Macular Region of the Retina
• Filters Blue Light & Eases Eye Strain
• Provides Antioxidant Protection
• Supports Night Vision Adaptation
60 Capsules | 1 Per Day | Vegetarian Formula | Gluten-Free, Lactose-Free, No Artificial Additives`,short_description:`After long hours in front of a screen, do your eyes feel dry, blurry, as if veiled by a thin haze? Day after day of visual demand can gradually erode clarity and comfort.

Mannayan MANNASICHT+ focuses on internal nutritional support for the eyes. It brings together key nutrients—lutein and zeaxanthin—that are naturally concentrated in the macular region of the retina, acting like a built-in natural 'light filter' and 'antioxidant shield' for the eyes. Combined with European bilberry extract and grape seed extract, it addresses the ubiquitous visual stressors of modern life.

One capsule daily provides 10 mg of lutein, 2 mg of zeaxanthin, and 1 mg of meso-zeaxanthin, plus added Vitamin E and zinc. The formula is pure, suitable for vegetarians, and free from gluten, lactose, artificial colors, and flavors.`,long_description:`When the eyes start signaling fatigue—difficulty tracking lines while reading, sensitivity to light changes, slow recovery after prolonged use—it's often a sign that internal nutritional support needs attention. Visual clarity depends not only on the eye's refractive system but is deeply rooted in the retina, particularly whether the macula—responsible for fine detail vision—receives its specialized nourishment.

**Food-State Technology & Ingredient Forms**
The core carotenoids in the formula are sourced from marigold extract in their esterified form, their common state in natural foods, offering better lipid solubility and stability. Extracts of European bilberry and grape seed concentrate anthocyanins and proanthocyanidins, with standardization ensuring consistent potency and efficacy in every capsule.

**A Complete Synergistic Support System**
This is not a simple mix of ingredients but a synergistic system built around macular health. Lutein, zeaxanthin, and meso-zeaxanthin selectively deposit in the macula, forming 'macular pigment' that directly filters harmful blue light and neutralizes free radicals generated by light. Vitamin E and zinc act as key cofactors, supporting the entire antioxidant defense network and protecting delicate photoreceptor cells. Meanwhile, the polyphenols from bilberry and grape seed extracts provide broad support from the perspective of circulation and microvascular health, helping maintain a good nutritional and metabolic environment for the eyes. They work together, from core to periphery, offering multi-layered care for the visual system.

**For People in These Life Situations**
Those who need to stare at computer, tablet, or phone screens for long hours due to work; those who require good vision for night driving or in dim light; those beginning to focus on long-term eye health with age; and those who feel their eyes tire more easily during the day or take longer to adapt to light changes. It is suitable for adults seeking targeted nutritional support for their eyes from within.

**Commitment to Purity & Ingredient Integrity**
Every capsule strives for purity. The formula contains no wheat, gluten, dairy, added sugars, artificial colors, artificial flavors, or preservatives, and is non-GMO. The capsule shell is made from plant-derived hydroxypropyl methylcellulose, making the product suitable for vegetarians and vegans. We believe a supplement's efficacy begins with the purity and authenticity of its ingredients.

**From a Health Management Perspective: Clinical Context & Integration**
From a health management viewpoint, visual health is part of overall wellness. This formula is often incorporated into comprehensive plans addressing long-term eye strain and macular health. In clinical practice, health managers may combine it with foundational protocols supporting systemic circulation or antioxidant defense to address the relationship between local and whole-body health. For individuals with specific eye conditions, use under the guidance of a qualified health professional is recommended to determine the most suitable overall strategy.

**Usage & Dosage**
Take 1 capsule daily with a meal, swallowed with plenty of water. Taking with food aids the absorption of fat-soluble components. One bottle contains 60 capsules, providing a two-month supply.

**Important Notes**
Do not exceed the recommended daily dose. Food supplements are not a substitute for a varied and balanced diet. Pregnant or breastfeeding women, or individuals taking other medications, should consult a doctor or health advisor before use. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the bottle's inner seal is missing.`,ingredient_reference:`**Lutein (from Marigold Extract)**
Lutein is a carotenoid naturally found in dark green leafy vegetables and a major pigment component in the macular region of the human retina. It acts as a highly selective blue light filter in the body and possesses potent antioxidant capacity, directly protecting photoreceptor cells from oxidative damage. This formula uses lutein in its esterified form, its natural, stable state with good bioavailability. It is particularly suitable for those needing to cope with high-intensity screen blue light exposure or wishing to support macular pigment density long-term. In the formula, it works with zeaxanthin to form the core of macular pigment, with its effects enhanced by the antioxidant synergy of Vitamin E and zinc.

**Zeaxanthin & Meso-Zeaxanthin (from Marigold Extract)**
Zeaxanthin and meso-zeaxanthin are isomers of lutein, also highly concentrated in the center of the retinal macula. Meso-zeaxanthin is especially enriched in the very central foveal region; together, the three constitute the complete macular pigment spectrum. They can more effectively quench singlet oxygen excited by short-wavelength blue light, providing protection closer to the visual focal point. The formula provides standardized amounts, ensuring balanced intake of these three key pigments. This is particularly important for those concerned with fine central visual acuity and contrast sensitivity. They work synergistically with lutein to optimize optical density and antioxidant defense across the entire macular region.

**European Bilberry Extract**
European bilberry is rich in anthocyanins, polyphenolic compounds renowned for their support of microcirculation. They help maintain capillary integrity and elasticity, thereby supporting good blood flow and nutrient delivery to the eyes. Their antioxidant properties also provide protection for the ocular vascular network. Standardized to 2% anthocyanin content ensures potency of the active components. Suitable for those experiencing periocular tension from eye strain or wishing to support the overall metabolic environment of the eyes. In the formula, it works synergistically with grape seed extract, providing a favorable systemic environment from a vascular health perspective for the local action of carotenoids.

**Grape Seed Extract**
Grape seed extract is a rich source of proanthocyanidins (OPCs), a class of potent antioxidant polyphenols with antioxidant capacity far exceeding that of Vitamins C and E. They help protect the body's cells, including those in the eyes, from widespread free radical damage and support collagen integrity, which is important for maintaining the healthy structure of ocular tissues. The extract is standardized to 95% proanthocyanidins. Valuable for those seeking broad antioxidant support to cope with environmental and metabolic stressors. In the formula, it reinforces the overall antioxidant network, working synergistically with Vitamin E and zinc to create a more stable internal protective environment for core components like lutein.

**Vitamin E (d-alpha-tocopherol)**
Vitamin E is a major fat-soluble antioxidant that protects lipids in cell membranes from oxidative damage. In the eyes, the retina—rich in polyunsaturated fatty acids—is particularly in need of Vitamin E's protection. It also regenerates other antioxidants, like Vitamin C, thereby extending the action of the antioxidant defense chain. The natural form, d-alpha-tocopherol, is used for its higher biological activity. Crucial for those focused on long-term cellular protection, especially of lipid structures. In the formula, it directly protects the lipid-rich retinal cell membranes and forms synergies with other antioxidant components to jointly maintain the eye's redox balance.

**Zinc**
Zinc is an essential trace mineral, acting as a cofactor for over 300 enzymes involved in numerous physiological processes, including DNA synthesis and protein metabolism. In the eyes, zinc is highly concentrated in the retina, especially the pigment epithelium, and is a vital component of key visual enzymes (e.g., retinol reductase), directly involved in the visual cycle. It also supports immune function and antioxidant defense. Suitable for those whose diet may not meet zinc needs or who require support for extensive enzymatic reactions. In the formula, zinc is an indispensable mineral for visual pigment regeneration and, as a component of superoxide dismutase (SOD), works with Vitamin E and others to build a cellular-level antioxidant defense system.`}}},{name:"Mannayan Mineralsalz",url:"https://mannayan.com/Mannayan-Mineralsalz/010071",price:["17,80 €"],product_number:"010071",quantity:["90 Kapseln"],image_url:"https://mannayan.com/media/b3/66/e4/1766137271/Mineralsalz_2025.jpg?ts=1766137271",image_local:"images/Mineralsalz_2025.jpg",content:{cn:{label:`Mannayan 矿物盐
基础矿物质支持
• 支持能量代谢
• 维持电解质平衡
• 补充关键矿物质
• 纯净植物胶囊
90粒素食胶囊 | 每日2粒
无麸质、无乳制品、无人工添加剂、非转基因`,short_description:`你是否感觉日常的忙碌消耗了身体的活力，即使休息后也难以完全恢复？现代饮食和快节奏生活有时难以提供身体所需的全部基础矿物质，而这些元素是维持身体内部稳定与日常活力的无声基石。

Mannayan 矿物盐提供铁和镁这两种对能量产生和神经肌肉功能至关重要的矿物质。它们以易于吸收的形式存在，旨在补充日常饮食可能存在的缺口，帮助维持身体内部的矿物质平衡。

每日服用2粒素食胶囊，即可获得关键矿物质支持。配方纯净，不含麸质、乳制品、人工色素或香料，也无转基因成分，适合素食者和追求纯净补充的人群。`,long_description:`当身体发出疲倦的信号，或是肌肉感到莫名的紧张时，这常常不仅仅是睡眠不足或压力过大，而可能是身体内部矿物质平衡需要关注的细微提示。铁是血液中氧气运输的关键，而镁参与体内数百种酶反应，从能量产生到肌肉放松。它们的充足与否，直接影响着我们从细胞到整体的感受。

**食物态技术与递送形式**
产品中的铁以葡萄糖酸亚铁的形式提供，这是一种对胃肠道相对温和的铁源。镁则来自氧化镁，提供了高浓度的镁元素。它们被封装在植物来源的羟丙甲纤维素胶囊中，确保了成分的稳定性和易于吞服。

**完整的支持体系**
铁和镁在体内扮演着互补的角色。铁支持血红蛋白的合成，帮助将氧气输送到全身组织，为能量生产奠定基础。镁则直接参与将食物转化为细胞可用能量的过程（ATP代谢），并帮助调节神经信号和肌肉收缩。当两者协同作用时，它们共同支持着从基础能量代谢到神经肌肉功能的广泛生理过程，帮助身体维持更平稳的运行状态。

**适合的人群**
这款矿物盐适合那些感觉日常饮食不够均衡，希望为身体提供基础矿物质支持的人。它适用于素食或纯素饮食者，因为他们可能更需要关注铁等矿物质的摄入。也适合生活方式活跃、感觉能量需求较高，或是在特定生理阶段对矿物质有额外需求的人群。对于因饮食选择或消化敏感而需要避免麸质、乳制品的人群，这也是一个纯净的选择。

**纯净与成分完整性**
我们关注配方中的每一个成分。活性成分之外，胶囊的辅料仅使用了微晶纤维素和稻麸提取物。我们明确承诺不含麸质、乳制品（乳糖）、防腐剂、人工色素和香料，且为非转基因产品。这种纯净的配方设计，是为了让补充变得简单而安心。

**用法与剂量**
建议每日服用2粒胶囊，随足量液体吞服。可以根据健康管理者的具体指导进行调整。一瓶包含90粒胶囊，可供约45日使用。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日食用量。不适合6岁以下儿童使用。请将产品置于儿童无法触及之处，避光、阴凉干燥处保存。如果密封条缺失，请勿食用。`,ingredient_reference:`**铁（来自葡萄糖酸亚铁）**
铁是一种必需矿物质，是血红蛋白的核心成分，负责在血液中携带氧气。葡萄糖酸亚铁是一种有机铁形式，通常比某些无机铁盐具有更好的耐受性。它特别适合那些通过饮食摄入铁可能不足的人群，例如素食者。在配方中，铁为能量代谢提供基础支持，与镁协同工作，确保能量生产环节的顺畅。

**镁（来自氧化镁）**
镁是体内含量最丰富的矿物质之一，参与超过300种酶促反应，包括能量代谢、蛋白质合成和神经信号传导。氧化镁提供了高浓度的镁元素。它适合那些希望支持肌肉放松、神经健康或整体能量代谢的人群。在配方中，镁不仅支持自身的生理功能，还能与铁形成互补，共同维护身体的电解质平衡和基本生化过程的稳定运行。`},en:{label:`Mannayan Mineral Salts
Essential Mineral Support
• Supports energy metabolism
• Maintains electrolyte balance
• Replenishes key minerals
• Pure plant-based capsules
90 Vegan Capsules | 2 Capsules Daily
Gluten-Free, Dairy-Free, No Artificial Additives, Non-GMO`,short_description:`Do you feel like daily busyness drains your vitality, making it hard to fully recover even after rest? Modern diets and fast-paced living sometimes fall short in providing all the essential minerals your body needs—elements that serve as the silent foundation for maintaining internal balance and daily energy.

Mannayan Mineral Salts provide iron and magnesium, two minerals crucial for energy production and neuromuscular function. They come in easily absorbable forms, designed to fill potential gaps in your daily diet and help maintain your body's mineral equilibrium.

Take 2 vegan capsules daily for key mineral support. The formula is pure, free from gluten, dairy, artificial colors or flavors, and non-GMO, making it suitable for vegetarians and anyone seeking clean supplementation.`,long_description:`When your body signals fatigue or muscles feel inexplicably tense, it’s often more than just lack of sleep or high stress—it can be a subtle hint that your internal mineral balance needs attention. Iron is key for oxygen transport in the blood, while magnesium is involved in hundreds of enzymatic reactions, from energy production to muscle relaxation. Their sufficiency directly impacts how we feel, from the cellular level to our overall well-being.

**Food-State Technology & Delivery Form**
The iron in this product is provided as ferrous gluconate, a relatively gentle iron source for the gastrointestinal tract. Magnesium comes from magnesium oxide, offering a high concentration of magnesium. Both are encapsulated in plant-derived hydroxypropyl methylcellulose capsules, ensuring ingredient stability and easy swallowing.

**A Complete Support System**
Iron and magnesium play complementary roles in the body. Iron supports hemoglobin synthesis, helping deliver oxygen to tissues and laying the groundwork for energy production. Magnesium is directly involved in converting food into cellular energy (ATP metabolism) and helps regulate nerve signals and muscle contractions. When working together, they support a wide range of physiological processes—from basic energy metabolism to neuromuscular function—helping your body maintain smoother, steadier operation.

**Who It’s For**
These Mineral Salts are ideal for anyone who feels their daily diet isn’t fully balanced and wants to provide foundational mineral support. They’re suitable for vegetarians and vegans, who may need to pay extra attention to minerals like iron. They’re also great for active individuals with higher energy demands, or those in specific life stages with increased mineral needs. For anyone avoiding gluten, dairy, or dealing with digestive sensitivities, this is a clean, pure choice.

**Purity & Ingredient Integrity**
We care about every ingredient in the formula. Beyond the active components, the capsule excipients include only microcrystalline cellulose and rice bran extract. We clearly commit to being free from gluten, dairy (lactose), preservatives, artificial colors and flavors, and all ingredients are non-GMO. This clean formulation is designed to make supplementation simple and reassuring.

**Usage & Dosage**
Take 2 capsules daily with plenty of liquid. Dosage can be adjusted based on specific guidance from your health practitioner. Each bottle contains 90 capsules, providing approximately 45 days of use.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced, varied diet. Do not exceed the recommended daily intake. Not suitable for children under 6 years of age. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Iron (from Ferrous Gluconate)**
Iron is an essential mineral and a core component of hemoglobin, responsible for carrying oxygen in the blood. Ferrous gluconate is an organic form of iron, generally better tolerated than some inorganic iron salts. It is particularly suitable for individuals who may have insufficient iron intake from their diet, such as vegetarians. In this formula, iron provides foundational support for energy metabolism, working synergistically with magnesium to ensure smooth energy production.

**Magnesium (from Magnesium Oxide)**
Magnesium is one of the most abundant minerals in the body, involved in over 300 enzymatic reactions including energy metabolism, protein synthesis, and nerve signaling. Magnesium oxide provides a high concentration of magnesium. It is suitable for those looking to support muscle relaxation, nerve health, or overall energy metabolism. In this formula, magnesium not only supports its own physiological functions but also complements iron, working together to maintain the body’s electrolyte balance and the stable operation of fundamental biochemical processes.`}}},{name:"Mannayan Mineralvit Gold 10 ml",url:"https://mannayan.com/Mannayan-Mineralvit-Gold-10-ml/SW010119",price:["6,00 €"],product_number:"SW010119",quantity:["10 ml"],image_url:"https://mannayan.com/media/fe/40/12/1731502507/Produktbild_Mineralvit_Gold_10ml_900x.jpg?ts=1731502507",image_local:"images/Produktbild_Mineralvit_Gold_10ml_900x.jpg",content:{cn:{label:`Mannayan Mineralvit Gold
源自远古的矿物精华
• 提供关键矿物质与微量元素
• 源自2亿年前植物化石
• 支持日常基础营养
• 纯净配方，无多余添加
10毫升 / 每日10滴
适合素食者 / 无麸质 / 无乳糖`,short_description:`你是否感觉日常饮食难以面面俱到，身体偶尔会发出一些微妙的信号？现代生活节奏下，从食物中获取全面均衡的矿物质并不总是那么容易。

Mannayan Mineralvit Gold 提供了一种回归基础的补充方式。它的核心源自2亿年前的植物化石，这些远古植物在生长过程中吸收了当时富饶环境中的丰富矿物质，并以化石的形式保存至今。我们通过温和的提取工艺，将这些天然的矿物复合物释放出来。

它并非单一的补充剂，而是一个天然的矿物复合体，额外强化了锌和铬。每日只需10滴，就能为你的日常营养基础提供支持。产品配方纯净，不含麸质、乳糖、人工色素或防腐剂，适合素食者。`,long_description:`当身体感到精力不济，或是觉得日常饮食总有缺憾时，往往是在提醒我们关注那些基础的营养支持。矿物质和微量元素虽然所需量微小，却是维持身体无数细微功能顺畅运行的基石。

**食物态技术与来源**
Mannayan Mineralvit Gold 的核心并非实验室合成，而是来自大地深处的馈赠。其基础是一种形成于约2亿年前的腐泥岩（Humusschiefer）。在那个植被繁茂的时代，植物从肥沃的土壤中吸收了极其丰富的矿物质与微量元素。这些植物沉积物在漫长的地质年代中转化为化石，将其中的矿物成分完整封存。我们采用受严格监控的浸出工艺，温和地将这些天然矿物复合物提取出来，确保其纯净与生物可利用性。这是一种将远古生命能量转化为现代营养支持的方式。

**完整的矿物支持体系**
这款产品提供的是一个协同作用的矿物环境。化石来源的矿物复合物带来了一个广泛的、自然平衡的微量元素谱系，模拟了自然界中矿物质共存的状态。在此基础上，我们特别强化了锌和铬这两种对现代生活方式尤为关键的矿物质。锌参与体内数百种酶的活性，而铬则与碳水化合物的正常代谢有关。这种组合——广泛的微量元素背景加上特定的重点强化——旨在为身体提供一个全面而非单一的矿物支持网络。

**适合的人群**
它适合那些追求饮食纯净、偏好天然来源补充剂的人。也适合素食者或饮食受限，希望确保基础矿物质摄入的人群。对于生活忙碌，关心自身营养基础是否牢固，并希望从源头着手补充的人来说，这是一种简便直接的选择。

**纯净与成分完整性**
我们坚信补充剂应该简单而有效。因此，配方中除了化石矿物提取物、强化用的锌（硫酸锌）和铬（三氯化铬）以及必要的溶剂水之外，别无他物。产品不含麸质、乳糖、转基因成分、人工色素、香料或防腐剂。每一批生产都经过严格管控，纯净度是工艺的基本要求，而非额外的营销说辞。

**用法与剂量**
每日10滴，可直接口服或加入少量水中、饮品中饮用。一瓶10毫升装便于携带，适合居家或旅行使用。

**重要提示**
请将本品置于儿童无法触及之处。储存于阴凉干燥、避光的地方。膳食补充剂不能替代均衡多样的饮食和健康的生活方式。如果您正在怀孕、哺乳、服用药物或有特定健康状况，使用前请咨询健康专业人士。`,ingredient_reference:`**化石来源矿物复合物**
这是产品的核心基质，源自约2亿年前的植物化石沉积岩。它并非单一的矿物质，而是一个包含了多种天然存在的微量元素和矿物质的复合体。这些矿物质以植物在远古时代吸收的形式存在，可能具有独特的生物可利用性。它为身体提供了一个广泛的、自然平衡的微量元素背景，是强化特定矿物质（如锌和铬）的理想基础。适合所有寻求天然、全面矿物来源的人群。

**锌（硫酸锌）**
锌是一种必需的微量元素，作为许多酶的辅助因子，参与蛋白质合成、免疫系统功能、伤口愈合以及感官（味觉和嗅觉）健康等多种生理过程。我们采用硫酸锌形式，这是一种生物利用率高且稳定的锌来源。在配方中，锌作为重点强化的矿物质，与化石来源的广泛微量元素协同，共同支持身体的整体代谢需求。特别适合那些希望支持日常基础防御和代谢活力的人群。

**铬（三氯化铬）**
铬，特别是三价铬，是维持正常血糖代谢所需的微量元素。它有助于增强胰岛素的作用效率。我们使用的三氯化铬是生物可利用的铬形式。在配方中，铬与锌及其他微量元素协同工作，共同参与和支持身体的能量代谢途径。对于关注碳水化合物代谢平衡的现代生活方式而言，这是一个有价值的补充。`},en:{label:`Mannayan Mineralvit Gold
Ancient Mineral Essence
• Provides Key Minerals & Trace Elements
• Sourced from 200-Million-Year-Old Plant Fossils
• Supports Daily Foundational Nutrition
• Pure Formula, No Unnecessary Additives
10 ml / 10 Drops Daily
Suitable for Vegetarians / Gluten-Free / Lactose-Free`,short_description:`Do you ever feel your daily diet falls short, with your body sending subtle signals? In today’s fast-paced world, getting a full, balanced spectrum of minerals from food alone isn’t always easy.

Mannayan Mineralvit Gold offers a back-to-basics approach to supplementation. Its core is derived from 200-million-year-old plant fossils—ancient plants that absorbed a rich array of minerals from the fertile environment of their time, preserved in fossil form until today. Through a gentle extraction process, we release these natural mineral complexes.

This is not a single-nutrient supplement, but a natural mineral composite, further enhanced with zinc and chromium. Just 10 drops a day can help support your daily nutritional foundation. The formula is pure, free from gluten, lactose, artificial colors, or preservatives, and suitable for vegetarians.`,long_description:`When you feel low on energy or sense gaps in your daily diet, it’s often a reminder to pay attention to foundational nutritional support. Minerals and trace elements, though needed in small amounts, are the building blocks that keep countless subtle bodily functions running smoothly.

**Food-State Technology & Source**
The heart of Mannayan Mineralvit Gold is not lab-synthesized, but a gift from deep within the earth. Its base is a humic shale formed approximately 200 million years ago. In that era of lush vegetation, plants absorbed an exceptionally rich variety of minerals and trace elements from the fertile soil. These plant deposits transformed into fossils over immense geological time, sealing their mineral content intact. Using a carefully monitored leaching process, we gently extract these natural mineral complexes, ensuring purity and bioavailability. It’s a way of translating ancient life energy into modern nutritional support.

**A Complete Mineral Support System**
This product delivers a synergistic mineral environment. The fossil-derived mineral complex provides a broad, naturally balanced spectrum of trace elements, mirroring how minerals coexist in nature. On this foundation, we’ve specifically enhanced zinc and chromium—two minerals particularly relevant to modern lifestyles. Zinc is involved in the activity of hundreds of enzymes in the body, while chromium is associated with normal carbohydrate metabolism. This combination—a broad trace element background plus targeted fortification—aims to offer the body a comprehensive, not isolated, mineral support network.

**Who It’s For**
It’s suited for those who seek dietary purity and prefer naturally sourced supplements. It’s also ideal for vegetarians or individuals with dietary restrictions who want to ensure foundational mineral intake. For busy people mindful of their nutritional foundation and looking for a straightforward way to supplement from the source, this is a simple, direct choice.

**Purity & Ingredient Integrity**
We believe supplements should be simple and effective. Therefore, the formula contains nothing but the fossil mineral extract, fortifying zinc (as zinc sulfate) and chromium (as chromium trichloride), and the necessary solvent, water. The product is free from gluten, lactose, GMOs, artificial colors, flavors, or preservatives. Every batch is strictly controlled—purity is a basic requirement of our process, not an added marketing claim.

**Usage & Dosage**
Take 10 drops daily, either directly orally or added to a small amount of water or a beverage. The 10 ml bottle is portable and convenient for home or travel.

**Important Notes**
Keep out of reach of children. Store in a cool, dry place away from light. Dietary supplements are not a substitute for a varied, balanced diet and a healthy lifestyle. If you are pregnant, breastfeeding, taking medication, or have a specific health condition, consult a health professional before use.`,ingredient_reference:`**Fossil-Derived Mineral Complex**
This is the core matrix of the product, sourced from approximately 200-million-year-old plant fossil sedimentary rock. It is not a single mineral, but a complex containing a variety of naturally occurring trace elements and minerals. These minerals exist in the form absorbed by plants in ancient times, potentially offering unique bioavailability. It provides the body with a broad, naturally balanced trace element background, making it an ideal base for fortifying specific minerals like zinc and chromium. Suitable for anyone seeking a natural, comprehensive mineral source.

**Zinc (as Zinc Sulfate)**
Zinc is an essential trace element that acts as a cofactor for many enzymes, involved in numerous physiological processes such as protein synthesis, immune system function, wound healing, and sensory (taste and smell) health. We use zinc sulfate, a highly bioavailable and stable form of zinc. In the formula, zinc serves as a key fortified mineral, working synergistically with the broad trace elements from the fossil source to support the body’s overall metabolic needs. Particularly suitable for those looking to support daily foundational defense and metabolic vitality.

**Chromium (as Chromium Trichloride)**
Chromium, especially trivalent chromium, is a trace element necessary for maintaining normal blood sugar metabolism. It helps enhance insulin efficiency. The chromium trichloride we use is a bioavailable form of chromium. In the formula, chromium works synergistically with zinc and other trace elements to participate in and support the body’s energy metabolism pathways. This is a valuable addition for modern lifestyles concerned with carbohydrate metabolic balance.`}}},{name:"Mannayan Mineralvit Gold 100 ml",url:"https://mannayan.com/Mannayan-Mineralvit-Gold-100-ml/84",price:["29,50 €"],product_number:"84",quantity:["100 ml"],image_url:"https://mannayan.com/media/6e/d4/d3/1604520425/Mineralvit-Gold%20100%20ml.jpg?ts=1623762050",image_local:"images/Mineralvit-Gold%20100%20ml.jpg",content:{cn:{label:`Mannayan Mineralvit Gold
源自远古植物的生命精华
• 补充源自化石植物的天然矿物质与微量元素
• 支持日常能量代谢与生理机能
• 源自2亿年前远古富饶植被的馈赠
• 纯净配方，素食友好
• 100毫升 / 每日10滴`,short_description:`你是否感觉日常饮食难以覆盖身体所需的所有基础营养？现代生活节奏快，土壤养分也可能不如从前，要维持身体内在的矿物平衡，有时需要一点额外的支持。

Mannayan Mineralvit Gold 提供了一种源自远古的解决方案。它的核心是来自2亿年前化石植物的矿物精华，这些植物生长在营养极其丰富的远古时代，将大自然的矿物财富封存至今。通过特殊的浸提工艺，这些天然的矿物质和微量元素被温和地释放出来。

每日只需10滴，就能为身体补充包括锌和铬在内的多种矿物元素。这些基础养分不张扬，却默默参与着体内数百种维持生命活力的过程。配方纯净简单，不含麸质、乳制品、人工色素或香料，适合素食者。`,long_description:`当身体发出细微的信号——比如容易感到疲惫、注意力不易集中，或是感觉恢复能力不如从前——这常常是内在平衡需要关注的提示。我们寻求的不是剧烈的改变，而是为身体提供它本就熟悉且需要的基础支持，让系统回归顺畅运行的轨道。

**食物态技术与古老来源**
这款补充剂的核心并非实验室合成的单一化合物，而是来自一个独特的源头：2亿年前的化石植物沉积层，即腐泥页岩。在远古地球植被极其茂盛、土壤矿物极其丰富的时期，这些植物吸收并储存了完整的矿物谱系。我们采用受严格监控的浸提工艺，温和地将这些被封存的天然矿物复合物释放到水中，最大程度保留其天然形态与生物相容性，确保最终产物的高纯净度。这是一种将远古的生命力转化为现代人可用的滋养形式。

**完整的矿物支持体系**
产品提供的不是孤立的成分，而是一个协同的矿物环境。源自化石的矿物复合物提供了广泛的、可能包括数十种微量元素的背景支持，模拟了天然食物中矿物质的复杂存在形式。在此基础上，我们特别强化了锌和铬这两种对现代生活方式尤为关键的微量元素。锌是众多酶反应的催化剂，关乎细胞的更新、防御系统的正常运作以及味觉嗅觉的敏锐度；铬则与碳水化合物的代谢过程密切相关，帮助身体更平稳地利用能量。它们与基础矿物复合物共同作用，旨在支持身体整体的代谢活力与内在稳定。

**适合的人群**
它适合那些饮食可能不够多样、或感觉从日常食物中获取足够矿物质有挑战的人。也适合生活节奏紧张、对身体基础养护有意识，希望以简单温和的方式补充基础营养的成年人。对于遵循素食或纯素饮食的人士，这提供了一种便捷的矿物补充选择。

**纯净与成分完整性**
我们坚信，补充剂本身不应成为身体的负担。因此，配方极致简洁：化石来源的矿物复合物、锌、铬和水。不含麸质、乳制品、防腐剂、人工色素及香料，非转基因。每一批次都经过严格质量控制，确保你摄入的只有你想摄入的。瓶身上的密封带是你收到完好无损产品的保证。

**用法与剂量**
使用前请充分摇匀。建议每日服用10滴（约0.5毫升），可直接滴入口中，或与少量果汁、蔬菜汁混合饮用，以改善口感，随后饮用足量清水。也可根据健康顾问的具体建议进行调整。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过每日推荐食用量。请存放于儿童无法触及之处，避光、阴凉、干燥保存。若密封带缺失，请勿食用。`,ingredient_reference:`**化石来源矿物复合物**
这是产品的基石，源自2亿年前的腐泥页岩，由远古繁盛植物沉积转化而成。它并非单一矿物，而是一个包含多种天然矿物质和微量元素的复合体系，其组成反映了远古富饶生态系统的矿物多样性。在体内，这些矿物质以天然复合形态存在，可能更易于被识别和利用，共同参与构成酶系统、维持电解质平衡和支持骨骼健康等基础生理功能。它为配方提供了广泛的背景支持，特别适合追求整体性、食物态营养补充的人群。它与添加的锌和铬协同，营造了一个更完整、更接近自然食物来源的矿物补充环境。

**锌（来自硫酸锌）**
锌是一种必需的微量元素，作为催化剂参与体内超过300种酶的反应。它对于蛋白质合成、DNA生成、免疫细胞功能、伤口愈合以及味觉和嗅觉的正常感知都至关重要。我们采用硫酸锌的形式提供每日推荐摄入量20%的锌（每10滴2毫克）。这种形式具有良好的生物利用度。它尤其适合饮食中红肉或贝壳类摄入不足、或感觉自身防御系统需要基础支持的人群。在配方中，锌与铬及基础矿物复合物协同，共同支持整体的新陈代谢与细胞健康。

**铬（来自三氯化铬）**
铬，特别是三价铬，是一种参与糖代谢的微量元素。它的主要角色是增强胰岛素的作用效能，帮助身体更有效地利用碳水化合物，从而支持稳定的能量水平。我们以三氯化铬的形式提供每日推荐摄入量20%的铬（每10滴8微克）。这种形式是补充铬的有效且稳定的形式。它对于饮食中精制碳水化合物比例较高、或希望维持健康血糖代谢水平的人群具有参考意义。在配方中，铬与锌一同工作，支持能量的正常代谢，并与基础矿物群共同促进整体的代谢平衡。`},en:{label:`Mannayan Mineralvit Gold
Life Essence from Ancient Plants
• Replenishes natural minerals and trace elements from fossilized plants
• Supports daily energy metabolism and physiological functions
• A gift from lush, mineral-rich vegetation 200 million years ago
• Pure formula, vegetarian-friendly
• 100 ml / 10 drops daily`,short_description:`Do you find it hard to get all the foundational nutrients your body needs from your daily diet? Modern life moves fast, and soil nutrients may not be as rich as they once were. Maintaining your body's internal mineral balance sometimes calls for a little extra support.

Mannayan Mineralvit Gold offers an ancient solution. At its core is a mineral essence sourced from 200-million-year-old fossilized plants. These plants grew in an era of extraordinary natural abundance, preserving nature's mineral wealth until today. Through a specialized infusion process, these natural minerals and trace elements are gently released.

Just 10 drops a day helps replenish a spectrum of mineral elements, including zinc and chromium. These foundational nutrients work quietly behind the scenes, participating in hundreds of vital processes that sustain your energy and vitality. The formula is pure and simple—free from gluten, dairy, artificial colors, or flavors—and suitable for vegetarians.`,long_description:`When your body sends subtle signals—like feeling easily fatigued, having trouble focusing, or noticing your recovery isn't what it used to be—it's often a sign your internal balance needs attention. We're not seeking drastic change, but rather providing the foundational support your body already knows and needs, helping your systems return to smooth, efficient operation.

**Food-State Technology & Ancient Source**
The core of this supplement isn't a lab-synthesized single compound, but a unique source: 200-million-year-old fossilized plant deposits, known as sapropelic shale. During an era of exceptionally lush vegetation and mineral-rich soil, these plants absorbed and stored a complete spectrum of minerals. Using a carefully monitored infusion process, we gently release these preserved natural mineral complexes into water, maximizing retention of their natural form and biocompatibility, and ensuring high purity. This transforms ancient vitality into a nourishing form usable for modern life.

**A Complete Mineral Support System**
This product provides not isolated ingredients, but a synergistic mineral environment. The fossil-derived mineral complex offers broad-spectrum background support, potentially including dozens of trace elements, mimicking the complex form in which minerals exist in natural foods. Building on this foundation, we've specifically enhanced zinc and chromium—two trace elements particularly relevant to modern lifestyles. Zinc acts as a catalyst in numerous enzymatic reactions, involved in cellular renewal, normal immune system function, and the acuity of taste and smell. Chromium is closely involved in carbohydrate metabolism, helping the body utilize energy more steadily. Working together with the foundational mineral complex, they aim to support the body's overall metabolic vitality and internal balance.

**Who It's For**
It's suitable for those whose diets may lack variety, or who find it challenging to obtain sufficient minerals from everyday foods. It's also for busy adults who are mindful of foundational body care and seek a simple, gentle way to supplement basic nutrition. For those following vegetarian or vegan diets, it offers a convenient mineral supplementation option.

**Purity & Ingredient Integrity**
We firmly believe a supplement should not become a burden on the body. Therefore, the formula is exceptionally simple: fossil-derived mineral complex, zinc, chromium, and water. Free from gluten, dairy, preservatives, artificial colors, and flavors. Non-GMO. Every batch undergoes strict quality control, ensuring you ingest only what you intend to. The seal on the bottle is your guarantee of receiving an intact product.

**Usage & Dosage**
Shake well before use. The recommended dose is 10 drops (approx. 0.5 ml) daily. It can be taken directly into the mouth or mixed with a small amount of juice or vegetable juice to improve taste, followed by drinking ample water. Dosage can be adjusted based on the specific advice of a health consultant.

**Important Notes**
This product is a dietary supplement and is not a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal is missing.`,ingredient_reference:`**Fossil-Derived Mineral Complex**
This is the foundation of the product, sourced from 200-million-year-old sapropelic shale, formed from the deposition and transformation of lush ancient plants. It is not a single mineral, but a complex system containing a variety of natural minerals and trace elements. Its composition reflects the mineral diversity of ancient, fertile ecosystems. In the body, these minerals exist in their natural complexed form, which may be more readily recognized and utilized. They collectively participate in foundational physiological functions such as enzyme system formation, electrolyte balance maintenance, and bone health support. It provides broad-spectrum background support for the formula and is particularly suited for those seeking holistic, food-state nutritional supplementation. It works synergistically with the added zinc and chromium to create a more complete mineral supplementation environment that closely resembles natural food sources.

**Zinc (from Zinc Sulfate)**
Zinc is an essential trace element that acts as a catalyst in over 300 enzymatic reactions in the body. It is crucial for protein synthesis, DNA production, immune cell function, wound healing, and the normal perception of taste and smell. We provide 20% of the Daily Value of zinc (2 mg per 10 drops) in the form of zinc sulfate, which offers good bioavailability. It is especially suitable for individuals with low intake of red meat or shellfish in their diet, or those who feel their defense systems need foundational support. In the formula, zinc works synergistically with chromium and the foundational mineral complex to support overall metabolism and cellular health.

**Chromium (from Chromium Trichloride)**
Chromium, particularly trivalent chromium, is a trace element involved in carbohydrate metabolism. Its primary role is to enhance the efficacy of insulin, helping the body utilize carbohydrates more effectively, thereby supporting stable energy levels. We provide 20% of the Daily Value of chromium (8 mcg per 10 drops) in the form of chromium trichloride, an effective and stable form for chromium supplementation. It is relevant for individuals with a high proportion of refined carbohydrates in their diet or those wishing to maintain healthy blood sugar metabolism. In the formula, chromium works alongside zinc to support normal energy metabolism and, together with the foundational mineral group, promotes overall metabolic balance.`}}},{name:"Mannayan Mineralvit Gold 250 ml",url:"https://mannayan.com/Mannayan-Mineralvit-Gold-250-ml/257",price:["55,00 €"],product_number:"257",quantity:["250 ml"],image_url:"https://mannayan.com/media/c9/dc/27/1604521330/Mineralvit-%20Gold%20250%20ml.jpg?ts=1623762050",image_local:"images/Mineralvit-%20Gold%20250%20ml.jpg",content:{cn:{label:`Mannayan Mineralvit Gold
远古植物矿物精华
• 源自2亿年前化石植物矿藏
• 提供丰富天然矿物质与微量元素
• 支持基础代谢与能量平衡
• 纯净配方，易于吸收
250毫升 / 每日10滴
纯素认证 • 无麸质 • 无人工添加`,short_description:`你是否感觉日常饮食难以覆盖身体所需的所有矿物质？现代土壤的养分流失，让从食物中获取完整的矿物质谱系变得更具挑战。

Mannayan Mineralvit Gold 源自一个独特的理念：从远古的自然丰饶中汲取养分。其核心成分是来自2亿年前的化石植物矿藏——一种保存了史前繁茂植被完整矿物质谱系的腐泥页岩。这些矿物质在漫长的地质年代中自然形成，并通过精密的浸提工艺释放，成为身体易于利用的形式。

每日仅需10滴，即可补充锌和铬等关键矿物质，支持身体的基础代谢功能。它采用纯净的液态形式，可轻松融入果汁或水中。

配方纯净，适合纯素者，不含麸质、乳制品、人工色素或防腐剂，为你提供一份来自远古的、未经修饰的矿物支持。`,long_description:`在节奏紧凑的现代生活中，身体对矿物质的需求往往被忽视。你可能并未察觉，但一种广泛而基础的营养支持，正是维持日常活力与内在平衡的无声基石。

**食物态技术与古老来源**
Mannayan Mineralvit Gold 的核心并非合成化合物，而是沉睡了两亿年的自然馈赠。其原料取自一种特殊的腐泥页岩，它封存了史前繁茂植被所吸收的完整矿物质与微量元素谱系。通过受控的浸提工艺，这些与远古植物生命结合的矿物质被温和释放，形成一种更接近食物原始状态的复合物。这种形式旨在尊重身体识别和利用营养的自然方式。

**一个完整的支持体系**
配方中的矿物质并非孤立作用。锌作为众多酶反应的催化剂，参与从能量代谢到细胞保护的多重过程。铬则与糖代谢的调节密切相关，协助维持能量的平稳释放。它们共同构成了基础代谢支持网络的一部分。而来自化石矿藏的广谱微量元素背景，则为这个体系提供了更丰富的协同环境，模拟了自然界中矿物质协同作用的复杂性。

**适合哪些生活情境**
它适合那些饮食结构单一、或感觉从日常膳食中难以获得全面矿物质支持的人。对于追求纯净、简单补充方式，并看重成分天然来源的实践者，这是一项贴合其理念的选择。它也适用于遵循纯素或特定饮食限制，需要额外关注矿物质摄入的人群。

**纯净与成分完整性**
产品成分表极其简洁：化石来源的矿物质混合物、锌（以硫酸锌形式）、铬（以三氯化铬形式）和水。无麸质、无乳制品、无人工色素、香料或防腐剂。整个生产过程遵循严格标准，以确保最终产物的纯净度。这份简洁本身就是一种承诺。

**健康管理者与搭配方案**
许多自然疗法医师或营养顾问看重其古老的矿物来源和纯净特性，会将其作为基础矿物质支持方案的一部分。它可以与维生素补充剂、或针对特定健康目标的草本配方搭配使用，为更个性化的健康管理计划提供底层支撑。

**用法与剂量**
使用前请摇匀。建议每日服用10滴（约0.5毫升），可混合于水果汁、蔬菜汁或足量清水中饮用。具体用量可遵从专业健康顾问的指导。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日用量。置于儿童无法触及之处，避光、阴凉干燥保存。若密封带缺失，请勿食用。`,ingredient_reference:`**化石来源矿物质混合物**
这是产品的基石，源自2亿年前的腐泥页岩。这种地质构造保存了史前繁茂植物群落所吸收的广谱矿物质与微量元素。它提供的不是单一成分，而是一个接近自然食物态的复合矿物环境。这种形式旨在以身体熟悉的方式提供支持，适合那些寻求远离高度加工合成营养素、回归更自然补充途径的人群。它为配方中的锌和铬提供了协同作用的背景。

**锌**
锌是一种必需的微量矿物质，在体内扮演着数百种酶反应催化剂的角色。它直接参与能量代谢、蛋白质合成以及细胞的正常功能与保护。本产品以硫酸锌的形式提供，每10滴含2毫克，达到推荐每日摄入量的20%。它适合那些希望支持基础代谢活力、或日常饮食中锌来源可能不足的人。在配方中，锌的作用与铬相互配合，共同维护能量代谢系统的平衡。

**铬**
铬，特别是三价铬，是糖代谢过程中的一个辅助因子，有助于维持健康的血糖水平，并支持能量的平稳释放。产品以三氯化铬的形式提供，每10滴含8微克，同样达到推荐每日摄入量的20%。它对于饮食中精制碳水化合物比例较高、或关注能量平稳代谢的人群具有意义。在化石矿物质提供的广谱微量元素环境中，铬的作用能得到更自然的支持。`},en:{label:`Mannayan Mineralvit Gold
Ancient Plant Mineral Essence
• Sourced from 200-million-year-old fossilized plant deposits
• Provides a rich spectrum of natural minerals and trace elements
• Supports foundational metabolism and energy balance
• Pure formula, easy to absorb
250 ml / 10 drops daily
Vegan Certified • Gluten-Free • No Artificial Additives`,short_description:`Do you find it difficult to get all the minerals your body needs from your daily diet? Nutrient depletion in modern soils makes it increasingly challenging to obtain a complete mineral profile from food alone.

Mannayan Mineralvit Gold is born from a unique idea: drawing nourishment from the ancient abundance of nature. Its core ingredient comes from 200-million-year-old fossilized plant deposits—a type of sapropelic shale that preserves the full mineral spectrum of prehistoric lush vegetation. These minerals were formed naturally over vast geological time and are released through a precise extraction process into a form the body can readily use.

Just 10 drops a day provide key minerals like zinc and chromium to support your body's foundational metabolic functions. It comes in a pure liquid form that easily blends into juice or water.

The formula is clean, suitable for vegans, and free from gluten, dairy, artificial colors, or preservatives—offering you unadulterated mineral support from the depths of prehistory.`,long_description:`In the fast pace of modern life, the body's need for minerals is often overlooked. You may not notice it, but broad, foundational nutritional support is the quiet cornerstone of maintaining daily vitality and inner balance.

**Food-State Technology & Ancient Source**
At the heart of Mannayan Mineralvit Gold is not a synthetic compound, but a natural gift that lay dormant for 200 million years. Its raw material is drawn from a special sapropelic shale, which sealed within it the complete spectrum of minerals and trace elements absorbed by prehistoric lush vegetation. Through a controlled extraction process, these minerals, bound to ancient plant life, are gently released into a complex that more closely resembles the original state of nutrients in food. This form is designed to respect the body's natural way of recognizing and utilizing nourishment.

**A Complete Support System**
The minerals in the formula do not work in isolation. Zinc acts as a catalyst for numerous enzymatic reactions, involved in processes from energy metabolism to cellular protection. Chromium is closely linked to the regulation of sugar metabolism, helping to maintain steady energy release. Together, they form part of a foundational metabolic support network. The broad-spectrum trace element background from the fossilized deposits provides a richer synergistic environment for this system, mimicking the complexity of mineral interplay found in nature.

**Suitable For Which Lifestyles**
It is suitable for those with a monotonous diet or who feel it's difficult to obtain comprehensive mineral support from daily meals. For practitioners who seek a pure, simple supplementation method and value the natural origin of ingredients, this aligns with their philosophy. It is also suitable for those following vegan or specific dietary restrictions who need to pay extra attention to their mineral intake.

**Purity & Ingredient Integrity**
The ingredient list is remarkably simple: fossil-derived mineral complex, zinc (as zinc sulfate), chromium (as chromium trichloride), and water. It is gluten-free, dairy-free, and contains no artificial colors, flavors, or preservatives. The entire production process adheres to strict standards to ensure the purity of the final product. This simplicity is itself a promise.

**For Health Practitioners & Combination Plans**
Many naturopaths or nutritional consultants value its ancient mineral source and purity, incorporating it as part of a foundational mineral support protocol. It can be paired with vitamin supplements or herbal formulas targeting specific health goals, providing underlying support for a more personalized health management plan.

**Usage & Dosage**
Shake well before use. The recommended dose is 10 drops (approximately 0.5 ml) daily, mixed into fruit juice, vegetable juice, or a sufficient amount of plain water. Specific dosage may be adjusted under the guidance of a qualified health advisor.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Fossil-Derived Mineral Complex**
This is the cornerstone of the product, sourced from 200-million-year-old sapropelic shale. This geological formation preserves the broad spectrum of minerals and trace elements absorbed by prehistoric lush plant communities. It provides not a single ingredient, but a complex mineral environment that closely resembles the natural food state. This form is designed to support the body in a familiar way, suitable for those seeking to move away from highly processed synthetic nutrients and return to a more natural supplementation pathway. It provides a synergistic background for the zinc and chromium in the formula.

**Zinc**
Zinc is an essential trace mineral that acts as a catalyst for hundreds of enzymatic reactions in the body. It is directly involved in energy metabolism, protein synthesis, and normal cellular function and protection. This product provides zinc in the form of zinc sulfate, with 2 mg per 10 drops, meeting 20% of the recommended daily intake. It is suitable for those looking to support foundational metabolic vitality or whose daily diet may be insufficient in zinc sources. In the formula, zinc works in concert with chromium to help maintain balance in the energy metabolism system.

**Chromium**
Chromium, particularly trivalent chromium, is a cofactor in sugar metabolism, helping to maintain healthy blood sugar levels and support steady energy release. The product provides chromium in the form of chromium trichloride, with 8 mcg per 10 drops, also meeting 20% of the recommended daily intake. It is meaningful for those with a diet high in refined carbohydrates or who are mindful of steady energy metabolism. Within the broad-spectrum trace element environment provided by the fossil minerals, chromium's role receives more natural support.`}}},{name:"Mannayan Mineralvit Gold 50 ml",url:"https://mannayan.com/Mannayan-Mineralvit-Gold-50-ml/255",price:["16,80 €"],product_number:"255",quantity:["50 ml"],image_url:"https://mannayan.com/media/c5/37/b8/1596529036/Mineralvit-Gold%20%2850%20ml%29.jpg?ts=1623762050",image_local:"images/Mineralvit-Gold%20%2850%20ml%29.jpg",content:{cn:{label:`Mannayan Mineralvit Gold 矿物黄金液
源自远古植物的生命精华
• 提供全面矿物与微量元素
• 源自2亿年前化石植物沉积
• 支持基础代谢与能量平衡
• 纯净配方，易于吸收
50毫升 / 每日10滴
适合素食者与纯素者 / 无麸质、无乳糖、无人工添加`,short_description:`你是否感觉日常饮食总有些难以填补的空白，即便吃得再均衡，身体似乎仍需要一些来自大地深处的根本支持？现代生活节奏和土壤变化，让我们从食物中获取完整矿物质的途径变得不那么确定。

Mannayan Mineralvit Gold 提供了一种回归本质的解决方案。它的核心并非人工合成，而是源自约2亿年前史前繁茂植物形成的化石沉积层。这些远古植物在生长过程中吸收了当时土壤中丰富的矿物质与微量元素，并以化石的形式保存至今。我们通过温和的浸提工艺，将这些被封存的自然馈赠释放出来。

这款液体补充剂旨在为身体提供广泛的基础矿物支持，其中特别添加了锌和铬。每日仅需10滴（0.5毫升），即可提供锌每日参考摄入量的20%和铬每日参考摄入量的20%。它采用纯净配方，不含麸质、乳制品、人工色素、香料或防腐剂，适合素食与纯素生活方式。`,long_description:`当身体的信号灯微微闪烁——可能是持久的倦意难以驱散，也可能是注意力不如以往集中，或是感觉恢复能力变慢——这常常是内在平衡需要关注的细微提示。这些感受并非孤立存在，它们往往与身体维持日常运转所依赖的、那些看似不起眼却至关重要的基础矿物质网络息息相关。

**食物态技术与本源提取**
Mannayan Mineralvit Gold 的根基不是实验室的烧瓶，而是时间本身。其核心成分来源于一种特殊的腐泥岩，这是由约两亿年前史前茂盛植被在特定地质条件下形成的化石沉积物。那时的植物生长在矿物质极为丰富的环境中，其组织成为了这些元素的天然载体。我们采用的提取工艺尊重这种原始状态，通过受控的浸提过程，旨在温和地释放其中封存的矿物复合物，而非进行化学分离或合成，力求保留其天然存在的复合形态。

**一个协同的矿物支持体系**
这款补充剂提供的是广泛的矿物基质，源自化石植物本身所含的多种微量元素。在此基础上，我们特别强化了锌和铬的含量。锌参与体内数百种酶的活性，是细胞代谢、免疫信号传导和蛋白质合成中的关键角色。铬则与碳水化合物的代谢调节有关，协助维持正常的血糖水平。它们与基底中多样的微量元素共同作用，不是为了单一目标的强效冲击，而是为了给身体提供一个广泛、基础的支持网络，帮助填补现代饮食中可能存在的细微缺口，支持整体代谢环境的稳定。

**适合哪些生活情境**
它适合那些饮食虽然均衡，但仍希望为自己增加一层来自大地本源矿物质支持的人；适合追求纯净、简单成分来源的素食者和纯素者；也适合生活节奏紧张，感到需要为身体的基础营养储备提供额外关照的现代人。它不是针对某种急症的方案，而是着眼于长期内在平衡的日常养护选择。

**纯净与成分完整性**
配方极致简洁：化石来源的矿物混合物、锌（以硫酸锌形式提供）、铬（以三氯化铬形式提供）和水。再无其他。我们明确避免了麸质、乳糖、人工防腐剂、色素、香精以及转基因原料。每一批产品都经过严格质量控制，确保你摄入的只有你期望的成分。瓶身上的纯净标签不是营销口号，而是我们对你健康选择的基本尊重。

**用法与剂量**
使用前请摇匀。建议每日服用10滴（约0.5毫升）。可直接滴入口中，或与少量果汁、蔬菜汁混合服用，以适应用户的口味偏好。也可根据健康顾问的建议，用足量水送服。一瓶50毫升的容量可供长期日常使用。

**重要提示**
请勿超过推荐的每日食用量。膳食补充剂不能替代均衡多样的饮食。请置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口密封带缺失，请勿食用。`,ingredient_reference:`**化石来源矿物复合物**
这是产品的核心基底，源自约2亿年前史前植物形成的腐泥岩。它并非单一的矿物质，而是包含了当时植被所吸收并保存下来的多种微量元素的一个天然复合体。这种形式提供的矿物质，其存在状态更接近于食物中的矿物形态。它为身体提供了一个广泛的、非高剂量的微量元素背景支持，旨在弥补现代饮食和土壤条件中可能缺失的矿物多样性。它与配方中添加的锌和铬协同，构成了一个从广泛到具体的多层次矿物支持网络。

**锌（来自硫酸锌）**
锌是一种必需的微量矿物质，在人体中扮演着不可或缺的角色。它是众多酶系统的组成部分，广泛参与DNA合成、蛋白质代谢、细胞生长与分裂以及免疫功能调节。我们选择硫酸锌作为来源，是因为它是一种生物利用率高且稳定的常见形式。对于关注基础代谢健康、免疫系统日常维护以及皮肤和组织修复能力的人群尤为重要。在配方中，锌的明确添加与基底中的其他微量元素相辅相成，共同支持整体的酶活性和代谢平衡。

**铬（来自三氯化铬）**
铬，特别是三价铬，是另一种人体必需的微量元素。它的主要作用与碳水化合物、脂肪和蛋白质的代谢调节相关，通过协助胰岛素的作用，帮助维持正常的血糖水平。我们使用的三氯化铬是经过研究验证的有效形式。对于饮食中精制碳水化合物比例较高，或希望关注自身能量代谢平衡的人群具有意义。在 Mineralvit Gold 中，铬与锌及基底矿物质共同工作，从不同角度支持身体的基础代谢途径，促进营养物质的有效利用。`},en:{label:`Mannayan Mineralvit Gold Mineral Elixir
Life Essence from Ancient Plants
• Provides comprehensive minerals and trace elements
• Sourced from 200-million-year-old fossilized plant deposits
• Supports basal metabolism and energy balance
• Pure formula, easy to absorb
50 ml / 10 drops daily
Suitable for vegetarians and vegans / Gluten-free, lactose-free, no artificial additives`,short_description:`Do you ever feel like there’s a gap in your daily diet that’s hard to fill—that even with balanced eating, your body still seems to need something fundamental from deep within the earth? The pace of modern life and changes in soil quality have made it less certain that we can obtain complete minerals from food alone.

Mannayan Mineralvit Gold offers a back-to-nature solution. Its core is not synthetically produced, but derived from fossilized sedimentary layers formed by lush prehistoric plants around 200 million years ago. These ancient plants absorbed the rich minerals and trace elements from the soil of their time, preserving them in fossil form until today. Through a gentle extraction process, we release this sealed natural gift.

This liquid supplement is designed to provide broad foundational mineral support for the body, with added zinc and chromium. Just 10 drops (0.5 ml) daily provides 20% of the Reference Intake for zinc and 20% of the Reference Intake for chromium. It features a pure formula, free from gluten, dairy, artificial colors, flavors, or preservatives, making it suitable for vegetarian and vegan lifestyles.`,long_description:`When your body’s signals flicker faintly—perhaps a lingering fatigue that’s hard to shake, a dip in concentration, or a sense that recovery is slower than before—these are often subtle hints that your inner balance needs attention. These feelings are not isolated; they’re often connected to the network of foundational minerals that, while seemingly small, are crucial for your body’s daily operations.

**Food-State Technology and Origin Extraction**
The foundation of Mannayan Mineralvit Gold is not a laboratory flask, but time itself. Its core ingredient comes from a special sapropelite, a fossilized sediment formed from lush prehistoric vegetation under specific geological conditions around 200 million years ago. Plants of that era grew in mineral-rich environments, and their tissues became natural carriers of these elements. Our extraction process honors this primal state: through a controlled leaching method, we aim to gently release the mineral complexes locked within, without chemical separation or synthesis, striving to preserve their naturally occurring composite form.

**A Synergistic Mineral Support System**
This supplement provides a broad mineral matrix derived from the diverse trace elements naturally present in the fossilized plants. On this base, we’ve specifically enhanced the levels of zinc and chromium. Zinc is involved in the activity of hundreds of enzymes in the body, playing key roles in cellular metabolism, immune signaling, and protein synthesis. Chromium is associated with the regulation of carbohydrate metabolism, helping to maintain normal blood sugar levels. Together with the diverse trace elements in the base, they work not as a high-potency single-target solution, but as a broad, foundational support network—helping to fill subtle gaps that may exist in modern diets and supporting the stability of your overall metabolic environment.

**Who It’s For**
It’s for those who eat a balanced diet but still want an added layer of mineral support from the earth’s origins; for vegetarians and vegans seeking pure, simple ingredient sources; and for modern individuals with busy lifestyles who feel the need to give extra care to their foundational nutrient reserves. It’s not a remedy for acute conditions, but a choice for daily maintenance focused on long-term inner balance.

**Purity and Ingredient Integrity**
The formula is exceptionally simple: fossil-derived mineral blend, zinc (as zinc sulfate), chromium (as chromium trichloride), and water. Nothing else. We consciously avoid gluten, lactose, artificial preservatives, colors, flavors, and GMO ingredients. Every batch undergoes strict quality control to ensure you’re getting only what you expect. The clean label on the bottle isn’t a marketing slogan—it’s our basic respect for your health choices.

**Usage and Dosage**
Shake well before use. The recommended dose is 10 drops (approx. 0.5 ml) daily. You can drop it directly into your mouth or mix it with a small amount of juice or vegetable juice to suit your taste preference. It can also be taken with sufficient water as advised by a health consultant. A 50 ml bottle is designed for long-term daily use.

**Important Notes**
Do not exceed the recommended daily intake. Food supplements are not a substitute for a varied, balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle’s seal is missing.`,ingredient_reference:`**Fossil-Derived Mineral Complex**
This is the core base of the product, sourced from sapropelite formed by prehistoric plants around 200 million years ago. It is not a single mineral, but a natural composite containing multiple trace elements absorbed and preserved by the vegetation of that era. Minerals in this form are presented in a state closer to the food-bound mineral forms found in nature. It provides the body with broad, non-high-dose trace element background support, aiming to compensate for the potential lack of mineral diversity in modern diets and soil conditions. Working synergistically with the added zinc and chromium in the formula, it creates a multi-layered mineral support network ranging from broad to specific.

**Zinc (from Zinc Sulfate)**
Zinc is an essential trace mineral that plays an indispensable role in the human body. It is a component of numerous enzyme systems, widely involved in DNA synthesis, protein metabolism, cell growth and division, and immune function regulation. We chose zinc sulfate as the source due to its high bioavailability and stability as a common form. It is particularly important for those focused on foundational metabolic health, daily immune system maintenance, and skin and tissue repair capabilities. In the formula, the explicit addition of zinc works in concert with other trace elements in the base to support overall enzyme activity and metabolic balance.

**Chromium (from Chromium Trichloride)**
Chromium, particularly trivalent chromium, is another essential trace mineral for the human body. Its primary role relates to the regulation of carbohydrate, fat, and protein metabolism, helping to maintain normal blood sugar levels by assisting insulin function. The chromium trichloride we use is a well-researched and effective form. It is meaningful for those with a higher proportion of refined carbohydrates in their diet or who wish to focus on their energy metabolism balance. In Mineralvit Gold, chromium works together with zinc and the base minerals to support the body’s foundational metabolic pathways from different angles, promoting the efficient utilization of nutrients.`}}},{name:"Mannayan MineralVit Gold 500 ml",url:"https://mannayan.com/Mannayan-MineralVit-Gold-500-ml/946",price:["98,00 €"],product_number:"946",quantity:["500 ml"],image_url:"https://mannayan.com/media/1e/4b/74/1604522419/Mineralvit-Gold%20500%20ml.jpg?ts=1623762050",image_local:"images/Mineralvit-Gold%20500%20ml.jpg",content:{cn:{label:`Mannayan MineralVit Gold
远古植物矿物精华
• 源自2亿年前化石植物
• 提供丰富天然矿物质与微量元素
• 支持基础代谢与能量平衡
• 液态配方，易于吸收
• 纯净素食配方，无人工添加
500毫升 / 每日10滴`,short_description:`你是否感觉日常饮食总有些难以弥补的缺口，即使吃得均衡，身体依然发出需要更多支持的信号？现代耕作方式和食物加工过程，让天然食物中的矿物质含量不如从前。我们需要的不仅是单一的补充，而是来自大地深处的、完整的矿物谱系。

Mannayan MineralVit Gold 的核心，是封存了2亿年前远古繁茂植物群的化石腐泥岩。那时的植物生长在矿物质极其丰富的环境中，将大自然的丰沛完整吸收并保存至今。我们通过温和的浸提工艺，将这些远古的矿物智慧释放出来，制成易于吸收的液态补充剂。

每日仅需10滴，即可提供2毫克锌和8微克铬，各占推荐每日摄入量的20%。配方纯净至极，仅含化石来源的矿物混合物、锌、铬和水，适合素食者与纯素者，不含麸质、乳制品、防腐剂及任何人工色素香料。`,long_description:`当身体感到莫名的疲惫，精力不如从前集中，或是总觉得恢复速度变慢时，这常常是内在矿物质平衡需要关注的信号。矿物质是无数身体机能无声的协作者，从能量产生到细胞修复，它们不直接提供热量，却是所有生命活动得以顺畅进行的基石。

**食物态矿物技术**
Mannayan MineralVit Gold 并非化学合成的矿物质。它源自一种特殊的腐泥岩，这种岩石是2亿年前史前繁茂植被在特定地质条件下形成的化石。当时的植物从矿物浓度极高的原始环境中生长，其组织天然富集了完整谱系的微量元素和矿物质。我们采用的浸提工艺，旨在温和地将这些被植物预先整合过的矿物元素释放到水中，形成一种更接近食物天然状态的矿物复合物。

**一个完整的矿物支持体系**
这款补充剂提供的是广泛的矿物基质，而不仅仅是单一的锌和铬。化石来源的矿物混合物构成了一个丰富的背景环境，模拟了自然界中矿物质协同作用的模式。在此基础上，特别添加的锌和铬以生物可利用的形式存在，针对现代生活中常见的需求缺口提供明确支持。锌参与数百种酶的运作，关乎免疫防御、皮肤健康和认知功能；铬则在糖代谢和能量稳定中扮演关键角色。它们在这个古老的矿物矩阵中共同作用，旨在支持身体从基础层面维持稳态。

**适合哪些生活情境**
它适合那些饮食精致但担心土壤贫瘠影响食物营养密度的人；适合生活节奏快、身体时常感到透支需要从根本调理的人；也适合追求纯净、简单补充方案的素食者。当你寻求一种超越单一成分、回归矿物本质的全面支持时，它会是一个契合的选择。

**纯净与成分的完整性**
我们相信，补充剂的效力始于其纯净度。瓶中的每一滴都只为带来矿物本身的力量。配方中不含任何非必要的成分：无麸质、无乳制品、无防腐剂、无人工色素或香料，也非转基因来源。简单的成分列表背后，是严格的生产控制和对原始原料的深刻尊重。

**用法与剂量**
使用前请摇匀。每日10滴（约0.5毫升），可直接滴入口中，或与少量果汁、蔬菜汁混合饮用，以确保最佳口感。也可根据健康管理者的具体建议服用。一瓶500毫升可长期使用。

**重要提示**
推荐的每日食用量不应被超过。膳食补充剂不能替代均衡多样的饮食。请置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封带缺失，请勿食用。`,ingredient_reference:`**化石来源矿物混合物**
这是产品的基石，源自2亿年前形成的植物化石腐泥岩。它并非单一矿物，而是一个包含了多种天然存在的微量元素和矿物质的复合基质。在体内，这种广泛的矿物背景可能为细胞环境提供更全面的支持，模拟从完整食物中获取矿物质的模式。它所采用的温和水提法，旨在保持这些矿物元素的天然关联状态。适合那些寻求超越单一成分、渴望获得更接近自然食物形态矿物支持的人群。它为配方中添加的锌和铬提供了一个协同作用的背景环境。

**锌（来自硫酸锌）**
锌是一种必需的微量矿物质，参与体内超过300种酶的催化反应，是蛋白质合成、DNA修复和细胞分裂所必需的。它在免疫系统的正常功能、皮肤健康、伤口愈合以及味觉和嗅觉感知中起着核心作用。我们采用硫酸锌的形式，这是一种具有良好生物利用度的稳定来源。尤其适合那些饮食中海鲜或红肉摄入有限、或处于高需求时期（如恢复期）的人群。在配方中，锌与铬及基础矿物矩阵协同，共同支持整体的代谢与平衡。

**铬（来自三氯化铬）**
铬，特别是三价铬，是一种重要的微量元素，它在碳水化合物、脂肪和蛋白质的代谢中扮演辅助角色，主要通过支持胰岛素的功能来帮助维持正常的血糖水平。三氯化铬是铬的一种可被利用的形式。对于饮食中精制碳水化合物比例较高、或希望支持身体维持能量平稳过渡的人群有特定意义。在配方中，铬与锌一同工作，在广泛的矿物基质支持下，共同参与能量代谢的调节过程。`},en:{label:`Mannayan MineralVit Gold
Ancient Plant Mineral Essence
• Sourced from 200-million-year-old fossilized plants
• Delivers a rich spectrum of natural minerals and trace elements
• Supports foundational metabolism and energy balance
• Liquid formula for easy absorption
• Pure vegan formula, free from artificial additives
500 ml / 10 drops daily`,short_description:`Do you ever feel like your daily diet has gaps that are hard to fill, even when eating balanced meals, and your body still signals a need for more support? Modern farming practices and food processing have reduced the mineral content in natural foods. What we need is not just isolated supplementation, but a complete mineral spectrum from the deep earth.

The heart of Mannayan MineralVit Gold is fossilized sapropelite, which preserves lush plant life from 200 million years ago. Those plants grew in an environment exceptionally rich in minerals, absorbing and storing nature's abundance, which remains intact today. Through a gentle extraction process, we release this ancient mineral wisdom into an easily absorbed liquid supplement.

Just 10 drops daily provide 2 mg of zinc and 8 mcg of chromium, each contributing 20% of the recommended daily intake. The formula is exceptionally pure, containing only fossil-derived mineral blend, zinc, chromium, and water. It is suitable for vegetarians and vegans, and is free from gluten, dairy, preservatives, and any artificial colors or flavors.`,long_description:`When your body feels inexplicably tired, your focus isn't as sharp as it used to be, or recovery seems slower, these are often signals that your internal mineral balance needs attention. Minerals are the silent collaborators in countless bodily functions—from energy production to cellular repair. They don't provide calories directly, but are the foundation that allows all life processes to run smoothly.

**Food-State Mineral Technology**
Mannayan MineralVit Gold is not chemically synthesized minerals. It is sourced from a special sapropelite, a fossil rock formed 200 million years ago from prehistoric lush vegetation under specific geological conditions. Plants from that era grew in a primitive environment with exceptionally high mineral concentrations, naturally enriching their tissues with a complete spectrum of trace elements and minerals. Our extraction process gently releases these plant-integrated mineral elements into water, creating a mineral complex closer to the natural state found in food.

**A Complete Mineral Support System**
This supplement provides a broad mineral matrix, not just isolated zinc and chromium. The fossil-derived mineral blend creates a rich background environment, mimicking the synergistic patterns of minerals in nature. On this foundation, specifically added zinc and chromium are present in bioavailable forms, offering targeted support for common gaps in modern lifestyles. Zinc is involved in the function of hundreds of enzymes, crucial for immune defense, skin health, and cognitive function; chromium plays a key role in glucose metabolism and energy stability. Working together within this ancient mineral matrix, they aim to support the body in maintaining homeostasis at a foundational level.

**Suitable Life Situations**
It is for those who eat well but worry about soil depletion affecting the nutrient density of their food; for those with fast-paced lives whose bodies often feel drained and need fundamental support; and for vegetarians seeking a pure, simple supplementation approach. When you seek comprehensive support that goes beyond single ingredients and returns to the essence of minerals, this is a fitting choice.

**Purity and Ingredient Integrity**
We believe a supplement's efficacy begins with its purity. Every drop in the bottle is intended to deliver only the power of the minerals themselves. The formula contains no unnecessary ingredients: it is gluten-free, dairy-free, free from preservatives, artificial colors or flavors, and is non-GMO. Behind the simple ingredient list lies strict production controls and deep respect for the raw materials.

**Usage and Dosage**
Shake well before use. Take 10 drops (approximately 0.5 ml) daily. Can be taken directly into the mouth or mixed with a small amount of juice or vegetable juice for optimal taste. May also be taken as specifically advised by your health practitioner. One 500 ml bottle provides long-term use.

**Important Notes**
The recommended daily amount should not be exceeded. Food supplements are not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the seal around the bottle cap is missing.`,ingredient_reference:`**Fossil-Derived Mineral Blend**
This is the foundation of the product, sourced from plant-fossil sapropelite formed 200 million years ago. It is not a single mineral, but a complex matrix containing a variety of naturally occurring trace elements and minerals. In the body, this broad mineral background may provide more comprehensive support for the cellular environment, mimicking the pattern of obtaining minerals from whole foods. The gentle water extraction method used aims to preserve the natural associative state of these mineral elements. It is suitable for those seeking support beyond single ingredients, desiring mineral support closer to the form found in natural foods. It provides a synergistic background environment for the added zinc and chromium in the formula.

**Zinc (from Zinc Sulfate)**
Zinc is an essential trace mineral involved in the catalytic activity of over 300 enzymes in the body. It is necessary for protein synthesis, DNA repair, and cell division. It plays a central role in the normal function of the immune system, skin health, wound healing, and the perception of taste and smell. We use zinc sulfate, a stable source with good bioavailability. It is particularly suitable for those with limited intake of seafood or red meat in their diet, or during periods of high demand (such as recovery). In the formula, zinc works synergistically with chromium and the foundational mineral matrix to support overall metabolism and balance.

**Chromium (from Chromium Trichloride)**
Chromium, particularly trivalent chromium, is an important trace element. It plays a supportive role in the metabolism of carbohydrates, fats, and proteins, primarily by aiding insulin function to help maintain normal blood glucose levels. Chromium trichloride is a utilizable form of chromium. It holds specific relevance for those with a high proportion of refined carbohydrates in their diet, or who wish to support the body in maintaining smooth energy transitions. In the formula, chromium works together with zinc, supported by the broad mineral matrix, to participate in the regulation of energy metabolism.`}}},{name:"Mannayan MSM + (60 Tabletten)",url:"https://mannayan.com/Mannayan-MSM-60-Tabletten/010877",price:["12,90 €"],product_number:"010877",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/b5/b4/b1/1766137300/Msm%2B_2025.jpg?ts=1766137300",image_local:"images/Msm%2B_2025.jpg",content:{cn:{label:`Mannayan MSM+
有机硫，支持关节与结缔组织健康
• 支持关节舒适度与活动灵活性
• 维持结缔组织（如软骨、肌腱）健康
• 提供生物可利用的有机硫
• 参与体内重要的甲基化过程
每片含1000毫克MSM | 60片装
适合过敏体质、素食者、念珠菌敏感人群 | 无麸质、无乳糖、无人工添加`,short_description:`你是否感觉关节不再像年轻时那样灵活自如，日常活动后容易感到僵硬或不适？这常常与身体内支撑结构的健康状态有关。

Mannayan MSM+ 提供高纯度的有机硫（MSM），这是一种对维持关节、软骨、肌腱等结缔组织健康至关重要的天然物质。它帮助身体维持结缔组织的弹性和完整性，从而支持关节的舒适度和整体的活动能力。

我们的配方简单而专注，每片含有1000毫克MSM。它采用纯净配方，不含麸质、乳糖、大豆、酵母、淀粉、人工色素或防腐剂，适合包括过敏体质和素食者在内的广泛人群。`,long_description:`早晨起床时关节的轻微僵硬，上下楼梯时膝盖的隐约不适，或是长时间工作后肩颈的紧绷感——这些细微的信号，常常是身体在提醒我们关注支撑结构的健康。关节、软骨、韧带和肌腱共同构成了我们活动的基石，它们的柔韧与强健，直接关系到生活的自在程度。

**食物态技术与纯净递送**
Mannayan MSM+ 的核心是甲基磺酰甲烷（MSM），一种天然存在的有机硫化合物。硫是构成人体结缔组织蛋白质（如胶原蛋白和角蛋白）的关键元素。我们的产品提供高纯度的MSM，确保其生物可利用性，让身体能够有效地利用这一重要营养素。片剂采用纤维素等简单辅料制成，易于吞咽和吸收。

**专注于根本支持的完整体系**
这款产品的设计理念是专注与纯粹。MSM作为有机硫的直接来源，参与体内多种生理过程。它不仅是构建健康结缔组织所必需的原料，也参与重要的甲基化反应，支持身体的自然修复与更新机制。通过补充这一基础物质，旨在从营养层面为关节和结缔组织的长期健康提供支持。

**适合人群**
这款产品适合那些因日常活动、运动或自然生理变化而希望主动关注关节与结缔组织健康的人。它也适用于饮食中硫来源可能不足的素食者，以及寻求纯净、无常见过敏原补充方案的人群，包括对麸质、乳糖或酵母敏感的人士。

**纯净与成分完整性**
我们坚信补充剂应尽可能纯净。Mannayan MSM+ 不含小麦、麸质、乳制品、大豆、糖、淀粉、酵母、防腐剂以及任何人工色素或香料。非转基因。配方简洁，只包含有效成分和必要的少量辅料，确保你摄入的是你真正需要的。

**用法与剂量**
建议每日服用1至3片，随足量液体吞服。初始可从较低剂量开始，根据个人感受调整。由于个体需求不同，长期服用或特定健康状况下（如孕期、哺乳期），建议咨询你的健康顾问以确定最适合的剂量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过建议每日服用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口密封条缺失，请勿食用。`,ingredient_reference:`**MSM（甲基磺酰甲烷）**
MSM是一种天然存在的有机硫化合物，是人体内硫元素的重要膳食来源之一。硫是构成胶原蛋白和角蛋白等结构蛋白的必需元素，对于维持软骨、肌腱、韧带和皮肤的完整性至关重要。本品采用高纯度的MSM，确保其生物可利用性。它特别适合关注关节灵活性、结缔组织健康，或日常活动量较大的人群。在此配方中，MSM作为单一核心成分，提供直接而专注的营养支持。`},en:{label:`Mannayan MSM+
Organic Sulfur for Joint & Connective Tissue Health
• Supports joint comfort and mobility
• Maintains the health of connective tissues (e.g., cartilage, tendons)
• Provides bioavailable organic sulfur
• Participates in vital methylation processes in the body
1000 mg MSM per tablet | 60 tablets
Suitable for those with allergies, vegetarians, and candida-sensitive individuals | Gluten-free, lactose-free, no artificial additives`,short_description:`Do you feel your joints aren't as flexible and free as they used to be in your youth, often experiencing stiffness or discomfort after daily activities? This is frequently related to the health of the body's supportive structures.

Mannayan MSM+ provides high-purity organic sulfur (MSM), a natural substance crucial for maintaining the health of connective tissues like joints, cartilage, and tendons. It helps the body maintain the elasticity and integrity of connective tissues, thereby supporting joint comfort and overall mobility.

Our formula is simple and focused, with each tablet containing 1000 mg of MSM. It features a clean formulation, free from gluten, lactose, soy, yeast, starch, artificial colors, or preservatives, making it suitable for a wide range of individuals, including those with allergies and vegetarians.`,long_description:`The slight stiffness in your joints upon waking, the faint discomfort in your knees when climbing stairs, or the tightness in your shoulders and neck after a long day of work—these subtle signals are often your body's way of reminding you to pay attention to the health of your supportive structures. Joints, cartilage, ligaments, and tendons together form the foundation of our movement; their flexibility and strength directly impact how freely we live.

**Food-State Technology & Pure Delivery**
At the heart of Mannayan MSM+ is Methylsulfonylmethane (MSM), a naturally occurring organic sulfur compound. Sulfur is a key element in the structural proteins of human connective tissues, such as collagen and keratin. Our product provides high-purity MSM, ensuring its bioavailability so the body can effectively utilize this important nutrient. The tablets are made with simple excipients like cellulose for easy swallowing and absorption.

**A Complete System Focused on Foundational Support**
This product is designed with a philosophy of focus and purity. MSM serves as a direct source of organic sulfur, participating in various physiological processes in the body. It is not only an essential building block for healthy connective tissues but also involved in vital methylation reactions, supporting the body's natural repair and renewal mechanisms. By supplementing this foundational substance, it aims to provide nutritional support for the long-term health of joints and connective tissues.

**Who It's For**
This product is suitable for those who wish to proactively care for their joint and connective tissue health due to daily activities, exercise, or natural physiological changes. It is also ideal for vegetarians whose diets may be low in sulfur sources, as well as individuals seeking a clean, allergen-free supplement option, including those sensitive to gluten, lactose, or yeast.

**Purity & Ingredient Integrity**
We believe supplements should be as pure as possible. Mannayan MSM+ contains no wheat, gluten, dairy, soy, sugar, starch, yeast, preservatives, or any artificial colors or flavors. Non-GMO. The formula is concise, containing only the active ingredient and minimal necessary excipients, ensuring you get exactly what you need.

**Usage & Dosage**
Take 1 to 3 tablets daily with plenty of liquid. It's advisable to start with a lower dose and adjust based on personal response. Since individual needs vary, for long-term use or under specific health conditions (e.g., pregnancy, breastfeeding), we recommend consulting your health advisor to determine the most suitable dosage.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's seal is broken or missing.`,ingredient_reference:`**MSM (Methylsulfonylmethane)**
MSM is a naturally occurring organic sulfur compound and one of the important dietary sources of sulfur in the human body. Sulfur is an essential element in structural proteins like collagen and keratin, crucial for maintaining the integrity of cartilage, tendons, ligaments, and skin. This product uses high-purity MSM to ensure its bioavailability. It is particularly suitable for individuals concerned about joint flexibility, connective tissue health, or those with high daily activity levels. In this formula, MSM serves as the single core ingredient, providing direct and focused nutritional support.`}}},{name:"Mannayan MULTI + (60 Tabletten)",url:"https://mannayan.com/Mannayan-MULTI-60-Tabletten/010074",price:["21,80 €"],product_number:"010074",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/2b/c0/ac/1625734471/Multi%2B.jpg?ts=1625734490",image_local:"images/Multi%2B.jpg",content:{cn:{label:`Mannayan MULTI+ 综合营养补充剂
为日常活力提供全面营养支持
• 支持能量代谢与神经系统健康
• 促进免疫系统正常功能
• 维护骨骼、牙齿与细胞健康
• 含有活性叶酸与维生素B12
• 纯净配方，无常见过敏原
60片装 | 每日1片 | 适合素食者、过敏体质`,short_description:`你是否感觉日常饮食难以面面俱到，身体偶尔会发出需要更多关注的信号？现代生活的节奏和饮食结构，有时让我们无法从食物中获取足够全面的微量营养素。

Mannayan MULTI+ 提供了一种周全的补充方案。它不仅仅包含基础的维生素和矿物质，更整合了来自果蔬浓缩物的天然营养素复合物、保加利亚乳杆菌和酵母提取物。这些成分协同工作，旨在从多个层面支持身体的日常基础功能，帮助填补营养摄入的潜在缺口。

这款配方特别考虑了身体的整体平衡需求，采用了如5-甲基四氢叶酸（活性叶酸）和甲基钴胺素（活性维生素B12）等更易于身体利用的形式。它不含小麦、大豆、麸质、乳制品、糖、人工色素及防腐剂，配方纯净温和。

每瓶包含60片，建议每日服用1片，随餐或遵医嘱，用足量水送服。`,long_description:`在忙碌的日常中，你是否会感到精力不如从前，容易疲倦，或是觉得身体的恢复能力变慢了？这些细微的感受，常常是身体发出的信号，提示基础的营养支持可能需要加强。单一的饮食模式、特定的饮食习惯，或是生活压力，都可能让我们难以持续获得全面均衡的微量营养。

**食物态营养复合技术**
Mannayan MULTI+ 的特别之处在于其复合型配方。它并非简单地将合成维生素与矿物质混合，而是结合了从天然果蔬浓缩物中提取的营养素复合物。这种思路模拟了从完整食物中获取营养的方式，同时加入了保加利亚乳杆菌和酵母提取物。这些天然成分的加入，旨在为维生素和矿物质提供一个更协同的微环境，支持身体更自然地识别和利用这些必需营养素。

**构建内在平衡的完整体系**
这款补充剂的设计核心在于“协同”与“全面”。B族维生素作为一个团队，共同参与能量代谢和神经系统的健康维护；维生素C、E、锌和硒则协同支持免疫系统的正常功能。活性形式的叶酸和维生素B12，对于细胞更新与血液健康至关重要。维生素D3与K2的组合，则关注于钙质的定向利用，支持骨骼健康。铁和铜参与氧气运输，而碘是甲状腺激素合成的必需元素。每一种成分都不是孤立运作，它们相互关联，共同致力于维持身体内部环境的稳定与平衡。

**适合哪些生活情境**
它适合那些饮食结构较为单一、蔬果摄入可能不足的都市人群；也适合因遵循素食或纯素饮食，而需要额外关注某些特定营养素（如维生素B12、铁、锌）摄入的人士。对于因过敏或不耐受（如麸质、乳糖）而限制饮食选择，担心营养摄入不全面的人来说，这款纯净配方提供了安心的选择。日常感觉精力不济、希望为身体提供基础且全面营养支持的人，都可以从中受益。

**纯净与成分的完整性承诺**
我们坚信，补充剂应该带来纯净的营养，而非不必要的负担。因此，Mannayan MULTI+ 的配方中不含小麦、大豆、麸质、乳制品（乳糖）、添加糖、人工色素、香精及防腐剂。我们精选成分形式，例如采用更稳定的维生素E琥珀酸盐、生物利用度较高的锌柠檬酸盐，以及身体可直接利用的活性叶酸和维生素B12，确保成分的有效性与亲和力。

**用法与剂量**
建议每日服用1片，最好在餐前随足量水吞服，或遵循健康专业人士的指导。持续使用有助于身体建立稳定的营养储备。每瓶60片的包装，恰好满足两个月的日常所需。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请勿超过推荐每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥处保存。若瓶口密封条破损，请勿食用。`,ingredient_reference:`**5-甲基四氢叶酸（活性叶酸）**
这是叶酸的生物活性形式，无需经过复杂的体内转化即可直接利用。它在DNA合成、细胞分裂和红细胞形成中扮演关键角色。对于体内叶酸代谢途径可能受影响的人群，这种形式能提供更直接有效的支持。在配方中，它与维生素B12协同工作，共同维护同型半胱氨酸的正常代谢水平。

**甲基钴胺素（活性维生素B12）**
甲基钴胺素是维生素B12在体内的主要活性形式之一，直接参与神经系统的健康维护和红细胞的生成。对于素食者或消化吸收功能减弱的人群，这种形式的B12尤为重要。它与叶酸紧密合作，是能量代谢和神经系统功能不可或缺的伙伴。

**维生素D3（胆钙化醇）**
维生素D3是皮肤在阳光照射下产生的形式，对钙磷吸收、骨骼健康和免疫系统调节至关重要。现代人室内活动增多，日照不足较为普遍。配方中与维生素K2搭配，有助于引导钙质沉积于骨骼而非软组织，支持更精准的营养利用。

**维生素K2（MK-7）**
这是一种长效的维生素K2形式，主要作用是激活骨骼和血管健康相关的蛋白质。它能协助将钙引导至骨骼，促进骨矿化，同时支持血管弹性。与维生素D3联用，构成了维护骨骼与心血管健康的重要协同组合。

**硒（L-硒代蛋氨酸）**
这是一种有机硒形式，由酵母自然发酵产生，硒与蛋氨酸结合。它比无机硒更易于身体储存和利用。硒是多种抗氧化酶的核心成分，帮助保护细胞免受氧化应激，并与维生素E协同增强抗氧化防御网络，同时支持甲状腺激素的正常代谢。

**锌（柠檬酸盐）**
锌柠檬酸盐是一种生物利用度较高的有机锌形式。锌参与数百种酶的活性，对免疫功能、伤口愈合、味觉嗅觉以及蛋白质合成都至关重要。在配方中，它与维生素C共同为免疫系统提供支持，并参与皮肤健康的维护。

**复合果蔬浓缩物、保加利亚乳杆菌与酵母提取物**
这些并非单一的活性成分，而是作为天然的“营养复合物”和“载体”存在于配方中。它们提供了广泛的植物营养素和微量的协同因子，模拟从完整食物中摄取营养的体验。保加利亚乳杆菌和酵母提取物则可能有助于改善肠道对营养素的吸收环境，使配方中的维生素和矿物质能在更接近自然的状态下被身体接纳利用。`},en:{label:`Mannayan MULTI+ Comprehensive Nutritional Supplement
Complete Nutritional Support for Daily Vitality
• Supports Energy Metabolism & Nervous System Health
• Promotes Normal Immune System Function
• Maintains Bone, Tooth & Cellular Health
• Contains Active Folate & Vitamin B12
• Pure Formula, Free of Common Allergens
60 Tablets | 1 Tablet Daily | Suitable for Vegetarians & Those with Sensitivities`,short_description:`Do you find it challenging to cover all nutritional bases through diet alone, with your body occasionally signaling a need for more attention? The pace of modern life and dietary patterns can sometimes make it difficult to obtain a full spectrum of micronutrients from food.

Mannayan MULTI+ offers a comprehensive solution. It goes beyond basic vitamins and minerals by integrating a natural nutrient complex from fruit and vegetable concentrates, Lactobacillus bulgaricus, and yeast extract. These components work synergistically to support the body's fundamental daily functions from multiple angles, helping to fill potential nutritional gaps.

This formula is specially designed with the body's holistic balance in mind, utilizing forms that are more readily utilized, such as 5-Methyltetrahydrofolate (active folate) and Methylcobalamin (active vitamin B12). It is free from wheat, soy, gluten, dairy, sugar, artificial colors, and preservatives, offering a pure and gentle formula.

Each bottle contains 60 tablets. The recommended dosage is 1 tablet daily, taken with a meal or as directed by a healthcare professional, with plenty of water.`,long_description:`In the hustle of daily life, do you sometimes feel your energy isn't what it used to be, experience fatigue more easily, or notice your body's recovery slowing down? These subtle sensations are often signals from your body, suggesting that foundational nutritional support may need reinforcement. Monotonous diets, specific eating habits, or life stressors can make it challenging to consistently obtain a full and balanced range of micronutrients.

**Food-State Nutrient Complex Technology**
What sets Mannayan MULTI+ apart is its comprehensive formulation. It doesn't simply blend synthetic vitamins and minerals; it combines a nutrient complex extracted from natural fruit and vegetable concentrates. This approach mimics obtaining nutrients from whole foods, while also incorporating Lactobacillus bulgaricus and yeast extract. The inclusion of these natural components aims to create a more synergistic microenvironment for the vitamins and minerals, supporting the body in recognizing and utilizing these essential nutrients more naturally.

**Building a Complete System for Internal Balance**
The design core of this supplement is "synergy" and "completeness." The B-vitamins work as a team to support energy metabolism and nervous system health. Vitamins C, E, zinc, and selenium work together to support normal immune system function. The active forms of folate and vitamin B12 are crucial for cellular renewal and blood health. The combination of Vitamin D3 and K2 focuses on the targeted utilization of calcium to support bone health. Iron and copper are involved in oxygen transport, while iodine is essential for thyroid hormone synthesis. No component works in isolation; they are interconnected, collectively dedicated to maintaining the stability and balance of the body's internal environment.

**Suitable for Which Life Situations**
It is suitable for urban individuals with relatively monotonous diets or potentially insufficient fruit and vegetable intake. It also suits those following vegetarian or vegan diets who need to pay extra attention to the intake of specific nutrients (like vitamin B12, iron, zinc). For individuals who restrict dietary choices due to allergies or intolerances (e.g., gluten, lactose) and are concerned about incomplete nutrition, this pure formula offers a reassuring choice. Anyone feeling daily low energy or wishing to provide their body with foundational, comprehensive nutritional support can benefit.

**Commitment to Purity & Ingredient Integrity**
We firmly believe supplements should deliver pure nutrition without unnecessary burdens. Therefore, Mannayan MULTI+ contains no wheat, soy, gluten, dairy (lactose), added sugars, artificial colors, flavors, or preservatives. We carefully select ingredient forms, such as the more stable Vitamin E Succinate, the highly bioavailable Zinc Citrate, and the directly utilizable active folate and vitamin B12, ensuring ingredient efficacy and affinity.

**Usage & Dosage**
The recommended dosage is 1 tablet daily, preferably taken before a meal with plenty of water, or as directed by a healthcare professional. Consistent use helps the body establish stable nutritional reserves. The 60-tablet bottle provides exactly two months' supply.

**Important Note**
This product is a dietary supplement and is not intended to replace a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is broken.`,ingredient_reference:`**5-Methyltetrahydrofolate (Active Folate)**
This is the biologically active form of folate, which can be utilized directly without complex conversion in the body. It plays a key role in DNA synthesis, cell division, and red blood cell formation. For individuals whose folate metabolism pathways may be affected, this form provides more direct and effective support. In the formula, it works synergistically with vitamin B12 to help maintain normal homocysteine metabolism levels.

**Methylcobalamin (Active Vitamin B12)**
Methylcobalamin is one of the primary active forms of vitamin B12 in the body, directly involved in maintaining nervous system health and red blood cell production. This form of B12 is particularly important for vegetarians or individuals with reduced digestive absorption. It works closely with folate and is an indispensable partner for energy metabolism and nervous system function.

**Vitamin D3 (Cholecalciferol)**
Vitamin D3 is the form produced by the skin upon sunlight exposure and is crucial for calcium and phosphorus absorption, bone health, and immune system regulation. With increased indoor activities, insufficient sun exposure is common. Paired with Vitamin K2 in the formula, it helps direct calcium deposition to bones rather than soft tissues, supporting more precise nutrient utilization.

**Vitamin K2 (MK-7)**
This is a long-acting form of vitamin K2, whose primary role is to activate proteins related to bone and vascular health. It assists in directing calcium to the bones, promoting bone mineralization, while also supporting vascular elasticity. Used in conjunction with Vitamin D3, it forms an important synergistic combination for maintaining bone and cardiovascular health.

**Selenium (L-Selenomethionine)**
This is an organic form of selenium, produced naturally through yeast fermentation where selenium is bound to methionine. It is more readily stored and utilized by the body than inorganic selenium. Selenium is a core component of various antioxidant enzymes, helping protect cells from oxidative stress. It works synergistically with Vitamin E to enhance the antioxidant defense network and supports normal thyroid hormone metabolism.

**Zinc (Citrate)**
Zinc citrate is a highly bioavailable organic form of zinc. Zinc is involved in the activity of hundreds of enzymes and is essential for immune function, wound healing, taste and smell, and protein synthesis. In the formula, it works alongside Vitamin C to support the immune system and is involved in maintaining skin health.

**Fruit & Vegetable Concentrate Complex, Lactobacillus Bulgaricus & Yeast Extract**
These are not single active ingredients but exist in the formula as natural "nutrient complexes" and "carriers." They provide a broad spectrum of phytonutrients and trace synergistic factors, simulating the experience of obtaining nutrients from whole foods. Lactobacillus bulgaricus and yeast extract may help improve the intestinal environment for nutrient absorption, allowing the vitamins and minerals in the formula to be accepted and utilized by the body in a state closer to nature.`}}},{name:"Mannayan My GLUCOFRIEND + (120 Kapseln)",url:"https://mannayan.com/Mannayan-My-GLUCOFRIEND-120-Kapseln/010850",price:["48,50 €"],product_number:"010850",quantity:["120 Kapseln"],image_url:"https://mannayan.com/media/7a/16/4a/1703149335/MY_Glucofriend%2B%20o.%20Kapselmenge.jpg?ts=1703149335",image_local:"images/MY_Glucofriend%2B%20o.%20Kapselmenge.jpg",content:{cn:{label:`Mannayan My GLUCOFRIEND + | 支持内在平衡
• 支持健康的葡萄糖代谢
• 提供抗氧化保护
• 支持心血管健康
• 促进能量自然生成
• 含食物态维生素与矿物质
120粒胶囊 | 每日2粒
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、适合素食者`,short_description:`你是否感觉身体对糖分的处理不如从前那样顺畅，餐后容易感到疲惫或思绪不清？现代饮食和生活方式有时会给身体的自然代谢系统带来额外负担。

My GLUCOFRIEND+ 是一款专为支持健康葡萄糖代谢而设计的食物态补充剂。它并非提供单一的成分，而是汇集了多种经过研究的植物提取物、维生素和矿物质，如蓝莓提取物、肉桂、α-硫辛酸和铬，它们共同作用，旨在支持身体利用能量的自然途径。

配方采用食物态技术，意味着其中的维生素和矿物质来源于或模拟天然食物中的形态，旨在让身体更易识别和利用。每日只需服用2粒胶囊。

本品采用纯净配方，不含麸质、乳制品、大豆、酵母、淀粉、糖及人工色素香料，同样适合素食者和有特定饮食需求的人群。`,long_description:`当身体的能量调节系统需要一些额外支持时，你可能会注意到一些细微的信号：餐后精力不济，对甜食的渴望难以平息，或是感觉整体的活力水平不再像以往那样平稳。这不仅仅是关于一个数字，更是关于身体内在环境能否保持一种从容、稳定的状态。

**食物态技术**
My GLUCOFRIEND+ 的核心是食物态理念。其中的B族维生素、维生素C、维生素A以及矿物质如锌、锰和铬，并非孤立的合成化合物。它们以更接近天然食物中存在的形式提供，例如使用甲基钴胺素（维生素B12的活性形式）和5-甲基四氢叶酸（叶酸的活性形式）。这种形式旨在让身体能够更顺畅地识别、吸收和利用这些营养素，减少代谢转换的步骤，支持更自然的生理过程。

**完整体系**
这个配方是一个协同作用的体系。蓝莓提取物和葡萄籽提取物（富含原花青素OPC）提供强大的抗氧化保护，帮助抵御代谢过程中可能产生的氧化压力。肉桂提取物和α-硫辛酸则专注于支持健康的胰岛素敏感性和葡萄糖代谢。关键的微量元素铬，以易于吸收的吡啶甲酸铬形式存在，是胰岛素发挥正常功能的重要辅助因子。与此同时，一整套精心配比的B族维生素（B1, B2, B3, B5, B6, B12, 生物素）和维生素C（来自沙棘提取物）为细胞内的能量生产工厂（线粒体）提供必要的辅酶支持，帮助将食物转化为可用的能量，而非让多余的糖分在系统中徘徊。维生素A和锌则进一步支持整体的代谢健康与免疫平衡。每一种成分都不是孤立工作，它们像是一个团队，从抗氧化、代谢支持到能量转化，多层面地维护系统的稳健运行。

**适合人群**
这款产品适合那些关注自身代谢健康，希望通过天然方式为身体提供支持的人。它适合饮食中精制碳水化合物较多、感到餐后精力波动明显、或希望维持现有健康血糖水平的人群。对于素食者或有着麸质、乳糖等特定饮食限制的人来说，纯净的配方也使其成为一个安心的选择。它旨在作为健康饮食和积极生活方式的补充，帮助身体维持内在的平衡与稳态。

**纯净与成分完整性**
我们坚信，补充剂应该补充营养，而非增加负担。因此，My GLUCOFRIEND+ 的配方坚决排除了常见的过敏原和干扰物质：无小麦、无麸质、无酵母、无淀粉、无乳制品（乳糖）、无大豆、无添加糖、无防腐剂、无人造色素和香料，且非转基因。胶囊外壳由植物纤维素制成，确保产品完全适合素食者。每一批产品都遵循严格的质量标准，确保你摄入的是声明中的纯净成分。

**健康管理者与经销商：临床背景与方案搭配**
许多自然疗法医师、营养师和健康顾问将 Mannayan+ 的食物态产品视为其健康管理方案中的可靠工具。My GLUCOFRIEND+ 常被用于支持以饮食调整、运动和生活节奏管理为核心的整体代谢健康计划。从业者欣赏其成分的活性形式和协同配比，认为它能更有效地支持客户的生理目标。它可以与支持心血管健康、体重管理或抗氧化的其他方案搭配使用，但具体组合应由专业健康顾问根据个人情况指导。

**用法与剂量**
建议每日服用2粒胶囊，随足量液体吞服。可以随餐服用，以更好地模拟食物摄入的情景。对于12岁以下的儿童不适用。1型糖尿病患者在服用前建议咨询医生。推荐的每日剂量不应被超过。

**重要提示**
本产品是膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请将产品置于儿童无法触及的地方，避光、在阴凉干燥处保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**蓝莓提取物**
蓝莓富含多酚类化合物，尤其是花青素，具有显著的抗氧化能力。在体内，它有助于保护细胞，特别是血管内壁细胞，免受氧化应激的损伤。这对于维持健康的血液循环和代谢环境尤为重要。在本配方中，它与葡萄籽提取物协同，构成第一道抗氧化防线，为后续的代谢支持成分创造更稳定的内部环境。

**沙棘提取物（维生素C）**
这里维生素C以沙棘提取物的形式提供，沙棘本身就是维生素C的天然宝库。维生素C是体内最重要的水溶性抗氧化剂之一，参与胶原蛋白合成、免疫支持和氨基酸代谢。作为抗氧化网络的一部分，它再生其他抗氧化剂（如维生素E），并直接支持代谢过程中的酶反应。其食物态形式旨在提高生物利用度和协同效应。

**肉桂提取物**
肉桂是一种传统香料，其提取物中的活性成分被研究显示可能有助于支持健康的胰岛素敏感性和葡萄糖代谢。它通过模拟胰岛素的作用并增强细胞对葡萄糖的摄取来发挥作用。在配方中，它与α-硫辛酸和铬协同，从不同角度支持健康的血糖调节途径。

**α-硫辛酸**
α-硫辛酸是一种兼具水溶性和脂溶性的独特抗氧化剂，常被称为“万能抗氧化剂”。它能再生体内的其他抗氧化剂如谷胱甘肽、维生素C和E。更重要的是，它直接参与细胞内的能量代谢，是葡萄糖分解过程中关键酶的辅因子，有助于支持胰岛素功能和健康的血糖水平。

**葡萄籽提取物（OPC）**
葡萄籽提取物是原花青素（OPC）的丰富来源，其抗氧化能力非常强。OPC以其对血管系统的保护作用而闻名，有助于维持毛细血管的完整性和弹性。它与蓝莓提取物强强联合，提供广泛的抗氧化保护，减轻氧化压力对代谢系统可能造成的负担。

**烟酰胺（维生素B3）**
烟酰胺是辅酶NAD+和NADP+的重要组成部分，这两种辅酶参与体内数百个氧化还原反应，尤其是细胞能量（ATP）的生产和脂肪酸合成。充足的B3对于支持健康的代谢率、皮肤神经健康至关重要。在本配方中，它与其他B族维生素共同确保能量代谢通路的高效运转。

**锌（柠檬酸锌）**
锌以柠檬酸盐形式提供，这种形式通常具有良好的吸收率。锌是超过300种酶的辅助因子，广泛参与DNA合成、蛋白质代谢、免疫功能和胰岛素的生产、储存与释放。它是维持正常碳水化合物代谢和整体内分泌平衡不可或缺的矿物质。

**甲基钴胺素（维生素B12）**
这是维生素B12的活性形式，无需肝脏转化即可被身体直接利用。B12对红细胞的生成、神经系统功能和DNA合成至关重要。它与其他B族维生素（特别是B6和叶酸）协同，参与同型半胱氨酸的代谢，支持心血管和神经健康。食物态形式尤其适合那些可能对普通氰钴胺素转化效率不高的人群。

**泛酸钙（维生素B5）**
泛酸是辅酶A的组成部分，辅酶A在将脂肪、碳水化合物和蛋白质转化为能量的过程中起着核心作用。它也是合成胆固醇、激素和神经递质所必需的。作为能量代谢的核心成员，B5确保身体能够有效利用各种燃料来源。

**吡哆醛-5-磷酸（维生素B6）**
这是维生素B6的活性形式（P-5-P）。B6作为众多酶的辅酶，参与氨基酸代谢、神经递质（如血清素、多巴胺）合成、血红蛋白形成和糖原分解。其活性形式确保它能够立即参与代谢过程，特别是在支持健康的情绪和神经功能方面，这些都与整体代谢平衡相互影响。

**盐酸硫胺素（维生素B1）**
维生素B1是能量代谢，尤其是碳水化合物代谢中的关键辅酶。它对于将葡萄糖转化为能量以及维持神经系统的正常功能必不可少。缺乏B1会直接影响能量生产效率。在配方中，它启动了碳水化合物代谢的第一步。

**锰（柠檬酸锰）**
锰以柠檬酸盐形式存在。它是多种酶的辅助因子，包括参与抗氧化防御（超氧化物歧化酶）、碳水化合物和氨基酸代谢以及骨骼发育的酶。它支持健康的胰岛素分泌和血糖调节机制。

**视黄醇棕榈酸酯（维生素A）**
这是维生素A的一种形式。维生素A对视力、免疫功能和细胞生长分化至关重要。它也在维持皮肤和黏膜（包括消化道内壁）的健康方面发挥作用，这间接影响营养吸收和整体代谢健康。

**核黄素（维生素B2）**
维生素B2是两种重要辅酶（FAD和FMN）的组成部分，这些辅酶参与能量生产、脂肪酸氧化和药物代谢。它对于将B6和叶酸转化为其活性形式也是必需的，并支持体内的抗氧化防御系统。

**铬（吡啶甲酸铬）**
铬以吡啶甲酸铬形式提供，这是一种具有高生物利用度的有机铬形式。铬是“葡萄糖耐受因子”的重要组成部分，通过增强胰岛素与细胞受体的结合，来支持胰岛素功能的正常发挥，从而促进细胞对葡萄糖的摄取和利用。它是这个代谢支持配方中的关键矿物质。

**生物素**
生物素，有时被称为维生素B7或维生素H，是羧化酶的辅酶，这些酶在脂肪酸合成、氨基酸代谢和糖异生（从非碳水化合物生成葡萄糖）中起作用。它对维持健康的皮肤、头发和指甲也很重要，并支持正常的代谢功能。

**5-甲基四氢叶酸**
这是叶酸（维生素B9）的活性形式，是身体细胞分裂、DNA合成和修复所必需的。它尤其重要的是在甲基化循环中作为甲基供体，这个循环对同型半胱氨酸代谢、神经递质合成和基因表达调控至关重要。使用活性形式避免了因MTHFR基因多态性可能导致的转化障碍，确保其能被有效利用，支持心血管和神经系统健康，并与B12协同工作。`},en:{label:`Mannayan My GLUCOFRIEND + | Supports Inner Balance
• Supports Healthy Glucose Metabolism
• Provides Antioxidant Protection
• Supports Cardiovascular Health
• Promotes Natural Energy Production
• Features Food-State Vitamins & Minerals
120 Capsules | 2 Capsules Daily
Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Do you feel your body isn't processing sugars as smoothly as it used to, often feeling tired or foggy-headed after meals? Modern diets and lifestyles can sometimes place extra strain on the body's natural metabolic systems.

My GLUCOFRIEND+ is a food-state supplement specifically designed to support healthy glucose metabolism. It doesn't rely on a single ingredient; instead, it combines a variety of researched plant extracts, vitamins, and minerals—such as blueberry extract, cinnamon, alpha-lipoic acid, and chromium—that work together to support the body's natural pathways for utilizing energy.

The formula utilizes food-state technology, meaning the vitamins and minerals are derived from or mimic the forms found in natural foods, aiming to make them more recognizable and usable by the body. Just take 2 capsules daily.

This product features a pure formula, free from gluten, dairy, soy, yeast, starch, sugar, and artificial colors or flavors, making it suitable for vegetarians and those with specific dietary needs.`,long_description:`When your body's energy regulation system needs a little extra support, you might notice subtle signals: a dip in energy after meals, persistent cravings for sweets, or a feeling that your overall vitality isn't as steady as it once was. It's not just about a number; it's about your body's internal environment maintaining a calm, stable state.

**Food-State Technology**
At the heart of My GLUCOFRIEND+ is the food-state philosophy. The B vitamins, Vitamin C, Vitamin A, and minerals like zinc, manganese, and chromium are not isolated synthetic compounds. They are provided in forms closer to those found in natural foods, such as methylcobalamin (the active form of Vitamin B12) and 5-MTHF (the active form of folate). This form is designed to allow the body to recognize, absorb, and utilize these nutrients more smoothly, reducing steps in metabolic conversion and supporting more natural physiological processes.

**A Complete System**
This formula is a synergistic system. Blueberry extract and grape seed extract (rich in proanthocyanidins/OPCs) provide potent antioxidant protection, helping to defend against oxidative stress that can arise from metabolic processes. Cinnamon extract and alpha-lipoic acid focus on supporting healthy insulin sensitivity and glucose metabolism. The key trace mineral chromium, in the highly absorbable chromium picolinate form, is an important cofactor for proper insulin function. Meanwhile, a carefully balanced spectrum of B vitamins (B1, B2, B3, B5, B6, B12, biotin) and Vitamin C (from sea buckthorn extract) provide essential coenzyme support for the cell's energy-producing factories (mitochondria), helping to convert food into usable energy instead of letting excess sugars linger in the system. Vitamin A and zinc further support overall metabolic health and immune balance. No ingredient works in isolation; they function as a team, maintaining robust system operation through multiple layers: antioxidant defense, metabolic support, and energy conversion.

**Who It's For**
This product is for those who are mindful of their metabolic health and wish to support their body through natural means. It's suitable for individuals whose diets are high in refined carbohydrates, who experience noticeable energy fluctuations after meals, or who wish to maintain their already healthy blood sugar levels. For vegetarians or those with specific dietary restrictions like gluten or lactose intolerance, the pure formula makes it a reassuring choice. It's intended as a complement to a healthy diet and active lifestyle, helping the body maintain inner balance and homeostasis.

**Purity & Ingredient Integrity**
We believe supplements should add nutrition, not burden. Therefore, the My GLUCOFRIEND+ formula firmly excludes common allergens and interfering substances: no wheat, no gluten, no yeast, no starch, no dairy (lactose), no soy, no added sugar, no preservatives, no artificial colors or flavors, and it is non-GMO. The capsule shell is made from plant cellulose, ensuring the product is entirely suitable for vegetarians. Every batch adheres to strict quality standards, ensuring you receive the pure ingredients as declared.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
Many naturopathic doctors, nutritionists, and health consultants view Mannayan+ food-state products as reliable tools within their health management protocols. My GLUCOFRIEND+ is often used to support holistic metabolic health plans centered on dietary adjustments, exercise, and lifestyle rhythm management. Practitioners appreciate the active forms and synergistic blend of its ingredients, finding it can more effectively support clients' physiological goals. It can be paired with other protocols supporting cardiovascular health, weight management, or antioxidant defense, but specific combinations should be guided by a professional health consultant based on individual circumstances.

**Usage & Dosage**
Take 2 capsules daily with a sufficient amount of liquid. It can be taken with meals to better simulate a food intake context. Not suitable for children under 12 years old. Individuals with Type 1 diabetes are advised to consult a doctor before use. The recommended daily dose should not be exceeded.

**Important Note**
This product is a dietary supplement and is not intended to replace a balanced, varied diet and a healthy lifestyle. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the seal around the bottle cap is missing.`,ingredient_reference:`**Blueberry Extract**
Blueberries are rich in polyphenolic compounds, particularly anthocyanins, which possess significant antioxidant capacity. In the body, it helps protect cells, especially those lining blood vessels, from oxidative stress damage. This is particularly important for maintaining healthy blood circulation and a supportive metabolic environment. In this formula, it works synergistically with grape seed extract to form the first line of antioxidant defense, creating a more stable internal environment for the subsequent metabolic support ingredients.

**Sea Buckthorn Extract (Vitamin C)**
Here, Vitamin C is provided in the form of sea buckthorn extract, a natural powerhouse of Vitamin C. Vitamin C is one of the body's most important water-soluble antioxidants, involved in collagen synthesis, immune support, and amino acid metabolism. As part of the antioxidant network, it regenerates other antioxidants (like Vitamin E) and directly supports enzymatic reactions in metabolic processes. Its food-state form aims to enhance bioavailability and synergistic effects.

**Cinnamon Extract**
Cinnamon is a traditional spice, and its extract's active components have been studied for their potential to support healthy insulin sensitivity and glucose metabolism. It works by mimicking insulin's action and enhancing cellular glucose uptake. In the formula, it works synergistically with alpha-lipoic acid and chromium to support healthy blood sugar regulation pathways from different angles.

**Alpha-Lipoic Acid**
Alpha-lipoic acid is a unique antioxidant that is both water- and fat-soluble, often called the "universal antioxidant." It can regenerate other antioxidants in the body like glutathione, Vitamin C, and E. More importantly, it is directly involved in cellular energy metabolism, serving as a cofactor for key enzymes in glucose breakdown, helping to support insulin function and healthy blood sugar levels.

**Grape Seed Extract (OPC)**
Grape seed extract is a rich source of proanthocyanidins (OPCs), known for their very strong antioxidant capacity. OPCs are renowned for their protective effects on the vascular system, helping to maintain capillary integrity and elasticity. It joins forces with blueberry extract to provide broad-spectrum antioxidant protection, reducing the potential burden of oxidative stress on the metabolic system.

**Niacinamide (Vitamin B3)**
Niacinamide is a vital component of the coenzymes NAD+ and NADP+, which are involved in hundreds of redox reactions in the body, particularly in cellular energy (ATP) production and fatty acid synthesis. Adequate B3 is crucial for supporting a healthy metabolic rate and skin/nerve health. In this formula, it works with other B vitamins to ensure the efficient operation of energy metabolic pathways.

**Zinc (Zinc Citrate)**
Zinc is provided in the citrate form, known for its good absorption rate. Zinc is a cofactor for over 300 enzymes, broadly involved in DNA synthesis, protein metabolism, immune function, and the production, storage, and release of insulin. It is an indispensable mineral for maintaining normal carbohydrate metabolism and overall endocrine balance.

**Methylcobalamin (Vitamin B12)**
This is the active form of Vitamin B12, which can be used directly by the body without requiring liver conversion. B12 is essential for red blood cell formation, nervous system function, and DNA synthesis. It works synergistically with other B vitamins (particularly B6 and folate) in homocysteine metabolism, supporting cardiovascular and neurological health. The food-state form is especially suitable for individuals who may not efficiently convert common cyanocobalamin.

**Calcium Pantothenate (Vitamin B5)**
Pantothenic acid is a component of coenzyme A, which plays a central role in converting fats, carbohydrates, and proteins into energy. It is also necessary for synthesizing cholesterol, hormones, and neurotransmitters. As a core member of energy metabolism, B5 ensures the body can efficiently utilize various fuel sources.

**Pyridoxal-5-Phosphate (Vitamin B6)**
This is the active form of Vitamin B6 (P-5-P). B6 acts as a coenzyme for numerous enzymes involved in amino acid metabolism, neurotransmitter synthesis (like serotonin, dopamine), hemoglobin formation, and glycogen breakdown. Its active form ensures it can immediately participate in metabolic processes, particularly in supporting healthy mood and nerve function, which are interconnected with overall metabolic balance.

**Thiamine Hydrochloride (Vitamin B1)**
Vitamin B1 is a key coenzyme in energy metabolism, especially carbohydrate metabolism. It is essential for converting glucose into energy and maintaining normal nervous system function. A B1 deficiency directly impacts energy production efficiency. In the formula, it initiates the first step of carbohydrate metabolism.

**Manganese (Manganese Citrate)**
Manganese is present in the citrate form. It is a cofactor for various enzymes, including those involved in antioxidant defense (superoxide dismutase), carbohydrate and amino acid metabolism, and bone development. It supports healthy insulin secretion and blood sugar regulation mechanisms.

**Retinyl Palmitate (Vitamin A)**
This is a form of Vitamin A. Vitamin A is crucial for vision, immune function, and cell growth/differentiation. It also plays a role in maintaining the health of skin and mucous membranes (including the digestive tract lining), which indirectly affects nutrient absorption and overall metabolic health.

**Riboflavin (Vitamin B2)**
Vitamin B2 is a component of two important coenzymes (FAD and FMN), which are involved in energy production, fatty acid oxidation, and drug metabolism. It is also necessary for converting B6 and folate into their active forms and supports the body's antioxidant defense system.

**Chromium (Chromium Picolinate)**
Chromium is provided as chromium picolinate, an organic form known for high bioavailability. Chromium is a key component of the "glucose tolerance factor," supporting normal insulin function by enhancing insulin binding to cell receptors, thereby promoting cellular glucose uptake and utilization. It is a key mineral in this metabolic support formula.

**Biotin**
Biotin, sometimes called Vitamin B7 or Vitamin H, is a coenzyme for carboxylases, enzymes involved in fatty acid synthesis, amino acid metabolism, and gluconeogenesis (glucose production from non-carbohydrates). It is important for maintaining healthy skin, hair, and nails and supports normal metabolic function.

**5-Methyltetrahydrofolate (5-MTHF)**
This is the active form of folate (Vitamin B9), essential for cell division, DNA synthesis, and repair. It is particularly important as a methyl donor in the methylation cycle, crucial for homocysteine metabolism, neurotransmitter synthesis, and gene expression regulation. Using the active form avoids potential conversion obstacles due to MTHFR gene polymorphisms, ensuring it can be effectively utilized to support cardiovascular and neurological health, working in synergy with B12.`}}},{name:"Mannayan OLIGO + (Pulver)",url:"https://mannayan.com/Mannayan-OLIGO-Pulver/010075",price:["37,90 €"],product_number:"010075",quantity:["100g"],image_url:"https://mannayan.com/media/42/92/51/1625734581/Oligo%2B.jpg?ts=1625734589",image_local:"images/Oligo%2B.jpg",content:{cn:{label:`Mannayan OLIGO+ 粉末
自然的协同力量
• 支持血管健康与微循环
• 提供抗氧化保护
• 促进胶原蛋白形成
• 帮助维持细胞活力
每份（1克粉末）含：57毫克维生素C（55% NRV*）、200毫克多酚、25.3毫克花青素
纯净配方：无麸质、无乳制品、无大豆、无人工添加剂、素食友好`,short_description:`你是否感觉身体容易疲惫，或者皮肤状态不如从前有活力？现代生活的节奏和压力，有时会让我们的身体需要额外的支持来维持内在的平衡与活力。

Mannayan OLIGO+ 粉末源自一个简单的自然智慧：在葡萄中，原花青素（OPC）与维生素C总是共同存在，相互增效。这款产品将高浓缩的葡萄全果提取物与天然针叶樱桃维生素C相结合，还原了这种天然的协同组合。它旨在为身体的防御系统和结缔组织提供基础支持。

每日只需一小勺（1克），轻松融入水中或果汁。配方纯净，不含常见的过敏原和人工添加剂，适合包括素食者在内的广泛人群。`,long_description:`当身体的疲惫感挥之不去，或是皮肤失去往日的光泽与弹性时，这常常是内在需要更多支持的信号。我们的血管网络、结缔组织以及细胞，每天都在应对各种挑战，维持它们的健康是整体活力的基础。

**食物态协同技术**
Mannayan OLIGO+ 的核心在于遵循自然本身的配方。在葡萄中，强效的抗氧化成分原花青素（OPC）与维生素C天然共存，彼此保护，协同工作。我们的产品不是孤立地添加单一成分，而是通过将富含OPC、多酚和花青素的葡萄全果提取物，与天然来源的针叶樱桃维生素C提取物相结合，重新构建了这种完整的、食物态的协同关系。这种组合方式让营养成分更接近其在自然界中的存在状态，旨在支持身体更自然地利用它们。

**完整的支持体系**
这款产品的作用是一个完整的体系。葡萄提取物中的多酚家族，特别是原花青素（OPC），以其对血管内皮细胞的亲和力而闻名，有助于维持毛细血管的完整性和正常的微循环。同时，它们与维生素C形成强大的抗氧化联盟，帮助中和自由基，保护细胞免受氧化应激。维生素C在此扮演着双重角色：一方面它自身是关键的抗氧化剂和免疫支持因子；另一方面，它是合成胶原蛋白必不可少的辅因子，直接关系到皮肤、血管壁等结缔组织的健康与修复。花青素则进一步增强了整体的抗氧化网络。这些成分不是各自为战，而是形成了一个相互再生、相互增强的支持循环。

**适合人群**
OLIGO+ 适合那些寻求从根本层面为身体提供抗氧化保护和基础支持的人。如果你长期面对电脑工作，感觉眼睛酸涩；如果你的工作需要久站或久坐，关注下肢的循环舒适度；如果你希望为自己的皮肤健康提供内在的营养支持，并关注整体的衰老进程；或者你 simply 希望在日常饮食之外，为身体补充一种纯净、协同的植物营养素，那么这款产品可能是一个合适的选择。它同样适合饮食受限的素食者和对多种常见过敏原敏感的人群。

**纯净与成分完整性**
我们坚信，补充剂应该补充营养，而非不必要的添加物。OLIGO+ 粉末不含麸质、乳制品、大豆、酵母、淀粉、添加糖、人工色素或防腐剂。产品使用阿拉伯胶和麦芽糊精作为载体，确保粉末的流动性和稳定性。每一批产品都致力于提供标签所承诺的活性成分含量：每1克粉末提供57毫克维生素C（来自针叶樱桃）、200毫克多酚及25.3毫克花青素（来自葡萄提取物）。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士，OLIGO+ 可以作为基础抗氧化和血管支持方案的核心组件。其基于“马斯魁勒教授”对原花青素的早期研究，以及维生素C与生物类黄酮协同作用的经典营养学原理。在实践中，它可以与Omega-3脂肪酸、镁制剂或针对特定系统的配方相结合，形成一个更全面的健康支持策略。其纯净的配方也减少了与其他干预措施产生不良反应的顾虑。

**用法与剂量**
建议每日一次，取1克粉末（约四分之一茶匙），放入一杯足量的水或果汁中，搅拌均匀后饮用。可以根据个人需要或专业保健人士的建议进行调整。持续使用是获得支持效果的关键。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过建议每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**针叶樱桃果实提取物（天然维生素C来源）**
针叶樱桃是已知维生素C含量最丰富的天然来源之一。这里的维生素C以完整的食物基质形式提供，伴随有其自身的植物协同因子。维生素C在体内是合成胶原蛋白的关键，对于皮肤、血管和结缔组织的健康至关重要。它也是一种重要的水溶性抗氧化剂，帮助再生其他抗氧化剂（如维生素E）。在此配方中，它专门用于与葡萄提取物中的原花青素协同，模拟并增强两者在自然界中的共生关系，为需要强效抗氧化支持和关注皮肤与血管健康的人群提供基础营养。

**葡萄全果提取物（含多酚与花青素）**
此提取物来自红葡萄的籽与皮，浓缩了葡萄中一系列有益的植物化合物，包括原花青素（OPC）、多酚和花青素。原花青素以其对血管系统的亲和力和支持微循环的能力而受到关注。多酚是强大的抗氧化剂，帮助保护细胞免受氧化损伤。花青素则赋予葡萄深色的色素，同样具有抗氧化特性。在配方中，葡萄提取物构成了抗氧化保护网络的核心，其多种成分共同作用，提供广泛的支持。它与维生素C的结合至关重要，因为维生素C可以保护和再生这些多酚化合物，延长其活性时间，特别适合那些寻求全面抗氧化保护和关注血管内皮健康的人群。

**花青素**
花青素是一类水溶性的植物色素，属于类黄酮家族，存在于葡萄皮等深色植物中。它们具有显著的抗氧化能力，并可能支持健康的炎症反应。在体内，它们帮助中和自由基，并与其他抗氧化剂协同工作。在此配方中，花青素作为葡萄全果提取物中的标志性成分被单独标示，强调了配方的完整性和成分浓度。它与提取物中的其他多酚以及维生素C共同构建了一个多层次的抗氧化防御体系，增强了配方对于应对氧化应激的整体效力。`},en:{label:`Mannayan OLIGO+ Powder
The Synergistic Power of Nature
• Supports Vascular Health & Microcirculation
• Provides Antioxidant Protection
• Promotes Collagen Formation
• Helps Maintain Cellular Vitality
Per Serving (1g powder): 57mg Vitamin C (55% NRV*), 200mg Polyphenols, 25.3mg Anthocyanins
Pure Formula: Gluten-Free, Dairy-Free, Soy-Free, No Artificial Additives, Vegetarian-Friendly`,short_description:`Do you often feel physically fatigued, or notice your skin lacking its former vitality? The pace and pressures of modern life can sometimes leave our bodies needing extra support to maintain internal balance and energy.

Mannayan OLIGO+ Powder is born from a simple wisdom of nature: in grapes, oligomeric proanthocyanidins (OPCs) and Vitamin C always coexist, enhancing each other's effects. This product combines highly concentrated whole grape fruit extract with natural Acerola Cherry Vitamin C, recreating this natural synergistic pair. It is designed to provide foundational support for the body's defense system and connective tissues.

Just one small scoop (1g) daily, easily mixed into water or juice. The formula is pure, free from common allergens and artificial additives, suitable for a wide range of people including vegetarians.`,long_description:`When persistent fatigue sets in, or when skin loses its former radiance and elasticity, it's often a signal that your inner self needs more support. Our vascular network, connective tissues, and cells face daily challenges; maintaining their health is the foundation of overall vitality.

**Food-State Synergy Technology**
The core of Mannayan OLIGO+ lies in following nature's own recipe. In grapes, the potent antioxidant oligomeric proanthocyanidins (OPCs) and Vitamin C exist together naturally, protecting and working in synergy with each other. Our product doesn't just add isolated single ingredients. Instead, by combining whole grape fruit extract—rich in OPCs, polyphenols, and anthocyanins—with naturally sourced Acerola Cherry Vitamin C extract, we rebuild this complete, food-state synergistic relationship. This combination allows nutrients to be closer to their natural state of existence, aiming to support the body in utilizing them more naturally.

**A Complete Support System**
This product functions as an integrated system. The polyphenol family in grape extract, particularly oligomeric proanthocyanidins (OPCs), is known for its affinity for vascular endothelial cells, helping to maintain capillary integrity and normal microcirculation. Simultaneously, they form a powerful antioxidant alliance with Vitamin C, helping to neutralize free radicals and protect cells from oxidative stress. Vitamin C plays a dual role here: on one hand, it is itself a key antioxidant and immune support factor; on the other, it is an essential cofactor for collagen synthesis, directly related to the health and repair of connective tissues like skin and blood vessel walls. Anthocyanins further enhance the overall antioxidant network. These components don't work in isolation; they form a mutually regenerative, mutually reinforcing cycle of support.

**Who It's For**
OLIGO+ is suitable for those seeking to provide their bodies with foundational antioxidant protection and support at a fundamental level. If you work long hours at a computer and experience eye strain; if your job involves prolonged standing or sitting and you're concerned about lower limb circulation comfort; if you wish to provide internal nutritional support for your skin health and are mindful of the overall aging process; or if you simply want to supplement your daily diet with a pure, synergistic phytonutrient—this product may be a suitable choice. It is also suitable for vegetarians with dietary restrictions and individuals sensitive to multiple common allergens.

**Purity & Ingredient Integrity**
We firmly believe that supplements should supplement nutrition, not unnecessary additives. OLIGO+ Powder contains no gluten, dairy, soy, yeast, starch, added sugars, artificial colors, or preservatives. The product uses acacia gum and maltodextrin as carriers to ensure powder flowability and stability. Every batch is committed to delivering the promised active ingredient content per label: each 1g of powder provides 57mg of Vitamin C (from Acerola Cherry), 200mg of polyphenols, and 25.3mg of anthocyanins (from grape extract).

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
For professionals in the health field, OLIGO+ can serve as a core component of foundational antioxidant and vascular support protocols. It is based on the early research on proanthocyanidins by "Professor Masquelier" and the classic nutritional principle of synergy between Vitamin C and bioflavonoids. In practice, it can be combined with Omega-3 fatty acids, magnesium preparations, or formulas targeting specific systems to form a more comprehensive health support strategy. Its pure formula also minimizes concerns about adverse interactions with other interventions.

**Usage & Dosage**
Recommended once daily. Take 1g of powder (approximately a quarter teaspoon), place it in a full glass of water or juice, stir well, and drink. Adjustments can be made based on individual needs or the advice of a healthcare professional. Consistent use is key to experiencing the supportive benefits.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the inner seal is missing.`,ingredient_reference:`**Acerola Cherry Fruit Extract (Natural Source of Vitamin C)**
Acerola Cherry is one of the richest known natural sources of Vitamin C. Here, Vitamin C is provided in a complete food-matrix form, accompanied by its own plant co-factors. Vitamin C is essential in the body for collagen synthesis, crucial for the health of skin, blood vessels, and connective tissues. It is also an important water-soluble antioxidant that helps regenerate other antioxidants (like Vitamin E). In this formula, it is specifically used to synergize with the proanthocyanidins in grape extract, mimicking and enhancing their symbiotic relationship in nature, providing foundational nutrition for those seeking potent antioxidant support and concerned with skin and vascular health.

**Whole Grape Fruit Extract (Contains Polyphenols & Anthocyanins)**
This extract is derived from the seeds and skins of red grapes, concentrating a range of beneficial plant compounds found in grapes, including oligomeric proanthocyanidins (OPCs), polyphenols, and anthocyanins. Proanthocyanidins are noted for their affinity for the vascular system and ability to support microcirculation. Polyphenols are powerful antioxidants that help protect cells from oxidative damage. Anthocyanins give grapes their deep color and also possess antioxidant properties. In the formula, grape extract forms the core of the antioxidant protection network, with its multiple components working together to provide broad-spectrum support. Its combination with Vitamin C is crucial, as Vitamin C can protect and regenerate these polyphenol compounds, extending their active lifespan. It is particularly suitable for those seeking comprehensive antioxidant protection and concerned with vascular endothelial health.

**Anthocyanins**
Anthocyanins are a class of water-soluble plant pigments belonging to the flavonoid family, found in dark-colored plants like grape skins. They possess significant antioxidant capacity and may support a healthy inflammatory response. In the body, they help neutralize free radicals and work synergistically with other antioxidants. In this formula, anthocyanins are highlighted individually as a signature component of the whole grape fruit extract, emphasizing the formula's completeness and ingredient concentration. Together with the other polyphenols in the extract and Vitamin C, they build a multi-layered antioxidant defense system, enhancing the formula's overall efficacy in addressing oxidative stress.`}}},{name:"Mannayan OMEGA + (60 Kapseln)",url:"https://mannayan.com/Mannayan-OMEGA-60-Kapseln/010076",price:["32,30 €"],product_number:"010076",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/09/ac/22/1766137324/Omega%2B_2025.jpg?ts=1766137324",image_local:"images/Omega%2B_2025.jpg",content:{cn:{label:`Mannayan OMEGA+
来自北极纯净海域的深海精华
• 支持心血管系统健康
• 维持大脑认知功能
• 促进关节灵活与舒适
• 平衡全身健康状态
60粒胶囊 | 每日1-2粒 | 无麸质、无乳糖、无人工添加`,short_description:`你是否感觉身体深处需要一种更基础的滋养？现代生活的节奏，有时会让身体的内在平衡变得微妙。我们需要的不是剧烈的改变，而是持续、纯净的支持。

Mannayan OMEGA+ 源自挪威北极海域寒冷、富氧水域的沙丁鱼和凤尾鱼。我们只选用鱼肉，避免使用肝脏，以最大程度减少环境毒素和重金属的潜在风险。这是一种从源头开始的纯净承诺。

每一粒胶囊都提供高浓度的Omega-3脂肪酸（EPA与DHA），它们是维持身体多个系统顺畅运作的基石。这些脂肪酸并非由身体大量合成，需要通过优质外源来补充。

每瓶60粒，每日1-2粒随餐服用。配方纯净，不含麸质、乳制品、大豆、酵母、淀粉、糖及人工色素、香料和防腐剂，也适合念珠菌敏感人群。`,long_description:`有时，身体会发出一些细微的信号：精力不如以往集中，关节在活动时缺少一些润滑感，或是你只是希望为长远健康打下更稳固的基础。这些感受常常指向一个共同的核心——身体需要一种基础而全面的支持，来维持内在的系统平衡。

**食物态技术与纯净来源**
我们深知，成分的源头决定了其最终品质。Mannayan OMEGA+ 的鱼油浓缩物，完全来自挪威北极海域的沙丁鱼和凤尾鱼。这片寒冷、清澈、富氧的水域，是高品质鱼类的天然家园。我们有一个明确的原则：只使用鱼肉，绝不加工鱼肝。这是因为肝脏是鱼类积累环境物质的主要器官，避开它，是我们从第一步就确保纯净的方式。这种对源头的审慎选择，让后续的浓缩和封装有了真正的意义。

**一个协同作用的完整体系**
这款补充剂的核心是Omega-3脂肪酸，特别是EPA（二十碳五烯酸）和DHA（二十二碳六烯酸）。它们不是孤立工作的。EPA更侧重于支持健康的炎症反应机制和心血管系统的流畅功能，而DHA则是大脑、神经系统和眼睛细胞膜的关键结构成分。两者协同，为身体从内到外提供多层面的维护。配方中添加的天然生育酚（维生素E）作为抗氧化剂，保护这些珍贵的脂肪酸在体内输送过程中保持稳定和活性，确保其发挥应有的作用。这不是单一成分的堆砌，而是一个旨在维持整体平衡的微缩生态系统。

**适合这些生活情境的你**
如果你日常饮食中深海鱼类的摄入有限，或是在寻找一种纯净的方式来支持心血管和大脑的长期健康；如果你关注关节的灵活性与舒适度，希望从根本层面为身体补充构建健康细胞膜所需的材料；或者，你是一位对饮食成分有严格要求的人，需要避开常见的过敏原和添加剂，那么Mannayan OMEGA+ 可以融入你的日常健康管理方案。它尤其适合念珠菌敏感或乳糖不耐受的人群。

**纯净与成分完整性的承诺**
纯净不是营销口号，而是可验证的清单。本产品不含：麸质、乳制品（乳糖）、大豆、小麦、酵母、淀粉、糖、人工色素、人工香料及防腐剂。胶囊壳由明胶和甘油构成。我们相信，真正的健康补充剂，应该只包含身体所需的有效成分，并最大限度地减少一切不必要的负担。

**健康管理者与经销商的视角**
对于健康管理专业人士而言，这是一款基础且可靠的Omega-3来源。其高浓度的EPA与DHA比例（约1.5:1）适用于广泛的健康支持方案。清晰的成分溯源和严格的纯净标准，使其易于与多种饮食计划和健康管理策略相结合。建议在为客户搭配涉及循环系统、神经系统或整体抗氧化的方案时，可将其作为基础营养支持的一部分。

**用法与剂量**
建议每日服用1至2粒胶囊，随餐并用足量水吞服（请勿咀嚼）。随餐服用有助于身体更好地吸收鱼油，并提升胃肠的舒适度。一瓶60粒的包装，可满足一个月至两个月的用量，具体取决于个人需求与健康管理者的指导。

**重要提示**
已知对鱼类或甲壳类动物及其制品过敏者请勿食用。如果您正在服用影响血液凝固的药物，请在医生或治疗师指导下使用。膳食补充剂不能替代均衡多样的饮食。请将本品置于儿童无法触及之处，避光、阴凉干燥保存。若密封条破损，请勿食用。`,ingredient_reference:`**鱼油浓缩物**
这是从挪威北极海域的沙丁鱼和凤尾鱼肉中提取的精粹，避开了可能富集毒素的鱼肝。它是EPA和DHA这两种长链Omega-3脂肪酸的天然载体。在体内，这些脂肪酸被整合进细胞膜，影响细胞的流动性、信号传递和整体功能。对于希望从优质动物源补充Omega-3，且注重来源纯净度的人群，这是核心成分。它为整个配方提供了效力基础。

**Omega-3脂肪酸（EPA与DHA）**
EPA（二十碳五烯酸）和DHA（二十二碳六烯酸）是鱼油中最重要的两种活性成分。EPA更倾向于参与调节身体的代谢过程，支持健康的心血管功能和反应机制。DHA则是大脑灰质、视网膜和神经细胞膜的结构性脂肪，对认知功能和神经系统健康至关重要。两者在配方中以约300毫克EPA和200毫克DHA的比例协同，共同支持从大脑到关节的全身性健康。适合几乎所有寻求基础健康支持、尤其是关注心脑健康的人群。

**生育酚（抗氧化剂）**
这里使用的是天然来源的维生素E（生育酚混合物）。它的主要角色是作为抗氧化剂，保护鱼油中的多不饱和脂肪酸（特别是EPA和DHA）不被氧化。这种保护作用从胶囊储存期一直延续到成分在体内代谢的过程中，确保活性成分以最佳状态到达需要它们的部位。对于任何服用鱼油补充剂的人来说，内置的抗氧化剂都是保障产品稳定性和体内生物利用度的关键一环，它与鱼油浓缩物形成了保护与被保护的协同关系。`},en:{label:`Mannayan OMEGA+
Deep Sea Essence from the Pristine Arctic Waters
• Supports Cardiovascular System Health
• Maintains Brain Cognitive Function
• Promotes Joint Flexibility and Comfort
• Balances Overall Health Status
60 Capsules | 1-2 Capsules Daily | Gluten-Free, Lactose-Free, No Artificial Additives`,short_description:`Do you feel your body needs a more foundational kind of nourishment? The pace of modern life can sometimes make the body's internal balance delicate. What we need is not drastic change, but consistent, pure support.

Mannayan OMEGA+ is sourced from sardines and anchovies in the cold, oxygen-rich waters of the Norwegian Arctic Sea. We use only the fish flesh, avoiding the liver, to minimize potential risks from environmental toxins and heavy metals. This is a commitment to purity that starts at the source.

Each capsule provides a high concentration of Omega-3 fatty acids (EPA and DHA), which are the building blocks for the smooth functioning of multiple body systems. These fatty acids are not synthesized in large amounts by the body and need to be supplemented from a high-quality external source.

Each bottle contains 60 capsules. Take 1-2 capsules daily with meals. The formula is pure, free from gluten, dairy, soy, yeast, starch, sugar, and artificial colors, flavors, and preservatives. It is also suitable for those sensitive to candida.`,long_description:`Sometimes, the body sends subtle signals: concentration isn't as sharp as before, joints lack a sense of lubrication during movement, or you simply wish to build a more solid foundation for long-term health. These feelings often point to a common core—the body needs foundational, comprehensive support to maintain its internal systemic balance.

**Food-State Technology and Pure Sourcing**
We know that the source of an ingredient determines its final quality. The fish oil concentrate in Mannayan OMEGA+ comes entirely from sardines and anchovies in the Norwegian Arctic Sea. These cold, clear, oxygen-rich waters are the natural home of high-quality fish. We have a clear principle: use only fish flesh, never process fish liver. This is because the liver is the primary organ where fish accumulate environmental substances. Avoiding it is our way of ensuring purity from the very first step. This careful selection at the source gives true meaning to the subsequent concentration and encapsulation.

**A Complete System of Synergistic Action**
The core of this supplement is Omega-3 fatty acids, specifically EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid). They do not work in isolation. EPA focuses more on supporting healthy inflammatory response mechanisms and the smooth function of the cardiovascular system, while DHA is a key structural component of cell membranes in the brain, nervous system, and eyes. Working together, they provide multi-layered maintenance for the body from the inside out. The naturally-sourced tocopherols (Vitamin E) added to the formula act as antioxidants, protecting these precious fatty acids to remain stable and active during transport within the body, ensuring they perform their intended functions. This is not a mere stacking of single ingredients, but a miniature ecosystem designed to maintain overall balance.

**For You in These Life Situations**
If your daily diet includes limited deep-sea fish, or you are looking for a pure way to support long-term cardiovascular and brain health; if you are concerned about joint flexibility and comfort, hoping to fundamentally supply your body with the materials needed to build healthy cell membranes; or if you are someone with strict dietary requirements who needs to avoid common allergens and additives, then Mannayan OMEGA+ can integrate into your daily wellness routine. It is especially suitable for those sensitive to candida or lactose intolerant.

**A Commitment to Purity and Ingredient Integrity**
Purity is not a marketing slogan, but a verifiable checklist. This product is free from: gluten, dairy (lactose), soy, wheat, yeast, starch, sugar, artificial colors, artificial flavors, and preservatives. The capsule shell is made of gelatin and glycerin. We believe that a true health supplement should contain only the effective ingredients the body needs, minimizing all unnecessary burdens.

**From the Perspective of Health Practitioners and Distributors**
For health practitioners, this is a foundational and reliable source of Omega-3. Its high concentration and EPA to DHA ratio (approximately 1.5:1) are suitable for a wide range of wellness support plans. Clear ingredient traceability and strict purity standards make it easy to integrate with various dietary plans and wellness strategies. It is recommended as part of foundational nutritional support when designing protocols for clients involving circulatory system, nervous system, or overall antioxidant support.

**Usage and Dosage**
It is recommended to take 1 to 2 capsules daily, with meals and swallowed with plenty of water (do not chew). Taking with meals helps the body better absorb the fish oil and enhances gastrointestinal comfort. The 60-capsule bottle provides a one to two month supply, depending on individual needs and guidance from a health practitioner.

**Important Notes**
Do not consume if you have a known allergy to fish, shellfish, or their products. If you are taking medications that affect blood clotting, use under the guidance of a doctor or therapist. Dietary supplements are not a substitute for a balanced and varied diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal is broken.`,ingredient_reference:`**Fish Oil Concentrate**
This is the essence extracted from the flesh of sardines and anchovies from the Norwegian Arctic Sea, avoiding the potentially toxin-accumulating fish liver. It is the natural carrier for the two long-chain Omega-3 fatty acids, EPA and DHA. In the body, these fatty acids are incorporated into cell membranes, influencing cell fluidity, signaling, and overall function. This is the core ingredient for those seeking to supplement Omega-3 from a high-quality animal source with a focus on source purity. It provides the efficacy foundation for the entire formula.

**Omega-3 Fatty Acids (EPA & DHA)**
EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) are the two most important active components in fish oil. EPA tends to be more involved in regulating the body's metabolic processes, supporting healthy cardiovascular function and response mechanisms. DHA is a structural fat in the gray matter of the brain, the retina, and nerve cell membranes, crucial for cognitive function and nervous system health. In the formula, they work synergistically in a ratio of approximately 300 mg EPA to 200 mg DHA, jointly supporting systemic health from the brain to the joints. Suitable for almost anyone seeking foundational health support, especially those focused on heart and brain health.

**Tocopherols (Antioxidant)**
This uses naturally-sourced Vitamin E (a tocopherol mixture). Its primary role is as an antioxidant, protecting the polyunsaturated fatty acids in the fish oil (especially EPA and DHA) from oxidation. This protective effect extends from the capsule's shelf life through to the metabolism of the ingredients in the body, ensuring the active components reach their required sites in optimal condition. For anyone taking a fish oil supplement, a built-in antioxidant is a key element in ensuring product stability and in vivo bioavailability. It forms a synergistic, protective relationship with the fish oil concentrate.`}}},{name:"Mannayan Papain",url:"https://mannayan.com/Mannayan-Papain/010078",price:["19,35 €"],product_number:"010078",quantity:["50 Kapseln"],image_url:"https://mannayan.com/media/b1/dc/74/1766137365/Papain_2025.jpg?ts=1766137365",image_local:"images/Papain_2025.jpg",content:{cn:{label:`Mannayan Papain
天然木瓜蛋白酶
• 支持蛋白质消化与分解 • 缓解偶发性餐后饱胀感 • 源自天然木瓜果实 • 每粒含500毫克木瓜蛋白酶 • 50粒装 • 适合素食者与纯素者 • 无麸质、无乳制品、无人工添加剂`,short_description:`有时，一顿丰盛的餐食后，身体会感到沉重、迟缓，胃部仿佛被一团东西堵住。这不仅仅是吃得太饱，而是身体在告诉你，消化过程需要一些额外的支持。

Mannayan Papain 提供源自天然木瓜果实的木瓜蛋白酶。这种酶在自然界中帮助木瓜自身成熟，当被我们摄入后，它能辅助身体分解食物中的蛋白质，让消化过程更顺畅、更轻松。

它并非替代正常的消化功能，而是为身体提供一种天然的工具，帮助应对那些蛋白质含量较高或偶尔难以消化的餐食。每日1-2粒，随餐服用，为消化系统提供温和支持。

每粒胶囊含有500毫克木瓜蛋白酶提取物。配方纯净，仅含必要成分：木瓜果实提取物（含麦芽糊精）、纤维素（抗结剂）和植物纤维素胶囊壳。产品适合素食者和纯素者，不含麸质、乳制品、防腐剂及人工色素香料。`,long_description:`你是否经历过这样的时刻：享用了一顿富含蛋白质的美食——可能是烤肉、豆制品或一顿丰盛的晚餐——之后，却感到一种持久的饱腹感，胃部隐隐不适，精力仿佛都被拖慢在了消化过程中？这不是简单的过饱，而常常是身体在消化复杂蛋白质时发出的信号，提示需要一些额外的酶助力。

**食物态技术**

产品中的活性成分直接萃取自未成熟的木瓜果实。木瓜蛋白酶是木瓜自身用于分解蛋白质以促进果实成熟和软化的天然酶。我们通过温和的提取工艺，将这种天然酶的活性保留下来，封装入易于吞服的植物胶囊中。提取过程中使用的麦芽糊精仅作为载体，确保酶活性的稳定。

**完整体系**

木瓜蛋白酶的核心作用在于其蛋白水解活性。它像一把精密的“分子剪刀”，专门针对食物中蛋白质的长链进行切割，将其分解为更小的肽段和氨基酸。这种分解是消化的关键第一步，为身体后续的吸收和利用铺平道路。当蛋白质被更有效地初步分解时，整个消化系统的负担得以减轻，那种餐后的停滞感和饱胀感自然得到缓解。配方专注于这一核心机制，提供足量且纯净的酶活性单位。

**适合人群**

这款补充剂特别适合那些饮食中蛋白质比例较高，或偶尔发现自己在享用肉类、豆类、奶制品或坚果大餐后感到消化迟缓的人。它也适用于生活节奏快、进食时间不规律，希望为消化系统提供温和、即时支持的人群。对于遵循素食或纯素饮食，依赖植物蛋白来源的人而言，它同样是一种考虑周全的消化辅助选择。

**纯净与成分完整性**

我们坚信，补充剂应当尽可能简单、纯净。Mannayan Papain 的配方正是这一理念的体现。活性成分只有木瓜果实提取物。胶囊壳由植物纤维素制成，抗结剂也选用简单的纤维素。产品不含常见的致敏原和添加剂：无麸质、无乳糖及乳制品、不含防腐剂、不含人工色素与香料，且非转基因。每一批产品都经过严格质控，确保你摄入的正是标签所标示的成分。

**健康管理者与经销商：临床背景与方案搭配**

木瓜蛋白酶作为消化酶辅助使用，在自然健康领域有着长期的应用历史。健康管理者可能会建议将其作为综合性消化支持方案的一部分，特别是针对那些有偶发性蛋白质消化不适感的个案。它可以与其他温和的消化支持成分（如生姜、薄荷）或全面的消化酶配方搭配使用，以提供更广泛的支持。建议始终基于个体的具体需求和整体健康状况进行个性化搭配。

**用法与剂量**

建议每日服用1至2粒胶囊，最好在富含蛋白质的餐食开始时或餐后立即服用，并饮用足量温水。具体剂量可根据个人需要及健康专业人士的指导进行调整。一瓶包含50粒胶囊，足以支持一段时间的日常使用。

**重要提示**

本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。标注的每日推荐摄入量不应被超过。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。如有特定健康状况、正在怀孕或哺乳，或在服用其他药物，在使用前请咨询医生或专业健康顾问。`,ingredient_reference:`**木瓜蛋白酶（源自木瓜果实提取物）**
木瓜蛋白酶是一种从木瓜（Carica papaya）的果实、特别是未成熟果实的乳汁中提取的蛋白水解酶。它在体内主要作用于胃和小肠的上部，帮助分解食物中的蛋白质，将其切割成更小的肽和氨基酸，从而减轻消化系统的负担。这里使用的是标准化的木瓜果实提取物，以确保每份剂量含有稳定、有效的酶活性。它尤其适合那些在摄入高蛋白食物后常感到消化缓慢或不适的人群。在配方中，它作为单一的、强效的消化酶发挥作用，专注于蛋白质消化这一核心环节，其作用不依赖于其他成分的辅助，体现了配方设计的纯粹性与针对性。`},en:{label:`Mannayan Papain
Natural Papain Enzyme
• Supports Protein Digestion & Breakdown • Helps Relieve Occasional Post-Meal Fullness • Sourced from Natural Papaya Fruit • 500mg Papain per Capsule • 50 Capsules • Suitable for Vegetarians & Vegans • Gluten-Free, Dairy-Free, No Artificial Additives`,short_description:`Sometimes, after a hearty meal, your body can feel heavy, sluggish, and your stomach seems blocked by a lingering mass. It's not just about eating too much—it's your body telling you the digestive process could use a little extra support.

Mannayan Papain provides papain enzyme sourced from natural papaya fruit. This enzyme helps the papaya itself ripen in nature, and when we consume it, it assists the body in breaking down proteins in food, making the digestive process smoother and easier.

It is not a replacement for normal digestive function, but rather a natural tool for the body, helping to handle meals that are higher in protein or occasionally difficult to digest. Take 1-2 capsules daily with meals to provide gentle support for your digestive system.

Each capsule contains 500mg of papain extract. The formula is pure, containing only essential ingredients: Papaya Fruit Extract (with maltodextrin), Cellulose (anti-caking agent), and a plant-based cellulose capsule shell. The product is suitable for vegetarians and vegans, and is free from gluten, dairy, preservatives, and artificial colors or flavors.`,long_description:`Have you ever experienced a moment after enjoying a protein-rich meal—perhaps grilled meat, soy products, or a hearty dinner—when you feel a persistent sense of fullness, slight stomach discomfort, and as if your energy has been slowed down by the digestion process? This isn't simply overeating; it's often a signal from your body during the digestion of complex proteins, indicating a need for some extra enzymatic support.

**Food-State Technology**

The active ingredient in this product is directly extracted from unripe papaya fruit. Papain is the natural enzyme the papaya uses to break down proteins to promote fruit ripening and softening. Through a gentle extraction process, we preserve the activity of this natural enzyme and encapsulate it in easy-to-swallow plant-based capsules. The maltodextrin used in extraction serves only as a carrier to ensure enzyme stability.

**Complete System**

The core action of papain lies in its proteolytic activity. It acts like a precise "molecular scissors," specifically targeting and cutting the long chains of proteins in food, breaking them down into smaller peptides and amino acids. This breakdown is a crucial first step in digestion, paving the way for the body's subsequent absorption and utilization. When proteins are more effectively broken down initially, the burden on the entire digestive system is reduced, naturally alleviating that post-meal stagnation and bloating sensation. The formula focuses on this core mechanism, providing a sufficient and pure unit of enzyme activity.

**Who It's For**

This supplement is particularly suitable for those with a higher proportion of protein in their diet, or who occasionally find themselves feeling sluggish after enjoying meals rich in meat, legumes, dairy, or nuts. It's also for individuals with fast-paced lives and irregular eating schedules who want to provide gentle, immediate support for their digestive system. For those following vegetarian or vegan diets and relying on plant-based protein sources, it is an equally thoughtful digestive aid option.

**Purity & Ingredient Integrity**

We believe supplements should be as simple and pure as possible. Mannayan Papain's formula embodies this philosophy. The only active ingredient is papaya fruit extract. The capsule shell is made from plant cellulose, and the anti-caking agent is simple cellulose. The product is free from common allergens and additives: gluten-free, lactose and dairy-free, no preservatives, no artificial colors or flavors, and non-GMO. Every batch undergoes strict quality control to ensure you are getting exactly what the label states.

**For Health Managers & Practitioners: Clinical Context & Protocol Pairing**

Papain has a long history of use in natural health as a digestive enzyme aid. Health practitioners may recommend it as part of a comprehensive digestive support protocol, especially for individuals experiencing occasional protein digestion discomfort. It can be paired with other gentle digestive support ingredients (like ginger, peppermint) or comprehensive digestive enzyme formulas to provide broader support. Recommendations should always be personalized based on the individual's specific needs and overall health picture.

**Usage & Dosage**

Take 1 to 2 capsules daily, preferably at the start of or immediately after a protein-rich meal, with a sufficient amount of warm water. The specific dosage can be adjusted based on individual needs and the guidance of a health professional. One bottle contains 50 capsules, sufficient for a period of regular use.

**Important Notes**

This product is a dietary supplement and is not intended to replace a balanced, varied diet and a healthy lifestyle. The stated recommended daily intake should not be exceeded. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's inner seal is missing. If you have a specific health condition, are pregnant or breastfeeding, or are taking other medications, consult a doctor or qualified health advisor before use.`,ingredient_reference:`**Papain (from Papaya Fruit Extract)**
Papain is a proteolytic enzyme extracted from the fruit, particularly the latex of unripe fruit, of the papaya plant (Carica papaya). In the body, it acts primarily in the stomach and upper small intestine, helping to break down proteins in food by cutting them into smaller peptides and amino acids, thereby reducing the burden on the digestive system. A standardized papaya fruit extract is used here to ensure each serving contains stable, effective enzyme activity. It is especially suitable for those who often feel slow or uncomfortable digestion after consuming high-protein foods. In the formula, it functions as a single, potent digestive enzyme, focusing on the core aspect of protein digestion. Its action does not depend on the assistance of other ingredients, reflecting the purity and targeted design of the formula.`}}},{name:"Mannayan POWER B + (60 Kapseln)",url:"https://mannayan.com/Mannayan-POWER-B-60-Kapseln/010079",price:["24,90 €"],product_number:"010079",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/1c/86/e5/1625822391/Power%20B%2B.jpg?ts=1625822400",image_local:"images/Power%20B%2B.jpg",content:{cn:{label:`Mannayan POWER B+
60粒胶囊

支持能量代谢
维护神经系统健康
促进正常同型半胱氨酸代谢* 
含活性B族维生素与锌

每日1粒
素食胶囊
无麸质、无大豆、无乳制品、无人工添加物`,short_description:`你是否感觉日常的忙碌耗尽了你的精力，即使休息后也难以完全恢复？现代生活的节奏、不规律的饮食，或是身体对营养的特殊需求，都可能让维持内在平衡变得更具挑战。

POWER B+ 提供了一套完整的活性B族维生素组合，并特别添加了锌和甜菜碱。这些营养素以食物态基质为载体，源自保加利亚乳杆菌的酶解过程，包含了氨基酸、碳水化合物和优质脂肪酸。这种形式让身体更容易识别和利用。

它关注的是支持身体的基础代谢功能，特别是能量产生和神经系统的健康维护。配方中的维生素B6、B12和活性叶酸，共同支持正常的同型半胱氨酸代谢。

每瓶含60粒素食胶囊，每日建议服用1粒。配方纯净，适合素食者，且不含麸质、大豆、乳制品、酵母、糖及人工色素与香料。`,long_description:`当持续的疲劳感挥之不去，注意力像蒙上了一层薄雾，或是情绪容易随着压力起伏时，这常常是身体发出的信号，提示某些基础的生理过程需要更多支持。这些感受并非孤立存在，它们与体内微妙的生化平衡息息相关，尤其是那些负责将食物转化为能量、维护神经信号清晰传递的途径。

**食物态递送技术**
POWER B+ 中的维生素并非孤立添加，而是融入了一个独特的食物态混合物中。这个基质通过酶解保加利亚乳杆菌获得，天然含有氨基酸、碳水化合物和脂肪酸。这种结构模拟了食物中营养素的天然存在形式，赋予了成分更高的生物利用度，让身体能够更顺畅地接收和利用这些必需营养素，减少代谢负担。

**完整的协同支持体系**
本配方构建了一个相互支持的营养网络。活性形式的B族维生素（如P-5-P形式的B6、甲基钴胺素形式的B12和5-甲基四氢叶酸）是许多核心酶反应的辅因子，共同参与能量代谢和神经递质的合成。锌作为数百种酶的组成部分，进一步支持这些生化反应的顺利进行。特别添加的甜菜碱（三甲基甘氨酸）与B6、B12、叶酸协同，为同型半胱氨酸的代谢提供了另一条重要途径。这种多成分、多靶点的设计，旨在从不同层面支持身体的代谢平衡与复原力。

**适合人群**
这款补充剂适合那些饮食可能不够均衡、生活节奏紧张、或感觉自身营养消耗较大的人群。它也适用于因个人饮食选择（如素食）或食物不耐受（如麸质、乳制品敏感）而希望确保特定营养素摄入的个体。当你想为身体的基础代谢功能提供扎实、全面的营养支持时，可以考虑POWER B+。

**纯净与成分完整性**
我们坚信补充剂应尽可能纯净。POWER B+ 使用植物来源的羟丙甲纤维素胶囊。配方中不含小麦、麸质、大豆、乳制品、酵母、添加糖、人工色素、人工香料或防腐剂。这种纯净性确保了您摄入的是您真正需要的成分，没有不必要的负担。

**用法与剂量**
建议每日服用1粒胶囊，随足量液体吞服。对于孕期、哺乳期女性，或有特定健康状况者，建议在使用前咨询您的健康顾问。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐每日摄入量。请将产品置于儿童无法触及之处，避光、阴凉干燥处保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**三甲基甘氨酸（甜菜碱）**
甜菜碱是一种天然存在于甜菜等食物中的化合物。它在体内主要作为甲基供体，参与包括同型半胱氨酸再甲基化在内的多种生化过程。这种作用为维护健康的同型半胱氨酸水平提供了B族维生素途径之外的辅助支持。它特别适合那些希望从多角度支持代谢健康的人群。在配方中，它与B6、B12和叶酸协同工作，共同维护这一重要的代谢平衡。

**酒石酸氢胆碱**
胆碱是维持细胞膜结构完整性和神经信号传递所必需的基础营养素。酒石酸氢胆碱是其一种稳定形式。胆碱在体内可用于合成重要的神经递质，并支持肝脏健康。对于饮食中胆碱来源有限的人群尤为重要。它在配方中作为支持细胞整体功能和神经健康的基石，与其他B族维生素相辅相成。

**盐酸硫胺素（维生素B1）**
维生素B1是能量代谢中的关键辅酶，尤其参与碳水化合物的转化过程，帮助身体从食物中获取能量。它也对神经系统的正常功能至关重要。采用盐酸盐形式保证了其稳定性和生物利用度。适合能量需求大或饮食精细的人群。作为B族维生素家族的一员，它为整体的能量代谢支持网络奠定基础。

**吡哆醛-5-磷酸盐（维生素B6）**
这是维生素B6在体内的活性辅酶形式，无需肝脏转化即可直接利用。P-5-P参与超过100种酶反应，包括氨基酸代谢、神经递质（如血清素、多巴胺）的合成，以及血红蛋白的形成。它直接支持正常的同型半胱氨酸代谢。对于追求高效吸收和希望直接支持神经与情绪健康的人群是理想选择。它与B12、叶酸和甜菜碱在该功能上紧密协同。

**柠檬酸锌**
锌是一种必需的微量矿物质，作为众多酶的组成部分或激活剂，广泛参与DNA合成、蛋白质代谢、免疫功能和抗氧化过程。柠檬酸锌是一种具有良好吸收率的有机锌形式。它对素食者、老年人或消化吸收功能可能减弱的人群有特别意义。在配方中，锌支持了B族维生素参与的许多酶反应，增强了配方的整体代谢支持效果。

**核黄素（维生素B2）**
维生素B2是两种重要辅酶（FAD和FMN）的前体，这些辅酶在细胞呼吸和能量生产中扮演核心角色。它同样参与其他B族维生素（如B6和叶酸）的活化过程，并具有抗氧化特性。采用核黄素标准形式，稳定有效。是支持整体能量产生和抗氧化防御的基础成分。它激活并支持配方中其他B族维生素发挥作用。

**甲基钴胺素（维生素B12）**
这是维生素B12的活性形式之一，特别参与神经系统的维护和红细胞的生成。甲基B12直接作为甲基供体，与叶酸协同参与同型半胱氨酸的代谢循环。这种形式对于有吸收顾虑或希望直接补充活性B12的人群尤为合适。它与活性叶酸和B6构成了支持同型半胱氨酸代谢的核心三角，甜菜碱则提供了额外的支持路径。

**5-甲基四氢叶酸（活性叶酸）**
这是叶酸在血液循环中的主要活性形式，无需经过复杂的酶转化即可被身体利用。它直接参与DNA合成、细胞分裂以及同型半胱氨酸的再甲基化过程。对于携带MTHFR基因变异或其他叶酸代谢可能不畅的人群，这是更直接的选择。作为配方中的关键成员，它与甲基B12紧密配合，是维护健康同型半胱氨酸水平不可或缺的一环。`},en:{label:`Mannayan POWER B+
60 Capsules

Supports Energy Metabolism
Maintains Nervous System Health
Promotes Normal Homocysteine Metabolism*
Contains Active B Vitamins & Zinc

1 Capsule Daily
Vegetarian Capsules
Gluten-Free, Soy-Free, Dairy-Free, No Artificial Additives`,short_description:`Do you feel like daily busyness drains your energy, making it hard to fully recover even after rest? The pace of modern life, irregular eating habits, or your body's specific nutritional needs can all make maintaining internal balance more challenging.

POWER B+ provides a complete complex of active B vitamins, specially enhanced with zinc and betaine. These nutrients are delivered within a food-state matrix, derived from the enzymatic processing of Lactobacillus bulgaricus, containing amino acids, carbohydrates, and high-quality fatty acids. This form makes it easier for the body to recognize and utilize.

It focuses on supporting the body's foundational metabolic functions, particularly energy production and the maintenance of nervous system health. The formula's Vitamin B6, B12, and active folate work together to support normal homocysteine metabolism.

Each bottle contains 60 vegetarian capsules, with a suggested serving of 1 capsule daily. The formula is pure, suitable for vegetarians, and free from gluten, soy, dairy, yeast, sugar, and artificial colors or flavors.`,long_description:`When persistent fatigue lingers, focus feels clouded, or emotions fluctuate easily with stress, these are often signals from your body, indicating that certain fundamental physiological processes need more support. These feelings don't exist in isolation; they are closely linked to the delicate biochemical balance within, especially the pathways responsible for converting food into energy and maintaining clear nerve signal transmission.

**Food-State Delivery Technology**
The vitamins in POWER B+ are not added in isolation but are integrated into a unique food-state blend. This matrix is obtained through the enzymatic processing of Lactobacillus bulgaricus and naturally contains amino acids, carbohydrates, and fatty acids. This structure mimics the natural form of nutrients found in food, granting the ingredients higher bioavailability. It allows the body to receive and utilize these essential nutrients more smoothly, reducing metabolic burden.

**A Complete Synergistic Support System**
This formula builds an interconnected network of nutritional support. Active forms of B vitamins (such as B6 as P-5-P, B12 as methylcobalamin, and folate as 5-MTHF) serve as cofactors for many core enzymatic reactions, collectively involved in energy metabolism and neurotransmitter synthesis. Zinc, as a component of hundreds of enzymes, further supports the smooth progression of these biochemical reactions. The specially added betaine (trimethylglycine) works synergistically with B6, B12, and folate, providing another important pathway for homocysteine metabolism. This multi-component, multi-target design aims to support the body's metabolic balance and resilience from different angles.

**Who It's For**
This supplement is suitable for those whose diets may be less than balanced, who lead high-stress lifestyles, or who feel their nutritional demands are high. It is also suitable for individuals who, due to personal dietary choices (like vegetarianism) or food intolerances (such as gluten or dairy sensitivity), wish to ensure adequate intake of specific nutrients. Consider POWER B+ when you want to provide solid, comprehensive nutritional support for your body's foundational metabolic functions.

**Purity & Ingredient Integrity**
We firmly believe supplements should be as pure as possible. POWER B+ uses plant-derived hydroxypropyl methylcellulose capsules. The formula contains no wheat, gluten, soy, dairy, yeast, added sugars, artificial colors, artificial flavors, or preservatives. This purity ensures you are consuming exactly what you need, without unnecessary burdens.

**Usage & Dosage**
Take 1 capsule daily with a sufficient amount of liquid. For pregnant or nursing women, or individuals with specific health conditions, it is recommended to consult your healthcare advisor before use.

**Important Information**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Trimethylglycine (Betaine)**
Betaine is a compound naturally found in foods like beets. In the body, it primarily acts as a methyl donor, participating in various biochemical processes, including the remethylation of homocysteine. This action provides auxiliary support for maintaining healthy homocysteine levels, complementing the B-vitamin pathway. It is particularly suitable for those seeking to support metabolic health from multiple angles. In the formula, it works synergistically with B6, B12, and folate to maintain this important metabolic balance.

**Choline Bitartrate**
Choline is an essential foundational nutrient for maintaining cell membrane integrity and nerve signal transmission. Choline bitartrate is a stable form. Choline is used in the body to synthesize important neurotransmitters and supports liver health. It is especially important for individuals with limited dietary sources of choline. In the formula, it serves as a cornerstone for supporting overall cellular function and nerve health, complementing the other B vitamins.

**Thiamine Hydrochloride (Vitamin B1)**
Vitamin B1 is a key coenzyme in energy metabolism, particularly involved in the conversion of carbohydrates, helping the body derive energy from food. It is also crucial for the normal function of the nervous system. The hydrochloride form ensures its stability and bioavailability. Suitable for those with high energy demands or refined diets. As a member of the B-vitamin family, it lays the foundation for the overall energy metabolism support network.

**Pyridoxal-5-Phosphate (Vitamin B6)**
This is the active coenzyme form of vitamin B6 in the body, which can be utilized directly without liver conversion. P-5-P participates in over 100 enzymatic reactions, including amino acid metabolism, the synthesis of neurotransmitters (like serotonin and dopamine), and hemoglobin formation. It directly supports normal homocysteine metabolism. An ideal choice for those seeking efficient absorption and direct support for nerve and mood health. It works in close synergy with B12, folate, and betaine for this function.

**Zinc Citrate**
Zinc is an essential trace mineral that serves as a component or activator of numerous enzymes, widely involved in DNA synthesis, protein metabolism, immune function, and antioxidant processes. Zinc citrate is an organic form of zinc with good absorption. It holds particular significance for vegetarians, the elderly, or those with potentially reduced digestive absorption. In the formula, zinc supports many of the enzyme reactions involving B vitamins, enhancing the formula's overall metabolic support effect.

**Riboflavin (Vitamin B2)**
Vitamin B2 is a precursor to two important coenzymes (FAD and FMN), which play a central role in cellular respiration and energy production. It is also involved in activating other B vitamins (like B6 and folate) and possesses antioxidant properties. The standard riboflavin form is stable and effective. It is a foundational component for supporting overall energy production and antioxidant defense. It activates and supports the function of other B vitamins in the formula.

**Methylcobalamin (Vitamin B12)**
This is one of the active forms of vitamin B12, specifically involved in maintaining the nervous system and red blood cell formation. Methyl B12 directly acts as a methyl donor, working synergistically with folate in the homocysteine metabolic cycle. This form is especially suitable for those with absorption concerns or who wish to directly supplement with active B12. Together with active folate and B6, it forms the core triad supporting homocysteine metabolism, with betaine providing an additional support pathway.

**5-Methyltetrahydrofolate (Active Folate)**
This is the primary active form of folate in the bloodstream, which can be utilized by the body without undergoing complex enzymatic conversion. It is directly involved in DNA synthesis, cell division, and the remethylation of homocysteine. For individuals with MTHFR gene variations or other potential inefficiencies in folate metabolism, this is a more direct option. As a key member of the formula, it works closely with methyl B12 and is an indispensable part of maintaining healthy homocysteine levels.`}}},{name:"Mannayan POWERJOD + (60 Kapseln)",url:"https://mannayan.com/Mannayan-POWERJOD-60-Kapseln/010080",price:["16,40 €"],product_number:"010080",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/64/71/d7/1766137399/Powerjod%2B_2025.jpg?ts=1766137399",image_local:"images/Powerjod%2B_2025.jpg",content:{cn:{label:`Mannayan POWERJOD+
源自海洋的完整食物碘
• 支持甲状腺健康与能量代谢
• 提供天然有机碘及协同营养素
• 源自三种纯净海域的有机褐藻
• 全食物形态，易于身体识别利用
• 适合素食者及纯净饮食者
60粒胶囊 | 每日1粒，含280微克碘 | 有机认证 | 无麸质、无大豆、无人工添加`,short_description:`你是否感觉精力不济，即使休息充足也难抵疲惫？或是发现自己比以往更怕冷，新陈代谢似乎慢了下来？这些细微的身体信号，有时与一种常被忽视的微量矿物质——碘的平衡有关。

Mannayan POWERJOD+并非普通的碘补充剂。它源自三种经过精心挑选的有机褐藻：Fucus spiralis, Pelvetia canaliculata 和 Ascophyllum nodosum。海洋藻类天然蕴含碘，并以全食物的完整形态存在，这意味着它们同时提供了身体有效吸收和利用碘所需的一系列天然协同因子，如矿物质和微量元素。

每日一粒，提供280微克天然有机碘，支持甲状腺的正常功能，而甲状腺是调节我们身体能量代谢和体温的核心。这种全食物来源的方式，让营养以一种身体更熟悉、更温和的形式被接纳。

产品获得有机认证，胶囊由植物纤维素制成。配方纯净，不含麸质、大豆、乳制品、酵母、糖及任何人工色素、香料或防腐剂，适合素食者及追求纯净配方的人群。`,long_description:`当持续的疲惫感挥之不去，或是总觉得手脚冰凉、精力难以集中时，我们往往从睡眠或压力中寻找原因。然而，身体的能量引擎——甲状腺——需要特定的燃料才能平稳运行。碘就是其中关键的一环，它参与合成甲状腺激素，而这些激素几乎调节着全身每一个细胞的代谢速率。现代饮食中，这种必需矿物质的来源并不总是充足或均衡。

**全食物技术**
Mannayan POWERJOD+的核心在于“全食物”理念。我们不是提供孤立的、化学合成的碘化合物，而是将三种有机褐藻（Fucus spiralis, Pelvetia canaliculata, Ascophyllum nodosum）的精华完整保留。在自然界中，营养素从不单独存在。这些来自洁净、可持续海域的藻类，在提供天然有机碘的同时，也携带着其固有的矿物质、微量元素、维生素和益生元。这种完整的营养矩阵，是身体识别、吸收和利用碘的最佳环境，模仿了我们从天然食物中获取营养的方式。

**完整的协同体系**
配方中三种褐藻的搭配并非偶然。每种藻类都有其独特的营养成分谱系，它们共同构成了一个微型的海洋营养库。其中的碘以有机形态存在，与藻类中的其他天然成分（如钾、镁、钙等矿物质）协同工作。这种协同作用有助于营养的平衡吸收，避免了单一高剂量营养可能带来的负担，支持甲状腺以一种更渐进、更自然的方式获取其所需。这不仅仅是补充碘，更是为甲状腺健康提供一个全面的营养背景。

**适合的人群**
这款产品适合那些关注自身基础代谢健康，并倾向于从完整食物中获取营养的人。如果你遵循素食或纯素饮食，日常食物中可能缺乏稳定的碘来源（如海鱼、海产品），它可以帮助填补这一空缺。对于追求饮食纯净、避免常见过敏原（如麸质、大豆、乳制品）的人，它的配方提供了安心之选。同样，当生活方式改变或处于特定生命阶段，对碘的需求可能发生变化时，它也能作为一种细致的营养支持。重要的是，任何正在服用甲状腺相关药物，或处于孕期、哺乳期的人士，在开始使用前应与健康顾问沟通。

**纯净与成分完整性**
我们坚信，补充剂的品质始于源头。用于POWERJOD+的褐藻均来自受保护的洁净海域，并获得了有机认证（Organix Cert）。整个生产过程尊重原料的完整性，不进行过度加工，以保存其全食物营养特性。最终产品不含小麦、麸质、乳制品、大豆、酵母、淀粉、糖、防腐剂以及任何人工色素和香料。胶囊外壳采用植物源的羟丙甲纤维素，确保产品适合素食者和纯素者。每一批产品都经过严格检测，确保其纯净度和标示剂量的准确性。

**健康管理者与搭配方案**
许多自然疗法医师、营养师和健康顾问将全食物营养视为其健康管理方案的基石。POWERJOD+因其温和、完整的特性，常被用于支持整体的甲状腺健康和能量代谢平衡。在实践中，它可能与支持肾上腺功能的配方、富含硒和锌的补充剂，或旨在减轻身体炎症反应的方案结合使用，以多角度支持身体的稳态。它的有机全食物形式，使其易于融入以食物为先导的整体健康策略中。

**用法与剂量**
建议每日随餐服用1粒胶囊，并用足量水送服。每粒胶囊提供400毫克有机褐藻，其中天然含有约280微克碘。这一剂量旨在弥补日常饮食可能存在的不足，并以温和的方式提供支持。 consistency is key——每日规律服用，比偶尔大剂量补充更能让身体受益。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。标示的每日推荐剂量请勿超过。对碘已知过敏者请勿使用。不适合儿童。如果您正在服用甲状腺药物，或怀孕、哺乳，在使用前请务必咨询医生或专业健康顾问。请将产品置于儿童无法触及之处，避光、在阴凉干燥处保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**有机褐藻（Ascophyllum nodosum 等）**
这是来自北大西洋洁净海域的多种褐藻复合物，主要包括Ascophyllum nodosum、Fucus spiralis和Pelvetia canaliculata。它们是在海洋环境中自然生长的全食物，是自然界中生物可利用有机碘的优质来源。在体内，这些藻类提供的碘是合成甲状腺激素（T3和T4）的必需原料，这些激素直接调控基础代谢率、体温、能量产生和生长发育。我们特意选用有机认证的完整藻体，而非提取物，以确保其天然的营养协同矩阵——包括伴生的矿物质、微量元素和益生元纤维——得以保留。它最适合那些希望通过食物本真形态补充矿物质、追求温和渐进式营养支持，以及饮食中海产品摄入有限的人群。在配方中，不同藻种的组合丰富了营养谱，使碘的供应更加平衡全面。

**天然有机碘**
碘是一种必需的微量矿物质，以有机络合物的形式天然存在于褐藻中。它是甲状腺球蛋白转化为活性甲状腺激素的关键成分，这些激素几乎影响全身所有器官系统，特别是大脑发育、能量代谢和体温调节。与某些合成碘化物不同，这种全食物来源的碘与藻类中的其他营养素（如酪氨酸类似物、硒的前体物质）天然共存，这可能有助于其在体内的整合与利用过程更为顺畅。这种形式的碘特别适合那些倾向于避免合成营养素、希望模拟从天然海藻中获取营养方式的人群。在POWERJOD+中，它是整个全食物复合物的核心活性组成部分，其效用的发挥离不开藻类基质提供的整体营养环境。`},en:{label:`Mannayan POWERJOD+
Complete Food Iodine from the Sea
• Supports Thyroid Health & Energy Metabolism
• Provides Natural Organic Iodine with Synergistic Nutrients
• Sourced from Three Organic Brown Seaweeds from Pristine Waters
• Whole Food Form, Easily Recognized & Utilized by the Body
• Suitable for Vegetarians & Clean Eaters
60 Capsules | 1 Capsule Daily, Contains 280 mcg Iodine | Organic Certified | Gluten-Free, Soy-Free, No Artificial Additives`,short_description:`Do you feel low on energy, struggling with fatigue even after adequate rest? Or find yourself feeling colder than usual, as if your metabolism has slowed down? These subtle bodily signals can sometimes be linked to the balance of a trace mineral that's often overlooked: iodine.

Mannayan POWERJOD+ is not an ordinary iodine supplement. It is derived from three carefully selected organic brown seaweeds: Fucus spiralis, Pelvetia canaliculata, and Ascophyllum nodosum. Seaweeds naturally contain iodine in a whole food form, meaning they also provide a spectrum of natural co-factors—like minerals and trace elements—that the body needs to effectively absorb and utilize iodine.

One capsule daily provides 280 mcg of natural organic iodine, supporting the normal function of the thyroid gland, which is central to regulating our body's energy metabolism and temperature. This whole food source approach allows nutrients to be accepted by the body in a more familiar and gentle form.

The product is organically certified, and the capsules are made from plant cellulose. The formula is pure, free from gluten, soy, dairy, yeast, sugar, and any artificial colors, flavors, or preservatives. It is suitable for vegetarians and those seeking clean formulations.`,long_description:`When persistent fatigue lingers, or you often feel cold in your hands and feet and struggle to concentrate, we tend to look for causes in sleep or stress. However, the body's energy engine—the thyroid gland—requires specific fuel to run smoothly. Iodine is a key piece of this puzzle, as it is involved in synthesizing thyroid hormones, which regulate the metabolic rate of nearly every cell in the body. In modern diets, sources of this essential mineral are not always sufficient or balanced.

**Whole Food Technology**
The core of Mannayan POWERJOD+ lies in the "whole food" philosophy. We do not provide isolated, chemically synthesized iodine compounds. Instead, we preserve the complete essence of three organic brown seaweeds (Fucus spiralis, Pelvetia canaliculata, Ascophyllum nodosum). In nature, nutrients never exist alone. These seaweeds, sourced from clean, sustainable waters, provide natural organic iodine while also carrying their inherent minerals, trace elements, vitamins, and prebiotics. This complete nutritional matrix creates the optimal environment for the body to recognize, absorb, and utilize iodine, mimicking the way we obtain nutrients from natural foods.

**Complete Synergistic System**
The combination of three brown seaweeds in the formula is not accidental. Each seaweed has its unique nutritional profile, and together they form a miniature marine nutrient library. The iodine exists in an organic form and works synergistically with other natural components in the seaweed, such as minerals like potassium, magnesium, and calcium. This synergy supports balanced nutrient absorption, avoiding the potential burden of single high-dose nutrients, and assists the thyroid in obtaining what it needs in a more gradual, natural manner. This is not just about supplementing iodine; it's about providing a comprehensive nutritional backdrop for thyroid health.

**Who It's For**
This product is suitable for those who are mindful of their foundational metabolic health and prefer to obtain nutrients from whole foods. If you follow a vegetarian or vegan diet and may lack consistent dietary sources of iodine (such as sea fish or seafood), it can help fill this gap. For those pursuing dietary purity and avoiding common allergens (like gluten, soy, dairy), its formulation offers a reassuring choice. It can also serve as a thoughtful nutritional support when lifestyle changes or specific life stages may alter iodine needs. Importantly, anyone currently taking thyroid-related medication, or who is pregnant or breastfeeding, should consult a healthcare advisor before use.

**Purity & Ingredient Integrity**
We believe that supplement quality begins at the source. The brown seaweeds used in POWERJOD+ are sourced from protected, clean waters and are organically certified (Organix Cert). The entire production process respects the integrity of the raw materials, avoiding over-processing to preserve their whole food nutritional properties. The final product is free from wheat, gluten, dairy, soy, yeast, starch, sugar, preservatives, and any artificial colors or flavors. The capsule shell is made from plant-derived hydroxypropyl methylcellulose, ensuring suitability for vegetarians and vegans. Every batch undergoes rigorous testing to ensure purity and accurate labeled potency.

**Health Practitioners & Synergistic Protocols**
Many naturopathic doctors, nutritionists, and health advisors view whole food nutrition as a cornerstone of their health management protocols. POWERJOD+, due to its gentle and complete nature, is often used to support overall thyroid health and energy metabolism balance. In practice, it may be combined with formulas supporting adrenal function, supplements rich in selenium and zinc, or protocols aimed at reducing systemic inflammation to support the body's homeostasis from multiple angles. Its organic whole food form makes it easy to integrate into food-first, holistic health strategies.

**Usage & Dosage**
Take 1 capsule daily with a meal, accompanied by a full glass of water. Each capsule provides 400 mg of organic brown seaweed, naturally containing approximately 280 mcg of iodine. This dosage is designed to address potential dietary shortfalls and provide support in a gentle manner. Consistency is key—regular daily intake is more beneficial for the body than occasional high-dose supplementation.

**Important Notice**
This product is a dietary supplement and is not intended to replace a balanced, varied diet and a healthy lifestyle. Do not exceed the stated recommended daily dose. Do not use if you have a known allergy to iodine. Not suitable for children. If you are taking thyroid medication, or are pregnant or breastfeeding, consult your doctor or a qualified healthcare advisor before use. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the seal on the bottle is missing.`,ingredient_reference:`**Organic Brown Seaweed (Ascophyllum nodosum, etc.)**
This is a complex of multiple brown seaweeds from the clean waters of the North Atlantic, primarily including Ascophyllum nodosum, Fucus spiralis, and Pelvetia canaliculata. They are whole foods that grow naturally in the marine environment and are an excellent source of bioavailable organic iodine in nature. In the body, the iodine provided by these seaweeds is an essential raw material for synthesizing thyroid hormones (T3 and T4), which directly regulate basal metabolic rate, body temperature, energy production, and growth and development. We deliberately use organically certified, whole seaweed fronds, not extracts, to ensure the preservation of their natural nutritional synergy matrix—including accompanying minerals, trace elements, and prebiotic fibers. It is most suitable for those who wish to supplement minerals in the authentic form of food, seek gentle and gradual nutritional support, and have limited seafood intake in their diet. In the formula, the combination of different seaweed species enriches the nutritional spectrum, making the iodine supply more balanced and comprehensive.

**Natural Organic Iodine**
Iodine is an essential trace mineral that naturally exists in brown seaweed as an organic complex. It is a key component in the conversion of thyroglobulin into active thyroid hormones, which affect nearly all organ systems in the body, particularly brain development, energy metabolism, and temperature regulation. Unlike some synthetic iodides, this whole food-derived iodine naturally coexists with other nutrients in the seaweed (such as tyrosine analogs and selenium precursors), which may facilitate a smoother process of integration and utilization in the body. This form of iodine is particularly suitable for those who prefer to avoid synthetic nutrients and wish to mimic the way nutrients are obtained from natural seaweed. In POWERJOD+, it is the core active component of the entire whole food complex, and its efficacy is inseparable from the overall nutritional environment provided by the seaweed matrix.`}}},{name:"Mannayan Q10 + liquid",url:"https://mannayan.com/Mannayan-Q10-liquid/010082",price:["49,50 €"],product_number:"010082",quantity:["30 ml"],image_url:"https://mannayan.com/media/11/3d/48/1612511542/Q-10_Tropfen_08.10.2020.jpg?ts=1624948035",image_local:"images/Q-10_Tropfen_08.10.2020.jpg",content:{cn:{label:`Mannayan Q10+ 液体辅酶Q10
细胞能量之源，从根本滋养
• 支持细胞能量生产 • 抗氧化保护 • 促进心脏健康 • 维持整体活力
每瓶30毫升，约600滴
每日12滴，提供30毫克高生物利用度辅酶Q10
纯净配方：无麸质、无乳糖、无人工色素香料、无防腐剂、适合素食者`,short_description:`你是否感觉日常的精力总是不够用，仿佛身体的“电池”充不满电？那种从深处涌上来的疲惫感，并非仅仅靠多睡一会儿就能缓解。这常常与细胞层面的能量生产效率有关。

Mannayan Q10+ 液体辅酶Q10直接作用于这个根本环节。辅酶Q10是细胞“能量工厂”——线粒体的关键成分，负责将食物转化为身体可用的能量。这款产品采用独特的液体微粒技术，通过舌下含服，让活性成分通过口腔黏膜直接、快速地进入循环系统，避免了传统胶囊形式可能遇到的吸收障碍，因此能以更小的剂量实现更佳的效果。

每日仅需12滴，即可提供30毫克高纯度、高生物利用度的辅酶Q10。它采用植物原料发酵而成，配方纯净，不含麸质、乳糖、人工添加剂和防腐剂，温和易吸收。`,long_description:`当持续的疲劳感挥之不去，心脏偶尔感到需要更费力地工作，或者你开始更加关注长期的身体维护时，这往往是身体在提示，为细胞供能的核心物质需要得到补充。辅酶Q10随着年龄增长或在特定生活状态下，体内的自然合成会减少，而它正是每个细胞产生能量不可或缺的催化剂。

**食物态技术与高效递送**
Mannayan Q10+ 的核心在于其独特的递送系统。它将高纯度的辅酶Q10转化为超微小的液体微粒。当你将滴剂置于舌下，这些微粒能通过丰富的口腔黏膜血管被直接吸收，迅速进入血液循环。这条路径绕开了消化系统的首过效应，意味着活性成分无需经过漫长的消化分解过程，避免了可能的损耗，从而实现了更快起效和更高的生物利用度。这也解释了为何它的每日所需剂量相对较低，却能达到显著效果。

**一个完整的能量支持体系**
这款产品并非孤立地提供单一分子。辅酶Q10在体内扮演双重角色：首要功能是在线粒体这个细胞的“动力车间”中，参与生成三磷酸腺苷（ATP）——身体的通用能量货币。没有充足的Q10，能量转化效率就会下降。其次，它本身是一种强效的脂溶性抗氧化剂，能够保护细胞膜、脂蛋白和其他重要结构免受氧化损伤。这种从能量生产到细胞保护的双重作用，构成了一个内在支持的整体循环，帮助身体从根源上维持活力与平衡。

**适合人群**
它适合那些感觉精力不如从前，希望从细胞层面为身体充电的成年人；也适合关注心脏长期健康，希望为其提供基础营养支持的人士；对于因生活方式或年龄因素，感到需要额外抗氧化保护的人群，它也是一个纯净的选择。素食者同样可以安心使用。

**纯净与成分完整性**
产品中的辅酶Q10通过植物原料发酵工艺获得，确保了纯净的来源和高度的生物相容性。配方中除了活性成分和必要的载体（水、甘油、大豆卵磷脂用于稳定，柠檬酸钠用于调节酸碱度）以及10%的食用酒精（作为溶剂和防腐的天然替代）外，别无他物。我们明确避免了麸质、乳糖、人工色素、人工香料、防腐剂和添加糖，让每一滴都专注于提供你所需要的核心支持。

**用法与剂量**
建议每日总量为12滴，可分次置于舌下，使其自然吸收，或与足量液体一同服用。一瓶30毫升约含600滴，可持续使用约50天。请勿超过推荐每日用量。

**重要提示**
本产品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。请置于儿童无法触及之处，避光、阴凉干燥保存。如果密封带缺失，请勿食用。孕妇及哺乳期妇女不宜使用。`,ingredient_reference:`**辅酶Q10（泛醌）**
辅酶Q10是一种天然存在于人体每个细胞中的物质，尤其在心脏、肝脏和肾脏中浓度最高。它在细胞线粒体内膜上发挥着至关重要的作用，是电子传递链中的关键组成部分，直接参与生产三磷酸腺苷（ATP）——身体一切活动所需的能量分子。随着年龄增长，体内自主合成Q10的能力会逐渐下降。本品采用通过发酵工艺获得的纯净泛醌形式，这是辅酶Q10的氧化形态，性质稳定，在体内可被转化为活性形式。它特别适合感到精力不足、希望支持细胞能量代谢效率的人群。在本配方中，其高纯度和独特的液体递送技术相结合，确保了高效吸收和利用。

**大豆卵磷脂**
在本产品中，大豆卵磷脂主要作为乳化剂和稳定剂。它有助于将脂溶性的辅酶Q10均匀分散在水基液体中，形成稳定的微滴体系，防止成分分离。这种物理性的稳定作用确保了每一滴剂量的成分一致性和均匀性，是实现精准剂量和良好口感的基础。

**甘油**
甘油是一种天然的保湿剂和稳定剂。在配方中，它有助于维持液体的适当粘稠度，并防止产品干燥或结晶，保证了产品在整个使用期间质地稳定。同时，它也能带来轻微的甜味，改善口感。

**柠檬酸钠**
柠檬酸钠在此作为酸碱度调节剂。它帮助维持产品液体的pH值处于稳定和适宜的范围内，这不仅能保障辅酶Q10的化学稳定性，延长保质期，也能使产品的口感更加温和。`},en:{label:`Mannayan Q10+ Liquid Coenzyme Q10
Cellular Energy Source, Nourishing from Within
• Supports Cellular Energy Production • Antioxidant Protection • Promotes Heart Health • Maintains Overall Vitality
30 ml per bottle, approximately 600 drops
12 drops daily provide 30 mg of highly bioavailable Coenzyme Q10
Pure Formula: Gluten-Free, Lactose-Free, No Artificial Colors or Flavors, No Preservatives, Suitable for Vegetarians`,short_description:`Do you often feel like your daily energy just isn't enough, as if your body's 'battery' never fully charges? That deep-seated fatigue isn't something a little extra sleep can always fix. It's often linked to how efficiently your cells produce energy.

Mannayan Q10+ Liquid Coenzyme Q10 targets this fundamental process. Coenzyme Q10 is a key component of the mitochondria—the cell's 'power plants'—responsible for converting food into usable energy for the body. This product utilizes a unique liquid micro-particle technology. Taken sublingually (under the tongue), the active ingredients are absorbed directly and rapidly into the bloodstream through the oral mucosa. This bypasses potential absorption barriers common with traditional capsules, allowing for greater effectiveness with a smaller dose.

Just 12 drops daily provide 30 mg of high-purity, highly bioavailable Coenzyme Q10. It is derived from plant-based fermentation. The formula is pure, free from gluten, lactose, artificial additives, and preservatives, making it gentle and easy to absorb.`,long_description:`When persistent fatigue lingers, your heart occasionally feels like it's working harder, or you're becoming more mindful of long-term bodily maintenance, it's often a sign that your core cellular energy supply needs replenishing. Coenzyme Q10, a crucial catalyst for energy production in every cell, naturally declines in the body with age or under certain lifestyle conditions.

**Food-State Technology & Efficient Delivery**
The core of Mannayan Q10+ lies in its unique delivery system. It converts high-purity Coenzyme Q10 into ultra-fine liquid micro-particles. When you place the drops under your tongue, these particles are absorbed directly through the rich network of blood vessels in the oral mucosa, entering the bloodstream rapidly. This route bypasses the 'first-pass effect' of the digestive system, meaning the active ingredients don't undergo lengthy digestion and potential breakdown, leading to faster onset and higher bioavailability. This also explains why its effective daily dose is relatively low.

**A Complete Energy Support System**
This product provides more than just an isolated molecule. Coenzyme Q10 plays a dual role in the body: Its primary function is within the mitochondria—the cell's 'powerhouse'—where it helps produce adenosine triphosphate (ATP), the body's universal energy currency. Without sufficient Q10, energy conversion efficiency drops. Secondly, it is a potent fat-soluble antioxidant, protecting cell membranes, lipoproteins, and other vital structures from oxidative damage. This dual action, from energy production to cellular protection, creates an integrated support cycle, helping the body maintain vitality and balance from within.

**Who It's For**
It's suitable for adults who feel their energy isn't what it used to be and wish to recharge at the cellular level; for those focused on long-term heart health, seeking foundational nutritional support; and for individuals desiring additional antioxidant protection due to lifestyle or age factors. It's also a pure choice suitable for vegetarians.

**Purity & Ingredient Integrity**
The Coenzyme Q10 in this product is obtained through plant-based fermentation, ensuring a pure source and high biocompatibility. The formula contains only the active ingredient and necessary carriers (water, glycerin, soy lecithin for stability, and sodium citrate for pH balance), along with 10% food-grade alcohol (as a natural solvent and preservative alternative). We consciously avoid gluten, lactose, artificial colors, artificial flavors, preservatives, and added sugars, so every drop focuses on delivering the core support you need.

**Usage & Dosage**
The recommended daily intake is 12 drops total. This can be taken at once or divided, placed under the tongue for natural absorption, or taken with a sufficient amount of liquid. One 30 ml bottle contains approximately 600 drops, lasting about 50 days. Do not exceed the recommended daily intake.

**Important Notes**
This product is a dietary supplement and is not intended to replace a varied, balanced diet and a healthy lifestyle. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the security seal is missing. Not recommended for use during pregnancy or breastfeeding.`,ingredient_reference:`**Coenzyme Q10 (Ubiquinone)**
Coenzyme Q10 is a substance naturally present in every cell of the human body, with the highest concentrations in the heart, liver, and kidneys. It plays a crucial role within the inner membrane of cellular mitochondria, acting as a key component of the electron transport chain, directly involved in producing adenosine triphosphate (ATP)—the energy molecule required for all bodily activities. The body's ability to synthesize Q10 naturally declines with age. This product uses pure ubiquinone obtained through fermentation, the oxidized form of Coenzyme Q10, which is stable and can be converted into its active form within the body. It is particularly suitable for those experiencing low energy and wishing to support cellular energy metabolism efficiency. In this formula, its high purity combined with unique liquid delivery technology ensures efficient absorption and utilization.

**Soy Lecithin**
In this product, soy lecithin primarily acts as an emulsifier and stabilizer. It helps evenly disperse the fat-soluble Coenzyme Q10 in the water-based liquid, forming a stable micro-droplet system and preventing ingredient separation. This physical stabilization ensures consistent composition and uniformity in every drop, providing the foundation for precise dosing and pleasant texture.

**Glycerin**
Glycerin is a natural humectant and stabilizer. In the formula, it helps maintain the liquid's appropriate viscosity, prevents the product from drying out or crystallizing, and ensures stable texture throughout its shelf life. It also imparts a mild sweetness, improving palatability.

**Sodium Citrate**
Sodium citrate acts as a pH adjuster here. It helps maintain the product's liquid pH within a stable and suitable range. This not only safeguards the chemical stability of Coenzyme Q10, extending shelf life, but also makes the product's taste more温和 (mild).`}}},{name:"Mannayan Q10 Aktiv+ (60 Kapseln)",url:"https://mannayan.com/Mannayan-Q10-Aktiv-60-Kapseln/011355",price:["34,90 €"],product_number:"011355",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/d3/2a/e2/1766137434/Q10-Aktiv%2B_2025.jpg?ts=1766137434",image_local:"images/Q10-Aktiv%2B_2025.jpg",content:{cn:{label:`Mannayan Q10 Aktiv+
细胞能量，直接可用
• 支持细胞能量生产 • 保护细胞免受氧化压力 • 维持心脏健康 • 促进整体活力
60粒胶囊 | 每粒含30毫克泛醇Q10
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、非转基因、适合素食者`,short_description:`你是否感觉身体的能量水平不如从前，即使休息后也难以恢复？日常的压力、年龄的增长，都可能让身体产生能量的核心环节——细胞线粒体——效率降低。

Mannayan Q10 Aktiv+ 提供的是泛醇形态的辅酶Q10。这是身体可以直接利用的活性形式，无需额外转化。它直接参与到细胞能量生产的关键过程中，像是为身体的“发电厂”提供了现成的优质燃料。

配方中仅包含必要的活性成分和天然载体，采用原生有机椰子油帮助吸收。不含常见的致敏原和人工添加剂，确保你摄入的是纯粹的支持。每日1-3粒，随餐服用，即可为身体的能量基础提供支持。`,long_description:`当一天结束时，你感到的疲惫可能不仅仅是需要睡眠。那种深层的、从身体内部透出的倦怠感，或是感觉心力储备不足，常常是细胞能量代谢需要关注的信号。辅酶Q10是人体每个细胞能量生产线的核心成员，尤其在心脏、大脑等高耗能器官中含量丰富。随着年龄增长或处于持续压力下，身体自身的合成可能无法满足需求。

**食物态技术与直接利用形式**
Mannayan Q10 Aktiv+ 采用泛醇作为活性成分。这是辅酶Q10在体内发挥作用的还原态、活性形式。与常见的泛醌形式不同，泛醇无需经过复杂的体内转化步骤，可以被身体直接吸收并利用，尤其适合那些自身转化效率可能已经受到影响的人群。产品使用原生有机椰子油作为载体，这是一种天然的优质脂肪，能有效促进脂溶性的泛醇吸收，模拟食物中的自然存在状态。

**一个完整的支持体系**
这款产品的设计理念在于提供直接、高效的支持。泛醇直接进入细胞线粒体，参与三磷酸腺苷的生产过程，这是身体一切活动的能量货币。同时，作为一种脂溶性的抗氧化剂，它还能保护脆弱的细胞膜和线粒体自身免受氧化损伤，确保能量生产线能稳定运行。这形成了一个自我强化的循环：足够的能量支持正常的生理功能，减少异常代谢产物的堆积；而良好的抗氧化防御又保护了能量生产设施本身。

**适合这些生活情境的你**
如果你年过三十，开始关注长期健康储备，感觉恢复能力不如年轻时；如果你的生活节奏快，精神压力大，时常感到身心俱疲；如果你正在进行规律运动，希望支持运动后的恢复和细胞修复；或者你单纯希望为心脏这个终生劳作的引擎提供一些基础维护，那么补充直接可利用的辅酶Q10可能是一个贴合需求的选择。它关注的是能量产生的根源，而非暂时的刺激。

**纯净与成分的完整性**
胶囊内只有泛醇和原生有机椰子油。胶囊外壳由植物源的羟丙甲纤维素构成。我们避开了所有不必要的添加：无麸质、无乳糖、无大豆、无淀粉、无酵母、无防腐剂、无人造色素与香精，且为非转基因。成分列表简洁透明，让你摄入的每一粒都物尽其用。

**健康管理者与搭配方案**
对于健康管理者而言，泛醇Q10是支持细胞代谢基础的核心营养素之一。它可以与镁、B族维生素等共同构成能量代谢的支持方案，因为镁是ATP利用的关键矿物质，B族维生素是能量转化过程中的辅酶。在关注心血管健康、神经支持或整体抗衰老的方案中，它也是一个基础且关键的组成部分。建议根据个体的具体健康状况和目标进行搭配。

**用法与剂量**
建议每日服用1至3粒胶囊，随餐服用，并用足量水送服。也可以打开胶囊，将内容物与少量食物或液体混合服用。初始可以从较低剂量开始，根据身体的感受和健康管理者的建议调整。一瓶60粒胶囊，可供20至60日用量。

**重要提示**
请勿超过推荐的每日食用量。膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**泛醇**
泛醇是辅酶Q10的还原态和生物活性形式。它在人体内天然存在，尤其是在细胞线粒体内膜上浓度最高。它的核心作用是作为电子传递链中的关键载体，直接参与三磷酸腺苷的合成，这是细胞能量的直接来源。同时，泛醇本身是一种强大的脂溶性抗氧化剂，能有效中和细胞膜和脂蛋白中的自由基。本产品采用可直接利用的泛醇形式，避免了从泛醌转化的步骤，生物利用度更高。它非常适合那些关注细胞能量生产基础效率、希望为高耗能器官（如心脏）提供直接支持，或自身可能因年龄、压力导致辅酶Q10合成与转化效率下降的人群。在配方中，它由有机椰子油伴随，确保了高效的吸收和递送。

**原生有机椰子油（载体）**
这是一种从新鲜椰子肉中冷压提取的天然油脂，保留了其天然的养分。在本配方中，它主要作为载体油。由于泛醇是脂溶性的，与脂肪一同摄入可以显著提高其在肠道中的吸收率和生物利用度。椰子油中的中链脂肪酸更容易被身体吸收和代谢，能高效地将泛醇运送至淋巴系统，进而进入血液循环。它不仅仅是惰性的填充物，而是主动促进活性成分吸收的功能性组成部分。选择有机来源，也确保了载体本身的纯净度，避免了农药残留等不必要的负担。`},en:{label:`Mannayan Q10 Aktiv+
Cellular Energy, Directly Usable
• Supports Cellular Energy Production • Protects Cells from Oxidative Stress • Maintains Heart Health • Promotes Overall Vitality
60 Capsules | 30 mg Ubiquinol Q10 per Capsule
Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Non-GMO, Suitable for Vegetarians`,short_description:`Do you feel your body's energy levels aren't what they used to be, struggling to recover even after rest? Daily stress and the natural aging process can reduce the efficiency of your cellular mitochondria – the core sites of energy production in your body.

Mannayan Q10 Aktiv+ provides Coenzyme Q10 in the form of ubiquinol. This is the active, ready-to-use form your body can utilize directly, requiring no additional conversion. It participates directly in the key processes of cellular energy production, acting like premium, ready-made fuel for your body's 'power plants'.

Our formula contains only the essential active ingredient and a natural carrier, using virgin organic coconut oil to aid absorption. It's free from common allergens and artificial additives, ensuring you receive pure support. Simply take 1-3 capsules daily with a meal to support your body's foundational energy systems.`,long_description:`The fatigue you feel at the end of the day might be more than just a need for sleep. That deep, pervasive weariness from within, or a sense of dwindling mental and physical reserves, is often a signal that your cellular energy metabolism needs attention. Coenzyme Q10 is a core player in the energy production line of every human cell, especially abundant in high-energy-demand organs like the heart and brain. As we age or face sustained stress, the body's own synthesis may fall short of demand.

**Food-State Technology & Directly Usable Form**
Mannayan Q10 Aktiv+ uses ubiquinol as its active ingredient. This is the reduced, active form in which Coenzyme Q10 functions within the body. Unlike the more common ubiquinone form, ubiquinol does not require complex internal conversion steps; it can be directly absorbed and utilized by the body. This is particularly suitable for individuals whose own conversion efficiency may already be impacted. The product uses virgin organic coconut oil as a carrier – a natural, high-quality fat that effectively promotes the absorption of fat-soluble ubiquinol, mimicking its natural state within food.

**A Complete Support System**
This product is designed to provide direct, efficient support. Ubiquinol enters the cellular mitochondria directly, participating in the production of adenosine triphosphate (ATP) – the energy currency for all bodily activities. Simultaneously, as a fat-soluble antioxidant, it helps protect delicate cell membranes and the mitochondria themselves from oxidative damage, ensuring the energy production line operates stably. This creates a self-reinforcing cycle: sufficient energy supports normal physiological function, reducing the accumulation of abnormal metabolic byproducts, while robust antioxidant defenses protect the energy production facilities themselves.

**For You in These Life Situations**
If you are over thirty and beginning to focus on long-term health reserves, feeling your recovery capacity isn't what it was in youth; if your life is fast-paced with significant mental stress, often leaving you feeling physically and mentally drained; if you engage in regular exercise and wish to support post-workout recovery and cellular repair; or if you simply want to provide some foundational maintenance for your heart – that lifelong engine – then supplementing with directly usable Coenzyme Q10 may be a fitting choice. It focuses on the root of energy production, not temporary stimulation.

**Purity & Ingredient Integrity**
Inside the capsule, you'll find only ubiquinol and virgin organic coconut oil. The capsule shell is made from plant-derived hydroxypropyl methylcellulose. We have avoided all unnecessary additives: it is gluten-free, lactose-free, soy-free, starch-free, yeast-free, preservative-free, and free from artificial colors and flavors, and is non-GMO. The ingredient list is concise and transparent, ensuring every capsule you take delivers its full intended benefit.

**For Health Managers & Combination Strategies**
For health managers, ubiquinol Q10 is one of the core nutrients supporting the foundation of cellular metabolism. It can be combined with magnesium, B vitamins, and others to form a comprehensive energy metabolism support plan, as magnesium is a key mineral for ATP utilization and B vitamins act as coenzymes in energy conversion processes. It also serves as a foundational and crucial component in protocols focused on cardiovascular health, neurological support, or overall healthy aging. Combinations should be tailored based on individual health status and goals.

**Usage & Dosage**
The recommended intake is 1 to 3 capsules daily, taken with a meal and swallowed with plenty of water. Capsules may also be opened, and the contents mixed with a small amount of food or liquid. It's advisable to start with a lower dose and adjust based on personal experience and the advice of your health manager. One bottle of 60 capsules provides a 20 to 60-day supply.

**Important Notes**
Do not exceed the recommended daily intake. Food supplements are not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal under the cap is missing or broken.`,ingredient_reference:`**Ubiquinol**
Ubiquinol is the reduced, biologically active form of Coenzyme Q10. It occurs naturally in the human body, with the highest concentrations found in the inner membranes of cellular mitochondria. Its core function is to act as a crucial carrier in the electron transport chain, directly participating in the synthesis of adenosine triphosphate (ATP) – the direct source of cellular energy. Simultaneously, ubiquinol itself is a potent fat-soluble antioxidant, effectively neutralizing free radicals within cell membranes and lipoproteins. This product uses the directly utilizable ubiquinol form, bypassing the conversion step from ubiquinone, resulting in higher bioavailability. It is particularly suitable for individuals focused on the foundational efficiency of cellular energy production, seeking to provide direct support for high-energy-demand organs (like the heart), or whose own Coenzyme Q10 synthesis and conversion efficiency may be declining due to age or stress. In this formula, it is accompanied by organic coconut oil, ensuring efficient absorption and delivery.

**Virgin Organic Coconut Oil (Carrier)**
This is a natural oil cold-pressed from fresh coconut meat, retaining its natural nutrients. In this formula, it primarily serves as a carrier oil. Since ubiquinol is fat-soluble, consuming it alongside fat significantly increases its absorption rate in the intestines and its bioavailability. The medium-chain fatty acids in coconut oil are more easily absorbed and metabolized by the body, efficiently transporting ubiquinol into the lymphatic system and subsequently into the bloodstream. It is not merely an inert filler but an active, functional component that promotes the absorption of the active ingredient. Choosing an organic source also ensures the purity of the carrier itself, avoiding unnecessary burdens like pesticide residues.`}}},{name:"Mannayan REG + (60 Kapseln)",url:"https://mannayan.com/Mannayan-REG-60-Kapseln/010083",price:["35,50 €"],product_number:"010083",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/70/ec/be/1625822831/Reg%2B.jpg?ts=1625822837",image_local:"images/Reg%2B.jpg",content:{cn:{label:`Mannayan REG+ 细胞能量再生配方

支持线粒体能量生成
促进细胞抗氧化防御
维护神经细胞健康
助力认知清晰度

60粒胶囊 | 每日1粒
素食胶囊 | 无麸质、无乳糖、无大豆、无人工添加剂`,short_description:`你是否感觉日常的精力消耗后，恢复起来不如从前？思维有时像蒙上了一层薄雾，不够清晰敏锐？现代生活的节奏和压力，无形中消耗着我们细胞层面的能量储备。

Mannayan REG+ 是一款专注于细胞能量代谢与保护的复合配方。它通过提供支持线粒体功能的特定营养素和植物提取物，旨在从细胞层面为身体的能量生成系统提供支持，并帮助应对氧化压力。

配方中的N-乙酰左旋肉碱、α-硫辛酸和辅酶Q10协同工作，参与细胞内的能量转化过程。N-乙酰半胱氨酸和银杏、迷迭香提取物则提供了抗氧化支持。这不仅仅是为身体“加油”，更是为了维护能量工厂的良好运行环境。

每瓶含60粒素食胶囊，建议每日服用1粒。配方纯净，适合素食者，且不含麸质、乳制品、大豆、酵母、淀粉、糖及人工色素、香料与防腐剂。`,long_description:`当持续的疲劳感挥之不去，注意力像电量不足一样难以集中，或是感觉大脑的“处理器”速度变慢时，这常常不仅仅是睡眠不足或压力过大。这些感受可能指向更深层的需求——细胞，特别是那些高耗能细胞（如神经细胞）的能量代谢与保护机制，需要得到细致的支持。

**食物态技术与递送**
配方中采用了生物利用度更高的成分形式。例如，使用N-乙酰左旋肉碱和N-乙酰半胱氨酸（NAC），这些乙酰化形式有助于成分更有效地穿过细胞膜，被身体利用。植物提取物如银杏叶提取物采用标准化的50:1浓缩比例，迷迭香提取物为5:1，确保了活性成分的含量与一致性。

**一个完整的支持体系**
Mannayan REG+ 的核心理念在于协同作用。N-乙酰左旋肉碱作为载体，将脂肪酸送入线粒体这座“能量工厂”进行燃烧。α-硫辛酸在此过程中扮演着双重角色：它本身就是一种强大的抗氧化剂，同时也能再生体内其他抗氧化剂（如谷胱甘肽、维生素C和E）。NAC是合成谷胱甘肽的关键前体，而谷胱甘肽是细胞内最重要的抗氧化剂之一。辅酶Q10直接参与线粒体能量生产链中的电子传递。银杏叶提取物支持健康的脑部血液循环和认知功能，迷迭香提取物则以其多酚类化合物提供额外的抗氧化保护。这些成分并非孤立工作，它们共同构建了一个从能量原料输送、产能过程支持到抗氧化防御的多层次网络。

**适合的人群**
这款配方适合那些生活节奏快、用脑频繁，感觉自身精力储备和思维清晰度面临挑战的成年人。也适用于关注长期健康，希望从细胞代谢层面为身体提供基础支持的人士。对于因饮食选择或敏感体质而需要纯净配方的素食者、无麸质或无乳糖饮食者，它也是一个合适的选择。

**纯净与成分完整性**
我们坚信，补充剂应该补充营养，而非不必要的添加物。因此，REG+配方不含小麦、麸质、乳制品（乳糖）、糖、淀粉、酵母、大豆、防腐剂以及任何人工色素和香料。胶囊由植物纤维素制成，适合素食者和纯素者。生产过程中不使用转基因原料。

**用法与剂量**
建议每日服用1粒胶囊，随足量液体吞服。最佳服用时间可根据个人作息安排，例如随早餐或午餐服用。对于特定健康管理需求，建议遵循专业健康顾问的个性化指导。

**重要提示**
本产品为膳食补充剂，不能替代均衡多样的饮食和健康的生活方式。孕妇、哺乳期妇女以及18岁以下儿童和青少年不建议使用。请勿超过推荐每日剂量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**N-乙酰左旋肉碱**
N-乙酰左旋肉碱是左旋肉碱的一种生物利用度更高的形式。它在体内主要负责将长链脂肪酸运输到线粒体内部进行β-氧化，从而产生能量。这种乙酰化形式使其更容易穿过血脑屏障，为脑细胞提供能量支持。它特别适合那些寻求认知功能支持和整体能量代谢提升的人群。在配方中，它与α-硫辛酸和辅酶Q10协同，优化线粒体的能量生产效率。

**α-硫辛酸**
α-硫辛酸是一种兼具水溶性和脂溶性的独特抗氧化剂。它不仅能直接中和自由基，还能再生体内的其他关键抗氧化剂，如谷胱甘肽、维生素C和维生素E。此外，它在线粒体能量代谢中也扮演辅助角色。这种多功能的特性使其成为细胞防御系统的核心成员。它适合关注全面抗氧化保护和代谢健康的人群。在REG+配方中，它与NAC共同支持谷胱甘肽系统，并辅助能量代谢过程。

**N-乙酰半胱氨酸（NAC）**
NAC是氨基酸半胱氨酸的前体，是合成谷胱甘肽最直接的限制性原料。谷胱甘肽是细胞内最主要的抗氧化剂，对于解毒和抗氧化防御至关重要。通过补充NAC，有助于维持细胞内充足的谷胱甘肽水平。它适合那些希望支持身体自然解毒机制和增强抗氧化防御能力的人。在配方中，它为α-硫辛酸再生谷胱甘肽的循环提供原料基础，是抗氧化网络的关键一环。

**银杏叶提取物（50:1）**
银杏叶提取物源自银杏树，采用标准化工艺浓缩至50:1，确保黄酮苷和萜内酯等活性成分的含量。它传统上用于支持健康的脑部血液循环和认知功能，如记忆力和注意力。其作用机制与改善微循环和抗氧化特性有关。适合那些在高压或高脑力消耗下寻求认知支持的人群。在配方中，它与其他成分配合，从血液循环和抗氧化角度为神经细胞健康提供多维度支持。

**辅酶Q10**
辅酶Q10是一种存在于人体每个细胞中的脂溶性物质，尤其在线粒体内膜含量丰富。它是细胞能量（ATP）生成过程中电子传递链不可或缺的组成部分。随着年龄增长，体内辅酶Q10的水平可能下降。补充辅酶Q10直接支持线粒体的能量生产功能。它对于关注细胞能量代谢效率和整体活力的人群尤为重要。在配方中，它与N-乙酰左旋肉碱和α-硫辛酸紧密协作，共同优化线粒体这一能量中心的工作效率。

**迷迭香提取物（5:1）**
迷迭香提取物浓缩自迷迭香叶，富含多酚类化合物，如鼠尾草酸和迷迭香酸，具有显著的抗氧化特性。这些化合物有助于保护细胞免受氧化应激的损伤。迷迭香的抗氧化作用广泛，支持整体细胞的健康维护。它适合作为综合抗氧化防御方案的一部分。在REG+配方中，它与其他抗氧化成分（如α-硫辛酸、NAC）形成协同网络，为细胞提供更广泛的保护。`},en:{label:`Mannayan REG+ Cellular Energy Regeneration Formula

Supports Mitochondrial Energy Production
Promotes Cellular Antioxidant Defense
Maintains Neuronal Cell Health
Supports Cognitive Clarity

60 Capsules | 1 Capsule Daily
Vegetarian Capsules | Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives`,short_description:`Do you feel like your energy doesn't bounce back as easily as it used to after daily exertion? Does your thinking sometimes feel foggy, lacking its former sharpness? The pace and pressures of modern life can deplete our energy reserves at a cellular level.

Mannayan REG+ is a comprehensive formula focused on cellular energy metabolism and protection. It aims to support the body's energy production systems at the cellular level and help manage oxidative stress by providing specific nutrients and botanical extracts that support mitochondrial function.

N-Acetyl L-Carnitine, Alpha-Lipoic Acid, and Coenzyme Q10 in the formula work synergistically, participating in the cellular energy conversion process. N-Acetylcysteine, along with Ginkgo and Rosemary extracts, provides antioxidant support. This is more than just 'refueling' the body; it's about maintaining a healthy operating environment for your cellular power plants.

Each bottle contains 60 vegetarian capsules, with a recommended dosage of 1 capsule daily. The formula is pure, suitable for vegetarians, and free from gluten, dairy, soy, yeast, starch, sugar, and artificial colors, flavors, or preservatives.`,long_description:`When persistent fatigue lingers, concentration feels like a low-battery warning, or your brain's 'processor' seems to slow down, it's often more than just lack of sleep or high stress. These sensations may point to a deeper need—the energy metabolism and protective mechanisms of your cells, particularly high-energy-demand cells like neurons, require nuanced support.

**Food-State Technology & Delivery**
The formula utilizes ingredients in more bioavailable forms. For example, it uses N-Acetyl L-Carnitine and N-Acetylcysteine (NAC); these acetylated forms help the components cross cell membranes more effectively for better utilization. Botanical extracts like Ginkgo Biloba Leaf Extract use a standardized 50:1 concentration ratio, and Rosemary Extract is a 5:1 ratio, ensuring consistent potency of active compounds.

**A Complete Support System**
The core philosophy of Mannayan REG+ is synergy. N-Acetyl L-Carnitine acts as a carrier, transporting fatty acids into the mitochondria—the cellular 'power plants'—for combustion. Alpha-Lipoic Acid plays a dual role here: it is itself a potent antioxidant and can also regenerate other antioxidants in the body (like glutathione, and vitamins C and E). NAC is a key precursor for synthesizing glutathione, one of the cell's most crucial antioxidants. Coenzyme Q10 directly participates in the electron transport chain within mitochondrial energy production. Ginkgo Biloba Extract supports healthy cerebral blood flow and cognitive function, while Rosemary Extract provides additional antioxidant protection through its polyphenolic compounds. These ingredients do not work in isolation; together, they build a multi-layered network supporting everything from energy substrate delivery and production process support to antioxidant defense.

**Who It's For**
This formula is suitable for adults with fast-paced lifestyles and high mental demands who feel their energy reserves and mental clarity are being challenged. It's also for those focused on long-term health, wishing to provide foundational support for the body at the cellular metabolism level. It is an appropriate choice for vegetarians, or those on gluten-free or lactose-free diets, who require pure formulas due to dietary choices or sensitivities.

**Purity & Ingredient Integrity**
We firmly believe that supplements should supplement nutrition, not unnecessary additives. Therefore, the REG+ formula contains no wheat, gluten, dairy (lactose), sugar, starch, yeast, soy, preservatives, or any artificial colors or flavors. The capsules are made from plant cellulose, suitable for vegetarians and vegans. No genetically modified organisms are used in the manufacturing process.

**Usage & Dosage**
Take 1 capsule daily with a sufficient amount of liquid. The optimal time can be adjusted to your personal schedule, such as with breakfast or lunch. For specific health management needs, personalized guidance from a qualified health advisor is recommended.

**Important Information**
This product is a dietary supplement and is not intended to replace a varied, balanced diet and a healthy lifestyle. Not recommended for pregnant or breastfeeding women, or for children and adolescents under 18 years of age. Do not exceed the recommended daily dose. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**N-Acetyl L-Carnitine**
N-Acetyl L-Carnitine is a more bioavailable form of L-Carnitine. In the body, it is primarily responsible for transporting long-chain fatty acids into the mitochondria for beta-oxidation, thereby producing energy. This acetylated form allows it to cross the blood-brain barrier more easily, providing energy support for brain cells. It is particularly suitable for those seeking cognitive function support and enhanced overall energy metabolism. In the formula, it works synergistically with Alpha-Lipoic Acid and Coenzyme Q10 to optimize mitochondrial energy production efficiency.

**Alpha-Lipoic Acid**
Alpha-Lipoic Acid is a unique antioxidant with both water- and fat-soluble properties. It not only directly neutralizes free radicals but also regenerates other key antioxidants in the body, such as glutathione and vitamins C and E. Furthermore, it plays a supportive role in mitochondrial energy metabolism. This multifunctional nature makes it a core member of the cellular defense system. It is suitable for individuals focused on comprehensive antioxidant protection and metabolic health. In the REG+ formula, it works with NAC to support the glutathione system and assists in the energy metabolism process.

**N-Acetylcysteine (NAC)**
NAC is a precursor to the amino acid cysteine and is the most direct, rate-limiting raw material for synthesizing glutathione. Glutathione is the cell's primary antioxidant, crucial for detoxification and antioxidant defense. Supplementing with NAC helps maintain adequate intracellular glutathione levels. It is suitable for those wishing to support the body's natural detoxification mechanisms and enhance antioxidant defense. In the formula, it provides the foundational material for Alpha-Lipoic Acid's glutathione regeneration cycle, serving as a key link in the antioxidant network.

**Ginkgo Biloba Leaf Extract (50:1)**
Ginkgo Biloba Leaf Extract is derived from the Ginkgo tree, concentrated to a standardized 50:1 ratio to ensure consistent levels of active components like flavonoid glycosides and terpene lactones. It is traditionally used to support healthy cerebral blood circulation and cognitive functions such as memory and focus. Its mechanisms of action are related to improving microcirculation and its antioxidant properties. It is suitable for individuals seeking cognitive support under high-pressure or high mental-demand situations. In the formula, it works with other ingredients to provide multi-dimensional support for neuronal health from the perspectives of blood circulation and antioxidant activity.

**Coenzyme Q10**
Coenzyme Q10 is a fat-soluble substance present in every cell of the human body, particularly abundant in the inner mitochondrial membrane. It is an indispensable component of the electron transport chain in the cellular energy (ATP) production process. Levels of Coenzyme Q10 in the body may decline with age. Supplementing with Coenzyme Q10 directly supports mitochondrial energy production function. It is especially important for individuals focused on cellular energy metabolism efficiency and overall vitality. In the formula, it works closely with N-Acetyl L-Carnitine and Alpha-Lipoic Acid to collectively optimize the efficiency of the mitochondria, the cellular energy centers.

**Rosemary Extract (5:1)**
Rosemary Extract is concentrated from rosemary leaves and is rich in polyphenolic compounds like carnosic acid and rosmarinic acid, which possess significant antioxidant properties. These compounds help protect cells from oxidative stress damage. Rosemary's antioxidant effects are broad, supporting overall cellular health maintenance. It is suitable as part of a comprehensive antioxidant defense strategy. In the REG+ formula, it forms a synergistic network with other antioxidant ingredients (like Alpha-Lipoic Acid and NAC) to provide broader protection for cells.`}}},{name:"Mannayan Roter Reis+ (90 Kapsel)",url:"https://mannayan.com/Mannayan-Roter-Reis-90-Kapsel/011356",price:["37,90 €"],product_number:"011356",quantity:["90 Kapseln"],image_url:"https://mannayan.com/media/ce/e0/e1/1766137461/Roter-Resi%2B2025.jpg?ts=1766137461",image_local:"images/Roter-Resi%2B2025.jpg",content:{cn:{label:`Mannayan 红曲米+ (90粒胶囊)
自然红曲精华与辅酶Q10
• 支持健康胆固醇水平
• 提供心脏代谢支持
• 含天然来源Monacolin K
• 协同配方：红曲米、辅酶Q10、山楂
每日1粒，随餐服用
90粒装
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、适合素食者`,short_description:`当日常饮食和活动似乎不足以维持理想的胆固醇水平时，身体会发出信号。你可能感觉精力不如从前，或者体检报告上的数字让你开始关注心血管系统的长期健康。

Mannayan 红曲米+ 采用了一种古老的智慧——红曲米，它通过天然发酵产生有益的活性成分。配方中特别加入了辅酶Q10和山楂提取物，它们共同工作，不仅关注单一指标，更着眼于支持整个能量代谢和循环系统的平衡。

每日只需一粒，随餐服用即可。这一粒胶囊含有1.5毫克来自红曲米的天然Monacolin K，并协同20毫克辅酶Q10与20毫克山楂提取物。

产品采用纯净配方，不含麸质、乳糖、大豆、人工色素或防腐剂，胶囊由植物纤维素制成，适合素食者及对多种常见过敏原敏感的人群。`,long_description:`你是否在寻求一种自然的方式来支持已经处于健康范围内的胆固醇水平？当生活方式调整需要额外的助力时，一个源自传统、经过现代科学审视的配方或许能提供你所需要的支持。

**食物态技术与传统发酵**
红曲米并非普通的米，它是大米经过特定红曲霉菌（Monascus purpureus）发酵后的产物。这一古老的发酵工艺，在亚洲已有数百年的应用历史，其目的是为了产生一系列天然化合物。Mannayan 红曲米+ 中的核心成分Monacolin K，便是这一自然发酵过程的产物，我们以最接近其食物本源的形式将其呈现。

**一个完整的协同支持体系**
这个配方的智慧在于协同。红曲米提供了基础支持。然而，身体的能量代谢是一个整体，因此我们加入了辅酶Q10。辅酶Q10是细胞能量产生过程中的关键辅因子，尤其在能量需求高的器官中不可或缺。同时，配方中的山楂提取物带来了传统的植物智慧，它常用于支持循环系统的健康功能。这三者并非孤立工作，而是构成了一个相互支持的三角：红曲米提供特定路径的支持，辅酶Q10助力能量代谢，山楂则关注系统的整体平衡，共同致力于维持心血管系统的健康状态。

**适合人群**
这款产品适合那些饮食已相对均衡、有规律运动习惯，但仍在寻找一种自然方式为心血管健康提供额外支持的成年人。它适用于关注体检报告中相关指标、希望从根本着手维持长期健康平衡的人群。请注意，它不适用于孕妇、哺乳期妇女、18岁以下青少年、70岁以上长者，或正在服用其他降胆固醇产品的人士。

**纯净与成分完整性**
我们相信，补充剂应该补充营养，而非不必要的添加物。因此，该配方坚决排除了麸质、乳糖、大豆、淀粉、酵母、人工色素、香料和防腐剂。胶囊外壳由植物纤维素（羟丙甲纤维素）制成，确保产品纯素且易于消化。每一批产品都遵循严格标准，确保活性成分的含量与标示一致。

**健康管理者与经销商：临床背景与方案搭配**
对于健康管理从业者而言，这是一个基于传统发酵食品和细胞营养学的支持方案。红曲米中的Monacolin K有广泛的科学研究背景。从业者可能会将本品作为全面健康管理计划的一部分，该计划通常还包括饮食建议（如增加膳食纤维、健康脂肪）、运动指导和压力管理。它可与支持整体代谢健康的其他营养素（如Omega-3脂肪酸、维生素D）搭配，但绝不与同类红曲米产品或处方药联合使用。

**用法与剂量**
建议每日服用1粒胶囊，随餐服用，以促进吸收。每粒提供1.5毫克来自红曲米的Monacolin K。根据欧盟法规，每日从红曲米中摄入的Monacolin K不应超过3毫克。一瓶含90粒胶囊，为期约三个月的用量。

**重要提示**
本品为膳食补充剂，不能替代药物或均衡多样的饮食。请勿超过推荐每日剂量。如果您有任何健康状况、正在怀孕或哺乳、正在服用任何药物（尤其是降胆固醇药物），或在服用期间出现任何不适（如肌肉疼痛或无力），请在食用前咨询医生。请将产品置于儿童无法触及的阴凉干燥处保存。`,ingredient_reference:`**红曲米提取物（含Monacolin K）**
红曲米是通过红曲霉菌发酵大米制成的传统食品。在发酵过程中，自然产生了多种化合物，其中Monacolin K是研究最为广泛的成分之一。它在体内通过特定机制发挥作用，有助于维持已经处于正常范围内的胆固醇水平。本品采用发酵红曲米粉末，每粒提供100毫克红曲米提取物，其中标准化含有1.5毫克Monacolin K。它适合关注心血管代谢健康平衡的成年人。在配方中，它为辅酶Q10和山楂的协同作用提供了基础支持框架。

**辅酶Q10**
辅酶Q10是一种存在于人体每个细胞中的脂溶性物质，尤其在心脏、肝脏和肾脏中浓度较高。它在细胞能量（ATP）的生产过程中扮演着不可或缺的角色，是线粒体电子传递链的关键组成部分。随着年龄增长或在某些情况下，体内的辅酶Q10水平可能会下降。本品每粒提供20毫克辅酶Q10，以支持细胞，尤其是高能量需求细胞的正常代谢功能。它非常适合感到精力需要支持或关注整体能量代谢的人群。在此配方中，辅酶Q10弥补了红曲米可能对体内辅酶Q10代谢产生的潜在影响，确保细胞能量生产不受干扰，实现了根本性的支持。

**山楂提取物**
山楂是一种在传统草药学中常用于支持循环系统和心脏功能的植物果实。它含有丰富的抗氧化成分，如原花青素和黄酮类化合物。这些成分有助于对抗氧化应激，并支持血管系统的健康功能与弹性。本品每粒提供20毫克标准化的山楂浆果提取物粉末。它适合那些寻求温和循环系统支持、注重整体平衡而非单一指标的人群。在配方中，山楂提取物带来了广泛的植物抗氧化支持，与红曲米的针对性作用和辅酶Q10的能量代谢支持相辅相成，共同促进心血管系统的整体健康与韧性。`},en:{label:`Mannayan Red Yeast Rice+ (90 Capsules)
Natural Red Yeast Rice Extract with CoQ10
• Supports Healthy Cholesterol Levels
• Provides Cardiometabolic Support
• Contains Naturally-Sourced Monacolin K
• Synergistic Formula: Red Yeast Rice, CoQ10, Hawthorn
Take 1 capsule daily with a meal
90 Capsules
Clean Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`When daily diet and activity don't seem enough to maintain ideal cholesterol levels, your body sends signals. You might feel less energetic than before, or numbers on a health report might prompt you to focus on the long-term health of your cardiovascular system.

Mannayan Red Yeast Rice+ utilizes an ancient wisdom—red yeast rice, which produces beneficial active components through natural fermentation. The formula is specially enhanced with Coenzyme Q10 and Hawthorn Extract. They work together, not just focusing on a single metric, but aiming to support the balance of the entire energy metabolism and circulatory system.

Just one capsule daily, taken with a meal, is all it takes. This single capsule contains 1.5 mg of natural Monacolin K from red yeast rice, synergized with 20 mg of CoQ10 and 20 mg of Hawthorn Extract.

The product features a clean formula, free from gluten, lactose, soy, artificial colors, or preservatives. The capsules are made from plant cellulose, making it suitable for vegetarians and those sensitive to many common allergens.`,long_description:`Are you seeking a natural way to support cholesterol levels already within a healthy range? When lifestyle adjustments need an extra boost, a formula rooted in tradition and examined by modern science may offer the support you need.

**Food-State Technology and Traditional Fermentation**
Red yeast rice is not ordinary rice; it's the product of rice fermented with a specific red yeast mold (Monascus purpureus). This ancient fermentation process, with a history of hundreds of years of use in Asia, aims to produce a range of natural compounds. The core component Monacolin K in Mannayan Red Yeast Rice+ is a product of this natural fermentation process, presented in a form closest to its food-based origin.

**A Complete Synergistic Support System**
The wisdom of this formula lies in synergy. Red yeast rice provides foundational support. However, the body's energy metabolism is a whole, so we added Coenzyme Q10. CoQ10 is a crucial cofactor in cellular energy production, especially indispensable in organs with high energy demands. Simultaneously, the Hawthorn Extract in the formula brings traditional botanical wisdom, commonly used to support the healthy function of the circulatory system. These three do not work in isolation but form a mutually supportive triangle: red yeast rice provides support for a specific pathway, CoQ10 aids energy metabolism, and Hawthorn focuses on the overall balance of the system, working together to help maintain the health of the cardiovascular system.

**Suitable For**
This product is suitable for adults who already maintain a relatively balanced diet and regular exercise habits but are still looking for a natural way to provide additional support for cardiovascular health. It is for those mindful of relevant metrics in health reports and who wish to address the fundamentals for maintaining long-term healthy balance. Please note, it is not suitable for pregnant or breastfeeding women, individuals under 18 or over 70 years old, or those currently taking other cholesterol-lowering products.

**Purity and Ingredient Integrity**
We believe supplements should supplement nutrition, not unnecessary additives. Therefore, this formula firmly excludes gluten, lactose, soy, starch, yeast, artificial colors, flavors, and preservatives. The capsule shell is made from plant cellulose (hydroxypropyl methylcellulose), ensuring the product is vegan and easy to digest. Every batch follows strict standards to ensure the content of active ingredients matches the label.

**For Health Practitioners & Distributors: Clinical Context and Protocol Pairing**
For health practitioners, this is a support protocol based on traditional fermented foods and cellular nutrition. The Monacolin K in red yeast rice has a broad background of scientific research. Practitioners may incorporate this product as part of a comprehensive health management plan, which typically also includes dietary advice (e.g., increasing dietary fiber, healthy fats), exercise guidance, and stress management. It can be paired with other nutrients that support overall metabolic health (such as Omega-3 fatty acids, Vitamin D) but should never be used concurrently with similar red yeast rice products or prescription medications.

**Usage & Dosage**
It is recommended to take 1 capsule daily with a meal to aid absorption. Each capsule provides 1.5 mg of Monacolin K from red yeast rice. According to EU regulations, the daily intake of Monacolin K from red yeast rice should not exceed 3 mg. One bottle contains 90 capsules, providing approximately a three-month supply.

**Important Notice**
This product is a dietary supplement and is not intended to replace medication or a balanced, varied diet. Do not exceed the recommended daily dose. If you have any health conditions, are pregnant or breastfeeding, are taking any medications (especially cholesterol-lowering drugs), or experience any discomfort (such as muscle pain or weakness) while taking this product, please consult a doctor before use. Store in a cool, dry place out of reach of children.`,ingredient_reference:`**Red Yeast Rice Extract (containing Monacolin K)**
Red yeast rice is a traditional food made by fermenting rice with red yeast mold. During fermentation, various compounds are naturally produced, with Monacolin K being one of the most extensively researched. It works in the body through a specific mechanism to help maintain cholesterol levels already within the normal range. This product uses fermented red yeast rice powder, with each capsule providing 100 mg of red yeast rice extract, standardized to contain 1.5 mg of Monacolin K. It is suitable for adults focused on the balance of cardiometabolic health. In the formula, it provides the foundational supportive framework for the synergistic action of CoQ10 and Hawthorn.

**Coenzyme Q10**
Coenzyme Q10 is a fat-soluble substance present in every cell of the human body, with particularly high concentrations in the heart, liver, and kidneys. It plays an indispensable role in the production of cellular energy (ATP), serving as a key component of the mitochondrial electron transport chain. Levels of CoQ10 in the body may decline with age or under certain conditions. Each capsule of this product provides 20 mg of Coenzyme Q10 to support normal metabolic function in cells, especially those with high energy demands. It is well-suited for individuals who feel their energy needs support or are focused on overall energy metabolism. In this formula, CoQ10 compensates for the potential impact red yeast rice may have on the body's CoQ10 metabolism, ensuring cellular energy production remains undisturbed, achieving fundamental support.

**Hawthorn Extract**
Hawthorn is a plant berry traditionally used in herbalism to support the circulatory system and heart function. It is rich in antioxidant components like proanthocyanidins and flavonoids. These components help combat oxidative stress and support the healthy function and elasticity of the vascular system. Each capsule of this product provides 20 mg of standardized Hawthorn Berry Extract powder. It is suitable for those seeking gentle circulatory system support, focusing on overall balance rather than a single metric. In the formula, Hawthorn Extract provides broad-spectrum botanical antioxidant support, complementing the targeted action of red yeast rice and the energy metabolism support of CoQ10, working together to promote the overall health and resilience of the cardiovascular system.`}}},{name:"Mannayan Selen",url:"https://mannayan.com/Mannayan-Selen/010084",price:["15,90 €"],product_number:"010084",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/97/7a/53/1624949327/Selen.jpg?ts=1624949340",image_local:"images/Selen.jpg",content:{cn:{label:`Mannayan 硒
支持内在防御系统
• 支持免疫系统功能
• 保护细胞免受氧化应激
• 支持甲状腺健康
• 促进正常认知功能
60粒胶囊 | 每日1粒 | 每粒含硒150微克 (200% NRV)
纯素 | 无麸质 | 无乳制品 | 无人工添加剂`,short_description:`你是否感觉身体需要一些额外的支持来应对日常的挑战？季节更替、繁忙的生活节奏，都可能让我们的内在平衡感受到压力。

硒是一种身体无法自行制造，但又至关重要的微量元素。它就像一个默默工作的守护者，参与体内多种关键酶的构成，帮助维持细胞的基本防御机制，支持免疫系统的正常运作。

Mannayan Selen 提供高生物利用度的硒，每日一粒，即可补充身体所需。配方纯净简单，不含任何不必要的添加物，适合素食者和有特定饮食需求的人群。`,long_description:`当身体感到疲惫，抵抗力似乎不如从前，或是你希望为日常健康打下更坚实的基础时，这可能是一个信号，提示我们需要关注那些支撑生命活力的基础营养素。硒，正是这样一位不可或缺的幕后支持者。

**食物态技术与递送**
本产品采用高纯度的硒酵母形式，这是一种经过天然培养过程将无机硒转化为有机形态的方式。这种形式被认为更接近食物中的天然存在状态，旨在提升身体对硒的识别与利用效率，使其能平顺地融入身体的代谢过程。

**完整支持体系**
硒的核心作用在于它作为多种重要抗氧化酶的必需组成部分。例如，它是谷胱甘肽过氧化物酶的关键成分，这种酶遍布全身细胞，负责中和代谢过程中产生的自由基，保护细胞膜和内部结构免受氧化损伤。同时，硒也支持甲状腺激素的正常代谢，这对维持整体的能量水平和代谢平衡至关重要。通过支持这些基础的生理功能，硒间接地为免疫系统的稳健运行和神经系统的健康创造了有利的内部环境。

**适合人群**
这款产品适合那些饮食中硒来源可能不足，或希望针对性补充这一特定营养素的人。例如，长期饮食结构较为单一的人士，生活在土壤硒含量较低地区的人群，或是处于特定生命阶段、对营养支持有更高需求的人。它也适合那些追求纯净补充方案，并遵循素食或需要避免麸质、乳制品的生活方式者。

**纯净与成分完整性**
配方极致简洁，仅包含有效成分硒酵母以及植物来源的纤维素胶囊壳和填充剂。我们刻意避免了所有常见的致敏原和人工添加剂，如麸质、乳糖、防腐剂、人工色素和香精。产品不含转基因成分，确保你摄入的只是你所需要的纯净营养。

**健康管理者与经销商：临床背景与方案搭配**
许多自然疗法医师和营养顾问将硒视为支持整体抗氧化防御网络和免疫平衡的基础营养素之一。在实践中，它常被纳入更广泛的健康支持方案，可能与维生素C、维生素E或锌等其他协同营养素搭配，以构建更全面的细胞保护体系。建议在专业健康管理者的指导下，根据个人具体情况制定综合方案。

**用法与剂量**
每日服用1粒胶囊，随足量水吞服。每粒提供150微克硒，达到营养素参考值（NRV）的200%。这一剂量旨在有效补充日常所需，并留有支持特定生理功能的余地。可根据专业建议调整。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**硒（来自硒酵母）**
硒是一种对人体健康至关重要的必需微量元素，身体自身无法合成，必须从饮食或补充剂中获取。它在体内主要作为多种抗氧化酶的活性中心，特别是谷胱甘肽过氧化物酶和硫氧还蛋白还原酶，这些酶是细胞抵御氧化损伤的第一道防线。本产品采用经过培养的硒酵母形式，这种有机形态的硒被认为具有较好的生物利用度和耐受性。它非常适合那些希望强化自身抗氧化防御系统、支持甲状腺功能健康以及维护免疫系统正常反应的人群。在配方中，硒作为单一核心成分，其作用聚焦而明确，直接支持身体的基础生化反应网络。`},en:{label:`Mannayan Selenium
Supports Your Inner Defense System
• Supports Immune System Function
• Protects Cells from Oxidative Stress
• Supports Thyroid Health
• Promotes Normal Cognitive Function
60 Capsules | 1 Capsule Daily | 150 mcg Selenium per Capsule (200% NRV)
Vegan | Gluten-Free | Dairy-Free | No Artificial Additives`,short_description:`Do you feel your body could use some extra support to meet daily challenges? Seasonal changes and a busy pace of life can put pressure on our internal balance.

Selenium is a trace mineral that the body cannot produce on its own, yet it is absolutely vital. It acts like a quiet guardian, participating in the formation of many key enzymes within the body. It helps maintain the cell's basic defense mechanisms and supports the normal functioning of the immune system.

Mannayan Selen provides highly bioavailable selenium. Just one capsule daily supplements your body's needs. The formula is pure and simple, free from any unnecessary additives, and suitable for vegetarians and those with specific dietary requirements.`,long_description:`When your body feels fatigued, your resilience seems lower than before, or you wish to build a stronger foundation for daily health, it may be a signal that we need to pay attention to the foundational nutrients that support vitality. Selenium is precisely such an indispensable, behind-the-scenes supporter.

**Food-State Technology and Delivery**
This product uses a high-purity selenium yeast form. This is a method where inorganic selenium is converted into an organic form through a natural culturing process. This form is considered closer to the natural state found in food, designed to enhance the body's recognition and utilization efficiency of selenium, allowing it to integrate smoothly into the body's metabolic processes.

**Comprehensive Support System**
The core role of selenium lies in its function as an essential component of several important antioxidant enzymes. For example, it is a key component of glutathione peroxidase, an enzyme found throughout the body's cells responsible for neutralizing free radicals produced during metabolism, protecting cell membranes and internal structures from oxidative damage. Simultaneously, selenium supports the normal metabolism of thyroid hormones, which is crucial for maintaining overall energy levels and metabolic balance. By supporting these fundamental physiological functions, selenium indirectly creates a favorable internal environment for the robust operation of the immune system and the health of the nervous system.

**Who It's For**
This product is suitable for those whose diet may be low in selenium sources or who wish to specifically supplement this particular nutrient. This includes individuals with a long-term monotonous diet, people living in areas with low selenium soil content, or those in specific life stages with higher nutritional support needs. It is also suitable for those seeking a pure supplementation regimen and following a vegetarian lifestyle or needing to avoid gluten and dairy.

**Purity and Ingredient Integrity**
The formula is extremely simple, containing only the active ingredient selenium yeast, along with a plant-derived cellulose capsule shell and filler. We have deliberately avoided all common allergens and artificial additives, such as gluten, lactose, preservatives, artificial colors, and flavors. The product contains no GMO ingredients, ensuring you ingest only the pure nutrition you need.

**For Health Practitioners & Distributors: Clinical Context & Protocol Synergy**
Many naturopathic doctors and nutritional consultants view selenium as one of the foundational nutrients for supporting the overall antioxidant defense network and immune balance. In practice, it is often incorporated into broader health support protocols, potentially paired with other synergistic nutrients like Vitamin C, Vitamin E, or zinc to build a more comprehensive cellular protection system. It is recommended to develop a comprehensive protocol under the guidance of a qualified health practitioner, tailored to individual circumstances.

**Usage & Dosage**
Take 1 capsule daily, swallowed with a sufficient amount of water. Each capsule provides 150 mcg of selenium, reaching 200% of the Nutrient Reference Value (NRV). This dosage is designed to effectively supplement daily needs while allowing room to support specific physiological functions. It can be adjusted based on professional advice.

**Important Information**
Food supplements should not be used as a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal under the cap is missing.`,ingredient_reference:`**Selenium (from Selenium Yeast)**
Selenium is an essential trace mineral crucial for human health. The body cannot synthesize it on its own; it must be obtained from diet or supplements. In the body, it primarily serves as the active center for several antioxidant enzymes, particularly glutathione peroxidase and thioredoxin reductase. These enzymes are the first line of defense for cells against oxidative damage. This product uses a cultured selenium yeast form. This organic form of selenium is considered to have good bioavailability and tolerability. It is well-suited for those wishing to strengthen their own antioxidant defense system, support healthy thyroid function, and maintain the normal response of the immune system. In the formula, selenium serves as the single core ingredient; its action is focused and clear, directly supporting the body's foundational biochemical reaction network.`}}},{name:"Mannayan SPEZIAL MULTI + (60 Tabletten)",url:"https://mannayan.com/Mannayan-SPEZIAL-MULTI-60-Tabletten/010088",price:["32,90 €"],product_number:"010088",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/86/44/c6/1625482700/Spezial%20Multi%2B.jpg?ts=1625482709",image_local:"images/Spezial%20Multi%2B.jpg",content:{cn:{label:`Mannayan SPEZIAL MULTI+
全面基础营养，食物态滋养
• 支持日常能量与代谢
• 促进免疫系统健康
• 维护神经系统功能
• 助力细胞保护与更新
• 专为高需求与敏感体质设计
60片 | 每日1-2片 | 无过敏原 | 素食认证 | 食物态技术`,short_description:`你是否感觉日常饮食难以面面俱到，身体发出的细微信号——比如容易疲惫、注意力不易集中、或是季节更替时格外敏感——提醒你需要更周全的基础支持？现代生活的节奏和饮食的局限，常常让我们无法从食物中获取足够且均衡的微量营养素。

Mannayan SPEZIAL MULTI+ 并非普通的复合维生素。它采用独特的食物态技术，将维生素与矿物质回归到它们天然的食物载体中，例如维生素C来自有机小橙子的果肉，β-胡萝卜素来自胡萝卜浓缩物。矿物质则被整合到由乳酸菌或营养酵母形成的食物基质里。这种方式让身体识别并利用这些营养，就像消化一份完整的食物一样自然高效。

它提供了一套广泛而平衡的维生素、矿物质和关键辅助因子组合，旨在从能量代谢、免疫防御、神经支持到抗氧化保护等多个层面，为身体的日常运转提供扎实的基础。配方特别考虑到了敏感体质的需求，剔除了常见的过敏原，适合包括孕妇、哺乳期女性在内的广泛人群。

每瓶60片，建议每日服用1至2片。配方纯净，不含麸质、乳制品、大豆、小麦，也无人工色素、香料或防腐剂，获得素食及纯素认证。`,long_description:`当身体长期处于高速运转却得不到细致入微的营养支持时，它不会立刻发出警报，而是通过一些温和却持续的信号来沟通：可能是午后挥之不去的倦意，难以像过去一样快速恢复精力；可能是面对工作压力时，注意力更容易涣散；又或者是在周围人都感冒时，你发现自己也格外容易中招。这些并非疾病的征兆，而是身体在提醒，它的基础营养储备可能需要更全面、更易吸收的补充。

**食物态技术：回归营养的本源形式**
Mannayan SPEZIAL MULTI+ 的核心在于其专利的食物态制备工艺。这项技术跳出了单纯合成与混合的范畴，转而向自然学习。维生素被重新引入到它们天然存在的食物浓缩物中——比如将β-胡萝卜素融入胡萝卜浓缩物，将维生素C融入柑橘类果肉。矿物质和微量元素则被精心嵌入到由保加利亚乳杆菌或富硒营养酵母酶解产生的食物基质内。这个过程不仅还原了营养素的天然形态，更重要的是，它保留了或重新配对了那些在天然食物中伴随营养素出现的生物类黄酮、转运蛋白和辅助因子。其结果就是，每一种营养素在进入人体时，都处在一个它熟悉的、完整的“食物环境”中，从而显著提高了生物利用度，让身体能够像处理真正食物一样轻松识别、吸收和利用。

**一个协同运作的完整营养体系**
这款配方构建的是一个相互支持的系统，而非营养成分的简单罗列。B族维生素作为一个家族协同工作，共同参与能量代谢的每一个关键步骤，将我们摄入的食物转化为可用的能量，同时维护神经系统的正常信号传导。其中，活性形式的维生素B6、B9（5-甲基四氢叶酸）和B12（甲基钴胺素）尤其关注同型半胱氨酸的健康代谢，这是心血管和神经系统长期健康的重要指标。维生素C和维生素E、β-胡萝卜素、锌、硒等共同组成了一道抗氧化网络，保护细胞免受氧化应激的损伤。维生素D3则与钙、镁、锌等矿物质协同，支持骨骼健康与免疫系统的正常功能。而配方中添加的β-1,3/1,6-葡聚糖和PABA（对氨基苯甲酸），进一步从免疫支持和细胞能量层面完善了这个体系。所有成分都以精心计算的比例存在，确保协同增效，避免单一营养素的过量摄入。

**适合那些对自身有细致要求的人**
它特别适合那些生活忙碌但依然希望为健康打下坚实基础的人；适合孕期和哺乳期的女性，为自身和宝宝提供额外的营养支持；也适合那些体质敏感，对常见食物过敏原（如麸质、乳制品、大豆）需要回避的人。无论是遵循素食或纯素饮食，还是关注肠道菌群平衡、对念珠菌敏感的人群，都能从这款纯净配方中找到安心与支持。

**对纯净与成分完整性的坚持**
纯净在这里意味着两重含义：一是配方的洁净，坚决排除麸质、乳糖、大豆、小麦、人工添加剂等不必要的成分；二是成分形式的完整，即坚持使用食物态的营养素。我们相信，补充剂不应给身体带来额外的识别负担或过敏风险，而应最大限度地模拟天然食物的友好状态。每一片 tablette 都承载着这份承诺。
**健康管理者与经销商：临床背景与方案搭配**
许多具有临床背景的健康管理者青睐此配方，因为它为更个性化的健康方案提供了一个可靠且中性的基础平台。其高生物利用度和低致敏性，使得它能够与针对特定健康目标的专项补充剂（如更高剂量的Omega-3、益生菌或草本提取物）良好搭配，而不会引起成分冲突或吸收竞争，为构建全面的个人营养支持方案奠定了基石。

**用法与剂量**
建议每日服用1至2片，随餐或餐后以足量水送服。具体剂量可根据个人需求、饮食状况或在专业健康顾问的指导下进行调整。坚持每日服用，有助于维持体内营养水平的稳定。

**重要提示**
本产品为膳食补充剂，不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若密封条破损，请勿食用。孕妇、哺乳期妇女或正在服用其他药物者，在使用前建议咨询医疗保健专业人员。`,ingredient_reference:`**维生素C（来自有机小橙子果肉）**
作为核心的水溶性抗氧化剂，维生素C参与胶原蛋白合成，支持免疫系统功能，并促进铁的吸收。采用来自有机小橙子果肉的天然形式，使其与柑橘类生物类黄酮共存，增强了在体内的稳定性和利用效率。对于经常感到疲劳、容易感冒或饮食中新鲜果蔬摄入不足的人群尤为重要。在配方中，它与维生素E、硒等协同再生，构成持续的抗氧化防线。

**B族维生素复合体（包括B1, B2, B3, B5, B6, B7, B9, B12）**
这是一个协同工作的能量代谢与神经系统支持家族。它们共同将碳水化合物、脂肪和蛋白质转化为细胞能量（ATP）。其中，**吡哆醛-5-磷酸（活性B6）**、**5-甲基四氢叶酸（活性叶酸）** 和 **甲基钴胺素（活性B12）** 这组活性形式，直接参与同型半胱氨酸的代谢循环，对心血管和认知健康具有长远意义。特别适合精神压力大、用脑过度或饮食精细的人群。

**维生素D3**
通常通过阳光照射在皮肤合成，对钙磷代谢、骨骼健康至关重要，并深度调节免疫系统功能。在室内生活时间长、日照不足的地区或季节，补充尤为必要。它与配方中的钙、镁、维生素K1协同，共同维护骨骼的强壮与健康。

**矿物质复合体（镁、锌、铁、硒等）**
这些矿物质均以高生物利用度的形式提供，并嵌入食物基质中。**镁（柠檬酸盐）** 是数百种酶的辅因子，支持肌肉神经功能与能量产生。**锌（柠檬酸盐）** 对免疫功能、皮肤健康和蛋白质合成不可或缺。**铁（富马酸盐）** 对于氧气的运输至关重要。**硒（来自富硒酵母）** 是谷胱甘肽过氧化物酶的关键成分，提供抗氧化保护。它们与维生素协同，确保代谢途径的顺畅运行。

**β-胡萝卜素（来自胡萝卜浓缩物）**
一种维生素A原，在体内根据需要转化为维生素A，支持视觉健康、皮肤黏膜完整性和免疫功能。以其天然的食物载体形式提供，安全性更高，并伴有胡萝卜中的其他植物营养素。与维生素C、E和硒共同保护细胞膜。

**维生素E（来自豌豆蛋白）**
主要的脂溶性抗氧化剂，保护细胞膜中的脂肪酸免受氧化损伤。源自天然植物，生物活性更高。它与维生素C形成经典的抗氧化循环，维生素C可以帮助再生被消耗的维生素E，延长其保护作用。

**β-1,3/1,6-葡聚糖（嵌入非活性酿酒酵母）**
一种源自酵母细胞壁的天然多糖，以其支持先天免疫系统功能而闻名。通过特定受体激活免疫细胞，增强身体的防御监视能力。以非活性酵母为载体，提供更完整的营养基质。适合希望在日常基础上温和支持免疫健康的人群。

**PABA（对氨基苯甲酸）**
常被视为B族维生素的一员，是叶酸分子的组成部分，参与蛋白质代谢和红细胞的生成。它本身也具有一定的抗氧化特性。在配方中，它与叶酸及其他B族维生素协同，支持细胞的能量与更新过程。`},en:{label:`Mannayan SPEZIAL MULTI+
Comprehensive Foundational Nutrition, Nourished in Food-State
• Supports Daily Energy & Metabolism
• Promotes Immune System Health
• Maintains Nervous System Function
• Aids Cellular Protection & Renewal
• Designed for High Needs & Sensitive Constitutions
60 Tablets | 1-2 Tablets Daily | Allergen-Free | Vegan Certified | Food-State Technology`,short_description:`Do you find it hard to cover all nutritional bases through diet alone? Do subtle signals from your body—like persistent fatigue, difficulty concentrating, or heightened sensitivity during seasonal changes—suggest you need more comprehensive foundational support? The pace of modern life and dietary limitations often prevent us from obtaining sufficient, balanced micronutrients from food.

Mannayan SPEZIAL MULTI+ is not an ordinary multivitamin. It utilizes unique food-state technology, returning vitamins and minerals to their natural food carriers. For example, vitamin C is sourced from organic small orange pulp, and beta-carotene from carrot concentrate. Minerals are integrated into a food matrix formed by lactic acid bacteria or nutritional yeast. This allows the body to recognize and utilize these nutrients as naturally and efficiently as digesting a whole food.

It provides a broad, balanced combination of vitamins, minerals, and key cofactors designed to offer solid foundational support for the body's daily functions—from energy metabolism and immune defense to nervous system support and antioxidant protection. The formula is specially crafted with sensitive constitutions in mind, excluding common allergens, and is suitable for a wide range of individuals, including pregnant and breastfeeding women.

Each bottle contains 60 tablets. The recommended dosage is 1 to 2 tablets daily. The formula is pure, free from gluten, dairy, soy, wheat, and contains no artificial colors, flavors, or preservatives. It is certified vegetarian and vegan.`,long_description:`When the body operates at high speed over the long term without meticulous nutritional support, it doesn't sound an immediate alarm. Instead, it communicates through gentle yet persistent signals: perhaps lingering afternoon fatigue, difficulty recovering energy as quickly as before; perhaps attention that scatters more easily under work pressure; or finding yourself particularly susceptible when everyone around you catches a cold. These are not signs of illness, but reminders from the body that its foundational nutrient reserves may need more comprehensive, more absorbable replenishment.

**Food-State Technology: Returning to Nutrition's Original Form**
The core of Mannayan SPEZIAL MULTI+ lies in its patented food-state preparation process. This technology moves beyond mere synthesis and blending, learning from nature instead. Vitamins are reintroduced into the food concentrates where they naturally occur—for example, integrating beta-carotene into carrot concentrate and vitamin C into citrus pulp. Minerals and trace elements are carefully embedded into a food matrix enzymatically produced by Lactobacillus bulgaricus or selenium-enriched nutritional yeast. This process not only restores nutrients to their natural forms but, more importantly, preserves or re-pairs the bioflavonoids, transport proteins, and cofactors that accompany nutrients in whole foods. The result is that each nutrient enters the body within a familiar, complete "food environment," significantly enhancing bioavailability and allowing the body to recognize, absorb, and utilize it as effortlessly as processing real food.

**A Complete, Synergistic Nutritional System**
This formula builds an interdependent system, not a simple list of nutrients. B vitamins work together as a family, participating in every key step of energy metabolism to convert the food we eat into usable energy while maintaining proper nervous system signaling. Among them, the active forms of vitamin B6, B9 (5-MTHF), and B12 (methylcobalamin) pay special attention to the healthy metabolism of homocysteine, an important marker for long-term cardiovascular and neurological health. Vitamin C, vitamin E, beta-carotene, zinc, selenium, and others form an antioxidant network that protects cells from oxidative stress. Vitamin D3 works synergistically with minerals like calcium, magnesium, and zinc to support bone health and normal immune system function. The addition of beta-1,3/1,6-glucan and PABA (para-aminobenzoic acid) further refines this system from the perspectives of immune support and cellular energy. All ingredients are present in carefully calculated ratios to ensure synergy and avoid excessive intake of any single nutrient.

**For Those with Meticulous Standards for Themselves**
It is especially suitable for those with busy lives who still wish to build a solid foundation for health; for pregnant and breastfeeding women seeking additional nutritional support for themselves and their babies; and for those with sensitive constitutions who need to avoid common food allergens like gluten, dairy, and soy. Whether following a vegetarian or vegan diet, or those concerned with gut flora balance or Candida sensitivity, can find reassurance and support in this pure formula.

**A Commitment to Purity and Ingredient Integrity**
Purity here has a dual meaning: first, the cleanliness of the formula, firmly excluding unnecessary ingredients like gluten, lactose, soy, wheat, and artificial additives; second, the integrity of ingredient forms, insisting on food-state nutrients. We believe supplements should not impose additional recognition burdens or allergy risks on the body but should maximally mimic the friendly state of natural foods. Each tablet carries this commitment.

**Health Practitioners & Distributors: Clinical Background & Protocol Pairing**
Many health practitioners with clinical backgrounds favor this formula because it provides a reliable, neutral foundational platform for more personalized health protocols. Its high bioavailability and low allergenicity allow it to pair well with targeted supplements for specific health goals (such as higher-dose Omega-3s, probiotics, or herbal extracts) without causing ingredient conflicts or absorption competition, laying the groundwork for building comprehensive personal nutritional support plans.

**Usage & Dosage**
The recommended dosage is 1 to 2 tablets daily, taken with or after a meal with plenty of water. The specific dose can be adjusted based on individual needs, dietary status, or under the guidance of a professional health advisor. Consistent daily use helps maintain stable nutrient levels in the body.

**Important Notes**
This product is a dietary supplement and is not intended to replace a balanced and varied diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal is broken. Pregnant or breastfeeding women, or individuals taking other medications, are advised to consult a healthcare professional before use.`,ingredient_reference:`**Vitamin C (from Organic Small Orange Pulp)**
A core water-soluble antioxidant, vitamin C is involved in collagen synthesis, supports immune system function, and promotes iron absorption. Sourced in its natural form from organic small orange pulp, it coexists with citrus bioflavonoids, enhancing its stability and utilization efficiency in the body. Particularly important for those who often feel fatigued, are prone to colds, or have insufficient intake of fresh fruits and vegetables in their diet. In the formula, it works synergistically with vitamin E, selenium, and others in a regenerative cycle, forming a continuous antioxidant defense line.

**B Vitamin Complex (including B1, B2, B3, B5, B6, B7, B9, B12)**
This is a synergistic family for energy metabolism and nervous system support. They work together to convert carbohydrates, fats, and proteins into cellular energy (ATP). Among them, the active forms—**Pyridoxal-5-Phosphate (active B6)**, **5-Methyltetrahydrofolate (active folate)**, and **Methylcobalamin (active B12)**—directly participate in the homocysteine metabolic cycle, holding long-term significance for cardiovascular and cognitive health. Especially suitable for those under significant mental stress, experiencing mental overexertion, or with refined diets.

**Vitamin D3**
Typically synthesized in the skin through sunlight exposure, it is crucial for calcium and phosphorus metabolism, bone health, and deeply regulates immune system function. Supplementation is particularly necessary for those with limited indoor sunlight exposure or during seasons/regions with insufficient sunshine. It works synergistically with calcium, magnesium, and vitamin K1 in the formula to maintain strong, healthy bones.

**Mineral Complex (Magnesium, Zinc, Iron, Selenium, etc.)**
These minerals are provided in highly bioavailable forms, embedded within a food matrix. **Magnesium (Citrate)** is a cofactor for hundreds of enzymes, supporting muscle and nerve function and energy production. **Zinc (Citrate)** is indispensable for immune function, skin health, and protein synthesis. **Iron (Fumarate)** is essential for oxygen transport. **Selenium (from Selenium-Enriched Yeast)** is a key component of glutathione peroxidase, providing antioxidant protection. They work in synergy with vitamins to ensure smooth metabolic pathways.

**Beta-Carotene (from Carrot Concentrate)**
A provitamin A, converted to vitamin A in the body as needed, supporting vision health, skin and mucous membrane integrity, and immune function. Provided in its natural food-carrier form, it offers higher safety and is accompanied by other phytonutrients from carrots. Works with vitamins C, E, and selenium to protect cell membranes.

**Vitamin E (from Pea Protein)**
A primary fat-soluble antioxidant that protects fatty acids in cell membranes from oxidative damage. Sourced from natural plants, it has higher biological activity. It forms a classic antioxidant cycle with vitamin C, where vitamin C helps regenerate depleted vitamin E, extending its protective effect.

**Beta-1,3/1,6-Glucan (embedded in Inactive Saccharomyces cerevisiae)**
A natural polysaccharide derived from yeast cell walls, known for supporting innate immune system function. It activates immune cells via specific receptors, enhancing the body's defensive surveillance. Provided within an inactive yeast carrier, it offers a more complete nutritional matrix. Suitable for those seeking gentle, daily immune health support.

**PABA (Para-Aminobenzoic Acid)**
Often considered part of the B vitamin family, it is a component of the folic acid molecule and participates in protein metabolism and red blood cell formation. It also possesses its own antioxidant properties. In the formula, it works synergistically with folate and other B vitamins to support cellular energy and renewal processes.`}}},{name:"Mannayan VITAMIN A + (60 Kapseln)",url:"https://mannayan.com/Mannayan-VITAMIN-A-60-Kapseln/010090",price:["15,60 €"],product_number:"010090",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/c6/0a/cf/1766137651/VIT-A%2B_2025.jpg?ts=1766137651",image_local:"images/VIT-A%2B_2025.jpg",content:{cn:{label:`Mannayan 维生素A+ | 食物态维A

支持免疫屏障
维持皮肤与黏膜健康
守护正常视力
参与铁的正常代谢
支持细胞功能

60粒胶囊 | 每粒含1.5毫克维生素A（视黄醇棕榈酸酯）
纯净配方 | 无麸质、无大豆、无乳制品、无人工添加剂`,short_description:`你是否感觉换季时身体更容易疲惫，皮肤状态也时好时坏？或者长时间面对屏幕后，眼睛的干涩感挥之不去？这些细微的信号，有时是身体在提醒我们，维持日常平衡的基础营养需要被关注。

维生素A就是这样一种基础营养素。它不像宏量营养素那样被频繁讨论，却在幕后默默支持着身体的多个关键系统。从皮肤和黏膜这道物理屏障的健康，到免疫细胞的正常功能，再到将光线转化为视觉信号的过程，都离不开它的参与。它更像是一位内在的维护者，确保身体这栋大厦的门窗坚固、内部通讯顺畅。

Mannayan 维生素A+采用纯净的植物来源视黄醇棕榈酸酯形式，这是身体易于识别和利用的活性形态。每粒胶囊提供1.5毫克（5000国际单位）维生素A，以食物态的理念制成，旨在提供更贴近天然食物来源的营养支持。

配方极其纯净，不含麸质、大豆、乳制品、酵母及任何人工色素、香料或防腐剂。适合追求纯净补充、或有特定饮食需求的人士。`,long_description:`当身体的防线似乎变得薄弱，比如皮肤更容易干燥、眼睛在傍晚时分感到疲劳、或是感觉恢复力不如从前，我们常常会从外部寻找原因。然而，这些感受有时指向一个内在的、基础性的需求：对维生素A的支持。这种脂溶性维生素在体内不扮演单一角色，它是一系列维持日常健康所必需的生理过程的共同参与者。

**食物态技术**
我们理解，身体最熟悉来自完整食物的营养信息。Mannayan 维生素A+虽以纯净的活性形式提供，但其理念根植于“食物态”原则。这意味着产品旨在模拟从天然食物基质中获取营养的方式，关注成分的生物利用度与身体的识别度。所使用的视黄醇棕榈酸酯，是一种具有高生物利用度的维生素A形式，身体可以高效地将其转化为所需的活性物质，如同从膳食中获取一般。

**完整的支持体系**
维生素A的作用是系统性的。它最广为人知的是对视觉的支持，特别是在弱光环境下。但它的角色远不止于此。健康的皮肤和所有黏膜组织（如呼吸道、消化道内壁）的维持，依赖于充足的维生素A，因为这些组织细胞需要它来进行正常的更新与修复。这直接构成了我们抵御外界环境的第一道物理屏障。同时，免疫系统的正常运作也需要它的参与，它帮助免疫细胞正常发育与发挥功能。此外，维生素A还与铁的代谢过程相关联，支持体内铁元素的正常利用。这些功能并非孤立存在，它们共同构成了一个维护内在环境稳定、支持整体活力的基础网络。

**适合的人群**
这款产品适合那些在日常生活中寻求基础营养支持的人。例如，经常使用电子设备、需要关注视觉舒适度的人；关注皮肤健康，希望从内在支持皮肤屏障功能的人；在季节交替时，希望为自身防御系统提供温和支持的人；或是饮食结构较为单一，希望确保这种关键营养素摄入充足的人。它也为素食者及有特定食物不耐受（如麸质、大豆、乳制品）的人群提供了纯净的选择。

**纯净与成分完整性**
我们相信，补充剂应该只包含身体真正需要的成分。每粒胶囊的核心只有纯净的植物来源视黄醇棕榈酸酯。辅料仅使用微晶纤维素和植物胶囊壳，再无其他。我们明确排除麸质、大豆、乳制品、酵母、人工色素、香料和防腐剂。瓶身上的封口带是产品完整性的保证，请在服用前确认其完好无损。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士，这款产品提供了一个高生物利用度且配方纯净的维生素A来源。视黄醇棕榈酸酯作为前体形式，在体内可根据需要被平稳转化利用。在制定整体健康支持方案时，它可以作为基础营养支持的一部分，与维生素D、锌等协同营养素搭配，共同支持免疫屏障、皮肤健康等综合目标。建议根据个体的具体健康状况和目标进行个性化搭配。

**用法与剂量**
每日1粒，随餐或餐后服用，并用足量温水送服。脂溶性维生素随脂肪餐一同服用有助于吸收。建议的每日食用量即为1粒，请勿超过此剂量。本产品为膳食补充剂，不能替代均衡多样的饮食。

**重要提示**
孕妇、计划怀孕的妇女在服用前请咨询医生。长期大量吸烟者或曾有严重吸烟史的人士，不建议长期服用高剂量维生素A补充剂。请将本品置于儿童无法触及的地方，避光、阴凉干燥处保存。`,ingredient_reference:`**视黄醇棕榈酸酯（维生素A）**
视黄醇棕榈酸酯是维生素A的一种活性酯化形式，具有优异的稳定性和生物利用度。它在体内被水解后转化为视黄醇，进而根据生理需要转化为视黄醛（用于视觉循环）或视黄酸（用于基因调控和细胞分化）。这种形式尤其适合希望高效补充维生素A，并关注成分吸收率的人群。作为配方中的唯一活性成分，它直接提供了产品所承诺的全部健康支持功能，是维护皮肤黏膜健康、正常视觉、免疫功能和铁代谢的核心物质。其脂溶性特质意味着与含脂肪的餐食同服能优化其吸收与利用。`},en:{label:`Mannayan Vitamin A+ | Food-State Vitamin A

Supports Immune Barrier
Maintains Skin & Mucous Membrane Health
Protects Normal Vision
Participates in Normal Iron Metabolism
Supports Cellular Function

60 Capsules | 1.5mg Vitamin A (as Retinyl Palmitate) per Capsule
Pure Formula | Gluten-Free, Soy-Free, Dairy-Free, No Artificial Additives`,short_description:`Do you feel your body gets more fatigued during seasonal changes, and your skin condition fluctuates? Or does eye dryness linger after long hours in front of a screen? These subtle signals are sometimes your body's way of reminding us that the foundational nutrients needed to maintain daily balance deserve attention.

Vitamin A is one such foundational nutrient. It may not be discussed as frequently as macronutrients, but it works behind the scenes to support multiple key systems in the body. From the health of the skin and mucous membranes—our physical barrier—to the normal function of immune cells, and the process of converting light into visual signals, its involvement is essential. It acts more like an internal caretaker, ensuring the 'doors and windows' of the body's structure are strong and internal communication flows smoothly.

Mannayan Vitamin A+ uses the pure, plant-derived form of retinyl palmitate, an active form the body easily recognizes and utilizes. Each capsule provides 1.5mg (5000 IU) of Vitamin A, crafted with a food-state philosophy to offer nutritional support closer to that from natural food sources.

The formula is exceptionally pure, containing no gluten, soy, dairy, yeast, or any artificial colors, flavors, or preservatives. It's suitable for those seeking pure supplementation or with specific dietary needs.`,long_description:`When the body's defenses seem to weaken—skin becomes drier more easily, eyes feel tired by evening, or recovery doesn't feel as robust as before—we often look for external causes. Yet, these sensations can sometimes point to an internal, foundational need: support for Vitamin A. This fat-soluble vitamin doesn't play a single role; it's a co-participant in a series of physiological processes essential for maintaining daily health.

**Food-State Technology**
We understand the body is most familiar with nutrient information from whole foods. While Mannayan Vitamin A+ is delivered in a pure, active form, its philosophy is rooted in 'food-state' principles. This means the product aims to mimic the way nutrients are obtained from a natural food matrix, focusing on ingredient bioavailability and the body's recognition. The retinyl palmitate used is a highly bioavailable form of Vitamin A that the body can efficiently convert into the required active substances, much like obtaining it from the diet.

**A Comprehensive Support System**
Vitamin A's role is systemic. It's best known for supporting vision, especially in low-light conditions. But its role extends far beyond that. The maintenance of healthy skin and all mucous membrane tissues (like the linings of the respiratory and digestive tracts) relies on adequate Vitamin A, as these tissue cells need it for normal renewal and repair. This directly constitutes our first line of physical defense against the external environment. Simultaneously, the normal functioning of the immune system requires its participation; it helps immune cells develop and function normally. Furthermore, Vitamin A is involved in iron metabolism, supporting the normal utilization of iron in the body. These functions do not exist in isolation; together they form a foundational network that maintains internal environmental stability and supports overall vitality.

**Who It's For**
This product is suitable for those seeking foundational nutritional support in daily life. For example: individuals who frequently use electronic devices and need to pay attention to visual comfort; those concerned with skin health who wish to support skin barrier function from within; people looking to provide gentle support to their defense systems during seasonal transitions; or those with a relatively monotonous diet who want to ensure adequate intake of this key nutrient. It also offers a pure choice for vegetarians and individuals with specific food intolerances (e.g., to gluten, soy, dairy).

**Purity & Ingredient Integrity**
We believe supplements should contain only what the body truly needs. The core of each capsule is solely pure, plant-derived retinyl palmitate. Excipients are limited to microcrystalline cellulose and a plant-based capsule shell, and nothing else. We explicitly exclude gluten, soy, dairy, yeast, artificial colors, flavors, and preservatives. The freshness seal on the bottle is your guarantee of product integrity; please confirm it is intact before use.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
For health professionals, this product provides a highly bioavailable and pure-formulated source of Vitamin A. Retinyl palmitate, as a precursor form, can be steadily converted and utilized by the body as needed. When formulating a holistic health support protocol, it can serve as part of foundational nutritional support, paired with synergistic nutrients like Vitamin D and zinc to collectively support comprehensive goals such as immune barrier and skin health. Personalized pairing is recommended based on an individual's specific health status and goals.

**Usage & Dosage**
Take one capsule daily with or after a meal, swallowed with a sufficient amount of water. Taking fat-soluble vitamins with a meal containing fat aids absorption. The suggested daily serving is one capsule; do not exceed this dose. This product is a dietary supplement and is not intended to replace a balanced and varied diet.

**Important Notes**
Pregnant women, women planning pregnancy, or those breastfeeding should consult a doctor before use. Individuals who are long-term heavy smokers or have a significant history of smoking are not advised to take high-dose Vitamin A supplements long-term. Keep out of reach of children. Store in a cool, dry place away from light.`,ingredient_reference:`**Retinyl Palmitate (Vitamin A)**
Retinyl palmitate is an active, esterified form of Vitamin A known for its excellent stability and bioavailability. In the body, it is hydrolyzed into retinol, which is then converted as physiologically needed into retinal (for the visual cycle) or retinoic acid (for gene regulation and cell differentiation). This form is particularly suitable for those seeking efficient Vitamin A supplementation and who are mindful of ingredient absorption. As the sole active ingredient in the formula, it directly provides all the health support functions the product promises, serving as the core substance for maintaining skin and mucous membrane health, normal vision, immune function, and iron metabolism. Its fat-soluble nature means taking it with a meal containing fat optimizes its absorption and utilization.`}}},{name:"Mannayan VITAMIN B AKTIV + (60 Kapseln)",url:"https://mannayan.com/Mannayan-VITAMIN-B-AKTIV-60-Kapseln/010091",price:["36,90 €"],product_number:"010091",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/3f/64/15/1766136582/B-Aktiv%2B_2025.jpg?ts=1766136582",image_local:"images/B-Aktiv%2B_2025.jpg",content:{cn:{label:`曼纳延 活性B族维生素+ (60粒)

高能B族复合配方

• 支持能量代谢正常功能
• 维护神经系统健康
• 有助于减少疲劳感
• 采用活性辅酶形式
• 高生物利用度配方

每日1粒，60份装

纯净认证：无麸质、无大豆、无乳制品、无人工添加剂、适合素食者`,short_description:`你是否常常在午后感到精力不济，注意力难以集中，或是明明休息了却依然觉得疲惫？现代生活的节奏、饮食的精细加工，都可能让身体对B族维生素的需求悄然增加。

曼纳延活性B族维生素+是一款高剂量、高生物利用度的B族维生素复合配方。它特别采用了活性辅酶形式，例如维生素B6直接以吡哆醛-5-磷酸盐（P5P）形式提供，这意味着它们进入身体后无需过多转化即可被利用，更直接地支持身体的能量生产和神经功能。

配方中的B1、B2、B3、B5、B6、B12协同作用，共同参与体内数百种酶促反应。它们就像一支高效的工作团队，帮助将食物转化为身体可用的能量，维护神经信号的正常传导，并支持细胞更新与修复的整体过程。

每日只需服用1粒胶囊，即可提供高剂量的B族维生素支持。配方纯净，胶囊为植物纤维素制成，不含麸质、大豆、乳制品、酵母及人工色素香料，也适合素食者和敏感体质人士。`,long_description:`那种挥之不去的疲惫感，不一定是睡眠不足；思绪的模糊与注意力的涣散，也可能不仅仅是压力所致。当身体的能量工厂运转效率降低，当神经信号传递需要更多支持时，这些细微的感受往往是身体发出的信号，提示基础营养——特别是B族维生素——的代谢需求可能未被完全满足。

**食物态递送技术**
本产品中的B族维生素并非孤立存在，而是富集于一种特殊的食物基质中。这种基质通过酶解保加利亚乳杆菌获得，模拟了天然食物中维生素与辅助因子共存的状态。当维生素以此形式进入人体，它们已然处于一个更易被识别和利用的微环境中。这项技术的核心在于提升生物利用度，让补充的营养更顺畅地融入身体自身的代谢路径，减少转化负担，实现更高效的支持。

**完整的协同支持体系**
B族维生素是一个需要团队作业的家族。硫胺素（B1）和核黄素（B2）是能量代谢循环中的关键点火器；烟酰胺（B3）和泛酸（B5）广泛参与能量物质合成与激素制造；活性形式的维生素B6（P5P）是氨基酸与神经递质代谢的核心；而甲基钴胺素（B12）则与叶酸携手，共同维护细胞健康与神经髓鞘的完整性。它们环环相扣，缺一不可。本配方的高剂量设计，正是为了确保这个支持网络能够全面、充足地运作，从能量生产的源头到神经系统的末梢，提供连贯的支持。

**适合的人群**
这款配方适合那些感觉日常饮食难以满足身体高需求的人。例如，长期处于高强度脑力工作状态，需要清晰思维和稳定情绪的人；饮食结构较为单一或偏好精制碳水的人；以及因生活阶段或状态改变，感到自身能量代谢需要额外支持的人。它不是为了替代均衡饮食，而是为那些在特定时期需要更坚实基础支持的人提供一种选择。

**纯净与成分完整性**
配方的纯净度与有效性同等重要。胶囊由植物纤维素构成，整个产品不含小麦、麸质、淀粉、大豆、乳制品、酵母、人工色素、香料或防腐剂。这种严格的排除法，是为了让成分本身发挥作用，避免不必要的干扰，也让更多有特定饮食偏好或敏感体质的人可以安心使用。

**健康管理者与搭配方案**
对于健康管理者而言，这是一个基础且强大的营养支持工具。其高剂量和活性形式的设计，使其能有效融入更广泛的健康管理方案。例如，在与强调代谢支持、神经系统养护或整体能量提升的方案搭配时，它能提供扎实的B族维生素基础。临床背景下的应用，应基于对个体需求的全面评估。

**用法与剂量**
建议每日服用1粒胶囊，随足量液体吞服。可根据专业健康指导者的建议进行调整。长期每日摄入50毫克或以上维生素B6可能导致感觉异常，本产品剂量在设计安全范围内，但遵循建议剂量至关重要。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日摄入量。请置于儿童无法触及处。储存于阴凉干燥、避光处。若密封条缺失，请勿食用。`,ingredient_reference:`**盐酸硫胺素（维生素B1）**
维生素B1是能量代谢中的关键辅酶，尤其参与碳水化合物的转化过程，帮助将食物转化为细胞可用的能量。它对神经系统的正常功能至关重要。在本配方中，它作为能量代谢启动环节的一部分，与B2、B3协同工作，确保能量生产线的开端高效运转。适合那些饮食中精制碳水化合物比例较高、或感觉能量转换效率不佳的人。

**核黄素-5-磷酸盐（活性维生素B2）**
这是维生素B2的活性辅酶形式（FMN），无需体内转化即可直接利用。它深度参与细胞的能量生产（电子传递链）和抗氧化防御系统。其磷酸化形式提升了生物利用度，能更快速地支持涉及能量代谢和细胞保护的酶反应。在配方中，它与B1和B3紧密协作，是能量代谢链上的核心传递者。

**烟酰胺（维生素B3）**
烟酰胺是辅酶NAD+和NADP+的重要组成部分，这两者在数百种氧化还原反应中扮演氢离子传递者的角色，对能量代谢、DNA修复和细胞信号传导都必不可少。它有助于支持整体的代谢健康和细胞能量状态。在本配方中，它在B族维生素网络中提供广泛的代谢支持，特别是在能量生产和细胞修复方面。

**泛酸钙（维生素B5）**
维生素B5是辅酶A的组成部分，而辅酶A是脂肪、碳水化合物和蛋白质代谢以及激素、神经递质合成中的中心分子。它对于从食物中释放能量和支持肾上腺功能有广泛作用。在复合配方中，B5就像是一个多功能适配器，帮助其他B族维生素的代谢活动与身体更广泛的合成需求连接起来。

**吡哆醛-5-磷酸盐（活性维生素B6，P5P）**
这是维生素B6的活性辅酶形式，无需肝脏转化。P5P直接参与氨基酸代谢、神经递质（如血清素、多巴胺）的合成、血红蛋白形成以及糖原分解。其活性形式意味着对神经系统和情绪的支持更为直接高效。它是本配方的关键成分之一，特别针对神经信号传导和氨基酸代谢提供高效应支持。

**甲基钴胺素（活性维生素B12）**
甲基钴胺素是维生素B12的两种主要活性形式之一，直接参与体内的甲基化循环。它对神经系统的健康、红细胞的生成以及DNA合成至关重要。与叶酸协同工作，支持同型半胱氨酸的正常代谢。采用甲基化形式，使其能立即被身体利用，尤其适合关注神经系统支持和整体细胞维护的人群。

**叶酸**
叶酸与维生素B12协同作用，是细胞分裂、DNA合成与修复所必需的营养素。它也参与氨基酸代谢和同型半胱氨酸的再甲基化过程，对心血管和神经系统健康有支持作用。在B族复合配方中，叶酸与B12的搭档关系是维护细胞健康与遗传物质稳定的基石，完善了B族维生素对生命基础过程的全面支持。`},en:{label:`Mannayan Active B-Complex+ (60 Capsules)

High-Potency B Vitamin Complex Formula

• Supports normal energy metabolism
• Maintains nervous system health
• Helps reduce feelings of fatigue
• Utilizes active coenzyme forms
• High bioavailability formula

Take 1 capsule daily. Contains 60 servings.

Purity Certified: Gluten-Free, Soy-Free, Dairy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Do you often feel your energy dip in the afternoon, struggle to concentrate, or feel tired despite getting rest? The pace of modern life and the prevalence of processed foods can quietly increase your body's demand for B vitamins.

Mannayan Active B-Complex+ is a high-dose, high-bioavailability B vitamin complex formula. It specifically uses active coenzyme forms—for example, vitamin B6 is provided directly as Pyridoxal-5-Phosphate (P5P). This means they can be utilized by the body with minimal conversion, more directly supporting your body's energy production and neurological function.

The B1, B2, B3, B5, B6, and B12 in the formula work synergistically, participating in hundreds of enzymatic reactions in the body. They function like an efficient team, helping convert food into usable energy for the body, maintaining proper nerve signal transmission, and supporting overall cellular renewal and repair processes.

Just one capsule daily provides high-dose B vitamin support. The formula is pure, with capsules made from plant cellulose. It is free from gluten, soy, dairy, yeast, and artificial colors or flavors, making it suitable for vegetarians and those with sensitivities.`,long_description:`That lingering fatigue isn't necessarily from lack of sleep; brain fog and difficulty focusing may be more than just stress. When your body's energy factories run less efficiently, or when nerve signal transmission needs more support, these subtle sensations are often signals from your body, suggesting that foundational nutritional needs—particularly for B vitamins—may not be fully met.

**Food-State Delivery Technology**
The B vitamins in this product are not isolated but are enriched within a special food matrix. This matrix is derived from enzymatically treated *Lactobacillus bulgaricus*, mimicking the natural state where vitamins coexist with cofactors in whole foods. When vitamins enter the body in this form, they are already in a microenvironment that is more readily recognized and utilized. The core of this technology is to enhance bioavailability, allowing the supplemented nutrients to integrate more smoothly into the body's own metabolic pathways, reducing conversion burden and providing more efficient support.

**A Complete Synergistic Support System**
B vitamins are a family that requires teamwork. Thiamine (B1) and Riboflavin (B2) are key igniters in the energy metabolism cycle; Niacinamide (B3) and Pantothenic Acid (B5) are broadly involved in energy substrate synthesis and hormone production; the active form of Vitamin B6 (P5P) is central to amino acid and neurotransmitter metabolism; and Methylcobalamin (B12) works hand-in-hand with Folate to maintain cellular health and the integrity of the nerve myelin sheath. They are interlinked and indispensable. The high-dose design of this formula ensures this support network operates comprehensively and sufficiently, providing continuous support from the source of energy production to the extremities of the nervous system.

**Who It's For**
This formula is suitable for those who feel their daily diet struggles to meet their body's high demands. Examples include individuals in sustained periods of high-intensity mental work requiring clear thinking and stable mood; those with a relatively monotonous diet or a preference for refined carbohydrates; and those who, due to life stage or changing circumstances, feel their energy metabolism needs additional support. It is not intended to replace a balanced diet but offers an option for those needing a more solid foundational support during specific periods.

**Purity and Ingredient Integrity**
The purity of the formula is as important as its efficacy. The capsules are made from plant cellulose. The entire product is free from wheat, gluten, starch, soy, dairy, yeast, artificial colors, flavors, or preservatives. This strict exclusion approach allows the ingredients themselves to work effectively, avoids unnecessary interference, and makes it safe for more people with specific dietary preferences or sensitivities.

**For Health Managers & Combination Protocols**
For health managers, this is a foundational and powerful nutritional support tool. Its high-dose and active-form design allows it to integrate effectively into broader health management protocols. For example, when combined with protocols emphasizing metabolic support, nervous system maintenance, or overall energy enhancement, it provides a solid B vitamin foundation. Application in a clinical context should be based on a comprehensive assessment of individual needs.

**Usage & Dosage**
Take 1 capsule daily with a full glass of water. Dosage may be adjusted based on the advice of a qualified health practitioner. Long-term daily intake of 50 mg or more of Vitamin B6 may lead to peripheral neuropathy. This product's dosage is within a designed safety range, but adhering to the recommended dose is crucial.

**Important Information**
This product is a dietary supplement and is not intended to replace a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Thiamine Hydrochloride (Vitamin B1)**
Vitamin B1 is a key coenzyme in energy metabolism, particularly involved in carbohydrate conversion, helping transform food into energy usable by cells. It is crucial for the normal function of the nervous system. In this formula, it works as part of the energy metabolism ignition phase alongside B2 and B3, ensuring the start of the energy production line operates efficiently. Suitable for those with a high proportion of refined carbohydrates in their diet or who feel their energy conversion efficiency is suboptimal.

**Riboflavin-5-Phosphate (Active Vitamin B2)**
This is the active coenzyme form of Vitamin B2 (FMN), ready for direct use without conversion in the body. It is deeply involved in cellular energy production (the electron transport chain) and the antioxidant defense system. Its phosphorylated form enhances bioavailability, allowing it to support enzyme reactions related to energy metabolism and cellular protection more rapidly. In the formula, it works closely with B1 and B3 as a core carrier in the energy metabolism chain.

**Niacinamide (Vitamin B3)**
Niacinamide is a vital component of the coenzymes NAD+ and NADP+, which act as hydrogen carriers in hundreds of redox reactions, essential for energy metabolism, DNA repair, and cellular signaling. It helps support overall metabolic health and cellular energy status. In this formula, it provides broad metabolic support within the B vitamin network, particularly in energy production and cellular repair.

**Calcium Pantothenate (Vitamin B5)**
Vitamin B5 is a component of coenzyme A, a central molecule in the metabolism of fats, carbohydrates, and proteins, as well as in the synthesis of hormones and neurotransmitters. It plays a broad role in releasing energy from food and supporting adrenal function. In the complex formula, B5 acts like a multi-functional adapter, connecting the metabolic activities of other B vitamins with the body's broader synthetic needs.

**Pyridoxal-5-Phosphate (Active Vitamin B6, P5P)**
This is the active coenzyme form of Vitamin B6, bypassing the need for liver conversion. P5P is directly involved in amino acid metabolism, the synthesis of neurotransmitters (like serotonin and dopamine), hemoglobin formation, and glycogen breakdown. Its active form means support for the nervous system and mood is more direct and efficient. It is a key ingredient in this formula, providing highly effective support specifically for nerve signal transmission and amino acid metabolism.

**Methylcobalamin (Active Vitamin B12)**
Methylcobalamin is one of the two primary active forms of Vitamin B12, directly participating in the body's methylation cycle. It is crucial for nervous system health, red blood cell formation, and DNA synthesis. It works synergistically with Folate to support normal homocysteine metabolism. The methylated form allows for immediate utilization by the body, making it particularly suitable for those focused on nervous system support and overall cellular maintenance.

**Folate**
Folate works synergistically with Vitamin B12 and is essential for cell division, DNA synthesis, and repair. It is also involved in amino acid metabolism and the remethylation of homocysteine, supporting cardiovascular and nervous system health. In the B-complex formula, the partnership between Folate and B12 is the cornerstone for maintaining cellular health and genetic material stability, completing the B vitamins' comprehensive support for fundamental life processes.`}}},{name:"Mannayan VITAMIN B12 Instant + (60 Tabletten)",url:"https://mannayan.com/Mannayan-VITAMIN-B12-Instant-60-Tabletten/010092",price:["20,50 €"],product_number:"010092",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/8a/d8/ef/1766137865/VIT-B-12_Instant%2B_2025.jpg?ts=1766137865",image_local:"images/VIT-B-12_Instant%2B_2025.jpg",content:{cn:{label:`Mannayan 维生素B12速效+ (60片)
即刻吸收，双重活性
• 支持正常能量代谢
• 维持神经系统健康
• 促进正常心理功能
• 支持红细胞形成
• 减少疲劳与倦怠
每片含：甲基钴胺素500微克 + 腺苷钴胺素500微克
纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、适合素食者`,short_description:`有时，即使睡眠充足，白天仍感到精力不济，思绪像蒙了一层雾，难以集中。这不仅仅是忙碌的结果，也可能是身体在提醒你，某些基础的营养支持需要加强。

维生素B12是维持能量水平和神经功能的关键营养素，但并非所有形式都能被身体高效利用。这款产品提供了两种身体可直接使用的活性形式——甲基钴胺素和腺苷钴胺素，它们无需经过复杂的体内转化步骤。

独特的舌下含服设计，让营养成分通过口腔黏膜直接进入血液循环，绕开了消化系统可能存在的吸收障碍，实现更快速、更直接的补充。

每日一片，睡前含于舌下直至完全溶解。每片提供总计1000微克的双重活性B12。配方纯净，不含常见过敏原，适合包括素食者在内的广泛人群。`,long_description:`你是否经历过这样的时刻：明明没有过度劳累，却总被一种挥之不去的疲惫感缠绕，注意力难以集中，感觉自己的能量储备永远差那么一点？这常常是身体发出的微妙信号，提示维持日常活力的基础系统可能需要更细致的支持。维生素B12在其中扮演着核心角色，它参与能量生产、神经信号传递和红细胞生成，但它的吸收和利用效率，高度依赖于其形态和递送方式。

**食物态技术与直接递送**
传统口服的B12补充剂需要经过胃酸环境和肠道吸收的多重关卡，对于消化功能减弱或吸收能力不佳的人来说，效率可能大打折扣。Mannayan维生素B12速效+采用了舌下含服技术。片剂在舌下溶解后，其中高纯度的活性B12成分能直接通过丰富的口腔黏膜毛细血管网被吸收，进入体循环。这条路径更直接、更快速，有效规避了胃肠道可能存在的吸收瓶颈，让营养支持更为即时和可靠。

**一个完整的支持体系**
本品并非提供单一的B12形式，而是精心组合了两种在人体内具有不同生理功能的活性形式：甲基钴胺素和腺苷钴胺素。甲基钴胺素主要活跃在细胞的细胞质中，参与同型半胱氨酸的代谢循环，对维持神经系统的健康和正常的心理功能至关重要。腺苷钴胺素则主要在线粒体——细胞的“能量工厂”中发挥作用，直接参与能量代谢的关键反应。两者协同，如同一个团队中的两位专家，分别从能量生产和系统维护两方面，为身体的活力与平衡提供全面且立体的支持，共同作用于减少疲劳感、支持健康的神经功能和正常的红细胞形成。

**适合的人群**
这款产品适合那些感觉自身能量代谢需要额外关注，或希望以更直接方式支持神经系统健康的人。它也适用于饮食选择有限（如纯素食者）、或因年龄增长、消化功能变化而可能影响营养吸收效率的成年人。当生活节奏加快，或处于需要高度精神集中的时期，它可作为日常健康管理的一部分。

**纯净与成分的完整性**
我们坚信，补充剂的效力始于成分的纯粹。本产品配方极其简洁，除了两种高活性B12成分外，仅使用必要的植物源性辅料。它不含小麦、麸质、乳制品、大豆、酵母、淀粉，也杜绝了人工色素、香精和防腐剂。这种纯净的承诺，确保了身体接收到的只有你所需要的营养支持，没有不必要的负担。

**健康管理者与搭配方案**
对于关注整体健康管理的专业人士而言，这种高生物利用度、双重活性的B12配方，可以作为基础营养支持方案中的核心一环。它能够高效地填补日常饮食可能存在的缺口，特别是在支持能量代谢和神经系统功能方面。它可以与其他B族维生素或针对特定健康目标的补充方案协同使用，为基础生理功能打下坚实的根基。临床背景下的应用，始终建议结合个体的具体情况进行评估。

**用法与剂量**
建议每日服用1片。最佳服用时间为睡前，将片剂置于舌下，任其自然溶解吸收。请勿咀嚼或整片吞服，以确保通过口腔黏膜的直接吸收途径。每片提供甲基钴胺素和腺苷钴胺素各500微克。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将本品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**甲基钴胺素**
甲基钴胺素是维生素B12在人体内的一种天然活性存在形式，主要存在于细胞的细胞质中。它在体内作为辅酶，直接参与甲基化循环，这一过程对神经递质的合成、DNA的维护以及同型半胱氨酸的代谢至关重要。通过支持同型半胱氨酸维持在正常水平，它对心血管和神经系统健康具有保护作用。这种形式特别适合关注神经系统支持、情绪平衡和心血管健康的人群。在配方中，它与腺苷钴胺素分工协作，一个侧重于细胞内的“维护”与“调节”，共同构建全面的B12支持网络。

**腺苷钴胺素**
腺苷钴胺素，又称辅酶B12，是维生素B12的另一种关键活性形式，其主要活动场所是细胞的线粒体。在线粒体中，它直接参与三羧酸循环，这是将食物转化为细胞可用能量（ATP）的核心代谢途径。因此，腺苷钴胺素对于维持正常的能量代谢、减少生理性疲劳感具有直接作用。它最适合那些感觉精力不足、希望从细胞能量生产层面获得支持的人群。在本产品中，它与甲基钴胺素形成完美互补，一个主攻“能量生产”，一个主攻“系统维护”，确保B12在体内的两种主要生理功能都得到高效满足。`},en:{label:`Mannayan Vitamin B12 Rapid-Acting+ (60 Tablets)
Immediate Absorption, Dual Active Forms
• Supports Normal Energy Metabolism
• Maintains Nervous System Health
• Promotes Normal Psychological Function
• Supports Red Blood Cell Formation
• Reduces Fatigue & Tiredness
Per Tablet: Methylcobalamin 500 mcg + Adenosylcobalamin 500 mcg
Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Sometimes, even with adequate sleep, you may feel low on energy during the day, with thoughts feeling foggy and difficult to focus. This isn't just a result of being busy; it could be your body's way of signaling that some foundational nutritional support needs reinforcement.

Vitamin B12 is a key nutrient for maintaining energy levels and nerve function, but not all forms can be efficiently utilized by the body. This product provides two active, ready-to-use forms—methylcobalamin and adenosylcobalamin—that bypass complex internal conversion steps.

Its unique sublingual design allows the nutrients to be absorbed directly into the bloodstream through the oral mucosa, circumventing potential absorption barriers in the digestive system for faster, more direct supplementation.

Take one tablet daily, dissolving it completely under the tongue before sleep. Each tablet provides a total of 1000 mcg of dual-active B12. The formula is pure, free from common allergens, and suitable for a wide range of individuals, including vegetarians.`,long_description:`Have you ever experienced moments when, without being overly tired, you're wrapped in a lingering sense of fatigue, struggling to concentrate, feeling like your energy reserves are always just a bit short? This is often a subtle signal from your body, hinting that the foundational systems sustaining daily vitality may need more nuanced support. Vitamin B12 plays a central role here, involved in energy production, nerve signal transmission, and red blood cell formation. However, its absorption and utilization efficiency highly depend on its form and delivery method.

**Food-State Technology & Direct Delivery**
Traditional oral B12 supplements must pass through multiple barriers, including stomach acid and intestinal absorption, which can significantly reduce efficiency for those with weakened digestion or poor absorption. Mannayan Vitamin B12 Rapid-Acting+ utilizes sublingual technology. Once the tablet dissolves under the tongue, its high-purity active B12 components are absorbed directly through the rich network of capillaries in the oral mucosa, entering systemic circulation. This pathway is more direct and rapid, effectively bypassing potential gastrointestinal absorption bottlenecks, making nutritional support more immediate and reliable.

**A Complete Support System**
This product doesn't provide just a single form of B12. Instead, it carefully combines two active forms with distinct physiological functions in the body: methylcobalamin and adenosylcobalamin. Methylcobalamin is primarily active in the cell's cytoplasm, participating in the homocysteine metabolic cycle, crucial for maintaining nervous system health and normal psychological function. Adenosylcobalamin primarily functions in the mitochondria—the cell's 'power plants'—directly involved in key reactions of energy metabolism. Working synergistically, like two specialists on a team, they provide comprehensive, multi-dimensional support for the body's vitality and balance from both energy production and system maintenance perspectives, jointly working to reduce feelings of fatigue, support healthy nerve function, and normal red blood cell formation.

**Suitable For**
This product is suitable for those who feel their energy metabolism needs extra attention or wish to support nervous system health in a more direct way. It's also appropriate for adults with limited dietary choices (such as vegans) or those whose nutrient absorption efficiency may be affected by aging or changes in digestive function. During periods of a fast-paced lifestyle or when high mental concentration is required, it can serve as part of daily health management.

**Purity & Ingredient Integrity**
We firmly believe that a supplement's efficacy begins with the purity of its ingredients. This product's formula is exceptionally simple, using only the necessary plant-based excipients alongside the two highly active B12 components. It contains no wheat, gluten, dairy, soy, yeast, starch, and is free from artificial colors, flavors, and preservatives. This commitment to purity ensures your body receives only the nutritional support you need, without unnecessary burdens.

**For Health Managers & Combination Strategies**
For professionals focused on overall health management, this high-bioavailability, dual-active B12 formula can serve as a core component in foundational nutritional support plans. It efficiently fills potential gaps from daily diet, especially in supporting energy metabolism and nervous system function. It can be used synergistically with other B-complex vitamins or targeted supplement regimens for specific health goals, laying a solid foundation for basic physiological functions. Application in a clinical context should always be evaluated based on individual circumstances.

**Usage & Dosage**
Take one tablet daily. The optimal time is before sleep. Place the tablet under the tongue and allow it to dissolve naturally for absorption. Do not chew or swallow whole to ensure the direct absorption pathway via the oral mucosa. Each tablet provides 500 mcg of methylcobalamin and 500 mcg of adenosylcobalamin.

**Important Notes**
Food supplements should not replace a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal on the bottle is missing.`,ingredient_reference:`**Methylcobalamin**
Methylcobalamin is a naturally occurring active form of vitamin B12 in the human body, primarily found in the cell's cytoplasm. It acts as a coenzyme, directly involved in the methylation cycle—a process crucial for neurotransmitter synthesis, DNA maintenance, and homocysteine metabolism. By supporting the maintenance of homocysteine at normal levels, it plays a protective role in cardiovascular and nervous system health. This form is particularly suitable for individuals focused on nervous system support, emotional balance, and cardiovascular health. In this formula, it works in a division of labor with adenosylcobalamin, one focusing on cellular 'maintenance' and 'regulation,' together building a comprehensive B12 support network.

**Adenosylcobalamin**
Adenosylcobalamin, also known as coenzyme B12, is another key active form of vitamin B12, with its primary site of action in the cell's mitochondria. Within mitochondria, it directly participates in the citric acid cycle (Krebs cycle), the core metabolic pathway that converts food into cellular energy (ATP). Therefore, adenosylcobalamin plays a direct role in maintaining normal energy metabolism and reducing physiological fatigue. It is most suitable for those who feel low on energy and seek support at the cellular energy production level. In this product, it perfectly complements methylcobalamin—one focuses on 'energy production,' the other on 'system maintenance'—ensuring that both primary physiological functions of B12 in the body are efficiently met.`}}},{name:"Mannayan VITAMIN B3 NICOTINAMID RIBOSID + (60 Kapseln)",url:"https://mannayan.com/Mannayan-VITAMIN-B3-NICOTINAMID-RIBOSID-60-Kapseln/010094",price:["67,80 €"],product_number:"010094",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/d5/88/4e/1766137686/VIT-B-3_Nicotinamid_Ribosid_2025.jpg?ts=1766137686",image_local:"images/VIT-B-3_Nicotinamid_Ribosid_2025.jpg",content:{cn:{label:`Mannayan 维生素B3 烟酰胺核苷+
细胞能量核心
• 支持细胞能量代谢
• 促进线粒体功能
• 参与200余种酶反应
• 高生物利用度形式
• 无潮红等不适反应
60粒胶囊 | 每日1粒 | 素食胶囊 | 无麸质、无乳制品、无人工添加`,short_description:`你是否感觉身体的能量储备不如从前，日常的精力恢复变得缓慢？这背后可能是细胞层面的能量代谢需要更细致的支持。

维生素B3是能量代谢网络中的关键一环，而烟酰胺核苷是它的一种特殊形式。它能在体内高效转化为NAD+，这是细胞能量工厂——线粒体——进行高效工作的必需辅酶。当NAD+水平充足时，食物转化为可用能量的过程更为顺畅。

这种形式绕过了传统烟酸可能带来的皮肤潮红反应，让身体能够温和而直接地利用。它关注的是为细胞的基础运作提供支持，而非短期的刺激。

每粒胶囊提供100毫克烟酰胺核苷。配方纯净，采用植物纤维素胶囊，不含麸质、乳制品、大豆、糖及人工色素香料，适合素食者及有常见饮食限制的人群。`,long_description:`当身体发出信号——比如持续的疲惫感、精力难以集中、或是运动后恢复时间变长——这常常不仅仅是睡眠不足或压力过大，而可能是细胞层面的能量代谢系统在寻求更精准的支持。身体的活力根基，深植于每一个细胞将营养转化为可用能量的效率之中。

**食物态技术与递送**
本产品采用的烟酰胺核苷，是维生素B3的一种先进形式。它并非直接刺激身体，而是作为一种高效的“前体”，能被细胞迅速识别并利用，转化为关键的辅酶NAD+。这种转化路径具有很高的生物利用度，意味着更多有效成分能抵达需要它的地方。更重要的是，它避开了传统烟酸补充可能引发的血管扩张和皮肤潮红反应，提供了一种更为温和、耐受性良好的支持方式。

**完整体系与协同作用**
烟酰胺核苷的核心作用在于重建和维持细胞能量代谢的基石。NAD+是数百种酶反应的共同参与者，尤其在线粒体——细胞的能量中心——的功能中扮演着指挥者的角色。它协助将我们从食物中获取的碳水化合物、脂肪和蛋白质，一步步转化为细胞可直接使用的能量货币（ATP）。这个过程就像为一座城市的发电厂持续供应高质量的燃料和高效的催化剂，确保整个城市的电力供应稳定而充沛。当细胞的能量生产基础稳固，身体的整体活力、思维清晰度乃至自然的修复过程，才有了更坚实的物质基础。

**适合的人群**
这款产品适合那些关注长期健康根基、希望从细胞层面为身体提供支持的人。它适合日常精力管理有更高要求的生活阶段，比如工作强度大、需要保持思维敏锐的时期；也适合那些积极进行身体管理，关注运动后恢复效率的人。对于因年龄增长而感到新陈代谢节奏发生变化，希望以更自然的方式支持身体机能的人，它提供了一种着眼于根本的选项。它同样为素食者、或有麸质、乳糖等常见食物不耐受的人群，提供了纯净的补充选择。

**纯净与成分完整性**
我们坚信，补充剂应该只包含身体真正需要的成分。除了100毫克活性烟酰胺核苷外，胶囊仅含有必要的载体（麦芽糊精）和防结剂（二氧化硅），以确保成分的稳定和均匀。胶囊外壳由植物纤维素（羟丙甲纤维素）制成。产品不含小麦、麸质、乳制品、大豆、添加糖、防腐剂以及任何人工色素或香料，非转基因。纯净的配方让您专注于核心成分带来的益处。

**健康管理者与经销商：临床背景与方案搭配**
烟酰胺核苷作为NAD+的前体，在健康管理领域受到持续关注，其对于支持细胞代谢健康的基础研究较为丰富。对于健康从业者而言，它可以作为全面健康支持方案中的一环，尤其侧重于细胞能量代谢和线粒体功能的 foundational support（基础支持）。它可以与强调抗氧化支持的配方（如含PQQ、辅酶Q10的产品）搭配，共同维护细胞能量中心的健康；也可以作为B族维生素综合补充方案中的针对性强化组成部分。建议从业者根据个体的整体健康状况和目标进行个性化搭配。

**用法与剂量**
建议每日服用1粒胶囊，随足量水吞服。可根据专业健康指导人员的建议进行调整。一瓶含60粒胶囊，相当于两个月的用量。

**重要提示**
请勿超过推荐的每日食用量。膳食补充剂不能替代均衡多样的饮食。请将本品置于儿童无法触及之处，避光、阴凉干燥处保存。如果密封条缺失，请勿食用。孕妇、哺乳期妇女或正在服用药物者，使用前请咨询医生。`,ingredient_reference:`**烟酰胺核苷**
烟酰胺核苷是维生素B3（烟酸）的一种天然存在形式，在部分食物（如牛奶）中有微量存在。它在体内作为尼克酰胺腺嘌呤二核苷酸（NAD+）的直接前体，能高效提升细胞内的NAD+水平。NAD+是细胞能量代谢的核心辅酶，参与线粒体中将营养物质转化为三磷酸腺苷（ATP）的整个过程，同时对DNA修复和细胞信号传导也至关重要。本品采用的烟酰胺核苷形式，生物利用度高，且避免了传统烟酸引起的血管舒张副作用（潮红）。它特别适合那些希望针对性支持细胞能量生产、关注线粒体健康、并寻求温和无刺激补充方式的人群。作为配方中的唯一活性成分，它直接聚焦于提升NAD+这一基础性代谢目标，为身体的整体能量代谢系统提供支持。`},en:{label:`Mannayan Vitamin B3 Nicotinamide Riboside+
Cellular Energy Core
• Supports cellular energy metabolism
• Promotes mitochondrial function
• Involved in over 200 enzymatic reactions
• High-bioavailability form
• No flushing or discomfort
60 Capsules | 1 Daily | Vegetarian Capsules | Gluten-Free, Dairy-Free, No Artificial Additives`,short_description:`Do you feel like your body's energy reserves aren't what they used to be, and daily recovery of vitality feels slower? This may point to a need for more nuanced support at the cellular level for energy metabolism.

Vitamin B3 is a key player in the energy metabolism network, and nicotinamide riboside is a special form of it. It is efficiently converted in the body to NAD+, an essential coenzyme required for the efficient operation of the mitochondria—the cell's energy factories. When NAD+ levels are sufficient, the process of converting food into usable energy flows more smoothly.

This form bypasses the potential skin flushing reaction associated with traditional niacin, allowing the body to utilize it gently and directly. It focuses on supporting the fundamental operations of cells, not on providing a short-term stimulant.

Each capsule provides 100 mg of nicotinamide riboside. The formula is pure, using plant cellulose capsules, and is free from gluten, dairy, soy, sugar, and artificial colors or flavors, making it suitable for vegetarians and those with common dietary restrictions.`,long_description:`When the body sends signals—such as persistent fatigue, difficulty concentrating, or longer recovery times after exercise—it's often not just about lack of sleep or high stress. It can indicate that the cellular energy metabolism system is seeking more precise support. The foundation of the body's vitality is deeply rooted in the efficiency with which each cell converts nutrients into usable energy.

**Food-State Technology and Delivery**
The nicotinamide riboside used in this product is an advanced form of Vitamin B3. It does not directly stimulate the body but acts as an efficient "precursor" that cells can quickly recognize and utilize, converting it into the key coenzyme NAD+. This conversion pathway has high bioavailability, meaning more of the active component reaches where it's needed. Importantly, it avoids the vasodilation and skin flushing reactions that can occur with traditional niacin supplementation, offering a gentler, well-tolerated form of support.

**Complete System and Synergy**
The core role of nicotinamide riboside is to rebuild and maintain the foundation of cellular energy metabolism. NAD+ is a co-participant in hundreds of enzymatic reactions, playing a conductor-like role, especially in the function of mitochondria—the cell's energy centers. It helps convert the carbohydrates, fats, and proteins we obtain from food step-by-step into ATP, the cell's direct energy currency. This process is like continuously supplying a city's power plant with high-quality fuel and efficient catalysts, ensuring the city's electricity supply is stable and abundant. When the foundation of cellular energy production is solid, the body's overall vitality, mental clarity, and even natural repair processes gain a more substantial material basis.

**Who It's For**
This product is suitable for those focused on long-term health foundations, wishing to provide support for the body at the cellular level. It is fitting for life stages with higher demands on daily energy management, such as periods of high work intensity requiring sustained mental sharpness. It also suits those actively managing their physical well-being and concerned with post-exercise recovery efficiency. For those who feel their metabolic rhythm changing with age and wish to support bodily functions in a more natural way, it offers an option focused on fundamentals. It also provides a pure supplementation choice for vegetarians or those with common food intolerances like gluten or lactose.

**Purity and Ingredient Integrity**
We firmly believe supplements should contain only what the body truly needs. Beyond the 100 mg of active nicotinamide riboside, the capsule contains only necessary carriers (maltodextrin) and anti-caking agents (silicon dioxide) to ensure ingredient stability and uniformity. The capsule shell is made from plant cellulose (hydroxypropyl methylcellulose). The product is free from wheat, gluten, dairy, soy, added sugars, preservatives, and any artificial colors or flavors, and is non-GMO. The pure formula allows you to focus on the benefits of the core ingredient.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
Nicotinamide riboside, as a precursor to NAD+, receives ongoing attention in the health management field, with a relatively rich base of research supporting its role in cellular metabolic health. For health practitioners, it can serve as one component within a comprehensive wellness support protocol, particularly focusing on foundational support for cellular energy metabolism and mitochondrial function. It can be paired with formulas emphasizing antioxidant support (e.g., containing PQQ, CoQ10) to jointly maintain the health of cellular energy centers. It can also serve as a targeted reinforcement component within a comprehensive B-vitamin supplementation plan. Practitioners are advised to personalize pairings based on an individual's overall health status and goals.

**Usage & Dosage**
Take 1 capsule daily with a full glass of water. Dosage may be adjusted per the advice of a qualified health professional. One bottle contains 60 capsules, equivalent to a two-month supply.

**Important Notice**
Do not exceed the recommended daily intake. Dietary supplements are not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is missing. Consult a doctor before use if you are pregnant, nursing, taking medication, or have a medical condition.`,ingredient_reference:`**Nicotinamide Riboside**
Nicotinamide riboside is a naturally occurring form of Vitamin B3 (niacin), present in trace amounts in some foods like milk. In the body, it acts as a direct precursor to nicotinamide adenine dinucleotide (NAD+), efficiently raising intracellular NAD+ levels. NAD+ is a core coenzyme in cellular energy metabolism, involved in the entire mitochondrial process of converting nutrients into adenosine triphosphate (ATP). It is also crucial for DNA repair and cellular signaling. The form of nicotinamide riboside used here has high bioavailability and avoids the vasodilation side effect (flushing) associated with traditional niacin. It is particularly suitable for those wishing to target support for cellular energy production, are mindful of mitochondrial health, and seek a gentle, non-irritating supplementation method. As the sole active ingredient in the formula, it directly focuses on elevating NAD+—a foundational metabolic goal—providing support for the body's overall energy metabolism system.`}}},{name:"Mannayan VITAMIN B5+ (60 Tabletten)",url:"https://mannayan.com/Mannayan-VITAMIN-B5-60-Tabletten/010095",price:["18,80 €"],product_number:"010095",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/91/d9/95/1766137757/VIT-B-5_2025.jpg?ts=1766137757",image_local:"images/VIT-B-5_2025.jpg",content:{cn:{label:`曼那延 B5+ 维生素
细胞活性B5，源于食物态
• 支持能量代谢，缓解疲劳
• 维持正常神经递质合成
• 助力激素与维生素D代谢
• 支持正常心智表现
60片 | 每日1片 | 每片含100毫克泛酸（1666% NRV）
纯净配方：无麸质、无大豆、无乳糖、无人工添加、非转基因、适合素食者`,short_description:`你是否感觉一天下来，即使没做什么特别费力的事，也容易感到疲惫和精力不济？或者觉得思绪不如以往清晰，注意力难以长时间集中？这些日常的消耗感，可能与我们身体内一种基础但至关重要的营养素——维生素B5的代谢状态有关。

曼那延B5+提供的不是普通的合成泛酸，而是细胞可直接利用的活性形式——磷酸泛酰巯基乙胺。它被包裹在富含必需脂肪酸和酶的保加利亚乳杆菌营养基质中。这种独特的‘食物态’形式，让身体像识别和利用天然食物一样吸收它，温和而高效。

它参与到身体能量生产的核心环节，帮助将我们摄入的食物转化为可用的能量。同时，它也是合成多种重要物质（如某些激素、维生素D和神经递质）所必需的辅酶成分，从多个层面支持身体的平衡运转。

每片提供100毫克高生物利用度的维生素B5。配方纯净，不含常见过敏原和人工添加剂，适合包括素食者和敏感体质在内的广泛人群日常使用。`,long_description:`当身体的能量工厂运转不畅，或是内在的合成与修复工作缺乏足够的‘协调员’时，我们最先感受到的往往是那种挥之不去的倦怠感，以及一种‘心有余而力不足’的状态。这不仅仅是睡眠不足的问题，而是身体在基础代谢层面发出的信号。维生素B5，或称泛酸，正是那个在幕后协调数百种酶反应的关键角色，它无处不在，却又因其广泛性而易被忽视其活性形式的重要性。

**食物态递送技术**
我们深知，补充营养的关键不在于‘量’的堆砌，而在于‘质’的识别与利用。曼那延B5+的核心在于其‘食物态’设计。其中的维生素B5并非游离的合成泛酸钙，而是预先转化为其在细胞内的天然活性形态——磷酸泛酰巯基乙胺。更进一步，我们将这种活性B5整合入经过培养的保加利亚乳杆菌营养基质中。这种基质本身富含酶和脂质，形成了一个微型的、类似天然食物的营养递送系统。身体对此系统有本能的识别能力，从而实现了更顺畅的吸收和更高的生物利用度，大大提升了身体的接纳感。

**一个协同作用的完整体系**
虽然本品以维生素B5为核心，但其功效的发挥依赖于‘活性形式’与‘食物态载体’的完整体系。活性形式的B5确保了它无需在体内经历复杂的转化步骤，即可直接参与辅酶A的合成，从而立即投入能量代谢、脂肪酸氧化、胆固醇与激素合成等一系列核心生理过程。而保加利亚乳杆菌载体，不仅作为温和的递送媒介，其本身含有的营养物质也为B5的代谢环境提供了支持。这个体系的目标是还原营养素在天然食物中的存在和工作方式，支持身体从最根本的代谢层面恢复平衡与活力。

**适合哪些生活情境**
本品适合那些感觉日常压力消耗较大，容易感到身心疲劳，希望从基础营养层面给予身体支持的人。也适合饮食结构较为单一，或处于特殊生理阶段（如孕期、哺乳期，需咨询健康管理者）、对营养需求增加的人群。对于关注皮肤、头发健康，或因生活方式需要更多能量代谢支持的人，它也是一个基础而直接的选择。它尤其适合那些对合成营养素敏感，或追求纯净、食物来源般补充体验的个体。

**纯净与成分的完整性承诺**
我们坚持配方的纯粹性。本品不含小麦、麸质、大豆、糖、淀粉、酵母、乳制品、防腐剂以及任何人工色素和香精。采用非转基因原料，配方适合素食者和纯素者。我们相信，补充剂的效力与安全性始于其成分的纯净与透明。每一片剂都只包含实现核心功能所必需的成分，无多余填充。

**给健康管理者与经销商的说明**
本品采用的细胞活性B5形式，其生物利用度研究为临床应用提供了更高效的工具。健康管理者可将其作为基础代谢支持方案的核心组成部分，特别是针对疲劳综合征、肾上腺支持、皮肤修复或脂质代谢调理的综合性方案。它与曼那延B族复合产品（Mannayan B Komplett+）搭配使用，可提供更广泛的B族维生素协同支持，构建更完整的能量与神经代谢营养基础。建议根据个体情况进行剂量和组合的个性化调整。

**用法与剂量**
建议每日服用1片，随足量液体吞服。为获得最佳效果，建议与曼那延B族复合产品一同服用，或在健康管理者的指导下使用。本品每片提供100毫克泛酸（相当于1666%的营养素参考值NRV），这一剂量旨在弥补可能的需求缺口并提供充分的代谢支持。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若瓶口密封条破损或缺失，请勿食用。`,ingredient_reference:`**泛酸（维生素B5）**
泛酸，即维生素B5，是辅酶A的必需组成部分，而辅酶A是细胞内数百种代谢反应的核心辅因子。它在能量产生（特别是通过三羧酸循环）、脂肪酸的合成与降解、以及胆固醇、固醇激素（如皮质醇）和维生素D的合成中扮演着不可或缺的角色。在本品中，它并非以常见的合成形式‘泛酸钙’提供，而是以其在细胞内天然存在的、具有直接生物活性的形式——磷酸泛酰巯基乙胺存在。这种形式省略了体内转化的步骤，能更快速地被细胞利用。它特别适合那些寻求高效代谢支持、常感疲劳或处于高压状态下的人群。在配方中，它与保加利亚乳杆菌载体结合，模拟了食物中的天然存在状态，协同提升了整体的生物可利用性和耐受性。

**保加利亚乳杆菌（营养基质）**
这里使用的保加利亚乳杆菌并非作为益生菌，而是作为一种经过培养的、营养丰富的天然载体或基质。在培养过程中，菌体积累了包括必需脂肪酸和多种酶在内的营养物质。本品将活性维生素B5整合入这种基质中，创造了一个复合的‘食物态’递送系统。这种基质有助于保护活性成分，并可能通过其含有的脂质和酶成分，促进营养成分在消化道的温和释放与吸收。它适合那些偏好食物来源型补充剂、或对传统合成补充剂辅料敏感的人群。其作用是与活性B5协同，共同构成一个更易被身体识别和接受的完整营养单元，提升了补充的整体体验和效果。`},en:{label:`Mannayan B5+ Vitamin
Cell-Active B5, Delivered in Food-State
• Supports energy metabolism & eases fatigue
• Maintains normal neurotransmitter synthesis
• Aids hormone & vitamin D metabolism
• Supports normal cognitive performance
60 Tablets | 1 Daily | 100mg Pantothenic Acid per Tablet (1666% NRV)
Pure Formula: Gluten-Free, Soy-Free, Lactose-Free, No Artificial Additives, Non-GMO, Suitable for Vegetarians`,short_description:`Do you find yourself feeling drained and low on energy by the end of the day, even without significant physical exertion? Or perhaps you notice your thinking isn't as sharp as it used to be, with difficulty maintaining focus? These common feelings of daily depletion may be linked to the metabolic status of a fundamental yet crucial nutrient within our bodies: Vitamin B5.

Mannayan B5+ doesn't provide ordinary synthetic pantothenic acid. Instead, it delivers the cell-ready active form: Pantethine. It is encapsulated within a nutrient-rich matrix of cultured Lactobacillus bulgaricus, which contains essential fatty acids and enzymes. This unique 'food-state' format allows your body to recognize and absorb it just like it would a natural food—gently and efficiently.

It participates in the core stages of the body's energy production, helping convert the food we eat into usable energy. Simultaneously, it is an essential coenzyme component required for synthesizing various vital substances (such as certain hormones, vitamin D, and neurotransmitters), supporting the body's balanced function on multiple levels.

Each tablet provides 100mg of highly bioavailable Vitamin B5. The formula is pure, free from common allergens and artificial additives, making it suitable for daily use by a wide range of individuals, including vegetarians and those with sensitive constitutions.`,long_description:`When the body's energy factories aren't running smoothly, or when internal synthesis and repair processes lack sufficient 'coordinators,' the first things we often notice are a lingering sense of fatigue and a state of 'the spirit is willing, but the flesh is weak.' This isn't merely a matter of insufficient sleep; it's a signal from the body at the foundational metabolic level. Vitamin B5, or pantothenic acid, is precisely that key player working behind the scenes to coordinate hundreds of enzymatic reactions. It is ubiquitous, yet its importance—particularly the importance of its active form—can be overlooked due to its very pervasiveness.

**Food-State Delivery Technology**
We understand that the key to nutritional supplementation lies not in the mere 'quantity' of nutrients, but in the 'quality' of their recognition and utilization by the body. The core of Mannayan B5+ lies in its 'food-state' design. The Vitamin B5 within is not free synthetic calcium pantothenate, but is pre-converted into its natural, active cellular form: Pantethine. Going a step further, we integrate this active B5 into a cultured nutrient matrix of Lactobacillus bulgaricus. This matrix itself is rich in enzymes and lipids, creating a micro-scale, food-like nutrient delivery system. The body has an instinctive ability to recognize this system, leading to smoother absorption, higher bioavailability, and a significantly improved sense of bodily acceptance.

**A Complete System of Synergistic Action**
While this product centers on Vitamin B5, its efficacy relies on the complete system of the 'active form' combined with the 'food-state carrier.' The active form of B5 ensures it can bypass complex conversion steps within the body and directly participate in the synthesis of coenzyme A, thereby immediately engaging in a series of core physiological processes such as energy metabolism, fatty acid oxidation, and the synthesis of cholesterol and hormones. The Lactobacillus bulgaricus carrier not only serves as a gentle delivery medium but also, through its own nutrient content, provides supportive context for B5 metabolism. This system aims to replicate the way nutrients exist and function within natural foods, supporting the body in restoring balance and vitality from the most fundamental metabolic level.

**Suitable For Which Life Situations**
This product is suitable for individuals who feel significantly drained by daily stress, are prone to mental and physical fatigue, and wish to support their bodies at a foundational nutritional level. It is also suitable for those with relatively monotonous diets, or individuals in special physiological stages (such as pregnancy or lactation—consult your healthcare practitioner) with increased nutritional needs. For those concerned with skin and hair health, or whose lifestyles require additional support for energy metabolism, it is a foundational and direct choice. It is particularly suitable for individuals sensitive to synthetic nutrients or those seeking a pure, food-source-like supplementation experience.

**Commitment to Purity & Ingredient Integrity**
We insist on formula purity. This product contains no wheat, gluten, soy, sugar, starch, yeast, dairy, preservatives, or any artificial colors or flavors. It uses non-GMO ingredients and is formulated to be suitable for vegetarians and vegans. We believe a supplement's potency and safety begin with the purity and transparency of its ingredients. Each tablet contains only what is essential for its core function, with no unnecessary fillers.

**Note for Healthcare Practitioners & Distributors**
The cell-active B5 form used in this product, backed by bioavailability research, provides a more efficient tool for clinical application. Healthcare practitioners can consider it a core component of foundational metabolic support protocols, especially within comprehensive plans addressing fatigue syndromes, adrenal support, skin repair, or lipid metabolism regulation. When paired with the Mannayan B Komplett+ B-Complex product, it can provide broader synergistic B-vitamin support, building a more complete nutritional foundation for energy and nervous system metabolism. Dosage and combination should be personalized based on individual circumstances.

**Usage & Dosage**
Take 1 tablet daily, swallowed with a sufficient amount of liquid. For optimal results, it is recommended to take it alongside the Mannayan B Komplett+ product or as directed by your healthcare practitioner. Each tablet provides 100mg of pantothenic acid (equivalent to 1666% of the Nutrient Reference Value, NRV). This dosage is designed to address potential dietary gaps and provide ample metabolic support.

**Important Notice**
Food supplements should not be used as a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the bottle's safety seal is broken or missing.`,ingredient_reference:`**Pantothenic Acid (Vitamin B5)**
Pantothenic acid, or Vitamin B5, is an essential component of coenzyme A, a central cofactor in hundreds of metabolic reactions within cells. It plays an indispensable role in energy production (particularly via the citric acid cycle), the synthesis and degradation of fatty acids, and the synthesis of cholesterol, steroid hormones (such as cortisol), and vitamin D. In this product, it is not provided in the common synthetic form 'calcium pantothenate,' but rather in its naturally occurring, directly bioactive cellular form: Pantethine. This form bypasses conversion steps within the body, allowing for quicker cellular utilization. It is particularly suitable for individuals seeking efficient metabolic support, those who often feel fatigued, or those under high stress. In the formula, it is combined with the Lactobacillus bulgaricus carrier, mimicking its natural state in food, synergistically enhancing overall bioavailability and tolerability.

**Lactobacillus Bulgaricus (Nutrient Matrix)**
The Lactobacillus bulgaricus used here is not employed as a probiotic, but rather as a cultured, nutrient-rich natural carrier or matrix. During the culturing process, the bacterial cells accumulate nutrients, including essential fatty acids and various enzymes. This product integrates the active Vitamin B5 into this matrix, creating a composite 'food-state' delivery system. This matrix helps protect the active ingredient and may, through its lipid and enzyme content, promote the gentle release and absorption of the nutrient in the digestive tract. It is suitable for individuals who prefer food-source type supplements or are sensitive to excipients in traditional synthetic supplements. Its role is to work synergistically with the active B5, together forming a complete nutritional unit that is more readily recognized and accepted by the body, enhancing the overall supplementation experience and efficacy.`}}},{name:"Mannayan VITAMIN B6 + (Pyridoxin) (60 Tabletten)",url:"https://mannayan.com/Mannayan-VITAMIN-B6-Pyridoxin-60-Tabletten/010096",price:["18,80 €"],product_number:"010096",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/9e/f8/55/1766137808/VIT-B-6%2B_2025.jpg?ts=1766137808",image_local:"images/VIT-B-6%2B_2025.jpg",content:{cn:{label:`Mannayan 维生素B6+
活性形态，即刻参与
• 支持能量代谢，缓解疲劳
• 维护神经系统健康
• 促进正常心理功能
• 支持免疫系统
• 调节激素活动
60片 | 每片含30毫克活性维生素B6（P-5-P）
纯净配方：无麸质、无大豆、无乳制品、无人工添加剂、适合素食者`,short_description:`你是否感觉日常的忙碌耗尽了你的精力，即使休息后也难以恢复？思绪有时像蒙上了一层雾，注意力难以集中？这些可能不仅仅是压力大的表现，而是身体在提示某些基础营养的代谢需要支持。

维生素B6是体内数百种酶反应的关键辅助因子，但传统的补充形式需要身体额外进行转化才能利用。Mannayan维生素B6+直接提供活性形式的吡哆醛-5-磷酸（P-5-P），这是食物中天然存在、身体细胞直接使用的形态。它就像为身体的代谢引擎提供了预先组装好的精密部件，无需等待加工，即刻投入工作。

它参与到从能量产生、神经递质合成到激素平衡、免疫支持等多个核心生理过程中。当B6以这种易于利用的形式补充时，身体可以更高效地完成这些基础工作，从而帮助维持整体的平衡与活力。

每片提供30毫克活性维生素B6。配方纯净，不含常见过敏原、乳制品、麸质、大豆及人工添加剂，采用植物胶囊，适合包括素食者在内的广泛人群。`,long_description:`一天结束时，那种挥之不去的疲惫感，不仅仅是身体的劳累；思绪变得迟缓，情绪容易波动，睡眠也无法带来焕然一新的感觉。这些细微的信号，常常是身体内部某些基础支持系统需要关注的迹象。维生素B6处于众多生命活动的交汇点，它的状态直接影响着我们如何从食物中获取能量，神经系统如何清晰传递信息，以及情绪和免疫防线是否稳固。

**食物态递送技术**
Mannayan维生素B6+的核心在于其“食物态”理念。产品中的维生素B6并非普通的吡哆醇盐酸盐，而是直接以吡哆醛-5-磷酸（P-5-P）的活性形式提供。这种形式天然存在于食物和人体细胞中，是酶发挥作用时直接使用的辅酶形态。此外，配方融入了由保加利亚乳杆菌酶解获得的食物基质，其中含有氨基酸、碳水化合物和优质脂肪酸。这种复合环境模拟了维生素在天然食物细胞中的存在状态，旨在支持营养成分更自然、更完整的吸收与利用过程，让身体识别它为“食物”而非单纯的化学物质。

**一个协同作用的完整体系**
活性P-5-P的价值在于其即时的生物可利用性。它无需经过肝脏的转化步骤，可以直接进入细胞，参与超过150种酶促反应。这意味着它对能量代谢的支持是直接的：帮助身体将摄入的蛋白质和碳水化合物转化为可用的能量。同时，它在神经系统中协助合成如血清素、GABA等重要的神经递质，这对于维持情绪的平稳和思维的清晰至关重要。它还在血红蛋白的形成、免疫细胞的正常功能以及激素（如调节情绪的激素）的代谢平衡中扮演角色。这种多层面的参与，正是从根本支持整体健康的基础。

**适合的人群**
这款产品适合那些生活节奏快、饮食可能不总是均衡，并因此感到精力不济、容易疲劳的人。也适合那些在压力时期感到思绪纷乱、情绪需要额外支持的人。对于关注神经系统长期健康，或希望为自己免疫和激素平衡提供基础营养支持的人来说，它是一种直接的选择。由于其纯净的配方，它也特别适合有食物敏感顾虑的人，如需要避免麸质、大豆、乳制品或人工添加剂的素食者及纯素食者。

**纯净与成分完整性**
我们坚信，补充剂补充的应是身体真正需要的东西，而非不必要的负担。因此，配方中除了活性维生素B6及其食物基质外，仅使用了微晶纤维素作为填充剂和羟丙甲纤维素构成的植物胶囊壳。它明确不含小麦、麸质、大豆、糖、淀粉、酵母、乳制品、防腐剂以及任何人工色素和香精，且非转基因。每一片都力求成分清晰、目的明确。

**用法与剂量**
建议每日服用1片，随足量液体吞服。为了达到更全面的B族维生素协同效果，可以配合Mannayan B复合物+一起使用，因为B族维生素在体内的工作是团队协作的。具体方案可咨询您的健康顾问。

**重要提示**
请勿超过推荐的每日食用量。膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**吡哆醛-5-磷酸（活性维生素B6）**
这是维生素B6在人体细胞内直接发挥生物活性的辅酶形式，即P-5-P。它作为关键辅酶，广泛参与氨基酸代谢、神经递质合成、糖原分解和血红蛋白形成等核心生理过程。采用这种预先活化的形式，避免了身体因转化能力不足而可能出现的利用效率问题，确保了补充的即时性和有效性。它特别适合那些希望直接支持能量代谢、神经系统功能和情绪平衡的人群。在本配方中，它与酶解食物基质相结合，旨在模拟其在天然食物中的存在环境，促进更完整的代谢利用。

**酶解乳杆菌食物基质**
这是一种通过酶解保加利亚乳杆菌获得的复合营养物质，富含氨基酸、碳水化合物和优质脂肪酸。它并非简单的填充物，而是旨在创造一个微型的“食物环境”。这种基质模拟了维生素在天然细胞中与其它营养素共存的状态，可能有助于营养成分更温和、更协同地被身体接纳和运输。它为活性维生素B6提供了一个更接近食物来源的递送背景，适合注重成分天然性和身体亲和性的人群。在配方中，它的角色是支持活性成分的递送，并补充微量的协同营养素，使补充过程更贴近从整体食物中获取营养的理念。`},en:{label:`Mannayan Vitamin B6+
Active Form, Ready to Work
• Supports Energy Metabolism & Eases Fatigue
• Maintains Nervous System Health
• Promotes Normal Psychological Function
• Supports the Immune System
• Regulates Hormonal Activity
60 Tablets | 30 mg Active Vitamin B6 (P-5-P) per Tablet
Pure Formula: Gluten-Free, Soy-Free, Dairy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Do you feel like daily busyness drains your energy, making it hard to recover even after rest? Does your mind sometimes feel foggy, with difficulty concentrating? These may not just be signs of stress—they could be your body signaling a need for support in metabolizing certain foundational nutrients.

Vitamin B6 is a key cofactor for hundreds of enzymatic reactions in the body, but traditional supplemental forms require extra conversion before your body can use them. Mannayan Vitamin B6+ directly provides the active form, Pyridoxal-5-Phosphate (P-5-P), which is the naturally occurring, cell-ready form found in food. Think of it as providing your body's metabolic engine with pre-assembled, precision parts—no waiting for processing, ready to go to work immediately.

It participates in multiple core physiological processes, from energy production and neurotransmitter synthesis to hormone balance and immune support. When B6 is supplemented in this readily usable form, your body can perform these foundational tasks more efficiently, helping to maintain overall balance and vitality.

Each tablet provides 30 mg of active Vitamin B6. The formula is pure, free from common allergens, dairy, gluten, soy, and artificial additives, using a plant-based capsule suitable for a wide range of individuals, including vegetarians.`,long_description:`That lingering fatigue at the end of the day is more than just physical tiredness; your thoughts slow down, emotions feel more volatile, and sleep doesn't bring that refreshed feeling. These subtle signals are often signs that some of your body's foundational support systems need attention. Vitamin B6 sits at the crossroads of many vital processes—its status directly influences how we derive energy from food, how clearly our nervous system transmits signals, and how steady our mood and immune defenses remain.

**Food-State Delivery Technology**
At the heart of Mannayan Vitamin B6+ is its "food-state" philosophy. The vitamin B6 in this product is not ordinary pyridoxine hydrochloride, but is provided directly as the active form, Pyridoxal-5-Phosphate (P-5-P). This form is naturally present in food and human cells—it's the coenzyme form directly used by enzymes to function. Furthermore, the formula incorporates a food matrix derived from the enzymatic hydrolysis of Lactobacillus bulgaricus, containing amino acids, carbohydrates, and quality fatty acids. This complex environment mimics the state in which vitamins exist within natural food cells, aiming to support a more natural and complete process of absorption and utilization, allowing the body to recognize it as "food" rather than just a chemical compound.

**A Complete System of Synergistic Action**
The value of active P-5-P lies in its immediate bioavailability. It bypasses the need for conversion in the liver and can enter cells directly to participate in over 150 enzyme-driven reactions. This means its support for energy metabolism is direct: helping the body convert ingested proteins and carbohydrates into usable energy. Simultaneously, it assists in the synthesis of crucial neurotransmitters like serotonin and GABA in the nervous system, which is vital for maintaining emotional balance and mental clarity. It also plays a role in hemoglobin formation, the normal function of immune cells, and the metabolic balance of hormones (such as those regulating mood). This multi-faceted involvement is precisely what provides foundational support for overall health from the ground up.

**Who It's For**
This product is suitable for individuals with fast-paced lives, whose diets may not always be balanced, and who consequently feel low on energy or easily fatigued. It's also for those who experience mental clutter or need extra emotional support during stressful periods. For anyone focused on long-term nervous system health, or looking to provide foundational nutritional support for their immune and hormonal balance, it offers a direct option. Thanks to its pure formula, it is especially suitable for those with food sensitivity concerns, such as vegetarians and vegans who need to avoid gluten, soy, dairy, or artificial additives.

**Purity & Ingredient Integrity**
We firmly believe that supplements should provide what the body truly needs, not unnecessary burdens. Therefore, apart from the active vitamin B6 and its food matrix, the formula uses only microcrystalline cellulose as a filler and a plant-based capsule shell made of hypromellose. It is explicitly free from wheat, gluten, soy, sugar, starch, yeast, dairy, preservatives, and any artificial colors or flavors, and is non-GMO. Every tablet strives for ingredient clarity and purposeful formulation.

**Usage & Dosage**
Take 1 tablet daily with a sufficient amount of liquid. For a more comprehensive synergistic effect of B vitamins, it can be used alongside Mannayan B Complex+, as B vitamins work as a team in the body. Please consult your health advisor for a specific regimen.

**Important Notes**
Do not exceed the recommended daily intake. Food supplements are not a substitute for a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal under the cap is missing.`,ingredient_reference:`**Pyridoxal-5-Phosphate (Active Vitamin B6)**
This is the coenzyme form of vitamin B6 that is biologically active directly within human cells, known as P-5-P. As a key coenzyme, it participates extensively in core physiological processes such as amino acid metabolism, neurotransmitter synthesis, glycogen breakdown, and hemoglobin formation. Using this pre-activated form avoids potential efficiency issues that can arise from the body's limited conversion capacity, ensuring immediate and effective supplementation. It is particularly suitable for those seeking direct support for energy metabolism, nervous system function, and emotional balance. In this formula, it is combined with an enzymatically hydrolyzed food matrix, designed to mimic its natural environment in whole foods and promote more complete metabolic utilization.

**Enzymatically Hydrolyzed Lactobacillus Food Matrix**
This is a complex of nutrients obtained through the enzymatic hydrolysis of Lactobacillus bulgaricus, rich in amino acids, carbohydrates, and quality fatty acids. It is not merely a filler but is intended to create a miniature "food environment." This matrix mimics the state in which vitamins coexist with other nutrients in natural cells, potentially aiding in the gentler, more synergistic acceptance and transport of nutrients by the body. It provides a delivery context for the active vitamin B6 that is closer to a food source, suitable for individuals who value ingredient naturalness and bodily affinity. In the formula, its role is to support the delivery of the active ingredient and supplement trace synergistic nutrients, aligning the supplementation process more closely with the concept of obtaining nutrition from whole foods.`}}},{name:"Mannayan VITAMIN C+ (120 Tabletten)",url:"https://mannayan.com/Mannayan-VITAMIN-C-120-Tabletten/010912",price:["37,90 €"],product_number:"010912",quantity:["120 Tabletten"],image_url:"https://mannayan.com/media/d5/e8/b1/1766137611/VIT%20C%2B_2025.jpg?ts=1766137611",image_local:"images/VIT%20C%2B_2025.jpg",content:{cn:{label:`Mannayan 维生素C+
食物态维生素C
• 支持免疫系统正常功能
• 促进胶原蛋白形成，维护皮肤、血管、骨骼健康
• 帮助减少疲劳与倦怠感
• 保护细胞免受氧化应激
• 提高铁的吸收
120片 | 每片含250毫克维生素C | 食物态技术 | 适合素食者、严格素食者、念珠菌敏感人群 | 无麸质、无乳制品、无人工添加剂`,short_description:`你是否感觉一天下来总是提不起精神，或者季节更替时身体特别容易感到不适？这些细微的信号，常常是身体在提醒我们需要更周全的支持。

维生素C是维持身体平衡不可或缺的营养素，它参与数百种生理过程。然而，并非所有维生素C补充剂都能被身体轻松识别和利用。许多产品主要成分是单一的合成抗坏血酸，与食物中天然存在的完整形态相去甚远。

Mannayan 维生素C+采用独特的食物态技术。它将维生素C完整地嵌入到整个橙子的果肉基质中，使其与天然存在的生物类黄酮（如橙皮苷和柚皮苷）结合在一起。这样，身体会将其识别为真正的食物，从而显著提高吸收和利用效率。临床观察表明，这种形式的利用率比普通合成抗坏血酸高出350%。

每日一片，提供250毫克高利用率的维生素C。产品纯净配方，不含麸质、乳制品、大豆、酵母、人工色素或防腐剂，适合包括素食者和敏感人群在内的广泛需求。`,long_description:`时常感到精力不济，皮肤状态不如从前，或是觉得身体的防御机制需要一些额外的支持，这些现代生活中常见的感受，往往指向一个根本的营养基础——维生素C的充足与高效利用。它远不止是“增强免疫力”那么简单，而是维系身体内在平衡、支持从内到外健康结构的基石。

**食物态技术：像食物一样被识别和利用**
Mannayan 维生素C+的核心在于其“食物态”技术。这并非简单的“天然提取”，而是将纯净的维生素C分子重新嵌入到完整的柑橘类水果果肉营养复合物中。这个过程模拟了自然界中维生素C的存在状态，使其与橙皮苷、柚皮苷等生物类黄酮天然结合。当这种复合物进入体内，消化系统会像处理一个真正的橙子一样识别它，从而启动更高效、更温和的营养吸收通路。这解决了单纯合成维生素C吸收率有限、可能刺激肠胃的问题，实现了高达350%的利用率提升。

**完整体系：协同作用的智慧**
这款产品不是提供孤立的营养素，而是呈现一个微型的营养生态系统。维生素C在这里并非单独作战，它所处的柑橘果肉基质本身就含有多种协同营养素和植物化合物。生物类黄酮不仅增强了维生素C的稳定性和吸收，其自身也具有抗氧化特性，共同保护细胞免受氧化应激。这种协同作用延伸至身体的多个层面：在免疫系统中提供支持，在能量代谢中帮助减少疲劳感，并作为合成胶原蛋白的关键辅因子，为皮肤、血管、骨骼和牙龈的健康提供内在支持。它还能促进膳食中铁的吸收，并帮助再生体内的维生素E，形成一个内在的抗氧化网络。

**适合人群：融入具体的生活情境**
它适合那些饮食中新鲜果蔬摄入不足、生活节奏紧张感到持续倦怠的都市人；适合关注皮肤弹性和整体衰老迹象，希望从内在提供支持的成年人；也适合在体能训练后或季节转换时期，希望为身体防御功能提供额外基础支持的运动爱好者。对于遵循素食或纯素饮食，或对常见过敏原如麸质、乳制品敏感的人群，其纯净配方提供了安心的选择。

**纯净与成分完整性**
产品的纯净承诺体现在其排除清单上：无麸质、无乳制品、无大豆、无酵母、无添加糖、无淀粉、无防腐剂、无人造色素或香料。胶囊外壳采用植物来源的羟丙甲纤维素，分离剂使用植物硬脂酸。每一片都致力于只提供身体所需的营养本质，不含任何不必要的负担。

**用法与剂量**
建议每日服用1片，随足量液体吞服，或遵循健康专业人士的指导。一瓶包含120片，为期约四个月的日常补充。请勿超过推荐的每日食用量。

**重要提示**
膳食补充剂不能替代多样化和均衡的饮食及健康的生活方式。请将产品置于儿童无法触及之处，在阴凉、干燥、避光处保存。如果密封带缺失，请勿食用。`,ingredient_reference:`**维生素C（嵌入柑橘果肉复合物）**
维生素C是一种水溶性维生素，是人体无法自行合成、必须从外界获取的必需营养素。它在体内扮演着数百种生化反应辅因子的角色，是合成胶原蛋白——这种构成皮肤、血管、骨骼和结缔组织主要蛋白质——的关键所在。本品中的维生素C并非孤立形式，而是通过专利技术“嵌入”到整个橙子的果肉营养基质中。这种食物态形式使其与天然伴生的生物类黄酮结合，极大地提高了生物利用度和胃肠道耐受性。它非常适合那些寻求高效、温和且更接近食物形态维生素C来源的人群，在配方中，它与基质中的生物类黄酮协同，共同支持抗氧化防御、免疫健康及能量代谢。

**生物类黄酮（来自柑橘果肉复合物）**
生物类黄酮是一大类存在于水果、蔬菜中的植物化合物，在柑橘类水果中含量尤为丰富，如橙皮苷和柚皮苷。它们本身具有抗氧化特性，并能显著影响维生素C在体内的代谢和利用。在本配方中，生物类黄酮并非单独添加的提取物，而是作为维生素C所嵌入的柑橘果肉复合物的天然组成部分。它们的主要作用是稳定维生素C，延长其在体内的活性时间，并通过改善毛细血管通透性和强度来支持维生素C在维护血管健康方面的功能。对于关注整体抗氧化网络效率和微循环健康的人群尤为重要，它们与维生素C构成了不可分割的协同增效单元。`},en:{label:`Mannayan Vitamin C+
Food-State Vitamin C
• Supports normal immune system function
• Promotes collagen formation, maintaining skin, blood vessel, and bone health
• Helps reduce fatigue and tiredness
• Protects cells from oxidative stress
• Enhances iron absorption
120 Tablets | 250 mg Vitamin C per Tablet | Food-State Technology | Suitable for Vegetarians, Vegans, and Candida-Sensitive Individuals | Gluten-Free, Dairy-Free, No Artificial Additives`,short_description:`Do you often feel low on energy by the end of the day, or find your body particularly vulnerable during seasonal changes? These subtle signals are often your body's way of reminding you it needs more comprehensive support.

Vitamin C is an essential nutrient for maintaining the body's balance, involved in hundreds of physiological processes. However, not all vitamin C supplements are easily recognized and utilized by the body. Many products primarily contain isolated synthetic ascorbic acid, which is quite different from the complete form naturally present in food.

Mannayan Vitamin C+ utilizes unique Food-State technology. It embeds vitamin C entirely within the flesh matrix of a whole orange, combining it with naturally occurring bioflavonoids like hesperidin and naringin. This allows the body to recognize it as real food, significantly improving absorption and utilization efficiency. Clinical observations indicate this form offers up to 350% higher utilization compared to ordinary synthetic ascorbic acid.

One tablet daily provides 250 mg of highly utilizable vitamin C. The formula is pure, free from gluten, dairy, soy, yeast, artificial colors, or preservatives, making it suitable for a wide range of needs, including vegetarians and sensitive individuals.`,long_description:`Frequent low energy, declining skin condition, or a sense that your body's defenses need extra support—these common experiences in modern life often point to a fundamental nutritional foundation: the adequacy and efficient utilization of vitamin C. It's far more than just "boosting immunity"; it's a cornerstone for maintaining the body's internal balance and supporting healthy structures from the inside out.

**Food-State Technology: Recognized and Utilized Like Food**
The core of Mannayan Vitamin C+ lies in its "Food-State" technology. This is not simply "natural extraction," but the re-embedding of pure vitamin C molecules into a complete citrus fruit flesh nutrient complex. This process mimics the natural state of vitamin C in nature, allowing it to combine naturally with bioflavonoids like hesperidin and naringin. When this complex enters the body, the digestive system recognizes it as it would a real orange, initiating a more efficient and gentle pathway for nutrient absorption. This addresses the issues of limited absorption and potential gastrointestinal irritation from isolated synthetic vitamin C, achieving up to a 350% improvement in utilization.

**A Complete System: The Wisdom of Synergy**
This product does not provide an isolated nutrient but presents a miniature nutritional ecosystem. Here, vitamin C does not work alone; the citrus flesh matrix it resides in naturally contains various synergistic nutrients and phytonutrients. Bioflavonoids not only enhance the stability and absorption of vitamin C but also possess their own antioxidant properties, working together to protect cells from oxidative stress. This synergy extends to multiple levels of the body: providing support within the immune system, helping reduce feelings of fatigue in energy metabolism, and acting as a key cofactor in collagen synthesis, offering internal support for the health of skin, blood vessels, bones, and gums. It also promotes the absorption of dietary iron and helps regenerate vitamin E in the body, forming an internal antioxidant network.

**Suitable For: Fitting into Specific Life Contexts**
It is suitable for urban dwellers whose diets lack sufficient fresh fruits and vegetables and who feel persistently fatigued due to a hectic pace of life; for adults concerned about skin elasticity and overall signs of aging, seeking to provide support from within; and for fitness enthusiasts looking to offer extra foundational support for the body's defenses after physical training or during seasonal transitions. For those following vegetarian or vegan diets, or individuals sensitive to common allergens like gluten or dairy, its pure formula provides a reassuring choice.

**Purity and Ingredient Integrity**
The product's commitment to purity is reflected in its exclusion list: gluten-free, dairy-free, soy-free, yeast-free, no added sugar, no starch, no preservatives, no artificial colors or flavors. The capsule shell is made from plant-derived hydroxypropyl methylcellulose, and the separating agent is vegetable stearic acid. Each tablet is dedicated to providing only the essential nutrition the body needs, free from any unnecessary burden.

**Usage and Dosage**
It is recommended to take 1 tablet daily, swallowed with plenty of liquid, or as directed by a healthcare professional. One bottle contains 120 tablets, providing approximately four months of daily supplementation. Do not exceed the recommended daily intake.

**Important Notice**
Food supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the safety seal is missing.`,ingredient_reference:`**Vitamin C (Embedded in Citrus Flesh Complex)**
Vitamin C is a water-soluble vitamin, an essential nutrient that the human body cannot synthesize on its own and must obtain from external sources. It acts as a cofactor in hundreds of biochemical reactions in the body and is crucial for the synthesis of collagen—the primary protein that makes up skin, blood vessels, bones, and connective tissues. The vitamin C in this product is not in an isolated form; instead, it is "embedded" into the nutrient matrix of whole orange flesh through patented technology. This Food-State form allows it to combine with naturally co-occurring bioflavonoids, greatly enhancing bioavailability and gastrointestinal tolerance. It is particularly suitable for those seeking an efficient, gentle, and more food-like source of vitamin C. In the formula, it works synergistically with the bioflavonoids in the matrix to jointly support antioxidant defense, immune health, and energy metabolism.

**Bioflavonoids (from Citrus Flesh Complex)**
Bioflavonoids are a large class of plant compounds found in fruits and vegetables, particularly abundant in citrus fruits, such as hesperidin and naringin. They possess antioxidant properties themselves and can significantly influence the metabolism and utilization of vitamin C in the body. In this formulation, bioflavonoids are not added as isolated extracts but are natural components of the citrus flesh complex in which the vitamin C is embedded. Their primary roles are to stabilize vitamin C, prolong its active duration in the body, and support vitamin C's function in maintaining vascular health by improving capillary permeability and strength. They are especially important for individuals focused on the efficiency of the overall antioxidant network and microcirculatory health, forming an inseparable synergistic unit with vitamin C.`}}},{name:"Mannayan VITAMIN C+ (60 Tabletten)",url:"https://mannayan.com/Mannayan-VITAMIN-C-60-Tabletten/010097",price:["20,50 €"],product_number:"010097",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/d5/e8/b1/1766137611/VIT%20C%2B_2025.jpg?ts=1766137611",image_local:"images/VIT%20C%2B_2025.jpg",content:{cn:{label:`Mannayan VITAMIN C+
来自完整橙子的食物态维生素C
• 支持免疫系统正常功能
• 有助于减少疲劳感
• 促进胶原蛋白形成，维护皮肤、血管、骨骼健康
• 保护细胞免受氧化应激
• 提高铁的吸收
每片含250毫克维生素C（食物态复合物）
60片装
纯净配方：无麸质、无乳制品、无大豆、无人工添加剂、适合素食者`,short_description:`你是否感觉一天下来格外疲惫，精力恢复得不如从前快？或者，在季节变换时，身体似乎更容易受到外界影响？这些感受，常常与身体的基础支撑有关。

维生素C是身体无法自行合成的重要营养素，它参与着从能量代谢到细胞保护的众多环节。但并非所有维生素C补充剂都能被身体轻松识别和利用。

Mannayan VITAMIN C+ 采用独特的食物态技术。它不是简单的提取物或合成物，而是将维生素C重新融入完整的柑橘果肉复合物中，其中天然含有生物类黄酮，如橙皮苷和柚皮素。这让身体将其识别为熟悉的食物，从而获得更高的生物利用度和耐受性。

每日一片，提供250毫克来自食物态复合物的维生素C。配方纯净，不含麸质、乳制品、大豆、酵母、淀粉、糖及人工色素香料，适合包括素食者在内的广泛人群。`,long_description:`那种挥之不去的倦怠感，皮肤失去往日的光泽，或是感觉身体防线在压力下变得脆弱——这些细微的信号，常常是身体在呼唤更深层的滋养。维生素C的不足，影响的远不止是单一的层面，它关乎能量生产的效率、结缔组织的强健，以及身体应对日常消耗的恢复力。

**食物态技术：像食物一样被识别**
市面许多标榜“天然”的维生素C产品，可能只含有约10%的果实提取物，其余90%仍是分离的抗坏血酸。Mannayan VITAMIN C+ 从根本上不同。它采用食物态技术，将维生素C完全整合进由完整橙子制成的柑橘果肉营养复合物中。这意味着维生素C与天然共存的生物类黄酮（如橙皮苷和柚皮素）结合在一起，其分子结构与食物中的形态一致。身体接收到的不是一个孤立的化学分子，而是一个完整的营养信息包，从而实现了接近天然食物的高生物利用度和良好的胃肠道耐受性。

**一个协同作用的完整体系**
这款产品的作用并非依赖单一成分。维生素C在体内扮演着多面手的角色：它直接参与胶原蛋白的合成，这是维持皮肤弹性、血管壁完整、骨骼和软骨健康的基础；它支持免疫系统的正常运作，尤其在体力活动后；它帮助将食物转化为可用能量，并协助神经系统和心理健康功能的维持。更重要的是，维生素C是强大的抗氧化剂，保护细胞免受氧化应激损伤，并能还原已被消耗的维生素E，延长其保护作用。配方中天然伴生的生物类黄酮，不仅提高了维生素C的稳定性和吸收，其自身也具有抗氧化特性，共同构建了更全面的保护网络。

**适合人群**
它适合那些感觉日常压力消耗较大，希望从基础层面增强活力与韧性的人；关注皮肤健康与衰老迹象，希望由内而外提供支持的人；饮食中新鲜果蔬摄入有限，或处于特定季节需要额外关注身体防御力的人；以及追求纯净、完整食物来源营养补充的素食者和有特定饮食限制的人群。

**纯净与成分完整性**
我们坚信，补充剂应该补充营养，而非不必要的添加物。本产品不含小麦、麸质、乳制品、大豆、糖、淀粉、酵母、防腐剂及任何人工色素或香料。胶囊外壳采用植物来源成分。每一批产品都致力于成分的纯净与完整，让您摄入的每一份都专注于营养本身。

**用法与剂量**
建议每日服用1片，随足量液体吞服，或遵循专业健康管理人士的指导。每片提供250毫克来自食物态复合物的维生素C。请勿超过推荐的每日摄入量。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请将产品置于儿童无法触及之处，避光、阴凉干燥保存。若瓶口密封条破损，请勿食用。`,ingredient_reference:`**维生素C（食物态复合物）**
维生素C是一种必需的水溶性维生素，人体无法自行合成，必须从外界获取。它在体内参与超过300种生化过程，是合成胶原蛋白的关键辅因子，直接影响皮肤、血管、骨骼和软骨的健康结构。本品中的维生素C并非孤立形式，而是“食物态”的——即通过专利技术将其还原并整合到完整的柑橘果肉基质中。这种形式使维生素C与天然存在的生物类黄酮结合，身体识别其为食物，从而显著提高生物利用度和耐受性。它特别适合寻求高效能且温和不刺激的维生素C来源的人群。在配方中，它与伴生的生物类黄酮协同作用，增强了其抗氧化活性和在组织中的留存时间。

**生物类黄酮（来自柑橘果肉）**
生物类黄酮是一组广泛存在于水果、蔬菜中的植物化合物，在本产品中特指来自完整橙子果肉的复合物，主要包括橙皮苷和柚皮素。它们本身具有抗氧化特性，能帮助稳定维生素C，防止其在体内被过早氧化。更重要的是，它们能改善毛细血管的通透性和强度，并支持维生素C在肠道内的吸收和在身体组织中的分布与利用。这种成分最适合那些希望获得与天然食物中类似的、成分协同增效营养组合的人群。在配方中，它们与维生素C构成了不可分割的伙伴关系，共同复制并优化了完整食物中的营养递送模式。`},en:{label:`Mannayan VITAMIN C+
Whole-Food Vitamin C from Complete Oranges
• Supports normal immune system function
• Helps reduce feelings of fatigue
• Promotes collagen formation for healthy skin, blood vessels, and bones
• Protects cells from oxidative stress
• Enhances iron absorption
250 mg Vitamin C (Whole-Food Complex) per tablet
60 Tablets
Pure Formula: Gluten-Free, Dairy-Free, Soy-Free, No Artificial Additives, Suitable for Vegetarians`,short_description:`Do you feel unusually tired by the end of the day, or find your energy doesn't bounce back as quickly as it used to? Or perhaps, during seasonal changes, your body seems more susceptible to outside influences? These feelings are often connected to your body's foundational support.

Vitamin C is an essential nutrient that the body cannot produce on its own. It's involved in numerous processes, from energy metabolism to cellular protection. However, not all vitamin C supplements are easily recognized and utilized by the body.

Mannayan VITAMIN C+ uses a unique whole-food technology. It is not a simple extract or synthetic compound. Instead, the vitamin C is re-integrated into a complete citrus fruit pulp complex, which naturally contains bioflavonoids like hesperidin and naringenin. This allows the body to recognize it as familiar food, resulting in higher bioavailability and tolerance.

One tablet daily provides 250 mg of vitamin C from a whole-food complex. The formula is pure, free from gluten, dairy, soy, yeast, starch, sugar, and artificial colors or flavors, making it suitable for a wide range of individuals, including vegetarians.`,long_description:`That lingering sense of fatigue, skin losing its former radiance, or feeling your body's defenses becoming fragile under pressure—these subtle signals are often your body calling for deeper nourishment. A deficiency in vitamin C affects far more than a single layer; it concerns the efficiency of energy production, the strength of connective tissues, and your body's resilience in recovering from daily demands.

**Whole-Food Technology: Recognized Like Food**
Many products on the market labeled "natural" may contain only about 10% fruit extract, with the remaining 90% being isolated ascorbic acid. Mannayan VITAMIN C+ is fundamentally different. It utilizes whole-food technology, fully integrating vitamin C into a citrus fruit pulp nutrient complex made from complete oranges. This means the vitamin C is bound with its naturally co-occurring bioflavonoids (like hesperidin and naringenin), with a molecular structure identical to that found in food. The body receives not an isolated chemical molecule, but a complete nutritional information package, achieving bioavailability and gastrointestinal tolerance close to that of natural food.

**A Complete System of Synergy**
This product's benefits do not rely on a single ingredient. Vitamin C plays multiple roles in the body: it is directly involved in collagen synthesis, which is foundational for maintaining skin elasticity, blood vessel integrity, and the health of bones and cartilage; it supports the normal functioning of the immune system, especially after physical exertion; it helps convert food into usable energy and assists in maintaining nervous system and psychological health functions. Importantly, vitamin C is a powerful antioxidant, protecting cells from oxidative stress damage and helping to regenerate depleted vitamin E, extending its protective effect. The naturally accompanying bioflavonoids in the formula not only enhance the stability and absorption of vitamin C but also possess their own antioxidant properties, together building a more comprehensive protective network.

**Who It's For**
It is suitable for those who feel daily stress and demands are high and wish to enhance vitality and resilience from a foundational level; those concerned with skin health and signs of aging, seeking support from within; individuals with limited intake of fresh fruits and vegetables in their diet, or those in specific seasons needing extra attention to their body's defenses; and those pursuing pure, whole-food sourced nutritional supplements, including vegetarians and people with specific dietary restrictions.

**Purity and Ingredient Integrity**
We firmly believe that supplements should supplement nutrition, not unnecessary additives. This product contains no wheat, gluten, dairy, soy, sugar, starch, yeast, preservatives, or any artificial colors or flavors. The capsule shell is made from plant-based ingredients. Every batch is committed to purity and ingredient integrity, ensuring each serving you take is focused on nutrition itself.

**Usage and Dosage**
Take 1 tablet daily with plenty of liquid, or as directed by a healthcare professional. Each tablet provides 250 mg of vitamin C from a whole-food complex. Do not exceed the recommended daily intake.

**Important Information**
Food supplements should not replace a varied and balanced diet. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the bottle's safety seal is broken.`,ingredient_reference:`**Vitamin C (Whole-Food Complex)**
Vitamin C is an essential water-soluble vitamin that the human body cannot synthesize on its own and must obtain from external sources. It participates in over 300 biochemical processes in the body and is a key cofactor in collagen synthesis, directly impacting the healthy structure of skin, blood vessels, bones, and cartilage. The vitamin C in this product is not in an isolated form but is "whole-food"—meaning it is restored and integrated into a complete citrus fruit pulp matrix through patented technology. This form binds vitamin C with naturally occurring bioflavonoids, allowing the body to recognize it as food, thereby significantly improving bioavailability and tolerance. It is particularly suitable for those seeking a high-efficacy yet gentle, non-irritating source of vitamin C. In the formula, it works synergistically with the accompanying bioflavonoids, enhancing its antioxidant activity and retention time in tissues.

**Bioflavonoids (from Citrus Fruit Pulp)**
Bioflavonoids are a group of plant compounds widely found in fruits and vegetables. In this product, they specifically refer to the complex from complete orange fruit pulp, primarily including hesperidin and naringenin. They possess their own antioxidant properties, helping to stabilize vitamin C and prevent its premature oxidation in the body. More importantly, they can improve capillary permeability and strength, and support the absorption of vitamin C in the intestines as well as its distribution and utilization in body tissues. This component is most suitable for those who wish to obtain a synergistic nutritional combination similar to that found in natural foods. In the formula, they form an inseparable partnership with vitamin C, together replicating and optimizing the nutrient delivery model of whole food.`}}},{name:"Mannayan VITAMIN D3 INTENSIV + (90 Tabletten)",url:"https://mannayan.com/Mannayan-VITAMIN-D3-INTENSIV-90-Tabletten/010715",price:["23,90 €"],product_number:"010715",quantity:["90 Tabletten"],image_url:"https://mannayan.com/media/6d/4b/67/1766137908/VIT-D3-Intensiv%2B_2025.jpg?ts=1766137908",image_local:"images/VIT-D3-Intensiv%2B_2025.jpg",content:{cn:{label:`Mannayan 维生素D3强效+ (90片)
来自地衣的日光精华
• 支持钙磷正常吸收利用
• 维持正常血钙水平
• 维护骨骼与牙齿健康
• 维持正常肌肉功能
• 支持免疫系统正常运作
• 参与细胞分裂过程
每片含2500 IU维生素D3 (62.5 μg)
纯净配方：全食物来源、纯植物性、无麸质、无乳制品、无大豆、无人工添加剂、非转基因`,short_description:`你是否感觉日复一日在室内度过，很少有机会接触自然阳光？现代的生活方式常常让我们与最天然的维生素D来源——日光——隔绝开来。这种缺失有时会以不易察觉的方式显现，比如感觉精力不如从前，或是身体的恢复能力似乎变慢了。

这款维生素D3强效补充剂，旨在以身体易于识别和利用的形式，弥补这种日常的不足。它并非实验室合成的产物，而是从一种特殊的地衣中提取。这种古老的植物在自然环境中生长，能够合成维生素D3，为我们提供一种纯净、与食物同源的补充选择。

每一片含有2500国际单位（62.5微克）的维生素D3，以支持身体对钙和磷的正常利用，这是维持骨骼强健和整体矿物质平衡的基础。它同样关注肌肉功能和免疫系统的健康运作。

配方纯净，不含常见致敏原如麸质、乳制品和大豆，也无人工色素、香料或防腐剂。适合素食者及有特定饮食需求的人士。每日一片，随餐服用即可。`,long_description:`当身体长期缺乏充足的日光，就像一座花园缺少了必要的阳光。你可能不会立刻察觉到具体的变化，但那种整体的活力感、骨骼的坚实感，以及身体应对日常挑战的韧性，都可能悄然受到影响。这不是一个需要过度担忧的问题，而是一个可以通过简单、有效的方式去支持的身体基本需求。

**食物态技术与纯净来源**
我们选择从地衣中获取维生素D3。地衣是藻类和真菌的共生体，是地球上最古老的生命形式之一，能够在严酷的自然环境中生长并合成维生素D3。这意味着我们提供的，不是孤立的人工合成分子，而是包裹在其天然食物基质中的营养素。这种“全食物”形式的理念，在于尊重身体识别和代谢完整食物的天然智慧。它是100%纯植物来源，为素食者和寻求纯净补充方案的人提供了理想选择。

**一个支持整体平衡的体系**
维生素D在体内扮演着“协调者”的角色。它的核心作用在于促进钙和磷在肠道的正常吸收，并帮助维持血液中钙水平的稳定。这为骨骼和牙齿的健康矿化奠定了坚实的基础。同时，充足的维生素D水平对于维持正常的肌肉功能至关重要，它帮助神经与肌肉进行有效的沟通。它也是免疫系统正常运作的支持因子之一，并参与身体细胞更新的基本过程——细胞分裂。这些功能并非孤立存在，它们共同构成了一个支持身体结构完整性与功能活力的内在网络。

**适合这些生活情境的你**
如果你大部分时间在室内办公或生活，很少进行户外活动；如果你的居住地日照时间短暂，尤其在秋冬季节；如果你关注骨骼的长期健康，并希望为身体的整体平衡提供支持；或者你遵循素食饮食，希望找到一种纯净的植物性维生素D3来源——那么，关注维生素D的补充会是一个贴合实际的选择。它不是为了解决某个急症，而是为一种普遍存在的现代生活方式缺口，提供持续、基础的支持。

**对纯净与完整的承诺**
我们相信，补充剂的品质始于其成分的纯粹。本品不含小麦、麸质、乳制品（乳糖）、大豆、酵母、防腐剂以及任何人工色素和香料。它也未经过基因工程改造。每一片补充剂都力求只包含身体所需的核心营养素及其必要的天然载体，避免不必要的添加，让选择变得简单、安心。

**用法与剂量**
建议每日服用1片，随餐或饭后用足量水送服，以促进脂溶性维生素的吸收。一瓶包含90片，约为三个月的用量。对于有特定健康考量或正在服用其他药物的人士，建议在使用前咨询您的健康顾问。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及的地方，避光、在阴凉干燥处保存。如果瓶口的密封条缺失，请勿食用。`,ingredient_reference:`**维生素D3（来自地衣的胆钙化醇）**
维生素D3是维生素D在动物和某些植物（如地衣）中存在的天然形式，也是人体皮肤在阳光照射下产生的形式。它在体内需要经过肝脏和肾脏的活化，转化为活性形式，才能发挥其激素样的广泛调节作用。其核心角色是作为钙磷代谢的“调节器”，确保这两种矿物质被有效吸收并用于构建和维持强健的骨骼与牙齿。我们所选用的维生素D3提取自特殊培育的地衣，这是一种可持续的纯植物来源，避免了传统的羊毛脂来源，非常适合素食者和追求纯净成分的人士。在配方中，它作为唯一也是核心的活性成分，其高生物利用度的形式旨在直接支持身体多项基础生理功能的正常进行。`},en:{label:`Mannayan Vitamin D3 Potent+ (90 Tablets)
Sunlight Essence from Lichen
• Supports normal absorption and utilization of calcium and phosphorus
• Helps maintain normal blood calcium levels
• Contributes to the maintenance of normal bones and teeth
• Supports normal muscle function
• Aids the normal function of the immune system
• Has a role in the process of cell division
Each tablet contains 2500 IU Vitamin D3 (62.5 μg)
Pure Formula: Whole-food sourced, 100% plant-based, gluten-free, dairy-free, soy-free, no artificial additives, non-GMO`,short_description:`Do you find yourself spending day after day indoors, with little chance to soak up natural sunlight? Modern lifestyles often cut us off from our most natural source of Vitamin D—the sun. This gap can sometimes show up in subtle ways, like feeling less energetic than before, or your body's recovery seeming slower.

This potent Vitamin D3 supplement is designed to fill that everyday gap in a form your body easily recognizes and uses. It's not a lab-synthesized product, but extracted from a special type of lichen. This ancient plant grows in natural environments and can synthesize Vitamin D3, offering us a pure, food-sourced supplement option.

Each tablet delivers 2500 International Units (62.5 μg) of Vitamin D3 to support your body's normal use of calcium and phosphorus—the foundation for maintaining strong bones and overall mineral balance. It also supports healthy muscle function and the normal working of the immune system.

The formula is pure, free from common allergens like gluten, dairy, and soy, and contains no artificial colors, flavors, or preservatives. Suitable for vegetarians and those with specific dietary needs. Simply take one tablet daily with a meal.`,long_description:`When the body goes long periods without sufficient sunlight, it's like a garden missing essential sunshine. You might not notice specific changes right away, but that overall sense of vitality, the solidity of your bones, and your body's resilience in facing daily challenges can quietly be affected. This isn't a cause for excessive worry, but a basic bodily need that can be supported in a simple, effective way.

**Whole-Food Technology & Pure Source**
We source our Vitamin D3 from lichen. Lichen is a symbiotic organism of algae and fungi, one of Earth's oldest life forms, capable of growing in harsh natural environments and synthesizing Vitamin D3. This means we provide not an isolated, synthetically produced molecule, but a nutrient delivered within its natural food matrix. This "whole-food" philosophy respects the body's innate wisdom in recognizing and metabolizing complete foods. It is 100% plant-based, making it an ideal choice for vegetarians and those seeking a pure supplement solution.

**A System Supporting Overall Balance**
Vitamin D acts as a "coordinator" within the body. Its core role is to promote the normal absorption of calcium and phosphorus in the intestines and help maintain stable calcium levels in the blood. This lays a solid foundation for the healthy mineralization of bones and teeth. At the same time, adequate Vitamin D levels are crucial for maintaining normal muscle function, aiding effective communication between nerves and muscles. It is also a supporting factor for the normal functioning of the immune system and plays a part in the fundamental process of cell renewal—cell division. These functions do not exist in isolation; together they form an internal network supporting the body's structural integrity and functional vitality.

**For You in These Life Situations**
If you spend most of your time working or living indoors with little outdoor activity; if you live in a region with short daylight hours, especially in autumn and winter; if you are mindful of long-term bone health and wish to support your body's overall balance; or if you follow a vegetarian diet and seek a pure, plant-based source of Vitamin D3—then paying attention to Vitamin D supplementation is a practical choice. It is not meant to address an acute condition, but to provide consistent, foundational support for a common gap in modern lifestyles.

**Commitment to Purity & Integrity**
We believe supplement quality begins with the purity of its ingredients. This product contains no wheat, gluten, dairy (lactose), soy, yeast, preservatives, or any artificial colors and flavors. It is also not genetically engineered. Each tablet strives to contain only the core nutrient your body needs and its necessary natural carriers, avoiding unnecessary additives, making the choice simple and reassuring.

**Usage & Dosage**
Take 1 tablet daily with a meal or after eating, swallowed with plenty of water to aid absorption of this fat-soluble vitamin. One bottle contains 90 tablets, approximately a three-month supply. For individuals with specific health considerations or those taking other medications, consulting your health advisor before use is recommended.

**Important Note**
Food supplements should not be used as a substitute for a varied and balanced diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place, protected from light. Do not consume if the seal around the bottle cap is missing.`,ingredient_reference:`**Vitamin D3 (Cholecalciferol from Lichen)**
Vitamin D3 is the natural form of Vitamin D found in animals and certain plants (like lichen), and it is also the form produced by human skin upon exposure to sunlight. In the body, it requires activation in the liver and kidneys to convert into its active form, enabling its hormone-like, broad regulatory functions. Its core role is as a "regulator" of calcium and phosphorus metabolism, ensuring these minerals are effectively absorbed and used to build and maintain strong bones and teeth. The Vitamin D3 we use is extracted from specially cultivated lichen, a sustainable, 100% plant-based source that avoids traditional lanolin sources, making it ideal for vegetarians and those seeking pure ingredients. In the formula, it serves as the sole and core active ingredient. Its highly bioavailable form is designed to directly support the normal course of multiple fundamental physiological functions in the body.`}}},{name:"Mannayan VITAMIN E KOMPLEX + (60 Kapseln)",url:"https://mannayan.com/Mannayan-VITAMIN-E-KOMPLEX-60-Kapseln/010101",price:["45,90 €"],product_number:"010101",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/64/c5/40/1766138028/VIT-E_Komplex%2B_2025.jpg?ts=1766138028",image_local:"images/VIT-E_Komplex%2B_2025.jpg",content:{cn:{label:`Mannayan 全谱维生素E复合物+
完整的天然维生素E家族
• 提供8种天然维生素E形式
• 支持细胞抵御日常氧化
• 维护心血管系统健康
• 促进皮肤健康与活力
• 源自非转基因植物
60粒胶囊 | 每日1粒随餐服用 | 纯素认证 | 无麸质、无乳糖、无大豆、无人工添加剂`,short_description:`你是否感觉身体需要应对现代生活的种种挑战，从环境因素到日常压力，总希望从内部获得更坚实的支持？维生素E常被称为身体的“守护者”，但并非所有维生素E都一样。

Mannayan全谱维生素E复合物+提供了自然界中完整的维生素E家族——8种天然形式，包括四种生育酚和四种生育三烯酚。这种完整的谱系意味着身体能获得更全面的营养支持，就像从均衡的膳食中获取营养一样自然。

它采用植物来源的混合生育酚和生育三烯酚，溶解于有机葵花籽油中，以促进身体更好地吸收利用。每日一粒，随餐服用，简单融入日常生活。

本品为纯素配方，胶囊由植物纤维素制成。不含麸质、乳糖、大豆、酵母、人工色素、甜味剂、香料或防腐剂，配方纯净，适合多种饮食需求的人群。`,long_description:`当身体感到疲惫，皮肤状态不佳，或是你希望为长期健康打下更稳固的基础时，往往意味着内在的平衡需要关注。维生素E是维持这种内在平衡的关键营养素之一，它像一位沉默的守护者，在细胞层面工作。

**食物态技术与递送**
产品中的活性成分——混合生育酚与混合生育三烯酚——被精心溶解于经过认证的有机葵花籽油中。这种脂溶性载体不仅模拟了食物中天然维生素E的存在形式，更确保了营养成分能以身体熟悉和高效的方式被吸收利用。胶囊外壳采用植物源性羟丙甲纤维素，温和且易于消化。

**完整的协同体系**
维生素E并非单一物质，而是一个家族。此配方罕见地同时包含了α、β、γ、δ四种生育酚和对应的四种生育三烯酚，共八种天然形式。生育三烯酚因其独特的化学结构，展现出高生物活性。这些不同形式的维生素E在体内协同工作，就像一支各司其职的团队：一些更擅长在细胞膜中巡逻，保护脂质免受氧化；另一些则在血液和神经组织中发挥独特作用。这种全谱配方的优势在于，它提供了自然界中存在的完整营养矩阵，而非单一的、人工合成的形式，支持身体多层面的健康需求。

**适合的人群**
它适合那些饮食中新鲜坚果、种子和绿色蔬菜摄入不足的都市忙碌者；关注皮肤健康与活力，希望由内而外滋养的人士；以及有意识地为心血管系统和细胞健康提供日常营养支持，追求长期健康管理的人。对于遵循纯素或素食饮食，或有特定食物不耐受（如麸质、乳糖）的人群，这款纯净的配方也能轻松融入他们的生活方式。

**纯净与成分完整性**
我们坚信，补充剂应是食物的延伸。所有成分均源自非转基因植物。配方中坚决排除了小麦、麸质、乳糖、大豆、酵母、合成色素、合成甜味剂、香料及防腐剂。每一粒胶囊都承载着对成分纯净和来源透明的承诺，让你摄入的每一分营养都清晰明了。

**用法与剂量**
建议每日服用1粒胶囊，随餐服用。食物中的脂肪有助于脂溶性维生素E的吸收。一瓶包含60粒胶囊，恰好满足两个月的日常所需。

**重要提示**
膳食补充剂不能替代均衡多样的饮食。请勿超过推荐的每日食用量。请将产品置于儿童无法触及之处，避光、阴凉干燥处保存。如果瓶口的密封带缺失，请勿食用。`,ingredient_reference:`**混合生育酚**
生育酚是维生素E家族中最广为人知的形式，主要包括α、β、γ、δ四种异构体。它们在体内主要作为脂溶性的抗氧化剂，嵌入细胞膜中，保护细胞结构中的脂质成分免受氧化损伤。这种保护作用对于所有细胞，尤其是那些代谢活跃的细胞，至关重要。配方中使用的是从天然植物中提取的混合形式，模拟了食物中的天然比例，比单一的合成α-生育酚更具生物多样性和协同效应。它与生育三烯酚共同构成了完整的维生素E防御网络。

**混合生育三烯酚**
生育三烯酚是维生素E家族中另一重要分支，同样拥有α、β、γ、δ四种形式。其化学结构中的不饱和侧链赋予了它更高的灵活性和生物活性，使其能更有效地渗透到富含饱和脂肪的组织，如大脑、肝脏和皮肤。研究表明，生育三烯酚在支持心血管健康和神经健康方面可能具有独特作用。本配方将其与生育酚结合，提供了目前科学认知中最为全面的维生素E营养支持，特别适合那些希望获得超越常规抗氧化益处的人群。

**有机葵花籽油（载体）**
作为脂溶性维生素E的载体，选用经过认证的有机葵花籽油绝非偶然。它本身富含油酸等有益脂肪酸，质地温和。其主要作用是为生育酚和生育三烯酚提供溶解介质，形成脂质微环境，极大促进其在消化道的吸收。这种基于食物的递送方式，让营养补充更接近食用天然食物的体验，提高了生物利用度和身体的接受度。`},en:{label:`Mannayan Full-Spectrum Vitamin E Complex+
The Complete Natural Vitamin E Family
• Provides 8 Natural Forms of Vitamin E
• Supports Cellular Defense Against Daily Oxidation
• Maintains Cardiovascular System Health
• Promotes Skin Health and Vitality
• Sourced from Non-GMO Plants
60 Capsules | Take 1 Daily with a Meal | Vegan Certified | Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives`,short_description:`Do you feel your body needs to cope with the various challenges of modern life—from environmental factors to daily stress—and wish for more solid internal support? Vitamin E is often called the body's 'guardian,' but not all vitamin E is the same.

Mannayan Full-Spectrum Vitamin E Complex+ delivers the complete vitamin E family found in nature—8 natural forms, including four tocopherols and four tocotrienols. This full spectrum means your body receives more comprehensive nutritional support, as natural as getting nutrients from a balanced diet.

It uses plant-derived mixed tocopherols and tocotrienols, dissolved in organic sunflower seed oil to promote better absorption and utilization by the body. Just one capsule daily with a meal easily integrates into your routine.

This product is vegan, with capsules made from plant cellulose. It is free from gluten, lactose, soy, yeast, artificial colors, sweeteners, flavors, or preservatives—a pure formula suitable for a wide range of dietary needs.`,long_description:`When your body feels fatigued, your skin isn't at its best, or you want to build a more solid foundation for long-term health, it often means your internal balance needs attention. Vitamin E is one of the key nutrients for maintaining this internal balance, working silently at the cellular level like a steadfast guardian.

**Food-State Technology and Delivery**
The active ingredients—mixed tocopherols and mixed tocotrienols—are carefully dissolved in certified organic sunflower seed oil. This fat-soluble carrier not only mimics the natural form of vitamin E found in food but also ensures the nutrients are absorbed and utilized in a way the body recognizes and efficiently processes. The capsule shell is made from plant-derived hydroxypropyl methylcellulose, which is gentle and easy to digest.

**A Complete Synergistic System**
Vitamin E is not a single substance but a family. This formula uniquely includes all eight natural forms: the four tocopherols (alpha, beta, gamma, delta) and the corresponding four tocotrienols. Tocotrienols, with their distinct chemical structure, exhibit high biological activity. These different forms of vitamin E work together in the body like a well-coordinated team: some excel at patrolling cell membranes, protecting lipids from oxidation; others play unique roles in blood and nerve tissues. The advantage of this full-spectrum formula is that it provides the complete nutritional matrix found in nature—not a single, synthetic form—supporting the body's multi-faceted health needs.

**Who It's For**
It's ideal for busy urbanites whose diets may lack sufficient fresh nuts, seeds, and green vegetables; for those focused on skin health and vitality, seeking nourishment from within; and for individuals consciously providing daily nutritional support for cardiovascular and cellular health, pursuing long-term wellness management. For those following vegan or vegetarian diets, or with specific food intolerances (like gluten or lactose), this pure formula fits seamlessly into their lifestyle.

**Purity and Ingredient Integrity**
We believe supplements should be an extension of food. All ingredients are sourced from non-GMO plants. The formula strictly excludes wheat, gluten, lactose, soy, yeast, synthetic colors, synthetic sweeteners, flavors, and preservatives. Each capsule embodies our commitment to ingredient purity and source transparency, so every nutrient you take in is clear and trustworthy.

**Usage and Dosage**
Take 1 capsule daily with a meal. The fats in food aid the absorption of fat-soluble vitamin E. Each bottle contains 60 capsules, providing exactly two months' supply.

**Important Notes**
Dietary supplements are not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal around the bottle cap is missing.`,ingredient_reference:`**Mixed Tocopherols**
Tocopherols are the most well-known forms of the vitamin E family, primarily including the four isomers: alpha, beta, gamma, and delta. In the body, they act mainly as fat-soluble antioxidants, embedding themselves in cell membranes to protect lipid components from oxidative damage. This protective role is crucial for all cells, especially those with high metabolic activity. The formula uses a mixed form extracted from natural plants, mimicking the natural proportions found in food, offering greater biodiversity and synergistic effects compared to single synthetic alpha-tocopherol. Together with tocotrienols, they form a complete vitamin E defense network.

**Mixed Tocotrienols**
Tocotrienols are another important branch of the vitamin E family, also comprising four forms: alpha, beta, gamma, and delta. Their unsaturated side chain in the chemical structure grants them greater flexibility and biological activity, allowing them to penetrate more effectively into tissues rich in saturated fats, such as the brain, liver, and skin. Research suggests tocotrienols may play unique roles in supporting cardiovascular and neurological health. By combining them with tocopherols, this formula provides the most comprehensive vitamin E nutritional support currently recognized by science, especially suited for those seeking benefits beyond conventional antioxidant support.

**Organic Sunflower Seed Oil (Carrier)**
Using certified organic sunflower seed oil as the carrier for fat-soluble vitamin E is no coincidence. It is naturally rich in beneficial fatty acids like oleic acid and has a gentle texture. Its primary role is to provide a dissolving medium for the tocopherols and tocotrienols, creating a lipid microenvironment that significantly enhances their absorption in the digestive tract. This food-based delivery method makes nutritional supplementation feel closer to consuming natural foods, improving bioavailability and the body's acceptance.`}}},{name:"Mannayan Weihrauch",url:"https://mannayan.com/Mannayan-Weihrauch/010103",price:["14,90 €"],product_number:"010103",quantity:["90 Kapseln"],image_url:"https://mannayan.com/media/71/a2/c0/1624949146/Weihrauch.jpg?ts=1624949153",image_local:"images/Weihrauch.jpg",content:{cn:{label:`Mannayan 乳香
支持关节舒适与日常活动力
• 支持关节舒适度
• 维持关节灵活性
• 帮助应对日常活动挑战
• 促进健康的炎症反应管理
90粒胶囊 / 每日2粒，每粒350毫克乳香提取物
纯净配方：适合素食者，无麸质、无大豆、无乳制品、无人工添加剂`,short_description:`你是否感觉关节不再像从前那样灵活自如，日常的起身、行走或上下楼梯时，会感到些许僵硬或不适？这种细微的变化，常常是身体发出的信号，提醒我们需要给予关节更多的关注与支持。

Mannayan 乳香提取物胶囊，源自古老的乳香树（Boswellia serrata），其核心活性成分是乳香酸。它通过支持身体自然的反应机制，帮助维持关节组织的舒适状态，让你能更自如地应对一天的活动。

每日服用两粒，即可提供700毫克高浓度乳香提取物，其中标准化含有65%的乳香酸。这款配方纯净简单，不含常见的过敏原，适合追求纯净补充的素食者。`,long_description:`早晨醒来时关节的轻微僵硬，或是久坐后起身那一刻的短暂不适，这些细微的感受常常是身体在提醒我们，日常的磨损与消耗需要得到细致的调理与支持。关节的健康并非孤立存在，它与我们整体的活动力、生活品质紧密相连。

**食物态技术与递送形式**
本品采用高浓度的乳香树（Boswellia serrata）树脂提取物，并标准化含有65%的乳香酸，这是其支持关节健康的关键活性成分。通过胶囊形式递送，确保有效成分得到保护，并能随餐服用，利于身体吸收利用。

**完整的支持体系**
乳香提取物的作用在于支持身体管理健康的炎症反应过程，这一过程是维持关节组织舒适与灵活性的基础。它并非直接作用于症状，而是帮助创造一种更平衡的内部环境，让关节能够在日常活动中更好地自我维护与修复。这种从根本调理的思路，着眼于长久的舒适与灵活，而非短暂的缓解。

**适合的人群**
这款产品适合那些因年龄增长、日常活动或运动而感到关节需要额外支持的人。无论是办公室久坐后感到僵硬，还是爱好园艺、步行后希望关节更快恢复舒适状态，亦或是单纯希望为未来的活动力打下更好基础，都可以从中受益。它服务于所有主动关注自身活动质量与长期健康的人。

**纯净与成分完整性**
我们坚信，补充剂应当纯净如其宣称的功效。每粒胶囊仅包含乳香提取物及必要的植物胶囊壳和极少量辅料。配方明确不含麸质、大豆、乳制品、人工色素、香料、防腐剂，且非转基因。这种简洁与透明，让您能安心专注于产品带来的核心益处。

**健康管理者与搭配方案**
许多自然疗法医师和健康顾问将乳香视为维护关节健康基础方案的重要组成部分。它常被建议与 Omega-3 脂肪酸、姜黄素或葡萄糖胺等成分搭配使用，以形成更全面的关节支持策略。在专业人士指导下，可根据个人具体情况调整用量或搭配其他营养支持。

**用法与剂量**
建议每日服用2次，每次1粒，随餐服用并用足量水送服。每瓶包含90粒胶囊，恰好为45天的用量。持续使用是体验其支持效果的关键。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食及健康的生活方式。请勿超过推荐每日食用量。置于儿童无法触及之处，避光、阴凉干燥处保存。如果密封条破损，请勿食用。孕妇、哺乳期妇女或正在服用其他药物者，使用前请咨询医师。`,ingredient_reference:`**乳香提取物（源自乳香树 Boswellia serrata）**
乳香提取物是从乳香树的树脂中萃取而来，在传统健康实践中已有悠久历史。其核心活性成分是一组被称为乳香酸的化合物，其中以AKBA（乙酰基-11-酮-β-乳香酸）的研究最为深入。在体内，乳香酸主要通过支持5-脂氧合酶（5-LOX）通路的管理，从而帮助维持健康的炎症反应平衡，这是其支持关节舒适度的关键机制。本产品采用标准化提取工艺，确保每粒胶囊含有350毫克提取物，其中乳香酸含量标准化至65%（即227.5毫克），保证了效力的稳定与可靠。它特别适合那些关注关节长期健康、寻求从根本层面提供支持的人群。在配方中，它是唯一且核心的活性成分，其作用聚焦而深入，无需其他成分辅助即可发挥其独特的支持价值。`},en:{label:`Mannayan Frankincense
Supports Joint Comfort & Daily Mobility
• Supports joint comfort
• Maintains joint flexibility
• Helps meet the challenges of daily activities
• Promotes healthy inflammatory response management
90 capsules / 2 capsules daily, each with 350 mg frankincense extract
Pure formula: Suitable for vegetarians, gluten-free, soy-free, dairy-free, no artificial additives`,short_description:`Do you feel your joints aren’t as flexible and free as they used to be, noticing slight stiffness or discomfort when getting up, walking, or climbing stairs? These subtle changes are often your body’s signal, reminding us that our joints need more attention and support.

Mannayan Frankincense Extract Capsules are sourced from the ancient Boswellia serrata tree, with boswellic acids as the core active components. By supporting the body’s natural response mechanisms, it helps maintain a comfortable state in joint tissues, allowing you to move through your day with greater ease.

Taking two capsules daily provides 700 mg of high-concentration frankincense extract, standardized to contain 65% boswellic acids. This formula is pure and simple, free from common allergens, and suitable for vegetarians seeking clean supplementation.`,long_description:`That slight stiffness in your joints upon waking, or the brief discomfort when standing after sitting for a long time—these subtle sensations are often your body’s way of reminding us that daily wear and tear requires careful nurturing and support. Joint health isn’t isolated; it’s closely tied to our overall mobility and quality of life.

**Food-State Technology & Delivery Form**
This product uses a high-concentration extract from Boswellia serrata resin, standardized to contain 65% boswellic acids, the key active components for supporting joint health. Delivered in capsule form, it ensures the protective delivery of active ingredients and can be taken with meals to support absorption and utilization by the body.

**A Complete Support System**
Frankincense extract works by supporting the body’s management of healthy inflammatory response processes, which form the foundation for maintaining joint comfort and flexibility. It doesn’t act directly on symptoms but helps create a more balanced internal environment, allowing joints to better maintain and repair themselves during daily activities. This root-cause approach focuses on long-term comfort and flexibility, not temporary relief.

**Who It’s For**
This product is suitable for anyone who feels their joints need extra support due to aging, daily activities, or exercise. Whether you experience stiffness after long hours at a desk, want your joints to recover more comfortably after gardening or walking, or simply wish to build a stronger foundation for future mobility, you can benefit. It serves all who proactively care about their movement quality and long-term health.

**Purity & Ingredient Integrity**
We believe supplements should be as pure as the benefits they claim. Each capsule contains only frankincense extract, the necessary plant-based capsule shell, and minimal excipients. The formula is clearly free from gluten, soy, dairy, artificial colors, flavors, preservatives, and is non-GMO. This simplicity and transparency let you focus with confidence on the core benefits the product delivers.

**Health Practitioners & Combination Strategies**
Many naturopathic doctors and wellness advisors regard frankincense as a key component of a foundational joint health regimen. It is often recommended alongside ingredients like Omega-3 fatty acids, curcumin, or glucosamine to form a more comprehensive joint support strategy. Under professional guidance, dosage or combinations with other nutritional support can be adjusted based on individual needs.

**Usage & Dosage**
Take 1 capsule twice daily, with meals and plenty of water. Each bottle contains 90 capsules, providing a 45-day supply. Consistent use is key to experiencing its supportive effects.

**Important Notes**
This product is a dietary supplement and is not intended to replace a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the safety seal is broken. Pregnant or nursing women, or individuals taking other medications, should consult a healthcare professional before use.`,ingredient_reference:`**Frankincense Extract (from Boswellia serrata)**
Frankincense extract is derived from the resin of the Boswellia serrata tree and has a long history in traditional wellness practices. Its core active components are a group of compounds known as boswellic acids, with AKBA (acetyl-11-keto-β-boswellic acid) being the most extensively studied. In the body, boswellic acids primarily work by supporting the management of the 5-lipoxygenase (5-LOX) pathway, thereby helping to maintain a healthy balance in inflammatory responses—this is the key mechanism behind its support for joint comfort. This product uses a standardized extraction process to ensure each capsule contains 350 mg of extract, with boswellic acid content standardized to 65% (i.e., 227.5 mg), guaranteeing consistent and reliable potency. It is especially suitable for those focused on the long-term health of their joints and seeking foundational support. In the formula, it is the sole and core active ingredient; its action is focused and profound, requiring no additional components to deliver its unique supportive value.`}}},{name:"Mannayan Wermut",url:"https://mannayan.com/Mannayan-Wermut/010149",price:["20,90 €"],product_number:"010149",quantity:["100 Kapseln"],image_url:"https://mannayan.com/media/49/41/87/1631274160/Mannayan-Wermut_09.09.2021.jpg?ts=1632223760",image_local:"images/Mannayan-Wermut_09.09.2021.jpg",content:{cn:{label:`Mannayan Wermut
草本平衡支持
• 支持消化系统自然节律
• 源自精选苦艾草
• 每粒含300毫克草本精华
• 100粒植物胶囊
• 纯净配方：无麸质、无大豆、无乳制品、无人工添加剂、适合素食者`,short_description:`有时，身体会发出一些微妙的信号，比如饭后感觉沉重，或是消化节奏不如往常那般顺畅。这些时刻提醒我们，内在的平衡需要细致的关照。

Mannayan Wermut 选用传统草本苦艾，以现代方式呈现。它旨在温和地支持身体的自然消化功能，帮助维持内在环境的和谐与节律。

每日1至3粒，随餐服用。每粒胶囊提供300毫克精选苦艾草精华。配方纯净，不含麸质、大豆、乳制品及任何人工色素、香料或防腐剂，采用植物胶囊，适合素食生活方式。`,long_description:`当日常饮食的节奏被打乱，或是身体感到额外的负担时，消化系统往往会最先给出反馈。那种饭后持续的不适感，或是一种内在滞涩的感觉，并非孤立的问题，而是整个系统寻求重新平衡的信号。

**草本精华的完整提取**
产品采用精选的苦艾草（Artemisia absinthium）进行提取。我们关注的是保留草本植物中完整的活性谱系，而非孤立某一种化合物。通过精细的研磨与标准化流程，确保每一粒胶囊都含有稳定、有效的300毫克草本物质，让身体能够识别并利用这种传统的植物智慧。

**单一成分的专注之力**
有时，最简单的方案最为有力。Mannayan Wermut 专注于苦艾草这一种成分，深入挖掘其支持消化的传统用途。这种专注避免了复杂的成分交互，让身体能够清晰地接收来自这种适应性草本的信息，专注于支持胃肠道的自然运动与分泌节律，从单一而根本的层面提供协助。

**适合人群**
这款产品适合那些在饮食过量或食物种类繁杂后，感到消化过程变得迟缓、腹部有胀满感的人。也适合生活节奏紧张、饮食不定时，希望为消化系统提供一些温和草本支持，以帮助维持日常舒适状态的成年人。它并非用于治疗急症，而是着眼于长期的系统平衡。

**纯净与成分完整性**
我们相信，补充剂不应给身体带来额外负担。因此，配方中除了有效成分苦艾草提取物，仅使用必要的植物来源辅料（米粉）和植物胶囊（羟丙甲纤维素）。它不含麸质、大豆、乳制品，杜绝人工色素、香料、防腐剂，且非转基因。每一批产品都遵循严格标准，确保你摄入的只有你期望的东西。

**用法与剂量**
建议每日服用1至3粒胶囊，最好在餐前用足量水送服。具体剂量可根据个人感受和需求调整，或遵循健康专业人士的指导。持续使用比偶尔大剂量服用更能支持身体的适应性调整。

**重要提示**
本产品为膳食补充剂，不能替代均衡多样的饮食。7岁以下儿童、孕妇及哺乳期妇女不宜使用。请勿超过推荐每日用量。请存放于阴凉干燥处，避免儿童接触。如果密封带缺失，请勿食用。`,ingredient_reference:`**苦艾草提取物 (Artemisia absinthium)**
苦艾草是一种具有悠久使用历史的适应性草本植物，传统上被用于支持消化系统健康。它含有多种天然的植物化合物，包括苦味素。这些成分共同作用，有助于刺激消化液的分泌，支持胃肠道的正常蠕动节律。产品采用全草研磨提取的形式，旨在提供完整的植物协同效应，而非单一活性成分。它特别适合那些寻求通过传统草本方式来温和调节消化功能、缓解偶尔因饮食不当引起的腹部不适感的人群。在本配方中，作为唯一活性成分，其作用清晰而专注，直接面向消化系统的平衡支持。`},en:{label:`Mannayan Wermut
Herbal Balance Support
• Supports the natural rhythm of the digestive system
• Sourced from selected wormwood herb
• 300 mg herbal extract per capsule
• 100 vegetable capsules
• Pure formula: gluten-free, soy-free, dairy-free, no artificial additives, suitable for vegetarians`,short_description:`Sometimes, the body sends subtle signals—like a feeling of heaviness after meals, or digestion not flowing as smoothly as usual. These moments remind us that inner balance requires gentle attention.

Mannayan Wermut presents traditional wormwood herb in a modern form. It aims to gently support the body's natural digestive functions, helping to maintain harmony and rhythm within.

Take 1 to 3 capsules daily with meals. Each capsule provides 300 mg of selected wormwood herb extract. The formula is pure, free from gluten, soy, dairy, and any artificial colors, flavors, or preservatives. Made with vegetable capsules, it suits a vegetarian lifestyle.`,long_description:`When daily eating rhythms are disrupted, or the body feels extra burden, the digestive system is often the first to respond. That lingering discomfort after meals, or a sense of internal sluggishness, isn't an isolated issue—it's a signal from the whole system seeking rebalance.

**Complete Extraction of Herbal Essence**
The product uses selected wormwood herb (Artemisia absinthium) for extraction. We focus on preserving the complete spectrum of active compounds in the herb, not isolating any single one. Through meticulous grinding and standardized processes, each capsule delivers a stable, effective 300 mg of herbal material, allowing the body to recognize and utilize this traditional plant wisdom.

**The Focused Power of a Single Ingredient**
Sometimes, the simplest approach is the most powerful. Mannayan Wermut focuses solely on wormwood, delving into its traditional use for digestive support. This focus avoids complex ingredient interactions, letting the body clearly receive the message from this adaptogenic herb. It aims to support the natural movement and secretory rhythms of the gastrointestinal tract, offering assistance from a single, fundamental level.

**Who It's For**
This product is suitable for those who feel digestion slowing down or experience abdominal fullness after overeating or consuming varied foods. It's also for adults with busy, irregular schedules who want to provide gentle herbal support to their digestive system to help maintain daily comfort. It is not intended for acute conditions but focuses on long-term systemic balance.

**Purity and Ingredient Integrity**
We believe supplements should not add extra burden to the body. Therefore, besides the active ingredient—wormwood extract—the formula uses only necessary plant-based excipients (rice flour) and vegetable capsules (hypromellose). It is free from gluten, soy, dairy, artificial colors, flavors, preservatives, and is non-GMO. Every batch follows strict standards to ensure you ingest only what you expect.

**Usage and Dosage**
Take 1 to 3 capsules daily, preferably before meals with plenty of water. Adjust the dose based on personal feeling and needs, or follow a health professional's guidance. Consistent use supports the body's adaptive adjustments better than occasional high doses.

**Important Notes**
This product is a dietary supplement and is not a substitute for a balanced, varied diet. Not suitable for children under 7, pregnant or breastfeeding women. Do not exceed the recommended daily intake. Store in a cool, dry place, out of reach of children. Do not consume if the seal is broken.`,ingredient_reference:`**Wormwood Extract (Artemisia absinthium)**
Wormwood is an adaptogenic herb with a long history of traditional use for supporting digestive health. It contains various natural plant compounds, including bitter principles. These components work together to help stimulate digestive secretions and support the normal peristaltic rhythm of the gastrointestinal tract. The product uses a whole-herb ground extract form, aiming to deliver the full synergistic effect of the plant, not a single active compound. It is especially suitable for those seeking a traditional herbal approach to gently regulate digestive function and alleviate occasional abdominal discomfort from dietary indiscretion. In this formula, as the sole active ingredient, its action is clear and focused, directly supporting digestive system balance.`}}},{name:"Mannayan ZINK + (60 Tabletten)",url:"https://mannayan.com/Mannayan-ZINK-60-Tabletten/010104",price:["23,50 €"],product_number:"010104",quantity:["60 Tabletten"],image_url:"https://mannayan.com/media/af/25/c4/1766138055/Zink_2025.jpg?ts=1766138055",image_local:"images/Zink_2025.jpg",content:{cn:{label:`Mannayan ZINK +

支持内在平衡的锌与铜

• 支持免疫系统功能
• 维持皮肤、头发与指甲健康
• 参与超过300种酶反应
• 支持认知功能
• 促进细胞保护

60片 | 每日1片

纯净配方：无麸质、无乳糖、无大豆、无人工添加剂、素食友好`,short_description:`你是否感觉身体的防御系统需要一些额外的支持，或者皮肤状态总是不太稳定？日常的压力、不规律的作息，都可能悄悄消耗体内关键的微量营养素，让身体失去原有的平衡。

Mannayan ZINK + 提供了一种更接近食物本质的补充方式。它不仅仅提供锌和铜这两种必需的微量元素，更重要的是，它们被整合在源自天然乳酸菌的营养基质中。这种形式让矿物质更容易被身体识别和利用，就像从完整食物中获取营养一样自然。

锌和铜在体内扮演着协同工作的角色，共同参与数百种代谢过程，从支持免疫细胞的正常功能，到维护皮肤屏障的健康，再到保护细胞免受氧化压力。它们共同构成了维持内在平衡的基础。

每片提供15毫克锌和1毫克铜。配方纯净，不含麸质、乳制品、大豆、酵母、人工色素或防腐剂，适合素食者及对多种物质敏感的人群。`,long_description:`当身体的信号变得微妙——比如更容易感到疲惫，皮肤的小问题反复出现，或是感觉注意力不如从前集中——这常常是内在平衡需要关注的提示。这些看似无关的迹象，可能与体内一些基础营养素的水平息息相关。锌和铜，这两种看似微量的元素，实际上是维持数百种生理过程顺畅运行的基石。

**食物态技术**
Mannayan ZINK + 的核心在于其“食物态”理念。产品中的锌和铜并非孤立的化合物，而是被精心嵌入到一个由非活性保加利亚乳杆菌构成的天然营养基质中。这种乳酸菌在发酵过程中自然形成了包含蛋白质、多糖和脂质的复杂网络。矿物质与这个网络结合后，形态上更接近于食物中天然存在的矿物质复合物。身体对这类复合物有着长期的识别和吸收经验，因此能更顺畅地将其纳入代谢途径，减少了消化系统的识别负担，提升了生物利用度。

**完整体系**
锌与铜在体内构成了一种精妙的协同关系。锌广泛参与蛋白质合成、DNA修复和免疫细胞发育，是身体防御与修复系统的重要参与者。铜则作为多种关键酶的辅因子，在能量代谢、神经递质合成以及结缔组织的形成中不可或缺。两者在抗氧化防御体系中更是紧密合作，共同支持超氧化物歧化酶（SOD）的活性，帮助中和自由基，维护细胞健康。配方中1:15的铜锌比例经过考量，旨在支持两者在吸收和功能上的平衡，避免因单一元素过量而干扰另一种元素的代谢。这种配比模拟了天然食物中矿物质共存的智慧，支持身体从整体层面恢复稳态。

**适合人群**
这款产品适合那些生活节奏快、饮食可能不够均衡，希望为身体基础防御和修复能力提供支持的人。也适合关注皮肤、头发和指甲长期健康状态，寻求由内而外养护方案的人。对于素食者或饮食受限，担心微量元素摄入不足的人，它提供了一种纯净的补充选择。在季节更替、感觉身体需要额外关照的阶段，它也能作为日常养护的一部分。

**纯净与成分完整性**
我们坚信，补充剂本身不应成为身体的负担。因此，配方中严格排除了常见的致敏原和不需要的添加剂：无麸质、无乳糖、无大豆、无酵母、无人工色素、无防腐剂、不含转基因成分。片剂使用的辅料仅限于必要的成型和包衣用途，如微晶纤维素和植物来源的硬脂酸。纯净的配方确保了身体吸收的是我们意图提供的核心营养，别无他物。

**健康管理者与经销商：临床背景与方案搭配**
对于健康领域的专业人士，本产品可作为基础营养支持方案的一部分。其食物态形式对消化系统温和的特性，使其也适用于肠道较为敏感或处于恢复期的个案。在制定支持免疫、皮肤健康或抗氧化防御的综合方案时，可将Mannayan ZINK + 与维生素C、维生素D或其他植物抗氧化剂结合，形成协同的营养网络。其纯净配方也简化了在排除性饮食或过敏管理方案中的整合工作。

**用法与剂量**
建议每日服用1片，随足量水吞服。最佳服用时间可与主餐同服，以顺应自然的消化过程。一瓶包含60片，为期两个月的用量。建议持续补充一段时间，以支持身体逐步建立和维持更佳的营养储备。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过推荐每日剂量。置于儿童无法触及之处，避光、阴凉干燥保存。若密封条破损，请勿食用。如有特定健康状况或正在服用药物，使用前请咨询您的健康顾问。`,ingredient_reference:`**锌（来自柠檬酸锌）**
锌是人体必需的微量元素，作为超过300种酶的辅因子，广泛参与新陈代谢的各个方面。它在蛋白质合成、DNA修复、细胞生长与分裂中起着核心作用，是维持免疫系统正常功能、皮肤黏膜完整性以及味觉嗅觉感知所必需的。在本产品中，锌以柠檬酸盐的形式存在，并进一步嵌入乳酸菌基质，这种形式有助于矿物质的稳定和吸收。它特别适合那些希望支持身体基础防御能力、关注皮肤健康或饮食中锌来源可能不足的人群。在配方中，锌与铜协同工作，共同维护抗氧化酶系统的活性。

**铜（来自硫酸铜）**
铜是另一种关键的微量元素，主要作为细胞色素c氧化酶、超氧化物歧化酶（SOD）和赖氨酰氧化酶等重要酶的组成部分。它参与体内的能量生产（ATP合成）、铁代谢、神经系统的发育与功能，以及结缔组织（如胶原蛋白和弹性蛋白）的交联形成。产品中的铜同样经过食物态工艺处理，生物利用度得到优化。它适合需要支持能量代谢、神经系统健康或血管弹性的人群。配方中铜的添加不仅补充其自身功能，更关键的是与锌形成适当的比例，确保两者在吸收和生理功能上相互支持而非竞争，共同维持细胞内的氧化还原平衡。`},en:{label:`Mannayan ZINK +

Zinc & Copper for Inner Balance

• Supports immune system function
• Maintains healthy skin, hair, and nails
• Involved in over 300 enzyme reactions
• Supports cognitive function
• Promotes cellular protection

60 Tablets | 1 Tablet Daily

Pure Formula: Gluten-Free, Lactose-Free, Soy-Free, No Artificial Additives, Vegetarian-Friendly`,short_description:`Do you feel your body's defenses could use extra support, or that your skin's condition is often unstable? Daily stress and irregular routines can quietly deplete key micronutrients, disrupting your body's natural balance.

Mannayan ZINK + offers a supplement that's closer to the essence of food. It doesn't just provide the essential trace minerals zinc and copper; more importantly, they are integrated into a nutritional matrix derived from natural lactic acid bacteria. This form allows minerals to be more easily recognized and utilized by the body, just as naturally as obtaining nutrients from whole foods.

Zinc and copper work synergistically in the body, participating in hundreds of metabolic processes—from supporting normal immune cell function and maintaining skin barrier health, to protecting cells from oxidative stress. Together, they form the foundation for sustaining inner balance.

Each tablet provides 15 mg of zinc and 1 mg of copper. The formula is pure, free from gluten, dairy, soy, yeast, artificial colors, or preservatives, and is suitable for vegetarians and those sensitive to various substances.`,long_description:`When the body's signals become subtle—such as feeling fatigued more easily, recurring minor skin issues, or a sense that focus isn't as sharp as before—it's often a sign that inner balance needs attention. These seemingly unrelated signs may be closely linked to the levels of foundational nutrients in the body. Zinc and copper, though trace elements, are actually cornerstones for the smooth functioning of hundreds of physiological processes.

**Food-State Technology**
The core of Mannayan ZINK + lies in its "food-state" philosophy. The zinc and copper in the product are not isolated compounds but are carefully embedded into a natural nutritional matrix composed of inactivated Lactobacillus bulgaricus. During fermentation, this lactic acid bacterium naturally forms a complex network of proteins, polysaccharides, and lipids. When minerals bind to this network, their form more closely resembles the natural mineral complexes found in food. The body has long-standing experience recognizing and absorbing such complexes, allowing for smoother integration into metabolic pathways, reducing the digestive system's burden of identification, and enhancing bioavailability.

**A Complete System**
Zinc and copper form a delicate synergistic relationship in the body. Zinc is extensively involved in protein synthesis, DNA repair, and immune cell development, playing a key role in the body's defense and repair systems. Copper acts as a cofactor for many critical enzymes, essential for energy metabolism, neurotransmitter synthesis, and the formation of connective tissue. The two work even more closely within the antioxidant defense system, jointly supporting the activity of superoxide dismutase (SOD) to help neutralize free radicals and maintain cellular health. The 1:15 copper-to-zinc ratio in the formula is carefully considered to support a balance in their absorption and function, preventing interference in the metabolism of one element due to excess of the other. This ratio mimics the wisdom of minerals coexisting in natural foods, supporting the body in restoring homeostasis from a holistic level.

**Who It's For**
This product is suitable for those with fast-paced lives and potentially imbalanced diets who wish to support their body's foundational defense and repair capabilities. It's also for individuals concerned with the long-term health of their skin, hair, and nails, seeking an inside-out care approach. For vegetarians or those with dietary restrictions who worry about insufficient trace mineral intake, it offers a pure supplemental option. During seasonal transitions or times when the body feels it needs extra care, it can serve as part of daily maintenance.

**Purity and Ingredient Integrity**
We firmly believe that supplements themselves should not become a burden on the body. Therefore, the formula strictly excludes common allergens and unnecessary additives: gluten-free, lactose-free, soy-free, yeast-free, no artificial colors, no preservatives, and non-GMO. Excipients used in the tablets are limited to essential purposes like forming and coating, such as microcrystalline cellulose and plant-derived stearic acid. The pure formula ensures the body absorbs the core nutrients we intend to provide, and nothing else.

**For Health Practitioners & Distributors: Clinical Context & Protocol Pairing**
For professionals in the health field, this product can serve as part of a foundational nutritional support protocol. Its food-state form, gentle on the digestive system, also makes it suitable for clients with sensitive guts or those in recovery. When developing comprehensive protocols to support immunity, skin health, or antioxidant defense, Mannayan ZINK + can be combined with Vitamin C, Vitamin D, or other botanical antioxidants to create a synergistic nutritional network. Its pure formula also simplifies integration into elimination diets or allergy management plans.

**Usage & Dosage**
Take 1 tablet daily with a full glass of water. The optimal time is with a main meal to align with the natural digestive process. One bottle contains 60 tablets, a two-month supply. Consistent supplementation over a period is recommended to help the body gradually build and maintain better nutrient reserves.

**Important Notes**
This product is a dietary supplement and is not a substitute for a varied and balanced diet. Do not exceed the recommended daily dose. Keep out of reach of children. Store in a cool, dry place away from light. Do not consume if the seal is broken. If you have specific health conditions or are taking medication, consult your health advisor before use.`,ingredient_reference:`**Zinc (from Zinc Citrate)**
Zinc is an essential trace mineral that acts as a cofactor for over 300 enzymes, broadly involved in all aspects of metabolism. It plays a central role in protein synthesis, DNA repair, and cell growth and division, and is necessary for maintaining normal immune system function, the integrity of skin and mucous membranes, and the perception of taste and smell. In this product, zinc is present in citrate form and further embedded in a lactic acid bacteria matrix, a form that aids in the mineral's stability and absorption. It is particularly suitable for those looking to support the body's foundational defenses, are concerned with skin health, or whose diets may be lacking in zinc sources. In the formula, zinc works synergistically with copper to maintain the activity of antioxidant enzyme systems.

**Copper (from Copper Sulfate)**
Copper is another key trace mineral, primarily serving as a component of important enzymes like cytochrome c oxidase, superoxide dismutase (SOD), and lysyl oxidase. It is involved in the body's energy production (ATP synthesis), iron metabolism, the development and function of the nervous system, and the cross-linking formation of connective tissues like collagen and elastin. The copper in this product is also processed using food-state technology, optimizing its bioavailability. It is suitable for those needing support for energy metabolism, nervous system health, or vascular elasticity. The addition of copper in the formula not only fulfills its own functions but, more crucially, establishes an appropriate ratio with zinc to ensure the two support rather than compete with each other in absorption and physiological function, jointly maintaining intracellular redox balance.`}}},{name:"Mannayan ZYM + (60 Kapseln)",url:"https://mannayan.com/Mannayan-ZYM-60-Kapseln/010105",price:["44,90 €"],product_number:"010105",quantity:["60 Kapseln"],image_url:"https://mannayan.com/media/4f/68/70/1766138078/Zym%2B_2025.jpg?ts=1766138078",image_local:"images/Zym%2B_2025.jpg",content:{cn:{label:`Mannayan ZYM+ 消化酶复合物
支持全面消化，缓解餐后不适
• 分解碳水化合物、蛋白质与脂肪
• 含乳糖酶，支持乳制品消化
• 纯植物来源，高效活性
• 适合敏感体质与素食者
60粒胶囊 | 每日1-2粒，餐前服用
无麸质、无乳制品、无人工添加、非转基因`,short_description:`你是否在饱餐一顿后，常常感到腹部沉重、胀气，或是食物仿佛停留在胃里迟迟不消化？现代生活的快节奏和饮食结构，有时会让我们的消化系统感到疲惫。

Mannayan ZYM+ 是一款纯植物来源的复合消化酶配方。它就像为你的消化过程提供及时的支援，补充身体自身可能不足的消化酶，帮助更有效地分解食物中的碳水化合物、蛋白质和脂肪，让营养吸收更顺畅，身体感觉更轻松。配方中还特别包含了乳糖酶，为享用乳制品时提供额外支持。

每日只需1至2粒，随主餐服用。这款配方纯净温和，不含麸质、乳制品、大豆、酵母及人工添加剂，也适合素食者和敏感体质人士。`,long_description:`一顿饭本该带来满足与能量，但有时留下的却是腹胀、不适和持续的疲惫感。当消化过程变得迟缓，不仅身体感到沉重，整体的活力也会受到影响。这常常是身体消化酶分泌不足或饮食负担过重的信号，需要从根源上给予温和而有效的支持。

**植物酶的力量**
Mannayan ZYM+ 的核心是一组精选的植物源消化酶。与动物来源的酶不同，这些酶在广泛的pH值范围内保持稳定和高效，能更好地适应消化道的不同环境，从胃部到小肠持续发挥作用。这种植物性来源也意味着更高的纯净度和兼容性，尤其适合追求纯净配方和素食生活方式的个体。

**一个完整的消化支持体系**
这个配方不是单一成分的简单叠加，而是一个协同工作的体系。淀粉酶专注于分解碳水化合物；蛋白酶复合物（如菠萝蛋白酶、木瓜蛋白酶和真菌蛋白酶）针对不同来源的蛋白质进行水解；脂肪酶则负责脂肪的消化。特别添加的乳糖酶，为消化牛奶中的糖分提供针对性帮助。而纤维素酶能辅助分解植物细胞壁，释放更多内在营养。这种多靶点的协同作用，旨在应对混合膳食带来的综合消化挑战，促进食物的全面分解与吸收。

**适合这些生活情境的你**
如果你经常在外就餐，饮食内容难以掌控；或者随着年龄增长，感觉消化能力不如从前；又或者你的饮食中蛋白质、膳食纤维含量较高，偶尔感到消化吃力；甚至是享受乳制品后容易感到不适。在这些时刻，为消化系统提供一些额外的酶支持，可以帮助身体更从容地处理食物，减轻餐后的负担感。

**纯净与成分的完整性**
我们深知，补充剂本身不应成为身体的额外负担。因此，ZYM+ 坚持纯净配方：不含麸质、乳制品、大豆、酵母、淀粉、糖及任何人工色素、香料或防腐剂。胶囊由植物纤维素构成，整个产品非转基因，且适合素食者。成分的纯粹确保了效力的专注，让你摄入的每一粒胶囊，都只为支持消化健康这一核心目标服务。

**健康管理者的视角**
许多自然疗法医师和健康顾问将消化视为整体健康的基石。一个功能良好的消化系统是营养吸收和能量产生的起点。ZYM+ 这样的广谱消化酶配方，常被纳入旨在优化消化功能、缓解功能性消化不良的整体方案中。它可以与益生菌、膳食纤维或胃酸支持产品搭配使用，从不同层面共同维护胃肠环境的平衡与效率。

**用法与剂量**
建议每日服用1至2粒胶囊，最好在开始主餐时随水吞服。剂量可根据膳食的丰盛程度和个人需要调整。请勿在空腹时服用。持续使用有助于在饮食期间提供稳定的消化支持。

**重要提示**
本品为膳食补充剂，不能替代均衡多样的饮食。请勿超过每日推荐摄入量。不建议儿童、孕妇、哺乳期妇女使用。如果您已知有胃或十二指肠溃疡、胃肠道粘膜炎症或急性胰腺炎，请勿使用本品。请将产品置于儿童无法触及的阴凉干燥处保存。`,ingredient_reference:`**淀粉酶**
淀粉酶是一种负责分解碳水化合物的消化酶，能将淀粉和糖原等复杂碳水化合物分解为更易吸收的简单糖。在ZYM+配方中，它帮助缓解因摄入米饭、面食等富含淀粉食物后可能产生的胀气与饱胀感。对于饮食中碳水化合物比例较高的人群尤为重要，它与配方中的其他酶协同工作，确保碳水化合物的消化不成为整个消化过程的瓶颈。

**菠萝蛋白酶**
提取自菠萝茎，这是一种蛋白水解酶，能有效分解蛋白质。它不仅在消化过程中发挥作用，还有助于缓解进食高蛋白食物后的消化压力。其植物来源的特性使其在胃部的酸性环境中相对稳定，能更持久地发挥功效。它与木瓜蛋白酶和真菌蛋白酶共同构成了一个全面的蛋白质消化支持网络。

**脂肪酶**
脂肪酶是消化脂肪的关键酶，能将膳食中的甘油三酯分解为脂肪酸和甘油，从而促进脂肪的吸收和利用。在现代饮食脂肪摄入普遍的情况下，补充脂肪酶能显著减轻消化系统处理油腻食物的负担。它在配方中与分解碳水、蛋白质的酶相辅相成，实现对整个膳食的全面覆盖。

**真菌蛋白酶**
这是一种来源于真菌的蛋白水解酶，具有广泛的pH适应性，能在消化道不同部位保持活性。它能分解多种类型的蛋白质肽键，与菠萝蛋白酶和木瓜蛋白酶协同，确保来自不同食物来源的蛋白质都能得到有效处理。这种多样性对于应对复杂膳食尤其有价值。

**甜菜碱盐酸盐**
甜菜碱盐酸盐在配方中主要作用是为胃部提供适宜的酸性环境。充足的胃酸对于激活某些消化酶（如胃蛋白酶）和蛋白质的初步变性至关重要。它通过优化消化过程的第一步，为后续小肠中的酶解作用做好准备，从而提升整个消化流程的效率。

**木瓜蛋白酶**
提取自木瓜果实，是另一种强效的植物性蛋白水解酶。它能高效分解肉类、豆类等食物中的蛋白质。木瓜蛋白酶与菠萝蛋白酶、真菌蛋白酶的特性略有不同，三者结合可以覆盖更广泛的蛋白质结构和pH条件，形成强大的蛋白质消化合力，特别适合蛋白质摄入量大的饮食模式。

**木霉纤维素酶**
这种酶能分解纤维素——植物细胞壁的主要成分。人类自身不产生纤维素酶，补充它可以帮助打破植物性食物的细胞结构，释放其中被封存的维生素、矿物质和植物营养素，提高食物的营养利用率。同时，它也能辅助减轻某些高纤维蔬菜可能带来的胀气感，使膳食纤维的益处最大化，不适最小化。

**乳糖酶**
乳糖酶是专门分解乳糖（牛奶中的糖）的酶。对于因年龄增长或体质原因导致内源性乳糖酶活性下降的人群，在食用乳制品前补充乳糖酶，可以预防或减轻乳糖不耐受引起的腹胀、腹泻等不适。它在配方中提供了对乳制品消化的针对性支持，让享受奶酪、酸奶等食物变得更轻松。`},en:{label:`Mannayan ZYM+ Digestive Enzyme Complex
Supports Comprehensive Digestion, Relieves Post-Meal Discomfort
• Breaks down carbohydrates, proteins, and fats
• Contains lactase for dairy digestion support
• Pure plant-derived, highly active
• Suitable for sensitive constitutions and vegetarians
60 Capsules | 1-2 capsules daily, take before meals
Gluten-Free, Dairy-Free, No Artificial Additives, Non-GMO`,short_description:`Do you often feel abdominal heaviness, bloating, or as if food just sits in your stomach after a satisfying meal? The fast pace of modern life and our dietary patterns can sometimes leave our digestive system feeling overwhelmed.

Mannayan ZYM+ is a pure plant-derived complex digestive enzyme formula. It acts like timely support for your digestive process, supplementing digestive enzymes your body may be lacking, helping to more effectively break down carbohydrates, proteins, and fats from food. This allows for smoother nutrient absorption and a lighter feeling in your body. The formula also specifically includes lactase, providing extra support when enjoying dairy products.

Just 1 to 2 capsules daily, taken with your main meal. This formula is pure and gentle, free from gluten, dairy, soy, yeast, and artificial additives, making it suitable for vegetarians and those with sensitive constitutions.`,long_description:`A meal should bring satisfaction and energy, but sometimes it leaves behind bloating, discomfort, and lingering fatigue. When digestion slows down, not only does the body feel heavy, but overall vitality can also be affected. This is often a sign of insufficient digestive enzyme production or a heavy dietary load, requiring gentle yet effective support at the root cause.

**The Power of Plant Enzymes**
At the core of Mannayan ZYM+ is a selected group of plant-sourced digestive enzymes. Unlike animal-derived enzymes, these enzymes remain stable and effective across a wide pH range, allowing them to better adapt to the different environments of the digestive tract, working consistently from the stomach to the small intestine. This plant-based origin also means higher purity and compatibility, especially suitable for individuals seeking pure formulas and a vegetarian lifestyle.

**A Complete Digestive Support System**
This formula is not a simple stack of single ingredients, but a synergistic system. Amylase focuses on breaking down carbohydrates; a protease complex (including bromelain, papain, and fungal protease) targets proteins from various sources for hydrolysis; lipase is responsible for fat digestion. Specially added lactase provides targeted help for digesting milk sugar. Cellulase assists in breaking down plant cell walls, releasing more intrinsic nutrients. This multi-target, synergistic action aims to address the comprehensive digestive challenges posed by mixed meals, promoting the complete breakdown and absorption of food.

**For You in These Life Situations**
If you often eat out, with little control over your diet; or if you feel your digestive capacity isn't what it used to be as you age; or if your diet is high in protein and dietary fiber, occasionally feeling digestive strain; or even if you experience discomfort after enjoying dairy products. In these moments, providing some extra enzymatic support for your digestive system can help your body process food more comfortably, easing that post-meal burden.

**Purity and Ingredient Integrity**
We understand that supplements themselves should not become an extra burden on the body. Therefore, ZYM+ adheres to a pure formula: free from gluten, dairy, soy, yeast, starch, sugar, and any artificial colors, flavors, or preservatives. The capsules are made from plant cellulose, the entire product is non-GMO, and it is suitable for vegetarians. The purity of the ingredients ensures focused potency, so every capsule you take serves the core goal of supporting digestive health.

**From a Health Manager's Perspective**
Many naturopathic doctors and health advisors view digestion as the cornerstone of overall health. A well-functioning digestive system is the starting point for nutrient absorption and energy production. Broad-spectrum digestive enzyme formulas like ZYM+ are often incorporated into holistic plans aimed at optimizing digestive function and relieving functional dyspepsia. It can be used alongside probiotics, dietary fiber, or stomach acid support products, working together on different levels to maintain the balance and efficiency of the gastrointestinal environment.

**Usage and Dosage**
Take 1 to 2 capsules daily, preferably swallowed with water at the start of your main meal. The dosage can be adjusted based on the richness of the meal and individual needs. Do not take on an empty stomach. Consistent use helps provide steady digestive support during meals.

**Important Notice**
This product is a dietary supplement and is not a substitute for a balanced and varied diet. Do not exceed the recommended daily intake. Not recommended for children, pregnant women, or nursing mothers. Do not use this product if you have a known gastric or duodenal ulcer, inflammation of the gastrointestinal mucosa, or acute pancreatitis. Store in a cool, dry place out of reach of children.`,ingredient_reference:`**Amylase**
Amylase is a digestive enzyme responsible for breaking down carbohydrates, converting complex carbohydrates like starch and glycogen into simpler, more easily absorbed sugars. In the ZYM+ formula, it helps alleviate the bloating and fullness that can occur after consuming starchy foods like rice and pasta. It is particularly important for individuals with a high proportion of carbohydrates in their diet, and it works synergistically with other enzymes in the formula to ensure carbohydrate digestion does not become a bottleneck in the overall digestive process.

**Bromelain**
Extracted from pineapple stems, this is a proteolytic enzyme that effectively breaks down proteins. It not only functions during digestion but also helps relieve digestive pressure after consuming high-protein meals. Its plant-derived nature makes it relatively stable in the acidic environment of the stomach, allowing it to work effectively for a longer duration. Together with papain and fungal protease, it forms a comprehensive network for protein digestion support.

**Lipase**
Lipase is the key enzyme for digesting fats, breaking down dietary triglycerides into fatty acids and glycerol, thereby promoting fat absorption and utilization. Given the generally high fat intake in modern diets, supplementing with lipase can significantly reduce the burden on the digestive system when processing greasy foods. In the formula, it works in tandem with enzymes that break down carbs and proteins, achieving comprehensive coverage of the entire meal.

**Fungal Protease**
This is a proteolytic enzyme derived from fungi, known for its broad pH adaptability, allowing it to remain active in different parts of the digestive tract. It can break down various types of protein peptide bonds. Working synergistically with bromelain and papain, it ensures proteins from different food sources are effectively processed. This diversity is especially valuable for handling complex meals.

**Betaine Hydrochloride**
In the formula, betaine hydrochloride primarily serves to provide an optimal acidic environment in the stomach. Adequate stomach acid is crucial for activating certain digestive enzymes (like pepsin) and the initial denaturation of proteins. By optimizing the first step of digestion, it prepares for subsequent enzymatic action in the small intestine, thereby enhancing the efficiency of the entire digestive process.

**Papain**
Extracted from papaya fruit, this is another potent plant-based proteolytic enzyme. It efficiently breaks down proteins from foods like meat and legumes. Papain has slightly different characteristics from bromelain and fungal protease; the combination of the three covers a wider range of protein structures and pH conditions, creating a powerful force for protein digestion. This is particularly suitable for dietary patterns with high protein intake.

**Trichoderma Cellulase**
This enzyme breaks down cellulose, the main component of plant cell walls. Humans do not produce cellulase themselves. Supplementing with it can help break down the cellular structure of plant-based foods, releasing the vitamins, minerals, and phytonutrients locked inside, thereby improving the nutritional utilization of food. Simultaneously, it can help reduce the bloating that some high-fiber vegetables may cause, maximizing the benefits of dietary fiber while minimizing discomfort.

**Lactase**
Lactase is the enzyme specifically responsible for breaking down lactose (the sugar in milk). For individuals whose endogenous lactase activity has decreased due to aging or constitution, supplementing with lactase before consuming dairy products can prevent or alleviate discomfort like bloating and diarrhea associated with lactose intolerance. In the formula, it provides targeted support for dairy digestion, making the enjoyment of foods like cheese and yogurt easier.`}}}],m=_;let u=null,p=[];function d(e,n,i){e.addEventListener(n,i),p.push({el:e,event:n,handler:i})}function f(e){const n=e.split(`
`),i=n[0],a=n[1]||"",t=n.slice(2).filter(s=>s.startsWith("•")).map(s=>s.replace("•","").trim()),o=n.filter(s=>!s.startsWith("•")&&n.indexOf(s)>1);return{title:i,sub:a,bullets:t,footer:o}}function B(e){return e?e.split(/\n\n(?=\*\*)/).map(n=>{const i=n.match(/^\*\*(.+?)\*\*/),a=i?i[1]:"",t=n.replace(/^\*\*(.+?)\*\*\n?/,"").trim();return{name:a,desc:t}}).filter(n=>n.name):[]}function v(e){return e?e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n\n/g,"<br><br>"):""}function w(){const e=document.getElementById("products-grid");if(!e)return;const n=g[r.lang];document.getElementById("hero-eyebrow").textContent=n.eyebrow,document.getElementById("hero-title").innerHTML=n.heroTitle,document.getElementById("hero-sub").textContent=n.heroSub,document.getElementById("section-title").textContent=n.sectionTitle,document.getElementById("section-count").textContent=`${m.length} ${r.lang==="cn"?"款产品":"products"}`,e.innerHTML="",m.forEach((i,a)=>{var b;const t=(b=i.content)==null?void 0:b[r.lang];if(!t)return;const o=f(t.label),s=document.createElement("div");s.className="product-card",s.style.animationDelay=a*.08+"s",s.innerHTML=`
      <div class="card-image-wrap">
        <img src="${i.image_url}" alt="${o.title}" loading="lazy" onerror="this.style.opacity=0.3">
      </div>
      <div class="card-body">
        <h3 class="card-label">${o.title}</h3>
        <p class="card-quantity">${o.footer[0]||i.quantity[0]}</p>
        <ul class="card-bullets">
          ${o.bullets.slice(0,4).map(M=>`<li>${M}</li>`).join("")}
        </ul>
        <div class="card-footer">
          <span class="card-price">${i.price[0]}</span>
          <span class="card-cta">${n.readMore}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>`,s.addEventListener("click",()=>z(a)),e.appendChild(s)})}function z(e){u=e,x("overview"),I(),document.getElementById("modal-overlay").classList.add("open"),document.body.style.overflow="hidden"}function h(){document.getElementById("modal-overlay").classList.remove("open"),document.body.style.overflow=""}function I(){const e=m[u],n=e.content[r.lang],i=f(n.label),a=g[r.lang];document.getElementById("modal-img").src=e.image_url,document.getElementById("modal-img").alt=i.title,document.getElementById("modal-tag").textContent=`#${e.product_number}`,document.getElementById("modal-title").textContent=i.title,document.getElementById("modal-sub").textContent=i.sub||i.footer[0]||e.quantity[0],document.getElementById("modal-bullets").innerHTML=f(n.label).bullets.map(o=>`<li>${o}</li>`).join(""),document.getElementById("tab-overview").textContent=a.tabOverview,document.getElementById("tab-details").textContent=a.tabDetails,document.getElementById("tab-ingredients").textContent=a.tabIngredients,document.getElementById("modal-short").innerHTML=v(n.short_description),document.getElementById("modal-long").innerHTML=v(n.long_description);const t=B(n.ingredient_reference);document.getElementById("modal-ingredients").innerHTML=t.map(o=>`
    <div class="ingredient-card">
      <div class="ingredient-name">${o.name}</div>
      <div class="ingredient-desc">${o.desc}</div>
    </div>`).join("")}function x(e){["overview","details","ingredients"].forEach(n=>{document.getElementById("tab-"+n).classList.toggle("active",n===e),document.getElementById("panel-"+n).classList.toggle("active",n===e)})}function P(){return`
<section class="hero">
  <p class="hero-eyebrow" id="hero-eyebrow"></p>
  <h1 class="hero-title" id="hero-title"></h1>
  <p class="hero-sub" id="hero-sub"></p>
  <div class="hero-rule"></div>
</section>

<section class="products-section">
  <div class="section-header">
    <h2 class="section-title" id="section-title"></h2>
    <span class="section-count" id="section-count"></span>
  </div>
  <div class="products-grid" id="products-grid"></div>
</section>

<div class="modal-overlay" id="modal-overlay">
  <div class="modal" id="modal">
    <button class="modal-close" id="modal-close-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
    <div class="modal-top">
      <div class="modal-image-col">
        <img id="modal-img" src="" alt="">
      </div>
      <div class="modal-info-col">
        <p class="modal-tag" id="modal-tag"></p>
        <h2 class="modal-title" id="modal-title"></h2>
        <p class="modal-sub" id="modal-sub"></p>
        <ul class="modal-bullets" id="modal-bullets"></ul>
        <div class="modal-price-row">
          <span class="modal-price" id="modal-price"></span>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="tabs">
        <button class="tab-btn active" id="tab-overview"></button>
        <button class="tab-btn" id="tab-details"></button>
        <button class="tab-btn" id="tab-ingredients"></button>
      </div>
      <div class="tab-panel active" id="panel-overview">
        <div class="prose" id="modal-short"></div>
      </div>
      <div class="tab-panel" id="panel-details">
        <div class="prose" id="modal-long"></div>
      </div>
      <div class="tab-panel" id="panel-ingredients">
        <div class="ingredient-grid" id="modal-ingredients"></div>
      </div>
    </div>
  </div>
</div>`}function D(e){e.innerHTML=P(),["overview","details","ingredients"].forEach(a=>{d(document.getElementById("tab-"+a),"click",()=>x(a))}),d(document.getElementById("modal-close-btn"),"click",h),d(document.getElementById("modal-overlay"),"click",a=>{a.target===document.getElementById("modal-overlay")&&h()}),d(document,"keydown",a=>{a.key==="Escape"&&h()}),d(document,"langchange",()=>{w(),u!==null&&document.getElementById("modal-overlay").classList.contains("open")&&I()}),w()}function F(){p.forEach(({el:e,event:n,handler:i})=>e.removeEventListener(n,i)),p=[],u=null,document.body.style.overflow=""}const E=Object.freeze(Object.defineProperty({__proto__:null,mount:D,unmount:F},Symbol.toStringTag,{value:"Module"}));function N(e){e.innerHTML=`
<section class="hero hero--static hero--full">
  <p class="hero-eyebrow">Bioenergetic Technology</p>
  <h1 class="hero-title"><em>TimeWaver</em></h1>
  <p class="hero-sub">Coming soon.</p>
  <div class="hero-rule"></div>
</section>`}function O(){}const q=Object.freeze(Object.defineProperty({__proto__:null,mount:N,unmount:O},Symbol.toStringTag,{value:"Module"}));T("mannayan",E);T("timewaver",q);A();k("cn");C();
