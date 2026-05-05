// 引入谷歌分析脚本
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-96229663-1', 'D-X-Y.github.io');
ga('send', 'pageview');

// 工厂函数：根据 id 自动拼接 resources 路径，避免每条文章都重复手写
function makePub({
  id, title, authors, correspondingAuthors, venue, highlight,
  pdf,
  poster,
  extraLinks = [],
  imageExt = 'png',
}) {
  const base = `./resources/${id}`;
  const links = [];
  if (pdf)    links.push({ label: 'PDF',    url: pdf });
              links.push({ label: 'BibTex', url: `${base}/bib.txt` });
  if (poster) links.push({ label: 'Poster', url: `${base}/poster.${poster}` });
  links.push(...extraLinks);

  if (!/^\d{4}_[A-Za-z\-]+_[a-z]+$/.test(id)) {
    console.warn(`Publication id 格式可疑: ${id}`);
  }

  return {
    id, title, authors, correspondingAuthors, venue, highlight,
    links,
    image: `${base}/image.${imageExt}`,
  };
}

// 这些会议在 badge 上保留年份,其他(期刊等)删除年份
const KEEP_YEAR_VENUES = ['ICML', 'ICLR', 'NeurIPS', 'AAAI', 'COLING', 'ACL'];

// venue badge 中需要高亮的荣誉关键词(大小写不敏感,按长度从长到短匹配避免子串吃掉父串)
const VENUE_HONOR_KEYWORDS = [
  'Nature Communications',
  "Editor's Pick",
  'Featured article',
  'Spotlight',
];

// 工具函数：转义正则元字符
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 工具函数:将 venue 文本中的荣誉关键词包成 <span class="venue-honor">
function highlightVenueHonors(venueText) {
  // 按长度倒序,避免短关键词吃掉长关键词的一部分
  const sorted = [...VENUE_HONOR_KEYWORDS].sort((a, b) => b.length - a.length);
  let result = venueText;
  sorted.forEach(kw => {
    // 用 \b 词边界 + 大小写不敏感
    const pattern = new RegExp(`(${escapeRegExp(kw)})`, 'gi');
    result = result.replace(pattern, '<span class="venue-honor">$1</span>');
  });
  return result;
}

// 工具函数:删掉 venue 中的四位年份(只对非白名单 venue 调用)
function stripYear(venueText) {
  return venueText.replace(/\s*\b\d{4}\b\s*/, ' ').replace(/\s+/g, ' ').trim();
}

