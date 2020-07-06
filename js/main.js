

$('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed') //这样就知道点击的是那个按钮

    let idName = $button.parent().parent().attr('id');
    console.log(speed)
    console.log(idName)

    $button.addClass('active')
        .siblings('.active').removeClass('active') //如果有active(设置了按钮选中的阴影)样式则删掉样式

    // $('样式名称')可以通过变量来传入
    let className

    // $('样式名称').animate({ left: 改变的数值 }, 1000) 可以用变量来传入
    let leftmove5 = "+=5%"
    let leftmove_5 = "-=7%"

    // 对应修改每个按钮的人物速度
    if (speed === 'slow') {
        switch (idName) {
            case 'monkey':
                className = ".monkey"
                // 修改对应样式
                $(className).css("animation", "monkeymove 1500ms steps(8) infinite");
                // animate动画效果，向左平滑移动，花费1秒钟
                $(className).animate({ left: leftmove5 }, 1000)
                break
            case 'pig':
                className = ".pig"
                $(className).css("animation", "pigmove 1500ms steps(8) infinite");
                $(className).animate({ left: leftmove5 }, 1000)
                break
            case 'TangMonk':
                className = ".TangMonk"
                $(className).css("animation", "TangMonkmove 1500ms steps(8) infinite");
                $(className).animate({ left: leftmove5 }, 1000)
                break
            case 'ShaMonk':
                className = ".ShaMonk"
                $(className).css("animation", "ShaMonkmove 1500ms steps(8) infinite");
                $(className).animate({ left: leftmove5 }, 1000)
                break
        }
    }
    else if (speed === 'normal') {
        switch (idName) {
            case 'monkey':
                className = ".monkey"
                $(className).css("animation", "monkeymove 1000ms steps(8) infinite");
                break
            case 'pig':
                className = ".pig"
                $(className).css("animation", "pigmove 1000ms steps(8) infinite");
                break
            case 'TangMonk':
                className = ".TangMonk"
                $(className).css("animation", "TangMonkmove 1000ms steps(8) infinite");
                break
            case 'ShaMonk':
                className = ".ShaMonk"
                $(className).css("animation", "ShaMonkmove 1000ms steps(8) infinite");
                break
        }
    }
    else if (speed === 'fast') {
        switch (idName) {
            case 'monkey':
                className = ".monkey"
                $(className).css("animation", "monkeymove 500ms steps(8) infinite");
                $(className).animate({ left: leftmove_5 }, 1000)
                break
            case 'pig':
                className = ".pig"
                $(className).css("animation", "pigmove 500ms steps(8) infinite");
                $(className).animate({ left: leftmove_5 }, 1000)
                break
            case 'TangMonk':
                className = ".TangMonk"
                $(className).css("animation", "TangMonkmove 500ms steps(8) infinite");
                $(className).animate({ left: leftmove_5 }, 1000)
                break
            case 'ShaMonk':
                className = ".ShaMonk"
                $(className).css("animation", "ShaMonkmove 500ms steps(8) infinite");
                $(className).animate({ left: leftmove_5 }, 1000)
                break
        }
    }



})







