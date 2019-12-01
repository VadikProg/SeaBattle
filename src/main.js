/*
  Main function
*/
let shots = 0;
const n = 8;
let sea = [
    [1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 1]
]

window.onload = function() {
    //Создания поля боя

    //--------
    let clickedOn = document.getElementsByTagName("td"); //Массив с элементами тега <td>
    for(let i = 0; i < clickedOn.length; i++){
        clickedOn[i].onclick = openGr; //Привязка каждому элементу обработчика(openGr) события .onclick
    }
}

//Обработчик события

/*
    0 - пустая клетка
    1 - уничтожен
    2 - пусто
 */

function openGr(eventObj){
    shots++;
    let tableTar = eventObj.target;
    let nameId = tableTar.id;
    let ides = nameId.slice(6).split('-');
    let x = ides[0];
    let y = ides[1];

    if(sea[x][y] == 0){
        alert("Промах");

        let element = document.getElementById('table-' + x + '-' + y);
        element.textContent = "#";
        sea[x][y] = 2;

    }else if(sea[x][y] == 1){
        let element = document.getElementById('table-' + x + '-' + y);
        element.textContent = "X";
        sea[x][y] = 3;
        let win = 1;
        for(let i = 0; i < n; i++){
            for (let j = 0; j < n; j++){
                if(sea[i][j] == 1){
                    win = 0;
                    break;
                    break;
                }
            }
        }
        if(win == 1){
            alert(`
            Победа вместо обеда
            Выстрелов: ${shots}`);
            let scoreBill = document.getElementById("scoreDesk");
            scoreBill.textContent = "Ваш счет " + shots;
        }else{
            alert("Попал");
        }

    }else if(sea[x][y] != 0){
        alert("Уже стрелял");
    }

}