// 文章信息列表
const publications = [
  makePub({
    id: "2024_Arxiv_zhuqunxi",
    title: "Governing equation discovery of a complex system from snapshots",
    authors: "Qunxi Zhu, Bolin Zhao, Jingdong Zhang, Peiyang Li, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "arXiv:2410.16694",
    highlight: 'A data-driven, simulation-free framework, called SpIDES, that discovers the governing equation of a complex system from snapshots.',
    pdf: "https://arxiv.org/pdf/2410.16694",
  }),
  makePub({
    id: "2026_Chaos_zhangjiaxuan",
    title: "A general framework for neural delay differential equations with various delay types",
    authors: "Jiaxuan Zhang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "Chaos 2026",
    highlight: 'A simulation-free training framework for learning neural delay differential equations with various delay types.',
    pdf: "https://doi.org/10.1063/5.0325998",
  }),
  makePub({
    id: "2026_ICML_luwanfeng",
    title: "Interpretable Functional Koopman Learning with Non-Markovian Closure for Spatiotemporal Systems",
    authors: "Wanfeng Lu, He Ma, Wei Lin, Qunxi Zhu",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "ICML 2026 (Spotlight)",
    highlight: 'A functional Koopman learning framework with non-Markovian memory correction for modeling spatiotemporal dynamics.',
    pdf: "https://openreview.net/forum?id=lquDiBCgNJ",
  }),
  makePub({
    id: "2026_DCDS-Intelligence_zhangjiaxuan",
    title: "Extended Neural Delay Differential Equations",
    authors: "Jiaxuan Zhang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "Discrete and Continuous Dynamical Systems - Series I: Intelligence 2026",
    highlight: "ENDDEs, taking delay, termination time, initial state and neural network parameters as trainable parameters.",
    pdf: "https://www.aimsciences.org/article/doi/10.3934/dcdsi.A260103",
  }),
  makePub({
    id: "2026_ICLR_zhaobolin",
    title: "Delay Flow Matching",
    authors: "Bolin Zhao, Xiaoyu Zhang, Yuting Dong, Xin Lu, Wei Lin, Qunxi Zhu",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin", "Xin Lu"],
    venue: "ICLR 2026",
    highlight: "A generative framework with universal approximation guarantees that integrates Delay Differential Equations into Flow Matching.",
    pdf: "https://openreview.net/forum?id=6lH1XblLpo",
  }),
  makePub({
    id: "2025_ICML_zhangjingdong",
    title: "Neural Event-Triggered Control with Optimal Scheduling",
    authors: "Luan Yang, Jingdong Zhang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "ICML 2025",
    highlight: 'A framework that learns the event-triggered controller with minimal triggering times in resource-constrained scenarios.',
    pdf: "https://arxiv.org/abs/2405.11406",
    poster: "png",
  }),
  makePub({
    id: "2024_PRE_zhangjingdong",
    title: "Machine-learning-coined noise induces energy-saving synchrony",
    authors: "Jingdong Zhang, Luan Yang, Qunxi Zhu, Celso Grebogi, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "Physical Review E, Letter 2024",
    highlight: 'A theory-guided AI framework to design artificial noise capable of inducing energy-saving complete synchronization in any coupled nonlinear physical systems.',
    pdf: "https://journals.aps.org/pre/accepted/e007fYd1C9d18f88e3e850c998d60e8a2e7f5ea97",
  }),
  makePub({
    id: "2024_ICML_zhuqunxi",
    title: "Switched Flow Matching: Eliminating Singularities via Switching ODEs",
    authors: "Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu"],
    venue: "ICML 2024",
    highlight: 'A versatile continuous-time generative model, SFM, that eliminates singularities encountered in the FM via switching the candidate ODEs.',
    pdf: "https://arxiv.org/abs/2405.11605",
    poster: "pdf",
  }),
  makePub({
    id: "2024_ICML_zhangjingdong",
    title: "FESSNC: Fast Exponentially Stable and Safe Neural Controller",
    authors: "Jingdong Zhang, Luan Yang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "ICML 2024",
    highlight: 'A Fast learning stabilization controller with both rigorous exponential stability and safety guarantees.',
    pdf: "https://arxiv.org/abs/2405.11406",
    poster: "png",
  }),
  makePub({
    id: "2024_ICML_lixin",
    title: "From Fourier to Neural ODEs: Flow Matching for Modeling Complex Systems",
    authors: "Xin Li, Jingdong Zhang, Qunxi Zhu, Chengli Zhao, Xue Zhang, Xiaojun Duan, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao"],
    venue: "ICML 2024",
    highlight: 'A simulation-free framework, Fourier Neural ODEs, that effectively trains Neural ODEs.',
    pdf: "https://arxiv.org/abs/2405.11542",
    poster: "pdf",
  }),
  makePub({
    id: "2024_COLING_liushunyu",
    title: "Let's Rectify Step by Step: Improving Aspect-based Sentiment Analysis with Diffusion Models",
    authors: "Shunyu Liu, Jie Zhou, Qunxi Zhu, Qin Chen, Qingchun Bai, Jun Xiao, Liang He",
    correspondingAuthors: ["Jie Zhou"],
    venue: "COLING 2024",
    highlight: 'A diffusion-based model, DiffusionABSA, tailored for aspect-based sentiment analysis (an important task in Natural Language Processing).',
    pdf: "https://arxiv.org/abs/2402.15289",
  }),
  makePub({
    id: "2024_NC_lixin",
    title: "Higher-order Granger reservoir computing: Simultaneously achieving scalable complex structures inference and accurate dynamics prediction",
    authors: "Xin Li, Qunxi Zhu, Chengli Zhao, Xiaojun Duan, Bolin Zhao, Xue Zhang, Huanfei Ma, Jie Sun, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao", "Wei Lin"],
    venue: "Nature Communications 2024 (Featured article)",
    highlight: 'Higher-order Granger reservoir computing for inferring higher-order structures and predicting dynamics.',
    pdf: "https://www.nature.com/articles/s41467-024-46852-1",
    extraLinks: [
      { label: "techxplore", url: "https://techxplore.com/news/2024-03-lightweight-machine-method-scalable-inference.html" },
    ],
  }),
  makePub({
    id: "2024_PRR_zhangjingdong",
    title: "Learning Hamiltonian neural Koopman operator and simultaneously sustaining and discovering conservation laws",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "Physical Review Research 2024",
    highlight: 'A mathematics and physics-inspired machine learning framework for reconstructing Hamiltonian systems from noisy/partially observed data.',
    pdf: "https://link.aps.org/doi/10.1103/PhysRevResearch.6.L012031",
    extraLinks: [
      { label: "phys.org", url: "https://phys.org/news/2024-02-machine-predictor-capability-intricate-physical.html" },
    ],
  }),
  makePub({
    id: "2023_IJBC_jiboyun",
    title: "Dimension reduction of collective attention networks",
    authors: "Boyun Ji, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu"],
    venue: "International Journal of Bifurcation and Chaos 2023",
    highlight: 'Dimension reduction of a simple collective attention model for capturing the dynamics of coupled cultural products.',
    pdf: "https://www.worldscientific.com/doi/10.1142/S0218127423501353",
  }),
  makePub({
    id: "2023_Research_lixin",
    title: "Tipping-point detection using reservoir computing",
    authors: "Xin Li, Qunxi Zhu, Chengli Zhao, Xuzhe Qian, Xue Zhang, Xiaojun Duan, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao"],
    venue: "Research 2023",
    highlight: 'A tipping point detection method using the dynamical representation based on reservoir computing.',
    pdf: "https://doi.org/10.34133/research.0174",
  }),
  makePub({
    id: "2023_ACL_xionglimao",
    title: "A Confidence-based Partial Label Learning Model for Crowd-Annotated Named Entity Recognition",
    authors: "Limao Xiong, Jie Zhou, Qunxi Zhu, Xiao Wang, Yuanbin Wu, Qi Zhang, Tao Gui, Xuanjing Huang, Jin Ma, Ying Shan",
    correspondingAuthors: ["Jie Zhou"],
    venue: "ACL Findings 2023",
    highlight: 'A Confidence-based Partial Label Learning method for crowd-annotated named entity recognition (an important task in Natural Language Processing).',
    pdf: "https://arxiv.org/pdf/2305.12485",
  }),
  makePub({
    id: "2023_Chaos_zhuqunxi",
    title: "Leveraging neural differential equations and adaptive delayed feedback to detect unstable periodic orbits based on irregularly-sampled time series",
    authors: "Qunxi Zhu, Xin Li, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "Chaos 2023 (Editor's Pick)",
    highlight: 'A data-driven and model-free method, leveraging neural differential equations and adaptive delayed feedback, to detect unstable periodic orbits from irregularly-sampled time series.',
    pdf: "https://doi.org/10.1063/5.0143839",
  }),
  makePub({
    id: "2023_ICLR_zhangjingdong",
    title: "SYNC: Safety-aware Neural Control for Stabilizing Stochastic Delay-Differential Equations",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Yang, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Yang", "Wei Lin"],
    venue: "ICLR 2023",
    highlight: 'A new class of neural control polices for stabilizing stochastic delay-differential equations with safety guarantee.',
    pdf: "https://openreview.net/forum?id=_8mS2NE-HXN",
  }),
  makePub({
    id: "2022_NeurIPS_zhangjingdong",
    title: "Neural Stochastic Control",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "NeurIPS 2022",
    highlight: 'Two novel frameworks of neural stochastic control to stabilize ODEs and SDEs.',
    pdf: "https://openreview.net/forum?id=5wI7gNopMHW",
  }),
  makePub({
    id: "2022_AAAI_zhuqunxi",
    title: "Neural Piecewise-Constant Delay Differential Equations",
    authors: "Qunxi Zhu, Yifei Shen, Dongsheng Li, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Wei Lin"],
    venue: "AAAI 2022",
    highlight: 'Multiple piecewise constant delays introduced to improve representational capability.',
    pdf: "https://ojs.aaai.org/index.php/AAAI/article/view/20911/20670",
  }),
  makePub({
    id: "2021_ICLR_zhuqunxi",
    title: "Neural Delay Differential Equations",
    authors: "Qunxi Zhu, Yao Guo, Wei Lin",
    correspondingAuthors: ["Qunxi Zhu", "Yao Guo", "Wei Lin"],
    venue: "ICLR 2021",
    highlight: 'Overcome the limited representational capability of Neural ODEs.',
    pdf: "https://openreview.net/forum?id=Q1jmmQz72M2",
  }),
  makePub({
    id: "2020_TAC_zhuqunxi",
    title: "Categorization problem on controllability of Boolean control networks",
    authors: "Qunxi Zhu, Zuguang Gao, Yang Liu, Weihua Gui",
    correspondingAuthors: ["Yang Liu"],
    venue: "IEEE Transactions on Automatic Control 2020",
    highlight: 'An algebraic graph theoretic approach, to classify the set of reachable or unreachable time steps (finite or infinite).',
    pdf: "https://ieeexplore.ieee.org/document/9117189",
  }),
  makePub({
    id: "2019_Chaos_zhuqunxi",
    title: "Detecting unstable periodic orbits based only on time series: When adaptive delayed feedback control meets reservoir computing",
    authors: "Qunxi Zhu, Huanfei Ma, Wei Lin",
    correspondingAuthors: ["Wei Lin"],
    venue: "Chaos 2019",
    highlight: 'A data-driven and model-free method, connecting reservoir computing and adaptive delayed feedback control to detect unstable periodic orbits.',
    pdf: "https://aip.scitation.org/doi/10.1063/1.5120867",
  }),
  makePub({
    id: "2019_Chaos_panchiyu",
    title: "Emergent dynamics of coordinated cells with time delays in a tissue",
    authors: "Chiyu Pan, Yuanren Jiang, Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Wei Lin"],
    venue: "Chaos 2019",
    highlight: 'Analysis of the emergence of tissue dynamics with time delays of diffusion.',
    pdf: "https://pubs.aip.org/aip/cha/article/29/3/031101/567216",
  }),
  makePub({
    id: "2019_SCL_zhuqunxi",
    title: "Stabilizing Boolean networks by optimal event-triggered feedback control",
    authors: "Qunxi Zhu, Wei Lin",
    correspondingAuthors: ["Wei Lin"],
    venue: "Systems & Control Letters 2019",
    highlight: 'An optimal event-triggered feedback control for stabilizing Boolean networks by considering control time with control variability.',
    pdf: "https://www.sciencedirect.com/science/article/pii/S0167691119300313",
  }),
  makePub({
    id: "2019_TCNS_zhuqunxi",
    title: "Controllability and observability of Boolean control networks via sampled-data control",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
    correspondingAuthors: ["Yang Liu"],
    venue: "IEEE Transactions on Control of Network Systems 2019",
    highlight: 'Study on the controllability and observability of sampled-data Boolean control networks.',
    pdf: "https://ieeexplore.ieee.org/abstract/document/8561222",
  }),
  makePub({
    id: "2019_TAC_zhuqunxi",
    title: "Further results on the controllability of Boolean control networks",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
    correspondingAuthors: ["Yang Liu"],
    venue: "IEEE Transactions on Automatic Control 2019",
    highlight: 'An improved graphic method for controllability analysis of Boolean control networks.',
    pdf: "https://ieeexplore.ieee.org/document/8350282",
  }),
  makePub({
    id: "2018_SICON_zhuqunxi",
    title: "On the optimal control of Boolean control networks",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
    correspondingAuthors: ["Yang Liu"],
    venue: "SIAM Journal on Control and Optimization 2018",
    highlight: 'An optimal input-state transfer graph introduced for BCNs with cost in finite/infinite time horizon.',
    pdf: "https://epubs.siam.org/doi/abs/10.1137/16M1070281",
  }),
  makePub({
    id: "2018_SCIS_zhuqunxi",
    title: "Observability of Boolean control networks",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
    correspondingAuthors: ["Yang Liu"],
    venue: "Science China Information Sciences 2018",
    highlight: 'Necessary and sufficient conditions for the observability of BCNs.',
    pdf: "http://engine.scichina.com/publisher/scp/journal/SCIS/doi/10.1007/s11432-017-9135-4",
  }),
];

