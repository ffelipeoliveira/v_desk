import '../assets/css/AddNoteButton.css'
import AddIcon from '../assets/icons/AddIcon';

function Remove(el,toDoCounter) {
    const child = el
    child.remove();
    return(toDoCounter--)
}

function AddNoteButton() {
    let toDoCounter = 0;
    function addNote() {
       if (toDoCounter < 20) {
            const randomkaomoji = (["(×﹏×)", "(￢_￢;)", "(✿◠‿◠)", "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "ᕕ( ᐛ )ᕗ", "(¬ ¬ )", "( Φ ω Φ )", "U・ᴥ・U", "／(≧ x ≦)＼", "／(˃ᆺ˂)＼", "( ˘ ɜ˘) ♬♪♫", "(^_^♪)", "(ˊ〇ˋ*)", "(`･Θ･´)", "／(^ × ^)＼"])[Math.floor(Math.random() * 14)];

            const todo = document.createElement("div");
            todo.classList.add("ToDo", "ToDo" + toDoCounter);

            todo.innerHTML = 
                        ('<div class="ToDoHeader"> \
                            <form action = ""> \
                                <input id = input' + toDoCounter + ' placeholder = "Tarefa ' + toDoCounter + '")"> \
                                </input> \
                            </form> \
                            <button class = "close" onclick = "Remove(this,'+ toDoCounter +')"> \
                                X \
                            </button> \
                            </div> \
                            <span class = "input", role = "textbox" contenteditable>'+
                                randomkaomoji +
                            '</span>'
                        );
            toDoCounter++;

            document.getElementById("ToDos")?.appendChild(todo);
            
       } 
    }

    return (
        <button id="Add" onClick={addNote}>
            <AddIcon></AddIcon>
        </button>
    );
}

export default AddNoteButton;