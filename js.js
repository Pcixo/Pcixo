(function ($)
{
    const test = [
    {
        task: 'Столиця України',
        answer: ['Київ', 'Львів', 'Харків', 'Тернопіль']
    },
    {
        task: 'коли в Україні вперше відсвяткували День незалежності?',
        answer: ['24 серпня 1991', '17 липня 1991', '1 грудня 1991', '18 червня 1991'],
    },
    {
        task: 'В якій області знаходиться "Українська Сахара" - найбільша пустеля в Європі?',
        answer: ['Херсонська область', 'Житомирська область', 'Чернівецька область', 'Волинська область'],
    },
    {
        task: 'Які були перші слова голови Верховної ради Олександра Мороза після прийняття Конституції?',
        answer: ['Є Конституція!', 'Слава Україні!', 'Щастя й удачі всім українським донькам й синам!', 'Браво!'],
    },
    {
        task: 'До речі, чи знаєте ви, у якому містечку в Україні, знаходиться географічний центр Європи?',
        answer: ['Рахів (Закарпатская область)', 'Благодатне (Волинська область)', 'Степногірськ (Запорізька область)', 'Воловець (Закарпатська область)'],
    },
    {
        task: 'На якому місці українска мова у переліку найкрасивіших мов світу?',
        answer: ['На третьому місці', 'На двадцять четвертому місці', 'На шістнадцятому місці', 'На пятому місці'],
    },
    {
        task: 'У якому американському штаті офіційно відзначають День незалежності України?',
        answer: ['Міннесота', 'Техас', 'Невада', 'Флорида'],
    },
    {
        task: 'В якій області була найбільша підтримка за незалежність України?',
        answer: ['Тернопільській області', 'Івано-Франківській області', 'Черкаській області', 'Львівській області'],
    },
    {
        task: 'Одним із державних символів кожної країни є гімн. А ким був автор музики нашого гімну Михайло Вербицький?',
        answer: ['Священиком', 'Намазувальником сірникових коробок', 'Варником шубного клаптя', 'Агрономом'],
    },
    {
        task: 'В якому виді спорту незалежна Україна має найбільше Олімпійських нагород (зокрема, і золотих)?',
        answer: ['Спортивна гімнастика', 'Плавання', 'Боротьба', 'Важка атлетика'],
    }, ]
    let arr = [0, 1, 2, 3];

    function shuffle(arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
    
    function testText() {
        $('.test-question').text(test[zeroNumber].task)
        $('.task-number').text(questionNumber);
        $.each(test[zeroNumber].answer, function(i, item) {
            $('.answer-container').append('<li class="answer-row">' + item + '</li>' )
        });
        }
    
    function answerRowClick() { 
        
    $('.answer-row').click (function(){
        let rightAnswer = test[zeroNumber].answer[0];
        let answerRow = $('.answer-row');
        let target = $(this).attr('data-target');
        let $target = $('#' + target);
        let answerText = $target.text();
        if (target == '') {
            return;
        }
        if (answerText == rightAnswer)
        {
            correctAnswer = true;
        }else{
            correctAnswer = false;
        }
        
        if ($target.click) {
            $(answerRow).removeClass('active');
            $(this).addClass('active');
        }
        $('.accept').removeAttr('disabled');
        console.log(answerText);
        console.log(correctAnswer);
        console.log($target);
        
        });
    }
    
    function answerRowAttrAdd() {
        let i = 0;
        $('.answer-container li').each(function(){
            i++
            $(this).attr('data-target', 'a' + i);
            $(this).attr('id', 'a' + i);
        });
    }
    
    random = shuffle(arr);
    let zeroNumber = 0;
    let questionNumber = 1;
    let results = 0;
    let correctAnswer = false;
    let rightAnswer = test[zeroNumber].answer[0];
    
    testText();
    answerRowClick();
    answerRowAttrAdd();
        
    $('.accept').click(function () {
        zeroNumber++;
        questionNumber++;
        $('.answer-container li').remove();
        
        if (correctAnswer == true)
        {
            results++
        }
        if (zeroNumber == 10)
        {
            alert('Ти відповів правильно на: ' + results + ' запитання');
            $('.accept').attr('disabled', true);
            
        }
        testText();
        answerRowClick();
        answerRowAttrAdd();
        $('.accept').attr('disabled', true);
    });
    
   

})(jQuery);