// 渲染文章信息到页面
function renderPublications() {
  const publicationsContainer = document.getElementById('publications');

  publications.forEach(pub => {
    const pubDiv = document.createElement('div');
    pubDiv.classList.add('paper');
    pubDiv.id = pub.id;

    // 创建包含图片和标题的容器
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const venueSpan = document.createElement('div');
    venueSpan.classList.add('badge');

    // 判断 venue 是否在白名单(开头匹配 "ICML "、"NeurIPS " 等)
    const keepYear = KEEP_YEAR_VENUES.some(v => pub.venue.startsWith(v + ' '));
    // 不在白名单的删年份(用更稳的正则,只匹配独立的四位数字,不会误伤 "Series I" 之类)
    const venueText = keepYear ? pub.venue : stripYear(pub.venue);
    // 高亮荣誉关键词,用 innerHTML 写入(因为有 <span> 标签)
    venueSpan.innerHTML = highlightVenueHonors(venueText);

    imageContainer.appendChild(venueSpan);

    const img = document.createElement('img');
    img.classList.add('paper');
    img.src = pub.image;
    img.alt = pub.title;
    imageContainer.appendChild(img);

    pubDiv.appendChild(imageContainer);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('paper-text');

    const titleStrong = document.createElement('strong');
    titleStrong.textContent = pub.title;
    infoDiv.appendChild(titleStrong);

    const authors = document.createElement('div');
    const authorsList = pub.authors.split(', ').map(author => {
      if (pub.correspondingAuthors.includes(author)) {
        if (author === 'Qunxi Zhu') {
          return `<span class="author-corresponding author-qunxi-zhu">${author}</span>`;
        } else {
          return `<span class="author-corresponding">${author}</span>`;
        }
      } else if (author === 'Qunxi Zhu') {
        return `<span class="author-qunxi-zhu">${author}</span>`;
      } else {
        return author;
      }
    }).join(', ');
    authors.innerHTML = `${authorsList}<br> in ${pub.venue}<br>`;
    infoDiv.appendChild(authors);

    pub.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.label;
      infoDiv.appendChild(document.createTextNode(" [ "));
      infoDiv.appendChild(anchor);
      infoDiv.appendChild(document.createTextNode(" ] "));
    });

    const highlight = document.createElement('div');
    highlight.classList.add('highlight');
    highlight.textContent = pub.highlight;
    infoDiv.appendChild(highlight);

    pubDiv.appendChild(infoDiv);
    publicationsContainer.appendChild(pubDiv);

    const spannerDiv = document.createElement('div');
    spannerDiv.classList.add('spanner');
    pubDiv.appendChild(spannerDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("Document loaded. Rendering publications...");
  renderPublications();
});


