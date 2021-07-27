let data = [
    {
        photo: 'img/normalPic/nature.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    },
    {
        photo: 'img/normalPic/tree.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    },
    {
        photo: 'img/normalPic/ozoneLayer.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    },
    {
        photo: 'img/normalPic/eye.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    },
    {
        photo: 'img/normalPic/man.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    },
    {
        photo: 'img/normalPic/sunset.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    },
    {
        photo: 'img/normalPic/candle.jpg',
        shortTitle: 'addad',
        title: 'Kenynnnynynyn',
        description: 'uehgtqkerhbjveutvrgfjwahbsf  dsfar fhe gh ehghebegb e vefj vefqv qjv fqjv fvdbndd abhd hgnhdnajafdojehvnhnj  rjwq fe '
    },
    {
        photo: 'img/normalPic/beach.jpg',
        shortTitle: 'addad',
        title: 'sadasd',
        description: 'asd'
    }
]

let currentPhoto = 0



let loadPhoto = ((photoNumber) => {
    $(".tumbPic").css("margin", "1vmin")
    $('#photo').attr('src', data[photoNumber].photo)
    $('#contentTitle').html(data[photoNumber].title)
    $('#contentPar').html(data[photoNumber].description)
    $(`[data-id='${photoNumber}']`).css("margin-bottom", "1.5vmin")
    $(`[data-id='${photoNumber}']`).css('margin-top', '0vmin')
    $("#link").trigger("hover");
})


$('#rightClick').click(() => {
    currentPhoto++;
    if (currentPhoto <= 7 ) {
        loadPhoto(currentPhoto)
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto)
    }
})

$('#leftClick').click(() => {
    currentPhoto--;
    if (currentPhoto >= 0 ) {
        loadPhoto(currentPhoto)
    } else {
        currentPhoto = 7;
        loadPhoto(currentPhoto)
    }
})

data.forEach((element, index) => {
    $('#selectors').append(`<div class="tumbPic" data-id="${index}">
                            <img src="${element.photo}" alt="" data-number="${index}">
                            <div class="title">${element.shortTitle}</div>
                            </div>`)
})


$('.tumbPic').click((event) => {
    let numberData = $(event.target).attr('data-number')

    currentPhoto = numberData;
    loadPhoto(currentPhoto)
})

loadPhoto(currentPhoto)
