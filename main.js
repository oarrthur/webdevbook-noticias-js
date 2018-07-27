var noticias = [];


function atualizarLista(noticia) {
    var lista = $('#noticias-recentes-list');
    var li = $('<li id="noticia-' + noticia.id + '">');
    li.addClass('noticia');
    var p_titulo = $('<p>');
    p_titulo.addClass('titulo');
    p_titulo.attr('onclick', 'mostrarNoticia(' + noticia.id + ')');
    p_titulo.html(noticia.titulo);
    var p_conteudo = $('<p>');
    p_conteudo.addClass('conteudo');
    p_conteudo.html(noticia.conteudo
        + '<br>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>' + '<br>'
        + '<button onclick="mostrarAutor(' + noticia.id + ')">Mostrar dados do autor</button>' + '<br>'
        + '<button onclick="ocultarAutor(' + noticia.id + ')">Ocultar dados do autor</button>');
    var p_autor = $('<p>');
    p_autor.addClass('autor');
    p_autor.html(
        noticia.nome
        + '<br>' +
        noticia.email
        + '<br>' +
        noticia.data_publicacao);
    li.append(p_titulo, p_conteudo, p_autor);
    p_autor.hide();
    p_conteudo.hide();
    if (noticia.data_publicacao != undefined) {
        if (noticia.data_publicacao > noticia.data_atual || noticia.data_publicacao < noticia.data_atual) {
            alert("Sua notícia foi salva, mas ainda não foi publicada! Aguarde.");
        }
        else {
            lista.append(li);
        }
    }
}

function salvar(form) {
    var titulo = $('#frm-titulo').val();
    var conteudo = $('#frm-conteudo').val();
    var nome = $('#frm-nome').val();
    var email = $('#frm-email').val();
    var data_publicacao = new Date($('#frm-data').val()).toDate('dd/mm/yyyy hh:ii');
    var data_atual = new Date().toDate('dd/mm/yyyy hh:ii');
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo,
        nome: nome,
        email: email,
        data_publicacao: data_publicacao,
        data_atual: data_atual
    };
    noticias.unshift(noticia);
    var list = document.getElementById('noticias-recentes-list');
    list.innerHTML = '';
    for (var i = 0; i < noticias.length; i++) {
        atualizarLista(noticias[i])
    };
    //form.reset();
}

function mostrarNoticia(id) {
    $('.conteudo', '#noticia-' + id).show();
}

function ocultarNoticia(id) {
    $('.conteudo', '#noticia-' + id).hide();
}

function ocultarAutor(id) {
    $('.autor', '#noticia-' + id).hide();
}

function mostrarAutor(id) {
    $('.autor', '#noticia-' + id).show();
}