// Define the experience items
const experiences = [
  {
    date: '2024.7 – Present',
    title: 'Young Principal Investigator',
    institution: 'Research Institute of Intelligent Complex Systems, Fudan University, China'
  },
  {
    date: '2021.6 – 2024.06',
    title: 'Postdoctoral Research Fellow',
    institution: 'Research Institute of Intelligent Complex Systems, Fudan University, China',
    details: 'work with <a href="https://faculty.fudan.edu.cn/wlin/zh_CN/zdylm/652034/list/index.htm">Wei Lin</a>'
  },
  {
    date: '2020.9 – 2021.2',
    title: 'Research Intern',
    institution: 'Microsoft Research Asia (MSRA)',
    details: 'hosted by <a href="http://recmind.cn/">Dongsheng Li</a>'
  },
  {
    date: '2019.1 - 2019.12',
    title: 'Visiting Student',
    institution: 'Massachusetts General Hospital and Harvard Medical School, Harvard University, US (China Scholarship Council)',
    details: 'hosted by <a href="https://sites.google.com/view/the-ge-lab/home">Tian Ge</a>'
  },
  {
    date: '2016.9 – 2021.6',
    title: 'Ph.D. Student',
    institution: 'Applied Mathematics, Fudan University, China',
    details: 'advised by <a href="https://faculty.fudan.edu.cn/wlin/zh_CN/zdylm/652034/list/index.htm">Wei Lin</a>'
  },
  {
    date: '2012.9 - 2016.6',
    title: 'B.Sc. Student',
    institution: 'Mathematics and Applied Mathematics, Zhejiang Normal University, China'
  }
];

