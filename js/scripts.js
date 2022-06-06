const head = document.getElementById("topname");
let namecount = 0


function namechange() {
    const fonts = ['Roboto', 'Roboto Mono', 'Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT', 'Comic Sans'];
    const random = Math.floor(Math.random() * fonts.length);

        head.style.fontFamily = fonts[random];



        ++namecount;
}

