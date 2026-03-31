const escala1 = [
    { funcao: 'Ministro', nome: 'Gabi', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal (Solo)', nome: 'Dyulian (Só em Jesus)', icone: 'fa-microphone', fullWidth: true },
    { funcao: 'Vocal/Back', nome: 'Poliana / Dyulian', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: 'Rafael', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: 'Henrique', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: 'Muryllo', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: 'Helo', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: 'Gabi', icone: 'fa-guitar' },
];

const escala2 = [
    { funcao: 'Ministro', nome: 'Gabi', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal/Back', nome: 'Poliana', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: 'Rafael', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: 'Henrique', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: 'Muryllo', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: 'Ana', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: 'Gabi', icone: 'fa-guitar' },
];

const escala3 = [
    { funcao: 'Ministro', nome: '-', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal/Back', nome: '-', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: '-', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: '-', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: '-', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: '-', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: '-', icone: 'fa-guitar' },
];

const escala4 = [
    { funcao: 'Ministro', nome: '-', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal/Back', nome: '-', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: '-', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: '-', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: '-', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: '-', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: '-', icone: 'fa-guitar' },
];

const dadosDosCultos = [
    {
        id: 'culto-04-abr',
        dataCurta: '04 Abr',
        dataCompleta: '04 de Abril',
        destaque: true,
        escala: escala1,
        repertorio: [
            { numero: 2, titulo: 'Êxodo', info: 'Projeto Sola • Tom: Dm • BPM: 77' },
            { numero: 2, titulo: 'Estarás Comigo (Salvação)', info: 'Boanova feat. ProjetoSola • Tom: B • BPM: 102' },
            { numero: 3, titulo: 'Só em Jesus', info: 'Novo Canto • Tom: C • BPM: 62' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Êxodo', descricao: 'Cifra', linkDownload: './material/Êxodo.pdf' },
            { tipo: 'pdf', nome: 'Estarás Comigo (Salvação)', descricao: 'Cifra', linkDownload: './material/Estarás Comigo (Salvação).pdf' },
            { tipo: 'pdf', nome: 'Só em Jesus', descricao: 'Cifra', linkDownload: './material/Só em Jesus.pdf' },
            { tipo: 'pdf', nome: 'Só em Jesus (LETRA)', descricao: 'Letra', linkDownload: './material/Só em Jesus (Letra).pdf' }
        ]
    },
    {
        id: 'culto-11-abr',
        dataCurta: '11 Abr',
        dataCompleta: '11 de Abril',
        destaque: false,
        escala: escala2,
        repertorio: [
            { numero: 1, titulo: 'A Hora é Agora', info: 'IPALPHA NOVA • Tom: Bm' },
            { numero: 2, titulo: 'Êxodo', info: 'Projeto Sola • Tom: Dm' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'A Hora é Agora', descricao: 'Cifra', linkDownload: './material/A Hora é Agora.pdf' },
            { tipo: 'pdf', nome: 'Êxodo', descricao: 'Cifra', linkDownload: './material/Êxodo.pdf' }
            //{ tipo: 'audio', nome: 'Guia Soprano', descricao: 'Áudio MP3', linkDownload: './material/guia-soprano.mp3' }
        ]
    },
    {
        id: 'culto-18-abr',
        dataCurta: '18 Abr',
        dataCompleta: '18 de Abril',
        destaque: false,
        escala: escala3,
        repertorio: [
            { numero: 1, titulo: 'A Hora é Agora', info: 'IPALPHA NOVA • Tom: Bm' },
            { numero: 2, titulo: 'Êxodo', info: 'Projeto Sola • Tom: Dm' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'A Hora é Agora', descricao: 'Cifra', linkDownload: './material/A Hora é Agora.pdf' },
            { tipo: 'pdf', nome: 'Êxodo', descricao: 'Cifra', linkDownload: './material/Êxodo.pdf' }
            //{ tipo: 'audio', nome: 'Guia Soprano', descricao: 'Áudio MP3', linkDownload: './material/guia-soprano.mp3' }
        ]
    },
    {
        id: 'culto-25-abr',
        dataCurta: '25 Abr',
        dataCompleta: '25 de Abril',
        destaque: false,
        escala: escala4,
        repertorio: [
            { numero: 1, titulo: 'A Hora é Agora', info: 'IPALPHA NOVA • Tom: Bm' },
            { numero: 2, titulo: 'Êxodo', info: 'Projeto Sola • Tom: Dm' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'A Hora é Agora', descricao: 'Cifra', linkDownload: './material/A Hora é Agora.pdf' },
            { tipo: 'pdf', nome: 'Êxodo', descricao: 'Cifra', linkDownload: './material/Êxodo.pdf' }
            //{ tipo: 'audio', nome: 'Guia Soprano', descricao: 'Áudio MP3', linkDownload: './material/guia-soprano.mp3' }
        ]
    }
];

function renderizarEscala(listaEscala) {
    return listaEscala.map(item => `
        <div class="pill" ${item.fullWidth ? 'style="grid-column: 1 / -1;"' : ''}>
            <div class="pill-header">
                <i class="fas ${item.icone}" ${item.flip ? 'style="transform: scaleX(-1);"' : ''}></i>
                <span class="role">${item.funcao}</span>
            </div>
            <span class="name">${item.nome}</span>
        </div>
    `).join('');
}

function inicializarApp() {
    const cultoDestaque = dadosDosCultos.find(culto => culto.destaque === true);

    if (cultoDestaque) {
        document.getElementById('header-sub-title').innerText = `PIB Mandaguaçu / JUVENTUDE • ${cultoDestaque.dataCurta}`;

        document.getElementById('home-escala').innerHTML = renderizarEscala(cultoDestaque.escala);

        const htmlRepertorio = cultoDestaque.repertorio.map(musica => `
            <div class="song-item">
                <div class="song-number">${musica.numero}</div>
                <div class="song-info">
                    <h4>${musica.titulo}</h4>
                    <p>${musica.info}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('home-repertorio').innerHTML = htmlRepertorio;

        const htmlMateriais = cultoDestaque.materiais.map(mat => `
            <a href="${mat.linkDownload}" download class="material-item">
                <div class="info">
                    <i class="fas ${mat.tipo === 'pdf' ? 'fa-file-pdf pdf' : 'fa-headphones audio'}"></i>
                    <div>
                        <h4 style="font-size: 0.95rem;">${mat.nome}</h4>
                        <p style="font-size: 0.75rem; color: var(--text-muted);">${mat.descricao}</p>
                    </div>
                </div>
                <i class="fas fa-download" style="color: var(--text-muted);"></i>
            </a>
        `).join('');
        document.getElementById('home-materiais').innerHTML = htmlMateriais;
    }

    const cultosDoMes = dadosDosCultos.filter(culto => !culto.destaque);
    const htmlMes = cultosDoMes.map(culto => `
        <div class="card">
            <h3 style="font-size: 1rem; color: var(--primary-light); margin-bottom: 15px;">
                <i class="fas fa-calendar-check"></i> ${culto.dataCompleta}
            </h3>
            <div class="escala-grid">
                ${renderizarEscala(culto.escala)}
            </div>
        </div>
    `).join('');
    document.getElementById('month-list').innerHTML = htmlMes;
}

function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');

    const cultoDestaque = dadosDosCultos.find(culto => culto.destaque === true);
    const headerTitle = document.getElementById('header-main-title');
    const headerSubtitle = document.getElementById('header-sub-title');

    if (tabId === 'tab-home') {
        headerTitle.innerText = "Próximo Culto";
        headerSubtitle.innerText = `PIB Mandaguaçu / JUVENTUDE • ${cultoDestaque ? cultoDestaque.dataCurta : ''}`;
    } else if (tabId === 'tab-month') {
        headerTitle.innerText = "Escala de Março";
        headerSubtitle.innerText = "Visão geral do mês";
    } else if (tabId === 'tab-devocional') {
        headerTitle.innerText = "Devocional";
        headerSubtitle.innerText = "Alinhamento Bíblico e Propósito";
    } else if (tabId === 'tab-manual') {
        headerTitle.innerText = "Manual da Banda";
        headerSubtitle.innerText = "Regras e Parâmetros";
    }
}

window.onload = inicializarApp;

let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');
const closeBtn = document.getElementById('close-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBanner.style.display = 'flex';
});

installBtn.addEventListener('click', async () => {
    installBanner.style.display = 'none';

    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('Usuário aceitou a instalação');
        }
        deferredPrompt = null;
    }
});

closeBtn.addEventListener('click', () => {
    installBanner.style.display = 'none';
});

function toggleDevocional(cardElement) {
    cardElement.classList.toggle('open');
}