function renderExperiences() {
  const experiencesDiv = document.getElementById('experiences');
  const paperDiv = document.createElement('div');
  paperDiv.className = 'paper';
  const list = document.createElement('ul');
  list.classList.add('paper-text');

  experiences.forEach(exp => {
    const listItem = document.createElement('li');
    if (exp.details) {
      listItem.innerHTML = `${exp.date}, ${exp.title}, ${exp.institution}, ${exp.details}.`;
    } else {
      listItem.innerHTML = `${exp.date}, ${exp.title}, ${exp.institution}.`;
    }
    list.appendChild(listItem);
  });

  paperDiv.appendChild(list);
  experiencesDiv.appendChild(paperDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  renderExperiences();
});


// Awards and Honors
const awards_and_honors = [
  {
    date: '2021',
    details: 'Super postdoctoral fellow in Shanghai, FDU'
  },
  {
    date: '2021',
    details: 'Outstanding graduates in Shanghai, FDU'
  },
  {
    date: '2020',
    details: 'National Graduate (Ph.D.) Scholarship, FDU'
  },
  {
    date: '2019',
    award: 'Final rank: 2st',
    details: '2019 Zhejiang Lab Cup Global AI Competition: Opinion Mining For E-Commerce Reviews (awarded 100,000 rmb)'
  },
  {
    date: '2019',
    award: 'Final rank: 1st',
    details: 'The 5th Baidu & XJTU Big Data Contest The First IKCEST "The Belt and Road" International Big Data Contest (awarded 50,000 rmb)'
  },
  {
    date: '2018',
    details: 'National Graduate (Ph.D.) Scholarship, FDU'
  },
  {
    date: '2017',
    details: 'National Graduate Scholarship, FDU'
  },
  {
    date: '2016',
    award: 'Second prize',
    details: 'National Graduate Mathematical Modeling Contest'
  },
  {
    date: '2015',
    award: 'Silver Medal',
    details: 'ACM-ICPC Asia Beijing Regional Contest'
  },
  {
    date: '2014 and 2015',
    award: 'Gold Medal',
    details: 'Zhejiang Provincial University Programming Contest'
  },
  {
    date: '2014',
    award: 'Second prize',
    details: 'National Undergraduate Mathematical Modeling Contest'
  },
  {
    date: '2014 (Rank: 2nd/216)',
    details: 'National Undergraduate Scholarship, ZJNU'
  }
];

function renderAwards_and_Honors() {
  const awards_and_honorsDiv = document.getElementById('awards_and_honors');
  const paperDiv = document.createElement('div');
  paperDiv.className = 'paper';
  const list = document.createElement('ul');
  list.classList.add('paper-text');

  awards_and_honors.forEach(exp => {
    const listItem = document.createElement('li');
    if (exp.award) {
      listItem.innerHTML = `<b>${exp.award}</b>, ${exp.details}, ${exp.date}.`;
    } else {
      listItem.innerHTML = `${exp.details}, ${exp.date}.`;
    }
    list.appendChild(listItem);
  });

  paperDiv.appendChild(list);
  awards_and_honorsDiv.appendChild(paperDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAwards_and_Honors();
});