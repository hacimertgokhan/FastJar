const { paperlinks } = require('./assets/json/jars.json');
const compile = JSON.stringify(paperlinks);

function link(int) {jsonData = JSON.parse(compile);     return jsonData[int].link;}
function name(int) {jsonData = JSON.parse(compile);     return jsonData[int].name;}
function slide(){document.getElementById("navList").classList.toggle("on");}
function download(fileUrl, fileName) {console.log("Event `DOWNLOAD` called...");const a = document.createElement("a");a.href = fileUrl;a.setAttribute("download", fileName);a.click();}

function paper_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.19") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.19.1/builds/111/downloads/paper-1.19.1-111.jar', 'server.jar');
    } else if(verValue === "1.18") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar', 'server.jar');
    } else if(verValue === "1.17") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.17.1/builds/411/downloads/paper-1.17.1-411.jar', 'server.jar');
    } else if(verValue === "1.16") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar', 'server.jar');
    } else if(verValue === "1.15") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar', 'server.jar');
    } else if(verValue === "1.14") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar', 'server.jar');
    } else if(verValue === "1.13") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar', 'server.jar');
    } else if(verValue === "1.12") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar', 'server.jar');
    } else if(verValue === "1.11") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar', 'server.jar');
    } else if(verValue === "1.10") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar', 'server.jar');
    } else if(verValue === "1.9") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar', 'server.jar');
    } else if(verValue === "1.8") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar', 'server.jar');
    }
}

function bukkit_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.19") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.19.1/builds/111/downloads/paper-1.19.1-111.jar', 'server.jar');
    } else if(verValue === "1.18") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar', 'server.jar');
    } else if(verValue === "1.17") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.17.1/builds/411/downloads/paper-1.17.1-411.jar', 'server.jar');
    } else if(verValue === "1.16") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar', 'server.jar');
    } else if(verValue === "1.15") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar', 'server.jar');
    } else if(verValue === "1.14") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar', 'server.jar');
    } else if(verValue === "1.13") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar', 'server.jar');
    } else if(verValue === "1.12") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar', 'server.jar');
    } else if(verValue === "1.11") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar', 'server.jar');
    } else if(verValue === "1.10") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar', 'server.jar');
    } else if(verValue === "1.9") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar', 'server.jar');
    } else if(verValue === "1.8") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar', 'server.jar');
    }
}

function spigot_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.19") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.19.1/builds/111/downloads/paper-1.19.1-111.jar', 'server.jar');
    } else if(verValue === "1.18") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar', 'server.jar');
    } else if(verValue === "1.17") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.17.1/builds/411/downloads/paper-1.17.1-411.jar', 'server.jar');
    } else if(verValue === "1.16") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar', 'server.jar');
    } else if(verValue === "1.15") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar', 'server.jar');
    } else if(verValue === "1.14") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar', 'server.jar');
    } else if(verValue === "1.13") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar', 'server.jar');
    } else if(verValue === "1.12") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar', 'server.jar');
    } else if(verValue === "1.11") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar', 'server.jar');
    } else if(verValue === "1.10") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar', 'server.jar');
    } else if(verValue === "1.9") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar', 'server.jar');
    } else if(verValue === "1.8") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar', 'server.jar');
    }
}


function vanilla_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.20") {
        download('https://piston-data.mojang.com/v1/objects/84194a2f286ef7c14ed7ce0090dba59902951553/server.jar', '1.20-server.jar');
    } else if(verValue === "1.19") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.19.1/builds/111/downloads/paper-1.19.1-111.jar', '1.19-server.jar');
    } else if(verValue === "1.18") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar', 'server.jar');
    } else if(verValue === "1.17") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.17.1/builds/411/downloads/paper-1.17.1-411.jar', 'server.jar');
    } else if(verValue === "1.16") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar', 'server.jar');
    } else if(verValue === "1.15") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar', 'server.jar');
    } else if(verValue === "1.14") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar', 'server.jar');
    } else if(verValue === "1.13") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar', 'server.jar');
    } else if(verValue === "1.12") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar', 'server.jar');
    } else if(verValue === "1.11") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar', 'server.jar');
    } else if(verValue === "1.10") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar', 'server.jar');
    } else if(verValue === "1.9") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar', 'server.jar');
    } else if(verValue === "1.8") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar', 'server.jar');
    }
}