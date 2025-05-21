function showstatus(text, color) {
    $('#status').stop().slideUp().css('color', color).html(text).slideDown().delay(2000).slideUp()
}

window.onbeforeunload = function () {
    if (navigator.onLine) {} else {
        showstatus('<marquee>No network connection. Please do not refresh until this message is disappear</marquee>', 'red')
    }
}

window.oncontextmenu = function () {
    showstatus('Right click is disabled', '#F44336');
    return false
}

shortcut.add('CTRL+U', function () {
    showstatus('View source is disabled!', '#F44336')
}),
shortcut.add('CTRL+Shift+I', function () {
    showstatus('Inspect Element is disabled!', '#F44336')
}),
shortcut.add('CTRL+Shift+J', function () {
    showstatus('JS Console is disabled!', '#F44336')
}),
shortcut.add('CTRL+Shift+C', function () {
    showstatus('Inspect Element is disabled!', '#F44336')
}),
shortcut.add('F12', function () {
    showstatus('JS Console is disabled!', '#F44336')
}),
shortcut.add('Meta+Alt+U', function () {
    showstatus('View source is disabled!', '#F44336')
}),
shortcut.add('Meta+Alt+I', function () {
    showstatus('Inspect Element is disabled!', '#F44336')
}),
shortcut.add('Meta+Alt+J', function () {
    showstatus('JS Console is disabled!', '#F44336')
}),
shortcut.add('Meta+Shift+C', function () {
    showstatus('Inspect Element is disabled!', '#F44336')
}),
shortcut.add('Meta+P', function () {
    showstatus('Preparing to print...', 'white');
    setTimeout(function () {
        window.print()
    }, 3000)
}),
shortcut.add('Ctrl+P', function () {
    showstatus('Preparing to print...', 'white');
    setTimeout(function () {
        window.print()
    }, 3000)
});