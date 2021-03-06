window.onload = loadMaterial;

var materialList = [];
var material_count = document.getElementById("material_count").innerText;
material_count = material_count.split(',');
var m_name = document.getElementById("m_name").innerText;
m_name = document.split(',');
var m_maxNum = document.getElementById("m_maxNum").innerText;
m_maxNum = m_maxNum.split(',');
var m_num = document.getElementById("m_num").innerText;
m_num = m_num.split(',');

for (let i in material_count)
{
    materialList[i] = {
        name: m_name[i],
        maxNum: m_maxNum[i],
        num: m_num[i]
    }
}

var userStatus = document.getElementById("userStatus").innerText; // 교수인지(0), 학생인지(1)

var subjectName= document.getElementById("subjectName_value").innerText; // 과목명 동적으로 넣어주기

var subjectColor=document.getElementById("subjectColor"); // 과목 색상
subjectColor.style.background = document.getElementById("subjectColor_value").innerText; // 과목 색상 동적으로 넣어주기

var add = document.getElementById("add");
var closeButton = document.getElementById("close");
var submitButton = document.getElementById("submit");

add.addEventListener("click",popUp);
closeButton.addEventListener("click",popOff);
submitButton.addEventListener("click",submit);

function loadMaterial(){
    var content = document.getElementById("content");
    var add = document.getElementById("add");
    var newBox;
    var newBlock;
    var newName;

    for(var i = 0 ; i < materialList.length ; i++){
        newBox = document.createElement("div");
        newBox.setAttribute("class","box");
        content.insertBefore(newBox,add);

        newBlock = document.createElement("button");
        newBlock.setAttribute("class","block");
        newBlock.innerHTML="aaa";
        newBox.appendChild(newBlock);

        newName = document.createElement("div");
        newName.setAttribute("class","name");

        newName.innerHTML = materialList[i].name;
        newBox.appendChild(newName);        
    }
}

function popUp(){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modal").style.justifyContent = "center";
    document.getElementById("modal").style.alignItems = "center";
}

function popOff(){
    document.getElementById("modal").style.display="none";
}

function submit(){
    if(userStatus == 0) { // 교수
        var isFull = false; 
        
        // isFull 검사(이미지 제외)

        if(!isFull){
            var newBox = document.createElement("div");
            var newBlock = document.createElement("div");
            var newName = document.createElement("div");
            newBox.setAttribute("class","box");
            newBlock.setAttribute("class","block");
            newName.setAttribute("class","name");

            var one = document.getElementById("content");
            content.insertBefore(newBox,add);
            newBox.appendChild(newBlock);
            newBox.appendChild(newName);

            document.getElementById("modal").style.display="none";    
        }

        else{
            alert("alert");
        }
    }

    else { // 학생
        document.getElementById("modal").style.display="none";
    }
}