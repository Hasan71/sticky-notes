const addButton = document.getElementById('add');

addButton.addEventListener('click', () => addNewNote('hello'));

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
        <button class="edit"> <i class="fas fa-edit"></i></button>
        <button class="delete"> <i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden": ""}"></textarea>
    `

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('.textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteButton.addEventListener('click', () =>{
        note.remove();
    });

    editButton.addEventListener('click', () =>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    });

    document.body.appendChild(note);
};