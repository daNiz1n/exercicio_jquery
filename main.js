$(document).ready(function() {
    const $formulario = $('#formulario');
    const $campoTexto = $('#campo-texto');
    const $lista = $('#lista');

    console.log('teste');

    $formulario.on('submit', function(e) {
        e.preventDefault();

        const texto = $campoTexto.val().trim();

        if (texto !== "") {
            $lista.show();

            const $novoItem = $('<li></li>').text(texto);

            $novoItem.on('click', function() {
                $(this).css('text-decoration', $(this).css('text-decoration') === 'line-through' ? 'none' : 'line-through');
            });

            $lista.append($novoItem);
            $campoTexto.val('');
        }
    });
});