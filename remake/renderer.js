const { paperlinks } = require('./assets/json/jars.json');
const compile = JSON.stringify(paperlinks);

function link(int) {jsonData = JSON.parse(compile);     return jsonData[int].link;}
function name(int) {jsonData = JSON.parse(compile);     return jsonData[int].name;}
function slide(){document.getElementById("navList").classList.toggle("on");}
function download(fileUrl, fileName) {console.log("Event `DOWNLOAD` called...");const a = document.createElement("a");a.href = fileUrl;a.setAttribute("download", fileName);a.click();}

function setColor() {
    document.getElementById("colorized").style.color = "cadetblue";
}

function paper_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.20") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.19.1/builds/111/downloads/paper-1.19.1-111.jar', '1.20-server.jar');
    } else if(verValue === "1.19") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.19.1/builds/111/downloads/paper-1.19.1-111.jar', '1.19-server.jar');
    } else if(verValue === "1.18") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar', '1.18-server.jar');
    } else if(verValue === "1.17") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.17.1/builds/411/downloads/paper-1.17.1-411.jar', '1.17-server.jar');
    } else if(verValue === "1.16") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar', '1.16-server.jar');
    } else if(verValue === "1.15") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar', '1.15-server.jar');
    } else if(verValue === "1.14") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar', '1.14-server.jar');
    } else if(verValue === "1.13") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar', '1.13-server.jar');
    } else if(verValue === "1.12") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar', '1.12-server.jar');
    } else if(verValue === "1.11") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar', '1.11-server.jar');
    } else if(verValue === "1.10") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar', '1.10-server.jar');
    } else if(verValue === "1.9") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar', '1.9-server.jar');
    } else if(verValue === "1.8") {
        download('https://api.papermc.io/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar', '1.8-server.jar');
    }
}

function bukkit_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.20") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.20.1.jar', '1.20-server.jar');
    } else if(verValue === "1.19") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.19.jar', '1.19-server.jar');
    } else if(verValue === "1.18") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.18.jar', '1.18-server.jar');
    } else if(verValue === "1.17") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.17.jar', '1.17-server.jar');
    } else if(verValue === "1.16") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.16.5.jar', '1.16-server.jar');
    } else if(verValue === "1.15") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.15.jar', '1.15-server.jar');
    } else if(verValue === "1.14") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.14.jar', '1.14-server.jar');
    } else if(verValue === "1.13") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.13.jar', '1.13-server.jar');
    } else if(verValue === "1.12") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.12.jar', '1.12-server.jar');
    } else if(verValue === "1.11") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.11.jar', '1.11-server.jar');
    } else if(verValue === "1.10") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.10.jar', '1.10-server.jar');
    } else if(verValue === "1.9") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.9.jar', '1.9-server.jar');
    } else if(verValue === "1.8") {
        download('https://download.getbukkit.org/craftbukkit/craftbukkit-1.8.jar', '1.8-server.jar');
    }
}

function spigot_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.20") {
        download('https://download.getbukkit.org/spigot/spigot-1.20.1.jar', '1.20-server.jar');
    } else if(verValue === "1.19") {
        download('https://download.getbukkit.org/spigot/spigot-1.19.jar', '1.19-server.jar');
    } else if(verValue === "1.18") {
        download('https://download.getbukkit.org/spigot/spigot-1.18.jar', '1.18-server.jar');
    } else if(verValue === "1.17") {
        download('https://download.getbukkit.org/spigot/spigot-1.17.jar', '1.17-server.jar');
    } else if(verValue === "1.16") {
        download('https://download.getbukkit.org/spigot/spigot-1.16.5.jar', '1.16-server.jar');
    } else if(verValue === "1.15") {
        download('https://download.getbukkit.org/spigot/spigot-1.15.jar', '1.15-server.jar');
    } else if(verValue === "1.14") {
        download('https://download.getbukkit.org/spigot/spigot-1.14.jar', '1.14-server.jar');
    } else if(verValue === "1.13") {
        download('https://download.getbukkit.org/spigot/spigot-1.13.jar', '1.13-server.jar');
    } else if(verValue === "1.12") {
        download('https://download.getbukkit.org/spigot/spigot-1.12.jar', '1.12-server.jar');
    } else if(verValue === "1.11") {
        download('https://download.getbukkit.org/spigot/spigot-1.11.jar', '1.11-server.jar');
    } else if(verValue === "1.10") {
        download('https://download.getbukkit.org/spigot/spigot-1.10.jar', '1.10-server.jar');
    } else if(verValue === "1.9") {
        download('https://download.getbukkit.org/spigot/spigot-1.9.jar', '1.9-server.jar');
    } else if(verValue === "1.8") {
        download('https://download.getbukkit.org/spigot/spigot-1.8.jar', '1.8-server.jar');
    }
}


function vanilla_downloadServerFile() {
    const verValue = document.getElementById("versionValue").value;
    if(verValue === "1.20") {
        download('https://www.mcjars.com/get/vanilla-1.20.jar', '1.20-server.jar');
    } else if(verValue === "1.19") {
        download('https://www.mcjars.com/get/vanilla-1.19.jar', '1.19-server.jar');
    } else if(verValue === "1.18") {
        download('https://www.mcjars.com/get/vanilla-1.18.jar', '1.18-server.jar');
    } else if(verValue === "1.17") {
        download('https://www.mcjars.com/get/vanilla-1.17.jar', '1.17-server.jar');
    } else if(verValue === "1.16") {
        download('https://www.mcjars.com/get/vanilla-1.16.jar', '1.16-server.jar');
    } else if(verValue === "1.15") {
        download('https://www.mcjars.com/get/vanilla-1.15.jar', '1.15-server.jar');
    } else if(verValue === "1.14") {
        download('https://www.mcjars.com/get/vanilla-1.14.jar', '1.14-server.jar');
    } else if(verValue === "1.13") {
        download('https://www.mcjars.com/get/vanilla-1.13.jar', '1.13-server.jar');
    } else if(verValue === "1.12") {
        download('https://www.mcjars.com/get/vanilla-1.12.jar', '1.12-server.jar');
    } else if(verValue === "1.11") {
        download('https://www.mcjars.com/get/vanilla-1.11.jar', '1.11-server.jar');
    } else if(verValue === "1.10") {
        download('https://www.mcjars.com/get/vanilla-1.10.jar', '1.10-server.jar');
    } else if(verValue === "1.9") {
        download('https://www.mcjars.com/get/vanilla-1.9.jar', '1.9-server.jar');
    } else if(verValue === "1.8") {
        download('https://www.mcjars.com/get/vanilla-1.8.jar', '1.8-server.jar');
    }
}