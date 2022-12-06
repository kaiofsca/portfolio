import Image1 from '../../assets/projeto1(wallet).jpg'
import Image2 from '../../assets/projeto2(story).jpg'
import Image3 from '../../assets/projeto3(movies).jpg'
import Image4 from '../../assets/projeto4(profiles).jpg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Project My Wallet",
        desc: "Dashboard completo, com sistema de login, autenticação, temas, contextos, filtros e várias outras coisas! Primeiro feito com Typescript também. E-mail e senha para acessar o Dashboard (E-mail: kaio@email.com || Senha: 123)",
        demo: 'https://my-wallet-ashen.vercel.app/',
        github: 'https://github.com/kaiofsca/my-wallet'
    },
    {
        id: 2,
        image: Image2,
        title: "Project Inventory Control",
        desc: "Esse é um Controle de estoque, feito com Next.js (primeiro projeto com next!), confesso que não foi fácil kkkkkk, aprofundei mais os conteudos de next e dos recursos do chakra.ui",
        demo: 'https://inventory-control-a047pog65-kaiofsca.vercel.app/',
        github: 'https://github.com/kaiofsca/inventory_control'
    },
    {
        id: 3,
        image: Image3,
        title: "Project Movies Lib",
        desc: "Projeto com React, consumindo a API do TMDB (filmes), utilizando hooks e React Router, criado com Vite. Se trata de uma Biblioteca de filmes, quando abre a aplicação aparece os melhores avaliados, tem como pesquisar qualquer filme também, e quando apertar em Details aprece os detalhes do filmes.",
        demo: 'https://kaiomovieslib.netlify.app/',
        github: 'https://github.com/kaiofsca/MoviesLib'
    },
    {
        id: 4,
        image: Image4,
        title: "Project Github Profiles",
        desc: "Github-profiles, projeto onde você pode pesquisar qualquer perfil do GitHub e ver suas informações.",
        demo: 'https://reactgithubprofiles.netlify.app/',
        github: 'https://github.com/kaiofsca/Profiles_github'
    },
]

export default data