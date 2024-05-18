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
    links: [
      { label: "PDF", url: "https://www.nature.com/articles/s41467-024-46852-1" },
      { label: "BibTex", url: "./resources/2024_NC_lixin/bib.txt" }
    ],
    image: "./resources/2024_NC_lixin/image.png"
  },
  {
    id: "2024_PRR_zhangjingdong",
    title: "Learning Hamiltonian neural Koopman operator and simultaneously sustaining and discovering conservation laws",
    authors: "Jingdong Zhang, Qunxi Zhu, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Wei Lin"], // 添加通讯作者列表
    venue: "Physical Review Research 2024",
    links: [
      { label: "PDF", url: "https://link.aps.org/doi/10.1103/PhysRevResearch.6.L012031" },
      { label: "BibTex", url: "./resources/2024_PRR_zhangjingdong/bib.txt" }
    ],
    image: "./resources/2024_PRR_zhangjingdong/image.png"
  },
  {
    id: "2023_Research_lixin",
    title: "Tipping-point detection using reservoir computing",
    authors: "Xin Li, Qunxi Zhu, Chengli Zhao, Xuzhe Qian, Xue Zhang, Xiaojun Duan, Wei Lin",
	correspondingAuthors: ["Qunxi Zhu", "Chengli Zhao"], // 添加通讯作者列表
    venue: "Research 2023",
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
    venue: "Chaos 2023 (Editor’s Pick)",
    links: [
      { label: "PDF", url: "https://doi.org/10.1063/5.0143839" },
      { label: "BibTex", url: "./resources/2023_Chaos_zhuqunxi/bib.txt" }
    ],
    image: "./resources/2023_Chaos_zhuqunxi/image.png"
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
