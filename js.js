/* Это объявление переменной, мы наши кнопку по тегу */
var button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Мур мур')
})
