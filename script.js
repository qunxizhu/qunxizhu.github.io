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

// 文章信息列表
const publications = [
  {
    id: "2024_ICML_zhuqunxi",
    title: "Switched Flow Matching: Eliminating Singularities via Switching ODEs",
    authors: "Qunxi Zhu, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu"], // 添加通讯作者列表
    venue: "ICML 2024",
	highlight: 'A versatile continuous-time generative model, SFM, that eliminates singularities encountered in the FM via switching the candidate ODEs.',
    links: [
      { label: "PDF", url: "https://arxiv.org/abs/2102.10801" },
      { label: "BibTex", url: "./resources/2024_ICML_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2024_ICML_zhuqunxi/image.png"
  },
  {
    id: "2024_ICML_zhangjingdong",
    title: "FESSNC: Fast Exponentially Stable and Safe Neural Controller",
    authors: "Jingdong Zhang, Luan Yang, Qunxi Zhu, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Lin"], // 添加通讯作者列表
    venue: "ICML 2024",
	highlight: 'A Fast learning stabilization controller with both rigorous exponential stability and safety guarantees.',
    links: [
      { label: "PDF", url: "https://arxiv.org/abs/2102.10801" },
      { label: "BibTex", url: "./resources/2024_ICML_zhangjingdong/bib.txt" }
    ],
    image: "./resources/2024_ICML_zhangjingdong/image.png"
  },
  {
    id: "2024_ICML_lixin",
    title: "From Fourier to Neural ODEs: Flow Matching for Modeling Complex Systems",
    authors: "Xin Li, Jingdong Zhang, Qunxi Zhu, Chengli Zhao, Xue Zhang, Xiaojun Duan, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao"], // 添加通讯作者列表
    venue: "ICML 2024",
	highlight: 'A simulation-free framework, Fourier NODEs, that effectively trains NODEs.',
    links: [
      { label: "PDF", url: "https://arxiv.org/abs/2102.10801" },
      { label: "BibTex", url: "./resources/2024_ICML_lixin/bib.txt" }
    ],
    image: "./resources/2024_ICML_lixin/image.png"
  },
  {
    id: "2024_NC_lixin",
    title: "Higher-order Granger reservoir computing: Simultaneously achieving scalable complex structures inference and accurate dynamics prediction",
    authors: "Xin Li, Qunxi Zhu, Chengli Zhao, Xiaojun Duan, Bolin Zhao, Xue Zhang, Huanfei Ma, Jie Sun, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao", "Wei Lin"], // 添加通讯作者列表
    venue: "Nature Communications 2024",
	highlight: 'Featured article in  “AI and machine learning” and “Applied physics and mathematics”',
    links: [
      { label: "PDF", url: "https://www.nature.com/articles/s41467-024-46852-1" },
      { label: "BibTex", url: "./resources/2024_NC_lixin/bib.txt" },
      { label: "techxplore", url: "https://techxplore.com/news/2024-03-lightweight-machine-method-scalable-inference.html" }
    ],
    image: "./resources/2024_NC_lixin/image.png"
  },
  {
    id: "2024_PRR_zhangjingdong",
    title: "Learning Hamiltonian neural Koopman operator and simultaneously sustaining and discovering conservation laws",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Lin"], // 添加通讯作者列表
    venue: "Physical Review Research 2024",
	highlight: 'A mathematics and physics-inspired machine learning framework for reconstructing Hamiltonian systems from noisy/partially observed data',
    links: [
      { label: "PDF", url: "https://link.aps.org/doi/10.1103/PhysRevResearch.6.L012031" },
      { label: "BibTex", url: "./resources/2024_PRR_zhangjingdong/bib.txt" },
      { label: "phys.org", url: "https://phys.org/news/2024-02-machine-predictor-capability-intricate-physical.html" }
    ],
    image: "./resources/2024_PRR_zhangjingdong/image.png"
  },
  {
    id: "2023_Research_lixin",
    title: "Tipping-point detection using reservoir computing",
    authors: "Xin Li, Qunxi Zhu, Chengli Zhao, Xuzhe Qian, Xue Zhang, Xiaojun Duan, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao"], // 添加通讯作者列表
    venue: "Research 2023",
	highlight: 'A tipping point detection method using the dynamical representation based on reservoir computing',
    links: [
      { label: "PDF", url: "https://doi.org/10.34133/research.0174" },
      { label: "BibTex", url: "./resources/2023_Research_lixin/bib.txt" }
    ],
    image: "./resources/2023_Research_lixin/image.png"
  },
  {
    id: "2023_Chaos_zhuqunxi",
    title: "Leveraging neural differential equations and adaptive delayed feedback to detect unstable periodic orbits based on irregularly-sampled time series",
    authors: "Qunxi Zhu, Xin Li, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Lin"], // 添加通讯作者列表
    venue: "Chaos 2023",
	highlight: 'Editor’s Pick',
    links: [
      { label: "PDF", url: "https://doi.org/10.1063/5.0143839" },
      { label: "BibTex", url: "./resources/2023_Chaos_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2023_Chaos_zhuqunxi/image.png"
  },
  {
    id: "2023_ICLR_zhangjingdong",
    title: "SYNC: Safety-aware Neural Control for Stabilizing Stochastic Delay-Differential Equations",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Yang, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Yang", "Wei Lin"], // 添加通讯作者列表
    venue: "ICLR 2023",
	highlight: '',
    links: [
      { label: "PDF", url: "https://openreview.net/forum?id=_8mS2NE-HXN" },
      { label: "BibTex", url: "./resources/2023_ICLR_zhangjingdong/bib.txt" }
    ],
    image: "./resources/2023_ICLR_zhangjingdong/image.png"
  },
  {
    id: "2022_NeurIPS_zhangjingdong",
    title: "Neural Stochastic Control",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Lin"], // 添加通讯作者列表
    venue: "NeurIPS 2022",
	highlight: '',
    links: [
      { label: "PDF", url: "https://openreview.net/forum?id=5wI7gNopMHW" },
      { label: "BibTex", url: "./resources/2022_NeurIPS_zhangjingdong/bib.txt" }
    ],
    image: "./resources/2022_NeurIPS_zhangjingdong/image.png"
  },
  {
    id: "2022_AAAI_zhuqunxi",
    title: "Neural Piecewise-Constant Delay Differential Equations",
    authors: "Qunxi Zhu, Yifei Shen, Dongsheng Li, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Lin"], // 添加通讯作者列表
    venue: "AAAI 2022",
	highlight: '',
    links: [
      { label: "PDF", url: "https://ojs.aaai.org/index.php/AAAI/article/view/20911/20670" },
      { label: "BibTex", url: "./resources/2022_AAAI_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2022_AAAI_zhuqunxi/image.png"
  },
  {
    id: "2021_ICLR_zhuqunxi",
    title: "Neural Delay Differential Equations",
    authors: "Qunxi Zhu, Yao Guo, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Yao Guo", "Wei Lin"], // 添加通讯作者列表
    venue: "ICLR 2021",
	highlight: '',
    links: [
      { label: "PDF", url: "https://openreview.net/forum?id=Q1jmmQz72M2" },
      { label: "BibTex", url: "./resources/2021_ICLR_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2021_ICLR_zhuqunxi/image.png"
  },
  {
    id: "2020_TAC_zhuqunxi",
    title: "Categorization problem on controllability of Boolean control networks",
    authors: "Qunxi Zhu, Zuguang Gao, Yang Liu, Weihua Gui",
	correspondingAuthors: ["Yang Liu"], // 添加通讯作者列表
    venue: "IEEE Transactions on Automatic Control 2020",
	highlight: '',
    links: [
      { label: "PDF", url: "https://ieeexplore.ieee.org/document/9117189" },
      { label: "BibTex", url: "./resources/2020_TAC_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2020_TAC_zhuqunxi/image.png"
  },
  {
    id: "2019_Chaos_zhuqunxi",
    title: "Detecting unstable periodic orbits based only on time series: When adaptive delayed feedback control meets reservoir computing",
    authors: "Qunxi Zhu, Huanfei Ma, Wei Lin",
	correspondingAuthors: ["Wei Lin"], // 添加通讯作者列表
    venue: "Chaos 2023",
	highlight: '',
    links: [
      { label: "PDF", url: "https://aip.scitation.org/doi/10.1063/1.5120867" },
      { label: "BibTex", url: "./resources/2019_Chaos_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2019_Chaos_zhuqunxi/image.png"
  },
  {
    id: "2019_SCL_zhuqunxi",
    title: "Stabilizing Boolean networks by optimal event-triggered feedback control",
    authors: "Qunxi Zhu, Wei Lin",
	correspondingAuthors: ["Wei Lin"], // 添加通讯作者列表
    venue: "Systems & Control Letters 2019",
	highlight: '',
    links: [
      { label: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S0167691119300313" },
      { label: "BibTex", url: "./resources/2019_SCL_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2019_SCL_zhuqunxi/image.png"
  },
  {
    id: "2019_TAC_zhuqunxi",
    title: "Further results on the controllability of Boolean control networks",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
	correspondingAuthors: ["Yang Liu"], // 添加通讯作者列表
    venue: "IEEE Transactions on Automatic Control 2019",
	highlight: '',
    links: [
      { label: "PDF", url: "https://ieeexplore.ieee.org/document/8350282" },
      { label: "BibTex", url: "./resources/2019_TAC_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2019_TAC_zhuqunxi/image.png"
  },
  {
    id: "2018_SICON_zhuqunxi",
    title: "On the optimal control of Boolean control networks",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
	correspondingAuthors: ["Yang Liu"], // 添加通讯作者列表
    venue: "SIAM Journal on Control and Optimization 2018",
	highlight: '',
    links: [
      { label: "PDF", url: "https://epubs.siam.org/doi/abs/10.1137/16M1070281" },
      { label: "BibTex", url: "./resources/2018_SICON_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2018_SICON_zhuqunxi/image.png"
  },
  {
    id: "2018_SCIS_zhuqunxi",
    title: "Observability of Boolean control networks",
    authors: "Qunxi Zhu, Yang Liu, Jianquan Lu, Jinde Cao",
	correspondingAuthors: ["Yang Liu"], // 添加通讯作者列表
    venue: "Science China Information Sciences 2018",
	highlight: '',
    links: [
      { label: "PDF", url: "http://engine.scichina.com/publisher/scp/journal/SCIS/doi/10.1007/s11432-017-9135-4" },
      { label: "BibTex", url: "./resources/2018_SCIS_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2018_SCIS_zhuqunxi/image.png"
  }
  // ... 更多文章可以按照相同格式添加
];

// 渲染文章信息到页面
function renderPublications() {
  const publicationsContainer = document.getElementById('publications');

  publications.forEach(pub => {
    const pubDiv = document.createElement('div');
    pubDiv.classList.add('paper');
    pubDiv.id = pub.id;

    const img = document.createElement('img');
    img.classList.add('paper');
    img.src = pub.image;
    img.title = pub.title;
    pubDiv.appendChild(img);

	const infoDiv = document.createElement('div');
    infoDiv.classList.add('paper-text'); // 为文本部分添加类名
	
    const titleStrong = document.createElement('strong');
    titleStrong.textContent = pub.title;
    infoDiv.appendChild(titleStrong);

    const authors = document.createElement('div');
    //authors.innerHTML = `<br>${pub.authors}<br> in ${pub.venue}<br>`;
	//authors.innerHTML = `${pub.authors}<br> in ${pub.venue}<br>`; //JavaScript 中在创建 HTML 元素时直接插入作者和期刊信息，避免段落标记：
    //infoDiv.appendChild(authors);
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

// 当页面加载完毕时，渲染文章信息
document.addEventListener('DOMContentLoaded', () => {
  console.log("Document loaded. Rendering publications...");
  renderPublications();
});








// Define the experience items
const experiences = [
  {
    date: '2021.6 – Present',
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
  // Find the experiences div
  const experiencesDiv = document.getElementById('experiences');
  
  // Create the paper div
  const paperDiv = document.createElement('div');
  paperDiv.className = 'paper';

  // Create the ul element
  const list = document.createElement('ul');
  list.classList.add('paper-text'); // 为文本部分添加类名
  
  // Append experience items to the list
  experiences.forEach(exp => {
    const listItem = document.createElement('li');
    if (exp.details) {
      listItem.innerHTML = `${exp.date}, ${exp.title}, ${exp.institution}, ${exp.details}.`;
    } else {
      listItem.innerHTML = `${exp.date}, ${exp.title}, ${exp.institution}.`;
    }
    
    list.appendChild(listItem);
  });

  // Append the list to the paper div
  paperDiv.appendChild(list);

  // Append the paper div to the experiences div
  experiencesDiv.appendChild(paperDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  renderExperiences();
});







// Define the awards and honors items
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
    details: 'The 5th Baidu & XJTU Big Data Contest The First IKCEST “The Belt and Road” International Big Data Contest (awarded 50,000 rmb)'
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
    date: '2014',
    details: 'National Undergraduate Scholarship, ZJNU'
  }
];

function renderAwards_and_Honors() {
  // Find the experiences div
  const awards_and_honorsDiv = document.getElementById('awards_and_honors');
  
  // Create the paper div
  const paperDiv = document.createElement('div');
  paperDiv.className = 'paper';

  // Create the ul element
  const list = document.createElement('ul');
  list.classList.add('paper-text'); // 为文本部分添加类名
  
  // Append awards_and_honors items to the list
  awards_and_honors.forEach(exp => {
    const listItem = document.createElement('li');
    if (exp.award) {
      listItem.innerHTML = `<b>${exp.award}</b>, ${exp.details}, ${exp.date}.`;
    } else {
      listItem.innerHTML = `${exp.details}, ${exp.date}.`;
    }
    
    list.appendChild(listItem);
  });

  // Append the list to the paper div
  paperDiv.appendChild(list);

  // Append the paper div to the experiences div
  awards_and_honorsDiv.appendChild(paperDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAwards_and_Honors();
});

