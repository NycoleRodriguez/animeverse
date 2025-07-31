📘 Documentação Técnica – AnimeVerse
🧩 Descrição Geral
O AnimeVerse é uma (POC) desenvolvida com Angular, voltada para fãs de animes. A proposta é apresentar um visual moderno e interativo, com:

🎠 Carrossel de animes em destaque
🗂️ Listagem de cards com informações básicas
🌐 Menu “Explorar” com links para plataformas de streaming
A aplicação é 100% responsiva e foi estruturada com boas práticas de organização e estilo.

🛠️ Tecnologias Utilizadas
Tecnologia	Função
⚙️ Angular 19	Framework principal para construção da SPA
🎨 SCSS	Estilização modular com variáveis e responsividade
💠 Bootstrap 5	Sistema de grid e base para layout responsivo
🌀 NG Bootstrap	Componentes como carrossel e modal integrados ao Angular
🧠 TypeScript	Linguagem principal dos componentes Angular
🔄 Git + GitHub	Controle de versão e repositório remoto público
🧱 Estrutura de Componentes
🔹 anime-page.component
Contém:

✅ Título centralizado
✅ Carrossel de destaques (imagem + descrição)
✅ Grid de cards com nome e imagem
✅ Botão "Ver Detalhes" com modal
✅ Menu flutuante “Explorar +” com links externos (Netflix, Crunchyroll, Prime Video)
🔹 app.component
Componente raiz (standalone)
Gerencia a estrutura base da aplicação
🎨 Layout e Estilo (SCSS)
✔️ Organização com boas práticas:

@use para importar variables.scss e base.scss
Variáveis reutilizáveis para espaçamento, cores e bordas
Responsividade com @media (max-width: 768px)
Efeitos suaves de hover nos cards
Carrossel adaptável (object-fit: contain)
Estilo claro e acessível, inclusive para o menu de exploração
🚀 Funcionalidades Implementadas
🎠 Carrossel com título e descrição
🗂️ Cards com imagem e botão "Ver Detalhes"
🔍 Modal com informações detalhadas do anime
🌐 Menu “Explorar +” com acesso direto a:
Netflix
Crunchyroll
Prime Video
📱 Layout 100% responsivo (mobile-first)
💻 Como Executar Localmente
# 1. Clone o repositório
git clone https://github.com/NycoleRodriguez/animeverse.git
cd animeverse

# 2. Instale as dependências
npm install --legacy-peer-deps

# 3. Rode a aplicação
ng serve

# Acesse em:
http://localhost:4200
🧪 Próximos Passos
⭐ Criar um serviço de favoritos com localStorage
🧩 Separar o carrossel em um componente reutilizável
🔗 Integrar com uma API real de animes (ex: Jikan, Kitsu)
📌 Adicionar uma navbar e um footer fixos
🧼 Melhorar acessibilidade e SEO
