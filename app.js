const ESTRUTURA_BANDA = [
    { id: 'ministro', funcao: 'Ministro', icone: 'fa-microphone-alt', fullWidth: true },
    { id: 'vocal', funcao: 'Vocal/Back', icone: 'fa-microphone' },
    { id: 'guitarra', funcao: 'Guitarra', icone: 'fa-guitar' },
    { id: 'baixo', funcao: 'Baixo', icone: 'fa-guitar', flip: true },
    { id: 'bateria', funcao: 'Bateria', icone: 'fa-drum' },
    { id: 'teclado', funcao: 'Teclado', icone: 'fa-keyboard' },
    { id: 'violao', funcao: 'Violão', icone: 'fa-guitar' },
];

function gerarEscala(membros = {}) {
    return ESTRUTURA_BANDA.map(papel => ({
        ...papel,
        nome: membros[papel.id] || '-'
    }));
}

const dadosDosCultos = [
    {
        id: 'culto-02-mai',
        dataCurta: '02 Mai',
        dataCompleta: '02 de Maio',
        destaque: false,
        escala: gerarEscala({
            ministro: 'Gabi',
            vocal: 'Poliana',
            guitarra: 'Rafael',
            baixo: 'Henrique',
            bateria: 'Muryllo',
            teclado: 'Ana',
            violao: 'Gabi'
        }),
        repertorio: [
            { numero: 1, titulo: 'Louvor e Honra', info: 'Ron Kenoly e Baruk • Tom: D • BPM: 92' },
            { numero: 2, titulo: 'TEU POVO', info: 'O Canto das Igrejas • Tom: Ab • BPM: 68' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Louvor e Honra - Ron Kenoly e Baruk', descricao: 'Cifra', linkDownload: './material/Louvor e Honra - Ron Kenoly e Baruk.pdf' },
            { tipo: 'pdf', nome: 'TEU POVO', descricao: 'Cifra', linkDownload: './material/Teu Povo.pdf' }
        ]
    },
    {
        id: 'culto-09-mai',
        dataCurta: '09 Mai',
        dataCompleta: '09 de Maio',
        destaque: false,
        escala: gerarEscala({
            ministro: 'Dyulian',
            vocal: 'Dyulian',
            guitarra: 'Rafael',
            baixo: 'Henrique',
            bateria: 'Muryllo',
            teclado: 'Helo',
            violao: 'Fernando'
        }),
        repertorio: [
            { numero: 1, titulo: 'Teu Amor não Falha', info: 'Nivea Soares • Tom: Am' },
            { numero: 2, titulo: 'Pra Onde Eu Irei?', info: 'Morada • Tom: E' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Teu Amor não Falha', descricao: 'Cifra', linkDownload: './material/Cifra Club - Nívea Soares - Teu Amor Não Falha.pdf' },
            { tipo: 'pdf', nome: 'Pra Onde Eu Irei?', descricao: 'Cifra', linkDownload: './material/Cifra Club - MORADA - Para Onde Eu Irei_.pdf' }
        ]
    },
    {
        id: 'culto-16-mai',
        dataCurta: '16 Mai',
        dataCompleta: '16 de Maio',
        destaque: false,
        escala: gerarEscala({
            ministro: 'Gabi',
            vocal: '-',
            guitarra: '-',
            baixo: '-',
            bateria: '-',
            teclado: '-',
            violao: 'Gabi'
        }),
        repertorio: [
            { numero: 1, titulo: 'Tua Alegria', info: 'Drops • Tom: B' },
            { numero: 2, titulo: 'Êxodo', info: 'Projeto Sola • Tom: Dm' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Tua Alegria', descricao: 'Cifra', linkDownload: './material/Tua Alegria.pdf' },
            { tipo: 'pdf', nome: 'Êxodo', descricao: 'Cifra', linkDownload: './material/Êxodo.pdf' }
        ]
    },
    {
        id: 'culto-23-mai',
        dataCurta: '23 Mai',
        dataCompleta: '23 de Maio',
        destaque: true,
        escala: gerarEscala({
            ministro: 'Gabi',
            vocal: 'Dyulian',
            guitarra: 'Rafael',
            baixo: 'Henrique',
            bateria: 'Muryllo',
            teclado: '-',
            violao: 'Gabi'
        }),
        repertorio: [
            { numero: 1, titulo: 'Tua Alegria', info: 'Drops • Tom: B' },
            { numero: 2, titulo: 'És Mais Forte', info: 'Hillsong • Tom: C' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'Tua Alegria', descricao: 'Cifra', linkDownload: './material/Tua Alegria.pdf' },
            { tipo: 'pdf', nome: 'És Mais Forte', descricao: 'Cifra', linkDownload: './material/És mais forte.pdf' }
        ]
    },
    {
        id: 'culto-30-mai',
        dataCurta: '30 Mai',
        dataCompleta: '30 de Maio',
        destaque: false,
        escala: gerarEscala({
            ministro: 'Gabi',
            vocal: 'Poliana',
            guitarra: 'Rafael',
            baixo: 'Henrique',
            bateria: 'Muryllo',
            teclado: 'Helo',
            violao: 'Gabi'
        }),
        repertorio: [
            { numero: 1, titulo: 'A Hora é Agora', info: 'IPALPHA NOVA • Tom: Bm' },
            { numero: 2, titulo: 'Êxodo', info: 'Projeto Sola • Tom: Dm' }
        ],
        materiais: [
            { tipo: 'pdf', nome: 'A Hora é Agora', descricao: 'Cifra', linkDownload: './material/A Hora é Agora.pdf' },
            { tipo: 'pdf', nome: 'Êxodo', descricao: 'Cifra', linkDownload: './material/Êxodo.pdf' }
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