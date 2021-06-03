import { createSlice } from "@reduxjs/toolkit";

export const home = createSlice({
  name: "home",
  initialState: {
    projects: [
      {
        image:
          "images/capa_homefinder.png",
        imageFill: "cover", // cover | contain
        title: "HomeFinder App",
        description: "Projeto de aplicativo para auxiliar inquilinos e proprietários a locarem imóveis de maneira rápida e sem imobiliárias. O diferencial é a solução de propostas de valores que o inquilino oferece ao proprietário.",
        tags: ["Figma", "UI"],
        link: "https://www.behance.net/gallery/116137065/HomeFinder-App",
      },
      {
        image:
          "images/capa_studio.png",
        imageFill: "cover", // cover | contain
        title: "Como expandir um estúdio de pilates na crise?",
        description: "Este projeto explica o processo de UX que aplicamos para aumentar a conversão do estúdio de pilates, impedir que ele feche e consiga expandir seus serviços em meio à pandemia.",
        tags: ["Figma", "UX", "UI"],
        link: "https://www.notion.so/Como-utilizamos-UX-Design-para-criar-uma-solu-o-e-tirar-um-est-dio-de-pilates-da-crise-4ad5b4247d0d4b16bf27f777622a7a24",
      },
      {
        image:
          "images/capa_xTree.png",
        imageFill: "cover", // cover | contain
        title: "Estudo de caso: xTreaming",
        description: "Aqui explico meu processo identificando oportunidades para aumentar o desempenho e conversão desta página que tem o objetivo de informar sobre o novo produto da xTree.",
        tags: ["Figma", "UX", "UI"],
        link: "https://www.notion.so/Identifica-o-de-oportunidades-para-melhorar-o-desempenho-e-convers-o-da-xTreaming-42671deaf26a4c709bc785229b083741",
      },
    ],

    posts: [
      {
        image:
          "images/capa_ldj.png",
        imageFill: "cover", // cover | contain
        title: "O que eu aprendi ao aplicar meu primeiro LDJ",
        description: "2021 promete ser promissor, e já começou surpreendendo. Depois de muito pensar se deveria ou seria capaz, resolvi propor uma LDJ e para minha surpresa, a ideia foi aceita facilmente...",
        tags: ["Workshop"],
        link: "https://eduardovivaa.medium.com/o-que-eu-aprendi-ao-aplicar-meu-primeiro-ldj-8c45a8e098a1",
      },
      {
        image:
          "images/capa_conhecimento.jpeg",
        imageFill: "cover", // cover | contain
        title: "Aquilo que construímos é limitado pelo conhecimento que temos",
        description: "Nossas ações são divididas em três princípios: </br> Aquilo que nós sabemos e sabemos que sabemos, aquilo que nós não sabemos e sabemos que não...",
        tags: ["Reflexão"],
        link: "https://eduardovivaa.medium.com/tudo-o-que-construímos-é-limitado-pelo-conhecimento-que-temos-d958751f50fd",
      },
    ],
  },
  reducers: {},
});

export const getData = state => ({ projects: state.home.projects, posts: state.home.posts });

export default home.reducer;
