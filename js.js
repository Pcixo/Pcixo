(function ($)
{
    const test = [
    {
        task: 'Столиця України',
        answer: ['Київ', 'Львів', 'Харків', 'Тернопіль', ]
    },
    {
        task: 'коли в Україні вперше відсвяткували День незалежності?',
        answer: ['24 серпня 1991', '17 липня 1991', '1 грудня 1991', '18 червня 1991', ],
    },
    {
        task: 'В якій області знаходиться "Українська Сахара" - найбільша пустеля в Європі?',
        answer: ['Херсонська область', 'Житомирська область', 'Чернівецька область', 'Волинська область', ],
    },
    {
        task: 'Які були перші слова голови Верховної ради Олександра Мороза після прийняття Конституції?',
        answer: ['Є Конституція!', 'Слава Україні!', 'Щастя й удачі всім українським донькам й синам!', 'Браво!', ],
    },
    {
        task: 'До речі, чи знаєте ви, у якому містечку в Україні, знаходиться географічний центр Європи?',
        answer: ['Рахів (Закарпатская область)', 'Благодатне (Волинська область)', 'Степногірськ (Запорізька область)', 'Воловець (Закарпатська область)', ],
    },
    {
        task: 'На якому місці українска мова у переліку найкрасивіших мов світу?',
        answer: ['На третьому місці', 'На двадцять четвертому місці', 'На шістнадцятому місці', 'На пятому місці', ],
    },
    {
        task: 'У якому американському штаті офіційно відзначають День незалежності України?',
        answer: ['Міннесота', 'Техас', 'Невада', 'Флорида', ],
    },
    {
        task: 'В якій області була найбільша підтримка за незалежність України?',
        answer: ['Тернопільській області', 'Івано-Франківській області', 'Черкаській області', 'Львівській області', ],
    },
    {
        task: 'Одним із державних символів кожної країни є гімн. А ким був автор музики нашого гімну Михайло Вербицький?',
        answer: ['Священиком', 'Намазувальником сірникових коробок', 'Варником шубного клаптя', 'Агрономом', ],
    },
    {
        task: 'В якому виді спорту незалежна Україна має найбільше Олімпійських нагород (зокрема, і золотих)?',
        answer: ['Спортивна гімнастика', 'Плавання', 'Боротьба', 'Важка атлетика', ],
    }, ]
    var arr = [0, 1, 2, 3];

    function shuffle(arr)
    {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
    random = shuffle(arr);
    var k = 1;
    var results = 0;
    var testNumber = 1;
    var correctAnswer = false;
    var rightAnswerNumber = 0;
    var rightAnswer = test[rightAnswerNumber].answer[0];


    $('.test-question').text(test[0].task);
    $('#a1').text(test[0].answer[random[0]]);
    $('#a2').text(test[0].answer[random[1]]);
    $('#a3').text(test[0].answer[random[2]]);
    $('#a4').text(test[0].answer[random[3]]);

    var a1 = $('#a1').text();
    var a2 = $('#a2').text();
    var a3 = $('#a3').text();
    var a4 = $('#a4').text();


    $('.accept').click(function ()
    {
        testNumber++
        if (correctAnswer == true)
        {
            results++
        }
        if (k == 10)
        {
            alert('Ти відповів правильно на: ' + results + ' запитання');
            $('.accept').attr('disabled', true);
        }

        $('.task-number').text(testNumber);
        $('.test-question').text(test[k].task);
        $('#a1').text(test[k].answer[random[0]]);
        $('#a2').text(test[k].answer[random[1]]);
        $('#a3').text(test[k].answer[random[2]]);
        $('#a4').text(test[k].answer[random[3]]);

        a1 = $('#a1').text();
        a2 = $('#a2').text();
        a3 = $('#a3').text();
        a4 = $('#a4').text();


        $('.accept').attr('disabled', true);
        $('.answer-row').css("background", '#fff');
        k++;
        rightAnswerNumber++;
        shuffle(random);
        rightAnswer = test[rightAnswerNumber].answer[0];
        console.log(results);
        return;

    });


    $('#a1').click(function ()
    {
        $('.answer-row').css("background", '#fff');
        correctAnswer = false;
        if (a1 == rightAnswer)
        {
            correctAnswer = true;
        }
        $('.accept').removeAttr('disabled');
        $(this).css("background", '#999');
        console.log(correctAnswer, a1, rightAnswer);
        

    });

    $('#a2').click(function ()
    {
        $('.answer-row').css("background", '#fff');
        correctAnswer = false;
        if (a2 == rightAnswer)
        {
            correctAnswer = true;

        }
        $(this).css("background", '#999');
        $('.accept').removeAttr('disabled');
        console.log(correctAnswer, a2, rightAnswer);
    });

    $('#a3').click(function ()
    {
        $('.answer-row').css("background", '#fff');
        correctAnswer = false;

        if (a3 == rightAnswer)
        {
            correctAnswer = true;
        }

        $(this).css("background", '#999');
        $('.accept').removeAttr('disabled');
        console.log(correctAnswer, a3, rightAnswer);

    });

    $('#a4').click(function ()
    {
        $('.answer-row').css("background", '#fff');
        correctAnswer = false;

        if (a4 == rightAnswer)
        {
            correctAnswer = true;
        }

        $(this).css("background", '#999');
        $('.accept').removeAttr('disabled');
        console.log(correctAnswer, a4, rightAnswer);

    });


})(jQuery);