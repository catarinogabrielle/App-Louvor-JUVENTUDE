const escala1 = [
    { funcao: 'Ministro', nome: 'Gabi', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal', nome: 'Thay / Poliana', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: '-', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: 'Henrique', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: 'Muryllo', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: 'Helo', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: 'Gabi', icone: 'fa-guitar' },
];

const escala2 = [
    { funcao: 'Ministro', nome: 'Gabi', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal', nome: 'Dyulian', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: '-', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: '-', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: '-', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: '-', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: 'Gabi', icone: 'fa-guitar' },
];

const escala3 = [
    { funcao: 'Ministro', nome: 'Gabi', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal', nome: 'Thay / Poliana', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: 'Rafael', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: 'Henrique', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: 'Muryllo', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: 'Ana', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: 'Gabi', icone: 'fa-guitar' },
];

const escala4 = [
    { funcao: 'Ministro', nome: 'Gabi', icone: 'fa-microphone-alt', fullWidth: true },
    { funcao: 'Vocal', nome: 'Poliana / Dyulian', icone: 'fa-microphone' },
    { funcao: 'Guitarra', nome: 'Rafael', icone: 'fa-guitar' },
    { funcao: 'Baixo', nome: 'Henrique', icone: 'fa-guitar', flip: true },
    { funcao: 'Bateria', nome: 'Muryllo', icone: 'fa-drum' },
    { funcao: 'Teclado', nome: 'Helo', icone: 'fa-keyboard' },
    { funcao: 'Violão', nome: 'Gabi', icone: 'fa-guitar' },
];

const dadosDosCultos = [
    {
        id: 'culto-07-mar',
        dataCurta: '07 Mar',
        dataCompleta: '07 de Março',
        destaque: false,
        escala: escala1,
        repertorio: [
            { numero: 1, titulo: 'Tua Alegria', info: 'Drops • Tom: B' },
            { numero: 2, titulo: 'Teu Amor Não Falha', info: 'Paulo César Baruk • Tom: F#m' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Tua Alegria', descricao: 'Cifra', linkDownload: './material/Tua Alegria.pdf' },
            { tipo: 'pdf', nome: 'Teu Amor Não Falha', descricao: 'Cifra', linkDownload: './material/Teu Amor Não Falha.pdf' },
            //{ tipo: 'audio', nome: 'Guia Soprano', descricao: 'Áudio MP3', linkDownload: './arquivos/guia-soprano.mp3' }
        ]
    },
    {
        id: 'culto-14-mar',
        dataCurta: '14 Mar',
        dataCompleta: '14 de Março',
        destaque: true,
        escala: escala2,
        repertorio: [
            { numero: 1, titulo: 'Sem Musica', info: 'Culto especial' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Sem Materiais', descricao: 'Culto especial', linkDownload: './material/' },
        ]
    },
    {
        id: 'culto-21-mar',
        dataCurta: '21 Mar',
        dataCompleta: '21 de Março',
        destaque: false,
        escala: escala3,
        repertorio: [
            { numero: 1, titulo: 'Tua Alegria', info: 'Drops • Tom: B' },
            { numero: 2, titulo: 'Teu Amor Não Falha', info: 'Paulo César Baruk • Tom: F#m' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Tua Alegria', descricao: 'Cifra', linkDownload: './material/Tua Alegria.pdf' },
            { tipo: 'pdf', nome: 'Teu Amor Não Falha', descricao: 'Cifra', linkDownload: './material/Teu Amor Não Falha.pdf' },
            //{ tipo: 'audio', nome: 'Guia Soprano', descricao: 'Áudio MP3', linkDownload: './arquivos/guia-soprano.mp3' }
        ]
    },
    {
        id: 'culto-28-mar',
        dataCurta: '28 Mar',
        dataCompleta: '28 de Março',
        destaque: false,
        escala: escala4,
        repertorio: [
            { numero: 1, titulo: 'Tua Alegria', info: 'Drops • Tom: B' },
            { numero: 2, titulo: 'Teu Amor Não Falha', info: 'Paulo César Baruk • Tom: F#m' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Tua Alegria', descricao: 'Cifra', linkDownload: './material/Tua Alegria.pdf' },
            { tipo: 'pdf', nome: 'Teu Amor Não Falha', descricao: 'Cifra', linkDownload: './material/Teu Amor Não Falha.pdf' },
            //{ tipo: 'audio', nome: 'Guia Soprano', descricao: 'Áudio MP3', linkDownload: './arquivos/guia-soprano.mp3' }
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